
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupHonors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65ed7s2AEZFp4FEqaIOgiUM', 'TaiXiuMini.PopupHonors');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupHonors.ts

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
var ScrollViewControl_1 = require("../../../Lobby/LobbyScript/Script/common/ScrollViewControl");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var taixiumini;
(function (taixiumini) {
    var PopupHonors = /** @class */ (function (_super) {
        __extends(PopupHonors, _super);
        function PopupHonors() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.itemTemplate = null;
            _this.sprRank = [];
            _this.items = new Array();
            _this.scrView = null;
            _this.dataList = [];
            return _this;
        }
        PopupHonors.prototype.show = function () {
            _super.prototype.show.call(this);
            App_1.default.instance.showBgMiniGame("TaiXiu");
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
            Http_1.default.get(Configs_1.default.App.API, { "c": 101, "mt": Configs_1.default.App.MONEY_TYPE, "txType": 1 }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (res["success"]) {
                    //  cc.log("VINH DANH TAI XIU:", res);
                    _this.dataList = res["topTX"].slice();
                    // if (this.items.length == 0) {
                    //     for (var i = 0; i < 20; i++) {
                    //         let item = cc.instantiate(this.itemTemplate);
                    //         item.parent = this.itemTemplate.parent;
                    //         this.items.push(item);
                    //     }
                    //     this.itemTemplate.destroy();
                    //     this.itemTemplate = null;
                    // }
                    var cb = function (item, itemData) {
                        item.getChildByName("bg").opacity = item['itemID'] % 2 == 0 ? 255 : 0;
                        item.getChildByName("lblRank").getComponent(cc.Label).string = (item['itemID'] + 1).toString();
                        item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["username"];
                        item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["money"]);
                        if (item['itemID'] < 3) {
                            item.getChildByName("ic_rank").active = true;
                            item.getChildByName("lblRank").active = false;
                            item.getChildByName("ic_rank").getComponent(cc.Sprite).spriteFrame = _this.sprRank[itemData['index']];
                        }
                        else {
                            item.getChildByName("ic_rank").active = false;
                            item.getChildByName("lblRank").active = true;
                        }
                        item.active = true;
                    };
                    _this.scrView.setDataList(cb, _this.dataList);
                    // for (let i = 0; i < this.items.length; i++) {
                    //     let item = this.items[i];
                    //     if (i < res["topTX"].length) {
                    //         let itemData = res["topTX"][i];
                    //         item.getChildByName("bg").opacity = i % 2 == 0 ? 255 : 0;
                    //         item.getChildByName("lblRank").getComponent(cc.Label).string = (i + 1).toString();
                    //         item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["username"];
                    //         item.getChildByName("lblWin").getComponent(cc.Label).string = Utils.formatNumber(itemData["money"]);
                    //         if (i < 3) {
                    //             item.getChildByName("ic_rank").active = true;
                    //             item.getChildByName("lblRank").active = false;
                    //             item.getChildByName("ic_rank").getComponent(cc.Sprite).spriteFrame = this.sprRank[i];
                    //         } else {
                    //             item.getChildByName("ic_rank").active = false;
                    //             item.getChildByName("lblRank").active = true;
                    //         }
                    //         item.active = true;
                    //     } else {
                    //         item.active = false;
                    //     }
                    // }
                }
            });
        };
        __decorate([
            property(cc.Node)
        ], PopupHonors.prototype, "itemTemplate", void 0);
        __decorate([
            property([cc.SpriteFrame])
        ], PopupHonors.prototype, "sprRank", void 0);
        __decorate([
            property(ScrollViewControl_1.default)
        ], PopupHonors.prototype, "scrView", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuUG9wdXBIb25vcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELGtEQUE2QztBQUM3QyxvRUFBK0Q7QUFDL0QsMEVBQXFFO0FBQ3JFLGdHQUEyRjtBQUMzRix3RUFBbUU7QUFHN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBVSxVQUFVLENBK0ZuQjtBQS9GRCxXQUFVLFVBQVU7SUFFaEI7UUFBaUMsK0JBQU07UUFBdkM7WUFBQSxxRUEyRkM7WUF6Rkcsa0JBQVksR0FBWSxJQUFJLENBQUM7WUFFN0IsYUFBTyxHQUFxQixFQUFFLENBQUM7WUFDdkIsV0FBSyxHQUFHLElBQUksS0FBSyxFQUFXLENBQUM7WUFFckMsYUFBTyxHQUFzQixJQUFJLENBQUM7WUFDMUIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7UUFtRjFCLENBQUM7UUFqRkcsMEJBQUksR0FBSjtZQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1lBQ2IsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDaEM7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFHcEUsQ0FBQztRQUVELDZCQUFPLEdBQVA7WUFDSSxpQkFBTSxPQUFPLFdBQUUsQ0FBQztZQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNoQztRQUNMLENBQUM7UUFFRCwrQkFBUyxHQUFUO1lBQ0ksaUJBQU0sU0FBUyxXQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTyw4QkFBUSxHQUFoQjtZQUFBLGlCQXlEQztZQXhERyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDeEYsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxJQUFJLElBQUk7b0JBQUUsT0FBTztnQkFDeEIsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7b0JBQ2hCLHNDQUFzQztvQkFDdEMsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3JDLGdDQUFnQztvQkFDaEMscUNBQXFDO29CQUNyQyx3REFBd0Q7b0JBQ3hELGtEQUFrRDtvQkFDbEQsaUNBQWlDO29CQUNqQyxRQUFRO29CQUNSLG1DQUFtQztvQkFDbkMsZ0NBQWdDO29CQUNoQyxJQUFJO29CQUNKLElBQUksRUFBRSxHQUFHLFVBQUMsSUFBSSxFQUFFLFFBQVE7d0JBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFFdEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDL0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3ZGLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDcEcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUN4Rzs2QkFBTTs0QkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt5QkFDaEQ7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQztvQkFDRixLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM1QyxnREFBZ0Q7b0JBQ2hELGdDQUFnQztvQkFDaEMscUNBQXFDO29CQUNyQywwQ0FBMEM7b0JBQzFDLG9FQUFvRTtvQkFDcEUsNkZBQTZGO29CQUM3RixrR0FBa0c7b0JBQ2xHLCtHQUErRztvQkFDL0csdUJBQXVCO29CQUN2Qiw0REFBNEQ7b0JBQzVELDZEQUE2RDtvQkFDN0Qsb0dBQW9HO29CQUNwRyxtQkFBbUI7b0JBQ25CLDZEQUE2RDtvQkFDN0QsNERBQTREO29CQUM1RCxZQUFZO29CQUNaLDhCQUE4QjtvQkFDOUIsZUFBZTtvQkFDZiwrQkFBK0I7b0JBQy9CLFFBQVE7b0JBQ1IsSUFBSTtpQkFDUDtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQXhGRDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO1FBRTdCO1lBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29EQUNJO1FBRy9CO1lBREMsUUFBUSxDQUFDLDJCQUFpQixDQUFDO29EQUNNO1FBUHpCLFdBQVc7WUFEdkIsT0FBTztXQUNLLFdBQVcsQ0EyRnZCO1FBQUQsa0JBQUM7S0EzRkQsQUEyRkMsQ0EzRmdDLGdCQUFNLEdBMkZ0QztJQTNGWSxzQkFBVyxjQTJGdkIsQ0FBQTtBQUVMLENBQUMsRUEvRlMsVUFBVSxLQUFWLFVBQVUsUUErRm5CO0FBRUQsa0JBQWUsVUFBVSxDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgU2Nyb2xsVmlld0NvbnRyb2wgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vU2Nyb2xsVmlld0NvbnRyb2xcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSB0YWl4aXVtaW5pIHtcbiAgICBAY2NjbGFzc1xuICAgIGV4cG9ydCBjbGFzcyBQb3B1cEhvbm9ycyBleHRlbmRzIERpYWxvZyB7XG4gICAgICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgICAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgICAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICAgICAgc3ByUmFuazogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgICAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PGNjLk5vZGU+KCk7XG4gICAgICAgIEBwcm9wZXJ0eShTY3JvbGxWaWV3Q29udHJvbClcbiAgICAgICAgc2NyVmlldzogU2Nyb2xsVmlld0NvbnRyb2wgPSBudWxsO1xuICAgICAgICBwcml2YXRlIGRhdGFMaXN0ID0gW107XG5cbiAgICAgICAgc2hvdygpIHtcbiAgICAgICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtVGVtcGxhdGUgIT0gbnVsbCkgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzcygpIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEwMSwgXCJtdFwiOiBDb25maWdzLkFwcC5NT05FWV9UWVBFLCBcInR4VHlwZVwiOiAxIH0sIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKHJlc1tcInN1Y2Nlc3NcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlZJTkggREFOSCBUQUkgWElVOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFMaXN0ID0gcmVzW1widG9wVFhcIl0uc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaXRlbVRlbXBsYXRlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2IgPSAoaXRlbSwgaXRlbURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5vcGFjaXR5ID0gaXRlbVsnaXRlbUlEJ10gJSAyID09IDAgPyAyNTUgOiAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsUmFua1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtWydpdGVtSUQnXSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsQWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsV2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wibW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bJ2l0ZW1JRCddIDwgMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY19yYW5rXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJhbmtcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljX3JhbmtcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclJhbmtbaXRlbURhdGFbJ2luZGV4J11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNfcmFua1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsUmFua1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjclZpZXcuc2V0RGF0YUxpc3QoY2IsIHRoaXMuZGF0YUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChpIDwgcmVzW1widG9wVFhcIl0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzW1widG9wVFhcIl1baV07XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLm9wYWNpdHkgPSBpICUgMiA9PSAwID8gMjU1IDogMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsUmFua1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsQWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFdpblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcIm1vbmV5XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAoaSA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljX3JhbmtcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJhbmtcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY19yYW5rXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJSYW5rW2ldO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY19yYW5rXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsUmFua1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB0YWl4aXVtaW5pLlBvcHVwSG9ub3JzOyJdfQ==