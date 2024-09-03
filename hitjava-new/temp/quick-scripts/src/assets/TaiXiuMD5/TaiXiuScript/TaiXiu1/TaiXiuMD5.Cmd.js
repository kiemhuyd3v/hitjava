"use strict";
cc._RF.push(module, 'f9e71kSmIdBIYO//zV5iK3x', 'TaiXiuMD5.Cmd');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.Cmd.ts

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
exports.cmdMD5 = void 0;
var Configs_1 = require("../../../Loading/src/Configs");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cmdMD5;
(function (cmdMD5) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SUBSCRIBE = 22000;
        Code.UNSUBSCRIBE = 22001;
        Code.BET = 22110;
        Code.HISTORIES = 22116;
        Code.GAME_INFO = 22111;
        Code.UPDATE_TIME = 22112;
        Code.DICES_RESULT = 22113;
        Code.RESULT = 22114;
        Code.NEW_GAME = 22115;
        Code.LOG_CHAT = 23103;
        Code.SEND_CHAT = 23100;
        Code.SUBSCRIBE_CHAT = 23101;
        Code.UNSUBSCRIBE_CHAT = 23102;
        return Code;
    }());
    cmdMD5.Code = Code;
    var SendScribe = /** @class */ (function (_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
            var _this = _super.call(this) || this;
            console.log("send subscribe md5" + Code.SUBSCRIBE);
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBSCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiuMD5);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendScribe;
    }(Network_OutPacket_1.default));
    cmdMD5.SendScribe = SendScribe;
    var SendUnScribe = /** @class */ (function (_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBSCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiuMD5);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendUnScribe;
    }(Network_OutPacket_1.default));
    cmdMD5.SendUnScribe = SendUnScribe;
    var SendScribeChat = /** @class */ (function (_super) {
        __extends(SendScribeChat, _super);
        function SendScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBSCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendScribeChat;
    }(Network_OutPacket_1.default));
    cmdMD5.SendScribeChat = SendScribeChat;
    var SendUnScribeChat = /** @class */ (function (_super) {
        __extends(SendUnScribeChat, _super);
        function SendUnScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBSCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendUnScribeChat;
    }(Network_OutPacket_1.default));
    cmdMD5.SendUnScribeChat = SendUnScribeChat;
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
    cmdMD5.SendChat = SendChat;
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
    cmdMD5.SendBet = SendBet;
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
            _this.md5Code = "";
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
            _this.md5Code = _this.getString();
            return _this;
        }
        return ReceiveGameInfo;
    }(Network_InPacket_1.default));
    cmdMD5.ReceiveGameInfo = ReceiveGameInfo;
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
    cmdMD5.ReceiveUpdateTime = ReceiveUpdateTime;
    var ReceiveDicesResult = /** @class */ (function (_super) {
        __extends(ReceiveDicesResult, _super);
        function ReceiveDicesResult(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.md5code = "";
            _this.result = _this.getShort();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            _this.md5code = _this.getString();
            return _this;
        }
        return ReceiveDicesResult;
    }(Network_InPacket_1.default));
    cmdMD5.ReceiveDicesResult = ReceiveDicesResult;
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
    cmdMD5.ReceiveResult = ReceiveResult;
    var ReceiveNewGame = /** @class */ (function (_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.remainTimeRutLoc = 0;
            _this.md5code = "";
            _this.referenceId = _this.getLong();
            _this.remainTimeRutLoc = _this.getShort();
            _this.md5code = _this.getString();
            return _this;
        }
        return ReceiveNewGame;
    }(Network_InPacket_1.default));
    cmdMD5.ReceiveNewGame = ReceiveNewGame;
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
    cmdMD5.ReceiveHistories = ReceiveHistories;
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
    cmdMD5.ReceiveBet = ReceiveBet;
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
    cmdMD5.ReceiveLogChat = ReceiveLogChat;
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
    cmdMD5.ReceiveSendChat = ReceiveSendChat;
})(cmdMD5 = exports.cmdMD5 || (exports.cmdMD5 = {}));
exports.default = cmdMD5;

cc._RF.pop();