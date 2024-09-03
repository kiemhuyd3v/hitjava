
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Poker/PokerScript/Poker.ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '506a91gVcBEUL5Aw1Hj1PE1', 'Poker.ItemRoom');
// Poker/PokerScript/Poker.ItemRoom.ts

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
var Poker_Controller_1 = require("./Poker.Controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PokerItemRoom = /** @class */ (function (_super) {
    __extends(PokerItemRoom, _super);
    function PokerItemRoom() {
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
    PokerItemRoom.prototype.start = function () {
    };
    PokerItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    PokerItemRoom.prototype.chooseRoom = function () {
        Poker_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], PokerItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], PokerItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], PokerItemRoom.prototype, "labelNumPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], PokerItemRoom.prototype, "progressNumPlayers", void 0);
    PokerItemRoom = __decorate([
        ccclass
    ], PokerItemRoom);
    return PokerItemRoom;
}(cc.Component));
exports.default = PokerItemRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUG9rZXJcXFBva2VyU2NyaXB0XFxQb2tlci5JdGVtUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsdURBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBbUNDO1FBaENHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBRyxJQUFJLENBQUM7O1FBdUJ4QixpQkFBaUI7SUFDckIsQ0FBQztJQXRCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQUk7UUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLDBCQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNpQjtJQVRwQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBbUNqQztJQUFELG9CQUFDO0NBbkNELEFBbUNDLENBbkMwQyxFQUFFLENBQUMsU0FBUyxHQW1DdEQ7a0JBbkNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgUG9rZXJDb250cm9sbGVyIGZyb20gXCIuL1Bva2VyLkNvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2VySXRlbVJvb20gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQmV0TWluOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsTnVtUGxheWVyczogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHJvZ3Jlc3NOdW1QbGF5ZXJzOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSByb29tSW5mbyA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBpbml0SXRlbShpbmZvKSB7XG4gICAgICAgIHRoaXMucm9vbUluZm8gPSBpbmZvO1xuXG4gICAgICAgIHRoaXMubGFiZWxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGluZm9bXCJtb25leUJldFwiXSk7XG4gICAgICAgIHRoaXMubGFiZWxCZXRNaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGluZm9bXCJyZXF1aXJlZE1vbmV5XCJdKTtcbiAgICAgICAgdGhpcy5sYWJlbE51bVBsYXllcnMuc3RyaW5nID0gaW5mb1tcInVzZXJDb3VudFwiXSArIFwiL1wiICsgaW5mb1tcIm1heFVzZXJQZXJSb29tXCJdO1xuICAgICAgICB0aGlzLnByb2dyZXNzTnVtUGxheWVycy5maWxsUmFuZ2UgPSBpbmZvW1widXNlckNvdW50XCJdIC8gaW5mb1tcIm1heFVzZXJQZXJSb29tXCJdO1xuICAgIH1cblxuICAgIGNob29zZVJvb20oKSB7XG4gICAgICAgIFBva2VyQ29udHJvbGxlci5pbnN0YW5jZS5qb2luUm9vbSh0aGlzLnJvb21JbmZvKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19