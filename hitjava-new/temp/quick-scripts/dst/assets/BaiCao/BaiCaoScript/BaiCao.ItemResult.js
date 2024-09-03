
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.ItemResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfa281xRbFIXYvZlv9D71E0', 'BaiCao.ItemResult');
// BaiCao/BaiCaoScript/BaiCao.ItemResult.ts

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
var BaiCaoItemResult = /** @class */ (function (_super) {
    __extends(BaiCaoItemResult, _super);
    function BaiCaoItemResult() {
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
    BaiCaoItemResult.prototype.start = function () {
    };
    BaiCaoItemResult.prototype.initItem = function (info) {
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
    ], BaiCaoItemResult.prototype, "labelUserName", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemResult.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemResult.prototype, "labelBien", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemResult.prototype, "labelKe", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemResult.prototype, "labelGa", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemResult.prototype, "labelTotal", void 0);
    BaiCaoItemResult = __decorate([
        ccclass
    ], BaiCaoItemResult);
    return BaiCaoItemResult;
}(cc.Component));
exports.default = BaiCaoItemResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5JdGVtUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUMxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQXVDQztRQXBDRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQWEsSUFBSSxDQUFDOztRQXlCNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUF4Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixnQ0FBSyxHQUFMO0lBRUEsQ0FBQztJQUVELG1DQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUNuRixDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dEQUNTO0lBYlgsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F1Q3BDO0lBQUQsdUJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2QzZDLEVBQUUsQ0FBQyxTQUFTLEdBdUN6RDtrQkF2Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhaUNhb0l0ZW1SZXN1bHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsVXNlck5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxCaWVuOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsS2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxHYTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbFRvdGFsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBpbml0SXRlbShpbmZvKSB7XG4gICAgICAgIHRoaXMubGFiZWxVc2VyTmFtZS5zdHJpbmcgPSBpbmZvLnVzZXJOYW1lO1xuICAgICAgICB0aGlzLmxhYmVsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvLmJldCk7XG4gICAgICAgIHRoaXMubGFiZWxCaWVuLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvLmJpZW4pO1xuICAgICAgICB0aGlzLmxhYmVsS2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGluZm8ua2UpO1xuICAgICAgICB0aGlzLmxhYmVsR2Euc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGluZm8uZ2EpO1xuICAgICAgICB0aGlzLmxhYmVsVG90YWwuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGluZm8udG90YWwpO1xuXG4gICAgICAgIHRoaXMubGFiZWxCZXQubm9kZS5jb2xvciA9IGluZm8uYmV0ID4gMCA/IGNjLkNvbG9yLllFTExPVyA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmxhYmVsQmllbi5ub2RlLmNvbG9yID0gaW5mby5iaWVuID4gMCA/IGNjLkNvbG9yLllFTExPVyA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmxhYmVsS2Uubm9kZS5jb2xvciA9IGluZm8ua2UgPiAwID8gY2MuQ29sb3IuWUVMTE9XIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMubGFiZWxHYS5ub2RlLmNvbG9yID0gaW5mby5nYSA+IDAgPyBjYy5Db2xvci5ZRUxMT1cgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5sYWJlbFRvdGFsLm5vZGUuY29sb3IgPSBpbmZvLnRvdGFsID4gMCA/IGNjLkNvbG9yLllFTExPVyA6IGNjLkNvbG9yLldISVRFO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=