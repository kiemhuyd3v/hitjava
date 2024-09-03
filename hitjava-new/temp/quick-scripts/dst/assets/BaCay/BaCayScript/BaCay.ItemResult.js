
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.ItemResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8789ktNuxEQY435mcEk8v1', 'BaCay.ItemResult');
// BaCay/BaCayScript/BaCay.ItemResult.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaCayItemResult = /** @class */ (function (_super) {
    __extends(BaCayItemResult, _super);
    function BaCayItemResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelUserName = null;
        _this.labelBet = null;
        _this.labelBien = null;
        _this.labelKe = null;
        _this.labelGa = null;
        _this.labelTotal = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BaCayItemResult.prototype.start = function () {
    };
    BaCayItemResult.prototype.initItem = function (info) {
        this.labelUserName.string = info.userName;
        this.labelBet.string = Utils_1.default.formatNumber(info.bet);
        this.labelBien.string = Utils_1.default.formatNumber(info.bien);
        this.labelKe.string = Utils_1.default.formatNumber(info.ke);
        this.labelGa.string = Utils_1.default.formatNumber(info.ga);
        this.labelTotal.string = Utils_1.default.formatNumber(info.total);
        this.labelBet.node.color = info.bet > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelBien.node.color = info.bien > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelKe.node.color = info.ke > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelGa.node.color = info.ga > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
        this.labelTotal.node.color = info.total > 0 ? cc.Color.YELLOW : cc.Color.WHITE;
    };
    __decorate([
        property(cc.Label)
    ], BaCayItemResult.prototype, "labelUserName", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemResult.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemResult.prototype, "labelBien", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemResult.prototype, "labelKe", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemResult.prototype, "labelGa", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemResult.prototype, "labelTotal", void 0);
    BaCayItemResult = __decorate([
        ccclass
    ], BaCayItemResult);
    return BaCayItemResult;
}(cc.Component));
exports.default = BaCayItemResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5JdGVtUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXVDQztRQXBDRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWEsSUFBSSxDQUFDOztRQXlCNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwrQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNuRixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0RBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNTO0lBYlgsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXVDbkM7SUFBRCxzQkFBQztDQXZDRCxBQXVDQyxDQXZDNEMsRUFBRSxDQUFDLFNBQVMsR0F1Q3hEO2tCQXZDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFDYXlJdGVtUmVzdWx0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbFVzZXJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQmllbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEtlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsR2E6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxUb3RhbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdEl0ZW0oaW5mbykge1xuICAgICAgICB0aGlzLmxhYmVsVXNlck5hbWUuc3RyaW5nID0gaW5mby51c2VyTmFtZTtcbiAgICAgICAgdGhpcy5sYWJlbEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mby5iZXQpO1xuICAgICAgICB0aGlzLmxhYmVsQmllbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mby5iaWVuKTtcbiAgICAgICAgdGhpcy5sYWJlbEtlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvLmtlKTtcbiAgICAgICAgdGhpcy5sYWJlbEdhLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvLmdhKTtcbiAgICAgICAgdGhpcy5sYWJlbFRvdGFsLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvLnRvdGFsKTtcblxuICAgICAgICB0aGlzLmxhYmVsQmV0Lm5vZGUuY29sb3IgPSBpbmZvLmJldCA+IDAgPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5sYWJlbEJpZW4ubm9kZS5jb2xvciA9IGluZm8uYmllbiA+IDAgPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5sYWJlbEtlLm5vZGUuY29sb3IgPSBpbmZvLmtlID4gMCA/IGNjLkNvbG9yLllFTExPVyA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmxhYmVsR2Eubm9kZS5jb2xvciA9IGluZm8uZ2EgPiAwID8gY2MuQ29sb3IuWUVMTE9XIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMubGFiZWxUb3RhbC5ub2RlLmNvbG9yID0gaW5mby50b3RhbCA+IDAgPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19