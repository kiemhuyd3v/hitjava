
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupCashout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cENhc2hvdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCxtREFBa0Q7QUFDbEQsK0NBQTBDO0FBQzFDLHlDQUE4QjtBQUM5QiwyQ0FBc0M7QUFDdEMsdUVBQWtFO0FBQ2xFLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFDMUMsaUZBQTRFO0FBQzVFLHVFQUEwRDtBQUlwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBR0ksV0FBTSxHQUFZLElBQUksQ0FBQztRQUd2QixZQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGNBQVMsR0FBZSxJQUFJLENBQUM7UUFHN0Isa0JBQWEsR0FBZSxJQUFJLENBQUM7UUFHakMsdUJBQWtCLEdBQWUsSUFBSSxDQUFDO1FBRTlCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFFZixRQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFpSG5DLENBQUM7SUEvR0csdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqRSxDQUFDO0lBRUQsc0JBQUksR0FBSjtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3JDLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQzlCO2lCQUNJO2dCQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFFMUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztpQkFDbEQ7Z0JBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUNyQyxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDeEMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsNkJBQVcsR0FBWDtRQUNJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztZQUM1RSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBRUQsMkJBQVMsR0FBVDtJQUVBLENBQUM7SUFDRCx3QkFBTSxHQUFOO1FBQ0ksNEJBQTRCO1FBQzVCLGlHQUFpRztRQUNqRyxjQUFjO1FBQ2QsSUFBSTtRQUNKLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQzdDLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNiLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7WUFDL0UsT0FBTztTQUNWO1FBQ0QsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXZELElBQUksTUFBTSxHQUFHLGVBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLE1BQU0sR0FBRyxNQUFNLEVBQUU7WUFDakIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEcsT0FBTztTQUNWO1FBQ0QsSUFBSSxNQUFNLEdBQUcsU0FBUyxFQUFFO1lBQ3BCLGFBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNHLE9BQU87U0FDVjtRQUdELElBQUksTUFBTSxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUM3QixhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBRTdFLE9BQU87U0FDVjtRQUVELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUksVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNsQixhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLE9BQU87U0FDVjtRQUNELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEQsSUFBSSxXQUFXLElBQUksRUFBRSxFQUFFO1lBQ25CLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7WUFDbEYsT0FBTztTQUNWO1FBSUQsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNwQyxjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUNyQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQiwrRUFBK0U7WUFDaEYsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNiLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDM0MsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzNELGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7YUFDckY7aUJBQ0k7Z0JBQ0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRDtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsbUhBQW1IO0lBQ3ZILENBQUM7SUFuSUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNNO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDUTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2tEQUNZO0lBR2pDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ2lCO0lBbEI3QixPQUFPO1FBRG5CLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztPQUN6QixPQUFPLENBMEluQjtJQUFELGNBQUM7Q0ExSUQsQUEwSUMsSUFBQTtBQTFJWSwwQkFBTztBQTZJcEI7SUFBQTtRQUlJLFlBQU8sR0FBYSxJQUFJLENBQUM7UUFJekIsY0FBUyxHQUFlLElBQUksQ0FBQztRQUU3QixhQUFRLEdBQWUsSUFBSSxDQUFDO1FBRXBCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQW9EbkMsQ0FBQztJQW5ERyx1QkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFiRyx5QkFBeUI7UUFDekIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQzdDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLGVBQWUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWxFLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUNELDhCQUFZLEdBQVo7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQyxJQUFJLE1BQU0sSUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDaEUsT0FBTztTQUNWO1FBQ0QsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDOUQsT0FBTztTQUNWO0lBS0wsQ0FBQztJQUVELHdCQUFNLEdBQU47UUFDSSw0QkFBNEI7UUFDNUIsd0ZBQXdGO1FBQ3hGLGNBQWM7UUFDZCxJQUFJO1FBQ0osSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsK0NBQStDO1FBRS9DLElBQUksTUFBTSxJQUFJLEVBQUUsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNoRSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUN6RCxPQUFPO1NBQ1Y7SUFHTCxDQUFDO0lBekREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ007SUFJekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs4Q0FDUTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzZDQUNPO0lBVm5CLE9BQU87UUFEbkIsT0FBTyxDQUFDLDRCQUE0QixDQUFDO09BQ3pCLE9BQU8sQ0FtRW5CO0lBQUQsY0FBQztDQW5FRCxBQW1FQyxJQUFBO0FBbkVZLDBCQUFPO0FBdUVwQjtJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQWtJQztRQTlIRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUk1Qix3QkFBa0IsR0FBZSxFQUFFLENBQUM7UUFJcEMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUloQixvQkFBYyxHQUFHLENBQUMsQ0FBQzs7SUFrSC9CLENBQUM7SUFoSEcsNEJBQUssR0FBTDtRQUFBLGlCQXlEQztRQXhERyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxHQUFHLGlCQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDcEY7UUFFRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsK0JBQXFCLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQUMsSUFBSTtZQUNqRCxJQUFJLFFBQVEsR0FBRyxJQUFJLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsbUNBQW1DO1lBQ3BDLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUN6QixLQUFLLG1CQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4QixhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdEMsbUNBQW1DO2lCQUd2QztnQkFDRCxLQUFLLG1CQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUN4QixhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDaEIsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7d0JBQ3RDLDJCQUFpQixDQUFDLElBQUksQ0FBQywyQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUMzRCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO3FCQUNyRjt5QkFBTTt3QkFDSCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO3FCQUNyRjtvQkFDRCxNQUFNO2lCQUNUO2dCQUNELEtBQUssbUJBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3hCLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLG1CQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO3dCQUNoQixpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQzt3QkFDdEMsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQzNELGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGO3lCQUFNO3dCQUNILGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7cUJBQ3JGO29CQUNELE1BQU07aUJBQ1Q7YUFDSjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULDJCQUFpQixDQUFDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzRCxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFDOUIsNkVBQTZFO1lBQzdFLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLHdFQUF3RTtRQUM1RSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCwwQkFBMEI7UUFFMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyQix3QkFBd0I7SUFDNUIsQ0FBQztJQUVPLHFDQUFjLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRU8sbUNBQVksR0FBcEI7UUFDSSw0QkFBNEI7UUFDNUIsZUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxtQ0FBWSxHQUFwQjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDbEU7UUFFRCxRQUFRLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDekIsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFFVixLQUFLLENBQUM7Z0JBRUYsTUFBTTtTQUViO0lBQ0wsQ0FBQztJQUVPLGlDQUFVLEdBQWxCLFVBQW1CLENBQVM7UUFDeEIsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLGdDQUFTLEdBQWpCO1FBQ0ksZUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFN0MsQ0FBQztJQUlELGdDQUFTLEdBQVQ7UUFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQiwrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELDJDQUFvQixHQUFwQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQTVIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNVO0lBSTVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDOzREQUNlO0lBSXBDO1FBREMsUUFBUSxDQUFDLE9BQU8sQ0FBQztpREFDTTtJQVpQLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FrSWhDO0lBQUQsbUJBQUM7Q0FsSUQsQUFrSUMsQ0FsSXlDLGdCQUFNLEdBa0kvQztrQkFsSW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vTG9iYnkuQ21kXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkxvYmJ5LlBvcHVwQ2FzaG91dC5UYWJCYW5rXCIpXG5leHBvcnQgY2xhc3MgVGFiQmFuayB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hSdXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRyb3Bkb3duQmFuazogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJBbW91bnQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQmFua051bWJlcjogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJCYW5rQWNjb3VudE5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbGlzdEJhbmsgPSBbXTtcblxuICAgIHByaXZhdGUgZmVlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWluQ2FzaG91dCA9IDA7XG4gICAgcHJpdmF0ZSBtYXhDYXNob3V0ID0gMDtcbiAgICBwcml2YXRlIGlzQWxsb3dDYXNob3V0ID0gZmFsc2U7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bkJhbmsgPSB0aGlzLmRyb3Bkb3duQmFuay5nZXRDb21wb25lbnQoXCJEcm9wRG93blwiKTtcbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICBkYXRhW1wiY1wiXSA9IDIwMDg7XG4gICAgICAgIGRhdGFbXCJublwiXSA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgIGRhdGFbXCJwblwiXSA9IDE7XG4gICAgICAgIGRhdGFbXCJsXCJdID0gMTA7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XG4gICAgICAgICAgICBpZiAocmVzID09IG51bGwgfHwgbGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHNlbGYuYm94UnV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ib3hSdXQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RCYW5rID0gbGlzdDtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHsgb3B0aW9uU3RyaW5nOiBcIkNo4buNbiBuZ8OibiBow6BuZ1wiIH0pO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHsgb3B0aW9uU3RyaW5nOiBsaXN0W2ldLmJhbmtOYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duQmFuay5jbGVhck9wdGlvbkRhdGFzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bkJhbmsuYWRkT3B0aW9uRGF0YXMoZGF0YXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CYW5rLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNob3NlQmFuaygpIHtcbiAgICAgICAgdmFyIGluZGV4QmFuayA9IHRoaXMuZHJvcGRvd25CYW5rLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChpbmRleEJhbmsgIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lZGJCYW5rQWNjb3VudE5hbWUuc3RyaW5nID0gdGhpcy5fbGlzdEJhbmtbaW5kZXhCYW5rIC0gMV0uY3VzdG9tZXJOYW1lO1xuICAgICAgICAgICAgdGhpcy5lZGJCYW5rTnVtYmVyLnN0cmluZyA9IHRoaXMuX2xpc3RCYW5rW2luZGV4QmFuayAtIDFdLmJhbmtOdW1iZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFkZEJhbmsoKSB7XG5cbiAgICB9XG4gICAgc3VibWl0KCkge1xuICAgICAgICAvLyBpZighdGhpcy5pc0FsbG93Q2FzaG91dCl7XG4gICAgICAgIC8vICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlLDunQgcXVhIG5nw6JuIGjDoG5nIMSRYW5nIGLhuqNvIHRyw6wsIHZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCIpO1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIGxldCBkZEJhbmsgPSB0aGlzLmRyb3Bkb3duQmFuay5zZWxlY3RlZEluZGV4O1xuICAgICAgICBpZiAoZGRCYW5rID09IDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3NlbGVjdF9iYW5rMScpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFua1NlbGVjdGVkID0gdGhpcy5fbGlzdEJhbmtbZGRCYW5rIC0gMV0uYmFua05hbWU7XG5cbiAgICAgICAgbGV0IGFtb3VudCA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGJBbW91bnQuc3RyaW5nKTtcbiAgICAgICAgaWYgKGFtb3VudCA8IDEwMDAwMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9vdXRfbWluXCIpICsgVXRpbHMuZm9ybWF0TnVtYmVyKDEwMDAwMCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbW91bnQgPiAzMDAwMDAwMDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2FzaF9vdXRfbWF4JykgKyBVdGlscy5mb3JtYXROdW1iZXIoMzAwMDAwMDAwKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChhbW91bnQgPiBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYW5rTnVtYmVyID0gdGhpcy5lZGJCYW5rTnVtYmVyLnN0cmluZy50cmltKCk7XG4gICAgICAgIGlmIChiYW5rTnVtYmVyID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGVfdHJhbnNmZXJfNCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYmFua0FjdE5hbWUgPSB0aGlzLmVkYkJhbmtBY2NvdW50TmFtZS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAoYmFua0FjdE5hbWUgPT0gXCJcIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl80JykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgdmFyIGRhdGEgPSB7fTtcbiAgICAgICAgZGF0YVtcImNcIl0gPSAyMDEwO1xuICAgICAgICBkYXRhW1wiYW1cIl0gPSBhbW91bnQ7XG4gICAgICAgIGRhdGFbXCJiblwiXSA9IGJhbmtOdW1iZXI7XG4gICAgICAgIGRhdGFbXCJublwiXSA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgZGF0YSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJDYXNoT3V0OlwiICsgSlNPTi5zdHJpbmdpZnkoZXJyKSArIFwiID0+IFwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuZGF0YS5jdXJyZW50TW9uZXk7XG4gICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFDYXNob3V0QmFuayhiYW5rU2VsZWN0ZWQsIGJhbmtOdW1iZXIsYmFua0FjdE5hbWUsIGFtb3VudCApKTtcbiAgICB9XG5cblxuXG59XG5cbkBjY2NsYXNzKFwiTG9iYnkuUG9wdXBDYXNob3V0LlRhYk1vbW9cIilcbmV4cG9ydCBjbGFzcyBUYWJNb21vIHtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQW1vdW50OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJQaG9uZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcml2YXRlIGZlZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIG1pbkNhc2hvdXQgPSAwO1xuICAgIHByaXZhdGUgbWF4Q2FzaG91dCA9IDA7XG4gICAgcHJpdmF0ZSBpc0FsbG93Q2FzaG91dCA9IGZhbHNlO1xuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIC8vZ2V0IGNvbmZpZyBmcm9tIHNlcnZlciBcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICB0aGlzLmxibENvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTMwIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZmVlID0gcmVzLnJhdGlvX2Nhc2hvdXRfbW9tbztcbiAgICAgICAgICAgIHRoaXMubWluQ2FzaG91dCA9IHJlcy5jYXNob3V0X21vbW9fbWluO1xuICAgICAgICAgICAgdGhpcy5tYXhDYXNob3V0ID0gcmVzLmNhc2hvdXRfbW9tb19tYXg7XG4gICAgICAgICAgICB0aGlzLmlzQWxsb3dDYXNob3V0ID0gcmVzLmlzX2Nhc2hvdXRfbW9tbyA9PSAxID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgYW1vdW50Q2hhbmdlKCkge1xuICAgICAgICBsZXQgYW1vdW50ID0gdGhpcy5lZGJBbW91bnQuc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKGFtb3VudCA9PSBcIlwiIHx8IHBhcnNlSW50KGFtb3VudCkgPD0gMCB8fCBpc05hTihOdW1iZXIoYW1vdW50KSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYW1vdW50U2VuZCA9IE51bWJlcihhbW91bnQpO1xuICAgICAgICBpZiAoYW1vdW50U2VuZCA8IHRoaXMubWluQ2FzaG91dCB8fCBhbW91bnRTZW5kID4gdGhpcy5tYXhDYXNob3V0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG5cblxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgLy8gaWYoIXRoaXMuaXNBbGxvd0Nhc2hvdXQpe1xuICAgICAgICAvLyAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJSw7p0IE1vbW8gxJFhbmcgYuG6o28gdHLDrCwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIik7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuZWRiQW1vdW50LnN0cmluZy50cmltKCk7XG4gICAgICAgIC8vIGxldCBwaG9uZVNlbmQgPSB0aGlzLmVkYlBob25lLnN0cmluZy50cmltKCk7XG5cbiAgICAgICAgaWYgKGFtb3VudCA9PSBcIlwiIHx8IHBhcnNlSW50KGFtb3VudCkgPD0gMCB8fCBpc05hTihOdW1iZXIoYW1vdW50KSkpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4ga2jDtG5nIGjhu6NwIGzhu4dcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG5cblxuXG5cbn1cblxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBDYXNob3V0IGV4dGVuZHMgRGlhbG9nIHtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFiQ29udGVudHM6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBsYmxDb250YWluc0JvdE9UUHM6IGNjLkxhYmVsW10gPSBbXTtcblxuXG4gICAgQHByb3BlcnR5KFRhYkJhbmspXG4gICAgdGFiQmFuazogVGFiQmFuayA9IG51bGw7XG5cblxuXG4gICAgcHJpdmF0ZSB0YWJTZWxlY3RlZElkeCA9IDA7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxibENvbnRhaW5zQm90T1RQcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxibCA9IHRoaXMubGJsQ29udGFpbnNCb3RPVFBzW2ldO1xuICAgICAgICAgICAgbGJsLnN0cmluZyA9IGxibC5zdHJpbmcucmVwbGFjZShcIiRib3Rfb3RwXCIsIFwiQFwiICsgQ29uZmlncy5BcHAuZ2V0TGlua1RlbGVncmFtKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coaW5wYWNrZXQuZ2V0Q21kSWQoKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNBU0hPVVRfQ0FSRDoge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNDYXNob3V0Q2FyZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNBU0hPVVRfQkFOSzoge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNDYXNob3V0QmFuayhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGVfdHJhbnNmZXJfNicpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGVfdHJhbnNmZXJfNycpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DQVNIT1VUX01PTU86IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzQ2FzaG91dE1vbW8oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzYnKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzcnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIC8vIHRoaXMudGFiTmFwVGhlLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgICAgICB0aGlzLnRhYkJhbmsubGJsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgICAgIC8vIHRoaXMudGFiTW9tby5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyB0aGlzLnRhYk5hcFRoZS5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMudGFiQmFuay5zdGFydCgpO1xuICAgICAgICAvLyB0aGlzLnRhYk1vbW8uc3RhcnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuQ2hvc2VCYW5rKCkge1xuICAgICAgICB0aGlzLnRhYkJhbmsub25DaG9zZUJhbmsoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuQWRkQmFuaygpIHtcbiAgICAgICAgLy8gdGhpcy50YWJCYW5rLm9uQWRkQmFuaygpO1xuICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdFByb2ZpbGUoMik7XG4gICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25UYWJDaGFuZ2VkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkNvbnRlbnRzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGkgPT0gdGhpcy50YWJTZWxlY3RlZElkeDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAodGhpcy50YWJTZWxlY3RlZElkeCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFuay5zaG93KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvbmdUb1RpbWUobDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChsIC8gNjApICsgXCIgZ2nhu50gXCIgKyAobCAlIDYwKSArIFwiIHBow7p0XCI7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRubHNnZCgpIHtcbiAgICAgICAgR2xvYmFsLkxvYmJ5Q29udHJvbGxlci5hY3RUcmFuc2FjdGlvbigyKTtcblxuICAgIH1cblxuXG5cbiAgICBhY3RHZXRPVFAoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUdldE9UUCgpKTtcbiAgICB9XG5cbiAgICBhY3RTdWJtaXROYXBOZ2FuSGFuZygpIHtcbiAgICAgICAgdGhpcy50YWJCYW5rLnN1Ym1pdCgpO1xuICAgIH1cblxufVxuIl19