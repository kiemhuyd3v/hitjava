
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupManualZalo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '192856rCLRNBZzSYpyc1rOZ', 'TabTopupManualZalo');
// Lobby/LobbyScript/Payment/TabTopupManualZalo.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TapTopupManualZalo = /** @class */ (function (_super) {
    __extends(TapTopupManualZalo, _super);
    function TapTopupManualZalo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnChoseBank = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.editBankNumber = null;
        _this.btnXacNhan = null;
        _this.lbBank = null;
        _this.lbBankAccount = null;
        _this.lbBankNumber = null;
        _this.nodeInput = null;
        _this.nodeQR = null;
        _this.nodeArrow = null;
        _this.lbTransMsg = null;
        _this.providerName = null;
        _this.data = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TapTopupManualZalo.prototype.start = function () {
    };
    TapTopupManualZalo.prototype.show = function (data, providerName) {
        this.providerName = providerName;
        this.data = data;
        this.node.active = true;
        this.btnChoseBank.node.active = false;
        this.nodeQR.active = false;
        this.nodeInput.active = true;
        this.nodeArrow.active = false;
        this.editName.string = this.editMoney.string = this.editBankNumber.string = "";
        // this.btnXacNhan.clickEvents[0].target = this.node;
        // this.btnXacNhan.clickEvents[0].handler = "onClickConfirm";
        // this.btnXacNhan.clickEvents[0].component = "TabTopupManualZalo";
        this.editName.node.opacity = this.editMoney.node.opacity = this.btnXacNhan.node.opacity = 255;
        this.editName.enabled = true;
        this.editMoney.enabled = true;
        //this.editBankNumber.active=false;
        this.editBankNumber.enabled = false;
        this.editBankNumber.placeholder = App_1.default.instance.getTextLang('txt_account_number1');
        this.btnXacNhan.interactable = true;
    };
    TapTopupManualZalo.prototype.hide = function () {
        this.node.active = false;
    };
    TapTopupManualZalo.prototype.onClickConfirm = function () {
        var _this = this;
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.editMoney.string);
            var bankNumber = this.editBankNumber.string.trim();
            if (this.editMoney.string == "" || this.editName.string.trim() == "") {
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
                "pt": 5,
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "pn": this.providerName,
                "bc": "",
                "ds": this.generateTransMsg(),
                "bn": bankNumber
            };
            Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
                var listBank = res.list_bank_auto;
                _this._listBank = listBank;
                _this.lbBank.string = listBank[0].bankName;
                _this.lbBankNumber.string = listBank[0].bankNumber;
                _this.lbBankAccount.string = listBank[0].bankAccountName;
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
        }
    };
    TapTopupManualZalo.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "-E79");
    };
    __decorate([
        property(cc.Sprite)
    ], TapTopupManualZalo.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualZalo.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualZalo.prototype, "editMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], TapTopupManualZalo.prototype, "editBankNumber", void 0);
    __decorate([
        property(cc.Button)
    ], TapTopupManualZalo.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbBank", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbBankAccount", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualZalo.prototype, "nodeInput", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualZalo.prototype, "nodeQR", void 0);
    __decorate([
        property(cc.Node)
    ], TapTopupManualZalo.prototype, "nodeArrow", void 0);
    __decorate([
        property(cc.Label)
    ], TapTopupManualZalo.prototype, "lbTransMsg", void 0);
    TapTopupManualZalo = __decorate([
        ccclass
    ], TapTopupManualZalo);
    return TapTopupManualZalo;
}(cc.Component));
exports.default = TapTopupManualZalo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cE1hbnVhbFphbG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsZ0RBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBMEhDO1FBdkhHLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBZSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFlLElBQUksQ0FBQztRQUc3QixvQkFBYyxHQUFlLElBQUksQ0FBQztRQUdsQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRXBCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQUksR0FBRyxJQUFJLENBQUM7O1FBd0ZwQixpQkFBaUI7SUFDckIsQ0FBQztJQXZGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLGtDQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQUksR0FBSixVQUFLLElBQUksRUFBRSxZQUFZO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FB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UUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1M7SUE5Qlgsa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0EwSHRDO0lBQUQseUJBQUM7Q0ExSEQsQUEwSEMsQ0ExSCtDLEVBQUUsQ0FBQyxTQUFTLEdBMEgzRDtrQkExSG9CLGtCQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcFRvcHVwTWFudWFsWmFsbyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJ0bkNob3NlQmFuazogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXROYW1lOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXRNb25leTogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGl0QmFua051bWJlcjogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blhhY05oYW46IGNjLkJ1dHRvbiA9IG51bGw7XG5AcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rOiBjYy5MYWJlbCA9IG51bGw7XG5AcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rQWNjb3VudDogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rTnVtYmVyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUlucHV0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVRUjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUFycm93OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUcmFuc01zZzogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwcm92aWRlck5hbWUgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBzaG93KGRhdGEsIHByb3ZpZGVyTmFtZSkge1xuICAgICAgICB0aGlzLnByb3ZpZGVyTmFtZSA9IHByb3ZpZGVyTmFtZTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZVFSLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGVJbnB1dC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGVBcnJvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSB0aGlzLmVkaXRNb25leS5zdHJpbmcgPSB0aGlzLmVkaXRCYW5rTnVtYmVyLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIC8vIHRoaXMuYnRuWGFjTmhhbi5jbGlja0V2ZW50c1swXS50YXJnZXQgPSB0aGlzLm5vZGU7XG4gICAgICAgIC8vIHRoaXMuYnRuWGFjTmhhbi5jbGlja0V2ZW50c1swXS5oYW5kbGVyID0gXCJvbkNsaWNrQ29uZmlybVwiO1xuICAgICAgICAvLyB0aGlzLmJ0blhhY05oYW4uY2xpY2tFdmVudHNbMF0uY29tcG9uZW50ID0gXCJUYWJUb3B1cE1hbnVhbFphbG9cIjtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5ub2RlLm9wYWNpdHk9dGhpcy5lZGl0TW9uZXkubm9kZS5vcGFjaXR5PXRoaXMuYnRuWGFjTmhhbi5ub2RlLm9wYWNpdHk9IDI1NTtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZGl0TW9uZXkuZW5hYmxlZCA9IHRydWU7XG5cdFx0Ly90aGlzLmVkaXRCYW5rTnVtYmVyLmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgdGhpcy5lZGl0QmFua051bWJlci5lbmFibGVkPWZhbHNlO1xuICAgICAgICB0aGlzLmVkaXRCYW5rTnVtYmVyLnBsYWNlaG9sZGVyPUFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2FjY291bnRfbnVtYmVyMScpO1xuICAgICAgICB0aGlzLmJ0blhhY05oYW4uaW50ZXJhY3RhYmxlPXRydWU7XG5cbiAgICB9XG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBvbkNsaWNrQ29uZmlybSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBiYW5rTnVtYmVyID0gdGhpcy5lZGl0QmFua051bWJlci5zdHJpbmcudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiIHx8IHRoaXMuZWRpdE5hbWUuc3RyaW5nLnRyaW0oKSA9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfYWxsXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9uZXkgPCAxMDAwMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWluXCIpICsgXCIgMTAuMDAwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb25leSA+IDMwMDAwMDAwMCkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5TaG93QWxlcnREaWFsb2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X2Nhc2hfaW5fbWF4XCIpICsgXCIgMzAwLjAwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUsIC0xKTtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIFwiY1wiOiAyMDAzLFxuICAgICAgICAgICAgICAgIFwiZm5cIjogZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZWRpdE5hbWUuc3RyaW5nLnRyaW0oKSksXG4gICAgICAgICAgICAgICAgXCJhbVwiOiBtb25leSxcbiAgICAgICAgICAgICAgICBcInB0XCI6IDUsXG4gICAgICAgICAgICAgICAgXCJublwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLFxuICAgICAgICAgICAgICAgIFwiYXRcIjogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBcInBuXCI6IHRoaXMucHJvdmlkZXJOYW1lLFxuICAgICAgICAgICAgICAgIFwiYmNcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImRzXCI6IHRoaXMuZ2VuZXJhdGVUcmFuc01zZygpLFxuICAgICAgICAgICAgICAgIFwiYm5cIjogYmFua051bWJlclxuICAgICAgICAgICAgfTtcblx0XHRcdEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTMwIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0QmFuayA9IHJlcy5saXN0X2JhbmtfYXV0bztcbiAgICAgICAgICAgICAgICB0aGlzLl9saXN0QmFuayA9IGxpc3RCYW5rO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkJhbmsuc3RyaW5nID0gbGlzdEJhbmtbMF0uYmFua05hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQmFua051bWJlci5zdHJpbmcgPSBsaXN0QmFua1swXS5iYW5rTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYkJhbmtBY2NvdW50LnN0cmluZyA9IGxpc3RCYW5rWzBdLmJhbmtBY2NvdW50TmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sYlRyYW5zTXNnLnN0cmluZyA9cmVxdWVzdFsnZHMnXTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcmVxdWVzdCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5wdXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZVFSLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICB9XG4gICAgIGdlbmVyYXRlVHJhbnNNc2coKSB7XG4gICAgICAgIHJldHVybiAoQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSArIFwiLUU3OVwiKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==