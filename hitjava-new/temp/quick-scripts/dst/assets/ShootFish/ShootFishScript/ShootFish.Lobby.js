
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0RBQW9EO0FBQ3BELGlFQUE0RDtBQUM1RCw2RkFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLHVHQUFrRztBQUNsRyw2RkFBZ0Y7QUFDaEYseUdBQW9HO0FBQ3BHLG1EQUFvQztBQUNwQyw2RUFBOEQ7QUFDOUQsK0NBQTBDO0FBQzFDLHlFQUFvRTtBQUM5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQWlLQztRQTVKRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLHVCQUFpQixHQUFzQixJQUFJLENBQUM7UUFFcEMsVUFBSSxHQUFTLElBQUksQ0FBQzs7SUFzSjlCLENBQUM7Y0FqS29CLEtBQUs7SUFhdEIsd0JBQXdCO0lBRXhCLHNCQUFNLEdBQU47UUFBQSxpQkFnREM7UUEvQ0csT0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyx3QkFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUU5QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBFLDJCQUFpQixDQUFDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzRCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULGdDQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFDLFNBQVM7WUFDeEQsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyx1Q0FBdUMsRUFBRTtvQkFDckYsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFDRCx3QkFBSSxDQUFDLGFBQWEsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDL0MsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFM0QsSUFBSSxLQUFJLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkMsSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO29CQUM3QixhQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsc0VBQXNFLEVBQUUsSUFBSSxFQUFFLFVBQUMsU0FBUzt3QkFDckgsSUFBSSxTQUFTLEVBQUU7NEJBQ1gsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO3lCQUNqQztvQkFDTCxDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxnQ0FBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDNUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUN4RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCwrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJO1lBQ2pELElBQUksUUFBUSxHQUFHLElBQUksMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxRQUFRLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsS0FBSyxtQkFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLDJCQUFpQixDQUFDLElBQUksQ0FBQywyQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsdUJBQU8sR0FBUDtRQUNJLHVDQUF1QztRQUN2QyxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCx5QkFBUyxHQUFUO0lBRUEsQ0FBQztJQUVELHdCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCx3QkFBUSxHQUFSO1FBQUEsaUJBbUVDO1FBbEVHLElBQUksUUFBUSxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLFFBQVEsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFFdEMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsY0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDMUUsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNiLHFHQUFxRztnQkFDckcsT0FBTzthQUNWO1lBQ0Qsb0JBQW9CO1lBQ3BCLFFBQVEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0YsMkNBQTJDO29CQUMzQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMvQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3QyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUNsQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO29CQUNsQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDbkUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDMUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDMUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDbkQsaUJBQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDaEQsaUJBQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDbEQsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDOUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFdEQsc0RBQXNEO29CQUN0RCxtRkFBbUY7b0JBQ25GLCtFQUErRTtvQkFDL0UsK0RBQStEO29CQUMvRCxxRUFBcUU7b0JBQ3JFLFNBQVM7b0JBRVQseUNBQXlDO29CQUN6QyxzQ0FBc0M7b0JBRXRDLGlCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1QyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFNUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ25DLDZCQUE2QjtvQkFFN0IsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBRTVEOzs7O3dCQUlJO29CQUNKLE1BQU07Z0JBQ1YsS0FBSyxJQUFJO29CQUNMLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO29CQUN0RSxNQUFNO2dCQUNWLEtBQUssSUFBSTtvQkFDTCxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDbkQsTUFBTTtnQkFDVjtvQkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsa0RBQWtELENBQUMsQ0FBQztvQkFDckYsTUFBTTthQUNiO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsd0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTSxvQkFBSSxHQUFYLFVBQVksTUFBZTtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDMUIsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0QsQ0FBQzs7SUE5SmEsY0FBUSxHQUFVLElBQUksQ0FBQztJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMscUNBQWlCLENBQUM7b0RBQ2dCO0lBVDNCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FpS3pCO0lBQUQsWUFBQztDQWpLRCxBQWlLQyxDQWpLa0MsRUFBRSxDQUFDLFNBQVMsR0FpSzlDO2tCQWpLb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgY21kIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9Mb2JieS5DbWRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IE1pbmlHYW1lTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFNob290RmlzaE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TaG9vdEZpc2hOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgUGxheSBmcm9tIFwiLi9TaG9vdEZpc2guUGxheVwiO1xuaW1wb3J0IFBvcHVwQ29pblRyYW5zZmVyIGZyb20gXCIuL1Nob290RmlzaC5Qb3B1cENvaW5UcmFuc2ZlclwiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBTUFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1NQVXRpbHNcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2JieSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBMb2JieSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwbGF5Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJhbGFuY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoUG9wdXBDb2luVHJhbnNmZXIpXG4gICAgcG9wdXBDb2luVHJhbnNmZXI6IFBvcHVwQ29pblRyYW5zZmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGxheTogUGxheSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTG9iYnkuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMucGxheSA9IHRoaXMucGxheU5vZGUuZ2V0Q29tcG9uZW50KFBsYXkpO1xuICAgICAgICB0aGlzLnBsYXkubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbkZpc2gpO1xuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luRmlzaCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIFNob290RmlzaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKGlzTG9naW5lZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0xvZ2luZWQpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZ1dpdGhPbkRpc21pc3NlZChcIsSQxINuZyBuaOG6rXAgdGjhuqV0IGLhuqFpLCB2dWkgbMOybmcgdGjhu60gbOG6oWkuXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RCYWNrKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUGxheS5TRVJWRVJfQ09ORklHID0gQ29uZmlncy5Mb2dpbi5GaXNoQ29uZmlncztcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICAgICAgICAgIGlmICh0aGlzICYmIHRoaXMubm9kZSAmJiB0aGlzLm5vZGUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbkZpc2ggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuY29uZmlybURpYWxvZy5zaG93MyhcIlRp4buBbiB0cm9uZyBC4bqvbiBDw6EgY+G7p2EgYuG6oW4gxJHDoyBo4bq/dCwgYuG6oW4gY8OzIG114buRbiBjaHV54buDbiB0aeG7gW4gdsOgbyBraMO0bmc/XCIsIFwiQ8OzXCIsIChpc0NvbmZpcm0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQ29pblRyYW5zZmVyLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCJN4bqldCBr4bq/dCBu4buRaSwgxJFhbmcgdGjhu60ga+G6v3QgbuG7kWkgbOG6oWkuLi5cIik7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5QYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGluUGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9NT05FWV9VU0U6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzR2V0TW9uZXlVc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJlcy5tb25leVVzZTtcbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBhY3RCYWNrKCkge1xuICAgICAgICAvLyBOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2xvc2UoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgYWN0SG9ub3JzKCkge1xuXG4gICAgfVxuXG4gICAgYWN0Um9vbTEoKSB7XG4gICAgICAgIHRoaXMuc2hvdyhmYWxzZSk7XG4gICAgICAgIHRoaXMucGxheS5zaG93KHRydWUsIDEpO1xuICAgIH1cblxuICAgIGFjdFJvb20yKCkge1xuICAgICAgICB0aGlzLnNob3coZmFsc2UpO1xuICAgICAgICB0aGlzLnBsYXkuc2hvdyh0cnVlLCAyKTtcbiAgICB9XG4gICAgYWN0TG9naW4oKTogdm9pZCB7XG4gICAgICAgIGxldCB1c2VybmFtZSA9IENvbmZpZ3MuTG9naW4uVXNlcm5hbWU7XG4gICAgICAgIGxldCBwYXNzd29yZCA9IENvbmZpZ3MuTG9naW4uUGFzc3dvcmQ7XG5cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogMywgdW46IHVzZXJuYW1lLCBwdzogbWQ1KHBhc3N3b3JkKSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQxINuZyBuaOG6rXAga2jDtG5nIHRow6BuaCBjw7RuZywgdnVpIGzDsm5nIGtp4buDbSB0cmEgbOG6oWkga+G6v3QgbuG7kWkuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwixJDEg25nIG5o4bqtcCB0aMOgbmggY8O0bmcuXCIpO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gcmVzW1wiYWNjZXNzVG9rZW5cIl07XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSA9IHJlc1tcInNlc3Npb25LZXlcIl07XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5QYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklzTG9naW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlckluZm8gPSBKU09OLnBhcnNlKGJhc2U2NC5kZWNvZGUoQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5KSk7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTmlja25hbWUgPSB1c2VySW5mb1tcIm5pY2tuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkF2YXRhciA9IHVzZXJJbmZvW1wiYXZhdGFyXCJdO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSB1c2VySW5mb1tcInZpblRvdGFsXCJdO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkx1Y2t5V2hlZWwgPSB1c2VySW5mb1tcImx1Y2t5Um90YXRlXCJdO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLklwQWRkcmVzcyA9IHVzZXJJbmZvW1wiaXBBZGRyZXNzXCJdO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNyZWF0ZVRpbWUgPSB1c2VySW5mb1tcImNyZWF0ZVRpbWVcIl07XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQmlydGhkYXkgPSB1c2VySW5mb1tcImJpcnRoZGF5XCJdO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkJpcnRoZGF5ID0gdXNlckluZm9bXCJiaXJ0aGRheVwiXTtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA9IHVzZXJJbmZvW1widmlwcG9pbnRcIl07XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnRTYXZlID0gdXNlckluZm9bXCJ2aXBwb2ludFNhdmVcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSmFja3BvdHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICB0aGlzLnBhbmVsTG9naW5lZC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlck5hbWUoQ29uZmlncy5Mb2dpbi5Vc2VybmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIFNQVXRpbHMuc2V0VXNlclBhc3MoQ29uZmlncy5Mb2dpbi5QYXNzd29yZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmJ1dHRvbk1pbmlHYW1lLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2V0TWFpbE5vdFJlYWQoKTtcblxuICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfSU5GT19VUERBVEVEKTtcblxuICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggKFZlcnNpb25Db25maWcuQ1BOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb29tVGFuLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEwMDc6XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVGjDtG5nIHRpbiDEkcSDbmcgbmjhuq1wIGtow7RuZyBo4bujcCBs4buHLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyMDAxOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwVXBkYXRlTmlja25hbWUuc2hvdzIodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCLEkMSDbmcgbmjhuq1wIGtow7RuZyB0aMOgbmggY8O0bmcgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWN0Um9vbTMoKSB7XG4gICAgICAgIHRoaXMuc2hvdyhmYWxzZSk7XG4gICAgICAgIHRoaXMucGxheS5zaG93KHRydWUsIDMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gaXNTaG93O1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgIH1cbn1cbiJdfQ==