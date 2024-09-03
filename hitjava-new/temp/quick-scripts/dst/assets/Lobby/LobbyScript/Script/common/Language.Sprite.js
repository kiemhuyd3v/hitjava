
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Language.Sprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcTGFuZ3VhZ2UuU3ByaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBeUMsRUFBRSxDQUFDLFVBQVUsRUFBcEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFpQixDQUFDO0FBRTdELHVFQUF5RDtBQUV6RCxJQUFVLFFBQVEsQ0E2QmpCO0FBN0JELFdBQVUsUUFBUTtJQUdkO1FBQTRCLDBCQUFZO1FBQXhDO1lBQUEscUVBd0JDO1lBckJHLGdCQUFVLEdBQW1CLElBQUksQ0FBQztZQUVsQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7O1FBbUJ0QyxDQUFDO1FBakJHLHNCQUFLLEdBQUw7WUFBQSxpQkFLQztZQUpHLGtDQUFlLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDakMsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDN0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUVPLGtDQUFpQixHQUF6QjtZQUNJLFFBQVEsa0NBQWUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUMzQyxLQUFLLElBQUk7b0JBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzNELE1BQU07Z0JBQ1Y7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzNELE1BQU07YUFDYjtRQUNMLENBQUM7UUFwQkQ7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDUztRQUVsQztZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNTO1FBTHpCLE1BQU07WUFGbEIsT0FBTztZQUNQLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7V0FDZixNQUFNLENBd0JsQjtRQUFELGFBQUM7S0F4QkQsQUF3QkMsQ0F4QjJCLEVBQUUsQ0FBQyxTQUFTLEdBd0J2QztJQXhCWSxlQUFNLFNBd0JsQixDQUFBO0FBRUwsQ0FBQyxFQTdCUyxRQUFRLEtBQVIsUUFBUSxRQTZCakI7QUFDRCxrQkFBZSxRQUFRLENBQUMsTUFBTSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgTGFuZ3VhZ2VNYW5hZ2VyIGZyb20gXCIuL0xhbmd1YWdlLkxhbmd1YWdlTWFuYWdlclwiO1xuXG5uYW1lc3BhY2UgTGFuZ3VhZ2Uge1xuICAgIEBjY2NsYXNzXG4gICAgQHJlcXVpcmVDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgIGV4cG9ydCBjbGFzcyBTcHJpdGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICAgICAgc3ByRnJhbWVWaTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgICAgIHNwckZyYW1lRW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNwcml0ZUZyYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIHVwZGF0ZVNwcml0ZUZyYW1lKCl7XG4gICAgICAgICAgICBzd2l0Y2ggKExhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5sYW5ndWFnZUNvZGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZW5cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVFbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVWaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExhbmd1YWdlLlNwcml0ZTsiXX0=