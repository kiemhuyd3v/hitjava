"use strict";
cc._RF.push(module, 'd1ac7Un6zlKKrOvdugLXNtD', 'Lobby.PopupGameTransfer');
// Lobby/LobbyScript/Lobby.PopupGameTransfer.ts

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
exports.TabCashOut = exports.TabCashIn = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabCashIn = /** @class */ (function () {
    function TabCashIn() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000];
    }
    TabCashIn.prototype.start = function (popup) {
        var _this = this;
        this.popup = popup;
        this.edbCoin.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this.edbCoin.string);
            _this.edbCoin.string = Utils_1.default.formatNumber(number);
        });
        var _loop_1 = function (i) {
            btn = this_1.quickButtons.children[i];
            var value = this_1.values[i];
            btn.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(value);
            btn.on("click", function () {
                _this.edbCoin.string = Utils_1.default.formatNumber(value);
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.quickButtons.childrenCount; i++) {
            _loop_1(i);
        }
    };
    TabCashIn.prototype.NapAG = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > Configs_1.default.Login.Coin) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_AG, { t: "Deposit", a: money / 1000, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res["res"] == 0) {
                _this.popup.updateInfoAG();
                Configs_1.default.Login.Coin -= money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_8'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["msg"]);
            }
        });
    };
    TabCashIn.prototype.NapIBC = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > Configs_1.default.Login.Coin) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        Http_1.default.get(App_1.default.API_IBC, { t: "Transfer", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res["code"] == 0) {
                _this.popup.updateInfoIBC();
                Configs_1.default.Login.Coin -= money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_8'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["message"]);
            }
        });
    };
    TabCashIn.prototype.NapSBO = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > Configs_1.default.Login.Coin) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        Http_1.default.get(App_1.default.API_SBO, { t: "Transfer", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("DEPOSIT SBO:", res);
            if (res["res"] == 0) {
                _this.popup.updateInfoSBO();
                Configs_1.default.Login.Coin -= money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_8'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["message"]);
            }
        });
    };
    TabCashIn.prototype.NapWM = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > Configs_1.default.Login.Coin) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_WM, { t: "Transfer", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res["res"] == 0) {
                _this.popup.updateInfoWM();
                Configs_1.default.Login.Coin -= money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_8'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["msg"]);
            }
        });
    };
    TabCashIn.prototype.NapEBET = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > Configs_1.default.Login.Coin) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_EBET, { t: "Trans", d: 1, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("Nap ebet err:" + JSON.stringify(err));
            ////Utils.Log("Nap ebet res:" + JSON.stringify(res));
            if (res["res"] == 0) {
                _this.popup.updateInfoEBET();
                Configs_1.default.Login.Coin -= money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_8'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["msg"]);
            }
        });
    };
    TabCashIn.prototype.napFish = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > Configs_1.default.Login.Coin) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: 2022, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, mn: money }, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("Deposit ShootFish:", res);
            if (res["errorCode"] == "0") {
                ////Utils.Log("Deposit ShootFish Succes");
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_8') + " " + Utils_1.default.formatNumber(money));
                Configs_1.default.Login.Coin -= money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_unknown_error1'));
            }
        });
    };
    TabCashIn.prototype.submit = function () {
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        var minAmount = 1000;
        if (this.popup.typeGame == "FISH") {
            minAmount = 10000;
        }
        if (coin < minAmount) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_money_error') + "\n" + App_1.default.instance.getTextLang('txt_money_error2') + Utils_1.default.formatNumber(minAmount) + " VND");
            return;
        }
        if (this.popup.typeGame == "AG") {
            this.NapAG();
        }
        else if (this.popup.typeGame == "IBC") {
            this.NapIBC();
        }
        else if (this.popup.typeGame == "SBO") {
            this.NapSBO();
        }
        else if (this.popup.typeGame == "WM") {
            this.NapWM();
        }
        else if (this.popup.typeGame == "EBET") {
            this.NapEBET();
        }
        else if (this.popup.typeGame == "FISH") {
            this.napFish();
        }
    };
    TabCashIn.prototype.reset = function () {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        for (var i = 0; i < this.quickButtons.childrenCount; i++) {
            this.quickButtons.children[i].getComponent(cc.Toggle).isChecked = false;
        }
    };
    __decorate([
        property(cc.Label)
    ], TabCashIn.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabCashIn.prototype, "edbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], TabCashIn.prototype, "quickButtons", void 0);
    TabCashIn = __decorate([
        ccclass("PopupGameTransfer.TabCashIn")
    ], TabCashIn);
    return TabCashIn;
}());
exports.TabCashIn = TabCashIn;
var TabCashOut = /** @class */ (function () {
    function TabCashOut() {
        this.lblBalance = null;
        this.lblTitleBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000];
        this.currentBalance = 0;
    }
    TabCashOut.prototype.start = function (popup) {
        var _this = this;
        this.popup = popup;
        // this.lblTitleBalance.string = "Số dư " + this.popup.typeGame;
        this.edbCoin.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this.edbCoin.string);
            _this.edbCoin.string = Utils_1.default.formatNumber(number);
        });
        var _loop_2 = function (i) {
            btn = this_2.quickButtons.children[i];
            var value = this_2.values[i];
            btn.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(value);
            btn.on("click", function () {
                _this.edbCoin.string = Utils_1.default.formatNumber(value);
            });
        };
        var this_2 = this, btn;
        for (var i = 0; i < this.quickButtons.childrenCount; i++) {
            _loop_2(i);
        }
    };
    TabCashOut.prototype.RutAG = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string) / 1000;
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        if (money * 1000 > this.popup.balance) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_AG, { t: "Withdraw", a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res["res"] == 0) {
                _this.popup.updateInfoAG();
                Configs_1.default.Login.Coin += money * 1000;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_5'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["msg"]);
            }
        });
    };
    TabCashOut.prototype.RutIBC = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > this.popup.balance) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        ////Utils.Log("RutIBC:" + money);
        //ibc
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_IBC, { t: "Transfer", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res["code"] == 0) {
                _this.popup.updateInfoIBC();
                Configs_1.default.Login.Coin += money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_5'));
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["message"]);
            }
        });
    };
    TabCashOut.prototype.RutSBO = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > this.popup.balance) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        ////Utils.Log("RutSBO:" + money);
        //sbo
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_SBO, { t: "Transfer", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res["res"] == 0) {
                _this.popup.updateInfoSBO();
                Configs_1.default.Login.Coin += money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_5'));
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["message"]);
            }
        });
    };
    TabCashOut.prototype.RutWM = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > this.popup.balance) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        //ibc
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_WM, { t: "Transfer", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("withDraw IBC:" + JSON.stringify(res));
            if (res["res"] == 0) {
                _this.popup.updateInfoWM();
                Configs_1.default.Login.Coin += money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_5'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["msg"]);
            }
        });
    };
    TabCashOut.prototype.RutEBET = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > this.popup.balance) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        if (money < 50000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_min_transfer') + "50.000");
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(App_1.default.API_EBET, { t: "Trans", d: 0, a: money, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("RutEBET:", res);
            if (res["res"] == 0) {
                _this.popup.updateInfoEBET();
                Configs_1.default.Login.Coin += money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_5'));
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(res["msg"]);
            }
        });
    };
    TabCashOut.prototype.RutFish = function () {
        var _this = this;
        var money = Utils_1.default.formatEditBox(this.edbCoin.string);
        if (money > this.popup.balance) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_not_enough"));
            return;
        }
        if (this.edbCoin.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_input_all'));
            return;
        }
        if (money < 50000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_min_transfer') + "50.000");
            return;
        }
        Http_1.default.get(Configs_1.default.App.API, { c: 2023, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, mn: money }, function (err, res) {
            App_1.default.instance.showLoading(false);
            ////Utils.Log("WithDraw ShootFish:", res);
            if (res["errorCode"] == "0") {
                ////Utils.Log("Withdraw Succes");
                Configs_1.default.Login.Coin += money;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_note_transfer_9') + Utils_1.default.formatNumber(money) + "\n" + App_1.default.instance.getTextLang('txt_note_transfer_10'));
                _this.popup.balance = res.data.Balance;
                _this.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_unknown_error1'));
            }
        });
    };
    TabCashOut.prototype.submit = function () {
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_money_error'));
            return;
        }
        if (this.popup.typeGame == "AG") {
            this.RutAG();
        }
        else if (this.popup.typeGame == "IBC") {
            this.RutIBC();
        }
        else if (this.popup.typeGame == "SBO") {
            this.RutSBO();
        }
        else if (this.popup.typeGame == "WM") {
            this.RutWM();
        }
        else if (this.popup.typeGame == "EBET") {
            this.RutEBET();
        }
        else if (this.popup.typeGame == "FISH") {
            this.RutFish();
        }
    };
    TabCashOut.prototype.reset = function () {
        var _this = this;
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(this.popup.balance);
        for (var i = 0; i < this.quickButtons.childrenCount; i++) {
            this.quickButtons.children[i].getComponent(cc.Toggle).isChecked = false;
        }
        if (this.popup.typeGame == "FISH") {
            Http_1.default.get(Configs_1.default.App.API, { c: 2025, nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
                App_1.default.instance.showLoading(false);
                ////Utils.Log("Res Balance ShootFish:", res);
                if (res["errorCode"] == "0") {
                    ////Utils.Log("Login Succes");
                    _this.lblBalance.string = Utils_1.default.formatNumber(res.data);
                    _this.popup.balance = res.data;
                }
                else {
                    // App.instance.ShowAlertDialog("Chưa có thông tin số dư\n Vui lòng vào game để tạo tài khoản!");
                    _this.lblBalance.string = "0";
                    _this.popup.balance = 0;
                }
            });
        }
        else {
            this.lblBalance.string = Utils_1.default.formatNumber(this.popup.balance);
        }
    };
    __decorate([
        property(cc.Label)
    ], TabCashOut.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.Label)
    ], TabCashOut.prototype, "lblTitleBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabCashOut.prototype, "edbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], TabCashOut.prototype, "quickButtons", void 0);
    TabCashOut = __decorate([
        ccclass("PopupGameTransfer.TabCashOut")
    ], TabCashOut);
    return TabCashOut;
}());
exports.TabCashOut = TabCashOut;
var PopupGameTransfer = /** @class */ (function (_super) {
    __extends(PopupGameTransfer, _super);
    function PopupGameTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabCashIn = null;
        _this.tabCashOut = null;
        _this.txtTitle = null;
        _this.tabSelectedIdx = 0;
        _this.typeGame = "";
        _this.balance = 0;
        return _this;
    }
    PopupGameTransfer.prototype.start = function () {
        var _this = this;
        var _loop_3 = function (i) {
            this_3.tabs.toggleItems[i].node.on("toggle", function () {
                _this.tabSelectedIdx = i;
                _this.onTabChanged();
            });
        };
        var this_3 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_3(i);
        }
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this.tabCashIn.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
            _this.tabCashOut.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        this.tabCashIn.start(this);
        this.tabCashOut.start(this);
    };
    PopupGameTransfer.prototype.showGame = function (typeGame, balance) {
        if (typeGame == "FISH") {
            this.typeGame = typeGame;
            _super.prototype.show.call(this);
            this.tabSelectedIdx = 0;
            this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
            this.txtTitle.string = App_1.default.instance.getTextLang('txt_transfer_quy1') + " BẮN CÁ";
            this.onTabChanged();
        }
        else {
            if (typeGame == "AG") {
                this.txtTitle.string = App_1.default.instance.getTextLang('txt_transfer_quy1') + " AG";
            }
            else if (typeGame == "IBC") {
                this.txtTitle.string = App_1.default.instance.getTextLang('txt_transfer_quy1') + " IBC";
            }
            else if (typeGame == "SBO") {
                this.txtTitle.string = App_1.default.instance.getTextLang('txt_transfer_quy1') + " SBO";
            }
            else if (typeGame == "WM") {
                this.txtTitle.string = App_1.default.instance.getTextLang('txt_transfer_quy1') + " WM";
            }
            else if (typeGame == "EBET") {
                this.txtTitle.string = App_1.default.instance.getTextLang('txt_transfer_quy1') + " EBET";
            }
            this.typeGame = typeGame;
            this.balance = balance;
            _super.prototype.show.call(this);
            this.tabSelectedIdx = 0;
            this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
            this.onTabChanged();
        }
        this.tabCashOut.lblTitleBalance.string = this.typeGame != "FISH" ? "Số Dư " + this.typeGame : "Số Dư Bắn Cá";
    };
    PopupGameTransfer.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
        }
        for (var j = 0; j < this.tabs.toggleItems.length; j++) {
            this.tabs.toggleItems[j].node.getComponentInChildren(cc.LabelOutline).color = j == this.tabSelectedIdx ? cc.Color.BLACK.fromHEX("#AA5F00") : cc.Color.BLACK.fromHEX("#4677F3");
        }
        switch (this.tabSelectedIdx) {
            case 0:
                this.tabCashIn.reset();
                break;
            case 1:
                this.tabCashOut.reset();
                break;
        }
    };
    PopupGameTransfer.prototype.updateInfoAG = function (isUpdateTotal) {
        var _this = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_AG, { t: "GetBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoAg:" + JSON.stringify(res));
            if (res["res"] == 0) {
                if (res["list"][0]["info"] == "error") {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_reparing'));
                }
                else {
                    _this.balance = parseInt(res.list[0]["info"]) * 1000;
                    _this.tabCashOut.reset();
                }
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_reparing'));
            }
        });
    };
    PopupGameTransfer.prototype.updateInfoIBC = function (isUpdateTotal) {
        var _this = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_IBC, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoICB:" + JSON.stringify(res));
            if (res["code"] == 0) {
                _this.balance = parseInt(res["data"]["balance"]) * 1000;
                _this.tabCashOut.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_reparing'));
            }
        });
    };
    PopupGameTransfer.prototype.updateInfoSBO = function (isUpdateTotal) {
        var _this = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_SBO, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoSBO:" + JSON.stringify(res));
            if (res["res"] == 0) {
                _this.balance = parseInt(res["data"]["balance"]) * 1000;
                _this.tabCashOut.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_reparing'));
            }
        });
    };
    PopupGameTransfer.prototype.updateInfoWM = function (isUpdateTotal) {
        var _this = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_WM, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoWM:" + JSON.stringify(res));
            if (res["list"][0] == 0) {
                _this.balance = parseInt(res["list"][1]) * 1000;
                _this.tabCashOut.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_reparing'));
            }
        });
    };
    PopupGameTransfer.prototype.updateInfoEBET = function (isUpdateTotal) {
        var _this = this;
        if (isUpdateTotal === void 0) { isUpdateTotal = false; }
        Http_1.default.get(App_1.default.API_EBET, { t: "CheckBalance", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken }, function (err, res) {
            ////Utils.Log("updateInfoEBET:" + JSON.stringify(res));
            if (res["res"] == 0) {
                _this.balance = res["data"]["money"] * 1000;
                _this.tabCashOut.reset();
            }
            else {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_reparing'));
            }
        });
    };
    PopupGameTransfer.prototype.actSubmitCashIn = function () {
        this.tabCashIn.submit();
    };
    PopupGameTransfer.prototype.actSubmitCashOut = function () {
        this.tabCashOut.submit();
    };
    PopupGameTransfer.prototype.actClearCashIn = function () {
        this.tabCashIn.edbCoin.string = "0";
    };
    PopupGameTransfer.prototype.actClearCashOut = function () {
        this.tabCashOut.edbCoin.string = "0";
    };
    PopupGameTransfer.prototype.actPlayNow = function () {
        if (this.typeGame == "AG") {
            App_1.default.instance.actLoginAG(true);
        }
        else if (this.typeGame == "IBC") {
            App_1.default.instance.actLoginIBC(true);
        }
        else if (this.typeGame == "SBO") {
            App_1.default.instance.actLoginSBO(true);
        }
        else if (this.typeGame == "WM") {
            App_1.default.instance.actLoginWM(true);
        }
        else if (this.typeGame == "EBET") {
            App_1.default.instance.actLoginEbet(true);
        }
        else if (this.typeGame == "FISH") {
            App_1.default.instance.actLoginShootFish(true);
        }
    };
    __decorate([
        property(cc.ToggleContainer)
    ], PopupGameTransfer.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupGameTransfer.prototype, "tabContents", void 0);
    __decorate([
        property(TabCashIn)
    ], PopupGameTransfer.prototype, "tabCashIn", void 0);
    __decorate([
        property(TabCashOut)
    ], PopupGameTransfer.prototype, "tabCashOut", void 0);
    __decorate([
        property(cc.Label)
    ], PopupGameTransfer.prototype, "txtTitle", void 0);
    PopupGameTransfer = __decorate([
        ccclass
    ], PopupGameTransfer);
    return PopupGameTransfer;
}(Dialog_1.default));
exports.default = PopupGameTransfer;

cc._RF.pop();