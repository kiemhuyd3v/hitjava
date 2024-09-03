"use strict";
cc._RF.push(module, '5e3ecLUt8VCSbklBKZNYvAF', 'Lobby.PopupGiftCode');
// Lobby/LobbyScript/Lobby.PopupGiftCode.ts

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
var Global_1 = require("../../Loading/src/Global");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGiftCode = /** @class */ (function (_super) {
    __extends(PopupGiftCode, _super);
    function PopupGiftCode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.edbCode = null;
        return _this;
    }
    PopupGiftCode.prototype.start = function () {
    };
    PopupGiftCode.prototype.show = function () {
        _super.prototype.show.call(this);
        this.edbCode.string = "";
    };
    PopupGiftCode.prototype.actSubmit = function () {
        var code = this.edbCode.string.trim();
        if (code == "") {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_blank'));
            return;
        }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "19", un: Configs_1.default.Login.Nickname, giftcode: code }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            //Utils.Log("Giftcode:" + JSON.stringify(res));
            if (res.success == true) {
                Configs_1.default.Login.Coin = res.currentMoney;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_success'));
            }
            else {
                if (res.errorCode == 1) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_expired'));
                }
                else if (res.errorCode == 2) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_expired'));
                }
                else if (res.errorCode == 3) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_not_suitable'));
                }
                else if (res.errorCode == 4) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_used'));
                }
                else if (res.errorCode == 5) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_used_event'));
                }
                else if (res.errorCode == 6) {
                    App_1.default.instance.alertDialog.showMsgWithOnDismissed(App_1.default.instance.getTextLang('txt_giftcode_check_phone'), function () {
                        Global_1.Global.LobbyController.actSecurity();
                    });
                }
                else if (res.errorCode == 100) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_giftcode_incorrect'));
                }
                else {
                    App_1.default.instance.alertDialog.showMsg(res.message);
                }
            }
        });
    };
    __decorate([
        property(cc.EditBox)
    ], PopupGiftCode.prototype, "edbCode", void 0);
    PopupGiftCode = __decorate([
        ccclass
    ], PopupGiftCode);
    return PopupGiftCode;
}(Dialog_1.default));
exports.default = PopupGiftCode;

cc._RF.pop();