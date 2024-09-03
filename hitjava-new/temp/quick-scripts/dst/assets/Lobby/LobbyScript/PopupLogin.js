
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/PopupLogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQb3B1cExvZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUFrQztBQUNsQyxpRUFBNEQ7QUFDNUQscURBQWdEO0FBQ2hELG1EQUFrRDtBQUNsRCwrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBQ3RDLHVFQUFrRTtBQUNsRSxpREFBNEM7QUFDNUMsbURBQThDO0FBQzlDLHlFQUFvRTtBQUc5RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLEtBQUssQ0FnSmQ7QUFoSkQsV0FBVSxLQUFLO0lBR1g7UUFBbUMsaUNBQU07UUFBekM7WUFBQSxxRUE0SUM7WUF6SUcsaUJBQVcsR0FBZSxJQUFJLENBQUM7WUFFL0IsaUJBQVcsR0FBZSxJQUFJLENBQUM7WUFLL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7WUFFN0Isb0JBQWMsR0FBYyxJQUFJLENBQUM7O1FBZ0lyQyxDQUFDO1FBOUhHLDZCQUFLLEdBQUw7UUFDQSxDQUFDO1FBQ0QsNEJBQUksR0FBSixVQUFLLElBQVcsRUFBRSxJQUFXO1lBQXhCLHFCQUFBLEVBQUEsV0FBVztZQUFFLHFCQUFBLEVBQUEsV0FBVztZQUV6QixpQkFBTSxJQUFJLFdBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUYsSUFBSSxJQUFJ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V0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzt3QkFDOUUsTUFBTTtpQkFDYjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQXRJRDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBEQUNVO1FBRS9CO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MERBQ1U7UUFLL0I7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDVztRQUU3QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNhO1FBWnhCLGFBQWE7WUFEekIsT0FBTztXQUNLLGFBQWEsQ0E0SXpCO1FBQUQsb0JBQUM7S0E1SUQsQUE0SUMsQ0E1SWtDLGdCQUFNLEdBNEl4QztJQTVJWSxtQkFBYSxnQkE0SXpCLENBQUE7QUFDTCxDQUFDLEVBaEpTLEtBQUssS0FBTCxLQUFLLFFBZ0pkO0FBQ0Qsa0JBQWUsS0FBSyxDQUFDLGFBQWEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY21kIH0gZnJvbSBcIi4vTG9iYnkuQ21kXCI7XG5pbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQnVuZGxlQ29udHJvbFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9HbG9iYWxcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9TUFV0aWxzXCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL1Nsb3ROZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgTG9iYnkge1xuXG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgUG9wdXBSZWdpc3RlciBleHRlbmRzIERpYWxvZyB7XG5cbiAgICAgICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgICAgIGVkYlVzZXJuYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgICAgIGVkYlBhc3N3b3JkOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuXG5cbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIG5vZGVSZW1lbWJlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgICAgIHRvZ2dsZVJlbWVtYmVyOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICB9XG4gICAgICAgIHNob3coZXZlbiA9IG51bGwsIGRhdGEgPSBudWxsKSB7XG5cbiAgICAgICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMuZWRiVXNlcm5hbWUudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy5lZGJQYXNzd29yZC50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVJlbWVtYmVyLmlzQ2hlY2tlZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIklzUmVtZW1iZXJcIikgPT0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZVJlbWVtYmVyLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRiVXNlcm5hbWUuc3RyaW5nID0gU1BVdGlscy5nZXRVc2VyTmFtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRiUGFzc3dvcmQuc3RyaW5nID0gU1BVdGlscy5nZXRVc2VyUGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG4gICAgICAgIGF0Y1BvcHVwVXBkYXRlTmlja05hbWUodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICBsZXQgY2IgPSAocHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcHVwRGFpbHkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlBvcHVwVXBkYXRlTmlja25hbWVcIik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmNhbnZhcy5hZGRDaGlsZChwb3B1cERhaWx5Lm5vZGUpXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnBvcHVwVXBkYXRlTmlja25hbWUgPSBwb3B1cERhaWx5O1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5wb3B1cFVwZGF0ZU5pY2tuYW1lLnNob3cyKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJQb3B1cChcIlByZWZhYlBvcHVwL1BvcHVwVXBkYXRlTmlja25hbWVcIiwgY2IpO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIHB1YmxpYyBhY3RMb2dpbigpIHtcbiAgICAgICAgICAgIGxldCB1c2VybmFtZSA9IHRoaXMuZWRiVXNlcm5hbWUuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IHRoaXMuZWRiUGFzc3dvcmQuc3RyaW5nO1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiYWN0TG9naW46XCIgKyB1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiSXNSZW1lbWJlclwiLCB0aGlzLnRvZ2dsZVJlbWVtYmVyLmlzQ2hlY2tlZCA/IDEgOiAwKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIklzQXV0b0xvZ2luXCIsIHRoaXMudG9nZ2xlUmVtZW1iZXIuaXNDaGVja2VkID8gMSA6IDApO1xuICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RMb2dpbih1c2VybmFtZSwgcGFzc3dvcmQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuVFlQRV9MT0dJTiA9IFwiTk9STUFMXCI7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlVTRVJfTkFNRSA9IHVzZXJuYW1lO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5QQVNTX1dPUkQgPSBwYXNzd29yZDtcbiAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJOYW1lKHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICBTUFV0aWxzLnNldFVzZXJQYXNzKHBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgYWN0TG9naW5Ub2tlbihkYXRhKTogdm9pZCB7XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuID0gZGF0YS5hdDtcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4yID0gZGF0YS5hdDtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiAxNywgdTogZGF0YS51LCBhdDogZGF0YS5hdCB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyc2VJbnQocmVzW1wiZXJyb3JDb2RlXCJdKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCLEkMSDbmcgbmjhuq1wIHRow6BuaCBjw7RuZy5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gPSByZXNbXCJhY2Nlc3NUb2tlblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXRcIiwgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlNlc3Npb25LZXkgPSByZXNbXCJzZXNzaW9uS2V5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Jc0xvZ2luID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VySW5mbyA9IEpTT04ucGFyc2UoYmFzZTY0LmRlY29kZShDb25maWdzLkxvZ2luLlNlc3Npb25LZXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTmlja25hbWUgPSB1c2VySW5mb1tcIm5pY2tuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5BdmF0YXIgPSB1c2VySW5mb1tcImF2YXRhclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHVzZXJJbmZvW1widmluVG90YWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkx1Y2t5V2hlZWwgPSB1c2VySW5mb1tcImx1Y2t5Um90YXRlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5JcEFkZHJlc3MgPSB1c2VySW5mb1tcImlwQWRkcmVzc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ3JlYXRlVGltZSA9IHVzZXJJbmZvW1wiY3JlYXRlVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQmlydGhkYXkgPSB1c2VySW5mb1tcImJpcnRoZGF5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5WaXBQb2ludCA9IHVzZXJJbmZvW1widmlwcG9pbnRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLlZpcFBvaW50U2F2ZSA9IHVzZXJJbmZvW1widmlwcG9pbnRTYXZlXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBraG9pIHRhbyAzIHNvY2tldCBkb25nIHRob2kgZ3VpIGdvaSB0aW4gbGVuIHNlcnZlclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVKYWNrcG90cygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmJ1dHRvbk1pbmlHYW1lLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9JTkZPX1VQREFURUQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggKFZlcnNpb25Db25maWcuQ1BOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1cEJvb21UYW4uc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5wYW5lbE5vdExvZ2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5wYW5lbExvZ2luZWQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2xvZ2luX3VzZXJuYW1lX2Vycm9yXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExMDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ibG9ja2VkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX3Bhc3N3b3JkX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X2luY29ycmVjdF9vdHAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfbmFtZV9ub3RfdGhlX3NhbWUnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDIxOiBjYXNlIDEwMDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjAwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlTDqm4gbmjDom4gduG6rXQga2jDtG5nIMSRxrDhu6NjIMSR4buDIHRy4buRbmcuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTG9iYnkuUG9wdXBSZWdpc3RlcjtcbiJdfQ==