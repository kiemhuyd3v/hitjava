
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot11Bikini/scripts/Slot11.Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDExQmlraW5pXFxzY3JpcHRzXFxTbG90MTEuSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQW9KQztRQWpKRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFHLElBQUksQ0FBQztRQUNkLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQXVJM0IsQ0FBQztJQXRJRyw4QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUNELDZCQUFJLEdBQUosVUFBSyxNQUFNLEVBQUUsS0FBSztRQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixzQ0FBc0M7UUFDdEMseURBQXlEO1FBQ3pELGtGQUFrRjtRQUNsRixvSEFBb0g7UUFDcEgsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0wsQ0FBQztJQUlELGlEQUF3QixHQUF4QixVQUF5QixNQUFNO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDdEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsQ0FBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25HO2FBQU07WUFDSCxRQUFRLE1BQU0sRUFBRTtnQkFDWixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDakYsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDakYsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDaEYsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDaEYsTUFBTTthQUNiO1NBQ0o7UUFFRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELGlEQUF3QixHQUF4QixVQUF5QixNQUFNO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRCx3Q0FBZSxHQUFmLFVBQWdCLE1BQU07UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3RELE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3RDO2FBQU07WUFDSCxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLFFBQVEsTUFBTSxFQUFFO2dCQUNaLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztvQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbkQsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakQsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7b0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNuRCxNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzNFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELE1BQU07YUFDYjtZQUVELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QztJQUNMLENBQUM7SUFDRCwrQ0FBc0IsR0FBdEI7UUFBQSxpQkFpQ0M7UUFoQ0csRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUM1QyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2lCQUN6QixhQUFhLENBQ1YsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDZixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUMvRixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbEcsS0FBSyxFQUFFLENBQUM7WUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2lCQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNYLElBQUksQ0FBQztnQkFDRixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEI7YUFBTTtZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFFM0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztpQkFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDYixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBaEpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDUTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNTO0lBVGpCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FvSmxDO0lBQUQscUJBQUM7Q0FwSkQsQUFvSkMsQ0FwSjJDLEVBQUUsQ0FBQyxTQUFTLEdBb0p2RDtrQkFwSm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QxMUl0ZW1TbG90IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByaXRlSWNvbjogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBzcGluZUljb246IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVBdGxhcylcbiAgICBpdGVtQXRsYXN0OiBjYy5TcHJpdGVBdGxhcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgaXRlbUlkID0gbnVsbDtcbiAgICBwdWJsaWMgaW5kZXggPSBudWxsO1xuICAgIHB1YmxpYyBhbmltTmFtZSA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgfVxuICAgIGluaXQoaXRlbUlkLCBpbmRleCkge1xuICAgICAgICB0aGlzLnNwcml0ZUljb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgc2VsZi5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5zcGluZUljb24ubm9kZS5zY2FsZSA9IDAuNjc7XG4gICAgICAgIHRoaXMuY2hhbmdlU3BpbmVJY29uKGl0ZW1JZCk7XG4gICAgICAgIC8vIHNlbGYuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuc3ByaXRlSWNvbi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5UUklNTUVEO1xuICAgICAgICAvLyB0aGlzLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1BdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJpdGVtX1wiICsgaXRlbUlkKTtcbiAgICAgICAgLy90aGlzLnNwcml0ZUljb24ubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMuc3ByaXRlSWNvbi5ub2RlLndpZHRoIC8gMS41LCB0aGlzLnNwcml0ZUljb24ubm9kZS5oZWlnaHQgLyAxLjUpKTtcbiAgICAgICAgaWYgKGluZGV4ID4gMikge1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIGNoYW5nZVNwcml0ZUJsdXJCeUl0ZW1JZChpdGVtSWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgaXRlbUlkID0gcGFyc2VJbnQoaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIGlmIChpdGVtSWQgPiAzKSB7XG4gICAgICAgICAgICBzZWxmLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1BdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJzeW1ib2xfYmx1cl8xX1wiICsgKyAoaXRlbUlkIC0gMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbUF0bGFzdC5nZXRTcHJpdGVGcmFtZShcInN5bWJvbF9ibHVyXzFfMTRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwic3ltYm9sX2JsdXJfMV8xM1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1BdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJzeW1ib2xfYmx1cl8xXzBcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwic3ltYm9sX2JsdXJfMV8yXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJpdGVJY29uLm5vZGUud2lkdGgsIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmhlaWdodCAqIDAuNSkpO1xuICAgIH1cblxuICAgIGNoYW5nZVNwcml0ZVJlYWxCeUl0ZW1JZChpdGVtSWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbUF0bGFzdC5nZXRTcHJpdGVGcmFtZShcInN5bWJvbF8xX1wiICsgKGl0ZW1JZCAtIDEpKTtcbiAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLnNwcml0ZUljb24ubm9kZS53aWR0aCAvIDEsIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmhlaWdodCAvIDEpKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTcGluZUljb24oaXRlbUlkKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5pdGVtSWQgPSBpdGVtSWQ7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnkgPSAwO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRDtcbiAgICAgICAgaXRlbUlkID0gcGFyc2VJbnQoaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwic3ltYm9sXzFfXCIgKyAoaXRlbUlkIC0gMSkpO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMuc3ByaXRlSWNvbi5ub2RlLndpZHRoIC8gMSwgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0IC8gMSkpO1xuICAgICAgICBpZiAoaXRlbUlkID4gMykge1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1JZCA9IHBhcnNlSW50KGl0ZW1JZCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwiRnJlZVwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1BdGxhc3QuZ2V0U3ByaXRlRnJhbWUoXCJzeW1ib2xfMV8xNFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5zZXRQb3NpdGlvbihjYy52MigtOC43LCAtNC42KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwiYm9udXNcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwic3ltYm9sXzFfMTNcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuc2V0UG9zaXRpb24oY2MudjIoMS42LCA4LjcpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1OYW1lID0gXCJ3aWxkbW9ua2V5XCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbUF0bGFzdC5nZXRTcHJpdGVGcmFtZShcInN5bWJvbF8xXzBcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuc2V0UG9zaXRpb24oY2MudjIoLTAuNDUsIDQuNSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5hbWUgPSBcIkphY2twb3RcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwic3ltYm9sXzFfMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5zZXRQb3NpdGlvbihjYy52MigtOS43MTEsIDI0KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5zZXRBbmltYXRpb24oMCwgdGhpcy5hbmltTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja1Nob3dTcHJpdGVPclNwaW5lKCkge1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcHJpdGVJY29uLm5vZGUpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcGluZUljb24ubm9kZSk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1JZCA+IDMpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuc3ByaXRlSWNvbi5ub2RlKVxuICAgICAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjI1LCB7IHNjYWxlOiB0aGlzLnNwcml0ZUljb24ubm9kZS5zY2FsZSArIDAuMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMjUsIHsgc2NhbGU6IHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNjYWxlIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KSkpXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwcml0ZUljb24ubm9kZSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMC45NSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByaXRlSWNvbi5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuc2NhbGUgPSAxLjA7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24uc2V0QW5pbWF0aW9uKDAsIHRoaXMuYW5pbU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lSWNvbi5ub2RlKVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==