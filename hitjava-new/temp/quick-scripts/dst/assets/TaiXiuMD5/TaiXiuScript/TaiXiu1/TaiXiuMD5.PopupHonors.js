
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupHonors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cfee6LNFFGQbgMsj9+Dkqn', 'TaiXiuMD5.PopupHonors');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupHonors.ts

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
    var PopupHonors = /** @class */ (function (_super) {
        __extends(PopupHonors, _super);
        function PopupHonors() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemTemplate = null;
            _this.items = new Array();
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
            this.loadData();
        };
        PopupHonors.prototype.loadData = function () {
            var _this = this;
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { "c": 101, "mt": Configs_1.default.App.MONEY_TYPE, "txType": 1, "md5": 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (res["success"]) {
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
                        if (i_1 < res["topTX"].length) {
                            var itemData = res["topTX"][i_1];
                            item.getChildByName("bg").opacity = i_1 % 2 == 0 ? 10 : 0;
                            item.getChildByName("lblRank").getComponent(cc.Label).string = (i_1 + 1).toString();
                            item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["username"];
                            item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["money"]);
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
            property(cc.Node)
        ], PopupHonors.prototype, "itemTemplate", void 0);
        PopupHonors = __decorate([
            ccclass
        ], PopupHonors);
        return PopupHonors;
    }(Dialog_1.default));
    taixiumini.PopupHonors = PopupHonors;
})(taixiumini || (taixiumini = {}));
exports.default = taixiumini.PopupHonors;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5Qb3B1cEhvbm9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLG9FQUErRDtBQUMvRCwwRUFBcUU7QUFFckUsd0VBQW1FO0FBRTdELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVUsVUFBVSxDQWtFbkI7QUFsRUQsV0FBVSxVQUFVO0lBRWhCO1FBQWlDLCtCQUFNO1FBQXZDO1lBQUEscUVBOERDO1lBNURHLGtCQUFZLEdBQVksSUFBSSxDQUFDO1lBRXJCLFdBQUssR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDOztRQTBEekMsQ0FBQztRQXhERywwQkFBSSxHQUFKO1lBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7WUFFYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNoQztZQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUdwRSxDQUFDO1FBRUQsNkJBQU8sR0FBUDtZQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMs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QyxDQUFDO1FBQ1AsQ0FBQztRQTNERDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO1FBRnBCLFdBQVc7WUFEdkIsT0FBTztXQUNLLFdBQVcsQ0E4RHZCO1FBQUQsa0JBQUM7S0E5REQsQUE4REMsQ0E5RGdDLGdCQUFNLEdBOER0QztJQTlEWSxzQkFBVyxjQThEdkIsQ0FBQTtBQUVMLENBQUMsRUFsRVMsVUFBVSxLQUFWLFVBQVUsUUFrRW5CO0FBRUQsa0JBQWUsVUFBVSxDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgU2Nyb2xsVmlld0NvbnRyb2wgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vU2Nyb2xsVmlld0NvbnRyb2xcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5uYW1lc3BhY2UgdGFpeGl1bWluaSB7XG4gICAgQGNjY2xhc3NcbiAgICBleHBvcnQgY2xhc3MgUG9wdXBIb25vcnMgZXh0ZW5kcyBEaWFsb2cge1xuICAgICAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICAgICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgICAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG5cbiAgICAgICAgc2hvdygpIHtcbiAgICAgICAgICAgIHN1cGVyLnNob3coKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1UZW1wbGF0ZSAhPSBudWxsKSB0aGlzLml0ZW1UZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBkaXNtaXNzKCkge1xuICAgICAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgICAgIHN1cGVyLl9vblNob3dlZCgpO1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBsb2FkRGF0YSgpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTAxLCBcIm10XCI6IENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIFwidHhUeXBlXCI6IDEsIFwibWQ1XCI6IDEgfSwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wic3VjY2Vzc1wiXSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgcmVzW1widG9wVFhcIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzW1widG9wVFhcIl1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLm9wYWNpdHkgPSBpICUgMiA9PSAwID8gMTAgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxSYW5rXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGkgKyAxKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxBY2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJ1c2VybmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsV2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhaXhpdW1pbmkuUG9wdXBIb25vcnM7Il19