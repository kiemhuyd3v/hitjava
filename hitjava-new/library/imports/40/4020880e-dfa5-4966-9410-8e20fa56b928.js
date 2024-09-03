"use strict";
cc._RF.push(module, '40208gO36VJZpQQjiD6Vrko', 'CardGame_ItemRoom');
// Lobby/LobbyScript/Script/cardGameRoom/CardGame_ItemRoom.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CardGame_ItemRoom = /** @class */ (function (_super) {
    __extends(CardGame_ItemRoom, _super);
    function CardGame_ItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelPlayers = null;
        _this.labelState = null;
        _this.itemInfo = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    // start() {}
    // update (dt) {}
    CardGame_ItemRoom.prototype.initItems = function (data) {
        this.itemInfo = data;
        this.labelBet.string = this.formatGold(data.bet);
        this.labelPlayers.string = this.formatGold(data.players);
        this.labelState.string = data.maxUser == 2 ? "Solo" : data.maxUser + " Người";
    };
    CardGame_ItemRoom.prototype.chooseRoom = function () {
        var controller = null;
        switch (this.itemInfo.gameId) {
            case 0:
            case 1:
                controller = this.node.parent.parent.parent.parent.getComponent("TienLen.Room");
                controller.handleJoinRoom(this.itemInfo);
                break;
            default:
                break;
        }
        //  //Utils.Log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent);
        //  //Utils.Log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent.parent);
        //  //Utils.Log("CardGame_ItemRoom chooseRoom : ", this.node.parent.parent.parent.parent);
    };
    CardGame_ItemRoom.prototype.formatGold = function (price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    __decorate([
        property(cc.Label)
    ], CardGame_ItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], CardGame_ItemRoom.prototype, "labelPlayers", void 0);
    __decorate([
        property(cc.Label)
    ], CardGame_ItemRoom.prototype, "labelState", void 0);
    CardGame_ItemRoom = __decorate([
        ccclass
    ], CardGame_ItemRoom);
    return CardGame_ItemRoom;
}(cc.Component));
exports.default = CardGame_ItemRoom;

cc._RF.pop();