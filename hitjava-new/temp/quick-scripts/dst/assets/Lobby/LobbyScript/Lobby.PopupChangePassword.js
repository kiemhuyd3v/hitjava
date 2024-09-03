
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupChangePassword.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f484cLb6SZFhKtzWQAjnW01', 'Lobby.PopupChangePassword');
// Lobby/LobbyScript/Lobby.PopupChangePassword.ts

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
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupChangePassword = /** @class */ (function (_super) {
    __extends(PopupChangePassword, _super);
    function PopupChangePassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.info = null;
        _this.continue = null;
        _this.edbOldPassword = null;
        _this.edbNewPassword = null;
        _this.edbReNewPassword = null;
        _this.edbOTP = null;
        return _this;
    }
    PopupChangePassword.prototype.start = function () {
        var _this = this;
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.CHANGE_PASSWORD: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResChangePassword(data);
                    ////Utils.Log("res changepass:", res);
                    switch (res.error) {
                        case 1:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err6'));
                            break;
                        case 3:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_old_password_incorrect'));
                            break;
                        case 4:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_change_password_success'));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error') + "\n" + res.error);
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.GET_OTP: {
                    if (!_this.node.active)
                        return;
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResGetOTP(data);
                    if (res.error == 0) {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_send'));
                    }
                    else if (res.error == 30) {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_delay_time'));
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_action_not_success'));
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.SEND_OTP: {
                    var res = new Lobby_Cmd_1.default.ResSendOTP(data);
                    App_1.default.instance.showLoading(false);
                    switch (res.error) {
                        case 0:
                            break;
                        case 1:
                        case 2:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error_exchange'));
                            break;
                        case 77:
                        case 3:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                            break;
                        case 4:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_expired_otp'));
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error') + "\n" + res.error);
                            break;
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.RESULT_CHANGE_PASSWORD: {
                    var res = new Lobby_Cmd_1.default.ResSendOTP(data);
                    App_1.default.instance.showLoading(false);
                    switch (res.error) {
                        case 0:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_change_password_success'));
                            _this.dismiss();
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error') + "\n" + res.error);
                            break;
                    }
                    break;
                }
            }
        }, this);
    };
    PopupChangePassword.prototype.show = function () {
        _super.prototype.show.call(this);
        this.info.active = true;
        this.continue.active = false;
        this.edbOldPassword.string = "";
        this.edbNewPassword.string = "";
        this.edbReNewPassword.string = "";
        this.edbOTP.string = "";
    };
    PopupChangePassword.prototype.actSubmit = function () {
        var oldPassword = this.edbOldPassword.string.trim();
        var newPassword = this.edbNewPassword.string.trim();
        var reNewPassword = this.edbReNewPassword.string.trim();
        if (oldPassword.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_old_password_not_blank'));
            return;
        }
        if (newPassword.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_new_password_not_blank'));
            return;
        }
        if (reNewPassword != newPassword) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_password_not_same'));
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqChangePassword(oldPassword, newPassword));
    };
    PopupChangePassword.prototype.actGetOTP = function () {
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetOTP());
    };
    PopupChangePassword.prototype.actContinue = function () {
        var otp = this.edbOTP.string.trim();
        if (otp.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_blank'));
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSendOTP(otp, false ? 1 : 0));
    };
    __decorate([
        property(cc.Node)
    ], PopupChangePassword.prototype, "info", void 0);
    __decorate([
        property(cc.Node)
    ], PopupChangePassword.prototype, "continue", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupChangePassword.prototype, "edbOldPassword", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupChangePassword.prototype, "edbNewPassword", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupChangePassword.prototype, "edbReNewPassword", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupChangePassword.prototype, "edbOTP", void 0);
    PopupChangePassword = __decorate([
        ccclass
    ], PopupChangePassword);
    return PopupChangePassword;
}(Dialog_1.default));
exports.default = PopupChangePassword;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cENoYW5nZVBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUE4QjtBQUM5QiwyQ0FBc0M7QUFDdEMsaURBQTRDO0FBRTVDLGlGQUE0RTtBQUM1RSx1RUFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUEySUM7UUF6SUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLG9CQUFjLEdBQWUsSUFBSSxDQUFDO1FBRWxDLG9CQUFjLEdBQWUsSUFBSSxDQUFDO1FBRWxDLHNCQUFnQixHQUFlLElBQUksQ0FBQztRQUdwQyxZQUFNLEdBQWUsSUFBSSxDQUFDOztJQTZIOUIsQ0FBQztJQTNIRyxtQ0FBSyxHQUFMO1FBQUEsaUJBNkVDO1FBNUVHLCtCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFDLElBQUk7WUFDakQsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBQzlCLElBQUksUUFBUSxHQUFHLElBQUksMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxRQUFRLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsS0FBSyxtQkFBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDM0IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUksbUJBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsc0NBQXNDO29CQUN2QyxRQUFRLEdB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QU8sQ0FBQzsrREFDYTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lFQUNlO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ0s7SUFkVCxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQTJJdkM7SUFBRCwwQkFBQztDQTNJRCxBQTJJQyxDQTNJZ0QsZ0JBQU0sR0EySXREO2tCQTNJb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY21kIGZyb20gXCIuL0xvYmJ5LkNtZFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cENoYW5nZVBhc3N3b3JkIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbmZvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250aW51ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJPbGRQYXNzd29yZDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiTmV3UGFzc3dvcmQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYlJlTmV3UGFzc3dvcmQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiT1RQOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQU5HRV9QQVNTV09SRDoge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNDaGFuZ2VQYXNzd29yZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJyZXMgY2hhbmdlcGFzczpcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2VycjYnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb2xkX3Bhc3N3b3JkX2luY29ycmVjdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jaGFuZ2VfcGFzc3dvcmRfc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcicpICsgXCJcXG5cIiArIHJlcy5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0VUX09UUDoge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzR2V0T1RQKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X290cF9zZW5kJykpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5lcnJvciA9PSAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb3RwX2RlbGF5X3RpbWUnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9hY3Rpb25fbm90X3N1Y2Nlc3MnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0VORF9PVFA6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzU2VuZE9UUChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcl9leGNoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzc6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfZXhwaXJlZF9vdHAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3InKSArIFwiXFxuXCIgKyByZXMuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVF9DSEFOR0VfUEFTU1dPUkQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzU2VuZE9UUChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jaGFuZ2VfcGFzc3dvcmRfc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcicpICsgXCJcXG5cIiArIHJlcy5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuaW5mby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRpbnVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVkYk9sZFBhc3N3b3JkLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRiTmV3UGFzc3dvcmQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5lZGJSZU5ld1Bhc3N3b3JkLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRiT1RQLnN0cmluZyA9IFwiXCI7XG4gICAgfVxuXG4gICAgYWN0U3VibWl0KCkge1xuICAgICAgICBsZXQgb2xkUGFzc3dvcmQgPSB0aGlzLmVkYk9sZFBhc3N3b3JkLnN0cmluZy50cmltKCk7XG4gICAgICAgIGxldCBuZXdQYXNzd29yZCA9IHRoaXMuZWRiTmV3UGFzc3dvcmQuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgbGV0IHJlTmV3UGFzc3dvcmQgPSB0aGlzLmVkYlJlTmV3UGFzc3dvcmQuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKG9sZFBhc3N3b3JkLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9vbGRfcGFzc3dvcmRfbm90X2JsYW5rJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmV3X3Bhc3N3b3JkX25vdF9ibGFuaycpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVOZXdQYXNzd29yZCAhPSBuZXdQYXNzd29yZCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcGFzc3dvcmRfbm90X3NhbWUnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxQ2hhbmdlUGFzc3dvcmQob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSk7XG4gICAgfVxuXG4gICAgYWN0R2V0T1RQKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRPVFAoKSk7XG4gICAgfVxuXG4gICAgYWN0Q29udGludWUoKSB7XG4gICAgICAgIGxldCBvdHAgPSB0aGlzLmVkYk9UUC5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAob3RwLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9vdHBfYmxhbmsnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxU2VuZE9UUChvdHAsIGZhbHNlID8gMSA6IDApKTtcbiAgICB9XG59XG4iXX0=