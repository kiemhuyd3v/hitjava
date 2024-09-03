
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/SamScript/Sam.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48adf0y0pJCGYJv4tEI3Jsv', 'Sam.Cmd');
// Lobby/LobbyScript/SamScript/Sam.Cmd.ts

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
exports.SamCmd = void 0;
var Network_OutPacket_1 = require("../Script/networks/Network.OutPacket");
var Network_InPacket_1 = require("../Script/networks/Network.InPacket");
var Sam_Constant_1 = require("./Sam.Constant");
var ccclass = cc._decorator.ccclass;
var SamCmd;
(function (SamCmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.LOGIN = 1;
        Code.NOTIFY_DISCONNECT = 37;
        Code.PING_PONG = 50;
        Code.JOIN_ROOM = 3001;
        Code.QUICK_ROOM_SUCCEED = 3006;
        Code.CHAT_ROOM = 3008;
        Code.QUYET_DINH_SAM = 3100;
        Code.DANH_BAI = 3101;
        Code.START_GAME = 3102;
        Code.END_GAME = 3103;
        Code.CHIA_BAI = 3105;
        Code.BO_LUOT = 3106;
        Code.AUTO_START = 3107;
        Code.FIRST_TURN = 3108;
        Code.BAO_SAM = 3109;
        Code.UPDATE_GAME_INFO = 3110;
        Code.REQUEST_LEAVE_ROOM = 3111;
        Code.CHANGE_TURN = 3112;
        Code.CHAT_CHONG = 3113;
        Code.HUY_BAO_SAM = 3114;
        Code.HOLD = 3116;
        Code.JOIN_ROOM_SUCCESS = 3118;
        Code.USER_LEAVE_ROOM = 3119;
        Code.NOTIFY_KICK_OFF = 3120;
        Code.USER_JOIN_ROOM = 3121;
        Code.UPDATE_MATCH = 3123;
        Code.WAIT_4_DOI_THONG = 3124;
        return Code;
    }());
    SamCmd.Code = Code;
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
    SamCmd.SendTest = SendTest;
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
    SamCmd.SendLogin = SendLogin;
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
    SamCmd.SendReconnectRoom = SendReconnectRoom;
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
    SamCmd.SendReadyAutoStart = SendReadyAutoStart;
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
    SamCmd.SendStartGame = SendStartGame;
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
    SamCmd.SendPing = SendPing;
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
    SamCmd.SendDanhBai = SendDanhBai;
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
    SamCmd.SendBoLuot = SendBoLuot;
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
    SamCmd.SendRequestLeaveGame = SendRequestLeaveGame;
    var SendBaoSam = /** @class */ (function (_super) {
        __extends(SendBaoSam, _super);
        function SendBaoSam() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BAO_SAM);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendBaoSam;
    }(Network_OutPacket_1.default));
    SamCmd.SendBaoSam = SendBaoSam;
    var SendHuyBaoSam = /** @class */ (function (_super) {
        __extends(SendHuyBaoSam, _super);
        function SendHuyBaoSam() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.HUY_BAO_SAM);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendHuyBaoSam;
    }(Network_OutPacket_1.default));
    SamCmd.SendHuyBaoSam = SendHuyBaoSam;
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
    SamCmd.ReceivedJoinRoomSuccess = ReceivedJoinRoomSuccess;
    var ReceivedDisconnect = /** @class */ (function (_super) {
        __extends(ReceivedDisconnect, _super);
        function ReceivedDisconnect(data) {
            return _super.call(this, data) || this;
        }
        return ReceivedDisconnect;
    }(Network_InPacket_1.default));
    SamCmd.ReceivedDisconnect = ReceivedDisconnect;
    var ReceivedUpdateGameInfo = /** @class */ (function (_super) {
        __extends(ReceivedUpdateGameInfo, _super);
        function ReceivedUpdateGameInfo(data) {
            var _this = _super.call(this, data) || this;
            var a = 0;
            _this.maxPlayer = _this.getByte();
            _this.myChair = _this.getByte();
            var b = _this.getShort();
            _this.cards = [];
            for (a = 0; a < b; a++)
                _this.cards.push(_this.getByte());
            _this.baoSam = _this.getBool();
            _this.boLuot = _this.getBool();
            _this.toiTrang = _this.getInt();
            _this.newRound = _this.getBool();
            _this.gameServerState = _this.getByte();
            _this.gameAction = _this.getByte();
            _this.activeTimeRemain = _this.getByte();
            _this.currentChair = _this.getByte();
            b = _this.getShort();
            _this.recentCards = [];
            for (a = 0; a < b; a++)
                _this.recentCards.push(_this.getByte());
            _this.moneyType = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.gameId = _this.getInt();
            _this.roomId = _this.getInt();
            b = _this.getShort();
            _this.playerStatus = [];
            _this.hasInfoList = [];
            _this.playerInfos = [];
            for (a = 0; a < b; a++)
                _this.hasInfoList.push(_this.getBool());
            var info = {};
            for (a = 0; a < 5; a++)
                info = {}, _this.hasInfoList[a] ? (info["cards"] = _this.getByte(), info["baosam"] = _this.getBool(), info["huybaosam"] = _this.getBool(), _this.playerStatus.push(_this.getByte()),
                    info["avatar"] = _this.getString(), info["uID"] = _this.getInt(), info["nickName"] = _this.getString(), info["money"] = _this.getLong()) : _this.playerStatus.push(0), _this.playerInfos.push(info);
            return _this;
        }
        return ReceivedUpdateGameInfo;
    }(Network_InPacket_1.default));
    SamCmd.ReceivedUpdateGameInfo = ReceivedUpdateGameInfo;
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
    SamCmd.ReceivedAutoStart = ReceivedAutoStart;
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
    SamCmd.ReceivedChiaBai = ReceivedChiaBai;
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
    SamCmd.ReceivedDanhBai = ReceivedDanhBai;
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
    SamCmd.ReceivedBoluot = ReceivedBoluot;
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
            //  cc.log("chairLastTurn: " + this.chairLastTurn);
            _this.time = _this.getByte();
            return _this;
        }
        return ReceivedChangeTurn;
    }(Network_InPacket_1.default));
    SamCmd.ReceivedChangeTurn = ReceivedChangeTurn;
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
    SamCmd.ReceivedWaitBonDoiThong = ReceivedWaitBonDoiThong;
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
            //  cc.log("sizeWinType: " + this.sizeWinType);
            for (var a = 0; a < _this.sizeWinType; a++)
                _this.winTypes.push(_this.getByte());
            _this.kqTinhTienSize = _this.getShort();
            for (a = 0; a < _this.kqTinhTienSize; a++)
                _this.ketQuaTinhTienList.push(_this.getLong());
            var b = _this.getShort();
            _this.currentMoney = [];
            for (var a = 0; a < b; a++)
                _this.currentMoney.push(_this.getLong());
            for (var a = 0; a < Sam_Constant_1.default.Config.MAX_PLAYER; a++) {
                for (var b = _this.getShort(), c = [], d = 0; d < b; d++)
                    c.push(_this.getByte());
                _this.cards.push(c);
            }
            _this.countDown = _this.getByte();
            return _this;
        }
        return ReceivedEndGame;
    }(Network_InPacket_1.default));
    SamCmd.ReceivedEndGame = ReceivedEndGame;
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
                //  cc.log("cardFirstTurn: " + a + " " + b)
            }
            return _this;
        }
        return ReceivedFirstTurnDecision;
    }(Network_InPacket_1.default));
    SamCmd.ReceivedFirstTurnDecision = ReceivedFirstTurnDecision;
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
    SamCmd.ReceivedChatChong = ReceivedChatChong;
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
    SamCmd.ReceivedPingPong2 = ReceivedPingPong2;
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
    SamCmd.UserLeaveRoom = UserLeaveRoom;
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
    SamCmd.ReceiveUserJoinRoom = ReceiveUserJoinRoom;
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
    SamCmd.ReceivedUpdateMatch = ReceivedUpdateMatch;
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
    SamCmd.ReceiveSamConfig = ReceiveSamConfig;
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
    SamCmd.ReceivedNotifyRegOutRoom = ReceivedNotifyRegOutRoom;
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
    SamCmd.ReceivedKickOff = ReceivedKickOff;
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
    SamCmd.ReceivePingPong = ReceivePingPong;
    var ReceiveBaoSam = /** @class */ (function (_super) {
        __extends(ReceiveBaoSam, _super);
        function ReceiveBaoSam(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceiveBaoSam;
    }(Network_InPacket_1.default));
    SamCmd.ReceiveBaoSam = ReceiveBaoSam;
    var ReceiveHuyBaoSam = /** @class */ (function (_super) {
        __extends(ReceiveHuyBaoSam, _super);
        function ReceiveHuyBaoSam(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceiveHuyBaoSam;
    }(Network_InPacket_1.default));
    SamCmd.ReceiveHuyBaoSam = ReceiveHuyBaoSam;
    var ReceivedQuyetDinhSam = /** @class */ (function (_super) {
        __extends(ReceivedQuyetDinhSam, _super);
        function ReceivedQuyetDinhSam(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = 0;
            _this.isSam = false;
            _this.chair = _this.getByte();
            _this.isSam = _this.getBool();
            return _this;
        }
        return ReceivedQuyetDinhSam;
    }(Network_InPacket_1.default));
    SamCmd.ReceivedQuyetDinhSam = ReceivedQuyetDinhSam;
    ;
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
    SamCmd.ReceivedChatRoom = ReceivedChatRoom;
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
    SamCmd.SendChatRoom = SendChatRoom;
})(SamCmd = exports.SamCmd || (exports.SamCmd = {}));
exports.default = SamCmd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTYW1TY3JpcHRcXFNhbS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBFQUE2RDtBQUM3RCx3RUFBMkQ7QUFDM0QsK0NBQXlDO0FBR2pDLElBQUEsT0FBTyxHQUFLLEVBQUUsQ0FBQyxVQUFVLFFBQWxCLENBQW1CO0FBRWxDLElBQWlCLE1BQU0sQ0F5a0J0QjtBQXprQkQsV0FBaUIsTUFBTTtJQUNuQjtRQUFBO1FBNkJBLENBQUM7UUE1QlUsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLG9CQUFl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QUFoQyxZQUNJLGlCQUFPLFNBUVY7WUFQRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUN0QixDQUFDO1FBQ0wsbUJBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYaUMsMkJBQVMsR0FXMUM7SUFYWSxtQkFBWSxlQVd4QixDQUFBO0FBQ0wsQ0FBQyxFQXprQmdCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQXlrQnRCO0FBQ0Qsa0JBQWUsTUFBTSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgU2FtQ29uc3RhbnQgZnJvbSBcIi4vU2FtLkNvbnN0YW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIFNhbUNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgTE9HSU4gPSAxO1xuICAgICAgICBzdGF0aWMgTk9USUZZX0RJU0NPTk5FQ1QgPSAzNztcbiAgICAgICAgc3RhdGljIFBJTkdfUE9ORyA9IDUwO1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NID0gMzAwMTtcbiAgICAgICAgc3RhdGljIFJFQ09OTkVDVF9HQU1FX1JPT006IDMwMDI7XG4gICAgICAgIHN0YXRpYyBRVUlDS19ST09NX1NVQ0NFRUQgPSAzMDA2O1xuICAgICAgICBzdGF0aWMgQ0hBVF9ST09NID0gMzAwODtcbiAgICAgICAgc3RhdGljIFFVWUVUX0RJTkhfU0FNID0gMzEwMDtcbiAgICAgICAgc3RhdGljIERBTkhfQkFJID0gMzEwMTtcbiAgICAgICAgc3RhdGljIFNUQVJUX0dBTUUgPSAzMTAyO1xuICAgICAgICBzdGF0aWMgRU5EX0dBTUUgPSAzMTAzO1xuICAgICAgICBzdGF0aWMgQ0hJQV9CQUkgPSAzMTA1O1xuICAgICAgICBzdGF0aWMgQk9fTFVPVCA9IDMxMDY7XG4gICAgICAgIHN0YXRpYyBBVVRPX1NUQVJUID0gMzEwNztcbiAgICAgICAgc3RhdGljIEZJUlNUX1RVUk4gPSAzMTA4O1xuICAgICAgICBzdGF0aWMgQkFPX1NBTSA9IDMxMDk7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfR0FNRV9JTkZPID0gMzExMDtcbiAgICAgICAgc3RhdGljIFJFUVVFU1RfTEVBVkVfUk9PTSA9IDMxMTE7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfVFVSTiA9IDMxMTI7XG4gICAgICAgIHN0YXRpYyBDSEFUX0NIT05HID0gMzExMztcbiAgICAgICAgc3RhdGljIEhVWV9CQU9fU0FNID0gMzExNDtcbiAgICAgICAgc3RhdGljIEhPTEQgPSAzMTE2O1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX1NVQ0NFU1MgPSAzMTE4O1xuICAgICAgICBzdGF0aWMgVVNFUl9MRUFWRV9ST09NID0gMzExOTtcbiAgICAgICAgc3RhdGljIE5PVElGWV9LSUNLX09GRiA9IDMxMjA7XG4gICAgICAgIHN0YXRpYyBVU0VSX0pPSU5fUk9PTSA9IDMxMjE7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfTUFUQ0ggPSAzMTIzO1xuICAgICAgICBzdGF0aWMgV0FJVF80X0RPSV9USE9ORyA9IDMxMjRcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFRlc3QgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoMClcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dEludCgxMTEpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKDIxNDc0ODM2NDcpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKDMyNSk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoODY4Nik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRMb2dpbiBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IHN0cmluZywgYjogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuTE9HSU4pXG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGEpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRSZWNvbm5lY3RSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUkVDT05ORUNUX0dBTUVfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFJlYWR5QXV0b1N0YXJ0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKDMxMjQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTdGFydEdhbWUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TVEFSVF9HQU1FKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kUGluZyBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlBJTkdfUE9ORyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmREYW5oQmFpIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogYm9vbGVhbiwgYikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRBTkhfQkFJKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEpO1xuICAgICAgICAgICAgaWYgKCFhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChiLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBiLmxlbmd0aDsgYysrKSB0aGlzLnB1dEJ5dGUoYltjXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRCb0x1b3QgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBib29sZWFuKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFOSF9CQUkpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRSZXF1ZXN0TGVhdmVHYW1lIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUkVRVUVTVF9MRUFWRV9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQmFvU2FtIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQkFPX1NBTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEh1eUJhb1NhbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkhVWV9CQU9fU0FNKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEpvaW5Sb29tU3VjY2VzcyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbXlDaGFpciA9IDA7XG4gICAgICAgIG1vbmV5QmV0ID0gMDtcbiAgICAgICAgcm9vbU93bmVyID0gMDtcbiAgICAgICAgcm9vbUlkID0gMDtcbiAgICAgICAgZ2FtZUlkID0gMDtcbiAgICAgICAgbW9uZXlUeXBlID0gMDtcbiAgICAgICAgcGxheWVyU2l6ZSA9IDA7XG4gICAgICAgIHBsYXllclN0YXR1cyA9IFtdO1xuICAgICAgICBwbGF5ZXJJbmZvcyA9IFtdO1xuICAgICAgICBnYW1lQWN0aW9uID0gMDtcbiAgICAgICAgaGFuZENhcmRTaXplU2l6ZSA9IDA7XG4gICAgICAgIGhhbmRDYXJkU2l6ZSA9IFtdO1xuICAgICAgICBjdXJyZW50Q2hhaXIgPSAwO1xuICAgICAgICBjb3VudERvd25UaW1lID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leUJldCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yb29tT3duZXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnBsYXllclNpemU7IGErKykgdGhpcy5wbGF5ZXJTdGF0dXMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMucGxheWVyU2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcjogdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIG1vbmV5OiB0aGlzLmdldExvbmcoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbmZvcy5wdXNoKGIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZENhcmRTaXplU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZENhcmRTaXplID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuaGFuZENhcmRTaXplU2l6ZTsgYSsrKSB0aGlzLmhhbmRDYXJkU2l6ZS5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRGlzY29ubmVjdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVcGRhdGVHYW1lSW5mbyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbWF4UGxheWVyOiBudW1iZXI7XG4gICAgICAgIG15Q2hhaXI6IG51bWJlcjtcbiAgICAgICAgY2FyZHM6IGFueVtdO1xuICAgICAgICBiYW9TYW06IGJvb2xlYW47XG4gICAgICAgIGJvTHVvdDogYm9vbGVhbjtcbiAgICAgICAgdG9pVHJhbmc6IG51bWJlcjtcbiAgICAgICAgbmV3Um91bmQ6IGJvb2xlYW47XG4gICAgICAgIGdhbWVTZXJ2ZXJTdGF0ZTogbnVtYmVyO1xuICAgICAgICBnYW1lQWN0aW9uOiBudW1iZXI7XG4gICAgICAgIGFjdGl2ZVRpbWVSZW1haW46IG51bWJlcjtcbiAgICAgICAgY3VycmVudENoYWlyOiBudW1iZXI7XG4gICAgICAgIHJlY2VudENhcmRzOiBhbnlbXTtcbiAgICAgICAgbW9uZXlUeXBlOiBudW1iZXI7XG4gICAgICAgIG1vbmV5QmV0OiBudW1iZXI7XG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xuICAgICAgICByb29tSWQ6IG51bWJlcjtcbiAgICAgICAgcGxheWVyU3RhdHVzOiBhbnlbXTtcbiAgICAgICAgaGFzSW5mb0xpc3Q6IGFueVtdO1xuICAgICAgICBwbGF5ZXJJbmZvczogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgICAgdGhpcy5tYXhQbGF5ZXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYjsgYSsrKSB0aGlzLmNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5iYW9TYW0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuYm9MdW90ID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnRvaVRyYW5nID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMubmV3Um91bmQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNlcnZlclN0YXRlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGltZVJlbWFpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIGIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnJlY2VudENhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYjsgYSsrKSB0aGlzLnJlY2VudENhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5tb25leVR5cGUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlCZXQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIGIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5oYXNJbmZvTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbmZvcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IGI7IGErKykgdGhpcy5oYXNJbmZvTGlzdC5wdXNoKHRoaXMuZ2V0Qm9vbCgpKTtcbiAgICAgICAgICAgIHZhciBpbmZvID0ge307XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgNTsgYSsrKSBpbmZvID0ge30sIHRoaXMuaGFzSW5mb0xpc3RbYV0gPyAoaW5mb1tcImNhcmRzXCJdID0gdGhpcy5nZXRCeXRlKCksIGluZm9bXCJiYW9zYW1cIl0gPSB0aGlzLmdldEJvb2woKSwgaW5mb1tcImh1eWJhb3NhbVwiXSA9IHRoaXMuZ2V0Qm9vbCgpLCB0aGlzLnBsYXllclN0YXR1cy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKSxcbiAgICAgICAgICAgICAgICBpbmZvW1wiYXZhdGFyXCJdID0gdGhpcy5nZXRTdHJpbmcoKSwgaW5mb1tcInVJRFwiXSA9IHRoaXMuZ2V0SW50KCksIGluZm9bXCJuaWNrTmFtZVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCksIGluZm9bXCJtb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpKSA6IHRoaXMucGxheWVyU3RhdHVzLnB1c2goMCksIHRoaXMucGxheWVySW5mb3MucHVzaChpbmZvKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQXV0b1N0YXJ0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpc0F1dG9TdGFydCA9IGZhbHNlO1xuICAgICAgICBhdXRvU3RhcnRUaW1lID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRvU3RhcnQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b1N0YXJ0VGltZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hpYUJhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2FyZFNpemUgPSAwO1xuICAgICAgICBjYXJkcyA9IFtdO1xuICAgICAgICB0b2lUcmFuZyA9IDA7XG4gICAgICAgIHRpbWVCYW9TYW0gPSAwO1xuICAgICAgICBnYW1lSWQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGEgPSAwO1xuICAgICAgICAgICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnRvaVRyYW5nID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVCYW9TYW0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRGFuaEJhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXIgPSAwO1xuICAgICAgICBjYXJkcyA9IFtdO1xuICAgICAgICBudW1iZXJDYXJkID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHZhciBiID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBiOyBhKyspIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLm51bWJlckNhcmQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEJvbHVvdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGFuZ2VUdXJuIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBuZXdSb3VuZCA9IGZhbHNlO1xuICAgICAgICBjaGFpciA9IDA7XG4gICAgICAgIGNoYWlyTGFzdFR1cm4gPSAwO1xuICAgICAgICB0aW1lID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubmV3Um91bmQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJMYXN0VHVybiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNoYWlyTGFzdFR1cm46IFwiICsgdGhpcy5jaGFpckxhc3RUdXJuKTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRXYWl0Qm9uRG9pVGhvbmcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRW5kR2FtZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgd2luVHlwZXMgPSBbXTtcbiAgICAgICAga2V0UXVhVGluaFRpZW5MaXN0ID0gW107XG4gICAgICAgIGNhcmRzID0gW107XG4gICAgICAgIHNpemVXaW5UeXBlID0gMDtcbiAgICAgICAga3FUaW5oVGllblNpemUgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSBbXTtcbiAgICAgICAgY291bnREb3duID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMud2luVHlwZXMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMua2V0UXVhVGluaFRpZW5MaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgICAgICAgICB0aGlzLnNpemVXaW5UeXBlID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNpemVXaW5UeXBlOiBcIiArIHRoaXMuc2l6ZVdpblR5cGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnNpemVXaW5UeXBlOyBhKyspIHRoaXMud2luVHlwZXMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLmtxVGluaFRpZW5TaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMua3FUaW5oVGllblNpemU7IGErKykgdGhpcy5rZXRRdWFUaW5oVGllbkxpc3QucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICB2YXIgYiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGI7IGErKykgdGhpcy5jdXJyZW50TW9uZXkucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IFNhbUNvbnN0YW50LkNvbmZpZy5NQVhfUExBWUVSOyBhKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gdGhpcy5nZXRTaG9ydCgpLCBjID0gW10sIGQgPSAwOyBkIDwgYjsgZCsrKSBjLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaChjKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb3VudERvd24gPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRmlyc3RUdXJuRGVjaXNpb24gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGlzUmFuZG9tID0gZmFsc2U7XG4gICAgICAgIGNoYWlyID0gMDtcbiAgICAgICAgY2FyZFNpemUgPSAwO1xuICAgICAgICBjYXJkcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc1JhbmRvbSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5jYXJkU2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goYik7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNhcmRGaXJzdFR1cm46IFwiICsgYSArIFwiIFwiICsgYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZENoYXRDaG9uZyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgd2luQ2hhaXIgPSAwO1xuICAgICAgICBsb3N0Q2hhaXIgPSAwO1xuICAgICAgICB3aW5Nb25leSA9IDA7XG4gICAgICAgIGxvc3RNb25leSA9IDA7XG4gICAgICAgIHdpbkN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGxvc3RDdXJyZW50TW9uZXkgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy53aW5DaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5sb3N0Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMud2luTW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubG9zdE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLndpbkN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5sb3N0Q3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFBpbmdQb25nMiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgaWQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMuZ2V0TG9uZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgVXNlckxlYXZlUm9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXIgPSAwO1xuICAgICAgICBuaWNrTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm5pY2tOYW1lID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVc2VySm9pblJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGluZm8gPSB7fTtcbiAgICAgICAgdUNoYWlyID0gMDs7XG4gICAgICAgIHVTdGF0dXMgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pbmZvID0ge1xuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgIGF2YXRhcjogdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBtb25leTogdGhpcy5nZXRMb25nKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnVDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy51U3RhdHVzID0gdGhpcy5nZXRCeXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFVwZGF0ZU1hdGNoIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBteUNoYWlyID0gMDtcbiAgICAgICAgaGFzSW5mbyA9IFtdO1xuICAgICAgICBpbmZvcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5teUNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mbyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCBhOyBiKyspIHRoaXMuaGFzSW5mby5wdXNoKHRoaXMuZ2V0Qm9vbCgpKTtcbiAgICAgICAgICAgIHRoaXMuaW5mb3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBhOyBiKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbW9uZXk6IHRoaXMuZ2V0TG9uZygpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMuZ2V0SW50KClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzSW5mb1tiXSAmJiAoYy5tb25leSwgYy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3MucHVzaChjKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVTYW1Db25maWcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGxpc3RTaXplID0gMDtcbiAgICAgICAgbGlzdCA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5saXN0U2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmxpc3RTaXplOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4VXNlclBlclJvb206IHRoaXMuZ2V0Qnl0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBtb25leVR5cGU6IHRoaXMuZ2V0Qnl0ZSgpLFxuICAgICAgICAgICAgICAgICAgICBtb25leUJldDogdGhpcy5nZXRMb25nKCksXG4gICAgICAgICAgICAgICAgICAgIG1vbmV5UmVxdWlyZTogdGhpcy5nZXRMb25nKCksXG4gICAgICAgICAgICAgICAgICAgIG5QZXJzaW9uOiB0aGlzLmdldEludCgpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaChiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgb3V0Q2hhaXIgPSAwO1xuICAgICAgICBpc091dFJvb20gPSBmYWxzZTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMub3V0Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPdXRSb29tID0gdGhpcy5nZXRCb29sKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEtpY2tPZmYgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlYXNvbiA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlYXNvbiA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVBpbmdQb25nIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICB0ZXN0ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMudGVzdCA9IHRoaXMuZ2V0TG9uZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUJhb1NhbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUh1eUJhb1NhbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRRdXlldERpbmhTYW0gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyID0gMDtcbiAgICAgICAgaXNTYW0gPSBmYWxzZTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNTYW0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGF0Um9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcbiAgICAgICAgaXNJY29uOiBib29sZWFuO1xuICAgICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgICAgIG5pY2tuYW1lOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pc0ljb24gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IGRlY29kZVVSSSh0aGlzLmdldFN0cmluZygpKTtcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSB0aGlzLmdldFN0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYXRSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFUX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSA/IDEgOiAwKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGVuY29kZVVSSShiKSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNhbUNtZDsiXX0=