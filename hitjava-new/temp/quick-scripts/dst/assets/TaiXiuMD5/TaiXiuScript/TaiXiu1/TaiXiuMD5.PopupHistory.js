
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d521L9urFJc4VOfBC2Su3w', 'TaiXiuMD5.PopupHistory');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupHistory.ts

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
            _this.itemTemplate = null;
            _this.page = 1;
            _this.maxPage = 1;
            _this.items = new Array();
            return _this;
        }
        PopupHistory.prototype.show = function () {
            _super.prototype.show.call(this);
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
            Http_1.default.get(Configs_1.default.App.API, { "c": 100, "p": this.page, "un": Configs_1.default.Login.Nickname, "mt": Configs_1.default.App.MONEY_TYPE, "txType": 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (!res["success"])
                    return;
                if (_this.items.length == 0) {
                    for (var i = 0; i < 10; i++) {
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
                    if (i_1 < res["transactions"].length) {
                        var itemData = res["transactions"][i_1];
                        item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                        item.getChildByName("lblSession").getComponent(cc.Label).string = "#" + itemData["referenceId"];
                        item.getChildByName("lblTime").getComponent(cc.Label).string = itemData["timestamp"];
                        item.getChildByName("lblBetDoor").getComponent(cc.Label).string = itemData["betSide"] == 1 ? "TÀI" : "XỈU";
                        item.getChildByName("lblResult").getComponent(cc.Label).string = itemData["resultPhien"];
                        item.getChildByName("lblBet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                        item.getChildByName("lblRefund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalRefund"]);
                        item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalPrize"]);
                        item.active = true;
                    }
                    else {
                        item.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5Qb3B1cEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3QyxvRUFBK0Q7QUFDL0QsMEVBQXFFO0FBQ3JFLHdFQUFtRTtBQUc3RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLFVBQVUsQ0E2Rm5CO0FBN0ZELFdBQVUsVUFBVTtJQUVoQjtRQUFrQyxnQ0FBTTtRQUF4QztZQUFBLHFFQTBGQztZQXZGRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1lBRXpCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1lBRXJCLFVBQUksR0FBVyxDQUFDLENBQUM7WUFDakIsYUFBTyxHQUFXLENBQUMsQ0FBQztZQUNwQixXQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7UUFpRnpDLENBQUM7UUEvRUcsMkJBQUksR0FBSjtZQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1lBRWIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDaEM7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEUsQ0FBQztRQUVELDhCQUFPLEdBQVA7WUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztZQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFB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QkFDekYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3dCQUN2RyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBQzdHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDekcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7cUJBQ3RCO3lCQUFNO3dCQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3FCQUN2QjtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQXRGRDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNNO1FBRXpCO1lBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1c7UUFMcEIsWUFBWTtZQUR4QixPQUFPO1dBQ0ssWUFBWSxDQTBGeEI7UUFBRCxtQkFBQztLQTFGRCxBQTBGQyxDQTFGaUMsZ0JBQU0sR0EwRnZDO0lBMUZZLHVCQUFZLGVBMEZ4QixDQUFBO0FBQ0wsQ0FBQyxFQTdGUyxVQUFVLEtBQVYsVUFBVSxRQTZGbkI7QUFDRCxrQkFBZSxVQUFVLENBQUMsWUFBWSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSB0YWl4aXVtaW5pIHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cEhpc3RvcnkgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICAgICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBwcml2YXRlIHBhZ2U6IG51bWJlciA9IDE7XG4gICAgICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICAgICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICBzdXBlci5zaG93KCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtVGVtcGxhdGUgIT0gbnVsbCkgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzKCkge1xuICAgICAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gMTtcbiAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdE5leHRQYWdlKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEwMCwgXCJwXCI6IHRoaXMucGFnZSwgXCJ1blwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcIm10XCI6IENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIFwidHhUeXBlXCI6IDEgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc1tcInN1Y2Nlc3NcIl0pIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1heFBhZ2UgPSByZXNbXCJ0b3RhbFBhZ2VzXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJlc1tcInRyYW5zYWN0aW9uc1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlc1tcInRyYW5zYWN0aW9uc1wiXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5vcGFjaXR5ID0gaSAlIDIgPT0gMCA/IDEwIDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxTZXNzaW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIjXCIgKyBpdGVtRGF0YVtcInJlZmVyZW5jZUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInRpbWVzdGFtcFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxCZXREb29yXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJiZXRTaWRlXCJdID09IDEgPyBcIlTDgElcIiA6IFwiWOG7iFVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxSZXN1bHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInJlc3VsdFBoaWVuXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibEJldFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImJldFZhbHVlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxSZWZ1bmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJ0b3RhbFJlZnVuZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsV2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1widG90YWxQcml6ZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YWl4aXVtaW5pLlBvcHVwSGlzdG9yeTsiXX0=