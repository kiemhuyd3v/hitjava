"use strict";
cc._RF.push(module, 'e0a41YHXsZDBYEqWON2rQf/', 'TienLen.Cmd');
// Lobby/LobbyScript/TienLenScript/TienLen.Cmd.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TienLenCmd = void 0;
var Network_InPacket_1 = require("../Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../Script/networks/Network.OutPacket");
var TienLen_Constant_1 = require("./TienLen.Constant");
var ccclass = cc._decorator.ccclass;
var TienLenCmd;
(function (TienLenCmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.LOGIN = 1;
        Code.NOTIFY_DISCONNECT = 37;
        Code.PING_PONG = 50;
        Code.JOIN_ROOM = 3001;
        Code.QUICK_ROOM_SUCCEED = 3006;
        Code.CHAT_ROOM = 3008;
        Code.DANH_BAI = 3101;
        Code.START_GAME = 3102;
        Code.END_GAME = 3103;
        Code.THANG_TRANG = 3104;
        Code.CHIA_BAI = 3105;
        Code.BO_LUOT = 3106;
        Code.AUTO_START = 3107;
        Code.FIRST_TURN = 3108;
        Code.UPDATE_GAME_INFO = 3110;
        Code.REQUEST_LEAVE_ROOM = 3111;
        Code.CHANGE_TURN = 3112;
        Code.CHAT_CHONG = 3113;
        Code.HOLD = 3116;
        Code.JOIN_ROOM_SUCCESS = 3118;
        Code.USER_LEAVE_ROOM = 3119;
        Code.NOTIFY_KICK_OFF = 3120;
        Code.USER_JOIN_ROOM = 3121;
        Code.UPDATE_MATCH = 3123;
        Code.WAIT_4_DOI_THONG = 3124;
        return Code;
    }());
    TienLenCmd.Code = Code;
    var SendTest = /** @class */ (function (_super) {
        __extends(SendTest, _super);
        function SendTest(a) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(0);
            _this.packHeader();
            _this.putString(a);
            _this.putInt(111);
            _this.putLong(2147483647);
            _this.putLong(325);
            _this.putLong(8686);
            _this.updateSize();
            return _this;
        }
        return SendTest;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendTest = SendTest;
    var SendLogin = /** @class */ (function (_super) {
        __extends(SendLogin, _super);
        function SendLogin(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.LOGIN);
            _this.packHeader();
            _this.putString(a);
            _this.putString(b);
            _this.updateSize();
            return _this;
        }
        return SendLogin;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendLogin = SendLogin;
    var SendReconnectRoom = /** @class */ (function (_super) {
        __extends(SendReconnectRoom, _super);
        function SendReconnectRoom() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.RECONNECT_GAME_ROOM);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendReconnectRoom;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendReconnectRoom = SendReconnectRoom;
    var SendReadyAutoStart = /** @class */ (function (_super) {
        __extends(SendReadyAutoStart, _super);
        function SendReadyAutoStart() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(3124);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendReadyAutoStart;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendReadyAutoStart = SendReadyAutoStart;
    var SendStartGame = /** @class */ (function (_super) {
        __extends(SendStartGame, _super);
        function SendStartGame() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.START_GAME);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendStartGame;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendStartGame = SendStartGame;
    var SendPing = /** @class */ (function (_super) {
        __extends(SendPing, _super);
        function SendPing() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(0);
            _this.setCmdId(Code.PING_PONG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendPing;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendPing = SendPing;
    var SendDanhBai = /** @class */ (function (_super) {
        __extends(SendDanhBai, _super);
        function SendDanhBai(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DANH_BAI);
            _this.packHeader();
            _this.putByte(a);
            if (!a) {
                _this.putShort(b.length);
                for (var c = 0; c < b.length; c++)
                    _this.putByte(b[c]);
            }
            _this.updateSize();
            return _this;
        }
        return SendDanhBai;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendDanhBai = SendDanhBai;
    var SendBoLuot = /** @class */ (function (_super) {
        __extends(SendBoLuot, _super);
        function SendBoLuot(a) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DANH_BAI);
            _this.packHeader();
            _this.putByte(a);
            _this.updateSize();
            return _this;
        }
        return SendBoLuot;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendBoLuot = SendBoLuot;
    var SendRequestLeaveGame = /** @class */ (function (_super) {
        __extends(SendRequestLeaveGame, _super);
        function SendRequestLeaveGame() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.REQUEST_LEAVE_ROOM);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendRequestLeaveGame;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendRequestLeaveGame = SendRequestLeaveGame;
    var ReceivedJoinRoomSuccess = /** @class */ (function (_super) {
        __extends(ReceivedJoinRoomSuccess, _super);
        function ReceivedJoinRoomSuccess(data) {
            var _this = _super.call(this, data) || this;
            _this.myChair = 0;
            _this.moneyBet = 0;
            _this.roomOwner = 0;
            _this.roomId = 0;
            _this.gameId = 0;
            _this.moneyType = 0;
            _this.playerSize = 0;
            _this.playerStatus = [];
            _this.playerInfos = [];
            _this.gameAction = 0;
            _this.handCardSizeSize = 0;
            _this.handCardSize = [];
            _this.currentChair = 0;
            _this.countDownTime = 0;
            _this.myChair = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.roomOwner = _this.getByte();
            _this.roomId = _this.getInt();
            _this.gameId = _this.getInt();
            _this.moneyType = _this.getByte();
            _this.playerSize = _this.getShort();
            _this.playerStatus = [];
            for (var a = 0; a < _this.playerSize; a++)
                _this.playerStatus.push(_this.getByte());
            _this.playerSize = _this.getShort();
            _this.playerInfos = [];
            for (var a = 0; a < _this.playerSize; a++) {
                var b = {
                    avatar: _this.getString(),
                    nickName: _this.getString(),
                    money: _this.getLong()
                };
                _this.playerInfos.push(b);
            }
            _this.gameAction = _this.getByte();
            _this.handCardSizeSize = _this.getShort();
            _this.handCardSize = [];
            for (var a = 0; a < _this.handCardSizeSize; a++)
                _this.handCardSize.push(_this.getByte());
            _this.currentChair = _this.getByte();
            _this.countDownTime = _this.getByte();
            return _this;
        }
        return ReceivedJoinRoomSuccess;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedJoinRoomSuccess = ReceivedJoinRoomSuccess;
    var ReceivedDisconnect = /** @class */ (function (_super) {
        __extends(ReceivedDisconnect, _super);
        function ReceivedDisconnect(data) {
            return _super.call(this, data) || this;
        }
        return ReceivedDisconnect;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedDisconnect = ReceivedDisconnect;
    var ReceivedUpdateGameInfo = /** @class */ (function (_super) {
        __extends(ReceivedUpdateGameInfo, _super);
        function ReceivedUpdateGameInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.maxPlayer = 0;
            _this.myChair = 0;
            _this.cards = [];
            _this.boLuot = false;
            _this.toiTrang = 0;
            _this.newRound = false;
            _this.gameServerState = 0;
            _this.gameAction = 0;
            _this.activeTimeRemain = 0;
            _this.currentChair = 0;
            _this.recentCards = [];
            _this.moneyType = 0;
            _this.moneyBet = 0;
            _this.gameId = 0;
            _this.roomId = 0;
            _this.playerStatus = [];
            _this.hasInfoList = [];
            _this.playerInfos = [];
            _this.maxPlayer = _this.getByte();
            _this.myChair = _this.getByte();
            var b = _this.getShort();
            _this.cards = [];
            for (var a = 0; a < b; a++)
                _this.cards.push(_this.getByte());
            _this.boLuot = _this.getBool();
            _this.toiTrang = _this.getInt();
            _this.newRound = _this.getBool();
            _this.gameServerState = _this.getByte();
            _this.gameAction = _this.getByte();
            _this.activeTimeRemain = _this.getByte();
            _this.currentChair = _this.getByte();
            b = _this.getShort();
            _this.recentCards = [];
            for (var a = 0; a < b; a++)
                _this.recentCards.push(_this.getByte());
            _this.moneyType = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.gameId = _this.getInt();
            _this.roomId = _this.getInt();
            b = _this.getShort();
            _this.playerStatus = [];
            _this.hasInfoList = [];
            _this.playerInfos = [];
            for (var a = 0; a < b; a++)
                _this.hasInfoList.push(_this.getBool());
            for (var a = 0; a < TienLen_Constant_1.default.Config.MAX_PLAYER; a++) {
                var info = {};
                if (_this.hasInfoList[a]) {
                    var cards = _this.getByte();
                    _this.playerStatus.push(_this.getByte());
                    var avatar = _this.getString();
                    var uID = _this.getInt();
                    var nickName = _this.getString();
                    var money = _this.getLong();
                    info = {
                        cards: cards,
                        avatar: avatar,
                        uID: uID,
                        nickName: nickName,
                        money: money
                    };
                }
                else
                    _this.playerStatus.push(0);
                _this.playerInfos.push(info);
            }
            return _this;
        }
        return ReceivedUpdateGameInfo;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedUpdateGameInfo = ReceivedUpdateGameInfo;
    var ReceivedAutoStart = /** @class */ (function (_super) {
        __extends(ReceivedAutoStart, _super);
        function ReceivedAutoStart(data) {
            var _this = _super.call(this, data) || this;
            _this.isAutoStart = false;
            _this.autoStartTime = 0;
            _this.isAutoStart = _this.getBool();
            _this.autoStartTime = _this.getByte();
            return _this;
        }
        return ReceivedAutoStart;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedAutoStart = ReceivedAutoStart;
    var ReceivedChiaBai = /** @class */ (function (_super) {
        __extends(ReceivedChiaBai, _super);
        function ReceivedChiaBai(data) {
            var _this = _super.call(this, data) || this;
            _this.cardSize = 0;
            _this.cards = [];
            _this.toiTrang = 0;
            _this.timeBaoSam = 0;
            _this.gameId = 0;
            var a = 0;
            _this.cardSize = _this.getShort();
            _this.cards = [];
            for (a = 0; a < _this.cardSize; a++)
                _this.cards.push(_this.getByte());
            _this.toiTrang = _this.getByte();
            _this.timeBaoSam = _this.getByte();
            _this.gameId = _this.getInt();
            return _this;
        }
        return ReceivedChiaBai;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedChiaBai = ReceivedChiaBai;
    var ReceivedDanhBai = /** @class */ (function (_super) {
        __extends(ReceivedDanhBai, _super);
        function ReceivedDanhBai(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.cards = [];
            _this.numberCard = 0;
            _this.chair = _this.getByte();
            var b = _this.getShort();
            _this.cards = [];
            for (var a = 0; a < b; a++)
                _this.cards.push(_this.getByte());
            _this.numberCard = _this.getByte();
            return _this;
        }
        return ReceivedDanhBai;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedDanhBai = ReceivedDanhBai;
    var ReceivedBoluot = /** @class */ (function (_super) {
        __extends(ReceivedBoluot, _super);
        function ReceivedBoluot(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceivedBoluot;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedBoluot = ReceivedBoluot;
    var ReceivedChangeTurn = /** @class */ (function (_super) {
        __extends(ReceivedChangeTurn, _super);
        function ReceivedChangeTurn(data) {
            var _this = _super.call(this, data) || this;
            _this.newRound = false;
            _this.chair = 0;
            _this.chairLastTurn = 0;
            _this.time = 0;
            _this.newRound = _this.getBool();
            _this.chair = _this.getByte();
            _this.chairLastTurn = _this.getByte();
            //Utils.Log("chairLastTurn: " + this.chairLastTurn);
            _this.time = _this.getByte();
            return _this;
        }
        return ReceivedChangeTurn;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedChangeTurn = ReceivedChangeTurn;
    var ReceivedWaitBonDoiThong = /** @class */ (function (_super) {
        __extends(ReceivedWaitBonDoiThong, _super);
        function ReceivedWaitBonDoiThong(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceivedWaitBonDoiThong;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedWaitBonDoiThong = ReceivedWaitBonDoiThong;
    var ReceivedEndGame = /** @class */ (function (_super) {
        __extends(ReceivedEndGame, _super);
        function ReceivedEndGame(data) {
            var _this = _super.call(this, data) || this;
            _this.winTypes = [];
            _this.ketQuaTinhTienList = [];
            _this.cards = [];
            _this.sizeWinType = 0;
            _this.kqTinhTienSize = 0;
            _this.currentMoney = [];
            _this.countDown = 0;
            _this.winTypes = [];
            _this.ketQuaTinhTienList = [];
            _this.cards = [];
            _this.sizeWinType = _this.getShort();
            //Utils.Log("sizeWinType: " + this.sizeWinType);
            for (var a = 0; a < _this.sizeWinType; a++)
                _this.winTypes.push(_this.getByte());
            _this.kqTinhTienSize = _this.getShort();
            for (a = 0; a < _this.kqTinhTienSize; a++)
                _this.ketQuaTinhTienList.push(_this.getLong());
            var b = _this.getShort();
            _this.currentMoney = [];
            for (var a = 0; a < b; a++)
                _this.currentMoney.push(_this.getLong());
            for (var a = 0; a < TienLen_Constant_1.default.Config.MAX_PLAYER; a++) {
                for (var b = _this.getShort(), c = [], d = 0; d < b; d++)
                    c.push(_this.getByte());
                _this.cards.push(c);
            }
            _this.countDown = _this.getByte();
            return _this;
        }
        return ReceivedEndGame;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedEndGame = ReceivedEndGame;
    var ReceivedFirstTurnDecision = /** @class */ (function (_super) {
        __extends(ReceivedFirstTurnDecision, _super);
        function ReceivedFirstTurnDecision(data) {
            var _this = _super.call(this, data) || this;
            _this.isRandom = false;
            _this.chair = 0;
            _this.cardSize = 0;
            _this.cards = [];
            _this.isRandom = _this.getBool();
            _this.chair = _this.getByte();
            _this.cardSize = _this.getShort();
            _this.cards = [];
            for (var a = 0; a < _this.cardSize; a++) {
                var b = _this.getByte();
                _this.cards.push(b);
                //Utils.Log("cardFirstTurn: " + a + " " + b)
            }
            return _this;
        }
        return ReceivedFirstTurnDecision;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedFirstTurnDecision = ReceivedFirstTurnDecision;
    var ReceivedChatChong = /** @class */ (function (_super) {
        __extends(ReceivedChatChong, _super);
        function ReceivedChatChong(data) {
            var _this = _super.call(this, data) || this;
            _this.winChair = 0;
            _this.lostChair = 0;
            _this.winMoney = 0;
            _this.lostMoney = 0;
            _this.winCurrentMoney = 0;
            _this.lostCurrentMoney = 0;
            _this.winChair = _this.getByte();
            _this.lostChair = _this.getByte();
            _this.winMoney = _this.getLong();
            _this.lostMoney = _this.getLong();
            _this.winCurrentMoney = _this.getLong();
            _this.lostCurrentMoney = _this.getLong();
            return _this;
        }
        return ReceivedChatChong;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedChatChong = ReceivedChatChong;
    var ReceivedPingPong2 = /** @class */ (function (_super) {
        __extends(ReceivedPingPong2, _super);
        function ReceivedPingPong2(data) {
            var _this = _super.call(this, data) || this;
            _this.id = 0;
            _this.id = _this.getLong();
            return _this;
        }
        return ReceivedPingPong2;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedPingPong2 = ReceivedPingPong2;
    var UserLeaveRoom = /** @class */ (function (_super) {
        __extends(UserLeaveRoom, _super);
        function UserLeaveRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.nickName = "";
            _this.chair = _this.getByte();
            _this.nickName = _this.getString();
            return _this;
        }
        return UserLeaveRoom;
    }(Network_InPacket_1.default));
    TienLenCmd.UserLeaveRoom = UserLeaveRoom;
    var ReceiveUserJoinRoom = /** @class */ (function (_super) {
        __extends(ReceiveUserJoinRoom, _super);
        function ReceiveUserJoinRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.info = {};
            _this.uChair = 0;
            _this.uStatus = 0;
            _this.info = {
                nickName: _this.getString(),
                avatar: _this.getString(),
                money: _this.getLong()
            };
            _this.uChair = _this.getByte();
            _this.uStatus = _this.getByte();
            return _this;
        }
        ;
        return ReceiveUserJoinRoom;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceiveUserJoinRoom = ReceiveUserJoinRoom;
    var ReceivedUpdateMatch = /** @class */ (function (_super) {
        __extends(ReceivedUpdateMatch, _super);
        function ReceivedUpdateMatch(data) {
            var _this = _super.call(this, data) || this;
            _this.myChair = 0;
            _this.hasInfo = [];
            _this.infos = [];
            _this.myChair = _this.getByte();
            var a = _this.getShort();
            _this.hasInfo = [];
            for (var b = 0; b < a; b++)
                _this.hasInfo.push(_this.getBool());
            _this.infos = [];
            for (b = 0; b < a; b++) {
                var c = {
                    money: _this.getLong(),
                    status: _this.getInt()
                };
                _this.hasInfo[b] && (c.money, c.status);
                _this.infos.push(c);
            }
            return _this;
        }
        return ReceivedUpdateMatch;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedUpdateMatch = ReceivedUpdateMatch;
    var ReceiveSamConfig = /** @class */ (function (_super) {
        __extends(ReceiveSamConfig, _super);
        function ReceiveSamConfig(data) {
            var _this = _super.call(this, data) || this;
            _this.listSize = 0;
            _this.list = [];
            _this.listSize = _this.getShort();
            _this.list = [];
            for (var a = 0; a < _this.listSize; a++) {
                var b = {
                    maxUserPerRoom: _this.getByte(),
                    moneyType: _this.getByte(),
                    moneyBet: _this.getLong(),
                    moneyRequire: _this.getLong(),
                    nPersion: _this.getInt()
                };
                _this.list.push(b);
            }
            return _this;
        }
        return ReceiveSamConfig;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceiveSamConfig = ReceiveSamConfig;
    var ReceivedNotifyRegOutRoom = /** @class */ (function (_super) {
        __extends(ReceivedNotifyRegOutRoom, _super);
        function ReceivedNotifyRegOutRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.outChair = 0;
            _this.isOutRoom = false;
            _this.outChair = _this.getByte();
            _this.isOutRoom = _this.getBool();
            return _this;
        }
        return ReceivedNotifyRegOutRoom;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedNotifyRegOutRoom = ReceivedNotifyRegOutRoom;
    var ReceivedKickOff = /** @class */ (function (_super) {
        __extends(ReceivedKickOff, _super);
        function ReceivedKickOff(data) {
            var _this = _super.call(this, data) || this;
            _this.reason = 0;
            _this.reason = _this.getByte();
            return _this;
        }
        return ReceivedKickOff;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedKickOff = ReceivedKickOff;
    var ReceivePingPong = /** @class */ (function (_super) {
        __extends(ReceivePingPong, _super);
        function ReceivePingPong(data) {
            var _this = _super.call(this, data) || this;
            _this.test = 0;
            _this.test = _this.getLong();
            return _this;
        }
        return ReceivePingPong;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivePingPong = ReceivePingPong;
    var ReceivedChatRoom = /** @class */ (function (_super) {
        __extends(ReceivedChatRoom, _super);
        function ReceivedChatRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.isIcon = _this.getBool();
            _this.content = decodeURI(_this.getString());
            _this.nickname = _this.getString();
            return _this;
        }
        return ReceivedChatRoom;
    }(Network_InPacket_1.default));
    TienLenCmd.ReceivedChatRoom = ReceivedChatRoom;
    var SendChatRoom = /** @class */ (function (_super) {
        __extends(SendChatRoom, _super);
        function SendChatRoom(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHAT_ROOM);
            _this.packHeader();
            _this.putByte(a ? 1 : 0);
            _this.putString(encodeURI(b));
            _this.updateSize();
            return _this;
        }
        return SendChatRoom;
    }(Network_OutPacket_1.default));
    TienLenCmd.SendChatRoom = SendChatRoom;
})(TienLenCmd = exports.TienLenCmd || (exports.TienLenCmd = {}));
exports.default = TienLenCmd;

cc._RF.pop();