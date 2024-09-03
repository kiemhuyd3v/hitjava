
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loto/Loto_Script/Loto.LotoPopupCoinTransfer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '122a5cZR3dMPLlfSqMoGDFW', 'Loto.LotoPopupCoinTransfer');
// Loto/Loto_Script/Loto.LotoPopupCoinTransfer.ts

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
exports.LotoTabCashOut = exports.LotoTabCashIn = void 0;
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LotoTabCashIn = /** @class */ (function () {
    function LotoTabCashIn() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000];
    }
    LotoTabCashIn.prototype.start = function (popup) {
        var _this = this;
        this.popup = popup;
        this.edbCoin.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this.edbCoin.string);
            _this.edbCoin.string = Utils_1.default.formatNumber(number);
        });
        var _loop_1 = function (i) {
            btn = this_1.quickButtons.children[i];
            var value = this_1.values[i];
            btn.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(value);
            btn.on("click", function () {
                _this.edbCoin.string = Utils_1.default.formatNumber(value);
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.quickButtons.childrenCount; i++) {
            _loop_1(i);
        }
    };
    LotoTabCashIn.prototype.submit = function () {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg("Số tiền đã nhập không hợp lệ.");
            return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", { "ccash": coin }, function (res) {
            App_1.default.instance.showLoading(false);
            if (!res["ok"]) {
                App_1.default.instance.alertDialog.showMsg("Thao tác thất bại, vui lòng thử lại sau.");
                return;
            }
            Configs_1.default.Login.CoinFish = res["newCash"];
            Configs_1.default.Login.Coin = Configs_1.default.Login.Coin - coin;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            App_1.default.instance.alertDialog.showMsg("Thao tác thành công.");
            _this.reset();
            MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
    };
    LotoTabCashIn.prototype.reset = function () {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
    };
    __decorate([
        property(cc.Label)
    ], LotoTabCashIn.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], LotoTabCashIn.prototype, "edbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], LotoTabCashIn.prototype, "quickButtons", void 0);
    LotoTabCashIn = __decorate([
        ccclass("LotoPopupCoinTransfer.LotoTabCashIn")
    ], LotoTabCashIn);
    return LotoTabCashIn;
}());
exports.LotoTabCashIn = LotoTabCashIn;
var LotoTabCashOut = /** @class */ (function () {
    function LotoTabCashOut() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000];
    }
    LotoTabCashOut.prototype.start = function (popup) {
        var _this = this;
        this.popup = popup;
        this.edbCoin.node.on("editing-did-ended", function () {
            var number = Utils_1.default.stringToInt(_this.edbCoin.string);
            _this.edbCoin.string = Utils_1.default.formatNumber(number);
        });
        var _loop_2 = function (i) {
            btn = this_2.quickButtons.children[i];
            var value = this_2.values[i];
            btn.getComponentInChildren(cc.Label).string = Utils_1.default.formatNumber(value);
            btn.on("click", function () {
                _this.edbCoin.string = Utils_1.default.formatNumber(value);
            });
        };
        var this_2 = this, btn;
        for (var i = 0; i < this.quickButtons.childrenCount; i++) {
            _loop_2(i);
        }
    };
    LotoTabCashOut.prototype.submit = function () {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg("Số tiền đã nhập không hợp lệ.");
            return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", { "ccash": -coin }, function (res) {
            App_1.default.instance.showLoading(false);
            if (!res["ok"]) {
                App_1.default.instance.alertDialog.showMsg("Thao tác thất bại, vui lòng thử lại sau.");
                return;
            }
            Configs_1.default.Login.CoinFish = res["newCash"];
            Configs_1.default.Login.Coin = Configs_1.default.Login.Coin + coin;
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            App_1.default.instance.alertDialog.showMsg("Thao tác thành công.");
            _this.reset();
            MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
    };
    LotoTabCashOut.prototype.reset = function () {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
    };
    __decorate([
        property(cc.Label)
    ], LotoTabCashOut.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], LotoTabCashOut.prototype, "edbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], LotoTabCashOut.prototype, "quickButtons", void 0);
    LotoTabCashOut = __decorate([
        ccclass("LotoPopupCoinTransfer.LotoTabCashOut")
    ], LotoTabCashOut);
    return LotoTabCashOut;
}());
exports.LotoTabCashOut = LotoTabCashOut;
var LotoPopupCoinTransfer = /** @class */ (function (_super) {
    __extends(LotoPopupCoinTransfer, _super);
    function LotoPopupCoinTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabCashIn = null;
        _this.tabCashOut = null;
        _this.tabSelectedIdx = 0;
        return _this;
    }
    LotoPopupCoinTransfer.prototype.start = function () {
        var _this = this;
        var _loop_3 = function (i) {
            this_3.tabs.toggleItems[i].node.on("toggle", function () {
                _this.tabSelectedIdx = i;
                _this.onTabChanged();
            });
        };
        var this_3 = this;
        for (var i = 0; i < this.tabs.toggleItems.length; i++) {
            _loop_3(i);
        }
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this.tabCashIn.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
            _this.tabCashOut.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
        }, this);
        this.tabCashIn.start(this);
        this.tabCashOut.start(this);
    };
    LotoPopupCoinTransfer.prototype.show = function () {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
    };
    LotoPopupCoinTransfer.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
        }
        for (var j = 0; j < this.tabs.toggleItems.length; j++) {
            this.tabs.toggleItems[j].node.getComponentInChildren(cc.LabelOutline).color = j == this.tabSelectedIdx ? cc.Color.BLACK.fromHEX("#AA5F00") : cc.Color.BLACK.fromHEX("#4677F3");
        }
        switch (this.tabSelectedIdx) {
            case 0:
                this.tabCashIn.reset();
                break;
            case 1:
                this.tabCashOut.reset();
                break;
        }
    };
    LotoPopupCoinTransfer.prototype.actSubmitCashIn = function () {
        this.tabCashIn.submit();
    };
    LotoPopupCoinTransfer.prototype.actSubmitCashOut = function () {
        this.tabCashOut.submit();
    };
    LotoPopupCoinTransfer.prototype.actClearCashIn = function () {
        this.tabCashIn.edbCoin.string = "0";
    };
    LotoPopupCoinTransfer.prototype.actClearCashOut = function () {
        this.tabCashOut.edbCoin.string = "0";
    };
    __decorate([
        property(cc.ToggleContainer)
    ], LotoPopupCoinTransfer.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], LotoPopupCoinTransfer.prototype, "tabContents", void 0);
    __decorate([
        property(LotoTabCashIn)
    ], LotoPopupCoinTransfer.prototype, "tabCashIn", void 0);
    __decorate([
        property(LotoTabCashOut)
    ], LotoPopupCoinTransfer.prototype, "tabCashOut", void 0);
    LotoPopupCoinTransfer = __decorate([
        ccclass
    ], LotoPopupCoinTransfer);
    return LotoPopupCoinTransfer;
}(Dialog_1.default));
exports.default = LotoPopupCoinTransfer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG90b1xcTG90b19TY3JpcHRcXExvdG8uTG90b1BvcHVwQ29pblRyYW5zZmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFDbEUsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSxxREFBZ0Q7QUFDaEQsaUVBQTREO0FBQzVELHVHQUFrRztBQUNsRywrREFBb0Q7QUFDcEQseUdBQW9HO0FBRTlGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxlQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFlBQU8sR0FBZSxJQUFJLENBQUM7UUFFM0IsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSyxHQUEwQixJQUFJLENBQUM7UUFFM0IsV0FBTSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQTZDN0csQ0FBQztJQTNDVSw2QkFBSyxHQUFaLFVBQWEsS0FBNEI7UUFBekMsaUJBY0M7UUFiRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUU7WUFDdEMsSUFBSSxNQUFNLEdBQUcsZUFBSyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsQ0FBQyxDQUFDLENBQUM7Z0NBQ00sQ0FBQztZQUNGLEdBQUcsR0FBRyxPQUFLLFlBQVksQ0FB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SUFDekMsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3VEQUNHO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsYUFBYSxDQUFDOzREQUNRO0lBRWhDO1FBREMsUUFBUSxDQUFDLGNBQWMsQ0FBQzs2REFDUztJQVJqQixxQkFBcUI7UUFEekMsT0FBTztPQUNhLHFCQUFxQixDQW9FekM7SUFBRCw0QkFBQztDQXBFRCxBQW9FQyxDQXBFa0QsZ0JBQU0sR0FvRXhEO2tCQXBFb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcclxuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xyXG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XHJcbmltcG9ydCBjbWQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L0xvYmJ5LkNtZFwiO1xyXG5pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkxvdG9Qb3B1cENvaW5UcmFuc2Zlci5Mb3RvVGFiQ2FzaEluXCIpXHJcbmV4cG9ydCBjbGFzcyBMb3RvVGFiQ2FzaEluIHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgXHJcbiAgICBsYmxCYWxhbmNlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVkYkNvaW46IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBxdWlja0J1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG9wdXA6IExvdG9Qb3B1cENvaW5UcmFuc2ZlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBbNTAwMDAsIDEwMDAwMCwgMjAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDIwMDAwMDAsIDUwMDAwMDAsIDEwMDAwMDAwLCAyMDAwMDAwMF07XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KHBvcHVwOiBMb3RvUG9wdXBDb2luVHJhbnNmZXIpIHtcclxuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XHJcbiAgICAgICAgdGhpcy5lZGJDb2luLm5vZGUub24oXCJlZGl0aW5nLWRpZC1lbmRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWlja0J1dHRvbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICBidG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkNvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IGNvaW4gPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcclxuICAgICAgICBpZiAoY29pbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gxJHDoyBuaOG6rXAga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcInh4ZW5nQ2FzaGluXCIsIHsgXCJjY2FzaFwiOiBjb2luIH0sIChyZXMpID0+IHtcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgaWYgKCFyZXNbXCJva1wiXSkge1xyXG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaGFvIHTDoWMgdGjhuqV0IGLhuqFpLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1LlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW5GaXNoID0gcmVzW1wibmV3Q2FzaFwiXTtcclxuICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gQ29uZmlncy5Mb2dpbi5Db2luIC0gY29pbjtcclxuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaGFvIHTDoWMgdGjDoG5oIGPDtG5nLlwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUdldE1vbmV5VXNlKCkpO1xyXG4gICAgICAgIH0sIHRoaXMucG9wdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmVkYkNvaW4uc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB0aGlzLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBjY2NsYXNzKFwiTG90b1BvcHVwQ29pblRyYW5zZmVyLkxvdG9UYWJDYXNoT3V0XCIpXHJcbmV4cG9ydCBjbGFzcyBMb3RvVGFiQ2FzaE91dCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYmxCYWxhbmNlOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIGVkYkNvaW46IGNjLkVkaXRCb3ggPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBxdWlja0J1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG9wdXA6IExvdG9Qb3B1cENvaW5UcmFuc2ZlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBbNTAwMDAsIDEwMDAwMCwgMjAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDIwMDAwMDAsIDUwMDAwMDAsIDEwMDAwMDAwLCAyMDAwMDAwMF07XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KHBvcHVwOiBMb3RvUG9wdXBDb2luVHJhbnNmZXIpIHtcclxuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XHJcbiAgICAgICAgdGhpcy5lZGJDb2luLm5vZGUub24oXCJlZGl0aW5nLWRpZC1lbmRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5xdWlja0J1dHRvbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNbaV07XHJcbiAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodmFsdWUpO1xyXG4gICAgICAgICAgICBidG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkNvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICAgICAgbGV0IGNvaW4gPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcclxuICAgICAgICBpZiAoY29pbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gxJHDoyBuaOG6rXAga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcInh4ZW5nQ2FzaGluXCIsIHsgXCJjY2FzaFwiOiAtY29pbiB9LCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIGlmICghcmVzW1wib2tcIl0pIHtcclxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVGhhbyB0w6FjIHRo4bqldCBi4bqhaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luRmlzaCA9IHJlc1tcIm5ld0Nhc2hcIl07XHJcbiAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IENvbmZpZ3MuTG9naW4uQ29pbiArIGNvaW47XHJcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVGhhbyB0w6FjIHRow6BuaCBjw7RuZy5cIik7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5SZXFHZXRNb25leVVzZSgpKTtcclxuICAgICAgICB9LCB0aGlzLnBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5sYmxCYWxhbmNlLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW5GaXNoKTtcclxuICAgIH1cclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG90b1BvcHVwQ29pblRyYW5zZmVyIGV4dGVuZHMgRGlhbG9nIHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXHJcbiAgICB0YWJzOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICB0YWJDb250ZW50czogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTG90b1RhYkNhc2hJbilcclxuICAgIHRhYkNhc2hJbjogTG90b1RhYkNhc2hJbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoTG90b1RhYkNhc2hPdXQpXHJcbiAgICB0YWJDYXNoT3V0OiBMb3RvVGFiQ2FzaE91dCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJTZWxlY3RlZElkeCA9IDA7XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYnMudG9nZ2xlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW2ldLm5vZGUub24oXCJ0b2dnbGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IGk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGFiQ2hhbmdlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YWJDYXNoSW4ubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcclxuICAgICAgICAgICAgdGhpcy50YWJDYXNoT3V0LmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbkZpc2gpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRhYkNhc2hJbi5zdGFydCh0aGlzKTtcclxuICAgICAgICB0aGlzLnRhYkNhc2hPdXQuc3RhcnQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBzdXBlci5zaG93KCk7XHJcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZElkeCA9IDA7XHJcbiAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblRhYkNoYW5nZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVGFiQ2hhbmdlZCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5baV0uYWN0aXZlID0gaSA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLnRhYnMudG9nZ2xlSXRlbXNbal0ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsT3V0bGluZSkuY29sb3IgPSBqID09IHRoaXMudGFiU2VsZWN0ZWRJZHggPyBjYy5Db2xvci5CTEFDSy5mcm9tSEVYKFwiI0FBNUYwMFwiKSA6IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjNDY3N0YzXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHRoaXMudGFiU2VsZWN0ZWRJZHgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJDYXNoSW4ucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkNhc2hPdXQucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0U3VibWl0Q2FzaEluKCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2FzaEluLnN1Ym1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhY3RTdWJtaXRDYXNoT3V0KCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2FzaE91dC5zdWJtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0Q2xlYXJDYXNoSW4oKSB7XHJcbiAgICAgICAgdGhpcy50YWJDYXNoSW4uZWRiQ29pbi5zdHJpbmcgPSBcIjBcIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWN0Q2xlYXJDYXNoT3V0KCkge1xyXG4gICAgICAgIHRoaXMudGFiQ2FzaE91dC5lZGJDb2luLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==