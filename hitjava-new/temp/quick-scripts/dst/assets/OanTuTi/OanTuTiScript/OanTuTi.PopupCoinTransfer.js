
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/OanTuTi/OanTuTiScript/OanTuTi.PopupCoinTransfer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd70b9QEdnNK6LswYvb78XXC', 'OanTuTi.PopupCoinTransfer');
// OanTuTi/OanTuTiScript/OanTuTi.PopupCoinTransfer.ts

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
exports.TabCashOut = exports.TabCashIn = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Lobby_Cmd_1 = require("../../Lobby/LobbyScript/Lobby.Cmd");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Dialogz_1 = require("../../Lobby/LobbyScript/Script/common/Dialogz");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabCashIn = /** @class */ (function () {
    function TabCashIn() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000];
    }
    TabCashIn.prototype.start = function (popup) {
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
    TabCashIn.prototype.submit = function () {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg("Số tiền đã nhập không hợp lệ.");
            return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", { "ccash": coin }, function (res) {
            App_1.default.instance.showLoading(false);
            // console.log(res);
            if (!res["ok"]) {
                App_1.default.instance.alertDialog.showMsg("Thao tác thất bại, vui lòng thử lại sau.");
                return;
            }
            Configs_1.default.Login.CoinFish = res["newCash"];
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            App_1.default.instance.alertDialog.showMsg("Thao tác thành công.");
            _this.reset();
            MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
    };
    TabCashIn.prototype.reset = function () {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
    };
    __decorate([
        property(cc.Label)
    ], TabCashIn.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabCashIn.prototype, "edbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], TabCashIn.prototype, "quickButtons", void 0);
    TabCashIn = __decorate([
        ccclass("OanTuTi.PopupCoinTransfer.TabCashIn")
    ], TabCashIn);
    return TabCashIn;
}());
exports.TabCashIn = TabCashIn;
var TabCashOut = /** @class */ (function () {
    function TabCashOut() {
        this.lblBalance = null;
        this.edbCoin = null;
        this.quickButtons = null;
        this.popup = null;
        this.values = [50000, 100000, 200000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000];
    }
    TabCashOut.prototype.start = function (popup) {
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
    TabCashOut.prototype.submit = function () {
        var _this = this;
        var coin = Utils_1.default.stringToInt(this.edbCoin.string);
        if (coin <= 0) {
            App_1.default.instance.alertDialog.showMsg("Số tiền đã nhập không hợp lệ.");
            return;
        }
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("xxengCashin", { "ccash": -coin }, function (res) {
            App_1.default.instance.showLoading(false);
            // console.log(res);
            if (!res["ok"]) {
                App_1.default.instance.alertDialog.showMsg("Thao tác thất bại, vui lòng thử lại sau.");
                return;
            }
            Configs_1.default.Login.CoinFish = res["newCash"];
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            App_1.default.instance.alertDialog.showMsg("Thao tác thành công.");
            _this.reset();
            MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqGetMoneyUse());
        }, this.popup);
    };
    TabCashOut.prototype.reset = function () {
        this.edbCoin.string = "";
        this.lblBalance.string = Utils_1.default.formatNumber(Configs_1.default.Login.CoinFish);
    };
    __decorate([
        property(cc.Label)
    ], TabCashOut.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], TabCashOut.prototype, "edbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], TabCashOut.prototype, "quickButtons", void 0);
    TabCashOut = __decorate([
        ccclass("OanTuTi.PopupCoinTransfer.TabCashOut")
    ], TabCashOut);
    return TabCashOut;
}());
exports.TabCashOut = TabCashOut;
var PopupCoinTransfer = /** @class */ (function (_super) {
    __extends(PopupCoinTransfer, _super);
    function PopupCoinTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabs = null;
        _this.tabContents = null;
        _this.tabCashIn = null;
        _this.tabCashOut = null;
        _this.tabSelectedIdx = 0;
        return _this;
    }
    PopupCoinTransfer.prototype.start = function () {
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
    PopupCoinTransfer.prototype.show = function () {
        _super.prototype.show.call(this);
        this.tabSelectedIdx = 0;
        this.tabs.toggleItems[this.tabSelectedIdx].isChecked = true;
        this.onTabChanged();
    };
    PopupCoinTransfer.prototype.onTabChanged = function () {
        for (var i = 0; i < this.tabContents.childrenCount; i++) {
            this.tabContents.children[i].active = i == this.tabSelectedIdx;
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
    PopupCoinTransfer.prototype.actSubmitCashIn = function () {
        this.tabCashIn.submit();
    };
    PopupCoinTransfer.prototype.actSubmitCashOut = function () {
        this.tabCashOut.submit();
    };
    PopupCoinTransfer.prototype.actClearCashIn = function () {
        this.tabCashIn.edbCoin.string = "0";
    };
    PopupCoinTransfer.prototype.actClearCashOut = function () {
        this.tabCashOut.edbCoin.string = "0";
    };
    __decorate([
        property(cc.ToggleContainer)
    ], PopupCoinTransfer.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupCoinTransfer.prototype, "tabContents", void 0);
    __decorate([
        property(TabCashIn)
    ], PopupCoinTransfer.prototype, "tabCashIn", void 0);
    __decorate([
        property(TabCashOut)
    ], PopupCoinTransfer.prototype, "tabCashOut", void 0);
    PopupCoinTransfer = __decorate([
        ccclass
    ], PopupCoinTransfer);
    return PopupCoinTransfer;
}(Dialogz_1.default));
exports.default = PopupCoinTransfer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcT2FuVHVUaVxcT2FuVHVUaVNjcmlwdFxcT2FuVHVUaS5Qb3B1cENvaW5UcmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELCtEQUFvRDtBQUNwRCxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHlFQUFtRTtBQUNuRSxxRUFBZ0U7QUFDaEUsdUdBQWtHO0FBQ2xHLHlHQUFvRztBQUU5RixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBRUksZUFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixZQUFPLEdBQWUsSUFBSSxDQUFDO1FBRTNCLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUssR0FBc0IsSUFBSSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUE2QzdHLENBQUM7SUEzQ1UseUJBQUssR0FBWixVQUFhLEtBQXdCO1FBQXJDLGlCQWNDO1FBYkcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1lBQ3RDLElBQUksTUFBTSxHQUFHLGVBQUssQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO2dDQUNNLENBQUM7WUFDRixHQUFHLEdBQUcsT0FBSyxZQUFZ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LEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QixNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSw0Q0FBZ0IsR0FBdkI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFTSwwQ0FBYyxHQUFyQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDeEMsQ0FBQztJQUVNLDJDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUN6QyxDQUFDO0lBOUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUM7bURBQ0c7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0RBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsVUFBVSxDQUFDO3lEQUNTO0lBUmIsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FpRXJDO0lBQUQsd0JBQUM7Q0FqRUQsQUFpRUMsQ0FqRThDLGlCQUFNLEdBaUVwRDtrQkFqRW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgY21kIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9Mb2JieS5DbWRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nelwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoXCJPYW5UdVRpLlBvcHVwQ29pblRyYW5zZmVyLlRhYkNhc2hJblwiKVxuZXhwb3J0IGNsYXNzIFRhYkNhc2hJbiB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJhbGFuY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJDb2luOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBxdWlja0J1dHRvbnM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwb3B1cDogUG9wdXBDb2luVHJhbnNmZXIgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZXMgPSBbNTAwMDAsIDEwMDAwMCwgMjAwMDAwLCA1MDAwMDAsIDEwMDAwMDAsIDIwMDAwMDAsIDUwMDAwMDAsIDEwMDAwMDAwLCAyMDAwMDAwMF07XG5cbiAgICBwdWJsaWMgc3RhcnQocG9wdXA6IFBvcHVwQ29pblRyYW5zZmVyKSB7XG4gICAgICAgIHRoaXMucG9wdXAgPSBwb3B1cDtcbiAgICAgICAgdGhpcy5lZGJDb2luLm5vZGUub24oXCJlZGl0aW5nLWRpZC1lbmRlZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gVXRpbHMuc3RyaW5nVG9JbnQodGhpcy5lZGJDb2luLnN0cmluZyk7XG4gICAgICAgICAgICB0aGlzLmVkYkNvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucXVpY2tCdXR0b25zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJ0biA9IHRoaXMucXVpY2tCdXR0b25zLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy52YWx1ZXNbaV07XG4gICAgICAgICAgICBidG4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIGJ0bi5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkYkNvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICAgICAgbGV0IGNvaW4gPSBVdGlscy5zdHJpbmdUb0ludCh0aGlzLmVkYkNvaW4uc3RyaW5nKTtcbiAgICAgICAgaWYgKGNvaW4gPD0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJT4buRIHRp4buBbiDEkcOjIG5o4bqtcCBraMO0bmcgaOG7o3AgbOG7hy5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcInh4ZW5nQ2FzaGluXCIsIHsgXCJjY2FzaFwiOiBjb2luIH0sIChyZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKCFyZXNbXCJva1wiXSkge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVGhhbyB0w6FjIHRo4bqldCBi4bqhaSwgdnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luRmlzaCA9IHJlc1tcIm5ld0Nhc2hcIl07XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaGFvIHTDoWMgdGjDoG5oIGPDtG5nLlwiKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcUdldE1vbmV5VXNlKCkpO1xuICAgICAgICB9LCB0aGlzLnBvcHVwKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZWRiQ29pbi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgfVxufVxuXG5AY2NjbGFzcyhcIk9hblR1VGkuUG9wdXBDb2luVHJhbnNmZXIuVGFiQ2FzaE91dFwiKVxuZXhwb3J0IGNsYXNzIFRhYkNhc2hPdXQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCYWxhbmNlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRiQ29pbjogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcXVpY2tCdXR0b25zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcG9wdXA6IFBvcHVwQ29pblRyYW5zZmVyID0gbnVsbDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWVzID0gWzUwMDAwLCAxMDAwMDAsIDIwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCAyMDAwMDAwLCA1MDAwMDAwLCAxMDAwMDAwMCwgMjAwMDAwMDBdO1xuXG4gICAgcHVibGljIHN0YXJ0KHBvcHVwOiBQb3B1cENvaW5UcmFuc2Zlcikge1xuICAgICAgICB0aGlzLnBvcHVwID0gcG9wdXA7XG4gICAgICAgIHRoaXMuZWRiQ29pbi5ub2RlLm9uKFwiZWRpdGluZy1kaWQtZW5kZWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KHRoaXMuZWRiQ29pbi5zdHJpbmcpO1xuICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLnF1aWNrQnV0dG9ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVzW2ldO1xuICAgICAgICAgICAgYnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICBidG4ub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzdWJtaXQoKSB7XG4gICAgICAgIGxldCBjb2luID0gVXRpbHMuc3RyaW5nVG9JbnQodGhpcy5lZGJDb2luLnN0cmluZyk7XG4gICAgICAgIGlmIChjb2luIDw9IDApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gxJHDoyBuaOG6rXAga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnJlcXVlc3QoXCJ4eGVuZ0Nhc2hpblwiLCB7IFwiY2Nhc2hcIjogLWNvaW4gfSwgKHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBpZiAoIXJlc1tcIm9rXCJdKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUaGFvIHTDoWMgdGjhuqV0IGLhuqFpLCB2dWkgbMOybmcgdGjhu60gbOG6oWkgc2F1LlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW5GaXNoID0gcmVzW1wibmV3Q2FzaFwiXTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlRoYW8gdMOhYyB0aMOgbmggY8O0bmcuXCIpO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXG4gICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxR2V0TW9uZXlVc2UoKSk7XG4gICAgICAgIH0sIHRoaXMucG9wdXApO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5lZGJDb2luLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luRmlzaCk7XG4gICAgfVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBDb2luVHJhbnNmZXIgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgdGFiczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YWJDb250ZW50czogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFRhYkNhc2hJbilcbiAgICB0YWJDYXNoSW46IFRhYkNhc2hJbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KFRhYkNhc2hPdXQpXG4gICAgdGFiQ2FzaE91dDogVGFiQ2FzaE91dCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRhYlNlbGVjdGVkSWR4ID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy50b2dnbGVJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW2ldLm5vZGUub24oXCJ0b2dnbGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiU2VsZWN0ZWRJZHggPSBpO1xuICAgICAgICAgICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFiQ2FzaEluLmxibEJhbGFuY2Uuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgICAgICB0aGlzLnRhYkNhc2hPdXQubGJsQmFsYW5jZS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luRmlzaCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudGFiQ2FzaEluLnN0YXJ0KHRoaXMpO1xuICAgICAgICB0aGlzLnRhYkNhc2hPdXQuc3RhcnQodGhpcyk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLnRhYlNlbGVjdGVkSWR4ID0gMDtcbiAgICAgICAgdGhpcy50YWJzLnRvZ2dsZUl0ZW1zW3RoaXMudGFiU2VsZWN0ZWRJZHhdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25UYWJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRhYkNoYW5nZWQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50YWJDb250ZW50cy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudGFiQ29udGVudHMuY2hpbGRyZW5baV0uYWN0aXZlID0gaSA9PSB0aGlzLnRhYlNlbGVjdGVkSWR4O1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodGhpcy50YWJTZWxlY3RlZElkeCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMudGFiQ2FzaEluLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy50YWJDYXNoT3V0LnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U3VibWl0Q2FzaEluKCkge1xuICAgICAgICB0aGlzLnRhYkNhc2hJbi5zdWJtaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0U3VibWl0Q2FzaE91dCgpIHtcbiAgICAgICAgdGhpcy50YWJDYXNoT3V0LnN1Ym1pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RDbGVhckNhc2hJbigpIHtcbiAgICAgICAgdGhpcy50YWJDYXNoSW4uZWRiQ29pbi5zdHJpbmcgPSBcIjBcIjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0Q2xlYXJDYXNoT3V0KCkge1xuICAgICAgICB0aGlzLnRhYkNhc2hPdXQuZWRiQ29pbi5zdHJpbmcgPSBcIjBcIjtcbiAgICB9XG59XG4iXX0=