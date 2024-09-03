
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupManualBank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82765Ok3jBOvb+hcz5s8eXo', 'TabTopupManualBank');
// Lobby/LobbyScript/Payment/TabTopupManualBank.ts

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
var TabTopupManualBank = /** @class */ (function (_super) {
    __extends(TabTopupManualBank, _super);
    function TabTopupManualBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabWell = "";
        _this.lobbyChoseBank = null;
        _this.btnChoseBank = null;
        _this.sfChoseBank = null;
        _this.editName = null;
        _this.editMoney = null;
        _this.editBankNumber = null;
        _this.btnXacNhan = null;
        _this.nodeArrow = null;
        _this.nodeInput = null;
        _this.nodeInfoTrans = null;
        _this.lbTransMsg = null;
        _this.lbBankAccount = null;
        _this.lbBankNumber = null;
        _this.lbBank = null;
        _this._listBank = [];
        _this.data = null;
        _this.dataBankChosing = null;
        _this.providerName = null;
        return _this;
    }
    TabTopupManualBank.prototype.show = function (data, providerName) {
        this.btnChoseBank.spriteFrame = null;
        this.btnChoseBank.node.active = true;
        this.providerName = providerName;
        this.node.active = true;
        this.data = data;
        this.dataBankChosing = null;
        this.showBankChosing();
        this.nodeInput.active = true;
        this.nodeInfoTrans.active = false;
        this.editName.string = this.editMoney.string = this.editBankNumber.string = "";
        this.editBankNumber.placeholder = App_1.default.instance.getTextLang('txt_account_number');
        if (this.dataBankChosing != null) {
            this.editName.enabled = true;
            this.editMoney.enabled = true;
            this.editBankNumber.enabled = true;
            this.btnXacNhan.interactable = true;
        }
        else {
            this.editName.enabled = false;
            this.editMoney.enabled = false;
            this.editBankNumber.enabled = false;
            this.btnXacNhan.interactable = false;
        }
    };
    TabTopupManualBank.prototype.onLoad = function () {
    };
    TabTopupManualBank.prototype.onFormatNumber = function () {
        this.editMoney.string = Utils_1.default.formatNumberBank(this.editMoney.string).toUpperCase();
    };
    TabTopupManualBank.prototype.onFormatName = function () {
        this.editName.string = Utils_1.default.formatNameBank(this.editName.string).toUpperCase();
        if (cc.sys.isBrowser) {
            this.editName.focus();
        }
    };
    TabTopupManualBank.prototype.onEdbBankNumberChange = function () {
        if (cc.sys.isBrowser) {
            this.editBankNumber.focus();
        }
    };
    TabTopupManualBank.prototype.showBankChosing = function () {
        var self = this;
        this.btnChoseBank.node.active = true;
        if (this.dataBankChosing == null) {
            this.nodeArrow.active = true;
            this.editName.node.opacity = 50;
            this.editMoney.node.opacity = 50;
            this.btnXacNhan.node.opacity = 50;
            this.editBankNumber.node.opacity = 50;
            this.editName.string = "";
            this.editMoney.string = "";
            this.btnChoseBank.spriteFrame = this.sfChoseBank;
            this.btnChoseBank.node.scale = 1;
            this.editName.enabled = false;
            this.editMoney.enabled = false;
            this.editBankNumber.enabled = true;
            this.btnXacNhan.interactable = false;
        }
        else {
            this.nodeArrow.active = false;
            this.editName.node.opacity = 255;
            this.editMoney.node.opacity = 255;
            this.btnXacNhan.node.opacity = 255;
            this.editBankNumber.node.opacity = 255;
            this.editName.enabled = true;
            this.editMoney.enabled = true;
            this.editBankNumber.enabled = true;
            this.btnXacNhan.interactable = true;
            cc.loader.load(this.dataBankChosing.imageUrl, function (err, texture) {
                var newSpriteFrame = new cc.SpriteFrame(texture);
                self.btnChoseBank.spriteFrame = newSpriteFrame;
                self.btnChoseBank.node.scale = 1;
            });
        }
    };
    TabTopupManualBank.prototype.hide = function () {
        this.node.active = false;
    };
    TabTopupManualBank.prototype.onBtnXacNhan = function () {
        var _this = this;
        if (this.node.active) {
            var money = Utils_1.default.formatEditBox(this.editMoney.string);
            var bankNumber = this.editBankNumber.string.trim();
            if (this.editMoney.string == "" || bankNumber == "" || this.editName.string.trim() == "" || this.dataBankChosing == null) {
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
                "fn": encodeURIComponent(this.editName.string.trim()),
                "am": money,
                "pt": 1,
                "nn": Configs_1.default.Login.Nickname,
                "at": Configs_1.default.Login.AccessToken,
                "pn": this.providerName,
                "bc": this.dataBankChosing['name'],
                "ds": this.generateTransMsg(),
                "bn": bankNumber
            };
            Http_1.default.get(Configs_1.default.App.API, { "c": 130 }, function (err, res) {
                var listBank = res.list_bank;
                _this._listBank = listBank;
                _this.lbBank.string = listBank[0].bankName;
                _this.lbBankNumber.string = listBank[0].bankNumber;
                _this.lbBankAccount.string = listBank[0].bankAccountName;
            });
            this.lbTransMsg.string = request['ds'];
            //	this.lbBankNumber.string = listBank.bankNumber;
            //	this.lbBankAccount.string = listBank.bankAccountName;
            //	this.lbBank.string = listBank.bankName;
            Http_1.default.get(Configs_1.default.App.API, request, function (err, res) {
                App_1.default.instance.showLoading(false);
                //  cc.log(res);
                if (res.success == true) {
                    _this.nodeInput.active = false;
                    _this.nodeInfoTrans.active = true;
                }
                else {
                    App_1.default.instance.ShowAlertDialog(res.message);
                }
            });
        }
    };
    TabTopupManualBank.prototype.onBtnChoseBank = function () {
        var self = this;
        this.lobbyChoseBank.init(self.tabWell, self.data.banks, function (dataBankChosing) {
            self.dataBankChosing = dataBankChosing;
            self.showBankChosing();
        });
        this.lobbyChoseBank.show();
    };
    TabTopupManualBank.prototype.generateTransMsg = function () {
        return (Configs_1.default.Login.Nickname + "-E79");
    };
    __decorate([
        property
    ], TabTopupManualBank.prototype, "tabWell", void 0);
    __decorate([
        property(LobbyChoseBank_1.default)
    ], TabTopupManualBank.prototype, "lobbyChoseBank", void 0);
    __decorate([
        property(cc.Sprite)
    ], TabTopupManualBank.prototype, "btnChoseBank", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TabTopupManualBank.prototype, "sfChoseBank", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupManualBank.prototype, "editName", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupManualBank.prototype, "editMoney", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabTopupManualBank.prototype, "editBankNumber", void 0);
    __decorate([
        property(cc.Button)
    ], TabTopupManualBank.prototype, "btnXacNhan", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupManualBank.prototype, "nodeArrow", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupManualBank.prototype, "nodeInput", void 0);
    __decorate([
        property(cc.Node)
    ], TabTopupManualBank.prototype, "nodeInfoTrans", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbTransMsg", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbBankAccount", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbBankNumber", void 0);
    __decorate([
        property(cc.Label)
    ], TabTopupManualBank.prototype, "lbBank", void 0);
    TabTopupManualBank = __decorate([
        ccclass
    ], TabTopupManualBank);
    return TabTopupManualBank;
}(cc.Component));
exports.default = TabTopupManualBank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cE1hbnVhbEJhbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3Qyw0Q0FBdUM7QUFDdkMsZ0RBQTJDO0FBQzNDLG1EQUE4QztBQUV4QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnRCxzQ0FBWTtJQUE1RDtRQUFBLHFFQW1NQztRQWpNRyxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFJbkMsY0FBUSxHQUFlLElBQUksQ0FBQztRQUc1QixlQUFTLEdBQWUsSUFBSSxDQUFDO1FBRzdCLG9CQUFjLEdBQWUsSUFBSSxDQUFDO1FBR2xDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQ25CLGVBQVMsR0FBRyxFQUFFLENBQUM7UUFFWixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1oscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsa0JBQVksR0FBRyxJQUFJLENBQUM7O0lB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QUM7NkRBQ2U7SUFFL0I7UUFERixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDYztJQUU5QjtRQURGLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNRO0lBcENQLGtCQUFrQjtRQUR0QyxPQUFPO09BQ2Esa0JBQWtCLENBbU10QztJQUFELHlCQUFDO0NBbk1ELEFBbU1DLENBbk0rQyxFQUFFLENBQUMsU0FBUyxHQW1NM0Q7a0JBbk1vQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTG9iYnlDaG9zZUJhbmsgZnJvbSBcIi4vTG9iYnlDaG9zZUJhbmtcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYlRvcHVwTWFudWFsQmFuayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG4gICAgdGFiV2VsbDogc3RyaW5nID0gXCJcIjtcbiAgICBAcHJvcGVydHkoTG9iYnlDaG9zZUJhbmspXG4gICAgbG9iYnlDaG9zZUJhbms6IExvYmJ5Q2hvc2VCYW5rID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGJ0bkNob3NlQmFuazogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZDaG9zZUJhbms6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdE5hbWU6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdE1vbmV5OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkaXRCYW5rTnVtYmVyOiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuWGFjTmhhbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVBcnJvdzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUlucHV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlSW5mb1RyYW5zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUcmFuc01zZzogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rQWNjb3VudDogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJCYW5rTnVtYmVyOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkJhbms6IGNjLkxhYmVsID0gbnVsbDtcblx0cHJpdmF0ZSBfbGlzdEJhbmsgPSBbXTtcblxuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBkYXRhQmFua0Nob3NpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgcHJvdmlkZXJOYW1lID0gbnVsbDtcbiAgICBzaG93KGRhdGEsIHByb3ZpZGVyTmFtZSkge1xuICAgICAgICB0aGlzLmJ0bkNob3NlQmFuay5zcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnRuQ2hvc2VCYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm92aWRlck5hbWUgPSBwcm92aWRlck5hbWU7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGFCYW5rQ2hvc2luZyA9IG51bGw7XG4gICAgICAgIHRoaXMuc2hvd0JhbmtDaG9zaW5nKCk7XG4gICAgICAgIHRoaXMubm9kZUlucHV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZUluZm9UcmFucy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSB0aGlzLmVkaXRNb25leS5zdHJpbmcgPSB0aGlzLmVkaXRCYW5rTnVtYmVyLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMuZWRpdEJhbmtOdW1iZXIucGxhY2Vob2xkZXIgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9hY2NvdW50X251bWJlcicpO1xuICAgICAgICBpZiAodGhpcy5kYXRhQmFua0Nob3NpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lZGl0QmFua051bWJlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb25leS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmVkaXRCYW5rTnVtYmVyLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgfVxuXG4gICAgb25Gb3JtYXROdW1iZXIoKSB7XG4gICAgICAgIHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlckJhbmsodGhpcy5lZGl0TW9uZXkuc3RyaW5nKS50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIG9uRm9ybWF0TmFtZSgpIHtcbiAgICAgICAgdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROYW1lQmFuayh0aGlzLmVkaXROYW1lLnN0cmluZykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkVkYkJhbmtOdW1iZXJDaGFuZ2UoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXRCYW5rTnVtYmVyLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd0JhbmtDaG9zaW5nKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5kYXRhQmFua0Nob3NpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlQXJyb3cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb25leS5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5ub2RlLm9wYWNpdHkgPSA1MDtcbiAgICAgICAgICAgIHRoaXMuZWRpdEJhbmtOdW1iZXIubm9kZS5vcGFjaXR5ID0gNTA7XG4gICAgICAgICAgICB0aGlzLmVkaXROYW1lLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmVkaXRNb25leS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsuc3ByaXRlRnJhbWUgPSB0aGlzLnNmQ2hvc2VCYW5rO1xuICAgICAgICAgICAgdGhpcy5idG5DaG9zZUJhbmsubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB0aGlzLmVkaXROYW1lLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdEJhbmtOdW1iZXIuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0blhhY05oYW4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVBcnJvdy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE5hbWUubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5lZGl0TW9uZXkubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5idG5YYWNOaGFuLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZWRpdEJhbmtOdW1iZXIubm9kZS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgdGhpcy5lZGl0TmFtZS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWRpdE1vbmV5LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5lZGl0QmFua051bWJlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuWGFjTmhhbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQodGhpcy5kYXRhQmFua0Nob3NpbmcuaW1hZ2VVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5idG5DaG9zZUJhbmsuc3ByaXRlRnJhbWUgPSBuZXdTcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICBzZWxmLmJ0bkNob3NlQmFuay5ub2RlLnNjYWxlID0gMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQnRuWGFjTmhhbigpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBtb25leSA9IFV0aWxzLmZvcm1hdEVkaXRCb3godGhpcy5lZGl0TW9uZXkuc3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBiYW5rTnVtYmVyID0gdGhpcy5lZGl0QmFua051bWJlci5zdHJpbmcudHJpbSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdE1vbmV5LnN0cmluZyA9PSBcIlwiIHx8IGJhbmtOdW1iZXIgPT0gXCJcIiB8fCB0aGlzLmVkaXROYW1lLnN0cmluZy50cmltKCkgPT0gXCJcIiB8fCB0aGlzLmRhdGFCYW5rQ2hvc2luZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfaW5wdXRfYWxsXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9uZXkgPCAxMDAwMDApIHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuU2hvd0FsZXJ0RGlhbG9nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9jYXNoX2luX21pblwiKSArIFwiIDEwMC4wMDBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vbmV5ID4gMzAwMDAwMDAwKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfY2FzaF9pbl9tYXhcIikgKyBcIiAzMDAuMDAwLjAwMFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSwgLTEpO1xuICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJjaHV5ZW4ga2hvYW46XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5lZGl0TmFtZS5zdHJpbmcudHJpbSgpKSk7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBcImNcIjogMjAwMyxcbiAgICAgICAgICAgICAgICBcImZuXCI6IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmVkaXROYW1lLnN0cmluZy50cmltKCkpLFxuICAgICAgICAgICAgICAgIFwiYW1cIjogbW9uZXksXG4gICAgICAgICAgICAgICAgXCJwdFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibm5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSxcbiAgICAgICAgICAgICAgICBcImF0XCI6IENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgXCJwblwiOiB0aGlzLnByb3ZpZGVyTmFtZSxcbiAgICAgICAgICAgICAgICBcImJjXCI6IHRoaXMuZGF0YUJhbmtDaG9zaW5nWyduYW1lJ10sXG4gICAgICAgICAgICAgICAgXCJkc1wiOiB0aGlzLmdlbmVyYXRlVHJhbnNNc2coKSxcbiAgICAgICAgICAgICAgICBcImJuXCI6IGJhbmtOdW1iZXJcbiAgICAgICAgICAgIH07XG5cdFx0XHRIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEzMCB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGlzdEJhbmsgPSByZXMubGlzdF9iYW5rO1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RCYW5rID0gbGlzdEJhbms7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQmFuay5zdHJpbmcgPSBsaXN0QmFua1swXS5iYW5rTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJCYW5rTnVtYmVyLnN0cmluZyA9IGxpc3RCYW5rWzBdLmJhbmtOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiQmFua0FjY291bnQuc3RyaW5nID0gbGlzdEJhbmtbMF0uYmFua0FjY291bnROYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgICAgICB0aGlzLmxiVHJhbnNNc2cuc3RyaW5nID0gcmVxdWVzdFsnZHMnXTtcblx0XHQvL1x0dGhpcy5sYkJhbmtOdW1iZXIuc3RyaW5nID0gbGlzdEJhbmsuYmFua051bWJlcjtcblx0XHQvL1x0dGhpcy5sYkJhbmtBY2NvdW50LnN0cmluZyA9IGxpc3RCYW5rLmJhbmtBY2NvdW50TmFtZTtcblx0XHQvL1x0dGhpcy5sYkJhbmsuc3RyaW5nID0gbGlzdEJhbmsuYmFua05hbWU7XG5cdFx0XHRcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcmVxdWVzdCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlSW5wdXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZUluZm9UcmFucy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXMubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIG9uQnRuQ2hvc2VCYW5rKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubG9iYnlDaG9zZUJhbmsuaW5pdChzZWxmLnRhYldlbGwsIHNlbGYuZGF0YS5iYW5rcywgKGRhdGFCYW5rQ2hvc2luZykgPT4ge1xuICAgICAgICAgICAgc2VsZi5kYXRhQmFua0Nob3NpbmcgPSBkYXRhQmFua0Nob3Npbmc7XG4gICAgICAgICAgICBzZWxmLnNob3dCYW5rQ2hvc2luZygpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sb2JieUNob3NlQmFuay5zaG93KCk7XG4gICAgfVxuICAgIGdlbmVyYXRlVHJhbnNNc2coKSB7XG4gICAgICAgIHJldHVybiAoQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSArIFwiLUU3OVwiKTtcbiAgICB9XG59XG4iXX0=