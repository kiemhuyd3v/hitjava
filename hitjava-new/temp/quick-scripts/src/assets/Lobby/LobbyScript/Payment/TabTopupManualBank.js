"use strict";
cc._RF.push(module, '82765Ok3jBOvb+hcz5s8eXo', 'TabTopupManualBank');
// Lobby/LobbyScript/Payment/TabTopupManualBank.ts

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
var TabTopupManualBank = /** @class */ (function (_super) {
    __extends(TabTopupManualBank, _super);
    function TabTopupManualBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabWell = "";
        _this.lobbyChoseBank = null;
        _this.btnChoseBank = null;
        _this.sfChoseBank = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.editBankNumber = null;
        _this.btnXacNhan = null;
        _this.nodeArrow = null;
        _this.nodeInput = null;
        _this.nodeInfoTrans = null;
        _this.lbTransMsg = null;
        _this.lbBankAccount = null;
        _this.lbBankNumber = null;
        _this.lbBank = null;
        _this._listBank = [];
        _this.data = null;
        _this.dataBankChosing = null;
        _this.providerName = null;
        return _this;
    }
    TabTopupManualBank.prototype.show = function (data, providerName) {
        this.btnChoseBank.spriteFrame = null;
        this.btnChoseBank.node.active = true;
        this.providerName = providerName;
        this.node.active = true;
        this.data = data;
        this.dataBankChosing = null;
        this.showBankChosing();
        this.nodeInput.active = true;
        this.nodeInfoTrans.active = false;
        this.editName.string = this.editMoney.string = this.editBankNumber.string = "";
        this.editBankNumber.placeholder = App_1.default.instance.getTextLang('txt_account_number');
        if (this.dataBankChosing != null) {
            this.editName.enabled = true;
            this.editMoney.enabled = true;
            this.editBankNumber.enabled = true;
            this.btnXacNhan.interactable = true;
        }
        else {
            this.editName.enabled = false;
            this.editMoney.enabled = false;
            this.editBankNumber.enabled = false;
            this.btnXacNhan.interactable = false;
        }
    };
    TabTopupManualBank.prototype.onLoad = function () {
    };
    TabTopupManualBank.prototype.onFormatNumber = function () {
        this.editMoney.string = Utils_1.default.formatNumberBank(this.editMoney.string).toUpperCase();
    };
    TabTopupManualBank.prototype.onFormatName = function () {
        this.editName.string = Utils_1.default.formatNameBank(this.editName.string).toUpperCase();
        if (cc.sys.isBrowser) {
            this.editName.focus();
        }
    };
    TabTopupManualBank.prototype.onEdbBankNumberChange = function () {
        if (cc.sys.isBrowser) {
            this.editBankNumber.focus();
        }
    };
    TabTopupManualBank.prototype.showBankChosing = function () {
        var self = this;
        this.btnChoseBank.node.active = true;
        if (this.dataBankChosing == null) {
            this.nodeArrow.active = true;
            this.editName.node.opacity = 50;
            this.editMoney.node.opacity = 50;
            this.btnXacNhan.node.opacity = 50;
            this.editBankNumber.node.opacity = 50;
            this.editName.string = "";
            this.editMoney.string = "";
            this.btnChoseBank.spriteFrame = this.sfChoseBank;
            this.btnChoseBank.node.scale = 1;
            this.editName.enabled = false;
            this.editMoney.enabled = false;
            this.editBankNumber.enabled = true;
            this.btnXacNhan.interactable = false;
        }
        else {
            this.nodeArrow.active = false;
            this.editName.node.opacity = 255;
            this.editMoney.node.opacity = 255;
            this.btnXacNhan.node.opacity = 255;
            this.editBankNumber.node.opacity = 255;
            this.editName.enabled = true;
            this.editMoney.enabled = true;
            this.editBankNumber.enabled = true;
            this.btnXacNhan.interactable = true;
            cc.loader.load(this.dataBankChosing.imageUrl, function (err, texture) {
                var newSpriteFrame = new cc.SpriteFrame(texture);
                self.btnChoseBank.spriteFrame = newSpriteFrame;
                self.btnChoseBank.node.scale = 1;
            });
        }
    };
    TabTopupManualBank.prototype.hide = function () {
        this.node.active = false;
    };
    TabTopupManualBank.prototype.onBtnXacNhan = function () {
        var _this = this;
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.editMoney.string);
            var bankNumber = this.editBankNumber.string.trim();
            if (this.editMoney.string == "" || bankNumber == "" || this.editName.string.trim() == "" || this.dataBankChosing == null) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                return;
            }
            if (money < 100000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 100.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
                return;
            }
            var self = this;
            App_1.default.instance.showLoading(true, -1);
            //Utils.Log("chuyen khoan:" + encodeURIComponent(this.editName.string.trim()));
            var request = {
                "c": 2003,
                "fn": encodeURIComponent(this.editName.string.trim()),
                "am": money,
                "pt": 1,
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "pn": this.providerName,
                "bc": this.dataBankChosing['name'],
                "ds": this.generateTransMsg(),
                "bn": bankNumber
            };
            Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
                var listBank = res.list_bank;
                _this._listBank = listBank;
                _this.lbBank.string = listBank[0].bankName;
                _this.lbBankNumber.string = listBank[0].bankNumber;
                _this.lbBankAccount.string = listBank[0].bankAccountName;
            });
            this.lbTransMsg.string = request['ds'];
            //	this.lbBankNumber.string = listBank.bankNumber;
            //	this.lbBankAccount.string = listBank.bankAccountName;
            //	this.lbBank.string = listBank.bankName;
            Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                App_1.default.instance.showLoading(false);
                //  cc.log(res);
                if (res.success == true) {
                    _this.nodeInput.active = false;
                    _this.nodeInfoTrans.active = true;
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res.message);
                }
            });
        }
    };
    TabTopupManualBank.prototype.onBtnChoseBank = function () {
        var self = this;
        this.lobbyChoseBank.init(self.tabWell, self.data.banks, function (dataBankChosing) {
            self.dataBankChosing = dataBankChosing;
            self.showBankChosing();
        });
        this.lobbyChoseBank.show();
    };
    TabTopupManualBank.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "-E79");
    };
    __decorate([
        property
    ], TabTopupManualBank.prototype, "tabWell", void 0);
    __decorate([
        property(LobbyChoseBank_1.default)
    ], TabTopupManualBank.prototype, "lobbyChoseBank", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabTopupManualBank.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TabTopupManualBank.prototype, "sfChoseBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupManualBank.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupManualBank.prototype, "editMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupManualBank.prototype, "editBankNumber", void 0);
    __decorate([
        property(cc.Button)
    ], TabTopupManualBank.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupManualBank.prototype, "nodeArrow", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupManualBank.prototype, "nodeInput", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupManualBank.prototype, "nodeInfoTrans", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbTransMsg", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbBankAccount", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbBank", void 0);
    TabTopupManualBank = __decorate([
        ccclass
    ], TabTopupManualBank);
    return TabTopupManualBank;
}(cc.Component));
exports.default = TabTopupManualBank;

cc._RF.pop();