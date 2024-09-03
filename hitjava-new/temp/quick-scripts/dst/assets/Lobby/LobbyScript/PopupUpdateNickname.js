
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/PopupUpdateNickname.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQb3B1cFVwZGF0ZU5pY2tuYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUVoRCwrQ0FBMEM7QUFDMUMsZ0VBQTJEO0FBQzNELHlDQUE4QjtBQUM5QiwyQ0FBc0M7QUFDdEMsdUVBQWtFO0FBQ2xFLGlEQUE0QztBQUM1QyxtREFBOEM7QUFFOUMsaUZBQTRFO0FBQzVFLHlFQUFvRTtBQUU5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLEtBQUssQ0FtUmQ7QUFuUkQsV0FBVSxLQUFLO0lBRVg7UUFBeUMsdUNBQU07UUFBL0M7WUFBQSx1RUErUUM7WUE1UUcsbUJBQVcsR0FBZSxJQUFJLENBQUM7WUFFL0IscUJBQWEsR0FBZSxJQUFJLENBQUM7WUFFakMsb0JBQVksR0FBWSxJQUFJLENBQUM7WUFFN0IsMEJBQWtCLEdBQVksSUFBSSxDQUFDO1lBRW5DLGtCQUFVLEdBQWMsSUFBSSxDQUFDO1lBRTdCLGVBQU8sR0FBYSxJQUFJLENBQUM7WUFHakIsZ0JBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsZ0JBQVEsR0FBVyxFQUFFLENBQUM7WUFDdEIsVUFBRSxHQUFXLEVBQUUsQ0FBQzs7UUE2UDVCLENBQUM7UUE1UEcsa0NBQUksR0FBSjtZQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1lBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDL0IsSUFB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YUFBYSxDQUFDLENBQUM7b0JBQ3ZHLE9BQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqRSxDQUFDLENBQUMsQ0FBQzthQUNOO1FBRUwsQ0FBQztRQUNELDRDQUFjLEdBQWQ7WUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUNELCtDQUFpQixHQUFqQjtRQUVBLENBQUM7UUEzUUQ7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnRUFDVTtRQUUvQjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2tFQUNZO1FBRWpDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aUVBQ1c7UUFFN0I7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1RUFDaUI7UUFFbkM7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrREFDUztRQUU3QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNNO1FBYmhCLG1CQUFtQjtZQUQvQixPQUFPO1dBQ0ssbUJBQW1CLENBK1EvQjtRQUFELDBCQUFDO0tBL1FELEFBK1FDLENBL1F3QyxnQkFBTSxHQStROUM7SUEvUVkseUJBQW1CLHNCQStRL0IsQ0FBQTtBQUVMLENBQUMsRUFuUlMsS0FBSyxLQUFMLEtBQUssUUFtUmQ7QUFDRCxrQkFBZSxLQUFLLENBQUMsbUJBQW1CLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvR2xvYmFsXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IExvZ0V2ZW50IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Mb2dFdmVudC9Mb2dFdmVudFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9Mb2JieS5DbWRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1NQVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBTbG90TmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxubmFtZXNwYWNlIExvYmJ5IHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cFVwZGF0ZU5pY2tuYW1lIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgICAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICAgICAgZWRiTmlja25hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICAgICAgZWRiSW52aXRlQ29kZTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBub2RlTm90aVRlbGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgbm9kZUNoYW5nZU5pY2tOYW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICAgICAgYnRuQ29uZmlybTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgICAgICBsYlRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgICAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBwcml2YXRlIGF0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5lZGJOaWNrbmFtZS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5ub2RlTm90aVRlbGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGVDaGFuZ2VOaWNrTmFtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lZGJJbnZpdGVDb2RlLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJVUkwgR2FtZT09XCIgKyB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICAgICAgICAgIC8vIGxldCB1cmwgPSBcImh0dHBzOi8vcGxheS5GQU5WSU4ud0lOLz9hZmY9Tmh1bmdOZ2FvNFwiO1xuICAgICAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCJhZmY9XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleE9mRXF1YWwgPSB1cmwuaW5kZXhPZihcIj1cIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnZpdGVDb2RlID0gdXJsLnN1YnN0cmluZyhpbmRleE9mRXF1YWwgKyAxLCB1cmwubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGJJbnZpdGVDb2RlLnN0cmluZyA9IGludml0ZUNvZGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRiSW52aXRlQ29kZS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNob3cyKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcblxuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gICAgICAgICAgICB0aGlzLmF0ID0gXCJcIjtcblxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNob3dGYihhdCkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLmF0ID0gYXQ7XG4gICAgICAgICAgICB0aGlzLnVzZXJuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGRpc21pc3MoKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGFjdFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBsZXQgbmlja25hbWUgPSB0aGlzLmVkYk5pY2tuYW1lLnN0cmluZy50cmltKCk7XG4gICAgICAgICAgICBsZXQgaW52aXRlQ29kZSA9IHRoaXMuZWRiSW52aXRlQ29kZS5zdHJpbmcudHJpbSgpO1xuICAgICAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fbmlja25hbWVfbm90X2JsYW5rJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmF0ID09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAvL25vcm1hbFxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDUsIFwidW5cIjogX3RoaXMudXNlcm5hbWUsIFwicHdcIjogbWQ1KF90aGlzLnBhc3N3b3JkKSwgXCJublwiOiBuaWNrbmFtZSwgXCJpbnZcIjogaW52aXRlQ29kZSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIlVwZGF0ZSBOaWNrTmFtZTpcIiArIEpTT04uc3RyaW5naWZ5KGVycikgKyBcIiA9PiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc1tcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyc2VJbnQocmVzW1wiZXJyb3JDb2RlXCJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJN4bqldCBr4bq/dCBu4buRaSDEkeG6v24gU2VydmVyIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlTDoGkga2hv4bqjbiBraMO0bmcgdOG7k24gdOG6oWkuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiTeG6rXQga2jhuql1IGtow7RuZyBjaMOtbmggeMOhYy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTEwOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw6BpIGtob+G6o24gxJHDoyBi4buLIGtow7NhLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOqbiBoaeG7g24gdGjhu4sga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlTDqm4gaGnhu4NuIHRo4buLIMSRw6MgdOG7k24gdOG6oWkuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOqbiBoaeG7g24gdGjhu4sga2jDtG4gxJHGsOG7o2MgdHLDuW5nIHbhu5tpIHTDqm4gxJHEg25nIG5o4bqtcC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIktow7RuZyBjaOG7jW4gdMOqbiBoaeG7g24gdGjhu4sgbmjhuqF5IGPhuqNtLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkjhu4cgdGjhu5FuZyDEkWFuZyBi4bqjbyB0csOsLiBWdWkgbMOybmcgcXVheSB0cuG7nyBs4bqhaSBzYXUhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIljhuqN5IHJhIGzhu5dpLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG5cdFx0XHRcdFx0XHRcdC8vXHRBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhcIsSQxINuZyBuaOG6rXAgdGjDoG5oIGPDtG5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Jc0xvZ2luID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRDb25maWdzLkxvZ2luLlVzZXJuYW1lID0gdGhpcy51c2VybmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uUGFzc3dvcmQgPSB0aGlzLnBhc3N3b3JkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJOYW1lKF90aGlzLnVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU1BVdGlscy5zZXRVc2VyUGFzcyhfdGhpcy5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50Q2xpY2tTaG9wKFwidmluXCIsIDEwMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2R0KFwiMDEyMzQ1Njc4OVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRQdXJjaGFzZShcInZpblwiLCAxMDAwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudFNpZ3VwU3VjY2VzcyhcIm5vcm1hbFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRMb2dpbihcIm5vcm1hbFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gcmVzW1wiYWNjZXNzVG9rZW5cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSA9IHJlc1tcInNlc3Npb25LZXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VySW5mbyA9IEpTT04ucGFyc2UoYmFzZTY0LmRlY29kZShDb25maWdzLkxvZ2luLlNlc3Npb25LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGFMb2dpbiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTG9naW5bXCJ1XCJdID0gdXNlckluZm9bXCJuaWNrbmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUxvZ2luW1wiYXRcIl0gPSByZXNbXCJhY2Nlc3NUb2tlblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSA9IHVzZXJJbmZvW1wibmlja25hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQXZhdGFyID0gdXNlckluZm9bXCJhdmF0YXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHVzZXJJbmZvW1widmluVG90YWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uSXBBZGRyZXNzID0gdXNlckluZm9bXCJpcEFkZHJlc3NcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ3JlYXRlVGltZSA9IHVzZXJJbmZvW1wiY3JlYXRlVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5CaXJ0aGRheSA9IHVzZXJJbmZvW1wiYmlydGhkYXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQmlydGhkYXkgPSB1c2VySW5mb1tcImJpcnRoZGF5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlZpcFBvaW50ID0gdXNlckluZm9bXCJ2aXBwb2ludFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5WaXBQb2ludFNhdmUgPSB1c2VySW5mb1tcInZpcHBvaW50U2F2ZVwiXTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGRhdGFbXCJjXCJdID0gMjAwODtcbiAgICAgICAgICAgICAgICBkYXRhW1wibm5cIl0gPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICAgICAgICAgIGRhdGFbXCJwblwiXSA9IDE7XG4gICAgICAgICAgICAgICAgZGF0YVtcImxcIl0gPSAxMDtcbiAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIGRhdGEsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTGlzdEJhbmtSdXQgPSBsaXN0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5SZXFTdWJjcmliZUphY2twb3RzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSGFsbFNsb3QoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBfdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUNoYW5nZU5pY2tOYW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVOb3RpVGVsZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiUG9wdXBVcGRhdGVOaWNrbmFtZVwiO1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuaGFuZGxlciA9IFwib25DbGlja0NvbmZpcm1cIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db25maXJtLmNsaWNrRXZlbnRzWzBdID0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm0ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY29uZmlybVwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdGlmeVwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVQREFURV9OSUNLTkFNRV9TVUNDRVNTLCB7IFwidXNlcm5hbWVcIjogX3RoaXMudXNlcm5hbWUsIFwicGFzc3dvcmRcIjogX3RoaXMucGFzc3dvcmQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiA1LCBcInNcIjogXCJmYlwiLCBcImF0XCI6IHRoaXMuYXQsIFwibm5cIjogbmlja25hbWUsIFwiaW52XCI6IGludml0ZUNvZGUgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJVcGRhdGUgTmlja05hbWU6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpICsgXCIgPT4gXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NoZWNrX2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ub3RfZXhzaXN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX3Bhc3N3b3JkX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDExMDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfYmxvY2tlZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX25pY2tuYW1lX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9uaWNrbmFtZV9leGlzdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9uaWNrbmFtZV9lcnJvcjEnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9uaWNrbmFtZV9lcnJvcjInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTExNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9lcnI2JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhcIsSQxINuZyBuaOG6rXAgdGjDoG5oIGPDtG5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Jc0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRDbGlja1Nob3AoXCJ2aW5cIiwgMTAwMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRTZHQoXCIwMTIzNDU2Nzg5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudFB1cmNoYXNlKFwidmluXCIsIDEwMDAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ0V2ZW50LmdldEluc3RhbmNlKCkuc2VuZEV2ZW50U2lndXBTdWNjZXNzKFwibm9ybWFsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dFdmVudC5nZXRJbnN0YW5jZSgpLnNlbmRFdmVudExvZ2luKFwibm9ybWFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gPSByZXNbXCJhY2Nlc3NUb2tlblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5TZXNzaW9uS2V5ID0gcmVzW1wic2Vzc2lvbktleVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJJbmZvID0gSlNPTi5wYXJzZShiYXNlNjQuZGVjb2RlKENvbmZpZ3MuTG9naW4uU2Vzc2lvbktleSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YUxvZ2luID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFMb2dpbltcInVcIl0gPSB1c2VySW5mb1tcIm5pY2tuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTG9naW5bXCJhdFwiXSA9IHJlc1tcImFjY2Vzc1Rva2VuXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLk5pY2tuYW1lID0gdXNlckluZm9bXCJuaWNrbmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BdmF0YXIgPSB1c2VySW5mb1tcImF2YXRhclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gdXNlckluZm9bXCJ2aW5Ub3RhbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5JcEFkZHJlc3MgPSB1c2VySW5mb1tcImlwQWRkcmVzc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5DcmVhdGVUaW1lID0gdXNlckluZm9bXCJjcmVhdGVUaW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkJpcnRoZGF5ID0gdXNlckluZm9bXCJiaXJ0aGRheVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5CaXJ0aGRheSA9IHVzZXJJbmZvW1wiYmlydGhkYXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uVmlwUG9pbnQgPSB1c2VySW5mb1tcInZpcHBvaW50XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlZpcFBvaW50U2F2ZSA9IHVzZXJJbmZvW1widmlwcG9pbnRTYXZlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5SZXFTdWJjcmliZUphY2twb3RzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSGFsbFNsb3QoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIF90aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlQ2hhbmdlTmlja05hbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZU5vdGlUZWxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJQb3B1cFVwZGF0ZU5pY2tuYW1lXCI7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNsaWNrQ29uZmlybVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm0uY2xpY2tFdmVudHNbMF0gPSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29uZmlybS5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jb25maXJtXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdGlmeVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIG9uQ2xpY2tDb25maXJtKCkge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgc2hvd1BvcHVwTm90aVRlbGUoKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTG9iYnkuUG9wdXBVcGRhdGVOaWNrbmFtZTtcbiJdfQ==