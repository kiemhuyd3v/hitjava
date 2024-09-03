"use strict";
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