"use strict";
cc._RF.push(module, 'bd358kl7C9GjJJLTr9+wzbE', 'PopupConfirmTransfer');
// Lobby/LobbyScript/PopupConfirmTransfer.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TYPE = {
    CASHIN: 0,
    CASHOUT: 1
};
var PopupConfirmTransfer = /** @class */ (function (_super) {
    __extends(PopupConfirmTransfer, _super);
    function PopupConfirmTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbNameAgency = null;
        _this.lbNickname = null;
        _this.lbUserBankName = null;
        _this.lbAgencyBankName = null;
        _this.lbUserAccountName = null;
        _this.lbBankNumber = null;
        _this.lbAmount = null;
        _this.lbContent = null;
        _this.titleContainer = null;
        // LIFE-CYCLE CALLBACKS:
        _this.type = 0;
        _this.dataCashIn = null;
        _this.dataCashOut = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    PopupConfirmTransfer.prototype.start = function () {
    };
    PopupConfirmTransfer.prototype.setInfoCashIn = function (data) {
        //  cc.log("setInfoCashIn:", data);
        this.lbUserBankName.node.active = true;
        this.lbContent.node.active = true;
        this.lbAgencyBankName.node.active = true;
        this.type = TYPE.CASHIN;
        this.dataCashIn = data;
        this.lbNameAgency.string = data['nameagent'];
        this.lbNickname.string = data['nickname'];
        this.lbUserBankName.string = data['usernamebank'];
        this.lbAgencyBankName.string = data['agencynamebank'];
        if (this.lbAgencyBankName.string.length > 20) {
            this.lbAgencyBankName.string = this.lbAgencyBankName.string.slice(0, 20) + "...";
        }
        this.lbBankNumber.string = data['bank_number'];
        this.lbAmount.string = Utils_1.default.formatNumber(data['amount']);
        this.lbContent.string = data['cid'];
        this.titleContainer.getChildByName('lbUserAccountName').active = false;
        this.titleContainer.getChildByName('lbAgencyBankName').active = true;
        this.titleContainer.getChildByName('lbBankNumber').active = true;
        this.titleContainer.getChildByName('Content').active = true;
        this.lbBankNumber.node.active = true;
    };
    PopupConfirmTransfer.prototype.setInfoCashOut = function (data) {
        this.type = TYPE.CASHOUT;
        this.dataCashOut = data;
        //  cc.log("setInfoCashOut:", data);
        this.titleContainer.getChildByName('lbUserAccountName').active = true;
        this.lbUserAccountName.node.active = true;
        this.lbNameAgency.string = data['nameagent'];
        this.lbNickname.string = data['nickname'];
        this.lbAmount.string = Utils_1.default.formatNumber(data['amount']);
        this.lbUserAccountName.string = data['useraccountname'];
        this.lbUserBankName.string = data['userbankname'];
        this.lbContent.node.active = false;
        this.lbAgencyBankName.node.active = false;
        this.titleContainer.getChildByName('lbAgencyBankName').active = false;
        this.titleContainer.getChildByName('lbBankNumber').active = false;
        this.titleContainer.getChildByName('Content').active = false;
        this.lbBankNumber.node.active = false;
    };
    PopupConfirmTransfer.prototype.onClickConfirm = function () {
        var _this = this;
        cc.log("TYPE TAB:" + this.type);
        if (this.type == TYPE.CASHIN) {
            cc.log("DataCassh IN=", this.dataCashIn);
            //api?c=2003&am=100000&code=367457&abn=2222&bc=TPB&cid=1122334455&nn=BigBird&at=123123&bn=1234",
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API2, {
                "c": 2003,
                "am": this.dataCashIn['amount'],
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "code": this.dataCashIn['agencyID'],
                "cid": this.dataCashIn['cid'],
                "abn": this.dataCashIn['bank_number'],
                "bn": this.dataCashIn['userbanknumber'],
            }, function (err, res) {
                App_1.default.instance.showLoading(false);
                cc.log(res);
                if (res['success']) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_request_cashin_success'));
                    _this.dismiss();
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res['message']);
                    _this.dismiss();
                }
            });
        }
        else {
            cc.log("DataCassh=", this.dataCashOut);
            //api?c=2010&am=100000&code=367457&bc=TPB&nn=BigBird&at=123123&bn=1234",
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API2, {
                "c": 2010,
                "am": this.dataCashOut['amount'],
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "code": this.dataCashOut['agencyID'],
                "bn": this.dataCashOut['userbanknumber'],
            }, function (err, res) {
                App_1.default.instance.showLoading(false);
                cc.log(res);
                if (res['success']) {
                    App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_request_cashin_success'));
                    _this.dismiss();
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res['message']);
                    _this.dismiss();
                }
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbNameAgency", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbNickname", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbUserBankName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbAgencyBankName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbUserAccountName", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbAmount", void 0);
    __decorate([
        property(cc.Label)
    ], PopupConfirmTransfer.prototype, "lbContent", void 0);
    __decorate([
        property(cc.Node)
    ], PopupConfirmTransfer.prototype, "titleContainer", void 0);
    PopupConfirmTransfer = __decorate([
        ccclass
    ], PopupConfirmTransfer);
    return PopupConfirmTransfer;
}(Dialog_1.default));
exports.default = PopupConfirmTransfer;

cc._RF.pop();