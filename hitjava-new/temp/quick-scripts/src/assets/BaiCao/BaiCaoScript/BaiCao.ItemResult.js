"use strict";
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