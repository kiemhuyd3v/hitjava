
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/SamScript/Sam.Room.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a285b+cxFVMModVnDL7crxr', 'Sam.Room');
// Lobby/LobbyScript/SamScript/Sam.Room.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../Script/common/App");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
var Utils_1 = require("../Script/common/Utils");
var CardGame_Cmd_1 = require("../Script/networks/CardGame.Cmd");
var Network_InPacket_1 = require("../Script/networks/Network.InPacket");
var SamNetworkClient_1 = require("../Script/networks/SamNetworkClient");
var Sam_Cmd_1 = require("./Sam.Cmd");
var Tween_1 = require("../Script/common/Tween");
var Sam_InGame_1 = require("./Sam.InGame");
var TienLen_Resz_1 = require("../TienLenScript/TienLen.Resz");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.roomContent = null;
        _this.roomItem = null;
        _this.ingameNode = null;
        _this.lbCoin = null;
        _this.lblNickname = null;
        _this.ingame = null;
        _this.listRoom = [];
        return _this;
    }
    Room_1 = Room;
    Room.prototype.onLoad = function () {
        var _this = this;
        Room_1.instance = this;
        TienLen_Resz_1.default.getInstance();
        this.ingame = this.ingameNode.getComponent(Sam_InGame_1.default);
        this.ingameNode.active = false;
        this.lbCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            _this.lbCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        }, this);
        SamNetworkClient_1.default.getInstance().addOnClose(function () {
            _this.actBack();
        }, this);
        this.lblNickname.string = Configs_1.default.Login.Nickname;
    };
    Room.prototype.start = function () {
        var _this = this;
        SamNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            var cmdId = inpacket.getCmdId();
            //  cc.log("Sam cmd: ", cmdId);
            switch (cmdId) {
                case CardGame_Cmd_1.default.Code.LOGIN:
                    SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendReconnectRoom());
                    break;
                case CardGame_Cmd_1.default.Code.MONEY_BET_CONFIG: {
                    var res = new CardGame_Cmd_1.default.ResMoneyBetConfig(data);
                    //  cc.log(res);
                    _this.listRoom = res.list;
                    _this.initRooms(res.list);
                    break;
                }
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
                case Sam_Cmd_1.default.Code.JOIN_ROOM_SUCCESS: {
                    var res = new Sam_Cmd_1.default.ReceivedJoinRoomSuccess(data);
                    //  cc.log(res);
                    _this.show(false);
                    _this.ingame.show(true, res);
                    break;
                }
                case Sam_Cmd_1.default.Code.UPDATE_GAME_INFO: {
                    var res = new Sam_Cmd_1.default.ReceivedUpdateGameInfo(data);
                    //  cc.log("Sam UPDATE_GAME_INFO res : ", res);
                    _this.show(false);
                    _this.ingame.updateGameInfo(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.AUTO_START: {
                    var res = new Sam_Cmd_1.default.ReceivedAutoStart(data);
                    //  cc.log(res);
                    _this.ingame.autoStart(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.USER_JOIN_ROOM: {
                    var res = new Sam_Cmd_1.default.ReceiveUserJoinRoom(data);
                    //  cc.log(res);
                    _this.ingame.onUserJoinRoom(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.FIRST_TURN: {
                    var res = new Sam_Cmd_1.default.ReceivedFirstTurnDecision(data);
                    //  cc.log(res);
                    _this.ingame.firstTurn(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.CHIA_BAI: {
                    var res = new Sam_Cmd_1.default.ReceivedChiaBai(data);
                    //  cc.log(res);
                    _this.ingame.chiaBai(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.CHANGE_TURN: {
                    var res = new Sam_Cmd_1.default.ReceivedChangeTurn(data);
                    //  cc.log(res);
                    _this.ingame.changeTurn(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.DANH_BAI: {
                    var res = new Sam_Cmd_1.default.ReceivedDanhBai(data);
                    //  cc.log(res);
                    _this.ingame.submitTurn(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.BO_LUOT: {
                    var res = new Sam_Cmd_1.default.ReceivedBoluot(data);
                    //  cc.log(res);
                    _this.ingame.passTurn(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.END_GAME: {
                    var res = new Sam_Cmd_1.default.ReceivedEndGame(data);
                    //  cc.log(res);
                    _this.ingame.endGame(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.UPDATE_MATCH: {
                    var res = new Sam_Cmd_1.default.ReceivedUpdateMatch(data);
                    //  cc.log(res);
                    _this.ingame.updateMatch(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.USER_LEAVE_ROOM: {
                    var res = new Sam_Cmd_1.default.UserLeaveRoom(data);
                    //  cc.log(res);
                    _this.ingame.userLeaveRoom(res);
                    break;
                }
                // case SamCmd.Code.RECONNECT_GAME_ROOM: {
                //     let res = new SamCmd.UserLeaveRoom(data);
                //     //  cc.log(res);
                //     this.ingame.userLeaveRoom(res);
                //     break;
                // }
                case Sam_Cmd_1.default.Code.BAO_SAM: {
                    var res = new Sam_Cmd_1.default.ReceiveBaoSam(data);
                    //  cc.log(res);
                    _this.ingame.onBaoSam(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.HUY_BAO_SAM: {
                    var res = new Sam_Cmd_1.default.ReceiveHuyBaoSam(data);
                    //  cc.log(res);
                    _this.ingame.onHuyBaoSam(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.QUYET_DINH_SAM: {
                    var res = new Sam_Cmd_1.default.ReceivedQuyetDinhSam(data);
                    //  cc.log(res);
                    _this.ingame.onQuyetDinhSam(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.REQUEST_LEAVE_ROOM: {
                    var res = new Sam_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                    //  cc.log(res);
                    _this.ingame.notifyUserRegOutRoom(res);
                    break;
                }
                case Sam_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Sam_Cmd_1.default.ReceivedChatRoom(data);
                        //  cc.log("Sam CHAT_ROOM res : ", JSON.stringify(res));
                        _this.ingame.playerChat(res);
                    }
                    break;
                case Sam_Cmd_1.default.Code.CHAT_CHONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Sam_Cmd_1.default.ReceivedChatChong(data);
                        //  cc.log("SAM CHAT_CHONG res : ", JSON.stringify(res));
                        _this.ingame.playerChatChong(res);
                    }
                    break;
            }
        }, this);
        //get list room
        this.refreshRoom();
        SamNetworkClient_1.default.getInstance().send(new Sam_Cmd_1.default.SendReconnectRoom());
    };
    Room.prototype.initRooms = function (rooms) {
        this.roomContent.removeAllChildren();
        var names = ["San bằng tất cả", "Nhiều tiền thì vào", "Dân chơi", "Bàn cho đại gia", "Tứ quý", "Bốn đôi thông", "Tới trắng", "Chặt heo"];
        var _loop_1 = function (i) {
            var room = rooms[i];
            item = cc.instantiate(this_1.roomItem);
            item.getChildByName("lblId").getComponent(cc.Label).string = (i + 1).toString();
            item.getChildByName("lblName").getComponent(cc.Label).string = names[Utils_1.default.randomRangeInt(0, names.length)];
            txts = item.getComponentsInChildren(cc.Label);
            Tween_1.default.numberTo(txts[2], room.moneyRequire, 0.3);
            Tween_1.default.numberTo(txts[3], room.moneyBet, 0.3);
            txts[4].string = room.nPersion + "/" + room.maxUserPerRoom;
            progress = item.getChildByName("playersProgress").getComponent(cc.Sprite);
            progress.fillRange = room.nPersion / room.maxUserPerRoom;
            btnJoin = item.getComponentInChildren(cc.Button);
            btnJoin.node.on(cc.Node.EventType.TOUCH_END, function (event) {
                SamNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, room.maxUserPerRoom, room.moneyBet, 0));
            });
            item.parent = this_1.roomContent;
        };
        var this_1 = this, item, txts, progress, btnJoin;
        for (var i = 0; i < rooms.length; i++) {
            _loop_1(i);
        }
        ;
    };
    Room.prototype.actBack = function () {
        SamNetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    Room.prototype.show = function (isShow) {
        this.node.active = isShow;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    Room.prototype.refreshRoom = function () {
        SamNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendMoneyBetConfig());
    };
    Room.prototype.actQuickPlay = function () {
        if (this.listRoom == null) {
            App_1.default.instance.alertDialog.showMsg("Không tìm thấy bàn nào phù hợp với bạn.");
            return;
        }
        //find all room bet < coin
        var listRoom = [];
        for (var i = 0; i < this.listRoom.length; i++) {
            if (this.listRoom[i].moneyRequire <= Configs_1.default.Login.Coin) {
                listRoom.push(this.listRoom[i]);
            }
        }
        if (listRoom.length <= 0) {
            App_1.default.instance.alertDialog.showMsg("Không tìm thấy bàn nào phù hợp với bạn.");
            return;
        }
        var randomIdx = Utils_1.default.randomRangeInt(0, listRoom.length);
        var room = listRoom[randomIdx];
        SamNetworkClient_1.default.getInstance().send(new CardGame_Cmd_1.default.SendJoinRoom(Configs_1.default.App.MONEY_TYPE, room.maxUserPerRoom, room.moneyBet, 0));
    };
    var Room_1;
    Room.instance = null;
    __decorate([
        property(cc.Node)
    ], Room.prototype, "roomContent", void 0);
    __decorate([
        property(cc.Prefab)
    ], Room.prototype, "roomItem", void 0);
    __decorate([
        property(cc.Node)
    ], Room.prototype, "ingameNode", void 0);
    __decorate([
        property(cc.Label)
    ], Room.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Room.prototype, "lblNickname", void 0);
    Room = Room_1 = __decorate([
        ccclass
    ], Room);
    return Room;
}(cc.Component));
exports.default = Room;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTYW1TY3JpcHRcXFNhbS5Sb29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUFtRDtBQUNuRCw0Q0FBdUM7QUFDdkMsd0VBQW1FO0FBQ25FLGdEQUEyQztBQUMzQyxnRUFBMEQ7QUFDMUQsd0VBQTJEO0FBRTNELHdFQUFtRTtBQUNuRSxxQ0FBK0I7QUFDL0IsZ0RBQTJDO0FBQzNDLDJDQUFrQztBQUNsQyw4REFBZ0Q7QUFDMUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFrUkM7UUE3UUcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsY0FBUSxHQUFHLEVBQUUsQ0FBQzs7SUFrUTFCLENBQUM7YUFsUm9CLElBQUk7SUFrQnJCLHFCQUFNLEdBQU47UUFBQSxpQkFpQkM7UUFoQkcsTUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsc0JBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLG9CQUFNLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFFL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FB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QUM7YUFDbkM7U0FDSjtRQUNELElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDdEIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDNUUsT0FBTztTQUNWO1FBQ0QsSUFBSSxTQUFTLEdBQUcsZUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQiwwQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxzQkFBVyxDQUFDLFlBQVksQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckksQ0FBQzs7SUEvUWEsYUFBUSxHQUFTLElBQUksQ0FBQztJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3dDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NkNBQ1U7SUFiWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBa1J4QjtJQUFELFdBQUM7Q0FsUkQsQUFrUkMsQ0FsUmlDLEVBQUUsQ0FBQyxTQUFTLEdBa1I3QztrQkFsUm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQnVuZGxlQ29udHJvbFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IENhcmRHYW1lQ21kIGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvQ2FyZEdhbWUuQ21kXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgVGllbkxlbk5ldHdvcmtDbGllbnQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9UaWVuTGVuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IFNhbU5ldHdvcmtDbGllbnQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9TYW1OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgU2FtQ21kIGZyb20gXCIuL1NhbS5DbWRcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IEluR2FtZSBmcm9tIFwiLi9TYW0uSW5HYW1lXCI7XG5pbXBvcnQgUmVzIGZyb20gXCIuLi9UaWVuTGVuU2NyaXB0L1RpZW5MZW4uUmVzelwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvb20gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogUm9vbSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByb29tQ29udGVudDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByb29tSXRlbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaW5nYW1lTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxOaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpbmdhbWU6IEluR2FtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBsaXN0Um9vbSA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBSb29tLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgUmVzLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuaW5nYW1lID0gdGhpcy5pbmdhbWVOb2RlLmdldENvbXBvbmVudChJbkdhbWUpO1xuICAgICAgICB0aGlzLmluZ2FtZU5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBTYW1OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdEJhY2soKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5sYmxOaWNrbmFtZS5zdHJpbmcgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgbGV0IGNtZElkID0gaW5wYWNrZXQuZ2V0Q21kSWQoKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJTYW0gY21kOiBcIiwgY21kSWQpO1xuICAgICAgICAgICAgc3dpdGNoIChjbWRJZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgQ2FyZEdhbWVDbWQuQ29kZS5MT0dJTjpcbiAgICAgICAgICAgICAgICAgICAgU2FtTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IFNhbUNtZC5TZW5kUmVjb25uZWN0Um9vbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDYXJkR2FtZUNtZC5Db2RlLk1PTkVZX0JFVF9DT05GSUc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBDYXJkR2FtZUNtZC5SZXNNb25leUJldENvbmZpZyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RSb29tID0gcmVzLmxpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFJvb21zKHJlcy5saXN0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgQ2FyZEdhbWVDbWQuQ29kZS5KT0lOX1JPT01fRkFJTDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IENhcmRHYW1lQ21kLlJlY2VpdmVkSm9pblJvb21GYWlsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiTFxcdTFlZDdpIGtpXFx1MWVjM20gdHJhIHRoXFx1MDBmNG5nIHRpbiFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJLaFxcdTAwZjRuZyB0XFx1MDBlY20gXFx1MDExMVxcdTAxYjBcXHUxZWUzYyBwaFxcdTAwZjJuZyB0aFxcdTAwZWRjaCBoXFx1MWVlM3AuIFZ1aSBsXFx1MDBmMm5nIHRoXFx1MWVlZCBsXFx1MWVhMWkgc2F1IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIkJcXHUxZWExbiBraFxcdTAwZjRuZyBcXHUwMTExXFx1MWVlNyB0aVxcdTFlYzFuIHZcXHUwMGUwbyBwaFxcdTAwZjJuZyBjaFxcdTAxYTFpIG5cXHUwMGUweSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJLaFxcdTAwZjRuZyB0XFx1MDBlY20gXFx1MDExMVxcdTAxYjBcXHUxZWUzYyBwaFxcdTAwZjJuZyB0aFxcdTAwZWRjaCBoXFx1MWVlM3AuIFZ1aSBsXFx1MDBmMm5nIHRoXFx1MWVlZCBsXFx1MWVhMWkgc2F1IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIk1cXHUxZWQ3aSBsXFx1MWVhN24gdlxcdTAwZTBvIHBoXFx1MDBmMm5nIHBoXFx1MWVhM2kgY1xcdTAwZTFjaCBuaGF1IDEwIGdpXFx1MDBlMnkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZSA9IFwiSFxcdTFlYzcgdGhcXHUxZWQxbmcgYlxcdTFlYTNvIHRyXFx1MDBlYyFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJLaFxcdTAwZjRuZyB0XFx1MDBlY20gdGhcXHUxZWE1eSBwaFxcdTAwZjJuZyBjaFxcdTAxYTFpIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUgPSBcIk1cXHUxZWFkdCBraFxcdTFlYTl1IHBoXFx1MDBmMm5nIGNoXFx1MDFhMWkga2hcXHUwMGY0bmcgXFx1MDExMVxcdTAwZmFuZyFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJQaFxcdTAwZjJuZyBjaFxcdTAxYTFpIFxcdTAxMTFcXHUwMGUzIFxcdTAxMTFcXHUxZWU3IG5nXFx1MDFiMFxcdTFlZGRpIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlID0gXCJCXFx1MWVhMW4gYlxcdTFlY2IgY2hcXHUxZWU3IHBoXFx1MDBmMm5nIGtoXFx1MDBmNG5nIGNobyB2XFx1MDBlMG8gYlxcdTAwZTBuIVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLkpPSU5fUk9PTV9TVUNDRVNTOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVkSm9pblJvb21TdWNjZXNzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLnNob3codHJ1ZSwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU2FtQ21kLkNvZGUuVVBEQVRFX0dBTUVfSU5GTzoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFNhbUNtZC5SZWNlaXZlZFVwZGF0ZUdhbWVJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiU2FtIFVQREFURV9HQU1FX0lORk8gcmVzIDogXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvdyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLnVwZGF0ZUdhbWVJbmZvKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLkFVVE9fU1RBUlQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBTYW1DbWQuUmVjZWl2ZWRBdXRvU3RhcnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUuYXV0b1N0YXJ0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLlVTRVJfSk9JTl9ST09NOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVVc2VySm9pblJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUub25Vc2VySm9pblJvb20ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU2FtQ21kLkNvZGUuRklSU1RfVFVSTjoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFNhbUNtZC5SZWNlaXZlZEZpcnN0VHVybkRlY2lzaW9uKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLmZpcnN0VHVybihyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTYW1DbWQuQ29kZS5DSElBX0JBSToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFNhbUNtZC5SZWNlaXZlZENoaWFCYWkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUuY2hpYUJhaShyZXMpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLkNIQU5HRV9UVVJOOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVkQ2hhbmdlVHVybihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5jaGFuZ2VUdXJuKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLkRBTkhfQkFJOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVkRGFuaEJhaShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5zdWJtaXRUdXJuKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLkJPX0xVT1Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBTYW1DbWQuUmVjZWl2ZWRCb2x1b3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUucGFzc1R1cm4ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU2FtQ21kLkNvZGUuRU5EX0dBTUU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBTYW1DbWQuUmVjZWl2ZWRFbmRHYW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLmVuZEdhbWUocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU2FtQ21kLkNvZGUuVVBEQVRFX01BVENIOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVkVXBkYXRlTWF0Y2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUudXBkYXRlTWF0Y2gocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU2FtQ21kLkNvZGUuVVNFUl9MRUFWRV9ST09NOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlVzZXJMZWF2ZVJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUudXNlckxlYXZlUm9vbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY2FzZSBTYW1DbWQuQ29kZS5SRUNPTk5FQ1RfR0FNRV9ST09NOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlVzZXJMZWF2ZVJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5pbmdhbWUudXNlckxlYXZlUm9vbShyZXMpO1xuICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgY2FzZSBTYW1DbWQuQ29kZS5CQU9fU0FNOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVCYW9TYW0oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUub25CYW9TYW0ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgU2FtQ21kLkNvZGUuSFVZX0JBT19TQU06IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBTYW1DbWQuUmVjZWl2ZUh1eUJhb1NhbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5vbkh1eUJhb1NhbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTYW1DbWQuQ29kZS5RVVlFVF9ESU5IX1NBTToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IFNhbUNtZC5SZWNlaXZlZFF1eWV0RGluaFNhbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5vblF1eWV0RGluaFNhbShyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBTYW1DbWQuQ29kZS5SRVFVRVNUX0xFQVZFX1JPT006IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBTYW1DbWQuUmVjZWl2ZWROb3RpZnlSZWdPdXRSb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nYW1lLm5vdGlmeVVzZXJSZWdPdXRSb29tKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFNhbUNtZC5Db2RlLkNIQVRfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgU2FtQ21kLlJlY2VpdmVkQ2hhdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiU2FtIENIQVRfUk9PTSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZ2FtZS5wbGF5ZXJDaGF0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBTYW1DbWQuQ29kZS5DSEFUX0NIT05HOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBTYW1DbWQuUmVjZWl2ZWRDaGF0Q2hvbmcoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiU0FNIENIQVRfQ0hPTkcgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmdhbWUucGxheWVyQ2hhdENob25nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vZ2V0IGxpc3Qgcm9vbVxuICAgICAgICB0aGlzLnJlZnJlc2hSb29tKCk7XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBTYW1DbWQuU2VuZFJlY29ubmVjdFJvb20oKSk7XG4gICAgfVxuXG4gICAgaW5pdFJvb21zKHJvb21zKSB7XG4gICAgICAgIHRoaXMucm9vbUNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgbGV0IG5hbWVzID0gW1wiU2FuIGLhurFuZyB04bqldCBj4bqjXCIsIFwiTmhp4buBdSB0aeG7gW4gdGjDrCB2w6BvXCIsIFwiRMOibiBjaMahaVwiLCBcIkLDoG4gY2hvIMSR4bqhaSBnaWFcIiwgXCJU4bupIHF1w71cIiwgXCJC4buRbiDEkcO0aSB0aMO0bmdcIiwgXCJU4bubaSB0cuG6r25nXCIsIFwiQ2jhurd0IGhlb1wiXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb29tcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvb20gPSByb29tc1tpXTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb29tSXRlbSk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsSWRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoaSArIDEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwibGJsTmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG5hbWVzW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIG5hbWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgdmFyIHR4dHMgPSBpdGVtLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHR4dHNbMl0sIHJvb20ubW9uZXlSZXF1aXJlLCAwLjMpO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odHh0c1szXSwgcm9vbS5tb25leUJldCwgMC4zKTtcbiAgICAgICAgICAgIHR4dHNbNF0uc3RyaW5nID0gcm9vbS5uUGVyc2lvbiArIFwiL1wiICsgcm9vbS5tYXhVc2VyUGVyUm9vbTtcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9IGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJwbGF5ZXJzUHJvZ3Jlc3NcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBwcm9ncmVzcy5maWxsUmFuZ2UgPSByb29tLm5QZXJzaW9uIC8gcm9vbS5tYXhVc2VyUGVyUm9vbTtcbiAgICAgICAgICAgIHZhciBidG5Kb2luID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG5Kb2luLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBTYW1OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ2FyZEdhbWVDbWQuU2VuZEpvaW5Sb29tKENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUsIHJvb20ubWF4VXNlclBlclJvb20sIHJvb20ubW9uZXlCZXQsIDApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLnJvb21Db250ZW50O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFjdEJhY2soKSB7XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jbG9zZSgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coaXNTaG93OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBpc1Nob3c7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgfVxuXG4gICAgcmVmcmVzaFJvb20oKSB7XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDYXJkR2FtZUNtZC5TZW5kTW9uZXlCZXRDb25maWcoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdFF1aWNrUGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdFJvb20gPT0gbnVsbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJLaMO0bmcgdMOsbSB0aOG6pXkgYsOgbiBuw6BvIHBow7kgaOG7o3AgduG7m2kgYuG6oW4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vZmluZCBhbGwgcm9vbSBiZXQgPCBjb2luXG4gICAgICAgIGxldCBsaXN0Um9vbSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFJvb20ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RSb29tW2ldLm1vbmV5UmVxdWlyZSA8PSBDb25maWdzLkxvZ2luLkNvaW4pIHtcbiAgICAgICAgICAgICAgICBsaXN0Um9vbS5wdXNoKHRoaXMubGlzdFJvb21baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsaXN0Um9vbS5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJLaMO0bmcgdMOsbSB0aOG6pXkgYsOgbiBuw6BvIHBow7kgaOG7o3AgduG7m2kgYuG6oW4uXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCByYW5kb21JZHggPSBVdGlscy5yYW5kb21SYW5nZUludCgwLCBsaXN0Um9vbS5sZW5ndGgpO1xuICAgICAgICBsZXQgcm9vbSA9IGxpc3RSb29tW3JhbmRvbUlkeF07XG4gICAgICAgIFNhbU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDYXJkR2FtZUNtZC5TZW5kSm9pblJvb20oQ29uZmlncy5BcHAuTU9ORVlfVFlQRSwgcm9vbS5tYXhVc2VyUGVyUm9vbSwgcm9vbS5tb25leUJldCwgMCkpO1xuICAgIH1cbn0iXX0=