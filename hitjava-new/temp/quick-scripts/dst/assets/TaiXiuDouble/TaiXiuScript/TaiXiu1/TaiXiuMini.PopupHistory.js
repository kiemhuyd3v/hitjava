
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '321ecIaHMtPuqAY23OxAZx1', 'TaiXiuMini.PopupHistory');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupHistory.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Http_1 = require("../../../Loading/src/Http");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var taixiumini;
(function (taixiumini) {
    var PopupHistory = /** @class */ (function (_super) {
        __extends(PopupHistory, _super);
        function PopupHistory() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.lblPage = null;
            _this.prefab = null;
            _this.scroll = null;
            // @property([cc.BitmapFont])
            // fontNumber: cc.BitmapFont[] = [];
            _this.page = 1;
            _this.maxPage = 1;
            _this.items = new Array();
            _this.historyData = [];
            _this.totalPageLoaded = 0;
            return _this;
        }
        PopupHistory.prototype.onLoad = function () {
        };
        PopupHistory.prototype.show = function () {
            _super.prototype.show.call(this);
            App_1.default.instance.showBgMiniGame("TaiXiu");
            this.historyData = [];
            this.totalPageLoaded = 0;
            cc.tween(this.node).to(0.5, { y: 0 }, { easing: cc.easing.cubicOut }).start();
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
        };
        PopupHistory.prototype.dismiss = function () {
            _super.prototype.dismiss.call(this);
            cc.tween(this.node).to(0.5, { y: -100 }, { easing: cc.easing.sineOut }).start();
            this.scroll.content.removeAllChildren();
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
        };
        PopupHistory.prototype._onShowed = function () {
            _super.prototype._onShowed.call(this);
            this.page = 1;
            this.maxPage = 1;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        };
        PopupHistory.prototype.actNextPage = function () {
            if (this.page < this.maxPage) {
                this.page++;
                this.lblPage.string = this.page + "/" + this.maxPage;
                this.loadData();
            }
        };
        PopupHistory.prototype.actPrevPage = function () {
            if (this.page > 1) {
                this.page--;
                this.lblPage.string = this.page + "/" + this.maxPage;
                this.loadData();
            }
        };
        PopupHistory.prototype.loadData = function (isReloadScr) {
            var _this = this;
            if (isReloadScr === void 0) { isReloadScr = true; }
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { "c": 100, "p": this.page, "un": Configs_1.default.Login.Nickname, "mt": Configs_1.default.App.MONEY_TYPE, "txType": 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (!res["success"])
                    return;
                //  cc.log("History :" + this.page + " : " + JSON.stringify(res));
                _this.totalPageLoaded++;
                _this.maxPage = res["totalPages"];
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                _this.loadHistory(res["transactions"]);
            });
        };
        PopupHistory.prototype.loadHistory = function (datahistory) {
            //  cc.log("loadHistory:", datahistory);
            this.scroll.content.removeAllChildren();
            for (var i = 0; i < datahistory.length; i++) {
                var node = cc.instantiate(this.prefab);
                node.parent = this.scroll.content;
                this.setItemData(node, datahistory[i]);
            }
        };
        PopupHistory.prototype.setItemData = function (item, itemData) {
            var index = itemData['index'];
            item.getChildByName("bg").opacity = index % 2 == 0 ? 255 : 0;
            item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["referenceId"];
            item.getChildByName("lblTime").getComponent(cc.Label).string = itemData["timestamp"].replace(" ", "\n");
            item.getChildByName("lblBetDoor").getComponent(cc.Label).string = itemData["betSide"] == 1 ? "TÀI" : "XỈU";
            item.getChildByName("lblResult").getComponent(cc.Label).string = itemData["resultPhien"];
            item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
            item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalRefund"]);
            item.getChildByName("lblJackpot").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalJp"]);
            item.getChildByName("lblRefund").getComponent(cc.Label).node.color = itemData['totalRefund'] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
            item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalPrize"]);
            item.getChildByName("lblWin").getComponent(cc.Label).node.color = itemData['totalPrize'] > 0 ? new cc.Color(240, 191, 11) : new cc.Color(240, 48, 11);
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
            property(cc.Label)
        ], PopupHistory.prototype, "lblPage", void 0);
        __decorate([
            property(cc.Node)
        ], PopupHistory.prototype, "prefab", void 0);
        __decorate([
            property(cc.ScrollView)
        ], PopupHistory.prototype, "scroll", void 0);
        PopupHistory = __decorate([
            ccclass
        ], PopupHistory);
        return PopupHistory;
    }(Dialog_1.default));
    taixiumini.PopupHistory = PopupHistory;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupHistory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuUG9wdXBIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUNuRCxrREFBNkM7QUFDN0Msb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSx3RUFBbUU7QUFHN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxVQUFVLENBc0huQjtBQXRIRCxXQUFVLFVBQVU7SUFFaEI7UUFBa0MsZ0NBQU07UUFBeEM7WUFBQSxxRUFrSEM7WUEvR0csYUFBTyxHQUFhLElBQUksQ0FBQztZQUd6QixZQUFNLEdBQVksSUFBSSxDQUFDO1lBRXZCLFlBQU0sR0FBa0IsSUFBSSxDQUFDO1lBRTdCLDZCQUE2QjtZQUM3QixvQ0FBb0M7WUFFNUIsVUFBSSxHQUFXLENBQUMsQ0FBQztZQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1lBQ3BCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1lBQzdCLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDOztRQWlHaEMsQ0FBQztRQS9GRyw2QkFBTSxHQUFOO1FBRUEsQ0FBQztRQUVELDJCQUFJLEdBQUo7WUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztZQUNiLGFBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVB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Q0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDM0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3ZHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM3RyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFKLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6RyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEosSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUNELG9DQUFhLEdBQWIsVUFBYyxVQUFVLEVBQUUsU0FBUyxFQUFFLGVBQWU7WUFDaEQsSUFBSSxTQUFTLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDeEI7YUFDSjtRQUNMLENBQUM7UUE5R0Q7WUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDTTtRQUd6QjtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNLO1FBRXZCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7b0RBQ0s7UUFScEIsWUFBWTtZQUR4QixPQUFPO1dBQ0ssWUFBWSxDQWtIeEI7UUFBRCxtQkFBQztLQWxIRCxBQWtIQyxDQWxIaUMsZ0JBQU0sR0FrSHZDO0lBbEhZLHVCQUFZLGVBa0h4QixDQUFBO0FBRUwsQ0FBQyxFQXRIUyxVQUFVLEtBQVYsVUFBVSxRQXNIbkI7QUFDRCxrQkFBZSxVQUFVLENBQUMsWUFBWSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSB0YWl4aXVtaW5pIHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cEhpc3RvcnkgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBwcmVmYWI6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICAgICAgc2Nyb2xsOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcblxuICAgICAgICAvLyBAcHJvcGVydHkoW2NjLkJpdG1hcEZvbnRdKVxuICAgICAgICAvLyBmb250TnVtYmVyOiBjYy5CaXRtYXBGb250W10gPSBbXTtcblxuICAgICAgICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDE7XG4gICAgICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICAgICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuICAgICAgICBwcml2YXRlIGhpc3RvcnlEYXRhID0gW107XG4gICAgICAgIHByaXZhdGUgdG90YWxQYWdlTG9hZGVkID0gMDtcblxuICAgICAgICBvbkxvYWQoKSB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVcIik7XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnlEYXRhID0gW107XG4gICAgICAgICAgICB0aGlzLnRvdGFsUGFnZUxvYWRlZCA9IDA7XG5cdFx0XHRjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuNSwgeyB5OiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuY3ViaWNPdXQgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzKCkge1xuICAgICAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuXHRcdFx0Y2MudHdlZW4odGhpcy5ub2RlKS50bygwLjUsIHsgeTogLTEwMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblx0XHRcblxuICAgICAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcblxuICAgICAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IDE7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0UHJldlBhZ2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlID4gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGxvYWREYXRhKGlzUmVsb2FkU2NyID0gdHJ1ZSkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMDAsIFwicFwiOiB0aGlzLnBhZ2UsIFwidW5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJtdFwiOiBDb25maWdzLkFwcC5NT05FWV9UWVBFLCBcInR4VHlwZVwiOiAxIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNbXCJzdWNjZXNzXCJdKSByZXR1cm47XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkhpc3RvcnkgOlwiICsgdGhpcy5wYWdlICsgXCIgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlTG9hZGVkKys7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzW1widG90YWxQYWdlc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSGlzdG9yeShyZXNbXCJ0cmFuc2FjdGlvbnNcIl0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZEhpc3RvcnkoZGF0YWhpc3RvcnkpIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJsb2FkSGlzdG9yeTpcIiwgZGF0YWhpc3RvcnkpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGwuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhaGlzdG9yeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5zY3JvbGwuY29udGVudDtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEl0ZW1EYXRhKG5vZGUsIGRhdGFoaXN0b3J5W2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRJdGVtRGF0YShpdGVtLCBpdGVtRGF0YSkge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gaXRlbURhdGFbJ2luZGV4J11cbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5vcGFjaXR5ID0gaW5kZXggJSAyID09IDAgPyAyNTUgOiAwO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFNlc3Npb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiNcIiArIGl0ZW1EYXRhW1wicmVmZXJlbmNlSWRcIl07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsVGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widGltZXN0YW1wXCJdLnJlcGxhY2UoXCIgXCIsIFwiXFxuXCIpO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibEJldERvb3JcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcImJldFNpZGVcIl0gPT0gMSA/IFwiVMOASVwiIDogXCJY4buIVVwiO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJlc3VsdFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wicmVzdWx0UGhpZW5cIl07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsQmV0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wiYmV0VmFsdWVcIl0pO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJlZnVuZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcInRvdGFsUmVmdW5kXCJdKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxKYWNrcG90XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1widG90YWxKcFwiXSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsUmVmdW5kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkubm9kZS5jb2xvciA9IGl0ZW1EYXRhWyd0b3RhbFJlZnVuZCddID4gMCA/IG5ldyBjYy5Db2xvcigyNDAsIDE5MSwgMTEpIDogbmV3IGNjLkNvbG9yKDI0MCwgNDgsIDExKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJ0b3RhbFByaXplXCJdKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5ub2RlLmNvbG9yID0gaXRlbURhdGFbJ3RvdGFsUHJpemUnXSA+IDAgPyBuZXcgY2MuQ29sb3IoMjQwLCAxOTEsIDExKSA6IG5ldyBjYy5Db2xvcigyNDAsIDQ4LCAxMSk7XG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgb25TY3JvbGxFdmVudChzY3JvbGx2aWV3LCBldmVudFR5cGUsIGN1c3RvbUV2ZW50RGF0YSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50VHlwZSA9PSBjYy5TY3JvbGxWaWV3LkV2ZW50VHlwZS5TQ1JPTExfVE9fQk9UVE9NKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCB0YWl4aXVtaW5pLlBvcHVwSGlzdG9yeTsiXX0=