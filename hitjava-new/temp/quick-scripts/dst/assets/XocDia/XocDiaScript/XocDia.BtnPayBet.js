
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.BtnPayBet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3459e6zgREZIOLiazh9KoS', 'XocDia.BtnPayBet');
// XocDia/XocDiaScript/XocDia.BtnPayBet.ts

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
var BtnPayBet = /** @class */ (function (_super) {
    __extends(BtnPayBet, _super);
    function BtnPayBet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblTotalBet = null;
        _this.active = null;
        return _this;
    }
    BtnPayBet.prototype.reset = function () {
        this.lblTotalBet.string = "";
        this.active.active = false;
    };
    BtnPayBet.prototype.setTotalBet = function (coin) {
        this.lblTotalBet.string = coin > 0 ? Utils_1.default.formatMoney(coin) : "";
    };
    __decorate([
        property(cc.Label)
    ], BtnPayBet.prototype, "lblTotalBet", void 0);
    __decorate([
        property(cc.Node)
    ], BtnPayBet.prototype, "active", void 0);
    BtnPayBet = __decorate([
        ccclass
    ], BtnPayBet);
    return BtnPayBet;
}(cc.Component));
exports.default = BtnPayBet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5CdG5QYXlCZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBZUM7UUFaRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQVUzQixDQUFDO0lBUlUseUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVNLCtCQUFXLEdBQWxCLFVBQW1CLElBQVk7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0s7SUFMTixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBZTdCO0lBQUQsZ0JBQUM7Q0FmRCxBQWVDLENBZnNDLEVBQUUsQ0FBQyxTQUFTLEdBZWxEO2tCQWZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ0blBheUJldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3RpdmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmxibFRvdGFsQmV0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMuYWN0aXZlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRUb3RhbEJldChjb2luOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sYmxUb3RhbEJldC5zdHJpbmcgPSBjb2luID4gMCA/IFV0aWxzLmZvcm1hdE1vbmV5KGNvaW4pIDogXCJcIjtcbiAgICB9XG59XG4iXX0=