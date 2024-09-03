"use strict";
cc._RF.push(module, '62c5aekeZlAL4VtbeCtXj2Z', 'MiniPoker.Cmd');
// MiniPoker/MiniPokerScript/MiniPoker.Cmd.ts

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
        Code.SCRIBE = 4003;
        Code.UNSCRIBE = 4004;
        Code.CHANGE_ROOM = 4005;
        Code.SPIN = 4001;
        Code.UPDATE_JACKPOT = 4002;
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
    var SendSpin = /** @class */ (function (_super) {
        __extends(SendSpin, _super);
        function SendSpin(betValue) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SPIN);
            _this.packHeader();
            _this.putLong(betValue);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendSpin;
    }(Network_OutPacket_1.default));
    cmd.SendSpin = SendSpin;
    var ReceiveUpdateJackpot = /** @class */ (function (_super) {
        __extends(ReceiveUpdateJackpot, _super);
        function ReceiveUpdateJackpot(data) {
            var _this = _super.call(this, data) || this;
            _this.value = 0;
            _this.x2 = 0;
            _this.value = _this.getLong();
            _this.x2 = _this.getByte();
            return _this;
        }
        return ReceiveUpdateJackpot;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateJackpot = ReceiveUpdateJackpot;
    var ReceiveSpin = /** @class */ (function (_super) {
        __extends(ReceiveSpin, _super);
        function ReceiveSpin(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.prize = 0;
            _this.card1 = 0;
            _this.card2 = 0;
            _this.card3 = 0;
            _this.card4 = 0;
            _this.card5 = 0;
            _this.currentMoney = 0;
            _this.result = _this.getShort();
            _this.prize = _this.getLong();
            _this.card1 = _this.getByte();
            _this.card2 = _this.getByte();
            _this.card3 = _this.getByte();
            _this.card4 = _this.getByte();
            _this.card5 = _this.getByte();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveSpin;
    }(Network_InPacket_1.default));
    cmd.ReceiveSpin = ReceiveSpin;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();