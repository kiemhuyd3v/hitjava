"use strict";
cc._RF.push(module, 'e6706wOWc5O15Pt3tRTffVz', 'TabTopupMomo');
// Lobby/LobbyScript/Payment/TabTopupMomo.ts

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
var LobbyChoseBank_1 = require("./LobbyChoseBank");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupMomo = /** @class */ (function (_super) {
    __extends(TabTopupMomo, _super);
    function TabTopupMomo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabWell = "";
        _this.lobbyChoseBank = null;
        _this.btnChoseBank = null;
        _this.sfChoseBank = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.btnXacNhan = null;
        _this.nodeArrow = null;
        _this.data = null;
        _this.dataBankChosing = null;
        _this.providerName = null;
        return _this;
    }
    TabTopupMomo.prototype.show = function (data, providerName) {
        this.btnChoseBank.spriteFrame = null;
        this.providerName = providerName;
        this.node.active = true;
        this.data = data;
        this.dataBankChosing = null;
        this.showBankChosing();
    };
    TabTopupMomo.prototype.onFormatNumber = function () {
        this.editMoney.string = Utils_1.default.formatNumberBank(this.editMoney.string).toUpperCase();
    };
    TabTopupMomo.prototype.onFormatName = function () {
        this.editName.string = Utils_1.default.formatNameBank(this.editName.string).toUpperCase();
    };
    TabTopupMomo.prototype.showBankChosing = function () {
        var self = this;
        //Utils.Log("showBankChosing:" + self.tabWell);
        if (self.tabWell == "princePay") {
            this.nodeArrow.active = false;
            this.editName.node.opacity = 255;
            this.editMoney.node.opacity = 255;
            this.btnXacNhan.node.opacity = 255;
            this.editName.enabled = true;
            this.editMoney.enabled = true;
            this.btnXacNhan.interactable = true;
            this.btnChoseBank.node.active = false;
        }
        else {
            this.btnChoseBank.node.active = true;
            if (this.dataBankChosing == null) {
                this.nodeArrow.active = true;
                this.editName.node.opacity = 50;
                this.editMoney.node.opacity = 50;
                this.btnXacNhan.node.opacity = 50;
                this.editName.string = "";
                this.editMoney.string = "";
                this.btnChoseBank.spriteFrame = this.sfChoseBank;
                this.btnChoseBank.node.scale = 1;
                this.editName.enabled = false;
                this.editMoney.enabled = false;
                this.btnXacNhan.interactable = false;
            }
            else {
                this.nodeArrow.active = false;
                this.editName.node.opacity = 255;
                this.editMoney.node.opacity = 255;
                this.btnXacNhan.node.opacity = 255;
                this.editName.enabled = true;
                this.editMoney.enabled = true;
                this.btnXacNhan.interactable = true;
                if (self.tabWell == "clickpay") {
                    cc.loader.load(this.dataBankChosing.bank_code, function (err, texture) {
                        var newSpriteFrame = new cc.SpriteFrame(texture);
                        self.btnChoseBank.spriteFrame = newSpriteFrame;
                        self.btnChoseBank.node.scale = 1;
                    });
                }
                else {
                    cc.loader.load(this.dataBankChosing.imageUrl, function (err, texture) {
                        var newSpriteFrame = new cc.SpriteFrame(texture);
                        self.btnChoseBank.spriteFrame = newSpriteFrame;
                        self.btnChoseBank.node.scale = 1;
                    });
                }
            }
        }
    };
    TabTopupMomo.prototype.hide = function () {
        this.node.active = false;
    };
    TabTopupMomo.prototype.onBtnXacNhan = function () {
        var money = Utils_1.default.formatEditBox(this.editMoney.string);
        if (this.providerName == "paywell") {
            if (money < 100000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 100.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
                return;
            }
        }
        else if (this.providerName == "princewell") {
            if (money < 20000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 20.000");
                return;
            }
            if (money > 20000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 20.000.000");
                return;
            }
        }
        else if (this.providerName == "clickpay") {
            if (money < 200000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 200.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
                return;
            }
        }
        if (this.editName.string == "" || this.editMoney.string == "") {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
            return;
        }
        if (this.editName.string.indexOf(' ') == -1) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_bank_transfer_note_10"));
            return;
        }
        if (this.tabWell != "princePay") {
            if (this.dataBankChosing == null) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                return;
            }
        }
        var self = this;
        App_1.default.instance.showLoading(true, -1);
        var request = {
            "c": 2003,
            "fn": encodeURIComponent(this.editName.string.trim()),
            "am": money,
            "pt": 4,
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
            "pn": this.providerName
        };
        if (self.tabWell != "princePay") {
            request["bc"] = this.dataBankChosing.key;
        }
        if (self.tabWell == "clickpay") {
            request["bc"] = this.dataBankChosing.code;
        }
        Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (res.success == true) {
                if (self.tabWell == "princePay") {
                    var url = JSON.parse(res.data);
                    App_1.default.instance.openWebView(url.payurl);
                }
                else if (self.tabWell == "clickpay") {
                    var url = JSON.parse(res.data);
                    cc.sys.openURL(url.redirect_url);
                }
                else {
                    App_1.default.instance.openWebView(res.data);
                }
            }
            else {
                App_1.default.instance.ShowAlertDialog(res.message);
            }
        });
    };
    TabTopupMomo.prototype.onBtnChoseBank = function () {
        var _this = this;
        var self = this;
        if (self.tabWell == "clickpay") {
            if (Configs_1.default.Login.ClickPayPayment != null) {
                this.lobbyChoseBank.init(self.tabWell, this.data.banks, function (dataBankChosing) {
                    self.dataBankChosing = dataBankChosing;
                    self.showBankChosing();
                });
                this.lobbyChoseBank.show();
            }
            else {
                App_1.default.instance.showLoading(true);
                var request = {
                    "c": 2014,
                    "pn": this.providerName
                };
                Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                    App_1.default.instance.showLoading(false);
                    Configs_1.default.Login.ClickPayPayment = Configs_1.default.Login.ListPayment[3].providerConfig.banks = res;
                    _this.lobbyChoseBank.init(self.tabWell, _this.data.banks, function (dataBankChosing) {
                        self.dataBankChosing = dataBankChosing;
                        self.showBankChosing();
                    });
                    _this.lobbyChoseBank.show();
                });
            }
        }
        else {
            this.lobbyChoseBank.init(self.tabWell, this.data.banks, function (dataBankChosing) {
                self.dataBankChosing = dataBankChosing;
                self.showBankChosing();
            });
            this.lobbyChoseBank.show();
        }
    };
    __decorate([
        property
    ], TabTopupMomo.prototype, "tabWell", void 0);
    __decorate([
        property(LobbyChoseBank_1.default)
    ], TabTopupMomo.prototype, "lobbyChoseBank", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabTopupMomo.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TabTopupMomo.prototype, "sfChoseBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupMomo.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupMomo.prototype, "editMoney", void 0);
    __decorate([
        property(cc.Button)
    ], TabTopupMomo.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupMomo.prototype, "nodeArrow", void 0);
    TabTopupMomo = __decorate([
        ccclass
    ], TabTopupMomo);
    return TabTopupMomo;
}(cc.Component));
exports.default = TabTopupMomo;

cc._RF.pop();