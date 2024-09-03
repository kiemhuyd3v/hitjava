
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot10/Slot10Script/Slot10.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71e68/EEIpCDblM9G2vp4Op', 'Slot10.Cmd');
// Slot10/Slot10Script/Slot10.Cmd.ts

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
        Code.SUBCRIBE = 3003;
        Code.UNSUBCRIBE = 3004;
        Code.CHANGE_ROOM = 3005;
        Code.PLAY = 3001;
        Code.UPDATE_POT = 3002;
        Code.AUTO = 3006;
        Code.FORCE_STOP_AUTO = 3008;
        Code.DATE_X2 = 3009;
        Code.BIG_WIN = 3010;
        Code.FREE = 3011;
        Code.FREE_DAI_LY = 3012;
        Code.MINIMIZE = 3013;
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
            //  cc.log("room leave: " + roomLeavedId + ", room join: " + roomJoinedId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDEwXFxTbG90MTBTY3JpcHRcXFNsb3QxMC5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFnRjtBQUNoRiwrRkFBa0Y7QUFFMUUsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBaUIsR0FBRyxDQXFJbkI7QUFySUQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBZUEsQ0FBQztRQWRVLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQix5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLFdBQUM7S0FmRCxBQWVDLElBQUE7SUFmWSxRQUFJLE9BZWhCLENBQUE7SUFDRDtRQUFzQyxvQ0FBUTtRQUsxQywwQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUlkO1lBUkQsY0FBUSxHQUFHLENBQUMsQ0FBQztZQU1ULEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUVuQyxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYcUMsMEJBQVEsR0FXN0M7SUFYWSxvQkFBZ0IsbUJBVzVCLENBQUE7SUFDRDtR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LENBQUM7WUFDNUIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDL0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7O1FBQ2hDLENBQUM7UUFDTCxrQkFBQztJQUFELENBM0JBLEFBMkJDLENBM0JnQywwQkFBUSxHQTJCeEM7SUEzQlksZUFBVyxjQTJCdkIsQ0FBQTtJQUVEO1FBQXlDLHVDQUFTO1FBQzlDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVHdDLDJCQUFTLEdBU2pEO0lBVFksdUJBQW1CLHNCQVMvQixDQUFBO0FBQ0wsQ0FBQyxFQXJJZ0IsR0FBRyxHQUFILFdBQUcsS0FBSCxXQUFHLFFBcUluQjtBQUNELGtCQUFlLEdBQUcsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBTVUJDUklCRSA9IDMwMDM7XG4gICAgICAgIHN0YXRpYyBVTlNVQkNSSUJFID0gMzAwNDtcbiAgICAgICAgc3RhdGljIENIQU5HRV9ST09NID0gMzAwNTtcbiAgICAgICAgc3RhdGljIFBMQVkgPSAzMDAxO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX1BPVCA9IDMwMDI7XG4gICAgICAgIHN0YXRpYyBBVVRPID0gMzAwNjtcbiAgICAgICAgc3RhdGljIEZPUkNFX1NUT1BfQVVUTyA9IDMwMDg7XG4gICAgICAgIHN0YXRpYyBEQVRFX1gyID0gMzAwOTtcbiAgICAgICAgc3RhdGljIEJJR19XSU4gPSAzMDEwO1xuICAgICAgICBzdGF0aWMgRlJFRSA9IDMwMTE7XG4gICAgICAgIHN0YXRpYyBGUkVFX0RBSV9MWSA9IDMwMTI7XG4gICAgICAgIHN0YXRpYyBNSU5JTUlaRSA9IDMwMTM7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfSkFDS1BPVF9TTE9UUyA9IDEwMDAzO1xuICAgICAgICBzdGF0aWMgU1VCQ1JJQkVfSEFMTF9TTE9UID0gMTAwMDE7XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlRnJlZURhaUx5IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgXG4gICAgICAgIGZyZWVTcGluID0gMDtcblxuICAgICAgXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU3ViY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihyb29tSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNVQkNSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHJvb21JZCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU3ViY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihyb29tSWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU1VCQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUlkKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kUGxheSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGxpbmVzOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5QTEFZKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobGluZXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGFuZ2VSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iocm9vbUxlYXZlZElkOiBudW1iZXIsIHJvb21Kb2luZWRJZDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInJvb20gbGVhdmU6IFwiICsgcm9vbUxlYXZlZElkICsgXCIsIHJvb20gam9pbjogXCIgKyByb29tSm9pbmVkSWQpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hBTkdFX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocm9vbUxlYXZlZElkKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShyb29tSm9pbmVkSWQpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVQb3QgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGphY2twb3QgPSAwO1xuICAgICAgICB4MiA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmphY2twb3QgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMueDIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXNVcGRhdGVKYWNrcG90U2xvdHMgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHBvdHMgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5wb3RzID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUGxheSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmID0gMDtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgbWF0cml4ID0gXCJcIjtcbiAgICAgICAgbGluZXNXaW4gPSBcIlwiO1xuICAgICAgICBoYWlTYW8gPSBcIlwiO1xuICAgICAgICBwcml6ZSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG4gICAgICAgIGZyZWVTcGluID0gMDtcbiAgICAgICAgaXNGcmVlID0gZmFsc2U7XG4gICAgICAgIGl0ZW1zV2lsZCA9IFwiXCI7XG4gICAgICAgIHJhdGlvID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVmID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tYXRyaXggPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5saW5lc1dpbiA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLmhhaVNhbyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLnByaXplID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5mcmVlU3BpbiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5pc0ZyZWUgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNXaWxkID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmF0aW8gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZXFTdWJjcmliZUhhbGxTbG90IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1VCQ1JJQkVfSEFMTF9TTE9UKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19