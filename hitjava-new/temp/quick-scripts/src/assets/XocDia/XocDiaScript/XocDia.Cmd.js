"use strict";
cc._RF.push(module, '10b98AUpqVENYK8MM95BNtG', 'XocDia.Cmd');
// XocDia/XocDiaScript/XocDia.Cmd.ts

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
        Code.LOGIN = 1;
        Code.GETLISTROOM = 3014;
        Code.JOIN_GAME_ROOM_BY_ID = 3015;
        Code.CMDJOINROOMFAIL = 3004;
        Code.CMDRECONNECTGAMEROOM = 3002;
        Code.REQUEST_INFO_MOI_CHOI = 3010;
        Code.MOI_CHOI = 3011;
        Code.ACCEPT_MOI_CHOI = 3012;
        Code.JOIN_ROOM_FAIL = 3004;
        Code.JOIN_ROOM_SUCCESS = 3101;
        Code.USER_JOIN_ROOM_SUCCESS = 3102;
        Code.USER_OUT_ROOM = 3104;
        Code.ORDER_BANKER = 3113;
        Code.ACTION_IN_GAME = 3105;
        Code.PUT_MONEY = 3106;
        Code.PUT_MONEY_X2 = 3115;
        Code.PUT_ALL_IN = 3116;
        Code.QUIT_ROOM = 3103;
        Code.DANG_KY_THOAT_PHONG = 3100;
        Code.START_GAME = 3117;
        Code.BANKER_SELL_GATE = 3110;
        Code.BUY_GATE = 3111;
        Code.REFUN_MONEY = 3118;
        Code.FINISH_GAME = 3112;
        Code.GET_TIME = 3119;
        Code.HUY_LAM_CAI = 3130;
        Code.STOP_GAME = 3122;
        Code.SOI_CAU = 3121;
        Code.MESSAGE_ERROR_BANKER = 3123;
        Code.SET_CHEAT = 3124;
        Code.CHAT_MS = 3008;
        Code.INFO_GATE_SELL = 3126;
        Code.INFO_MONEY_AFTER_BANKER_SELL = 3128;
        Code.ACTION_BANKER = 3127;
        Code.KICK_OUT_XOCDIA = 3132;
        Code.DESTROY_ROOM = 3133;
        Code.LOCK_GATE = 3131;
        Code.GET_MONEY_LAI = 3134;
        Code.UPDATE_CURRENT_MONEY = 3135;
        return Code;
    }());
    cmd.Code = Code;
    var SendGetListRoom = /** @class */ (function (_super) {
        __extends(SendGetListRoom, _super);
        function SendGetListRoom() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.GETLISTROOM);
            _this.packHeader();
            _this.putInt(Configs_1.default.App.MONEY_TYPE); //money type
            _this.putInt(30); //maxplayer
            _this.putLong(-1); //khong xac dinh
            _this.putInt(0); //khong xac dinh
            _this.putInt(0); //CARD_FROM
            _this.putInt(50); //CARD_TO
            _this.updateSize();
            return _this;
        }
        return SendGetListRoom;
    }(Network_OutPacket_1.default));
    cmd.SendGetListRoom = SendGetListRoom;
    var ReceiveGetListRoom = /** @class */ (function (_super) {
        __extends(ReceiveGetListRoom, _super);
        function ReceiveGetListRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.list = [];
            var listSize = _this.getShort();
            _this.list = [];
            for (var i = 0; i < listSize; i++) {
                var item = {};
                item["id"] = _this.getInt();
                item["userCount"] = _this.getByte();
                item["limitPlayer"] = _this.getByte();
                item["maxUserPerRoom"] = _this.getInt();
                item["moneyType"] = _this.getByte();
                item["moneyBet"] = _this.getInt();
                item["requiredMoney"] = _this.getInt();
                item["rule"] = _this.getByte();
                item["nameRoom"] = _this.getString();
                item["key"] = _this.getBool();
                item["quyban"] = _this.getLong();
                _this.list.push(item);
            }
            return _this;
        }
        return ReceiveGetListRoom;
    }(Network_InPacket_1.default));
    cmd.ReceiveGetListRoom = ReceiveGetListRoom;
    var SendJoinRoomById = /** @class */ (function (_super) {
        __extends(SendJoinRoomById, _super);
        function SendJoinRoomById(id) {
            var _this = _super.call(this) || this;
            //  cc.log("SendJoinRoomById:"+id);
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
    cmd.SendJoinRoomById = SendJoinRoomById;
    var ReceiveJoinRoomSuccess = /** @class */ (function (_super) {
        __extends(ReceiveJoinRoomSuccess, _super);
        function ReceiveJoinRoomSuccess(data) {
            var _this = _super.call(this, data) || this;
            _this.moneyBet = 0;
            _this.roomId = 0;
            _this.gameId = 0;
            _this.moneyType = 0;
            _this.gameState = 0;
            _this.countTime = 0;
            _this.playerCount = 0;
            _this.potID = [];
            _this.playerInfos = [];
            _this.money = 0;
            _this.banker = false;
            _this.isSubBanker = false;
            _this.purchaseStatus = 0;
            _this.potPurchase = 0;
            _this.moneyPurchaseEven = 0;
            _this.moneyPurchaseOdd = 0;
            _this.moneyRemain = 0;
            _this.subListCount = 0;
            _this.list_buy_gate = [];
            _this.bankerReqDestroy = false;
            _this.bossReqDestroy = false;
            _this.rule = 0;
            _this.moneyRegisBanker = 0;
            _this.moneyBet = _this.getInt();
            _this.roomId = _this.getInt();
            _this.gameId = _this.getInt();
            _this.moneyType = _this.getByte();
            _this.gameState = _this.getByte();
            _this.countTime = _this.getInt();
            _this.playerCount = _this.getByte();
            _this.potID = [];
            for (var a = 0; 6 > a; a++) {
                var b = {};
                b["id"] = _this.getByte();
                b["ratio"] = _this.getInt();
                b["maxMoneyBet"] = _this.getLong();
                b["totalMoney"] = _this.getLong();
                b["moneyBet"] = _this.getLong();
                b["isLock"] = _this.getBool();
                _this.potID.push(b);
            }
            _this.playerInfos = [];
            for (var a = 0; a < _this.playerCount; a++) {
                var b = {};
                b["nickname"] = _this.getString();
                b["avatar"] = _this.getString();
                b["money"] = _this.getLong();
                b["banker"] = _this.getBool();
                b["isSubBanker"] = _this.getBool();
                b["reqKickroom"] = _this.getBool();
                _this.playerInfos.push(b);
            }
            _this.money = _this.getLong();
            _this.banker = _this.getBool();
            _this.isSubBanker = _this.getBool();
            _this.purchaseStatus = _this.getInt();
            _this.potPurchase = _this.getInt();
            _this.moneyPurchaseEven = _this.getLong();
            _this.moneyPurchaseOdd = _this.getLong();
            _this.moneyRemain = _this.getLong();
            _this.subListCount = _this.getInt();
            _this.list_buy_gate = [];
            for (var a = 0; a < _this.subListCount; a++) {
                var b = {};
                b["nickname"] = _this.getString();
                b["money"] = _this.getLong();
                _this.list_buy_gate.push(b);
            }
            _this.bankerReqDestroy = _this.getBool();
            _this.bossReqDestroy = _this.getBool();
            _this.rule = _this.getInt();
            _this.moneyRegisBanker = _this.getLong();
            return _this;
        }
        return ReceiveJoinRoomSuccess;
    }(Network_InPacket_1.default));
    cmd.ReceiveJoinRoomSuccess = ReceiveJoinRoomSuccess;
    var ReceiveJoinRoomFail = /** @class */ (function (_super) {
        __extends(ReceiveJoinRoomFail, _super);
        function ReceiveJoinRoomFail(data) {
            return _super.call(this, data) || this;
        }
        return ReceiveJoinRoomFail;
    }(Network_InPacket_1.default));
    cmd.ReceiveJoinRoomFail = ReceiveJoinRoomFail;
    var SendLeaveRoom = /** @class */ (function (_super) {
        __extends(SendLeaveRoom, _super);
        function SendLeaveRoom() {
            var _this = 
            //  cc.log("SendLeaveRoom ĐANG KY THOAT PHONG");
            _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.DANG_KY_THOAT_PHONG);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendLeaveRoom;
    }(Network_OutPacket_1.default));
    cmd.SendLeaveRoom = SendLeaveRoom;
    var ReceiveLeavedRoom = /** @class */ (function (_super) {
        __extends(ReceiveLeavedRoom, _super);
        function ReceiveLeavedRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.reason = 0;
            _this.reason = _this.getByte();
            return _this;
        }
        return ReceiveLeavedRoom;
    }(Network_InPacket_1.default));
    cmd.ReceiveLeavedRoom = ReceiveLeavedRoom;
    var ReceiveLeaveRoom = /** @class */ (function (_super) {
        __extends(ReceiveLeaveRoom, _super);
        function ReceiveLeaveRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.bRegis = false;
            _this.nickname = "";
            _this.bRegis = _this.getBool();
            _this.nickname = _this.getString();
            return _this;
        }
        return ReceiveLeaveRoom;
    }(Network_InPacket_1.default));
    cmd.ReceiveLeaveRoom = ReceiveLeaveRoom;
    var ReceiveUserJoinRoom = /** @class */ (function (_super) {
        __extends(ReceiveUserJoinRoom, _super);
        function ReceiveUserJoinRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.nickname = "";
            _this.avatar = "";
            _this.money = 0;
            _this.nickname = _this.getString();
            _this.avatar = _this.getString();
            _this.money = _this.getLong();
            return _this;
        }
        return ReceiveUserJoinRoom;
    }(Network_InPacket_1.default));
    cmd.ReceiveUserJoinRoom = ReceiveUserJoinRoom;
    var ReceiveUserOutRoom = /** @class */ (function (_super) {
        __extends(ReceiveUserOutRoom, _super);
        function ReceiveUserOutRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.nickname = "";
            _this.nickname = _this.getString();
            return _this;
        }
        return ReceiveUserOutRoom;
    }(Network_InPacket_1.default));
    cmd.ReceiveUserOutRoom = ReceiveUserOutRoom;
    var ReceiveActionInGame = /** @class */ (function (_super) {
        __extends(ReceiveActionInGame, _super);
        function ReceiveActionInGame(data) {
            var _this = _super.call(this, data) || this;
            _this.action = 0;
            _this.time = 0;
            _this.action = _this.getByte();
            _this.time = _this.getByte();
            return _this;
        }
        return ReceiveActionInGame;
    }(Network_InPacket_1.default));
    cmd.ReceiveActionInGame = ReceiveActionInGame;
    var ReceiveStartGame = /** @class */ (function (_super) {
        __extends(ReceiveStartGame, _super);
        function ReceiveStartGame(data) {
            var _this = _super.call(this, data) || this;
            _this.banker = "";
            _this.gameId = 0;
            _this.moneyBanker = 0;
            _this.list_lock_gate = [];
            _this.banker = _this.getString();
            _this.gameId = _this.getInt();
            _this.moneyBanker = _this.getLong();
            _this.list_lock_gate = [];
            for (var a = 0; 6 > a; a++) {
                var b = {};
                b["id"] = _this.getByte();
                b["isLock"] = _this.getBool();
                _this.list_lock_gate.push(b);
            }
            return _this;
        }
        return ReceiveStartGame;
    }(Network_InPacket_1.default));
    cmd.ReceiveStartGame = ReceiveStartGame;
    var SendPutMoney = /** @class */ (function (_super) {
        __extends(SendPutMoney, _super);
        function SendPutMoney(doorId, coin) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.PUT_MONEY);
            _this.packHeader();
            _this.putByte(doorId);
            _this.putLong(coin);
            _this.updateSize();
            return _this;
        }
        return SendPutMoney;
    }(Network_OutPacket_1.default));
    cmd.SendPutMoney = SendPutMoney;
    var ReceivePutMoney = /** @class */ (function (_super) {
        __extends(ReceivePutMoney, _super);
        function ReceivePutMoney(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.nickname = "";
            _this.betMoney = 0;
            _this.potId = 0;
            _this.potMoney = 0;
            _this.currentMoney = 0;
            _this.error = _this.getError();
            _this.nickname = _this.getString();
            _this.betMoney = _this.getLong();
            _this.potId = _this.getByte();
            _this.potMoney = _this.getLong();
            _this.currentMoney = _this.getLong();
            return _this;
        }
        return ReceivePutMoney;
    }(Network_InPacket_1.default));
    cmd.ReceivePutMoney = ReceivePutMoney;
    var ReceiveBankerSellGate = /** @class */ (function (_super) {
        __extends(ReceiveBankerSellGate, _super);
        function ReceiveBankerSellGate(data) {
            var _this = _super.call(this, data) || this;
            _this.action = 0; //1: nhà cái cân tất, 2: ban chẵn, 3: bán lẻ
            _this.moneySell = 0;
            _this.action = _this.getByte();
            _this.moneySell = _this.getLong();
            return _this;
        }
        return ReceiveBankerSellGate;
    }(Network_InPacket_1.default));
    cmd.ReceiveBankerSellGate = ReceiveBankerSellGate;
    var SendBuyGate = /** @class */ (function (_super) {
        __extends(SendBuyGate, _super);
        function SendBuyGate(coin) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BUY_GATE);
            _this.packHeader();
            _this.putLong(coin);
            _this.updateSize();
            return _this;
        }
        return SendBuyGate;
    }(Network_OutPacket_1.default));
    cmd.SendBuyGate = SendBuyGate;
    var ReceiveBuyGate = /** @class */ (function (_super) {
        __extends(ReceiveBuyGate, _super);
        function ReceiveBuyGate(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.nickname = "";
            _this.moneyBuy = 0;
            _this.rmMoneySell = 0;
            _this.error = _this.getError();
            _this.nickname = _this.getString();
            _this.moneyBuy = _this.getLong();
            _this.rmMoneySell = _this.getLong();
            return _this;
        }
        return ReceiveBuyGate;
    }(Network_InPacket_1.default));
    cmd.ReceiveBuyGate = ReceiveBuyGate;
    var ReceiveRefunMoney = /** @class */ (function (_super) {
        __extends(ReceiveRefunMoney, _super);
        function ReceiveRefunMoney(data) {
            var _this = _super.call(this, data) || this;
            _this.rfCount = 0;
            _this.potID = [];
            _this.playerInfosRefun = [];
            _this.rfCount = _this.getInt();
            for (var a = 0; 6 > a; a++) {
                var b = {};
                b["id"] = _this.getByte();
                b["moneyRefund"] = _this.getLong();
                b["totalMoney"] = _this.getLong();
                _this.potID.push(b);
            }
            _this.playerInfosRefun = [];
            for (var a = 0; a < _this.rfCount; a++) {
                var b = {};
                b["nickname"] = _this.getString();
                b["moneyRefund"] = _this.getLong();
                b["currentMoney"] = _this.getLong();
                b["pots"] = _this.getString();
                b["moneyRfPots"] = _this.getString();
                _this.playerInfosRefun.push(b);
            }
            return _this;
        }
        return ReceiveRefunMoney;
    }(Network_InPacket_1.default));
    cmd.ReceiveRefunMoney = ReceiveRefunMoney;
    var ReceiveFinishGame = /** @class */ (function (_super) {
        __extends(ReceiveFinishGame, _super);
        function ReceiveFinishGame(data) {
            var _this = _super.call(this, data) || this;
            _this.infoAllPot = [];
            _this.diceIDs = [];
            _this.moneyBankerBefore = 0;
            _this.moneyBankerAfter = 0;
            _this.moneyBankerExchange = 0;
            _this.playerInfoWin = [];
            _this.subListCount = 0;
            _this.infoSubBanker = [];
            for (var a = 0; 6 > a; a++) {
                var b = {};
                b["potId"] = _this.getByte();
                b["totalMoney"] = _this.getLong();
                b["win"] = _this.getBool();
                _this.infoAllPot.push(b);
            }
            for (var a = 0; 4 > a; a++) {
                _this.diceIDs.push(_this.getInt());
            }
            _this.moneyBankerBefore = _this.getLong();
            _this.moneyBankerAfter = _this.getLong();
            _this.moneyBankerExchange = _this.getLong();
            var playerWinCount = _this.getInt();
            for (var a = 0; a < playerWinCount; a++) {
                var b = {};
                b["nickname"] = _this.getString();
                b["moneyWin"] = _this.getLong();
                b["currentMoney"] = _this.getLong();
                b["potsWin"] = _this.getString();
                b["moneyWinPots"] = _this.getString();
                _this.playerInfoWin.push(b);
            }
            _this.subListCount = _this.getInt();
            for (var a = 0; a < _this.subListCount; a++) {
                var b = {};
                b["nicknameSubbanker"] = _this.getString();
                b["potSubBanker"] = _this.getByte();
                b["moneySubBanker"] = _this.getLong();
                b["moneySubBankerNoFee"] = _this.getLong();
                b["currentMoneySubBanker"] = _this.getLong();
                _this.infoSubBanker.push(b);
            }
            return _this;
        }
        return ReceiveFinishGame;
    }(Network_InPacket_1.default));
    cmd.ReceiveFinishGame = ReceiveFinishGame;
    var SendReconnect = /** @class */ (function (_super) {
        __extends(SendReconnect, _super);
        function SendReconnect() {
            var _this = _super.call(this) || this;
            //  cc.log("SendJoinRoomById sendReconnect");
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CMDRECONNECTGAMEROOM);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendReconnect;
    }(Network_OutPacket_1.default));
    cmd.SendReconnect = SendReconnect;
    var CmdSendGetCau = /** @class */ (function (_super) {
        __extends(CmdSendGetCau, _super);
        function CmdSendGetCau() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.SOI_CAU);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return CmdSendGetCau;
    }(Network_OutPacket_1.default));
    cmd.CmdSendGetCau = CmdSendGetCau;
    var ReceiveGetCau = /** @class */ (function (_super) {
        __extends(ReceiveGetCau, _super);
        function ReceiveGetCau(data) {
            var _this = _super.call(this, data) || this;
            _this.totalEven = 0;
            _this.totalOdd = 0;
            _this.rsCount = 0;
            _this.arrayCau = [];
            _this.totalEven = _this.getInt();
            _this.totalOdd = _this.getInt();
            _this.rsCount = _this.getInt();
            for (var a = 0; a < _this.rsCount; a++) {
                _this.arrayCau.push(_this.getByte());
            }
            return _this;
        }
        return ReceiveGetCau;
    }(Network_InPacket_1.default));
    cmd.ReceiveGetCau = ReceiveGetCau;
    var SendOrderBanker = /** @class */ (function (_super) {
        __extends(SendOrderBanker, _super);
        function SendOrderBanker() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.ORDER_BANKER);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendOrderBanker;
    }(Network_OutPacket_1.default));
    cmd.SendOrderBanker = SendOrderBanker;
    var ReceiveOrderBanker = /** @class */ (function (_super) {
        __extends(ReceiveOrderBanker, _super);
        function ReceiveOrderBanker(data) {
            var _this = _super.call(this, data) || this;
            _this.error = 0;
            _this.moneyRequire = 0;
            _this.error = _this.getError();
            _this.moneyRequire = _this.getLong();
            return _this;
        }
        return ReceiveOrderBanker;
    }(Network_InPacket_1.default));
    cmd.ReceiveOrderBanker = ReceiveOrderBanker;
    var ReceiveInfoGateSell = /** @class */ (function (_super) {
        __extends(ReceiveInfoGateSell, _super);
        function ReceiveInfoGateSell(data) {
            var _this = _super.call(this, data) || this;
            _this.moneyEven = 0;
            _this.moneyOdd = 0;
            _this.moneyEven = _this.getLong();
            _this.moneyOdd = _this.getLong();
            return _this;
        }
        return ReceiveInfoGateSell;
    }(Network_InPacket_1.default));
    cmd.ReceiveInfoGateSell = ReceiveInfoGateSell;
    var SendCancelBanker = /** @class */ (function (_super) {
        __extends(SendCancelBanker, _super);
        function SendCancelBanker() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.HUY_LAM_CAI);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendCancelBanker;
    }(Network_OutPacket_1.default));
    cmd.SendCancelBanker = SendCancelBanker;
    var ReceiveCancelBanker = /** @class */ (function (_super) {
        __extends(ReceiveCancelBanker, _super);
        function ReceiveCancelBanker(data) {
            var _this = _super.call(this, data) || this;
            _this.bDestroy = false;
            _this.nickname = "";
            _this.bDestroy = _this.getBool();
            _this.nickname = _this.getString();
            return _this;
        }
        return ReceiveCancelBanker;
    }(Network_InPacket_1.default));
    cmd.ReceiveCancelBanker = ReceiveCancelBanker;
    var SendBankerSellGate = /** @class */ (function (_super) {
        __extends(SendBankerSellGate, _super);
        function SendBankerSellGate(door, coin) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.BANKER_SELL_GATE);
            _this.packHeader();
            _this.putByte(door); //1: nhà cái cân tất, 2: ban chẵn, 3: bán lẻ
            _this.putLong(coin);
            _this.updateSize();
            return _this;
        }
        return SendBankerSellGate;
    }(Network_OutPacket_1.default));
    cmd.SendBankerSellGate = SendBankerSellGate;
    var ReceiveInfoMoneyAfterBankerSell = /** @class */ (function (_super) {
        __extends(ReceiveInfoMoneyAfterBankerSell, _super);
        function ReceiveInfoMoneyAfterBankerSell(data) {
            var _this = _super.call(this, data) || this;
            _this.money = 0;
            _this.money = _this.getLong();
            return _this;
        }
        return ReceiveInfoMoneyAfterBankerSell;
    }(Network_InPacket_1.default));
    cmd.ReceiveInfoMoneyAfterBankerSell = ReceiveInfoMoneyAfterBankerSell;
    var SendRequestInfoMoiChoi = /** @class */ (function (_super) {
        __extends(SendRequestInfoMoiChoi, _super);
        function SendRequestInfoMoiChoi() {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.REQUEST_INFO_MOI_CHOI);
            _this.packHeader();
            _this.updateSize();
            return _this;
        }
        return SendRequestInfoMoiChoi;
    }(Network_OutPacket_1.default));
    cmd.SendRequestInfoMoiChoi = SendRequestInfoMoiChoi;
    var SendMoiChoi = /** @class */ (function (_super) {
        __extends(SendMoiChoi, _super);
        function SendMoiChoi(nicknames) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.MOI_CHOI);
            _this.packHeader();
            _this.putShort(nicknames.length);
            for (var b = 0; b < nicknames.length; b++)
                _this.putString(nicknames[b]);
            _this.updateSize();
            return _this;
        }
        return SendMoiChoi;
    }(Network_OutPacket_1.default));
    cmd.SendMoiChoi = SendMoiChoi;
    var SendAcceptMoiChoi = /** @class */ (function (_super) {
        __extends(SendAcceptMoiChoi, _super);
        function SendAcceptMoiChoi(name) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.ACCEPT_MOI_CHOI);
            _this.packHeader();
            _this.putString(name);
            _this.updateSize();
            return _this;
        }
        return SendAcceptMoiChoi;
    }(Network_OutPacket_1.default));
    cmd.SendAcceptMoiChoi = SendAcceptMoiChoi;
    var SendChatRoom = /** @class */ (function (_super) {
        __extends(SendChatRoom, _super);
        function SendChatRoom(a, b) {
            var _this = _super.call(this) || this;
            _this.initData(100);
            _this.setControllerId(1);
            _this.setCmdId(Code.CHAT_MS);
            _this.packHeader();
            _this.putByte(a ? 1 : 0);
            _this.putString(encodeURI(b));
            _this.updateSize();
            return _this;
        }
        return SendChatRoom;
    }(Network_OutPacket_1.default));
    cmd.SendChatRoom = SendChatRoom;
    var ReceivedChatRoom = /** @class */ (function (_super) {
        __extends(ReceivedChatRoom, _super);
        function ReceivedChatRoom(data) {
            var _this = _super.call(this, data) || this;
            _this.chair = _this.getByte();
            _this.isIcon = _this.getBool();
            _this.content = decodeURI(_this.getString());
            _this.nickname = _this.getString();
            return _this;
        }
        return ReceivedChatRoom;
    }(Network_InPacket_1.default));
    cmd.ReceivedChatRoom = ReceivedChatRoom;
})(cmd = exports.cmd || (exports.cmd = {}));
exports.default = cmd;

cc._RF.pop();