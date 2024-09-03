
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Poker/PokerScript/Poker.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2f0cU5NKtF15h1g6X6i4BJ', 'Poker.Cmd');
// Poker/PokerScript/Poker.Cmd.ts

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
exports.cmd = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.LOGIN = 1;
        Code.TOPSERVER = 1001;
        Code.CMD_PINGPONG = 1050;
        Code.CMD_JOIN_ROOM = 3001;
        Code.CMD_RECONNECT_ROOM = 3002;
        Code.MONEY_BET_CONFIG = 3003;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.CHAT_ROOM = 3008;
        Code.GET_LIST_ROOM = 3014;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.MOI_DAT_CUOC = 3114;
        Code.UPDATE_OWNER_ROOM = 3117;
        Code.NOTIFY_USER_GET_JACKPOT = 3122;
        Code.PLAYER_STATUS_OUT_GAME = 0;
        Code.PLAYER_STATUS_VIEWER = 1;
        Code.PLAYER_STATUS_SITTING = 2;
        Code.PLAYER_STATUS_PLAYING = 3;
        Code.SELECT_DEALER = 3100;
        Code.TAKE_TURN = 3101;
        Code.BUY_IN = 3102;
        Code.KET_THUC = 3103;
        Code.CHANGE_TURN = 3104;
        Code.NEW_ROUND = 3105;
        Code.DEAL_PRIVATE_CARD = 3106;
        Code.TU_DONG_BAT_DAU = 3107;
        Code.SHOW_CARD = 3108;
        Code.REQUEST_BUY_IN = 3109;
        Code.THONG_TIN_BAN_CHOI = 3110;
        Code.DANG_KY_THOAT_PHONG = 3111;
        Code.REQUEST_STAND_UP = 3113;
        Code.CHEAT_CARDS = 3115;
        Code.DANG_KY_CHOI_TIEP = 3116;
        Code.JOIN_ROOM_SUCCESS = 3118;
        Code.LEAVE_GAME = 3119;
        Code.NOTIFY_KICK_FROM_ROOM = 3120;
        Code.NEW_USER_JOIN = 3121;
        Code.UPDATE_MATCH = 3123;
        Code.REQUEST_INFO_TOUR = 3990;
        Code.UPDATE_TIME = 3991;
        Code.MAX_PLAYER = 9;
        Code.MAX_BUY_IN = 250;
        // Game Action
        Code.GAME_ACTION_NONE = -1;
        Code.GAME_ACTION_FOLD = 0;
        Code.GAME_ACTION_CHECK = 1;
        Code.GAME_ACTION_CALL = 2;
        Code.GAME_ACTION_RAISE = 3;
        Code.GAME_ACTION_ALL_IN = 4;
        // Cards
        Code.EG_SANH_VUA = 0;
        Code.EG_THUNG_PHA_SANH = 1;
        Code.EG_TU_QUY = 2;
        Code.EG_CU_LU = 3;
        Code.EG_THUNG = 4;
        Code.EG_SANH = 5;
        Code.EG_XAM_CO = 6;
        Code.EG_HAI_DOI = 7;
        Code.EG_DOI = 8;
        Code.EG_MAU_THAU = 9;
        Code.EG_SERVER_NGU = 10;
        // GameState
        Code.STATE_CHIA_BAI = 1;
        Code.STATE_JOIN_ROOM = 2;
        Code.STATE_END_GAME = 3;
        Code.STATE_NEW_USER_JOIN_ROOM = 5;
        Code.STATE_USER_LEAVE_ROOM = 6;
        Code.STATE_DEAL_CARD = 7;
        Code.STATE_SELECT_DEALER = 8;
        Code.STATE_CHANGE_TURN = 9;
        Code.STATE_NEW_BET_ROUND = 10;
        Code.STATE_NOTIFY_OUT_ROOM = 11;
        Code.STATE_BUY_IN = 12;
        Code.STATE_UPDATE_MATCH = 13;
        Code.STATE_GAME_INFO = 14;
        Code.STATE_SHOW_CARD = 15;
        Code.STATE_NOTIFY_BUY_IN = 16;
        Code.STATE_STAND_UP = 17;
        return Code;
    }());
    cmd.Code = Code;
    // OutPacket
    var CmdLogin = /** @class */ (function (_super) {
        __extends(CmdLogin, _super);
        function CmdLogin(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.LOGIN);
            _this.packHeader();
            _this.putString(a); // nickname
            _this.putString(b); // accessToken
            _this.updateSize();
            return _this;
        }
        return CmdLogin;
    }(Network_OutPacket_1.default));
    cmd.CmdLogin = CmdLogin;
    var CmdJoinRoom = /** @class */ (function (_super) {
        __extends(CmdJoinRoom, _super);
        function CmdJoinRoom(a, b, c) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CMD_JOIN_ROOM);
            _this.packHeader();
            _this.putInt(a);
            _this.putInt(b);
            _this.putLong(c);
            _this.putInt(0);
            _this.updateSize();
            return _this;
        }
        return CmdJoinRoom;
    }(Network_OutPacket_1.default));
    cmd.CmdJoinRoom = CmdJoinRoom;
    var CmdReconnectRoom = /** @class */ (function (_super) {
        __extends(CmdReconnectRoom, _super);
        function CmdReconnectRoom() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CMD_RECONNECT_ROOM);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return CmdReconnectRoom;
    }(Network_OutPacket_1.default));
    cmd.CmdReconnectRoom = CmdReconnectRoom;
    var CmdSendRequestLeaveGame = /** @class */ (function (_super) {
        __extends(CmdSendRequestLeaveGame, _super);
        function CmdSendRequestLeaveGame() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DANG_KY_THOAT_PHONG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return CmdSendRequestLeaveGame;
    }(Network_OutPacket_1.default));
    cmd.CmdSendRequestLeaveGame = CmdSendRequestLeaveGame;
    var CmdSendHoldRoom = /** @class */ (function (_super) {
        __extends(CmdSendHoldRoom, _super);
        function CmdSendHoldRoom() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DANG_KY_CHOI_TIEP);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return CmdSendHoldRoom;
    }(Network_OutPacket_1.default));
    cmd.CmdSendHoldRoom = CmdSendHoldRoom;
    var SendGetGameConfig = /** @class */ (function (_super) {
        __extends(SendGetGameConfig, _super);
        function SendGetGameConfig() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.MONEY_BET_CONFIG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendGetGameConfig;
    }(Network_OutPacket_1.default));
    cmd.SendGetGameConfig = SendGetGameConfig;
    var SendGetTopServer = /** @class */ (function (_super) {
        __extends(SendGetTopServer, _super);
        function SendGetTopServer(a) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.TOPSERVER);
            _this.packHeader();
            _this.putByte(a);
            _this.updateSize();
            return _this;
        }
        return SendGetTopServer;
    }(Network_OutPacket_1.default));
    cmd.SendGetTopServer = SendGetTopServer;
    var SendCardCheat = /** @class */ (function (_super) {
        __extends(SendCardCheat, _super);
        function SendCardCheat(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHEAT_CARDS);
            _this.packHeader();
            _this.putByte(a);
            _this.putByte(0);
            _this.putShort(b.length);
            if (a)
                for (var c = 0; c < b.length; c++)
                    _this.putByte(b[c]);
            _this.updateSize();
            return _this;
        }
        return SendCardCheat;
    }(Network_OutPacket_1.default));
    cmd.SendCardCheat = SendCardCheat;
    var CmdSendPing = /** @class */ (function (_super) {
        __extends(CmdSendPing, _super);
        function CmdSendPing() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CMD_PINGPONG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return CmdSendPing;
    }(Network_OutPacket_1.default));
    cmd.CmdSendPing = CmdSendPing;
    var SendGetListRoom = /** @class */ (function (_super) {
        __extends(SendGetListRoom, _super);
        function SendGetListRoom() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_LIST_ROOM);
            _this.packHeader();
            _this.putInt(Configs_1.default.App.MONEY_TYPE); //money type
            _this.putInt(Code.MAX_PLAYER); //maxplayer
            _this.putLong(-1); //khong xac dinh
            _this.putInt(0); //khong xac dinh
            _this.putInt(0); //CARD_FROM
            _this.putInt(50); //CARD_TO
            _this.updateSize();
            return _this;
        }
        return SendGetListRoom;
    }(Network_OutPacket_1.default));
    cmd.SendGetListRoom = SendGetListRoom;
    var SendJoinRoomById = /** @class */ (function (_super) {
        __extends(SendJoinRoomById, _super);
        function SendJoinRoomById(id) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.JOIN_GAME_ROOM_BY_ID);
            _this.packHeader();
            _this.putInt(id);
            _this.putString(""); //mat khau
            _this.updateSize();
            return _this;
        }
        return SendJoinRoomById;
    }(Network_OutPacket_1.default));
    cmd.SendJoinRoomById = SendJoinRoomById;
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
    cmd.SendChatRoom = SendChatRoom;
    // new OutPacket
    var SendTakeTurn = /** @class */ (function (_super) {
        __extends(SendTakeTurn, _super);
        function SendTakeTurn(a, b, c, d, e) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.TAKE_TURN);
            _this.packHeader();
            _this.putByte(a);
            _this.putByte(b);
            _this.putByte(d);
            _this.putByte(c);
            _this.putByte(!1);
            _this.putLong(e);
            _this.updateSize();
            return _this;
        }
        return SendTakeTurn;
    }(Network_OutPacket_1.default));
    cmd.SendTakeTurn = SendTakeTurn;
    var SendBuyIn = /** @class */ (function (_super) {
        __extends(SendBuyIn, _super);
        function SendBuyIn(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BUY_IN);
            _this.packHeader();
            _this.putLong(a);
            _this.putByte(b);
            _this.updateSize();
            return _this;
        }
        return SendBuyIn;
    }(Network_OutPacket_1.default));
    cmd.SendBuyIn = SendBuyIn;
    var SendShowCard = /** @class */ (function (_super) {
        __extends(SendShowCard, _super);
        function SendShowCard() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SHOW_CARD);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendShowCard;
    }(Network_OutPacket_1.default));
    cmd.SendShowCard = SendShowCard;
    var SendGetInfoTour = /** @class */ (function (_super) {
        __extends(SendGetInfoTour, _super);
        function SendGetInfoTour(a) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.REQUEST_INFO_TOUR);
            _this.packHeader();
            _this.putByte(a);
            _this.updateSize();
            return _this;
        }
        return SendGetInfoTour;
    }(Network_OutPacket_1.default));
    cmd.SendGetInfoTour = SendGetInfoTour;
    var SendDungDay = /** @class */ (function (_super) {
        __extends(SendDungDay, _super);
        function SendDungDay() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.REQUEST_STAND_UP);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendDungDay;
    }(Network_OutPacket_1.default));
    cmd.SendDungDay = SendDungDay;
    // InPacket
    var ReceivedLogin = /** @class */ (function (_super) {
        __extends(ReceivedLogin, _super);
        function ReceivedLogin(data) {
            var _this = _super.call(this, data) || this;
            cc.log("____");
            return _this;
        }
        return ReceivedLogin;
    }(Network_InPacket_1.default));
    cmd.ReceivedLogin = ReceivedLogin;
    var ReceivedGetListRoom = /** @class */ (function (_super) {
        __extends(ReceivedGetListRoom, _super);
        function ReceivedGetListRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.list = [];
            var listSize = _this.getShort();
            _this.list = [];
            for (var i = 0; i < listSize; i++) {
                var item = {};
                item["id"] = _this.getInt();
                item["userCount"] = _this.getByte();
                item["limitPlayer"] = _this.getByte();
                item["maxUserPerRoom"] = _this.getInt();
                item["moneyType"] = _this.getByte();
                item["moneyBet"] = _this.getInt();
                item["requiredMoney"] = _this.getInt();
                item["rule"] = _this.getByte();
                item["nameRoom"] = _this.getString();
                item["key"] = _this.getBool();
                item["quyban"] = _this.getLong();
                _this.list.push(item);
            }
            return _this;
        }
        return ReceivedGetListRoom;
    }(Network_InPacket_1.default));
    cmd.ReceivedGetListRoom = ReceivedGetListRoom;
    // edited
    var ReceivedJoinRoomSucceed = /** @class */ (function (_super) {
        __extends(ReceivedJoinRoomSucceed, _super);
        function ReceivedJoinRoomSucceed(data) {
            var _this = _super.call(this, data) || this;
            _this.myChair = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.roomOwner = _this.getByte();
            _this.roomId = _this.getInt();
            _this.gameId = _this.getInt();
            _this.moneyType = _this.getByte();
            _this.rule = _this.getByte();
            _this.playerSize = _this.getShort();
            _this.playerStatus = [];
            for (var a = 0; a < _this.playerSize; a++)
                _this.playerStatus.push(_this.getByte());
            _this.playerSize = _this.getShort();
            _this.playerInfos = [];
            for (a = 0; a < _this.playerSize; a++) {
                var b = {};
                b["avatar"] = _this.getString();
                b["nickName"] = _this.getString();
                b["currentMoney"] = _this.getLong();
                _this.playerInfos.push(b);
            }
            _this.gameAction = _this.getByte();
            _this.handCardSizeSize = _this.getShort();
            _this.handCardSizeList = [];
            for (a = 0; a < _this.handCardSizeSize; a++)
                _this.handCardSizeList.push(_this.getByte());
            _this.currentActionChair = _this.getByte();
            _this.countDownTime = _this.getByte();
            _this.minBuyInTiLe = _this.getInt();
            _this.maxBuyInTiLe = _this.getInt();
            return _this;
        }
        return ReceivedJoinRoomSucceed;
    }(Network_InPacket_1.default));
    cmd.ReceivedJoinRoomSucceed = ReceivedJoinRoomSucceed;
    var ReceivedAutoStart = /** @class */ (function (_super) {
        __extends(ReceivedAutoStart, _super);
        function ReceivedAutoStart(data) {
            var _this = _super.call(this, data) || this;
            _this.isAutoStart = _this.getBool();
            _this.timeAutoStart = _this.getByte();
            return _this;
        }
        return ReceivedAutoStart;
    }(Network_InPacket_1.default));
    cmd.ReceivedAutoStart = ReceivedAutoStart;
    // new
    var ReceivedChiaBai = /** @class */ (function (_super) {
        __extends(ReceivedChiaBai, _super);
        function ReceivedChiaBai(data) {
            var _this = _super.call(this, data) || this;
            var a = 0;
            _this.cardSize = _this.getShort();
            _this.cards = [];
            for (a = 0; a < _this.cardSize; a++)
                _this.cards.push(_this.getByte());
            _this.gameId = _this.getInt();
            _this.timeChiaBai = _this.getByte();
            return _this;
        }
        return ReceivedChiaBai;
    }(Network_InPacket_1.default));
    cmd.ReceivedChiaBai = ReceivedChiaBai;
    // new
    var ReceivedUserLeaveRoom = /** @class */ (function (_super) {
        __extends(ReceivedUserLeaveRoom, _super);
        function ReceivedUserLeaveRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.nickName = _this.getString();
            return _this;
        }
        return ReceivedUserLeaveRoom;
    }(Network_InPacket_1.default));
    cmd.ReceivedUserLeaveRoom = ReceivedUserLeaveRoom;
    // new
    var ReceivedUserJoinRoom = /** @class */ (function (_super) {
        __extends(ReceivedUserJoinRoom, _super);
        function ReceivedUserJoinRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.info = {};
            _this.info["nickName"] = _this.getString();
            _this.info["avatar"] = _this.getString();
            _this.info["money"] = _this.getLong();
            _this.uChair = _this.getByte();
            _this.uStatus = _this.getByte();
            return _this;
        }
        return ReceivedUserJoinRoom;
    }(Network_InPacket_1.default));
    cmd.ReceivedUserJoinRoom = ReceivedUserJoinRoom;
    // new
    var ReceivedUpdateMatch = /** @class */ (function (_super) {
        __extends(ReceivedUpdateMatch, _super);
        function ReceivedUpdateMatch(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.hasInfoSize = _this.getShort();
            _this.hasInfoList = [];
            for (var a = 0; a < _this.hasInfoSize; a++)
                _this.hasInfoList.push(_this.getByte());
            _this.currentMoneyList = [];
            _this.statusList = [];
            for (a = 0; a < Code.MAX_PLAYER; a++)
                _this.hasInfoList[a] ? (_this.currentMoneyList.push(_this.getLong()), _this.statusList.push(_this.getInt())) : (_this.currentMoneyList.push(0), _this.statusList.push(0));
            return _this;
        }
        return ReceivedUpdateMatch;
    }(Network_InPacket_1.default));
    cmd.ReceivedUpdateMatch = ReceivedUpdateMatch;
    // new
    var ReceivedNotifyRegOutRoom = /** @class */ (function (_super) {
        __extends(ReceivedNotifyRegOutRoom, _super);
        function ReceivedNotifyRegOutRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.outChair = _this.getByte();
            _this.isOutRoom = _this.getBool();
            return _this;
        }
        return ReceivedNotifyRegOutRoom;
    }(Network_InPacket_1.default));
    cmd.ReceivedNotifyRegOutRoom = ReceivedNotifyRegOutRoom;
    // new
    var ReceivedKickOff = /** @class */ (function (_super) {
        __extends(ReceivedKickOff, _super);
        function ReceivedKickOff(data) {
            var _this = _super.call(this, data) || this;
            _this.reason = _this.getByte();
            return _this;
        }
        return ReceivedKickOff;
    }(Network_InPacket_1.default));
    cmd.ReceivedKickOff = ReceivedKickOff;
    // new
    var ReceivedMoiDatCuoc = /** @class */ (function (_super) {
        __extends(ReceivedMoiDatCuoc, _super);
        function ReceivedMoiDatCuoc(data) {
            var _this = _super.call(this, data) || this;
            _this.timeDatCuoc = _this.getByte();
            return _this;
        }
        return ReceivedMoiDatCuoc;
    }(Network_InPacket_1.default));
    cmd.ReceivedMoiDatCuoc = ReceivedMoiDatCuoc;
    // new
    var ReceivedDatCuoc = /** @class */ (function (_super) {
        __extends(ReceivedDatCuoc, _super);
        function ReceivedDatCuoc(data) {
            var _this = _super.call(this, data) || this;
            _this.chairDatCuoc = _this.getByte();
            _this.level = _this.getByte();
            return _this;
        }
        return ReceivedDatCuoc;
    }(Network_InPacket_1.default));
    cmd.ReceivedDatCuoc = ReceivedDatCuoc;
    // new
    var ReceivedMoBai = /** @class */ (function (_super) {
        __extends(ReceivedMoBai, _super);
        function ReceivedMoBai(data) {
            var _this = _super.call(this, data) || this;
            _this.chairMoBai = _this.getByte();
            _this.cardSize = _this.getShort();
            _this.cards = [];
            for (var a = 0; a < _this.cardSize; a++) {
                _this.cards.push(_this.getByte());
            }
            return _this;
        }
        return ReceivedMoBai;
    }(Network_InPacket_1.default));
    cmd.ReceivedMoBai = ReceivedMoBai;
    // new
    var ReceivedEndGame = /** @class */ (function (_super) {
        __extends(ReceivedEndGame, _super);
        function ReceivedEndGame(data) {
            var _this = _super.call(this, data) || this;
            _this.potAmount = _this.getLong();
            _this.rankSize = _this.getShort();
            _this.rankList = [];
            for (var a = 0; a < _this.rankSize; a++)
                _this.rankList.push(_this.getLong());
            _this.kqttSize = _this.getShort();
            _this.kqttList = [];
            for (a = 0; a < _this.kqttSize; a++)
                _this.kqttList.push(_this.getLong());
            _this.booleanWinerSize = _this.getShort();
            _this.booleanWinerList = [];
            for (a = 0; a < _this.booleanWinerSize; a++)
                _this.booleanWinerList.push(_this.getByte());
            _this.moneyArraySize = _this.getShort();
            _this.currentMoney = [];
            for (a = 0; a < _this.moneyArraySize; a++)
                _this.currentMoney.push(_this.getLong());
            _this.gameMoney = [];
            _this.gameMoneySize = _this.getShort();
            for (a = 0; a < _this.gameMoneySize; a++)
                _this.gameMoney.push(_this.getLong());
            _this.publicCardSize = _this.getShort();
            _this.publicCards = [];
            for (a = 0; a < _this.publicCardSize; a++)
                _this.publicCards.push(_this.getByte());
            _this.hasInfoSize = _this.getShort();
            _this.hasInfoList = [];
            for (a = 0; a < _this.hasInfoSize; a++)
                _this.hasInfoList.push(_this.getByte());
            _this.privateCardList = [];
            _this.maxCardList = [];
            _this.cardNameList = [];
            for (a = 0; a < Code.MAX_PLAYER; a++) {
                var b = 0, c = [], d = [];
                if (_this.hasInfoList[a]) {
                    for (var b = _this.getShort(), e = 0; e < b; e++)
                        d.push(_this.getByte());
                    for (var b = _this.getByte(), f = _this.getShort(), e = 0; e < f; e++)
                        c.push(_this.getByte());
                }
                else
                    b = 0, c = [];
                _this.maxCardList.push(c);
                _this.privateCardList.push(d);
                _this.cardNameList.push(b);
            }
            return _this;
        }
        return ReceivedEndGame;
    }(Network_InPacket_1.default));
    cmd.ReceivedEndGame = ReceivedEndGame;
    // new
    var ReceivedDoiChuong = /** @class */ (function (_super) {
        __extends(ReceivedDoiChuong, _super);
        function ReceivedDoiChuong(data) {
            var _this = _super.call(this, data) || this;
            _this.chuongChair = _this.getByte();
            return _this;
        }
        return ReceivedDoiChuong;
    }(Network_InPacket_1.default));
    cmd.ReceivedDoiChuong = ReceivedDoiChuong;
    // new
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
    cmd.ReceivedChatRoom = ReceivedChatRoom;
    // new
    var ReceivedGameInfo = /** @class */ (function (_super) {
        __extends(ReceivedGameInfo, _super);
        function ReceivedGameInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.maxPlayer = _this.getByte();
            _this.chair = _this.getByte();
            _this.myCardSize = _this.getShort();
            _this.myCards = [];
            for (var a = 0; a < _this.myCardSize; a++)
                _this.myCards.push(_this.getByte());
            _this.publicCardSize = _this.getShort();
            _this.publicCards = [];
            for (a = 0; a < _this.publicCardSize; a++)
                _this.publicCards.push(_this.getByte());
            _this.dealerChair = _this.getByte();
            _this.smallBlindChair = _this.getByte();
            _this.bigBlindChair = _this.getByte();
            _this.potAmount = _this.getLong();
            _this.maxBet = _this.getLong();
            _this.raiseStep = _this.getLong();
            _this.roundId = _this.getByte();
            _this.gameServerState = _this.getByte();
            _this.gameAction = _this.getByte();
            _this.countDownTime = _this.getByte();
            _this.currentActiveChair = _this.getByte();
            _this.moneyType = _this.getByte();
            _this.bet = _this.getLong();
            _this.gameId = _this.getInt();
            _this.roomId = _this.getInt();
            _this.hasInfoSize = _this.getShort();
            _this.hasInfoList = [];
            for (a = 0; a < _this.hasInfoSize; a++)
                _this.hasInfoList.push(_this.getByte());
            _this.playerInfoList = [];
            for (a = 0; a < _this.maxPlayer; a++) {
                if (_this.hasInfoList[a]) {
                    var b = {};
                    b["hasFold"] = _this.getByte();
                    b["hasAllIn"] = _this.getByte();
                    b["currentBet"] = _this.getLong();
                    b["currentMoney"] = _this.getLong();
                    b["status"] = _this.getByte();
                    b["avatarUrl"] = _this.getString();
                    b["nickName"] = _this.getString();
                }
                else
                    b = {}, b["hasFold"] = 0, b["hasAllIn"] = 0, b["currentBet"] = 0, b["currentMoney"] = 0, b["status"] = 0, b["avatarUrl"] = "", b["nickName"] = "";
                _this.playerInfoList.push(b);
            }
            return _this;
        }
        return ReceivedGameInfo;
    }(Network_InPacket_1.default));
    cmd.ReceivedGameInfo = ReceivedGameInfo;
    var ReceivedTakeTurn = /** @class */ (function (_super) {
        __extends(ReceivedTakeTurn, _super);
        function ReceivedTakeTurn(data) {
            var _this = _super.call(this, data) || this;
            _this.actionChair = _this.getByte();
            _this.action = _this.getByte();
            _this.lastRaise = _this.getLong();
            _this.currentBet = _this.getLong();
            _this.maxBet = _this.getLong();
            _this.currentMoney = _this.getLong();
            _this.raiseStep = _this.getLong();
            _this.raiseBlock = _this.getByte();
            return _this;
        }
        return ReceivedTakeTurn;
    }(Network_InPacket_1.default));
    cmd.ReceivedTakeTurn = ReceivedTakeTurn;
    var ReceivedSelectDealer = /** @class */ (function (_super) {
        __extends(ReceivedSelectDealer, _super);
        function ReceivedSelectDealer(data) {
            var _this = _super.call(this, data) || this;
            _this.dealerChair = _this.getByte();
            _this.smallBlindChair = _this.getByte();
            _this.bigBlindChair = _this.getByte();
            _this.hasInfoSize = _this.getShort();
            _this.hasInfoList = [];
            cc.log("this.hasInfoSize: " + _this.hasInfoSize);
            for (var a = 0; a < _this.hasInfoSize; a++) {
                var b = _this.getByte();
                _this.hasInfoList.push(b);
                cc.log("i: " + a + " " + b);
            }
            _this.playerStatusList = [];
            for (a = 0; a < Code.MAX_PLAYER; a++)
                _this.hasInfoList[a] ?
                    (b = _this.getByte(), _this.playerStatusList.push(b), cc.log("i: " + a + " " + b)) : _this.playerStatusList.push(0);
            _this.gameId = _this.getInt();
            _this.isCheat = _this.getByte();
            _this.currentMoneySize = _this.getShort();
            _this.currentMoneyList = [];
            for (a = 0; a < _this.currentMoneySize; a++)
                _this.currentMoneyList.push(_this.getLong());
            _this.size = _this.getShort();
            _this.listBetBigBlind = [];
            b = "";
            for (a = 0; a < _this.size; a++)
                _this.listBetBigBlind.push(_this.getByte()), b += " " + _this.listBetBigBlind[a];
            cc.log("Big Blind them: " + b);
            return _this;
        }
        return ReceivedSelectDealer;
    }(Network_InPacket_1.default));
    cmd.ReceivedSelectDealer = ReceivedSelectDealer;
    var ReceivedBuyIn = /** @class */ (function (_super) {
        __extends(ReceivedBuyIn, _super);
        function ReceivedBuyIn(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.buyInMoney = _this.getLong();
            return _this;
        }
        return ReceivedBuyIn;
    }(Network_InPacket_1.default));
    cmd.ReceivedBuyIn = ReceivedBuyIn;
    var ReceivedChangeTurn = /** @class */ (function (_super) {
        __extends(ReceivedChangeTurn, _super);
        function ReceivedChangeTurn(data) {
            var _this = _super.call(this, data) || this;
            _this.roundId = _this.getByte();
            _this.chair = _this.getByte();
            _this.betTime = _this.getByte();
            return _this;
        }
        return ReceivedChangeTurn;
    }(Network_InPacket_1.default));
    cmd.ReceivedChangeTurn = ReceivedChangeTurn;
    var ReceivedDealCards = /** @class */ (function (_super) {
        __extends(ReceivedDealCards, _super);
        function ReceivedDealCards(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.sizeCard = _this.getShort();
            _this.myCards = [];
            for (var a = 0; a < _this.sizeCard; a++)
                _this.myCards.push(_this.getByte());
            _this.boBaiId = _this.getByte();
            cc.log("Bo bai server tra: " + _this.boBaiId);
            return _this;
        }
        return ReceivedDealCards;
    }(Network_InPacket_1.default));
    cmd.ReceivedDealCards = ReceivedDealCards;
    var ReceivedNewBetRound = /** @class */ (function (_super) {
        __extends(ReceivedNewBetRound, _super);
        function ReceivedNewBetRound(data) {
            var _this = _super.call(this, data) || this;
            _this.roundId = _this.getByte();
            _this.sizeCard = _this.getShort();
            cc.log("sizeCard: " + _this.sizeCard);
            _this.plusCards = [];
            for (var a = 0; a < _this.sizeCard; a++)
                _this.plusCards.push(_this.getByte());
            _this.cardName = _this.getByte();
            _this.potAmount = _this.getLong();
            return _this;
        }
        return ReceivedNewBetRound;
    }(Network_InPacket_1.default));
    cmd.ReceivedNewBetRound = ReceivedNewBetRound;
    var ReceivedShowCard = /** @class */ (function (_super) {
        __extends(ReceivedShowCard, _super);
        function ReceivedShowCard(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceivedShowCard;
    }(Network_InPacket_1.default));
    cmd.ReceivedShowCard = ReceivedShowCard;
    var ReceivedStandUp = /** @class */ (function (_super) {
        __extends(ReceivedStandUp, _super);
        function ReceivedStandUp(data) {
            var _this = _super.call(this, data) || this;
            _this.isUp = _this.getByte();
            return _this;
        }
        return ReceivedStandUp;
    }(Network_InPacket_1.default));
    cmd.ReceivedStandUp = ReceivedStandUp;
    var ReceivedUpdateTime = /** @class */ (function (_super) {
        __extends(ReceivedUpdateTime, _super);
        function ReceivedUpdateTime(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceivedUpdateTime;
    }(Network_InPacket_1.default));
    cmd.ReceivedUpdateTime = ReceivedUpdateTime;
    var ReceivedJoinRoomFail = /** @class */ (function (_super) {
        __extends(ReceivedJoinRoomFail, _super);
        function ReceivedJoinRoomFail(data) {
            return _super.call(this, data) || this;
        }
        return ReceivedJoinRoomFail;
    }(Network_InPacket_1.default));
    cmd.ReceivedJoinRoomFail = ReceivedJoinRoomFail;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUG9rZXJcXFBva2VyU2NyaXB0XFxQb2tlci5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2RkFBZ0Y7QUFDaEYsK0ZBQWtGO0FBRWxGLElBQWlCLEdBQUcsQ0FvMEJuQjtBQXAwQkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBd0ZBLENBQUM7UUF2RlUsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRS9CLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLENBQUMsQ0FBQztRQUUxQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUN6QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLGVBQVUsR0FBRyxHQUFHLENBQUM7UUFFeEIsY0FBYztRQUNQLHFCQUFnQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qix1QkFBa0IsR0FBRyxDQUFDLENBQUM7UUFFOUIsUUFBUTtRQUNELGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsYUFBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFMUIsWUFBWTtRQUNMLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLDZCQUF3QixHQUFHLENBQUMsQ0FBQztRQUM3QiwwQkFBcUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsMEJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUN4QixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFDekIsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDL0IsV0FBQztLQXhGRCxBQXdGQyxJQUFBO0lBeEZZLFFBQUksT0F3RmhCLENBQUE7SUFFRCxZQUFZO0lBQ1o7UUFBOEIsNEJBQVM7UUFDbkMsa0JBQVksQ0FBUyxFQUFFLENBQVM7WUFBaEMsWUFDSSxpQkFBTyxTQVFWO1lBUEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVztZQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztZQUNqQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FYQSxBQVdDLENBWDZCLDJCQUFTLEdBV3RDO0lBWFksWUFBUSxXQVdwQixDQUFBO0lBRUQ7UUFBaUMsK0JBQVM7UUFDdEMscUJBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1lBQTNDLFlBQ0ksaUJBQU8sU0FVVjtZQVRHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxrQkFBQztJQUFELENBYkEsQUFhQyxDQWJnQywyQkFBUyxHQWF6QztJQWJZLGVBQVcsY0FhdkIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFTO1FBQzNDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVHFDLDJCQUFTLEdBUzlDO0lBVFksb0JBQWdCLG1CQVM1QixDQUFBO0lBRUQ7UUFBNkMsMkNBQVM7UUFDbEQ7WUFBQSxZQUNJLGlCQUFPLFNBTVY7WUFMRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUN0QixDQUFDO1FBQ0wsOEJBQUM7SUFBRCxDQVRBLEFBU0MsQ0FUNEMsMkJBQVMsR0FTckQ7SUFUWSwyQkFBdUIsMEJBU25DLENBQUE7SUFFRDtRQUFxQyxtQ0FBUztRQUMxQztZQUFBLFlBQ0ksaUJBQU8sU0FNVjtZQUxHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxzQkFBQztJQUFELENBVEEsQUFTQyxDQVRvQywyQkFBUyxHQVM3QztJQVRZLG1CQUFlLGtCQVMzQixDQUFBO0lBRUQ7UUFBdUMscUNBQVM7UUFDNUM7WUFBQSxZQUNJLGlCQUFPLFNBTVY7WUFMRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUN0QixDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQVRBLEFBU0MsQ0FUc0MsMkJBQVMsR0FTL0M7SUFUWSxxQkFBaUIsb0JBUzdCLENBQUE7SUFFRDtRQUFzQyxvQ0FBUztRQUMzQywwQkFBWSxDQUFTO1lBQXJCLFlBQ0ksaUJBQU8sU0FPVjtZQU5HLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCx1QkFBQztJQUFELENBVkEsQUFVQyxDQVZxQywyQkFBUyxHQVU5QztJQVZZLG9CQUFnQixtQkFVNUIsQ0FBQTtJQUVEO1FBQW1DLGlDQUFTO1FBQ3hDLHVCQUFZLENBQVMsRUFBRSxDQUFLO1lBQTVCLFlBQ0ksaUJBQU8sU0FXVjtZQVZHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQztnQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxvQkFBQztJQUFELENBZEEsQUFjQyxDQWRrQywyQkFBUyxHQWMzQztJQWRZLGlCQUFhLGdCQWN6QixDQUFBO0lBRUQ7UUFBaUMsK0JBQVM7UUFDdEM7WUFBQSxZQUNJLGlCQUFPLFNBTVY7WUFMRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVGdDLDJCQUFTLEdBU3pDO0lBVFksZUFBVyxjQVN2QixDQUFBO0lBRUQ7UUFBcUMsbUNBQVM7UUFDMUM7WUFBQSxZQUNJLGlCQUFPLFNBWVY7WUFYRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsaUJBQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQSxZQUFZO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsV0FBVztZQUN4QyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxnQkFBZ0I7WUFDakMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLGdCQUFnQjtZQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsV0FBVztZQUMxQixLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsU0FBUztZQUN6QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxzQkFBQztJQUFELENBZkEsQUFlQyxDQWZvQywyQkFBUyxHQWU3QztJQWZZLG1CQUFlLGtCQWUzQixDQUFBO0lBRUQ7UUFBc0Msb0NBQVM7UUFDM0MsMEJBQVksRUFBVTtZQUF0QixZQUNJLGlCQUFPLFNBUVY7WUFQRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN6QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsVUFBVTtZQUM3QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCx1QkFBQztJQUFELENBWEEsQUFXQyxDQVhxQywyQkFBUyxHQVc5QztJQVhZLG9CQUFnQixtQkFXNUIsQ0FBQTtJQUVEO1FBQWtDLGdDQUFTO1FBQ3ZDLHNCQUFZLENBQVMsRUFBRSxDQUFTO1lBQWhDLFlBQ0ksaUJBQU8sU0FRVjtZQVBHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxtQkFBQztJQUFELENBWEEsQUFXQyxDQVhpQywyQkFBUyxHQVcxQztJQVhZLGdCQUFZLGVBV3hCLENBQUE7SUFHRCxnQkFBZ0I7SUFDaEI7UUFBa0MsZ0NBQVM7UUFDdkMsc0JBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7WUFBakUsWUFDSSxpQkFBTyxTQVlWO1lBWEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FmQSxBQWVDLENBZmlDLDJCQUFTLEdBZTFDO0lBZlksZ0JBQVksZUFleEIsQ0FBQTtJQUVEO1FBQStCLDZCQUFTO1FBQ3BDLG1CQUFZLENBQVMsRUFBRSxDQUFTO1lBQWhDLFlBQ0ksaUJBQU8sU0FRVjtZQVBHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FYQSxBQVdDLENBWDhCLDJCQUFTLEdBV3ZDO0lBWFksYUFBUyxZQVdyQixDQUFBO0lBRUQ7UUFBa0MsZ0NBQVM7UUFDdkM7WUFBQSxZQUNJLGlCQUFPLFNBTVY7WUFMRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FUQSxBQVNDLENBVGlDLDJCQUFTLEdBUzFDO0lBVFksZ0JBQVksZUFTeEIsQ0FBQTtJQUVEO1FBQXFDLG1DQUFTO1FBQzFDLHlCQUFZLENBQVM7WUFBckIsWUFDSSxpQkFBTyxTQU9WO1lBTkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFBOztRQUNyQixDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWb0MsMkJBQVMsR0FVN0M7SUFWWSxtQkFBZSxrQkFVM0IsQ0FBQTtJQUVEO1FBQWlDLCtCQUFTO1FBQ3RDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVGdDLDJCQUFTLEdBU3pDO0lBVFksZUFBVyxjQVN2QixDQUFBO0lBRUQsV0FBVztJQUNYO1FBQW1DLGlDQUFRO1FBQ3ZDLHVCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7WUFERyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUNuQixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQUxBLEFBS0MsQ0FMa0MsMEJBQVEsR0FLMUM7SUFMWSxpQkFBYSxnQkFLekIsQ0FBQTtJQUVEO1FBQXlDLHVDQUFRO1FBRzdDLDZCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBa0JkO1lBckJELFVBQUksR0FBVSxFQUFFLENBQUM7WUFJYixJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDL0IsS0FBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMvQixJQUFJLElBQUksR0FBUSxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDdkI7O1FBQ0wsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0F2QkEsQUF1QkMsQ0F2QndDLDBCQUFRLEdBdUJoRDtJQXZCWSx1QkFBbUIsc0JBdUIvQixDQUFBO0lBRUQsU0FBUztJQUNUO1FBQTZDLDJDQUFRO1FBb0JqRCxpQ0FBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQTRCZDtZQTNCRyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDakYsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDM0I7WUFDRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdkYsS0FBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTs7UUFDckMsQ0FBQztRQUNMLDhCQUFDO0lBQUQsQ0FsREEsQUFrREMsQ0FsRDRDLDBCQUFRLEdBa0RwRDtJQWxEWSwyQkFBdUIsMEJBa0RuQyxDQUFBO0lBRUQ7UUFBdUMscUNBQVE7UUFHM0MsMkJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FHZDtZQUZHLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN4QyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQVJBLEFBUUMsQ0FSc0MsMEJBQVEsR0FROUM7SUFSWSxxQkFBaUIsb0JBUTdCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBcUMsbUNBQVE7UUFLekMseUJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FPZDtZQU5HLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNWLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3RDLENBQUM7UUFDTCxzQkFBQztJQUFELENBZEEsQUFjQyxDQWRvQywwQkFBUSxHQWM1QztJQWRZLG1CQUFlLGtCQWMzQixDQUFBO0lBRUQsTUFBTTtJQUNOO1FBQTJDLHlDQUFRO1FBRy9DLCtCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7WUFGRyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7UUFDckMsQ0FBQztRQUNMLDRCQUFDO0lBQUQsQ0FSQSxBQVFDLENBUjBDLDBCQUFRLEdBUWxEO0lBUlkseUJBQXFCLHdCQVFqQyxDQUFBO0lBRUQsTUFBTTtJQUNOO1FBQTBDLHdDQUFRO1FBSTlDLDhCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBT2Q7WUFORyxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNsQyxDQUFDO1FBQ0wsMkJBQUM7SUFBRCxDQWJBLEFBYUMsQ0FieUMsMEJBQVEsR0FhakQ7SUFiWSx3QkFBb0IsdUJBYWhDLENBQUE7SUFHRCxNQUFNO0lBQ047UUFBeUMsdUNBQVE7UUFNN0MsNkJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FRZDtZQVBHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNqRixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBOztRQUM1TSxDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQWhCQSxBQWdCQyxDQWhCd0MsMEJBQVEsR0FnQmhEO0lBaEJZLHVCQUFtQixzQkFnQi9CLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBOEMsNENBQVE7UUFHbEQsa0NBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FHZDtZQUZHLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNwQyxDQUFDO1FBQ0wsK0JBQUM7SUFBRCxDQVJBLEFBUUMsQ0FSNkMsMEJBQVEsR0FRckQ7SUFSWSw0QkFBd0IsMkJBUXBDLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBcUMsbUNBQVE7UUFFekMseUJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQURHLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNqQyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQU5BLEFBTUMsQ0FOb0MsMEJBQVEsR0FNNUM7SUFOWSxtQkFBZSxrQkFNM0IsQ0FBQTtJQUVELE1BQU07SUFDTjtRQUF3QyxzQ0FBUTtRQUU1Qyw0QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1lBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3RDLENBQUM7UUFDTCx5QkFBQztJQUFELENBTkEsQUFNQyxDQU51QywwQkFBUSxHQU0vQztJQU5ZLHNCQUFrQixxQkFNOUIsQ0FBQTtJQUdELE1BQU07SUFDTjtRQUFxQyxtQ0FBUTtRQUd6Qyx5QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1lBRkcsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ2hDLENBQUM7UUFDTCxzQkFBQztJQUFELENBUkEsQUFRQyxDQVJvQywwQkFBUSxHQVE1QztJQVJZLG1CQUFlLGtCQVEzQixDQUFBO0lBRUQsTUFBTTtJQUNOO1FBQW1DLGlDQUFRO1FBSXZDLHVCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBT2Q7WUFORyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDbkM7O1FBQ0wsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FiQSxBQWFDLENBYmtDLDBCQUFRLEdBYTFDO0lBYlksaUJBQWEsZ0JBYXpCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBcUMsbUNBQVE7UUFtQnpDLHlCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBc0NkO1lBckNHLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUMzRSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztZQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN2RixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDN0UsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNoRixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxFQUFFLEVBQ04sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDWCxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7d0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztvQkFDeEUsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFO3dCQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7aUJBQzlGOztvQkFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDNUI7O1FBQ0wsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0EzREEsQUEyREMsQ0EzRG9DLDBCQUFRLEdBMkQ1QztJQTNEWSxtQkFBZSxrQkEyRDNCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBdUMscUNBQVE7UUFFM0MsMkJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQURHLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQU5BLEFBTUMsQ0FOc0MsMEJBQVEsR0FNOUM7SUFOWSxxQkFBaUIsb0JBTTdCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBc0Msb0NBQVE7UUFLMUMsMEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FLZDtZQUpHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBOztRQUNwQyxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQVpBLEFBWUMsQ0FacUMsMEJBQVEsR0FZN0M7SUFaWSxvQkFBZ0IsbUJBWTVCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBc0Msb0NBQVE7UUF5QjFDLDBCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBeUNkO1lBeENHLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM1RSxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2hGLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxlQUFlLEdBQUksS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM3RSxLQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztZQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNYLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzlCLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQy9CLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2pDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25DLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzdCLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7aUJBQ25DOztvQkFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3pKLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzlCOztRQUNMLENBQUM7UUFDTCx1QkFBQztJQUFELENBcEVBLEFBb0VDLENBcEVxQywwQkFBUSxHQW9FN0M7SUFwRVksb0JBQWdCLG1CQW9FNUIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFRO1FBUzFDLDBCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBU2Q7WUFSRyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDckMsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FwQkEsQUFvQkMsQ0FwQnFDLDBCQUFRLEdBb0I3QztJQXBCWSxvQkFBZ0IsbUJBb0I1QixDQUFBO0lBRUQ7UUFBMEMsd0NBQVE7UUFhOUMsOEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0F5QmQ7WUF4QkcsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDcEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDdEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFRLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7YUFDOUI7WUFDRCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckgsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZGLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1lBQzFCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDUCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RyxFQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFBOztRQUNsQyxDQUFDO1FBQ0wsMkJBQUM7SUFBRCxDQXhDQSxBQXdDQyxDQXhDeUMsMEJBQVEsR0F3Q2pEO0lBeENZLHdCQUFvQix1QkF3Q2hDLENBQUE7SUFFRDtRQUFtQyxpQ0FBUTtRQUd2Qyx1QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUdkO1lBRkcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3JDLENBQUM7UUFDTCxvQkFBQztJQUFELENBUkEsQUFRQyxDQVJrQywwQkFBUSxHQVExQztJQVJZLGlCQUFhLGdCQVF6QixDQUFBO0lBRUQ7UUFBd0Msc0NBQVE7UUFJNUMsNEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtZQUhHLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNsQyxDQUFDO1FBQ0wseUJBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWdUMsMEJBQVEsR0FVL0M7SUFWWSxzQkFBa0IscUJBVTlCLENBQUE7SUFFRDtRQUF1QyxxQ0FBUTtRQU0zQywyQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQU9kO1lBTkcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLEVBQUUsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUNqRCxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQWZBLEFBZUMsQ0Fmc0MsMEJBQVEsR0FlOUM7SUFmWSxxQkFBaUIsb0JBZTdCLENBQUE7SUFFRDtRQUF5Qyx1Q0FBUTtRQU03Qyw2QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQVFkO1lBUEcsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRTtnQkFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM1RSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDcEMsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FoQkEsQUFnQkMsQ0FoQndDLDBCQUFRLEdBZ0JoRDtJQWhCWSx1QkFBbUIsc0JBZ0IvQixDQUFBO0lBRUQ7UUFBc0Msb0NBQVE7UUFFMUMsMEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNoQyxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQU5BLEFBTUMsQ0FOcUMsMEJBQVEsR0FNN0M7SUFOWSxvQkFBZ0IsbUJBTTVCLENBQUE7SUFFRDtRQUFxQyxtQ0FBUTtRQUV6Qyx5QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1lBREcsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQy9CLENBQUM7UUFDTCxzQkFBQztJQUFELENBTkEsQUFNQyxDQU5vQywwQkFBUSxHQU01QztJQU5ZLG1CQUFlLGtCQU0zQixDQUFBO0lBRUQ7UUFBd0Msc0NBQVE7UUFFNUMsNEJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNoQyxDQUFDO1FBQ0wseUJBQUM7SUFBRCxDQU5BLEFBTUMsQ0FOdUMsMEJBQVEsR0FNL0M7SUFOWSxzQkFBa0IscUJBTTlCLENBQUE7SUFFRDtRQUEwQyx3Q0FBUTtRQUM5Qyw4QkFBWSxJQUFnQjttQkFDeEIsa0JBQU0sSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUNMLDJCQUFDO0lBQUQsQ0FKQSxBQUlDLENBSnlDLDBCQUFRLEdBSWpEO0lBSlksd0JBQW9CLHVCQUloQyxDQUFBO0FBQ0wsQ0FBQyxFQXAwQmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQW8wQm5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgTE9HSU4gPSAxO1xuICAgICAgICBzdGF0aWMgVE9QU0VSVkVSID0gMTAwMTtcbiAgICAgICAgc3RhdGljIENNRF9QSU5HUE9ORyA9IDEwNTA7XG5cbiAgICAgICAgc3RhdGljIENNRF9KT0lOX1JPT00gPSAzMDAxO1xuICAgICAgICBzdGF0aWMgQ01EX1JFQ09OTkVDVF9ST09NID0gMzAwMjtcbiAgICAgICAgc3RhdGljIE1PTkVZX0JFVF9DT05GSUcgPSAzMDAzO1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX0ZBSUwgPSAzMDA0O1xuICAgICAgICBzdGF0aWMgQ0hBVF9ST09NID0gMzAwODtcblxuICAgICAgICBzdGF0aWMgR0VUX0xJU1RfUk9PTSA9IDMwMTQ7XG4gICAgICAgIHN0YXRpYyBKT0lOX0dBTUVfUk9PTV9CWV9JRCA9IDMwMTU7XG5cbiAgICAgICAgc3RhdGljIE1PSV9EQVRfQ1VPQyA9IDMxMTQ7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfT1dORVJfUk9PTSA9IDMxMTc7XG4gICAgICAgIHN0YXRpYyBOT1RJRllfVVNFUl9HRVRfSkFDS1BPVCA9IDMxMjI7XG5cbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfT1VUX0dBTUUgPSAwO1xuICAgICAgICBzdGF0aWMgUExBWUVSX1NUQVRVU19WSUVXRVIgPSAxO1xuICAgICAgICBzdGF0aWMgUExBWUVSX1NUQVRVU19TSVRUSU5HID0gMjtcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfUExBWUlORyA9IDM7XG5cbiAgICAgICAgc3RhdGljIFNFTEVDVF9ERUFMRVIgPSAzMTAwO1xuICAgICAgICBzdGF0aWMgVEFLRV9UVVJOID0gMzEwMTtcbiAgICAgICAgc3RhdGljIEJVWV9JTiA9IDMxMDI7XG4gICAgICAgIHN0YXRpYyBLRVRfVEhVQyA9IDMxMDM7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfVFVSTiA9IDMxMDQ7XG4gICAgICAgIHN0YXRpYyBORVdfUk9VTkQgPSAzMTA1O1xuICAgICAgICBzdGF0aWMgREVBTF9QUklWQVRFX0NBUkQgPSAzMTA2O1xuICAgICAgICBzdGF0aWMgVFVfRE9OR19CQVRfREFVID0gMzEwNztcbiAgICAgICAgc3RhdGljIFNIT1dfQ0FSRCA9IDMxMDg7XG4gICAgICAgIHN0YXRpYyBSRVFVRVNUX0JVWV9JTiA9IDMxMDk7XG4gICAgICAgIHN0YXRpYyBUSE9OR19USU5fQkFOX0NIT0kgPSAzMTEwO1xuICAgICAgICBzdGF0aWMgREFOR19LWV9USE9BVF9QSE9ORyA9IDMxMTE7XG4gICAgICAgIHN0YXRpYyBSRVFVRVNUX1NUQU5EX1VQID0gMzExMztcbiAgICAgICAgc3RhdGljIENIRUFUX0NBUkRTID0gMzExNTtcbiAgICAgICAgc3RhdGljIERBTkdfS1lfQ0hPSV9USUVQID0gMzExNjtcbiAgICAgICAgc3RhdGljIEpPSU5fUk9PTV9TVUNDRVNTID0gMzExODtcbiAgICAgICAgc3RhdGljIExFQVZFX0dBTUUgPSAzMTE5O1xuICAgICAgICBzdGF0aWMgTk9USUZZX0tJQ0tfRlJPTV9ST09NID0gMzEyMDtcbiAgICAgICAgc3RhdGljIE5FV19VU0VSX0pPSU4gPSAzMTIxO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX01BVENIID0gMzEyMztcblxuICAgICAgICBzdGF0aWMgUkVRVUVTVF9JTkZPX1RPVVIgPSAzOTkwO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX1RJTUUgPSAzOTkxO1xuXG4gICAgICAgIHN0YXRpYyBNQVhfUExBWUVSID0gOTtcbiAgICAgICAgc3RhdGljIE1BWF9CVVlfSU4gPSAyNTA7XG5cbiAgICAgICAgLy8gR2FtZSBBY3Rpb25cbiAgICAgICAgc3RhdGljIEdBTUVfQUNUSU9OX05PTkUgPSAtMTtcbiAgICAgICAgc3RhdGljIEdBTUVfQUNUSU9OX0ZPTEQgPSAwO1xuICAgICAgICBzdGF0aWMgR0FNRV9BQ1RJT05fQ0hFQ0sgPSAxO1xuICAgICAgICBzdGF0aWMgR0FNRV9BQ1RJT05fQ0FMTCA9IDI7XG4gICAgICAgIHN0YXRpYyBHQU1FX0FDVElPTl9SQUlTRSA9IDM7XG4gICAgICAgIHN0YXRpYyBHQU1FX0FDVElPTl9BTExfSU4gPSA0O1xuXG4gICAgICAgIC8vIENhcmRzXG4gICAgICAgIHN0YXRpYyBFR19TQU5IX1ZVQSA9IDA7XG4gICAgICAgIHN0YXRpYyBFR19USFVOR19QSEFfU0FOSCA9IDE7XG4gICAgICAgIHN0YXRpYyBFR19UVV9RVVkgPSAyO1xuICAgICAgICBzdGF0aWMgRUdfQ1VfTFUgPSAzO1xuICAgICAgICBzdGF0aWMgRUdfVEhVTkcgPSA0O1xuICAgICAgICBzdGF0aWMgRUdfU0FOSCA9IDU7XG4gICAgICAgIHN0YXRpYyBFR19YQU1fQ08gPSA2O1xuICAgICAgICBzdGF0aWMgRUdfSEFJX0RPSSA9IDc7XG4gICAgICAgIHN0YXRpYyBFR19ET0kgPSA4O1xuICAgICAgICBzdGF0aWMgRUdfTUFVX1RIQVUgPSA5O1xuICAgICAgICBzdGF0aWMgRUdfU0VSVkVSX05HVSA9IDEwO1xuXG4gICAgICAgIC8vIEdhbWVTdGF0ZVxuICAgICAgICBzdGF0aWMgU1RBVEVfQ0hJQV9CQUkgPSAxO1xuICAgICAgICBzdGF0aWMgU1RBVEVfSk9JTl9ST09NID0gMjtcbiAgICAgICAgc3RhdGljIFNUQVRFX0VORF9HQU1FID0gMztcbiAgICAgICAgc3RhdGljIFNUQVRFX05FV19VU0VSX0pPSU5fUk9PTSA9IDU7XG4gICAgICAgIHN0YXRpYyBTVEFURV9VU0VSX0xFQVZFX1JPT00gPSA2O1xuICAgICAgICBzdGF0aWMgU1RBVEVfREVBTF9DQVJEID0gNztcbiAgICAgICAgc3RhdGljIFNUQVRFX1NFTEVDVF9ERUFMRVIgPSA4O1xuICAgICAgICBzdGF0aWMgU1RBVEVfQ0hBTkdFX1RVUk4gPSA5O1xuICAgICAgICBzdGF0aWMgU1RBVEVfTkVXX0JFVF9ST1VORCA9IDEwO1xuICAgICAgICBzdGF0aWMgU1RBVEVfTk9USUZZX09VVF9ST09NID0gMTE7XG4gICAgICAgIHN0YXRpYyBTVEFURV9CVVlfSU4gPSAxMjtcbiAgICAgICAgc3RhdGljIFNUQVRFX1VQREFURV9NQVRDSCA9IDEzO1xuICAgICAgICBzdGF0aWMgU1RBVEVfR0FNRV9JTkZPID0gMTQ7XG4gICAgICAgIHN0YXRpYyBTVEFURV9TSE9XX0NBUkQgPSAxNTtcbiAgICAgICAgc3RhdGljIFNUQVRFX05PVElGWV9CVVlfSU4gPSAxNjtcbiAgICAgICAgc3RhdGljIFNUQVRFX1NUQU5EX1VQID0gMTc7XG4gICAgfVxuXG4gICAgLy8gT3V0UGFja2V0XG4gICAgZXhwb3J0IGNsYXNzIENtZExvZ2luIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5MT0dJTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGEpOyAvLyBuaWNrbmFtZVxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYik7IC8vIGFjY2Vzc1Rva2VuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDbWRKb2luUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DTURfSk9JTl9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChiKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhjKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ21kUmVjb25uZWN0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNNRF9SRUNPTk5FQ1RfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRSZXF1ZXN0TGVhdmVHYW1lIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFOR19LWV9USE9BVF9QSE9ORyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRIb2xkUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRBTkdfS1lfQ0hPSV9USUVQKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldEdhbWVDb25maWcgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5NT05FWV9CRVRfQ09ORklHKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldFRvcFNlcnZlciBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlRPUFNFUlZFUik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDYXJkQ2hlYXQgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IFtdKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hFQVRfQ0FSRFMpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoMCk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KGIubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChhKVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgYi5sZW5ndGg7IGMrKykgdGhpcy5wdXRCeXRlKGJbY10pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ21kU2VuZFBpbmcgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DTURfUElOR1BPTkcpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kR2V0TGlzdFJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5HRVRfTElTVF9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7Ly9tb25leSB0eXBlXG4gICAgICAgICAgICB0aGlzLnB1dEludChDb2RlLk1BWF9QTEFZRVIpOy8vbWF4cGxheWVyXG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoLTEpOy8va2hvbmcgeGFjIGRpbmhcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8va2hvbmcgeGFjIGRpbmhcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8vQ0FSRF9GUk9NXG4gICAgICAgICAgICB0aGlzLnB1dEludCg1MCk7Ly9DQVJEX1RPXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kSm9pblJvb21CeUlkIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkpPSU5fR0FNRV9ST09NX0JZX0lEKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoaWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoXCJcIik7Ly9tYXQga2hhdVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYXRSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFUX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSA/IDEgOiAwKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGVuY29kZVVSSShiKSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gbmV3IE91dFBhY2tldFxuICAgIGV4cG9ydCBjbGFzcyBTZW5kVGFrZVR1cm4gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIsIGU6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlRBS0VfVFVSTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShiKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShkKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShjKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZSghMSk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQnV5SW4gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkJVWV9JTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhhKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShiKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTaG93Q2FyZCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNIT1dfQ0FSRCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRHZXRJbmZvVG91ciBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlJFUVVFU1RfSU5GT19UT1VSKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kRHVuZ0RheSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlJFUVVFU1RfU1RBTkRfVVApO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluUGFja2V0XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTG9naW4gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgY2MubG9nKFwiX19fX1wiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEdldExpc3RSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgbGV0IGxpc3RTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogYW55ID0ge307XG4gICAgICAgICAgICAgICAgaXRlbVtcImlkXCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1widXNlckNvdW50XCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcImxpbWl0UGxheWVyXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcIm1heFVzZXJQZXJSb29tXCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibW9uZXlUeXBlXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcIm1vbmV5QmV0XCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wicmVxdWlyZWRNb25leVwiXSA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcInJ1bGVcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibmFtZVJvb21cIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJrZXlcIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wicXV5YmFuXCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVkaXRlZFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEpvaW5Sb29tU3VjY2VlZCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbXlDaGFpcjogbnVtYmVyO1xuICAgICAgICBjaHVvbmdDaGFpcjogbnVtYmVyO1xuICAgICAgICBtb25leUJldDogbnVtYmVyO1xuICAgICAgICByb29tSWQ6IG51bWJlcjtcbiAgICAgICAgZ2FtZUlkOiBudW1iZXI7XG4gICAgICAgIG1vbmV5VHlwZTogbnVtYmVyO1xuICAgICAgICBydWxlOiBudW1iZXI7XG4gICAgICAgIHBsYXllclNpemU6IG51bWJlcjtcbiAgICAgICAgcGxheWVyU3RhdHVzOiBhbnlbXTtcbiAgICAgICAgcGxheWVySW5mb3M6IGFueVtdO1xuICAgICAgICBnYW1lQWN0aW9uOiBudW1iZXI7XG4gICAgICAgIGNvdW50RG93blRpbWU6IG51bWJlcjtcbiAgICAgICAgcm9vbU93bmVyOiBudW1iZXI7XG4gICAgICAgIGhhbmRDYXJkU2l6ZVNpemU6IG51bWJlcjtcbiAgICAgICAgaGFuZENhcmRTaXplTGlzdDogYW55W107XG4gICAgICAgIGN1cnJlbnRBY3Rpb25DaGFpcjogbnVtYmVyO1xuICAgICAgICBtaW5CdXlJblRpTGU6IG51bWJlcjtcbiAgICAgICAgbWF4QnV5SW5UaUxlOiBudW1iZXI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm15Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlCZXQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbU93bmVyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5VHlwZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5ydWxlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnBsYXllclNpemU7IGErKykgdGhpcy5wbGF5ZXJTdGF0dXMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5wbGF5ZXJTaXplOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHt9O1xuICAgICAgICAgICAgICAgIGJbXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJuaWNrTmFtZVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgYltcImN1cnJlbnRNb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb3MucHVzaChiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRDYXJkU2l6ZVNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRDYXJkU2l6ZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmhhbmRDYXJkU2l6ZVNpemU7IGErKykgdGhpcy5oYW5kQ2FyZFNpemVMaXN0LnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5taW5CdXlJblRpTGUgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5tYXhCdXlJblRpTGUgPSB0aGlzLmdldEludCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRBdXRvU3RhcnQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGlzQXV0b1N0YXJ0OiBib29sZWFuO1xuICAgICAgICB0aW1lQXV0b1N0YXJ0OiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc0F1dG9TdGFydCA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lQXV0b1N0YXJ0ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGlhQmFpIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjYXJkU2l6ZTogbnVtYmVyO1xuICAgICAgICBjYXJkczogYW55W107XG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xuICAgICAgICB0aW1lQ2hpYUJhaTogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHZhciBhID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5jYXJkU2l6ZTsgYSsrKSB0aGlzLmNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lQ2hpYUJhaSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXNlckxlYXZlUm9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcbiAgICAgICAgbmlja05hbWU6IHN0cmluZztcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm5pY2tOYW1lID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFVzZXJKb2luUm9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgaW5mbzoge307XG4gICAgICAgIHVDaGFpcjogbnVtYmVyO1xuICAgICAgICB1U3RhdHVzOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pbmZvID0ge307XG4gICAgICAgICAgICB0aGlzLmluZm9bXCJuaWNrTmFtZVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmluZm9bXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pbmZvW1wibW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudUNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnVTdGF0dXMgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXBkYXRlTWF0Y2ggZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyOiBudW1iZXI7XG4gICAgICAgIGhhc0luZm9TaXplOiBudW1iZXI7XG4gICAgICAgIGhhc0luZm9MaXN0OiBhbnlbXTtcbiAgICAgICAgY3VycmVudE1vbmV5TGlzdDogYW55W107XG4gICAgICAgIHN0YXR1c0xpc3Q6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb1NpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmhhc0luZm9MaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuaGFzSW5mb1NpemU7IGErKykgdGhpcy5oYXNJbmZvTGlzdC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5TGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgQ29kZS5NQVhfUExBWUVSOyBhKyspIHRoaXMuaGFzSW5mb0xpc3RbYV0gPyAodGhpcy5jdXJyZW50TW9uZXlMaXN0LnB1c2godGhpcy5nZXRMb25nKCkpLCB0aGlzLnN0YXR1c0xpc3QucHVzaCh0aGlzLmdldEludCgpKSkgOiAodGhpcy5jdXJyZW50TW9uZXlMaXN0LnB1c2goMCksIHRoaXMuc3RhdHVzTGlzdC5wdXNoKDApKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgb3V0Q2hhaXI6IG51bWJlcjtcbiAgICAgICAgaXNPdXRSb29tOiBib29sZWFuO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMub3V0Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPdXRSb29tID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRLaWNrT2ZmIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZWFzb246IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlYXNvbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTW9pRGF0Q3VvYyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdGltZURhdEN1b2M6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVEYXRDdW9jID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZERhdEN1b2MgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyRGF0Q3VvYzogbnVtYmVyO1xuICAgICAgICBsZXZlbDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJEYXRDdW9jID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRNb0JhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXJNb0JhaTogbnVtYmVyO1xuICAgICAgICBjYXJkU2l6ZTogbnVtYmVyO1xuICAgICAgICBjYXJkczogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpck1vQmFpID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRW5kR2FtZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcG90QW1vdW50OiBudW1iZXI7XG4gICAgICAgIHJhbmtTaXplOiBudW1iZXI7XG4gICAgICAgIHJhbmtMaXN0OiBhbnlbXTtcbiAgICAgICAga3F0dFNpemU6IG51bWJlcjtcbiAgICAgICAga3F0dExpc3Q6IGFueVtdO1xuICAgICAgICBib29sZWFuV2luZXJTaXplOiBudW1iZXI7XG4gICAgICAgIGJvb2xlYW5XaW5lckxpc3Q6IGFueVtdO1xuICAgICAgICBtb25leUFycmF5U2l6ZTogbnVtYmVyO1xuICAgICAgICBjdXJyZW50TW9uZXk6IGFueVtdO1xuICAgICAgICBnYW1lTW9uZXk6IGFueVtdO1xuICAgICAgICBnYW1lTW9uZXlTaXplOiBudW1iZXI7XG4gICAgICAgIHB1YmxpY0NhcmRTaXplOiBudW1iZXI7XG4gICAgICAgIHB1YmxpY0NhcmRzOiBhbnlbXTtcbiAgICAgICAgaGFzSW5mb1NpemU6IG51bWJlcjtcbiAgICAgICAgaGFzSW5mb0xpc3Q6IGFueVtdO1xuICAgICAgICBwcml2YXRlQ2FyZExpc3Q6IGFueVtdO1xuICAgICAgICBtYXhDYXJkTGlzdDogYW55W107XG4gICAgICAgIGNhcmROYW1lTGlzdDogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5wb3RBbW91bnQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmFua1NpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnJhbmtMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMucmFua1NpemU7IGErKykgdGhpcy5yYW5rTGlzdC5wdXNoKHRoaXMuZ2V0TG9uZygpKTtcbiAgICAgICAgICAgIHRoaXMua3F0dFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmtxdHRMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5rcXR0U2l6ZTsgYSsrKSB0aGlzLmtxdHRMaXN0LnB1c2godGhpcy5nZXRMb25nKCkpO1xuICAgICAgICAgICAgdGhpcy5ib29sZWFuV2luZXJTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5ib29sZWFuV2luZXJMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5ib29sZWFuV2luZXJTaXplOyBhKyspIHRoaXMuYm9vbGVhbldpbmVyTGlzdC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlBcnJheVNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IFtdO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMubW9uZXlBcnJheVNpemU7IGErKykgdGhpcy5jdXJyZW50TW9uZXkucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVNb25leSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5nYW1lTW9uZXlTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMuZ2FtZU1vbmV5U2l6ZTsgYSsrKSB0aGlzLmdhbWVNb25leS5wdXNoKHRoaXMuZ2V0TG9uZygpKTtcbiAgICAgICAgICAgIHRoaXMucHVibGljQ2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnB1YmxpY0NhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5wdWJsaWNDYXJkU2l6ZTsgYSsrKSB0aGlzLnB1YmxpY0NhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5oYXNJbmZvU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb0xpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmhhc0luZm9TaXplOyBhKyspIHRoaXMuaGFzSW5mb0xpc3QucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnByaXZhdGVDYXJkTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5tYXhDYXJkTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jYXJkTmFtZUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBDb2RlLk1BWF9QTEFZRVI7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBiID0gMCxcbiAgICAgICAgICAgICAgICAgICAgYyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBkID0gW107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSW5mb0xpc3RbYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYiA9IHRoaXMuZ2V0U2hvcnQoKSwgZSA9IDA7IGUgPCBiOyBlKyspIGQucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGIgPSB0aGlzLmdldEJ5dGUoKSwgZiA9IHRoaXMuZ2V0U2hvcnQoKSwgZSA9IDA7IGUgPCBmOyBlKyspIGMucHVzaCh0aGlzLmdldEJ5dGUoKSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgYiA9IDAsIGMgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLm1heENhcmRMaXN0LnB1c2goYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcml2YXRlQ2FyZExpc3QucHVzaChkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmROYW1lTGlzdC5wdXNoKGIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWREb2lDaHVvbmcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNodW9uZ0NoYWlyOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaHVvbmdDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hhdFJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyOiBudW1iZXI7XG4gICAgICAgIGlzSWNvbjogYm9vbGVhbjtcbiAgICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgICBuaWNrbmFtZTogc3RyaW5nO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBkZWNvZGVVUkkodGhpcy5nZXRTdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkR2FtZUluZm8gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIG1heFBsYXllcjogbnVtYmVyO1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBteUNhcmRTaXplOiBudW1iZXI7XG4gICAgICAgIG15Q2FyZHM6IGFueVtdO1xuICAgICAgICBwdWJsaWNDYXJkU2l6ZTogbnVtYmVyO1xuICAgICAgICBwdWJsaWNDYXJkczogYW55W107XG4gICAgICAgIGRlYWxlckNoYWlyOiBudW1iZXI7XG4gICAgICAgIHNtYWxsQmxpbmRDaGFpcjogbnVtYmVyO1xuICAgICAgICBiaWdCbGluZENoYWlyOiBudW1iZXI7XG4gICAgICAgIHBvdEFtb3VudDogbnVtYmVyO1xuICAgICAgICBtYXhCZXQ6IG51bWJlcjtcbiAgICAgICAgcmFpc2VTdGVwOiBudW1iZXI7XG4gICAgICAgIHJvdW5kSWQ6IG51bWJlcjtcbiAgICAgICAgZ2FtZVNlcnZlclN0YXRlOiBudW1iZXI7XG4gICAgICAgIGdhbWVBY3Rpb246IG51bWJlcjtcbiAgICAgICAgY291bnREb3duVGltZTogbnVtYmVyO1xuICAgICAgICBjdXJyZW50QWN0aXZlQ2hhaXI6IG51bWJlcjtcbiAgICAgICAgbW9uZXlUeXBlOiBudW1iZXI7XG4gICAgICAgIGJldDogbnVtYmVyO1xuICAgICAgICBnYW1lSWQ6IG51bWJlcjtcbiAgICAgICAgcm9vbUlkOiBudW1iZXI7XG4gICAgICAgIGhhc0luZm9TaXplOiBudW1iZXI7XG4gICAgICAgIGhhc0luZm9MaXN0OiBhbnlbXTtcbiAgICAgICAgcGxheWVySW5mb0xpc3Q6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWF4UGxheWVyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm15Q2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLm15Q2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5teUNhcmRTaXplOyBhKyspIHRoaXMubXlDYXJkcy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMucHVibGljQ2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnB1YmxpY0NhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5wdWJsaWNDYXJkU2l6ZTsgYSsrKSB0aGlzLnB1YmxpY0NhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5kZWFsZXJDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zbWFsbEJsaW5kQ2hhaXIgPSAgdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmJpZ0JsaW5kQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucG90QW1vdW50ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1heEJldCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yYWlzZVN0ZXAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucm91bmRJZCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lU2VydmVyU3RhdGUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUFjdGlvbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmVDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leVR5cGUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLmhhc0luZm9TaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5oYXNJbmZvTGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMuaGFzSW5mb1NpemU7IGErKykgdGhpcy5oYXNJbmZvTGlzdC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVySW5mb0xpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLm1heFBsYXllcjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSW5mb0xpc3RbYV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgYltcImhhc0ZvbGRcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYltcImhhc0FsbEluXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGJbXCJjdXJyZW50QmV0XCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgICAgIGJbXCJjdXJyZW50TW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYltcInN0YXR1c1wiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBiW1wiYXZhdGFyVXJsXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYltcIm5pY2tOYW1lXCJdID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBiID0ge30sIGJbXCJoYXNGb2xkXCJdID0gMCwgYltcImhhc0FsbEluXCJdID0gMCwgYltcImN1cnJlbnRCZXRcIl0gPSAwLCBiW1wiY3VycmVudE1vbmV5XCJdID0gMCwgYltcInN0YXR1c1wiXSA9IDAsIGJbXCJhdmF0YXJVcmxcIl0gPSBcIlwiLCBiW1wibmlja05hbWVcIl0gPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb0xpc3QucHVzaChiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVGFrZVR1cm4gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGFjdGlvbkNoYWlyOiBudW1iZXI7XG4gICAgICAgIGFjdGlvbjogbnVtYmVyO1xuICAgICAgICBsYXN0UmFpc2U6IG51bWJlcjtcbiAgICAgICAgY3VycmVudEJldDogbnVtYmVyO1xuICAgICAgICBtYXhCZXQ6IG51bWJlcjtcbiAgICAgICAgY3VycmVudE1vbmV5OiBudW1iZXI7XG4gICAgICAgIHJhaXNlU3RlcDogbnVtYmVyO1xuICAgICAgICByYWlzZUJsb2NrOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25DaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubGFzdFJhaXNlID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubWF4QmV0ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yYWlzZVN0ZXAgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmFpc2VCbG9jayA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkU2VsZWN0RGVhbGVyIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBkZWFsZXJDaGFpcjogbnVtYmVyO1xuICAgICAgICBzbWFsbEJsaW5kQ2hhaXI6IG51bWJlcjtcbiAgICAgICAgYmlnQmxpbmRDaGFpcjogbnVtYmVyO1xuICAgICAgICBoYXNJbmZvU2l6ZTogbnVtYmVyO1xuICAgICAgICBoYXNJbmZvTGlzdDogYW55W107XG4gICAgICAgIHBsYXllclN0YXR1c0xpc3Q6IGFueVtdO1xuICAgICAgICBnYW1lSWQ6IG51bWJlcjtcbiAgICAgICAgaXNDaGVhdDogbnVtYmVyO1xuICAgICAgICBjdXJyZW50TW9uZXlTaXplOiBudW1iZXI7XG4gICAgICAgIGN1cnJlbnRNb25leUxpc3Q6IGFueVtdO1xuICAgICAgICBzaXplOiBudW1iZXI7XG4gICAgICAgIGxpc3RCZXRCaWdCbGluZDogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5kZWFsZXJDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zbWFsbEJsaW5kQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuYmlnQmxpbmRDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5oYXNJbmZvU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb0xpc3QgPSBbXTtcbiAgICAgICAgICAgIGNjLmxvZyhcInRoaXMuaGFzSW5mb1NpemU6IFwiICsgdGhpcy5oYXNJbmZvU2l6ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuaGFzSW5mb1NpemU7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBiOiBhbnkgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0luZm9MaXN0LnB1c2goYik7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwiaTogXCIgKyBhICsgXCIgXCIgKyBiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0dXNMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgQ29kZS5NQVhfUExBWUVSOyBhKyspIHRoaXMuaGFzSW5mb0xpc3RbYV0gP1xuICAgICAgICAgICAgICAgIChiID0gdGhpcy5nZXRCeXRlKCksIHRoaXMucGxheWVyU3RhdHVzTGlzdC5wdXNoKGIpLCBjYy5sb2coXCJpOiBcIiArIGEgKyBcIiBcIiArIGIpKSA6IHRoaXMucGxheWVyU3RhdHVzTGlzdC5wdXNoKDApO1xuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5pc0NoZWF0ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leVNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmN1cnJlbnRNb25leVNpemU7IGErKykgdGhpcy5jdXJyZW50TW9uZXlMaXN0LnB1c2godGhpcy5nZXRMb25nKCkpO1xuICAgICAgICAgICAgdGhpcy5zaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5saXN0QmV0QmlnQmxpbmQgPSBbXTtcbiAgICAgICAgICAgIGIgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMuc2l6ZTsgYSsrKSB0aGlzLmxpc3RCZXRCaWdCbGluZC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKSwgYiArPSBcIiBcIiArIHRoaXMubGlzdEJldEJpZ0JsaW5kW2FdO1xuICAgICAgICAgICAgY2MubG9nKFwiQmlnIEJsaW5kIHRoZW06IFwiICsgYilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEJ1eUluIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBidXlJbk1vbmV5OiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5idXlJbk1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGFuZ2VUdXJuIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByb3VuZElkOiBudW1iZXI7XG4gICAgICAgIGNoYWlyOiBudW1iZXI7XG4gICAgICAgIGJldFRpbWU6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJvdW5kSWQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0VGltZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRGVhbENhcmRzIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBzaXplQ2FyZDogbnVtYmVyO1xuICAgICAgICBteUNhcmRzOiBhbnlbXTtcbiAgICAgICAgYm9CYWlJZDogbnVtYmVyO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zaXplQ2FyZCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubXlDYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnNpemVDYXJkOyBhKyspIHRoaXMubXlDYXJkcy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuYm9CYWlJZCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgY2MubG9nKFwiQm8gYmFpIHNlcnZlciB0cmE6IFwiICsgdGhpcy5ib0JhaUlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZE5ld0JldFJvdW5kIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByb3VuZElkOiBudW1iZXI7XG4gICAgICAgIHNpemVDYXJkOiBudW1iZXI7XG4gICAgICAgIHBsdXNDYXJkczogYW55W107XG4gICAgICAgIGNhcmROYW1lOiBudW1iZXI7XG4gICAgICAgIHBvdEFtb3VudDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucm91bmRJZCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5zaXplQ2FyZCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIGNjLmxvZyhcInNpemVDYXJkOiBcIiArIHRoaXMuc2l6ZUNhcmQpO1xuICAgICAgICAgICAgdGhpcy5wbHVzQ2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5zaXplQ2FyZDsgYSsrKSB0aGlzLnBsdXNDYXJkcy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZE5hbWUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucG90QW1vdW50ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRTaG93Q2FyZCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRTdGFuZFVwIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpc1VwOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pc1VwID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVcGRhdGVUaW1lIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEpvaW5Sb29tRmFpbCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19