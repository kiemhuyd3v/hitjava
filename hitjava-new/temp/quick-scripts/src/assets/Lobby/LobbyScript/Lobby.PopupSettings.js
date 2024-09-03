"use strict";
cc._RF.push(module, '95d62Y8ZFJHj74CchyA0Zq7', 'Lobby.PopupSettings');
// Lobby/LobbyScript/Lobby.PopupSettings.ts

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
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Language_LanguageManager_1 = require("./Script/common/Language.LanguageManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropDownBox = null;
        _this.lbCurrentLang = null;
        _this.languageCode = "";
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        if (Language_LanguageManager_1.default.instance.languageCode == "vn") {
            this.lbCurrentLang.string = "Tiếng Việt";
        }
        else if (Language_LanguageManager_1.default.instance.languageCode == "en") {
            this.lbCurrentLang.string = "English";
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.showDropDown = function (status) {
        var _this = this;
        if (status) {
            this.dropDownBox.scaleY = 0;
            this.dropDownBox.active = true;
            cc.Tween.stopAllByTarget(this.dropDownBox);
            cc.tween(this.dropDownBox).to(0.1, { scaleY: 1 }).start();
        }
        else {
            cc.tween(this.dropDownBox).to(0.1, { scaleY: 0 }).call(function () {
                _this.dropDownBox.active = false;
            }).start();
        }
    };
    NewClass.prototype.onClickChangeLanguage = function (even, data) {
        this.languageCode = Language_LanguageManager_1.default.instance.languageCode;
        switch (data) {
            case "1":
                this.showDropDown(!this.dropDownBox.active);
                break;
            case "2": //vn
                this.lbCurrentLang.string = "Tiếng Việt";
                if (this.languageCode != "vi") {
                    Language_LanguageManager_1.default.instance.setLanguage("vi");
                    var msg = Language_LanguageManager_1.default.instance.getString("txt_notify_change_language");
                    App_1.default.instance.ShowAlertDialog(msg);
                }
                this.showDropDown(false);
                break;
            case "3": //en
                this.lbCurrentLang.string = "English";
                if (this.languageCode != "en") {
                    Language_LanguageManager_1.default.instance.setLanguage("en");
                    var msg = Language_LanguageManager_1.default.instance.getString("txt_notify_change_language");
                    App_1.default.instance.ShowAlertDialog(msg);
                }
                this.showDropDown(false);
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "dropDownBox", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "lbCurrentLang", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(Dialog_1.default));
exports.default = NewClass;

cc._RF.pop();