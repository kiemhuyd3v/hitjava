"use strict";
cc._RF.push(module, '192856rCLRNBZzSYpyc1rOZ', 'TabTopupManualZalo');
// Lobby/LobbyScript/Payment/TabTopupManualZalo.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TapTopupManualZalo = /** @class */ (function (_super) {
    __extends(TapTopupManualZalo, _super);
    function TapTopupManualZalo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnChoseBank = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.editBankNumber = null;
        _this.btnXacNhan = null;
        _this.lbBank = null;
        _this.lbBankAccount = null;
        _this.lbBankNumber = null;
        _this.nodeInput = null;
        _this.nodeQR = null;
        _this.nodeArrow = null;
        _this.lbTransMsg = null;
        _this.providerName = null;
        _this.data = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TapTopupManualZalo.prototype.start = function () {
    };
    TapTopupManualZalo.prototype.show = function (data, providerName) {
        this.providerName = providerName;
        this.data = data;
        this.node.active = true;
        this.btnChoseBank.node.active = false;
        this.nodeQR.active = false;
        this.nodeInput.active = true;
        this.nodeArrow.active = false;
        this.editName.string = this.editMoney.string = this.editBankNumber.string = "";
        // this.btnXacNhan.clickEvents[0].target = this.node;
        // this.btnXacNhan.clickEvents[0].handler = "onClickConfirm";
        // this.btnXacNhan.clickEvents[0].component = "TabTopupManualZalo";
        this.editName.node.opacity = this.editMoney.node.opacity = this.btnXacNhan.node.opacity = 255;
        this.editName.enabled = true;
        this.editMoney.enabled = true;
        //this.editBankNumber.active=false;
        this.editBankNumber.enabled = false;
        this.editBankNumber.placeholder = App_1.default.instance.getTextLang('txt_account_number1');
        this.btnXacNhan.interactable = true;
    };
    TapTopupManualZalo.prototype.hide = function () {
        this.node.active = false;
    };
    TapTopupManualZalo.prototype.onClickConfirm = function () {
        var _this = this;
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.editMoney.string);
            var bankNumber = this.editBankNumber.string.trim();
            if (this.editMoney.string == "" || this.editName.string.trim() == "") {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                return;
            }
            if (money < 10000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 10.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
                return;
            }
            var self = this;
            App_1.default.instance.showLoading(true, -1);
            var request = {
                "c": 2003,
                "fn": encodeURIComponent(this.editName.string.trim()),
                "am": money,
                "pt": 5,
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "pn": this.providerName,
                "bc": "",
                "ds": this.generateTransMsg(),
                "bn": bankNumber
            };
            Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
                var listBank = res.list_bank_auto;
                _this._listBank = listBank;
                _this.lbBank.string = listBank[0].bankName;
                _this.lbBankNumber.string = listBank[0].bankNumber;
                _this.lbBankAccount.string = listBank[0].bankAccountName;
            });
            this.lbTransMsg.string = request['ds'];
            Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                App_1.default.instance.showLoading(false);
                //  cc.log(res);
                if (res.success == true) {
                    _this.nodeInput.active = false;
                    _this.nodeQR.active = true;
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res.message);
                }
            });
        }
    };
    TapTopupManualZalo.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "-E79");
    };
    __decorate([
        property(cc.Sprite)
    ], TapTopupManualZalo.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualZalo.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualZalo.prototype, "editMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualZalo.prototype, "editBankNumber", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualZalo.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbBank", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbBankAccount", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualZalo.prototype, "nodeInput", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualZalo.prototype, "nodeQR", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualZalo.prototype, "nodeArrow", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbTransMsg", void 0);
    TapTopupManualZalo = __decorate([
        ccclass
    ], TapTopupManualZalo);
    return TapTopupManualZalo;
}(cc.Component));
exports.default = TapTopupManualZalo;

cc._RF.pop();