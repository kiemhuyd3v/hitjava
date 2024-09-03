"use strict";
cc._RF.push(module, 'efd21JpQ3BI1om0o4SIUbj2', 'OanTuTi.OanTuTiController');
// OanTuTi/OanTuTiScript/OanTuTi.OanTuTiController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var OanTuTi_PopupCoinTransfer_1 = require("./OanTuTi.PopupCoinTransfer");
var Http_1 = require("../../Loading/src/Http");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OanTuTiController = /** @class */ (function (_super) {
    __extends(OanTuTiController, _super);
    function OanTuTiController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblCoin = null;
        _this.lblBet = null;
        _this.btnBets = [];
        _this.btnPlayNow = null;
        _this.panelSelectBet = null;
        _this.players = null;
        _this.mePlayer = null;
        _this.otherPlayer = null;
        _this.panelSearchingMatch = null;
        _this.panelPlaying = null;
        _this.panelResult = null;
        //searching
        _this.lblSearching = null;
        _this.btnCancel = null;
        //playing
        _this.lblTime = null;
        _this.progressTime = null;
        _this.btnPlays = [];
        _this.sprPlaysActive = [];
        _this.sprPlaysNormal = [];
        //result
        _this.sprResults = [];
        _this.toggleAuto = null;
        _this.popups = [];
        _this.popupCoinTransfer = null;
        _this.listBet = [1000, 5000, 10000, 50000, 100000];
        _this.timePlaying = 10;
        _this.remainTime = 0;
        _this.lastBetValue = 0;
        _this.isPlaying = false;
        return _this;
    }
    OanTuTiController.prototype.start = function () {
        var _this = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            if (!_this.node.active)
                return;
            _this.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        ShootFishNetworkClient_1.default.getInstance().addListener(function (route, push) {
            if (!_this.node.active)
                return;
            var routesLog = ["OttOnMatching", "OttOnMatchStart", "OttOnMatchEnd", "OttOnMatchSolved"];
            if (routesLog.indexOf(route) >= 0) {
                //     console.log(route);
                //     console.log(push);
            }
            switch (route) {
                case "OttOnMatching":
                    {
                        var otherNickname = "";
                        var otherAvatar = "";
                        if (push["userId1"] == Configs_1.default.Login.UserIdFish) {
                            otherNickname = push["nickname2"];
                            otherAvatar = push["avatar2"];
                        }
                        else {
                            otherNickname = push["nickname1"];
                            otherAvatar = push["avatar1"];
                        }
                        _this.panelSelectBet.active = false;
                        _this.panelPlaying.active = false;
                        _this.players.active = true;
                        _this.lblSearching.string = "ĐÃ TÌM THẤY ĐỐI THỦ";
                        _this.btnCancel.node.active = false;
                        _this.otherPlayer.active = true;
                        _this.otherPlayer.getChildByName("lblNickname").getComponent(cc.Label).string = otherNickname;
                        _this.otherPlayer.getChildByName("sprAvatar").getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(otherAvatar);
                        _this.lblBet.string = "CƯỢC: " + (Math.floor(push["blind"] / 1000)) + "K";
                    }
                    break;
                case "OttOnMatchStart":
                    {
                        _this.panelSearchingMatch.active = false;
                        _this.panelPlaying.active = true;
                        _this.panelResult.active = false;
                        _this.players.active = true;
                        _this.remainTime = _this.timePlaying;
                        _this.lblTime.node.parent.active = true;
                        _this.progressTime.fillRange = 1;
                        for (var i = 0; i < _this.btnPlays.length; i++) {
                            _this.btnPlays[i].interactable = true;
                            _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = _this.sprPlaysActive[i];
                        }
                    }
                    break;
                case "OttOnMatchEnd": {
                    var result = push["result"]; ///result: 0: hoà, 1: player1 thắng, 2: player2 thắng
                    var changeCash1 = push["changeCash1"];
                    var changeCash2 = push["changeCash2"];
                    var blind = push["blind"];
                    var lblWin = _this.panelResult.getChildByName("lblWin");
                    var lblLose = _this.panelResult.getChildByName("lblLose");
                    if (push["userId1"] == Configs_1.default.Login.UserIdFish) {
                        if (result != 0) {
                            if (result == 1) {
                                lblWin.getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(changeCash1);
                            }
                            else {
                                lblLose.getComponent(cc.Label).string = Utils_1.default.formatNumber(-blind);
                            }
                        }
                        Configs_1.default.Login.CoinFish = push["cash1"];
                    }
                    else {
                        if (result != 0) {
                            if (result == 2) {
                                lblWin.getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(changeCash2);
                            }
                            else {
                                lblLose.getComponent(cc.Label).string = Utils_1.default.formatNumber(-blind);
                            }
                        }
                        Configs_1.default.Login.CoinFish = push["cash2"];
                    }
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    _this.scheduleOnce(function () {
                        _this.resetView();
                        if (_this.toggleAuto.isChecked) {
                            _this.selectBet(_this.lastBetValue);
                        }
                        else {
                            _this.isPlaying = false;
                        }
                    }, 5);
                }
                case "OttOnMatchSolved": {
                    _this.panelResult.active = true;
                    _this.lblTime.node.parent.active = false;
                    var result = push["result"]; ///result: 0: hoà, 1: player1 thắng, 2: player2 thắng
                    var choice1 = push["choice1"];
                    var choice2 = push["choice2"];
                    var meValue = _this.panelResult.getChildByName("meValue");
                    var otherValue = _this.panelResult.getChildByName("otherValue");
                    var meActive = meValue.getChildByName("active");
                    var otherActive = otherValue.getChildByName("active");
                    var lblWin = _this.panelResult.getChildByName("lblWin");
                    lblWin.active = false;
                    var lblLose = _this.panelResult.getChildByName("lblLose");
                    lblLose.active = false;
                    var hoa = _this.panelResult.getChildByName("hoa");
                    hoa.active = false;
                    var thang = _this.panelResult.getChildByName("thang");
                    thang.active = false;
                    var thua = _this.panelResult.getChildByName("thua");
                    thua.active = false;
                    if (push["userId1"] == Configs_1.default.Login.UserIdFish) {
                        meValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice1];
                        otherValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice2];
                        for (var i = 0; i < _this.btnPlays.length; i++) {
                            _this.btnPlays[i].interactable = false;
                            _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = choice1 == i ? _this.sprPlaysActive[i] : _this.sprPlaysNormal[i];
                        }
                        if (result == 0) {
                            hoa.active = true;
                            hoa.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                            meActive.active = true;
                            otherActive.active = true;
                        }
                        else {
                            if (result == 1) {
                                thang.active = true;
                                thang.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                lblWin.active = true;
                                meActive.active = true;
                                otherActive.active = false;
                            }
                            else {
                                thua.active = true;
                                thua.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                lblLose.active = true;
                                meActive.active = false;
                                otherActive.active = true;
                            }
                        }
                    }
                    else {
                        meValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice2];
                        otherValue.getComponent(cc.Sprite).spriteFrame = _this.sprResults[choice1];
                        for (var i = 0; i < _this.btnPlays.length; i++) {
                            _this.btnPlays[i].interactable = false;
                            _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = choice2 == i ? _this.sprPlaysActive[i] : _this.sprPlaysNormal[i];
                        }
                        if (result == 0) {
                            hoa.active = true;
                            hoa.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                            meActive.active = true;
                            otherActive.active = true;
                        }
                        else {
                            if (result == 2) {
                                thang.active = true;
                                thang.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                lblWin.active = true;
                                meActive.active = true;
                                otherActive.active = false;
                            }
                            else {
                                thua.active = true;
                                thua.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
                                lblLose.active = true;
                                meActive.active = false;
                                otherActive.active = true;
                            }
                        }
                    }
                    break;
                }
            }
        }, this);
        var _loop_1 = function (i) {
            this_1.btnBets[i].node.on("click", function () {
                _this.selectBet(_this.listBet[i]);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.btnBets.length; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            this_2.btnPlays[i].node.on("click", function () {
                _this.play(i);
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.btnPlays.length; i++) {
            _loop_2(i);
        }
    };
    OanTuTiController.prototype.update = function (dt) {
        if (this.remainTime > 0) {
            this.remainTime = Math.max(0, this.remainTime - dt);
            var t = Math.round(this.remainTime);
            this.lblTime.string = (t > 9 ? "" : "0") + t;
            this.progressTime.fillRange = this.remainTime / this.timePlaying;
        }
    };
    OanTuTiController.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        _super.prototype.show.call(this);
        this.toggleAuto.isChecked = false;
        this.resetView();
    };
    OanTuTiController.prototype._onShowed = function () {
        var _this = this;
        _super.prototype._onShowed.call(this);
        ShootFishNetworkClient_1.default.getInstance().checkConnect(function (isLogined) {
            if (!_this.node.active)
                return;
            if (!isLogined) {
                _this.dismiss();
                return;
            }
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            if (Configs_1.default.Login.CoinFish <= 0) {
                App_1.default.instance.confirmDialog.show3("Tiền trong game của bạn đã hết, bạn có muốn chuyển tiền vào không?", "Có", function (isConfirm) {
                    if (isConfirm) {
                        _this.popupCoinTransfer.show();
                    }
                });
            }
        });
    };
    OanTuTiController.prototype.actBack = function () {
        if (this.isPlaying) {
            App_1.default.instance.alertDialog.showMsg("Bạn đang chơi không thể thoát.");
            return;
        }
        // NetworkClient.getInstance().close();
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    OanTuTiController.prototype.actLogin = function () {
        var _this = this;
        var username = Configs_1.default.Login.Username;
        var password = Configs_1.default.Login.Password;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: 3, un: username, pw: md5(password) }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null) {
                App_1.default.instance.alertDialog.showMsg("Đăng nhập không thành công, vui lòng kiểm tra lại kết nối.");
                return;
            }
            // console.log(res);
            switch (parseInt(res["errorCode"])) {
                case 0:
                    //    console.log("Đăng nhập thành công.");
                    Configs_1.default.Login.AccessToken = res["accessToken"];
                    Configs_1.default.Login.SessionKey = res["sessionKey"];
                    Configs_1.default.Login.Username = username;
                    Configs_1.default.Login.Password = password;
                    Configs_1.default.Login.IsLogin = true;
                    var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                    Configs_1.default.Login.Nickname = userInfo["nickname"];
                    Configs_1.default.Login.Avatar = userInfo["avatar"];
                    Configs_1.default.Login.Coin = userInfo["vinTotal"];
                    Configs_1.default.Login.LuckyWheel = userInfo["luckyRotate"];
                    Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                    Configs_1.default.Login.CreateTime = userInfo["createTime"];
                    Configs_1.default.Login.Birthday = userInfo["birthday"];
                    Configs_1.default.Login.Birthday = userInfo["birthday"];
                    Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                    Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                    // MiniGameNetworkClient.getInstance().checkConnect();
                    //    MiniGameNetworkClient.getInstance().sendCheck(new cmd.ReqSubcribeJackpots());
                    //    SlotNetworkClient.getInstance().sendCheck(new cmd.ReqSubcribeHallSlot());
                    //    ShootFishNetworkClient.getInstance().checkConnect(() => {
                    //        BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
                    //    });
                    //     this.panelNotLogin.active = false;
                    //    this.panelLogined.active = true;
                    SPUtils_1.default.setUserName(Configs_1.default.Login.Username);
                    SPUtils_1.default.setUserPass(Configs_1.default.Login.Password);
                    App_1.default.instance.buttonMiniGame.show();
                    //     this.getMailNotRead();
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                    /* switch (VersionConfig.CPName) {
                        default:
                            this.popupBoomTan.show();
                            break;
                    } */
                    break;
                case 1007:
                    App_1.default.instance.alertDialog.showMsg("Thông tin đăng nhập không hợp lệ.");
                    break;
                case 2001:
                    _this.popupUpdateNickname.show2(username, password);
                    break;
                default:
                    App_1.default.instance.alertDialog.showMsg("Đăng nhập không thành công vui lòng thử lại sau.");
                    break;
            }
        });
    };
    OanTuTiController.prototype.dismiss = function () {
        if (this.isPlaying) {
            App_1.default.instance.alertDialog.showMsg("Bạn đang chơi không thể thoát.");
            return;
        }
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
    };
    OanTuTiController.prototype.resetView = function () {
        this.lblBet.string = "CHỌN CƯỢC";
        this.panelSelectBet.active = true;
        this.panelPlaying.active = false;
        this.panelResult.active = false;
        this.players.active = false;
        this.panelSearchingMatch.active = false;
        this.mePlayer.active = true;
        this.mePlayer.getChildByName("sprAvatar").getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        this.otherPlayer.active = false;
        this.otherPlayer.getChildByName("lblNickname").getComponent(cc.Label).string = "";
        this.interactableBtnBets(true);
    };
    OanTuTiController.prototype.playNow = function () {
        this.selectBet(0);
    };
    OanTuTiController.prototype.selectBet = function (betValue) {
        var _this = this;
        this.interactableBtnBets(false);
        this.isPlaying = true;
        //    console.log("betValue: " + betValue);
        ShootFishNetworkClient_1.default.getInstance().request("OTT1", {
            "userId": Configs_1.default.Login.UserIdFish,
            "nickname": Configs_1.default.Login.Nickname,
            "blind": betValue
        }, function (res) {
            if (res["code"] != 200) {
                switch (res["code"]) {
                    case 302:
                        App_1.default.instance.alertDialog.showMsg("Số dư không đủ.");
                        break;
                    default:
                        App_1.default.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                        break;
                }
                _this.interactableBtnBets(true);
                _this.isPlaying = false;
                return;
            }
            _this.lastBetValue = betValue;
            if (betValue <= 0) {
                _this.lblBet.string = "CƯỢC: __";
            }
            else {
                var value = Math.floor(betValue / 1000);
                _this.lblBet.string = "CƯỢC: " + Utils_1.default.formatNumber(value) + "K";
            }
            _this.panelSelectBet.active = false;
            _this.panelSearchingMatch.active = true;
            _this.players.active = true;
            _this.lblSearching.string = "ĐANG TÌM KIẾM ĐỐI THỦ...";
            _this.btnCancel.node.active = true;
        }, this);
    };
    ///selectValue: 0: kéo, 1: bao, 2: búa
    OanTuTiController.prototype.play = function (selectValue) {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("OTT2", {
            "userId": Configs_1.default.Login.UserIdFish,
            "choice": selectValue
        }, function (res) {
            //     console.log(res);
            if (res["code"] != 200) {
                App_1.default.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                _this.interactableBtnBets(true);
                return;
            }
            for (var i = 0; i < _this.btnPlays.length; i++) {
                _this.btnPlays[i].interactable = false;
                _this.btnPlays[i].getComponent(cc.Sprite).spriteFrame = i == selectValue ? _this.sprPlaysActive[i] : _this.sprPlaysNormal[i];
            }
        }, this);
    };
    OanTuTiController.prototype.interactableBtnBets = function (enabled) {
        for (var i = 0; i < this.btnBets.length; i++) {
            this.btnBets[i].interactable = enabled;
        }
        this.btnPlayNow.interactable = enabled;
    };
    OanTuTiController.prototype.actCancel = function () {
        var _this = this;
        ShootFishNetworkClient_1.default.getInstance().request("OTT11", {}, function (res) {
            if (res["code"] != 200) {
                App_1.default.instance.alertDialog.showMsg("Lỗi " + res["code"] + ", không xác định.");
                return;
            }
            _this.resetView();
            _this.isPlaying = false;
        }, this);
    };
    __decorate([
        property(cc.Label)
    ], OanTuTiController.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], OanTuTiController.prototype, "lblBet", void 0);
    __decorate([
        property([cc.Button])
    ], OanTuTiController.prototype, "btnBets", void 0);
    __decorate([
        property(cc.Button)
    ], OanTuTiController.prototype, "btnPlayNow", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "panelSelectBet", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "players", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "mePlayer", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "otherPlayer", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "panelSearchingMatch", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "panelPlaying", void 0);
    __decorate([
        property(cc.Node)
    ], OanTuTiController.prototype, "panelResult", void 0);
    __decorate([
        property(cc.Label)
    ], OanTuTiController.prototype, "lblSearching", void 0);
    __decorate([
        property(cc.Button)
    ], OanTuTiController.prototype, "btnCancel", void 0);
    __decorate([
        property(cc.Label)
    ], OanTuTiController.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Sprite)
    ], OanTuTiController.prototype, "progressTime", void 0);
    __decorate([
        property([cc.Button])
    ], OanTuTiController.prototype, "btnPlays", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], OanTuTiController.prototype, "sprPlaysActive", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], OanTuTiController.prototype, "sprPlaysNormal", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], OanTuTiController.prototype, "sprResults", void 0);
    __decorate([
        property(cc.Toggle)
    ], OanTuTiController.prototype, "toggleAuto", void 0);
    __decorate([
        property([cc.Node])
    ], OanTuTiController.prototype, "popups", void 0);
    __decorate([
        property(OanTuTi_PopupCoinTransfer_1.default)
    ], OanTuTiController.prototype, "popupCoinTransfer", void 0);
    OanTuTiController = __decorate([
        ccclass
    ], OanTuTiController);
    return OanTuTiController;
}(MiniGame_1.default));
exports.default = OanTuTiController;

cc._RF.pop();