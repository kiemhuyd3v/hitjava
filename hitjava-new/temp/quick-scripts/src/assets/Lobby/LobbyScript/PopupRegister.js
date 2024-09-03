"use strict";
cc._RF.push(module, 'f70b5sgzlJJKpPiKlbtFiUW', 'PopupRegister');
// Lobby/LobbyScript/PopupRegister.ts

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
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var LogEvent_1 = require("../../Loading/src/LogEvent/LogEvent");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby;
(function (Lobby) {
    var PopupRegister = /** @class */ (function (_super) {
        __extends(PopupRegister, _super);
        function PopupRegister() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.edbUsername = null;
            _this_1.edbCodeDaiLi = null;
            _this_1.edbPassword = null;
            _this_1.edbRePassword = null;
            _this_1.edbCaptcha = null;
            _this_1.sprCaptcha = null;
            _this_1.txtCodeCheck = null;
            _this_1.btnRegister = null;
            _this_1.btn_refresh = null;
            _this_1.captchaId = "";
            return _this_1;
        }
        PopupRegister.prototype.start = function () {
            Global_1.Global.PopupRegister = this;
        };
        PopupRegister.prototype.show = function (even, data) {
            if (even === void 0) { even = null; }
            if (data === void 0) { data = null; }
            this.txtCodeCheck.string = "";
            _super.prototype.show.call(this);
            this.edbUsername.tabIndex = 0;
            this.edbPassword.tabIndex = 0;
            this.edbRePassword.tabIndex = -1;
            this.edbCaptcha.tabIndex = -1;
            this.edbCodeDaiLi.tabIndex = -1;
            this.refreshCaptcha();
            if (Configs_1.default.App.AGENCY_CODE != "") {
                this.edbCodeDaiLi.string = Configs_1.default.App.AGENCY_CODE;
                this.edbCodeDaiLi.node.getComponent(cc.EditBox).enabled = false;
            }
        };
        PopupRegister.prototype.actCheckCodeDaiLi = function () {
            var _this_1 = this;
            if (this.edbCodeDaiLi.string) {
                var repParams = {};
                repParams["c"] = 18;
                repParams["code"] = this.edbCodeDaiLi.string;
                Http_1.default.get(Configs_1.default.App.API, repParams, function (err, res) {
                    //Utils.Log("actCheckCodeDaiLi:" + JSON.stringify(res));
                    if (res.success == false) {
                        _this_1.txtCodeCheck.string = "<color=#FF2C23>Không hợp lệ</color>";
                    }
                    else {
                        _this_1.txtCodeCheck.string = "<color=#23FF23>Hợp lệ</color>";
                    }
                });
            }
        };
        PopupRegister.prototype.actRegister = function () {
            var _this = this;
            var username = this.edbUsername.string.trim();
            var password = this.edbPassword.string;
            var rePassword = this.edbRePassword.string;
            var captcha = this.edbCaptcha.string;
            if (username.length == 0) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_login_username_not_blank"));
                return;
            }
            if (password.length == 0) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_login_password_not_blank"));
                return;
            }
            if (password != rePassword) {
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_password_incorrect3'));
                return;
            }
            //    if (captcha.length == 0) {
            //        App.instance.alertDialog.showMsg(App.instance.getTextLang('txt_otp_blank'));
            //        return;
            //    }
            App_1.default.instance.showLoading(true);
            var reqParams = { "c": 1, "un": username, "pw": md5(password), "cp": captcha, "cid": this.captchaId, "ac": this.edbCodeDaiLi.string };
            if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
                reqParams["utm_source"] = "IOS";
                reqParams["utm_medium"] = "IOS";
                reqParams["utm_term"] = "IOS";
                reqParams["utm_content"] = "IOS";
                reqParams["utm_campaign"] = "IOS";
            }
            else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
                reqParams["utm_source"] = "ANDROID";
                reqParams["utm_medium"] = "ANDROID";
                reqParams["utm_term"] = "ANDROID";
                reqParams["utm_content"] = "ANDROID";
                reqParams["utm_campaign"] = "ANDROID";
            }
            Http_1.default.get(Configs_1.default.App.API, reqParams, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                    return;
                }
                //Utils.Log(res);
                if (!res["success"]) {
                    switch (parseInt(res["errorCode"])) {
                        case 1001:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                            _this.refreshCaptcha();
                            break;
                        case 101:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_username_error'));
                            _this.refreshCaptcha();
                            break;
                        case 1006:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_exsisted'));
                            _this.refreshCaptcha();
                            break;
                        case 102:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_password_error'));
                            _this.refreshCaptcha();
                            break;
                        case 108:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_name_not_the_same1'));
                            _this.refreshCaptcha();
                            break;
                        case 115:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_login_account_incorrect_otp'));
                            break;
                        case 1114:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_room_err6'));
                            _this.refreshCaptcha();
                            break;
                        default:
                            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                            break;
                    }
                    return;
                }
                //  //Utils.Log("Dang ky thanh cong ne!");
                LogEvent_1.default.getInstance().sendEventSigupSuccess("normal");
                _this.dismiss();
                _this.atcPopupUpdateNickName(username, password);
            });
        };
        PopupRegister.prototype.refreshCaptcha = function () {
            var _this = this;
            var url = Configs_1.default.App.API;
            Http_1.default.get(url, { "c": 124 }, function (err, res) {
                if (err != null) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_error'));
                    return;
                }
                _this.captchaId = res["id"];
                //Utils.Log("captcha:" + JSON.stringify(res["img"]));
                Utils_1.default.loadSpriteFrameFromBase64(res["img"], function (sprFrame) {
                    _this.sprCaptcha.spriteFrame = sprFrame;
                });
            });
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
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbUsername", void 0);
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbCodeDaiLi", void 0);
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbPassword", void 0);
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbRePassword", void 0);
        __decorate([
            property(cc.EditBox)
        ], PopupRegister.prototype, "edbCaptcha", void 0);
        __decorate([
            property(cc.Sprite)
        ], PopupRegister.prototype, "sprCaptcha", void 0);
        __decorate([
            property(cc.RichText)
        ], PopupRegister.prototype, "txtCodeCheck", void 0);
        __decorate([
            property(cc.Button)
        ], PopupRegister.prototype, "btnRegister", void 0);
        __decorate([
            property(cc.Button)
        ], PopupRegister.prototype, "btn_refresh", void 0);
        PopupRegister = __decorate([
            ccclass
        ], PopupRegister);
        return PopupRegister;
    }(Dialog_1.default));
    Lobby.PopupRegister = PopupRegister;
})(Lobby || (Lobby = {}));
exports.default = Lobby.PopupRegister;

cc._RF.pop();