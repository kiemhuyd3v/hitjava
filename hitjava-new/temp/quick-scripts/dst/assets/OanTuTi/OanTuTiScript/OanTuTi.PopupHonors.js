
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/OanTuTi/OanTuTiScript/OanTuTi.PopupHonors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dbd49yYsz1BmZQ6ZieAMc2B', 'OanTuTi.PopupHonors');
// OanTuTi/OanTuTiScript/OanTuTi.PopupHonors.ts

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
var PopupHonors = /** @class */ (function (_super) {
    __extends(PopupHonors, _super);
    function PopupHonors() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.itemTemplate = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.data = null;
        return _this;
    }
    PopupHonors.prototype.show = function () {
        _super.prototype.show.call(this);
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
            this.loadDataLocal();
        }
    };
    PopupHonors.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadDataLocal();
        }
    };
    PopupHonors.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        ShootFishNetworkClient_1.default.getInstance().request("OTT4", {
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
    PopupHonors.prototype.loadDataLocal = function () {
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
                item.getChildByName("Time").getComponent(cc.Label).string = itemData["GameTime"];
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["Blind"]);
                item.getChildByName("Player").getComponent(cc.Label).string = itemData["Nickname1"];
                item.getChildByName("Choice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice1"]);
                item.getChildByName("OtherPlayer").getComponent(cc.Label).string = itemData["Nickname2"];
                item.getChildByName("OtherChoice").getComponent(cc.Label).string = this.getChoiceName(itemData["Choice2"]);
                item.getChildByName("Receive").getComponent(cc.Label).string = itemData["CashChange1"] > itemData["CashChange2"] ? Utils_1.default.formatNumber(itemData["CashChange1"]) : Utils_1.default.formatNumber(itemData["CashChange2"]);
                item.active = true;
            }
            else {
                item.active = false;
            }
        }
    };
    //selectValue: 0: kéo, 1: bao, 2: búa
    PopupHonors.prototype.getChoiceName = function (choice) {
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
    ], PopupHonors.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], PopupHonors.prototype, "itemTemplate", void 0);
    PopupHonors = __decorate([
        ccclass
    ], PopupHonors);
    return PopupHonors;
}(Dialogz_1.default));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcT2FuVHVUaVxcT2FuVHVUaVNjcmlwdFxcT2FuVHVUaS5Qb3B1cEhvbm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsaUVBQTREO0FBQzVELHlFQUFtRTtBQUNuRSxxRUFBZ0U7QUFDaEUseUdBQW9HO0FBRTlGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBa0hDO1FBaEhHLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBRTdCLFVBQUksR0FBUSxJQUFJLENBQUM7O0lBd0c3QixDQUFDO0lBdEdHLDBCQUFJLEdBQUo7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUViLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDaEM7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNwRSxDQUFDO0lBRUQsNkJBQU8sR0FBUDtRQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxD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TUFBYztRQUNoQyxRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssQ0FBQztnQkFDRixPQUFPLEtBQUssQ0FBQztZQUNqQixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxLQUFLLENBQUM7WUFDakIsS0FBSyxDQUFDO2dCQUNGLE9BQU8sS0FBSyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQS9HRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1c7SUFKWixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa0gvQjtJQUFELGtCQUFDO0NBbEhELEFBa0hDLENBbEh3QyxpQkFBTSxHQWtIOUM7a0JBbEhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ3pcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFNob290RmlzaE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TaG9vdEZpc2hOZXR3b3JrQ2xpZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEhvbm9ycyBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFBhZ2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgbWF4UGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICBwcml2YXRlIGRhdGE6IGFueSA9IG51bGw7XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLml0ZW1UZW1wbGF0ZSAhPSBudWxsKSB0aGlzLml0ZW1UZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG4gICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgIHRoaXMubWF4UGFnZSA9IDE7XG4gICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIGFjdE5leHRQYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5wYWdlIDwgdGhpcy5tYXhQYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGFMb2NhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0UHJldlBhZ2UoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPiAxKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UtLTtcbiAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMubWF4UGFnZTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGFMb2NhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkucmVxdWVzdChcIk9UVDRcIiwge1xuICAgICAgICAgICAgXCJ1c2VySWRcIjogQ29uZmlncy5Mb2dpbi5Vc2VySWRGaXNoXG4gICAgICAgIH0sIChyZXMpID0+IHtcbiAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBpZiAocmVzW1wiY29kZVwiXSAhPSAyMDApIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc1tcImRhdGFcIl07XG4gICAgICAgICAgICB0aGlzLm1heFBhZ2UgPSBNYXRoLmNlaWwodGhpcy5kYXRhLmxlbmd0aCAvIDEwKTtcbiAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhTG9jYWwoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YUxvY2FsKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy5tYXhQYWdlO1xuICAgICAgICBsZXQgc3RhcnRJZHggPSAodGhpcy5wYWdlIC0gMSkgKiAxMDtcbiAgICAgICAgbGV0IGNvdW50ID0gMTA7XG4gICAgICAgIGlmIChzdGFydElkeCArIGNvdW50ID4gdGhpcy5kYXRhLmxlbmd0aCkgY291bnQgPSB0aGlzLmRhdGEubGVuZ3RoIC0gc3RhcnRJZHg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKGkgPCBjb3VudCkge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHRoaXMuZGF0YVtzdGFydElkeCArIGldO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5vcGFjaXR5ID0gaSAlIDIgPT0gMCA/IDEwIDogMDtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiVGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wiR2FtZVRpbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIkJsaW5kXCJdKTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUGxheWVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJOaWNrbmFtZTFcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkNob2ljZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZ2V0Q2hvaWNlTmFtZShpdGVtRGF0YVtcIkNob2ljZTFcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJPdGhlclBsYXllclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wiTmlja25hbWUyXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJPdGhlckNob2ljZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZ2V0Q2hvaWNlTmFtZShpdGVtRGF0YVtcIkNob2ljZTJcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZWNlaXZlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJDYXNoQ2hhbmdlMVwiXSA+IGl0ZW1EYXRhW1wiQ2FzaENoYW5nZTJcIl0gPyBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJDYXNoQ2hhbmdlMVwiXSkgOiBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJDYXNoQ2hhbmdlMlwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9zZWxlY3RWYWx1ZTogMDoga8OpbywgMTogYmFvLCAyOiBiw7phXG4gICAgcHJpdmF0ZSBnZXRDaG9pY2VOYW1lKGNob2ljZTogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAoY2hvaWNlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiS8Opb1wiO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkJhb1wiO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIkLDumFcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==