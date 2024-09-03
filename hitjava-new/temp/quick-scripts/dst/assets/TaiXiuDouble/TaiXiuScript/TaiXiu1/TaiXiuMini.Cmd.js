
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b758bL62fNHzoW+pRYt1pdx', 'TaiXiuMini.Cmd');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.Cmd.ts

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
        Code.REFUND = 2200;
        Code.JACKPOT = 2199;
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
            _this.jpTai = 0;
            _this.jpXiu = 0;
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
            _this.jpTai = _this.getLong();
            _this.jpXiu = _this.getLong();
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
    var ReceiveRefund = /** @class */ (function (_super) {
        __extends(ReceiveRefund, _super);
        function ReceiveRefund(data) {
            var _this = _super.call(this, data) || this;
            _this.moneyRefund = 0;
            _this.moneyRefund = _this.getLong();
            return _this;
        }
        return ReceiveRefund;
    }(Network_InPacket_1.default));
    cmd.ReceiveRefund = ReceiveRefund;
    var ReceiveNewGame = /** @class */ (function (_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.remainTimeRutLoc = 0;
            _this.jpTai = 0;
            _this.jpXiu = 0;
            _this.referenceId = _this.getLong();
            _this.remainTimeRutLoc = _this.getShort();
            _this.jpTai = _this.getLong();
            _this.jpXiu = _this.getLong();
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
    var ReceiveJackpotWin = /** @class */ (function (_super) {
        __extends(ReceiveJackpotWin, _super);
        function ReceiveJackpotWin(data) {
            var _this = _super.call(this, data) || this;
            _this.jackpot = 0;
            _this.nickname = "";
            _this.idSession = 0;
            _this.idSession = _this.getLong();
            _this.jackpot = _this.getLong();
            _this.nickname = _this.getString();
            return _this;
        }
        return ReceiveJackpotWin;
    }(Network_InPacket_1.default));
    cmd.ReceiveJackpotWin = ReceiveJackpotWin;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuQ21kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsZ0dBQW1GO0FBQ25GLGtHQUFxRjtBQUUvRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFpQixHQUFHLENBdVFuQjtBQXZRRCxXQUFpQixHQUFHO0lBQ2hCO1FBQUE7UUFnQkEsQ0FBQztRQWZVLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDakMsV0FBQztLQWhCRCxBQWdCQyxJQUFBO0lBaEJZLFFBQUksT0FnQmhCLENBQUE7SUFFRDtRQUFnQyw4QkFBUztRQUNyQztZQUFBLFlBQ0ksaUJBQU8sU0FRVjtZQVBHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FYQSxBQVdDLENBWCtCLDJCQUFTLEdBV3hDO0lBWFksY0FBVSxhQVd0QixDQUFBO0lBRUQ7UUFBa0MsZ0NBQVM7UUFDdkM7WUFBQSxZQUNJLGlCQUFPLFNBUVY7WUFQRyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxtQkFBQztJQUFELENBWEEsQUFXQyxDQVhpQywyQkFBUyxHQVcxQztJQVhZLGdCQUFZLGVBV3hCLENBQUE7SUFFRDtRQUFvQyxrQ0FBUztRQUN6QztZQUFBLFlBQ0ksaUJBQU8sU0FNVjtZQUxHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUN0QixDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQVRBLEFBU0MsQ0FUbUMsMkJBQVMsR0FTNUM7SUFUWSxrQkFBYyxpQkFTMUIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFTO1FBQzNDO1lBQUEsWUFDSSxpQkFBTyxTQU1WO1lBTEcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCx1QkFBQztJQUFELENBVEEsQUFTQyxDQVRxQywyQkFBUyxHQVM5QztJQVRZLG9CQUFnQixtQkFTNUIsQ0FBQTtJQUVEO1FBQThCLDRCQUFTO1FBQ25DLGtCQUFZLE9BQWU7WUFBM0IsWUFDSSxpQkFBTyxTQU9WO1lBTkcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDdEIsQ0FBQztRQUNMLGVBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWNkIsMkJBQVMsR0FVdEM7SUFWWSxZQUFRLFdBVXBCLENBQUE7SUFFRDtRQUE2QiwyQkFBUztRQUNsQyxpQkFBWSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsSUFBWSxFQUFFLFVBQWtCO1lBQW5GLFlBQ0ksaUJBQU8sU0FZVjtZQVhHLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QixLQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ3RCLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FmQSxBQWVDLENBZjRCLDJCQUFTLEdBZXJDO0lBZlksV0FBTyxVQWVuQixDQUFBO0lBRUQ7UUFBcUMsbUNBQVE7UUFpQnpDLHlCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBZ0JkO1lBakNELFlBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsaUJBQVcsR0FBRyxDQUFDLENBQUM7WUFDaEIsZ0JBQVUsR0FBRyxDQUFDLENBQUM7WUFDZixrQkFBWSxHQUFHLEtBQUssQ0FBQztZQUNyQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsWUFBTSxHQUFHLENBQUMsQ0FBQztZQUNYLFlBQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsV0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLFdBQUssR0FBRyxDQUFDLENBQUM7WUFDVixXQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ1Ysc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLFdBQUssR0FBRyxDQUFDLENBQUM7WUFDVixXQUFLLEdBQUcsQ0FBQyxDQUFDO1lBSU4sS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN4QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDaEMsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQ29DLDBCQUFRLEdBbUM1QztJQW5DWSxtQkFBZSxrQkFtQzNCLENBQUE7SUFFRDtRQUF1QyxxQ0FBUTtRQVEzQywyQkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQU9kO1lBZkQsZ0JBQVUsR0FBRyxDQUFDLENBQUM7WUFDZixrQkFBWSxHQUFHLEtBQUssQ0FBQztZQUNyQixZQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsWUFBTSxHQUFHLENBQUMsQ0FBQztZQUNYLGVBQVMsR0FBRyxDQUFDLENBQUM7WUFDZCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1lBSVYsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQ3JDLENBQUM7UUFDTCx3QkFBQztJQUFELENBakJBLEFBaUJDLENBakJzQywwQkFBUSxHQWlCOUM7SUFqQlkscUJBQWlCLG9CQWlCN0IsQ0FBQTtJQUVEO1FBQXdDLHNDQUFRO1FBTzVDLDRCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBTWQ7WUFiRCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsV0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLFdBQUssR0FBRyxDQUFDLENBQUM7WUFDVixXQUFLLEdBQUcsQ0FBQyxDQUFDO1lBS04sS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBRWpDLENBQUM7UUFDTCx5QkFBQztJQUFELENBZkEsQUFlQyxDQWZ1QywwQkFBUSxHQWUvQztJQWZZLHNCQUFrQixxQkFlOUIsQ0FBQTtJQUVEO1FBQW1DLGlDQUFRO1FBS3ZDLHVCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBSWQ7WUFURCxlQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsZ0JBQVUsR0FBRyxDQUFDLENBQUM7WUFDZixrQkFBWSxHQUFHLENBQUMsQ0FBQztZQUliLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFBOztRQUN0QyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYa0MsMEJBQVEsR0FXMUM7SUFYWSxpQkFBYSxnQkFXekIsQ0FBQTtJQUVEO1FBQW1DLGlDQUFRO1FBR3ZDLHVCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7WUFMRCxpQkFBVyxHQUFHLENBQUMsQ0FBQztZQUlaLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQVBBLEFBT0MsQ0FQa0MsMEJBQVEsR0FPMUM7SUFQWSxpQkFBYSxnQkFPekIsQ0FBQTtJQUNEO1FBQW9DLGtDQUFRO1FBS3hDLHdCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBS2Q7WUFWRCxpQkFBVyxHQUFHLENBQUMsQ0FBQztZQUNoQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDckIsV0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLFdBQUssR0FBRyxDQUFDLENBQUM7WUFHTixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNoQyxDQUFDO1FBQ0wscUJBQUM7SUFBRCxDQVpBLEFBWUMsQ0FabUMsMEJBQVEsR0FZM0M7SUFaWSxrQkFBYyxpQkFZMUIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFRO1FBRzFDLDBCQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7WUFMRCxVQUFJLEdBQUcsRUFBRSxDQUFDO1lBSU4sS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7O1FBQ2pDLENBQUM7UUFDTCx1QkFBQztJQUFELENBUEEsQUFPQyxDQVBxQywwQkFBUSxHQU83QztJQVBZLG9CQUFnQixtQkFPNUIsQ0FBQTtJQUVEO1FBQWdDLDhCQUFRO1FBSXBDLG9CQUFZLElBQWdCO1lBQTVCLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLFNBR2Q7WUFQRCxZQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsa0JBQVksR0FBRyxDQUFDLENBQUM7WUFJYixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFDdkMsQ0FBQztRQUNMLGlCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVCtCLDBCQUFRLEdBU3ZDO0lBVFksY0FBVSxhQVN0QixDQUFBO0lBQ0Q7UUFBdUMscUNBQVE7UUFLM0MsMkJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtZQVRELGFBQU8sR0FBRyxDQUFDLENBQUM7WUFDWixjQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsZUFBUyxHQUFHLENBQUMsQ0FBQztZQUlWLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOztRQUNyQyxDQUFDO1FBQ0wsd0JBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYc0MsMEJBQVEsR0FXOUM7SUFYWSxxQkFBaUIsb0JBVzdCLENBQUE7SUFFRDtRQUFvQyxrQ0FBUTtRQU14Qyx3QkFBWSxJQUFnQjtZQUE1QixZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUtkO1lBWEQsYUFBTyxHQUFHLEVBQUUsQ0FBQztZQUNiLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLGFBQU8sR0FBRyxDQUFDLENBQUM7WUFDWixjQUFRLEdBQUcsQ0FBQyxDQUFDO1lBSVQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7O1FBQ2xDLENBQUM7UUFDTCxxQkFBQztJQUFELENBYkEsQUFhQyxDQWJtQywwQkFBUSxHQWEzQztJQWJZLGtCQUFjLGlCQWExQixDQUFBO0lBRUQ7UUFBcUMsbUNBQVE7UUFLekMseUJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtZQVRELFdBQUssR0FBRyxDQUFDLENBQUM7WUFDVixjQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsYUFBTyxHQUFHLEVBQUUsQ0FBQztZQUlULEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBOztRQUNuQyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYb0MsMEJBQVEsR0FXNUM7SUFYWSxtQkFBZSxrQkFXM0IsQ0FBQTtBQUNMLENBQUMsRUF2UWdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQXVRbkI7QUFDRCxrQkFBZSxHQUFHLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBTQ1JJQkUgPSAyMDAwO1xuICAgICAgICBzdGF0aWMgVU5TQ1JJQkUgPSAyMDAxO1xuICAgICAgICBzdGF0aWMgQkVUID0gMjExMDtcbiAgICAgICAgc3RhdGljIEhJU1RPUklFUyA9IDIxMTY7XG4gICAgICAgIHN0YXRpYyBHQU1FX0lORk8gPSAyMTExO1xuICAgICAgICBzdGF0aWMgVVBEQVRFX1RJTUUgPSAyMTEyO1xuICAgICAgICBzdGF0aWMgRElDRVNfUkVTVUxUID0gMjExMztcbiAgICAgICAgc3RhdGljIFJFU1VMVCA9IDIxMTQ7XG4gICAgICAgIHN0YXRpYyBORVdfR0FNRSA9IDIxMTU7XG4gICAgICAgIHN0YXRpYyBSRUZVTkQgPSAyMjAwO1xuICAgICAgICBzdGF0aWMgSkFDS1BPVCA9IDIxOTk7XG4gICAgICAgIHN0YXRpYyBMT0dfQ0hBVCA9IDE4MDAzO1xuICAgICAgICBzdGF0aWMgU0VORF9DSEFUID0gMTgwMDA7XG4gICAgICAgIHN0YXRpYyBTQ1JJQkVfQ0hBVCA9IDE4MDAxO1xuICAgICAgICBzdGF0aWMgVU5TQ1JJQkVfQ0hBVCA9IDE4MDAyO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU2NyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0NSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChDb25maWdzLkdhbWVJZC5UYWlYaXUpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChDb25maWdzLkFwcC5NT05FWV9UWVBFKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRVblNjcmliZSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU0NSSUJFKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChDb25maWdzLkdhbWVJZC5UYWlYaXUpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChDb25maWdzLkFwcC5NT05FWV9UWVBFKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRTY3JpYmVDaGF0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0NSSUJFX0NIQVQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kVW5TY3JpYmVDaGF0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuVU5TQ1JJQkVfQ0hBVCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRDaGF0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuU0VORF9DSEFUKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQmV0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IocmVmZXJlbmNlSWQ6IG51bWJlciwgYmV0VmFsdWU6IG51bWJlciwgZG9vcjogbnVtYmVyLCByZW1haW5UaW1lOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5CRVQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludCgxKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhyZWZlcmVuY2VJZCk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoYmV0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChDb25maWdzLkFwcC5NT05FWV9UWVBFKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoZG9vcik7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KHJlbWFpblRpbWUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUdhbWVJbmZvIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBnYW1lSWQgPSAwO1xuICAgICAgICBtb25leVR5cGUgPSAwO1xuICAgICAgICByZWZlcmVuY2VJZCA9IDA7XG4gICAgICAgIHJlbWFpblRpbWUgPSAwO1xuICAgICAgICBiZXR0aW5nU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgcG90VGFpID0gMDtcbiAgICAgICAgcG90WGl1ID0gMDtcbiAgICAgICAgYmV0VGFpID0gMDtcbiAgICAgICAgYmV0WGl1ID0gMDtcbiAgICAgICAgZGljZTEgPSAwO1xuICAgICAgICBkaWNlMiA9IDA7XG4gICAgICAgIGRpY2UzID0gMDtcbiAgICAgICAgcmVtYWluVGltZVJ1dExvYyA9IDA7XG4gICAgICAgIGpwVGFpID0gMDtcbiAgICAgICAganBYaXUgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5nYW1lSWQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5VHlwZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlSWQgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucmVtYWluVGltZSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0dGluZ1N0YXRlID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnBvdFRhaSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5wb3RYaXUgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0VGFpID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmJldFhpdSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTIgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UzID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lUnV0TG9jID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5qcFRhaSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5qcFhpdSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVUaW1lIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdFRhaSA9IDA7XG4gICAgICAgIHBvdFhpdSA9IDA7XG4gICAgICAgIG51bUJldFRhaSA9IDA7XG4gICAgICAgIG51bUJldFhpdSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmJldHRpbmdTdGF0ZSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5wb3RUYWkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucG90WGl1ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm51bUJldFRhaSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQmV0WGl1ID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVEaWNlc1Jlc3VsdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgZGljZTEgPSAwO1xuICAgICAgICBkaWNlMiA9IDA7XG4gICAgICAgIGRpY2UzID0gMDtcblxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UxID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTMgPSB0aGlzLmdldFNob3J0KCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUmVzdWx0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBtb25leVR5cGUgPSAxO1xuICAgICAgICB0b3RhbE1vbmV5ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy50b3RhbE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVJlZnVuZCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbW9uZXlSZWZ1bmQgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5tb25leVJlZnVuZCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlTmV3R2FtZSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICByZW1haW5UaW1lUnV0TG9jID0gMDtcbiAgICAgICAganBUYWkgPSAwO1xuICAgICAgICBqcFhpdSA9IDA7XG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VJZCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lUnV0TG9jID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5qcFRhaSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5qcFhpdSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVIaXN0b3JpZXMgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGRhdGEgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlQmV0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICBjdXJyZW50TW9uZXkgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlSmFja3BvdFdpbiBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgamFja3BvdCA9IDA7XG4gICAgICAgIG5pY2tuYW1lID0gXCJcIjtcbiAgICAgICAgaWRTZXNzaW9uID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuaWRTZXNzaW9uID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmphY2twb3QgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVMb2dDaGF0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBtZXNzYWdlID0gXCJcIjtcbiAgICAgICAgbWluVmlwUG9pbnQgPSAwO1xuICAgICAgICB0aW1lQmFuID0gMDtcbiAgICAgICAgdXNlclR5cGUgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMubWluVmlwUG9pbnQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMudGltZUJhbiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy51c2VyVHlwZSA9IHRoaXMuZ2V0Qnl0ZSgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVNlbmRDaGF0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIG5pY2tuYW1lID0gXCJcIjtcbiAgICAgICAgbWVzc2FnZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmdldFN0cmluZygpXG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBjbWQ7Il19