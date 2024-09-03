
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15481BPXlVMxovmT7uRFVfv', 'TaiXiuMini2.Cmd');
// TaiXiuDouble/TaiXiuScript/TaiXiu2/TaiXiuMini2.Cmd.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cmd;
(function (cmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SCRIBE = 2000;
        Code.UNSCRIBE = 2001;
        Code.BET = 2110;
        Code.HISTORIES = 2116;
        Code.GAME_INFO = 2111;
        Code.UPDATE_TIME = 2112;
        Code.DICES_RESULT = 2113;
        Code.RESULT = 2114;
        Code.NEW_GAME = 2115;
        Code.LOG_CHAT = 18003;
        Code.SEND_CHAT = 18000;
        Code.SCRIBE_CHAT = 18001;
        Code.UNSCRIBE_CHAT = 18002;
        return Code;
    }());
    cmd.Code = Code;
    var SendScribe = /** @class */ (function (_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiu);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendScribe;
    }(Network_OutPacket_1.default));
    cmd.SendScribe = SendScribe;
    var SendUnScribe = /** @class */ (function (_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiu);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendUnScribe;
    }(Network_OutPacket_1.default));
    cmd.SendUnScribe = SendUnScribe;
    var SendScribeChat = /** @class */ (function (_super) {
        __extends(SendScribeChat, _super);
        function SendScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendScribeChat;
    }(Network_OutPacket_1.default));
    cmd.SendScribeChat = SendScribeChat;
    var SendUnScribeChat = /** @class */ (function (_super) {
        __extends(SendUnScribeChat, _super);
        function SendUnScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendUnScribeChat;
    }(Network_OutPacket_1.default));
    cmd.SendUnScribeChat = SendUnScribeChat;
    var SendChat = /** @class */ (function (_super) {
        __extends(SendChat, _super);
        function SendChat(message) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SEND_CHAT);
            _this.packHeader();
            _this.putString(message);
            _this.updateSize();
            return _this;
        }
        return SendChat;
    }(Network_OutPacket_1.default));
    cmd.SendChat = SendChat;
    var SendBet = /** @class */ (function (_super) {
        __extends(SendBet, _super);
        function SendBet(referenceId, betValue, door, remainTime) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BET);
            _this.packHeader();
            _this.putInt(1);
            _this.putLong(referenceId);
            _this.putLong(betValue);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.putShort(door);
            _this.putShort(remainTime);
            _this.updateSize();
            return _this;
        }
        return SendBet;
    }(Network_OutPacket_1.default));
    cmd.SendBet = SendBet;
    var ReceiveGameInfo = /** @class */ (function (_super) {
        __extends(ReceiveGameInfo, _super);
        function ReceiveGameInfo(data) {
            var _this = _super.call(this, data) || this;
            _this.gameId = 0;
            _this.moneyType = 0;
            _this.referenceId = 0;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potTai = 0;
            _this.potXiu = 0;
            _this.betTai = 0;
            _this.betXiu = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.remainTimeRutLoc = 0;
            _this.gameId = _this.getShort();
            _this.moneyType = _this.getShort();
            _this.referenceId = _this.getLong();
            _this.remainTime = _this.getShort();
            _this.bettingState = _this.getBool();
            _this.potTai = _this.getLong();
            _this.potXiu = _this.getLong();
            _this.betTai = _this.getLong();
            _this.betXiu = _this.getLong();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            _this.remainTimeRutLoc = _this.getShort();
            return _this;
        }
        return ReceiveGameInfo;
    }(Network_InPacket_1.default));
    cmd.ReceiveGameInfo = ReceiveGameInfo;
    var ReceiveUpdateTime = /** @class */ (function (_super) {
        __extends(ReceiveUpdateTime, _super);
        function ReceiveUpdateTime(data) {
            var _this = _super.call(this, data) || this;
            _this.remainTime = 0;
            _this.bettingState = false;
            _this.potTai = 0;
            _this.potXiu = 0;
            _this.numBetTai = 0;
            _this.numBetXiu = 0;
            _this.remainTime = _this.getShort();
            _this.bettingState = _this.getBool();
            _this.potTai = _this.getLong();
            _this.potXiu = _this.getLong();
            _this.numBetTai = _this.getShort();
            _this.numBetXiu = _this.getShort();
            return _this;
        }
        return ReceiveUpdateTime;
    }(Network_InPacket_1.default));
    cmd.ReceiveUpdateTime = ReceiveUpdateTime;
    var ReceiveDicesResult = /** @class */ (function (_super) {
        __extends(ReceiveDicesResult, _super);
        function ReceiveDicesResult(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.result = _this.getShort();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            return _this;
        }
        return ReceiveDicesResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveDicesResult = ReceiveDicesResult;
    var ReceiveResult = /** @class */ (function (_super) {
        __extends(ReceiveResult, _super);
        function ReceiveResult(data) {
            var _this = _super.call(this, data) || this;
            _this.moneyType = 1;
            _this.totalMoney = 0;
            _this.currentMoney = 0;
            _this.moneyType = _this.getShort();
            _this.totalMoney = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveResult;
    }(Network_InPacket_1.default));
    cmd.ReceiveResult = ReceiveResult;
    var ReceiveNewGame = /** @class */ (function (_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.remainTimeRutLoc = 0;
            _this.referenceId = _this.getLong();
            _this.remainTimeRutLoc = _this.getShort();
            return _this;
        }
        return ReceiveNewGame;
    }(Network_InPacket_1.default));
    cmd.ReceiveNewGame = ReceiveNewGame;
    var ReceiveHistories = /** @class */ (function (_super) {
        __extends(ReceiveHistories, _super);
        function ReceiveHistories(data) {
            var _this = _super.call(this, data) || this;
            _this.data = "";
            _this.data = _this.getString();
            return _this;
        }
        return ReceiveHistories;
    }(Network_InPacket_1.default));
    cmd.ReceiveHistories = ReceiveHistories;
    var ReceiveBet = /** @class */ (function (_super) {
        __extends(ReceiveBet, _super);
        function ReceiveBet(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.currentMoney = 0;
            _this.result = _this.getError();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceiveBet;
    }(Network_InPacket_1.default));
    cmd.ReceiveBet = ReceiveBet;
    var ReceiveLogChat = /** @class */ (function (_super) {
        __extends(ReceiveLogChat, _super);
        function ReceiveLogChat(data) {
            var _this = _super.call(this, data) || this;
            _this.message = "";
            _this.minVipPoint = 0;
            _this.timeBan = 0;
            _this.userType = 0;
            _this.message = _this.getString();
            _this.minVipPoint = _this.getByte();
            _this.timeBan = _this.getLong();
            _this.userType = _this.getByte();
            return _this;
        }
        return ReceiveLogChat;
    }(Network_InPacket_1.default));
    cmd.ReceiveLogChat = ReceiveLogChat;
    var ReceiveSendChat = /** @class */ (function (_super) {
        __extends(ReceiveSendChat, _super);
        function ReceiveSendChat(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.nickname = "";
            _this.message = "";
            _this.error = _this.getError();
            _this.nickname = _this.getString();
            _this.message = _this.getString();
            return _this;
        }
        return ReceiveSendChat;
    }(Network_InPacket_1.default));
    cmd.ReceiveSendChat = ReceiveSendChat;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTJcXFRhaVhpdU1pbmkyLkNtZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBQ25ELGdHQUFtRjtBQUNuRixrR0FBcUY7QUFFL0UsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBaUIsR0FBRyxDQXdPbkI7QUF4T0QsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBY0EsQ0FBQztRQWJVLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLFdBQUM7S0FkRCxBQWNDLElBQUE7SUFkWSxRQUFJLE9BY2hCLENBQUE7SUFFRDtRQUFnQyw4QkFBUztRQUNyQztZQUFBLFlBQ0ksaUJBQU8sU0FRVjtZQVBHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxFQUFF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LENBQUM7WUFJVCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTs7UUFDbkMsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FYQSxBQVdDLENBWG9DLDBCQUFRLEdBVzVDO0lBWFksbUJBQWUsa0JBVzNCLENBQUE7QUFDTCxDQUFDLEVBeE9nQixHQUFHLEdBQUgsV0FBRyxLQUFILFdBQUcsUUF3T25CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIGNtZCB7XG4gICAgZXhwb3J0IGNsYXNzIENvZGUge1xuICAgICAgICBzdGF0aWMgU0NSSUJFID0gMjAwMDtcbiAgICAgICAgc3RhdGljIFVOU0NSSUJFID0gMjAwMTtcbiAgICAgICAgc3RhdGljIEJFVCA9IDIxMTA7XG4gICAgICAgIHN0YXRpYyBISVNUT1JJRVMgPSAyMTE2O1xuICAgICAgICBzdGF0aWMgR0FNRV9JTkZPID0gMjExMTtcbiAgICAgICAgc3RhdGljIFVQREFURV9USU1FID0gMjExMjtcbiAgICAgICAgc3RhdGljIERJQ0VTX1JFU1VMVCA9IDIxMTM7XG4gICAgICAgIHN0YXRpYyBSRVNVTFQgPSAyMTE0O1xuICAgICAgICBzdGF0aWMgTkVXX0dBTUUgPSAyMTE1O1xuICAgICAgICBzdGF0aWMgTE9HX0NIQVQgPSAxODAwMztcbiAgICAgICAgc3RhdGljIFNFTkRfQ0hBVCA9IDE4MDAwO1xuICAgICAgICBzdGF0aWMgU0NSSUJFX0NIQVQgPSAxODAwMTtcbiAgICAgICAgc3RhdGljIFVOU0NSSUJFX0NIQVQgPSAxODAwMjtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFNjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5HYW1lSWQuVGFpWGl1KTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kVW5TY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5HYW1lSWQuVGFpWGl1KTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU2NyaWJlQ2hhdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNDUklCRV9DSEFUKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU2NyaWJlQ2hhdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU0NSSUJFX0NIQVQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2hhdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNFTkRfQ0hBVCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEJldCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZUlkOiBudW1iZXIsIGJldFZhbHVlOiBudW1iZXIsIGRvb3I6IG51bWJlciwgcmVtYWluVGltZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQkVUKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoMSk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcocmVmZXJlbmNlSWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGJldFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KGRvb3IpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChyZW1haW5UaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVHYW1lSW5mbyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZ2FtZUlkID0gMDtcbiAgICAgICAgbW9uZXlUeXBlID0gMDtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdFRhaSA9IDA7XG4gICAgICAgIHBvdFhpdSA9IDA7XG4gICAgICAgIGJldFRhaSA9IDA7XG4gICAgICAgIGJldFhpdSA9IDA7XG4gICAgICAgIGRpY2UxID0gMDtcbiAgICAgICAgZGljZTIgPSAwO1xuICAgICAgICBkaWNlMyA9IDA7XG4gICAgICAgIHJlbWFpblRpbWVSdXRMb2MgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5VHlwZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlSWQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0dGluZ1N0YXRlID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnBvdFRhaSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5wb3RYaXUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0VGFpID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmJldFhpdSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UzID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lUnV0TG9jID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVUaW1lIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdFRhaSA9IDA7XG4gICAgICAgIHBvdFhpdSA9IDA7XG4gICAgICAgIG51bUJldFRhaSA9IDA7XG4gICAgICAgIG51bUJldFhpdSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmJldHRpbmdTdGF0ZSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5wb3RUYWkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucG90WGl1ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm51bUJldFRhaSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQmV0WGl1ID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVEaWNlc1Jlc3VsdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgZGljZTEgPSAwO1xuICAgICAgICBkaWNlMiA9IDA7XG4gICAgICAgIGRpY2UzID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UzID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVSZXN1bHQgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIG1vbmV5VHlwZSA9IDE7XG4gICAgICAgIHRvdGFsTW9uZXkgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5tb25leVR5cGUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsTW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlTmV3R2FtZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICByZW1haW5UaW1lUnV0TG9jID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlSWQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZVJ1dExvYyA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlSGlzdG9yaWVzIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBkYXRhID0gXCJcIjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUJldCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlTG9nQ2hhdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIG1pblZpcFBvaW50ID0gMDtcbiAgICAgICAgdGltZUJhbiA9IDA7XG4gICAgICAgIHVzZXJUeXBlID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm1pblZpcFBvaW50ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVCYW4gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudXNlclR5cGUgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVTZW5kQ2hhdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBuaWNrbmFtZSA9IFwiXCI7XG4gICAgICAgIG1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY21kOyJdfQ==