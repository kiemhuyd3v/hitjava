"use strict";
cc._RF.push(module, '1c8f7r8zA1PcpxwyriIc3li', 'Common.CPSprite');
// Lobby/LobbyScript/Script/common/Common.CPSprite.ts

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
var VersionConfig_1 = require("../../../../Loading/src/VersionConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var CPSprite = /** @class */ (function (_super) {
    __extends(CPSprite, _super);
    function CPSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprR99 = null;
        _this.sprVip52 = null;
        _this.sprXXeng = null;
        _this.sprManVip = null;
        return _this;
    }
    CPSprite.prototype.onLoad = function () {
        switch (VersionConfig_1.default.CPName) {
            default:
                this.getComponent(cc.Sprite).spriteFrame = this.sprR99;
                break;
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprR99", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprVip52", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprXXeng", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprManVip", void 0);
    CPSprite = __decorate([
        ccclass,
        requireComponent(cc.Sprite)
    ], CPSprite);
    return CPSprite;
}(cc.Component));
exports.default = CPSprite;

cc._RF.pop();