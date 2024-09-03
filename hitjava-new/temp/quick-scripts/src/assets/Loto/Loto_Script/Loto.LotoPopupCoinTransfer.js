"use strict";
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