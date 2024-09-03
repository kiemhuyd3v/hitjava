
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabPopupBank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ffb3akOHVAkoulEtF9Q8f7', 'TabPopupBank');
// Lobby/LobbyScript/Payment/TabPopupBank.ts

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
exports.TabPopupBank = void 0;
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var Lobby_Cmd_1 = require("../Lobby.Cmd");
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var MiniGameNetworkClient_1 = require("../Script/networks/MiniGameNetworkClient");
var BaseTabShop_1 = require("./BaseTabShop");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabPopupBank = /** @class */ (function (_super) {
    __extends(TabPopupBank, _super);
    function TabPopupBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBankNumber = null;
        _this.lblBankAccountName = null;
        _this.lblBankAddress = null;
        _this.lblTransNote = null;
        _this.dropdownBank = null;
        _this.edbAmount = null;
        _this._listBank = [];
        return _this;
    }
    TabPopupBank.prototype.start = function () {
        var _this = this;
        this.lblTransNote.string = App_1.default.instance.getTextLang('txt_bank_transfer_note_9') + Configs_1.default.Login.Nickname;
        App_1.default.instance.showLoading(true);
        this.dropdownBank = this.dropdownBank.getComponent("DropDown");
        Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err == null) {
                if (res.list_bank === undefined || res.list_bank.length == 0) {
                    return;
                }
                var listBank_1 = res.list_bank;
                _this._listBank = listBank_1;
                var bankName = [{ optionString: App_1.default.instance.getTextLang("txt_select_bank") }];
                for (var i = 0; i < listBank_1.length; i++) {
                    bankName.push({ optionString: listBank_1[i].bankName });
                }
                _this.dropdownBank.clearOptionDatas();
                _this.dropdownBank.addOptionDatas(bankName);
                _this.dropdownBank.selectedIndex = 0;
                _this.dropdownBank.setCallBack(function (idx) {
                    if (idx > 0) {
                        _this.lblBankAddress.string = listBank_1[idx - 1].bankAddress;
                        _this.lblBankAccountName.string = listBank_1[idx - 1].bankAccountName;
                        _this.lblBankNumber.string = listBank_1[idx - 1].bankNumber;
                    }
                    else {
                        _this.lblBankAddress.string = "";
                        _this.lblBankAccountName.string = "";
                        _this.lblBankNumber.string = "";
                    }
                });
            }
        });
    };
    TabPopupBank.prototype.show = function (data) {
        var _this = this;
        //Utils.Log("showTabBank:" + JSON.stringify(data));
        var listBank = data.providerConfig.banks;
        this._listBank = listBank;
        var bankName = [{ optionString: App_1.default.instance.getTextLang("txt_select_bank") }];
        for (var i = 0; i < listBank.length; i++) {
            bankName.push({ optionString: listBank[i].name });
        }
        this.dropdownBank.clearOptionDatas();
        this.dropdownBank.addOptionDatas(bankName);
        this.dropdownBank.selectedIndex = 0;
        this.dropdownBank.setCallBack(function (idx) {
            if (idx > 0) {
                _this.lblBankAddress.string = listBank[idx - 1].bankAddress;
                _this.lblBankAccountName.string = listBank[idx - 1].bankAccountName;
                _this.lblBankNumber.string = listBank[idx - 1].bankNumber;
            }
            else {
                _this.lblBankAddress.string = "";
                _this.lblBankAccountName.string = "";
                _this.lblBankNumber.string = "";
            }
        });
    };
    TabPopupBank.prototype.submit = function () {
        var ddBank = this.dropdownBank.selectedIndex;
        if (ddBank == 0) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_select_bank1"));
            return;
        }
        var bankSelected = this._listBank[ddBank - 1].bankNumber;
        var amount = Utils_1.default.formatEditBox(this.edbAmount.string);
        if (amount < 10000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_cash_in_min') + "10.000");
            return;
        }
        if (amount > 200000) {
            App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_cash_in_max') + "200.000");
            return;
        }
        var self = this;
        App_1.default.instance.showLoading(true, -1);
        var request = {
            "c": 2003,
            "fn": bankSelected,
            "am": amount,
            "nn": Configs_1.default.Login.Nickname,
            "at": Configs_1.default.Login.AccessToken,
            "pn": "manualbank"
        };
        //Utils.Log("request sieutoc:" + JSON.stringify(request) + " : tabWell:" + self.tabWell);
        Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
            App_1.default.instance.showLoading(false);
            //Utils.Log(" res:" + JSON.stringify(res));
            if (res.success == true) {
                //Utils.Log("princePay:" + JSON.stringify(res));
            }
            else {
                App_1.default.instance.ShowAlertDialog(res.message);
            }
        });
        App_1.default.instance.showLoading(true);
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqDepositBank(bankSelected, amount));
    };
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblBankAccountName", void 0);
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblBankAddress", void 0);
    __decorate([
        property(cc.Label)
    ], TabPopupBank.prototype, "lblTransNote", void 0);
    __decorate([
        property(cc.Node)
    ], TabPopupBank.prototype, "dropdownBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabPopupBank.prototype, "edbAmount", void 0);
    TabPopupBank = __decorate([
        ccclass
    ], TabPopupBank);
    return TabPopupBank;
}(BaseTabShop_1.default));
exports.TabPopupBank = TabPopupBank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJQb3B1cEJhbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUNuRCxrREFBNkM7QUFDN0MsMENBQStCO0FBQy9CLDRDQUF1QztBQUN2QyxnREFBMkM7QUFDM0Msa0ZBQTZFO0FBQzdFLDZDQUF3QztBQUVsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFrQyxnQ0FBVztJQUE3QztRQUFBLHFFQWtKQztRQTlJRyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQix3QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFJOUIsa0JBQVksR0FBUyxJQUFJLENBQUM7UUFHMUIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQUcsRUFBRSxDQUFDOztJQThIM0IsQ0FBQztJQTVIRyw0QkFBSyxHQUFMO1FBQUEsaUJBeUNDO1FBeENHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDBCQUEwQixDQUFDLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3pHLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsY0FBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsVUFBQyxHQUFHLEVB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UUFDL0IsK0JBQXFCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQUcsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQXpJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NERBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ2E7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDVztJQUk5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ1E7SUFsQnBCLFlBQVk7UUFEeEIsT0FBTztPQUNLLFlBQVksQ0FrSnhCO0lBQUQsbUJBQUM7Q0FsSkQsQUFrSkMsQ0FsSmlDLHFCQUFXLEdBa0o1QztBQWxKWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi4vTG9iYnkuQ21kXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgQmFzZVRhYlNob3AgZnJvbSBcIi4vQmFzZVRhYlNob3BcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVGFiUG9wdXBCYW5rIGV4dGVuZHMgQmFzZVRhYlNob3Age1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmFua051bWJlcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCYW5rQWNjb3VudE5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmFua0FkZHJlc3M6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUcmFuc05vdGU6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZHJvcGRvd25CYW5rOiBOb2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkYkFtb3VudDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9saXN0QmFuayA9IFtdO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubGJsVHJhbnNOb3RlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JhbmtfdHJhbnNmZXJfbm90ZV85JykgKyBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG5cblxuICAgICAgICB0aGlzLmRyb3Bkb3duQmFuayA9IHRoaXMuZHJvcGRvd25CYW5rLmdldENvbXBvbmVudChcIkRyb3BEb3duXCIpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEzMCB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmxpc3RfYmFuayA9PT0gdW5kZWZpbmVkIHx8IHJlcy5saXN0X2JhbmsubGVuZ3RoID09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RCYW5rID0gcmVzLmxpc3RfYmFuaztcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0QmFuayA9IGxpc3RCYW5rO1xuXG5cbiAgICAgICAgICAgICAgICBsZXQgYmFua05hbWUgPSBbeyBvcHRpb25TdHJpbmc6IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9zZWxlY3RfYmFua1wiKSB9XTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RCYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhbmtOYW1lLnB1c2goeyBvcHRpb25TdHJpbmc6IGxpc3RCYW5rW2ldLmJhbmtOYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duQmFuay5jbGVhck9wdGlvbkRhdGFzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bkJhbmsuYWRkT3B0aW9uRGF0YXMoYmFua05hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CYW5rLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25CYW5rLnNldENhbGxCYWNrKChpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua0FkZHJlc3Muc3RyaW5nID0gbGlzdEJhbmtbaWR4IC0gMV0uYmFua0FkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJhbmtBY2NvdW50TmFtZS5zdHJpbmcgPSBsaXN0QmFua1tpZHggLSAxXS5iYW5rQWNjb3VudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJhbmtOdW1iZXIuc3RyaW5nID0gbGlzdEJhbmtbaWR4IC0gMV0uYmFua051bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua0FkZHJlc3Muc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua0FjY291bnROYW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJhbmtOdW1iZXIuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHNob3coZGF0YSkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJzaG93VGFiQmFuazpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgbGV0IGxpc3RCYW5rID0gZGF0YS5wcm92aWRlckNvbmZpZy5iYW5rcztcbiAgICAgICAgdGhpcy5fbGlzdEJhbmsgPSBsaXN0QmFuaztcblxuXG4gICAgICAgIGxldCBiYW5rTmFtZSA9IFt7IG9wdGlvblN0cmluZzogQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3NlbGVjdF9iYW5rXCIpIH1dO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RCYW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBiYW5rTmFtZS5wdXNoKHsgb3B0aW9uU3RyaW5nOiBsaXN0QmFua1tpXS5uYW1lIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25CYW5rLmNsZWFyT3B0aW9uRGF0YXMoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bkJhbmsuYWRkT3B0aW9uRGF0YXMoYmFua05hbWUpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duQmFuay5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5kcm9wZG93bkJhbmsuc2V0Q2FsbEJhY2soKGlkeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlkeCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibEJhbmtBZGRyZXNzLnN0cmluZyA9IGxpc3RCYW5rW2lkeCAtIDFdLmJhbmtBZGRyZXNzO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua0FjY291bnROYW1lLnN0cmluZyA9IGxpc3RCYW5rW2lkeCAtIDFdLmJhbmtBY2NvdW50TmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibEJhbmtOdW1iZXIuc3RyaW5nID0gbGlzdEJhbmtbaWR4IC0gMV0uYmFua051bWJlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxCYW5rQWRkcmVzcy5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua0FjY291bnROYW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxCYW5rTnVtYmVyLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGRkQmFuayA9IHRoaXMuZHJvcGRvd25CYW5rLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgIGlmIChkZEJhbmsgPT0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X3NlbGVjdF9iYW5rMVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYmFua1NlbGVjdGVkID0gdGhpcy5fbGlzdEJhbmtbZGRCYW5rIC0gMV0uYmFua051bWJlcjtcblxuICAgICAgICBsZXQgYW1vdW50ID0gVXRpbHMuZm9ybWF0RWRpdEJveCh0aGlzLmVkYkFtb3VudC5zdHJpbmcpO1xuICAgICAgICBpZiAoYW1vdW50IDwgMTAwMDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2FzaF9pbl9taW4nKSArIFwiMTAuMDAwXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbW91bnQgPiAyMDAwMDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2FzaF9pbl9tYXgnKSArIFwiMjAwLjAwMFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAgICBcImNcIjogMjAwMyxcbiAgICAgICAgICAgIFwiZm5cIjogYmFua1NlbGVjdGVkLFxuICAgICAgICAgICAgXCJhbVwiOiBhbW91bnQsXG4gICAgICAgICAgICBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsXG4gICAgICAgICAgICBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sXG4gICAgICAgICAgICBcInBuXCI6IFwibWFudWFsYmFua1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgIC8vVXRpbHMuTG9nKFwicmVxdWVzdCBzaWV1dG9jOlwiICsgSlNPTi5zdHJpbmdpZnkocmVxdWVzdCkgKyBcIiA6IHRhYldlbGw6XCIgKyBzZWxmLnRhYldlbGwpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHJlcXVlc3QsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcIiByZXM6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChyZXMuc3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwicHJpbmNlUGF5OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2cocmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFEZXBvc2l0QmFuayhiYW5rU2VsZWN0ZWQsIGFtb3VudCkpO1xuICAgIH1cblxuXG5cblxufSJdfQ==