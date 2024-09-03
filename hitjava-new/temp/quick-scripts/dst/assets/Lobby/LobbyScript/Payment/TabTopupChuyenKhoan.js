
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupChuyenKhoan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40ad3OrXYlJD6H8dWwm5hj5', 'TabTopupChuyenKhoan');
// Lobby/LobbyScript/Payment/TabTopupChuyenKhoan.ts

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
var DropDown_1 = require("../../../Loading/Add-on/DropDown/Script/DropDown");
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
        _this.dropCard = null;
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
    TabTopupChuyenKhoan.prototype.onFormatNumber = function () {
        this.editMoney.string = Utils_1.default.formatNumberBank(this.editMoney.string).toUpperCase();
    };
    TabTopupChuyenKhoan.prototype.onFormatName = function () {
        this.editName.string = Utils_1.default.formatNameBank(this.editName.string).toUpperCase();
        if (cc.sys.isBrowser) {
            this.editName.focus();
        }
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
    TabTopupChuyenKhoan.prototype.hide = function () {
        this.node.active = false;
    };
    TabTopupChuyenKhoan.prototype.onBtnXacNhan = function () {
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
            "pt": 1,
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
            //  cc.log("Data Topup Chuyen khoan:", self.data);
            this.lobbyChoseBank.init(self.tabWell, self.data.banks, function (dataBankChosing) {
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
    __decorate([
        property(DropDown_1.default)
    ], TabTopupChuyenKhoan.prototype, "dropCard", void 0);
    TabTopupChuyenKhoan = __decorate([
        ccclass
    ], TabTopupChuyenKhoan);
    return TabTopupChuyenKhoan;
}(cc.Component));
exports.default = TabTopupChuyenKhoan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cENodXllbktob2FuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLDZFQUF3RTtBQUN4RSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLDRDQUF1QztBQUN2QyxnREFBMkM7QUFDM0MsbURBQThDO0FBRXhDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFZO0lBQTdEO1FBQUEscUVBeU9DO1FBdk9HLGFBQU8sR0FBVyxFQUFFLENBQUM7UUFFckIsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUluQyxjQUFRLEdBQWUsSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRW5CLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUE2TS9CLENBQUM7SUExTUcsa0NBQUksR0FBSixVQUFLLElBQUksRUFBRSxZQUFZO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENB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QUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzBEQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ1M7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDUTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxrQkFBUSxDQUFDO3lEQUNPO0lBeEJULG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBeU92QztJQUFELDBCQUFDO0NBek9ELEFBeU9DLENBek9nRCxFQUFFLENBQUMsU0FBUyxHQXlPNUQ7a0JBek9vQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IERyb3BEb3duIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL0FkZC1vbi9Ecm9wRG93bi9TY3JpcHQvRHJvcERvd25cIjtcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IExvYmJ5Q2hvc2VCYW5rIGZyb20gXCIuL0xvYmJ5Q2hvc2VCYW5rXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cENodXllbktob2FuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHlcbiAgICB0YWJXZWxsOiBzdHJpbmcgPSBcIlwiO1xuICAgIEBwcm9wZXJ0eShMb2JieUNob3NlQmFuaylcbiAgICBsb2JieUNob3NlQmFuazogTG9iYnlDaG9zZUJhbmsgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgYnRuQ2hvc2VCYW5rOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZkNob3NlQmFuazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0TmFtZTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0TW9uZXk6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5YYWNOaGFuOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUFycm93OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShEcm9wRG93bilcbiAgICBkcm9wQ2FyZDogRHJvcERvd24gPSBudWxsO1xuXG4gICAgcHVibGljIGRhdGEgPSBudWxsO1xuICAgIHB1YmxpYyBkYXRhQmFua0Nob3NpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBwcm92aWRlck5hbWUgPSBudWxsO1xuICAgIFxuICAgIFxuICAgIHNob3coZGF0YSwgcHJvdmlkZXJOYW1lKSB7XG4gICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLnNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm92aWRlck5hbWUgPSBwcm92aWRlck5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGFCYW5rQ2hvc2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd0JhbmtDaG9zaW5nKCk7XG4gICAgfVxuXG4gICAgb25Gb3JtYXROdW1iZXIoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlckJhbmsodGhpcy5lZGl0TW9uZXkuc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIG9uRm9ybWF0TmFtZSgpIHtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROYW1lQmFuayh0aGlzLmVkaXROYW1lLnN0cmluZykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93QmFua0Nob3NpbmcoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYudGFiV2VsbCA9PSBcInByaW5jZVBheVwiKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVBcnJvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5idG5YYWNOaGFuLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb25leS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFCYW5rQ2hvc2luZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlQXJyb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXROYW1lLm5vZGUub3BhY2l0eSA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5Lm5vZGUub3BhY2l0eSA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXROYW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNob3NlQmFuay5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZDaG9zZUJhbms7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZUFycm93LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5Lm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blhhY05oYW4ubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5YYWNOaGFuLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYudGFiV2VsbCA9PSBcImNsaWNrcGF5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy5kYXRhQmFua0Nob3NpbmcuYmFua19jb2RlLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ0bkNob3NlQmFuay5zcHJpdGVGcmFtZSA9IG5ld1Nwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5idG5DaG9zZUJhbmsubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy5kYXRhQmFua0Nob3NpbmcuaW1hZ2VVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdTcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnRuQ2hvc2VCYW5rLnNwcml0ZUZyYW1lID0gbmV3U3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ0bkNob3NlQmFuay5ub2RlLnNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQnRuWGFjTmhhbigpIHtcbiAgICAgICAgdmFyIG1vbmV5ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkaXRNb25leS5zdHJpbmcpO1xuICAgICAgICBpZiAodGhpcy5wcm92aWRlck5hbWUgPT0gXCJwYXl3ZWxsXCIpIHtcbiAgICAgICAgICAgIGlmIChtb25leSA8IDEwMDAwMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWluXCIpICsgXCIgMTAwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9uZXkgPiAzMDAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21heFwiKSArIFwiIDMwMC4wMDAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3ZpZGVyTmFtZSA9PSBcInByaW5jZXdlbGxcIikge1xuICAgICAgICAgICAgaWYgKG1vbmV5IDwgNTAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21pblwiKSArIFwiIDUwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9uZXkgPiAzMDAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21heFwiKSArIFwiIDMwMC4wMDAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByb3ZpZGVyTmFtZSA9PSBcImNsaWNrcGF5XCIpIHtcbiAgICAgICAgICAgIGlmIChtb25leSA8IDIwMDAwMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWluXCIpICsgXCIgMjAwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9uZXkgPiAzMDAwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21heFwiKSArIFwiIDMwMC4wMDAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGl0TmFtZS5zdHJpbmcgPT0gXCJcIiB8fCB0aGlzLmVkaXRNb25leS5zdHJpbmcgPT0gXCJcIikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfYWxsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZGl0TmFtZS5zdHJpbmcuaW5kZXhPZignICcpID09IC0xKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfYmFua190cmFuc2Zlcl9ub3RlXzEwXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YWJXZWxsICE9IFwicHJpbmNlUGF5XCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGFCYW5rQ2hvc2luZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfYWxsXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICBsZXQgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgIFwiY1wiOiAyMDAzLFxuICAgICAgICAgICAgXCJmblwiOiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpKSxcbiAgICAgICAgICAgIFwiYW1cIjogbW9uZXksXG4gICAgICAgICAgICBcInB0XCI6IDEsXG4gICAgICAgICAgICBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsXG4gICAgICAgICAgICBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBcInBuXCI6IHRoaXMucHJvdmlkZXJOYW1lXG4gICAgICAgIH07XG4gICAgICAgIGlmIChzZWxmLnRhYldlbGwgIT0gXCJwcmluY2VQYXlcIikge1xuICAgICAgICAgICAgcmVxdWVzdFtcImJjXCJdID0gdGhpcy5kYXRhQmFua0Nob3Npbmcua2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxmLnRhYldlbGwgPT0gXCJjbGlja3BheVwiKSB7XG4gICAgICAgICAgICByZXF1ZXN0W1wiYmNcIl0gPSB0aGlzLmRhdGFCYW5rQ2hvc2luZy5jb2RlO1xuICAgICAgICB9XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcmVxdWVzdCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzID09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnRhYldlbGwgPT0gXCJwcmluY2VQYXlcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuV2ViVmlldyh1cmwucGF5dXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi50YWJXZWxsID09IFwiY2xpY2twYXlcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gSlNPTi5wYXJzZShyZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5vcGVuVVJMKHVybC5yZWRpcmVjdF91cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5XZWJWaWV3KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgb25CdG5DaG9zZUJhbmsoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYudGFiV2VsbCA9PSBcImNsaWNrcGF5XCIpIHtcbiAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNsaWNrUGF5UGF5bWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5pbml0KHNlbGYudGFiV2VsbCwgdGhpcy5kYXRhLmJhbmtzLCAoZGF0YUJhbmtDaG9zaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YUJhbmtDaG9zaW5nID0gZGF0YUJhbmtDaG9zaW5nO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgICAgICBcImNcIjogMjAxNCxcbiAgICAgICAgICAgICAgICAgICAgXCJwblwiOiB0aGlzLnByb3ZpZGVyTmFtZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCByZXF1ZXN0LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5DbGlja1BheVBheW1lbnQgPSBDb25maWdzLkxvZ2luLkxpc3RQYXltZW50WzNdLnByb3ZpZGVyQ29uZmlnLmJhbmtzID0gcmVzO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuaW5pdChzZWxmLnRhYldlbGwsIHRoaXMuZGF0YS5iYW5rcywgKGRhdGFCYW5rQ2hvc2luZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXRhQmFua0Nob3NpbmcgPSBkYXRhQmFua0Nob3Npbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJEYXRhIFRvcHVwIENodXllbiBraG9hbjpcIiwgc2VsZi5kYXRhKTtcbiAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuaW5pdChzZWxmLnRhYldlbGwsIHNlbGYuZGF0YS5iYW5rcywgKGRhdGFCYW5rQ2hvc2luZykgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuZGF0YUJhbmtDaG9zaW5nID0gZGF0YUJhbmtDaG9zaW5nO1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0JhbmtDaG9zaW5nKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19