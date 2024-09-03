
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lieng/LiengScript/Lieng.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92d28q7GaFM778OCwIitQ83', 'Lieng.Cmd');
// Lieng/LiengScript/Lieng.Cmd.ts

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
var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var Configs_1 = require("../../Loading/src/Configs");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
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
            return _super.call(this, data) || this;
            //  cc.log("____");
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
            _this.hasInfoSize = _this.getShort();
            _this.hasInfoList = [];
            for (a = 0; a < _this.hasInfoSize; a++)
                _this.hasInfoList.push(_this.getByte());
            _this.publicCardSize = _this.getShort();
            _this.publicCards = [];
            for (a = 0; a < _this.publicCardSize; a++)
                _this.publicCards.push(_this.getInt());
            _this.privateCardList = [];
            _this.cardNameList = [];
            for (a = 0; a < Code.MAX_PLAYER; a++) {
                var b = 0, c = [];
                if (_this.hasInfoList[a] || _this.publicCards[a]) {
                    for (var b = _this.getShort(), e = 0; e < b; e++)
                        c.push(_this.getByte());
                    b = _this.getByte();
                }
                else
                    b = 0;
                _this.privateCardList.push(c);
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
            for (a = 0; a < Code.MAX_PLAYER; a++) {
                if (_this.hasInfoList[a]) {
                    var b = [];
                    b["hasFold"] = _this.getByte();
                    b["hasAllIn"] = _this.getByte();
                    b["currentBet"] = _this.getLong();
                    b["currentMoney"] = _this.getLong();
                    b["status"] = _this.getByte();
                    b["avatarUrl"] = _this.getString();
                    b["nickName"] = _this.getString();
                }
                else
                    b = [], b["hasFold"] = 0, b["hasAllIn"] = 0, b["currentBet"] = 0, b["currentMoney"] = 0, b["status"] = 0, b["avatarUrl"] = "", b["nickName"] = "";
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
            //cc.log("this.hasInfoSize: " + this.hasInfoSize);
            for (var a = 0; a < _this.hasInfoSize; a++) {
                var b = _this.getByte();
                _this.hasInfoList.push(b);
                //cc.log("i: " + a + " " + b)
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
            return _this;
            //  cc.log("Big Blind them: " + b)
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
            return _this;
            //  cc.log("Bo bai server tra: " + this.boBaiId);
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
            //  cc.log("sizeCard: " + this.sizeCard);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTGllbmdcXExpZW5nU2NyaXB0XFxMaWVuZy5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtGQUFrRjtBQUNsRixxREFBZ0Q7QUFDaEQsNkZBQWdGO0FBRWhGLElBQWlCLEdBQUcsQ0FvMEJuQjtBQXAwQkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBdUZBLENBQUM7UUF0RlUsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1QixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRS9CLDJCQUFzQixHQUFHLENBQUMsQ0FBQztRQUMzQix5QkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLDBCQUFxQixHQUFHLENBQUMsQ0FBQztRQUUxQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFD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Q0wsMkJBQUM7SUFBRCxDQUpBLEFBSUMsQ0FKeUMsMEJBQVEsR0FJakQ7SUFKWSx3QkFBb0IsdUJBSWhDLENBQUE7QUFDTCxDQUFDLEVBcDBCZ0IsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBbzBCbkI7QUFDRCxrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3V0UGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5PdXRQYWNrZXRcIjtcclxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcclxuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xyXG5cclxuZXhwb3J0IG5hbWVzcGFjZSBjbWQge1xyXG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xyXG4gICAgICAgIHN0YXRpYyBMT0dJTiA9IDE7XHJcbiAgICAgICAgc3RhdGljIFRPUFNFUlZFUiA9IDEwMDE7XHJcbiAgICAgICAgc3RhdGljIENNRF9QSU5HUE9ORyA9IDEwNTA7XHJcblxyXG4gICAgICAgIHN0YXRpYyBDTURfSk9JTl9ST09NID0gMzAwMTtcclxuICAgICAgICBzdGF0aWMgQ01EX1JFQ09OTkVDVF9ST09NID0gMzAwMjtcclxuICAgICAgICBzdGF0aWMgTU9ORVlfQkVUX0NPTkZJRyA9IDMwMDM7XHJcbiAgICAgICAgc3RhdGljIEpPSU5fUk9PTV9GQUlMID0gMzAwNDtcclxuICAgICAgICBzdGF0aWMgQ0hBVF9ST09NID0gMzAwODtcclxuXHJcbiAgICAgICAgc3RhdGljIEdFVF9MSVNUX1JPT00gPSAzMDE0O1xyXG4gICAgICAgIHN0YXRpYyBKT0lOX0dBTUVfUk9PTV9CWV9JRCA9IDMwMTU7XHJcblxyXG4gICAgICAgIHN0YXRpYyBNT0lfREFUX0NVT0MgPSAzMTE0O1xyXG4gICAgICAgIHN0YXRpYyBVUERBVEVfT1dORVJfUk9PTSA9IDMxMTc7XHJcbiAgICAgICAgc3RhdGljIE5PVElGWV9VU0VSX0dFVF9KQUNLUE9UID0gMzEyMjtcclxuXHJcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfT1VUX0dBTUUgPSAwO1xyXG4gICAgICAgIHN0YXRpYyBQTEFZRVJfU1RBVFVTX1ZJRVdFUiA9IDE7XHJcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfU0lUVElORyA9IDI7XHJcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfUExBWUlORyA9IDM7XHJcbiAgICBcclxuICAgICAgICBzdGF0aWMgU0VMRUNUX0RFQUxFUiA9IDMxMDA7XHJcbiAgICAgICAgc3RhdGljIFRBS0VfVFVSTiA9IDMxMDE7XHJcbiAgICAgICAgc3RhdGljIEJVWV9JTiA9IDMxMDI7XHJcbiAgICAgICAgc3RhdGljIEtFVF9USFVDID0gMzEwMztcclxuICAgICAgICBzdGF0aWMgQ0hBTkdFX1RVUk4gPSAzMTA0O1xyXG4gICAgICAgIHN0YXRpYyBORVdfUk9VTkQgPSAzMTA1O1xyXG4gICAgICAgIHN0YXRpYyBERUFMX1BSSVZBVEVfQ0FSRCA9IDMxMDY7XHJcbiAgICAgICAgc3RhdGljIFRVX0RPTkdfQkFUX0RBVSA9IDMxMDc7XHJcbiAgICAgICAgc3RhdGljIFNIT1dfQ0FSRCA9IDMxMDg7XHJcbiAgICAgICAgc3RhdGljIFJFUVVFU1RfQlVZX0lOID0gMzEwOTtcclxuICAgICAgICBzdGF0aWMgVEhPTkdfVElOX0JBTl9DSE9JID0gMzExMDtcclxuICAgICAgICBzdGF0aWMgREFOR19LWV9USE9BVF9QSE9ORyA9IDMxMTE7XHJcbiAgICAgICAgc3RhdGljIFJFUVVFU1RfU1RBTkRfVVAgPSAzMTEzO1xyXG4gICAgICAgIHN0YXRpYyBDSEVBVF9DQVJEUyA9IDMxMTU7XHJcbiAgICAgICAgc3RhdGljIERBTkdfS1lfQ0hPSV9USUVQID0gMzExNjtcclxuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX1NVQ0NFU1MgPSAzMTE4O1xyXG4gICAgICAgIHN0YXRpYyBMRUFWRV9HQU1FID0gMzExOTtcclxuICAgICAgICBzdGF0aWMgTk9USUZZX0tJQ0tfRlJPTV9ST09NID0gMzEyMDtcclxuICAgICAgICBzdGF0aWMgTkVXX1VTRVJfSk9JTiA9IDMxMjE7XHJcbiAgICAgICAgc3RhdGljIFVQREFURV9NQVRDSCA9IDMxMjM7XHJcblxyXG4gICAgICAgIHN0YXRpYyBSRVFVRVNUX0lORk9fVE9VUiA9IDM5OTA7XHJcbiAgICAgICAgc3RhdGljIFVQREFURV9USU1FID0gMzk5MTtcclxuXHJcbiAgICAgICAgc3RhdGljIE1BWF9QTEFZRVIgPSA5O1xyXG4gICAgICAgIHN0YXRpYyBNQVhfQlVZX0lOID0gMjUwO1xyXG5cclxuICAgICAgICAvLyBHYW1lIEFjdGlvblxyXG4gICAgICAgIHN0YXRpYyBHQU1FX0FDVElPTl9GT0xEID0gMDtcclxuICAgICAgICBzdGF0aWMgR0FNRV9BQ1RJT05fQ0hFQ0sgPSAxO1xyXG4gICAgICAgIHN0YXRpYyBHQU1FX0FDVElPTl9DQUxMID0gMjtcclxuICAgICAgICBzdGF0aWMgR0FNRV9BQ1RJT05fUkFJU0UgPSAzO1xyXG4gICAgICAgIHN0YXRpYyBHQU1FX0FDVElPTl9BTExfSU4gPSA0O1xyXG5cclxuICAgICAgICAvLyBDYXJkc1xyXG4gICAgICAgIHN0YXRpYyBFR19TQU5IX1ZVQSA9IDA7XHJcbiAgICAgICAgc3RhdGljIEVHX1RIVU5HX1BIQV9TQU5IID0gMTtcclxuICAgICAgICBzdGF0aWMgRUdfVFVfUVVZID0gMjtcclxuICAgICAgICBzdGF0aWMgRUdfQ1VfTFUgPSAzO1xyXG4gICAgICAgIHN0YXRpYyBFR19USFVORyA9IDQ7XHJcbiAgICAgICAgc3RhdGljIEVHX1NBTkggPSA1O1xyXG4gICAgICAgIHN0YXRpYyBFR19YQU1fQ08gPSA2O1xyXG4gICAgICAgIHN0YXRpYyBFR19IQUlfRE9JID0gNztcclxuICAgICAgICBzdGF0aWMgRUdfRE9JID0gODtcclxuICAgICAgICBzdGF0aWMgRUdfTUFVX1RIQVUgPSA5O1xyXG4gICAgICAgIHN0YXRpYyBFR19TRVJWRVJfTkdVID0gMTA7XHJcblxyXG4gICAgICAgIC8vIEdhbWVTdGF0ZVxyXG4gICAgICAgIHN0YXRpYyBTVEFURV9DSElBX0JBSSA9IDE7XHJcbiAgICAgICAgc3RhdGljIFNUQVRFX0pPSU5fUk9PTSA9IDI7XHJcbiAgICAgICAgc3RhdGljIFNUQVRFX0VORF9HQU1FID0gMztcclxuICAgICAgICBzdGF0aWMgU1RBVEVfTkVXX1VTRVJfSk9JTl9ST09NID0gNTtcclxuICAgICAgICBzdGF0aWMgU1RBVEVfVVNFUl9MRUFWRV9ST09NID0gNjtcclxuICAgICAgICBzdGF0aWMgU1RBVEVfREVBTF9DQVJEID0gNztcclxuICAgICAgICBzdGF0aWMgU1RBVEVfU0VMRUNUX0RFQUxFUiA9IDg7XHJcbiAgICAgICAgc3RhdGljIFNUQVRFX0NIQU5HRV9UVVJOID0gOTtcclxuICAgICAgICBzdGF0aWMgU1RBVEVfTkVXX0JFVF9ST1VORCA9IDEwO1xyXG4gICAgICAgIHN0YXRpYyBTVEFURV9OT1RJRllfT1VUX1JPT00gPSAxMTtcclxuICAgICAgICBzdGF0aWMgU1RBVEVfQlVZX0lOID0gMTI7XHJcbiAgICAgICAgc3RhdGljIFNUQVRFX1VQREFURV9NQVRDSCA9IDEzO1xyXG4gICAgICAgIHN0YXRpYyBTVEFURV9HQU1FX0lORk8gPSAxNDtcclxuICAgICAgICBzdGF0aWMgU1RBVEVfU0hPV19DQVJEID0gMTU7XHJcbiAgICAgICAgc3RhdGljIFNUQVRFX05PVElGWV9CVVlfSU4gPSAxNjtcclxuICAgICAgICBzdGF0aWMgU1RBVEVfU1RBTkRfVVAgPSAxNztcclxuICAgIH1cclxuXHJcbiAgICAvLyBPdXRQYWNrZXRcclxuICAgIGV4cG9ydCBjbGFzcyBDbWRMb2dpbiBleHRlbmRzIE91dFBhY2tldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkxPR0lOKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGEpOyAvLyBuaWNrbmFtZVxyXG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhiKTsgLy8gYWNjZXNzVG9rZW5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDbWRKb2luUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ01EX0pPSU5fUk9PTSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dEludChhKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYik7XHJcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhjKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoMCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ21kUmVjb25uZWN0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DTURfUkVDT05ORUNUX1JPT00pO1xyXG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDbWRTZW5kUmVxdWVzdExlYXZlR2FtZSBleHRlbmRzIE91dFBhY2tldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5EQU5HX0tZX1RIT0FUX1BIT05HKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ21kU2VuZEhvbGRSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRBTkdfS1lfQ0hPSV9USUVQKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldEdhbWVDb25maWcgZXh0ZW5kcyBPdXRQYWNrZXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuTU9ORVlfQkVUX0NPTkZJRyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRHZXRUb3BTZXJ2ZXIgZXh0ZW5kcyBPdXRQYWNrZXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuVE9QU0VSVkVSKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2FyZENoZWF0IGV4dGVuZHMgT3V0UGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IFtdKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEVBVF9DQVJEUyk7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZSgwKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChiLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmIChhKVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBiLmxlbmd0aDsgYysrKSB0aGlzLnB1dEJ5dGUoYltjXSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ21kU2VuZFBpbmcgZXh0ZW5kcyBPdXRQYWNrZXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ01EX1BJTkdQT05HKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldExpc3RSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkdFVF9MSVNUX1JPT00pO1xyXG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7Ly9tb25leSB0eXBlXHJcbiAgICAgICAgICAgIHRoaXMucHV0SW50KENvZGUuTUFYX1BMQVlFUik7Ly9tYXhwbGF5ZXJcclxuICAgICAgICAgICAgdGhpcy5wdXRMb25nKC0xKTsvL2tob25nIHhhYyBkaW5oXHJcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8va2hvbmcgeGFjIGRpbmhcclxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoMCk7Ly9DQVJEX0ZST01cclxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoNTApOy8vQ0FSRF9UT1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRKb2luUm9vbUJ5SWQgZXh0ZW5kcyBPdXRQYWNrZXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkpPSU5fR0FNRV9ST09NX0JZX0lEKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0SW50KGlkKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoXCJcIik7Ly9tYXQga2hhdVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGF0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNIQVRfUk9PTSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSA/IDEgOiAwKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoZW5jb2RlVVJJKGIpKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBuZXcgT3V0UGFja2V0XHJcbiAgICBleHBvcnQgY2xhc3MgU2VuZFRha2VUdXJuIGV4dGVuZHMgT3V0UGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIsIGU6IG51bWJlcikge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuVEFLRV9UVVJOKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGIpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoZCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShjKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKCExKTtcclxuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRCdXlJbiBleHRlbmRzIE91dFBhY2tldCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkJVWV9JTik7XHJcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoYSk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShiKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU2hvd0NhcmQgZXh0ZW5kcyBPdXRQYWNrZXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0hPV19DQVJEKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldEluZm9Ub3VyIGV4dGVuZHMgT3V0UGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlJFUVVFU1RfSU5GT19UT1VSKTtcclxuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlbmREdW5nRGF5IGV4dGVuZHMgT3V0UGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlJFUVVFU1RfU1RBTkRfVVApO1xyXG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEluUGFja2V0XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRMb2dpbiBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiX19fX1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkR2V0TGlzdFJvb20gZXh0ZW5kcyBJblBhY2tldCB7XHJcbiAgICAgICAgbGlzdDogYW55W10gPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgbGV0IGxpc3RTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0U2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogYW55ID0ge307XHJcbiAgICAgICAgICAgICAgICBpdGVtW1wiaWRcIl0gPSB0aGlzLmdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtcInVzZXJDb3VudFwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtcImxpbWl0UGxheWVyXCJdID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtW1wibWF4VXNlclBlclJvb21cIl0gPSB0aGlzLmdldEludCgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtcIm1vbmV5VHlwZVwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtcIm1vbmV5QmV0XCJdID0gdGhpcy5nZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1bXCJyZXF1aXJlZE1vbmV5XCJdID0gdGhpcy5nZXRJbnQoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1bXCJydWxlXCJdID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtW1wibmFtZVJvb21cIl0gPSB0aGlzLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtcImtleVwiXSA9IHRoaXMuZ2V0Qm9vbCgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbVtcInF1eWJhblwiXSA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goaXRlbSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBlZGl0ZWRcclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEpvaW5Sb29tU3VjY2VlZCBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBteUNoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgY2h1b25nQ2hhaXI6IG51bWJlcjtcclxuICAgICAgICBtb25leUJldDogbnVtYmVyO1xyXG4gICAgICAgIHJvb21JZDogbnVtYmVyO1xyXG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xyXG4gICAgICAgIG1vbmV5VHlwZTogbnVtYmVyO1xyXG4gICAgICAgIHJ1bGU6IG51bWJlcjtcclxuICAgICAgICBwbGF5ZXJTaXplOiBudW1iZXI7XHJcbiAgICAgICAgcGxheWVyU3RhdHVzOiBhbnlbXTtcclxuICAgICAgICBwbGF5ZXJJbmZvczogYW55W107XHJcbiAgICAgICAgZ2FtZUFjdGlvbjogbnVtYmVyO1xyXG4gICAgICAgIGNvdW50RG93blRpbWU6IG51bWJlcjtcclxuICAgICAgICByb29tT3duZXI6IG51bWJlcjtcclxuICAgICAgICBoYW5kQ2FyZFNpemVTaXplOiBudW1iZXI7XHJcbiAgICAgICAgaGFuZENhcmRTaXplTGlzdDogYW55W107XHJcbiAgICAgICAgY3VycmVudEFjdGlvbkNoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgbWluQnV5SW5UaUxlOiBudW1iZXI7XHJcbiAgICAgICAgbWF4QnV5SW5UaUxlOiBudW1iZXI7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5QmV0ID0gdGhpcy5nZXRMb25nKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbU93bmVyID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRJbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldEludCgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5VHlwZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJ1bGUgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMucGxheWVyU2l6ZTsgYSsrKSB0aGlzLnBsYXllclN0YXR1cy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XHJcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLnBsYXllclNpemU7IGErKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSB7fTtcclxuICAgICAgICAgICAgICAgIGJbXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgYltcIm5pY2tOYW1lXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGJbXCJjdXJyZW50TW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb3MucHVzaChiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUFjdGlvbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRDYXJkU2l6ZVNpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZENhcmRTaXplTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5oYW5kQ2FyZFNpemVTaXplOyBhKyspIHRoaXMuaGFuZENhcmRTaXplTGlzdC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aW9uQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWluQnV5SW5UaUxlID0gdGhpcy5nZXRJbnQoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhCdXlJblRpTGUgPSB0aGlzLmdldEludCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEF1dG9TdGFydCBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBpc0F1dG9TdGFydDogYm9vbGVhbjtcclxuICAgICAgICB0aW1lQXV0b1N0YXJ0OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5pc0F1dG9TdGFydCA9IHRoaXMuZ2V0Qm9vbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVBdXRvU3RhcnQgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGlhQmFpIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGNhcmRTaXplOiBudW1iZXI7XHJcbiAgICAgICAgY2FyZHM6IGFueVtdO1xyXG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xyXG4gICAgICAgIHRpbWVDaGlhQmFpOiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdmFyIGEgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ2hpYUJhaSA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBuZXdcclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFVzZXJMZWF2ZVJvb20gZXh0ZW5kcyBJblBhY2tldCB7XHJcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcclxuICAgICAgICBuaWNrTmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5uaWNrTmFtZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG5ld1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXNlckpvaW5Sb29tIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGluZm86IHt9O1xyXG4gICAgICAgIHVDaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIHVTdGF0dXM6IG51bWJlcjtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmluZm8gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvW1wibmlja05hbWVcIl0gPSB0aGlzLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9bXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmluZm9bXCJtb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICB0aGlzLnVDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVTdGF0dXMgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG5ld1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXBkYXRlTWF0Y2ggZXh0ZW5kcyBJblBhY2tldCB7XHJcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcclxuICAgICAgICBoYXNJbmZvU2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIGhhc0luZm9MaXN0OiBhbnlbXTtcclxuICAgICAgICBjdXJyZW50TW9uZXlMaXN0OiBhbnlbXTtcclxuICAgICAgICBzdGF0dXNMaXN0OiBhbnlbXTtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb1NpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmhhc0luZm9TaXplOyBhKyspIHRoaXMuaGFzSW5mb0xpc3QucHVzaCh0aGlzLmdldEJ5dGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSB0aGlzLmhhc0luZm9MaXN0W2FdID8gKHRoaXMuY3VycmVudE1vbmV5TGlzdC5wdXNoKHRoaXMuZ2V0TG9uZygpKSwgdGhpcy5zdGF0dXNMaXN0LnB1c2godGhpcy5nZXRJbnQoKSkpIDogKHRoaXMuY3VycmVudE1vbmV5TGlzdC5wdXNoKDApLCB0aGlzLnN0YXR1c0xpc3QucHVzaCgwKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWROb3RpZnlSZWdPdXRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIG91dENoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgaXNPdXRSb29tOiBib29sZWFuO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5pc091dFJvb20gPSB0aGlzLmdldEJvb2woKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRLaWNrT2ZmIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIHJlYXNvbjogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVhc29uID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG5ld1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTW9pRGF0Q3VvYyBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICB0aW1lRGF0Q3VvYzogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZURhdEN1b2MgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG5ld1xyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRGF0Q3VvYyBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjaGFpckRhdEN1b2M6IG51bWJlcjtcclxuICAgICAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhaXJEYXRDdW9jID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRNb0JhaSBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjaGFpck1vQmFpOiBudW1iZXI7XHJcbiAgICAgICAgY2FyZFNpemU6IG51bWJlcjtcclxuICAgICAgICBjYXJkczogYW55W107XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFpck1vQmFpID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRFbmRHYW1lIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIHBvdEFtb3VudDogbnVtYmVyO1xyXG4gICAgICAgIHJhbmtTaXplOiBudW1iZXI7XHJcbiAgICAgICAgcmFua0xpc3Q6IGFueVtdO1xyXG4gICAgICAgIGtxdHRTaXplOiBudW1iZXI7XHJcbiAgICAgICAga3F0dExpc3Q6IGFueVtdO1xyXG4gICAgICAgIGJvb2xlYW5XaW5lclNpemU6IG51bWJlcjtcclxuICAgICAgICBib29sZWFuV2luZXJMaXN0OiBhbnlbXTtcclxuICAgICAgICBtb25leUFycmF5U2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIGN1cnJlbnRNb25leTogYW55W107XHJcbiAgICAgICAgZ2FtZU1vbmV5OiBhbnlbXTtcclxuICAgICAgICBnYW1lTW9uZXlTaXplOiBudW1iZXI7XHJcbiAgICAgICAgcHVibGljQ2FyZFNpemU6IG51bWJlcjtcclxuICAgICAgICBwdWJsaWNDYXJkczogYW55W107XHJcbiAgICAgICAgaGFzSW5mb1NpemU6IG51bWJlcjtcclxuICAgICAgICBoYXNJbmZvTGlzdDogYW55W107XHJcbiAgICAgICAgcHJpdmF0ZUNhcmRMaXN0OiBhbnlbXTtcclxuICAgICAgICBtYXhDYXJkTGlzdDogYW55W107XHJcbiAgICAgICAgY2FyZE5hbWVMaXN0OiBhbnlbXTtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLnBvdEFtb3VudCA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmtTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmtMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5yYW5rU2l6ZTsgYSsrKSB0aGlzLnJhbmtMaXN0LnB1c2godGhpcy5nZXRMb25nKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmtxdHRTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmtxdHRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmtxdHRTaXplOyBhKyspIHRoaXMua3F0dExpc3QucHVzaCh0aGlzLmdldExvbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9vbGVhbldpbmVyU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5ib29sZWFuV2luZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLmJvb2xlYW5XaW5lclNpemU7IGErKykgdGhpcy5ib29sZWFuV2luZXJMaXN0LnB1c2godGhpcy5nZXRCeXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbmV5QXJyYXlTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5tb25leUFycmF5U2l6ZTsgYSsrKSB0aGlzLmN1cnJlbnRNb25leS5wdXNoKHRoaXMuZ2V0TG9uZygpKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTW9uZXkgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lTW9uZXlTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5nYW1lTW9uZXlTaXplOyBhKyspIHRoaXMuZ2FtZU1vbmV5LnB1c2godGhpcy5nZXRMb25nKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5oYXNJbmZvU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNJbmZvTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5oYXNJbmZvU2l6ZTsgYSsrKSB0aGlzLmhhc0luZm9MaXN0LnB1c2godGhpcy5nZXRCeXRlKCkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wdWJsaWNDYXJkU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5wdWJsaWNDYXJkcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5wdWJsaWNDYXJkU2l6ZTsgYSsrKSB0aGlzLnB1YmxpY0NhcmRzLnB1c2godGhpcy5nZXRJbnQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpdmF0ZUNhcmRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZE5hbWVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBDb2RlLk1BWF9QTEFZRVI7IGErKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGIgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0luZm9MaXN0W2FdIHx8IHRoaXMucHVibGljQ2FyZHNbYV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gdGhpcy5nZXRTaG9ydCgpLCBlID0gMDsgZSA8IGI7IGUrKykgYy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBiID0gdGhpcy5nZXRCeXRlKClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBiID0gMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcml2YXRlQ2FyZExpc3QucHVzaChjKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FyZE5hbWVMaXN0LnB1c2goYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBuZXdcclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZERvaUNodW9uZyBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjaHVvbmdDaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2h1b25nQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRDaGF0Um9vbSBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIGlzSWNvbjogYm9vbGVhbjtcclxuICAgICAgICBjb250ZW50OiBzdHJpbmc7XHJcbiAgICAgICAgbmlja25hbWU6IHN0cmluZztcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gdGhpcy5nZXRCb29sKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IGRlY29kZVVSSSh0aGlzLmdldFN0cmluZygpKTtcclxuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmV3XHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRHYW1lSW5mbyBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBtYXhQbGF5ZXI6IHN0cmluZztcclxuICAgICAgICBjaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIG15Q2FyZFNpemU6IG51bWJlcjtcclxuICAgICAgICBteUNhcmRzOiBhbnlbXTtcclxuICAgICAgICBwdWJsaWNDYXJkU2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIHB1YmxpY0NhcmRzOiBhbnlbXTtcclxuICAgICAgICBkZWFsZXJDaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIHNtYWxsQmxpbmRDaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIGJpZ0JsaW5kQ2hhaXI6IG51bWJlcjtcclxuICAgICAgICBwb3RBbW91bnQ6IG51bWJlcjtcclxuICAgICAgICBtYXhCZXQ6IG51bWJlcjtcclxuICAgICAgICByYWlzZVN0ZXA6IG51bWJlcjtcclxuICAgICAgICByb3VuZElkOiBudW1iZXI7XHJcbiAgICAgICAgZ2FtZVNlcnZlclN0YXRlOiBudW1iZXI7XHJcbiAgICAgICAgZ2FtZUFjdGlvbjogbnVtYmVyO1xyXG4gICAgICAgIGNvdW50RG93blRpbWU6IG51bWJlcjtcclxuICAgICAgICBjdXJyZW50QWN0aXZlQ2hhaXI6IG51bWJlcjtcclxuICAgICAgICBtb25leVR5cGU6IG51bWJlcjtcclxuICAgICAgICBiZXQ6IG51bWJlcjtcclxuICAgICAgICBnYW1lSWQ6IG51bWJlcjtcclxuICAgICAgICByb29tSWQ6IG51bWJlcjtcclxuICAgICAgICBoYXNJbmZvU2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIGhhc0luZm9MaXN0OiBhbnlbXTtcclxuICAgICAgICBwbGF5ZXJJbmZvTGlzdDogYW55W107XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm15Q2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubXlDYXJkcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMubXlDYXJkU2l6ZTsgYSsrKSB0aGlzLm15Q2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XHJcbiAgICAgICAgICAgIHRoaXMucHVibGljQ2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMucHVibGljQ2FyZHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMucHVibGljQ2FyZFNpemU7IGErKykgdGhpcy5wdWJsaWNDYXJkcy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5kZWFsZXJDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNtYWxsQmxpbmRDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJpZ0JsaW5kQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3RBbW91bnQgPSB0aGlzLmdldExvbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhCZXQgPSB0aGlzLmdldExvbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZVN0ZXAgPSB0aGlzLmdldExvbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZElkID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZVNlcnZlclN0YXRlID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUFjdGlvbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5tb25leVR5cGUgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5iZXQgPSB0aGlzLmdldExvbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldEludCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IHRoaXMuZ2V0SW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb1NpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzSW5mb0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMuaGFzSW5mb1NpemU7IGErKykgdGhpcy5oYXNJbmZvTGlzdC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbmZvTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgQ29kZS5NQVhfUExBWUVSOyBhKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0luZm9MaXN0W2FdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBiW1wiaGFzRm9sZFwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJbXCJoYXNBbGxJblwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJbXCJjdXJyZW50QmV0XCJdID0gdGhpcy5nZXRMb25nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYltcImN1cnJlbnRNb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJbXCJzdGF0dXNcIl0gPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBiW1wiYXZhdGFyVXJsXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBiW1wibmlja05hbWVcIl0gPSB0aGlzLmdldFN0cmluZygpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgYiA9IFtdLCBiW1wiaGFzRm9sZFwiXSA9IDAsIGJbXCJoYXNBbGxJblwiXSA9IDAsIGJbXCJjdXJyZW50QmV0XCJdID0gMCwgYltcImN1cnJlbnRNb25leVwiXSA9IDAsIGJbXCJzdGF0dXNcIl0gPSAwLCBiW1wiYXZhdGFyVXJsXCJdID0gXCJcIiwgYltcIm5pY2tOYW1lXCJdID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb0xpc3QucHVzaChiKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFRha2VUdXJuIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGFjdGlvbkNoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgYWN0aW9uOiBudW1iZXI7XHJcbiAgICAgICAgbGFzdFJhaXNlOiBudW1iZXI7XHJcbiAgICAgICAgY3VycmVudEJldDogbnVtYmVyO1xyXG4gICAgICAgIG1heEJldDogbnVtYmVyO1xyXG4gICAgICAgIGN1cnJlbnRNb25leTogbnVtYmVyO1xyXG4gICAgICAgIHJhaXNlU3RlcDogbnVtYmVyO1xyXG4gICAgICAgIHJhaXNlQmxvY2s6IG51bWJlcjtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFJhaXNlID0gdGhpcy5nZXRMb25nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldCA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICB0aGlzLm1heEJldCA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlU3RlcCA9IHRoaXMuZ2V0TG9uZygpO1xyXG4gICAgICAgICAgICB0aGlzLnJhaXNlQmxvY2sgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkU2VsZWN0RGVhbGVyIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGRlYWxlckNoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgc21hbGxCbGluZENoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgYmlnQmxpbmRDaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIGhhc0luZm9TaXplOiBudW1iZXI7XHJcbiAgICAgICAgaGFzSW5mb0xpc3Q6IGFueVtdO1xyXG4gICAgICAgIHBsYXllclN0YXR1c0xpc3Q6IGFueVtdO1xyXG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xyXG4gICAgICAgIGlzQ2hlYXQ6IG51bWJlcjtcclxuICAgICAgICBjdXJyZW50TW9uZXlTaXplOiBudW1iZXI7XHJcbiAgICAgICAgY3VycmVudE1vbmV5TGlzdDogYW55W107XHJcbiAgICAgICAgc2l6ZTogbnVtYmVyO1xyXG4gICAgICAgIGxpc3RCZXRCaWdCbGluZDogYW55W107XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5kZWFsZXJDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNtYWxsQmxpbmRDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJpZ0JsaW5kQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNJbmZvU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcclxuICAgICAgICAgICAgdGhpcy5oYXNJbmZvTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcInRoaXMuaGFzSW5mb1NpemU6IFwiICsgdGhpcy5oYXNJbmZvU2l6ZSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5oYXNJbmZvU2l6ZTsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYjogYW55ID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0luZm9MaXN0LnB1c2goYik7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcImk6IFwiICsgYSArIFwiIFwiICsgYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllclN0YXR1c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSB0aGlzLmhhc0luZm9MaXN0W2FdID9cclxuICAgICAgICAgICAgICAgIChiID0gdGhpcy5nZXRCeXRlKCksIHRoaXMucGxheWVyU3RhdHVzTGlzdC5wdXNoKGIpLCBjYy5sb2coXCJpOiBcIiArIGEgKyBcIiBcIiArIGIpKSA6IHRoaXMucGxheWVyU3RhdHVzTGlzdC5wdXNoKDApO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0SW50KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDaGVhdCA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leVNpemUgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5TGlzdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5jdXJyZW50TW9uZXlTaXplOyBhKyspIHRoaXMuY3VycmVudE1vbmV5TGlzdC5wdXNoKHRoaXMuZ2V0TG9uZygpKTtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gdGhpcy5nZXRTaG9ydCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RCZXRCaWdCbGluZCA9IFtdO1xyXG4gICAgICAgICAgICBiID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMuc2l6ZTsgYSsrKSB0aGlzLmxpc3RCZXRCaWdCbGluZC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKSwgYiArPSBcIiBcIiArIHRoaXMubGlzdEJldEJpZ0JsaW5kW2FdO1xyXG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiQmlnIEJsaW5kIHRoZW06IFwiICsgYilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQnV5SW4gZXh0ZW5kcyBJblBhY2tldCB7XHJcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcclxuICAgICAgICBidXlJbk1vbmV5OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJ1eUluTW9uZXkgPSB0aGlzLmdldExvbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hhbmdlVHVybiBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICByb3VuZElkOiBudW1iZXI7XHJcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcclxuICAgICAgICBiZXRUaW1lOiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZElkID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICAgICAgdGhpcy5iZXRUaW1lID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZERlYWxDYXJkcyBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIHNpemVDYXJkOiBudW1iZXI7XHJcbiAgICAgICAgbXlDYXJkczogYW55W107XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9CYWlJZDogbnVtYmVyO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZUNhcmQgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubXlDYXJkcyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuc2l6ZUNhcmQ7IGErKykgdGhpcy5teUNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ib0JhaUlkID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCbyBiYWkgc2VydmVyIHRyYTogXCIgKyB0aGlzLmJvQmFpSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWROZXdCZXRSb3VuZCBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICByb3VuZElkOiBudW1iZXI7XHJcbiAgICAgICAgc2l6ZUNhcmQ6IG51bWJlcjtcclxuICAgICAgICBwbHVzQ2FyZHM6IGFueVtdO1xyXG4gICAgICAgIGNhcmROYW1lOiBudW1iZXI7XHJcbiAgICAgICAgcG90QW1vdW50OiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZElkID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZUNhcmQgPSB0aGlzLmdldFNob3J0KCk7XHJcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJzaXplQ2FyZDogXCIgKyB0aGlzLnNpemVDYXJkKTtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQ2FyZHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLnNpemVDYXJkOyBhKyspIHRoaXMucGx1c0NhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmROYW1lID0gdGhpcy5nZXRCeXRlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG90QW1vdW50ID0gdGhpcy5nZXRMb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFNob3dDYXJkIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGNoYWlyOiBudW1iZXI7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xyXG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRTdGFuZFVwIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGlzVXA6IG51bWJlcjtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmlzVXAgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXBkYXRlVGltZSBleHRlbmRzIEluUGFja2V0IHtcclxuICAgICAgICBjaGFpcjogbnVtYmVyO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkSm9pblJvb21GYWlsIGV4dGVuZHMgSW5QYWNrZXQge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNtZDsiXX0=