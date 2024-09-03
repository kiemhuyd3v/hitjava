
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3/Slot3Script/Slot3.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd479atiaRFGep+OiO/49Gts', 'Slot3.Cmd');
// Slot3/Slot3Script/Slot3.Cmd.ts

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
        Code.SUBCRIBE = 12003;
        Code.UNSUBCRIBE = 12004;
        Code.CHANGE_ROOM = 12005;
        Code.PLAY = 12001;
        Code.UPDATE_POT = 12002;
        Code.AUTO = 12006;
        Code.FORCE_STOP_AUTO = 12008;
        Code.DATE_X2 = 12009;
        Code.BIG_WIN = 12010;
        Code.FREE = 12011;
        Code.FREE_DAI_LY = 12012;
        Code.MINIMIZE = 12013;
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
            _this.jackpot = 0;
            _this.x2 = 0;
            _this.jackpot = _this.getLong();
            _this.x2 = _this.getByte();
            return _this;
        }
        return ReceiveUpdatePot;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdatePot = ReceiveUpdatePot;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDNcXFNsb3QzU2NyaXB0XFxTbG90My5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFnRjtBQUNoRiwrRkFBa0Y7QUFFMUUsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBaUIsR0FBRyxDQXdJbkI7QUF4SUQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBYUEsQ0FBQztRQVpVLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzVCLFdBQUM7S0FiRCxBQWFDLElBQUE7SUFiWSxRQUFJLE9BYWhCLENBQUE7SUFFRDtRQUFzQyxvQ0FBUTtRQUsxQywwQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUlkO1lBUkQsY0FBUSxHQUFHLENBQUMsQ0FBQztZQU1ULEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUVuQyxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYcUMsMEJBQVEsR0FXN0M7SUFYWSxvQkFBZ0IsbUJBVzVCLENBQUE7SUFFRDtRQUFrQyxnQ0FBUztRQUN2QyxzQkFBWSxNQUFjO1lBQTFCLFlBQ0ksaUJBQU8sU0FPVjtZQU5HLEtB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V0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLDJCQUFxQixHQUFHLENBQUMsQ0FBQztZQUd0QixLQUFJLENBQUMsR0FBRyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNoRCxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQTVCQSxBQTRCQyxDQTVCZ0MsMEJBQVEsR0E0QnhDO0lBNUJZLGVBQVcsY0E0QnZCLENBQUE7QUFDTCxDQUFDLEVBeElnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUF3SW5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IG5hbWVzcGFjZSBjbWQge1xuICAgIGV4cG9ydCBjbGFzcyBDb2RlIHtcbiAgICAgICAgc3RhdGljIFNVQkNSSUJFID0gMTIwMDM7XG4gICAgICAgIHN0YXRpYyBVTlNVQkNSSUJFID0gMTIwMDQ7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfUk9PTSA9IDEyMDA1O1xuICAgICAgICBzdGF0aWMgUExBWSA9IDEyMDAxO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX1BPVCA9IDEyMDAyO1xuICAgICAgICBzdGF0aWMgQVVUTyA9IDEyMDA2O1xuICAgICAgICBzdGF0aWMgRk9SQ0VfU1RPUF9BVVRPID0gMTIwMDg7XG4gICAgICAgIHN0YXRpYyBEQVRFX1gyID0gMTIwMDk7XG4gICAgICAgIHN0YXRpYyBCSUdfV0lOID0gMTIwMTA7XG4gICAgICAgIHN0YXRpYyBGUkVFID0gMTIwMTE7XG4gICAgICAgIHN0YXRpYyBGUkVFX0RBSV9MWSA9IDEyMDEyO1xuICAgICAgICBzdGF0aWMgTUlOSU1JWkUgPSAxMjAxMztcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUZyZWVEYWlMeSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgIFxuICAgICAgICBmcmVlU3BpbiA9IDA7XG5cbiAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgU2VuZFN1YmNyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUlkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TVUJDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tSWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRVblN1YmNyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUlkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNVQkNSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21JZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFBsYXkgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihsaW5lczogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUExBWSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGxpbmVzKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVEYXRlWDIgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIFxuICAgICAgICBuZ2F5WDIgPSBcIlwiO1xuICAgICAgICByZW1haW4gPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuICAgICAgICBmcmVlU3BpbiA9IDA7XG4gICAgICAgIGxpbmVzID0gXCJcIjtcbiAgICAgICAgY3VycmVudFJvb20gPSAwO1xuXG4gICAgICBcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5uZ2F5WDIgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmVzID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJvb20gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYW5nZVJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihyb29tTGVhdmVkSWQ6IG51bWJlciwgcm9vbUpvaW5lZElkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFOR0VfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tTGVhdmVkSWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21Kb2luZWRJZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVwZGF0ZVBvdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgamFja3BvdCA9IDA7XG4gICAgICAgIHgyID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuamFja3BvdCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy54MiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUGxheSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmID0gMDtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgbWF0cml4ID0gXCJcIjtcbiAgICAgICAgbGluZXNXaW4gPSBcIlwiO1xuICAgICAgICBoYWlTYW8gPSBcIlwiO1xuICAgICAgICBwcml6ZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGZyZWVTcGluID0gMDtcbiAgICAgICAgaXNGcmVlID0gZmFsc2U7XG4gICAgICAgIGl0ZW1zV2lsZCA9IFwiXCI7XG4gICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgY3VycmVudE51bWJlckZyZWVTcGluID0gMDtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlZiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5oYWlTYW8gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5wcml6ZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNGcmVlID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zV2lsZCA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJhdGlvID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY21kOyJdfQ==