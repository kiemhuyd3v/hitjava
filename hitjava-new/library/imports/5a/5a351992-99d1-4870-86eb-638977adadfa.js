"use strict";
cc._RF.push(module, '5a351mSmdFIcIbrY4l3ra36', 'Slot7.Item');
// Slot7/Slot7Script/Slot7.Item.ts

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
var SLOT7_ID_ITEM;
(function (SLOT7_ID_ITEM) {
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["JACKPOT"] = 3] = "JACKPOT";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["BONUS"] = 1] = "BONUS";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["WILD"] = 2] = "WILD";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["SCATTER"] = 0] = "SCATTER";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X500"] = 4] = "X500";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X375"] = 5] = "X375";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X275"] = 6] = "X275";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X150"] = 7] = "X150";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X50"] = 8] = "X50";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X25"] = 9] = "X25";
    SLOT7_ID_ITEM[SLOT7_ID_ITEM["X5"] = 10] = "X5";
})(SLOT7_ID_ITEM || (SLOT7_ID_ITEM = {}));
var Slot7Item = /** @class */ (function (_super) {
    __extends(Slot7Item, _super);
    function Slot7Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprItem = null;
        _this.skeItem = null;
        _this.skeDataJackpot = null;
        _this.skeDataBonus = null;
        _this.skeDataScatter = null;
        _this.skeDataWild = null;
        _this.frameX500 = null;
        _this.frameX375 = null;
        _this.frameX275 = null;
        _this.frameX150 = null;
        _this.frameX50 = null;
        _this.frameX25 = null;
        _this.frameX5 = null;
        _this.mId = -1;
        return _this;
    }
    Slot7Item.prototype.getId = function () {
        return this.mId;
    };
    Slot7Item.prototype.setId = function (pId) {
        this.mId = pId;
        if (this.mId == SLOT7_ID_ITEM.JACKPOT ||
            this.mId == SLOT7_ID_ITEM.WILD ||
            this.mId == SLOT7_ID_ITEM.BONUS ||
            this.mId == SLOT7_ID_ITEM.SCATTER) {
            this.skeItem.node.active = true;
            this.sprItem.node.active = false;
            if (this.mId == SLOT7_ID_ITEM.JACKPOT) {
                this.skeItem.skeletonData = this.skeDataJackpot;
                this.skeItem.animation = "animation";
                this.skeItem.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            }
            else if (this.mId == SLOT7_ID_ITEM.WILD) {
                this.skeItem.skeletonData = this.skeDataWild;
                this.skeItem.animation = "animation";
                this.skeItem.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            }
            else if (this.mId == SLOT7_ID_ITEM.BONUS) {
                this.skeItem.skeletonData = this.skeDataBonus;
                this.skeItem.animation = "animation";
                this.skeItem.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            }
            else if (this.mId == SLOT7_ID_ITEM.SCATTER) {
                this.skeItem.skeletonData = this.skeDataScatter;
                this.skeItem.animation = "animation";
                this.skeItem.setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE);
            }
            else {
            }
        }
        else {
            this.skeItem.node.active = false;
            this.sprItem.node.active = true;
            if (this.mId == SLOT7_ID_ITEM.X500) {
                this.sprItem.spriteFrame = this.frameX500;
            }
            else if (this.mId == SLOT7_ID_ITEM.X375) {
                this.sprItem.spriteFrame = this.frameX375;
            }
            else if (this.mId == SLOT7_ID_ITEM.X275) {
                this.sprItem.spriteFrame = this.frameX275;
            }
            else if (this.mId == SLOT7_ID_ITEM.X150) {
                this.sprItem.spriteFrame = this.frameX150;
            }
            else if (this.mId == SLOT7_ID_ITEM.X50) {
                this.sprItem.spriteFrame = this.frameX50;
            }
            else if (this.mId == SLOT7_ID_ITEM.X25) {
                this.sprItem.spriteFrame = this.frameX25;
            }
            else if (this.mId == SLOT7_ID_ITEM.X5) {
                this.sprItem.spriteFrame = this.frameX5;
            }
            else {
            }
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Slot7Item.prototype, "sprItem", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot7Item.prototype, "skeItem", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot7Item.prototype, "skeDataJackpot", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot7Item.prototype, "skeDataBonus", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot7Item.prototype, "skeDataScatter", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Slot7Item.prototype, "skeDataWild", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX500", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX375", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX275", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX150", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX50", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX25", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot7Item.prototype, "frameX5", void 0);
    Slot7Item = __decorate([
        ccclass
    ], Slot7Item);
    return Slot7Item;
}(cc.Component));
exports.default = Slot7Item;

cc._RF.pop();