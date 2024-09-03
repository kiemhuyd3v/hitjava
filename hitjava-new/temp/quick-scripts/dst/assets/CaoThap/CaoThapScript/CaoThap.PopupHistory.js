
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CaoThap/CaoThapScript/CaoThap.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca485p4tQhO3JvdidJzPzNa', 'CaoThap.PopupHistory');
// CaoThap/CaoThapScript/CaoThap.PopupHistory.ts

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
var PopupHistory = /** @class */ (function (_super) {
    __extends(PopupHistory, _super);
    function PopupHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.fontNum = [];
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
    }
    PopupHistory.prototype.show = function () {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("CaoThap");
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        if (this.itemTemplate != null)
            this.itemTemplate.active = false;
    };
    PopupHistory.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
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
    PopupHistory.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 107, "mt": Configs_1.default.App.MONEY_TYPE, "p": this.page, "nn": Configs_1.default.Login.Nickname }, function (err, res) {
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
                        item.getChildByName("Session").getComponent(cc.Label).string = itemData["transId"];
                        item.getChildByName("Time").getComponent(cc.Label).string = itemData["timestamp"];
                        item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                        item.getChildByName("Result").getComponent(cc.Label).string = itemData["cards"];
                        item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["prize"]);
                        item.getChildByName("Win").getComponent(cc.Label).font = itemData['prize'] > 0 ? _this.fontNum[1] : _this.fontNum[0];
                        item.getChildByName("Step").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["step"]);
                        if (itemData["step"] == 1) {
                            item.getChildByName("BetDoor").getComponent(cc.Label).string = "";
                        }
                        else {
                            item.getChildByName("BetDoor").getComponent(cc.Label).string = itemData["potBet"] == 0 ? "Dưới" : "Trên";
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
    ], PopupHistory.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupHistory.prototype, "itemTemplate", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], PopupHistory.prototype, "fontNum", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FvVGhhcFxcQ2FvVGhhcFNjcmlwdFxcQ2FvVGhhcC5Qb3B1cEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQyxpRUFBNEQ7QUFDNUQsdUVBQWtFO0FBQ2xFLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQW1HQztRQWpHRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGFBQU8sR0FBb0IsRUFBRSxDQUFDO1FBRXRCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixXQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7SUF3RnpDLENBQUM7SUF0RkcsMkJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBQ2IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBR3BFLENBQUM7SUFFRCw4QkFBTyxHQUFQO1FBQ0ksaUJBQU0sT0FBTyxXQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FB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VUFBVSxDQUFDLENBQUM7aURBQ0k7SUFQYixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUdoQztJQUFELG1CQUFDO0NBbkdELEFBbUdDLENBbkd5QyxnQkFBTSxHQW1HL0M7a0JBbkdvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBIaXN0b3J5IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLkJpdG1hcEZvbnRdKVxuICAgIGZvbnROdW06IGNjLkJpdG1hcEZvbnRbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIkNhb1RoYXBcIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLml0ZW1UZW1wbGF0ZSAhPSBudWxsKSB0aGlzLml0ZW1UZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcblxuXG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEwNywgXCJtdFwiOiBDb25maWdzLkFwcC5NT05FWV9UWVBFLCBcInBcIjogdGhpcy5wYWdlLCBcIm5uXCI6IENvbmZpZ3MuTG9naW4uTmlja25hbWUgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzW1widG90YWxQYWdlc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCByZXNbXCJyZXN1bHRzXCJdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzW1wicmVzdWx0c1wiXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTZXNzaW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0cmFuc0lkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRpbWVzdGFtcFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJiZXRWYWx1ZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVzdWx0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJjYXJkc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJwcml6ZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiV2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udCA9IGl0ZW1EYXRhWydwcml6ZSddID4gMCA/IHRoaXMuZm9udE51bVsxXSA6IHRoaXMuZm9udE51bVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJTdGVwXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wic3RlcFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbURhdGFbXCJzdGVwXCJdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0RG9vclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXREb29yXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJwb3RCZXRcIl0gPT0gMCA/IFwiRMaw4bubaVwiIDogXCJUcsOqblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19