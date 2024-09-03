"use strict";
cc._RF.push(module, 'b7be8uPgjZCmrxgWQB4LiG6', 'PopupLogin');
// Lobby/LobbyScript/PopupLogin.ts

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
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var SPUtils_1 = require("./Script/common/SPUtils");
var SlotNetworkClient_1 = require("./Script/networks/SlotNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby;
(function (Lobby) {
    var PopupRegister = /** @class */ (function (_super) {
        __extends(PopupRegister, _super);
        function PopupRegister() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.edbUsername = null;
            _this.edbPassword = null;
            _this.nodeRemember = null;
            _this.toggleRemember = null;
            return _this;
        }
        PopupRegister.prototype.start = function () {
        };
        PopupRegister.prototype.show = function (even, data) {
            if (even === void 0) { even = null; }
            if (data === void 0) { data = null; }
            _super.prototype.show.call(this);
            this.edbUsername.tabIndex = 0;
            this.edbPassword.tabIndex = 0;
            this.toggleRemember.isChecked = cc.sys.localStorage.getItem("IsRemember") == 1 ? true : false;
            if (this.toggleRemember.isChecked) {
                this.edbUsername.string = SPUtils_1.default.getUserName();
                this.edbPassword.string = SPUtils_1.default.getUserPass();
            }
        };
        PopupRegister.prototype.atcPopupUpdateNickName = function (username, password) {
            var cb = function (prefab) {
                var popupDaily = cc.instantiate(prefab).getComponent("PopupUpdateNickname");
                App_1.default.instance.canvas.addChild(popupDaily.node);
                App_1.default.instance.popupUpdateNickname = popupDaily;
                App_1.default.instance.popupUpdateNickname.show2(username, password);
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupUpdateNickname", cb);
        };
        PopupRegister.prototype.actLogin = function () {
            var _this = this;
            var username = this.edbUsername.string.trim();
            var password = this.edbPassword.string;
            //Utils.Log("actLogin:" + username + ":" + password);
            cc.sys.localStorage.setItem("IsRemember", this.toggleRemember.isChecked ? 1 : 0);
            cc.sys.localStorage.setItem("IsAutoLogin", this.toggleRemember.isChecked ? 1 : 0);
            Global_1.Global.LobbyController.actLogin(username, password, function () {
                App_1.default.instance.TYPE_LOGIN = "NORMAL";
                App_1.default.instance.USER_NAME = username;
                App_1.default.instance.PASS_WORD = password;
                SPUtils_1.default.setUserName(username);
                SPUtils_1.default.setUserPass(password);
                _this.dismiss();
            });
        };
        PopupRegister.prototype.actLoginToken = function (data) {
            var _this = this;
            Configs_1.default.Login.AccessToken = data.at;
            Configs_1.default.Login.AccessToken2 = data.at;
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: 17, u: data.u, at: data.at }, function (err, res) {
                App_1.default.instance.showLoading(false);
                //Utils.Log(res);
                switch (parseInt(res["errorCode"])) {
                    case 0:
                        //  //Utils.Log("Đăng nhập thành công.");
                        Configs_1.default.Login.AccessToken = res["accessToken"];
                        if (cc.sys.isBrowser) {
                            window.localStorage.setItem("at", Configs_1.default.Login.AccessToken);
                        }
                        Configs_1.default.Login.SessionKey = res["sessionKey"];
                        Configs_1.default.Login.IsLogin = true;
                        var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                        Configs_1.default.Login.Nickname = userInfo["nickname"];
                        Configs_1.default.Login.Avatar = userInfo["avatar"];
                        Configs_1.default.Login.Coin = userInfo["vinTotal"];
                        Configs_1.default.Login.LuckyWheel = userInfo["luckyRotate"];
                        Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                        Configs_1.default.Login.CreateTime = userInfo["createTime"];
                        Configs_1.default.Login.Birthday = userInfo["birthday"];
                        Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                        Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                        // khoi tao 3 socket dong thoi gui goi tin len server
                        // MiniGameNetworkClient.getInstance().sendCheck(new cmd.ReqSubcribeJackpots());
                        SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.cmd.ReqSubcribeHallSlot());
                        App_1.default.instance.buttonMiniGame.show();
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                        /* switch (VersionConfig.CPName) {
                            default:
                                this.popupBoomTan.show();
                                break;
                        } */
                        _this.dismiss();
                        Global_1.Global.LobbyController.panelNotLogin.active = false;
                        Global_1.Global.LobbyController.panelLogined.active = true;
                        break;
                    case 1005:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_login_username_error"));
                        break;
                    case 1109:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_blocked'));
                        break;
                    case 1114:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_password_error'));
                        break;
                    case 1002:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                        break;
                    case 1007:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_name_not_the_same'));
                        break;
                    case 1021:
                    case 1008:
                        App_1.default.instance.showLoading(false);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                        break;
                    case 2001:
                        App_1.default.instance.showLoading(false);
                        // App.instance.alertDialog.showMsg("Tên nhân vật không được để trống.");
                        break;
                    default:
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_error'));
                        break;
                }
            });
        };
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbUsername", void 0);
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbPassword", void 0);
        __decorate([
            property(cc.Node)
        ], PopupRegister.prototype, "nodeRemember", void 0);
        __decorate([
            property(cc.Toggle)
        ], PopupRegister.prototype, "toggleRemember", void 0);
        PopupRegister = __decorate([
            ccclass
        ], PopupRegister);
        return PopupRegister;
    }(Dialog_1.default));
    Lobby.PopupRegister = PopupRegister;
})(Lobby || (Lobby = {}));
exports.default = Lobby.PopupRegister;

cc._RF.pop();