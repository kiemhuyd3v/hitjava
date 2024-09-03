
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/Lobby.PopupThes.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxMb2JieS5Qb3B1cFRoZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTZDO0FBQzdDLDBDQUErQjtBQUcvQixzREFBaUQ7QUFDakQsd0RBQW1EO0FBQ25ELDRDQUF1QztBQUN2QyxnREFBMkM7QUFDM0Msb0RBQStDO0FBQy9DLGtEQUE2QztBQUU3Qyw2REFBNkQ7QUFDN0QsaUZBQWlGO0FBQzNFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFNO0lBQTVDO1FBQUEscUVBb01DO1FBbE1HLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUduQyxtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQix3QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFFcEMsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBSTVCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRzlCLGVBQVMsR0FBZSxJQUFJLENBQUM7UUFDckIsZUFBUyxHQUFHLEVBQUUsQ0FBQzs7SUE0SzNCLENBQUM7SUExS0csd0JBQUssR0FBTDtRQUFBLGlCQXNFQztRQXJFRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3pELGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLGNBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFF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LE1BQU0sQ0FBQzs2Q0FDUztJQUUxQjtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNXO0lBSTVCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7a0RBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDUTtJQXZCWixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb001QjtJQUFELGVBQUM7Q0FwTUQsQUFvTUMsQ0FwTXFDLGdCQUFNLEdBb00zQztrQkFwTW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xyXG5pbXBvcnQgY21kIGZyb20gXCIuLi9Mb2JieS5DbWRcIjtcclxuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xyXG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50MiBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudDJcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0Ryb3Bkb3duXCI7XHJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9TUFV0aWxzXCI7XHJcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XHJcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xyXG4vL2ltcG9ydCBWZXJzaW9uQ29uZmlnIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1ZlcnNpb25Db25maWdcIjtcclxuLy9pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiQmFua3MgZXh0ZW5kcyBEaWFsb2cge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBpdGVtRmFjdG9yVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxibEJhbmtOdW1iZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxibEJhbmtBY2NvdW50TmFtZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsQmFua0FkZHJlc3M6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYmxUcmFuc05vdGU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuQ29weTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuQ29weU5EOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgXHJcblxyXG4gICAgQHByb3BlcnR5KERyb3Bkb3duKVxyXG4gICAgZHJvcGRvd25CYW5rOiBEcm9wZG93biA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZGJBbW91bnQ6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbGlzdEJhbmsgPSBbXTtcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmxibFRyYW5zTm90ZS5zdHJpbmcgPSBcIk5hcCBcIitDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEzMCB9LCAoZXJyLCByZXMpID0+IHtcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKGVyciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMubGlzdF9iYW5rID09PSB1bmRlZmluZWQgfHwgcmVzLmxpc3RfYmFuay5sZW5ndGggPT0gMCl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdEJhbmsgPSByZXMubGlzdF9iYW5rO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdEJhbmsgPSBsaXN0QmFuaztcclxuICAgICAgICAgICAgICAgIGxldCBiYW5rTmFtZSA9IFtcIkNo4buNbiBuZ8OibiBow6BuZ1wiXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0QmFuay5sZW5ndGg7IGkgKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbmtOYW1lLnB1c2gobGlzdEJhbmtbaV0uYmFua05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bkJhbmsuc2V0T3B0aW9ucyhiYW5rTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyb3Bkb3duQmFuay5zZXRPblZhbHVlQ2hhbmdlKChpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihpZHggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxibEJhbmtBZGRyZXNzLnN0cmluZyA9IGxpc3RCYW5rW2lkeCAtIDFdLmJhbmtBZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJhbmtBY2NvdW50TmFtZS5zdHJpbmcgPSBsaXN0QmFua1tpZHggLSAxXS5iYW5rQWNjb3VudE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua051bWJlci5zdHJpbmcgPSBsaXN0QmFua1tpZHggLSAxXS5iYW5rTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxibEJhbmtBZGRyZXNzLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua0FjY291bnROYW1lLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmFua051bWJlci5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHR0aGlzLmJ0bkNvcHkubm9kZS5vbihcImNsaWNrXCIsICgpPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYmxCYW5rTnVtYmVyLnN0cmluZy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBTUFV0aWxzLmNvcHlUb0NsaXBib2FyZCh0aGlzLmxibEJhbmtOdW1iZXIuc3RyaW5nKTtcclxuXHRcdFx0XHRcdEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwixJDDoyBzYW8gY2jDqXAgc+G7kSB0w6BpIGtob+G6o24uXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkNoxrBhIGPDsyBz4buRIHTDoGkga2hv4bqjbi5cIik7ICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cdFx0dGhpcy5idG5Db3B5TkQubm9kZS5vbihcImNsaWNrXCIsICgpPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYmxUcmFuc05vdGUuc3RyaW5nLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIFNQVXRpbHMuY29weVRvQ2xpcGJvYXJkKHRoaXMubGJsVHJhbnNOb3RlLnN0cmluZyk7XHJcblx0XHRcdFx0XHRBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIsSQw6Mgc2FvIGNow6lwIG7hu5lpIGR1bmcuXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkNoxrBhIGPDsyBu4buZaSBkdW5nLlwiKTsgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGxldCBkZEJhbmsgPSB0aGlzLmRyb3Bkb3duQmFuay5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGlmIChkZEJhbmsgPT0gMCkge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlZ1aSBsw7JuZyBjaOG7jW4gbmfDom4gaMOgbmcuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYW5rU2VsZWN0ZWQgPSB0aGlzLl9saXN0QmFua1tkZEJhbmsgLSAxXS5iYW5rTnVtYmVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBhbW91bnRTdCA9IHRoaXMuZWRiQW1vdW50LnN0cmluZy50cmltKCk7XHJcbiAgICAgICAgbGV0IGFtb3VudCA9IE51bWJlcihhbW91bnRTdCk7XHJcbiAgICAgICAgaWYoaXNOYU4oYW1vdW50KSB8fCBhbW91bnQgPD0gMCl7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gbuG6oXAga2jDtG5nIGjhu6NwIGzhu4dcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxRGVwb3NpdEJhbmsoYmFua1NlbGVjdGVkLCBhbW91bnQpKTtcclxuICAgIH1cclxuXHRvbkJ0blhhY05oYW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcclxuXHRcdFxyXG4gICAgICAgIFxyXG5cdFx0XHJcbiAgICAgICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGJBbW91bnQuc3RyaW5nKTtcclxuXHRcdFx0Ly9sZXQgZGRCYW5rID0gdGhpcy5kcm9wZG93bkJhbmsuZ2V0VmFsdWUoKTtcclxuXHRcdFx0bGV0IGRkQmFuayA9IHRoaXMuZHJvcGRvd25CYW5rLmdldFZhbHVlKCk7XHJcblx0XHRcdGlmIChkZEJhbmsgPT0gMSkge1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0dmFyIGJhbmsgPSBcIlZpZXRjb21CYW5rXCJcclxuICAgICAgICB9XHJcblx0XHRpZiAoZGRCYW5rID09IDIpIHtcclxuICAgICAgICAgICAgXHJcblx0XHRcdHZhciBiYW5rID0gXCJWaWV0aW5CYW5rXCJcclxuICAgICAgICB9XHJcblx0XHRpZiAoZGRCYW5rID09IDMpIHtcclxuICAgICAgICAgICAgXHJcblx0XHRcdHZhciBiYW5rID0gXCJUUEJhbmtcIlxyXG4gICAgICAgIH1cclxuXHRcdGlmIChkZEJhbmsgPT0gNCkge1xyXG4gICAgICAgICAgICBcclxuXHRcdFx0dmFyIGJhbmsgPSBcIlRlY2hjb21CYW5rXCJcclxuICAgICAgICB9XHJcblx0XHRpZiAoZGRCYW5rID09IDUpIHtcclxuICAgICAgICAgICAgXHJcblx0XHRcdHZhciBiYW5rID0gXCJCSURWXCJcclxuICAgICAgICB9XHJcblx0XHRpZiAoZGRCYW5rID09IDYpIHtcclxuICAgICAgICAgICAgXHJcblx0XHRcdHZhciBiYW5rID0gXCJTYWNvbUJhbmtcIlxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy92YXIgYmFua051bWJlciA9IHRoaXMuZWRpdEJhbmtOdW1iZXIuc3RyaW5nLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKG1vbmV5ID09IFwiXCIgfHwgZGRCYW5rID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2lucHV0X2FsbFwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vbmV5IDwgMTAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21pblwiKSArIFwiIDEwMC4wMDBcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1vbmV5ID4gMzAwMDAwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21heFwiKSArIFwiIDMwMC4wMDAuMDAwXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcclxuICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJjaHV5ZW4ga2hvYW46XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpKSk7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgXCJjXCI6IDIwMDMsXHJcbiAgICAgICAgICAgICAgICBcImZuXCI6IGVuY29kZVVSSUNvbXBvbmVudChkZEJhbmspLFxyXG4gICAgICAgICAgICAgICAgXCJhbVwiOiBtb25leSxcclxuICAgICAgICAgICAgICAgIFwicHRcIjogMSxcclxuICAgICAgICAgICAgICAgIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbixcclxuICAgICAgICAgICAgICAgIFwicG5cIjogXCJtYW51YWxiYW5rXCIsXHJcbiAgICAgICAgICAgICAgICBcImJjXCI6IGJhbmssXHJcbiAgICAgICAgICAgICAgICBcImRzXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBcImJuXCI6IG1vbmV5XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vdGhpcy5sYlRyYW5zTXNnLnN0cmluZyA9IHJlcXVlc3RbJ2RzJ107XHJcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcmVxdWVzdCwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN1Y2Nlc3MgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coXCJH4butaSB0aMO0bmcgdGluIG7huqFwIHRp4buBbiB0aMOgbmggY8O0bmchXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgXHJcbn1cclxuXHJcbiAiXX0=