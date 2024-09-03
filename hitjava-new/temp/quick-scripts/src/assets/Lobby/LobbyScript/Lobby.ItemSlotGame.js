"use strict";
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