"use strict";
cc._RF.push(module, '98fa6a8u0NFcqDx+oNqZYCw', 'PopupUpdateNickname');
// Lobby/LobbyScript/PopupUpdateNickname.ts

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
var Http_1 = require("../../Loading/src/Http");
var LogEvent_1 = require("../../Loading/src/LogEvent/LogEvent");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var SPUtils_1 = require("./Script/common/SPUtils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var SlotNetworkClient_1 = require("./Script/networks/SlotNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby;
(function (Lobby) {
    var PopupUpdateNickname = /** @class */ (function (_super) {
        __extends(PopupUpdateNickname, _super);
        function PopupUpdateNickname() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.edbNickname = null;
            _this_1.edbInviteCode = null;
            _this_1.nodeNotiTele = null;
            _this_1.nodeChangeNickName = null;
            _this_1.btnConfirm = null;
            _this_1.lbTitle = null;
            _this_1.username = "";
            _this_1.password = "";
            _this_1.at = "";
            return _this_1;
        }
        PopupUpdateNickname.prototype.show = function () {
            _super.prototype.show.call(this);
            this.edbNickname.string = "";
            this.nodeNotiTele.active = false;
            this.nodeChangeNickName.active = true;
            this.edbInviteCode.string = "";
            if (cc.sys.isBrowser) {
                //  cc.log("URL Game==" + window.location.href);
                var url = window.location.href;
                // let url = "https://play.FANVIN.wIN/?aff=NhungNgao4";
                if (url.includes("aff=")) {
                    var indexOfEqual = url.indexOf("=");
                    var inviteCode = url.substring(indexOfEqual + 1, url.length);
                    this.edbInviteCode.string = inviteCode;
                    this.edbInviteCode.enabled = false;
                }
            }
        };
        PopupUpdateNickname.prototype.show2 = function (username, password) {
            this.show();
            this.username = username;
            this.password = password;
            this.at = "";
        };
        PopupUpdateNickname.prototype.showFb = function (at) {
            this.show();
            this.at = at;
            this.username = "";
            this.password = "";
        };
        PopupUpdateNickname.prototype.dismiss = function () {
            this.node.destroy();
        };
        PopupUpdateNickname.prototype.actUpdate = function () {
            var _this_1 = this;
            var _this = this;
            var nickname = this.edbNickname.string.trim();
            var inviteCode = this.edbInviteCode.string.trim();
            if (nickname.length == 0) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_nickname_not_blank'));
                return;
            }
            if (this.at == "") {
                //normal
                App_1.default.instance.showLoading(true);
                Http_1.default.get(Configs_1.default.App.API, { "c": 5, "un": _this.username, "pw": md5(_this.password), "nn": nickname, "inv": inviteCode }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    if (err != null) {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                        return;
                    }
                    //Utils.Log("Update NickName:" + JSON.stringify(err) + " => " + JSON.stringify(res));
                    if (!res["success"]) {
                        switch (parseInt(res["errorCode"])) {
                            case 1001:
                                App_1.default.instance.alertDialog.showMsg("Mất kết nối đến Server!");
                                break;
                            case 1005:
                                App_1.default.instance.alertDialog.showMsg("Tài khoản không tồn tại.");
                                break;
                            case 1007:
                                App_1.default.instance.alertDialog.showMsg("Mật khẩu không chính xác.");
                                break;
                            case 1109:
                                App_1.default.instance.alertDialog.showMsg("Tài khoản đã bị khóa.");
                                break;
                            case 106:
                                App_1.default.instance.alertDialog.showMsg("Tên hiển thị không hợp lệ.");
                                break;
                            case 1010:
                            case 1013:
                                App_1.default.instance.alertDialog.showMsg("Tên hiển thị đã tồn tại.");
                                break;
                            case 1011:
                                App_1.default.instance.alertDialog.showMsg("Tên hiển thị khôn được trùng với tên đăng nhập.");
                                break;
                            case 116:
                                App_1.default.instance.alertDialog.showMsg("Không chọn tên hiển thị nhạy cảm.");
                                break;
                            case 1114:
                                App_1.default.instance.alertDialog.showMsg("Hệ thống đang bảo trì. Vui lòng quay trở lại sau!");
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg("Xảy ra lỗi, vui lòng thử lại sau!");
                                break;
                        }
                        return;
                    }
                    else {
                        switch (parseInt(res["errorCode"])) {
                            case 0:
                                App_1.default.instance.showLoading(false);
                                //	App.instance.showLoading(true);
                                //  //Utils.Log("Đăng nhập thành công.");
                                Configs_1.default.Login.IsLogin = true;
                                Configs_1.default.Login.Username = _this_1.username;
                                Configs_1.default.Login.Password = _this_1.password;
                                SPUtils_1.default.setUserName(_this.username);
                                SPUtils_1.default.setUserPass(_this.password);
                                LogEvent_1.default.getInstance().sendEventClickShop("vin", 100000);
                                LogEvent_1.default.getInstance().sendEventSdt("0123456789");
                                LogEvent_1.default.getInstance().sendEventPurchase("vin", 100000);
                                LogEvent_1.default.getInstance().sendEventSigupSuccess("normal");
                                LogEvent_1.default.getInstance().sendEventLogin("normal");
                                Configs_1.default.Login.AccessToken = res["accessToken"];
                                Configs_1.default.Login.SessionKey = res["sessionKey"];
                                var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                                var dataLogin = {};
                                dataLogin["u"] = userInfo["nickname"];
                                dataLogin["at"] = res["accessToken"];
                                Configs_1.default.Login.Nickname = userInfo["nickname"];
                                Configs_1.default.Login.Avatar = userInfo["avatar"];
                                Configs_1.default.Login.Coin = userInfo["vinTotal"];
                                Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                                Configs_1.default.Login.CreateTime = userInfo["createTime"];
                                Configs_1.default.Login.Birthday = userInfo["birthday"];
                                Configs_1.default.Login.Birthday = userInfo["birthday"];
                                Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                                Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                                var data = {};
                                data["c"] = 2008;
                                data["nn"] = Configs_1.default.Login.Nickname;
                                data["pn"] = 1;
                                data["l"] = 10;
                                Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
                                    App_1.default.instance.showLoading(false);
                                    var list = JSON.parse(res.data).data;
                                    Configs_1.default.Login.ListBankRut = list;
                                });
                                // MiniGameNetworkClient.getInstance().sendCheck(new cmd.ReqSubcribeJackpots());
                                SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                                break;
                        }
                    }
                    // _this.dismiss();
                    _this_1.nodeChangeNickName.active = false;
                    _this_1.nodeNotiTele.active = true;
                    var eventHandler = new cc.Component.EventHandler();
                    eventHandler.target = _this_1.node;
                    eventHandler.component = "PopupUpdateNickname";
                    eventHandler.handler = "onClickConfirm";
                    _this_1.btnConfirm.clickEvents[0] = eventHandler;
                    _this_1.btnConfirm.node.getComponentInChildren(cc.Label).string = App_1.default.instance.getTextLang("txt_confirm").toUpperCase();
                    _this_1.lbTitle.string = App_1.default.instance.getTextLang("txt_notify").toUpperCase();
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.UPDATE_NICKNAME_SUCCESS, { "username": _this.username, "password": _this.password });
                });
            }
            else {
                App_1.default.instance.showLoading(true);
                Http_1.default.get(Configs_1.default.App.API, { "c": 5, "s": "fb", "at": this.at, "nn": nickname, "inv": inviteCode }, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    if (err != null) {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                        return;
                    }
                    //Utils.Log("Update NickName:" + JSON.stringify(err) + " => " + JSON.stringify(res));
                    if (!res["success"]) {
                        switch (parseInt(res["errorCode"])) {
                            case 1001:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                                break;
                            case 1005:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_not_exsist'));
                                break;
                            case 1007:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_password_error'));
                                break;
                            case 1109:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_blocked'));
                                break;
                            case 106:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_nickname_error'));
                                break;
                            case 1010:
                            case 1013:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_nickname_exist'));
                                break;
                            case 1011:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_nickname_error1'));
                                break;
                            case 116:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_nickname_error2'));
                                break;
                            case 1114:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err6'));
                                break;
                            default:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                                break;
                        }
                        return;
                    }
                    else {
                        switch (parseInt(res["errorCode"])) {
                            case 0:
                                App_1.default.instance.showLoading(false);
                                //  //Utils.Log("Đăng nhập thành công.");
                                Configs_1.default.Login.IsLogin = true;
                                LogEvent_1.default.getInstance().sendEventClickShop("vin", 100000);
                                LogEvent_1.default.getInstance().sendEventSdt("0123456789");
                                LogEvent_1.default.getInstance().sendEventPurchase("vin", 100000);
                                LogEvent_1.default.getInstance().sendEventSigupSuccess("normal");
                                LogEvent_1.default.getInstance().sendEventLogin("normal");
                                Configs_1.default.Login.AccessToken = res["accessToken"];
                                Configs_1.default.Login.SessionKey = res["sessionKey"];
                                var userInfo = JSON.parse(base64.decode(Configs_1.default.Login.SessionKey));
                                var dataLogin = {};
                                dataLogin["u"] = userInfo["nickname"];
                                dataLogin["at"] = res["accessToken"];
                                Configs_1.default.Login.Nickname = userInfo["nickname"];
                                Configs_1.default.Login.Avatar = userInfo["avatar"];
                                Configs_1.default.Login.Coin = userInfo["vinTotal"];
                                Configs_1.default.Login.IpAddress = userInfo["ipAddress"];
                                Configs_1.default.Login.CreateTime = userInfo["createTime"];
                                Configs_1.default.Login.Birthday = userInfo["birthday"];
                                Configs_1.default.Login.Birthday = userInfo["birthday"];
                                Configs_1.default.Login.VipPoint = userInfo["vippoint"];
                                Configs_1.default.Login.VipPointSave = userInfo["vippointSave"];
                                MiniGameNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeJackpots());
                                SlotNetworkClient_1.default.getInstance().sendCheck(new Lobby_Cmd_1.default.ReqSubcribeHallSlot());
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_INFO_UPDATED);
                                break;
                        }
                    }
                    // _this.dismiss();
                    _this_1.nodeChangeNickName.active = false;
                    _this_1.nodeNotiTele.active = true;
                    var eventHandler = new cc.Component.EventHandler();
                    eventHandler.target = _this_1.node;
                    eventHandler.component = "PopupUpdateNickname";
                    eventHandler.handler = "onClickConfirm";
                    _this_1.btnConfirm.clickEvents[0] = eventHandler;
                    _this_1.btnConfirm.node.getComponentInChildren(cc.Label).string = App_1.default.instance.getTextLang("txt_confirm");
                    _this_1.lbTitle.string = App_1.default.instance.getTextLang("txt_notify");
                });
            }
        };
        PopupUpdateNickname.prototype.onClickConfirm = function () {
            this.dismiss();
        };
        PopupUpdateNickname.prototype.showPopupNotiTele = function () {
        };
        __decorate([
            property(cc.EditBox)
        ], PopupUpdateNickname.prototype, "edbNickname", void 0);
        __decorate([
            property(cc.EditBox)
        ], PopupUpdateNickname.prototype, "edbInviteCode", void 0);
        __decorate([
            property(cc.Node)
        ], PopupUpdateNickname.prototype, "nodeNotiTele", void 0);
        __decorate([
            property(cc.Node)
        ], PopupUpdateNickname.prototype, "nodeChangeNickName", void 0);
        __decorate([
            property(cc.Button)
        ], PopupUpdateNickname.prototype, "btnConfirm", void 0);
        __decorate([
            property(cc.Label)
        ], PopupUpdateNickname.prototype, "lbTitle", void 0);
        PopupUpdateNickname = __decorate([
            ccclass
        ], PopupUpdateNickname);
        return PopupUpdateNickname;
    }(Dialog_1.default));
    Lobby.PopupUpdateNickname = PopupUpdateNickname;
})(Lobby || (Lobby = {}));
exports.default = Lobby.PopupUpdateNickname;

cc._RF.pop();