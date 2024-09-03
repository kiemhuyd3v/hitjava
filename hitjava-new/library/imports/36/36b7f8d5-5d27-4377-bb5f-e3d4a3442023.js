"use strict";
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