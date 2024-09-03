
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/TimeUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '761c4r7fCZLrIcT4qTFRPgo', 'TimeUtils');
// Lobby/LobbyScript/Script/common/TimeUtils.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TimeUtils = /** @class */ (function () {
    function TimeUtils() {
    }
    TimeUtils.currentTimeMillis = function () {
        return Date.now();
    };
    TimeUtils.serverTime = function () {
        return Math.ceil(this.currentTimeMillis() - this.minDistanceTime + this.minPing / 2);
    };
    TimeUtils.ping = 0;
    TimeUtils.minPing = -1;
    TimeUtils.minDistanceTime = 0;
    TimeUtils = __decorate([
        ccclass
    ], TimeUtils);
    return TimeUtils;
}());
exports.default = TimeUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcVGltZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQWFBLENBQUM7SUFaaUIsMkJBQWlCLEdBQS9CO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQU1hLG9CQUFVLEdBQXhCO1FBRUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBUGEsY0FBSSxHQUFXLENBQUMsQ0FBQztJQUNqQixpQkFBTyxHQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLHlCQUFlLEdBQVcsQ0FBQyxDQUFDO0lBUHpCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FhN0I7SUFBRCxnQkFBQztDQWJELEFBYUMsSUFBQTtrQkFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lVXRpbHMge1xuICAgIHB1YmxpYyBzdGF0aWMgY3VycmVudFRpbWVNaWxsaXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwaW5nOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBzdGF0aWMgbWluUGluZzogbnVtYmVyID0gLTE7XG4gICAgcHVibGljIHN0YXRpYyBtaW5EaXN0YW5jZVRpbWU6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNlcnZlclRpbWUoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmN1cnJlbnRUaW1lTWlsbGlzKCkgLSB0aGlzLm1pbkRpc3RhbmNlVGltZSArIHRoaXMubWluUGluZy8yKTtcbiAgICB9XG59XG4iXX0=