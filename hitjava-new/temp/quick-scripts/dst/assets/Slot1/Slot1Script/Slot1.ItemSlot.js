
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.ItemSlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5JdGVtU2xvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQStHQztRQTVHRyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWdCLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUUzQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsV0FBSyxHQUFHLElBQUksQ0FBQztRQUNiLGNBQVEsR0FBRyxJQUFJLENBQUM7O0lBK0YzQixDQUFDO0lBOUZHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBQ0QsNEJBQUksR0FBSixVQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUUsZUFBZTtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENB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QyxJQUFJLENBQUM7aUJBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUMxQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQztJQTNHRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7b0RBQ1E7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNTO0lBWGpCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0ErR2pDO0lBQUQsb0JBQUM7Q0EvR0QsQUErR0MsQ0EvRzBDLEVBQUUsQ0FBQyxTQUFTLEdBK0d0RDtrQkEvR29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QxSXRlbVNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwaW5lSWNvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIGl0ZW1BdGxhc3Q6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcblxuICAgIHB1YmxpYyBnYW1lUGxheU1hbmFnZXIgPSBudWxsO1xuICAgIHB1YmxpYyBpdGVtSWQgPSBudWxsO1xuICAgIHB1YmxpYyBpbmRleCA9IG51bGw7XG4gICAgcHVibGljIGFuaW1OYW1lID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbiA9IGNjLmZpbmQoXCJCb3gvc3ByaXRlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuc3BpbmVJY29uID0gY2MuZmluZChcIkJveC9zcGluZVwiLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgIHRoaXMubm9kZUJveCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJveFwiKTtcblxuICAgIH1cbiAgICBpbml0KGl0ZW1JZCwgaW5kZXgsIGdhbWVQbGF5TWFuYWdlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuZ2FtZVBsYXlNYW5hZ2VyID0gZ2FtZVBsYXlNYW5hZ2VyO1xuICAgICAgICBzZWxmLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgc2VsZi5pbmRleCA9IGluZGV4O1xuICAgICAgICBzZWxmLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLnNjYWxlID0gMC42NTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLnNwcml0ZUljb24ubm9kZS53aWR0aCAvIDEsIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmhlaWdodCAvIDEpKTtcbiAgICAgICAgc2VsZi5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gc2VsZi5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gc2VsZi5nYW1lUGxheU1hbmFnZXIuZ2V0U3ByaXRlRnJhbWVJY29uKHNlbGYuaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKGl0ZW1JZCk7XG4gICAgfVxuXG5cblxuICAgIGNoYW5nZVNwcml0ZUJsdXJCeUl0ZW1JZChpdGVtSWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIHNlbGYuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbUF0bGFzdC5nZXRTcHJpdGVGcmFtZShcImJsdXJfXCIgKyBpdGVtSWQpO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMuc3ByaXRlSWNvbi5ub2RlLndpZHRoIC8gMSwgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0IC8gMSkpO1xuICAgIH1cblxuICAgIGNoYW5nZVNwcml0ZVJlYWxCeUl0ZW1JZChpdGVtSWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlRSSU1NRUQ7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbUF0bGFzdC5nZXRTcHJpdGVGcmFtZShpdGVtSWQpO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5zZXRDb250ZW50U2l6ZShjYy5zaXplKHRoaXMuc3ByaXRlSWNvbi5ub2RlLndpZHRoIC8gMSwgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0IC8gMSkpO1xuICAgIH1cblxuICAgIGNoYW5nZVNwaW5lSWNvbihpdGVtSWQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUueSA9IDA7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5UUklNTUVEO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24uc3ByaXRlRnJhbWUgPSB0aGlzLml0ZW1BdGxhc3QuZ2V0U3ByaXRlRnJhbWUoaXRlbUlkKTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLnNwcml0ZUljb24ubm9kZS53aWR0aCAvIDEsIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmhlaWdodCAvIDEpKTtcbiAgICAgICAgaWYgKGl0ZW1JZCA+IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtSWQgPSBwYXJzZUludChpdGVtSWQpO1xuICAgICAgICAgICAgc3dpdGNoIChpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5hbWUgPSBcImFuaW1hdGlvbl9GaXJlXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUueSA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbU5hbWUgPSBcImFuaW1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwiYW5pbWF0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzLnNwaW5lSWNvbi5zZXRBbmltYXRpb24oMCwgYW5pbU5hbWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrU2hvd1Nwcml0ZU9yU3BpbmUoKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNwcml0ZUljb24ubm9kZSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnNwaW5lSWNvbi5ub2RlKTtcbiAgICAgICAgaWYgKHRoaXMuaXRlbUlkID4gMikge1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5zcHJpdGVJY29uLm5vZGUpXG4gICAgICAgICAgICAgICAgLnRvKDAuMjUsIHsgc2NhbGU6IDAuOSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjQpXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24uc2V0QW5pbWF0aW9uKDAsIHRoaXMuYW5pbU5hbWUsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwaW5lSWNvbi5ub2RlKVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjkpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==