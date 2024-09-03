"use strict";
cc._RF.push(module, '41c11FnMNRHvYCSHM08npo0', 'Slot10.Item');
// Slot10/Slot10Script/Slot10.Item.ts

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
var Slot10ItemSlot = /** @class */ (function (_super) {
    __extends(Slot10ItemSlot, _super);
    function Slot10ItemSlot() {
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
    Slot10ItemSlot.prototype.onLoad = function () {
        this.spriteIcon = cc.find("Box/sprite", this.node).getComponent(cc.Sprite);
        this.spineIcon = cc.find("Box/ske", this.node).getComponent(sp.Skeleton);
        this.nodeBox = this.node.getChildByName("Box");
    };
    Slot10ItemSlot.prototype.init = function (itemId, index, gamePlayManager) {
        itemId = parseInt(itemId);
        this.gamePlayManager = gamePlayManager;
        this.itemId = itemId;
        this.index = index;
        this.spriteIcon.node.active = true;
        this.spineIcon.node.scale = 0.65;
        // this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width *0.67, this.spriteIcon.node.height *0.67));
        this.spineIcon.node.active = false;
        // self.spriteIcon.spriteFrame = self.gamePlayManager.getSpriteFrameIcon(self.itemId);
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1));
    };
    Slot10ItemSlot.prototype.changeSpriteBlurByItemId = function (itemId) {
        itemId = parseInt(itemId);
        this.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1) + "_blur");
        // this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width*0.67, this.spriteIcon.node.height*0.67));
    };
    Slot10ItemSlot.prototype.changeSpriteRealByItemId = function (itemId) {
        itemId = parseInt(itemId);
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1));
        // this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width*0.67, this.spriteIcon.node.height*0.67));
    };
    Slot10ItemSlot.prototype.changeSpineIcon = function (itemId) {
        itemId = parseInt(itemId);
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + (itemId + 1));
        this.spriteIcon.node.active = true;
        // this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width *0.67, this.spriteIcon.node.height *0.67));
        if (itemId != 0 && itemId != 2) {
            this.spineIcon.node.active = false;
        }
        else {
            itemId = parseInt(itemId);
            switch (itemId) {
                case 0:
                    this.animName = "jackpot";
                    break;
                case 2:
                    this.animName = "bonus";
                    break;
            }
            // this.spineIcon.setAnimation(0, this.animName, true);
        }
    };
    Slot10ItemSlot.prototype.checkShowSpriteOrSpine = function () {
        var _this = this;
        //  cc.log("checkShowSpriteOrSpine");
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId != 0 && this.itemId != 2) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = true;
            this.spriteIcon.node.color = cc.Color.WHITE;
            // cc.tween(this.spriteIcon.node)
            //     .to(0.25, { scale: 0.9 }, { easing: cc.easing.sineOut })
            //     .to(0.25, { scale: 0.8 }, { easing: cc.easing.sineOut })
            //     .delay(0.4)
            //     .call(() => {
            //         this.spriteIcon.node.color = cc.Color.GRAY;
            //     }).start();
        }
        else {
            this.spineIcon.node.active = true;
            this.spriteIcon.node.active = false;
            this.spineIcon.setAnimation(0, this.animName, true);
            this.spineIcon.node.color = cc.Color.WHITE;
        }
        cc.tween(this.node)
            .delay(0.9).call(function () {
            //  cc.log("co chay vao day ko");
            _this.spineIcon.node.color = cc.Color.GRAY;
            _this.spriteIcon.node.color = cc.Color.GRAY;
            _this.spriteIcon.node.active = true;
            _this.spineIcon.node.active = false;
        }).start();
    };
    __decorate([
        property(cc.Sprite)
    ], Slot10ItemSlot.prototype, "spriteIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot10ItemSlot.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10ItemSlot.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot10ItemSlot.prototype, "itemAtlast", void 0);
    Slot10ItemSlot = __decorate([
        ccclass
    ], Slot10ItemSlot);
    return Slot10ItemSlot;
}(cc.Component));
exports.default = Slot10ItemSlot;

cc._RF.pop();