
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupThanhDu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4cbaZlzz5C24Im4AdHMjCb', 'TaiXiuMini.PopupThanhDu');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupThanhDu.ts

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
            App_1.default.instance.showBgMiniGame("TaiXiu");
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
            var params = this.selectedTab === 0 ? { "c": 103, "date": date, "type": typeTop, "txType": 1 } : { "c": 103, "month": date, "type": typeTop, "txType": 1 };
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
    taixiumini.PopupThanhDu = PopupThanhDu;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupThanhDu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuUG9wdXBUaGFuaER1LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUFtRDtBQUNuRCxrREFBNkM7QUFDN0Msb0VBQStEO0FBQy9ELDBFQUFxRTtBQUNyRSx3RUFBbUU7QUFFN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxVQUFVLENBNEluQjtBQTVJRCxXQUFVLFVBQVU7SUFHaEI7UUFBa0MsZ0NBQU07UUFBeEM7WUFBQSxxRUF3SUM7WUFySUcsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1lBRXBDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztZQUVwQyxVQUFJLEdBQVksSUFBSSxDQUFDO1lBRXJCLGVBQVMsR0FBWSxJQUFJLENBQUM7WUFFMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7WUFFN0IsYUFBTyxHQUFhLElBQUksQ0FBQztZQUVqQixpQkFBVyxHQUFHLENBQUMsQ0FBQztZQUNoQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDckIsVUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFbEIsV0FBSyxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7O1FBcUh6QyxDQUFDO1FBbkhHLDRCQUFLLEdBQUw7WUFBQSxpQkFvQkM7b0NBbkJZLENBQUM7Z0JBQ04sSUFBSSxHQUFHLEdBQUcsT0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtvQkFDWixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLElB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S0F4SUQsQUF3SUMsQ0F4SWlDLGdCQUFNLEdBd0l2QztJQXhJWSx1QkFBWSxlQXdJeEIsQ0FBQTtBQUNMLENBQUMsRUE1SVMsVUFBVSxLQUFWLFVBQVUsUUE0SW5CO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDLFlBQVksQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgdGFpeGl1bWluaSB7XG5cbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cFRoYW5oRHUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICAgICAgc3ByVGFiTm9ybWFsOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICAgICAgc3ByVGFiQWN0aXZlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICB0YWJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGNoaWxkVGFiczogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibERhdGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgICAgICBwcml2YXRlIHNlbGVjdGVkVGFiID0gMDtcbiAgICAgICAgcHJpdmF0ZSBzZWxlY3RlZENoaWxkVGFiID0gMDtcbiAgICAgICAgcHJpdmF0ZSBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFiID0gdGhpcy50YWJzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRhYi5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlsZFRhYiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFiU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRUYWJzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0YWIgPSB0aGlzLmNoaWxkVGFicy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0YWIub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlsZFRhYiA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFiU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzcygpIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1UZW1wbGF0ZSAhPSBudWxsKSB0aGlzLml0ZW1UZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IDA7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpbGRUYWIgPSAwO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJTcHJpdGVGcmFtZSgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0TmV4dCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKSArIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgodGhpcy5kYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdFByZXYoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZFRhYiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXREYXRlKHRoaXMuZGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldE1vbnRoKHRoaXMuZGF0ZS5nZXRNb250aCgpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIHVwZGF0ZVRhYlNwcml0ZUZyYW1lKCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRhYnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhYiA9IHRoaXMudGFicy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0YWIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNlbGVjdGVkVGFiID09IGkgPyB0aGlzLnNwclRhYkFjdGl2ZSA6IHRoaXMuc3ByVGFiTm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkVGFicy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFiID0gdGhpcy5jaGlsZFRhYnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgdGFiLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZWxlY3RlZENoaWxkVGFiID09IGkgPyB0aGlzLnNwclRhYkFjdGl2ZSA6IHRoaXMuc3ByVGFiTm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcblxuICAgICAgICAgICAgdmFyIHR5cGVUb3AgPSB0aGlzLnNlbGVjdGVkQ2hpbGRUYWIgPT09IDAgPyAxIDogMDtcbiAgICAgICAgICAgIHZhciBkYXRlID0gdGhpcy5zZWxlY3RlZFRhYiA9PT0gMCA/IFV0aWxzLmRhdGVUb1lZWVlNTWRkKHRoaXMuZGF0ZSkgOiBVdGlscy5kYXRlVG9ZWVlZTU0odGhpcy5kYXRlKTtcbiAgICAgICAgICAgIHRoaXMubGJsRGF0ZS5zdHJpbmcgPSBkYXRlO1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMuc2VsZWN0ZWRUYWIgPT09IDAgPyB7IFwiY1wiOiAxMDMsIFwiZGF0ZVwiOiBkYXRlLCBcInR5cGVcIjogdHlwZVRvcCwgXCJ0eFR5cGVcIjogMSB9IDogeyBcImNcIjogMTAzLCBcIm1vbnRoXCI6IGRhdGUsIFwidHlwZVwiOiB0eXBlVG9wLCBcInR4VHlwZVwiOiAxIH07XG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHBhcmFtcywgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc1tcInN1Y2Nlc3NcIl0pIHJldHVybjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHJlc1tcInJlc3VsdHNcIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURhdGEgPSByZXNbXCJyZXN1bHRzXCJdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLm9wYWNpdHkgPSBpICUgMiA9PSAwID8gMTAgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIm5vXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImFjY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcInVzZXJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImNvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibnVtYmVyXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJ3aW5sb3NlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1widG90YWxNb25leVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwic2Vzc2lvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiI1wiICsgaXRlbURhdGFbXCJyZWZlcmVuY2VJZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wicHJpemVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCB0YWl4aXVtaW5pLlBvcHVwVGhhbmhEdTtcbiJdfQ==