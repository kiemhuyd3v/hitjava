"use strict";
cc._RF.push(module, '15481BPXlVMxovmT7uRFVfv', 'TaiXiuMini2.Cmd');
// TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.Cmd.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SCRIBE = 2000;
        Code.UNSCRIBE = 2001;
        Code.BET = 2110;
        Code.HISTORIES = 2116;
        Code.GAME_INFO = 2111;
        Code.UPDATE_TIME = 2112;
        Code.DICES_RESULT = 2113;
        Code.RESULT = 2114;
        Code.NEW_GAME = 2115;
        Code.LOG_CHAT = 18003;
        Code.SEND_CHAT = 18000;
        Code.SCRIBE_CHAT = 18001;
        Code.UNSCRIBE_CHAT = 18002;
        return Code;
    }());
    cmd.Code = Code;
    var SendScribe = /** @class */ (function (_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiu);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendScribe;
    }(Network_OutPacket_1.default));
    cmd.SendScribe = SendScribe;
    var SendUnScribe = /** @class */ (function (_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiu);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendUnScribe;
    }(Network_OutPacket_1.default));
    cmd.SendUnScribe = SendUnScribe;
    var SendScribeChat = /** @class */ (function (_super) {
        __extends(SendScribeChat, _super);
        function SendScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendScribeChat;
    }(Network_OutPacket_1.default));
    cmd.SendScribeChat = SendScribeChat;
    var SendUnScribeChat = /** @class */ (function (_super) {
        __extends(SendUnScribeChat, _super);
        function SendUnScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendUnScribeChat;
    }(Network_OutPacket_1.default));
    cmd.SendUnScribeChat = SendUnScribeChat;
    var SendChat = /** @class */ (function (_super) {
        __extends(SendChat, _super);
        function SendChat(message) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SEND_CHAT);
            _this.packHeader();
            _this.putString(message);
            _this.updateSize();
            return _this;
        }
        return SendChat;
    }(Network_OutPacket_1.default));
    cmd.SendChat = SendChat;
    var SendBet = /** @class */ (function (_super) {
        __extends(SendBet, _super);
        function SendBet(referenceId, betValue, door, remainTime) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BET);
            _this.packHeader();
            _this.putInt(1);
            _this.putLong(referenceId);
            _this.putLong(betValue);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.putShort(door);
            _this.putShort(remainTime);
            _this.updateSize();
            return _this;
        }
        return SendBet;
    }(Network_OutPacket_1.default));
    cmd.SendBet = SendBet;
    var ReceiveGameInfo = /** @class */ (function (_super) {
        __extends(ReceiveGameInfo, _super);
        function ReceiveGameInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.gameId = 0;
            _this.moneyType = 0;
            _this.referenceId = 0;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potTai = 0;
            _this.potXiu = 0;
            _this.betTai = 0;
            _this.betXiu = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.remainTimeRutLoc = 0;
            _this.gameId = _this.getShort();
            _this.moneyType = _this.getShort();
            _this.referenceId = _this.getLong();
            _this.remainTime = _this.getShort();
            _this.bettingState = _this.getBool();
            _this.potTai = _this.getLong();
            _this.potXiu = _this.getLong();
            _this.betTai = _this.getLong();
            _this.betXiu = _this.getLong();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            _this.remainTimeRutLoc = _this.getShort();
            return _this;
        }
        return ReceiveGameInfo;
    }(Network_InPacket_1.default));
    cmd.ReceiveGameInfo = ReceiveGameInfo;
    var ReceiveUpdateTime = /** @class */ (function (_super) {
        __extends(ReceiveUpdateTime, _super);
        function ReceiveUpdateTime(data) {
            var _this = _super.call(this, data) || this;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potTai = 0;
            _this.potXiu = 0;
            _this.numBetTai = 0;
            _this.numBetXiu = 0;
            _this.remainTime = _this.getShort();
            _this.bettingState = _this.getBool();
            _this.potTai = _this.getLong();
            _this.potXiu = _this.getLong();
            _this.numBetTai = _this.getShort();
            _this.numBetXiu = _this.getShort();
            return _this;
        }
        return ReceiveUpdateTime;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateTime = ReceiveUpdateTime;
    var ReceiveDicesResult = /** @class */ (function (_super) {
        __extends(ReceiveDicesResult, _super);
        function ReceiveDicesResult(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.result = _this.getShort();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            return _this;
        }
        return ReceiveDicesResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveDicesResult = ReceiveDicesResult;
    var ReceiveResult = /** @class */ (function (_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
            var _this = _super.call(this, data) || this;
            _this.moneyType = 1;
            _this.totalMoney = 0;
            _this.currentMoney = 0;
            _this.moneyType = _this.getShort();
            _this.totalMoney = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveResult = ReceiveResult;
    var ReceiveNewGame = /** @class */ (function (_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.remainTimeRutLoc = 0;
            _this.referenceId = _this.getLong();
            _this.remainTimeRutLoc = _this.getShort();
            return _this;
        }
        return ReceiveNewGame;
    }(Network_InPacket_1.default));
    cmd.ReceiveNewGame = ReceiveNewGame;
    var ReceiveHistories = /** @class */ (function (_super) {
        __extends(ReceiveHistories, _super);
        function ReceiveHistories(data) {
            var _this = _super.call(this, data) || this;
            _this.data = "";
            _this.data = _this.getString();
            return _this;
        }
        return ReceiveHistories;
    }(Network_InPacket_1.default));
    cmd.ReceiveHistories = ReceiveHistories;
    var ReceiveBet = /** @class */ (function (_super) {
        __extends(ReceiveBet, _super);
        function ReceiveBet(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.currentMoney = 0;
            _this.result = _this.getError();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveBet;
    }(Network_InPacket_1.default));
    cmd.ReceiveBet = ReceiveBet;
    var ReceiveLogChat = /** @class */ (function (_super) {
        __extends(ReceiveLogChat, _super);
        function ReceiveLogChat(data) {
            var _this = _super.call(this, data) || this;
            _this.message = "";
            _this.minVipPoint = 0;
            _this.timeBan = 0;
            _this.userType = 0;
            _this.message = _this.getString();
            _this.minVipPoint = _this.getByte();
            _this.timeBan = _this.getLong();
            _this.userType = _this.getByte();
            return _this;
        }
        return ReceiveLogChat;
    }(Network_InPacket_1.default));
    cmd.ReceiveLogChat = ReceiveLogChat;
    var ReceiveSendChat = /** @class */ (function (_super) {
        __extends(ReceiveSendChat, _super);
        function ReceiveSendChat(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.nickname = "";
            _this.message = "";
            _this.error = _this.getError();
            _this.nickname = _this.getString();
            _this.message = _this.getString();
            return _this;
        }
        return ReceiveSendChat;
    }(Network_InPacket_1.default));
    cmd.ReceiveSendChat = ReceiveSendChat;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();