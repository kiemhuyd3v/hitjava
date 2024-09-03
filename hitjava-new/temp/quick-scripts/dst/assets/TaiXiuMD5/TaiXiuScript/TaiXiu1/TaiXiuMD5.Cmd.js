
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9e71kSmIdBIYO//zV5iK3x', 'TaiXiuMD5.Cmd');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.Cmd.ts

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
exports.cmdMD5 = void 0;
var Configs_1 = require("../../../Loading/src/Configs");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_OutPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.OutPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cmdMD5;
(function (cmdMD5) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.SUBSCRIBE = 22000;
        Code.UNSUBSCRIBE = 22001;
        Code.BET = 22110;
        Code.HISTORIES = 22116;
        Code.GAME_INFO = 22111;
        Code.UPDATE_TIME = 22112;
        Code.DICES_RESULT = 22113;
        Code.RESULT = 22114;
        Code.NEW_GAME = 22115;
        Code.LOG_CHAT = 23103;
        Code.SEND_CHAT = 23100;
        Code.SUBSCRIBE_CHAT = 23101;
        Code.UNSUBSCRIBE_CHAT = 23102;
        return Code;
    }());
    cmdMD5.Code = Code;
    var SendScribe = /** @class */ (function (_super) {
        __extends(SendScribe, _super);
        function SendScribe() {
            var _this = _super.call(this) || this;
            console.log("send subscribe md5" + Code.SUBSCRIBE);
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBSCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiuMD5);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendScribe;
    }(Network_OutPacket_1.default));
    cmdMD5.SendScribe = SendScribe;
    var SendUnScribe = /** @class */ (function (_super) {
        __extends(SendUnScribe, _super);
        function SendUnScribe() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBSCRIBE);
            _this.packHeader();
            _this.putShort(Configs_1.default.GameId.TaiXiuMD5);
            _this.putShort(Configs_1.default.App.MONEY_TYPE);
            _this.updateSize();
            return _this;
        }
        return SendUnScribe;
    }(Network_OutPacket_1.default));
    cmdMD5.SendUnScribe = SendUnScribe;
    var SendScribeChat = /** @class */ (function (_super) {
        __extends(SendScribeChat, _super);
        function SendScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SUBSCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendScribeChat;
    }(Network_OutPacket_1.default));
    cmdMD5.SendScribeChat = SendScribeChat;
    var SendUnScribeChat = /** @class */ (function (_super) {
        __extends(SendUnScribeChat, _super);
        function SendUnScribeChat() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.UNSUBSCRIBE_CHAT);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendUnScribeChat;
    }(Network_OutPacket_1.default));
    cmdMD5.SendUnScribeChat = SendUnScribeChat;
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
    cmdMD5.SendChat = SendChat;
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
    cmdMD5.SendBet = SendBet;
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
            _this.md5Code = "";
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
            _this.md5Code = _this.getString();
            return _this;
        }
        return ReceiveGameInfo;
    }(Network_InPacket_1.default));
    cmdMD5.ReceiveGameInfo = ReceiveGameInfo;
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
    cmdMD5.ReceiveUpdateTime = ReceiveUpdateTime;
    var ReceiveDicesResult = /** @class */ (function (_super) {
        __extends(ReceiveDicesResult, _super);
        function ReceiveDicesResult(data) {
            var _this = _super.call(this, data) || this;
            _this.result = 0;
            _this.dice1 = 0;
            _this.dice2 = 0;
            _this.dice3 = 0;
            _this.md5code = "";
            _this.result = _this.getShort();
            _this.dice1 = _this.getShort();
            _this.dice2 = _this.getShort();
            _this.dice3 = _this.getShort();
            _this.md5code = _this.getString();
            return _this;
        }
        return ReceiveDicesResult;
    }(Network_InPacket_1.default));
    cmdMD5.ReceiveDicesResult = ReceiveDicesResult;
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
    cmdMD5.ReceiveResult = ReceiveResult;
    var ReceiveNewGame = /** @class */ (function (_super) {
        __extends(ReceiveNewGame, _super);
        function ReceiveNewGame(data) {
            var _this = _super.call(this, data) || this;
            _this.referenceId = 0;
            _this.remainTimeRutLoc = 0;
            _this.md5code = "";
            _this.referenceId = _this.getLong();
            _this.remainTimeRutLoc = _this.getShort();
            _this.md5code = _this.getString();
            return _this;
        }
        return ReceiveNewGame;
    }(Network_InPacket_1.default));
    cmdMD5.ReceiveNewGame = ReceiveNewGame;
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
    cmdMD5.ReceiveHistories = ReceiveHistories;
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
    cmdMD5.ReceiveBet = ReceiveBet;
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
    cmdMD5.ReceiveLogChat = ReceiveLogChat;
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
    cmdMD5.ReceiveSendChat = ReceiveSendChat;
})(cmdMD5 = exports.cmdMD5 || (exports.cmdMD5 = {}));
exports.default = cmdMD5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUFtRDtBQUNuRCxnR0FBbUY7QUFDbkYsa0dBQXFGO0FBRS9FLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQWlCLE1BQU0sQ0ErT3RCO0FBL09ELFdBQWlCLE1BQU07SUFDbkI7UUFBQTtRQWNBLENBQUM7UUFiVSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNwQyxXQUFDO0tBZEQsQUFjQyxJQUFBO0lBZFksV0FBSSxPQWNoQixDQUFBO0lBRUQ7UUFBZ0MsOEJBQVM7UUFDckM7WUFBQSxZQUNJLGlCQUFPLFNBU1Y7WUFSRyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFD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QU8sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7O1FBQ2xDLENBQUM7UUFDTCxxQkFBQztJQUFELENBYkEsQUFhQyxDQWJtQywwQkFBUSxHQWEzQztJQWJZLHFCQUFjLGlCQWExQixDQUFBO0lBRUQ7UUFBcUMsbUNBQVE7UUFLekMseUJBQVksSUFBZ0I7WUFBNUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FJZDtZQVRELFdBQUssR0FBRyxDQUFDLENBQUM7WUFDVixjQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsYUFBTyxHQUFHLEVBQUUsQ0FBQztZQUlULEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFBOztRQUNuQyxDQUFDO1FBQ0wsc0JBQUM7SUFBRCxDQVhBLEFBV0MsQ0FYb0MsMEJBQVEsR0FXNUM7SUFYWSxzQkFBZSxrQkFXM0IsQ0FBQTtBQUNMLENBQUMsRUEvT2dCLE1BQU0sR0FBTixjQUFNLEtBQU4sY0FBTSxRQStPdEI7QUFDRCxrQkFBZSxNQUFNLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuT3V0UGFja2V0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kTUQ1IHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBTVUJTQ1JJQkUgPSAyMjAwMDtcbiAgICAgICAgc3RhdGljIFVOU1VCU0NSSUJFID0gMjIwMDE7XG4gICAgICAgIHN0YXRpYyBCRVQgPSAyMjExMDtcbiAgICAgICAgc3RhdGljIEhJU1RPUklFUyA9IDIyMTE2O1xuICAgICAgICBzdGF0aWMgR0FNRV9JTkZPID0gMjIxMTE7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfVElNRSA9IDIyMTEyO1xuICAgICAgICBzdGF0aWMgRElDRVNfUkVTVUxUID0gMjIxMTM7XG4gICAgICAgIHN0YXRpYyBSRVNVTFQgPSAyMjExNDtcbiAgICAgICAgc3RhdGljIE5FV19HQU1FID0gMjIxMTU7XG4gICAgICAgIHN0YXRpYyBMT0dfQ0hBVCA9IDIzMTAzO1xuICAgICAgICBzdGF0aWMgU0VORF9DSEFUID0gMjMxMDA7XG4gICAgICAgIHN0YXRpYyBTVUJTQ1JJQkVfQ0hBVCA9IDIzMTAxO1xuICAgICAgICBzdGF0aWMgVU5TVUJTQ1JJQkVfQ0hBVCA9IDIzMTAyO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU2NyaWJlIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kIHN1YnNjcmliZSBtZDVcIiArIENvZGUuU1VCU0NSSUJFKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNVQlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5HYW1lSWQuVGFpWGl1TUQ1KTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kVW5TY3JpYmUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5VTlNVQlNDUklCRSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5HYW1lSWQuVGFpWGl1TUQ1KTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kU2NyaWJlQ2hhdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNVQlNDUklCRV9DSEFUKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFVuU2NyaWJlQ2hhdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlVOU1VCU0NSSUJFX0NIQVQpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2hhdCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNFTkRfQ0hBVCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKG1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEJldCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHJlZmVyZW5jZUlkOiBudW1iZXIsIGJldFZhbHVlOiBudW1iZXIsIGRvb3I6IG51bWJlciwgcmVtYWluVGltZTogbnVtYmVyKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQkVUKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoMSk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcocmVmZXJlbmNlSWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGJldFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucHV0U2hvcnQoQ29uZmlncy5BcHAuTU9ORVlfVFlQRSk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KGRvb3IpO1xuICAgICAgICAgICAgdGhpcy5wdXRTaG9ydChyZW1haW5UaW1lKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVHYW1lSW5mbyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZ2FtZUlkID0gMDtcbiAgICAgICAgbW9uZXlUeXBlID0gMDtcbiAgICAgICAgcmVmZXJlbmNlSWQgPSAwO1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdFRhaSA9IDA7XG4gICAgICAgIHBvdFhpdSA9IDA7XG4gICAgICAgIGJldFRhaSA9IDA7XG4gICAgICAgIGJldFhpdSA9IDA7XG4gICAgICAgIGRpY2UxID0gMDtcbiAgICAgICAgZGljZTIgPSAwO1xuICAgICAgICBkaWNlMyA9IDA7XG4gICAgICAgIHJlbWFpblRpbWVSdXRMb2MgPSAwO1xuICAgICAgICBtZDVDb2RlID0gXCJcIjtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmdhbWVJZCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VJZCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5iZXR0aW5nU3RhdGUgPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgIHRoaXMucG90VGFpID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnBvdFhpdSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5iZXRUYWkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0WGl1ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UxID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMiA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTMgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWVSdXRMb2MgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLm1kNUNvZGUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVVcGRhdGVUaW1lIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZW1haW5UaW1lID0gMDtcbiAgICAgICAgYmV0dGluZ1N0YXRlID0gZmFsc2U7XG4gICAgICAgIHBvdFRhaSA9IDA7XG4gICAgICAgIHBvdFhpdSA9IDA7XG4gICAgICAgIG51bUJldFRhaSA9IDA7XG4gICAgICAgIG51bUJldFhpdSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmJldHRpbmdTdGF0ZSA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5wb3RUYWkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucG90WGl1ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm51bUJldFRhaSA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubnVtQmV0WGl1ID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVEaWNlc1Jlc3VsdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgZGljZTEgPSAwO1xuICAgICAgICBkaWNlMiA9IDA7XG4gICAgICAgIGRpY2UzID0gMDtcbiAgICAgICAgbWQ1Y29kZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuZGljZTEgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICB0aGlzLmRpY2UyID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5kaWNlMyA9IHRoaXMuZ2V0U2hvcnQoKTtcbiAgICAgICAgICAgIHRoaXMubWQ1Y29kZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUmVzdWx0IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBtb25leVR5cGUgPSAxO1xuICAgICAgICB0b3RhbE1vbmV5ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy50b3RhbE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IHRoaXMuZ2V0TG9uZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZU5ld0dhbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIHJlZmVyZW5jZUlkID0gMDtcbiAgICAgICAgcmVtYWluVGltZVJ1dExvYyA9IDA7XG4gICAgICAgIG1kNWNvZGUgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VJZCA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5UaW1lUnV0TG9jID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5tZDVjb2RlID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlSGlzdG9yaWVzIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBkYXRhID0gXCJcIjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUJldCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlTG9nQ2hhdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIG1pblZpcFBvaW50ID0gMDtcbiAgICAgICAgdGltZUJhbiA9IDA7XG4gICAgICAgIHVzZXJUeXBlID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm1pblZpcFBvaW50ID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVCYW4gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMudXNlclR5cGUgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVTZW5kQ2hhdCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgZXJyb3IgPSAwO1xuICAgICAgICBuaWNrbmFtZSA9IFwiXCI7XG4gICAgICAgIG1lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuZ2V0RXJyb3IoKTtcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY21kTUQ1OyJdfQ==