"use strict";
cc._RF.push(module, '41bcbh5Lq9IL5mTG5GKYwqy', 'TabTopupGameBank');
// Lobby/LobbyScript/Payment/TabTopupGameBank.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupGameBank = /** @class */ (function (_super) {
    __extends(TabTopupGameBank, _super);
    function TabTopupGameBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeInfoTransfer = null;
        _this.edbAccountName = null;
        _this.edbBankNumber = null;
        _this.edbMoneyAmount = null;
        _this.btnConfirm = null;
        _this.bankCode = "";
        _this.transMsg = "";
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TabTopupGameBank.prototype.start = function () {
    };
    TabTopupGameBank.prototype.onClickConfirm = function () {
        var accountName = this.edbAccountName.string.trim();
        var amount = this.edbMoneyAmount.string.trim();
        var bankNumber = this.edbBankNumber.string.trim();
        if (accountName == "" || amount == "" || bankNumber == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        this.transMsg = this.generateTransMsg();
        Http_1.default.get(Configs_1.default.App.API, {
            "c": 2003,
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
            "pt": 1,
            "ds": this.transMsg,
            "bc": this.bankCode,
            "pn": "manual",
            "bn": parseInt(bankNumber)
        }, function (err, res) {
            App_1.default.instance.showLoading(false);
            //  cc.log(res);
            if (res['success']) {
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], TabTopupGameBank.prototype, "nodeInfoTransfer", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupGameBank.prototype, "edbAccountName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupGameBank.prototype, "edbBankNumber", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupGameBank.prototype, "edbMoneyAmount", void 0);
    __decorate([
        property(cc.Button)
    ], TabTopupGameBank.prototype, "btnConfirm", void 0);
    TabTopupGameBank = __decorate([
        ccclass
    ], TabTopupGameBank);
    return TabTopupGameBank;
}(cc.Component));
exports.default = TabTopupGameBank;

cc._RF.pop();