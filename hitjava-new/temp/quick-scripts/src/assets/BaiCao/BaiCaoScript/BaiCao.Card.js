"use strict";
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