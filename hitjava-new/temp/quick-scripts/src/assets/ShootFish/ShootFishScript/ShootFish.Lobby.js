"use strict";
cc._RF.push(module, '4378bty4U5E8KWt2uwkMkhd', 'ShootFish.Lobby');
// ShootFish/ShootFishScript/ShootFish.Lobby.ts

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
var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var ShootFish_Play_1 = require("./ShootFish.Play");
var ShootFish_PopupCoinTransfer_1 = require("./ShootFish.PopupCoinTransfer");
var Http_1 = require("../../Loading/src/Http");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby = /** @class */ (function (_super) {
    __extends(Lobby, _super);
    function Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playNode = null;
        _this.lblBalance = null;
        _this.popupCoinTransfer = null;
        _this.play = null;
        return _this;
    }
    Lobby_1 = Lobby;
    // LIFE-CYCLE CALLBACKS:
    Lobby.prototype.onLoad = function () {
        var _this = this;
        Lobby_1.instance = this;
        this.play = this.playNode.getComponent(ShootFish_Play_1.default);
        this.play.node.active = false;
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        ShootFishNetworkClient_1.default.getInstance().checkConnect(function (isLogined) {
            if (!isLogined) {
                App_1.default.instance.alertDialog.showMsgWithOnDismissed("Đăng nhập thất bại, vui lòng thử lại.", function () {
                    _this.actBack();
                });
                return;
            }
            ShootFish_Play_1.default.SERVER_CONFIG = Configs_1.default.Login.FishConfigs;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            if (_this && _this.node && _this.node.parent) {
                if (Configs_1.default.Login.CoinFish <= 0) {
                    App_1.default.instance.confirmDialog.show3("Tiền trong Bắn Cá của bạn đã hết, bạn có muốn chuyển tiền vào không?", "Có", function (isConfirm) {
                        if (isConfirm) {
                            _this.popupCoinTransfer.show();
                        }
                    });
                }
            }
        });
        ShootFishNetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.showErrLoading("Mất kết nối, đang thử kết nối lại...");
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            var inPacket = new Network_InPacket_1.default(data);
            switch (inPacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.GET_MONEY_USE: {
                    var res = new Lobby_Cmd_1.default.ResGetMoneyUse(data);
                    Configs_1.default.Login.Coin = res.moneyUse;
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    break;
                }
            }
        }, this);
    };
    Lobby.prototype.actBack = function () {
        // NetworkClient.getInstance().close();
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Lobby.prototype.actHonors = function () {
    };
    Lobby.prototype.actRoom1 = function () {
        this.show(false);
        this.play.show(true, 1);
    };
    Lobby.prototype.actRoom2 = function () {
        this.show(false);
        this.play.show(true, 2);
    };
    Lobby.prototype.actLogin = function () {
        var _this = this;
        var username = Configs_1.default.Login.Username;
        var password = Configs_1.default.Login.Password;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: 3, un: username, pw: md5(password) }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null) {
                //    App.instance.alertDialog.showMsg("Đăng nhập không thành công, vui lòng kiểm tra lại kết nối.");
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
    Lobby.prototype.actRoom3 = function () {
        this.show(false);
        this.play.show(true, 3);
    };
    Lobby.prototype.show = function (isShow) {
        this.node.active = isShow;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    var Lobby_1;
    Lobby.instance = null;
    __decorate([
        property(cc.Node)
    ], Lobby.prototype, "playNode", void 0);
    __decorate([
        property(cc.Label)
    ], Lobby.prototype, "lblBalance", void 0);
    __decorate([
        property(ShootFish_PopupCoinTransfer_1.default)
    ], Lobby.prototype, "popupCoinTransfer", void 0);
    Lobby = Lobby_1 = __decorate([
        ccclass
    ], Lobby);
    return Lobby;
}(cc.Component));
exports.default = Lobby;

cc._RF.pop();