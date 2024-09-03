"use strict";
cc._RF.push(module, '91230R4hqBFjIw44EFxRs7v', 'Lobby.PopupThes');
// Lobby/LobbyScript/Payment/Lobby.PopupThes.ts

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
var Dialog_1 = require("../Script/common/Dialog");
var Lobby_Cmd_1 = require("../Lobby.Cmd");
var Dropdown_1 = require("../Script/common/Dropdown");
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var SPUtils_1 = require("../Script/common/SPUtils");
var Http_1 = require("../../../Loading/src/Http");
//import VersionConfig from "../Script/common/VersionConfig";
//import ShootFishNetworkClient from "../Script/networks/ShootFishNetworkClient";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabBanks = /** @class */ (function (_super) {
    __extends(TabBanks, _super);
    function TabBanks() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemFactorTemplate = null;
        _this.lblBankNumber = null;
        _this.lblBankAccountName = null;
        _this.lblBankAddress = null;
        _this.lblTransNote = null;
        _this.btnCopy = null;
        _this.btnCopyND = null;
        _this.dropdownBank = null;
        _this.edbAmount = null;
        _this._listBank = [];
        return _this;
    }
    TabBanks.prototype.start = function () {
        var _this = this;
        this.lblTransNote.string = "Nap " + Configs_1.default.Login.Nickname;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err == null) {
                if (res.list_bank === undefined || res.list_bank.length == 0) {
                    return;
                }
                var listBank_1 = res.list_bank;
                _this._listBank = listBank_1;
                var bankName = ["Chọn ngân hàng"];
                for (var i = 0; i < listBank_1.length; i++) {
                    bankName.push(listBank_1[i].bankName);
                }
                _this.dropdownBank.setOptions(bankName);
                _this.dropdownBank.setOnValueChange(function (idx) {
                    if (idx > 0) {
                        // this.lblBankAddress.string = listBank[idx - 1].bankAddress;
                        _this.lblBankAccountName.string = listBank_1[idx - 1].bankAccountName;
                        _this.lblBankNumber.string = listBank_1[idx - 1].bankNumber;
                    }
                    else {
                        // this.lblBankAddress.string = "";
                        _this.lblBankAccountName.string = "";
                        _this.lblBankNumber.string = "";
                    }
                });
            }
        });
        this.btnCopy.node.on("click", function () {
            if (_this.lblBankNumber.string.length > 0) {
                SPUtils_1.default.copyToClipboard(_this.lblBankNumber.string);
                App_1.default.instance.alertDialog.showMsg("Đã sao chép số tài khoản.");
            }
            else {
                App_1.default.instance.alertDialog.showMsg("Chưa có số tài khoản.");
            }
        });
        this.btnCopyND.node.on("click", function () {
            if (_this.lblTransNote.string.length > 0) {
                SPUtils_1.default.copyToClipboard(_this.lblTransNote.string);
                App_1.default.instance.alertDialog.showMsg("Đã sao chép nội dung.");
            }
            else {
                App_1.default.instance.alertDialog.showMsg("Chưa có nội dung.");
            }
        });
    };
    TabBanks.prototype.submit = function () {
        var ddBank = this.dropdownBank.getValue();
        if (ddBank == 0) {
            App_1.default.instance.alertDialog.showMsg("Vui lòng chọn ngân hàng.");
            return;
        }
        var bankSelected = this._listBank[ddBank - 1].bankNumber;
        var amountSt = this.edbAmount.string.trim();
        var amount = Number(amountSt);
        if (isNaN(amount) || amount <= 0) {
            App_1.default.instance.alertDialog.showMsg("Số tiền nạp không hợp lệ");
            return;
        }
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient.getInstance().send(new Lobby_Cmd_1.default.ReqDepositBank(bankSelected, amount));
    };
    TabBanks.prototype.onBtnXacNhan = function () {
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.edbAmount.string);
            //let ddBank = this.dropdownBank.getValue();
            var ddBank = this.dropdownBank.getValue();
            if (ddBank == 1) {
                var bank = "VietcomBank";
            }
            if (ddBank == 2) {
                var bank = "VietinBank";
            }
            if (ddBank == 3) {
                var bank = "TPBank";
            }
            if (ddBank == 4) {
                var bank = "TechcomBank";
            }
            if (ddBank == 5) {
                var bank = "BIDV";
            }
            if (ddBank == 6) {
                var bank = "SacomBank";
            }
            //var bankNumber = this.editBankNumber.string.trim();
            if (money == "" || ddBank == null) {
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
                "fn": encodeURIComponent(ddBank),
                "am": money,
                "pt": 1,
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "pn": "manualbank",
                "bc": bank,
                "ds": Configs_1.default.Login.Nickname,
                "bn": money
            };
            //this.lbTransMsg.string = request['ds'];
            Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                App_1.default.instance.showLoading(false);
                cc.log(res);
                if (res.success == true) {
                    App_1.default.instance.ShowAlertDialog("Gửi thông tin nạp tiền thành công!");
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res.message);
                }
            });
        }
    };
    __decorate([
        property(cc.Node)
    ], TabBanks.prototype, "itemFactorTemplate", void 0);
    __decorate([
        property(cc.Label)
    ], TabBanks.prototype, "lblBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], TabBanks.prototype, "lblBankAccountName", void 0);
    __decorate([
        property(cc.Label)
    ], TabBanks.prototype, "lblBankAddress", void 0);
    __decorate([
        property(cc.Label)
    ], TabBanks.prototype, "lblTransNote", void 0);
    __decorate([
        property(cc.Button)
    ], TabBanks.prototype, "btnCopy", void 0);
    __decorate([
        property(cc.Button)
    ], TabBanks.prototype, "btnCopyND", void 0);
    __decorate([
        property(Dropdown_1.default)
    ], TabBanks.prototype, "dropdownBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabBanks.prototype, "edbAmount", void 0);
    TabBanks = __decorate([
        ccclass
    ], TabBanks);
    return TabBanks;
}(Dialog_1.default));
exports.default = TabBanks;

cc._RF.pop();