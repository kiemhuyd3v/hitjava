"use strict";
cc._RF.push(module, '9c950pPr6hPEJ1AGixSOybu', 'Slot8.ItemSlot');
// Slot8/Slot8Script/Slot8.ItemSlot.ts

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
var Slot8ItemSlot = /** @class */ (function (_super) {
    __extends(Slot8ItemSlot, _super);
    function Slot8ItemSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteIcon = null;
        _this.spineIcon = null;
        _this.nodeBox = null;
        _this.itemAtlast = null;
        _this.itemBlur = null;
        _this.item4 = null;
        _this.gamePlayManager = null;
        _this.itemId = null;
        _this.index = null;
        _this.animName = null;
        return _this;
    }
    Slot8ItemSlot.prototype.onLoad = function () {
        this.spriteIcon = cc.find("Box/Sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/Spine", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
        this.node.setContentSize(cc.size(170, 170));
    };
    Slot8ItemSlot.prototype.init = function (itemId, index, gamePlayManager) {
        var self = this;
        self.gamePlayManager = gamePlayManager;
        self.itemId = itemId;
        self.index = index;
        self.spriteIcon.node.active = true;
        this.spineIcon.node.scale = 0.67;
        this.spineIcon.node.y = 5;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1.7, this.spriteIcon.node.height / 1.7));
        self.spineIcon.node.active = false;
        this.setSpriteFrame(itemId);
    };
    Slot8ItemSlot.prototype.changeSpriteBlurByItemId = function (itemId) {
        var self = this;
        this.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.setSpriteFrame(itemId, true);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot8ItemSlot.prototype.changeSpriteRealByItemId = function (itemId) {
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.setSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    };
    Slot8ItemSlot.prototype.changeSpineIcon = function (itemId) {
        var self = this;
        self.itemId = itemId;
        //  cc.log("itemid=" + itemId);
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        itemId = parseInt(itemId);
        switch (itemId) {
            case 0:
                this.animName = "jackport";
                this.spriteIcon.node.y = 10;
                break;
            case 1:
                this.animName = "bonus";
                break;
            case 2:
                this.animName = "freespin";
                break;
        }
        this.setSpriteFrame(itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        // this.spineIcon.setAnimation(0, animName, true);
    };
    Slot8ItemSlot.prototype.setSpriteFrame = function (itemId, isBlur) {
        if (isBlur === void 0) { isBlur = false; }
        var atlast = isBlur ? this.itemBlur : this.itemAtlast;
        switch (itemId) {
            case 0:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("jackpot");
                break;
            case 1:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("bonus");
                break;
            case 2:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("freespin");
                break;
            case 3:
            case 4:
            case 5:
                this.spriteIcon.spriteFrame = atlast.getSpriteFrame("item_" + (itemId - 2));
                break;
            case 6:
                if (!isBlur)
                    this.spriteIcon.spriteFrame = this.item4;
                else
                    this.spriteIcon.spriteFrame = atlast.getSpriteFrame("item_" + (itemId - 2));
                break;
        }
    };
    Slot8ItemSlot.prototype.checkShowSpriteOrSpine = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 2) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = true;
            this.spriteIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spriteIcon.node)
                .repeatForever(cc.tween().sequence(cc.tween().to(0.25, { scale: 1.1 }, { easing: cc.easing.sineOut }), cc.tween().to(0.25, { scale: 1.0 }, { easing: cc.easing.sineOut })))
                .start();
            cc.tween(this.spriteIcon.node)
                .delay(0.9)
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
    ], Slot8ItemSlot.prototype, "spriteIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot8ItemSlot.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8ItemSlot.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot8ItemSlot.prototype, "itemAtlast", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot8ItemSlot.prototype, "itemBlur", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot8ItemSlot.prototype, "item4", void 0);
    Slot8ItemSlot = __decorate([
        ccclass
    ], Slot8ItemSlot);
    return Slot8ItemSlot;
}(cc.Component));
exports.default = Slot8ItemSlot;

cc._RF.pop();