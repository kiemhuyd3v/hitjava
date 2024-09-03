
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5Qb3B1cEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLGlFQUE0RDtBQUM1RCx1RUFBa0U7QUFDbEUscUVBQWdFO0FBSTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFNO0lBQXBEO1FBQUEscUVBMkxDO1FBekxHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBS3pCLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQztRQUV6QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBSyxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7UUFDN0IsVUFBSSxHQUFHLElBQUksQ0FBQztRQUNaLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixrQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixxQkFBZSxHQUFHLENBQUMsQ0FBQzs7SUFvS2hDLENBQUM7SUFuS0csaUNBQU0sR0FBTjtJQUVBLENBQUM7SUFDRCxnQ0FBSyxHQUFMO0lBR0EsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUss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QUFTLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO1NBQ0o7SUFDTCxDQUFDO0lBeExEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ007SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNNO0lBS3pCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dEQUNPO0lBYmhCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBMkxwQztJQUFELHVCQUFDO0NBM0xELEFBMkxDLENBM0w2QyxnQkFBTSxHQTJMbkQ7a0JBM0xvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBUcmFuc2FjdGlvbiBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQYWdlOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuXG4gICAgQHByb3BlcnR5KFtjYy5CaXRtYXBGb250XSlcbiAgICBmb250TnVtYmVyOiBjYy5CaXRtYXBGb250W10gPSBbXTtcblxuICAgIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIG1heFBhZ2U6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBkYXRhUGxheSA9IFtdO1xuICAgIHByaXZhdGUgZGF0YUNhc2hvdXQgPSBbXTtcbiAgICBwcml2YXRlIGRhdGFFeGNoYW5nZSA9IFtdO1xuICAgIHByaXZhdGUgY3VycmVudERhdGEgPSBbXTtcbiAgICBwcml2YXRlIHRvdGFsUGFnZUxvYWRlZCA9IDA7XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgXG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMucmVzZXREYXRhTG9hZGVkKCk7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0RGF0YUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VMb2FkZWQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gW107XG4gICAgICAgIHRoaXMuZGF0YUNhc2hvdXQgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhUGxheSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFFeGNoYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICBcblxuICAgIGxvYWRQYWdlKHJlcykge1xuICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhEYXRhID0gaTtcblxuICAgICAgICAgICAgaWYgKGluZGV4RGF0YSA8IHJlc1tcInRyYW5zYWN0aW9uc1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSByZXNbXCJ0cmFuc2FjdGlvbnNcIl1baW5kZXhEYXRhXTtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRyYW5zXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc0lkXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc2FjdGlvblRpbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNlcnZpY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBqc29uW1wicm9vbUlEXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyBcIitcIiA6IFwiXCIpICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJhbGFuY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJjdXJyZW50TW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyB0aGlzLmZvbnROdW1iZXJbMF0gOiB0aGlzLmZvbnROdW1iZXJbMV07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyAxNSA6IDE1O1xuXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9ICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5ub2RlLnBvc2l0aW9uID0gaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdID4gMCA/IGNjLnYzKHBvcy54LDE1LDApIDogY2MudjMocG9zLngsNSwwKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGxvYWREYXRhKGlzUmVsb2FkU2NyID0gdHJ1ZSkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBudWxsO1xuICAgICAgICBwYXJhbXMgPSB7IFwiY1wiOiAxNDAsIFwidW5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJwXCI6IHRoaXMucGFnZSB9O1xuICAgICAgICAvLyAgY2MubG9nKFwiSGlzdG9yeVRpZW5MZW4gcmVxdWVzdDpcIitKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCBwYXJhbXMsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJIaXN0b3J5VGllbkxlbiByZXNwb25zZTpcIitKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFBhZ2UgPSByZXNbXCJ0b3RhbFBhZ2VzXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlTG9hZGVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzO1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2FjdGlvbkRhdGEgPSByZXNbJ3RyYW5zYWN0aW9ucyddO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJ0cmFuc2FjdGlvbkRhdGE6XCIgKyBKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbFBhZ2VMb2FkZWQgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUGxheS5wdXNoKC4uLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmRhdGFQbGF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1tcInRvdGFsUGFnZXNcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFBhZ2UocmVzKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgXG4gICAgcHJpdmF0ZSBzZXREYXRhSXRlbShpdGVtLCBpdGVtRGF0YSkge1xuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUcmFuc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widHJhbnNJZFwiXTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRyYW5zYWN0aW9uVGltZVwiXTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNlcnZpY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBqc29uW1wicm9vbUlEXCJdO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gXCIrXCIgOiBcIlwiKSArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSBpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gdGhpcy5mb250TnVtYmVyWzBdIDogdGhpcy5mb250TnVtYmVyWzFdO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdID4gMCA/IDggOiA3O1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmFsYW5jZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImN1cnJlbnRNb25leVwiXSk7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXTtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBjb252ZXJ0TmFtZVRoaXJkUGFydHkoc2VydmljZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChzZXJ2aWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIldNX0RFUE9TSVRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJXTV9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpdmUgY2FzaW5vIFdNXCI7XG4gICAgICAgICAgICBjYXNlIFwiSUJDMl9ERVBPU0lUXCI6XG4gICAgICAgICAgICBjYXNlIFwiSUJDMl9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRo4buDIFRoYW8gSUJDXCI7XG4gICAgICAgICAgICBjYXNlIFwiQUdfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkFHX1dJVEhEUkFXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl2ZSBjYXNpbm8gQUdcIjtcbiAgICAgICAgICAgIGNhc2UgXCJDTURfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkNNRF9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRo4buDIHRoYW8gQ01EMzY4XCI7XG4gICAgICAgICAgICBjYXNlIFwiQ2FzaG91dFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlLDunQgdGnhu4FuXCI7XG4gICAgICAgICAgICBjYXNlIFwiMTkwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVMOgaSBY4buJdSBTacOqdSBU4buRY1wiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZU5hbWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblNjcm9sbEV2ZW50KHNjcm9sbHZpZXcsIGV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChldmVudFR5cGUgPT0gY2MuU2Nyb2xsVmlldy5FdmVudFR5cGUuU0NST0xMX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19