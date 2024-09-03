"use strict";
cc._RF.push(module, 'f078052/ltGi7kX7PieJrdH', 'LobbyShop');
// Lobby/LobbyScript/Payment/LobbyShop.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var Dialog_1 = require("../Script/common/Dialog");
var BaseTabShop_1 = require("./BaseTabShop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NAME_TABS = { "paywell": 0, "royalpay": 1, "princepay": 2, "bank": 8, "clickpay": 4, "payasec": 5, "chuyenkhoan": 6, "napthe": 7, "manualbank": 3, "gift": 9 };
var LobbyShop = /** @class */ (function (_super) {
    __extends(LobbyShop, _super);
    function LobbyShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = [];
        _this.btnTabs = [];
        _this.data = null;
        _this.indexTabCurrent = 0;
        return _this;
    }
    LobbyShop.prototype.show = function () {
        var _this = this;
        _super.prototype.show.call(this);
        App_1.default.instance.showLoading(true);
        if (Configs_1.default.Login.ListPayment == null) {
            Http_1.default.get(Configs_1.default.App.API, { "c": 2002, "nn": Configs_1.default.Login.Nickname, "at": Configs_1.default.Login.AccessToken, pt: 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null) {
                    return;
                }
                if (!res["success"]) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                    _this.dismiss();
                    return;
                }
                App_1.default.instance.showLoading(false);
                Configs_1.default.Login.ListPayment = _this.data = res.data;
                //  cc.log("Paymen:",res.data);
                _this.node.active = true;
                _this.showTabsAlive();
            });
        }
        else {
            App_1.default.instance.showLoading(false);
            this.node.active = true;
            this.showTabsAlive();
        }
    };
    LobbyShop.prototype.showTabsAlive = function () {
        for (var i = 0; i < this.btnTabs.length; i++) {
            if (this.btnTabs[i] != null) {
                this.btnTabs[i].active = false;
                this.btnTabs[i].getComponent(cc.Toggle).isChecked = false;
            }
        }
        //  cc.log("showTabsAlive:" + JSON.stringify(Configs.Login.ListPayment));
        var isFind = false;
        for (var i = 0; i < Configs_1.default.Login.ListPayment.length; i++) {
            if (Configs_1.default.Login.ListPayment[i].providerConfig.status == 1) {
                if (NAME_TABS[Configs_1.default.Login.ListPayment[i].providerName] != null) {
                    if (this.btnTabs[NAME_TABS[Configs_1.default.Login.ListPayment[i].providerName]]) {
                        this.btnTabs[NAME_TABS[Configs_1.default.Login.ListPayment[i].providerName]].active = true;
                        if (isFind == false) {
                            this.onBtnChoseTab(null, Configs_1.default.Login.ListPayment[i].providerName);
                            isFind = true;
                        }
                        else if (Configs_1.default.Login.ListPayment[i].providerName == "princepay") {
                            this.onBtnChoseTab(null, Configs_1.default.Login.ListPayment[i].providerName);
                            isFind = true;
                        }
                    }
                }
            }
        }
    };
    LobbyShop.prototype.onBtnChoseTab = function (target, data) {
        this.tabs[this.indexTabCurrent].hide();
        var nameTab = data;
        var dataTab = null;
        this.indexTabCurrent = NAME_TABS[nameTab];
        for (var i = 0; i < Configs_1.default.Login.ListPayment.length; i++) {
            if (Configs_1.default.Login.ListPayment[i].providerName == nameTab) {
                dataTab = Configs_1.default.Login.ListPayment[i];
            }
        }
        this.tabs[this.indexTabCurrent].show(dataTab);
        this.btnTabs[this.indexTabCurrent].getComponent(cc.Toggle).isChecked = true;
    };
    __decorate([
        property([BaseTabShop_1.default])
    ], LobbyShop.prototype, "tabs", void 0);
    __decorate([
        property([cc.Node])
    ], LobbyShop.prototype, "btnTabs", void 0);
    LobbyShop = __decorate([
        ccclass
    ], LobbyShop);
    return LobbyShop;
}(Dialog_1.default));
exports.default = LobbyShop;

cc._RF.pop();