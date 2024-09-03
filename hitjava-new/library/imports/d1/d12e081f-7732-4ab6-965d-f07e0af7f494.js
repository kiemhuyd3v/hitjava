"use strict";
cc._RF.push(module, 'd12e0gfdzJKtpZd8H4K9/SU', 'Language.Sprite');
// Lobby/LobbyScript/Script/common/Language.Sprite.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Language_LanguageManager_1 = require("./Language.LanguageManager");
var Language;
(function (Language) {
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        function Sprite() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.sprFrameVi = null;
            _this.sprFrameEn = null;
            return _this;
        }
        Sprite.prototype.start = function () {
            var _this = this;
            Language_LanguageManager_1.default.instance.addListener(function () {
                _this.updateSpriteFrame();
            }, this);
            this.updateSpriteFrame();
        };
        Sprite.prototype.updateSpriteFrame = function () {
            switch (Language_LanguageManager_1.default.instance.languageCode) {
                case "en":
                    this.getComponent(cc.Sprite).spriteFrame = this.sprFrameEn;
                    break;
                default:
                    this.getComponent(cc.Sprite).spriteFrame = this.sprFrameVi;
                    break;
            }
        };
        __decorate([
            property(cc.SpriteFrame)
        ], Sprite.prototype, "sprFrameVi", void 0);
        __decorate([
            property(cc.SpriteFrame)
        ], Sprite.prototype, "sprFrameEn", void 0);
        Sprite = __decorate([
            ccclass,
            requireComponent(cc.Sprite)
        ], Sprite);
        return Sprite;
    }(cc.Component));
    Language.Sprite = Sprite;
})(Language || (Language = {}));
exports.default = Language.Sprite;

cc._RF.pop();