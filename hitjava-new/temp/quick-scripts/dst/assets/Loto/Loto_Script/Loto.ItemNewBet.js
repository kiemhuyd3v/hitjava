
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loto/Loto_Script/Loto.ItemNewBet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0260L7jYFFFaLQQwN8cuIC', 'Loto.ItemNewBet');
// Loto/Loto_Script/Loto.ItemNewBet.ts

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
var Loto_Cmd_1 = require("./Loto.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initItem = function (data) {
        // <color=#ffcc00>-:</c><color=#ffffff>-</c>
        this.node.getComponent(cc.RichText).string =
            "<color=#ffcc00>" + data.nickname + " : </c><color=#ff0000>Đặt cược " + Utils_1.default.formatNumber(data.bet)
                + " Gold</c><color=#ffffff> Cược đài </c><color=#0036ff>" + Loto_Cmd_1.default.Code.LOTO_CHANNEL_NAME[data.channel]
                + " </c><color=#ffffff> loại </c><color=#ff0000>" + Loto_Cmd_1.default.Code.LOTO_GAME_MODE_NAME[data.mode] + "</c>"
                + " <color=#00ff9c>" + data.nums + " </c>";
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG90b1xcTG90b19TY3JpcHRcXExvdG8uSXRlbU5ld0JldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsdUNBQTZCO0FBRXZCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQW9CQSxDQUFDO0lBbEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULDRDQUE0QztRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTtZQUN0QyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGlDQUFpQyxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztrQkFDbEcsdURBQXVELEdBQUcsa0JBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztrQkFDbEcsK0NBQStDLEdBQUcsa0JBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU07a0JBQ2xHLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0lBQ25ELENBQUM7SUFqQmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FvQjVCO0lBQUQsZUFBQztDQXBCRCxBQW9CQyxDQXBCcUMsRUFBRSxDQUFDLFNBQVMsR0FvQmpEO2tCQXBCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5pbXBvcnQgY21kIGZyb20gXCIuL0xvdG8uQ21kXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbml0SXRlbShkYXRhKSB7XHJcbiAgICAgICAgLy8gPGNvbG9yPSNmZmNjMDA+LTo8L2M+PGNvbG9yPSNmZmZmZmY+LTwvYz5cclxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPVxyXG4gICAgICAgICAgICBcIjxjb2xvcj0jZmZjYzAwPlwiICsgZGF0YS5uaWNrbmFtZSArIFwiIDogPC9jPjxjb2xvcj0jZmYwMDAwPsSQ4bq3dCBjxrDhu6NjIFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGRhdGEuYmV0KVxyXG4gICAgICAgICAgICArIFwiIEdvbGQ8L2M+PGNvbG9yPSNmZmZmZmY+IEPGsOG7o2MgxJHDoGkgPC9jPjxjb2xvcj0jMDAzNmZmPlwiICsgY21kLkNvZGUuTE9UT19DSEFOTkVMX05BTUVbZGF0YS5jaGFubmVsXVxyXG4gICAgICAgICAgICArIFwiIDwvYz48Y29sb3I9I2ZmZmZmZj4gbG/huqFpIDwvYz48Y29sb3I9I2ZmMDAwMD5cIiArIGNtZC5Db2RlLkxPVE9fR0FNRV9NT0RFX05BTUVbZGF0YS5tb2RlXSArIFwiPC9jPlwiXHJcbiAgICAgICAgICAgICsgXCIgPGNvbG9yPSMwMGZmOWM+XCIgKyBkYXRhLm51bXMgKyBcIiA8L2M+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=