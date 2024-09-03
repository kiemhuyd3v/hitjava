
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3/Slot3Script/Slot3.PopupHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '29463Em8L9Ac4RYNPTQ3th1', 'Slot3.PopupHistory');
// Slot3/Slot3Script/Slot3.PopupHistory.ts

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
        _this.soundClick = null;
        _this.soundSlotState = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        return _this;
    }
    PopupHistory.prototype.show = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        if (this.itemTemplate != null)
            this.itemTemplate.active = false;
    };
    PopupHistory.prototype.dismiss = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
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
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupHistory.prototype.actPrevPage = function () {
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    PopupHistory.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 137, "p": this.page, "un": Configs_1.default.Login.Nickname, "gn": "Spartan" }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            if (!res["success"])
                return;
            //  cc.log(res);
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
                if (i_1 < res["results"].length) {
                    var itemData = res["results"][i_1];
                    item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 255 : 0;
                    item.getChildByName("Session").getComponent(cc.Label).string = itemData["rf"];
                    item.getChildByName("Time").getComponent(cc.Label).string = itemData["ts"];
                    item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["bv"]);
                    item.getChildByName("LineBet").getComponent(cc.Label).string = itemData["lb"] === "" ? 0 : itemData["lb"].split(",").length;
                    item.getChildByName("LineWin").getComponent(cc.Label).string = itemData["lw"] === "" ? 0 : itemData["lw"].split(",").length;
                    item.getChildByName("Win").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["pz"]);
                    item.active = true;
                }
                else {
                    item.active = false;
                }
            }
        });
    };
    PopupHistory.prototype.canPlaySound = function () {
        if (this.soundClick == null)
            return false;
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        if (soundSave != null) {
            this.soundSlotState = parseInt(soundSave);
        }
        else {
            this.soundSlotState = 1;
        }
        if (this.soundSlotState == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        property(cc.Label)
    ], PopupHistory.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupHistory.prototype, "itemTemplate", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PopupHistory.prototype, "soundClick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDNcXFNsb3QzU2NyaXB0XFxTbG90My5Qb3B1cEhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQyxpRUFBNEQ7QUFDNUQsdUVBQWtFO0FBQ2xFLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBTTtJQUFoRDtRQUFBLHFFQXdIQztRQXRIRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUN4QixvQkFBYyxHQUFHLElBQUksQ0FBQztRQUV0QixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsV0FBSyxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7O0lBNEd6QyxDQUFDO0lBMUdHLDJCQUFJLEdBQUo7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNyQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELGlCQUFNLElBQUksV0FBRSxDQUFDO1FBRWIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFN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QUFNO29CQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNJLElBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDekMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQXJIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO29EQUNEO0lBUGYsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXdIaEM7SUFBRCxtQkFBQztDQXhIRCxBQXdIQyxDQXhIeUMsZ0JBQU0sR0F3SC9DO2tCQXhIb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBIaXN0b3J5IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIHByaXZhdGUgc291bmRTbG90U3RhdGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QbGF5U291bmQoKSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5zaG93KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLml0ZW1UZW1wbGF0ZSAhPSBudWxsKSB0aGlzLml0ZW1UZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QbGF5U291bmQoKSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG5cbiAgICAgICAgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5tYXhQYWdlID0gMTtcbiAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgYWN0TmV4dFBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBsYXlTb3VuZCgpKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPCB0aGlzLm1heFBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0UHJldlBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBsYXlTb3VuZCgpKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UtLTtcbiAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgSHR0cC5nZXQoQ29uZmlncy5BcHAuQVBJLCB7IFwiY1wiOiAxMzcsIFwicFwiOiB0aGlzLnBhZ2UsIFwidW5cIjogQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgXCJnblwiOiBcIlNwYXJ0YW5cIiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgIGlmICghcmVzW1wic3VjY2Vzc1wiXSkgcmV0dXJuO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWF4UGFnZSA9IHJlc1tcInRvdGFsUGFnZXNcIl07XG4gICAgICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLm1heFBhZ2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPCByZXNbXCJyZXN1bHRzXCJdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSByZXNbXCJyZXN1bHRzXCJdW2ldO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYmdcIikub3BhY2l0eSA9IGkgJSAyID09IDAgPyAyNTUgOiAwO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiU2Vzc2lvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wicmZcIl07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ0c1wiXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImJ2XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkxpbmVCZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcImxiXCJdID09PSBcIlwiID8gMCA6IGl0ZW1EYXRhW1wibGJcIl0uc3BsaXQoXCIsXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkxpbmVXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcImx3XCJdID09PSBcIlwiID8gMCA6IGl0ZW1EYXRhW1wibHdcIl0uc3BsaXQoXCIsXCIpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIldpblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcInB6XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYW5QbGF5U291bmQoKSB7XG4gICAgICAgIGlmKHRoaXMuc291bmRDbGljayA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZF9TbG90XzFcIik7XG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IHBhcnNlSW50KHNvdW5kU2F2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==