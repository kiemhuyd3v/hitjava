
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0c79CT2hJMwaWDZSLTdtS6', 'BaiCao.Card');
// BaiCao/BaiCaoScript/BaiCao.Card.ts

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
var BaiCao_Res_1 = require("./BaiCao.Res");
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
        this.spr.spriteFrame = BaiCao_Res_1.default.getInstance().getCardFace(index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQUV6QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTBDQztRQXhDRyxTQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ1gsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixnQkFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBbUNqQixDQUFDO0lBakNHLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCx1QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBRUwsQ0FBQztJQUVELDBCQUFXLEdBQVgsVUFBWSxLQUFLLEVBQUUsUUFBZTtRQUFmLHlCQUFBLEVBQUEsZUFBZTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRyxvQkFBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsMkJBQVksR0FBWjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsdUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQXpDZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQTBDeEI7SUFBRCxXQUFDO0NBMUNELEFBMENDLENBMUNpQyxFQUFFLENBQUMsU0FBUyxHQTBDN0M7a0JBMUNvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlcyBmcm9tIFwiLi9CYWlDYW8uUmVzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgc3ByID0gbnVsbDtcclxuICAgIHBvc1kgPSAwO1xyXG4gICAgb2Zmc2V0WSA9IDIwO1xyXG4gICAgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgY2FsbGJhY2sgPSBudWxsO1xyXG4gICAgaW5kZXggPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnNwciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnBvc1kgPSB0aGlzLm5vZGUueTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLmlzU2VsZWN0ZWQgPyAtdGhpcy5vZmZzZXRZIDogdGhpcy5vZmZzZXRZO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9ICF0aGlzLmlzU2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCAmJiB0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sodGhpcy5pbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRDYXJkRGF0YShpbmRleCwgY2FsbGJhY2sgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHRoaXMuc3ByLnNwcml0ZUZyYW1lID0gUmVzLmdldEluc3RhbmNlKCkuZ2V0Q2FyZEZhY2UoaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYXJkSW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5wb3NZICsgdGhpcy5vZmZzZXRZO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVTZWxlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLnBvc1k7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIl19