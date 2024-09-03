
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuSieuToc/Scripts/TaiXiuST.PopupHonors.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a549DsjfNDC7i9SCvuQIrh', 'TaiXiuST.PopupHonors');
// TaiXiuSieuToc/Scripts/TaiXiuST.PopupHonors.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TaiXiuSieuToc;
(function (TaiXiuSieuToc) {
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
            App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
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
            App_1.default.instance.showLoading(true);
            TaiXiuSieuToc_NetworkClient_1.default.getInstance().getTopHonor();
        };
        PopupHonors.prototype.initData = function (data) {
            var _this = this;
            this.dataList = data.slice();
            var cb = function (item, itemData) {
                item.getChildByName("bg").opacity = item['itemID'] % 2 == 0 ? 255 : 0;
                item.getChildByName("lblRank").getComponent(cc.Label).string = (item['itemID'] + 1).toString();
                item.getChildByName("lblAccount").getComponent(cc.Label).string = itemData["loginname"];
                item.getChildByName("lblWin").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["amount"]);
                if (item['itemID'] < 3) {
                    item.getChildByName("ic_rank").active = true;
                    item.getChildByName("lblRank").active = false;
                    item.getChildByName("ic_rank").getComponent(cc.Sprite).spriteFrame = _this.sprRank[itemData['index']];
                    if (itemData['index'] == 2) {
                        item.getChildByName("ic_rank").x = -235.622;
                    }
                    else {
                        item.getChildByName("ic_rank").x = -239.622;
                    }
                }
                else {
                    item.getChildByName("ic_rank").active = false;
                    item.getChildByName("lblRank").active = true;
                }
                item.active = true;
            };
            this.scrView.setDataList(cb, this.dataList);
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
    TaiXiuSieuToc.PopupHonors = PopupHonors;
})(TaiXiuSieuToc || (TaiXiuSieuToc = {}));
exports.default = TaiXiuSieuToc.PopupHonors;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1U2lldVRvY1xcU2NyaXB0c1xcVGFpWGl1U1QuUG9wdXBIb25vcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHVFQUFrRTtBQUNsRSw2RkFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLG1IQUF3RztBQUtsRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFVLGFBQWEsQ0FtRXRCO0FBbkVELFdBQVUsYUFBYTtJQUVuQjtRQUFpQywrQkFBTTtRQUF2QztZQUFBLHFFQThEQztZQTVERyxrQkFBWSxHQUFZLElBQUksQ0FBQztZQUU3QixhQUFPLEdBQXFCLEVBQUUsQ0FBQztZQUN2QixXQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVcsQ0FBQztZQUVyQyxhQUFPLEdBQXNCLElBQUksQ0FBQztZQUMxQixjQUFRLEdBQUcsRUFBRSxDQUFDOztRQXNEMUIsQ0FBQztRQXBERywwQkFBSSxHQUFKO1lBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7WUFDYixhQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNoQztZQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUdwRSxDQUFDO1FBRUQsNkJBQU8sR0FBUDtZQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO1lBQ2hCLEtB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LENBQUM7UUFDaEQsQ0FBQztRQTNERDtZQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO1FBRTdCO1lBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29EQUNJO1FBRy9CO1lBREMsUUFBUSxDQUFDLDJCQUFpQixDQUFDO29EQUNNO1FBUHpCLFdBQVc7WUFEdkIsT0FBTztXQUNLLFdBQVcsQ0E4RHZCO1FBQUQsa0JBQUM7S0E5REQsQUE4REMsQ0E5RGdDLGdCQUFNLEdBOER0QztJQTlEWSx5QkFBVyxjQThEdkIsQ0FBQTtBQUdMLENBQUMsRUFuRVMsYUFBYSxLQUFiLGFBQWEsUUFtRXRCO0FBRUQsa0JBQWUsYUFBYSxDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFNjcm9sbFZpZXdDb250cm9sIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1Njcm9sbFZpZXdDb250cm9sXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBUYWlYaXVTVE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9UYWlYaXVTaWV1VG9jLk5ldHdvcmtDbGllbnRcIjtcblxuXG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxubmFtZXNwYWNlIFRhaVhpdVNpZXVUb2Mge1xuICAgIEBjY2NsYXNzXG4gICAgZXhwb3J0IGNsYXNzIFBvcHVwSG9ub3JzIGV4dGVuZHMgRGlhbG9nIHtcbiAgICAgICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgICAgICBzcHJSYW5rOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcbiAgICAgICAgQHByb3BlcnR5KFNjcm9sbFZpZXdDb250cm9sKVxuICAgICAgICBzY3JWaWV3OiBTY3JvbGxWaWV3Q29udHJvbCA9IG51bGw7XG4gICAgICAgIHByaXZhdGUgZGF0YUxpc3QgPSBbXTtcblxuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1U2lldVRvY1wiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtVGVtcGxhdGUgIT0gbnVsbCkgdGhpcy5pdGVtVGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzcygpIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfb25TaG93ZWQoKSB7XG4gICAgICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgbG9hZERhdGEoKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBUYWlYaXVTVE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5nZXRUb3BIb25vcigpO1xuICAgICAgICB9XG4gICAgICAgIGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUxpc3QgPSBkYXRhLnNsaWNlKCk7XG4gICAgICAgICAgICBsZXQgY2IgPSAoaXRlbSwgaXRlbURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYmdcIikub3BhY2l0eSA9IGl0ZW1bJ2l0ZW1JRCddICUgMiA9PSAwID8gMjU1IDogMDtcblxuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxSYW5rXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGl0ZW1bJ2l0ZW1JRCddICsgMSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsQWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1wibG9naW5uYW1lXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJsYmxXaW5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJhbW91bnRcIl0pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtWydpdGVtSUQnXSA8IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljX3JhbmtcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJhbmtcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY19yYW5rXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJSYW5rW2l0ZW1EYXRhWydpbmRleCddXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhWydpbmRleCddID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpY19yYW5rXCIpLnggPSAtMjM1LjYyMlxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImljX3JhbmtcIikueCA9IC0yMzkuNjIyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiaWNfcmFua1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImxibFJhbmtcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc2NyVmlldy5zZXREYXRhTGlzdChjYiwgdGhpcy5kYXRhTGlzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWlYaXVTaWV1VG9jLlBvcHVwSG9ub3JzOyJdfQ==