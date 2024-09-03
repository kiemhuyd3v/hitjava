"use strict";
cc._RF.push(module, '7eeafyxdrBDqZSR2Dj7H+cU', 'TabTopupGame');
// Lobby/LobbyScript/Payment/TabTopupGame.ts

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
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupManualBank_1 = require("./TabTopupManualBank");
var TabTopupManualMomo_1 = require("./TabTopupManualMomo");
var TabTopupManualZalo_1 = require("./TabTopupManualZalo");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupGame = /** @class */ (function (_super) {
    __extends(TabTopupGame, _super);
    function TabTopupGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleChuyenKhoan = null;
        _this.toggleZalo = null;
        _this.toggleMomo = null;
        _this.lbContentBanking = null;
        _this.tabChuyenKhoan = null;
        _this.tabManualMomo = null;
        _this.tabManualZalo = null;
        _this.dataProvider = null;
        _this.data = null;
        _this.payTypesAlive = null;
        return _this;
    }
    TabTopupGame.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
    };
    TabTopupGame.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tabChuyenKhoan.editName.tabIndex = -1;
        this.tabChuyenKhoan.editMoney.tabIndex = -1;
        this.tabChuyenKhoan.editBankNumber.tabIndex = -1;
    };
    TabTopupGame.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleZalo.node.active = false;
        this.toggleMomo.node.active = false;
        var isFind = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                switch (this.data.payType[i].name) {
                    case "momo_recharge":
                        this.toggleMomo.node.active = true;
                        if (!isFind) {
                            this.onBtnChoseTab(null, this.data.payType[i].name);
                            this.toggleMomo.isChecked = true;
                            isFind = true;
                        }
                        break;
                }
            }
        }
    };
    TabTopupGame.prototype.showTab = function (payTypeKey) {
        if (payTypeKey == "momo_recharge") {
            this.tabChuyenKhoan.hide();
            this.tabManualZalo.hide();
            this.tabManualMomo.show(this.data, this.dataProvider.providerName);
            this.tabManualMomo.editMoney.tabIndex = 0;
            this.tabManualMomo.editBankNumber.tabIndex = 0;
            this.tabManualMomo.editName.tabIndex = 0;
        }
    };
    TabTopupGame.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    TabTopupGame.prototype.onClickNap = function (even, data) {
    };
    __decorate([
        property(cc.Toggle)
    ], TabTopupGame.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupGame.prototype, "toggleZalo", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupGame.prototype, "toggleMomo", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupGame.prototype, "lbContentBanking", void 0);
    __decorate([
        property(TabTopupManualBank_1.default)
    ], TabTopupGame.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupManualMomo_1.default)
    ], TabTopupGame.prototype, "tabManualMomo", void 0);
    __decorate([
        property(TabTopupManualZalo_1.default)
    ], TabTopupGame.prototype, "tabManualZalo", void 0);
    TabTopupGame = __decorate([
        ccclass
    ], TabTopupGame);
    return TabTopupGame;
}(BaseTabShop_1.default));
exports.default = TabTopupGame;

cc._RF.pop();