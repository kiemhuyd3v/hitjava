
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c50a54Af+5A7Ii1aiHY1pUT', 'TienLen.Card');
// Lobby/LobbyScript/TienLenScript/TienLen.Card.ts

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
var TienLen_Res_1 = require("./TienLen.Res");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Card = /** @class */ (function (_super) {
    __extends(Card, _super);
    function Card() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spr = null;
        _this.posY = 0;
        _this.offsetY = 20;
        _this.isSelected = false;
        _this.callback = null;
        _this.index = null;
        return _this;
    }
    Card.prototype.onLoad = function () {
        this.spr = this.node.getComponent(cc.Sprite);
        this.posY = this.node.y;
    };
    Card.prototype.onSelect = function () {
        this.node.y += this.isSelected ? -this.offsetY : this.offsetY;
        this.isSelected = !this.isSelected;
        if (this.isSelected && this.callback) {
            this.callback(this.index);
        }
    };
    Card.prototype.setCardData = function (index, callback) {
        if (callback === void 0) { callback = null; }
        this.index = index;
        if (this.spr == null) {
            this.spr = this.node.getComponent(cc.Sprite);
        }
        this.spr.spriteFrame = TienLen_Res_1.default.getInstance().getCardFace(index);
        this.callback = callback;
    };
    Card.prototype.getCardIndex = function () {
        return this.index;
    };
    Card.prototype.select = function () {
        this.node.y = this.posY + this.offsetY;
        this.isSelected = true;
    };
    Card.prototype.deSelect = function () {
        this.node.y = this.posY;
        this.isSelected = false;
    };
    Card = __decorate([
        ccclass
    ], Card);
    return Card;
}(cc.Component));
exports.default = Card;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLkNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWdDO0FBRTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNkNDO1FBM0NHLFNBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsYUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBSyxHQUFHLElBQUksQ0FBQzs7SUFzQ2pCLENBQUM7SUFwQ0cscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7SUFFTCxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxRQUFlO1FBQWYseUJBQUEsRUFBQSxlQUFlO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBRSxJQUFJLEVBQUM7WUFDZCxJQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLHFCQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBWSxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBNUNnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNkN4QjtJQUFELFdBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q2lDLEVBQUUsQ0FBQyxTQUFTLEdBNkM3QztrQkE3Q29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzIGZyb20gXCIuL1RpZW5MZW4uUmVzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHNwciA9IG51bGw7XG4gICAgcG9zWSA9IDA7XG4gICAgb2Zmc2V0WSA9IDIwO1xuICAgIGlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICBjYWxsYmFjayA9IG51bGw7XG4gICAgaW5kZXggPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnNwciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5wb3NZID0gdGhpcy5ub2RlLnk7XG4gICAgfVxuXG4gICAgb25TZWxlY3QoKSB7XG4gICAgICAgIHRoaXMubm9kZS55ICs9IHRoaXMuaXNTZWxlY3RlZCA/IC10aGlzLm9mZnNldFkgOiB0aGlzLm9mZnNldFk7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQgJiYgdGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayh0aGlzLmluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0Q2FyZERhdGEoaW5kZXgsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGlmKHRoaXMuc3ByPT1udWxsKXtcbiAgICAgICAgICAgIHRoaXMuc3ByPXRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwci5zcHJpdGVGcmFtZSA9IFJlcy5nZXRJbnN0YW5jZSgpLmdldENhcmRGYWNlKGluZGV4KTtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIGdldENhcmRJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gICAgfVxuXG4gICAgc2VsZWN0KCkge1xuICAgICAgICB0aGlzLm5vZGUueSA9IHRoaXMucG9zWSArIHRoaXMub2Zmc2V0WTtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBkZVNlbGVjdCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBvc1k7XG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==