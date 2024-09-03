
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupForgetPassword.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEZvcmdldFBhc3N3b3JkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUQsdUNBQU07SUFBdkQ7UUFBQSxxRUF5SUM7UUF2SUcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLFlBQU0sR0FBZSxJQUFJLENBQUM7UUFFMUIsa0JBQVksR0FBYyxJQUFJLENBQUM7O0lBeUhuQyxDQUFDO0lBckhHLGtDQUFJLEdBQUo7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSwrQ0FBaUIsR0FBeEI7UUFBQSxpQkFX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RS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkRBQ1M7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3VEQUNLO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ1c7SUFoQmQsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0F5SXZDO0lBQUQsMEJBQUM7Q0F6SUQsQUF5SUMsQ0F6SWdELGdCQUFNLEdBeUl0RDtrQkF6SW9CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwRm9yZ2V0UGFzc3dvcmQgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRpbnVlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYlVzZXJuYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJDYXB0Y2hhOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckNhcHRjaGE6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJPVFA6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQXBwT1RQOiBjYy5Ub2dnbGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjYXB0Y2hhSWQ7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuaW5mby5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRpbnVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvZ2dsZUFwcE9UUC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZGJDYXB0Y2hhLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRiVXNlcm5hbWUuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5lZGJPVFAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5hY3RSZWZyZXNoQ2FwdGNoYSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RSZWZyZXNoQ2FwdGNoYSgpIHtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMjQgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhcHRjaGFJZCA9IHJlc1tcImlkXCJdO1xuICAgICAgICAgICAgVXRpbHMubG9hZFNwcml0ZUZyYW1lRnJvbUJhc2U2NChyZXNbXCJpbWdcIl0sIChzcHJGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQ2FwdGNoYS5zcHJpdGVGcmFtZSA9IHNwckZyYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFjdFN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy5lZGJVc2VybmFtZS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBsZXQgY2FwdGNoYSA9IHRoaXMuZWRiQ2FwdGNoYS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX3VzZXJuYW1lX25vdF9ibGFuaycpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FwdGNoYS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb3RwX2JsYW5rJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTI3LCBcInVuXCI6IHVzZXJuYW1lLCBcImNwXCI6IGNhcHRjaGEsIFwiY2lkXCI6IHRoaXMuY2FwdGNoYUlkIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcjEnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChyZXNbXCJlcnJvckNvZGVcIl0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTE1XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRiQ2FwdGNoYS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdFJlZnJlc2hDYXB0Y2hhKCk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfaW5jb3JyZWN0X290cCcpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjExNlwiOlxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RpZnlfZmFzdF9hY3Rpb24nKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRiQ2FwdGNoYS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdFJlZnJlc2hDYXB0Y2hhKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCIxMDAxXCI6XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2NoZWNrX2Nvbm5lY3QnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0UmVmcmVzaENhcHRjaGEoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjEwMDVcIjpcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9ub3RfZXhzaXN0JykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkYkNhcHRjaGEuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RSZWZyZXNoQ2FwdGNoYSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMjAwMVwiOlxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkjhu4cgdGjhu5FuZyBraMO0bmcgaOG7lyB0cuG7oyBjw6FjIHTDoGkga2hv4bqjbiBjaMawYSBj4bqtcCBuaOG6rXQgTmlja25hbWUhXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVkYkNhcHRjaGEuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RSZWZyZXNoQ2FwdGNoYSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTAyM1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGludWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcicpICsgXCJcXG5cIiArIHJlc1tcImVycm9yQ29kZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRiQ2FwdGNoYS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdFJlZnJlc2hDYXB0Y2hhKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhY3RDb250aW51ZSgpIHtcbiAgICAgICAgbGV0IHVzZXJuYW1lID0gdGhpcy5lZGJVc2VybmFtZS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBsZXQgb3RwID0gdGhpcy5lZGJPVFAuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKG90cC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb3RwX2JsYW5rJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTI4LCBcInVuXCI6IHVzZXJuYW1lLCBcIm90cFwiOiBvdHAsIFwidHlwZVwiOiAodGhpcy50b2dnbGVBcHBPVFAuaXNDaGVja2VkID8gMSA6IDApIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZXJyb3InKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNbXCJlcnJvckNvZGVcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjEwMDFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyNicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTAwOFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxMDIxXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X2V4cGlyZWRfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxMDIyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X2V4cGlyZWRfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxMTE0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2VycjYnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3InKSArIFwiXFxuXCIgKyByZXNbXCJlcnJvckNvZGVcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2hhbmdlX3Bhc3N3b3JkX25vdGUnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==