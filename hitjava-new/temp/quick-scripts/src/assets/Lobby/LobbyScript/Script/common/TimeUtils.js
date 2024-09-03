"use strict";
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