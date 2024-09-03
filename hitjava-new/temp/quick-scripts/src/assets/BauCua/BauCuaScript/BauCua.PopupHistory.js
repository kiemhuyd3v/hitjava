"use strict";
cc._RF.push(module, 'c5aeaULcr1B6Kb50KQNLQjR', 'BauCua.PopupHistory');
// BauCua/BauCuaScript/BauCua.PopupHistory.ts

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
var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var BauCua_BauCuaController_1 = require("./BauCua.BauCuaController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupHistory = /** @class */ (function (_super) {
    __extends(PopupHistory, _super);
    function PopupHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrList = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.dataHistory = [];
        _this.totalPageLoaded = 0;
        return _this;
    }
    PopupHistory.prototype.onLoad = function () {
        var scrollViewEventHandler = new cc.Component.EventHandler();
        scrollViewEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
        scrollViewEventHandler.component = "BauCua.PopupHistory"; // This is the code file name
        scrollViewEventHandler.handler = "onScrollEvent";
        this.scrList.scrollView.scrollEvents.push(scrollViewEventHandler);
    };
    PopupHistory.prototype.show = function () {
        _super.prototype.show.call(this);
        this.dataHistory = [];
        this.totalPageLoaded = 0;
        this.scrList.setStateItem(false);
    };
    PopupHistory.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        this.scrList.setStateItem(false);
    };
    PopupHistory.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.loadData();
    };
    PopupHistory.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.loadData();
        }
    };
    PopupHistory.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.loadData();
        }
    };
    PopupHistory.prototype.loadData = function (isReloadScr) {
        var _this = this;
        if (isReloadScr === void 0) { isReloadScr = true; }
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 121, "mt": Configs_1.default.App.MONEY_TYPE, "p": this.page, "un": Configs_1.default.Login.Nickname }, function (err, res) {
            var _a;
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            if (res["success"]) {
                _this.maxPage = res["totalPages"];
                if (_this.totalPageLoaded < _this.maxPage) {
                    (_a = _this.dataHistory).push.apply(_a, __spread(res["transactions"]));
                }
                _this.totalPageLoaded++;
                var dataHistory = _this.dataHistory.slice();
                if (isReloadScr) {
                    _this.scrList.setDataList(_this.setItemData.bind(_this), dataHistory);
                }
                else {
                    _this.scrList.updateDataList(dataHistory);
                }
            }
        });
    };
    PopupHistory.prototype.setItemData = function (item, itemData) {
        item.getChildByName("bg").opacity = itemData.index % 2 == 0 ? 10 : 0;
        item.getChildByName("Session").getComponent(cc.Label).string = "#" + itemData["referenceId"];
        item.getChildByName("Time").getComponent(cc.Label).string = itemData["timestamp"];
        var betValues = itemData["betValues"][0] + itemData["betValues"][1] + itemData["betValues"][2] + itemData["betValues"][3] + itemData["betValues"][4] + itemData["betValues"][5];
        item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(betValues);
        var prizes = itemData["prizes"][0] + itemData["prizes"][1] + itemData["prizes"][2] + itemData["prizes"][3] + itemData["prizes"][4] + itemData["prizes"][5];
        item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(prizes);
        var dices = itemData["dices"].split(",");
        var result = item.getChildByName("Result");
        result.children[0].getComponent(cc.Sprite).spriteFrame = BauCua_BauCuaController_1.default.instance.sprResultDices[dices[0]];
        result.children[1].getComponent(cc.Sprite).spriteFrame = BauCua_BauCuaController_1.default.instance.sprResultDices[dices[1]];
        result.children[2].getComponent(cc.Sprite).spriteFrame = BauCua_BauCuaController_1.default.instance.sprResultDices[dices[2]];
        item.active = true;
    };
    PopupHistory.prototype.onScrollEvent = function (scrollview, eventType, customEventData) {
        if (eventType == cc.ScrollView.EventType.SCROLL_TO_BOTTOM) {
            if (this.page < this.maxPage) {
                this.page++;
                this.loadData(false);
            }
        }
    };
    __decorate([
        property(ScrollViewControl_1.default)
    ], PopupHistory.prototype, "scrList", void 0);
    PopupHistory = __decorate([
        ccclass
    ], PopupHistory);
    return PopupHistory;
}(Dialog_1.default));
exports.default = PopupHistory;

cc._RF.pop();