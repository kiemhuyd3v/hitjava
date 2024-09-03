
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/networks/CardGame.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7c6afh+XBMeoI7bhZgC4XY', 'CardGame.Cmd');
// Lobby/LobbyScript/Script/networks/CardGame.Cmd.ts

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
exports.CardGameCmd = void 0;
var Network_OutPacket_1 = require("./Network.OutPacket");
var Network_InPacket_1 = require("./Network.InPacket");
var ccclass = cc._decorator.ccclass;
var CardGameCmd;
(function (CardGameCmd) {
    var Code = /** @class */ (function () {
        function Code() {
        }
        Code.LOGIN = 1;
        Code.NOTIFY_DISCONNECT = 37;
        Code.PING_PONG = 50;
        Code.JOIN_ROOM = 3001;
        Code.RECONNECT_GAME_ROOM = 3002;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.HOLD = 3116;
        Code.MONEY_BET_CONFIG = 3003;
        Code.GET_LIST_ROOM = 3014;
        Code.TOP_SERVER = 1001;
        Code.CHEAT_CARD = 3115;
        Code.PING_TEST = 1050;
        Code.CHAT_ROOM = 3008;
        Code.NO_HU_VANG = 3007;
        Code.THONG_TIN_HU_VANG = 3009;
        Code.REQUEST_INFO_MOI_CHOI = 3010;
        Code.MOI_CHOI = 3011;
        Code.ACCEPT_MOI_CHOI = 3012;
        Code.CREATE_ROOM = 3013;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.FIND_ROOM_LOBBY = 3016;
        Code.GET_XOCDIA_CONFIG = 3017;
        Code.CREATE_ROOM_FAIL = 3018;
        return Code;
    }());
    CardGameCmd.Code = Code;
    var SendMoneyBetConfig = /** @class */ (function (_super) {
        __extends(SendMoneyBetConfig, _super);
        function SendMoneyBetConfig() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.MONEY_BET_CONFIG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendMoneyBetConfig;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendMoneyBetConfig = SendMoneyBetConfig;
    var ResMoneyBetConfig = /** @class */ (function (_super) {
        __extends(ResMoneyBetConfig, _super);
        function ResMoneyBetConfig(data) {
            var _this = _super.call(this, data) || this;
            _this.list = [];
            _this.rules = [];
            var listSize = _this.getShort();
            for (var a = 0; a < listSize; a++) {
                var b = {
                    maxUserPerRoom: _this.getInt(),
                    moneyType: _this.getByte(),
                    moneyBet: _this.getLong(),
                    moneyRequire: _this.getLong(),
                    nPersion: _this.getInt(),
                };
                _this.list.push(b);
            }
            for (a = 0; a < listSize; a++)
                _this.rules.push(_this.getByte());
            return _this;
        }
        return ResMoneyBetConfig;
    }(Network_InPacket_1.default));
    CardGameCmd.ResMoneyBetConfig = ResMoneyBetConfig;
    var SendGetListRoom = /** @class */ (function (_super) {
        __extends(SendGetListRoom, _super);
        function SendGetListRoom(moneyType, maxPlayer, param3, param4, cardFrom, cardTo) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GET_LIST_ROOM);
            _this.packHeader();
            _this.putByte(moneyType);
            _this.putByte(maxPlayer);
            _this.putByte(param3);
            _this.putByte(param4);
            _this.putByte(cardFrom);
            _this.putByte(cardTo);
            _this.updateSize();
            return _this;
        }
        return SendGetListRoom;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendGetListRoom = SendGetListRoom;
    var SendJoinRoom = /** @class */ (function (_super) {
        __extends(SendJoinRoom, _super);
        function SendJoinRoom(type, max, bet, rule) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.JOIN_ROOM);
            _this.packHeader();
            _this.putInt(type);
            _this.putInt(max);
            _this.putLong(bet);
            _this.putInt(rule);
            _this.updateSize();
            return _this;
        }
        return SendJoinRoom;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendJoinRoom = SendJoinRoom;
    var SendJoinRoomById = /** @class */ (function (_super) {
        __extends(SendJoinRoomById, _super);
        function SendJoinRoomById(id) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.JOIN_GAME_ROOM_BY_ID);
            _this.packHeader();
            _this.putInt(id);
            _this.putString(""); //mat khau
            _this.updateSize();
            return _this;
        }
        return SendJoinRoomById;
    }(Network_OutPacket_1.default));
    CardGameCmd.SendJoinRoomById = SendJoinRoomById;
    var ReceivedJoinRoomFail = /** @class */ (function (_super) {
        __extends(ReceivedJoinRoomFail, _super);
        function ReceivedJoinRoomFail(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.error = _this.getError();
            return _this;
        }
        return ReceivedJoinRoomFail;
    }(Network_InPacket_1.default));
    CardGameCmd.ReceivedJoinRoomFail = ReceivedJoinRoomFail;
})(CardGameCmd = exports.CardGameCmd || (exports.CardGameCmd = {}));
exports.default = CardGameCmd;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXG5ldHdvcmtzXFxDYXJkR2FtZS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUE0QztBQUM1Qyx1REFBMEM7QUFFbEMsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBbUI7QUFFbEMsSUFBaUIsV0FBVyxDQStHM0I7QUEvR0QsV0FBaUIsV0FBVztJQUN4QjtRQUFBO1FBd0JBLENBQUM7UUF2QlUsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFDekIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ25D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NUIsWUFDSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtZQUxELFdBQUssR0FBRyxDQUFDLENBQUM7WUFJTixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7UUFDakMsQ0FBQztRQUNMLDJCQUFDO0lBQUQsQ0FQQSxBQU9DLENBUHlDLDBCQUFRLEdBT2pEO0lBUFksZ0NBQW9CLHVCQU9oQyxDQUFBO0FBQ0wsQ0FBQyxFQS9HZ0IsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUErRzNCO0FBQ0Qsa0JBQWUsV0FBVyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE91dFBhY2tldCBmcm9tIFwiLi9OZXR3b3JrLk91dFBhY2tldFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuL05ldHdvcmsuSW5QYWNrZXRcIjtcblxuY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5leHBvcnQgbmFtZXNwYWNlIENhcmRHYW1lQ21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBMT0dJTiA9IDE7XG4gICAgICAgIHN0YXRpYyBOT1RJRllfRElTQ09OTkVDVCA9IDM3O1xuICAgICAgICBzdGF0aWMgUElOR19QT05HID0gNTA7XG4gICAgICAgIHN0YXRpYyBKT0lOX1JPT00gPSAzMDAxO1xuICAgICAgICBzdGF0aWMgUkVDT05ORUNUX0dBTUVfUk9PTSA9IDMwMDI7XG4gICAgICAgIHN0YXRpYyBKT0lOX1JPT01fRkFJTCA9IDMwMDQ7XG4gICAgICAgIHN0YXRpYyBIT0xEID0gMzExNjtcbiAgICAgICAgc3RhdGljIE1PTkVZX0JFVF9DT05GSUcgPSAzMDAzO1xuICAgICAgICBzdGF0aWMgR0VUX0xJU1RfUk9PTSA9IDMwMTQ7XG4gICAgICAgIHN0YXRpYyBUT1BfU0VSVkVSID0gMTAwMTtcbiAgICAgICAgc3RhdGljIENIRUFUX0NBUkQgPSAzMTE1O1xuICAgICAgICBzdGF0aWMgUElOR19URVNUID0gMTA1MDtcbiAgICAgICAgc3RhdGljIENIQVRfUk9PTSA9IDMwMDg7XG4gICAgICAgIHN0YXRpYyBOT19IVV9WQU5HID0gMzAwNztcbiAgICAgICAgc3RhdGljIFRIT05HX1RJTl9IVV9WQU5HID0gMzAwOTtcbiAgICAgICAgc3RhdGljIFJFUVVFU1RfSU5GT19NT0lfQ0hPSSA9IDMwMTA7XG4gICAgICAgIHN0YXRpYyBNT0lfQ0hPSSA9IDMwMTE7XG4gICAgICAgIHN0YXRpYyBBQ0NFUFRfTU9JX0NIT0kgPSAzMDEyO1xuICAgICAgICBzdGF0aWMgQ1JFQVRFX1JPT00gPSAzMDEzO1xuICAgICAgICBzdGF0aWMgSk9JTl9HQU1FX1JPT01fQllfSUQgPSAzMDE1O1xuICAgICAgICBzdGF0aWMgRklORF9ST09NX0xPQkJZID0gMzAxNjtcbiAgICAgICAgc3RhdGljIEdFVF9YT0NESUFfQ09ORklHID0gMzAxNztcbiAgICAgICAgc3RhdGljIENSRUFURV9ST09NX0ZBSUwgPSAzMDE4O1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kTW9uZXlCZXRDb25maWcgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5NT05FWV9CRVRfQ09ORklHKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVzTW9uZXlCZXRDb25maWcgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgcnVsZXMgPSBbXTtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICBsZXQgbGlzdFNpemUgPSB0aGlzLmdldFNob3J0KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IGxpc3RTaXplOyBhKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYiA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4VXNlclBlclJvb206IHRoaXMuZ2V0SW50KCksXG4gICAgICAgICAgICAgICAgICAgIG1vbmV5VHlwZTogdGhpcy5nZXRCeXRlKCksXG4gICAgICAgICAgICAgICAgICAgIG1vbmV5QmV0OiB0aGlzLmdldExvbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgbW9uZXlSZXF1aXJlOiB0aGlzLmdldExvbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgblBlcnNpb246IHRoaXMuZ2V0SW50KCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3QucHVzaChiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoYSA9IDA7IGEgPCBsaXN0U2l6ZTsgYSsrKSB0aGlzLnJ1bGVzLnB1c2godGhpcy5nZXRCeXRlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRHZXRMaXN0Um9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKG1vbmV5VHlwZTogbnVtYmVyLCBtYXhQbGF5ZXI6IG51bWJlciwgcGFyYW0zOiBudW1iZXIsIHBhcmFtNDogbnVtYmVyLCBjYXJkRnJvbTogbnVtYmVyLCBjYXJkVG86IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkdFVF9MSVNUX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUobW9uZXlUeXBlKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShtYXhQbGF5ZXIpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKHBhcmFtMyk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUocGFyYW00KTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShjYXJkRnJvbSk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoY2FyZFRvKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRKb2luUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHR5cGU6IG51bWJlciwgbWF4OiBudW1iZXIsIGJldDogbnVtYmVyLCBydWxlOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5KT0lOX1JPT00pO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEludCh0eXBlKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KG1heCk7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoYmV0KTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KHJ1bGUpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEpvaW5Sb29tQnlJZCBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5KT0lOX0dBTUVfUk9PTV9CWV9JRCk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KGlkKTtcbiAgICAgICAgICAgIHRoaXMucHV0U3RyaW5nKFwiXCIpOy8vbWF0IGtoYXVcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkSm9pblJvb21GYWlsIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZEdhbWVDbWQ7Il19