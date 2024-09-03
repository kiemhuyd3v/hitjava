"use strict";
cc._RF.push(module, '620d7luvxtKga1ndG6kqqBK', 'BaCay.Cmd');
// BaCay/BaCayScript/BaCay.Cmd.ts

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
        Code.CREATE_ROOM = 3013;
        Code.GET_LIST_ROOM = 3014;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.MO_BAI = 3101;
        Code.BAT_DAU = 3102;
        Code.KET_THUC = 3103;
        Code.YEU_CAU_DANH_BIEN = 3104;
        Code.CHIA_BAI = 3105;
        Code.KE_CUA = 3106;
        Code.TU_DONG_BAT_DAU = 3107;
        Code.DONG_Y_DANH_BIEN = 3108;
        Code.DAT_CUOC = 3109;
        Code.THONG_TIN_BAN_CHOI = 3110;
        Code.DANG_KY_THOAT_PHONG = 3111;
        Code.VAO_GA = 3112;
        Code.DOI_CHUONG = 3113;
        Code.MOI_DAT_CUOC = 3114;
        Code.CHEAT_CARDS = 3115;
        Code.DANG_KY_CHOI_TIEP = 3116;
        Code.UPDATE_OWNER_ROOM = 3117;
        Code.JOIN_ROOM_SUCCESS = 3118;
        Code.LEAVE_GAME = 3119;
        Code.NOTIFY_KICK_FROM_ROOM = 3120;
        Code.NEW_USER_JOIN = 3121;
        Code.NOTIFY_USER_GET_JACKPOT = 3122;
        Code.UPDATE_MATCH = 3123;
        Code.PLAYER_STATUS_OUT_GAME = 0;
        Code.PLAYER_STATUS_VIEWER = 1;
        Code.PLAYER_STATUS_SITTING = 2;
        Code.PLAYER_STATUS_PLAYING = 3;
        Code.LOGOUT = 2;
        Code.MAX_PLAYER = 8;
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
    var SendVaoGa = /** @class */ (function (_super) {
        __extends(SendVaoGa, _super);
        function SendVaoGa() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.VAO_GA);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendVaoGa;
    }(Network_OutPacket_1.default));
    cmd.SendVaoGa = SendVaoGa;
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
    var SendCreateRoom = /** @class */ (function (_super) {
        __extends(SendCreateRoom, _super);
        function SendCreateRoom(a, b, c, d, e, f, g, h) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CREATE_ROOM);
            _this.packHeader();
            _this.putInt(a);
            _this.putInt(b);
            _this.putLong(c);
            _this.putInt(d);
            _this.putInt(e);
            _this.putString(f);
            _this.putString(g);
            _this.putLong(h);
            _this.updateSize();
            return _this;
        }
        return SendCreateRoom;
    }(Network_OutPacket_1.default));
    cmd.SendCreateRoom = SendCreateRoom;
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
    var CmdSendDatCuoc = /** @class */ (function (_super) {
        __extends(CmdSendDatCuoc, _super);
        function CmdSendDatCuoc(a) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DAT_CUOC);
            _this.packHeader();
            _this.putByte(a);
            _this.updateSize();
            return _this;
        }
        return CmdSendDatCuoc;
    }(Network_OutPacket_1.default));
    cmd.CmdSendDatCuoc = CmdSendDatCuoc;
    var CmdSendDanhBien = /** @class */ (function (_super) {
        __extends(CmdSendDanhBien, _super);
        function CmdSendDanhBien(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.YEU_CAU_DANH_BIEN);
            _this.packHeader();
            _this.putByte(a);
            _this.putByte(b);
            _this.updateSize();
            return _this;
        }
        return CmdSendDanhBien;
    }(Network_OutPacket_1.default));
    cmd.CmdSendDanhBien = CmdSendDanhBien;
    var CmdSendKeCua = /** @class */ (function (_super) {
        __extends(CmdSendKeCua, _super);
        function CmdSendKeCua(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.KE_CUA);
            _this.packHeader();
            _this.putByte(a);
            _this.putByte(b);
            _this.updateSize();
            return _this;
        }
        return CmdSendKeCua;
    }(Network_OutPacket_1.default));
    cmd.CmdSendKeCua = CmdSendKeCua;
    var CmdSendAcceptDanhBien = /** @class */ (function (_super) {
        __extends(CmdSendAcceptDanhBien, _super);
        function CmdSendAcceptDanhBien(a) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DONG_Y_DANH_BIEN);
            _this.packHeader();
            _this.putByte(a); // pos
            _this.updateSize();
            return _this;
        }
        return CmdSendAcceptDanhBien;
    }(Network_OutPacket_1.default));
    cmd.CmdSendAcceptDanhBien = CmdSendAcceptDanhBien;
    var CmdSendMoBai = /** @class */ (function (_super) {
        __extends(CmdSendMoBai, _super);
        function CmdSendMoBai() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.MO_BAI);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return CmdSendMoBai;
    }(Network_OutPacket_1.default));
    cmd.CmdSendMoBai = CmdSendMoBai;
    var CmdSendPing = /** @class */ (function (_super) {
        __extends(CmdSendPing, _super);
        function CmdSendPing(a) {
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
    // old Xoc Dia
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
    // InPacket
    var ReceivedLogin = /** @class */ (function (_super) {
        __extends(ReceivedLogin, _super);
        function ReceivedLogin(data) {
            return _super.call(this, data) || this;
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
            var a;
            _this.myChair = _this.getByte();
            _this.chuongChair = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.roomId = _this.getInt();
            _this.gameId = _this.getInt();
            _this.moneyType = _this.getByte();
            _this.rule = _this.getByte();
            _this.playerSize = _this.getShort();
            _this.playerStatus = [];
            for (a = 0; a < _this.playerSize; a++)
                _this.playerStatus.push(_this.getByte());
            _this.playerSize = _this.getShort();
            _this.playerInfos = [];
            for (a =
                0; a < _this.playerSize; a++) {
                var b = {};
                b["nickName"] = _this.getString();
                b["avatar"] = _this.getString();
                b["money"] = _this.getLong();
                _this.playerInfos.push(b);
            }
            _this.gameAction = _this.getByte();
            _this.countDownTime = _this.getByte();
            return _this;
        }
        return ReceivedJoinRoomSucceed;
    }(Network_InPacket_1.default));
    cmd.ReceivedJoinRoomSucceed = ReceivedJoinRoomSucceed;
    // new
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
    var ReceivedFirstTurnDecision = /** @class */ (function (_super) {
        __extends(ReceivedFirstTurnDecision, _super);
        function ReceivedFirstTurnDecision(data) {
            var _this = _super.call(this, data) || this;
            _this.isRandom = _this.getBool();
            _this.chair = _this.getByte();
            _this.cardSize = _this.getShort();
            _this.cards = [];
            for (var i = 0; i < _this.cardSize; i++) {
                _this.cards.push(_this.getByte());
            }
            return _this;
        }
        return ReceivedFirstTurnDecision;
    }(Network_InPacket_1.default));
    cmd.ReceivedFirstTurnDecision = ReceivedFirstTurnDecision;
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
            _this.myChair = _this.getByte();
            var a = _this.getShort();
            _this.hasInfo = [];
            for (var b = 0; b < a; b++)
                _this.hasInfo.push(_this.getBool());
            _this.infos = [];
            for (b = 0; b < a; b++) {
                var c = {};
                _this.hasInfo[b] && (c["nickName"] = _this.getString(), c["avatar"] = _this.getString(), c["money"] = _this.getLong(), c["status"] = _this.getInt());
                _this.infos.push(c);
            }
            return _this;
        }
        return ReceivedUpdateMatch;
    }(Network_InPacket_1.default));
    cmd.ReceivedUpdateMatch = ReceivedUpdateMatch;
    // new
    var ReceivedBaCayConfig = /** @class */ (function (_super) {
        __extends(ReceivedBaCayConfig, _super);
        function ReceivedBaCayConfig(data) {
            var _this = _super.call(this, data) || this;
            _this.listSize = _this.getShort();
            _this.list = [];
            for (var a = 0; a < _this.listSize; a++) {
                var b = {};
                b["maxUserPerRoom"] = _this.getByte();
                b["moneyType"] = _this.getByte();
                b["moneyBet"] = _this.getLong();
                b["moneyRequire"] = _this.getLong();
                b["nPersion"] = _this.getInt();
                _this.list.push(b);
            }
            return _this;
        }
        return ReceivedBaCayConfig;
    }(Network_InPacket_1.default));
    cmd.ReceivedBaCayConfig = ReceivedBaCayConfig;
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
    var ReceivedYeuCauDanhBien = /** @class */ (function (_super) {
        __extends(ReceivedYeuCauDanhBien, _super);
        function ReceivedYeuCauDanhBien(data) {
            var _this = _super.call(this, data) || this;
            _this.danhBienChair = _this.getByte();
            _this.level = _this.getByte();
            return _this;
        }
        return ReceivedYeuCauDanhBien;
    }(Network_InPacket_1.default));
    cmd.ReceivedYeuCauDanhBien = ReceivedYeuCauDanhBien;
    // new
    var ReceivedChapNhanDanhBien = /** @class */ (function (_super) {
        __extends(ReceivedChapNhanDanhBien, _super);
        function ReceivedChapNhanDanhBien(data) {
            var _this = _super.call(this, data) || this;
            _this.danhBienChair = _this.getByte();
            _this.level = _this.getByte();
            return _this;
        }
        return ReceivedChapNhanDanhBien;
    }(Network_InPacket_1.default));
    cmd.ReceivedChapNhanDanhBien = ReceivedChapNhanDanhBien;
    // new
    var ReceivedKeCua = /** @class */ (function (_super) {
        __extends(ReceivedKeCua, _super);
        function ReceivedKeCua(data) {
            var _this = _super.call(this, data) || this;
            _this.chairKeCuaFrom = _this.getByte();
            _this.chairKeCuaTo = _this.getByte();
            _this.level = _this.getByte();
            return _this;
        }
        return ReceivedKeCua;
    }(Network_InPacket_1.default));
    cmd.ReceivedKeCua = ReceivedKeCua;
    // new
    var ReceivedVaoGa = /** @class */ (function (_super) {
        __extends(ReceivedVaoGa, _super);
        function ReceivedVaoGa(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.chicKenBet = _this.getLong();
            return _this;
        }
        return ReceivedVaoGa;
    }(Network_InPacket_1.default));
    cmd.ReceivedVaoGa = ReceivedVaoGa;
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
            var a = 0;
            var b = _this.getShort();
            _this.statusList = [];
            for (a = 0; a < b; a++)
                _this.statusList.push(_this.getByte());
            _this.cardList = [];
            for (a = 0; a < _this.statusList.length; a++) {
                b = [];
                if (3 == _this.statusList[a])
                    for (var c = _this.getShort(), d = 0; d < c; d++)
                        b.push(_this.getByte());
                _this.cardList.push(b);
            }
            _this.tienThangChuong = _this.getLong();
            _this.tienThangGa = _this.getLong();
            _this.keCuaMoneyList = [];
            _this.danhBienMoneyList = [];
            b = _this.getShort();
            for (a = 0; a < b; a++)
                _this.keCuaMoneyList.push(_this.getLong());
            b = _this.getShort();
            for (a = 0; a < b; a++)
                _this.danhBienMoneyList.push(_this.getLong());
            _this.tongTienCuoiVan = _this.getLong();
            _this.tongTienCuocList = [];
            _this.tongDanhBienList = [];
            _this.tongKeCuaList = [];
            _this.tongCuocGaList = [];
            _this.tongCuoiVanList = [];
            _this.currentMoneyList = [];
            _this.getShort();
            for (a = 0; a < Code.MAX_PLAYER; a++)
                b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), _this.tongTienCuocList.push(b);
            _this.getShort();
            for (a = 0; a < Code.MAX_PLAYER; a++)
                b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), _this.tongDanhBienList.push(b);
            _this.getShort();
            for (a = 0; a < Code.MAX_PLAYER; a++)
                b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), _this.tongKeCuaList.push(b);
            _this.getShort();
            for (a = 0; a < Code.MAX_PLAYER; a++)
                b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), _this.tongCuocGaList.push(b);
            _this.getShort();
            for (a = 0; a < Code.MAX_PLAYER; a++)
                b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), _this.tongCuoiVanList.push(b);
            _this.getShort();
            for (a = 0; a < Code.MAX_PLAYER; a++)
                b = 0, 3 == _this.statusList[a] && (b = _this.getLong()), _this.currentMoneyList.push(b);
            _this.timeEndGame = _this.getByte();
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
            _this.myChair = _this.getByte();
            _this.chuongChair = _this.getByte();
            var a = _this.getShort();
            _this.cards = [];
            for (var b = 0; b < a; b++)
                _this.cards.push(_this.getByte());
            _this.cuocDanhBienList = [];
            a = _this.getShort();
            for (b = 0; b < a; b++)
                _this.cuocDanhBienList[b] = _this.getInt();
            _this.cuocKeCuaList = [];
            a = _this.getShort();
            for (b = 0; b < a; b++)
                _this.cuocKeCuaList[b] = _this.getInt();
            _this.gameServerState = _this.getByte();
            _this.isAutoStart = _this.getBool();
            _this.gameAction = _this.getByte();
            _this.countDownTime = _this.getByte();
            _this.moneyType = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.gameId = _this.getInt();
            _this.roomId = _this.getInt();
            _this.hasInfo = [];
            a = _this.getShort();
            for (b = 0; b < a; b++)
                _this.hasInfo[b] = _this.getBool();
            _this.players = [];
            for (b = 0; b < Code.MAX_PLAYER; b++)
                _this.hasInfo[b] ? (_this.players[b] = [], _this.players[b].status = _this.getByte(), _this.players[b].money = _this.getLong(), _this.players[b].cuocGa = _this.getInt(), _this.players[b].cuocChuong =
                    _this.getInt(), _this.players[b].avatar = _this.getString(), _this.players[b].nickName = _this.getString()) : (_this.players[b] = [], _this.players[b].status = 0);
            return _this;
        }
        return ReceivedGameInfo;
    }(Network_InPacket_1.default));
    cmd.ReceivedGameInfo = ReceivedGameInfo;
    // new
    var ReceivedTopServer = /** @class */ (function (_super) {
        __extends(ReceivedTopServer, _super);
        function ReceivedTopServer(data) {
            var _this = _super.call(this, data) || this;
            _this.rankType = _this.getByte();
            _this.topDay_money = _this.getString();
            _this.topWeek_money = _this.getString();
            _this.topMonth_money = _this.getString();
            _this.topDay_number = _this.getString();
            _this.topWeek_number = _this.getString();
            _this.topMonth_number = _this.getString();
            return _this;
        }
        return ReceivedTopServer;
    }(Network_InPacket_1.default));
    cmd.ReceivedTopServer = ReceivedTopServer;
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