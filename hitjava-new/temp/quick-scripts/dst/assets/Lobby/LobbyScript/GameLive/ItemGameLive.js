
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/GameLive/ItemGameLive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d387sG0+JCpKQXz96BnXJw', 'ItemGameLive');
// Lobby/LobbyScript/GameLive/ItemGameLive.ts

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
var Tween_1 = require("../Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemGameLive = /** @class */ (function (_super) {
    __extends(ItemGameLive, _super);
    function ItemGameLive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.txtName = null;
        _this.txtBalance = null;
        _this.txtMaintain = null;
        _this.nodeBox = null;
        _this.money = 0;
        return _this;
    }
    ItemGameLive.prototype.show = function () {
        this.node.active = true;
        this.money = 0;
    };
    ItemGameLive.prototype.hide = function () {
        this.node.active = false;
    };
    ItemGameLive.prototype.maintain = function () {
        this.txtBalance.node.active = false;
        this.txtMaintain.node.active = true;
    };
    ItemGameLive.prototype.updateData = function (data) {
        this.txtBalance.node.active = true;
        this.txtMaintain.node.active = false;
        this.money = parseInt(data);
        if (this.id == 1 || this.id == 2 || this.id == 3) {
            Tween_1.default.numberTo(this.txtBalance, this.money * 1000, 1);
        }
        else {
            Tween_1.default.numberTo(this.txtBalance, this.money, 1);
        }
    };
    ItemGameLive.prototype.onBtnClick = function () {
    };
    __decorate([
        property
    ], ItemGameLive.prototype, "id", void 0);
    __decorate([
        property(cc.Label)
    ], ItemGameLive.prototype, "txtName", void 0);
    __decorate([
        property(cc.Label)
    ], ItemGameLive.prototype, "txtBalance", void 0);
    __decorate([
        property(cc.Label)
    ], ItemGameLive.prototype, "txtMaintain", void 0);
    __decorate([
        property(cc.Node)
    ], ItemGameLive.prototype, "nodeBox", void 0);
    ItemGameLive = __decorate([
        ccclass
    ], ItemGameLive);
    return ItemGameLive;
}(cc.Component));
exports.default = ItemGameLive;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxHYW1lTGl2ZVxcSXRlbUdhbWVMaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEyQztBQUVyQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUkxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTJDQztRQXhDRyxRQUFFLEdBQVUsQ0FBQyxDQUFDO1FBRWQsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRWhCLFdBQUssR0FBRyxDQUFDLENBQUM7O0lBOEJyQixDQUFDO0lBN0JHLDJCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDeEMsQ0FBQztJQUNELGlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ1gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUcsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUM7WUFDNUMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO2FBQ0c7WUFDQSxlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCxpQ0FBVSxHQUFWO0lBRUEsQ0FBQztJQXRDRDtRQURDLFFBQVE7NENBQ0s7SUFFZDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2lEQUNLO0lBWE4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTJDaEM7SUFBRCxtQkFBQztDQTNDRCxBQTJDQyxDQTNDeUMsRUFBRSxDQUFDLFNBQVMsR0EyQ3JEO2tCQTNDb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUd2VlbiBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUdhbWVMaXZlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGlkOm51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dE5hbWU6Y2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHRCYWxhbmNlOmNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0TWFpbnRhaW46Y2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVCb3g6Y2MuTm9kZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgbW9uZXkgPSAwO1xuICAgIHNob3coKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubW9uZXkgPSAwO1xuICAgIH1cblxuICAgIGhpZGUoKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG1haW50YWluKCl7XG4gICAgICAgIHRoaXMudHh0QmFsYW5jZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnR4dE1haW50YWluLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgdXBkYXRlRGF0YShkYXRhKXtcbiAgICAgICAgdGhpcy50eHRCYWxhbmNlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50eHRNYWludGFpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1vbmV5ICA9IHBhcnNlSW50KGRhdGEpO1xuICAgICAgICBpZih0aGlzLmlkID09IDEgfHwgdGhpcy5pZCA9PSAyIHx8IHRoaXMuaWQgPT0gMyl7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnR4dEJhbGFuY2UsdGhpcy5tb25leSoxMDAwLDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnR4dEJhbGFuY2UsdGhpcy5tb25leSwxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuQ2xpY2soKXtcblxuICAgIH1cbiAgICBcbn1cbiJdfQ==