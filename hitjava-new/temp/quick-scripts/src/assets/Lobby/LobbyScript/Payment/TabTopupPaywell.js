"use strict";
cc._RF.push(module, '7f4a6SZ2EtHYIc3/jSG4VbZ', 'TabTopupPaywell');
// Lobby/LobbyScript/Payment/TabTopupPaywell.ts

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
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var TabTopupNapThe_1 = require("./TabTopupNapThe");
var TabTopupSieuToc_1 = require("./TabTopupSieuToc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupPaywell = /** @class */ (function (_super) {
    __extends(TabTopupPaywell, _super);
    function TabTopupPaywell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabChuyenKhoan = null;
        _this.tabSieuToc = null;
        _this.tabNapThe = null;
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        _this.dataProvider = null;
        _this.data = null;
        return _this;
    }
    TabTopupPaywell.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        //Utils.Log("show TabTopupPaywell:" + JSON.stringify(data));
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
    };
    TabTopupPaywell.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tabChuyenKhoan.editMoney.tabIndex = -1;
        this.tabChuyenKhoan.editName.tabIndex = -1;
        this.tabSieuToc.editMoney.tabIndex = -1;
        this.tabSieuToc.editName.tabIndex = -1;
    };
    TabTopupPaywell.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleSieutToc.node.active = false;
        var isFind = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                if (this.data.payType[i].name == "quickPay") {
                    this.toggleSieutToc.node.active = true;
                }
                else if (this.data.payType[i].name == "banking") {
                    this.toggleChuyenKhoan.node.active = true;
                }
                if (isFind == false) {
                    this.onBtnChoseTab(null, this.data.payType[i].name);
                    if (this.data.payType[i].name == "quickPay") {
                        this.toggleSieutToc.isChecked = true;
                    }
                    else if (this.data.payType[i].name == "banking") {
                        this.toggleChuyenKhoan.isChecked = true;
                    }
                    isFind = true;
                }
                if (this.data.payType[i].name == "banking") {
                    this.onBtnChoseTab(null, this.data.payType[i].name);
                    this.toggleSieutToc.isChecked = false;
                    this.toggleChuyenKhoan.isChecked = true;
                    isFind = true;
                }
            }
        }
    };
    TabTopupPaywell.prototype.showTab = function (payTypeKey) {
        if (payTypeKey == "quickPay") {
            this.tabSieuToc.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.hide();
            this.tabChuyenKhoan.node.getChildByName("");
            this.tabChuyenKhoan.editMoney.tabIndex = -1;
            this.tabChuyenKhoan.editName.tabIndex = -1;
            if (this.tabSieuToc != null) {
                this.tabSieuToc.editMoney.tabIndex = 0;
                this.tabSieuToc.editName.tabIndex = -0;
            }
        }
        else {
            this.tabChuyenKhoan.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.editMoney.tabIndex = 0;
            this.tabChuyenKhoan.editName.tabIndex = 0;
            if (this.tabSieuToc != null) {
                this.tabSieuToc.hide();
                this.tabSieuToc.editMoney.tabIndex = -1;
                this.tabSieuToc.editName.tabIndex = -1;
            }
        }
    };
    TabTopupPaywell.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    __decorate([
        property(TabTopupChuyenKhoan_1.default)
    ], TabTopupPaywell.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupSieuToc_1.default)
    ], TabTopupPaywell.prototype, "tabSieuToc", void 0);
    __decorate([
        property(TabTopupNapThe_1.default)
    ], TabTopupPaywell.prototype, "tabNapThe", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleSieutToc", void 0);
    TabTopupPaywell = __decorate([
        ccclass
    ], TabTopupPaywell);
    return TabTopupPaywell;
}(BaseTabShop_1.default));
exports.default = TabTopupPaywell;

cc._RF.pop();