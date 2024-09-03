"use strict";
cc._RF.push(module, 'a7c6afh+XBMeoI7bhZgC4XY', 'CardGame.Cmd');
// Lobby/LobbyScript/Script/networks/CardGame.Cmd.ts

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
exports.CardGameCmd = void 0;
var Network_OutPacket_1 = require("./Network.OutPacket");
var Network_InPacket_1 = require("./Network.InPacket");
var ccclass = cc._decorator.ccclass;
var CardGameCmd;
(function (CardGameCmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.LOGIN = 1;
        Code.NOTIFY_DISCONNECT = 37;
        Code.PING_PONG = 50;
        Code.JOIN_ROOM = 3001;
        Code.RECONNECT_GAME_ROOM = 3002;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.HOLD = 3116;
        Code.MONEY_BET_CONFIG = 3003;
        Code.GET_LIST_ROOM = 3014;
        Code.TOP_SERVER = 1001;
        Code.CHEAT_CARD = 3115;
        Code.PING_TEST = 1050;
        Code.CHAT_ROOM = 3008;
        Code.NO_HU_VANG = 3007;
        Code.THONG_TIN_HU_VANG = 3009;
        Code.REQUEST_INFO_MOI_CHOI = 3010;
        Code.MOI_CHOI = 3011;
        Code.ACCEPT_MOI_CHOI = 3012;
        Code.CREATE_ROOM = 3013;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.FIND_ROOM_LOBBY = 3016;
        Code.GET_XOCDIA_CONFIG = 3017;
        Code.CREATE_ROOM_FAIL = 3018;
        return Code;
    }());
    CardGameCmd.Code = Code;
    var SendMoneyBetConfig = /** @class */ (function (_super) {
        __extends(SendMoneyBetConfig, _super);
        function SendMoneyBetConfig() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.MONEY_BET_CONFIG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendMoneyBetConfig;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendMoneyBetConfig = SendMoneyBetConfig;
    var ResMoneyBetConfig = /** @class */ (function (_super) {
        __extends(ResMoneyBetConfig, _super);
        function ResMoneyBetConfig(data) {
            var _this = _super.call(this, data) || this;
            _this.list = [];
            _this.rules = [];
            var listSize = _this.getShort();
            for (var a = 0; a < listSize; a++) {
                var b = {
                    maxUserPerRoom: _this.getInt(),
                    moneyType: _this.getByte(),
                    moneyBet: _this.getLong(),
                    moneyRequire: _this.getLong(),
                    nPersion: _this.getInt(),
                };
                _this.list.push(b);
            }
            for (a = 0; a < listSize; a++)
                _this.rules.push(_this.getByte());
            return _this;
        }
        return ResMoneyBetConfig;
    }(Network_InPacket_1.default));
    CardGameCmd.ResMoneyBetConfig = ResMoneyBetConfig;
    var SendGetListRoom = /** @class */ (function (_super) {
        __extends(SendGetListRoom, _super);
        function SendGetListRoom(moneyType, maxPlayer, param3, param4, cardFrom, cardTo) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_LIST_ROOM);
            _this.packHeader();
            _this.putByte(moneyType);
            _this.putByte(maxPlayer);
            _this.putByte(param3);
            _this.putByte(param4);
            _this.putByte(cardFrom);
            _this.putByte(cardTo);
            _this.updateSize();
            return _this;
        }
        return SendGetListRoom;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendGetListRoom = SendGetListRoom;
    var SendJoinRoom = /** @class */ (function (_super) {
        __extends(SendJoinRoom, _super);
        function SendJoinRoom(type, max, bet, rule) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.JOIN_ROOM);
            _this.packHeader();
            _this.putInt(type);
            _this.putInt(max);
            _this.putLong(bet);
            _this.putInt(rule);
            _this.updateSize();
            return _this;
        }
        return SendJoinRoom;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendJoinRoom = SendJoinRoom;
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
    CardGameCmd.SendJoinRoomById = SendJoinRoomById;
    var ReceivedJoinRoomFail = /** @class */ (function (_super) {
        __extends(ReceivedJoinRoomFail, _super);
        function ReceivedJoinRoomFail(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ReceivedJoinRoomFail;
    }(Network_InPacket_1.default));
    CardGameCmd.ReceivedJoinRoomFail = ReceivedJoinRoomFail;
})(CardGameCmd = exports.CardGameCmd || (exports.CardGameCmd = {}));
exports.default = CardGameCmd;

cc._RF.pop();