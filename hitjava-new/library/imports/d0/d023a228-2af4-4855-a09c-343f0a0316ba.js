"use strict";
cc._RF.push(module, 'd023aIoKvRIVaCcND8KAxa6', 'Slot6.Item');
// Slot6/Slot6Script/Slot6.Item.ts

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
var SLOT6_ID_ITEM;
(function (SLOT6_ID_ITEM) {
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["JACKPOT"] = 3] = "JACKPOT";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["BONUS"] = 1] = "BONUS";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["WILD"] = 2] = "WILD";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["SCATTER"] = 0] = "SCATTER";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X500"] = 4] = "X500";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X375"] = 5] = "X375";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X275"] = 6] = "X275";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X150"] = 7] = "X150";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X50"] = 8] = "X50";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X25"] = 9] = "X25";
    SLOT6_ID_ITEM[SLOT6_ID_ITEM["X5"] = 10] = "X5";
})(SLOT6_ID_ITEM || (SLOT6_ID_ITEM = {}));
var Slot6Item = /** @class */ (function (_super) {
    __extends(Slot6Item, _super);
    function Slot6Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeItem = null;
        _this.sprItem = null;
        _this.skeDataSpecical = null;
        _this.skeDataIcon = null;
        _this.skeDataIcon2 = null;
        _this.sprAtlast = null;
        _this.mId = -1;
        _this.animName = "";
        return _this;
    }
    Slot6Item.prototype.getId = function () {
        return this.mId;
    };
    Slot6Item.prototype.setId = function (pId, isWin) {
        if (isWin === void 0) { isWin = false; }
        this.mId = pId;
        this.sprItem.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        switch (this.mId) {
            case SLOT6_ID_ITEM.JACKPOT:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("jackpot");
                this.skeItem.skeletonData = this.skeDataSpecical;
                this.skeItem.animation = isWin ? "animation" : "animation";
                this.animName = isWin ? "animation" : "animation";
                break;
            case SLOT6_ID_ITEM.WILD:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("wild");
                this.skeItem.skeletonData = this.skeDataSpecical;
                this.skeItem.animation = isWin ? "animation" : "animation";
                this.animName = isWin ? "animation" : "animation";
                break;
            case SLOT6_ID_ITEM.BONUS:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("bonus");
                this.skeItem.skeletonData = this.skeDataSpecical;
                this.skeItem.animation = isWin ? "bonus" : "bonus2";
                this.animName = isWin ? "bonus" : "bonus2";
                break;
            case SLOT6_ID_ITEM.SCATTER:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("scatter");
                this.skeItem.skeletonData = this.skeDataSpecical;
                this.skeItem.animation = "scatter";
                this.animName = "scatter";
                break;
            case SLOT6_ID_ITEM.X500:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_4");
                this.skeItem.skeletonData = this.skeDataIcon;
                this.skeItem.animation = isWin ? "nhan ma" : "nhan ma2";
                this.animName = isWin ? "nhan ma" : "nhan ma2";
                break;
            case SLOT6_ID_ITEM.X375:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_7");
                this.skeItem.skeletonData = this.skeDataIcon;
                this.skeItem.animation = isWin ? "su tu" : "su tu2";
                this.animName = isWin ? "su tu" : "su tu2";
                break;
            case SLOT6_ID_ITEM.X275:
                this.skeItem.skeletonData = this.skeDataIcon;
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_6");
                this.skeItem.animation = isWin ? "bo cap" : "bo cap2";
                this.animName = isWin ? "bo cap" : "bo cap2";
                break;
            case SLOT6_ID_ITEM.X150:
                this.skeItem.skeletonData = this.skeDataIcon;
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_5");
                this.skeItem.animation = isWin ? "bach duong" : "bach duong2";
                this.animName = isWin ? "bach duong" : "bach duong2";
                break;
            case SLOT6_ID_ITEM.X50:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_3");
                this.skeItem.skeletonData = this.skeDataIcon2;
                this.skeItem.animation = "NguoiEm";
                this.animName = "nguoiem";
                break;
            case SLOT6_ID_ITEM.X25:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_1");
                this.skeItem.skeletonData = this.skeDataIcon2;
                this.skeItem.animation = "NguoiEm";
                this.animName = "nguoiem";
                break;
            case SLOT6_ID_ITEM.X5:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_2");
                this.skeItem.skeletonData = this.skeDataIcon2;
                this.skeItem.animation = "NguoiEm";
                this.animName = "nguoiem";
                break;
        }
        this.sprItem.node.setContentSize(cc.size(this.sprItem.node.width / 1.1, this.sprItem.node.height / 1.1));
    };
    Slot6Item.prototype.showItemAnim = function () {
        this.skeItem.node.color = cc.Color.WHITE;
        this.skeItem.node.active = true;
        this.sprItem.node.active = false;
        this.skeItem.setAnimation(0, this.animName, true);
    };
    Slot6Item.prototype.setIdBlur = function (id) {
        this.sprItem.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        switch (this.mId) {
            case SLOT6_ID_ITEM.JACKPOT:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("jackpot_blur");
                break;
            case SLOT6_ID_ITEM.WILD:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("wild");
                break;
            case SLOT6_ID_ITEM.BONUS:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("bonus_blur");
                break;
            case SLOT6_ID_ITEM.SCATTER:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("scatter_blur");
                break;
            case SLOT6_ID_ITEM.X500:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_4_blur");
                break;
            case SLOT6_ID_ITEM.X375:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_7_blur");
                break;
            case SLOT6_ID_ITEM.X275:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_6_blur");
                break;
            case SLOT6_ID_ITEM.X150:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_5_blur");
                break;
            case SLOT6_ID_ITEM.X50:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_3_blur");
                break;
            case SLOT6_ID_ITEM.X25:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_1_blur");
                break;
            case SLOT6_ID_ITEM.X5:
                this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item_2_blur");
                break;
        }
        this.sprItem.node.setContentSize(cc.size(this.sprItem.node.width / 1.1, this.sprItem.node.height / 1.1));
    };
    Slot6Item.prototype.offItemAnim = function () {
        this.sprItem.node.active = true;
        this.skeItem.node.active = false;
    };
    __decorate([
        property(sp.Skeleton)
    ], Slot6Item.prototype, "skeItem", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot6Item.prototype, "sprItem", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot6Item.prototype, "skeDataSpecical", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot6Item.prototype, "skeDataIcon", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot6Item.prototype, "skeDataIcon2", void 0);
    __decorate([
        property(cc.SpriteAtlas)
    ], Slot6Item.prototype, "sprAtlast", void 0);
    Slot6Item = __decorate([
        ccclass
    ], Slot6Item);
    return Slot6Item;
}(cc.Component));
exports.default = Slot6Item;

cc._RF.pop();