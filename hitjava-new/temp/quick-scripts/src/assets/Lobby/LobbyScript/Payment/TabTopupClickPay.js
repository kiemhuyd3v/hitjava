"use strict";
cc._RF.push(module, '2fed6f5EyhK4KPQiC3UiS1X', 'TabTopupClickPay');
// Lobby/LobbyScript/Payment/TabTopupClickPay.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var TabTopupSieuToc_1 = require("./TabTopupSieuToc");
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupClickPay = /** @class */ (function (_super) {
    __extends(TabTopupClickPay, _super);
    function TabTopupClickPay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabChuyenKhoan = null;
        _this.tabSieuToc = null;
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        _this.dataProvider = null;
        _this.data = null;
        return _this;
    }
    TabTopupClickPay.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
        this.onBtnChoseTab(null, "quickPay");
    };
    TabTopupClickPay.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tabChuyenKhoan.editMoney.tabIndex = -1;
        this.tabChuyenKhoan.editName.tabIndex = -1;
        this.tabSieuToc.editMoney.tabIndex = -1;
        this.tabSieuToc.editName.tabIndex = -1;
    };
    TabTopupClickPay.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleSieutToc.node.active = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                if (this.data.payType[i].name == "quickPay") {
                    this.toggleSieutToc.node.active = true;
                }
                else if (this.data.payType[i].name == "banking") {
                    this.toggleChuyenKhoan.node.active = true;
                }
            }
        }
    };
    TabTopupClickPay.prototype.showTab = function (payTypeKey) {
        if (payTypeKey == "quickPay") {
            this.tabSieuToc.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.hide();
            this.tabChuyenKhoan.editMoney.tabIndex = -1;
            this.tabChuyenKhoan.editName.tabIndex = -1;
            this.tabSieuToc.editMoney.tabIndex = 0;
            this.tabSieuToc.editName.tabIndex = 0;
        }
        else {
            this.tabSieuToc.hide();
            this.tabChuyenKhoan.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.editMoney.tabIndex = 0;
            this.tabChuyenKhoan.editName.tabIndex = 0;
            this.tabSieuToc.editMoney.tabIndex = -1;
            this.tabSieuToc.editName.tabIndex = -1;
        }
    };
    TabTopupClickPay.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    __decorate([
        property(TabTopupChuyenKhoan_1.default)
    ], TabTopupClickPay.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupSieuToc_1.default)
    ], TabTopupClickPay.prototype, "tabSieuToc", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupClickPay.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupClickPay.prototype, "toggleSieutToc", void 0);
    TabTopupClickPay = __decorate([
        ccclass
    ], TabTopupClickPay);
    return TabTopupClickPay;
}(BaseTabShop_1.default));
exports.default = TabTopupClickPay;

cc._RF.pop();