"use strict";
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