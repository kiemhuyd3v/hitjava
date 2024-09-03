
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot10/Slot10Script/Slot10.Item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDEwXFxTbG90MTBTY3JpcHRcXFNsb3QxMC5JdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBK0dDO1FBNUdHLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBZ0IsSUFBSSxDQUFDO1FBRzlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBbUIsSUFBSSxDQUFDO1FBRTNCLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxXQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsY0FBUSxHQUFHLElBQUksQ0FBQzs7SUErRjNCLENBQUM7SUE5RkcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRCw2QkFBSSxHQUFKLFVBQUssTUFBTSxFQUFFLEtBQUssRUFBRSxlQUFlO1FBQy9CLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FB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LENBQUM7WUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzlDO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNiLGlDQUFpQztZQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBM0dEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztxREFDUTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1M7SUFYakIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQStHbEM7SUFBRCxxQkFBQztDQS9HRCxBQStHQyxDQS9HMkMsRUFBRSxDQUFDLFNBQVMsR0ErR3ZEO2tCQS9Hb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDEwSXRlbVNsb3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVJY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwaW5lSWNvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIGl0ZW1BdGxhc3Q6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcblxuICAgIHB1YmxpYyBnYW1lUGxheU1hbmFnZXIgPSBudWxsO1xuICAgIHB1YmxpYyBpdGVtSWQgPSBudWxsO1xuICAgIHB1YmxpYyBpbmRleCA9IG51bGw7XG4gICAgcHVibGljIGFuaW1OYW1lID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbiA9IGNjLmZpbmQoXCJCb3gvc3ByaXRlXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHRoaXMuc3BpbmVJY29uID0gY2MuZmluZChcIkJveC9za2VcIiwgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICB0aGlzLm5vZGVCb3ggPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCb3hcIik7XG4gICAgfVxuICAgIGluaXQoaXRlbUlkLCBpbmRleCwgZ2FtZVBsYXlNYW5hZ2VyKSB7XG4gICAgICAgIGl0ZW1JZCA9IHBhcnNlSW50KGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuZ2FtZVBsYXlNYW5hZ2VyID0gZ2FtZVBsYXlNYW5hZ2VyO1xuICAgICAgICB0aGlzLml0ZW1JZCA9IGl0ZW1JZDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLnNjYWxlID0gMC42NTtcbiAgICAgICAgLy8gdGhpcy5zcHJpdGVJY29uLm5vZGUuc2V0Q29udGVudFNpemUoY2Muc2l6ZSh0aGlzLnNwcml0ZUljb24ubm9kZS53aWR0aCAqMC42NywgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0ICowLjY3KSk7XG4gICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHNlbGYuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHNlbGYuZ2FtZVBsYXlNYW5hZ2VyLmdldFNwcml0ZUZyYW1lSWNvbihzZWxmLml0ZW1JZCk7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuaXRlbUF0bGFzdC5nZXRTcHJpdGVGcmFtZShcIml0ZW1fXCIgKyAoaXRlbUlkICsgMSkpO1xuICAgIH1cblxuXG5cbiAgICBjaGFuZ2VTcHJpdGVCbHVyQnlJdGVtSWQoaXRlbUlkKSB7XG4gICAgICAgIGl0ZW1JZCA9IHBhcnNlSW50KGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRDtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV9cIiArIChpdGVtSWQgKyAxKSArIFwiX2JsdXJcIik7XG4gICAgICAgIC8vIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJpdGVJY29uLm5vZGUud2lkdGgqMC42NywgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0KjAuNjcpKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTcHJpdGVSZWFsQnlJdGVtSWQoaXRlbUlkKSB7XG4gICAgICAgIGl0ZW1JZCA9IHBhcnNlSW50KGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRDtcbiAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV9cIiArIChpdGVtSWQgKyAxKSk7XG4gICAgICAgIC8vIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJpdGVJY29uLm5vZGUud2lkdGgqMC42NywgdGhpcy5zcHJpdGVJY29uLm5vZGUuaGVpZ2h0KjAuNjcpKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VTcGluZUljb24oaXRlbUlkKSB7XG4gICAgICAgIGl0ZW1JZCA9IHBhcnNlSW50KGl0ZW1JZCk7XG4gICAgICAgIHRoaXMuaXRlbUlkID0gaXRlbUlkO1xuICAgICAgICB0aGlzLnNwcml0ZUljb24uc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuVFJJTU1FRDtcbiAgICAgICAgdGhpcy5zcHJpdGVJY29uLnNwcml0ZUZyYW1lID0gdGhpcy5pdGVtQXRsYXN0LmdldFNwcml0ZUZyYW1lKFwiaXRlbV9cIiArIChpdGVtSWQgKyAxKSk7XG4gICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuc3ByaXRlSWNvbi5ub2RlLnNldENvbnRlbnRTaXplKGNjLnNpemUodGhpcy5zcHJpdGVJY29uLm5vZGUud2lkdGggKjAuNjcsIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmhlaWdodCAqMC42NykpO1xuICAgICAgICBpZiAoaXRlbUlkICE9IDAgJiYgaXRlbUlkICE9IDIpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1JZCA9IHBhcnNlSW50KGl0ZW1JZCk7XG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwiamFja3BvdFwiXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltTmFtZSA9IFwiYm9udXNcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoaXMuc3BpbmVJY29uLnNldEFuaW1hdGlvbigwLCB0aGlzLmFuaW1OYW1lLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja1Nob3dTcHJpdGVPclNwaW5lKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiY2hlY2tTaG93U3ByaXRlT3JTcGluZVwiKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByaXRlSWNvbi5ub2RlKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3BpbmVJY29uLm5vZGUpO1xuICAgICAgICBpZiAodGhpcy5pdGVtSWQgIT0gMCAmJiB0aGlzLml0ZW1JZCAhPSAyKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLnNwcml0ZUljb24ubm9kZSlcbiAgICAgICAgICAgIC8vICAgICAudG8oMC4yNSwgeyBzY2FsZTogMC45IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgLy8gICAgIC50bygwLjI1LCB7IHNjYWxlOiAwLjggfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pXG4gICAgICAgICAgICAvLyAgICAgLmRlbGF5KDAuNClcbiAgICAgICAgICAgIC8vICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc3ByaXRlSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgIC8vICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5zZXRBbmltYXRpb24oMCwgdGhpcy5hbmltTmFtZSwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgICAgICAgLmRlbGF5KDAuOSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNvIGNoYXkgdmFvIGRheSBrb1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZUljb24ubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG59Il19