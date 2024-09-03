
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lieng/LiengScript/Lieng.ItemRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ff94A+5olPVpaMTr+lNUIb', 'Lieng.ItemRoom');
// Lieng/LiengScript/Lieng.ItemRoom.ts

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
var Lieng_Controller_1 = require("./Lieng.Controller");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LiengItemRoom = /** @class */ (function (_super) {
    __extends(LiengItemRoom, _super);
    function LiengItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.roomInfo = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LiengItemRoom.prototype.start = function () {
    };
    LiengItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
    };
    LiengItemRoom.prototype.chooseRoom = function () {
        //  console.log('444');
        Lieng_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], LiengItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], LiengItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], LiengItemRoom.prototype, "labelNumPlayers", void 0);
    LiengItemRoom = __decorate([
        ccclass
    ], LiengItemRoom);
    return LiengItemRoom;
}(cc.Component));
exports.default = LiengItemRoom;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTGllbmdcXExpZW5nU2NyaXB0XFxMaWVuZy5JdGVtUm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBaUQ7QUFDakQscUVBQWdFO0FBRTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBaUNDO1FBOUJHLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUF1QnhCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXJCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFFRCxrQ0FBVSxHQUFWO1FBQ0UsdUJBQXVCO1FBQ3JCLDBCQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDYztJQVBoQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBaUNqQztJQUFELG9CQUFDO0NBakNELEFBaUNDLENBakMwQyxFQUFFLENBQUMsU0FBUyxHQWlDdEQ7a0JBakNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpZW5nQ29udHJvbGxlciBmcm9tIFwiLi9MaWVuZy5Db250cm9sbGVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZW5nSXRlbVJvb20gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsQmV0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbEJldE1pbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxOdW1QbGF5ZXJzOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSByb29tSW5mbyA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRJdGVtKGluZm8pIHtcclxuICAgICAgICB0aGlzLnJvb21JbmZvID0gaW5mbztcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaW5mb1tcIm1vbmV5QmV0XCJdKTtcclxuICAgICAgICB0aGlzLmxhYmVsQmV0TWluLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpbmZvW1wicmVxdWlyZWRNb25leVwiXSk7XHJcbiAgICAgICAgdGhpcy5sYWJlbE51bVBsYXllcnMuc3RyaW5nID0gaW5mb1tcInVzZXJDb3VudFwiXSArIFwiL1wiICsgaW5mb1tcIm1heFVzZXJQZXJSb29tXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIGNob29zZVJvb20oKSB7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZygnNDQ0Jyk7XHJcbiAgICAgICAgTGllbmdDb250cm9sbGVyLmluc3RhbmNlLmpvaW5Sb29tKHRoaXMucm9vbUluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19