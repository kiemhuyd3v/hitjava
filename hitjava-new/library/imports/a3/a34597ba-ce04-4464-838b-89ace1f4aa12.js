"use strict";
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