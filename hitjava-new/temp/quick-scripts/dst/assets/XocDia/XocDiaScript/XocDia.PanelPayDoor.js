
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.PanelPayDoor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '089fbucxjFKWpNuCc5T8uJY', 'XocDia.PanelPayDoor');
// XocDia/XocDiaScript/XocDia.PanelPayDoor.ts

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
var PanelPayDoor = /** @class */ (function (_super) {
    __extends(PanelPayDoor, _super);
    function PanelPayDoor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title1 = null;
        _this.title2 = null;
        _this.itemTemplate = null;
        _this.slider = null;
        _this.sprProgress = null;
        _this.lblCoin = null;
        _this.coin = 1;
        _this.minCoin = 1;
        _this.maxCoin = 0;
        return _this;
    }
    PanelPayDoor.prototype.start = function () {
        var _this = this;
        this.slider.node.on("slide", function () {
            _this.updateValue();
        });
    };
    PanelPayDoor.prototype.show = function (action, maxCoin) {
        if (action == 2) {
            this.title1.string = this.title2.string = "MUA CHẴN";
        }
        else {
            this.title1.string = this.title2.string = "MUA LẺ";
        }
        this.coin = this.minCoin;
        this.maxCoin = maxCoin;
        this.node.active = true;
        this.itemTemplate.active = false;
        for (var i = 1; i < this.itemTemplate.parent.childrenCount; i++) {
            this.itemTemplate.parent.children[i].destroy();
        }
        this.slider.progress = 1;
        this.sprProgress.fillRange = 1;
        this.updateValue();
    };
    PanelPayDoor.prototype.addUser = function (nickname, coin, newMaxCoin) {
        if (newMaxCoin == 0) {
            this.node.active = false;
        }
        this.maxCoin = newMaxCoin;
        if (this.coin > this.maxCoin) {
            this.coin = this.maxCoin;
        }
        this.slider.progress = this.coin / (this.maxCoin - this.minCoin);
        this.sprProgress.fillRange = this.slider.progress;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        var item = cc.instantiate(this.itemTemplate);
        item.parent = this.itemTemplate.parent;
        item.getChildByName("lblNickname").getComponent(cc.Label).string = nickname;
        item.getChildByName("lblCoin").getComponent(cc.Label).string = Utils_1.default.formatMoney(coin);
        item.active = true;
    };
    PanelPayDoor.prototype.getCoin = function () {
        return this.coin;
    };
    PanelPayDoor.prototype.updateValue = function () {
        this.sprProgress.fillRange = this.slider.progress;
        this.coin = this.minCoin + Math.round((this.maxCoin - this.minCoin) * this.slider.progress);
        this.lblCoin.string = Utils_1.default.formatMoney(this.coin);
    };
    __decorate([
        property(cc.Label)
    ], PanelPayDoor.prototype, "title1", void 0);
    __decorate([
        property(cc.Label)
    ], PanelPayDoor.prototype, "title2", void 0);
    __decorate([
        property(cc.Node)
    ], PanelPayDoor.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Slider)
    ], PanelPayDoor.prototype, "slider", void 0);
    __decorate([
        property(cc.Sprite)
    ], PanelPayDoor.prototype, "sprProgress", void 0);
    __decorate([
        property(cc.Label)
    ], PanelPayDoor.prototype, "lblCoin", void 0);
    PanelPayDoor = __decorate([
        ccclass
    ], PanelPayDoor);
    return PanelPayDoor;
}(cc.Component));
exports.default = PanelPayDoor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5QYW5lbFBheURvb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBRTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBdUVDO1FBcEVHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWMsSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFbEIsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNSLGFBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixhQUFPLEdBQUcsQ0FBQyxDQUFDOztJQXNEeEIsQ0FBQztJQXBERyw0QkFBSyxHQUFMO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQ3pCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwyQkFBSSxHQUFYLFVBQVksTUFBYyxFQUFFLE9BQWU7UUFDdkMsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1NBQ3hEO2FBQU07WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsSUFB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O2dEQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ1U7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDTTtJQWJSLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F1RWhDO0lBQUQsbUJBQUM7Q0F2RUQsQUF1RUMsQ0F2RXlDLEVBQUUsQ0FBQyxTQUFTLEdBdUVyRDtrQkF2RW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsUGF5RG9vciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdGl0bGUxOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpdGxlMjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNsaWRlcilcbiAgICBzbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJQcm9ncmVzczogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHVibGljIGNvaW4gPSAxO1xuICAgIHByaXZhdGUgbWluQ29pbiA9IDE7XG4gICAgcHJpdmF0ZSBtYXhDb2luID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdyhhY3Rpb246IG51bWJlciwgbWF4Q29pbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChhY3Rpb24gPT0gMikge1xuICAgICAgICAgICAgdGhpcy50aXRsZTEuc3RyaW5nID0gdGhpcy50aXRsZTIuc3RyaW5nID0gXCJNVUEgQ0jhurROXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpdGxlMS5zdHJpbmcgPSB0aGlzLnRpdGxlMi5zdHJpbmcgPSBcIk1VQSBM4bq6XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2luID0gdGhpcy5taW5Db2luO1xuICAgICAgICB0aGlzLm1heENvaW4gPSBtYXhDb2luO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50LmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50LmNoaWxkcmVuW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNsaWRlci5wcm9ncmVzcyA9IDE7XG4gICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3MuZmlsbFJhbmdlID0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRVc2VyKG5pY2tuYW1lOiBzdHJpbmcsIGNvaW46IG51bWJlciwgbmV3TWF4Q29pbjogbnVtYmVyKSB7XG4gICAgICAgIGlmIChuZXdNYXhDb2luID09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1heENvaW4gPSBuZXdNYXhDb2luO1xuICAgICAgICBpZiAodGhpcy5jb2luID4gdGhpcy5tYXhDb2luKSB7XG4gICAgICAgICAgICB0aGlzLmNvaW4gPSB0aGlzLm1heENvaW47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZXIucHJvZ3Jlc3MgPSB0aGlzLmNvaW4gLyAodGhpcy5tYXhDb2luIC0gdGhpcy5taW5Db2luKTtcbiAgICAgICAgdGhpcy5zcHJQcm9ncmVzcy5maWxsUmFuZ2UgPSB0aGlzLnNsaWRlci5wcm9ncmVzcztcbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmNvaW4pO1xuXG4gICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibE5pY2tuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbmlja25hbWU7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TW9uZXkoY29pbik7XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q29pbigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2luO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgIHRoaXMuc3ByUHJvZ3Jlc3MuZmlsbFJhbmdlID0gdGhpcy5zbGlkZXIucHJvZ3Jlc3M7XG4gICAgICAgIHRoaXMuY29pbiA9IHRoaXMubWluQ29pbiArIE1hdGgucm91bmQoKHRoaXMubWF4Q29pbiAtIHRoaXMubWluQ29pbikgKiB0aGlzLnNsaWRlci5wcm9ncmVzcyk7XG4gICAgICAgIHRoaXMubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXRNb25leSh0aGlzLmNvaW4pO1xuICAgIH1cbn1cbiJdfQ==