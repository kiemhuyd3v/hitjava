
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/PopupRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQb3B1cFJlZ2lzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlFQUE0RDtBQUM1RCxxREFBZ0Q7QUFDaEQsbURBQWtEO0FBQ2xELCtDQUEwQztBQUMxQyxnRUFBMkQ7QUFDM0QsMkNBQXNDO0FBQ3RDLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxLQUFLLENBeUxkO0FBekxELFdBQVUsS0FBSztJQUdYO1FBQW1DLGlDQUFNO1FBQXpDO1lBQUEsdUVBcUxDO1lBbExHLG1CQUFXLEdBQWUsSUFBSSxDQUFDO1lBRS9CLG9CQUFZLEdBQWUsSUFBSSxDQUFDO1lBRWhDLG1CQUFXLEdBQWUsSUFBSSxDQUFDO1lBRS9CLHFCQUFhLEdBQWUsSUFBSSxDQUFDO1lBRWpDLGtCQUFVLEdBQWUsSUFBSSxDQUFDO1lBRTlCLGtCQUFVLEdBQWMsSUFBSSxDQUFDO1lBRTdCLG9CQUFZLEdBQWdCLElBQUksQ0FBQztZQUVqQyxtQkFBVyxHQUFjLElBQUksQ0FBQztZQUk5QixtQkFBVyxHQUFjLElBQUksQ0FBQztZQUd0QixpQkFBUyxHQUFXLEVBQUUsQ0FBQzs7UUE2Sm5DLENBQUM7UUE1SkcsNkJBQUssR0FBTDtZQUNJLGVBQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLENBQUM7UUFDRCw0QkFBSSxHQUFKLFVBQUssSUFBVyxFQUFFLElBQVc7WUFBeEIscUJBQUEsRUFBQSxXQUFXO1lBQUUscUJBQUEsRUFBQSxXQUFXO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUU5QixpQkFBTSxJQUFJLFdBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxXQUFXLENBQUMs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O1FBQ3pFLENBQUM7UUE1S0Q7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswREFDVTtRQUUvQjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJEQUNXO1FBRWhDO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MERBQ1U7UUFFL0I7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0REFDWTtRQUVqQztZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNTO1FBRTlCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1M7UUFFN0I7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyREFDVztRQUVqQztZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBEQUNVO1FBSTlCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MERBQ1U7UUFyQnJCLGFBQWE7WUFEekIsT0FBTztXQUNLLGFBQWEsQ0FxTHpCO1FBQUQsb0JBQUM7S0FyTEQsQUFxTEMsQ0FyTGtDLGdCQUFNLEdBcUx4QztJQXJMWSxtQkFBYSxnQkFxTHpCLENBQUE7QUFDTCxDQUFDLEVBekxTLEtBQUssS0FBTCxLQUFLLFFBeUxkO0FBQ0Qsa0JBQWUsS0FBSyxDQUFDLGFBQWEsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEJ1bmRsZUNvbnRyb2wgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2xcIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvR2xvYmFsXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IExvZ0V2ZW50IGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Mb2dFdmVudC9Mb2dFdmVudFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxubmFtZXNwYWNlIExvYmJ5IHtcblxuICAgIEBjY2NsYXNzXG4gICAgZXhwb3J0IGNsYXNzIFBvcHVwUmVnaXN0ZXIgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgICAgICBlZGJVc2VybmFtZTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgICAgICBlZGJDb2RlRGFpTGk6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICAgICAgZWRiUGFzc3dvcmQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICAgICAgZWRiUmVQYXNzd29yZDogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgICAgICBlZGJDYXB0Y2hhOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICAgICAgc3ByQ2FwdGNoYTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxuICAgICAgICB0eHRDb2RlQ2hlY2s6IGNjLlJpY2hUZXh0ID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICAgICAgYnRuUmVnaXN0ZXI6IGNjLkJ1dHRvbiA9IG51bGw7XG5cblxuICAgICAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgICAgICBidG5fcmVmcmVzaDogY2MuQnV0dG9uID0gbnVsbDtcblxuXG4gICAgICAgIHByaXZhdGUgY2FwdGNoYUlkOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIEdsb2JhbC5Qb3B1cFJlZ2lzdGVyID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBzaG93KGV2ZW4gPSBudWxsLCBkYXRhID0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50eHRDb2RlQ2hlY2suc3RyaW5nID0gXCJcIjtcblxuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5lZGJVc2VybmFtZS50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLmVkYlBhc3N3b3JkLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZWRiUmVQYXNzd29yZC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5lZGJDYXB0Y2hhLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLmVkYkNvZGVEYWlMaS50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ2FwdGNoYSgpO1xuICAgICAgICAgICAgaWYgKENvbmZpZ3MuQXBwLkFHRU5DWV9DT0RFICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkNvZGVEYWlMaS5zdHJpbmcgPSBDb25maWdzLkFwcC5BR0VOQ1lfQ09ERTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkNvZGVEYWlMaS5ub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdENoZWNrQ29kZURhaUxpKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRiQ29kZURhaUxpLnN0cmluZykge1xuICAgICAgICAgICAgICAgIHZhciByZXBQYXJhbXMgPSB7fTtcbiAgICAgICAgICAgICAgICByZXBQYXJhbXNbXCJjXCJdID0gMTg7XG4gICAgICAgICAgICAgICAgcmVwUGFyYW1zW1wiY29kZVwiXSA9IHRoaXMuZWRiQ29kZURhaUxpLnN0cmluZztcbiAgICAgICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHJlcFBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcImFjdENoZWNrQ29kZURhaUxpOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eHRDb2RlQ2hlY2suc3RyaW5nID0gXCI8Y29sb3I9I0ZGMkMyMz5LaMO0bmcgaOG7o3AgbOG7hzwvY29sb3I+XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR4dENvZGVDaGVjay5zdHJpbmcgPSBcIjxjb2xvcj0jMjNGRjIzPkjhu6NwIGzhu4c8L2NvbG9yPlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHVibGljIGFjdFJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGxldCB1c2VybmFtZSA9IHRoaXMuZWRiVXNlcm5hbWUuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgICAgIGxldCBwYXNzd29yZCA9IHRoaXMuZWRiUGFzc3dvcmQuc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHJlUGFzc3dvcmQgPSB0aGlzLmVkYlJlUGFzc3dvcmQuc3RyaW5nO1xuICAgICAgICAgICAgbGV0IGNhcHRjaGEgPSB0aGlzLmVkYkNhcHRjaGEuc3RyaW5nO1xuICAgICAgICAgICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2xvZ2luX3VzZXJuYW1lX25vdF9ibGFua1wiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbG9naW5fcGFzc3dvcmRfbm90X2JsYW5rXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXNzd29yZCAhPSByZVBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcGFzc3dvcmRfaW5jb3JyZWN0MycpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gICAgaWYgKGNhcHRjaGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgLy8gICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X290cF9ibGFuaycpKTtcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgfVxuXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBsZXQgcmVxUGFyYW1zID0geyBcImNcIjogMSwgXCJ1blwiOiB1c2VybmFtZSwgXCJwd1wiOiBtZDUocGFzc3dvcmQpLCBcImNwXCI6IGNhcHRjaGEsIFwiY2lkXCI6IHRoaXMuY2FwdGNoYUlkLCBcImFjXCI6IHRoaXMuZWRiQ29kZURhaUxpLnN0cmluZyB9O1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUykge1xuICAgICAgICAgICAgICAgIHJlcVBhcmFtc1tcInV0bV9zb3VyY2VcIl0gPSBcIklPU1wiO1xuICAgICAgICAgICAgICAgIHJlcVBhcmFtc1tcInV0bV9tZWRpdW1cIl0gPSBcIklPU1wiO1xuICAgICAgICAgICAgICAgIHJlcVBhcmFtc1tcInV0bV90ZXJtXCJdID0gXCJJT1NcIjtcbiAgICAgICAgICAgICAgICByZXFQYXJhbXNbXCJ1dG1fY29udGVudFwiXSA9IFwiSU9TXCI7XG4gICAgICAgICAgICAgICAgcmVxUGFyYW1zW1widXRtX2NhbXBhaWduXCJdID0gXCJJT1NcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCkge1xuICAgICAgICAgICAgICAgIHJlcVBhcmFtc1tcInV0bV9zb3VyY2VcIl0gPSBcIkFORFJPSURcIjtcbiAgICAgICAgICAgICAgICByZXFQYXJhbXNbXCJ1dG1fbWVkaXVtXCJdID0gXCJBTkRST0lEXCI7XG4gICAgICAgICAgICAgICAgcmVxUGFyYW1zW1widXRtX3Rlcm1cIl0gPSBcIkFORFJPSURcIjtcbiAgICAgICAgICAgICAgICByZXFQYXJhbXNbXCJ1dG1fY29udGVudFwiXSA9IFwiQU5EUk9JRFwiO1xuICAgICAgICAgICAgICAgIHJlcVBhcmFtc1tcInV0bV9jYW1wYWlnblwiXSA9IFwiQU5EUk9JRFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCByZXFQYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzW1wic3VjY2Vzc1wiXSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KHJlc1tcImVycm9yQ29kZVwiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jaGVja19jb25uZWN0JykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZnJlc2hDYXB0Y2hhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl91c2VybmFtZV9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoQ2FwdGNoYSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX2FjY291bnRfZXhzaXN0ZWQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVmcmVzaENhcHRjaGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvZ2luX3Bhc3N3b3JkX2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZnJlc2hDYXB0Y2hhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2dpbl9hY2NvdW50X25hbWVfbm90X3RoZV9zYW1lMScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoQ2FwdGNoYSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9naW5fYWNjb3VudF9pbmNvcnJlY3Rfb3RwJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyNicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWZyZXNoQ2FwdGNoYSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAvL1V0aWxzLkxvZyhcIkRhbmcga3kgdGhhbmggY29uZyBuZSFcIik7XG4gICAgICAgICAgICAgICAgTG9nRXZlbnQuZ2V0SW5zdGFuY2UoKS5zZW5kRXZlbnRTaWd1cFN1Y2Nlc3MoXCJub3JtYWxcIik7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmF0Y1BvcHVwVXBkYXRlTmlja05hbWUodXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHJlZnJlc2hDYXB0Y2hhKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgbGV0IHVybCA9IENvbmZpZ3MuQXBwLkFQSTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KHVybCwgeyBcImNcIjogMTI0IH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9lcnJvcicpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5jYXB0Y2hhSWQgPSByZXNbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJjYXB0Y2hhOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzW1wiaW1nXCJdKSk7XG4gICAgICAgICAgICAgICAgVXRpbHMubG9hZFNwcml0ZUZyYW1lRnJvbUJhc2U2NChyZXNbXCJpbWdcIl0sIChzcHJGcmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zcHJDYXB0Y2hhLnNwcml0ZUZyYW1lID0gc3ByRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhdGNQb3B1cFVwZGF0ZU5pY2tOYW1lKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwb3B1cERhaWx5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJQb3B1cFVwZGF0ZU5pY2tuYW1lXCIpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBEYWlseS5ub2RlKVxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5wb3B1cFVwZGF0ZU5pY2tuYW1lID0gcG9wdXBEYWlseTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UucG9wdXBVcGRhdGVOaWNrbmFtZS5zaG93Mih1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiUG9wdXAoXCJQcmVmYWJQb3B1cC9Qb3B1cFVwZGF0ZU5pY2tuYW1lXCIsIGNiKTtcbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBMb2JieS5Qb3B1cFJlZ2lzdGVyO1xuIl19