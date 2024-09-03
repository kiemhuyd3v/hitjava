"use strict";
cc._RF.push(module, 'a7b5fPk1DhBUIdjn73/qfit', 'XocDia.BtnBet');
// XocDia/XocDiaScript/XocDia.BtnBet.ts

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
var BtnBet = /** @class */ (function (_super) {
    __extends(BtnBet, _super);
    function BtnBet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.active = null;
        _this.normal = null;
        _this.label = null;
        return _this;
    }
    __decorate([
        property(cc.Node)
    ], BtnBet.prototype, "active", void 0);
    __decorate([
        property(cc.Sprite)
    ], BtnBet.prototype, "normal", void 0);
    __decorate([
        property(cc.Label)
    ], BtnBet.prototype, "label", void 0);
    BtnBet = __decorate([
        ccclass
    ], BtnBet);
    return BtnBet;
}(cc.Component));
exports.default = BtnBet;

cc._RF.pop();