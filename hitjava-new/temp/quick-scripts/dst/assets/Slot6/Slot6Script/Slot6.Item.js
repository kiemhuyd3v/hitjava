
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot6/Slot6Script/Slot6.Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDZcXFNsb3Q2U2NyaXB0XFxTbG90Ni5JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVcsYUFZVjtBQVpELFdBQVcsYUFBYTtJQUNwQix1REFBVyxDQUFBO0lBQ1gsbURBQVMsQ0FBQTtJQUNULGlEQUFRLENBQUE7SUFDUix1REFBVyxDQUFBO0lBQ1gsaURBQVEsQ0FBQTtJQUNSLGlEQUFRLENBQUE7SUFDUixpREFBUSxDQUFBO0lBQ1IsaURBQVEsQ0FBQTtJQUNSLCtDQUFPLENBQUE7SUFDUCwrQ0FBTyxDQUFBO0lBQ1AsOENBQU8sQ0FBQTtBQUNYLENBQUMsRUFaVSxhQUFhLEtBQWIsYUFBYSxRQVl2QjtBQUdEO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0pDO1FBL0lHLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIscUJBQWUsR0FBb0IsSUFBSSxDQUFDO1FBRXhDLGlCQUFXLEdBQW9CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFHckMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFFekIsU0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLGNBQVEsR0FBRyxFQUFFLENBQUM7O0lBZ0lsQixDQUFDO0lBOUhVLHlCQUFLLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVNLHlCQUFLLEdBQVosVUFBYSxHQUFXLEVBQUUsS0FBYTtRQUFiLHNCQUFBLEVBQUEsYUFBYTtRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUs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O2dCQUN4RSxNQUFNO1NBQ2I7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUE5SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs4Q0FDTTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7c0RBQ2M7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQztrREFDVTtJQUVwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO21EQUNXO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ1E7SUFqQmhCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvSjdCO0lBQUQsZ0JBQUM7Q0FwSkQsQUFvSkMsQ0FwSnNDLEVBQUUsQ0FBQyxTQUFTLEdBb0psRDtrQkFwSm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuY29uc3QgZW51bSBTTE9UNl9JRF9JVEVNIHtcbiAgICBKQUNLUE9UID0gMyxcbiAgICBCT05VUyA9IDEsXG4gICAgV0lMRCA9IDIsXG4gICAgU0NBVFRFUiA9IDAsXG4gICAgWDUwMCA9IDQsXG4gICAgWDM3NSA9IDUsXG4gICAgWDI3NSA9IDYsXG4gICAgWDE1MCA9IDcsXG4gICAgWDUwID0gOCxcbiAgICBYMjUgPSA5LFxuICAgIFg1ID0gMTBcbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q2SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNrZUl0ZW06IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckl0ZW06IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIHNrZURhdGFTcGVjaWNhbDogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIHNrZURhdGFJY29uOiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gICAgc2tlRGF0YUljb24yOiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIHNwckF0bGFzdDogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBtSWQ6IG51bWJlciA9IC0xO1xuICAgIGFuaW1OYW1lID0gXCJcIjtcblxuICAgIHB1YmxpYyBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubUlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRJZChwSWQ6IG51bWJlciwgaXNXaW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm1JZCA9IHBJZDtcbiAgICAgICAgdGhpcy5zcHJJdGVtLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tSWQpIHtcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5KQUNLUE9UOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiamFja3BvdFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFTcGVjaWNhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gaXNXaW4gPyBcImFuaW1hdGlvblwiIDogXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gaXNXaW4gPyBcImFuaW1hdGlvblwiIDogXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5XSUxEOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwid2lsZFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFTcGVjaWNhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gaXNXaW4gPyBcImFuaW1hdGlvblwiIDogXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gaXNXaW4gPyBcImFuaW1hdGlvblwiIDogXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5CT05VUzpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcImJvbnVzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFTcGVjaWNhbDtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gaXNXaW4gPyBcImJvbnVzXCIgOiBcImJvbnVzMlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5hbWUgPSBpc1dpbiA/IFwiYm9udXNcIiA6IFwiYm9udXMyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uU0NBVFRFUjpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcInNjYXR0ZXJcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5za2VJdGVtLnNrZWxldG9uRGF0YSA9IHRoaXMuc2tlRGF0YVNwZWNpY2FsO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5hbmltYXRpb24gPSBcInNjYXR0ZXJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gXCJzY2F0dGVyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDUwMDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcIml0ZW1fNFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uc2tlbGV0b25EYXRhID0gdGhpcy5za2VEYXRhSWNvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gaXNXaW4gPyBcIm5oYW4gbWFcIiA6IFwibmhhbiBtYTJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gaXNXaW4gPyBcIm5oYW4gbWFcIiA6IFwibmhhbiBtYTJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5YMzc1OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV83XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFJY29uO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5hbmltYXRpb24gPSBpc1dpbiA/IFwic3UgdHVcIiA6IFwic3UgdHUyXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IGlzV2luID8gXCJzdSB0dVwiIDogXCJzdSB0dTJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5YMjc1OlxuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFJY29uO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV82XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5hbmltYXRpb24gPSBpc1dpbiA/IFwiYm8gY2FwXCIgOiBcImJvIGNhcDJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gaXNXaW4gPyBcImJvIGNhcFwiIDogXCJibyBjYXAyXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDE1MDpcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uc2tlbGV0b25EYXRhID0gdGhpcy5za2VEYXRhSWNvbjtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcIml0ZW1fNVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gaXNXaW4gPyBcImJhY2ggZHVvbmdcIiA6IFwiYmFjaCBkdW9uZzJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gaXNXaW4gPyBcImJhY2ggZHVvbmdcIiA6IFwiYmFjaCBkdW9uZzJcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5YNTA6XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJBdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJpdGVtXzNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5za2VJdGVtLnNrZWxldG9uRGF0YSA9IHRoaXMuc2tlRGF0YUljb24yO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5hbmltYXRpb24gPSBcIk5ndW9pRW1cIjtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gXCJuZ3VvaWVtXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDI1OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV8xXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFJY29uMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gXCJOZ3VvaUVtXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwibmd1b2llbVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTTE9UNl9JRF9JVEVNLlg1OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV8yXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlSXRlbS5za2VsZXRvbkRhdGEgPSB0aGlzLnNrZURhdGFJY29uMjtcbiAgICAgICAgICAgICAgICB0aGlzLnNrZUl0ZW0uYW5pbWF0aW9uID0gXCJOZ3VvaUVtXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwibmd1b2llbVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BySXRlbS5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJJdGVtLm5vZGUud2lkdGggLyAxLjEsIHRoaXMuc3BySXRlbS5ub2RlLmhlaWdodCAvIDEuMSkpO1xuICAgIH1cbiAgICBzaG93SXRlbUFuaW0oKSB7XG4gICAgICAgIHRoaXMuc2tlSXRlbS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuc2tlSXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3BySXRlbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNrZUl0ZW0uc2V0QW5pbWF0aW9uKDAsIHRoaXMuYW5pbU5hbWUsIHRydWUpO1xuICAgIH1cbiAgICBzZXRJZEJsdXIoaWQpIHtcbiAgICAgICAgdGhpcy5zcHJJdGVtLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIHN3aXRjaCAodGhpcy5tSWQpIHtcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5KQUNLUE9UOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiamFja3BvdF9ibHVyXCIpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uV0lMRDpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcIndpbGRcIilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5CT05VUzpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcImJvbnVzX2JsdXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uU0NBVFRFUjpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcInNjYXR0ZXJfYmx1clwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5YNTAwOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV80X2JsdXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDM3NTpcbiAgICAgICAgICAgICAgICB0aGlzLnNwckl0ZW0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzdC5nZXRTcHJpdGVGcmFtZShcIml0ZW1fN19ibHVyXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBTTE9UNl9JRF9JVEVNLlgyNzU6XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJBdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJpdGVtXzZfYmx1clwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgU0xPVDZfSURfSVRFTS5YMTUwOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV81X2JsdXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDUwOlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV8zX2JsdXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDI1OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BySXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV8xX2JsdXJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFNMT1Q2X0lEX0lURU0uWDU6XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJJdGVtLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJBdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJpdGVtXzJfYmx1clwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwckl0ZW0ubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMuc3BySXRlbS5ub2RlLndpZHRoIC8gMS4xLCB0aGlzLnNwckl0ZW0ubm9kZS5oZWlnaHQgLyAxLjEpKTtcbiAgICB9XG4gICAgb2ZmSXRlbUFuaW0oKSB7XG4gICAgICAgIHRoaXMuc3BySXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2tlSXRlbS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==