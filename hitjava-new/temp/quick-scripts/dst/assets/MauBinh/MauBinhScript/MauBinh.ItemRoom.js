
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36926qIdxdMrpX//tGzu5q2', 'MauBinh.ItemRoom');
// MauBinh/MauBinhScript/MauBinh.ItemRoom.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MauBinh_Controller_1 = require("./MauBinh.Controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemRoom = /** @class */ (function (_super) {
    __extends(ItemRoom, _super);
    function ItemRoom() {
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
    ItemRoom.prototype.start = function () {
    };
    ItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    ItemRoom.prototype.chooseRoom = function () {
        MauBinh_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], ItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], ItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], ItemRoom.prototype, "labelNumPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], ItemRoom.prototype, "progressNumPlayers", void 0);
    ItemRoom = __decorate([
        ccclass
    ], ItemRoom);
    return ItemRoom;
}(cc.Component));
exports.default = ItemRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5JdGVtUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsMkRBQXFEO0FBRS9DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBbUNDO1FBaENHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBRyxJQUFJLENBQUM7O1FBdUJ4QixpQkFBaUI7SUFDckIsQ0FBQztJQXRCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNJLDRCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUE3QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ2M7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDaUI7SUFUcEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQW1DNUI7SUFBRCxlQUFDO0NBbkNELEFBbUNDLENBbkNxQyxFQUFFLENBQUMsU0FBUyxHQW1DakQ7a0JBbkNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWF1QmluaENvbnRyb2xsZXIgZnJvbSBcIi4vTWF1QmluaC5Db250cm9sbGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtUm9vbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxCZXQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxCZXRNaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxOdW1QbGF5ZXJzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBwcm9ncmVzc051bVBsYXllcnM6IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHJvb21JbmZvID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGluaXRJdGVtKGluZm8pIHtcbiAgICAgICAgdGhpcy5yb29tSW5mbyA9IGluZm87XG5cbiAgICAgICAgdGhpcy5sYWJlbEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mb1tcIm1vbmV5QmV0XCJdKTtcbiAgICAgICAgdGhpcy5sYWJlbEJldE1pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mb1tcInJlcXVpcmVkTW9uZXlcIl0pO1xuICAgICAgICB0aGlzLmxhYmVsTnVtUGxheWVycy5zdHJpbmcgPSBpbmZvW1widXNlckNvdW50XCJdICsgXCIvXCIgKyBpbmZvW1wibWF4VXNlclBlclJvb21cIl07XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NOdW1QbGF5ZXJzLmZpbGxSYW5nZSA9IGluZm9bXCJ1c2VyQ291bnRcIl0gLyBpbmZvW1wibWF4VXNlclBlclJvb21cIl07XG4gICAgfVxuXG4gICAgY2hvb3NlUm9vbSgpIHtcbiAgICAgICAgTWF1QmluaENvbnRyb2xsZXIuaW5zdGFuY2Uuam9pblJvb20odGhpcy5yb29tSW5mbyk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==