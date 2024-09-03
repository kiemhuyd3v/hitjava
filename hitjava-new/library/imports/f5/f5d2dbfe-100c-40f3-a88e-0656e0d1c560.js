"use strict";
cc._RF.push(module, 'f5d2dv+EAxA86iOBlbg0cVg', 'CaoThap.Cmd');
// CaoThap/CaoThapScript/CaoThap.Cmd.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SCRIBE = 6004;
        Code.UNSCRIBE = 6005;
        Code.START = 6001;
        Code.PLAY = 6002;
        Code.CHANGE_ROOM = 6006;
        Code.UPDATE_TIME = 6008;
        Code.UPDATE_INFO = 6009;
        Code.UPDATE_JACKPOT = 6003;
        Code.STOP = 6007;
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
    var ReceiveScribe = /** @class */ (function (_super) {
        __extends(ReceiveScribe, _super);
        function ReceiveScribe(data) {
            var _this = _super.call(this, data) || this;
            _this.status = 0;
            _this.roomId = 0;
            _this.status = _this.getByte();
            _this.roomId = _this.getByte();
            return _this;
        }
        return ReceiveScribe;
    }(Network_InPacket_1.default));
    cmd.ReceiveScribe = ReceiveScribe;
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
    var ReceiveChangeRoom = /** @class */ (function (_super) {
        __extends(ReceiveChangeRoom, _super);
        function ReceiveChangeRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.status = 0;
            _this.status = _this.getByte();
            return _this;
        }
        return ReceiveChangeRoom;
    }(Network_InPacket_1.default));
    cmd.ReceiveChangeRoom = ReceiveChangeRoom;
    var SendStart = /** @class */ (function (_super) {
        __extends(SendStart, _super);
        function SendStart(betValue) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.START);
            _this.packHeader();
            _this.putInt(betValue);
            _this.putByte(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendStart;
    }(Network_OutPacket_1.default));
    cmd.SendStart = SendStart;
    var ReceiveStart = /** @class */ (function (_super) {
        __extends(ReceiveStart, _super);
        function ReceiveStart(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.referenceId = 0;
            _this.card = 0;
            _this.money1 = 0;
            _this.money2 = 0;
            _this.money3 = 0;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.referenceId = _this.getLong();
            _this.card = _this.getByte();
            _this.money1 = _this.getLong();
            _this.money2 = _this.getLong();
            _this.money3 = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveStart;
    }(Network_InPacket_1.default));
    cmd.ReceiveStart = ReceiveStart;
    var SendPlay = /** @class */ (function (_super) {
        __extends(SendPlay, _super);
        function SendPlay(betValue, isUp) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.PLAY);
            _this.packHeader();
            _this.putInt(betValue);
            _this.putByte(Configs_1.default.App.MONEY_TYPE);
            _this.putByte(isUp ? 1 : 0);
            _this.updateSize();
            return _this;
        }
        return SendPlay;
    }(Network_OutPacket_1.default));
    cmd.SendPlay = SendPlay;
    var ReceivePlay = /** @class */ (function (_super) {
        __extends(ReceivePlay, _super);
        function ReceivePlay(data) {
            var _this = _super.call(this, data) || this;
            _this.card = 0;
            _this.money1 = 0;
            _this.money2 = 0;
            _this.money3 = 0;
            _this.card = _this.getByte();
            _this.money1 = _this.getLong();
            _this.money2 = _this.getLong();
            _this.money3 = _this.getLong();
            return _this;
        }
        return ReceivePlay;
    }(Network_InPacket_1.default));
    cmd.ReceivePlay = ReceivePlay;
    var SendStop = /** @class */ (function (_super) {
        __extends(SendStop, _super);
        function SendStop(betValue) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.STOP);
            _this.packHeader();
            _this.putInt(betValue);
            _this.putByte(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendStop;
    }(Network_OutPacket_1.default));
    cmd.SendStop = SendStop;
    var ReceiveStop = /** @class */ (function (_super) {
        __extends(ReceiveStop, _super);
        function ReceiveStop(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.currentMoney = 0;
            _this.moneyExchange = 0;
            _this.result = _this.getByte();
            _this.currentMoney = _this.getLong();
            _this.moneyExchange = _this.getLong();
            return _this;
        }
        return ReceiveStop;
    }(Network_InPacket_1.default));
    cmd.ReceiveStop = ReceiveStop;
    var ReceiveUpdateInfo = /** @class */ (function (_super) {
        __extends(ReceiveUpdateInfo, _super);
        function ReceiveUpdateInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.numA = 0;
            _this.card = 0;
            _this.money1 = 0;
            _this.money2 = 0;
            _this.money3 = 0;
            _this.time = 0;
            _this.step = 0;
            _this.referenceId = 0;
            _this.cards = "";
            _this.numA = _this.getByte();
            _this.card = _this.getByte();
            _this.money1 = _this.getLong();
            _this.money2 = _this.getLong();
            _this.money3 = _this.getLong();
            _this.time = _this.getShort();
            _this.step = _this.getByte();
            _this.referenceId = _this.getLong();
            _this.cards = _this.getString();
            return _this;
        }
        return ReceiveUpdateInfo;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateInfo = ReceiveUpdateInfo;
    var ReceiveUpdateJackpot = /** @class */ (function (_super) {
        __extends(ReceiveUpdateJackpot, _super);
        function ReceiveUpdateJackpot(data) {
            var _this = _super.call(this, data) || this;
            _this.value = 0;
            _this.value = _this.getLong();
            return _this;
        }
        return ReceiveUpdateJackpot;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateJackpot = ReceiveUpdateJackpot;
    var ReceiveUpdateTime = /** @class */ (function (_super) {
        __extends(ReceiveUpdateTime, _super);
        function ReceiveUpdateTime(data) {
            var _this = _super.call(this, data) || this;
            _this.time = 0;
            _this.time = _this.getShort();
            return _this;
        }
        return ReceiveUpdateTime;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateTime = ReceiveUpdateTime;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();