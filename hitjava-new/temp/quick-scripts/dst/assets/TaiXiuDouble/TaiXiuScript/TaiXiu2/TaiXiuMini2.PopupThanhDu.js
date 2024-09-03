
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.PopupThanhDu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7237dIxfDJG+4vMYmu8zlaF', 'TaiXiuMini2.PopupThanhDu');
// TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.PopupThanhDu.ts

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
var PopupThanhDu = /** @class */ (function (_super) {
    __extends(PopupThanhDu, _super);
    function PopupThanhDu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprTabNormal = null;
        _this.sprTabActive = null;
        _this.tabs = null;
        _this.childTabs = null;
        _this.itemTemplate = null;
        _this.lblDate = null;
        _this.selectedTab = 0;
        _this.selectedChildTab = 0;
        _this.date = new Date();
        _this.items = new Array();
        return _this;
    }
    PopupThanhDu.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var tab = this_1.tabs.children[i];
            tab.on("click", function () {
                _this.selectedTab = i;
                _this.selectedChildTab = 0;
                _this.date = new Date();
                _this.updateTabSpriteFrame();
                _this.loadData();
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.tabs.childrenCount; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            var tab = this_2.childTabs.children[i];
            tab.on("click", function () {
                _this.selectedChildTab = i;
                _this.updateTabSpriteFrame();
                _this.loadData();
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.childTabs.childrenCount; i++) {
            _loop_2(i);
        }
    };
    PopupThanhDu.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
    };
    PopupThanhDu.prototype.show = function () {
        _super.prototype.show.call(this);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        if (this.itemTemplate != null)
            this.itemTemplate.active = false;
    };
    PopupThanhDu.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.selectedTab = 0;
        this.selectedChildTab = 0;
        this.updateTabSpriteFrame();
        this.loadData();
    };
    PopupThanhDu.prototype.actNext = function () {
        if (this.selectedTab === 0) {
            this.date.setDate(this.date.getDate() + 1);
        }
        else {
            this.date.setMonth(this.date.getMonth() + 1);
        }
        this.loadData();
    };
    PopupThanhDu.prototype.actPrev = function () {
        if (this.selectedTab === 0) {
            this.date.setDate(this.date.getDate() - 1);
        }
        else {
            this.date.setMonth(this.date.getMonth() - 1);
        }
        this.loadData();
    };
    PopupThanhDu.prototype.updateTabSpriteFrame = function () {
        for (var i = 0; i < this.tabs.childrenCount; i++) {
            var tab = this.tabs.children[i];
            tab.getComponent(cc.Sprite).spriteFrame = this.selectedTab == i ? this.sprTabActive : this.sprTabNormal;
        }
        for (var i = 0; i < this.childTabs.childrenCount; i++) {
            var tab = this.childTabs.children[i];
            tab.getComponent(cc.Sprite).spriteFrame = this.selectedChildTab == i ? this.sprTabActive : this.sprTabNormal;
        }
    };
    PopupThanhDu.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        var typeTop = this.selectedChildTab === 0 ? 1 : 0;
        var date = this.selectedTab === 0 ? Utils_1.default.dateToYYYYMMdd(this.date) : Utils_1.default.dateToYYYYMM(this.date);
        this.lblDate.string = date;
        var params = this.selectedTab === 0 ? { "c": 103, "date": date, "type": typeTop, "txType": 2 } : { "c": 103, "month": date, "type": typeTop, "txType": 2 };
        Http_1.default.get(Configs_1.default.App.API, params, function (err, res) {
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
            for (var i_1 = 0; i_1 < _this.items.length; i_1++) {
                var item = _this.items[i_1];
                if (i_1 < res["results"].length) {
                    var itemData = res["results"][i_1];
                    item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                    item.getChildByName("no").getComponent(cc.Label).string = (i_1 + 1).toString();
                    item.getChildByName("account").getComponent(cc.Label).string = itemData["username"];
                    item.getChildByName("count").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["number"]);
                    item.getChildByName("winlose").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["totalMoney"]);
                    item.getChildByName("session").getComponent(cc.Label).string = "#" + itemData["referenceId"];
                    item.getChildByName("award").getComponent(cc.Label).string = itemData["prize"];
                    item.active = true;
                }
                else {
                    item.active = false;
                }
            }
        });
    };
    __decorate([
        property(cc.SpriteFrame)
    ], PopupThanhDu.prototype, "sprTabNormal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupThanhDu.prototype, "sprTabActive", void 0);
    __decorate([
        property(cc.Node)
    ], PopupThanhDu.prototype, "tabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupThanhDu.prototype, "childTabs", void 0);
    __decorate([
        property(cc.Node)
    ], PopupThanhDu.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Label)
    ], PopupThanhDu.prototype, "lblDate", void 0);
    PopupThanhDu = __decorate([
        ccclass
    ], PopupThanhDu);
    return PopupThanhDu;
}(Dialog_1.default));
exports.default = PopupThanhDu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTJcXFRhaVhpdU1pbmkyLlBvcHVwVGhhbmhEdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLG9FQUErRDtBQUMvRCwwRUFBcUU7QUFDckUsd0VBQW1FO0FBRzdELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFNO0lBQWhEO1FBQUEscUVBd0lDO1FBcklHLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUVwQyxrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFFcEMsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFakIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLFVBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBRWxCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDOztJQXFIekMsQ0FBQztJQW5IRyw0QkFBSyxHQUFMO1FBQUEsaUJBb0JDO2dDQW5CWSxDQUFDO1lBQ04sSUFBSSxHQUFHLEdBQUcsT0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUks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Ly4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFRoYW5oRHUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwclRhYk5vcm1hbDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJUYWJBY3RpdmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YWJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGlsZFRhYnM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibERhdGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgc2VsZWN0ZWRUYWIgPSAwO1xuICAgIHByaXZhdGUgc2VsZWN0ZWRDaGlsZFRhYiA9IDA7XG4gICAgcHJpdmF0ZSBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0YWIgPSB0aGlzLnRhYnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB0YWIub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IGk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoaWxkVGFiID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFiU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZFRhYnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFiID0gdGhpcy5jaGlsZFRhYnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICB0YWIub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoaWxkVGFiID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhYlNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXRlbVRlbXBsYXRlICE9IG51bGwpIHRoaXMuaXRlbVRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSAwO1xuICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpbGRUYWIgPSAwO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYlNwcml0ZUZyYW1lKCk7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBhY3ROZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKHRoaXMuZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIGFjdFByZXYoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgodGhpcy5kYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUYWJTcHJpdGVGcmFtZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdGFiID0gdGhpcy50YWJzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdGFiLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZWxlY3RlZFRhYiA9PSBpID8gdGhpcy5zcHJUYWJBY3RpdmUgOiB0aGlzLnNwclRhYk5vcm1hbDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRUYWJzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHRhYiA9IHRoaXMuY2hpbGRUYWJzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdGFiLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZWxlY3RlZENoaWxkVGFiID09IGkgPyB0aGlzLnNwclRhYkFjdGl2ZSA6IHRoaXMuc3ByVGFiTm9ybWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIHZhciB0eXBlVG9wID0gdGhpcy5zZWxlY3RlZENoaWxkVGFiID09PSAwID8gMSA6IDA7XG4gICAgICAgIHZhciBkYXRlID0gdGhpcy5zZWxlY3RlZFRhYiA9PT0gMCA/IFV0aWxzLmRhdGVUb1lZWVlNTWRkKHRoaXMuZGF0ZSkgOiBVdGlscy5kYXRlVG9ZWVlZTU0odGhpcy5kYXRlKTtcbiAgICAgICAgdGhpcy5sYmxEYXRlLnN0cmluZyA9IGRhdGU7XG4gICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnNlbGVjdGVkVGFiID09PSAwID8geyBcImNcIjogMTAzLCBcImRhdGVcIjogZGF0ZSwgXCJ0eXBlXCI6IHR5cGVUb3AsIFwidHhUeXBlXCI6IDIgfSA6IHsgXCJjXCI6IDEwMywgXCJtb250aFwiOiBkYXRlLCBcInR5cGVcIjogdHlwZVRvcCwgXCJ0eFR5cGVcIjogMiB9O1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoIXJlc1tcInN1Y2Nlc3NcIl0pIHJldHVybjtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHJlc1tcInJlc3VsdHNcIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlc1tcInJlc3VsdHNcIl1baV07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5vcGFjaXR5ID0gaSAlIDIgPT0gMCA/IDEwIDogMDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5vXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm51bWJlclwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJ3aW5sb3NlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1widG90YWxNb25leVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJzZXNzaW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIjXCIgKyBpdGVtRGF0YVtcInJlZmVyZW5jZUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInByaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=