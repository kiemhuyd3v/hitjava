
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35822yBG6dOfY3wYyq4yJS6', 'BaiCao.ItemRoom');
// BaiCao/BaiCaoScript/BaiCao.ItemRoom.ts

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
var BaiCao_Controller_1 = require("./BaiCao.Controller");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaiCaoItemRoom = /** @class */ (function (_super) {
    __extends(BaiCaoItemRoom, _super);
    function BaiCaoItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BaiCaoItemRoom.prototype.start = function () {
    };
    BaiCaoItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    BaiCaoItemRoom.prototype.chooseRoom = function () {
        BaiCao_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], BaiCaoItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoItemRoom.prototype, "labelNumPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], BaiCaoItemRoom.prototype, "progressNumPlayers", void 0);
    BaiCaoItemRoom = __decorate([
        ccclass
    ], BaiCaoItemRoom);
    return BaiCaoItemRoom;
}(cc.Component));
exports.default = BaiCaoItemRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5JdGVtUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBbUQ7QUFDbkQscUVBQWdFO0FBRTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBbUNDO1FBaENHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBRyxJQUFJLENBQUM7O1FBdUJ4QixpQkFBaUI7SUFDckIsQ0FBQztJQXRCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDhCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLDJCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4REFDaUI7SUFUcEIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW1DbEM7SUFBRCxxQkFBQztDQW5DRCxBQW1DQyxDQW5DMkMsRUFBRSxDQUFDLFNBQVMsR0FtQ3ZEO2tCQW5Db0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYWlDYW9Db250cm9sbGVyIGZyb20gXCIuL0JhaUNhby5Db250cm9sbGVyXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhaUNhb0l0ZW1Sb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldE1pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE51bVBsYXllcnM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHByb2dyZXNzTnVtUGxheWVyczogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcm9vbUluZm8gPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdEl0ZW0oaW5mbykge1xuICAgICAgICB0aGlzLnJvb21JbmZvID0gaW5mbztcblxuICAgICAgICB0aGlzLmxhYmVsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvW1wibW9uZXlCZXRcIl0pO1xuICAgICAgICB0aGlzLmxhYmVsQmV0TWluLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvW1wicmVxdWlyZWRNb25leVwiXSk7XG4gICAgICAgIHRoaXMubGFiZWxOdW1QbGF5ZXJzLnN0cmluZyA9IGluZm9bXCJ1c2VyQ291bnRcIl0gKyBcIi9cIiArIGluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc051bVBsYXllcnMuZmlsbFJhbmdlID0gaW5mb1tcInVzZXJDb3VudFwiXSAvIGluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICB9XG5cbiAgICBjaG9vc2VSb29tKCkge1xuICAgICAgICBCYWlDYW9Db250cm9sbGVyLmluc3RhbmNlLmpvaW5Sb29tKHRoaXMucm9vbUluZm8pO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=