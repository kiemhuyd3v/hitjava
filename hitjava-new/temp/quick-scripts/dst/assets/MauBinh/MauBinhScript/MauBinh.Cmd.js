
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73889UV1D1OeI4ehXzc0OG9', 'MauBinh.Cmd');
// MauBinh/MauBinhScript/MauBinh.Cmd.ts

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
        Code.BINH_SO_CHI = 3101; // new
        Code.BAT_DAU = 3102;
        Code.KET_THUC = 3103;
        Code.AUTO_BINH_SO_CHI = 3104; // new
        Code.CHIA_BAI = 3105;
        Code.BAO_BINH = 3106; // new
        Code.TU_DONG_BAT_DAU = 3107;
        Code.XEP_LAI = 3108; // new
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
        // Player State
        Code.PLAYER_STATUS_OUT_GAME = 0;
        Code.PLAYER_STATUS_VIEWER = 1;
        Code.PLAYER_STATUS_SITTING = 2;
        Code.PLAYER_STATUS_PLAYING = 3;
        // Cards Type
        Code.TYPE_SANH_RONG = 0;
        Code.TYPE_MUOI_BA_CAY_DONG_MAU = 1;
        Code.TYPE_MUOI_HAI_CAY_DONG_MAU = 2;
        Code.TYPE_BA_CAI_THUNG = 3;
        Code.TYPE_BA_CAI_SANH = 4;
        Code.TYPE_LUC_PHE_BON = 5;
        Code.TYPE_BINH_THUONG = 6;
        Code.TYPE_BINH_LUNG = 7;
        // Group Kind
        Code.GROUP_THUNG_PHA_SANH = 0;
        Code.GROUP_TU_QUY = 1;
        Code.GROUP_CU_LU = 2;
        Code.GROUP_THUNG = 3;
        Code.GROUP_SANH = 4;
        Code.GROUP_SAM_CO = 5;
        Code.GROUP_THU = 6;
        Code.GROUP_MOT_DOI = 7;
        Code.GROUP_MAU_THAU = 8;
        // Cards Kind Level
        Code.LV_THUONG = 0;
        Code.LV_HA = 1;
        Code.LV_BINH_THUONG = 2;
        // Cards Color
        Code.BLACK = 0;
        Code.RED = 1;
        // Cards Suite
        Code.SPADE = 0;
        Code.CLUB = 1;
        Code.DIAMOND = 2;
        Code.HEART = 3;
        // Game State
        Code.STATE_NO_START = 0;
        Code.STATE_PLAYING = 1;
        Code.STATE_END = 2;
        // Max Players
        Code.MAX_PLAYER = 4;
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
    var SendBinhSoChi = /** @class */ (function (_super) {
        __extends(SendBinhSoChi, _super);
        function SendBinhSoChi(a, b, c) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BINH_SO_CHI);
            _this.packHeader();
            _this.putShort(a.length);
            for (var d = 0; d < a.length; d++)
                _this.putByte(a[d]);
            _this.putShort(b.length);
            for (d = 0; d < b.length; d++)
                _this.putByte(b[d]);
            _this.putShort(c.length);
            for (d = 0; d < c.length; d++)
                _this.putByte(c[d]);
            _this.updateSize();
            return _this;
        }
        return SendBinhSoChi;
    }(Network_OutPacket_1.default));
    cmd.SendBinhSoChi = SendBinhSoChi;
    var SendBaoBinh = /** @class */ (function (_super) {
        __extends(SendBaoBinh, _super);
        function SendBaoBinh() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BAO_BINH);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendBaoBinh;
    }(Network_OutPacket_1.default));
    cmd.SendBaoBinh = SendBaoBinh;
    var SendAutoBinhSoChi = /** @class */ (function (_super) {
        __extends(SendAutoBinhSoChi, _super);
        function SendAutoBinhSoChi(a, b, c) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.AUTO_BINH_SO_CHI);
            _this.packHeader();
            _this.putShort(a.length);
            for (var d = 0; d < a.length; d++)
                _this.putByte(a[d]);
            _this.putShort(b.length);
            for (d = 0; d < b.length; d++)
                _this.putByte(b[d]);
            _this.putShort(c.length);
            for (d = 0; d < c.length; d++)
                _this.putByte(c[d]);
            _this.updateSize();
            return _this;
        }
        return SendAutoBinhSoChi;
    }(Network_OutPacket_1.default));
    cmd.SendAutoBinhSoChi = SendAutoBinhSoChi;
    var SendXepLai = /** @class */ (function (_super) {
        __extends(SendXepLai, _super);
        function SendXepLai() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.XEP_LAI);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendXepLai;
    }(Network_OutPacket_1.default));
    cmd.SendXepLai = SendXepLai;
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
            var a;
            _this.myChair = _this.getByte();
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
            for (a = 0; a < _this.playerSize; a++) {
                var b = {};
                b["nickName"] = _this.getString();
                b["avatar"] = _this.getString();
                b["money"] = _this.getLong();
                _this.playerInfos.push(b);
            }
            _this.gameState = _this.getByte();
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
            var a = _this.getShort();
            _this.cardList = [];
            for (var b = 0; b < a; b++)
                _this.cardList.push(_this.getByte());
            _this.mauBinh = _this.getByte();
            _this.gameId = _this.getInt();
            _this.countdown = _this.getByte();
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
            _this.myChair = _this.getByte();
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
    // co the k dung toi
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
            _this.playerResultList = [];
            for (var a = _this.getShort(), b = 0; b < a; b++) {
                var c = {};
                c["chairIndex"] = _this.getByte();
                c["maubinhType"] = _this.getInt();
                var d = _this.getShort();
                c["chi1"] = [];
                for (var e = 0; e < d; e++)
                    c["chi1"].push(_this.getByte());
                d = _this.getShort();
                c["chi2"] = [];
                for (e = 0; e < d; e++)
                    c["chi2"].push(_this.getByte());
                d = _this.getShort();
                c["chi3"] = [];
                for (e = 0; e < d; e++)
                    c["chi3"].push(_this.getByte());
                c["moneyInChi"] = [];
                d = _this.getShort();
                for (e = 0; e < d; e++)
                    c["moneyInChi"].push(_this.getLong());
                c["moneyAt"] = _this.getLong();
                c["moneyCommon"] = _this.getLong();
                c["moneySap"] = _this.getLong();
                c["currentMoney"] = _this.getLong();
                _this.playerResultList.push(c);
            }
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
            _this.gameState = _this.getByte();
            _this.gameAction = _this.getByte();
            _this.countdownTime = _this.getByte();
            _this.moneyBet = _this.getLong();
            _this.moneyType = _this.getByte();
            _this.gameId = _this.getInt();
            _this.roomId = _this.getInt();
            _this.rule = _this.getByte();
            var a = _this.getShort();
            _this.hasInfo = [];
            for (var b = 0; b < a; b++)
                _this.hasInfo[b] = _this.getBool();
            _this.players = [];
            for (b = 0; b < cmd.Code.MAX_PLAYER; b++)
                if (_this.hasInfo[b]) {
                    _this.players[b] = {};
                    if (_this.gameState == cmd.Code.STATE_PLAYING) {
                        if (b == _this.myChair) {
                            a = _this.getShort();
                            _this.players[b].cardList = [];
                            for (var c = 0; c < a; c++)
                                _this.players[b].cardList.push(_this.getByte());
                        }
                    }
                    else if (_this.gameState == cmd.Code.STATE_END) {
                        a = _this.getShort();
                        _this.players[b].cardList = [];
                        for (c = 0; c < a; c++)
                            _this.players[b].cardList.push(_this.getByte());
                        _this.players[b].maubinhType = _this.getByte();
                        _this.players[b].moneyCommon =
                            _this.getLong();
                    }
                    _this.players[b].sochi = _this.getBool();
                    _this.players[b].status = _this.getByte();
                    _this.players[b].avatar = _this.getString();
                    _this.players[b].userId = _this.getInt();
                    _this.players[b].nickName = _this.getString();
                    _this.players[b].currentMoney = _this.getLong();
                }
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
    // new
    var ReceivedMauBinhConfig = /** @class */ (function (_super) {
        __extends(ReceivedMauBinhConfig, _super);
        function ReceivedMauBinhConfig(data) {
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
        return ReceivedMauBinhConfig;
    }(Network_InPacket_1.default));
    cmd.ReceivedMauBinhConfig = ReceivedMauBinhConfig;
    // new
    var ReceivedBinhSoChi = /** @class */ (function (_super) {
        __extends(ReceivedBinhSoChi, _super);
        function ReceivedBinhSoChi(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceivedBinhSoChi;
    }(Network_InPacket_1.default));
    cmd.ReceivedBinhSoChi = ReceivedBinhSoChi;
    // new
    var ReceivedXepLai = /** @class */ (function (_super) {
        __extends(ReceivedXepLai, _super);
        function ReceivedXepLai(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            return _this;
        }
        return ReceivedXepLai;
    }(Network_InPacket_1.default));
    cmd.ReceivedXepLai = ReceivedXepLai;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2RkFBZ0Y7QUFDaEYsK0ZBQWtGO0FBR2xGLElBQWlCLEdBQUcsQ0F3ckJuQjtBQXhyQkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBd0ZBLENBQUM7UUF2RlUsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFFcEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUU1QixnQkFBVyxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU07UUFDMUIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIscUJBQWdCLEdBQUcsSUFBSSxDQUFDLENBQUMsTUFBTTtRQUMvQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQ3ZCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBQ3RCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUMzQixXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsZUFBVSxHQUFH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QUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNmLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNyQixDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNoQztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBOztRQUNyQyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQS9CQSxBQStCQyxDQS9Cb0MsMEJBQVEsR0ErQjVDO0lBL0JZLG1CQUFlLGtCQStCM0IsQ0FBQTtJQUVELE1BQU07SUFDTjtRQUF1QyxxQ0FBUTtRQUUzQywyQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1lBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ3RDLENBQUM7UUFDTCx3QkFBQztJQUFELENBTkEsQUFNQyxDQU5zQywwQkFBUSxHQU05QztJQU5ZLHFCQUFpQixvQkFNN0IsQ0FBQTtJQUVELE1BQU07SUFDTjtRQUFzQyxvQ0FBUTtRQUsxQywwQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUtkO1lBSkcsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDNUIsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDM0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7O1FBQ3BDLENBQUM7UUFDTCx1QkFBQztJQUFELENBWkEsQUFZQyxDQVpxQywwQkFBUSxHQVk3QztJQVpZLG9CQUFnQixtQkFZNUIsQ0FBQTtJQUVELE1BQU07SUFDTjtRQUFzQyxvQ0FBUTtRQVkxQywwQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQXNDZDtZQXJDRyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUU7Z0JBQ3BDLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTt3QkFDMUMsSUFBSSxDQUFDLElBQUksS0FBSSxDQUFDLE9BQU8sRUFBRTs0QkFDbkIsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOzRCQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQ0FBRSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7eUJBQzVFO3FCQUNKO3lCQUFNLElBQUksS0FBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDN0MsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3dCQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7NEJBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO3dCQUN0RSxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQzdDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVzs0QkFDdkIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO3FCQUNyQjtvQkFDRCxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMxQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3ZDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO2lCQUNoRDs7UUFDVCxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQXBEQSxBQW9EQyxDQXBEcUMsMEJBQVEsR0FvRDdDO0lBcERZLG9CQUFnQixtQkFvRDVCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBdUMscUNBQVE7UUFRM0MsMkJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FRZDtZQVBHLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOztRQUM1QyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQWxCQSxBQWtCQyxDQWxCc0MsMEJBQVEsR0FrQjlDO0lBbEJZLHFCQUFpQixvQkFrQjdCLENBQUE7SUFFRDtRQUEwQyx3Q0FBUTtRQUM5Qyw4QkFBWSxJQUFnQjttQkFDeEIsa0JBQU0sSUFBSSxDQUFDO1FBQ2YsQ0FBQztRQUNMLDJCQUFDO0lBQUQsQ0FKQSxBQUlDLENBSnlDLDBCQUFRLEdBSWpEO0lBSlksd0JBQW9CLHVCQUloQyxDQUFBO0lBRUQsTUFBTTtJQUNOO1FBQTJDLHlDQUFRO1FBRy9DLCtCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBWWQ7WUFYRyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxLQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNyQyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUMvQixDQUFDLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNuQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNyQjs7UUFDTCxDQUFDO1FBQ0wsNEJBQUM7SUFBRCxDQWpCQSxBQWlCQyxDQWpCMEMsMEJBQVEsR0FpQmxEO0lBakJZLHlCQUFxQix3QkFpQmpDLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBdUMscUNBQVE7UUFFM0MsMkJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNoQyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQU5BLEFBTUMsQ0FOc0MsMEJBQVEsR0FNOUM7SUFOWSxxQkFBaUIsb0JBTTdCLENBQUE7SUFFRCxNQUFNO0lBQ047UUFBb0Msa0NBQVE7UUFFeEMsd0JBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNoQyxDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQU5BLEFBTUMsQ0FObUMsMEJBQVEsR0FNM0M7SUFOWSxrQkFBYyxpQkFNMUIsQ0FBQTtBQUVMLENBQUMsRUF4ckJnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUF3ckJuQjtBQUNELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgT3V0UGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5PdXRQYWNrZXRcIjtcblxuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgTE9HSU4gPSAxO1xuICAgICAgICBzdGF0aWMgVE9QU0VSVkVSID0gMTAwMTtcbiAgICAgICAgc3RhdGljIENNRF9QSU5HUE9ORyA9IDEwNTA7XG5cbiAgICAgICAgc3RhdGljIENNRF9KT0lOX1JPT00gPSAzMDAxO1xuICAgICAgICBzdGF0aWMgQ01EX1JFQ09OTkVDVF9ST09NID0gMzAwMjtcbiAgICAgICAgc3RhdGljIE1PTkVZX0JFVF9DT05GSUcgPSAzMDAzO1xuICAgICAgICBzdGF0aWMgSk9JTl9ST09NX0ZBSUwgPSAzMDA0O1xuICAgICAgICBzdGF0aWMgQ0hBVF9ST09NID0gMzAwODtcblxuICAgICAgICBzdGF0aWMgQ1JFQVRFX1JPT00gPSAzMDEzO1xuICAgICAgICBzdGF0aWMgR0VUX0xJU1RfUk9PTSA9IDMwMTQ7XG4gICAgICAgIHN0YXRpYyBKT0lOX0dBTUVfUk9PTV9CWV9JRCA9IDMwMTU7XG5cbiAgICAgICAgc3RhdGljIEJJTkhfU09fQ0hJID0gMzEwMTsgLy8gbmV3XG4gICAgICAgIHN0YXRpYyBCQVRfREFVID0gMzEwMjtcbiAgICAgICAgc3RhdGljIEtFVF9USFVDID0gMzEwMztcbiAgICAgICAgc3RhdGljIEFVVE9fQklOSF9TT19DSEkgPSAzMTA0OyAvLyBuZXdcbiAgICAgICAgc3RhdGljIENISUFfQkFJID0gMzEwNTtcbiAgICAgICAgc3RhdGljIEJBT19CSU5IID0gMzEwNjsgLy8gbmV3XG4gICAgICAgIHN0YXRpYyBUVV9ET05HX0JBVF9EQVUgPSAzMTA3O1xuICAgICAgICBzdGF0aWMgWEVQX0xBSSA9IDMxMDg7IC8vIG5ld1xuICAgICAgICBzdGF0aWMgREFUX0NVT0MgPSAzMTA5O1xuICAgICAgICBzdGF0aWMgVEhPTkdfVElOX0JBTl9DSE9JID0gMzExMDtcbiAgICAgICAgc3RhdGljIERBTkdfS1lfVEhPQVRfUEhPTkcgPSAzMTExO1xuICAgICAgICBzdGF0aWMgVkFPX0dBID0gMzExMjtcbiAgICAgICAgc3RhdGljIERPSV9DSFVPTkcgPSAzMTEzO1xuICAgICAgICBzdGF0aWMgTU9JX0RBVF9DVU9DID0gMzExNDtcbiAgICAgICAgc3RhdGljIENIRUFUX0NBUkRTID0gMzExNTtcbiAgICAgICAgc3RhdGljIERBTkdfS1lfQ0hPSV9USUVQID0gMzExNjtcbiAgICAgICAgc3RhdGljIFVQREFURV9PV05FUl9ST09NID0gMzExNztcbiAgICAgICAgc3RhdGljIEpPSU5fUk9PTV9TVUNDRVNTID0gMzExODtcbiAgICAgICAgc3RhdGljIExFQVZFX0dBTUUgPSAzMTE5O1xuICAgICAgICBzdGF0aWMgTk9USUZZX0tJQ0tfRlJPTV9ST09NID0gMzEyMDtcbiAgICAgICAgc3RhdGljIE5FV19VU0VSX0pPSU4gPSAzMTIxO1xuICAgICAgICBzdGF0aWMgTk9USUZZX1VTRVJfR0VUX0pBQ0tQT1QgPSAzMTIyO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX01BVENIID0gMzEyMztcblxuICAgICAgICAvLyBQbGF5ZXIgU3RhdGVcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfT1VUX0dBTUUgPSAwO1xuICAgICAgICBzdGF0aWMgUExBWUVSX1NUQVRVU19WSUVXRVIgPSAxO1xuICAgICAgICBzdGF0aWMgUExBWUVSX1NUQVRVU19TSVRUSU5HID0gMjtcbiAgICAgICAgc3RhdGljIFBMQVlFUl9TVEFUVVNfUExBWUlORyA9IDM7XG5cbiAgICAgICAgLy8gQ2FyZHMgVHlwZVxuICAgICAgICBzdGF0aWMgVFlQRV9TQU5IX1JPTkcgPSAwO1xuICAgICAgICBzdGF0aWMgVFlQRV9NVU9JX0JBX0NBWV9ET05HX01BVSA9IDE7XG4gICAgICAgIHN0YXRpYyBUWVBFX01VT0lfSEFJX0NBWV9ET05HX01BVSA9IDI7XG4gICAgICAgIHN0YXRpYyBUWVBFX0JBX0NBSV9USFVORyA9IDM7XG4gICAgICAgIHN0YXRpYyBUWVBFX0JBX0NBSV9TQU5IID0gNDtcbiAgICAgICAgc3RhdGljIFRZUEVfTFVDX1BIRV9CT04gPSA1O1xuICAgICAgICBzdGF0aWMgVFlQRV9CSU5IX1RIVU9ORyA9IDY7XG4gICAgICAgIHN0YXRpYyBUWVBFX0JJTkhfTFVORyA9IDc7XG5cbiAgICAgICAgLy8gR3JvdXAgS2luZFxuICAgICAgICBzdGF0aWMgR1JPVVBfVEhVTkdfUEhBX1NBTkggPSAwO1xuICAgICAgICBzdGF0aWMgR1JPVVBfVFVfUVVZID0gMTtcbiAgICAgICAgc3RhdGljIEdST1VQX0NVX0xVID0gMjtcbiAgICAgICAgc3RhdGljIEdST1VQX1RIVU5HID0gMztcbiAgICAgICAgc3RhdGljIEdST1VQX1NBTkggPSA0O1xuICAgICAgICBzdGF0aWMgR1JPVVBfU0FNX0NPID0gNTtcbiAgICAgICAgc3RhdGljIEdST1VQX1RIVSA9IDY7XG4gICAgICAgIHN0YXRpYyBHUk9VUF9NT1RfRE9JID0gNztcbiAgICAgICAgc3RhdGljIEdST1VQX01BVV9USEFVID0gODtcblxuICAgICAgICAvLyBDYXJkcyBLaW5kIExldmVsXG4gICAgICAgIHN0YXRpYyBMVl9USFVPTkcgPSAwO1xuICAgICAgICBzdGF0aWMgTFZfSEEgPSAxO1xuICAgICAgICBzdGF0aWMgTFZfQklOSF9USFVPTkcgPSAyO1xuXG4gICAgICAgIC8vIENhcmRzIENvbG9yXG4gICAgICAgIHN0YXRpYyBCTEFDSyA9IDA7XG4gICAgICAgIHN0YXRpYyBSRUQgPSAxO1xuXG4gICAgICAgIC8vIENhcmRzIFN1aXRlXG4gICAgICAgIHN0YXRpYyBTUEFERSA9IDA7XG4gICAgICAgIHN0YXRpYyBDTFVCID0gMTtcbiAgICAgICAgc3RhdGljIERJQU1PTkQgPSAyO1xuICAgICAgICBzdGF0aWMgSEVBUlQgPSAzO1xuXG4gICAgICAgIC8vIEdhbWUgU3RhdGVcbiAgICAgICAgc3RhdGljIFNUQVRFX05PX1NUQVJUID0gMDtcbiAgICAgICAgc3RhdGljIFNUQVRFX1BMQVlJTkcgPSAxO1xuICAgICAgICBzdGF0aWMgU1RBVEVfRU5EID0gMjtcblxuICAgICAgICAvLyBNYXggUGxheWVyc1xuICAgICAgICBzdGF0aWMgTUFYX1BMQVlFUiA9IDQ7XG4gICAgfVxuXG4gICAgLy8gT3V0UGFja2V0XG4gICAgZXhwb3J0IGNsYXNzIENtZExvZ2luIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogc3RyaW5nLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5MT0dJTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGEpOyAvLyBuaWNrbmFtZVxuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYik7IC8vIGFjY2Vzc1Rva2VuXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDbWRKb2luUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DTURfSk9JTl9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYSk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChiKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhjKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ21kUmVjb25uZWN0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNNRF9SRUNPTk5FQ1RfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRSZXF1ZXN0TGVhdmVHYW1lIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFOR19LWV9USE9BVF9QSE9ORyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRIb2xkUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkRBTkdfS1lfQ0hPSV9USUVQKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldEdhbWVDb25maWcgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5NT05FWV9CRVRfQ09ORklHKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldFRvcFNlcnZlciBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlRPUFNFUlZFUik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDcmVhdGVSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyLCBlOiBudW1iZXIsIGY6IHN0cmluZywgZzogc3RyaW5nLCBoOiBudW1iZXIsKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ1JFQVRFX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChhKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KGIpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGMpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoZCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChlKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGYpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoZyk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoaCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2FyZENoZWF0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBbXSkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNIRUFUX0NBUkRTKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKDApO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChiLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoYSlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGIubGVuZ3RoOyBjKyspIHRoaXMucHV0Qnl0ZShiW2NdKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIENtZFNlbmRQaW5nIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ01EX1BJTkdQT05HKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEdldExpc3RSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuR0VUX0xJU1RfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUpOy8vbW9uZXkgdHlwZVxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoQ29kZS5NQVhfUExBWUVSKTsvL21heHBsYXllclxuICAgICAgICAgICAgdGhpcy5wdXRMb25nKC0xKTsvL2tob25nIHhhYyBkaW5oXG4gICAgICAgICAgICB0aGlzLnB1dEludCgwKTsvL2tob25nIHhhYyBkaW5oXG4gICAgICAgICAgICB0aGlzLnB1dEludCgwKTsvL0NBUkRfRlJPTVxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoNTApOy8vQ0FSRF9UT1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEpvaW5Sb29tQnlJZCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5KT0lOX0dBTUVfUk9PTV9CWV9JRCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KGlkKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKFwiXCIpOy8vbWF0IGtoYXVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGF0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlciwgYjogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hBVF9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEgPyAxIDogMCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhlbmNvZGVVUkkoYikpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQmluaFNvQ2hpIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTpudW1iZXIgW10sIGI6bnVtYmVyIFtdLCBjOm51bWJlciBbXSkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkJJTkhfU09fQ0hJKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChhLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGEubGVuZ3RoOyBkKyspIHRoaXMucHV0Qnl0ZShhW2RdKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoYi5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChkID0gMDsgZCA8IGIubGVuZ3RoOyBkKyspIHRoaXMucHV0Qnl0ZShiW2RdKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoYy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChkID0gMDsgZCA8IGMubGVuZ3RoOyBkKyspIHRoaXMucHV0Qnl0ZShjW2RdKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRCYW9CaW5oIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQkFPX0JJTkgpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQXV0b0JpbmhTb0NoaSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGE6IG51bWJlciBbXSwgYjpudW1iZXIgW10sIGM6bnVtYmVyIFtdKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQVVUT19CSU5IX1NPX0NISSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoYS5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgZCA9IDA7IGQgPCBhLmxlbmd0aDsgZCsrKSB0aGlzLnB1dEJ5dGUoYVtkXSk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KGIubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAoZCA9IDA7IGQgPCBiLmxlbmd0aDsgZCsrKSB0aGlzLnB1dEJ5dGUoYltkXSk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KGMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAoZCA9IDA7IGQgPCBjLmxlbmd0aDsgZCsrKSB0aGlzLnB1dEJ5dGUoY1tkXSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kWGVwTGFpIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuWEVQX0xBSSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBJblBhY2tldFxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZExvZ2luIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJfX19fXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkR2V0TGlzdFJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGxpc3Q6IGFueVtdID0gW107XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICBsZXQgbGlzdFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdFNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtW1wiaWRcIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJ1c2VyQ291bnRcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibGltaXRQbGF5ZXJcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibWF4VXNlclBlclJvb21cIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJtb25leVR5cGVcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibW9uZXlCZXRcIl0gPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJyZXF1aXJlZE1vbmV5XCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wicnVsZVwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJuYW1lUm9vbVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcImtleVwiXSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJxdXliYW5cIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaChpdGVtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZWRpdGVkXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkSm9pblJvb21TdWNjZWVkIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBteUNoYWlyOiBudW1iZXI7XG4gICAgICAgIG1vbmV5QmV0OiBudW1iZXI7XG4gICAgICAgIHJvb21JZDogbnVtYmVyO1xuICAgICAgICBnYW1lSWQ6IG51bWJlcjtcbiAgICAgICAgbW9uZXlUeXBlOiBudW1iZXI7XG4gICAgICAgIHJ1bGU6IG51bWJlcjtcbiAgICAgICAgcGxheWVyU2l6ZTogbnVtYmVyO1xuICAgICAgICBwbGF5ZXJTdGF0dXM6IGFueVtdO1xuICAgICAgICBwbGF5ZXJJbmZvczogYW55W107XG4gICAgICAgIGdhbWVTdGF0ZTogbnVtYmVyO1xuICAgICAgICBnYW1lQWN0aW9uOiBudW1iZXI7XG4gICAgICAgIGNvdW50RG93blRpbWU6IG51bWJlcjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHZhciBhOiBudW1iZXI7XG4gICAgICAgICAgICB0aGlzLm15Q2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlCZXQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bGUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU2l6ZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyU3RhdHVzID0gW107XG4gICAgICAgICAgICBmb3IgKGEgPSAwOyBhIDwgdGhpcy5wbGF5ZXJTaXplOyBhKyspIHRoaXMucGxheWVyU3RhdHVzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbmZvcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChhID0gMDsgYSA8IHRoaXMucGxheWVyU2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB7fTtcbiAgICAgICAgICAgICAgICBiW1wibmlja05hbWVcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb3MucHVzaChiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVBY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQXV0b1N0YXJ0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpc0F1dG9TdGFydDogYm9vbGVhbjtcbiAgICAgICAgdGltZUF1dG9TdGFydDogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRvU3RhcnQgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMudGltZUF1dG9TdGFydCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hpYUJhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2FyZExpc3Q6IGFueVtdO1xuICAgICAgICBtYXVCaW5oOiBudW1iZXI7XG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xuICAgICAgICBjb3VudGRvd246IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB2YXIgYSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZExpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYTsgYisrKSB0aGlzLmNhcmRMaXN0LnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgdGhpcy5tYXVCaW5oID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZG93biA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVc2VyTGVhdmVSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBuaWNrTmFtZTogc3RyaW5nO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubmlja05hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkVXNlckpvaW5Sb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBpbmZvOiB7fTtcbiAgICAgICAgbXlDaGFpcjogbnVtYmVyO1xuICAgICAgICB1U3RhdHVzOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pbmZvID0ge307XG4gICAgICAgICAgICB0aGlzLmluZm9bXCJuaWNrTmFtZVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmluZm9bXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5pbmZvW1wibW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy51U3RhdHVzID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRVcGRhdGVNYXRjaCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbXlDaGFpcjogbnVtYmVyO1xuICAgICAgICBoYXNJbmZvOiBhbnlbXTtcbiAgICAgICAgaW5mb3M6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubXlDaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmhhc0luZm8gPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgYTsgYisrKSB0aGlzLmhhc0luZm8ucHVzaCh0aGlzLmdldEJvb2woKSk7XG4gICAgICAgICAgICB0aGlzLmluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKGIgPSAwOyBiIDwgYTsgYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0luZm9bYl0gJiYgKGNbXCJuaWNrTmFtZVwiXSA9IHRoaXMuZ2V0U3RyaW5nKCksIGNbXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpLCBjW1wibW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKSwgY1tcInN0YXR1c1wiXSA9IHRoaXMuZ2V0SW50KCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5mb3MucHVzaChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZE5vdGlmeVJlZ091dFJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIG91dENoYWlyOiBudW1iZXI7XG4gICAgICAgIGlzT3V0Um9vbTogYm9vbGVhbjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm91dENoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3V0Um9vbSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkS2lja09mZiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVhc29uOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWFzb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvIHRoZSBrIGR1bmcgdG9pXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkTW9pRGF0Q3VvYyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdGltZURhdEN1b2M6IG51bWJlcjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVEYXRDdW9jID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRNb0JhaSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY2hhaXJNb0JhaTogbnVtYmVyO1xuICAgICAgICBjYXJkU2l6ZTogbnVtYmVyO1xuICAgICAgICBjYXJkczogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpck1vQmFpID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5jYXJkcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmNhcmRTaXplOyBhKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRW5kR2FtZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcGxheWVyUmVzdWx0TGlzdDogYW55W107XG4gICAgICAgIHRpbWVFbmRHYW1lOiBudW1iZXI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllclJlc3VsdExpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSB0aGlzLmdldFNob3J0KCksIGIgPSAwOyBiIDwgYTsgYisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB7fTtcbiAgICAgICAgICAgICAgICBjW1wiY2hhaXJJbmRleFwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgIGNbXCJtYXViaW5oVHlwZVwiXSA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICAgICAgdmFyIGQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICAgICAgY1tcImNoaTFcIl0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gMDsgZSA8IGQ7IGUrKykgY1tcImNoaTFcIl0ucHVzaCh0aGlzLmdldEJ5dGUoKSk7XG4gICAgICAgICAgICAgICAgZCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgICAgICBjW1wiY2hpMlwiXSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoZSA9IDA7IGUgPCBkOyBlKyspIGNbXCJjaGkyXCJdLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgICAgIGQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICAgICAgY1tcImNoaTNcIl0gPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGUgPSAwOyBlIDwgZDsgZSsrKSBjW1wiY2hpM1wiXS5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKTtcbiAgICAgICAgICAgICAgICBjW1wibW9uZXlJbkNoaVwiXSA9IFtdO1xuICAgICAgICAgICAgICAgIGQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICAgICAgZm9yIChlID0gMDsgZSA8IGQ7IGUrKykgY1tcIm1vbmV5SW5DaGlcIl0ucHVzaCh0aGlzLmdldExvbmcoKSk7XG4gICAgICAgICAgICAgICAgY1tcIm1vbmV5QXRcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBjW1wibW9uZXlDb21tb25cIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBjW1wibW9uZXlTYXBcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBjW1wiY3VycmVudE1vbmV5XCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJSZXN1bHRMaXN0LnB1c2goYylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGltZUVuZEdhbWUgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkRG9pQ2h1b25nIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaHVvbmdDaGFpcjogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2h1b25nQ2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZENoYXRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBpc0ljb246IGJvb2xlYW47XG4gICAgICAgIGNvbnRlbnQ6IHN0cmluZztcbiAgICAgICAgbmlja25hbWU6IHN0cmluZztcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmlzSWNvbiA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gZGVjb2RlVVJJKHRoaXMuZ2V0U3RyaW5nKCkpO1xuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZEdhbWVJbmZvIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBteUNoYWlyOiBudW1iZXI7XG4gICAgICAgIGdhbWVTdGF0ZTogbnVtYmVyO1xuICAgICAgICBnYW1lQWN0aW9uOiBudW1iZXI7XG4gICAgICAgIGNvdW50ZG93blRpbWU6IG51bWJlcjtcbiAgICAgICAgbW9uZXlCZXQ6IG51bWJlcjtcbiAgICAgICAgbW9uZXlUeXBlOiBudW1iZXI7XG4gICAgICAgIGdhbWVJZDogbnVtYmVyO1xuICAgICAgICByb29tSWQ6IG51bWJlcjtcbiAgICAgICAgcnVsZTogbnVtYmVyO1xuICAgICAgICBoYXNJbmZvOiBhbnlbXTtcbiAgICAgICAgcGxheWVyczogYW55W107XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5teUNoYWlyID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZG93blRpbWUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlCZXQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLnJvb21JZCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLnJ1bGUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHZhciBhID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5oYXNJbmZvID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IGE7IGIrKykgdGhpcy5oYXNJbmZvW2JdID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoYiA9IDA7IGIgPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBiKyspXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzSW5mb1tiXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbYl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZVN0YXRlID09IGNtZC5Db2RlLlNUQVRFX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09IHRoaXMubXlDaGFpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2JdLmNhcmRMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBhOyBjKyspIHRoaXMucGxheWVyc1tiXS5jYXJkTGlzdC5wdXNoKHRoaXMuZ2V0Qnl0ZSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZ2FtZVN0YXRlID09IGNtZC5Db2RlLlNUQVRFX0VORCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tiXS5jYXJkTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjID0gMDsgYyA8IGE7IGMrKykgdGhpcy5wbGF5ZXJzW2JdLmNhcmRMaXN0LnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2JdLm1hdWJpbmhUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbYl0ubW9uZXlDb21tb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TG9uZygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2JdLnNvY2hpID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tiXS5zdGF0dXMgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2JdLmF2YXRhciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tiXS51c2VySWQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbYl0ubmlja05hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbYl0uY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRUb3BTZXJ2ZXIgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJhbmtUeXBlOiBudW1iZXI7XG4gICAgICAgIHRvcERheV9tb25leTogc3RyaW5nO1xuICAgICAgICB0b3BXZWVrX21vbmV5OiBzdHJpbmc7XG4gICAgICAgIHRvcE1vbnRoX21vbmV5OiBzdHJpbmc7XG4gICAgICAgIHRvcERheV9udW1iZXI6IHN0cmluZztcbiAgICAgICAgdG9wV2Vla19udW1iZXI6IHN0cmluZztcbiAgICAgICAgdG9wTW9udGhfbnVtYmVyOiBzdHJpbmc7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yYW5rVHlwZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy50b3BEYXlfbW9uZXkgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50b3BXZWVrX21vbmV5ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudG9wTW9udGhfbW9uZXkgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50b3BEYXlfbnVtYmVyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMudG9wV2Vla19udW1iZXIgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy50b3BNb250aF9udW1iZXIgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkSm9pblJvb21GYWlsIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG5ld1xuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlZE1hdUJpbmhDb25maWcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGxpc3RTaXplOiBudW1iZXI7XG4gICAgICAgIGxpc3Q6IGFueVtdO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubGlzdFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5saXN0U2l6ZTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGIgPSB7fTtcbiAgICAgICAgICAgICAgICBiW1wibWF4VXNlclBlclJvb21cIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlUeXBlXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgYltcIm1vbmV5QmV0XCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgYltcIm1vbmV5UmVxdWlyZVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIGJbXCJuUGVyc2lvblwiXSA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZWRCaW5oU29DaGkgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyOiBudW1iZXI7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5jaGFpciA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbmV3XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkWGVwTGFpIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjaGFpcjogbnVtYmVyO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgY21kOyJdfQ==