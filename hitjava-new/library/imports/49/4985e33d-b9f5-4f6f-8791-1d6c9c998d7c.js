"use strict";
cc._RF.push(module, '4985eM9ufVPb4eRHWycmY18', 'Slot8Icon');
// Slot8/Slot8Script/Slot8Icon.ts

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
var Slot8Icon = /** @class */ (function (_super) {
    __extends(Slot8Icon, _super);
    function Slot8Icon() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeIcon = null;
        _this.spineIcon = null;
        _this.animation = null;
        return _this;
        // update (dt) {}
    }
    Slot8Icon.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
    };
    Slot8Icon.prototype.start = function () {
    };
    Slot8Icon.prototype.setSprite = function (sf) {
        this.nodeIcon.active = true;
        this.spineIcon.node.active = false;
        this.nodeIcon.getComponent(cc.Sprite).spriteFrame = sf;
    };
    Slot8Icon.prototype.setSpine = function (ske, id) {
        this.nodeIcon.active = false;
        this.spineIcon.node.active = true;
        this.spineIcon.skeletonData = ske;
        if (id == 0) {
            this.spineIcon.setAnimation(0, "jackport", true);
        }
        else if (id == 1) {
            this.spineIcon.setAnimation(0, "bonus", true);
        }
        else if (id == 2) {
            this.spineIcon.setAnimation(0, "freespin", true);
        }
    };
    Slot8Icon.prototype.normal = function () {
        this.nodeIcon.color = new cc.Color(255, 255, 255);
        this.spineIcon.node.color = new cc.Color(255, 255, 255);
    };
    Slot8Icon.prototype.unscale = function () {
        this.nodeIcon.color = new cc.Color(50, 50, 50);
        this.spineIcon.node.color = new cc.Color(50, 50, 50);
    };
    Slot8Icon.prototype.scale = function () {
        this.nodeIcon.color = new cc.Color(255, 255, 255);
        this.spineIcon.node.color = new cc.Color(255, 255, 255);
        if (this.nodeIcon.active) {
            this.animation.play();
        }
    };
    __decorate([
        property(cc.Node)
    ], Slot8Icon.prototype, "nodeIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot8Icon.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Icon.prototype, "animation", void 0);
    Slot8Icon = __decorate([
        ccclass
    ], Slot8Icon);
    return Slot8Icon;
}(cc.Component));
exports.default = Slot8Icon;

cc._RF.pop();