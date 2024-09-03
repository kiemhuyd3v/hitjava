"use strict";
cc._RF.push(module, '6ffb3akOHVAkoulEtF9Q8f7', 'TabPopupBank');
// Lobby/LobbyScript/Payment/TabPopupBank.ts

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
exports.TabPopupBank = void 0;
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var Lobby_Cmd_1 = require("../Lobby.Cmd");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var MiniGameNetworkClient_1 = require("../Script/networks/MiniGameNetworkClient");
var BaseTabShop_1 = require("./BaseTabShop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabPopupBank = /** @class */ (function (_super) {
    __extends(TabPopupBank, _super);
    function TabPopupBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBankNumber = null;
        _this.lblBankAccountName = null;
        _this.lblBankAddress = null;
        _this.lblTransNote = null;
        _this.dropdownBank = null;
        _this.edbAmount = null;
        _this._listBank = [];
        return _this;
    }
    TabPopupBank.prototype.start = function () {
        var _this = this;
        this.lblTransNote.string = App_1.default.instance.getTextLang('txt_bank_transfer_note_9') + Configs_1.default.Login.Nickname;
        App_1.default.instance.showLoading(true);
        this.dropdownBank = this.dropdownBank.getComponent("DropDown");
        Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err == null) {
                if (res.list_bank === undefined || res.list_bank.length == 0) {
                    return;
                }
                var listBank_1 = res.list_bank;
                _this._listBank = listBank_1;
                var bankName = [{ optionString: App_1.default.instance.getTextLang("txt_select_bank") }];
                for (var i = 0; i < listBank_1.length; i++) {
                    bankName.push({ optionString: listBank_1[i].bankName });
                }
                _this.dropdownBank.clearOptionDatas();
                _this.dropdownBank.addOptionDatas(bankName);
                _this.dropdownBank.selectedIndex = 0;
                _this.dropdownBank.setCallBack(function (idx) {
                    if (idx > 0) {
                        _this.lblBankAddress.string = listBank_1[idx - 1].bankAddress;
                        _this.lblBankAccountName.string = listBank_1[idx - 1].bankAccountName;
                        _this.lblBankNumber.string = listBank_1[idx - 1].bankNumber;
                    }
                    else {
                        _this.lblBankAddress.string = "";
                        _this.lblBankAccountName.string = "";
                        _this.lblBankNumber.string = "";
                    }
                });
            }
        });
    };
    TabPopupBank.prototype.show = function (data) {
        var _this = this;
        //Utils.Log("showTabBank:" + JSON.stringify(data));
        var listBank = data.providerConfig.banks;
        this._listBank = listBank;
        var bankName = [{ optionString: App_1.default.instance.getTextLang("txt_select_bank") }];
        for (var i = 0; i < listBank.length; i++) {
            bankName.push({ optionString: listBank[i].name });
        }
        this.dropdownBank.clearOptionDatas();
        this.dropdownBank.addOptionDatas(bankName);
        this.dropdownBank.selectedIndex = 0;
        this.dropdownBank.setCallBack(function (idx) {
            if (idx > 0) {
                _this.lblBankAddress.string = listBank[idx - 1].bankAddress;
                _this.lblBankAccountName.string = listBank[idx - 1].bankAccountName;
                _this.lblBankNumber.string = listBank[idx - 1].bankNumber;
            }
            else {
                _this.lblBankAddress.string = "";
                _this.lblBankAccountName.string = "";
                _this.lblBankNumber.string = "";
            }
        });
    };
    TabPopupBank.prototype.submit = function () {
        var ddBank = this.dropdownBank.selectedIndex;
        if (ddBank == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_select_bank1"));
            return;
        }
        var bankSelected = this._listBank[ddBank - 1].bankNumber;
        var amount = Utils_1.default.formatEditBox(this.edbAmount.string);
        if (amount < 10000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_cash_in_min') + "10.000");
            return;
        }
        if (amount > 200000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_cash_in_max') + "200.000");
            return;
        }
        var self = this;
        App_1.default.instance.showLoading(true, -1);
        var request = {
            "c": 2003,
            "fn": bankSelected,
            "am": amount,
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
            "pn": "manualbank"
        };
        //Utils.Log("request sieutoc:" + JSON.stringify(request) + " : tabWell:" + self.tabWell);
        Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
            App_1.default.instance.showLoading(false);
            //Utils.Log(" res:" + JSON.stringify(res));
            if (res.success == true) {
                //Utils.Log("princePay:" + JSON.stringify(res));
            }
            else {
                App_1.default.instance.ShowAlertDialog(res.message);
            }
        });
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqDepositBank(bankSelected, amount));
    };
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblBankAccountName", void 0);
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblBankAddress", void 0);
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblTransNote", void 0);
    __decorate([
        property(cc.Node)
    ], TabPopupBank.prototype, "dropdownBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabPopupBank.prototype, "edbAmount", void 0);
    TabPopupBank = __decorate([
        ccclass
    ], TabPopupBank);
    return TabPopupBank;
}(BaseTabShop_1.default));
exports.TabPopupBank = TabPopupBank;

cc._RF.pop();