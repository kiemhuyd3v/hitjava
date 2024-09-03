"use strict";
cc._RF.push(module, '2c896w3xjRKTb9MKH8qoYLn', 'Lobby.CardRoom');
// Lobby/LobbyScript/Lobby.CardRoom.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("./Script/common/App");
var Tween_1 = require("./Script/common/Tween");
var CardGame_Cmd_1 = require("./Script/networks/CardGame.Cmd");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var TienLen_Cmd_1 = require("./TienLenScript/TienLen.Cmd");
var TienLen_GameLogic_1 = require("./TienLenScript/TienLen.GameLogic");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Lobby;
(function (Lobby) {
    var CardRoom = /** @class */ (function (_super) {
        __extends(CardRoom, _super);
        function CardRoom() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.roomContent = null;
            _this.roomItem = null;
            _this.networkClient = null;
            _this.handleRoomRespone = function (data) {
                var inpacket = new Network_InPacket_1.default(data);
                ////Utils.Log(inpacket.getCmdId());
                switch (inpacket.getCmdId()) {
                    case CardGame_Cmd_1.default.Code.JOIN_ROOM_FAIL: {
                        var res = new CardGame_Cmd_1.default.ReceivedJoinRoomFail(data);
                        var e = "";
                        switch (res.error) {
                            case 1:
                                e = "L\u1ed7i ki\u1ec3m tra th\u00f4ng tin!";
                                break;
                            case 2:
                                e = "Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c ph\u00f2ng th\u00edch h\u1ee3p. Vui l\u00f2ng th\u1eed l\u1ea1i sau!";
                                break;
                            case 3:
                                e = "B\u1ea1n kh\u00f4ng \u0111\u1ee7 ti\u1ec1n v\u00e0o ph\u00f2ng ch\u01a1i n\u00e0y!";
                                break;
                            case 4:
                                e = "Kh\u00f4ng t\u00ecm \u0111\u01b0\u1ee3c ph\u00f2ng th\u00edch h\u1ee3p. Vui l\u00f2ng th\u1eed l\u1ea1i sau!";
                                break;
                            case 5:
                                e = "M\u1ed7i l\u1ea7n v\u00e0o ph\u00f2ng ph\u1ea3i c\u00e1ch nhau 10 gi\u00e2y!";
                                break;
                            case 6:
                                e = "H\u1ec7 th\u1ed1ng b\u1ea3o tr\u00ec!";
                                break;
                            case 7:
                                e = "Kh\u00f4ng t\u00ecm th\u1ea5y ph\u00f2ng ch\u01a1i!";
                                break;
                            case 8:
                                e = "M\u1eadt kh\u1ea9u ph\u00f2ng ch\u01a1i kh\u00f4ng \u0111\u00fang!";
                                break;
                            case 9:
                                e = "Ph\u00f2ng ch\u01a1i \u0111\u00e3 \u0111\u1ee7 ng\u01b0\u1eddi!";
                                break;
                            case 10:
                                e = "B\u1ea1n b\u1ecb ch\u1ee7 ph\u00f2ng kh\u00f4ng cho v\u00e0o b\u00e0n!";
                        }
                        App_1.default.instance.alertDialog.showMsg(e);
                        break;
                    }
                    case TienLen_Cmd_1.default.Code.JOIN_ROOM_SUCCESS: {
                        var res = new TienLen_Cmd_1.default.ReceivedJoinRoomSuccess(data);
                        ////Utils.Log(res);
                        TienLen_GameLogic_1.default.getInstance().initWith(res);
                        App_1.default.instance.openGame("TienLen", "TienLen");
                        break;
                    }
                    case TienLen_Cmd_1.default.Code.AUTO_START: {
                        var res = new TienLen_Cmd_1.default.ReceivedAutoStart(data);
                        ////Utils.Log(res);
                        TienLen_GameLogic_1.default.getInstance().autoStart(res);
                        break;
                    }
                }
            };
            return _this;
        }
        CardRoom.prototype.start = function () {
            this.networkClient.addListener(this.handleRoomRespone, this);
        };
        CardRoom.prototype.initRooms = function (rooms, client) {
            var _this = this;
            this.networkClient = client;
            this.roomContent.removeAllChildren();
            rooms.forEach(function (room) {
                var item = cc.instantiate(_this.roomItem);
                var txts = item.getComponentsInChildren(cc.Label);
                Tween_1.default.numberTo(txts[2], room.moneyRequire, 0.3);
                Tween_1.default.numberTo(txts[3], room.moneyBet, 0.3);
                txts[4].string = room.nPersion + "/" + room.maxUserPerRoom;
                var progress = item.getComponentInChildren(cc.ProgressBar);
                progress.progress = room.nPersion / room.maxUserPerRoom;
                var btnJoin = item.getComponentInChildren(cc.Button);
                btnJoin.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                    _this.networkClient.send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, room.maxUserPerRoom, room.moneyBet, 0, room.roomIndex));
                });
                item.parent = _this.roomContent;
            });
        };
        __decorate([
            property(cc.Node)
        ], CardRoom.prototype, "roomContent", void 0);
        __decorate([
            property(cc.Prefab)
        ], CardRoom.prototype, "roomItem", void 0);
        CardRoom = __decorate([
            ccclass
        ], CardRoom);
        return CardRoom;
    }(cc.Component));
    Lobby.CardRoom = CardRoom;
})(Lobby || (Lobby = {}));
exports.default = Lobby.CardRoom;

cc._RF.pop();