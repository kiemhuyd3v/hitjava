
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3x3Gem/Scripts/Slot3x3Gem.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0ec7fiXaadHLqjzzb9GTPKl', 'Slot3x3Gem.Cmd');
// Slot3x3Gem/Scripts/Slot3x3Gem.Cmd.ts

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
        Code.SCRIBE = 8003;
        Code.UNSCRIBE = 8004;
        Code.CHANGE_ROOM = 8005;
        Code.SPIN = 8001;
        Code.UPDATE_JACKPOT = 8002;
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
        function SendSpin(betValue, betLines) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SPIN);
            _this.packHeader();
            _this.putInt(betValue);
            _this.putString(betLines);
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
            _this.matrix = "";
            _this.linesWin = "";
            _this.prize = 0;
            _this.currentMoney = 0;
            _this.result = _this.getByte();
            _this.matrix = _this.getString();
            _this.linesWin = _this.getString();
            _this.prize = _this.getLong();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDN4M0dlbVxcU2NyaXB0c1xcU2xvdDN4M0dlbS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUFnRjtBQUNoRiwrRkFBa0Y7QUFFbEYsSUFBaUIsR0FBRyxDQXNGbkI7QUF0RkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBTUEsQ0FBQztRQUxVLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUNqQyxXQUFDO0tBTkQsQUFNQyxJQUFBO0lBTlksUUFBSSxPQU1oQixDQUFBO0lBRUQ7UUFBZ0MsOEJBQVM7UUFDckMsb0JBQVksTUFBYztZQUExQixZQUNJLGlCQUFPLFNBT1Y7WUFORyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUN0QixDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWK0IsMkJBQVMsR0FVeEM7SUFWWSxjQUFVLGFBVXRCLENBQUE7SUFFRDtRQUFrQyxnQ0FBUztRQUN2QyxzQkFBWSxNQUFjO1lBQTFCLFlBQ0ksaUJBQU8sU0FPVjtZQU5HLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4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LE9BQU8sRUFBRSxDQUFBOztRQUN0QyxDQUFDO1FBQ0wsa0JBQUM7SUFBRCxDQWZBLEFBZUMsQ0FmZ0MsMEJBQVEsR0FleEM7SUFmWSxlQUFXLGNBZXZCLENBQUE7QUFDTCxDQUFDLEVBdEZnQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUFzRm5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBTQ1JJQkUgPSA4MDAzO1xuICAgICAgICBzdGF0aWMgVU5TQ1JJQkUgPSA4MDA0O1xuICAgICAgICBzdGF0aWMgQ0hBTkdFX1JPT00gPSA4MDA1O1xuICAgICAgICBzdGF0aWMgU1BJTiA9IDgwMDE7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfSkFDS1BPVCA9IDgwMDI7XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihiZXRJZHg6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShiZXRJZHgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU2NyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYmV0SWR4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShiZXRJZHgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYW5nZVJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihvbGRCZXRJZHg6IG51bWJlciwgbmV3QmV0SWR4OiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFOR0VfUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShvbGRCZXRJZHgpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKG5ld0JldElkeCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU3BpbiBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGJldFZhbHVlOiBudW1iZXIsIGJldExpbmVzOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5TUElOKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoYmV0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoYmV0TGluZXMpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVwZGF0ZUphY2twb3QgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgeDIgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy54MiA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVNwaW4gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlc3VsdCA9IDA7XG4gICAgICAgIG1hdHJpeCA9IFwiXCI7XG4gICAgICAgIGxpbmVzV2luID0gXCJcIjtcbiAgICAgICAgcHJpemUgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5wcml6ZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY21kOyJdfQ==