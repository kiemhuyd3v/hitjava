
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot7/Slot7Script/Slot7.Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDdcXFNsb3Q3U2NyaXB0XFxTbG90Ny5JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVcsYUFZVjtBQVpELFdBQVcsYUFBYTtJQUN0Qix1REFBVyxDQUFBO0lBQ1gsbURBQVMsQ0FBQTtJQUNULGlEQUFRLENBQUE7SUFDUix1REFBVyxDQUFBO0lBQ1gsaURBQVEsQ0FBQTtJQUNSLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0lBQ1IsaURBQVEsQ0FBQTtJQUNSLCtDQUFPLENBQUE7SUFDUCwrQ0FBTyxDQUFBO0lBQ1AsOENBQU8sQ0FBQTtBQUNULENBQUMsRUFaVSxhQUFhLEtBQWIsYUFBYSxRQVl2QjtBQUdEO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBeUdDO1FBdkdDLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFHNUIsb0JBQWMsR0FBb0IsSUFBSSxDQUFDO1FBR3ZDLGtCQUFZLEdBQW9CLElBQUksQ0FBQztRQUdyQyxvQkFBYyxHQUFvQixJQUFJLENBQUM7UUFHdkMsaUJBQVcsR0FBb0IsSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBR2pDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBR2pDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBR2pDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBR2pDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGFBQU8sR0FBbUIsSUFBSSxDQUFDO1FBRXZCLFNBQUcsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFpRTNCLENBQUM7SUEvRFEseUJBQUssR0FBWjtRQUNFLE9BQU8s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UTtJQUdqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2dEQUNRO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ1E7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNPO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ007SUF0Q1osU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlHN0I7SUFBRCxnQkFBQztDQXpHRCxBQXlHQyxDQXpHc0MsRUFBRSxDQUFDLFNBQVMsR0F5R2xEO2tCQXpHb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmNvbnN0IGVudW0gU0xPVDdfSURfSVRFTSB7XG4gIEpBQ0tQT1QgPSAzLFxuICBCT05VUyA9IDEsXG4gIFdJTEQgPSAyLFxuICBTQ0FUVEVSID0gMCxcbiAgWDUwMCA9IDQsXG4gIFgzNzUgPSA1LFxuICBYMjc1ID0gNixcbiAgWDE1MCA9IDcsXG4gIFg1MCA9IDgsXG4gIFgyNSA9IDksXG4gIFg1ID0gMTAsXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90N0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBzcHJJdGVtOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgc2tlSXRlbTogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gIHNrZURhdGFKYWNrcG90OiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gIHNrZURhdGFCb251czogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcblxuICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICBza2VEYXRhU2NhdHRlcjogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcblxuICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICBza2VEYXRhV2lsZDogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGZyYW1lWDUwMDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgZnJhbWVYMzc1OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBmcmFtZVgyNzU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGZyYW1lWDE1MDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgZnJhbWVYNTA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGZyYW1lWDI1OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICBmcmFtZVg1OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBtSWQ6IG51bWJlciA9IC0xO1xuXG4gIHB1YmxpYyBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tSWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0SWQocElkOiBudW1iZXIpIHtcbiAgICB0aGlzLm1JZCA9IHBJZDtcbiAgICBpZiAoXG4gICAgICB0aGlzLm1JZCA9PSBTTE9UN19JRF9JVEVNLkpBQ0tQT1QgfHxcbiAgICAgIHRoaXMubUlkID09IFNMT1Q3X0lEX0lURU0uV0lMRCB8fFxuICAgICAgdGhpcy5tSWQgPT0gU0xPVDdfSURfSVRFTS5CT05VUyB8fFxuICAgICAgdGhpcy5tSWQgPT0gU0xPVDdfSURfSVRFTS5TQ0FUVEVSXG4gICAgKSB7XG4gICAgICB0aGlzLnNrZUl0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5zcHJJdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm1JZCA9PSBTTE9UN19JRF9JVEVNLkpBQ0tQT1QpIHtcbiAgICAgICAgdGhpcy5za2VJdGVtLnNrZWxldG9uRGF0YSA9IHRoaXMuc2tlRGF0YUphY2twb3Q7XG4gICAgICAgIHRoaXMuc2tlSXRlbS5hbmltYXRpb24gPSBcImFuaW1hdGlvblwiO1xuICAgICAgICB0aGlzLnNrZUl0ZW0uc2V0QW5pbWF0aW9uQ2FjaGVNb2RlKFxuICAgICAgICAgIHNwLlNrZWxldG9uLkFuaW1hdGlvbkNhY2hlTW9kZS5TSEFSRURfQ0FDSEVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tSWQgPT0gU0xPVDdfSURfSVRFTS5XSUxEKSB7XG4gICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFXaWxkO1xuICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gXCJhbmltYXRpb25cIjtcbiAgICAgICAgdGhpcy5za2VJdGVtLnNldEFuaW1hdGlvbkNhY2hlTW9kZShcbiAgICAgICAgICBzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuU0hBUkVEX0NBQ0hFXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubUlkID09IFNMT1Q3X0lEX0lURU0uQk9OVVMpIHtcbiAgICAgICAgdGhpcy5za2VJdGVtLnNrZWxldG9uRGF0YSA9IHRoaXMuc2tlRGF0YUJvbnVzO1xuICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gXCJhbmltYXRpb25cIjtcbiAgICAgICAgdGhpcy5za2VJdGVtLnNldEFuaW1hdGlvbkNhY2hlTW9kZShcbiAgICAgICAgICBzcC5Ta2VsZXRvbi5BbmltYXRpb25DYWNoZU1vZGUuU0hBUkVEX0NBQ0hFXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubUlkID09IFNMT1Q3X0lEX0lURU0uU0NBVFRFUikge1xuICAgICAgICB0aGlzLnNrZUl0ZW0uc2tlbGV0b25EYXRhID0gdGhpcy5za2VEYXRhU2NhdHRlcjtcbiAgICAgICAgdGhpcy5za2VJdGVtLmFuaW1hdGlvbiA9IFwiYW5pbWF0aW9uXCI7XG4gICAgICAgIHRoaXMuc2tlSXRlbS5zZXRBbmltYXRpb25DYWNoZU1vZGUoXG4gICAgICAgICAgc3AuU2tlbGV0b24uQW5pbWF0aW9uQ2FjaGVNb2RlLlNIQVJFRF9DQUNIRVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5za2VJdGVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnNwckl0ZW0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5tSWQgPT0gU0xPVDdfSURfSVRFTS5YNTAwKSB7XG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVYNTAwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1JZCA9PSBTTE9UN19JRF9JVEVNLlgzNzUpIHtcbiAgICAgICAgdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gdGhpcy5mcmFtZVgzNzU7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubUlkID09IFNMT1Q3X0lEX0lURU0uWDI3NSkge1xuICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLmZyYW1lWDI3NTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tSWQgPT0gU0xPVDdfSURfSVRFTS5YMTUwKSB7XG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVYMTUwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1JZCA9PSBTTE9UN19JRF9JVEVNLlg1MCkge1xuICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLmZyYW1lWDUwO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1JZCA9PSBTTE9UN19JRF9JVEVNLlgyNSkge1xuICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLmZyYW1lWDI1O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm1JZCA9PSBTTE9UN19JRF9JVEVNLlg1KSB7XG4gICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuZnJhbWVYNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=