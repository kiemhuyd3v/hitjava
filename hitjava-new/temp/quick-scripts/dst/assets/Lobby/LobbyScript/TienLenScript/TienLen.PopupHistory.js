
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b5ba3a3PtIarQ/N7kV9loA', 'TienLen.PopupHistory');
// Lobby/LobbyScript/TienLenScript/TienLen.PopupHistory.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../Script/common/App");
var Dialog_1 = require("../Script/common/Dialog");
var Utils_1 = require("../Script/common/Utils");
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
        params = { "c": 139, "un": Configs_1.default.Login.Nickname, "p": this.page };
        //Utils.Log("HistoryTienLen request:"+JSON.stringify(params));
        Http_1.default.get(Configs_1.default.App.API, params, function (err, res) {
            var _a;
            App_1.default.instance.showLoading(false);
            //Utils.Log("HistoryTienLen response:"+JSON.stringify(res));
            if (err != null) {
                return;
            }
            if (res["success"]) {
                _this.maxPage = res["totalPages"];
                _this.totalPageLoaded++;
                _this.data = res;
                var transactionData = res['transactions'];
                //Utils.Log("transactionData:" + JSON.stringify(transactionData));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLlBvcHVwSGlzdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUNuRCxrREFBNkM7QUFDN0MsNENBQXVDO0FBQ3ZDLGtEQUE2QztBQUM3QyxnREFBMkM7QUFHckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBOEMsb0NBQU07SUFBcEQ7UUFBQSxxRUEyTEM7UUF6TEcsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFLekIsZ0JBQVUsR0FBb0IsRUFBRSxDQUFDO1FBRXpCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixXQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUM3QixVQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osY0FBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDOztJQW9LaEMsQ0FBQztJQW5LRyxpQ0FBTSxHQUFOO0lBRUEsQ0FBQztJQUNELGdDQUFLLEdBQUw7SUFHQSxDQUFDO0lBRUQsa0NBQU8sR0FBUDtRQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJ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ZTtRQUNoRCxJQUFJLFNBQVMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7U0FDSjtJQUNMLENBQUM7SUF4TEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ007SUFLekI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7d0RBQ087SUFiaEIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0EyTHBDO0lBQUQsdUJBQUM7Q0EzTEQsQUEyTEMsQ0EzTDZDLGdCQUFNLEdBMkxuRDtrQkEzTG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBUcmFuc2FjdGlvbiBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQYWdlOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuXG4gICAgQHByb3BlcnR5KFtjYy5CaXRtYXBGb250XSlcbiAgICBmb250TnVtYmVyOiBjYy5CaXRtYXBGb250W10gPSBbXTtcblxuICAgIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIG1heFBhZ2U6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSBkYXRhUGxheSA9IFtdO1xuICAgIHByaXZhdGUgZGF0YUNhc2hvdXQgPSBbXTtcbiAgICBwcml2YXRlIGRhdGFFeGNoYW5nZSA9IFtdO1xuICAgIHByaXZhdGUgY3VycmVudERhdGEgPSBbXTtcbiAgICBwcml2YXRlIHRvdGFsUGFnZUxvYWRlZCA9IDA7XG4gICAgb25Mb2FkKCkge1xuXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgXG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMucmVzZXREYXRhTG9hZGVkKCk7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0RGF0YUxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VMb2FkZWQgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRhID0gW107XG4gICAgICAgIHRoaXMuZGF0YUNhc2hvdXQgPSBbXTtcbiAgICAgICAgdGhpcy5kYXRhUGxheSA9IFtdO1xuICAgICAgICB0aGlzLmRhdGFFeGNoYW5nZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICBcblxuICAgIGxvYWRQYWdlKHJlcykge1xuICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXhEYXRhID0gaTtcblxuICAgICAgICAgICAgaWYgKGluZGV4RGF0YSA8IHJlc1tcInRyYW5zYWN0aW9uc1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSByZXNbXCJ0cmFuc2FjdGlvbnNcIl1baW5kZXhEYXRhXTtcbiAgICAgICAgICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRyYW5zXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc0lkXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc2FjdGlvblRpbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNlcnZpY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBqc29uW1wicm9vbUlEXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyBcIitcIiA6IFwiXCIpICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJhbGFuY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJjdXJyZW50TW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyB0aGlzLmZvbnROdW1iZXJbMF0gOiB0aGlzLmZvbnROdW1iZXJbMV07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IGl0ZW1EYXRhW1wibW9uZXlFeGNoYW5nZVwiXSA+IDAgPyAxNSA6IDE1O1xuXG4gICAgICAgICAgICAgICAgdmFyIHBvcyA9ICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5ub2RlLnBvc2l0aW9uID0gaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdID4gMCA/IGNjLnYzKHBvcy54LDE1LDApIDogY2MudjMocG9zLngsNSwwKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIGxvYWREYXRhKGlzUmVsb2FkU2NyID0gdHJ1ZSkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbXMgPSBudWxsO1xuICAgICAgICBwYXJhbXMgPSB7IFwiY1wiOiAxMzksIFwidW5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJwXCI6IHRoaXMucGFnZSB9O1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJIaXN0b3J5VGllbkxlbiByZXF1ZXN0OlwiK0pTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiSGlzdG9yeVRpZW5MZW4gcmVzcG9uc2U6XCIrSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzW1widG90YWxQYWdlc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUGFnZUxvYWRlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNhY3Rpb25EYXRhID0gcmVzWyd0cmFuc2FjdGlvbnMnXTtcbiAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJ0cmFuc2FjdGlvbkRhdGE6XCIgKyBKU09OLnN0cmluZ2lmeSh0cmFuc2FjdGlvbkRhdGEpKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbFBhZ2VMb2FkZWQgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhUGxheS5wdXNoKC4uLnRyYW5zYWN0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGEgPSB0aGlzLmRhdGFQbGF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1tcInRvdGFsUGFnZXNcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZFBhZ2UocmVzKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgXG4gICAgcHJpdmF0ZSBzZXREYXRhSXRlbShpdGVtLCBpdGVtRGF0YSkge1xuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXSk7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUcmFuc1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widHJhbnNJZFwiXTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRyYW5zYWN0aW9uVGltZVwiXTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNlcnZpY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBqc29uW1wicm9vbUlEXCJdO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gXCIrXCIgOiBcIlwiKSArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0pO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSBpdGVtRGF0YVtcIm1vbmV5RXhjaGFuZ2VcIl0gPiAwID8gdGhpcy5mb250TnVtYmVyWzBdIDogdGhpcy5mb250TnVtYmVyWzFdO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gaXRlbURhdGFbXCJtb25leUV4Y2hhbmdlXCJdID4gMCA/IDggOiA3O1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmFsYW5jZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImN1cnJlbnRNb25leVwiXSk7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJEZXNjXCIpLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCkuc3RyaW5nID0gaXRlbURhdGFbXCJkZXNjcmlwdGlvblwiXTtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBjb252ZXJ0TmFtZVRoaXJkUGFydHkoc2VydmljZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoIChzZXJ2aWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIldNX0RFUE9TSVRcIjpcbiAgICAgICAgICAgIGNhc2UgXCJXTV9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkxpdmUgY2FzaW5vIFdNXCI7XG4gICAgICAgICAgICBjYXNlIFwiSUJDMl9ERVBPU0lUXCI6XG4gICAgICAgICAgICBjYXNlIFwiSUJDMl9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRo4buDIFRoYW8gSUJDXCI7XG4gICAgICAgICAgICBjYXNlIFwiQUdfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkFHX1dJVEhEUkFXXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiTGl2ZSBjYXNpbm8gQUdcIjtcbiAgICAgICAgICAgIGNhc2UgXCJDTURfREVQT1NJVFwiOlxuICAgICAgICAgICAgY2FzZSBcIkNNRF9XSVRIRFJBV1wiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlRo4buDIHRoYW8gQ01EMzY4XCI7XG4gICAgICAgICAgICBjYXNlIFwiQ2FzaG91dFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIlLDunQgdGnhu4FuXCI7XG4gICAgICAgICAgICBjYXNlIFwiMTkwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiVMOgaSBY4buJdSBTacOqdSBU4buRY1wiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZU5hbWVcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblNjcm9sbEV2ZW50KHNjcm9sbHZpZXcsIGV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChldmVudFR5cGUgPT0gY2MuU2Nyb2xsVmlldy5FdmVudFR5cGUuU0NST0xMX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19