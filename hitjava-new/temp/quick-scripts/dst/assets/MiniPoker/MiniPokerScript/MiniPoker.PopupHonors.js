
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MiniPoker/MiniPokerScript/MiniPoker.PopupHonors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c964IwGZFIxJXkH/FCDSI0', 'MiniPoker.PopupHonors');
// MiniPoker/MiniPokerScript/MiniPoker.PopupHonors.ts

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
        App_1.default.instance.showBgMiniGame("MiniPoker");
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
        Http_1.default.get(Configs_1.default.App.API, { "c": 106, "mt": Configs_1.default.App.MONEY_TYPE, "p": this.page }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            cc.log("res==", JSON.stringify(res));
            if (res["success"]) {
                if (_this.items.length == 0) {
                    for (var i = 0; i < 7; i++) {
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
                        item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
                        item.getChildByName("Account").getComponent(cc.Label).string = itemData["un"];
                        item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
                        item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
                        item.getChildByName("Result").getComponent(cc.Label).string = "Nổ hũ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWluaVBva2VyXFxNaW5pUG9rZXJTY3JpcHRcXE1pbmlQb2tlci5Qb3B1cEhvbm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsK0NBQTBDO0FBQzFDLGlFQUE0RDtBQUM1RCx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBMkZDO1FBekZHLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDOztJQW1GekMsQ0FBQztJQWpGRywwQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixhQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFHcEUsQ0FBQztJQUVELDZCQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcs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QUN0Qjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztxQkFDdkI7aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1c7SUFKWixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkYvQjtJQUFELGtCQUFDO0NBM0ZELEFBMkZDLENBM0Z3QyxnQkFBTSxHQTJGOUM7a0JBM0ZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEhvbm9ycyBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFBhZ2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIk1pbmlQb2tlclwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXRlbVRlbXBsYXRlICE9IG51bGwpIHRoaXMuaXRlbVRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuXG5cbiAgICB9XG5cbiAgICBkaXNtaXNzKCl7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5tYXhQYWdlID0gMTtcbiAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgYWN0TmV4dFBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0UHJldlBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UtLTtcbiAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMDYsIFwibXRcIjogQ29uZmlncy5BcHAuTU9ORVlfVFlQRSwgXCJwXCI6IHRoaXMucGFnZSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIGNjLmxvZyhcInJlcz09XCIsSlNPTi5zdHJpbmdpZnkocmVzXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gcmVzW1widG90YWxQYWdlc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCByZXNbXCJyZXN1bHRzXCJdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzW1wicmVzdWx0c1wiXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0c1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJBY2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ1blwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJidlwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiV2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wicHpcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZXN1bHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIk7hu5UgaMWpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=