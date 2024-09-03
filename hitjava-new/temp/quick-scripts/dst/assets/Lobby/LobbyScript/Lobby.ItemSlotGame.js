
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.ItemSlotGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '055a4EkUg9Bd5lySOl45ghW', 'Lobby.ItemSlotGame');
// Lobby/LobbyScript/Lobby.ItemSlotGame.ts

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
var GameIconJackpot_1 = require("./GameIconJackpot");
var Lobby_ItemGame_1 = require("./Lobby.ItemGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemSlotGame = /** @class */ (function (_super) {
    __extends(ItemSlotGame, _super);
    function ItemSlotGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameIconJackpot = null;
        _this.lblJackpots = [];
        _this.fakeJackpot = false;
        _this.nodeX2 = null;
        _this.jackpot0 = 0;
        _this.jackpotMax0 = 0;
        _this.jackpot1 = 0;
        _this.jackpotMax1 = 0;
        _this.jackpot2 = 0;
        _this.jackpotMax2 = 0;
        _this.updateNext0 = 0;
        _this.updateNext1 = 0;
        _this.updateNext2 = 0;
        return _this;
    }
    ItemSlotGame.prototype.start = function () {
    };
    __decorate([
        property(GameIconJackpot_1.default)
    ], ItemSlotGame.prototype, "gameIconJackpot", void 0);
    __decorate([
        property([cc.Label])
    ], ItemSlotGame.prototype, "lblJackpots", void 0);
    __decorate([
        property
    ], ItemSlotGame.prototype, "fakeJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], ItemSlotGame.prototype, "nodeX2", void 0);
    ItemSlotGame = __decorate([
        ccclass
    ], ItemSlotGame);
    return ItemSlotGame;
}(Lobby_ItemGame_1.default));
exports.default = ItemSlotGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5JdGVtU2xvdEdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELG1EQUF3QztBQUdsQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBUTtJQUFsRDtRQUFBLHFFQXlCQztRQXZCRyxxQkFBZSxHQUFtQixJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBZSxFQUFFLENBQUM7UUFFN0IsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFFN0IsWUFBTSxHQUFXLElBQUksQ0FBQztRQUVkLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxDQUFDOztJQU81QixDQUFDO0lBTEcsNEJBQUssR0FBTDtJQUVBLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUMseUJBQWUsQ0FBQzt5REFDYTtJQUV2QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztxREFDUTtJQUU3QjtRQURDLFFBQVE7cURBQ29CO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ0k7SUFSTCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBeUJoQztJQUFELG1CQUFDO0NBekJELEFBeUJDLENBekJ5Qyx3QkFBUSxHQXlCakQ7a0JBekJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVJY29uSmFja3BvdCBmcm9tIFwiLi9HYW1lSWNvbkphY2twb3RcIjtcbmltcG9ydCBJdGVtR2FtZSBmcm9tIFwiLi9Mb2JieS5JdGVtR2FtZVwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtU2xvdEdhbWUgZXh0ZW5kcyBJdGVtR2FtZSB7XG4gICAgQHByb3BlcnR5KEdhbWVJY29uSmFja3BvdClcbiAgICBnYW1lSWNvbkphY2twb3Q6R2FtZUljb25KYWNrcG90ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBsYmxKYWNrcG90czogY2MuTGFiZWxbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eVxuICAgIGZha2VKYWNrcG90OiBib29sZWFuID0gZmFsc2U7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZVgyOmNjLk5vZGUgPSBudWxsO1xuICAgIFxuICAgIHByaXZhdGUgamFja3BvdDAgPSAwO1xuICAgIHByaXZhdGUgamFja3BvdE1heDAgPSAwO1xuICAgIHByaXZhdGUgamFja3BvdDEgPSAwO1xuICAgIHByaXZhdGUgamFja3BvdE1heDEgPSAwO1xuICAgIHByaXZhdGUgamFja3BvdDIgPSAwO1xuICAgIHByaXZhdGUgamFja3BvdE1heDIgPSAwO1xuICAgIHByaXZhdGUgdXBkYXRlTmV4dDAgPSAwO1xuICAgIHByaXZhdGUgdXBkYXRlTmV4dDEgPSAwO1xuICAgIHByaXZhdGUgdXBkYXRlTmV4dDIgPSAwO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgXG4gICAgfVxuXG4gIFxufVxuIl19