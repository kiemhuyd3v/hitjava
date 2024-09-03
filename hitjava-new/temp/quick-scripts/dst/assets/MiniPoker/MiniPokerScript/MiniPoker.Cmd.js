
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MiniPoker/MiniPokerScript/MiniPoker.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWluaVBva2VyXFxNaW5pUG9rZXJTY3JpcHRcXE1pbmlQb2tlci5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2RkFBZ0Y7QUFDaEYsK0ZBQWtGO0FBRWxGLElBQWlCLEdBQUcsQ0E0Rm5CO0FBNUZELFdBQWlCLEdBQUc7SUFDaEI7UUFBQTtRQU1BLENBQUM7UUFMVSxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDakMsV0FBQztLQU5ELEFBTUMsSUFBQTtJQU5ZLFFBQUksT0FNaEIsQ0FBQTtJQUVEO1FBQWdDLDhCQUFTO1FBQ3JDLG9CQUFZLE1BQWM7WUFBMUIsWUFDSSxpQkFBTyxTQU9WO1lBTkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FWQSxBQVVDLENBVitCLDJCQUFTLEdBVXhDO0lBVlksY0FBVSxhQVV0QixDQUFBO0lBRUQ7UUFBa0MsZ0NBQVM7UUFDdkMsc0JBQVksTUFBYztZQUExQixZQUNJLGlCQUFPLFNBT1Y7WUFORyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMs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QUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBOztRQUN0QyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQXJCQSxBQXFCQyxDQXJCZ0MsMEJBQVEsR0FxQnhDO0lBckJZLGVBQVcsY0FxQnZCLENBQUE7QUFDTCxDQUFDLEVBNUZnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUE0Rm5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgU0NSSUJFID0gNDAwMztcbiAgICAgICAgc3RhdGljIFVOU0NSSUJFID0gNDAwNDtcbiAgICAgICAgc3RhdGljIENIQU5HRV9ST09NID0gNDAwNTtcbiAgICAgICAgc3RhdGljIFNQSU4gPSA0MDAxO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX0pBQ0tQT1QgPSA0MDAyO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU2NyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmV0SWR4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYmV0SWR4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRVblNjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJldElkeDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuVU5TQ1JJQkUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoYmV0SWR4KTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGFuZ2VSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3Iob2xkQmV0SWR4OiBudW1iZXIsIG5ld0JldElkeDogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQ0hBTkdFX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUob2xkQmV0SWR4KTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShuZXdCZXRJZHgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFNwaW4gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihiZXRWYWx1ZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU1BJTik7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhiZXRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVwZGF0ZUphY2twb3QgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgeDIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy54MiA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVNwaW4gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgIHByaXplID0gMDtcbiAgICAgICAgY2FyZDEgPSAwO1xuICAgICAgICBjYXJkMiA9IDA7XG4gICAgICAgIGNhcmQzID0gMDtcbiAgICAgICAgY2FyZDQgPSAwO1xuICAgICAgICBjYXJkNSA9IDA7XG4gICAgICAgIGN1cnJlbnRNb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucHJpemUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZDEgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZDIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZDMgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZDQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZDUgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGNtZDsiXX0=