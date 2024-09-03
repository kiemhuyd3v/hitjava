
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupGiftCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEdpZnRDb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCxtREFBa0Q7QUFDbEQsK0NBQTBDO0FBQzFDLDJDQUFzQztBQUN0Qyx1RUFBa0U7QUFDbEUsaURBQTRDO0FBR3RDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFNO0lBQWpEO1FBQUEscUVBNkRDO1FBMURHLGFBQU8sR0FBZSxJQUFJLENBQUM7O0lBMEQvQixDQUFDO0lBeERHLDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEMsSUFBSSxJQUFJLElBQUksRUFBRSxFQUFFO1lBQ1osYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUNqRixPQUFPO1NBQ1Y7UUFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFF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Q29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0dsb2JhbFwiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBHaWZ0Q29kZSBleHRlbmRzIERpYWxvZyB7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJDb2RlOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLmVkYkNvZGUuc3RyaW5nID0gXCJcIjtcbiAgICB9XG5cbiAgICBhY3RTdWJtaXQoKSB7XG4gICAgICAgIGxldCBjb2RlID0gdGhpcy5lZGJDb2RlLnN0cmluZy50cmltKCk7XG4gICAgICAgIGlmIChjb2RlID09IFwiXCIpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2dpZnRjb2RlX2JsYW5rJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IGM6IFwiMTlcIiwgdW46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGdpZnRjb2RlOiBjb2RlIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJHaWZ0Y29kZTpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZ2lmdGNvZGVfc3VjY2VzcycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3JDb2RlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZ2lmdGNvZGVfZXhwaXJlZCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmVycm9yQ29kZSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2dpZnRjb2RlX2V4cGlyZWQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5lcnJvckNvZGUgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9naWZ0Y29kZV9ub3Rfc3VpdGFibGUnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5lcnJvckNvZGUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9naWZ0Y29kZV91c2VkJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXMuZXJyb3JDb2RlID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfZ2lmdGNvZGVfdXNlZF9ldmVudCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmVycm9yQ29kZSA9PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnV2l0aE9uRGlzbWlzc2VkKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2dpZnRjb2RlX2NoZWNrX3Bob25lJyksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbC5Mb2JieUNvbnRyb2xsZXIuYWN0U2VjdXJpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlcy5lcnJvckNvZGUgPT0gMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2dpZnRjb2RlX2luY29ycmVjdCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKHJlcy5tZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19