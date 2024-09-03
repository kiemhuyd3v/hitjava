"use strict";
cc._RF.push(module, '79d3al+39NBj5PS+BBVaVa+', 'Slot4Cmd');
// Slot4/Slot4Script/Slot4Cmd.ts

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
var ccclass = cc._decorator.ccclass;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SUBCRIBE = 14003;
        Code.UNSUBCRIBE = 14004;
        Code.CHANGE_ROOM = 14005;
        Code.PLAY = 14001;
        Code.UPDATE_RESULT = 14001;
        Code.UPDATE_POT = 14002;
        Code.AUTO = 14006;
        Code.STOP_AUTO = 14006;
        Code.FORCE_STOP_AUTO = 14008;
        Code.DATE_X2 = 14009;
        Code.BIG_WIN = 14010;
        Code.FREE = 14011;
        Code.FREE_DAI_LY = 14012;
        Code.MINIMIZE = 14013;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SUBCRIBE_HALL_SLOT = 10001;
        return Code;
    }());
    cmd.Code = Code;
    var ReceiveFreeDaiLy = /** @class */ (function (_super) {
        __extends(ReceiveFreeDaiLy, _super);
        function ReceiveFreeDaiLy(data) {
            var _this = _super.call(this, data) || this;
            _this.freeSpin = 0;
            _this.freeSpin = _this.getByte();
            return _this;
        }
        return ReceiveFreeDaiLy;
    }(Network_InPacket_1.default));
    cmd.ReceiveFreeDaiLy = ReceiveFreeDaiLy;
    var ResUpdateJackpotSlots = /** @class */ (function (_super) {
        __extends(ResUpdateJackpotSlots, _super);
        function ResUpdateJackpotSlots(data) {
            var _this = _super.call(this, data) || this;
            _this.pots = "";
            _this.pots = _this.getString();
            return _this;
        }
        return ResUpdateJackpotSlots;
    }(Network_InPacket_1.default));
    cmd.ResUpdateJackpotSlots = ResUpdateJackpotSlots;
    var SendUnSubcribe = /** @class */ (function (_super) {
        __extends(SendUnSubcribe, _super);
        function SendUnSubcribe(roomId) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBCRIBE);
            _this.packHeader();
            _this.putByte(roomId);
            _this.updateSize();
            return _this;
        }
        return SendUnSubcribe;
    }(Network_OutPacket_1.default));
    cmd.SendUnSubcribe = SendUnSubcribe;
    var SendSubcribe = /** @class */ (function (_super) {
        __extends(SendSubcribe, _super);
        function SendSubcribe(roomId) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBCRIBE);
            _this.packHeader();
            _this.putByte(roomId);
            _this.updateSize();
            return _this;
        }
        return SendSubcribe;
    }(Network_OutPacket_1.default));
    cmd.SendSubcribe = SendSubcribe;
    var SendPlay = /** @class */ (function (_super) {
        __extends(SendPlay, _super);
        function SendPlay(lines) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.PLAY);
            _this.packHeader();
            _this.putString(lines);
            _this.updateSize();
            return _this;
        }
        return SendPlay;
    }(Network_OutPacket_1.default));
    cmd.SendPlay = SendPlay;
    var SendChangeRoom = /** @class */ (function (_super) {
        __extends(SendChangeRoom, _super);
        function SendChangeRoom(roomLeavedId, roomJoinedId) {
            var _this = _super.call(this) || this;
            // cc.log("SendChangeRoom roomLeavedId:"+roomLeavedId+" roomJoinedId:"+roomJoinedId);
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHANGE_ROOM);
            _this.packHeader();
            _this.putByte(roomLeavedId);
            _this.putByte(roomJoinedId);
            _this.updateSize();
            return _this;
        }
        return SendChangeRoom;
    }(Network_OutPacket_1.default));
    cmd.SendChangeRoom = SendChangeRoom;
    var ReceiveUpdatePot = /** @class */ (function (_super) {
        __extends(ReceiveUpdatePot, _super);
        function ReceiveUpdatePot(data) {
            var _this = _super.call(this, data) || this;
            _this.valueRoom1 = 0;
            _this.valueRoom2 = 0;
            _this.valueRoom3 = 0;
            _this.x21 = 0;
            _this.x22 = 0;
            _this.valueRoom1 = _this.getLong();
            _this.valueRoom2 = _this.getLong();
            _this.valueRoom3 = _this.getLong();
            _this.x21 = _this.getByte();
            _this.x22 = _this.getByte();
            return _this;
        }
        return ReceiveUpdatePot;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdatePot = ReceiveUpdatePot;
    var ReceiveResult = /** @class */ (function (_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
            var _this = _super.call(this, data) || this;
            _this.ref = 0;
            _this.result = 0;
            _this.matrix = "";
            _this.linesWin = "";
            _this.haiSao = "";
            _this.prize = 0;
            _this.currentMoney = 0;
            _this.isFreeSpin = 0;
            _this.ratio = 0;
            _this.currentNumberFreeSpin = 0;
            _this.ref = _this.getLong();
            _this.result = _this.getByte();
            _this.matrix = _this.getString();
            _this.linesWin = _this.getString();
            _this.haiSao = _this.getString();
            _this.prize = _this.getLong();
            _this.currentMoney = _this.getLong();
            _this.isFreeSpin = _this.getByte();
            _this.ratio = _this.getByte();
            _this.currentNumberFreeSpin = _this.getByte();
            return _this;
        }
        return ReceiveResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveResult = ReceiveResult;
    var ReceiveDateX2 = /** @class */ (function (_super) {
        __extends(ReceiveDateX2, _super);
        function ReceiveDateX2(data) {
            var _this = _super.call(this, data) || this;
            _this.ngayX2 = "";
            _this.remain = 0;
            _this.currentMoney = 0;
            _this.freeSpin = 0;
            _this.lines = "";
            _this.currentRoom = 0;
            _this.ngayX2 = _this.getString();
            _this.remain = _this.getByte();
            _this.currentMoney = _this.getLong();
            _this.freeSpin = _this.getByte();
            _this.lines = _this.getString();
            _this.currentRoom = _this.getByte();
            return _this;
        }
        return ReceiveDateX2;
    }(Network_InPacket_1.default));
    cmd.ReceiveDateX2 = ReceiveDateX2;
    var ReqSubcribeHallSlot = /** @class */ (function (_super) {
        __extends(ReqSubcribeHallSlot, _super);
        function ReqSubcribeHallSlot() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBCRIBE_HALL_SLOT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return ReqSubcribeHallSlot;
    }(Network_OutPacket_1.default));
    cmd.ReqSubcribeHallSlot = ReqSubcribeHallSlot;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();