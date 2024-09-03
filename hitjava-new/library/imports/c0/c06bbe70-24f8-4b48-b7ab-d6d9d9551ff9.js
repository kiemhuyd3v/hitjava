"use strict";
cc._RF.push(module, 'c06bb5wJPhLSLer1tnZVR/5', 'Lobby.PopupForgetPassword');
// Lobby/LobbyScript/Lobby.PopupForgetPassword.ts

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
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupForgetPassword = /** @class */ (function (_super) {
    __extends(PopupForgetPassword, _super);
    function PopupForgetPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.info = null;
        _this.continue = null;
        _this.edbUsername = null;
        _this.edbCaptcha = null;
        _this.sprCaptcha = null;
        _this.edbOTP = null;
        _this.toggleAppOTP = null;
        return _this;
    }
    PopupForgetPassword.prototype.show = function () {
        _super.prototype.show.call(this);
        this.info.active = true;
        this.continue.active = false;
        this.toggleAppOTP.isChecked = false;
        this.edbCaptcha.string = "";
        this.edbUsername.string = "";
        this.edbOTP.string = "";
        this.actRefreshCaptcha();
    };
    PopupForgetPassword.prototype.actRefreshCaptcha = function () {
        var _this = this;
        Http_1.default.get(Configs_1.default.App.API, { "c": 124 }, function (err, res) {
            if (err != null) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                return;
            }
            _this.captchaId = res["id"];
            Utils_1.default.loadSpriteFrameFromBase64(res["img"], function (sprFrame) {
                _this.sprCaptcha.spriteFrame = sprFrame;
            });
        });
    };
    PopupForgetPassword.prototype.actSubmit = function () {
        var _this = this;
        var username = this.edbUsername.string.trim();
        var captcha = this.edbCaptcha.string.trim();
        if (username.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_username_not_blank'));
            return;
        }
        if (captcha.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_blank'));
            return;
        }
        Http_1.default.get(Configs_1.default.App.API, { "c": 127, "un": username, "cp": captcha, "cid": this.captchaId }, function (err, res) {
            if (err != null) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error1'));
                return;
            }
            switch (res["errorCode"]) {
                case "115":
                    _this.edbCaptcha.string = "";
                    _this.actRefreshCaptcha();
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                    break;
                case "116":
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_notify_fast_action'));
                    _this.edbCaptcha.string = "";
                    _this.actRefreshCaptcha();
                    break;
                case "1001":
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                    _this.actRefreshCaptcha();
                    break;
                case "1005":
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_not_exsist'));
                    _this.edbCaptcha.string = "";
                    _this.actRefreshCaptcha();
                    break;
                case "2001":
                    App_1.default.instance.alertDialog.showMsg("Hệ thống không hỗ trợ các tài khoản chưa cập nhật Nickname!");
                    _this.edbCaptcha.string = "";
                    _this.actRefreshCaptcha();
                    break;
                case "1023":
                    _this.info.active = false;
                    _this.continue.active = true;
                    break;
                default:
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error') + "\n" + res["errorCode"]);
                    _this.edbCaptcha.string = "";
                    _this.actRefreshCaptcha();
                    break;
            }
        });
    };
    PopupForgetPassword.prototype.actContinue = function () {
        var _this = this;
        var username = this.edbUsername.string.trim();
        var otp = this.edbOTP.string.trim();
        if (otp.length == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_otp_blank'));
            return;
        }
        Http_1.default.get(Configs_1.default.App.API, { "c": 128, "un": username, "otp": otp, "type": (this.toggleAppOTP.isChecked ? 1 : 0) }, function (err, res) {
            if (err != null) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                return;
            }
            if (!res["success"]) {
                switch (res["errorCode"]) {
                    case "1001":
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err6'));
                        break;
                    case "1008":
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                        break;
                    case "1021":
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_expired_otp'));
                        break;
                    case "1022":
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_expired_otp'));
                        break;
                    case "1114":
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err6'));
                        break;
                    default:
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_unknown_error') + "\n" + res["errorCode"]);
                        break;
                }
                return;
            }
            _this.dismiss();
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_change_password_note'));
        });
    };
    __decorate([
        property(cc.Node)
    ], PopupForgetPassword.prototype, "info", void 0);
    __decorate([
        property(cc.Node)
    ], PopupForgetPassword.prototype, "continue", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupForgetPassword.prototype, "edbUsername", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupForgetPassword.prototype, "edbCaptcha", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupForgetPassword.prototype, "sprCaptcha", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupForgetPassword.prototype, "edbOTP", void 0);
    __decorate([
        property(cc.Toggle)
    ], PopupForgetPassword.prototype, "toggleAppOTP", void 0);
    PopupForgetPassword = __decorate([
        ccclass
    ], PopupForgetPassword);
    return PopupForgetPassword;
}(Dialog_1.default));
exports.default = PopupForgetPassword;

cc._RF.pop();