
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NENtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkZBQWdGO0FBQ2hGLCtGQUFrRjtBQUUxRSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUVsQyxJQUFpQixHQUFHLENBNEpuQjtBQTVKRCxXQUFpQixHQUFHO0lBQ2hCO1FBQUE7UUFpQkEsQ0FBQztRQWhCVSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDYixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3Qix1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDdEMsV0FBQztLQWpCRCxBQWlCQyxJQUFBO0lBakJZLFFBQUksT0FpQmhCLENBQUE7SUFDRDtRQUFzQyxvQ0FBUTtRQUcxQywwQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1lBSkQsY0FBUSxHQUFHLENBQUMsQ0FBQztZQUdULEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNuQyxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxD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QUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQXBCQSxBQW9CQyxDQXBCa0MsMEJBQVEsR0FvQjFDO0lBcEJZLGlCQUFhLGdCQW9CekIsQ0FBQTtJQUNEO1FBQXlDLHVDQUFTO1FBQzlDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVHdDLDJCQUFTLEdBU2pEO0lBVFksdUJBQW1CLHNCQVMvQixDQUFBO0FBQ0wsQ0FBQyxFQTVKZ0IsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBNEpuQjtBQUNELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBTVUJDUklCRSA9IDE0MDAzO1xuICAgICAgICBzdGF0aWMgVU5TVUJDUklCRSA9IDE0MDA0O1xuICAgICAgICBzdGF0aWMgQ0hBTkdFX1JPT00gPSAxNDAwNTtcbiAgICAgICAgc3RhdGljIFBMQVkgPSAxNDAwMTtcbiAgICAgICAgc3RhdGljIFVQREFURV9SRVNVTFQgPSAxNDAwMTtcbiAgICAgICAgc3RhdGljIFVQREFURV9QT1QgPSAxNDAwMjtcbiAgICAgICAgc3RhdGljIEFVVE8gPSAxNDAwNjtcbiAgICAgICAgc3RhdGljIFNUT1BfQVVUTyA9IDE0MDA2O1xuICAgICAgICBzdGF0aWMgRk9SQ0VfU1RPUF9BVVRPID0gMTQwMDg7XG4gICAgICAgIHN0YXRpYyBEQVRFX1gyID0gMTQwMDk7XG4gICAgICAgIHN0YXRpYyBCSUdfV0lOID0gMTQwMTA7XG4gICAgICAgIHN0YXRpYyBGUkVFID0gMTQwMTE7XG4gICAgICAgIHN0YXRpYyBGUkVFX0RBSV9MWSA9IDE0MDEyO1xuICAgICAgICBzdGF0aWMgTUlOSU1JWkUgPSAxNDAxMztcbiAgICAgICAgc3RhdGljIFVQREFURV9KQUNLUE9UX1NMT1RTID0gMTAwMDM7XG4gICAgICAgIHN0YXRpYyBTVUJDUklCRV9IQUxMX1NMT1QgPSAxMDAwMTtcbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVGcmVlRGFpTHkgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICBcbiAgICAgICAgZnJlZVNwaW4gPSAwO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVzVXBkYXRlSmFja3BvdFNsb3RzIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBwb3RzID0gXCJcIjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucG90cyA9IHRoaXMuZ2V0U3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU3ViY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihyb29tSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU1VCQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU3ViY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihyb29tSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNVQkNSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21JZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFBsYXkgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihsaW5lczogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUExBWSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKGxpbmVzKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2hhbmdlUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJvb21MZWF2ZWRJZDogbnVtYmVyLCByb29tSm9pbmVkSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIlNlbmRDaGFuZ2VSb29tIHJvb21MZWF2ZWRJZDpcIityb29tTGVhdmVkSWQrXCIgcm9vbUpvaW5lZElkOlwiK3Jvb21Kb2luZWRJZCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFOR0VfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tTGVhdmVkSWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21Kb2luZWRJZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVwZGF0ZVBvdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdmFsdWVSb29tMSA9IDA7XG4gICAgICAgIHZhbHVlUm9vbTIgPSAwO1xuICAgICAgICB2YWx1ZVJvb20zID0gMDtcbiAgICAgIFxuICAgICAgICB4MjEgPSAwO1xuICAgICAgICB4MjIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVJvb20xID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnZhbHVlUm9vbTIgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVSb29tMyA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLngyMSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy54MjIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVJlc3VsdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmID0gMDtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgbWF0cml4ID0gXCJcIjtcbiAgICAgICAgbGluZXNXaW4gPSBcIlwiO1xuICAgICAgICBoYWlTYW8gPSBcIlwiO1xuICAgICAgICBwcml6ZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGlzRnJlZVNwaW4gPSAwO1xuICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgIGN1cnJlbnROdW1iZXJGcmVlU3BpbiA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWYgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmxpbmVzV2luID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuaGFpU2FvID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJpemUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucmF0aW8gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE51bWJlckZyZWVTcGluID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZURhdGVYMiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgXG4gICAgICAgIG5nYXlYMiA9IFwiXCI7XG4gICAgICAgIHJlbWFpbiA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGZyZWVTcGluID0gMDtcbiAgICAgICAgbGluZXMgPSBcIlwiO1xuICAgICAgICBjdXJyZW50Um9vbSA9IDA7XG5cbiAgICAgIFxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5nYXlYMiA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubGluZXMgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZXFTdWJjcmliZUhhbGxTbG90IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19