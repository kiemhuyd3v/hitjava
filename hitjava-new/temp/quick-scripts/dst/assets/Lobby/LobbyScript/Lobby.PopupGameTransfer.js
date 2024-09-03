
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupGameTransfer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEdhbWVUcmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQyxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHVFQUFrRTtBQUNsRSxxRUFBZ0U7QUFHMUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLGVBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsWUFBTyxHQUFlLElBQUksQ0FBQztRQUUzQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFLLEdBQXNCLElBQUksQ0FBQztRQUV2QixXQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBMk43RyxDQUFDO0lBek5VLHlCQUFLLEdBQVosVUFBYSxLQUF3QjtRQUFyQyxpQkFjQztRQWJHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtZQUN0QyxJQUFJLE1BQU0sR0FBRyxlQUFLLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FBQztnQ0FDTSxDQUFDO1lBQ0YsR0FBRyxHQUFHLE9BQUssWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZ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LCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJQb3B1cEdhbWVUcmFuc2Zlci5UYWJDYXNoSW5cIilcbmV4cG9ydCBjbGFzcyBUYWJDYXNoSW4ge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCYWxhbmNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQ29pbjogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcXVpY2tCdXR0b25zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcG9wdXA6IFBvcHVwR2FtZVRyYW5zZmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzID0gWzUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCAyMDAwMDAwLCA1MDAwMDAwLCAxMDAwMDAwMCwgMjAwMDAwMDBdO1xuXG4gICAgcHVibGljIHN0YXJ0KHBvcHVwOiBQb3B1cEdhbWVUcmFuc2Zlcikge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG4gICAgICAgIHRoaXMuZWRiQ29pbi5ub2RlLm9uKFwiZWRpdGluZy1kaWQtZW5kZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVzW2ldO1xuICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBidG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBOYXBBRygpIHtcbiAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcbiAgICAgICAgaWYgKG1vbmV5ID4gQ29uZmlncy5Mb2dpbi5Db2luKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWRiQ29pbi5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9pbnB1dF9hbGwnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX0FHLCB7IHQ6IFwiRGVwb3NpdFwiLCBhOiBtb25leSAvIDEwMDAsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLnVwZGF0ZUluZm9BRygpO1xuICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiAtPSBtb25leTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl84JykpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBOYXBJQkMoKSB7XG4gICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGJDb2luLnN0cmluZyk7XG4gICAgICAgIGlmIChtb25leSA+IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RfZW5vdWdoJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkYkNvaW4uc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfaW5wdXRfYWxsJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfSUJDLCB7IHQ6IFwiVHJhbnNmZXJcIiwgZDogMSwgYTogbW9uZXksIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cC51cGRhdGVJbmZvSUJDKCk7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IG1vbmV5O1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzgnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtZXNzYWdlXCJdKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgTmFwU0JPKCkge1xuICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBpZiAobW9uZXkgPiBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGJDb2luLnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBIdHRwLmdldChBcHAuQVBJX1NCTywgeyB0OiBcIlRyYW5zZmVyXCIsIGQ6IDEsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJERVBPU0lUIFNCTzpcIiwgcmVzKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXAudXBkYXRlSW5mb1NCTygpO1xuICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiAtPSBtb25leTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl84JykpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibWVzc2FnZVwiXSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgTmFwV00oKSB7XG4gICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGJDb2luLnN0cmluZyk7XG4gICAgICAgIGlmIChtb25leSA+IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RfZW5vdWdoJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkYkNvaW4uc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfaW5wdXRfYWxsJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9XTSwgeyB0OiBcIlRyYW5zZmVyXCIsIGQ6IDEsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cC51cGRhdGVJbmZvV00oKTtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gLT0gbW9uZXk7XG4gICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGVfdHJhbnNmZXJfOCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1zZ1wiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBOYXBFQkVUKCkge1xuICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBpZiAobW9uZXkgPiBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGJDb2luLnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfRUJFVCwgeyB0OiBcIlRyYW5zXCIsIGQ6IDEsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJOYXAgZWJldCBlcnI6XCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiTmFwIGViZXQgcmVzOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLnVwZGF0ZUluZm9FQkVUKCk7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IG1vbmV5O1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzgnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtc2dcIl0pO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBuYXBGaXNoKCkge1xuICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBpZiAobW9uZXkgPiBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGJDb2luLnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiAyMDIyLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sIG1uOiBtb25leSB9LCAoZXJyLCByZXMpID0+IHsgLy9jaGVjayBiYWxhbmNlIFxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiRGVwb3NpdCBTaG9vdEZpc2g6XCIsIHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzW1wiZXJyb3JDb2RlXCJdID09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJEZXBvc2l0IFNob290RmlzaCBTdWNjZXNcIik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzgnKSArIFwiIFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKG1vbmV5KSk7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IG1vbmV5O1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3IxJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBsZXQgY29pbiA9IFV0aWxzLnN0cmluZ1RvSW50KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBsZXQgbWluQW1vdW50ID0gMTAwMDtcbiAgICAgICAgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJGSVNIXCIpIHtcbiAgICAgICAgICAgIG1pbkFtb3VudCA9IDEwMDAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2luIDwgbWluQW1vdW50KSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9tb25leV9lcnJvcicpICsgXCJcXG5cIiArIEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21vbmV5X2Vycm9yMicpICsgVXRpbHMuZm9ybWF0TnVtYmVyKG1pbkFtb3VudCkgKyBcIiBWTkRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJBR1wiKSB7XG4gICAgICAgICAgICB0aGlzLk5hcEFHKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wb3B1cC50eXBlR2FtZSA9PSBcIklCQ1wiKSB7XG4gICAgICAgICAgICB0aGlzLk5hcElCQygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJTQk9cIikge1xuICAgICAgICAgICAgdGhpcy5OYXBTQk8oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvcHVwLnR5cGVHYW1lID09IFwiV01cIikge1xuICAgICAgICAgICAgdGhpcy5OYXBXTSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJFQkVUXCIpIHtcbiAgICAgICAgICAgIHRoaXMuTmFwRUJFVCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJGSVNIXCIpIHtcbiAgICAgICAgICAgIHRoaXMubmFwRmlzaCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZWRiQ29pbi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWlja0J1dHRvbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGNjY2xhc3MoXCJQb3B1cEdhbWVUcmFuc2Zlci5UYWJDYXNoT3V0XCIpXG5leHBvcnQgY2xhc3MgVGFiQ2FzaE91dCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJhbGFuY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVGl0bGVCYWxhbmNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQ29pbjogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcXVpY2tCdXR0b25zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcG9wdXA6IFBvcHVwR2FtZVRyYW5zZmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzID0gWzUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCAyMDAwMDAwLCA1MDAwMDAwLCAxMDAwMDAwMCwgMjAwMDAwMDBdO1xuICAgIGN1cnJlbnRCYWxhbmNlID0gMDtcbiAgICBwdWJsaWMgc3RhcnQocG9wdXA6IFBvcHVwR2FtZVRyYW5zZmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSBwb3B1cDtcbiAgICAgICAgLy8gdGhpcy5sYmxUaXRsZUJhbGFuY2Uuc3RyaW5nID0gXCJT4buRIGTGsCBcIiArIHRoaXMucG9wdXAudHlwZUdhbWU7XG4gICAgICAgIHRoaXMuZWRiQ29pbi5ub2RlLm9uKFwiZWRpdGluZy1kaWQtZW5kZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVzW2ldO1xuICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBidG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBSdXRBRygpIHtcbiAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkYkNvaW4uc3RyaW5nKSAvIDEwMDA7XG4gICAgICAgIGlmICh0aGlzLmVkYkNvaW4uc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfaW5wdXRfYWxsJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vbmV5ICogMTAwMCA+IHRoaXMucG9wdXAuYmFsYW5jZSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX0FHLCB7IHQ6IFwiV2l0aGRyYXdcIiwgYTogbW9uZXksIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXAudXBkYXRlSW5mb0FHKCk7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luICs9IG1vbmV5ICogMTAwMDtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl81JykpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIFJ1dElCQygpIHtcbiAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcbiAgICAgICAgaWYgKG1vbmV5ID4gdGhpcy5wb3B1cC5iYWxhbmNlKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RfZW5vdWdoXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGJDb2luLnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2lucHV0X2FsbCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIlJ1dElCQzpcIiArIG1vbmV5KTtcbiAgICAgICAgLy9pYmNcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX0lCQywgeyB0OiBcIlRyYW5zZmVyXCIsIGQ6IDAsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcImNvZGVcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXAudXBkYXRlSW5mb0lCQygpO1xuICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiArPSBtb25leTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl81JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtZXNzYWdlXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBSdXRTQk8oKSB7XG4gICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGJDb2luLnN0cmluZyk7XG4gICAgICAgIGlmIChtb25leSA+IHRoaXMucG9wdXAuYmFsYW5jZSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWRiQ29pbi5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9pbnB1dF9hbGwnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJSdXRTQk86XCIgKyBtb25leSk7XG4gICAgICAgIC8vc2JvXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9TQk8sIHsgdDogXCJUcmFuc2ZlclwiLCBkOiAwLCBhOiBtb25leSwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXAudXBkYXRlSW5mb1NCTygpO1xuICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiArPSBtb25leTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl81JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXNbXCJtZXNzYWdlXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIFJ1dFdNKCkge1xuICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBpZiAobW9uZXkgPiB0aGlzLnBvcHVwLmJhbGFuY2UpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkYkNvaW4uc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfaW5wdXRfYWxsJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pYmNcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX1dNLCB7IHQ6IFwiVHJhbnNmZXJcIiwgZDogMCwgYTogbW9uZXksIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcIndpdGhEcmF3IElCQzpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cC51cGRhdGVJbmZvV00oKTtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gKz0gbW9uZXk7XG4gICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGVfdHJhbnNmZXJfNScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlc1tcIm1zZ1wiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBSdXRFQkVUKCkge1xuICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBpZiAobW9uZXkgPiB0aGlzLnBvcHVwLmJhbGFuY2UpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkYkNvaW4uc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfaW5wdXRfYWxsJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb25leSA8IDUwMDAwKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21pbl90cmFuc2ZlcicpICsgXCI1MC4wMDBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfRUJFVCwgeyB0OiBcIlRyYW5zXCIsIGQ6IDAsIGE6IG1vbmV5LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJSdXRFQkVUOlwiLCByZXMpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInJlc1wiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cC51cGRhdGVJbmZvRUJFVCgpO1xuICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiArPSBtb25leTtcbiAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl81JykpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzW1wibXNnXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBSdXRGaXNoKCkge1xuICAgICAgICB2YXIgbW9uZXkgPSBVdGlscy5mb3JtYXRFZGl0Qm94KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICBpZiAobW9uZXkgPiB0aGlzLnBvcHVwLmJhbGFuY2UpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkYkNvaW4uc3RyaW5nID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfaW5wdXRfYWxsJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb25leSA8IDUwMDAwKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21pbl90cmFuc2ZlcicpICsgXCI1MC4wMDBcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IDIwMjMsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgbW46IG1vbmV5IH0sIChlcnIsIHJlcykgPT4geyAvL2NoZWNrIGJhbGFuY2UgXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJXaXRoRHJhdyBTaG9vdEZpc2g6XCIsIHJlcyk7XG4gICAgICAgICAgICBpZiAocmVzW1wiZXJyb3JDb2RlXCJdID09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJXaXRoZHJhdyBTdWNjZXNcIik7XG4gICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luICs9IG1vbmV5O1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RlX3RyYW5zZmVyXzknKSArIFV0aWxzLmZvcm1hdE51bWJlcihtb25leSkgKyBcIlxcblwiICsgQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90ZV90cmFuc2Zlcl8xMCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmJhbGFuY2UgPSByZXMuZGF0YS5CYWxhbmNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF91bmtub3duX2Vycm9yMScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgICAgIGxldCBjb2luID0gVXRpbHMuc3RyaW5nVG9JbnQodGhpcy5lZGJDb2luLnN0cmluZyk7XG4gICAgICAgIGlmIChjb2luIDw9IDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X21vbmV5X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwLnR5cGVHYW1lID09IFwiQUdcIikge1xuICAgICAgICAgICAgdGhpcy5SdXRBRygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJJQkNcIikge1xuICAgICAgICAgICAgdGhpcy5SdXRJQkMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvcHVwLnR5cGVHYW1lID09IFwiU0JPXCIpIHtcbiAgICAgICAgICAgIHRoaXMuUnV0U0JPKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wb3B1cC50eXBlR2FtZSA9PSBcIldNXCIpIHtcbiAgICAgICAgICAgIHRoaXMuUnV0V00oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvcHVwLnR5cGVHYW1lID09IFwiRUJFVFwiKSB7XG4gICAgICAgICAgICB0aGlzLlJ1dEVCRVQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnBvcHVwLnR5cGVHYW1lID09IFwiRklTSFwiKSB7XG4gICAgICAgICAgICB0aGlzLlJ1dEZpc2goKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmVkYkNvaW4uc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5sYmxCYWxhbmNlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLnBvcHVwLmJhbGFuY2UpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVpY2tCdXR0b25zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5xdWlja0J1dHRvbnMuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSkuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXAudHlwZUdhbWUgPT0gXCJGSVNIXCIpIHtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiAyMDI1LCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7IC8vY2hlY2sgYmFsYW5jZSBcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwiUmVzIEJhbGFuY2UgU2hvb3RGaXNoOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJlcnJvckNvZGVcIl0gPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJMb2dpbiBTdWNjZXNcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwLmJhbGFuY2UgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKFwiQ2jGsGEgY8OzIHRow7RuZyB0aW4gc+G7kSBkxrBcXG4gVnVpIGzDsm5nIHbDoG8gZ2FtZSDEkeG7gyB04bqhbyB0w6BpIGtob+G6o24hXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJhbGFuY2Uuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXAuYmFsYW5jZSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5wb3B1cC5iYWxhbmNlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwR2FtZVRyYW5zZmVyIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHRhYnM6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFiQ29udGVudHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShUYWJDYXNoSW4pXG4gICAgdGFiQ2FzaEluOiBUYWJDYXNoSW4gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShUYWJDYXNoT3V0KVxuICAgIHRhYkNhc2hPdXQ6IFRhYkNhc2hPdXQgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHRUaXRsZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgdGFiU2VsZWN0ZWRJZHggPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbaV0ubm9kZS5vbihcInRvZ2dsZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YWJDYXNoSW4ubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2FzaE91dC5sYmxCYWxhbmNlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW5GaXNoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy50YWJDYXNoSW4uc3RhcnQodGhpcyk7XG4gICAgICAgIHRoaXMudGFiQ2FzaE91dC5zdGFydCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHlwZUdhbWUgPSBcIlwiO1xuICAgIHB1YmxpYyBiYWxhbmNlID0gMDtcbiAgICBzaG93R2FtZSh0eXBlR2FtZSwgYmFsYW5jZSkge1xuICAgICAgICBpZiAodHlwZUdhbWUgPT0gXCJGSVNIXCIpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZUdhbWUgPSB0eXBlR2FtZTtcbiAgICAgICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnR4dFRpdGxlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RyYW5zZmVyX3F1eTEnKSArIFwiIELhuq5OIEPDgVwiO1xuICAgICAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlR2FtZSA9PSBcIkFHXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4dFRpdGxlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RyYW5zZmVyX3F1eTEnKSArIFwiIEFHXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlR2FtZSA9PSBcIklCQ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eHRUaXRsZS5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90cmFuc2Zlcl9xdXkxJykgKyBcIiBJQkNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVHYW1lID09IFwiU0JPXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4dFRpdGxlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RyYW5zZmVyX3F1eTEnKSArIFwiIFNCT1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZUdhbWUgPT0gXCJXTVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50eHRUaXRsZS5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90cmFuc2Zlcl9xdXkxJykgKyBcIiBXTVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZUdhbWUgPT0gXCJFQkVUXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnR4dFRpdGxlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RyYW5zZmVyX3F1eTEnKSArIFwiIEVCRVRcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50eXBlR2FtZSA9IHR5cGVHYW1lO1xuICAgICAgICAgICAgdGhpcy5iYWxhbmNlID0gYmFsYW5jZTtcbiAgICAgICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFiQ2FzaE91dC5sYmxUaXRsZUJhbGFuY2Uuc3RyaW5nID0gdGhpcy50eXBlR2FtZSAhPSBcIkZJU0hcIiA/IFwiU+G7kSBExrAgXCIgKyB0aGlzLnR5cGVHYW1lIDogXCJT4buRIETGsCBC4bqvbiBDw6FcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFiQ2hhbmdlZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYkNvbnRlbnRzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YWJDb250ZW50cy5jaGlsZHJlbltpXS5hY3RpdmUgPSBpID09IHRoaXMudGFiU2VsZWN0ZWRJZHg7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnRhYnMudG9nZ2xlSXRlbXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFicy50b2dnbGVJdGVtc1tqXS5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWxPdXRsaW5lKS5jb2xvciA9IGogPT0gdGhpcy50YWJTZWxlY3RlZElkeCA/IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjQUE1RjAwXCIpIDogY2MuQ29sb3IuQkxBQ0suZnJvbUhFWChcIiM0Njc3RjNcIik7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0aGlzLnRhYlNlbGVjdGVkSWR4KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGhpcy50YWJDYXNoSW4ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkNhc2hPdXQucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVJbmZvQUcoaXNVcGRhdGVUb3RhbCA9IGZhbHNlKSB7XG4gICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfQUcsIHsgdDogXCJHZXRCYWxhbmNlXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwidXBkYXRlSW5mb0FnOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wicmVzXCJdID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wibGlzdFwiXVswXVtcImluZm9cIl0gPT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcmVwYXJpbmcnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBwYXJzZUludChyZXMubGlzdFswXVtcImluZm9cIl0pICogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJDYXNoT3V0LnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZXBhcmluZycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlSW5mb0lCQyhpc1VwZGF0ZVRvdGFsID0gZmFsc2UpIHtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9JQkMsIHsgdDogXCJDaGVja0JhbGFuY2VcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ1cGRhdGVJbmZvSUNCOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWxhbmNlID0gcGFyc2VJbnQocmVzW1wiZGF0YVwiXVtcImJhbGFuY2VcIl0pICogMTAwMDtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkNhc2hPdXQucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcmVwYXJpbmcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVJbmZvU0JPKGlzVXBkYXRlVG90YWwgPSBmYWxzZSkge1xuICAgICAgICBIdHRwLmdldChBcHAuQVBJX1NCTywgeyB0OiBcIkNoZWNrQmFsYW5jZVwiLCBubjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgYXQ6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4gfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgLy8vL1V0aWxzLkxvZyhcInVwZGF0ZUluZm9TQk86XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZSA9IHBhcnNlSW50KHJlc1tcImRhdGFcIl1bXCJiYWxhbmNlXCJdKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJDYXNoT3V0LnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3JlcGFyaW5nJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvV00oaXNVcGRhdGVUb3RhbCA9IGZhbHNlKSB7XG4gICAgICAgIEh0dHAuZ2V0KEFwcC5BUElfV00sIHsgdDogXCJDaGVja0JhbGFuY2VcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgIC8vLy9VdGlscy5Mb2coXCJ1cGRhdGVJbmZvV006XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJsaXN0XCJdWzBdID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhbGFuY2UgPSBwYXJzZUludChyZXNbXCJsaXN0XCJdWzFdKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJDYXNoT3V0LnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3JlcGFyaW5nJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvRUJFVChpc1VwZGF0ZVRvdGFsID0gZmFsc2UpIHtcbiAgICAgICAgSHR0cC5nZXQoQXBwLkFQSV9FQkVULCB7IHQ6IFwiQ2hlY2tCYWxhbmNlXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAvLy8vVXRpbHMuTG9nKFwidXBkYXRlSW5mb0VCRVQ6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJyZXNcIl0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFsYW5jZSA9IHJlc1tcImRhdGFcIl1bXCJtb25leVwiXSoxMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQ2FzaE91dC5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZXBhcmluZycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYWN0U3VibWl0Q2FzaEluKCkge1xuICAgICAgICB0aGlzLnRhYkNhc2hJbi5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U3VibWl0Q2FzaE91dCgpIHtcbiAgICAgICAgdGhpcy50YWJDYXNoT3V0LnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RDbGVhckNhc2hJbigpIHtcbiAgICAgICAgdGhpcy50YWJDYXNoSW4uZWRiQ29pbi5zdHJpbmcgPSBcIjBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0Q2xlYXJDYXNoT3V0KCkge1xuICAgICAgICB0aGlzLnRhYkNhc2hPdXQuZWRiQ29pbi5zdHJpbmcgPSBcIjBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0UGxheU5vdygpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZUdhbWUgPT0gXCJBR1wiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWN0TG9naW5BRyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGVHYW1lID09IFwiSUJDXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpbklCQyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGVHYW1lID09IFwiU0JPXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hY3RMb2dpblNCTyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGVHYW1lID09IFwiV01cIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdExvZ2luV00odHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlR2FtZSA9PSBcIkVCRVRcIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFjdExvZ2luRWJldCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGVHYW1lID09IFwiRklTSFwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWN0TG9naW5TaG9vdEZpc2godHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=