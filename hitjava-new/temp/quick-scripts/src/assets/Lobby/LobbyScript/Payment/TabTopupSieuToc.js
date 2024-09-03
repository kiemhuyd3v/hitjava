"use strict";
cc._RF.push(module, 'cecd9QJ5ehPhKdsdTQ5rMqw', 'TabTopupSieuToc');
// Lobby/LobbyScript/Payment/TabTopupSieuToc.ts

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
var TabTopupChuyenKhoan = /** @class */ (function (_super) {
    __extends(TabTopupChuyenKhoan, _super);
    function TabTopupChuyenKhoan() {
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
    TabTopupChuyenKhoan.prototype.show = function (data, providerName) {
        this.btnChoseBank.spriteFrame = null;
        this.providerName = providerName;
        this.node.active = true;
        this.data = data;
        this.dataBankChosing = null;
        this.showBankChosing();
    };
    TabTopupChuyenKhoan.prototype.showBankChosing = function () {
        var self = this;
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
                    cc.loader.load(this.dataBankChosing.bank_logo, function (err, texture) {
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
    TabTopupChuyenKhoan.prototype.hide = function () {
        this.node.active = false;
    };
    TabTopupChuyenKhoan.prototype.onFormatNumber = function () {
        this.editMoney.string = Utils_1.default.formatNumberBank(this.editMoney.string).toUpperCase();
    };
    TabTopupChuyenKhoan.prototype.onFormatName = function () {
        this.editName.string = Utils_1.default.formatNameBank(this.editName.string).toUpperCase();
        if (cc.sys.isBrowser) {
            this.editName.focus();
        }
    };
    TabTopupChuyenKhoan.prototype.onBtnXacNhan = function () {
        var money = Utils_1.default.formatEditBox(this.editMoney.string);
        //Utils.Log("providerName:"+this.providerName);
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
            if (money < 50000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 50.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
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
            "pt": 0,
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
            //Utils.Log(" res:"+JSON.stringify(res));
            if (res.success == true) {
                if (self.tabWell == "princePay") {
                    var url = JSON.parse(res.data);
                    App_1.default.instance.openWebView(url.payurl);
                }
                else if (self.tabWell == "clickpay") {
                    var url = JSON.parse(res.data);
                    cc.sys.openURL(url.redirect_url);
                    // App.instance.openWebView(url.redirect_url);
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
    TabTopupChuyenKhoan.prototype.onBtnChoseBank = function () {
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
    ], TabTopupChuyenKhoan.prototype, "tabWell", void 0);
    __decorate([
        property(LobbyChoseBank_1.default)
    ], TabTopupChuyenKhoan.prototype, "lobbyChoseBank", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabTopupChuyenKhoan.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TabTopupChuyenKhoan.prototype, "sfChoseBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupChuyenKhoan.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupChuyenKhoan.prototype, "editMoney", void 0);
    __decorate([
        property(cc.Button)
    ], TabTopupChuyenKhoan.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupChuyenKhoan.prototype, "nodeArrow", void 0);
    TabTopupChuyenKhoan = __decorate([
        ccclass
    ], TabTopupChuyenKhoan);
    return TabTopupChuyenKhoan;
}(cc.Component));
exports.default = TabTopupChuyenKhoan;

cc._RF.pop();