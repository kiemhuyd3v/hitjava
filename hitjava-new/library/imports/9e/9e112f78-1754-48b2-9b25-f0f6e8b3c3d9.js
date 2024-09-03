"use strict";
cc._RF.push(module, '9e11294F1RIspsl8Pbos8PZ', 'Lobby.ItemGame');
// Lobby/LobbyScript/Lobby.ItemGame.ts

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
exports.ItemGameType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemGameType;
(function (ItemGameType) {
    ItemGameType[ItemGameType["OTHER"] = 0] = "OTHER";
    ItemGameType[ItemGameType["SLOT"] = 1] = "SLOT";
    ItemGameType[ItemGameType["CARD"] = 2] = "CARD";
})(ItemGameType = exports.ItemGameType || (exports.ItemGameType = {}));
var ItemGame = /** @class */ (function (_super) {
    __extends(ItemGame, _super);
    function ItemGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = "";
        _this.type = ItemGameType.OTHER;
        return _this;
    }
    __decorate([
        property
    ], ItemGame.prototype, "id", void 0);
    __decorate([
        property({ type: cc.Enum(ItemGameType) })
    ], ItemGame.prototype, "type", void 0);
    ItemGame = __decorate([
        ccclass
    ], ItemGame);
    return ItemGame;
}(cc.Component));
exports.default = ItemGame;

cc._RF.pop();