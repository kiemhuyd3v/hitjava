
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot7/Slot7Script/Slot7.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccf6bIJM3RMJI9nJJghXW6o', 'Slot7.Cmd');
// Slot7/Slot7Script/Slot7.Cmd.ts

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
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SUBCRIBE = 4003;
        Code.UNSUBCRIBE = 4004;
        Code.CHANGE_ROOM = 4005;
        Code.PLAY = 4001;
        Code.UPDATE_POT = 4002;
        Code.AUTO = 4006;
        Code.FORCE_STOP_AUTO = 4008;
        Code.DATE_X2 = 4009;
        Code.BIG_WIN = 4010;
        Code.FREE = 4011;
        Code.FREE_DAI_LY = 4012;
        Code.MINIMIZE = 4013;
        Code.UPDATE_JACKPOT_SLOTS = 10003;
        Code.SUBCRIBE_HALL_SLOT = 10001;
        return Code;
    }());
    cmd.Code = Code;
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
            cc.log("room leave: " + roomLeavedId + ", room join: " + roomJoinedId);
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
            _this.jackpot = 0;
            _this.x2 = 0;
            _this.jackpot = _this.getLong();
            _this.x2 = _this.getByte();
            return _this;
        }
        return ReceiveUpdatePot;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdatePot = ReceiveUpdatePot;
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
    var ReceivePlay = /** @class */ (function (_super) {
        __extends(ReceivePlay, _super);
        function ReceivePlay(data) {
            var _this = _super.call(this, data) || this;
            _this.ref = 0;
            _this.result = 0;
            _this.matrix = "";
            _this.linesWin = "";
            _this.haiSao = "";
            _this.prize = 0;
            _this.currentMoney = 0;
            _this.freeSpin = 0;
            _this.isFree = false;
            _this.itemsWild = "";
            _this.ratio = 0;
            _this.currentNumberFreeSpin = 0;
            _this.ref = _this.getLong();
            _this.result = _this.getByte();
            _this.matrix = _this.getString();
            _this.linesWin = _this.getString();
            _this.haiSao = _this.getString();
            _this.prize = _this.getLong();
            _this.currentMoney = _this.getLong();
            _this.freeSpin = _this.getByte();
            _this.isFree = _this.getBool();
            _this.itemsWild = _this.getString();
            _this.ratio = _this.getByte();
            _this.currentNumberFreeSpin = _this.getByte();
            return _this;
        }
        return ReceivePlay;
    }(Network_InPacket_1.default));
    cmd.ReceivePlay = ReceivePlay;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDdcXFNsb3Q3U2NyaXB0XFxTbG90Ny5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFnRjtBQUNoRiwrRkFBa0Y7QUFFMUUsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBaUIsR0FBRyxDQTZKbkI7QUE3SkQsV0FBaUIsR0FBRztJQUNoQjtRQUFtQyxpQ0FBUTtRQVV2Qyx1QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQVFkO1lBakJELFlBQU0sR0FBRyxFQUFFLENBQUM7WUFDWixZQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsa0JBQVksR0FBRyxDQUFDLENBQUM7WUFDakIsY0FBUSxHQUFHLENBQUMsQ0FBQztZQUNiLFdBQUssR0FBRyxFQUFFLENBQUM7WUFDWCxpQkFBVyxHQUFHLENBQUMsQ0FBQztZQU1aLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQXBCQSxBQW9CQyxDQXBCa0MsMEJBQVEsR0FvQjFDO0lBcEJZLGlCQUFhLGdCQW9CekIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFRO1FBSzFDLDBCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0s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QUFDO1lBQ2xDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ2hELENBQUM7UUFDTCxrQkFBQztJQUFELENBN0JBLEFBNkJDLENBN0JnQywwQkFBUSxHQTZCeEM7SUE3QlksZUFBVyxjQTZCdkIsQ0FBQTtJQUVEO1FBQXlDLHVDQUFTO1FBQzlDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVHdDLDJCQUFTLEdBU2pEO0lBVFksdUJBQW1CLHNCQVMvQixDQUFBO0FBQ0wsQ0FBQyxFQTdKZ0IsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBNkpuQjtBQUNELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZURhdGVYMiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgXG4gICAgICAgIG5nYXlYMiA9IFwiXCI7XG4gICAgICAgIHJlbWFpbiA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGZyZWVTcGluID0gMDtcbiAgICAgICAgbGluZXMgPSBcIlwiO1xuICAgICAgICBjdXJyZW50Um9vbSA9IDA7XG5cbiAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5nYXlYMiA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVGcmVlRGFpTHkgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICBcbiAgICAgICAgZnJlZVNwaW4gPSAwO1xuXG4gICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5mcmVlU3BpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgU1VCQ1JJQkUgPSA0MDAzO1xuICAgICAgICBzdGF0aWMgVU5TVUJDUklCRSA9IDQwMDQ7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfUk9PTSA9IDQwMDU7XG4gICAgICAgIHN0YXRpYyBQTEFZID0gNDAwMTtcbiAgICAgICAgc3RhdGljIFVQREFURV9QT1QgPSA0MDAyO1xuICAgICAgICBzdGF0aWMgQVVUTyA9IDQwMDY7XG4gICAgICAgIHN0YXRpYyBGT1JDRV9TVE9QX0FVVE8gPSA0MDA4O1xuICAgICAgICBzdGF0aWMgREFURV9YMiA9IDQwMDk7XG4gICAgICAgIHN0YXRpYyBCSUdfV0lOID0gNDAxMDtcbiAgICAgICAgc3RhdGljIEZSRUUgPSA0MDExO1xuICAgICAgICBzdGF0aWMgRlJFRV9EQUlfTFkgPSA0MDEyO1xuICAgICAgICBzdGF0aWMgTUlOSU1JWkUgPSA0MDEzO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX0pBQ0tQT1RfU0xPVFMgPSAxMDAwMztcbiAgICAgICAgc3RhdGljIFNVQkNSSUJFX0hBTExfU0xPVCA9IDEwMDAxO1xuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFN1YmNyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUlkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TVUJDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tSWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRVblN1YmNyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUlkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNVQkNSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21JZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFBsYXkgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihsaW5lczogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUExBWSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGxpbmVzKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2hhbmdlUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJvb21MZWF2ZWRJZDogbnVtYmVyLCByb29tSm9pbmVkSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIGNjLmxvZyhcInJvb20gbGVhdmU6IFwiICsgcm9vbUxlYXZlZElkICsgXCIsIHJvb20gam9pbjogXCIgKyByb29tSm9pbmVkSWQpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hBTkdFX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUxlYXZlZElkKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tSm9pbmVkSWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVQb3QgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGphY2twb3QgPSAwO1xuICAgICAgICB4MiA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmphY2twb3QgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMueDIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNVcGRhdGVKYWNrcG90U2xvdHMgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHBvdHMgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5wb3RzID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUGxheSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmID0gMDtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgbWF0cml4ID0gXCJcIjtcbiAgICAgICAgbGluZXNXaW4gPSBcIlwiO1xuICAgICAgICBoYWlTYW8gPSBcIlwiO1xuICAgICAgICBwcml6ZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGZyZWVTcGluID0gMDtcbiAgICAgICAgaXNGcmVlID0gZmFsc2U7XG4gICAgICAgIGl0ZW1zV2lsZCA9IFwiXCI7XG4gICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgY3VycmVudE51bWJlckZyZWVTcGluID0gMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWYgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmVzV2luID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuaGFpU2FvID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJpemUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmlzRnJlZSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5pdGVtc1dpbGQgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5yYXRpbyA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFTdWJjcmliZUhhbGxTbG90IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19