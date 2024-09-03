"use strict";
cc._RF.push(module, 'ac6f53uNYxDW4HGvzMg8Vl8', 'BauCua.Cmd');
// BauCua/BauCuaScript/BauCua.Cmd.ts

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
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SCRIBE = 5001;
        Code.UNSCRIBE = 5002;
        Code.CHANGE_ROOM = 5003;
        Code.BET = 5004;
        Code.INFO = 5005;
        Code.START_NEW_GAME = 5007;
        Code.UPDATE = 5006;
        Code.RESULT = 5008;
        Code.PRIZE = 5009;
        return Code;
    }());
    cmd.Code = Code;
    var SendScribe = /** @class */ (function (_super) {
        __extends(SendScribe, _super);
        function SendScribe(betIdx) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SCRIBE);
            _this.packHeader();
            _this.putByte(betIdx);
            _this.updateSize();
            return _this;
        }
        return SendScribe;
    }(Network_OutPacket_1.default));
    cmd.SendScribe = SendScribe;
    var SendUnScribe = /** @class */ (function (_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe(betIdx) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSCRIBE);
            _this.packHeader();
            _this.putByte(betIdx);
            _this.updateSize();
            return _this;
        }
        return SendUnScribe;
    }(Network_OutPacket_1.default));
    cmd.SendUnScribe = SendUnScribe;
    var SendChangeRoom = /** @class */ (function (_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(oldBetIdx, newBetIdx) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHANGE_ROOM);
            _this.packHeader();
            _this.putByte(oldBetIdx);
            _this.putByte(newBetIdx);
            _this.updateSize();
            return _this;
        }
        return SendChangeRoom;
    }(Network_OutPacket_1.default));
    cmd.SendChangeRoom = SendChangeRoom;
    var SendBet = /** @class */ (function (_super) {
        __extends(SendBet, _super);
        function SendBet(betData) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BET);
            _this.packHeader();
            _this.putString(betData);
            _this.updateSize();
            return _this;
        }
        return SendBet;
    }(Network_OutPacket_1.default));
    cmd.SendBet = SendBet;
    var ReceiveBet = /** @class */ (function (_super) {
        __extends(ReceiveBet, _super);
        function ReceiveBet(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.currentMoney = 0;
            _this.result = _this.getByte();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveBet;
    }(Network_InPacket_1.default));
    cmd.ReceiveBet = ReceiveBet;
    var ReceiveInfo = /** @class */ (function (_super) {
        __extends(ReceiveInfo, _super);
        function ReceiveInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potData = "";
            _this.betData = "";
            _this.lichSuPhien = "";
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.xPot = 0;
            _this.xValue = 0;
            _this.room = 0;
            _this.referenceId = _this.getLong();
            _this.remainTime = _this.getByte();
            _this.bettingState = _this.getBool();
            _this.potData = _this.getString();
            _this.betData = _this.getString();
            _this.lichSuPhien = _this.getString();
            _this.dice1 = _this.getByte();
            _this.dice2 = _this.getByte();
            _this.dice3 = _this.getByte();
            _this.xPot = _this.getByte();
            _this.xValue = _this.getByte();
            _this.room = _this.getByte();
            return _this;
        }
        return ReceiveInfo;
    }(Network_InPacket_1.default));
    cmd.ReceiveInfo = ReceiveInfo;
    var ReceiveNewGame = /** @class */ (function (_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.referenceId = _this.getLong();
            return _this;
        }
        return ReceiveNewGame;
    }(Network_InPacket_1.default));
    cmd.ReceiveNewGame = ReceiveNewGame;
    var ReceiveUpdate = /** @class */ (function (_super) {
        __extends(ReceiveUpdate, _super);
        function ReceiveUpdate(data) {
            var _this = _super.call(this, data) || this;
            _this.potData = "";
            _this.remainTime = 0;
            _this.bettingState = 0;
            _this.potData = _this.getString();
            _this.remainTime = _this.getByte();
            _this.bettingState = _this.getByte();
            return _this;
        }
        return ReceiveUpdate;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdate = ReceiveUpdate;
    var ReceiveResult = /** @class */ (function (_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
            var _this = _super.call(this, data) || this;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.xPot = 0;
            _this.xValue = 0;
            _this.dice1 = _this.getByte();
            _this.dice2 = _this.getByte();
            _this.dice3 = _this.getByte();
            _this.xPot = _this.getByte();
            _this.xValue = _this.getByte();
            return _this;
        }
        return ReceiveResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveResult = ReceiveResult;
    var ReceivePrize = /** @class */ (function (_super) {
        __extends(ReceivePrize, _super);
        function ReceivePrize(data) {
            var _this = _super.call(this, data) || this;
            _this.prize = 0;
            _this.currentMoney = 0;
            _this.room = 0;
            _this.prize = _this.getLong();
            _this.currentMoney = _this.getLong();
            _this.room = _this.getByte();
            return _this;
        }
        return ReceivePrize;
    }(Network_InPacket_1.default));
    cmd.ReceivePrize = ReceivePrize;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();