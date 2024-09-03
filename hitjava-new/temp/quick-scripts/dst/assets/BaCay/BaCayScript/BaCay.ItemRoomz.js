
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.ItemRoomz.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d685Zhk2hBh7Sp5YnmFxWr', 'BaCay.ItemRoomz');
// BaCay/BaCayScript/BaCay.ItemRoomz.ts

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
var BaCay_Controller_1 = require("./BaCay.Controller");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaCayItemRoom = /** @class */ (function (_super) {
    __extends(BaCayItemRoom, _super);
    function BaCayItemRoom() {
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
    BaCayItemRoom.prototype.start = function () {
    };
    BaCayItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    BaCayItemRoom.prototype.chooseRoom = function () {
        BaCay_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], BaCayItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemRoom.prototype, "labelNumPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], BaCayItemRoom.prototype, "progressNumPlayers", void 0);
    BaCayItemRoom = __decorate([
        ccclass
    ], BaCayItemRoom);
    return BaCayItemRoom;
}(cc.Component));
exports.default = BaCayItemRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5JdGVtUm9vbXoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQWlEO0FBQ2pELHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQW1DQztRQWhDRyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQUcsSUFBSSxDQUFDOztRQXVCeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF0Qkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDSSwwQkFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2REFDaUI7SUFUcEIsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQW1DakM7SUFBRCxvQkFBQztDQW5DRCxBQW1DQyxDQW5DMEMsRUFBRSxDQUFDLFNBQVMsR0FtQ3REO2tCQW5Db0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCYUNheUNvbnRyb2xsZXIgZnJvbSBcIi4vQmFDYXkuQ29udHJvbGxlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYUNheUl0ZW1Sb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldE1pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE51bVBsYXllcnM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHByb2dyZXNzTnVtUGxheWVyczogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcm9vbUluZm8gPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuXG4gICAgaW5pdEl0ZW0oaW5mbykge1xuICAgICAgICB0aGlzLnJvb21JbmZvID0gaW5mbztcblxuICAgICAgICB0aGlzLmxhYmVsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvW1wibW9uZXlCZXRcIl0pO1xuICAgICAgICB0aGlzLmxhYmVsQmV0TWluLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvW1wicmVxdWlyZWRNb25leVwiXSk7XG4gICAgICAgIHRoaXMubGFiZWxOdW1QbGF5ZXJzLnN0cmluZyA9IGluZm9bXCJ1c2VyQ291bnRcIl0gKyBcIi9cIiArIGluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc051bVBsYXllcnMuZmlsbFJhbmdlID0gaW5mb1tcInVzZXJDb3VudFwiXSAvIGluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICB9XG5cbiAgICBjaG9vc2VSb29tKCkge1xuICAgICAgICBCYUNheUNvbnRyb2xsZXIuaW5zdGFuY2Uuam9pblJvb20odGhpcy5yb29tSW5mbyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==