
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLkNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsd0VBQTJEO0FBQzNELDBFQUE2RDtBQUM3RCx1REFBaUQ7QUFFekMsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBaUIsVUFBVSxDQW1pQjFCO0FBbmlCRCxXQUFpQixVQUFVO0lBQ3ZCO1FBQUE7UUEyQkEsQ0FBQztRQTFCVSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1Ysc0JBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixtQkFBYyxHQUFHLElBQUksQ0FBQztR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QUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FYQSxBQVdDLENBWGlDLDJCQUFTLEdBVzFDO0lBWFksdUJBQVksZUFXeEIsQ0FBQTtBQUNMLENBQUMsRUFuaUJnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQW1pQjFCO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuaW1wb3J0IFRpZW5MZW5Db25zdGFudCBmcm9tIFwiLi9UaWVuTGVuLkNvbnN0YW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBUaWVuTGVuQ21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBMT0dJTiA9IDE7XG4gICAgICAgIHN0YXRpYyBOT1RJRllfRElTQ09OTkVDVCA9IDM3O1xuICAgICAgICBzdGF0aWMgUElOR19QT05HID0gNTA7XG4gICAgICAgIHN0YXRpYyBKT0lOX1JPT00gPSAzMDAxO1xuICAgICAgICBzdGF0aWMgUkVDT05ORUNUX0dBTUVfUk9PTTogMzAwMjtcbiAgICAgICAgc3RhdGljIFFVSUNLX1JPT01fU1VDQ0VFRCA9IDMwMDY7XG4gICAgICAgIHN0YXRpYyBDSEFUX1JPT00gPSAzMDA4O1xuICAgICAgICBzdGF0aWMgREFOSF9CQUkgPSAzMTAxO1xuICAgICAgICBzdGF0aWMgU1RBUlRfR0FNRSA9IDMxMDI7XG4gICAgICAgIHN0YXRpYyBFTkRfR0FNRSA9IDMxMDM7XG4gICAgICAgIHN0YXRpYyBUSEFOR19UUkFORyA9IDMxMDQ7XG4gICAgICAgIHN0YXRpYyBDSElBX0JBSSA9IDMxMDU7XG4gICAgICAgIHN0YXRpYyBCT19MVU9UID0gMzEwNjtcbiAgICAgICAgc3RhdGljIEFVVE9fU1RBUlQgPSAzMTA3O1xuICAgICAgICBzdGF0aWMgRklSU1RfVFVSTiA9IDMxMDg7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfR0FNRV9JTkZPID0gMzExMDtcbiAgICAgICAgc3RhdGljIFJFUVVFU1RfTEVBVkVfUk9PTSA9IDMxMTE7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfVFVSTiA9IDMxMTI7XG4gICAgICAgIHN0YXRpYyBDSEFUX0NIT05HID0gMzExMztcbiAgICAgICAgc3RhdGljIEhPTEQgPSAzMTE2O1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX1NVQ0NFU1MgPSAzMTE4O1xuICAgICAgICBzdGF0aWMgVVNFUl9MRUFWRV9ST09NID0gMzExOTtcbiAgICAgICAgc3RhdGljIE5PVElGWV9LSUNLX09GRiA9IDMxMjA7XG4gICAgICAgIHN0YXRpYyBVU0VSX0pPSU5fUk9PTSA9IDMxMjE7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfTUFUQ0ggPSAzMTIzO1xuICAgICAgICBzdGF0aWMgV0FJVF80X0RPSV9USE9ORyA9IDMxMjQ7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRUZXN0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKDApXG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGEpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoMTExKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZygyMTQ3NDgzNjQ3KTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZygzMjUpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKDg2ODYpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgU2VuZExvZ2luIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5MT0dJTilcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhiKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRSZWNvbm5lY3RSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUkVDT05ORUNUX0dBTUVfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRSZWFkeUF1dG9TdGFydCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZCgzMTI0KTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgU2VuZFN0YXJ0R2FtZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNUQVJUX0dBTUUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRQaW5nIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMCk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUElOR19QT05HKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZERhbmhCYWkgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBib29sZWFuLCBiKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFOSF9CQUkpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XG4gICAgICAgICAgICBpZiAoIWEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1dFNob3J0KGIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGIubGVuZ3RoOyBjKyspIHRoaXMucHV0Qnl0ZShiW2NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEJvTHVvdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5EQU5IX0JBSSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRSZXF1ZXN0TGVhdmVHYW1lIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUkVRVUVTVF9MRUFWRV9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRKb2luUm9vbVN1Y2Nlc3MgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIG15Q2hhaXIgPSAwO1xuICAgICAgICBtb25leUJldCA9IDA7XG4gICAgICAgIHJvb21Pd25lciA9IDA7XG4gICAgICAgIHJvb21JZCA9IDA7XG4gICAgICAgIGdhbWVJZCA9IDA7XG4gICAgICAgIG1vbmV5VHlwZSA9IDA7XG4gICAgICAgIHBsYXllclNpemUgPSAwO1xuICAgICAgICBwbGF5ZXJTdGF0dXMgPSBbXTtcbiAgICAgICAgcGxheWVySW5mb3MgPSBbXTtcbiAgICAgICAgZ2FtZUFjdGlvbiA9IDA7XG4gICAgICAgIGhhbmRDYXJkU2l6ZVNpemUgPSAwO1xuICAgICAgICBoYW5kQ2FyZFNpemUgPSBbXTtcbiAgICAgICAgY3VycmVudENoYWlyID0gMDtcbiAgICAgICAgY291bnREb3duVGltZSA9IDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leUJldCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yb29tT3duZXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnBsYXllclNpemU7IGErKykgdGhpcy5wbGF5ZXJTdGF0dXMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMucGxheWVyU2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1vbmV5OiB0aGlzLmdldExvbmcoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbmZvcy5wdXNoKGIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZENhcmRTaXplU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZENhcmRTaXplID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuaGFuZENhcmRTaXplU2l6ZTsgYSsrKSB0aGlzLmhhbmRDYXJkU2l6ZS5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRGlzY29ubmVjdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVcGRhdGVHYW1lSW5mbyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbWF4UGxheWVyID0gMDtcbiAgICAgICAgbXlDaGFpciA9IDA7XG4gICAgICAgIGNhcmRzID0gW107XG4gICAgICAgIGJvTHVvdCA9IGZhbHNlO1xuICAgICAgICB0b2lUcmFuZyA9IDA7XG4gICAgICAgIG5ld1JvdW5kID0gZmFsc2U7XG4gICAgICAgIGdhbWVTZXJ2ZXJTdGF0ZSA9IDA7XG4gICAgICAgIGdhbWVBY3Rpb24gPSAwO1xuICAgICAgICBhY3RpdmVUaW1lUmVtYWluID0gMDtcbiAgICAgICAgY3VycmVudENoYWlyID0gMDtcbiAgICAgICAgcmVjZW50Q2FyZHMgPSBbXTtcbiAgICAgICAgbW9uZXlUeXBlID0gMDtcbiAgICAgICAgbW9uZXlCZXQgPSAwO1xuICAgICAgICBnYW1lSWQgPSAwO1xuICAgICAgICByb29tSWQgPSAwO1xuICAgICAgICBwbGF5ZXJTdGF0dXMgPSBbXTtcbiAgICAgICAgaGFzSW5mb0xpc3QgPSBbXTtcbiAgICAgICAgcGxheWVySW5mb3MgPSBbXTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWF4UGxheWVyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm15Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHZhciBiID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBiOyBhKyspIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLmJvTHVvdCA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy50b2lUcmFuZyA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLm5ld1JvdW5kID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTZXJ2ZXJTdGF0ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRpbWVSZW1haW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICBiID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5yZWNlbnRDYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBiOyBhKyspIHRoaXMucmVjZW50Q2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5VHlwZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leUJldCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5yb29tSWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgYiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdHVzID0gW107XG4gICAgICAgICAgICB0aGlzLmhhc0luZm9MaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGI7IGErKykgdGhpcy5oYXNJbmZvTGlzdC5wdXNoKHRoaXMuZ2V0Qm9vbCgpKTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgVGllbkxlbkNvbnN0YW50LkNvbmZpZy5NQVhfUExBWUVSOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5mbyA9IHt9O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0luZm9MaXN0W2FdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXJkcyA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF2YXRhciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1SUQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmlja05hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzOiBjYXJkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdUlEOiB1SUQsXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogbmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25leTogbW9uZXlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cy5wdXNoKDApO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb3MucHVzaChpbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEF1dG9TdGFydCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgaXNBdXRvU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgYXV0b1N0YXJ0VGltZSA9IDA7XG4gICAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRvU3RhcnQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b1N0YXJ0VGltZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hpYUJhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2FyZFNpemUgPSAwO1xuICAgICAgICBjYXJkcyA9IFtdO1xuICAgICAgICB0b2lUcmFuZyA9IDA7XG4gICAgICAgIHRpbWVCYW9TYW0gPSAwO1xuICAgICAgICBnYW1lSWQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnRvaVRyYW5nID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVCYW9TYW0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZERhbmhCYWkgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyID0gMDtcbiAgICAgICAgY2FyZHMgPSBbXTtcbiAgICAgICAgbnVtYmVyQ2FyZCA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgYjsgYSsrKSB0aGlzLmNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5udW1iZXJDYXJkID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQm9sdW90IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGFuZ2VUdXJuIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBuZXdSb3VuZCA9IGZhbHNlO1xuICAgICAgICBjaGFpciA9IDA7XG4gICAgICAgIGNoYWlyTGFzdFR1cm4gPSAwO1xuICAgICAgICB0aW1lID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubmV3Um91bmQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJMYXN0VHVybiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiY2hhaXJMYXN0VHVybjogXCIgKyB0aGlzLmNoYWlyTGFzdFR1cm4pO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRCeXRlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRXYWl0Qm9uRG9pVGhvbmcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEVuZEdhbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHdpblR5cGVzID0gW107XG4gICAgICAgIGtldFF1YVRpbmhUaWVuTGlzdCA9IFtdO1xuICAgICAgICBjYXJkcyA9IFtdO1xuICAgICAgICBzaXplV2luVHlwZSA9IDA7XG4gICAgICAgIGtxVGluaFRpZW5TaXplID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gW107XG4gICAgICAgIGNvdW50RG93biA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLndpblR5cGVzID0gW107XG4gICAgICAgICAgICB0aGlzLmtldFF1YVRpbmhUaWVuTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zaXplV2luVHlwZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcInNpemVXaW5UeXBlOiBcIiArIHRoaXMuc2l6ZVdpblR5cGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnNpemVXaW5UeXBlOyBhKyspIHRoaXMud2luVHlwZXMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLmtxVGluaFRpZW5TaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMua3FUaW5oVGllblNpemU7IGErKykgdGhpcy5rZXRRdWFUaW5oVGllbkxpc3QucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGI7IGErKykgdGhpcy5jdXJyZW50TW9uZXkucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IFRpZW5MZW5Db25zdGFudC5Db25maWcuTUFYX1BMQVlFUjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYiA9IHRoaXMuZ2V0U2hvcnQoKSwgYyA9IFtdLCBkID0gMDsgZCA8IGI7IGQrKykgYy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goYylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY291bnREb3duID0gdGhpcy5nZXRCeXRlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRGaXJzdFR1cm5EZWNpc2lvbiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgaXNSYW5kb20gPSBmYWxzZTtcbiAgICAgICAgY2hhaXIgPSAwO1xuICAgICAgICBjYXJkU2l6ZSA9IDA7XG4gICAgICAgIGNhcmRzID0gW107XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmlzUmFuZG9tID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaChiKTtcbiAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJjYXJkRmlyc3RUdXJuOiBcIiArIGEgKyBcIiBcIiArIGIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hhdENob25nIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICB3aW5DaGFpciA9IDA7XG4gICAgICAgIGxvc3RDaGFpciA9IDA7XG4gICAgICAgIHdpbk1vbmV5ID0gMDtcbiAgICAgICAgbG9zdE1vbmV5ID0gMDtcbiAgICAgICAgd2luQ3VycmVudE1vbmV5ID0gMDtcbiAgICAgICAgbG9zdEN1cnJlbnRNb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLndpbkNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmxvc3RDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy53aW5Nb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5sb3N0TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMud2luQ3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmxvc3RDdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFBpbmdQb25nMiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgaWQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2V0TG9uZygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJMZWF2ZVJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyID0gMDtcbiAgICAgICAgbmlja05hbWUgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5uaWNrTmFtZSA9IHRoaXMuZ2V0U3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVzZXJKb2luUm9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgaW5mbyA9IHt9O1xuICAgICAgICB1Q2hhaXIgPSAwOztcbiAgICAgICAgdVN0YXR1cyA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmluZm8gPSB7XG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgYXZhdGFyOiB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgIG1vbmV5OiB0aGlzLmdldExvbmcoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMudUNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnVTdGF0dXMgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFVwZGF0ZU1hdGNoIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBteUNoYWlyID0gMDtcbiAgICAgICAgaGFzSW5mbyA9IFtdO1xuICAgICAgICBpbmZvcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5teUNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mbyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCBhOyBiKyspIHRoaXMuaGFzSW5mby5wdXNoKHRoaXMuZ2V0Qm9vbCgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5mb3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBhOyBiKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbW9uZXk6IHRoaXMuZ2V0TG9uZygpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuZ2V0SW50KClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzSW5mb1tiXSAmJiAoYy5tb25leSwgYy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3MucHVzaChjKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlU2FtQ29uZmlnIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBsaXN0U2l6ZSA9IDA7XG4gICAgICAgIGxpc3QgPSBbXTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5saXN0U2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFVzZXJQZXJSb29tOiB0aGlzLmdldEJ5dGUoKSxcbiAgICAgICAgICAgICAgICAgICAgbW9uZXlUeXBlOiB0aGlzLmdldEJ5dGUoKSxcbiAgICAgICAgICAgICAgICAgICAgbW9uZXlCZXQ6IHRoaXMuZ2V0TG9uZygpLFxuICAgICAgICAgICAgICAgICAgICBtb25leVJlcXVpcmU6IHRoaXMuZ2V0TG9uZygpLFxuICAgICAgICAgICAgICAgICAgICBuUGVyc2lvbjogdGhpcy5nZXRJbnQoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWROb3RpZnlSZWdPdXRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBvdXRDaGFpciA9IDA7XG4gICAgICAgIGlzT3V0Um9vbSA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5vdXRDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pc091dFJvb20gPSB0aGlzLmdldEJvb2woKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkS2lja09mZiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVhc29uID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVhc29uID0gdGhpcy5nZXRCeXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUGluZ1BvbmcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHRlc3QgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy50ZXN0ID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZENoYXRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBpc0ljb246IGJvb2xlYW47XG4gICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgbmlja25hbWU6IHN0cmluZztcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gZGVjb2RlVVJJKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2hhdFJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNIQVRfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhID8gMSA6IDApO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoZW5jb2RlVVJJKGIpKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGllbkxlbkNtZDsiXX0=