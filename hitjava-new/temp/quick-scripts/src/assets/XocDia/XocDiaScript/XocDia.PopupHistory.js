"use strict";
cc._RF.push(module, '6f30edFcmBPA4H+ytFf3aNk', 'XocDia.PopupHistory');
// XocDia/XocDiaScript/XocDia.PopupHistory.ts

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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupTransaction = /** @class */ (function (_super) {
    __extends(PopupTransaction, _super);
    function PopupTransaction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content = null;
        _this.prefab = null;
        _this.lblPage = null;
        _this.fontNumber = [];
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.data = null;
        _this.dataPlay = [];
        _this.dataCashout = [];
        _this.dataExchange = [];
        _this.currentData = [];
        _this.totalPageLoaded = 0;
        return _this;
    }
    PopupTransaction.prototype.onLoad = function () {
    };
    PopupTransaction.prototype.start = function () {
    };
    PopupTransaction.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupTransaction.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    PopupTransaction.prototype.show = function () {
        _super.prototype.show.call(this);
        this.resetDataLoaded();
        this.currentData = [];
        this.data;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupTransaction.prototype.resetDataLoaded = function () {
        this.totalPageLoaded = 0;
        this.currentData = [];
        this.dataCashout = [];
        this.dataPlay = [];
        this.dataExchange = [];
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupTransaction.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupTransaction.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupTransaction.prototype.loadPage = function (res) {
        this.content.removeAllChildren();
        for (var i = 0; i < 13; i++) {
            var indexData = i;
            if (indexData < res["transactions"].length) {
                var item = cc.instantiate(this.prefab);
                item.parent = this.content;
                var itemData = res["transactions"][indexData];
                var json = JSON.parse(itemData["description"]);
                item.getChildByName("Trans").getComponent(cc.Label).string = itemData["transId"];
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["transactionTime"];
                item.getChildByName("Service").getComponent(cc.Label).string = json["roomID"];
                item.getChildByName("Coin").getComponent(cc.Label).string = (itemData["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData["moneyExchange"]);
                item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["currentMoney"]);
                item.getChildByName("Coin").getComponent(cc.Label).font = itemData["moneyExchange"] > 0 ? this.fontNumber[0] : this.fontNumber[1];
                item.getChildByName("Coin").getComponent(cc.Label).fontSize = itemData["moneyExchange"] > 0 ? 15 : 15;
                var pos = item.getChildByName("Coin").getComponent(cc.Label).node.position;
                item.getChildByName("Coin").getComponent(cc.Label).node.position = itemData["moneyExchange"] > 0 ? cc.v3(pos.x, 15, 0) : cc.v3(pos.x, 5, 0);
            }
        }
    };
    PopupTransaction.prototype.loadData = function (isReloadScr) {
        var _this = this;
        if (isReloadScr === void 0) { isReloadScr = true; }
        App_1.default.instance.showLoading(true);
        var params = null;
        params = { "c": 140, "un": Configs_1.default.Login.Nickname, "p": this.page };
        //  cc.log("HistoryTienLen request:"+JSON.stringify(params));
        Http_1.default.get(Configs_1.default.App.API, params, function (err, res) {
            var _a;
            App_1.default.instance.showLoading(false);
            //  cc.log("HistoryTienLen response:"+JSON.stringify(res));
            if (err != null) {
                return;
            }
            if (res["success"]) {
                _this.maxPage = res["totalPages"];
                _this.totalPageLoaded++;
                _this.data = res;
                var transactionData = res['transactions'];
                //  cc.log("transactionData:" + JSON.stringify(transactionData));
                if (_this.totalPageLoaded < _this.maxPage) {
                    (_a = _this.dataPlay).push.apply(_a, __spread(transactionData));
                    _this.currentData = _this.dataPlay;
                }
                _this.maxPage = res["totalPages"];
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                _this.loadPage(res);
            }
            else {
                _this.content.removeAllChildren();
            }
        });
    };
    PopupTransaction.prototype.setDataItem = function (item, itemData) {
        var json = JSON.parse(itemData["description"]);
        item.getChildByName("Trans").getComponent(cc.Label).string = itemData["transId"];
        item.getChildByName("Time").getComponent(cc.Label).string = itemData["transactionTime"];
        item.getChildByName("Service").getComponent(cc.Label).string = json["roomID"];
        item.getChildByName("Coin").getComponent(cc.Label).string = (itemData["moneyExchange"] > 0 ? "+" : "") + Utils_1.default.formatNumber(itemData["moneyExchange"]);
        item.getChildByName("Coin").getComponent(cc.Label).font = itemData["moneyExchange"] > 0 ? this.fontNumber[0] : this.fontNumber[1];
        item.getChildByName("Coin").getComponent(cc.Label).fontSize = itemData["moneyExchange"] > 0 ? 8 : 7;
        item.getChildByName("Balance").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["currentMoney"]);
        item.getChildByName("Desc").getComponent(cc.RichText).string = itemData["description"];
        item.active = true;
    };
    PopupTransaction.prototype.convertNameThirdParty = function (serviceName) {
        switch (serviceName) {
            case "WM_DEPOSIT":
            case "WM_WITHDRAW":
                return "Live casino WM";
            case "IBC2_DEPOSIT":
            case "IBC2_WITHDRAW":
                return "Thể Thao IBC";
            case "AG_DEPOSIT":
            case "AG_WITHDRAW":
                return "Live casino AG";
            case "CMD_DEPOSIT":
            case "CMD_WITHDRAW":
                return "Thể thao CMD368";
            case "Cashout":
                return "Rút tiền";
            case "190":
                return "Tài Xỉu Siêu Tốc";
            default:
                return serviceName;
        }
    };
    PopupTransaction.prototype.onScrollEvent = function (scrollview, eventType, customEventData) {
        if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM) {
            if (this.page < this.maxPage) {
                this.page++;
                this.loadData(false);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], PopupTransaction.prototype, "prefab", void 0);
    __decorate([
        property(cc.Label)
    ], PopupTransaction.prototype, "lblPage", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], PopupTransaction.prototype, "fontNumber", void 0);
    PopupTransaction = __decorate([
        ccclass
    ], PopupTransaction);
    return PopupTransaction;
}(Dialog_1.default));
exports.default = PopupTransaction;

cc._RF.pop();