"use strict";
cc._RF.push(module, '68736QrMLJGeLalMFzRVruQ', 'TabTopupManualMomo');
// Lobby/LobbyScript/Payment/TabTopupManualMomo.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var SPUtils_1 = require("../Script/common/SPUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TapTopupManualMomo = /** @class */ (function (_super) {
    __extends(TapTopupManualMomo, _super);
    function TapTopupManualMomo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnChoseBank = null;
        _this.btnCopystk = null;
        _this.btnCopynoidung = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.editBankNumber = null;
        _this.btnXacNhan = null;
        _this.nodeInput = null;
        _this.nodeQR = null;
        _this.nodeArrow = null;
        _this.lbTransMsg = null;
        _this.lbBankAccount = null;
        _this.lbBankNumber = null;
        _this.spriteBank = null;
        //	@property(cc.Label)
        //    lbBank: cc.Label = null;
        _this.providerName = null;
        _this.data = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    TapTopupManualMomo.prototype.start = function () {
    };
    TapTopupManualMomo.prototype.show = function (data, providerName) {
        this.providerName = providerName;
        this.data = data;
        this.node.active = true;
        this.btnChoseBank.node.active = false;
        this.nodeQR.active = false;
        this.nodeInput.active = true;
        this.nodeArrow.active = false;
        this.editName.string = this.editMoney.string = this.editBankNumber.string = "";
        this.editName.node.opacity = this.editBankNumber.node.opacity = this.editMoney.node.opacity = this.btnXacNhan.node.opacity = 255;
        this.editName.enabled = true;
        this.editMoney.enabled = true;
        this.editBankNumber.enabled = true;
        this.editBankNumber.placeholder = App_1.default.instance.getTextLang('txt_phone_number');
        this.btnXacNhan.interactable = true;
    };
    TapTopupManualMomo.prototype.hide = function () {
        this.node.active = false;
    };
    TapTopupManualMomo.prototype.onClickConfirm = function () {
        var _this = this;
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.editMoney.string);
            var bankNumber = this.editBankNumber.string.trim();
            if (this.editMoney.string == "" || bankNumber == "" || this.editName.string.trim() == "") {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_input_all"));
                return;
            }
            if (money < 10000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_min") + " 10.000");
                return;
            }
            if (money > 300000000) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_cash_in_max") + " 300.000.000");
                return;
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
                "pn": this.providerName,
                "bc": "",
                "ds": this.generateTransMsg(),
                "bn": bankNumber
            };
            Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
                var momoConfig = res.momoConfig;
                _this._momoConfig = momoConfig;
                //    this.lbBank.string = listBank[0].bankName;
                _this.lbBankNumber.string = momoConfig.accountNumber;
                _this.lbBankAccount.string = momoConfig.accountName;
                cc.loader.load(momoConfig.image_path, function (err, texture) {
                    var newSpriteFrame = new cc.SpriteFrame(texture);
                    self.spriteBank.spriteFrame = newSpriteFrame;
                });
            });
            this.lbTransMsg.string = request['ds'];
            Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                App_1.default.instance.showLoading(false);
                //  cc.log(res);
                if (res.success == true) {
                    _this.nodeInput.active = false;
                    _this.nodeQR.active = true;
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res.message);
                }
            });
            this.btnCopystk.node.on("click", function () {
                if (_this.lbBankNumber.string.length > 0) {
                    SPUtils_1.default.copyToClipboard(_this.lbBankNumber.string);
                    App_1.default.instance.alertDialog.showMsg("Đã sao chép số tài khoản.");
                }
                else {
                    App_1.default.instance.alertDialog.showMsg("Chưa có số tài khoản.");
                }
            });
            this.btnCopynoidung.node.on("click", function () {
                if (_this.lbTransMsg.string.length > 0) {
                    SPUtils_1.default.copyToClipboard(_this.lbTransMsg.string);
                    App_1.default.instance.alertDialog.showMsg("Đã sao chép nội dung.");
                }
                else {
                    App_1.default.instance.alertDialog.showMsg("Chưa có nội dung.");
                }
            });
        }
    };
    TapTopupManualMomo.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "");
    };
    __decorate([
        property(cc.Sprite)
    ], TapTopupManualMomo.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualMomo.prototype, "btnCopystk", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualMomo.prototype, "btnCopynoidung", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualMomo.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualMomo.prototype, "editMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualMomo.prototype, "editBankNumber", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualMomo.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualMomo.prototype, "nodeInput", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualMomo.prototype, "nodeQR", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualMomo.prototype, "nodeArrow", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualMomo.prototype, "lbTransMsg", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualMomo.prototype, "lbBankAccount", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualMomo.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Sprite)
    ], TapTopupManualMomo.prototype, "spriteBank", void 0);
    TapTopupManualMomo = __decorate([
        ccclass
    ], TapTopupManualMomo);
    return TapTopupManualMomo;
}(cc.Component));
exports.default = TapTopupManualMomo;

cc._RF.pop();