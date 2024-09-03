
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupMomo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cE1vbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUk1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW1PQztRQWpPRyxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFJbkMsY0FBUSxHQUFlLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWUsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEIsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLHFCQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGtCQUFZLEdBQUcsSUFBSSxDQUFDOztJQTBNaEMsQ0FBQztJQXpNRywyQkFBSSxHQUFKLFVBQUssSUFBSSxFQUFFLFlBQVk7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJ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bURBQ1E7SUFyQlQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQW1PaEM7SUFBRCxtQkFBQztDQW5PRCxBQW1PQyxDQW5PeUMsRUFBRSxDQUFDLFNBQVMsR0FtT3JEO2tCQW5Pb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBMb2JieUNob3NlQmFuayBmcm9tIFwiLi9Mb2JieUNob3NlQmFua1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cE1vbW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eVxuICAgIHRhYldlbGw6IHN0cmluZyA9IFwiXCI7XG4gICAgQHByb3BlcnR5KExvYmJ5Q2hvc2VCYW5rKVxuICAgIGxvYmJ5Q2hvc2VCYW5rOiBMb2JieUNob3NlQmFuayA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBidG5DaG9zZUJhbms6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQ2hvc2VCYW5rOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXROYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXRNb25leTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blhhY05oYW46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQXJyb3c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBkYXRhID0gbnVsbDtcbiAgICBwcml2YXRlIGRhdGFCYW5rQ2hvc2luZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBwcm92aWRlck5hbWUgPSBudWxsO1xuICAgIHNob3coZGF0YSwgcHJvdmlkZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm92aWRlck5hbWUgPSBwcm92aWRlck5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGFCYW5rQ2hvc2luZyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5zaG93QmFua0Nob3NpbmcoKTtcblxuXG4gICAgfVxuXG4gICAgb25Gb3JtYXROdW1iZXIoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlckJhbmsodGhpcy5lZGl0TW9uZXkuc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIG9uRm9ybWF0TmFtZSgpIHtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROYW1lQmFuayh0aGlzLmVkaXROYW1lLnN0cmluZykudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgc2hvd0JhbmtDaG9zaW5nKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcInNob3dCYW5rQ2hvc2luZzpcIiArIHNlbGYudGFiV2VsbCk7XG4gICAgICAgIGlmIChzZWxmLnRhYldlbGwgPT0gXCJwcmluY2VQYXlcIikge1xuICAgICAgICAgICAgdGhpcy5ub2RlQXJyb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVkaXROYW1lLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5Lm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICB0aGlzLmVkaXROYW1lLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blhhY05oYW4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkNob3NlQmFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhQmFua0Nob3NpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZUFycm93LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRNb25leS5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blhhY05oYW4ubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsuc3ByaXRlRnJhbWUgPSB0aGlzLnNmQ2hvc2VCYW5rO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blhhY05oYW4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVBcnJvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXROYW1lLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRNb25leS5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5YYWNOaGFuLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXROYW1lLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnRhYldlbGwgPT0gXCJjbGlja3BheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMuZGF0YUJhbmtDaG9zaW5nLmJhbmtfY29kZSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Nwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5idG5DaG9zZUJhbmsuc3ByaXRlRnJhbWUgPSBuZXdTcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnRuQ2hvc2VCYW5rLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMuZGF0YUJhbmtDaG9zaW5nLmltYWdlVXJsLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ0bkNob3NlQmFuay5zcHJpdGVGcmFtZSA9IG5ld1Nwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5idG5DaG9zZUJhbmsubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkJ0blhhY05oYW4oKSB7XG4gICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKTtcbiAgICAgICAgaWYgKHRoaXMucHJvdmlkZXJOYW1lID09IFwicGF5d2VsbFwiKSB7XG4gICAgICAgICAgICBpZiAobW9uZXkgPCAxMDAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21pblwiKSArIFwiIDEwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbmV5ID4gMzAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9tYXhcIikgKyBcIiAzMDAuMDAwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wcm92aWRlck5hbWUgPT0gXCJwcmluY2V3ZWxsXCIpIHtcbiAgICAgICAgICAgIGlmIChtb25leSA8IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9taW5cIikgKyBcIiAyMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbmV5ID4gMjAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21heFwiKSArIFwiIDIwLjAwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJvdmlkZXJOYW1lID09IFwiY2xpY2twYXlcIikge1xuICAgICAgICAgICAgaWYgKG1vbmV5IDwgMjAwMDAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9taW5cIikgKyBcIiAyMDAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb25leSA+IDMwMDAwMDAwMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWF4XCIpICsgXCIgMzAwLjAwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkaXROYW1lLnN0cmluZyA9PSBcIlwiIHx8IHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9hbGxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVkaXROYW1lLnN0cmluZy5pbmRleE9mKCcgJykgPT0gLTEpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9iYW5rX3RyYW5zZmVyX25vdGVfMTBcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRhYldlbGwgIT0gXCJwcmluY2VQYXlcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YUJhbmtDaG9zaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9pbnB1dF9hbGxcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlLCAtMSk7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgXCJjXCI6IDIwMDMsXG4gICAgICAgICAgICBcImZuXCI6IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmVkaXROYW1lLnN0cmluZy50cmltKCkpLFxuICAgICAgICAgICAgXCJhbVwiOiBtb25leSxcbiAgICAgICAgICAgIFwicHRcIjogNCxcbiAgICAgICAgICAgIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSxcbiAgICAgICAgICAgIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIFwicG5cIjogdGhpcy5wcm92aWRlck5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHNlbGYudGFiV2VsbCAhPSBcInByaW5jZVBheVwiKSB7XG4gICAgICAgICAgICByZXF1ZXN0W1wiYmNcIl0gPSB0aGlzLmRhdGFCYW5rQ2hvc2luZy5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYudGFiV2VsbCA9PSBcImNsaWNrcGF5XCIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RbXCJiY1wiXSA9IHRoaXMuZGF0YUJhbmtDaG9zaW5nLmNvZGU7XG4gICAgICAgIH1cbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCByZXF1ZXN0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGFiV2VsbCA9PSBcInByaW5jZVBheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5XZWJWaWV3KHVybC5wYXl1cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLnRhYldlbGwgPT0gXCJjbGlja3BheVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbldlYlZpZXcocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25CdG5DaG9zZUJhbmsoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYudGFiV2VsbCA9PSBcImNsaWNrcGF5XCIpIHtcbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNsaWNrUGF5UGF5bWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5pbml0KHNlbGYudGFiV2VsbCwgdGhpcy5kYXRhLmJhbmtzLCAoZGF0YUJhbmtDaG9zaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YUJhbmtDaG9zaW5nID0gZGF0YUJhbmtDaG9zaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICBcImNcIjogMjAxNCxcbiAgICAgICAgICAgICAgICAgICAgXCJwblwiOiB0aGlzLnByb3ZpZGVyTmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCByZXF1ZXN0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5DbGlja1BheVBheW1lbnQgPSBDb25maWdzLkxvZ2luLkxpc3RQYXltZW50WzNdLnByb3ZpZGVyQ29uZmlnLmJhbmtzID0gcmVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuaW5pdChzZWxmLnRhYldlbGwsIHRoaXMuZGF0YS5iYW5rcywgKGRhdGFCYW5rQ2hvc2luZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXRhQmFua0Nob3NpbmcgPSBkYXRhQmFua0Nob3Npbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuaW5pdChzZWxmLnRhYldlbGwsIHRoaXMuZGF0YS5iYW5rcywgKGRhdGFCYW5rQ2hvc2luZykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YUJhbmtDaG9zaW5nID0gZGF0YUJhbmtDaG9zaW5nO1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0JhbmtDaG9zaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19