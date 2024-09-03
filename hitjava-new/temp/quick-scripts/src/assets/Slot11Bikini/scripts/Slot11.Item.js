"use strict";
cc._RF.push(module, '71b5fgwHuVJHIayhEzHDG+l', 'Slot11.Item');
// Slot11Bikini/scripts/Slot11.Item.ts

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
var Slot11ItemSlot = /** @class */ (function (_super) {
    __extends(Slot11ItemSlot, _super);
    function Slot11ItemSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.itemAtlast = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
    }
    Slot11ItemSlot.prototype.start = function () {
    };
    Slot11ItemSlot.prototype.init = function (itemId, index) {
        this.spriteIcon = this.node.getComponentInChildren(cc.Sprite);
        this.spineIcon = this.node.getComponentInChildren(sp.Skeleton);
        var self = this;
        self.itemId = itemId;
        self.spriteIcon.node.active = true;
        // this.spineIcon.node.scale = 0.67;
        this.changeSpineIcon(itemId);
        // self.spineIcon.node.active = false;
        // this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        // this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId);
        //this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.5, this.spriteIcon.node.height / 1.5));
        if (index > 2) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = false;
        }
    };
    Slot11ItemSlot.prototype.changeSpriteBlurByItemId = function (itemId) {
        var self = this;
        self.itemId = itemId;
        itemId = parseInt(itemId);
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        if (itemId > 3) {
            self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_blur_1_" + +(itemId - 1));
        }
        else {
            switch (itemId) {
                case 0:
                    self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_blur_1_14");
                    break;
                case 1:
                    self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_blur_1_13");
                    break;
                case 2:
                    self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_blur_1_0");
                    break;
                case 3:
                    self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_blur_1_2");
                    break;
            }
        }
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width, this.spriteIcon.node.height * 0.5));
    };
    Slot11ItemSlot.prototype.changeSpriteRealByItemId = function (itemId) {
        var self = this;
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_1_" + (itemId - 1));
        this.spineIcon.node.active = false;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot11ItemSlot.prototype.changeSpineIcon = function (itemId) {
        var self = this;
        self.itemId = itemId;
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        itemId = parseInt(itemId);
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_1_" + (itemId - 1));
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        if (itemId > 3) {
            this.spineIcon.node.active = false;
        }
        else {
            itemId = parseInt(itemId);
            switch (itemId) {
                case 0:
                    this.animName = "Free";
                    this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_1_14");
                    this.spineIcon.node.setPosition(cc.v2(-8.7, -4.6));
                    break;
                case 1:
                    this.animName = "bonus";
                    this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_1_13");
                    this.spineIcon.node.setPosition(cc.v2(1.6, 8.7));
                    break;
                case 2:
                    this.animName = "wildmonkey";
                    this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_1_0");
                    this.spineIcon.node.setPosition(cc.v2(-0.45, 4.5));
                    break;
                case 3:
                    this.animName = "Jackpot";
                    this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("symbol_1_2");
                    this.spineIcon.node.setPosition(cc.v2(-9.711, 24));
                    break;
            }
            this.spineIcon.setAnimation(0, this.animName, true);
            this.spineIcon.node.active = true;
            this.spriteIcon.node.active = false;
        }
    };
    Slot11ItemSlot.prototype.checkShowSpriteOrSpine = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 3) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = true;
            this.spriteIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spriteIcon.node)
                .repeatForever(cc.tween().sequence(cc.tween().to(0.25, { scale: this.spriteIcon.node.scale + 0.1 }, { easing: cc.easing.sineOut }), cc.tween().to(0.25, { scale: this.spriteIcon.node.scale }, { easing: cc.easing.sineOut })))
                .start();
            cc.tween(this.spriteIcon.node)
                .delay(0.95)
                .call(function () {
                _this.spriteIcon.node.color = cc.Color.GRAY;
                cc.Tween.stopAllByTarget(_this.spriteIcon.node);
                _this.spriteIcon.node.scale = 1.0;
            }).start();
        }
        else {
            this.spineIcon.node.active = true;
            this.spriteIcon.node.active = false;
            this.spineIcon.setAnimation(0, this.animName, true);
            this.spineIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spineIcon.node)
                .delay(0.9).call(function () {
                _this.spineIcon.node.color = cc.Color.GRAY;
                _this.spriteIcon.node.active = true;
                _this.spineIcon.node.active = false;
            }).start();
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Slot11ItemSlot.prototype, "spriteIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot11ItemSlot.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot11ItemSlot.prototype, "itemAtlast", void 0);
    Slot11ItemSlot = __decorate([
        ccclass
    ], Slot11ItemSlot);
    return Slot11ItemSlot;
}(cc.Component));
exports.default = Slot11ItemSlot;

cc._RF.pop();