"use strict";
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