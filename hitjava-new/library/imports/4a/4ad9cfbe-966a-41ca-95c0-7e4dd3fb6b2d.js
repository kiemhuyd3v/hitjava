"use strict";
cc._RF.push(module, '4ad9c++lmpBypXAfk3T+2st', 'Lobby.PopupCashout');
// Lobby/LobbyScript/Lobby.PopupCashout.ts

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
exports.TabMomo = exports.TabBank = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabBank = /** @class */ (function () {
    function TabBank() {
        this.boxRut = null;
        this.lblCoin = null;
        this.dropdownBank = null;
        this.edbAmount = null;
        this.edbBankNumber = null;
        this.edbBankAccountName = null;
        this._listBank = [];
        this.fee = 1;
        this.minCashout = 0;
        this.maxCashout = 0;
        this.isAllowCashout = false;
    }
    TabBank.prototype.start = function () {
        this.dropdownBank = this.dropdownBank.getComponent("DropDown");
        this.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
    };
    TabBank.prototype.show = function () {
        var _this = this;
        var self = this;
        var data = {};
        data["c"] = 2008;
        data["nn"] = Configs_1.default.Login.Nickname;
        data["pn"] = 1;
        data["l"] = 10;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            var list = JSON.parse(res.data).data;
            if (res == null || list.length == 0) {
                self.boxRut.active = false;
            }
            else {
                self.boxRut.active = true;
                _this._listBank = list;
                var datas = new Array();
                datas.push({ optionString: "Chọn ngân hàng" });
                for (var i = 0; i < list.length; i++) {
                    datas.push({ optionString: list[i].bankName });
                }
                _this.dropdownBank.clearOptionDatas();
                _this.dropdownBank.addOptionDatas(datas);
                _this.dropdownBank.selectedIndex = 0;
            }
        });
    };
    TabBank.prototype.onChoseBank = function () {
        var indexBank = this.dropdownBank.selectedIndex;
        if (indexBank != 0) {
            this.edbBankAccountName.string = this._listBank[indexBank - 1].customerName;
            this.edbBankNumber.string = this._listBank[indexBank - 1].bankNumber;
        }
    };
    TabBank.prototype.onAddBank = function () {
    };
    TabBank.prototype.submit = function () {
        // if(!this.isAllowCashout){
        //     App.instance.alertDialog.showMsg("Rút qua ngân hàng đang bảo trì, vui lòng thử lại sau!");
        //     return;
        // }
        var ddBank = this.dropdownBank.selectedIndex;
        if (ddBank == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_select_bank1'));
            return;
        }
        var bankSelected = this._listBank[ddBank - 1].bankName;
        var amount = Utils_1.default.formatEditBox(this.edbAmount.string);
        if (amount < 100000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_out_min") + Utils_1.default.formatNumber(100000));
            return;
        }
        if (amount > 300000000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_cash_out_max') + Utils_1.default.formatNumber(300000000));
            return;
        }
        if (amount > Configs_1.default.Login.Coin) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        var bankNumber = this.edbBankNumber.string.trim();
        if (bankNumber == "") {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_4'));
            return;
        }
        var bankActName = this.edbBankAccountName.string.trim();
        if (bankActName == "") {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_4'));
            return;
        }
        App_1.default.instance.showLoading(true);
        var data = {};
        data["c"] = 2010;
        data["am"] = amount;
        data["bn"] = bankNumber;
        data["nn"] = Configs_1.default.Login.Nickname;
        Http_1.default.get(Configs_1.default.App.API, data, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("CashOut:" + JSON.stringify(err) + " => " + JSON.stringify(res));
            if (res.success) {
                Configs_1.default.Login.Coin = res.data.currentMoney;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_5'));
            }
            else {
                App_1.default.instance.alertDialog.showMsg(res.message);
            }
        });
        // MiniGameNetworkClient.getInstance().send(new cmd.ReqCashoutBank(bankSelected, bankNumber,bankActName, amount ));
    };
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "boxRut", void 0);
    __decorate([
        property(cc.Label)
    ], TabBank.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Node)
    ], TabBank.prototype, "dropdownBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "edbAmount", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "edbBankNumber", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBank.prototype, "edbBankAccountName", void 0);
    TabBank = __decorate([
        ccclass("Lobby.PopupCashout.TabBank")
    ], TabBank);
    return TabBank;
}());
exports.TabBank = TabBank;
var TabMomo = /** @class */ (function () {
    function TabMomo() {
        this.lblCoin = null;
        this.edbAmount = null;
        this.edbPhone = null;
        this.fee = 1;
        this.minCashout = 0;
        this.maxCashout = 0;
        this.isAllowCashout = false;
    }
    TabMomo.prototype.start = function () {
        var _this = this;
        //get config from server 
        App_1.default.instance.showLoading(true);
        this.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
            App_1.default.instance.showLoading(false);
            _this.fee = res.ratio_cashout_momo;
            _this.minCashout = res.cashout_momo_min;
            _this.maxCashout = res.cashout_momo_max;
            _this.isAllowCashout = res.is_cashout_momo == 1 ? false : true;
        });
    };
    TabMomo.prototype.amountChange = function () {
        var amount = this.edbAmount.string.trim();
        if (amount == "" || parseInt(amount) <= 0 || isNaN(Number(amount))) {
            return;
        }
        var amountSend = Number(amount);
        if (amountSend < this.minCashout || amountSend > this.maxCashout) {
            return;
        }
    };
    TabMomo.prototype.submit = function () {
        // if(!this.isAllowCashout){
        //     App.instance.alertDialog.showMsg("Rút Momo đang bảo trì, vui lòng thử lại sau!");
        //     return;
        // }
        var amount = this.edbAmount.string.trim();
        // let phoneSend = this.edbPhone.string.trim();
        if (amount == "" || parseInt(amount) <= 0 || isNaN(Number(amount))) {
            App_1.default.instance.alertDialog.showMsg("Số tiền không hợp lệ");
            return;
        }
    };
    __decorate([
        property(cc.Label)
    ], TabMomo.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabMomo.prototype, "edbAmount", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabMomo.prototype, "edbPhone", void 0);
    TabMomo = __decorate([
        ccclass("Lobby.PopupCashout.TabMomo")
    ], TabMomo);
    return TabMomo;
}());
exports.TabMomo = TabMomo;
var PopupCashout = /** @class */ (function (_super) {
    __extends(PopupCashout, _super);
    function PopupCashout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabContents = null;
        _this.lblContainsBotOTPs = [];
        _this.tabBank = null;
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupCashout.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < this.lblContainsBotOTPs.length; i++) {
            var lbl = this.lblContainsBotOTPs[i];
            lbl.string = lbl.string.replace("$bot_otp", "@" + Configs_1.default.App.getLinkTelegram());
        }
        this.onTabChanged();
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            ////Utils.Log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.CASHOUT_CARD: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResCashoutCard(data);
                    ////Utils.Log(JSON.stringify(res));
                }
                case Lobby_Cmd_1.default.Code.CASHOUT_BANK: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResCashoutBank(data);
                    if (res.error == 0) {
                        Configs_1.default.Login.Coin = res.currentMoney;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_6'));
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_7'));
                    }
                    break;
                }
                case Lobby_Cmd_1.default.Code.CASHOUT_MOMO: {
                    App_1.default.instance.showLoading(false);
                    var res = new Lobby_Cmd_1.default.ResCashoutMomo(data);
                    if (res.error == 0) {
                        Configs_1.default.Login.Coin = res.currentMoney;
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_6'));
                    }
                    else {
                        App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_note_transfer_7'));
                    }
                    break;
                }
            }
        }, this);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            if (!_this.node.active)
                return;
            // this.tabNapThe.lblBalance.string = Utils.formatNumber(Configs.Login.Coin);
            _this.tabBank.lblCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
            // this.tabMomo.lblCoin.string = Utils.formatNumber(Configs.Login.Coin);
        }, this);
        // this.tabNapThe.start();
        this.tabBank.start();
        // this.tabMomo.start();
    };
    PopupCashout.prototype.onBtnChoseBank = function () {
        this.tabBank.onChoseBank();
    };
    PopupCashout.prototype.onBtnAddBank = function () {
        // this.tabBank.onAddBank();
        Global_1.Global.LobbyController.actProfile(2);
        this.dismiss();
    };
    PopupCashout.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
        }
        switch (this.tabSelectedIdx) {
            case 0:
                this.tabBank.show();
                break;
            case 1:
                break;
        }
    };
    PopupCashout.prototype.longToTime = function (l) {
        return (l / 60) + " giờ " + (l % 60) + " phút";
    };
    PopupCashout.prototype.show = function () {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.onTabChanged();
    };
    PopupCashout.prototype.onBtnlsgd = function () {
        Global_1.Global.LobbyController.actTransaction(2);
    };
    PopupCashout.prototype.actGetOTP = function () {
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetOTP());
    };
    PopupCashout.prototype.actSubmitNapNganHang = function () {
        this.tabBank.submit();
    };
    __decorate([
        property(cc.Node)
    ], PopupCashout.prototype, "tabContents", void 0);
    __decorate([
        property([cc.Label])
    ], PopupCashout.prototype, "lblContainsBotOTPs", void 0);
    __decorate([
        property(TabBank)
    ], PopupCashout.prototype, "tabBank", void 0);
    PopupCashout = __decorate([
        ccclass
    ], PopupCashout);
    return PopupCashout;
}(Dialog_1.default));
exports.default = PopupCashout;

cc._RF.pop();