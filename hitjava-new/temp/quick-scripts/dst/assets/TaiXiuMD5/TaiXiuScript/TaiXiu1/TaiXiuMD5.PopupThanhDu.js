
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupThanhDu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7054eHPrBdGpIsXC4aF7KDN', 'TaiXiuMD5.PopupThanhDu');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupThanhDu.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5Qb3B1cFRoYW5oRHUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3QyxvRUFBK0Q7QUFDL0QsMEVBQXFFO0FBQ3JFLHdFQUFtRTtBQUU3RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLFVBQVUsQ0E0SW5CO0FBNUlELFdBQVUsVUFBVTtJQUdoQjtRQUFrQyxnQ0FBTTtRQUF4QztZQUFBLHFFQXdJQztZQXJJRyxrQkFBWSxHQUFtQixJQUFJLENBQUM7WUFFcEMsa0JBQVksR0FBbUIsSUFBSSxDQUFDO1lBRXBDLFVBQUksR0FBWSxJQUFJLENBQUM7WUFFckIsZUFBUyxHQUFZLElBQUksQ0FBQztZQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztZQUU3QixhQUFPLEdBQWEsSUFBSSxDQUFDO1lBRWpCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLHNCQUFnQixHQUFHLENBQUMsQ0FBQztZQUNyQixVQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUVsQixXQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQzs7UUFxSHpDLENBQUM7UUFuSEcsNEJBQUssR0FBTDtZQUFBLGlCQW9CQztvQ0FuQlksQ0FBQztnQkFDTixJQUFJLEdBQUcsR0FBRyxPQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO29CQUNaLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO29CQUNyQixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO29CQUMxQixLQUFJLENBQUMsSUFBSSxH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O0FBQ0wsQ0FBQyxFQTVJUyxVQUFVLEtBQVYsVUFBVSxRQTRJbkI7QUFDRCxrQkFBZSxVQUFVLENBQUMsWUFBWSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgdGFpeGl1bWluaSB7XG5cbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cFRoYW5oRHUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICAgICAgc3ByVGFiTm9ybWFsOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICAgICAgc3ByVGFiQWN0aXZlOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICB0YWJzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGNoaWxkVGFiczogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgICAgIGxibERhdGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgICAgICBwcml2YXRlIHNlbGVjdGVkVGFiID0gMDtcbiAgICAgICAgcHJpdmF0ZSBzZWxlY3RlZENoaWxkVGFiID0gMDtcbiAgICAgICAgcHJpdmF0ZSBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFiID0gdGhpcy50YWJzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRhYi5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlsZFRhYiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFiU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRUYWJzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0YWIgPSB0aGlzLmNoaWxkVGFicy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0YWIub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlsZFRhYiA9IGk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFiU3ByaXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzcygpIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbVRlbXBsYXRlICE9IG51bGwpIHRoaXMuaXRlbVRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgX29uU2hvd2VkKCkge1xuICAgICAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGFiID0gMDtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlsZFRhYiA9IDA7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhYlNwcml0ZUZyYW1lKCk7XG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3ROZXh0KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRUYWIgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZS5zZXRNb250aCh0aGlzLmRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWN0UHJldigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkVGFiID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKSAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGUuc2V0TW9udGgodGhpcy5kYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgdXBkYXRlVGFiU3ByaXRlRnJhbWUoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudGFicy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFiID0gdGhpcy50YWJzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRhYi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2VsZWN0ZWRUYWIgPT0gaSA/IHRoaXMuc3ByVGFiQWN0aXZlIDogdGhpcy5zcHJUYWJOb3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRUYWJzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB0YWIgPSB0aGlzLmNoaWxkVGFicy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0YWIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNlbGVjdGVkQ2hpbGRUYWIgPT0gaSA/IHRoaXMuc3ByVGFiQWN0aXZlIDogdGhpcy5zcHJUYWJOb3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIGxvYWREYXRhKCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgICAgICB2YXIgdHlwZVRvcCA9IHRoaXMuc2VsZWN0ZWRDaGlsZFRhYiA9PT0gMCA/IDEgOiAwO1xuICAgICAgICAgICAgdmFyIGRhdGUgPSB0aGlzLnNlbGVjdGVkVGFiID09PSAwID8gVXRpbHMuZGF0ZVRvWVlZWU1NZGQodGhpcy5kYXRlKSA6IFV0aWxzLmRhdGVUb1lZWVlNTSh0aGlzLmRhdGUpO1xuICAgICAgICAgICAgdGhpcy5sYmxEYXRlLnN0cmluZyA9IGRhdGU7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5zZWxlY3RlZFRhYiA9PT0gMCA/IHsgXCJjXCI6IDEwMywgXCJkYXRlXCI6IGRhdGUsIFwidHlwZVwiOiB0eXBlVG9wLCBcInR4VHlwZVwiOiAxIH0gOiB7IFwiY1wiOiAxMDMsIFwibW9udGhcIjogZGF0ZSwgXCJ0eXBlXCI6IHR5cGVUb3AsIFwidHhUeXBlXCI6IDEgfTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgcGFyYW1zLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmICghcmVzW1wic3VjY2Vzc1wiXSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVzW1wicmVzdWx0c1wiXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlc1tcInJlc3VsdHNcIl1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYmdcIikub3BhY2l0eSA9IGkgJSAyID09IDAgPyAxMCA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibm9cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJudW1iZXJcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIndpbmxvc2VcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJ0b3RhbE1vbmV5XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJzZXNzaW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIjXCIgKyBpdGVtRGF0YVtcInJlZmVyZW5jZUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJwcml6ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHRhaXhpdW1pbmkuUG9wdXBUaGFuaER1O1xuIl19