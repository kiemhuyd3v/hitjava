
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/OanTuTi/OanTuTiScript/OanTuTi.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1670dR+nNIG7R6Pfw6NB+L', 'OanTuTi.PopupHistory');
// OanTuTi/OanTuTiScript/OanTuTi.PopupHistory.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialogz_1 = require("../../Lobby/LobbyScript/Script/common/Dialogz");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupHistory = /** @class */ (function (_super) {
    __extends(PopupHistory, _super);
    function PopupHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.data = null;
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
            this.loadDataLocal();
        }
    };
    PopupHistory.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadDataLocal();
        }
    };
    PopupHistory.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("OTT3", {
            "userId": Configs_1.default.Login.UserIdFish
        }, function (res) {
            //   console.log(res);
            App_1.default.instance.showLoading(false);
            if (res["code"] != 200)
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
            _this.data = res["data"];
            _this.maxPage = Math.ceil(_this.data.length / 10);
            _this.page = 1;
            _this.loadDataLocal();
        }, this);
    };
    PopupHistory.prototype.loadDataLocal = function () {
        if (this.data == null)
            return;
        this.lblPage.string = this.page + "/" + this.maxPage;
        var startIdx = (this.page - 1) * 10;
        var count = 10;
        if (startIdx + count > this.data.length)
            count = this.data.length - startIdx;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (i < count) {
                var itemData = this.data[startIdx + i];
                item.getChildByName("bg").opacity = i % 2 == 0 ? 10 : 0;
                item.getChildByName("Session").getComponent(cc.Label).string = itemData["Id"];
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["GameTime"];
                if (itemData["Nickname1"] == Configs_1.default.Login.Nickname) {
                    item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice1"]);
                    item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname2"];
                    var result = "Hoà";
                    if (itemData["Result"] == 1) {
                        item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["CashChange1"]);
                        result = "Thắng";
                    }
                    else if (itemData["Result"] == 2) {
                        item.getChildByName("Receive").getComponent(cc.Label).string = Utils_1.default.formatNumber(-itemData["Blind"]);
                        result = "Thua";
                    }
                    else {
                        item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["Blind"]);
                    }
                    item.getChildByName("Result").getComponent(cc.Label).string = result;
                }
                else {
                    item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice2"]);
                    item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname1"];
                    var result = "Hoà";
                    if (itemData["Result"] == 2) {
                        item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["CashChange2"]);
                        result = "Thắng";
                    }
                    else if (itemData["Result"] == 1) {
                        item.getChildByName("Receive").getComponent(cc.Label).string = Utils_1.default.formatNumber(-itemData["Blind"]);
                        result = "Thua";
                    }
                    else {
                        item.getChildByName("Receive").getComponent(cc.Label).string = "+" + Utils_1.default.formatNumber(itemData["Blind"]);
                    }
                    item.getChildByName("Result").getComponent(cc.Label).string = result;
                }
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["Blind"]);
                item.active = true;
            }
            else {
                item.active = false;
            }
        }
    };
    //selectValue: 0: kéo, 1: bao, 2: búa
    PopupHistory.prototype.getChoiceName = function (choice) {
        switch (choice) {
            case 0:
                return "Kéo";
            case 1:
                return "Bao";
            case 2:
                return "Búa";
        }
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
}(Dialogz_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcT2FuVHVUaVxcT2FuVHVUaVNjcmlwdFxcT2FuVHVUaS5Qb3B1cEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELGlFQUE0RDtBQUM1RCx5RUFBbUU7QUFDbkUscUVBQWdFO0FBQ2hFLHlHQUFvRztBQUU5RixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQTJJQztRQXpJRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixXQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztRQUU3QixVQUFJLEdBQVEsSUFBSSxDQUFDOztJQWlJN0IsQ0FBQztJQS9IRywyQkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFFYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDcEUsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUs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OlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ3pcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFNob290RmlzaE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TaG9vdEZpc2hOZXR3b3JrQ2xpZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEhpc3RvcnkgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQYWdlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIG1heFBhZ2U6IG51bWJlciA9IDE7XG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxjYy5Ob2RlPigpO1xuXG4gICAgcHJpdmF0ZSBkYXRhOiBhbnkgPSBudWxsO1xuXG4gICAgc2hvdygpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pdGVtVGVtcGxhdGUgIT0gbnVsbCkgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLm1heFBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBhY3ROZXh0UGFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSA8IHRoaXMubWF4UGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlKys7XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhTG9jYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdFByZXZQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlID4gMSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhTG9jYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgU2hvb3RGaXNoTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnJlcXVlc3QoXCJPVFQzXCIsIHtcbiAgICAgICAgICAgIFwidXNlcklkXCI6IENvbmZpZ3MuTG9naW4uVXNlcklkRmlzaFxuICAgICAgICB9LCAocmVzKSA9PiB7XG4gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcImNvZGVcIl0gIT0gMjAwKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSByZXNbXCJkYXRhXCJdO1xuICAgICAgICAgICAgdGhpcy5tYXhQYWdlID0gTWF0aC5jZWlsKHRoaXMuZGF0YS5sZW5ndGggLyAxMCk7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YUxvY2FsKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZERhdGFMb2NhbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgbGV0IHN0YXJ0SWR4ID0gKHRoaXMucGFnZSAtIDEpICogMTA7XG4gICAgICAgIGxldCBjb3VudCA9IDEwO1xuICAgICAgICBpZiAoc3RhcnRJZHggKyBjb3VudCA+IHRoaXMuZGF0YS5sZW5ndGgpIGNvdW50ID0gdGhpcy5kYXRhLmxlbmd0aCAtIHN0YXJ0SWR4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgIGlmIChpIDwgY291bnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSB0aGlzLmRhdGFbc3RhcnRJZHggKyBpXTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYmdcIikub3BhY2l0eSA9IGkgJSAyID09IDAgPyAxMCA6IDA7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlNlc3Npb25cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcIklkXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJHYW1lVGltZVwiXTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbURhdGFbXCJOaWNrbmFtZTFcIl0gPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQ2hvaWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5nZXRDaG9pY2VOYW1lKGl0ZW1EYXRhW1wiQ2hvaWNlMVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJPdGhlclBsYXllclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wiTmlja25hbWUyXCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gXCJIb8OgXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtRGF0YVtcIlJlc3VsdFwiXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVjZWl2ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wiQ2FzaENoYW5nZTFcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gXCJUaOG6r25nXCJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtRGF0YVtcIlJlc3VsdFwiXSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVjZWl2ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcigtaXRlbURhdGFbXCJCbGluZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlRodWFcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJlY2VpdmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIkJsaW5kXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVzdWx0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJDaG9pY2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmdldENob2ljZU5hbWUoaXRlbURhdGFbXCJDaG9pY2UyXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIk90aGVyUGxheWVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJOaWNrbmFtZTFcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBcIkhvw6BcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhW1wiUmVzdWx0XCJdID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZWNlaXZlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJDYXNoQ2hhbmdlMlwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBcIlRo4bqvbmdcIlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW1EYXRhW1wiUmVzdWx0XCJdID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZWNlaXZlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKC1pdGVtRGF0YVtcIkJsaW5kXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFwiVGh1YVwiXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVjZWl2ZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wiQmxpbmRcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZXN1bHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJCbGluZFwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9zZWxlY3RWYWx1ZTogMDoga8OpbywgMTogYmFvLCAyOiBiw7phXG4gICAgcHJpdmF0ZSBnZXRDaG9pY2VOYW1lKGNob2ljZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAoY2hvaWNlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS8Opb1wiO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhb1wiO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkLDumFcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==