
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.Cmd.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5DbWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCw2RkFBZ0Y7QUFDaEYsK0ZBQWtGO0FBR2xGLElBQWlCLEdBQUcsQ0FpbEJuQjtBQWpsQkQsV0FBaUIsR0FBRztJQUNoQjtRQUFBO1FBeUNBLENBQUM7UUF4Q1UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUM1QixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUN2Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsMEJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLDJCQUFzQixHQUFHLElBQUksQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixhQUFRLEdBQUcsSUFBSSxDQUFD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QyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUMzQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTs7UUFDcEMsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FaQSxBQVlDLENBWnFDLDBCQUFRLEdBWTdDO0lBWlksb0JBQWdCLG1CQVk1QixDQUFBO0FBQ0wsQ0FBQyxFQWpsQmdCLEdBQUcsR0FBSCxXQUFHLEtBQUgsV0FBRyxRQWlsQm5CO0FBQ0Qsa0JBQWUsR0FBRyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBPdXRQYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLk91dFBhY2tldFwiO1xuXG5cbmV4cG9ydCBuYW1lc3BhY2UgY21kIHtcbiAgICBleHBvcnQgY2xhc3MgQ29kZSB7XG4gICAgICAgIHN0YXRpYyBMT0dJTiA9IDE7XG4gICAgICAgIHN0YXRpYyBHRVRMSVNUUk9PTSA9IDMwMTQ7XG4gICAgICAgIHN0YXRpYyBKT0lOX0dBTUVfUk9PTV9CWV9JRCA9IDMwMTU7XG4gICAgICAgIHN0YXRpYyBDTURKT0lOUk9PTUZBSUwgPSAzMDA0O1xuICAgICAgICBzdGF0aWMgQ01EUkVDT05ORUNUR0FNRVJPT00gPSAzMDAyO1xuICAgICAgICBzdGF0aWMgUkVRVUVTVF9JTkZPX01PSV9DSE9JID0gMzAxMDtcbiAgICAgICAgc3RhdGljIE1PSV9DSE9JID0gMzAxMTtcbiAgICAgICAgc3RhdGljIEFDQ0VQVF9NT0lfQ0hPSSA9IDMwMTI7XG5cbiAgICAgICAgc3RhdGljIEpPSU5fUk9PTV9GQUlMID0gMzAwNDtcbiAgICAgICAgc3RhdGljIEpPSU5fUk9PTV9TVUNDRVNTID0gMzEwMTtcbiAgICAgICAgc3RhdGljIFVTRVJfSk9JTl9ST09NX1NVQ0NFU1MgPSAzMTAyO1xuICAgICAgICBzdGF0aWMgVVNFUl9PVVRfUk9PTSA9IDMxMDQ7XG4gICAgICAgIHN0YXRpYyBPUkRFUl9CQU5LRVIgPSAzMTEzO1xuICAgICAgICBzdGF0aWMgQUNUSU9OX0lOX0dBTUUgPSAzMTA1O1xuICAgICAgICBzdGF0aWMgUFVUX01PTkVZID0gMzEwNjtcbiAgICAgICAgc3RhdGljIFBVVF9NT05FWV9YMiA9IDMxMTU7XG4gICAgICAgIHN0YXRpYyBQVVRfQUxMX0lOID0gMzExNjtcbiAgICAgICAgc3RhdGljIFFVSVRfUk9PTSA9IDMxMDM7XG4gICAgICAgIHN0YXRpYyBEQU5HX0tZX1RIT0FUX1BIT05HID0gMzEwMDtcbiAgICAgICAgc3RhdGljIFNUQVJUX0dBTUUgPSAzMTE3O1xuICAgICAgICBzdGF0aWMgQkFOS0VSX1NFTExfR0FURSA9IDMxMTA7XG4gICAgICAgIHN0YXRpYyBCVVlfR0FURSA9IDMxMTE7XG4gICAgICAgIHN0YXRpYyBSRUZVTl9NT05FWSA9IDMxMTg7XG4gICAgICAgIHN0YXRpYyBGSU5JU0hfR0FNRSA9IDMxMTI7XG4gICAgICAgIHN0YXRpYyBHRVRfVElNRSA9IDMxMTk7XG4gICAgICAgIHN0YXRpYyBIVVlfTEFNX0NBSSA9IDMxMzA7XG4gICAgICAgIHN0YXRpYyBTVE9QX0dBTUUgPSAzMTIyO1xuICAgICAgICBzdGF0aWMgU09JX0NBVSA9IDMxMjE7XG4gICAgICAgIHN0YXRpYyBNRVNTQUdFX0VSUk9SX0JBTktFUiA9IDMxMjM7XG4gICAgICAgIHN0YXRpYyBTRVRfQ0hFQVQgPSAzMTI0O1xuICAgICAgICBzdGF0aWMgQ0hBVF9NUyA9IDMwMDg7XG4gICAgICAgIHN0YXRpYyBJTkZPX0dBVEVfU0VMTCA9IDMxMjY7XG4gICAgICAgIHN0YXRpYyBJTkZPX01PTkVZX0FGVEVSX0JBTktFUl9TRUxMID0gMzEyODtcbiAgICAgICAgc3RhdGljIEFDVElPTl9CQU5LRVIgPSAzMTI3O1xuICAgICAgICBzdGF0aWMgS0lDS19PVVRfWE9DRElBID0gMzEzMjtcbiAgICAgICAgc3RhdGljIERFU1RST1lfUk9PTSA9IDMxMzM7XG4gICAgICAgIHN0YXRpYyBMT0NLX0dBVEUgPSAzMTMxO1xuICAgICAgICBzdGF0aWMgR0VUX01PTkVZX0xBSSA9IDMxMzQ7XG4gICAgICAgIHN0YXRpYyBVUERBVEVfQ1VSUkVOVF9NT05FWSA9IDMxMzU7XG4gICAgfVxuICAgIGV4cG9ydCBjbGFzcyBTZW5kR2V0TGlzdFJvb20gZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5HRVRMSVNUUk9PTSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0SW50KENvbmZpZ3MuQXBwLk1PTkVZX1RZUEUpOy8vbW9uZXkgdHlwZVxuICAgICAgICAgICAgdGhpcy5wdXRJbnQoMzApOy8vbWF4cGxheWVyXG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoLTEpOy8va2hvbmcgeGFjIGRpbmhcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8va2hvbmcgeGFjIGRpbmhcbiAgICAgICAgICAgIHRoaXMucHV0SW50KDApOy8vQ0FSRF9GUk9NXG4gICAgICAgICAgICB0aGlzLnB1dEludCg1MCk7Ly9DQVJEX1RPXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUdldExpc3RSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBsaXN0OiBhbnlbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgbGV0IGxpc3RTaXplID0gdGhpcy5nZXRTaG9ydCgpO1xuICAgICAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RTaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogYW55ID0ge307XG4gICAgICAgICAgICAgICAgaXRlbVtcImlkXCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1widXNlckNvdW50XCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcImxpbWl0UGxheWVyXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcIm1heFVzZXJQZXJSb29tXCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibW9uZXlUeXBlXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcIm1vbmV5QmV0XCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wicmVxdWlyZWRNb25leVwiXSA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICAgICAgaXRlbVtcInJ1bGVcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wibmFtZVJvb21cIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGl0ZW1bXCJrZXlcIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICBpdGVtW1wicXV5YmFuXCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LnB1c2goaXRlbSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kSm9pblJvb21CeUlkIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJTZW5kSm9pblJvb21CeUlkOlwiK2lkKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkpPSU5fR0FNRV9ST09NX0JZX0lEKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRJbnQoaWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcoXCJcIik7Ly9tYXQga2hhdVxuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUpvaW5Sb29tU3VjY2VzcyBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgbW9uZXlCZXQgPSAwO1xuICAgICAgICByb29tSWQgPSAwO1xuICAgICAgICBnYW1lSWQgPSAwO1xuICAgICAgICBtb25leVR5cGUgPSAwO1xuICAgICAgICBnYW1lU3RhdGUgPSAwO1xuICAgICAgICBjb3VudFRpbWUgPSAwO1xuICAgICAgICBwbGF5ZXJDb3VudCA9IDA7XG4gICAgICAgIHBvdElEID0gW107XG4gICAgICAgIHBsYXllckluZm9zID0gW107XG4gICAgICAgIG1vbmV5ID0gMDtcbiAgICAgICAgYmFua2VyID0gZmFsc2U7XG4gICAgICAgIGlzU3ViQmFua2VyID0gZmFsc2U7XG4gICAgICAgIHB1cmNoYXNlU3RhdHVzID0gMDtcbiAgICAgICAgcG90UHVyY2hhc2UgPSAwO1xuICAgICAgICBtb25leVB1cmNoYXNlRXZlbiA9IDA7XG4gICAgICAgIG1vbmV5UHVyY2hhc2VPZGQgPSAwO1xuICAgICAgICBtb25leVJlbWFpbiA9IDA7XG4gICAgICAgIHN1Ykxpc3RDb3VudCA9IDA7XG4gICAgICAgIGxpc3RfYnV5X2dhdGUgPSBbXTtcbiAgICAgICAgYmFua2VyUmVxRGVzdHJveSA9IGZhbHNlO1xuICAgICAgICBib3NzUmVxRGVzdHJveSA9IGZhbHNlO1xuICAgICAgICBydWxlID0gMDtcbiAgICAgICAgbW9uZXlSZWdpc0JhbmtlciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5QmV0ID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMucm9vbUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlUeXBlID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5jb3VudFRpbWUgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDb3VudCA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3RJRCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IDYgPiBhOyBhKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYjogYW55ID0ge307XG4gICAgICAgICAgICAgICAgYltcImlkXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgYltcInJhdGlvXCJdID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgICAgICBiW1wibWF4TW9uZXlCZXRcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1widG90YWxNb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leUJldFwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIGJbXCJpc0xvY2tcIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvdElELnB1c2goYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsYXllckluZm9zID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMucGxheWVyQ291bnQ7IGErKykge1xuICAgICAgICAgICAgICAgIGxldCBiOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBiW1wibmlja25hbWVcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJhdmF0YXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIGJbXCJiYW5rZXJcIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICBiW1wiaXNTdWJCYW5rZXJcIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICBiW1wicmVxS2lja3Jvb21cIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckluZm9zLnB1c2goYik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYmFua2VyID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmlzU3ViQmFua2VyID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnB1cmNoYXNlU3RhdHVzID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMucG90UHVyY2hhc2UgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5tb25leVB1cmNoYXNlRXZlbiA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgdGhpcy5tb25leVB1cmNoYXNlT2RkID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5UmVtYWluID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnN1Ykxpc3RDb3VudCA9IHRoaXMuZ2V0SW50KCk7XG4gICAgICAgICAgICB0aGlzLmxpc3RfYnV5X2dhdGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5zdWJMaXN0Q291bnQ7IGErKykge1xuICAgICAgICAgICAgICAgIGxldCBiOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBiW1wibmlja25hbWVcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdF9idXlfZ2F0ZS5wdXNoKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iYW5rZXJSZXFEZXN0cm95ID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmJvc3NSZXFEZXN0cm95ID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bGUgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5tb25leVJlZ2lzQmFua2VyID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUpvaW5Sb29tRmFpbCBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZExlYXZlUm9vbSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlNlbmRMZWF2ZVJvb20gxJBBTkcgS1kgVEhPQVQgUEhPTkdcIik7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuREFOR19LWV9USE9BVF9QSE9ORyk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVMZWF2ZWRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICByZWFzb24gPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZWFzb24gPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVMZWF2ZVJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGJSZWdpcyA9IGZhbHNlO1xuICAgICAgICBuaWNrbmFtZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmJSZWdpcyA9IHRoaXMuZ2V0Qm9vbCgpO1xuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlVXNlckpvaW5Sb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBuaWNrbmFtZSA9IFwiXCI7XG4gICAgICAgIGF2YXRhciA9IFwiXCI7XG4gICAgICAgIG1vbmV5ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5hdmF0YXIgPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5tb25leSA9IHRoaXMuZ2V0TG9uZygpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVVzZXJPdXRSb29tIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBuaWNrbmFtZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlQWN0aW9uSW5HYW1lIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBhY3Rpb24gPSAwO1xuICAgICAgICB0aW1lID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmdldEJ5dGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVTdGFydEdhbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGJhbmtlciA9IFwiXCI7XG4gICAgICAgIGdhbWVJZCA9IDA7XG4gICAgICAgIG1vbmV5QmFua2VyID0gMDtcbiAgICAgICAgbGlzdF9sb2NrX2dhdGUgPSBbXTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuYmFua2VyID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuZ2FtZUlkID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlCYW5rZXIgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubGlzdF9sb2NrX2dhdGUgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyA2ID4gYTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGI6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgIGJbXCJpZFwiXSA9IHRoaXMuZ2V0Qnl0ZSgpO1xuICAgICAgICAgICAgICAgIGJbXCJpc0xvY2tcIl0gPSB0aGlzLmdldEJvb2woKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RfbG9ja19nYXRlLnB1c2goYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZFB1dE1vbmV5IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoZG9vcklkOiBudW1iZXIsIGNvaW46IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlBVVF9NT05FWSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0Qnl0ZShkb29ySWQpO1xuICAgICAgICAgICAgdGhpcy5wdXRMb25nKGNvaW4pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZVB1dE1vbmV5IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIG5pY2tuYW1lID0gXCJcIjtcbiAgICAgICAgYmV0TW9uZXkgPSAwO1xuICAgICAgICBwb3RJZCA9IDA7XG4gICAgICAgIHBvdE1vbmV5ID0gMDtcbiAgICAgICAgY3VycmVudE1vbmV5ID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLmdldEVycm9yKCk7XG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMuYmV0TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMucG90SWQgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMucG90TW9uZXkgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUJhbmtlclNlbGxHYXRlIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBhY3Rpb24gPSAwOy8vMTogbmjDoCBjw6FpIGPDom4gdOG6pXQsIDI6IGJhbiBjaOG6tW4sIDM6IGLDoW4gbOG6u1xuICAgICAgICBtb25leVNlbGwgPSAwO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlTZWxsID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZEJ1eUdhdGUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihjb2luOiBudW1iZXIpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5CVVlfR0FURSk7XG4gICAgICAgICAgICB0aGlzLnBhY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIHRoaXMucHV0TG9uZyhjb2luKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVCdXlHYXRlIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIG5pY2tuYW1lID0gXCJcIjtcbiAgICAgICAgbW9uZXlCdXkgPSAwO1xuICAgICAgICBybU1vbmV5U2VsbCA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5QnV5ID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLnJtTW9uZXlTZWxsID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlUmVmdW5Nb25leSBleHRlbmRzIEluUGFja2V0IHtcbiAgICAgICAgcmZDb3VudCA9IDA7XG4gICAgICAgIHBvdElEID0gW107XG4gICAgICAgIHBsYXllckluZm9zUmVmdW4gPSBbXVxuXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5yZkNvdW50ID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyA2ID4gYTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSB7fTtcbiAgICAgICAgICAgICAgICBiW1wiaWRcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlSZWZ1bmRcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1widG90YWxNb25leVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG90SUQucHVzaChiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheWVySW5mb3NSZWZ1biA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLnJmQ291bnQ7IGErKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0ge307XG4gICAgICAgICAgICAgICAgYltcIm5pY2tuYW1lXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlSZWZ1bmRcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wiY3VycmVudE1vbmV5XCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgYltcInBvdHNcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leVJmUG90c1wiXSA9IHRoaXMuZ2V0U3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJJbmZvc1JlZnVuLnB1c2goYik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZUZpbmlzaEdhbWUgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGluZm9BbGxQb3QgPSBbXTtcbiAgICAgICAgZGljZUlEcyA9IFtdO1xuICAgICAgICBtb25leUJhbmtlckJlZm9yZSA9IDA7XG4gICAgICAgIG1vbmV5QmFua2VyQWZ0ZXIgPSAwO1xuICAgICAgICBtb25leUJhbmtlckV4Y2hhbmdlID0gMDtcbiAgICAgICAgcGxheWVySW5mb1dpbiA9IFtdO1xuICAgICAgICBzdWJMaXN0Q291bnQgPSAwO1xuICAgICAgICBpbmZvU3ViQmFua2VyID0gW107XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgNiA+IGE7IGErKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0ge307XG4gICAgICAgICAgICAgICAgYltcInBvdElkXCJdID0gdGhpcy5nZXRCeXRlKCk7XG4gICAgICAgICAgICAgICAgYltcInRvdGFsTW9uZXlcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wid2luXCJdID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvQWxsUG90LnB1c2goYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyA0ID4gYTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaWNlSURzLnB1c2godGhpcy5nZXRJbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1vbmV5QmFua2VyQmVmb3JlID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5QmFua2VyQWZ0ZXIgPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlCYW5rZXJFeGNoYW5nZSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgbGV0IHBsYXllcldpbkNvdW50ID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgcGxheWVyV2luQ291bnQ7IGErKykge1xuICAgICAgICAgICAgICAgIGxldCBiID0ge307XG4gICAgICAgICAgICAgICAgYltcIm5pY2tuYW1lXCJdID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlXaW5cIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wiY3VycmVudE1vbmV5XCJdID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICAgICAgYltcInBvdHNXaW5cIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJtb25leVdpblBvdHNcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVySW5mb1dpbi5wdXNoKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zdWJMaXN0Q291bnQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLnN1Ykxpc3RDb3VudDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGIgPSB7fTtcbiAgICAgICAgICAgICAgICBiW1wibmlja25hbWVTdWJiYW5rZXJcIl0gPSB0aGlzLmdldFN0cmluZygpO1xuICAgICAgICAgICAgICAgIGJbXCJwb3RTdWJCYW5rZXJcIl0gPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlTdWJCYW5rZXJcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICBiW1wibW9uZXlTdWJCYW5rZXJOb0ZlZVwiXSA9IHRoaXMuZ2V0TG9uZygpO1xuICAgICAgICAgICAgICAgIGJbXCJjdXJyZW50TW9uZXlTdWJCYW5rZXJcIl0gPSB0aGlzLmdldExvbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9TdWJCYW5rZXIucHVzaChiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kUmVjb25uZWN0IGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlNlbmRKb2luUm9vbUJ5SWQgc2VuZFJlY29ubmVjdFwiKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkNNRFJFQ09OTkVDVEdBTUVST09NKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ21kU2VuZEdldENhdSBleHRlbmRzIE91dFBhY2tldCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLlNPSV9DQVUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlR2V0Q2F1IGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICB0b3RhbEV2ZW4gPSAwO1xuICAgICAgICB0b3RhbE9kZCA9IDA7XG4gICAgICAgIHJzQ291bnQgPSAwO1xuICAgICAgICBhcnJheUNhdTogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMudG90YWxFdmVuID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIHRoaXMudG90YWxPZGQgPSB0aGlzLmdldEludCgpO1xuICAgICAgICAgICAgdGhpcy5yc0NvdW50ID0gdGhpcy5nZXRJbnQoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5yc0NvdW50OyBhKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5Q2F1LnB1c2godGhpcy5nZXRCeXRlKCkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZE9yZGVyQmFua2VyIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuT1JERVJfQkFOS0VSKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgUmVjZWl2ZU9yZGVyQmFua2VyIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBlcnJvciA9IDA7XG4gICAgICAgIG1vbmV5UmVxdWlyZSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5nZXRFcnJvcigpO1xuICAgICAgICAgICAgdGhpcy5tb25leVJlcXVpcmUgPSB0aGlzLmdldExvbmcoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVJbmZvR2F0ZVNlbGwgZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIG1vbmV5RXZlbiA9IDA7XG4gICAgICAgIG1vbmV5T2RkID0gMDtcblxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubW9uZXlFdmVuID0gdGhpcy5nZXRMb25nKCk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5T2RkID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQ2FuY2VsQmFua2VyIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuSFVZX0xBTV9DQUkpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlQ2FuY2VsQmFua2VyIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBiRGVzdHJveSA9IGZhbHNlO1xuICAgICAgICBuaWNrbmFtZSA9IFwiXCI7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmJEZXN0cm95ID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5nZXRTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kQmFua2VyU2VsbEdhdGUgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3Rvcihkb29yOiBudW1iZXIsIGNvaW46IG51bWJlcikge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdERhdGEoMTAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udHJvbGxlcklkKDEpO1xuICAgICAgICAgICAgdGhpcy5zZXRDbWRJZChDb2RlLkJBTktFUl9TRUxMX0dBVEUpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dEJ5dGUoZG9vcik7Ly8xOiBuaMOgIGPDoWkgY8OibiB04bqldCwgMjogYmFuIGNo4bq1biwgMzogYsOhbiBs4bq7XG4gICAgICAgICAgICB0aGlzLnB1dExvbmcoY29pbik7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBSZWNlaXZlSW5mb01vbmV5QWZ0ZXJCYW5rZXJTZWxsIGV4dGVuZHMgSW5QYWNrZXQge1xuICAgICAgICBtb25leSA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZGF0YTogVWludDhBcnJheSkge1xuICAgICAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgICAgICB0aGlzLm1vbmV5ID0gdGhpcy5nZXRMb25nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBTZW5kUmVxdWVzdEluZm9Nb2lDaG9pIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuUkVRVUVTVF9JTkZPX01PSV9DSE9JKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgU2VuZE1vaUNob2kgZXh0ZW5kcyBPdXRQYWNrZXQge1xuICAgICAgICBjb25zdHJ1Y3RvcihuaWNrbmFtZXM6IHN0cmluZ1tdKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuTU9JX0NIT0kpO1xuICAgICAgICAgICAgdGhpcy5wYWNrSGVhZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnB1dFNob3J0KG5pY2tuYW1lcy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yICh2YXIgYiA9IDA7IGIgPCBuaWNrbmFtZXMubGVuZ3RoOyBiKyspXG4gICAgICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobmlja25hbWVzW2JdKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIFNlbmRBY2NlcHRNb2lDaG9pIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5pbml0RGF0YSgxMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRDb250cm9sbGVySWQoMSk7XG4gICAgICAgICAgICB0aGlzLnNldENtZElkKENvZGUuQUNDRVBUX01PSV9DSE9JKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRTdHJpbmcobmFtZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBleHBvcnQgY2xhc3MgU2VuZENoYXRSb29tIGV4dGVuZHMgT3V0UGFja2V0IHtcbiAgICAgICAgY29uc3RydWN0b3IoYTogbnVtYmVyLCBiOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLmluaXREYXRhKDEwMCk7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRyb2xsZXJJZCgxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q21kSWQoQ29kZS5DSEFUX01TKTtcbiAgICAgICAgICAgIHRoaXMucGFja0hlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5wdXRCeXRlKGEgPyAxIDogMCk7XG4gICAgICAgICAgICB0aGlzLnB1dFN0cmluZyhlbmNvZGVVUkkoYikpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXhwb3J0IGNsYXNzIFJlY2VpdmVkQ2hhdFJvb20gZXh0ZW5kcyBJblBhY2tldCB7XG4gICAgICAgIGNoYWlyOiBudW1iZXI7XG4gICAgICAgIGlzSWNvbjogYm9vbGVhbjtcbiAgICAgICAgY29udGVudDogc3RyaW5nO1xuICAgICAgICBuaWNrbmFtZTogc3RyaW5nO1xuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuY2hhaXIgPSB0aGlzLmdldEJ5dGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNJY29uID0gdGhpcy5nZXRCb29sKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSBkZWNvZGVVUkkodGhpcy5nZXRTdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5nZXRTdHJpbmcoKVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY21kOyJdfQ==