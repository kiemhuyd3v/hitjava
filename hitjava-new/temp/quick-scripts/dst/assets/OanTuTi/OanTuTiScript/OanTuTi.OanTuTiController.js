
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/OanTuTi/OanTuTiScript/OanTuTi.OanTuTiController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcT2FuVHVUaVxcT2FuVHVUaVNjcmlwdFxcT2FuVHVUaS5PYW5UdVRpQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELGlFQUE0RDtBQUM1RCw2RkFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLHlHQUFvRztBQUNwRyx5RUFBNEQ7QUFDNUQsK0NBQTBDO0FBQzFDLHlFQUFvRTtBQUU5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBUTtJQUF2RDtRQUFBLHFFQWllQztRQTlkVSxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFnQixFQUFFLENBQUM7UUFFMUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUVuQyxXQUFXO1FBRUosa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUVuQyxTQUFTO1FBRUYsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUUzQixvQkFBYyxHQUFxQixFQUFFLENBQUM7UUFFdEMsb0JBQWMsR0FBcUIsRUFBRSxDQUFDO1FBRTdDLFFBQVE7UUFFRCxnQkFBVSxHQUFxQixF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LGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBaWVyQztJQUFELHdCQUFDO0NBamVELEFBaWVDLENBamU4QyxrQkFBUSxHQWlldEQ7a0JBamVvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IE1pbmlHYW1lIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9NaW5pR2FtZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBQb3B1cENvaW5UcmFuc2ZlciBmcm9tIFwiLi9PYW5UdVRpLlBvcHVwQ29pblRyYW5zZmVyXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2FuVHVUaUNvbnRyb2xsZXIgZXh0ZW5kcyBNaW5pR2FtZSB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxibEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQnV0dG9uXSlcbiAgICBwdWJsaWMgYnRuQmV0czogY2MuQnV0dG9uW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHB1YmxpYyBidG5QbGF5Tm93OiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHBhbmVsU2VsZWN0QmV0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBwbGF5ZXJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgbWVQbGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBvdGhlclBsYXllcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgcGFuZWxTZWFyY2hpbmdNYXRjaDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHBhbmVsUGxheWluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHBhbmVsUmVzdWx0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vc2VhcmNoaW5nXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBsYmxTZWFyY2hpbmc6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHB1YmxpYyBidG5DYW5jZWw6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICAvL3BsYXlpbmdcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxibFRpbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHB1YmxpYyBwcm9ncmVzc1RpbWU6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxuICAgIHB1YmxpYyBidG5QbGF5czogY2MuQnV0dG9uW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwdWJsaWMgc3ByUGxheXNBY3RpdmU6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwdWJsaWMgc3ByUGxheXNOb3JtYWw6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIC8vcmVzdWx0XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgcHVibGljIHNwclJlc3VsdHM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgcHVibGljIHRvZ2dsZUF1dG86IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIHB1YmxpYyBwb3B1cHM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFBvcHVwQ29pblRyYW5zZmVyKVxuICAgIHB1YmxpYyBwb3B1cENvaW5UcmFuc2ZlcjogUG9wdXBDb2luVHJhbnNmZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBsaXN0QmV0ID0gWzEwMDAsIDUwMDAsIDEwMDAwLCA1MDAwMCwgMTAwMDAwXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRpbWVQbGF5aW5nID0gMTA7XG4gICAgcHJpdmF0ZSByZW1haW5UaW1lID0gMDtcbiAgICBwcml2YXRlIGxhc3RCZXRWYWx1ZSA9IDA7XG4gICAgcHJpdmF0ZSBpc1BsYXlpbmcgPSBmYWxzZTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luRmlzaCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigocm91dGUsIHB1c2gpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IHJvdXRlc0xvZyA9IFtcIk90dE9uTWF0Y2hpbmdcIiwgXCJPdHRPbk1hdGNoU3RhcnRcIiwgXCJPdHRPbk1hdGNoRW5kXCIsIFwiT3R0T25NYXRjaFNvbHZlZFwiXTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXNMb2cuaW5kZXhPZihyb3V0ZSkgPj0gMCkge1xuICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocm91dGUpO1xuICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocHVzaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIk90dE9uTWF0Y2hpbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3RoZXJOaWNrbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvdGhlckF2YXRhciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwdXNoW1widXNlcklkMVwiXSA9PSBDb25maWdzLkxvZ2luLlVzZXJJZEZpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTmlja25hbWUgPSBwdXNoW1wibmlja25hbWUyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJBdmF0YXIgPSBwdXNoW1wiYXZhdGFyMlwiXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyTmlja25hbWUgPSBwdXNoW1wibmlja25hbWUxXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJBdmF0YXIgPSBwdXNoW1wiYXZhdGFyMVwiXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxTZWxlY3RCZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxQbGF5aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnMuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlYXJjaGluZy5zdHJpbmcgPSBcIsSQw4MgVMOMTSBUSOG6pFkgxJDhu5BJIFRI4bumXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2FuY2VsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vdGhlclBsYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmdldENoaWxkQnlOYW1lKFwibGJsTmlja25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBvdGhlck5pY2tuYW1lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm90aGVyUGxheWVyLmdldENoaWxkQnlOYW1lKFwic3ByQXZhdGFyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQXBwLmluc3RhbmNlLmdldEF2YXRhclNwcml0ZUZyYW1lKG90aGVyQXZhdGFyKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSBcIkPGr+G7okM6IFwiICsgKE1hdGguZmxvb3IocHVzaFtcImJsaW5kXCJdIC8gMTAwMCkpICsgXCJLXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiT3R0T25NYXRjaFN0YXJ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbFNlYXJjaGluZ01hdGNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsUGxheWluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsUmVzdWx0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnMuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLnRpbWVQbGF5aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRpbWUubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpbWUuZmlsbFJhbmdlID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGxheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGxheXNbaV0uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGxheXNbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclBsYXlzQWN0aXZlW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiT3R0T25NYXRjaEVuZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IHB1c2hbXCJyZXN1bHRcIl07Ly8vcmVzdWx0OiAwOiBob8OgLCAxOiBwbGF5ZXIxIHRo4bqvbmcsIDI6IHBsYXllcjIgdGjhuq9uZ1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hhbmdlQ2FzaDE6IG51bWJlciA9IHB1c2hbXCJjaGFuZ2VDYXNoMVwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW5nZUNhc2gyOiBudW1iZXIgPSBwdXNoW1wiY2hhbmdlQ2FzaDJcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBibGluZDogbnVtYmVyID0gcHVzaFtcImJsaW5kXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYmxXaW4gPSB0aGlzLnBhbmVsUmVzdWx0LmdldENoaWxkQnlOYW1lKFwibGJsV2luXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGJsTG9zZSA9IHRoaXMucGFuZWxSZXN1bHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxMb3NlXCIpXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1c2hbXCJ1c2VySWQxXCJdID09IENvbmZpZ3MuTG9naW4uVXNlcklkRmlzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxibFdpbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGNoYW5nZUNhc2gxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmxMb3NlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKC1ibGluZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luRmlzaCA9IHB1c2hbXCJjYXNoMVwiXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmxXaW4uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIFV0aWxzLmZvcm1hdE51bWJlcihjaGFuZ2VDYXNoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGJsTG9zZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcigtYmxpbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbkZpc2ggPSBwdXNoW1wiY2FzaDJcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0VmlldygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJldCh0aGlzLmxhc3RCZXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiT3R0T25NYXRjaFNvbHZlZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUaW1lLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IHB1c2hbXCJyZXN1bHRcIl07IC8vL3Jlc3VsdDogMDogaG/DoCwgMTogcGxheWVyMSB0aOG6r25nLCAyOiBwbGF5ZXIyIHRo4bqvbmdcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNob2ljZTE6IG51bWJlciA9IHB1c2hbXCJjaG9pY2UxXCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hvaWNlMjogbnVtYmVyID0gcHVzaFtcImNob2ljZTJcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lVmFsdWUgPSB0aGlzLnBhbmVsUmVzdWx0LmdldENoaWxkQnlOYW1lKFwibWVWYWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG90aGVyVmFsdWUgPSB0aGlzLnBhbmVsUmVzdWx0LmdldENoaWxkQnlOYW1lKFwib3RoZXJWYWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lQWN0aXZlID0gbWVWYWx1ZS5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG90aGVyQWN0aXZlID0gb3RoZXJWYWx1ZS5nZXRDaGlsZEJ5TmFtZShcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbGJsV2luID0gdGhpcy5wYW5lbFJlc3VsdC5nZXRDaGlsZEJ5TmFtZShcImxibFdpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGJsV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGJsTG9zZSA9IHRoaXMucGFuZWxSZXN1bHQuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxMb3NlXCIpXG4gICAgICAgICAgICAgICAgICAgIGxibExvc2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBob2EgPSB0aGlzLnBhbmVsUmVzdWx0LmdldENoaWxkQnlOYW1lKFwiaG9hXCIpO1xuICAgICAgICAgICAgICAgICAgICBob2EuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aGFuZyA9IHRoaXMucGFuZWxSZXN1bHQuZ2V0Q2hpbGRCeU5hbWUoXCJ0aGFuZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhhbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aHVhID0gdGhpcy5wYW5lbFJlc3VsdC5nZXRDaGlsZEJ5TmFtZShcInRodWFcIik7XG4gICAgICAgICAgICAgICAgICAgIHRodWEuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1c2hbXCJ1c2VySWQxXCJdID09IENvbmZpZ3MuTG9naW4uVXNlcklkRmlzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVWYWx1ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByUmVzdWx0c1tjaG9pY2UxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVmFsdWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclJlc3VsdHNbY2hvaWNlMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGxheXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBsYXlzW2ldLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGxheXNbaV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjaG9pY2UxID09IGkgPyB0aGlzLnNwclBsYXlzQWN0aXZlW2ldIDogdGhpcy5zcHJQbGF5c05vcm1hbFtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9hLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9hLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZUFjdGl2ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyQWN0aXZlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFuZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFuZy5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxibFdpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZUFjdGl2ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckFjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodWEuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmxMb3NlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lQWN0aXZlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckFjdGl2ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lVmFsdWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclJlc3VsdHNbY2hvaWNlMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclZhbHVlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJSZXN1bHRzW2Nob2ljZTFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0blBsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5c1tpXS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBsYXlzW2ldLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gY2hvaWNlMiA9PSBpID8gdGhpcy5zcHJQbGF5c0FjdGl2ZVtpXSA6IHRoaXMuc3ByUGxheXNOb3JtYWxbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvYS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVBY3RpdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlckFjdGl2ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhbmcuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmxXaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVBY3RpdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJBY3RpdmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1YS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVhLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGJsTG9zZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZUFjdGl2ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJBY3RpdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idG5CZXRzW2ldLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCZXQodGhpcy5saXN0QmV0W2ldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5QbGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idG5QbGF5c1tpXS5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheShpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtYWluVGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IE1hdGgubWF4KDAsIHRoaXMucmVtYWluVGltZSAtIGR0KTtcbiAgICAgICAgICAgIGxldCB0ID0gTWF0aC5yb3VuZCh0aGlzLnJlbWFpblRpbWUpO1xuICAgICAgICAgICAgdGhpcy5sYmxUaW1lLnN0cmluZyA9ICh0ID4gOSA/IFwiXCIgOiBcIjBcIikgKyB0O1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpbWUuZmlsbFJhbmdlID0gdGhpcy5yZW1haW5UaW1lIC8gdGhpcy50aW1lUGxheWluZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlT3JkZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZXNldFZpZXcoKTtcbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KChpc0xvZ2luZWQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCFpc0xvZ2luZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbkZpc2ggPD0gMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jb25maXJtRGlhbG9nLnNob3czKFwiVGnhu4FuIHRyb25nIGdhbWUgY+G7p2EgYuG6oW4gxJHDoyBo4bq/dCwgYuG6oW4gY8OzIG114buRbiBjaHV54buDbiB0aeG7gW4gdsOgbyBraMO0bmc/XCIsIFwiQ8OzXCIsIChpc0NvbmZpcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cENvaW5UcmFuc2Zlci5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuYWN0QmFjaygpIHtcblx0aWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkLhuqFuIMSRYW5nIGNoxqFpIGtow7RuZyB0aOG7gyB0aG/DoXQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jbG9zZSgpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cdGFjdExvZ2luKCk6IHZvaWQge1xuICAgICAgICAgICBsZXQgdXNlcm5hbWUgPSBDb25maWdzLkxvZ2luLlVzZXJuYW1lO1xuICAgICAgICAgICAgbGV0IHBhc3N3b3JkID0gQ29uZmlncy5Mb2dpbi5QYXNzd29yZDtcblxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IDMsIHVuOiB1c2VybmFtZSwgcHc6IG1kNShwYXNzd29yZCkgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCLEkMSDbmcgbmjhuq1wIGtow7RuZyB0aMOgbmggY8O0bmcsIHZ1aSBsw7JuZyBraeG7g20gdHJhIGzhuqFpIGvhur90IG7hu5FpLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyc2VJbnQocmVzW1wiZXJyb3JDb2RlXCJdKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIsSQxINuZyBuaOG6rXAgdGjDoG5oIGPDtG5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gPSByZXNbXCJhY2Nlc3NUb2tlblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSA9IHJlc1tcInNlc3Npb25LZXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklzTG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJJbmZvID0gSlNPTi5wYXJzZShiYXNlNjQuZGVjb2RlKENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSA9IHVzZXJJbmZvW1wibmlja25hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkF2YXRhciA9IHVzZXJJbmZvW1wiYXZhdGFyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gdXNlckluZm9bXCJ2aW5Ub3RhbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTHVja3lXaGVlbCA9IHVzZXJJbmZvW1wibHVja3lSb3RhdGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklwQWRkcmVzcyA9IHVzZXJJbmZvW1wiaXBBZGRyZXNzXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5DcmVhdGVUaW1lID0gdXNlckluZm9bXCJjcmVhdGVUaW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5CaXJ0aGRheSA9IHVzZXJJbmZvW1wiYmlydGhkYXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkJpcnRoZGF5ID0gdXNlckluZm9bXCJiaXJ0aGRheVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnQgPSB1c2VySW5mb1tcInZpcHBvaW50XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5WaXBQb2ludFNhdmUgPSB1c2VySW5mb1tcInZpcHBvaW50U2F2ZVwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSmFja3BvdHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnBhbmVsTm90TG9naW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMucGFuZWxMb2dpbmVkLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlck5hbWUoQ29uZmlncy5Mb2dpbi5Vc2VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJQYXNzKENvbmZpZ3MuTG9naW4uUGFzc3dvcmQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYnV0dG9uTWluaUdhbWUuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldE1haWxOb3RSZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggKFZlcnNpb25Db25maWcuQ1BOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEJvb21UYW4uc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRow7RuZyB0aW4gxJHEg25nIG5o4bqtcCBraMO0bmcgaOG7o3AgbOG7hy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cFVwZGF0ZU5pY2tuYW1lLnNob3cyKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwixJDEg25nIG5o4bqtcCBraMO0bmcgdGjDoG5oIGPDtG5nIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4gxJFhbmcgY2jGoWkga2jDtG5nIHRo4buDIHRob8OhdC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRWaWV3KCkge1xuICAgICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSBcIkNI4buMTiBDxq/hu6JDXCI7XG5cbiAgICAgICAgdGhpcy5wYW5lbFNlbGVjdEJldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnBhbmVsUGxheWluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYW5lbFJlc3VsdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhbmVsU2VhcmNoaW5nTWF0Y2guYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5tZVBsYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lUGxheWVyLmdldENoaWxkQnlOYW1lKFwic3ByQXZhdGFyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQXBwLmluc3RhbmNlLmdldEF2YXRhclNwcml0ZUZyYW1lKENvbmZpZ3MuTG9naW4uQXZhdGFyKTtcblxuICAgICAgICB0aGlzLm90aGVyUGxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm90aGVyUGxheWVyLmdldENoaWxkQnlOYW1lKFwibGJsTmlja25hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmludGVyYWN0YWJsZUJ0bkJldHModHJ1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYXlOb3coKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0QmV0KDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2VsZWN0QmV0KGJldFZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVCdG5CZXRzKGZhbHNlKTtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgIC8vICAgIGNvbnNvbGUubG9nKFwiYmV0VmFsdWU6IFwiICsgYmV0VmFsdWUpO1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIk9UVDFcIiwge1xuICAgICAgICAgICAgXCJ1c2VySWRcIjogQ29uZmlncy5Mb2dpbi5Vc2VySWRGaXNoLFxuICAgICAgICAgICAgXCJuaWNrbmFtZVwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLFxuICAgICAgICAgICAgXCJibGluZFwiOiBiZXRWYWx1ZVxuICAgICAgICB9LCAocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc1tcImNvZGVcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgZMawIGtow7RuZyDEkeG7py5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTOG7l2kgXCIgKyByZXNbXCJjb2RlXCJdICsgXCIsIGtow7RuZyB4w6FjIMSR4buLbmguXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RhYmxlQnRuQmV0cyh0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGFzdEJldFZhbHVlID0gYmV0VmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChiZXRWYWx1ZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gXCJDxq/hu6JDOiBfX1wiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBNYXRoLmZsb29yKGJldFZhbHVlIC8gMTAwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gXCJDxq/hu6JDOiBcIiArIFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSkgKyBcIktcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5wYW5lbFNlbGVjdEJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucGFuZWxTZWFyY2hpbmdNYXRjaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMubGJsU2VhcmNoaW5nLnN0cmluZyA9IFwixJBBTkcgVMOMTSBLSeG6vk0gxJDhu5BJIFRI4bumLi4uXCI7XG4gICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIC8vL3NlbGVjdFZhbHVlOiAwOiBrw6lvLCAxOiBiYW8sIDI6IGLDumFcbiAgICBwcml2YXRlIHBsYXkoc2VsZWN0VmFsdWU6IG51bWJlcikge1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIk9UVDJcIiwge1xuICAgICAgICAgICAgXCJ1c2VySWRcIjogQ29uZmlncy5Mb2dpbi5Vc2VySWRGaXNoLFxuICAgICAgICAgICAgXCJjaG9pY2VcIjogc2VsZWN0VmFsdWVcbiAgICAgICAgfSwgKHJlcykgPT4ge1xuICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlc1tcImNvZGVcIl0gIT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJM4buXaSBcIiArIHJlc1tcImNvZGVcIl0gKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGFibGVCdG5CZXRzKHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5QbGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuUGxheXNbaV0uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5c1tpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGkgPT0gc2VsZWN0VmFsdWUgPyB0aGlzLnNwclBsYXlzQWN0aXZlW2ldIDogdGhpcy5zcHJQbGF5c05vcm1hbFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnRlcmFjdGFibGVCdG5CZXRzKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0bkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnRuQmV0c1tpXS5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuUGxheU5vdy5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RDYW5jZWwoKSB7XG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5yZXF1ZXN0KFwiT1RUMTFcIiwge1xuICAgICAgICB9LCAocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkzhu5dpIFwiICsgcmVzW1wiY29kZVwiXSArIFwiLCBraMO0bmcgeMOhYyDEkeG7i25oLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlc2V0VmlldygpO1xuICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxufVxuIl19