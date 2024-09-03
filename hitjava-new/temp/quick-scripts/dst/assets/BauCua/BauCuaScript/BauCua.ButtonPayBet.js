
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BauCua/BauCuaScript/BauCua.ButtonPayBet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee505UX8HtJs7o/zt+ekkAc', 'BauCua.ButtonPayBet');
// BauCua/BauCuaScript/BauCua.ButtonPayBet.ts

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
var ButtonPayBet = /** @class */ (function (_super) {
    __extends(ButtonPayBet, _super);
    function ButtonPayBet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.button = null;
        _this.lblTotal = null;
        _this.lblBeted = null;
        _this.overlay = null;
        _this.lblFactor = null;
        return _this;
    }
    __decorate([
        property(cc.Button)
    ], ButtonPayBet.prototype, "button", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonPayBet.prototype, "lblTotal", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonPayBet.prototype, "lblBeted", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonPayBet.prototype, "overlay", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonPayBet.prototype, "lblFactor", void 0);
    ButtonPayBet = __decorate([
        ccclass
    ], ButtonPayBet);
    return ButtonPayBet;
}(cc.Component));
exports.default = ButtonPayBet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmF1Q3VhXFxCYXVDdWFTY3JpcHRcXEJhdUN1YS5CdXR0b25QYXlCZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFXQztRQVRHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFhLElBQUksQ0FBQzs7SUFDL0IsQ0FBQztJQVRHO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUTtJQVZWLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FXaEM7SUFBRCxtQkFBQztDQVhELEFBV0MsQ0FYeUMsRUFBRSxDQUFDLFNBQVMsR0FXckQ7a0JBWG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uUGF5QmV0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0ZWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvdmVybGF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRmFjdG9yOiBjYy5MYWJlbCA9IG51bGw7XG59Il19