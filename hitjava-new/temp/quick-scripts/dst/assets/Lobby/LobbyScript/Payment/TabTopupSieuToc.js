
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupSieuToc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cFNpZXVUb2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUkxQztJQUFpRCx1Q0FBWTtJQUE3RDtRQUFBLHFFQXlPQztRQXZPRyxhQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsb0JBQWMsR0FBZ0IsSUFBSSxDQUFDO1FBRW5DLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUluQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsZ0JBQVUsR0FBVyxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFTLElBQUksQ0FBQztRQUVmLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixrQkFBWSxHQUFHLElBQUksQ0FBQzs7SUFnTmhDLENBQUM7SUEvTUcsa0NBQUksR0FBSixVQUFLLElBQUksRUFBQyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIs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QUFFLENBQUMsT0FBTyxDQUFDOzBEQUNLO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDSztJQXJCTixtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQXlPdkM7SUFBRCwwQkFBQztDQXpPRCxBQXlPQyxDQXpPZ0QsRUFBRSxDQUFDLFNBQVMsR0F5TzVEO2tCQXpPb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IExvYmJ5Q2hvc2VCYW5rIGZyb20gXCIuL0xvYmJ5Q2hvc2VCYW5rXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cENodXllbktob2FuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHlcbiAgICB0YWJXZWxsID0gXCJcIjtcbiAgICBAcHJvcGVydHkoTG9iYnlDaG9zZUJhbmspXG4gICAgbG9iYnlDaG9zZUJhbms6TG9iYnlDaG9zZUJhbms9bnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJ0bkNob3NlQmFuazogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZDaG9zZUJhbms6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXROYW1lOiBjYy5FZGl0Qm94PW51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0TW9uZXk6Y2MuRWRpdEJveD1udWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5YYWNOaGFuOmNjLkJ1dHRvbj1udWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUFycm93OmNjLk5vZGU9bnVsbDtcbiAgIFxuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBkYXRhQmFua0Nob3NpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgcHJvdmlkZXJOYW1lID0gbnVsbDtcbiAgICBzaG93KGRhdGEscHJvdmlkZXJOYW1lKXtcbiAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsuc3ByaXRlRnJhbWUgPSBudWxsO1xuICAgICAgICB0aGlzLnByb3ZpZGVyTmFtZSA9IHByb3ZpZGVyTmFtZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMuZGF0YUJhbmtDaG9zaW5nID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2hvd0JhbmtDaG9zaW5nKCk7XG5cbiAgICAgICBcbiAgICB9XG5cbiAgICBzaG93QmFua0Nob3NpbmcoKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZihzZWxmLnRhYldlbGwgPT0gXCJwcmluY2VQYXlcIil7XG4gICAgICAgICAgICB0aGlzLm5vZGVBcnJvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5idG5YYWNOaGFuLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb25leS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYodGhpcy5kYXRhQmFua0Nob3NpbmcgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlQXJyb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXROYW1lLm5vZGUub3BhY2l0eSA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5Lm5vZGUub3BhY2l0eSA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXROYW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNob3NlQmFuay5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZDaG9zZUJhbms7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlQXJyb3cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRNb25leS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blhhY05oYW4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZihzZWxmLnRhYldlbGwgPT0gXCJjbGlja3BheVwiKXtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy5kYXRhQmFua0Nob3NpbmcuYmFua19sb2dvLCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJ0bkNob3NlQmFuay5zcHJpdGVGcmFtZSA9IG5ld1Nwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5idG5DaG9zZUJhbmsubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh0aGlzLmRhdGFCYW5rQ2hvc2luZy5pbWFnZVVybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1Nwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5idG5DaG9zZUJhbmsuc3ByaXRlRnJhbWUgPSBuZXdTcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYnRuQ2hvc2VCYW5rLm5vZGUuc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKCl7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkZvcm1hdE51bWJlcigpe1xuICAgICAgICB0aGlzLmVkaXRNb25leS5zdHJpbmc9IFV0aWxzLmZvcm1hdE51bWJlckJhbmsodGhpcy5lZGl0TW9uZXkuc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cbiAgICBcbiAgICBvbkZvcm1hdE5hbWUoKXtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmc9IFV0aWxzLmZvcm1hdE5hbWVCYW5rKHRoaXMuZWRpdE5hbWUuc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5YYWNOaGFuKCl7XG4gICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwicHJvdmlkZXJOYW1lOlwiK3RoaXMucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgaWYodGhpcy5wcm92aWRlck5hbWUgPT0gXCJwYXl3ZWxsXCIpe1xuICAgICAgICAgICAgaWYobW9uZXkgPCAxMDAwMDApe1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWluXCIpK1wiIDEwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYobW9uZXkgPiAzMDAwMDAwMDApe1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWF4XCIpK1wiIDMwMC4wMDAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMucHJvdmlkZXJOYW1lID09IFwicHJpbmNld2VsbFwiKXtcbiAgICAgICAgICAgIGlmKG1vbmV5IDwgNTAwMDApe1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWluXCIpK1wiIDUwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihtb25leSA+IDMwMDAwMDAwMCl7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9tYXhcIikrXCIgMzAwLjAwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5wcm92aWRlck5hbWUgPT0gXCJjbGlja3BheVwiKXtcbiAgICAgICAgICAgIGlmKG1vbmV5IDwgMjAwMDAwKXtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21pblwiKStcIiAyMDAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKG1vbmV5ID4gMzAwMDAwMDAwKXtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21heFwiKStcIiAzMDAuMDAwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuZWRpdE5hbWUuc3RyaW5nID09IFwiXCIgfHwgdGhpcy5lZGl0TW9uZXkuc3RyaW5nID09IFwiXCIpe1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfYWxsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmVkaXROYW1lLnN0cmluZy5pbmRleE9mKCcgJykgPT0gLTEpe1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2JhbmtfdHJhbnNmZXJfbm90ZV8xMFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50YWJXZWxsICE9IFwicHJpbmNlUGF5XCIpe1xuICAgICAgICAgICAgaWYodGhpcy5kYXRhQmFua0Nob3NpbmcgPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfYWxsXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSwtMSk7XG4gICAgICAgIHZhciByZXF1ZXN0ID0geyBcbiAgICAgICAgICAgIFwiY1wiOiAyMDAzLFxuICAgICAgICAgICAgXCJmblwiOiBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpKSxcbiAgICAgICAgICAgIFwiYW1cIjogbW9uZXksXG4gICAgICAgICAgICBcInB0XCI6MCxcbiAgICAgICAgICAgIFwibm5cIjpDb25maWdzLkxvZ2luLk5pY2tuYW1lLFxuICAgICAgICAgICAgXCJhdFwiOkNvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBcInBuXCI6dGhpcy5wcm92aWRlck5hbWUgfTtcbiAgICAgICAgICAgIGlmKHNlbGYudGFiV2VsbCAhPSBcInByaW5jZVBheVwiKXtcbiAgICAgICAgICAgICAgICByZXF1ZXN0W1wiYmNcIl0gPSAgdGhpcy5kYXRhQmFua0Nob3Npbmcua2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoc2VsZi50YWJXZWxsID09IFwiY2xpY2twYXlcIil7XG4gICAgICAgICAgICAgICAgcmVxdWVzdFtcImJjXCJdID0gIHRoaXMuZGF0YUJhbmtDaG9zaW5nLmNvZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcmVxdWVzdCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiIHJlczpcIitKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmKHJlcy5zdWNjZXNzID09IHRydWUpe1xuICAgICAgICAgICAgICAgIGlmKHNlbGYudGFiV2VsbCA9PSBcInByaW5jZVBheVwiKXtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IEpTT04ucGFyc2UocmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbldlYlZpZXcodXJsLnBheXVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoc2VsZi50YWJXZWxsID09IFwiY2xpY2twYXlcIil7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwodXJsLnJlZGlyZWN0X3VybCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5vcGVuV2ViVmlldyh1cmwucmVkaXJlY3RfdXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5XZWJWaWV3KHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnRuQ2hvc2VCYW5rKCl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYoc2VsZi50YWJXZWxsID09IFwiY2xpY2twYXlcIil7XG4gICAgICAgICAgICBpZihDb25maWdzLkxvZ2luLkNsaWNrUGF5UGF5bWVudCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5Q2hvc2VCYW5rLmluaXQoc2VsZi50YWJXZWxsLHRoaXMuZGF0YS5iYW5rcywoZGF0YUJhbmtDaG9zaW5nKT0+e1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGFCYW5rQ2hvc2luZyA9IGRhdGFCYW5rQ2hvc2luZztcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QmFua0Nob3NpbmcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5Q2hvc2VCYW5rLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0geyBcbiAgICAgICAgICAgICAgICAgICAgXCJjXCI6IDIwMTQsXG4gICAgICAgICAgICAgICAgICAgIFwicG5cIjp0aGlzLnByb3ZpZGVyTmFtZSBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcmVxdWVzdCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ2xpY2tQYXlQYXltZW50ID0gIENvbmZpZ3MuTG9naW4uTGlzdFBheW1lbnRbM10ucHJvdmlkZXJDb25maWcuYmFua3MgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5Q2hvc2VCYW5rLmluaXQoc2VsZi50YWJXZWxsLHRoaXMuZGF0YS5iYW5rcywoZGF0YUJhbmtDaG9zaW5nKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXRhQmFua0Nob3NpbmcgPSBkYXRhQmFua0Nob3Npbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5pbml0KHNlbGYudGFiV2VsbCx0aGlzLmRhdGEuYmFua3MsKGRhdGFCYW5rQ2hvc2luZyk9PntcbiAgICAgICAgICAgICAgICBzZWxmLmRhdGFCYW5rQ2hvc2luZyA9IGRhdGFCYW5rQ2hvc2luZztcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvYmJ5Q2hvc2VCYW5rLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==