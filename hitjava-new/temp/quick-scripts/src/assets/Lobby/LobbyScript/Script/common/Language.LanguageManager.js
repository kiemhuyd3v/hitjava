"use strict";
cc._RF.push(module, 'ddbe6RIye1Hj7hO/+3ryW0/', 'Language.LanguageManager');
// Lobby/LobbyScript/Script/common/Language.LanguageManager.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Language;
(function (Language) {
    var LanguageMananger = /** @class */ (function (_super) {
        __extends(LanguageMananger, _super);
        function LanguageMananger() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.json = null;
            _this.languageCode = "vi";
            _this.texts = {};
            _this.listeners = [];
            return _this;
        }
        LanguageMananger_1 = LanguageMananger;
        LanguageMananger.prototype.onLoad = function () {
            LanguageMananger_1.instance = this;
            this.texts = JSON.parse(this.json.text);
            var langCode = cc.sys.localStorage.getItem("langCode");
            if (langCode != null) {
                this.languageCode = langCode;
            }
        };
        LanguageMananger.prototype.setLanguage = function (languageCode) {
            this.languageCode = languageCode;
            cc.sys.localStorage.setItem("langCode", languageCode);
            for (var i = 0; i < this.listeners.length; i++) {
                var listener = this.listeners[i];
                if (listener.target && listener.target instanceof Object && listener.target.node) {
                    listener.callback(languageCode);
                }
                else {
                    this.listeners.splice(i, 1);
                    i--;
                }
            }
        };
        LanguageMananger.prototype.addListener = function (callback, target) {
            this.listeners.push({
                callback: callback,
                target: target
            });
        };
        LanguageMananger.prototype.getString = function (id) {
            if (this.texts.hasOwnProperty(id)) {
                if (this.texts[id].hasOwnProperty(this.languageCode)) {
                    return this.texts[id][this.languageCode];
                }
            }
            return id;
        };
        var LanguageMananger_1;
        LanguageMananger.instance = null;
        __decorate([
            property(cc.TextAsset)
        ], LanguageMananger.prototype, "json", void 0);
        LanguageMananger = LanguageMananger_1 = __decorate([
            ccclass
        ], LanguageMananger);
        return LanguageMananger;
    }(cc.Component));
    Language.LanguageMananger = LanguageMananger;
})(Language || (Language = {}));
exports.default = Language.LanguageMananger;

cc._RF.pop();