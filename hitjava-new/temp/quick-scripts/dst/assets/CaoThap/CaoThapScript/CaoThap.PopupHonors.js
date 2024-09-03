
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CaoThap/CaoThapScript/CaoThap.PopupHonors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2102dKYcKJPSaCuwo7ODtFN', 'CaoThap.PopupHonors');
// CaoThap/CaoThapScript/CaoThap.PopupHonors.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupHonors = /** @class */ (function (_super) {
    __extends(PopupHonors, _super);
    function PopupHonors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
    }
    PopupHonors.prototype.show = function () {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("CaoThap");
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        if (this.itemTemplate != null)
            this.itemTemplate.active = false;
    };
    PopupHonors.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupHonors.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    PopupHonors.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupHonors.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupHonors.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 108, "mt": Configs_1.default.App.MONEY_TYPE, "p": this.page }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            if (res["success"]) {
                if (_this.items.length == 0) {
                    for (var i = 0; i < 6; i++) {
                        var item = cc.instantiate(_this.itemTemplate);
                        item.parent = _this.itemTemplate.parent;
                        _this.items.push(item);
                    }
                    _this.itemTemplate.destroy();
                    _this.itemTemplate = null;
                }
                _this.maxPage = res["totalPages"];
                _this.lblPage.string = _this.page + "/" + _this.maxPage;
                for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
                    var item = _this.items[i_1];
                    if (i_1 < res["results"].length) {
                        var itemData = res["results"][i_1];
                        item.getChildByName("Time").getComponent(cc.Label).string = itemData["timestamp"];
                        item.getChildByName("Account").getComponent(cc.Label).string = itemData["nickname"];
                        item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                        item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["prize"]);
                        switch (itemData["result"]) {
                            case 4:
                                item.getChildByName("Result").getComponent(cc.Label).string = "Thắng lớn";
                                break;
                            default:
                                item.getChildByName("Result").getComponent(cc.Label).string = "Nổ hũ";
                                break;
                        }
                        item.active = true;
                    }
                    else {
                        item.active = false;
                    }
                }
            }
        });
    };
    __decorate([
        property(cc.Label)
    ], PopupHonors.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupHonors.prototype, "itemTemplate", void 0);
    PopupHonors = __decorate([
        ccclass
    ], PopupHonors);
    return PopupHonors;
}(Dialog_1.default));
exports.default = PopupHonors;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FvVGhhcFxcQ2FvVGhhcFNjcmlwdFxcQ2FvVGhhcC5Qb3B1cEhvbm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLGlFQUE0RDtBQUM1RCx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBK0ZDO1FBN0ZHLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDOztJQXVGekMsQ0FBQztJQXJGRywwQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixhQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFHcEUsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxD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LEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2dDQUN0RSxNQUFLO3lCQUNaO3dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3FCQUN0Qjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDdkI7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1c7SUFKWixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBK0YvQjtJQUFELGtCQUFDO0NBL0ZELEFBK0ZDLENBL0Z3QyxnQkFBTSxHQStGOUM7a0JBL0ZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEhvbm9ycyBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFBhZ2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIkNhb1RoYXBcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pdGVtVGVtcGxhdGUgIT0gbnVsbCkgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG5cblxuICAgIH1cblxuICAgIGRpc21pc3MoKXtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEwOCwgXCJtdFwiOiBDb25maWdzLkFwcC5NT05FWV9UWVBFLCBcInBcIjogdGhpcy5wYWdlIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0pIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1tcInRvdGFsUGFnZXNcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVzW1wicmVzdWx0c1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlc1tcInJlc3VsdHNcIl1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiVGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widGltZXN0YW1wXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkFjY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcIm5pY2tuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImJldFZhbHVlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJwcml6ZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGl0ZW1EYXRhW1wicmVzdWx0XCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVzdWx0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJUaOG6r25nIGzhu5tuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZXN1bHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIk7hu5UgaMWpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=