"use strict";
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