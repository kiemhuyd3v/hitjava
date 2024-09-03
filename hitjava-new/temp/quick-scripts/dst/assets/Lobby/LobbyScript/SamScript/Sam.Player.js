
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/SamScript/Sam.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46f022AtZRFgKu5pOoSxK3G', 'Sam.Player');
// Lobby/LobbyScript/SamScript/Sam.Player.ts

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
var TienLen_Playerz_1 = require("../TienLenScript/TienLen.Playerz");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SamPlayer = /** @class */ (function (_super) {
    __extends(SamPlayer, _super);
    function SamPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SamPlayer.prototype.setCardRemain = function (cardSize) {
        _super.prototype.setCardRemain.call(this, cardSize);
        if (cardSize == 1)
            this.setStatus("BÁO");
    };
    SamPlayer = __decorate([
        ccclass
    ], SamPlayer);
    return SamPlayer;
}(TienLen_Playerz_1.default));
exports.default = SamPlayer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTYW1TY3JpcHRcXFNhbS5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQXFEO0FBRS9DLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFNO0lBQTdDOztJQU9BLENBQUM7SUFMRyxpQ0FBYSxHQUFiLFVBQWMsUUFBUTtRQUNsQixpQkFBTSxhQUFhLFlBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsSUFBSSxRQUFRLElBQUksQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQU5nQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBTzdCO0lBQUQsZ0JBQUM7Q0FQRCxBQU9DLENBUHNDLHlCQUFNLEdBTzVDO2tCQVBvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vVGllbkxlblNjcmlwdC9UaWVuTGVuLlBsYXllcnpcIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNhbVBsYXllciBleHRlbmRzIFBsYXllciB7XG5cbiAgICBzZXRDYXJkUmVtYWluKGNhcmRTaXplKSB7XG4gICAgICAgIHN1cGVyLnNldENhcmRSZW1haW4oY2FyZFNpemUpO1xuICAgICAgICBpZiAoY2FyZFNpemUgPT0gMSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwiQsOBT1wiKTtcbiAgICB9XG59XG5cblxuIl19