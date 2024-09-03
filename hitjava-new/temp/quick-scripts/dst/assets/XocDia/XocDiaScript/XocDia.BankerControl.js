
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.BankerControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36b7fjVXSdDd7tf49SjRCAj', 'XocDia.BankerControl');
// XocDia/XocDiaScript/XocDia.BankerControl.ts

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
var XocDia_Cmd_1 = require("./XocDia.Cmd");
var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BankerControl = /** @class */ (function (_super) {
    __extends(BankerControl, _super);
    function BankerControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblTitle = null;
        _this.slider = null;
        _this.lblCoin = null;
        _this.panelSell = null;
        _this.coinOdd = 0;
        _this.coinEven = 0;
        _this.maxCoin = 0;
        _this.minCoin = 1;
        _this.coin = 0;
        _this.sellingEven = false;
        return _this;
    }
    BankerControl.prototype.start = function () {
        var _this = this;
        this.slider.node.on("slide", function () {
            _this.coin = _this.minCoin + Math.round((_this.maxCoin - _this.minCoin) * _this.slider.progress);
            _this.lblCoin.string = Utils_1.default.formatNumber(_this.coin);
        });
    };
    BankerControl.prototype.show = function (coinOdd, coinEven) {
        this.coinOdd = coinOdd;
        this.coinEven = coinEven;
        this.panelSell.active = false;
        this.node.active = true;
    };
    BankerControl.prototype.actCanTat = function () {
        this.node.active = false;
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendBankerSellGate(1, this.coin));
    };
    BankerControl.prototype.actSellOdd = function () {
        this.lblTitle.string = "BÁN LẺ";
        this.maxCoin = this.coinOdd;
        this.coin = this.maxCoin;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        this.slider.progress = 1;
        this.panelSell.active = true;
        this.sellingEven = false;
    };
    BankerControl.prototype.actSellEven = function () {
        this.lblTitle.string = "BÁN CHẴN";
        this.maxCoin = this.coinEven;
        this.coin = this.maxCoin;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        this.slider.progress = 1;
        this.panelSell.active = true;
        this.sellingEven = true;
    };
    BankerControl.prototype.actSell = function () {
        this.node.active = false;
        XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendBankerSellGate(this.sellingEven ? 2 : 3, this.coin));
    };
    __decorate([
        property(cc.Label)
    ], BankerControl.prototype, "lblTitle", void 0);
    __decorate([
        property(cc.Slider)
    ], BankerControl.prototype, "slider", void 0);
    __decorate([
        property(cc.Label)
    ], BankerControl.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Node)
    ], BankerControl.prototype, "panelSell", void 0);
    BankerControl = __decorate([
        ccclass
    ], BankerControl);
    return BankerControl;
}(cc.Component));
exports.default = BankerControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5CYW5rZXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFFQUFnRTtBQUNoRSwyQ0FBK0I7QUFDL0IsMkVBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBOERDO1FBM0RHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFFYixhQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxpQkFBVyxHQUFHLEtBQUssQ0FBQzs7SUE2Q2hDLENBQUM7SUEzQ0csNkJBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUN6QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUYsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNEJBQUksR0FBSixVQUFLLE9BQWUsRUFBRSxRQUFnQjtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixvQ0FBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRU0sa0NBQVUsR0FBakI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFTSxtQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVNLCtCQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsb0NBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBMUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2tEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1E7SUFUVCxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBOERqQztJQUFELG9CQUFDO0NBOURELEFBOERDLENBOUQwQyxFQUFFLENBQUMsU0FBUyxHQThEdEQ7a0JBOURvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vWG9jRGlhLkNtZFwiO1xuaW1wb3J0IFhvY0RpYU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vWG9jRGlhLlhvY0RpYU5ldHdvcmtDbGllbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbmtlckNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNsaWRlcilcbiAgICBzbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwYW5lbFNlbGw6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjb2luT2RkID0gMDtcbiAgICBwcml2YXRlIGNvaW5FdmVuID0gMDtcblxuICAgIHByaXZhdGUgbWF4Q29pbiA9IDA7XG4gICAgcHJpdmF0ZSBtaW5Db2luID0gMTtcbiAgICBwcml2YXRlIGNvaW4gPSAwO1xuICAgIHByaXZhdGUgc2VsbGluZ0V2ZW4gPSBmYWxzZTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2luID0gdGhpcy5taW5Db2luICsgTWF0aC5yb3VuZCgodGhpcy5tYXhDb2luIC0gdGhpcy5taW5Db2luKSAqIHRoaXMuc2xpZGVyLnByb2dyZXNzKTtcbiAgICAgICAgICAgIHRoaXMubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5jb2luKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvdyhjb2luT2RkOiBudW1iZXIsIGNvaW5FdmVuOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5jb2luT2RkID0gY29pbk9kZDtcbiAgICAgICAgdGhpcy5jb2luRXZlbiA9IGNvaW5FdmVuO1xuICAgICAgICB0aGlzLnBhbmVsU2VsbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdENhblRhdCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRCYW5rZXJTZWxsR2F0ZSgxLCB0aGlzLmNvaW4pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U2VsbE9kZCgpIHtcbiAgICAgICAgdGhpcy5sYmxUaXRsZS5zdHJpbmcgPSBcIkLDgU4gTOG6ulwiO1xuICAgICAgICB0aGlzLm1heENvaW4gPSB0aGlzLmNvaW5PZGQ7XG4gICAgICAgIHRoaXMuY29pbiA9IHRoaXMubWF4Q29pbjtcbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmNvaW4pO1xuICAgICAgICB0aGlzLnNsaWRlci5wcm9ncmVzcyA9IDE7XG4gICAgICAgIHRoaXMucGFuZWxTZWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsbGluZ0V2ZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U2VsbEV2ZW4oKSB7XG4gICAgICAgIHRoaXMubGJsVGl0bGUuc3RyaW5nID0gXCJCw4FOIENI4bq0TlwiO1xuICAgICAgICB0aGlzLm1heENvaW4gPSB0aGlzLmNvaW5FdmVuO1xuICAgICAgICB0aGlzLmNvaW4gPSB0aGlzLm1heENvaW47XG4gICAgICAgIHRoaXMubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5jb2luKTtcbiAgICAgICAgdGhpcy5zbGlkZXIucHJvZ3Jlc3MgPSAxO1xuICAgICAgICB0aGlzLnBhbmVsU2VsbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGxpbmdFdmVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U2VsbCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRCYW5rZXJTZWxsR2F0ZSh0aGlzLnNlbGxpbmdFdmVuID8gMiA6IDMsIHRoaXMuY29pbikpO1xuICAgIH1cbn1cbiJdfQ==