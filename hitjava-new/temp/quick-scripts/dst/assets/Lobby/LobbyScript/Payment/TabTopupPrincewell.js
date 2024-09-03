
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupPrincewell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bedf58HY2FJW5KNmpx+i0nc', 'TabTopupPrincewell');
// Lobby/LobbyScript/Payment/TabTopupPrincewell.ts

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
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var TabTopupMomo_1 = require("./TabTopupMomo");
var TabTopupSieuToc_1 = require("./TabTopupSieuToc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupPaywell = /** @class */ (function (_super) {
    __extends(TabTopupPaywell, _super);
    function TabTopupPaywell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabChuyenKhoan = null;
        _this.tabSieuToc = null;
        _this.tabMomo = null;
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        _this.toggleMomo = null;
        _this.dataProvider = null;
        _this.data = null;
        _this.payTypesAlive = null;
        return _this;
    }
    TabTopupPaywell.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
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
        this.tabMomo.editMoney.tabIndex = -1;
        this.tabMomo.editName.tabIndex = -1;
    };
    TabTopupPaywell.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleSieutToc.node.active = false;
        this.toggleMomo.node.active = false;
        var isFind = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                if (this.data.payType[i].name == "quickPay") {
                    this.toggleSieutToc.node.active = true;
                }
                else if (this.data.payType[i].name == "banking") {
                    this.toggleChuyenKhoan.node.active = true;
                }
                else {
                    this.toggleMomo.node.active = true;
                }
                if (isFind == false) {
                    this.onBtnChoseTab(null, this.data.payType[i].name);
                    if (this.data.payType[i].name == "quickPay") {
                        this.toggleSieutToc.isChecked = true;
                    }
                    else if (this.data.payType[i].name == "banking") {
                        this.toggleChuyenKhoan.isChecked = true;
                    }
                    else {
                        this.toggleMomo.isChecked = true;
                    }
                    isFind = true;
                }
                if (this.data.payType[i].name == "banking") {
                    this.onBtnChoseTab(null, this.data.payType[i].name);
                    this.toggleSieutToc.isChecked = false;
                    this.toggleMomo.isChecked = false;
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
            this.tabMomo.hide();
            this.tabChuyenKhoan.editMoney.tabIndex = -1;
            this.tabChuyenKhoan.editName.tabIndex = -1;
            this.tabSieuToc.editMoney.tabIndex = 0;
            this.tabSieuToc.editName.tabIndex = 0;
            this.tabMomo.editMoney.tabIndex = -1;
            this.tabMomo.editName.tabIndex = -1;
        }
        else if (payTypeKey == "banking") {
            this.tabSieuToc.hide();
            this.tabMomo.hide();
            this.tabChuyenKhoan.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.editMoney.tabIndex = 0;
            this.tabChuyenKhoan.editName.tabIndex = 0;
            this.tabSieuToc.editMoney.tabIndex = -1;
            this.tabSieuToc.editName.tabIndex = -1;
            this.tabMomo.editMoney.tabIndex = -1;
            this.tabMomo.editName.tabIndex = -1;
        }
        else {
            this.tabChuyenKhoan.editMoney.tabIndex = -1;
            this.tabChuyenKhoan.editName.tabIndex = -1;
            this.tabSieuToc.editMoney.tabIndex = -1;
            this.tabSieuToc.editName.tabIndex = -1;
            this.tabMomo.editMoney.tabIndex = 0;
            this.tabMomo.editName.tabIndex = 0;
            this.tabSieuToc.hide();
            this.tabChuyenKhoan.hide();
            this.tabMomo.show(this.data, this.dataProvider.providerName);
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
        property(TabTopupMomo_1.default)
    ], TabTopupPaywell.prototype, "tabMomo", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleSieutToc", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleMomo", void 0);
    TabTopupPaywell = __decorate([
        ccclass
    ], TabTopupPaywell);
    return TabTopupPaywell;
}(BaseTabShop_1.default));
exports.default = TabTopupPaywell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cFByaW5jZXdlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCwrQ0FBMEM7QUFDMUMscURBQWdEO0FBRTFDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFXO0lBQXhEO1FBQUEscUVBMkhDO1FBeEhHLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQUd4QyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQix1QkFBaUIsR0FBVyxJQUFJLENBQUM7UUFFakMsb0JBQWMsR0FBVyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFFbEIsa0JBQVksR0FBRSxJQUFJLENBQUM7UUFDbkIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLG1CQUFhLEdBQUcsSUFBSSxDQUFDOztJQXVHakMsQ0FBQztJQXRHRyw4QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNMLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBR3hCLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFFYixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDdkMsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO2dCQUNoQyxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUM7b0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQzFDO3FCQUNJLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBQztvQkFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUM3QztxQkFDRztvQkFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUN0QztnQkFDRCxJQUFHLE1BQU0sSUFBSSxLQUFLLEVBQUU7b0JBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUM7d0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztxQkFDeEM7eUJBQ0ksSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFDO3dCQUMzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztxQkFDM0M7eUJBQ0c7d0JBQ0EsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO3FCQUNwQztvQkFDRCxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUM7b0JBQ3RDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBSSxLQUFLLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQ3hDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ2pCO2FBRUo7U0FDSjtJQUNMLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsVUFBVTtRQUNkLElBQUcsVUFBVSxJQUFJLFVBQVUsRUFBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXBCLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkM7YUFDSSxJQUFHLFVBQVUsSUFBSSxTQUFTLEVBQUM7WUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO2FBQ0c7WUFDQSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0Q7SUFDTCxDQUFDO0lBRUQsdUNBQWEsR0FBYixVQUFjLE1BQU0sRUFBQyxJQUFJO1FBQ3JCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUF2SEQ7UUFEQyxRQUFRLENBQUMsNkJBQW1CLENBQUM7MkRBQ1U7SUFHeEM7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQzt1REFDTTtJQUdoQztRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO29EQUNHO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNNO0lBaEJULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EySG5DO0lBQUQsc0JBQUM7Q0EzSEQsQUEySEMsQ0EzSDRDLHFCQUFXLEdBMkh2RDtrQkEzSG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJhc2VUYWJTaG9wIGZyb20gXCIuL0Jhc2VUYWJTaG9wXCI7XG5pbXBvcnQgVGFiVG9wdXBDaHV5ZW5LaG9hbiBmcm9tIFwiLi9UYWJUb3B1cENodXllbktob2FuXCI7XG5pbXBvcnQgVGFiVG9wdXBNb21vIGZyb20gXCIuL1RhYlRvcHVwTW9tb1wiO1xuaW1wb3J0IFRhYlRvcHVwU2lldVRvYyBmcm9tIFwiLi9UYWJUb3B1cFNpZXVUb2NcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cFBheXdlbGwgZXh0ZW5kcyBCYXNlVGFiU2hvcHtcblxuICAgIEBwcm9wZXJ0eShUYWJUb3B1cENodXllbktob2FuKVxuICAgIHRhYkNodXllbktob2FuOlRhYlRvcHVwQ2h1eWVuS2hvYW49bnVsbDtcblxuICAgIEBwcm9wZXJ0eShUYWJUb3B1cFNpZXVUb2MpXG4gICAgdGFiU2lldVRvYzpUYWJUb3B1cFNpZXVUb2M9bnVsbDtcblxuICAgIEBwcm9wZXJ0eShUYWJUb3B1cE1vbW8pXG4gICAgdGFiTW9tbzpUYWJUb3B1cE1vbW89bnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQ2h1eWVuS2hvYW46Y2MuVG9nZ2xlPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVTaWV1dFRvYzpjYy5Ub2dnbGU9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZU1vbW86Y2MuVG9nZ2xlPW51bGw7XG5cbiAgICBwcml2YXRlIGRhdGFQcm92aWRlciA9bnVsbDtcbiAgICBwcml2YXRlIGRhdGEgPSBudWxsO1xuICAgIHByaXZhdGUgcGF5VHlwZXNBbGl2ZSA9IG51bGw7XG4gICAgc2hvdyhkYXRhKXtcbiAgICAgICAgc3VwZXIuc2hvdyhkYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGE9IGRhdGEucHJvdmlkZXJDb25maWc7XG4gICAgICAgIHRoaXMuc2hvd1BheVR5cGVzKCk7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgaGlkZSgpe1xuICAgICAgICBzdXBlci5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRhYk1vbW8uZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGFiTW9tby5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHNob3dQYXlUeXBlcygpe1xuICAgICAgICB0aGlzLnRvZ2dsZUNodXllbktob2FuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9nZ2xlU2lldXRUb2Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b2dnbGVNb21vLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0ZpbmQgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmRhdGEucGF5VHlwZS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5wYXlUeXBlW2ldLnN0YXR1cyA9PSAxKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwicXVpY2tQYXlcIil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2lldXRUb2Mubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUgPT0gXCJiYW5raW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNodXllbktob2FuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb21vLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoaXNGaW5kID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5DaG9zZVRhYihudWxsLHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwicXVpY2tQYXlcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNpZXV0VG9jLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwiYmFua2luZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2h1eWVuS2hvYW4uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb21vLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNGaW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSA9PSBcImJhbmtpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5DaG9zZVRhYihudWxsLHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNpZXV0VG9jLmlzQ2hlY2tlZCAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb21vLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNodXllbktob2FuLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlzRmluZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VGFiKHBheVR5cGVLZXkpe1xuICAgICAgICBpZihwYXlUeXBlS2V5ID09IFwicXVpY2tQYXlcIil7XG4gICAgICAgICAgICB0aGlzLnRhYlNpZXVUb2Muc2hvdyh0aGlzLmRhdGEsdGhpcy5kYXRhUHJvdmlkZXIucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy50YWJNb21vLmhpZGUoKTtcblxuICAgICAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TW9uZXkudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmVkaXROYW1lLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMudGFiTW9tby5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiTW9tby5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocGF5VHlwZUtleSA9PSBcImJhbmtpbmdcIil7XG4gICAgICAgICAgICB0aGlzLnRhYlNpZXVUb2MuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy50YWJNb21vLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uc2hvdyh0aGlzLmRhdGEsdGhpcy5kYXRhUHJvdmlkZXIucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE1vbmV5LnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE5hbWUudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmVkaXRNb25leS50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmVkaXROYW1lLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnRhYk1vbW8uZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnRhYk1vbW8uZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgdGhpcy50YWJNb21vLmVkaXRNb25leS50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhYk1vbW8uZWRpdE5hbWUudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy50YWJNb21vLnNob3codGhpcy5kYXRhLHRoaXMuZGF0YVByb3ZpZGVyLnByb3ZpZGVyTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ0bkNob3NlVGFiKHRhcmdldCxkYXRhKXtcbiAgICAgICAgdmFyIHBheVR5cGVLZXkgPSBkYXRhO1xuICAgICAgICB0aGlzLnNob3dUYWIocGF5VHlwZUtleSk7XG4gICAgfVxufVxuIl19