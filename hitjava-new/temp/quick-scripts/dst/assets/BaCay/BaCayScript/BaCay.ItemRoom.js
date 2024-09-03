
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e07a8lBr39OXr5c0VekIC9q', 'BaCay.ItemRoom');
// BaCay/BaCayScript/BaCay.ItemRoom.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var BaCay_Room_1 = require("./BaCay.Room");
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
        _this.requireChip = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    BaCayItemRoom.prototype.onLoad = function () {
        this.node.active = false;
    };
    BaCayItemRoom.prototype.start = function () {
    };
    BaCayItemRoom.prototype.initItem = function (info) {
        cc.log("initItem:" + JSON.stringify(info));
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["id"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.requireChip = info["requiredMoney"];
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    BaCayItemRoom.prototype.chooseRoom = function () {
        if (Configs_1.default.Login.Coin >= this.requireChip) {
            BaCay_Room_1.default.instance.joinRoom(this.roomInfo);
        }
        else if (this.roomInfo["userCount"] >= this.roomInfo["maxUserPerRoom"]) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_err9'));
        }
        else {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
        }
        // BaCayController.instance.joinRoom(this.roomInfo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5JdGVtUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFDaEQsaUVBQTREO0FBQzVELHFFQUFnRTtBQUNoRSwyQ0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUFrREM7UUEvQ0csY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFhLElBQUksQ0FBQztRQUVqQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFHLElBQUksQ0FBQztRQUNoQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7UUFxQzNCLGlCQUFpQjtJQUNyQixDQUFDO0lBcENHLHdCQUF3QjtJQUV4Qiw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBRUksSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QyxvQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO2FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNwRSxhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO1NBQ3BFO2FBQ0k7WUFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFDRCxvREFBb0Q7SUFFeEQsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNpQjtJQVRwQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBa0RqQztJQUFELG9CQUFDO0NBbERELEFBa0RDLENBbEQwQyxFQUFFLENBQUMsU0FBUyxHQWtEdEQ7a0JBbERvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEJhY2F5Um9vbSBmcm9tIFwiLi9CYUNheS5Sb29tXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYUNheUl0ZW1Sb29tIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJldE1pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE51bVBsYXllcnM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHByb2dyZXNzTnVtUGxheWVyczogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgcm9vbUluZm8gPSBudWxsO1xuICAgIHByaXZhdGUgcmVxdWlyZUNoaXAgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIGluaXRJdGVtKGluZm8pIHtcbiAgICAgICAgY2MubG9nKFwiaW5pdEl0ZW06XCIrSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xuICAgICAgICB0aGlzLnJvb21JbmZvID0gaW5mbztcbiAgICAgICAgdGhpcy5sYWJlbEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mb1tcImlkXCJdKTtcbiAgICAgICAgdGhpcy5sYWJlbEJldE1pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mb1tcInJlcXVpcmVkTW9uZXlcIl0pO1xuICAgICAgICB0aGlzLnJlcXVpcmVDaGlwID0gaW5mb1tcInJlcXVpcmVkTW9uZXlcIl07XG4gICAgICAgIHRoaXMubGFiZWxOdW1QbGF5ZXJzLnN0cmluZyA9IGluZm9bXCJ1c2VyQ291bnRcIl0gKyBcIi9cIiArIGluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc051bVBsYXllcnMuZmlsbFJhbmdlID0gaW5mb1tcInVzZXJDb3VudFwiXSAvIGluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXTtcbiAgICB9XG5cbiAgICBjaG9vc2VSb29tKCkge1xuXG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPj0gdGhpcy5yZXF1aXJlQ2hpcCkge1xuICAgICAgICAgICAgQmFjYXlSb29tLmluc3RhbmNlLmpvaW5Sb29tKHRoaXMucm9vbUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0gPj0gdGhpcy5yb29tSW5mb1tcIm1heFVzZXJQZXJSb29tXCJdKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Jvb21fZXJyOScpKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RfZW5vdWdoJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJhQ2F5Q29udHJvbGxlci5pbnN0YW5jZS5qb2luUm9vbSh0aGlzLnJvb21JbmZvKTtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=