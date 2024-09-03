
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BauCua/BauCuaScript/BauCua.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmF1Q3VhXFxCYXVDdWFTY3JpcHRcXEJhdUN1YS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFnRjtBQUNoRiwrRkFBa0Y7QUFFbEYsSUFBaUIsR0FBRyxDQTJKbkI7QUEzSkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBVUEsQ0FBQztRQVRVLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFdBQUM7S0FWRCxBQVVDLElBQUE7SUFWWSxRQUFJLE9BVWhCLENBQUE7SUFFRDtRQUFnQyw4QkFBUztRQUNyQyxvQkFBWSxNQUFjO1lBQTFCLFlBQ0ksaUJBQU8sU0FPVjtZQU5HLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxpQkFBQztJQUFELENBVkEsQUFVQyxDQVYrQiwyQkFBUyxHQVV4QztJQVZZLGNBQVUsYUFVdEIsQ0FBQTtJQUVEO1FBQWtDLGdDQUFTO1FBQ3ZDLHNCQUFZLE1BQWM7WUFBMUIsWUFD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QUE7SUFFRDtRQUFrQyxnQ0FBUTtRQUt0QyxzQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUlkO1lBVEQsV0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLFVBQUksR0FBRyxDQUFDLENBQUM7WUFJTCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDL0IsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FYQSxBQVdDLENBWGlDLDBCQUFRLEdBV3pDO0lBWFksZ0JBQVksZUFXeEIsQ0FBQTtBQUNMLENBQUMsRUEzSmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQTJKbkI7QUFDRCxrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgT3V0UGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5PdXRQYWNrZXRcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBjbWQge1xuICAgIGV4cG9ydCBjbGFzcyBDb2RlIHtcbiAgICAgICAgc3RhdGljIFNDUklCRSA9IDUwMDE7XG4gICAgICAgIHN0YXRpYyBVTlNDUklCRSA9IDUwMDI7XG4gICAgICAgIHN0YXRpYyBDSEFOR0VfUk9PTSA9IDUwMDM7XG4gICAgICAgIHN0YXRpYyBCRVQgPSA1MDA0O1xuICAgICAgICBzdGF0aWMgSU5GTyA9IDUwMDU7XG4gICAgICAgIHN0YXRpYyBTVEFSVF9ORVdfR0FNRSA9IDUwMDc7XG4gICAgICAgIHN0YXRpYyBVUERBVEUgPSA1MDA2O1xuICAgICAgICBzdGF0aWMgUkVTVUxUID0gNTAwODtcbiAgICAgICAgc3RhdGljIFBSSVpFID0gNTAwOTtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFNjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJldElkeDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0NSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGJldElkeCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kVW5TY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihiZXRJZHg6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU0NSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGJldElkeCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2hhbmdlUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG9sZEJldElkeDogbnVtYmVyLCBuZXdCZXRJZHg6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNIQU5HRV9ST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKG9sZEJldElkeCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUobmV3QmV0SWR4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRCZXQgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihiZXREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5CRVQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhiZXREYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVCZXQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlSW5mbyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdERhdGEgPSBcIlwiO1xuICAgICAgICBiZXREYXRhID0gXCJcIjtcbiAgICAgICAgbGljaFN1UGhpZW4gPSBcIlwiO1xuICAgICAgICBkaWNlMSA9IDA7XG4gICAgICAgIGRpY2UyID0gMDtcbiAgICAgICAgZGljZTMgPSAwO1xuICAgICAgICB4UG90ID0gMDtcbiAgICAgICAgeFZhbHVlID0gMDtcbiAgICAgICAgcm9vbSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0dGluZ1N0YXRlID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnBvdERhdGEgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5iZXREYXRhID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGljaFN1UGhpZW4gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMyA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy54UG90ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnhWYWx1ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5yb29tID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZU5ld0dhbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlZmVyZW5jZUlkID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlSWQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlVXBkYXRlIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBwb3REYXRhID0gXCJcIjtcbiAgICAgICAgcmVtYWluVGltZSA9IDA7XG4gICAgICAgIGJldHRpbmdTdGF0ZSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnBvdERhdGEgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmJldHRpbmdTdGF0ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVSZXN1bHQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGRpY2UxID0gMDtcbiAgICAgICAgZGljZTIgPSAwO1xuICAgICAgICBkaWNlMyA9IDA7XG4gICAgICAgIHhQb3QgPSAwO1xuICAgICAgICB4VmFsdWUgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMiA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMyA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy54UG90ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnhWYWx1ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVQcml6ZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcHJpemUgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuICAgICAgICByb29tID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucHJpemUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnJvb20gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNtZDsiXX0=