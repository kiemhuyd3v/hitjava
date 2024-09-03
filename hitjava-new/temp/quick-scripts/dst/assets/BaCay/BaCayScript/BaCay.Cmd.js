
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCw2RkFBZ0Y7QUFDaEYsK0ZBQWtGO0FBRWxGLElBQWlCLEdBQUcsQ0EwdUJuQjtBQTF1QkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBOENBLENBQUM7UUE3Q1UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1QixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsZ0JB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QUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzs7UUFDNUMsQ0FBQztRQUNMLHdCQUFDO0lBQUQsQ0FsQkEsQUFrQkMsQ0FsQnNDLDBCQUFRLEdBa0I5QztJQWxCWSxxQkFBaUIsb0JBa0I3QixDQUFBO0lBRUQ7UUFBMEMsd0NBQVE7UUFDOUMsOEJBQVksSUFBZ0I7bUJBQ3hCLGtCQUFNLElBQUksQ0FBQztRQUNmLENBQUM7UUFDTCwyQkFBQztJQUFELENBSkEsQUFJQyxDQUp5QywwQkFBUSxHQUlqRDtJQUpZLHdCQUFvQix1QkFJaEMsQ0FBQTtBQUNMLENBQUMsRUExdUJnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUEwdUJuQjtBQUNELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgTE9HSU4gPSAxO1xuICAgICAgICBzdGF0aWMgVE9QU0VSVkVSID0gMTAwMTtcbiAgICAgICAgc3RhdGljIENNRF9QSU5HUE9ORyA9IDEwNTA7XG5cbiAgICAgICAgc3RhdGljIENNRF9KT0lOX1JPT00gPSAzMDAxO1xuICAgICAgICBzdGF0aWMgQ01EX1JFQ09OTkVDVF9ST09NID0gMzAwMjtcbiAgICAgICAgc3RhdGljIE1PTkVZX0JFVF9DT05GSUcgPSAzMDAzO1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX0ZBSUwgPSAzMDA0O1xuICAgICAgICBzdGF0aWMgQ0hBVF9ST09NID0gMzAwODtcblxuICAgICAgICBzdGF0aWMgQ1JFQVRFX1JPT00gPSAzMDEzO1xuICAgICAgICBzdGF0aWMgR0VUX0xJU1RfUk9PTSA9IDMwMTQ7XG4gICAgICAgIHN0YXRpYyBKT0lOX0dBTUVfUk9PTV9CWV9JRCA9IDMwMTU7XG5cbiAgICAgICAgc3RhdGljIE1PX0JBSSA9IDMxMDE7XG4gICAgICAgIHN0YXRpYyBCQVRfREFVID0gMzEwMjtcbiAgICAgICAgc3RhdGljIEtFVF9USFVDID0gMzEwMztcbiAgICAgICAgc3RhdGljIFlFVV9DQVVfREFOSF9CSUVOID0gMzEwNDtcbiAgICAgICAgc3RhdGljIENISUFfQkFJID0gMzEwNTtcbiAgICAgICAgc3RhdGljIEtFX0NVQSA9IDMxMDY7XG4gICAgICAgIHN0YXRpYyBUVV9ET05HX0JBVF9EQVUgPSAzMTA3O1xuICAgICAgICBzdGF0aWMgRE9OR19ZX0RBTkhfQklFTiA9IDMxMDg7XG4gICAgICAgIHN0YXRpYyBEQVRfQ1VPQyA9IDMxMDk7XG4gICAgICAgIHN0YXRpYyBUSE9OR19USU5fQkFOX0NIT0kgPSAzMTEwO1xuICAgICAgICBzdGF0aWMgREFOR19LWV9USE9BVF9QSE9ORyA9IDMxMTE7XG4gICAgICAgIHN0YXRpYyBWQU9fR0EgPSAzMTEyO1xuICAgICAgICBzdGF0aWMgRE9JX0NIVU9ORyA9IDMxMTM7XG4gICAgICAgIHN0YXRpYyBNT0lfREFUX0NVT0MgPSAzMTE0O1xuICAgICAgICBzdGF0aWMgQ0hFQVRfQ0FSRFMgPSAzMTE1O1xuICAgICAgICBzdGF0aWMgREFOR19LWV9DSE9JX1RJRVAgPSAzMTE2O1xuICAgICAgICBzdGF0aWMgVVBEQVRFX09XTkVSX1JPT00gPSAzMTE3O1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX1NVQ0NFU1MgPSAzMTE4O1xuICAgICAgICBzdGF0aWMgTEVBVkVfR0FNRSA9IDMxMTk7XG4gICAgICAgIHN0YXRpYyBOT1RJRllfS0lDS19GUk9NX1JPT00gPSAzMTIwO1xuICAgICAgICBzdGF0aWMgTkVXX1VTRVJfSk9JTiA9IDMxMjE7XG4gICAgICAgIHN0YXRpYyBOT1RJRllfVVNFUl9HRVRfSkFDS1BPVCA9IDMxMjI7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfTUFUQ0ggPSAzMTIzO1xuXG4gICAgICAgIHN0YXRpYyBQTEFZRVJfU1RBVFVTX09VVF9HQU1FID0gMDtcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfVklFV0VSID0gMTtcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfU0lUVElORyA9IDI7XG4gICAgICAgIHN0YXRpYyBQTEFZRVJfU1RBVFVTX1BMQVlJTkcgPSAzO1xuICAgICAgICBzdGF0aWMgTE9HT1VUID0gMjtcblxuICAgICAgICBzdGF0aWMgTUFYX1BMQVlFUiA9IDg7XG4gICAgfVxuXG4gICAgLy8gT3V0UGFja2V0XG4gICAgZXhwb3J0IGNsYXNzIENtZExvZ2luIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5MT0dJTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGEpOyAvLyBuaWNrbmFtZVxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYik7IC8vIGFjY2Vzc1Rva2VuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDbWRKb2luUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DTURfSk9JTl9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChiKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhjKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ21kUmVjb25uZWN0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNNRF9SRUNPTk5FQ1RfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRWYW9HYSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlZBT19HQSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRSZXF1ZXN0TGVhdmVHYW1lIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFOR19LWV9USE9BVF9QSE9ORyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRIb2xkUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRBTkdfS1lfQ0hPSV9USUVQKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldEdhbWVDb25maWcgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5NT05FWV9CRVRfQ09ORklHKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldFRvcFNlcnZlciBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlRPUFNFUlZFUik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDcmVhdGVSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCBlOiBudW1iZXIsIGY6IHN0cmluZywgZzogc3RyaW5nLCBoOiBudW1iZXIsKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ1JFQVRFX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChhKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KGIpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGMpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoZCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChlKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGYpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoZyk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoaCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2FyZENoZWF0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBbXSkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNIRUFUX0NBUkRTKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKDApO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChiLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoYSlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGIubGVuZ3RoOyBjKyspIHRoaXMucHV0Qnl0ZShiW2NdKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmREYXRDdW9jIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFUX0NVT0MpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDbWRTZW5kRGFuaEJpZW4gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLllFVV9DQVVfREFOSF9CSUVOKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGIpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ21kU2VuZEtlQ3VhIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5LRV9DVUEpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDbWRTZW5kQWNjZXB0RGFuaEJpZW4gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihhOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5ET05HX1lfREFOSF9CSUVOKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEpOyAvLyBwb3NcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRNb0JhaSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLk1PX0JBSSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRQaW5nIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ01EX1BJTkdQT05HKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbGQgWG9jIERpYVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kR2V0TGlzdFJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5HRVRfTElTVF9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7Ly9tb25leSB0eXBlXG4gICAgICAgICAgICB0aGlzLnB1dEludChDb2RlLk1BWF9QTEFZRVIpOy8vbWF4cGxheWVyXG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoLTEpOy8va2hvbmcgeGFjIGRpbmhcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8va2hvbmcgeGFjIGRpbmhcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8vQ0FSRF9GUk9NXG4gICAgICAgICAgICB0aGlzLnB1dEludCg1MCk7Ly9DQVJEX1RPXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kSm9pblJvb21CeUlkIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkpPSU5fR0FNRV9ST09NX0JZX0lEKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoaWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoXCJcIik7Ly9tYXQga2hhdVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYXRSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFUX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYSA/IDEgOiAwKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGVuY29kZVVSSShiKSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEluUGFja2V0XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTG9naW4gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkR2V0TGlzdFJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGxpc3Q6IGFueVtdID0gW107XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICBsZXQgbGlzdFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdFNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtW1wiaWRcIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJ1c2VyQ291bnRcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibGltaXRQbGF5ZXJcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibWF4VXNlclBlclJvb21cIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJtb25leVR5cGVcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibW9uZXlCZXRcIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJyZXF1aXJlZE1vbmV5XCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wicnVsZVwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJuYW1lUm9vbVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcImtleVwiXSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJxdXliYW5cIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWRpdGVkXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkSm9pblJvb21TdWNjZWVkIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBteUNoYWlyOiBudW1iZXI7XG4gICAgICAgIGNodW9uZ0NoYWlyOiBudW1iZXI7XG4gICAgICAgIG1vbmV5QmV0OiBudW1iZXI7XG4gICAgICAgIHJvb21JZDogbnVtYmVyO1xuICAgICAgICBnYW1lSWQ6IG51bWJlcjtcbiAgICAgICAgbW9uZXlUeXBlOiBudW1iZXI7XG4gICAgICAgIHJ1bGU6IG51bWJlcjtcbiAgICAgICAgcGxheWVyU2l6ZTogbnVtYmVyO1xuICAgICAgICBwbGF5ZXJTdGF0dXM6IGFueVtdO1xuICAgICAgICBwbGF5ZXJJbmZvczogYW55W107XG4gICAgICAgIGdhbWVBY3Rpb246IG51bWJlcjtcbiAgICAgICAgY291bnREb3duVGltZTogbnVtYmVyO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGE6IG51bWJlcjtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jaHVvbmdDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leUJldCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yb29tSWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5tb25leVR5cGUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucnVsZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0dXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCB0aGlzLnBsYXllclNpemU7IGErKykgdGhpcy5wbGF5ZXJTdGF0dXMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPVxuICAgICAgICAgICAgICAgIDA7IGEgPCB0aGlzLnBsYXllclNpemU7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBiID0ge307XG4gICAgICAgICAgICAgICAgYltcIm5pY2tOYW1lXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wiYXZhdGFyXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckluZm9zLnB1c2goYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQXV0b1N0YXJ0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpc0F1dG9TdGFydDogYm9vbGVhbjtcbiAgICAgICAgdGltZUF1dG9TdGFydDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRvU3RhcnQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMudGltZUF1dG9TdGFydCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hpYUJhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2FyZFNpemU6IG51bWJlcjtcbiAgICAgICAgY2FyZHM6IGFueVtdO1xuICAgICAgICBnYW1lSWQ6IG51bWJlcjtcbiAgICAgICAgdGltZUNoaWFCYWk6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgICAgICB0aGlzLmNhcmRTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMuY2FyZFNpemU7IGErKykgdGhpcy5jYXJkcy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMudGltZUNoaWFCYWkgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEZpcnN0VHVybkRlY2lzaW9uIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpc1JhbmRvbTogYm9vbGVhbjtcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcbiAgICAgICAgY2FyZFNpemU6IG51bWJlcjtcbiAgICAgICAgY2FyZHM6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNSYW5kb20gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FyZFNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHMucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVc2VyTGVhdmVSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBuaWNrTmFtZTogc3RyaW5nO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubmlja05hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXNlckpvaW5Sb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpbmZvOiB7fTtcbiAgICAgICAgdUNoYWlyOiBudW1iZXI7XG4gICAgICAgIHVTdGF0dXM6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmluZm8gPSB7fTtcbiAgICAgICAgICAgIHRoaXMuaW5mb1tcIm5pY2tOYW1lXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuaW5mb1tcImF2YXRhclwiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmluZm9bXCJtb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy51Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMudVN0YXR1cyA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVcGRhdGVNYXRjaCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbXlDaGFpcjogbnVtYmVyO1xuICAgICAgICBoYXNJbmZvOiBhbnlbXTtcbiAgICAgICAgaW5mb3M6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmhhc0luZm8gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYTsgYisrKSB0aGlzLmhhc0luZm8ucHVzaCh0aGlzLmdldEJvb2woKSk7XG4gICAgICAgICAgICB0aGlzLmluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgYTsgYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0luZm9bYl0gJiYgKGNbXCJuaWNrTmFtZVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCksIGNbXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpLCBjW1wibW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKSwgY1tcInN0YXR1c1wiXSA9IHRoaXMuZ2V0SW50KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3MucHVzaChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEJhQ2F5Q29uZmlnIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBsaXN0U2l6ZTogbnVtYmVyO1xuICAgICAgICBsaXN0OiBhbnlbXTtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMubGlzdFNpemU7IGErKykge1xuICAgICAgICAgICAgICAgIHZhciBiID0ge307XG4gICAgICAgICAgICAgICAgYltcIm1heFVzZXJQZXJSb29tXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgYltcIm1vbmV5VHlwZVwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leUJldFwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leVJlcXVpcmVcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wiblBlcnNpb25cIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgb3V0Q2hhaXI6IG51bWJlcjtcbiAgICAgICAgaXNPdXRSb29tOiBib29sZWFuO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMub3V0Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPdXRSb29tID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRLaWNrT2ZmIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZWFzb246IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlYXNvbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTW9pRGF0Q3VvYyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdGltZURhdEN1b2M6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVEYXRDdW9jID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZERhdEN1b2MgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyRGF0Q3VvYzogbnVtYmVyO1xuICAgICAgICBsZXZlbDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJEYXRDdW9jID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRZZXVDYXVEYW5oQmllbiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZGFuaEJpZW5DaGFpcjogbnVtYmVyO1xuICAgICAgICBsZXZlbDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGFuaEJpZW5DaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hhcE5oYW5EYW5oQmllbiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZGFuaEJpZW5DaGFpcjogbnVtYmVyO1xuICAgICAgICBsZXZlbDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGFuaEJpZW5DaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5sZXZlbCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkS2VDdWEgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyS2VDdWFGcm9tOiBudW1iZXI7XG4gICAgICAgIGNoYWlyS2VDdWFUbzogbnVtYmVyO1xuICAgICAgICBsZXZlbDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJLZUN1YUZyb20gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJLZUN1YVRvID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmxldmVsID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRWYW9HYSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXI6IG51bWJlcjtcbiAgICAgICAgY2hpY0tlbkJldDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2hpY0tlbkJldCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTW9CYWkgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyTW9CYWk6IG51bWJlcjtcbiAgICAgICAgY2FyZFNpemU6IG51bWJlcjtcbiAgICAgICAgY2FyZHM6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXJNb0JhaSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5jYXJkU2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkcy5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEVuZEdhbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHN0YXR1c0xpc3Q6IGFueVtdO1xuICAgICAgICBjYXJkTGlzdDogYW55W107XG4gICAgICAgIHRpZW5UaGFuZ0NodW9uZzogbnVtYmVyO1xuICAgICAgICB0aWVuVGhhbmdHYTogbnVtYmVyO1xuICAgICAgICBrZUN1YU1vbmV5TGlzdDogYW55W107XG4gICAgICAgIGRhbmhCaWVuTW9uZXlMaXN0OiBhbnlbXTtcbiAgICAgICAgdG9uZ1RpZW5DdW9pVmFuOiBudW1iZXI7XG4gICAgICAgIHRvbmdUaWVuQ3VvY0xpc3Q6IGFueVtdO1xuICAgICAgICB0b25nRGFuaEJpZW5MaXN0OiBhbnlbXTtcbiAgICAgICAgdG9uZ0tlQ3VhTGlzdDogYW55W107XG4gICAgICAgIHRvbmdDdW9jR2FMaXN0OiBhbnlbXTtcbiAgICAgICAgdG9uZ0N1b2lWYW5MaXN0OiBhbnlbXTtcbiAgICAgICAgY3VycmVudE1vbmV5TGlzdDogYW55W107XG4gICAgICAgIHRpbWVFbmRHYW1lOiBudW1iZXI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB2YXIgYSA9IDA7XG4gICAgICAgICAgICB2YXIgYjogYW55ID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXNMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYjsgYSsrKSB0aGlzLnN0YXR1c0xpc3QucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICB0aGlzLmNhcmRMaXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5zdGF0dXNMaXN0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgYiA9IFtdO1xuICAgICAgICAgICAgICAgIGlmICgzID09IHRoaXMuc3RhdHVzTGlzdFthXSlcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IHRoaXMuZ2V0U2hvcnQoKSwgZCA9IDA7IGQgPCBjOyBkKyspIGIucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkTGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50aWVuVGhhbmdDaHVvbmcgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudGllblRoYW5nR2EgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMua2VDdWFNb25leUxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZGFuaEJpZW5Nb25leUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgYjsgYSsrKSB0aGlzLmtlQ3VhTW9uZXlMaXN0LnB1c2godGhpcy5nZXRMb25nKCkpO1xuICAgICAgICAgICAgYiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBiOyBhKyspIHRoaXMuZGFuaEJpZW5Nb25leUxpc3QucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICB0aGlzLnRvbmdUaWVuQ3VvaVZhbiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy50b25nVGllbkN1b2NMaXN0ID0gW107XG4gICAgICAgICAgICB0aGlzLnRvbmdEYW5oQmllbkxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMudG9uZ0tlQ3VhTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy50b25nQ3VvY0dhTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy50b25nQ3VvaVZhbkxpc3QgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5TGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSBiID0gMCwgMyA9PSB0aGlzLnN0YXR1c0xpc3RbYV0gJiYgKGIgPSB0aGlzLmdldExvbmcoKSksIHRoaXMudG9uZ1RpZW5DdW9jTGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSBiID0gMCwgMyA9PSB0aGlzLnN0YXR1c0xpc3RbYV0gJiYgKGIgPSB0aGlzLmdldExvbmcoKSksIHRoaXMudG9uZ0RhbmhCaWVuTGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSBiID0gMCwgMyA9PSB0aGlzLnN0YXR1c0xpc3RbYV0gJiYgKGIgPSB0aGlzLmdldExvbmcoKSksIHRoaXMudG9uZ0tlQ3VhTGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSBiID0gMCwgMyA9PSB0aGlzLnN0YXR1c0xpc3RbYV0gJiYgKGIgPSB0aGlzLmdldExvbmcoKSksIHRoaXMudG9uZ0N1b2NHYUxpc3QucHVzaChiKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBDb2RlLk1BWF9QTEFZRVI7IGErKykgYiA9IDAsIDMgPT0gdGhpcy5zdGF0dXNMaXN0W2FdICYmIChiID0gdGhpcy5nZXRMb25nKCkpLCB0aGlzLnRvbmdDdW9pVmFuTGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IENvZGUuTUFYX1BMQVlFUjsgYSsrKSBiID0gMCwgMyA9PSB0aGlzLnN0YXR1c0xpc3RbYV0gJiYgKGIgPSB0aGlzLmdldExvbmcoKSksIHRoaXMuY3VycmVudE1vbmV5TGlzdC5wdXNoKGIpO1xuICAgICAgICAgICAgdGhpcy50aW1lRW5kR2FtZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRG9pQ2h1b25nIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaHVvbmdDaGFpcjogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2h1b25nQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZENoYXRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBpc0ljb246IGJvb2xlYW47XG4gICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgbmlja25hbWU6IHN0cmluZztcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gZGVjb2RlVVJJKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEdhbWVJbmZvIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBteUNoYWlyOiBudW1iZXI7XG4gICAgICAgIGNodW9uZ0NoYWlyOiBudW1iZXI7XG4gICAgICAgIGNhcmRzOiBhbnlbXTtcbiAgICAgICAgY3VvY0RhbmhCaWVuTGlzdDogYW55W107XG4gICAgICAgIGN1b2NLZUN1YUxpc3Q6IGFueVtdO1xuICAgICAgICBnYW1lU2VydmVyU3RhdGU6IG51bWJlcjtcbiAgICAgICAgaXNBdXRvU3RhcnQ6IGJvb2xlYW47XG4gICAgICAgIGdhbWVBY3Rpb246IG51bWJlcjtcbiAgICAgICAgY291bnREb3duVGltZTogbnVtYmVyO1xuICAgICAgICBtb25leVR5cGU6IG51bWJlcjtcbiAgICAgICAgbW9uZXlCZXQ6IG51bWJlcjtcbiAgICAgICAgZ2FtZUlkOiBudW1iZXI7XG4gICAgICAgIHJvb21JZDogbnVtYmVyO1xuICAgICAgICBoYXNJbmZvOiBhbnlbXTtcbiAgICAgICAgcGxheWVyczogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5teUNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNodW9uZ0NoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYTsgYisrKSB0aGlzLmNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5jdW9jRGFuaEJpZW5MaXN0ID0gW107XG4gICAgICAgICAgICBhID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IGE7IGIrKykgdGhpcy5jdW9jRGFuaEJpZW5MaXN0W2JdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VvY0tlQ3VhTGlzdCA9IFtdO1xuICAgICAgICAgICAgYSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBhOyBiKyspIHRoaXMuY3VvY0tlQ3VhTGlzdFtiXSA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTZXJ2ZXJTdGF0ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pc0F1dG9TdGFydCA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5QmV0ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLmhhc0luZm8gPSBbXTtcbiAgICAgICAgICAgIGEgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgYTsgYisrKSB0aGlzLmhhc0luZm9bYl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVycyA9IFtdO1xuICAgICAgICAgICAgZm9yIChiID0gMDsgYiA8IENvZGUuTUFYX1BMQVlFUjsgYisrKSB0aGlzLmhhc0luZm9bYl0gPyAodGhpcy5wbGF5ZXJzW2JdID0gW10sIHRoaXMucGxheWVyc1tiXS5zdGF0dXMgPSB0aGlzLmdldEJ5dGUoKSwgdGhpcy5wbGF5ZXJzW2JdLm1vbmV5ID0gdGhpcy5nZXRMb25nKCksIHRoaXMucGxheWVyc1tiXS5jdW9jR2EgPSB0aGlzLmdldEludCgpLCB0aGlzLnBsYXllcnNbYl0uY3VvY0NodW9uZyA9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbnQoKSwgdGhpcy5wbGF5ZXJzW2JdLmF2YXRhciA9IHRoaXMuZ2V0U3RyaW5nKCksIHRoaXMucGxheWVyc1tiXS5uaWNrTmFtZSA9IHRoaXMuZ2V0U3RyaW5nKCkpIDogKHRoaXMucGxheWVyc1tiXSA9IFtdLCB0aGlzLnBsYXllcnNbYl0uc3RhdHVzID0gMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZFRvcFNlcnZlciBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmFua1R5cGU6IG51bWJlcjtcbiAgICAgICAgdG9wRGF5X21vbmV5OiBzdHJpbmc7XG4gICAgICAgIHRvcFdlZWtfbW9uZXk6IHN0cmluZztcbiAgICAgICAgdG9wTW9udGhfbW9uZXk6IHN0cmluZztcbiAgICAgICAgdG9wRGF5X251bWJlcjogc3RyaW5nO1xuICAgICAgICB0b3BXZWVrX251bWJlcjogc3RyaW5nO1xuICAgICAgICB0b3BNb250aF9udW1iZXI6IHN0cmluZztcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJhbmtUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRvcERheV9tb25leSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRvcFdlZWtfbW9uZXkgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50b3BNb250aF9tb25leSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRvcERheV9udW1iZXIgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50b3BXZWVrX251bWJlciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnRvcE1vbnRoX251bWJlciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRKb2luUm9vbUZhaWwgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY21kO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0=