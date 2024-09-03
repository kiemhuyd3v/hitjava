
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4eaffRLSRIjqGSu+H4038X', 'Slot1.Cmd');
// Slot1/Slot1Script/Slot1.Cmd.ts

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
        Code.SUBCRIBE = 2003;
        Code.UNSUBCRIBE = 2004;
        Code.CHANGE_ROOM = 2005;
        Code.PLAY = 2001;
        Code.UPDATE_RESULT = 2001;
        Code.UPDATE_POT = 2002;
        Code.AUTO = 2006;
        Code.STOP_AUTO = 2006;
        Code.FORCE_STOP_AUTO = 2008;
        Code.DATE_X2 = 2009;
        Code.BIG_WIN = 2010;
        Code.FREE = 2011;
        Code.FREE_DAI_LY = 2012;
        Code.MINIMIZE = 2013;
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
    var SendPlay = /** @class */ (function (_super) {
        __extends(SendPlay, _super);
        function SendPlay(betValue, lines) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.PLAY);
            _this.packHeader();
            _this.putInt(betValue);
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
            _this.valueRoom4 = 0;
            _this.x21 = 0;
            _this.x22 = 0;
            _this.valueRoom1 = _this.getLong();
            _this.valueRoom2 = _this.getLong();
            _this.valueRoom3 = _this.getLong();
            _this.valueRoom4 = _this.getLong();
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
            _this.ref = _this.getLong();
            _this.result = _this.getByte();
            _this.matrix = _this.getString();
            _this.linesWin = _this.getString();
            _this.haiSao = _this.getString();
            _this.prize = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveResult = ReceiveResult;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFnRjtBQUNoRiwrRkFBa0Y7QUFHMUUsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBaUIsR0FBRyxDQTRKbkI7QUE1SkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBaUJBLENBQUM7UUFoQlUsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUN0QyxXQUFDO0tBakJELEFBaUJDLElBQUE7SUFqQlksUUFBSSxPQWlCaEIsQ0FBQTtJQUNEO1FBQXNDLG9DQUFRO1FBSzFDLDBCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBSWQ7WUFSRCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1lBTVQsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBRW5DLENBQUM7UUFDTCx1QkFBQztJQUFELENB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S0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN2QyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQW5CQSxBQW1CQyxDQW5Ca0MsMEJBQVEsR0FtQjFDO0lBbkJZLGlCQUFhLGdCQW1CekIsQ0FBQTtJQUVEO1FBQXlDLHVDQUFTO1FBQzlDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVHdDLDJCQUFTLEdBU2pEO0lBVFksdUJBQW1CLHNCQVMvQixDQUFBO0FBQ0wsQ0FBQyxFQTVKZ0IsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBNEpuQjtBQUNELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBjbWQge1xuICAgIGV4cG9ydCBjbGFzcyBDb2RlIHtcbiAgICAgICAgc3RhdGljIFNVQkNSSUJFID0gMjAwMztcbiAgICAgICAgc3RhdGljIFVOU1VCQ1JJQkUgPSAyMDA0O1xuICAgICAgICBzdGF0aWMgQ0hBTkdFX1JPT00gPSAyMDA1O1xuICAgICAgICBzdGF0aWMgUExBWSA9IDIwMDE7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfUkVTVUxUID0gMjAwMTtcbiAgICAgICAgc3RhdGljIFVQREFURV9QT1QgPSAyMDAyO1xuICAgICAgICBzdGF0aWMgQVVUTyA9IDIwMDY7XG4gICAgICAgIHN0YXRpYyBTVE9QX0FVVE8gPSAyMDA2O1xuICAgICAgICBzdGF0aWMgRk9SQ0VfU1RPUF9BVVRPID0gMjAwODtcbiAgICAgICAgc3RhdGljIERBVEVfWDIgPSAyMDA5O1xuICAgICAgICBzdGF0aWMgQklHX1dJTiA9IDIwMTA7XG4gICAgICAgIHN0YXRpYyBGUkVFID0gMjAxMTtcbiAgICAgICAgc3RhdGljIEZSRUVfREFJX0xZID0gMjAxMjtcbiAgICAgICAgc3RhdGljIE1JTklNSVpFID0gMjAxMztcbiAgICAgICAgc3RhdGljIFVQREFURV9KQUNLUE9UX1NMT1RTID0gMTAwMDM7XG4gICAgICAgIHN0YXRpYyBTVUJDUklCRV9IQUxMX1NMT1QgPSAxMDAwMTtcbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVGcmVlRGFpTHkgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICBcbiAgICAgICAgZnJlZVNwaW4gPSAwO1xuXG4gICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5mcmVlU3BpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTdWJjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJvb21JZDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVEYXRlWDIgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIFxuICAgICAgICBuZ2F5WDIgPSBcIlwiO1xuICAgICAgICByZW1haW4gPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuICAgICAgICBmcmVlU3BpbiA9IDA7XG4gICAgICAgIGxpbmVzID0gXCJcIjtcbiAgICAgICAgY3VycmVudFJvb20gPSAwO1xuXG4gICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5uZ2F5WDIgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmVzID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJvb20gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU3ViY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihyb29tSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU1VCQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXNVcGRhdGVKYWNrcG90U2xvdHMgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHBvdHMgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5wb3RzID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kUGxheSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJldFZhbHVlOiBudW1iZXIsIGxpbmVzOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5QTEFZKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYmV0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobGluZXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGFuZ2VSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUxlYXZlZElkOiBudW1iZXIsIHJvb21Kb2luZWRJZDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hBTkdFX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUxlYXZlZElkKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tSm9pbmVkSWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVQb3QgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHZhbHVlUm9vbTEgPSAwO1xuICAgICAgICB2YWx1ZVJvb20yID0gMDtcbiAgICAgICAgdmFsdWVSb29tMyA9IDA7XG4gICAgICAgIHZhbHVlUm9vbTQgPSAwO1xuICAgICAgICB4MjEgPSAwO1xuICAgICAgICB4MjIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVJvb20xID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlUm9vbTIgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVSb29tMyA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVJvb200ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLngyMSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy54MjIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVJlc3VsdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmID0gMDtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgbWF0cml4ID0gXCJcIjtcbiAgICAgICAgbGluZXNXaW4gPSBcIlwiO1xuICAgICAgICBoYWlTYW8gPSBcIlwiO1xuICAgICAgICBwcml6ZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlZiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5oYWlTYW8gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5wcml6ZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFTdWJjcmliZUhhbGxTbG90IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19