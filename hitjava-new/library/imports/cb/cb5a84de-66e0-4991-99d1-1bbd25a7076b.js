"use strict";
cc._RF.push(module, 'cb5a8TeZuBJkZnRG70lpwdr', 'Slot1.ItemSlot');
// Slot1/Slot1Script/Slot1.ItemSlot.ts

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
var Slot1ItemSlot = /** @class */ (function (_super) {
    __extends(Slot1ItemSlot, _super);
    function Slot1ItemSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.nodeBox = null;
        _this.itemAtlast = null;
        _this.gamePlayManager = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
    }
    Slot1ItemSlot.prototype.onLoad = function () {
        this.spriteIcon = cc.find("Box/sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/spine", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
    };
    Slot1ItemSlot.prototype.init = function (itemId, index, gamePlayManager) {
        var self = this;
        self.gamePlayManager = gamePlayManager;
        self.itemId = itemId;
        self.index = index;
        self.spriteIcon.node.active = true;
        this.spineIcon.node.scale = 0.65;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        self.spineIcon.node.active = false;
        // self.spriteIcon.spriteFrame = self.gamePlayManager.getSpriteFrameIcon(self.itemId);
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame(itemId);
    };
    Slot1ItemSlot.prototype.changeSpriteBlurByItemId = function (itemId) {
        var self = this;
        self.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("blur_" + itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot1ItemSlot.prototype.changeSpriteRealByItemId = function (itemId) {
        var self = this;
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot1ItemSlot.prototype.changeSpineIcon = function (itemId) {
        var self = this;
        self.itemId = itemId;
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        if (itemId > 2) {
            this.spineIcon.node.active = false;
        }
        else {
            itemId = parseInt(itemId);
            switch (itemId) {
                case 0:
                    this.animName = "animation_Fire";
                    this.spriteIcon.node.y = 10;
                    break;
                case 1:
                    this.animName = "animation";
                    break;
                case 2:
                    this.animName = "animation";
                    break;
            }
            // this.spineIcon.setAnimation(0, animName, true);
        }
    };
    Slot1ItemSlot.prototype.checkShowSpriteOrSpine = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 2) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = true;
            this.spriteIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spriteIcon.node)
                .to(0.25, { scale: 0.9 }, { easing: cc.easing.sineOut })
                .to(0.25, { scale: 0.8 }, { easing: cc.easing.sineOut })
                .delay(0.4)
                .call(function () {
                _this.spriteIcon.node.color = cc.Color.GRAY;
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
    ], Slot1ItemSlot.prototype, "spriteIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot1ItemSlot.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1ItemSlot.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot1ItemSlot.prototype, "itemAtlast", void 0);
    Slot1ItemSlot = __decorate([
        ccclass
    ], Slot1ItemSlot);
    return Slot1ItemSlot;
}(cc.Component));
exports.default = Slot1ItemSlot;

cc._RF.pop();