
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CaoThap/CaoThapScript/CaoThap.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FvVGhhcFxcQ2FvVGhhcFNjcmlwdFxcQ2FvVGhhcC5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCw2RkFBZ0Y7QUFDaEYsK0ZBQWtGO0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQWlCLEdBQUcsQ0F5TW5CO0FBek1ELFdBQWlCLEdBQUc7SUFDaEI7UUFBQTtRQVVBLENBQUM7UUFUVSxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2IsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDdkIsV0FBQztLQVZELEFBVUMsSUFBQTtJQVZZLFFBQUksT0FVaEIsQ0FBQTtJQUVEO1FBQWdDLDhCQUFTO1FBQ3JDLG9CQUFZLE1BQWM7WUFBMUIsWUFDSSxpQkFBTyxTQU9WO1lBTkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FW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QUlMLEtBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUNoQyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQVBBLEFBT0MsQ0FQc0MsMEJBQVEsR0FPOUM7SUFQWSxxQkFBaUIsb0JBTzdCLENBQUE7QUFDTCxDQUFDLEVBek1nQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUF5TW5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBTQ1JJQkUgPSA2MDA0O1xuICAgICAgICBzdGF0aWMgVU5TQ1JJQkUgPSA2MDA1O1xuICAgICAgICBzdGF0aWMgU1RBUlQgPSA2MDAxO1xuICAgICAgICBzdGF0aWMgUExBWSA9IDYwMDI7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfUk9PTSA9IDYwMDY7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfVElNRSA9IDYwMDg7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfSU5GTyA9IDYwMDk7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfSkFDS1BPVCA9IDYwMDM7XG4gICAgICAgIHN0YXRpYyBTVE9QID0gNjAwNztcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFNjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJldElkeDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0NSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGJldElkeCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlU2NyaWJlIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBzdGF0dXMgPSAwO1xuICAgICAgICByb29tSWQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU2NyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmV0SWR4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShiZXRJZHgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYW5nZVJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihvbGRCZXRJZHg6IG51bWJlciwgbmV3QmV0SWR4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFOR0VfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShvbGRCZXRJZHgpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKG5ld0JldElkeCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlQ2hhbmdlUm9vbSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgc3RhdHVzID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFN0YXJ0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmV0VmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNUQVJUKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYmV0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVN0YXJ0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIHJlZmVyZW5jZUlkID0gMDtcbiAgICAgICAgY2FyZCA9IDA7XG4gICAgICAgIG1vbmV5MSA9IDA7XG4gICAgICAgIG1vbmV5MiA9IDA7XG4gICAgICAgIG1vbmV5MyA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VJZCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jYXJkID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5MSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5tb25leTIgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXkzID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRQbGF5IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmV0VmFsdWU6IG51bWJlciwgaXNVcDogYm9vbGVhbikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlBMQVkpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChiZXRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoaXNVcCA/IDEgOiAwKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVQbGF5IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBjYXJkID0gMDtcbiAgICAgICAgbW9uZXkxID0gMDtcbiAgICAgICAgbW9uZXkyID0gMDtcbiAgICAgICAgbW9uZXkzID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leTEgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXkyID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5MyA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTdG9wIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmV0VmFsdWU6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNUT1ApO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludChiZXRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlU3RvcCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcbiAgICAgICAgbW9uZXlFeGNoYW5nZSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlFeGNoYW5nZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVJbmZvIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBudW1BID0gMDtcbiAgICAgICAgY2FyZCA9IDA7XG4gICAgICAgIG1vbmV5MSA9IDA7XG4gICAgICAgIG1vbmV5MiA9IDA7XG4gICAgICAgIG1vbmV5MyA9IDA7XG4gICAgICAgIHRpbWUgPSAwO1xuICAgICAgICBzdGVwID0gMDtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICBjYXJkcyA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm51bUEgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5tb25leTEgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXkyID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5MyA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5zdGVwID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmNhcmRzID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlVXBkYXRlSmFja3BvdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgdmFsdWUgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVUaW1lIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICB0aW1lID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNtZDtcbiJdfQ==