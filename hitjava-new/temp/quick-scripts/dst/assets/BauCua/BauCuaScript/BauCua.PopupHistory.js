
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BauCua/BauCuaScript/BauCua.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmF1Q3VhXFxCYXVDdWFTY3JpcHRcXEJhdUN1YS5Qb3B1cEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLGlFQUE0RDtBQUM1RCx1RUFBa0U7QUFDbEUsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSxxRUFBeUQ7QUFFbkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQU07SUFBaEQ7UUFBQSxxRUE4RkM7UUE1RkcsYUFBTyxHQUFzQixJQUFJLENBQUM7UUFFMUIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDOztJQXVGaEMsQ0FBQztJQXRGRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxzQkFBc0IsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0Qsc0JBQXNCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQywyRUFBMkU7UUFDdEgsc0JBQXNCLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDLENBQUEsNkJBQTZCO1FBQ3RGLHNCQUFzQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDRCwyQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJ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QUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWxGLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hMLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6RixJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzSixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEYsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsaUNBQWdCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLGlDQUFnQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxpQ0FBZ0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvQ0FBYSxHQUFiLFVBQWMsVUFBVSxFQUFFLFNBQVMsRUFBRSxlQUFlO1FBQ2hELElBQUksU0FBUyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZELElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtTQUNKO0lBQ0wsQ0FBQztJQTNGRDtRQURDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQztpREFDTTtJQUZqQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOEZoQztJQUFELG1CQUFDO0NBOUZELEFBOEZDLENBOUZ5QyxnQkFBTSxHQThGL0M7a0JBOUZvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBTY3JvbGxWaWV3Q29udHJvbCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9TY3JvbGxWaWV3Q29udHJvbFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQmF1Q3VhQ29udHJvbGxlciBmcm9tIFwiLi9CYXVDdWEuQmF1Q3VhQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBIaXN0b3J5IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoU2Nyb2xsVmlld0NvbnRyb2wpXG4gICAgc2NyTGlzdDogU2Nyb2xsVmlld0NvbnRyb2wgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGRhdGFIaXN0b3J5ID0gW107XG4gICAgcHJpdmF0ZSB0b3RhbFBhZ2VMb2FkZWQgPSAwO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFZpZXdFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xuICAgICAgICBzY3JvbGxWaWV3RXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy8gVGhpcyBub2RlIGlzIHRoZSBub2RlIHRvIHdoaWNoIHlvdXIgZXZlbnQgaGFuZGxlciBjb2RlIGNvbXBvbmVudCBiZWxvbmdzXG4gICAgICAgIHNjcm9sbFZpZXdFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJCYXVDdWEuUG9wdXBIaXN0b3J5XCI7Ly8gVGhpcyBpcyB0aGUgY29kZSBmaWxlIG5hbWVcbiAgICAgICAgc2Nyb2xsVmlld0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvblNjcm9sbEV2ZW50XCI7XG4gICAgICAgIHRoaXMuc2NyTGlzdC5zY3JvbGxWaWV3LnNjcm9sbEV2ZW50cy5wdXNoKHNjcm9sbFZpZXdFdmVudEhhbmRsZXIpO1xuICAgIH1cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuZGF0YUhpc3RvcnkgPSBbXTtcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VMb2FkZWQgPSAwXG4gICAgICAgIHRoaXMuc2NyTGlzdC5zZXRTdGF0ZUl0ZW0oZmFsc2UpO1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgdGhpcy5zY3JMaXN0LnNldFN0YXRlSXRlbShmYWxzZSk7XG4gICAgfVxuXG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5tYXhQYWdlID0gMTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIGFjdE5leHRQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlIDwgdGhpcy5tYXhQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdFByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID4gMSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWREYXRhKGlzUmVsb2FkU2NyID0gdHJ1ZSkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTIxLCBcIm10XCI6IENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIFwicFwiOiB0aGlzLnBhZ2UsIFwidW5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzW1widG90YWxQYWdlc1wiXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b3RhbFBhZ2VMb2FkZWQgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhSGlzdG9yeS5wdXNoKC4uLnJlc1tcInRyYW5zYWN0aW9uc1wiXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlTG9hZGVkKys7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFIaXN0b3J5ID0gdGhpcy5kYXRhSGlzdG9yeS5zbGljZSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc1JlbG9hZFNjcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjckxpc3Quc2V0RGF0YUxpc3QodGhpcy5zZXRJdGVtRGF0YS5iaW5kKHRoaXMpLCBkYXRhSGlzdG9yeSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JMaXN0LnVwZGF0ZURhdGFMaXN0KGRhdGFIaXN0b3J5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRJdGVtRGF0YShpdGVtLCBpdGVtRGF0YSkge1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYmdcIikub3BhY2l0eSA9IGl0ZW1EYXRhLmluZGV4ICUgMiA9PSAwID8gMTAgOiAwO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU2Vzc2lvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiI1wiICsgaXRlbURhdGFbXCJyZWZlcmVuY2VJZFwiXTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRpbWVzdGFtcFwiXTtcblxuICAgICAgICBsZXQgYmV0VmFsdWVzID0gaXRlbURhdGFbXCJiZXRWYWx1ZXNcIl1bMF0gKyBpdGVtRGF0YVtcImJldFZhbHVlc1wiXVsxXSArIGl0ZW1EYXRhW1wiYmV0VmFsdWVzXCJdWzJdICsgaXRlbURhdGFbXCJiZXRWYWx1ZXNcIl1bM10gKyBpdGVtRGF0YVtcImJldFZhbHVlc1wiXVs0XSArIGl0ZW1EYXRhW1wiYmV0VmFsdWVzXCJdWzVdO1xuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldFZhbHVlcyk7XG5cbiAgICAgICAgbGV0IHByaXplcyA9IGl0ZW1EYXRhW1wicHJpemVzXCJdWzBdICsgaXRlbURhdGFbXCJwcml6ZXNcIl1bMV0gKyBpdGVtRGF0YVtcInByaXplc1wiXVsyXSArIGl0ZW1EYXRhW1wicHJpemVzXCJdWzNdICsgaXRlbURhdGFbXCJwcml6ZXNcIl1bNF0gKyBpdGVtRGF0YVtcInByaXplc1wiXVs1XTtcbiAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIldpblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihwcml6ZXMpO1xuXG4gICAgICAgIGxldCBkaWNlcyA9IGl0ZW1EYXRhW1wiZGljZXNcIl0uc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJlc3VsdFwiKTtcbiAgICAgICAgcmVzdWx0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQmF1Q3VhQ29udHJvbGxlci5pbnN0YW5jZS5zcHJSZXN1bHREaWNlc1tkaWNlc1swXV07XG4gICAgICAgIHJlc3VsdC5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IEJhdUN1YUNvbnRyb2xsZXIuaW5zdGFuY2Uuc3ByUmVzdWx0RGljZXNbZGljZXNbMV1dO1xuICAgICAgICByZXN1bHQuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBCYXVDdWFDb250cm9sbGVyLmluc3RhbmNlLnNwclJlc3VsdERpY2VzW2RpY2VzWzJdXTtcbiAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBvblNjcm9sbEV2ZW50KHNjcm9sbHZpZXcsIGV2ZW50VHlwZSwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChldmVudFR5cGUgPT0gY2MuU2Nyb2xsVmlldy5FdmVudFR5cGUuU0NST0xMX1RPX0JPVFRPTSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19