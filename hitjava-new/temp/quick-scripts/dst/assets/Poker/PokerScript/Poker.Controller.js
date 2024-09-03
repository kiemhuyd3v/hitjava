
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Poker/PokerScript/Poker.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1a0egueZlH3apN/Hny5usz', 'Poker.Controller');
// Poker/PokerScript/Poker.Controller.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Configs_1 = require("../../Loading/src/Configs");
var Poker_Cmd_1 = require("./Poker.Cmd");
var Poker_NetworkClient_1 = require("./Poker.NetworkClient");
var Poker_CardUtil_1 = require("./Poker.CardUtil");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
var configPlayer = [ // 9 Players
// {
//     seatId: 0,
//     playerId: -1,
//     playerPos: -1,
//     isViewer: true
// }
];
// defaultPlayerPos[0 -> 8][0] = player_pos of me
var defaultPlayerPos = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8, 0],
    [2, 3, 4, 5, 6, 7, 8, 0, 1],
    [3, 4, 5, 6, 7, 8, 0, 1, 2],
    [4, 5, 6, 7, 8, 0, 1, 2, 3],
    [5, 6, 7, 8, 0, 1, 2, 3, 4],
    [6, 7, 8, 0, 1, 2, 3, 4, 5],
    [7, 8, 0, 1, 2, 3, 4, 5, 6],
    [8, 0, 1, 2, 3, 4, 5, 6, 7],
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PokerController = /** @class */ (function (_super) {
    __extends(PokerController, _super);
    function PokerController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // UI Rooms
        _this.UI_ChooseRoom = null;
        _this.labelNickName = null;
        _this.labelCoin = null;
        _this.contentListRooms = null;
        _this.prefabItemRoom = null;
        _this.scrollListRoom = null;
        _this.edtFindRoom = null;
        _this.btnHideRoomFull = null;
        _this.isInitedUIRoom = false;
        // UI Playing
        _this.UI_Playing = null;
        _this.meCards = null;
        _this.groupPlayers = null;
        _this.spriteCards = [];
        _this.spriteCardBack = null;
        _this.matchPot = null;
        _this.labelMatchPot = null;
        _this.cardsDeal = null;
        _this.cardsCenter = null;
        _this.btnBet = null;
        _this.btnOpenCard = null;
        _this.btnLeaveRoom = null;
        _this.hubChips = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.betChooseValue = null;
        _this.betChooseValueTarget = null;
        _this.FxDealer = null;
        _this.btnActions = null;
        _this.popupBuyIn = null;
        _this.labelBuyInMin = null;
        _this.labelBuyInMax = null;
        _this.edtBuyIn = null;
        _this.toggleAutoBuyIn = null;
        _this.FxMeCardName = null;
        _this.spriteCardNames = [];
        // Notify
        _this.notifyTimeStart = null;
        _this.notifyTimeEnd = null;
        _this.notifyTimeBet = null;
        // UI Chat
        _this.UI_Chat = null;
        _this.edtChatInput = null;
        // Popup
        _this.popupNodity = null;
        _this.labelNotifyContent = null;
        _this.popupGuide = null;
        _this.seatOwner = null;
        _this.currentRoomBet = null;
        _this.gameState = null;
        _this.minutes = null;
        _this.seconds = null;
        _this.timeAutoStart = null;
        _this.timeEnd = null;
        _this.timeBet = null;
        _this.timeThinking = null;
        _this.intervalWaitting = null;
        _this.intervalEnd = null;
        _this.intervalBetting = null;
        _this.intervalThinking = null;
        _this.currentCard = null;
        _this.currentCenterCard = null;
        _this.numCardOpened = 0;
        // bet
        _this.arrBetValue = [];
        _this.arrBetPos = [-170, -85, 0, 85, 170];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutChiaBaiDone = null;
        _this.minCashIn = null;
        _this.maxCashIn = null;
        _this.currentMaxBet = 0;
        _this.currentRaiseMin = 0;
        _this.currentRaiseValue = 0;
        _this.currentRaiseStep = 0;
        _this.currentMeBet = 0;
        _this.lastMeBet = 0;
        _this.currentPrivateCardList = [];
        _this.roomMinBuyIn = 0;
        _this.roomMaxBuyIn = 0;
        _this.isFolded = false;
        return _this;
    }
    PokerController_1 = PokerController;
    // LIFE-CYCLE CALLBACKS:
    PokerController.prototype.onLoad = function () {
        PokerController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
    };
    PokerController.prototype.start = function () {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        Poker_NetworkClient_1.default.getInstance().addOnOpen(function () {
            App_1.default.instance.showErrLoading("Đang đang đăng nhập...");
            Poker_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        Poker_NetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.loadScene("Lobby");
        }, this);
        Poker_NetworkClient_1.default.getInstance().connect();
    };
    // Request UI Room
    PokerController.prototype.joinRoom = function (info) {
        //  cc.log("Poker joinRoom roomInfo : ", info);
        App_1.default.instance.showLoading(true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendJoinRoomById(info["id"]));
    };
    PokerController.prototype.refeshListRoom = function () {
        this.contentListRooms.removeAllChildren(true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendGetListRoom());
    };
    PokerController.prototype.findRoomId = function () {
        //  cc.log("Poker findRoomId id : ", this.edtFindRoom.string);
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
            var idFind = parseInt(text);
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("Poker.ItemRoom");
                if (roomItem.roomInfo["id"] != idFind) {
                    this.contentListRooms.children[index].active = false;
                }
            }
        }
        else {
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                this.contentListRooms.children[index].active = true;
            }
        }
    };
    PokerController.prototype.hideRoomFull = function () {
        if (this.btnHideRoomFull.isChecked) {
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("Poker.ItemRoom");
                if (roomItem.roomInfo["userCount"] == roomItem.roomInfo["maxUserPerRoom"]) {
                    this.contentListRooms.children[index].active = false;
                }
            }
        }
        else {
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                this.contentListRooms.children[index].active = true;
            }
        }
    };
    PokerController.prototype.showUIRooms = function () {
        var _this = this;
        this.UI_ChooseRoom.active = true;
        if (this.isInitedUIRoom) {
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        }
        else {
            this.isInitedUIRoom = true;
            this.labelNickName.string = Configs_1.default.Login.Nickname;
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
                _this.labelCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
            }, this);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            this.setupListener();
        }
    };
    PokerController.prototype.closeUIRoom = function () {
        this.UI_ChooseRoom.active = false;
    };
    PokerController.prototype.createRoom = function () {
        //  cc.log("Poker createRoom");
    };
    PokerController.prototype.playingNow = function () {
        //  cc.log("Poker playingNow");
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("Poker.ItemRoom");
            if (roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin) {
                arrRoomOkMoney.push(index);
            }
        }
        //  cc.log("Poker playingNow arrRoomOkMoney : ", arrRoomOkMoney);
        if (arrRoomOkMoney.length > 0) {
            var roomCrowed = arrRoomOkMoney[0];
            //  cc.log("Poker playingNow roomCrowed start : ", roomCrowed);
            for (var index = 0; index < arrRoomOkMoney.length; index++) {
                var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("Poker.ItemRoom");
                var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("Poker.ItemRoom");
                //  cc.log("Poker playingNow ------------------------------------------");
                //  cc.log("Poker playingNow roomItem : ", roomItem.roomInfo["userCount"]);
                //  cc.log("Poker playingNow roomItemCrowed : ", roomItemCrowed.roomInfo["userCount"]);
                if (roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"]) {
                    roomCrowed = arrRoomOkMoney[index];
                    //  cc.log("Poker playingNow roomCrowed update : ", roomCrowed);
                }
            }
            //  cc.log("Poker playingNow roomCrowed end : ", roomCrowed);
            var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("Poker.ItemRoom");
            //  cc.log("Poker playingNow roomCrowed end roomInfo : ", roomChoosed.roomInfo);
            this.joinRoom(roomChoosed.roomInfo);
        }
        else {
            App_1.default.instance.alertDialog.showMsg("Không đủ tiền tham gia\nbất kỳ phòng nào !");
        }
    };
    // Chat
    PokerController.prototype.showUIChat = function () {
        this.UI_Chat.active = true;
        this.UI_Chat.x = 1000;
        this.UI_Chat.stopAllActions();
        this.UI_Chat.runAction(cc.moveTo(0.25, 546, 0));
    };
    PokerController.prototype.closeUIChat = function () {
        this.UI_Chat.runAction(cc.moveTo(0.25, 1000, 0));
    };
    PokerController.prototype.chatEmotion = function (event, id) {
        //  cc.log("Poker chatEmotion id : ", id);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    PokerController.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    PokerController.prototype.showPopupGuide = function () {
        this.popupGuide.active = true;
    };
    PokerController.prototype.closePopupGuide = function () {
        this.popupGuide.active = false;
    };
    PokerController.prototype.backToLobby = function () {
        Poker_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    // Playing
    PokerController.prototype.showUIPlaying = function () {
        this.UI_Playing.active = true;
        this.FxDealer.setAnimation(0, "cho", true);
    };
    PokerController.prototype.closeUIPlaying = function () {
        this.actionLeaveRoom();
    };
    PokerController.prototype.setupMatch = function (data) {
        this.showUIPlaying();
        this.closeUIChat();
        //  cc.log("Poker setupMatch data : ", data);
        // {
        //     "myChair": 0,
        //     "moneyBet": 128000,
        //     "roomOwner": 0,
        //     "roomId": 23808,
        //     "gameId": 100609,
        //     "moneyType": 0,
        //     "rule": 0,
        //     "playerSize": 0,
        //     "playerStatus": [],
        //     "playerInfos": [],
        //     "handCardSizeSize": 0,
        //     "handCardSizeList": [],
        //     "minBuyInTiLe": 0,
        //     "maxBuyInTiLe": 0
        //   }
        var myChair = data["myChair"];
        var moneyBet = data["moneyBet"];
        var roomOwner = data["roomOwner"];
        var roomId = data["roomId"];
        var gameId = data["gameId"];
        var moneyType = data["moneyType"];
        var rule = data["rule"];
        var playerSize = data["playerSize"];
        var playerStatus = data["playerStatus"];
        var playerInfos = data["playerInfos"];
        var handCardSizeSize = data["handCardSizeSize"];
        var handCardSizeList = data["handCardSizeList"];
        var minBuyInTiLe = data["minBuyInTiLe"];
        var maxBuyInTiLe = data["maxBuyInTiLe"];
        //  cc.log("Poker setupMatch myChair  : ", myChair);
        //  cc.log("Poker setupMatch moneyBet  : ", moneyBet);
        //  cc.log("Poker setupMatch roomOwner  : ", roomOwner);
        //  cc.log("Poker setupMatch roomId  : ", roomId);
        //  cc.log("Poker setupMatch gameId  : ", gameId);
        //  cc.log("Poker setupMatch moneyType  : ", moneyType);
        //  cc.log("Poker setupMatch rule  : ", rule);
        //  cc.log("Poker setupMatch playerSize  : ", playerSize);
        //  cc.log("Poker setupMatch playerStatus  : ", playerStatus);
        //  cc.log("Poker setupMatch playerInfos  : ", playerInfos);
        //  cc.log("Poker setupMatch handCardSizeSize  : ", handCardSizeSize);
        //  cc.log("Poker setupMatch handCardSizeList  : ", handCardSizeList);
        //  cc.log("Poker setupMatch minBuyInTiLe  : ", minBuyInTiLe);
        //  cc.log("Poker setupMatch maxBuyInTiLe  : ", maxBuyInTiLe);
        // Kiem tra, chon 1 thoi
        this.gameState = Poker_Cmd_1.default.Code.STATE_JOIN_ROOM;
        this.roomMinBuyIn = minBuyInTiLe;
        this.roomMaxBuyIn = maxBuyInTiLe;
        this.labelRoomId.string = "POKER - PHÒNG: " + roomId;
        this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "/" + Utils_1.default.formatNumber(2 * moneyBet) + "$";
        this.currentRoomBet = moneyBet;
        this.resetCenterCards();
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        //  cc.log("Poker setupMatch configPlayer Me : ", configPlayer[0]);
        //  cc.log("Poker setupMatch configPlayer  : ", configPlayer);
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        var arrPlayerStatus = [];
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
            if (playerInfos[index].nickName !== "") {
                numPlayers += 1;
                arrPlayerPosExist.push(index);
                arrPlayerInfo.push(playerInfos[index]);
                arrPlayerStatus.push(playerStatus[index]);
            }
        }
        //  cc.log("Poker setupMatch numPlayers : ", numPlayers);
        //  cc.log("Poker setupMatch arrPlayerStatus : ", arrPlayerStatus);
        //  cc.log("Poker setupMatch arrPlayerInfo : ", arrPlayerInfo);
        //  cc.log("Poker setupMatch arrPlayerPosExist : ", arrPlayerPosExist);
        this.resetHubChips();
        this.FxMeCardName.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        // setup configPlayer
        for (var a = 0; a < configPlayer.length; a++) {
            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        }
        // set State of Seat : Yes | No exist Player
        for (var index = 0; index < configPlayer.length; index++) {
            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
            var seatId = configPlayer[index].seatId;
            this.getPlayerHouse(seatId).resetPlayerInfo();
            if (findPos > -1) {
                // Exist player -> Set Player Info
                if (seatId == 0 && arrPlayerStatus[findPos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_SITTING) {
                    this.showPopupBuyIn(minBuyInTiLe, maxBuyInTiLe, moneyBet);
                }
                if (arrPlayerStatus[findPos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                    configPlayer[index].isViewer = false;
                    this.getPlayerHouse(seatId).setIsViewer(false);
                }
                else {
                    configPlayer[index].isViewer = true;
                    this.getPlayerHouse(seatId).setIsViewer(true);
                    if (configPlayer[seatId].playerId != -1) {
                        this.getPlayerHouse(seatId).playFxViewer();
                    }
                }
                this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
            }
            else {
                // Not Exist player  -> Active Btn Add player
                this.getPlayerHouse(seatId).showBtnInvite(true);
                configPlayer[index].isViewer = true;
            }
        }
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).setOwner(false);
        }
        var seatOwner = this.findPlayerSeatByPos(roomOwner);
        if (seatOwner !== -1) {
            this.getPlayerHouse(seatOwner).setOwner(true);
            this.seatOwner = seatOwner;
        }
        //  cc.log("Poker setupMatch configPlayer : ", configPlayer);
    };
    // Time Start
    PokerController.prototype.startThinkingCountDown = function (seatId, turnTime) {
        var _this = this;
        this.timeThinking = turnTime;
        this.unschedule(this.intervalThinking);
        this.schedule(this.intervalThinking = function () {
            _this.timeThinking--;
            var rate = (_this.timeThinking / turnTime).toFixed(2);
            _this.getPlayerHouse(seatId).processThinking(rate);
            if (_this.timeThinking < 1) {
                _this.unschedule(_this.intervalThinking);
                _this.getPlayerHouse(seatId).hidePlayCountdown();
            }
        }, 1);
    };
    PokerController.prototype.startWaittingCountDown = function (timeWait) {
        var _this = this;
        this.timeAutoStart = timeWait;
        this.setTimeWaittingCountDown();
        this.notifyTimeStart.active = true;
        this.unschedule(this.intervalWaitting);
        this.schedule(this.intervalWaitting = function () {
            _this.timeAutoStart--;
            _this.setTimeWaittingCountDown();
            if (_this.timeAutoStart < 1) {
                _this.unschedule(_this.intervalWaitting);
                _this.notifyTimeStart.active = false;
            }
        }, 1);
    };
    PokerController.prototype.setTimeWaittingCountDown = function () {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " Bắt đầu sau : " + this.seconds + "s ";
    };
    // Time End
    PokerController.prototype.startEndCountDown = function (timeWait) {
        var _this = this;
        this.timeEnd = timeWait;
        this.setTimeEndCountDown();
        this.notifyTimeEnd.active = true;
        this.unschedule(this.intervalEnd);
        this.schedule(this.intervalEnd = function () {
            _this.timeEnd--;
            _this.setTimeEndCountDown();
            if (_this.timeEnd < 1) {
                _this.unschedule(_this.intervalEnd);
                _this.notifyTimeEnd.active = false;
            }
        }, 1);
    };
    PokerController.prototype.setTimeEndCountDown = function () {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " Kết thúc sau : " + this.seconds + "s ";
    };
    // Time Bet
    PokerController.prototype.startBettingCountDown = function (turnTime) {
        var _this = this;
        //  cc.log("Poker startBettingCountDown turnTime : ", turnTime);
        this.timeBet = turnTime;
        this.actionBetting.active = true;
        this.processBetting(1);
        this.unschedule(this.intervalBetting);
        this.schedule(this.intervalBetting = function () {
            _this.timeBet--;
            var rate = (_this.timeBet / turnTime).toFixed(1);
            _this.processBetting(rate);
            if (_this.timeBet < 1) {
                _this.unschedule(_this.intervalBetting);
                _this.actionBetting.active = false;
            }
        }, 1);
    };
    PokerController.prototype.processBetting = function (rate) {
        //  cc.log("Poker processBetting rate : ", rate);
        //  cc.log("Poker processBetting fillRange : ", this.actionBetting.children[0].getComponent(cc.Sprite).fillRange);
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
    };
    // Open Me Card
    PokerController.prototype.openMeCard = function (event, itemId) {
        var _this = this;
        // Open Me cards
        var cardPos = parseInt(itemId);
        //  cc.log("Poker openMeCard cardPos : ", cardPos);
        //  cc.log("Poker openMeCard currentCard : ", this.currentCard);
        this.getPlayerHouse(0).prepareCardReal(cardPos);
        var spriteCardId = Poker_CardUtil_1.default.getNormalId(this.currentCard[cardPos]);
        this.getPlayerHouse(0).transformToCardReal(cardPos, this.spriteCards[spriteCardId]);
        this.numCardOpened += 1;
        if (this.numCardOpened == 3) {
            this.btnOpenCard.active = true;
            this.btnBet.active = false;
            this.FxDealer.setAnimation(0, "cho", true);
            var score = 0;
            for (var a = 0; a < 3; a++) {
                score += Poker_CardUtil_1.default.getDiemById(this.currentCard[a]);
            }
            if (score > 10) {
                this.getPlayerHouse(0).showCardName((score % 10) + " Điểm");
            }
            else {
                this.getPlayerHouse(0).showCardName(score + " Điểm");
            }
            setTimeout(function () {
                _this.getPlayerHouse(0).resetCardReady();
            }, 200);
        }
    };
    PokerController.prototype.moveChipsToHubNow = function (index) {
        this.hubChips.children[2 * index].position = cc.v2(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[(2 * index) + 1].position = cc.v2(25, 80);
        this.hubChips.children[(2 * index) + 1].scale = 0;
    };
    PokerController.prototype.fxMoveChips = function (chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(0.8, toX, toY), cc.scaleTo(0.8, 0, 0))));
    };
    PokerController.prototype.resetHubChips = function () {
        var arrFromX = [70, 280, 280, 260, 100, -260, -375, -360];
        var arrFromY = [-195, -150, -55, 70, 90, 85, -30, -155];
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.hubChips.children[2 * index].position = cc.v2(arrFromX[index], arrFromY[index]);
            this.hubChips.children[(2 * index) + 1].position = cc.v2(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) {
            this.hubChips.children[index].active = false;
        }
    };
    PokerController.prototype.setupBet = function () {
        // arrBetValue
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    PokerController.prototype.showBtnRaise = function (state) {
        this.btnActions.children[0].active = state;
    };
    PokerController.prototype.showBtnCheck = function (state) {
        this.btnActions.children[1].active = state;
    };
    PokerController.prototype.showBtnCall = function (state) {
        this.btnActions.children[2].active = state;
    };
    PokerController.prototype.resetBtnActions = function () {
        for (var index = 0; index < 4; index++) {
            this.btnActions.children[index].active = true;
        }
    };
    PokerController.prototype.showPopupBuyIn = function (min, max, bet) {
        this.minCashIn = min;
        this.maxCashIn = max;
        this.popupBuyIn.active = true;
        this.labelBuyInMin.string = Utils_1.default.formatNumber(bet * min);
        if (Configs_1.default.Login.Coin > bet * max) {
            this.labelBuyInMax.string = Utils_1.default.formatNumber(bet * max);
        }
        else {
            this.labelBuyInMax.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
        }
        this.edtBuyIn.string = "";
        this.toggleAutoBuyIn.isChecked = true;
    };
    PokerController.prototype.closePopupBuyIn = function () {
        this.popupBuyIn.active = false;
    };
    PokerController.prototype.textChange = function (event) {
        if (event.length > 0) {
            var rawNumber = "";
            for (var index = 0; index < event.length; index++) {
                if (event[index] == "0"
                    || event[index] == "1"
                    || event[index] == "2"
                    || event[index] == "3"
                    || event[index] == "4"
                    || event[index] == "5"
                    || event[index] == "6"
                    || event[index] == "7"
                    || event[index] == "8"
                    || event[index] == "9") {
                    rawNumber += event[index];
                }
            }
            //  cc.log("Poker onTextChange rawNumber : ", rawNumber);
            if (rawNumber !== "") {
                this.edtBuyIn.string = Utils_1.default.formatNumber(parseInt(rawNumber));
            }
            else {
                this.edtBuyIn.string = "";
            }
        }
    };
    // show Center Cards
    PokerController.prototype.showAllCenterCards = function (centerCards) {
        var _this = this;
        this.currentCenterCard = centerCards;
        for (var index = 0; index < centerCards.length; index++) {
            var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[index]);
            this.cardsCenter.children[index].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        }
        // dua 3 la len -175, -10 roi xoe ra ben phai
        setTimeout(function () {
            _this.cardsCenter.children[0].runAction(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)));
            _this.cardsCenter.children[1].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -17, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.1, -85, -45)));
            _this.cardsCenter.children[2].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.1, 0, -45)));
            _this.cardsCenter.children[3].runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(0.1, 85, -45), cc.scaleTo(0.1, 1, 1))));
            _this.cardsCenter.children[4].runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.moveTo(0.1, 170, -45), cc.scaleTo(0.1, 1, 1))));
        }, 400);
    };
    PokerController.prototype.showCenterCards1stRound = function (centerCards) {
        this.currentCenterCard = centerCards;
        for (var index = 0; index < centerCards.length; index++) {
            var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[index]);
            this.cardsCenter.children[index].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        }
        this.cardsCenter.children[0].runAction(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)));
        this.cardsCenter.children[1].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -17, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.2, -85, -45)));
        this.cardsCenter.children[2].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.2, 0, -45)));
    };
    PokerController.prototype.showCenterCards2ndRound = function (centerCards) {
        this.currentCenterCard.push(centerCards[0]);
        var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[0]);
        this.cardsCenter.children[3].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        this.cardsCenter.children[3].runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(0.1, 85, -45), cc.scaleTo(0.1, 1, 1))));
    };
    PokerController.prototype.showCenterCards3rdRound = function (centerCards) {
        this.currentCenterCard.push(centerCards[0]);
        var spriteCardId = Poker_CardUtil_1.default.getNormalId(centerCards[0]);
        this.cardsCenter.children[4].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        this.cardsCenter.children[4].runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.moveTo(0.1, 170, -45), cc.scaleTo(0.1, 1, 1))));
    };
    // addListener
    PokerController.prototype.setupListener = function () {
        var _this = this;
        Poker_NetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Poker_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        //  cc.log("Poker JOIN_ROOM_SUCCESS");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedJoinRoomSucceed(data);
                        //  cc.log("Poker JOIN_ROOM_SUCCESS res : ", JSON.stringify(res));
                        _this.closeUIRoom();
                        _this.setupMatch(res);
                    }
                    break;
                case Poker_Cmd_1.default.Code.THONG_TIN_BAN_CHOI: // Reconnect
                    {
                        //  cc.log("Poker THONG_TIN_BAN_CHOI");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedGameInfo(data);
                        //  cc.log("Poker THONG_TIN_BAN_CHOI res : ", JSON.stringify(res));
                        // {
                        //     "maxPlayer": 9,
                        //     "chair": 0,
                        //     "myCardSize": 2,
                        //     "myCards": [13, 22],
                        //     "publicCardSize": 3,
                        //     "publicCards": [7, 37, 15],
                        //     "dealerChair": 0,
                        //     "smallBlindChair": 1,
                        //     "bigBlindChair": 2,
                        //     "potAmount": 31000,
                        //     "maxBet": 4000,
                        //     "raiseStep": 4000,
                        //     "roundId": 1,
                        //     "gameServerState": 1,
                        //     "gameAction": 4,
                        //     "countDownTime": 9,
                        //     "currentActiveChair": 1,
                        //     "moneyType": 1,
                        //     "bet": 500,
                        //     "gameId": 1351,
                        //     "roomId": 93,
                        //     "hasInfoSize": 9,
                        //     "hasInfoList": [1, 1, 1, 0, 0, 0, 0, 0, 0],
                        //     "playerInfoList": [[], [], [], [], [], [], [], [], []]
                        // }
                        var chair = res["chair"];
                        var myCardSize = res["myCardSize"];
                        var myCards = res["myCards"];
                        var publicCardSize = res["publicCardSize"];
                        var publicCards = res["publicCards"];
                        var dealerChair = res["dealerChair"];
                        var smallBlindChair = res["smallBlindChair"];
                        var bigBlindChair = res["bigBlindChair"];
                        var potAmount = res["potAmount"];
                        var maxBet = res["maxBet"];
                        var raiseStep = res["raiseStep"];
                        var roundId = res["roundId"];
                        var gameServerState = res["gameServerState"];
                        var gameAction = res["gameAction"];
                        var countDownTime = res["countDownTime"];
                        var currentActiveChair = res["currentActiveChair"];
                        var bet = res["bet"];
                        var gameId = res["gameId"];
                        var roomId = res["roomId"];
                        var hasInfoSize = res["hasInfoSize"];
                        var hasInfoList = res["hasInfoList"];
                        var playerInfoList = res["playerInfoList"];
                        _this.closeUIRoom();
                        _this.showUIPlaying();
                        _this.closeUIChat();
                        _this.labelRoomId.string = "POKER - PHÒNG: " + roomId;
                        _this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(bet) + "/" + Utils_1.default.formatNumber(2 * bet) + "$";
                        _this.currentRoomBet = bet;
                        _this.currentCard = myCards;
                        if (potAmount != null) {
                            _this.matchPot.active = true;
                            _this.currentMatchPotValue = potAmount;
                            _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
                        }
                        if (maxBet != null) {
                            _this.currentMaxBet = maxBet;
                        }
                        if (raiseStep != null) {
                            _this.currentRaiseStep = raiseStep;
                        }
                        _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
                        _this.currentRaiseMin = _this.currentMaxBet + _this.currentRaiseStep;
                        if (publicCardSize > 0) {
                            if (publicCardSize == 3) {
                                _this.showCenterCards1stRound(publicCards);
                            }
                            else if (publicCardSize == 4) {
                                var round_1 = [publicCards[0], publicCards[1], publicCards[2]];
                                var round_2 = publicCards[3];
                                _this.showCenterCards1stRound(round_1);
                                _this.showCenterCards2ndRound(round_2);
                            }
                            else if (publicCardSize == 5) {
                                _this.showAllCenterCards(publicCards);
                            }
                        }
                        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
                        configPlayer[0].playerPos = chair;
                        //  cc.log("Poker setupMatch configPlayer Me : ", configPlayer[0]);
                        //  cc.log("Poker setupMatch configPlayer  : ", configPlayer);
                        var numPlayers = 0;
                        var arrPlayerPosExist = [];
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            if (hasInfoList[index]) {
                                numPlayers += 1;
                                arrPlayerPosExist.push(index);
                            }
                        }
                        //  cc.log("Poker numPlayers : ", numPlayers);
                        // setup configPlayer
                        for (var a = 0; a < configPlayer.length; a++) {
                            configPlayer[a].playerPos = defaultPlayerPos[chair][a];
                        }
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
                            var seatId = configPlayer[index].seatId;
                            _this.getPlayerHouse(seatId).resetPlayerInfo();
                            if (findPos > -1) {
                                // Exist player -> Set Player Info
                                _this.getPlayerHouse(seatId).setIsViewer(false);
                                _this.setupSeatPlayer(seatId, {
                                    nickName: playerInfoList[index].nickName,
                                    avatar: playerInfoList[index].avatar,
                                    currentMoney: playerInfoList[index].currentMoney,
                                });
                                if (seatId != 0) {
                                    _this.getPlayerHouse(seatId).showCardReady(true);
                                    _this.getPlayerHouse(seatId).showCardReal(false);
                                }
                                if (playerInfoList[index].currentBet > 0) {
                                    _this.getPlayerHouse(seatId).setBet(playerInfoList[index].currentBet);
                                    _this.getPlayerHouse(seatId).addChips();
                                }
                                if (playerInfoList[index].fold) {
                                    _this.getPlayerHouse(seatId).showActionState("ÚP");
                                    if (seatId == 0) {
                                        _this.isFolded = true;
                                    }
                                }
                                if (playerInfoList[index].hasAllIn) {
                                    _this.getPlayerHouse(seatId).showActionState("ALL-IN");
                                }
                            }
                            else {
                                // Not Exist player  -> Active Btn Add player
                                _this.getPlayerHouse(seatId).showBtnInvite(true);
                                configPlayer[index].isViewer = true;
                            }
                        }
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            _this.getPlayerHouse(index).setDealer(false);
                            _this.getPlayerHouse(index).setSmallBind(false);
                            _this.getPlayerHouse(index).setBigBind(false);
                        }
                        var dealerSeatId = _this.findPlayerSeatByPos(dealerChair);
                        if (dealerSeatId != -1) {
                            _this.getPlayerHouse(dealerChair).setDealer(true);
                        }
                        var sbSeatId = _this.findPlayerSeatByPos(smallBlindChair);
                        if (sbSeatId != -1) {
                            _this.getPlayerHouse(sbSeatId).setSmallBind(true);
                        }
                        var bbSeatId = _this.findPlayerSeatByPos(bigBlindChair);
                        if (bbSeatId != -1) {
                            _this.getPlayerHouse(bbSeatId).setBigBind(true);
                        }
                        var activeSeatId = _this.findPlayerSeatByPos(currentActiveChair);
                        if (activeSeatId != -1) {
                            _this.getPlayerHouse(activeSeatId).showPlayCountdown();
                            _this.startThinkingCountDown(activeSeatId, countDownTime);
                        }
                        // Open Me cards
                        if (myCardSize > 0) {
                            _this.getPlayerHouse(0).showCardReady(false);
                            for (var a = 0; a < 2; a++) {
                                //  cc.log("Poker cardId : ", myCards[a]);
                                var spriteCardId = Poker_CardUtil_1.default.getNormalId(myCards[a]);
                                _this.getPlayerHouse(0).prepareToTransform();
                                _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                            }
                        }
                        _this.resetHubChips();
                    }
                    break;
                case Poker_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
                    {
                        //  cc.log("Poker DANG_KY_THOAT_PHONG");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                        //  cc.log("Poker DANG_KY_THOAT_PHONG res : ", JSON.stringify(res));
                        var outChair = res["outChair"];
                        var isOutRoom = res["isOutRoom"];
                        var seatId_1 = _this.findPlayerSeatByPos(outChair);
                        if (seatId_1 !== -1) {
                            if (isOutRoom) {
                                _this.getPlayerHouse(seatId_1).showNotify("Sắp rời bàn !");
                            }
                            else {
                                _this.getPlayerHouse(seatId_1).showNotify("Khô Máu !");
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.NEW_USER_JOIN:
                    {
                        //  cc.log("Poker NEW_USER_JOIN");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedUserJoinRoom(data);
                        //  cc.log("Poker NEW_USER_JOIN res : ", JSON.stringify(res));
                        var nickName = res["info"]["nickName"];
                        var avatar = res["info"]["avatar"];
                        var currentMoney = res["info"]["money"];
                        var chair = res["uChair"];
                        var status = res["uStatus"];
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            if (configPlayer[index].playerPos == chair) {
                                // Exist player -> Set Player Info
                                var seatId = configPlayer[index].seatId;
                                _this.getPlayerHouse(seatId).resetPlayerInfo();
                                var customPlayerInfo = {
                                    "avatar": avatar,
                                    "nickName": nickName,
                                    "currentMoney": currentMoney,
                                };
                                _this.setupSeatPlayer(seatId, customPlayerInfo);
                                if (status == Poker_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    _this.getPlayerHouse(seatId).setIsViewer(true);
                                    configPlayer[seatId].isViewer = true;
                                    if (configPlayer[seatId].playerId != -1) {
                                        _this.getPlayerHouse(seatId).playFxViewer();
                                    }
                                }
                                else {
                                    _this.getPlayerHouse(seatId).setIsViewer(false);
                                    configPlayer[seatId].isViewer = false;
                                }
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.LEAVE_GAME:
                    {
                        //  cc.log("Poker LEAVE_GAME");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedUserLeaveRoom(data);
                        //  cc.log("Poker LEAVE_GAME res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var seatId_2 = _this.findPlayerSeatByPos(chair);
                        if (seatId_2 !== -1) {
                            // Need clear configPlayer
                            for (var index = 0; index < configPlayer.length; index++) {
                                if (configPlayer[index].seatId == seatId_2) {
                                    configPlayer[index].playerId = -1;
                                    configPlayer[index].isViewer = true;
                                }
                            }
                            // Change UI
                            _this.getPlayerHouse(seatId_2).resetPlayerInfo();
                            _this.getPlayerHouse(seatId_2).showBtnInvite(true);
                            var arrSeatExistLast = _this.getNumPlayers();
                            if (arrSeatExistLast.length == 1) {
                                _this.resetPlayersPlaying();
                                _this.resetCenterCards();
                                _this.matchPot.active = false;
                            }
                            if (seatId_2 == 0) {
                                // Me leave
                                // Change UI
                                _this.UI_Playing.active = false;
                                _this.UI_ChooseRoom.active = true;
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.TAKE_TURN:
                    {
                        //  cc.log("Poker TAKE_TURN");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedTakeTurn(data);
                        //  cc.log("Poker TAKE_TURN res : ", JSON.stringify(res));
                        // {
                        //     "actionChair": 1,
                        //     "action": 2,
                        //     "lastRaise": 500,
                        //     "currentBet": 1000,
                        //     "maxBet": 1000,
                        //     "currentMoney": 29000,
                        //     "raiseStep": 1000,
                        //     "raiseBlock": 0
                        // }
                        var actionChair = res["actionChair"];
                        var action = res["action"];
                        var lastRaise = res["lastRaise"];
                        var currentBet = res["currentBet"];
                        var maxBet = res["maxBet"];
                        var currentMoney = res["currentMoney"];
                        var raiseStep = res["raiseStep"];
                        var raiseBlock = res["raiseBlock"];
                        //  cc.log("Poker TAKE_TURN actionChair : ", actionChair);
                        //  cc.log("Poker TAKE_TURN action : ", action);
                        //  cc.log("Poker TAKE_TURN lastRaise : ", lastRaise);
                        //  cc.log("Poker TAKE_TURN currentBet : ", currentBet);
                        //  cc.log("Poker TAKE_TURN maxBet : ", maxBet);
                        //  cc.log("Poker TAKE_TURN currentMoney : ", currentMoney);
                        //  cc.log("Poker TAKE_TURN raiseStep : ", raiseStep);
                        //  cc.log("Poker TAKE_TURN raiseBlock : ", raiseBlock);
                        _this.currentMaxBet = maxBet;
                        _this.currentRaiseStep = raiseStep;
                        var seatId_3 = _this.findPlayerSeatByPos(actionChair);
                        if (seatId_3 != -1) {
                            if (seatId_3 == 0) {
                                _this.lastMeBet = _this.currentMeBet;
                                _this.currentMeBet = currentBet;
                            }
                            var actionName = "";
                            switch (action) {
                                case Poker_Cmd_1.default.Code.GAME_ACTION_FOLD:
                                    actionName = "ÚP";
                                    _this.getPlayerHouse(seatId_3).fxMeFold();
                                    if (seatId_3 == 0) {
                                        _this.isFolded = true;
                                    }
                                    break;
                                case Poker_Cmd_1.default.Code.GAME_ACTION_CHECK:
                                    actionName = "XEM";
                                    break;
                                case Poker_Cmd_1.default.Code.GAME_ACTION_CALL:
                                    actionName = "THEO";
                                    // Other Player call
                                    // if (seatId != 0) {
                                    //     this.currentMeBet = 0;
                                    // }
                                    _this.getPlayerHouse(seatId_3).addChips();
                                    break;
                                case Poker_Cmd_1.default.Code.GAME_ACTION_RAISE:
                                    actionName = "TỐ";
                                    _this.getPlayerHouse(seatId_3).setBet(currentBet);
                                    _this.getPlayerHouse(seatId_3).addChips();
                                    // sang turn moi, khi player truoc Raise va minh chua Bet gi
                                    // if (seatId != 0 && this.currentMeBet == 0) {
                                    //     this.currentMeBet = lastRaise;
                                    // }
                                    break;
                                case Poker_Cmd_1.default.Code.GAME_ACTION_ALL_IN:
                                    actionName = "ALL-IN";
                                    _this.getPlayerHouse(seatId_3).setBet(currentBet);
                                    _this.getPlayerHouse(seatId_3).addChips();
                                    _this.getPlayerHouse(seatId_3).addChips();
                                    break;
                                default:
                                    break;
                            }
                            _this.getPlayerHouse(seatId_3).setGold(currentMoney);
                            _this.getPlayerHouse(seatId_3).showActionState(actionName);
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.SELECT_DEALER:
                    {
                        //  cc.log("Poker SELECT_DEALER");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedSelectDealer(data);
                        //  cc.log("Poker SELECT_DEALER res : ", JSON.stringify(res));
                        var dealerChair = res["dealerChair"];
                        var smallBlindChair = res["smallBlindChair"];
                        var bigBlindChair = res["bigBlindChair"];
                        var hasInfoSize = res["hasInfoSize"];
                        var hasInfoList = res["hasInfoList"];
                        var playerStatusList = res["playerStatusList"];
                        var gameId = res["gameId"];
                        var isCheat = res["isCheat"];
                        var currentMoneySize = res["currentMoneySize"];
                        var currentMoneyList = res["currentMoneyList"];
                        var size = res["size"];
                        var listBetBigBlind = res["listBetBigBlind"];
                        //  cc.log("Poker SELECT_DEALER dealerChair : ", dealerChair);
                        //  cc.log("Poker SELECT_DEALER smallBlindChair : ", smallBlindChair);
                        //  cc.log("Poker SELECT_DEALER bigBlindChair : ", bigBlindChair);
                        //  cc.log("Poker SELECT_DEALER hasInfoSize : ", hasInfoSize);
                        //  cc.log("Poker SELECT_DEALER hasInfoList : ", hasInfoList);
                        //  cc.log("Poker SELECT_DEALER playerStatusList : ", playerStatusList);
                        //  cc.log("Poker SELECT_DEALER gameId : ", gameId);
                        //  cc.log("Poker SELECT_DEALER isCheat : ", isCheat);
                        //  cc.log("Poker SELECT_DEALER currentMoneySize : ", currentMoneySize);
                        //  cc.log("Poker SELECT_DEALER currentMoneyList : ", currentMoneyList);
                        //  cc.log("Poker SELECT_DEALER size : ", size);
                        //  cc.log("Poker SELECT_DEALER listBetBigBlind : ", listBetBigBlind);
                        // set Dealer, SB, BB state
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            _this.getPlayerHouse(index).setDealer(false);
                            _this.getPlayerHouse(index).setSmallBind(false);
                            _this.getPlayerHouse(index).setBigBind(false);
                        }
                        var seatIdDealer = _this.findPlayerSeatByPos(dealerChair);
                        if (seatIdDealer != -1) {
                            _this.getPlayerHouse(seatIdDealer).setDealer(true);
                        }
                        var seatIdSmallBind = _this.findPlayerSeatByPos(smallBlindChair);
                        if (seatIdSmallBind != -1) {
                            if (seatIdSmallBind == 0) {
                                _this.currentMeBet = _this.currentRoomBet;
                            }
                            _this.getPlayerHouse(seatIdSmallBind).setSmallBind(true);
                            _this.getPlayerHouse(seatIdSmallBind).setBet(_this.currentRoomBet);
                            _this.getPlayerHouse(seatIdSmallBind).addChips();
                        }
                        var seatIdBigBind = _this.findPlayerSeatByPos(bigBlindChair);
                        if (seatIdBigBind != -1) {
                            if (seatIdBigBind == 0) {
                                _this.currentMeBet = 2 * _this.currentRoomBet;
                            }
                            _this.getPlayerHouse(seatIdBigBind).setBigBind(true);
                            _this.getPlayerHouse(seatIdBigBind).setBet(2 * _this.currentRoomBet);
                            _this.getPlayerHouse(seatIdBigBind).addChips();
                            _this.getPlayerHouse(seatIdBigBind).addChips();
                        }
                        _this.currentMatchPotValue = 0;
                        _this.labelMatchPot.string = "0";
                        _this.currentMaxBet = 2 * _this.currentRoomBet;
                        _this.currentRaiseStep = 2 * _this.currentRoomBet;
                        _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
                        //  cc.log("Poker SELECT_DEALER currentMeBet : ", this.currentMeBet);
                        //  cc.log("Poker SELECT_DEALER currentRaiseStep : ", this.currentRaiseStep);
                        //  cc.log("Poker SELECT_DEALER currentRaiseValue : ", this.currentRaiseValue);
                        // update Gold
                        for (var index = 0; index < currentMoneyList.length; index++) {
                            var seatId_4 = _this.findPlayerSeatByPos(index);
                            _this.getPlayerHouse(seatId_4).setGold(currentMoneyList[index]);
                            if (currentMoneyList[index] == 0) {
                                configPlayer[seatId_4].isViewer = true;
                                configPlayer[seatId_4]["isViewer"] = true;
                                _this.getPlayerHouse(seatId_4).setIsViewer(true);
                                if (configPlayer[seatId_4].playerId != -1) {
                                    _this.getPlayerHouse(seatId_4).playFxViewer();
                                }
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.BUY_IN:
                    {
                        //  cc.log("Poker BUY_IN");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedBuyIn(data);
                        //  cc.log("Poker BUY_IN res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var buyInMoney = res["buyInMoney"];
                        //  cc.log("Poker BUY_IN chair : ", chair);
                        //  cc.log("Poker BUY_IN buyInMoney : ", buyInMoney);
                        var seatId_5 = _this.findPlayerSeatByPos(chair);
                        if (seatId_5 != -1) {
                            if (seatId_5 == 0) {
                                // Me buy in
                                App_1.default.instance.showLoading(false);
                            }
                            _this.getPlayerHouse(seatId_5).setGold(buyInMoney);
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.DEAL_PRIVATE_CARD:
                    {
                        //  cc.log("Poker DEAL_PRIVATE_CARD");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedDealCards(data);
                        //  cc.log("Poker DEAL_PRIVATE_CARD res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var sizeCard = res["sizeCard"];
                        var myCards_1 = res["myCards"];
                        var boBaiId_1 = res["boBaiId"];
                        // Fix cung -> can tim cach set first raise step
                        //  cc.log("Poker DEAL_PRIVATE_CARD chair  : ", chair);
                        //  cc.log("Poker DEAL_PRIVATE_CARD sizeCard : ", sizeCard);
                        //  cc.log("Poker DEAL_PRIVATE_CARD myCards : ", myCards);
                        //  cc.log("Poker DEAL_PRIVATE_CARD boBaiId : ", boBaiId);
                        _this.btnBet.active = false;
                        _this.btnOpenCard.active = false;
                        _this.matchPot.active = true;
                        _this.FxDealer.setAnimation(0, "cho", true);
                        _this.currentCard = myCards_1;
                        //  cc.log("Poker ReceivedChiaBai currentCard : ", this.currentCard);
                        var arrSeatExist = _this.getNumPlayers();
                        var numPlayer_1 = arrSeatExist.length;
                        //  cc.log("Poker ReceivedChiaBai arrSeatExist : ", arrSeatExist);
                        //  cc.log("Poker ReceivedChiaBai numPlayer : ", numPlayer);
                        // Open | Hide cards not use
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER * 2; index++) { // 8 players * 2 cards
                            _this.cardsDeal.children[index].active = index >= numPlayer_1 * 2 ? false : true;
                            _this.cardsDeal.children[index].position = cc.v2(0, 0);
                        }
                        // Move Cards used to each player joined
                        for (var a = 0; a < 2; a++) { // players x 2 cards
                            for (var b = 0; b < numPlayer_1; b++) {
                                var seatId_6 = arrSeatExist[b];
                                if (seatId_6 !== -1) {
                                    var card4Me = _this.cardsDeal.children[(a * numPlayer_1) + b];
                                    var rawPlayerPos = _this.groupPlayers.children[seatId_6].position;
                                    //  cc.log("Poker CHIA_BAI delayTime : ", ((a * numPlayer) + b) * 0.15);
                                    card4Me.runAction(cc.sequence(cc.delayTime(((a * numPlayer_1) + b) * 0.15), cc.moveTo(0.2, rawPlayerPos)));
                                }
                            }
                        }
                        var delayOver2Under = 0.2;
                        var maxDelay = ((1 * numPlayer_1) + (numPlayer_1 - 1)) * 0.15; // ((a * numPlayer) + b) * 0.15
                        var timeUnderLayer = (maxDelay + 0.2 + delayOver2Under) * 1000;
                        //  cc.log("CHIA_BAI timeUnderLayer : ", timeUnderLayer);
                        clearTimeout(_this.timeoutChiaBaiDone);
                        _this.timeoutChiaBaiDone = setTimeout(function () {
                            for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER * 2; index++) { // 8 players * 2 cards
                                //  cc.log("CHIA_BAI cardsDeal index : ", index);
                                _this.cardsDeal.children[index].active = false;
                            }
                            for (var index = 0; index < numPlayer_1; index++) {
                                var seatId_7 = arrSeatExist[index];
                                if (seatId_7 !== -1) {
                                    // Drop layer
                                    _this.getPlayerHouse(seatId_7).showCardReady(true);
                                    _this.getPlayerHouse(seatId_7).showCardReal(false);
                                }
                            }
                            // Open Me cards
                            for (var a = 0; a < 2; a++) {
                                //  cc.log("Poker cardId : ", myCards[a]);
                                var spriteCardId = Poker_CardUtil_1.default.getNormalId(myCards_1[a]);
                                _this.getPlayerHouse(0).prepareToTransform();
                                _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                            }
                            var cardName = _this.getCardsName(boBaiId_1);
                            _this.getPlayerHouse(0).showCardName(cardName);
                        }, timeUnderLayer);
                    }
                    break;
                case Poker_Cmd_1.default.Code.NEW_ROUND:
                    {
                        //  cc.log("Poker NEW_ROUND");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedNewBetRound(data);
                        //  cc.log("Poker NEW_ROUND res : ", JSON.stringify(res));
                        // {
                        //     "roundId": 1,
                        //     "sizeCard": 3,
                        //     "plusCards": [
                        //       0,
                        //       36,
                        //       27
                        //     ],
                        //     "cardName": 9,
                        //     "potAmount": 4000
                        //   }
                        var roundId = res["roundId"];
                        var sizeCard = res["sizeCard"];
                        var plusCards = res["plusCards"];
                        var cardName = res["cardName"];
                        var potAmount = res["potAmount"];
                        //  cc.log("Poker NEW_ROUND roundId : ", roundId);
                        //  cc.log("Poker NEW_ROUND sizeCard : ", sizeCard);
                        //  cc.log("Poker NEW_ROUND plusCards : ", plusCards);
                        //  cc.log("Poker NEW_ROUND cardName : ", cardName);
                        //  cc.log("Poker NEW_ROUND potAmount : ", potAmount);
                        _this.matchPot.active = true;
                        _this.currentMatchPotValue = potAmount;
                        _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
                        _this.currentMeBet = 0;
                        _this.currentMaxBet = 0;
                        _this.currentRaiseStep = 2 * _this.currentRoomBet;
                        _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            _this.getPlayerHouse(index).showPlayerBet(false);
                        }
                        if (!_this.isFolded) {
                            switch (roundId) {
                                case 1:
                                    _this.showCenterCards1stRound(plusCards);
                                    break;
                                case 2:
                                    _this.showCenterCards2ndRound(plusCards);
                                    break;
                                case 3:
                                    _this.showCenterCards3rdRound(plusCards);
                                    break;
                                default:
                                    break;
                            }
                        }
                        else {
                            //  cc.log("Poker NEW_ROUND Me is folded -> Can not see center cards");
                        }
                        _this.getPlayerHouse(0).showCardName(_this.getCardsName(cardName));
                    }
                    break;
                case Poker_Cmd_1.default.Code.CHANGE_TURN:
                    {
                        //  cc.log("Poker CHANGE_TURN");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedChangeTurn(data);
                        //  cc.log("Poker CHANGE_TURN res : ", JSON.stringify(res));
                        var roundId = res["roundId"];
                        var chair = res["chair"];
                        var betTime = res["betTime"];
                        //  cc.log("Poker CHANGE_TURN roundId : ", roundId);
                        //  cc.log("Poker CHANGE_TURN chair : ", chair);
                        //  cc.log("Poker CHANGE_TURN betTime : ", betTime);
                        _this.resetAllPlayerCountdown();
                        var seatId_8 = _this.findPlayerSeatByPos(chair);
                        if (seatId_8 != -1) {
                            _this.getPlayerHouse(seatId_8).showPlayCountdown();
                            _this.startThinkingCountDown(seatId_8, betTime);
                            if (seatId_8 == 0) {
                                _this.btnBet.active = true;
                                _this.FxDealer.setAnimation(0, "noti", true);
                                _this.btnOpenCard.active = false;
                                _this.setupBet();
                                _this.currentRaiseValue = _this.currentMaxBet + _this.currentRaiseStep;
                                _this.currentRaiseMin = _this.currentMaxBet + _this.currentRaiseStep;
                                // Neu ma minBet > currentMeGold thi an nut Raise di, chi cho Fold | All-In
                                var currentMeGold = _this.getPlayerHouse(0).getGold();
                                // dang gap loi minBet sai, dat minBet k dc, phải dc ++1 mới dc
                                //  cc.log("Poker_BET =======================================", roundId);
                                //  cc.log("Poker_BET currentMaxBet : ", this.currentMaxBet);
                                //  cc.log("Poker_BET currentRaiseStep : ", this.currentRaiseStep);
                                //  cc.log("Poker_BET currentRaiseMin : ", this.currentRaiseMin);
                                //  cc.log("Poker_BET currentRaiseValue : ", this.currentRaiseValue);
                                //  cc.log("Poker_BET currentMeBet : ", this.currentMeBet);
                                //  cc.log("Poker_BET lastMeBet : ", this.lastMeBet);
                                //  cc.log("Poker_BET currentMeGold : ", currentMeGold);
                                //  cc.log("Poker_BET currentRoomBet : ", this.currentRoomBet);
                                //  cc.log("Poker_BET currentMatchPotValue : ", this.currentMatchPotValue);
                                var btn_01 = _this.currentRaiseValue;
                                var btn_02 = -1;
                                var btn_03 = -1;
                                if (roundId == 0) {
                                    btn_02 = Math.max(4 * _this.currentRoomBet, _this.currentRaiseStep) + _this.currentMaxBet;
                                    btn_03 = Math.max(6 * _this.currentRoomBet, _this.currentRaiseStep) + _this.currentMaxBet;
                                }
                                else {
                                    btn_02 = Math.max(_this.currentMatchPotValue / 2, _this.currentRaiseStep) + _this.currentMaxBet;
                                    btn_03 = Math.max(_this.currentMatchPotValue, _this.currentRaiseStep) + _this.currentMaxBet;
                                }
                                _this.arrBetValue = [];
                                _this.arrBetValue.push(btn_01 - _this.currentMeBet);
                                _this.arrBetValue.push(btn_02 - _this.currentMeBet);
                                _this.arrBetValue.push(btn_03 - _this.currentMeBet);
                                _this.arrBetValue.push(btn_03 + (2 * _this.currentRoomBet) - _this.currentMeBet);
                                _this.arrBetValue.push(btn_03 + (4 * _this.currentRoomBet) - _this.currentMeBet);
                                for (var index = 0; index < 5; index++) {
                                    _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin(_this.arrBetValue[4 - index]);
                                }
                                if (roundId == 0) {
                                    _this.betChooseValue.children[0].children[1].getComponent(cc.Label).string = "";
                                    _this.betChooseValue.children[1].children[1].getComponent(cc.Label).string = "";
                                    _this.betChooseValue.children[2].children[1].getComponent(cc.Label).string = "3BB";
                                    _this.betChooseValue.children[3].children[1].getComponent(cc.Label).string = "2BB";
                                    _this.betChooseValue.children[4].children[1].getComponent(cc.Label).string = "MIN";
                                }
                                else {
                                    _this.betChooseValue.children[0].children[1].getComponent(cc.Label).string = "";
                                    _this.betChooseValue.children[1].children[1].getComponent(cc.Label).string = "";
                                    _this.betChooseValue.children[2].children[1].getComponent(cc.Label).string = "POT";
                                    _this.betChooseValue.children[3].children[1].getComponent(cc.Label).string = "POT/2";
                                    _this.betChooseValue.children[4].children[1].getComponent(cc.Label).string = "MIN";
                                }
                                _this.resetBtnActions();
                                if (_this.currentMaxBet == _this.currentMeBet) {
                                    _this.showBtnCall(false);
                                    _this.showBtnCheck(true);
                                }
                                else {
                                    if ((_this.currentMaxBet - _this.currentMeBet) >= currentMeGold) {
                                        _this.showBtnRaise(false);
                                        _this.showBtnCall(false);
                                        _this.showBtnCheck(false);
                                    }
                                    else {
                                        _this.showBtnCall(true);
                                        _this.showBtnCheck(false);
                                    }
                                }
                                if ((_this.currentRaiseValue - _this.currentMeBet) >= currentMeGold) {
                                    _this.showBtnRaise(false);
                                }
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.KET_THUC:
                    {
                        //  cc.log("Poker KET_THUC");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedEndGame(data);
                        //  cc.log("Poker KET_THUC res : ", JSON.stringify(res));
                        // {
                        //     "potAmount": 1500,
                        //     "rankSize": 9,
                        //     "rankList": [1, 10, 0, 0, 0, 0, 0, 0, 0],
                        //     "kqttSize": 9,
                        //     "kqttList": [1490, 0, 0, 0, 0, 0, 0, 0, 0],
                        //     "booleanWinerSize": 9,
                        //     "booleanWinerList": [1, 0, 0, 0, 0, 0, 0, 0, 0],
                        //     "moneyArraySize": 9,
                        //     "currentMoney": [20490, 19500, 0, 0, 0, 0, 0, 0, 0],
                        //     "gameMoney": [4370306, 6467652, 0, 0, 0, 0, 0, 0, 0],
                        //     "gameMoneySize": 9,
                        //     "publicCardSize": 5,
                        //     "publicCards": [10, 26, 2, 21, 7],
                        //     "hasInfoSize": 9,
                        //     "hasInfoList": [3, 1, 0, 0, 0, 0, 0, 0, 0],
                        //     "privateCardList": [
                        //         [18, 16], [], [], [], [], [], [], [], []
                        //     ],
                        //     "maxCardList": [
                        //         [18, 16, 26, 21, 10],
                        //         [10, 9, 43, 26, 21],
                        //         [],
                        //         [],
                        //         [],
                        //         [],
                        //         [],
                        //         [],
                        //         []
                        //     ],
                        //     "cardNameList": [8, 8, 0, 0, 0, 0, 0, 0, 0]
                        // }
                        var potAmount = res["potAmount"];
                        var rankSize = res["rankSize"];
                        var rankList = res["rankList"];
                        var kqttSize = res["kqttSize"];
                        var kqttList = res["kqttList"];
                        var booleanWinerSize = res["booleanWinerSize"];
                        var booleanWinerList = res["booleanWinerList"];
                        var moneyArraySize = res["moneyArraySize"];
                        var currentMoney = res["currentMoney"];
                        var gameMoney = res["gameMoney"];
                        var gameMoneySize = res["gameMoneySize"];
                        var publicCardSize = res["publicCardSize"];
                        var publicCards = res["publicCards"];
                        var hasInfoSize = res["hasInfoSize"];
                        var hasInfoList = res["hasInfoList"];
                        var privateCardList = res["privateCardList"];
                        var maxCardList = res["maxCardList"];
                        var cardNameList = res["cardNameList"];
                        _this.matchPot.active = true;
                        _this.currentMatchPotValue = potAmount;
                        _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
                        _this.FxDealer.setAnimation(0, "cho", true);
                        _this.currentPrivateCardList = privateCardList;
                        // show Fx win
                        // find Players is Playing
                        var arrPlayerPosExist_1 = [];
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            if (maxCardList[index].length > 0) {
                                arrPlayerPosExist_1.push(index);
                            }
                        }
                        // find Winner
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            if (booleanWinerList[index] == 1) {
                                // Winner
                                var seatId_9 = _this.findPlayerSeatByPos(index);
                                if (seatId_9 != -1) {
                                    _this.getPlayerHouse(seatId_9).fxWin({
                                        moneyChange: kqttList[index],
                                        currentMoney: currentMoney[index]
                                    });
                                    if (seatId_9 == 0) {
                                        // Me win
                                        Configs_1.default.Login.Coin = gameMoney[index];
                                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                        // numPlayers > 2 thi dc openCard
                                        var numPlayer = _this.getNumPlayers();
                                        if (numPlayer.length > 2) {
                                            _this.btnOpenCard.active = true;
                                        }
                                        else {
                                            _this.btnOpenCard.active = false;
                                        }
                                        _this.btnBet.active = false;
                                    }
                                }
                            }
                            else {
                                // Lose : can kiem tra xem co phai isPlaying k
                                var findId = arrPlayerPosExist_1.indexOf(index);
                                if (findId !== -1) {
                                    var seatId_10 = _this.findPlayerSeatByPos(index);
                                    _this.getPlayerHouse(seatId_10).fxLose({
                                        moneyChange: kqttList[index],
                                        currentMoney: currentMoney[index]
                                    });
                                    if (seatId_10 == 0) {
                                        Configs_1.default.Login.Coin = gameMoney[index];
                                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                    }
                                }
                            }
                        }
                        // show Center Cards
                        _this.showAllCenterCards(publicCards);
                        // reshow Me cards for reconnect
                        // find Me max cards
                        var endMeCards = _this.currentCard;
                        var endCenterCards = publicCards;
                        var endMeMaxCards = maxCardList[configPlayer[0].playerPos];
                        //  cc.log("Poker KET_THUC endMeCards : ", endMeCards);
                        //  cc.log("Poker KET_THUC endCenterCards : ", endCenterCards);
                        //  cc.log("Poker KET_THUC endMeMaxCards : ", endMeMaxCards);
                        if (endMeMaxCards.length > 0) {
                            for (var index = 0; index < endMeCards.length; index++) {
                                var findId = endMeMaxCards.indexOf(endMeCards[index]);
                                if (findId !== -1) {
                                    _this.getPlayerHouse(0).setCardWin(index, true);
                                }
                                else {
                                    _this.getPlayerHouse(0).setCardWin(index, false);
                                }
                            }
                            var arrCardUpper_1 = [];
                            for (var index = 0; index < endCenterCards.length; index++) {
                                var findId = endMeMaxCards.indexOf(endCenterCards[index]);
                                if (findId !== -1) {
                                    _this.cardsCenter.children[index].color = cc.Color.WHITE;
                                    arrCardUpper_1.push(index);
                                }
                                else {
                                    _this.cardsCenter.children[index].color = cc.Color.GRAY;
                                }
                            }
                            setTimeout(function () {
                                for (var index = 0; index < arrCardUpper_1.length; index++) {
                                    _this.cardsCenter.children[arrCardUpper_1[index]].y = -10;
                                }
                            }, 2500);
                        }
                        // find card needShow of OtherPlayers
                        for (var index = 1; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) { // index start from 1
                            var arrCardsEnd = maxCardList[configPlayer[index].playerPos];
                            if (arrCardsEnd.length > 0) {
                                var cardDifferent = [];
                                for (var a = 0; a < arrCardsEnd.length; a++) {
                                    var isExist = publicCards.indexOf(arrCardsEnd[a]);
                                    if (isExist > -1) {
                                        // Center cards
                                    }
                                    else {
                                        // Player card
                                        cardDifferent.push(arrCardsEnd[a]);
                                    }
                                }
                                var cardShow = _this.currentPrivateCardList[configPlayer[index].playerPos];
                                for (var a = 0; a < 2; a++) {
                                    _this.getPlayerHouse(index).shadowEachCardReal(a, true);
                                }
                                if (cardShow.length > 0) {
                                    for (var a = 0; a < 2; a++) {
                                        //  cc.log("Poker cardId : ", cardShow[a]);
                                        var spriteCardId = Poker_CardUtil_1.default.getNormalId(cardShow[a]);
                                        _this.getPlayerHouse(index).prepareToTransform();
                                        _this.getPlayerHouse(index).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                                        if (cardDifferent.length > 0) {
                                            for (var b = 0; b < cardDifferent.length; b++) {
                                                if (cardShow[a] == cardDifferent[b]) {
                                                    _this.getPlayerHouse(index).shadowEachCardReal(a, false);
                                                }
                                            }
                                        }
                                        else {
                                            _this.getPlayerHouse(index).shadowCardReal(true);
                                        }
                                    }
                                }
                            }
                        }
                        // show Cards Name
                        for (var index = 0; index < arrPlayerPosExist_1.length; index++) {
                            var cardName = _this.getCardsName(cardNameList[arrPlayerPosExist_1[index]]);
                            var seatId_11 = _this.findPlayerSeatByPos(arrPlayerPosExist_1[index]);
                            if (seatId_11 != -1) {
                                if (seatId_11 == 0) {
                                    _this.getPlayerHouse(seatId_11).hideCardName();
                                    _this.FxMeCardName.active = true;
                                    _this.FxMeCardName.children[0].getComponent(cc.Sprite).spriteFrame = _this.spriteCardNames[cardNameList[arrPlayerPosExist_1[index]]];
                                }
                                else {
                                    _this.getPlayerHouse(seatId_11).showCardName(cardName);
                                }
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.UPDATE_MATCH:
                    {
                        //  cc.log("Poker UPDATE_MATCH");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedUpdateMatch(data);
                        //  cc.log("Poker UPDATE_MATCH res : ", JSON.stringify(res));
                        // {
                        //     "chair": 1,
                        //     "hasInfoSize": 9,
                        //     "hasInfoList": [1, 1, 0, 0, 0, 0, 0, 0, 0],
                        //     "currentMoneyList": [19990, 19990, 0, 0, 0, 0, 0, 0, 0],
                        //     "statusList": [2, 2, 0, 0, 0, 0, 0, 0, 0]
                        // }
                        var chair = res["chair"];
                        var hasInfoSize = res["hasInfoSize"];
                        var hasInfoList = res["hasInfoList"];
                        var currentMoneyList = res["currentMoneyList"];
                        var statusList = res["statusList"];
                        //  cc.log("Poker setupMatch configPlayer : ", configPlayer);
                        // theo Pos khong phai SeatId
                        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            var pos = configPlayer[index]["playerPos"];
                            if (hasInfoList[pos] == 1) {
                                // setGold se inactive isViewer nen dat no len dau de ben duoi config lai
                                _this.getPlayerHouse(index).setGold(currentMoneyList[pos]);
                                if (statusList[pos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_SITTING || statusList[pos] == Poker_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                                    if (currentMoneyList[pos] == 0) {
                                        configPlayer[index].isViewer = true;
                                        configPlayer[index]["isViewer"] = true;
                                        _this.getPlayerHouse(index).setIsViewer(true);
                                        if (configPlayer[index].playerId != -1) {
                                            _this.getPlayerHouse(index).playFxViewer();
                                        }
                                    }
                                    else {
                                        configPlayer[index].isViewer = false;
                                        configPlayer[index]["isViewer"] = false;
                                        _this.getPlayerHouse(index).setIsViewer(false);
                                    }
                                }
                                else {
                                    configPlayer[index].isViewer = true;
                                    configPlayer[index]["isViewer"] = true;
                                    _this.getPlayerHouse(index).setIsViewer(true);
                                    if (configPlayer[index].playerId != -1) {
                                        _this.getPlayerHouse(index).playFxViewer();
                                    }
                                }
                            }
                            else {
                                configPlayer[index]["playerId"] = -1;
                                configPlayer[index]["isViewer"] = true;
                            }
                        }
                        //  cc.log("Poker setupMatch configPlayer : ", configPlayer);
                    }
                    break;
                case Poker_Cmd_1.default.Code.SHOW_CARD:
                    {
                        //  cc.log("Poker SHOW_CARD");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedShowCard(data);
                        //  cc.log("Poker SHOW_CARD res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var seatId_12 = _this.findPlayerSeatByPos(chair);
                        if (seatId_12 != -1) {
                            var cardShow = _this.currentPrivateCardList[chair];
                            if (cardShow.length > 0) {
                                for (var a = 0; a < 2; a++) {
                                    //  cc.log("Poker cardId : ", cardShow[a]);
                                    var spriteCardId = Poker_CardUtil_1.default.getNormalId(cardShow[a]);
                                    _this.getPlayerHouse(seatId_12).prepareToTransform();
                                    _this.getPlayerHouse(seatId_12).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                                }
                            }
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.REQUEST_BUY_IN:
                    {
                        //  cc.log("Poker REQUEST_STAND_UP");
                        if (Configs_1.default.Login.Coin >= (_this.currentRoomBet * _this.roomMinBuyIn)) {
                            _this.showPopupBuyIn(_this.roomMinBuyIn, _this.roomMaxBuyIn, _this.currentRoomBet);
                        }
                        else {
                            _this.actionLeaveRoom();
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.REQUEST_STAND_UP:
                    {
                        //  cc.log("Poker REQUEST_STAND_UP");
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedStandUp(data);
                        //  cc.log("Poker REQUEST_STAND_UP res : ", JSON.stringify(res));
                        var isUp = res["isUp"];
                        //  cc.log("Poker REQUEST_STAND_UP isUp : ", isUp);
                    }
                    break;
                case Poker_Cmd_1.default.Code.LOGIN:
                    App_1.default.instance.showLoading(false);
                    _this.refeshListRoom();
                    Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.CmdReconnectRoom());
                    break;
                case Poker_Cmd_1.default.Code.TOPSERVER:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker TOPSERVER");
                    }
                    break;
                case Poker_Cmd_1.default.Code.CMD_PINGPONG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker CMD_PINGPONG");
                    }
                    break;
                case Poker_Cmd_1.default.Code.CMD_JOIN_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker CMD_JOIN_ROOM");
                    }
                    break;
                case Poker_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker CMD_RECONNECT_ROOM");
                    }
                    break;
                case Poker_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker CMD_RECONNECT_ROOM");
                    }
                    break;
                case Poker_Cmd_1.default.Code.MONEY_BET_CONFIG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker MONEY_BET_CONFIG");
                    }
                    break;
                case Poker_Cmd_1.default.Code.JOIN_ROOM_FAIL:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedJoinRoomFail(data);
                        //  cc.log("Poker JOIN_ROOM_FAIL res : ", JSON.stringify(res));
                        var msg = "Lỗi " + res.getError() + ", không xác định.";
                        switch (res.getError()) {
                            case 1:
                                msg = "Lỗi kiểm tra thông tin!";
                                break;
                            case 2:
                                msg = "Không tìm được phòng thích hợp. Vui lòng thử lại sau!";
                                break;
                            case 3:
                                msg = "Bạn không đủ tiền vào phòng chơi này!";
                                break;
                            case 4:
                                msg = "Không tìm được phòng thích hợp. Vui lòng thử lại sau!";
                                break;
                            case 5:
                                msg = "Mỗi lần vào phòng phải cách nhau 10 giây!";
                                break;
                            case 6:
                                msg = "Hệ thống bảo trì!";
                                break;
                            case 7:
                                msg = "Không tìm thấy phòng chơi!";
                                break;
                            case 8:
                                msg = "Mật khẩu phòng chơi không đúng!";
                                break;
                            case 9:
                                msg = "Phòng chơi đã đủ người!";
                                break;
                            case 10:
                                msg = "Bạn bị chủ phòng không cho vào bàn!";
                        }
                        App_1.default.instance.alertDialog.showMsg(msg);
                    }
                    break;
                case Poker_Cmd_1.default.Code.GET_LIST_ROOM:
                    {
                        var res = new Poker_Cmd_1.default.ReceivedGetListRoom(data);
                        //  cc.log(res);
                        for (var i = 0; i < res.list.length; i++) {
                            var itemData = res.list[i];
                            var item = cc.instantiate(_this.prefabItemRoom);
                            item.getComponent("Poker.ItemRoom").initItem(itemData);
                            _this.contentListRooms.addChild(item);
                        }
                        _this.scrollListRoom.scrollToTop(0.2);
                    }
                    break;
                case Poker_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker JOIN_GAME_ROOM_BY_ID");
                    }
                    break;
                case Poker_Cmd_1.default.Code.TU_DONG_BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedAutoStart(data);
                        //  cc.log("Poker ReceiveAutoStart res : ", JSON.stringify(res));
                        // {
                        //     "isAutoStart": true,
                        //     "timeAutoStart": 5
                        // }
                        _this.FxMeCardName.active = false;
                        _this.isFolded = false;
                        if (res.isAutoStart) {
                            _this.resetCenterCards();
                            _this.resetHubChips();
                            _this.startWaittingCountDown(res.timeAutoStart);
                            _this.btnBet.active = false;
                            _this.btnOpenCard.active = false;
                            _this.FxDealer.setAnimation(0, "cho", true);
                            _this.matchPot.active = false;
                            _this.labelMatchPot.string = "0";
                            _this.currentMatchPotValue = 0;
                            _this.currentCard = [];
                            _this.currentCenterCard = [];
                            _this.currentPrivateCardList = [];
                            _this.currentMeBet = 0;
                            _this.lastMeBet = 0;
                            _this.currentMaxBet = 0;
                            _this.currentRaiseMin = 0;
                            _this.currentRaiseStep = 0;
                            _this.currentRaiseValue = 0;
                            _this.resetPlayersPlaying();
                            _this.FxDealer.setAnimation(0, "cho", true);
                        }
                    }
                    break;
                case Poker_Cmd_1.default.Code.MOI_DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedMoiDatCuoc(data);
                        //  cc.log("Poker ReceivedMoiDatCuoc res : ", JSON.stringify(res));
                        // {
                        //     "timeDatCuoc": 20
                        //   }
                        _this.startBettingCountDown(res.timeDatCuoc);
                        _this.arrBetValue = [];
                        _this.matchPot.active = true;
                        _this.currentMatchPotValue = 0;
                        _this.labelMatchPot.string = "0";
                        for (var index = 0; index < 4; index++) {
                            _this.arrBetValue.push(_this.currentRoomBet * (index + 1));
                            _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin(_this.currentRoomBet * (4 - index));
                        }
                        // set bet default
                        for (var index = 0; index < configPlayer.length; index++) {
                            if (index !== _this.seatOwner
                                && !configPlayer[index].isViewer
                                && configPlayer[index].playerId !== -1) {
                                //  cc.log("Poker ReceivedMoiDatCuoc index : ", index);
                                _this.getPlayerHouse(index).setBet(_this.currentRoomBet);
                                _this.getPlayerHouse(index).addChips();
                                if (index != 0) { // k ke cua, danh bien duoc len chinh minh
                                    _this.getPlayerHouse(index).setupBetValue(_this.currentRoomBet);
                                }
                            }
                        }
                        // {
                        //     seatId: 0,
                        //     playerId: -1,
                        //     playerPos: -1,
                        //     isViewer: true
                        // }
                        if (_this.seatOwner == 0) { // Me la Chuong -> K dc bet va k dc vao ga
                            _this.btnOpenCard.active = false;
                            _this.btnBet.active = false;
                            _this.FxDealer.setAnimation(0, "cho", true);
                        }
                        else {
                            _this.btnBet.active = true;
                            _this.btnOpenCard.active = false;
                            _this.FxDealer.setAnimation(0, "noti", true);
                            _this.setupBet();
                            //  cc.log("Poker MOI_DAT_CUOC this.arrBetValue : ", this.arrBetValue);
                        }
                        _this.numCardOpened = 0;
                    }
                    break;
                case Poker_Cmd_1.default.Code.CHEAT_CARDS:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker CHEAT_CARDS");
                    }
                    break;
                case Poker_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker DANG_KY_CHOI_TIEP");
                    }
                    break;
                case Poker_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker UPDATE_OWNER_ROOM");
                    }
                    break;
                case Poker_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedKickOff(data);
                        //  cc.log("Poker ReceivedKickOff res : ", JSON.stringify(res));
                    }
                    break;
                case Poker_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Poker NOTIFY_USER_GET_JACKPOT");
                    }
                    break;
                case Poker_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Poker_Cmd_1.default.ReceivedChatRoom(data);
                        //  cc.log("Poker CHAT_ROOM res : ", JSON.stringify(res));
                        // {
                        //     "chair": 0,
                        //     "isIcon": true,
                        //     "content": "6",
                        //     "nickname": "chaoae99"
                        //   }
                        // {
                        //     "chair": 0,
                        //     "isIcon": false,
                        //     "content": "lalal",
                        //     "nickname": "chaoae99"
                        //   }
                        var chair = res["chair"];
                        var isIcon = res["isIcon"];
                        var content = res["content"];
                        if (isIcon) {
                            // Chat Icon
                            var seatId_13 = _this.findPlayerSeatByPos(chair);
                            if (seatId_13 != -1) {
                                _this.getPlayerHouse(seatId_13).showChatEmotion(content);
                            }
                        }
                        else {
                            // Chat Msg
                            var seatId_14 = _this.findPlayerSeatByPos(chair);
                            if (seatId_14 != -1) {
                                _this.getPlayerHouse(seatId_14).showChatMsg(content);
                            }
                        }
                    }
                    break;
                default:
                    //  cc.log("Poker Unknown --inpacket.getCmdId(): " + inpacket.getCmdId());
                    break;
            }
        }, this);
    };
    // request
    PokerController.prototype.actionLeaveRoom = function () {
        //  cc.log("Poker actionLeaveRoom");
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.CmdSendRequestLeaveGame());
    };
    PokerController.prototype.actionOpenCard = function () {
        //  cc.log("Poker actionOpenCard");
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendShowCard());
        this.btnOpenCard.active = false;
    };
    PokerController.prototype.actionSendVaoGa = function () {
        //  cc.log("Poker actionSendVaoGa");
    };
    PokerController.prototype.increaseBetValue = function () {
        if (this.currentBetSelectedIndex == (this.arrBetValue.length - 1)) {
        }
        else {
            this.currentBetSelectedIndex += 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    PokerController.prototype.decreaseBetValue = function () {
        if (this.currentBetSelectedIndex == 0) {
        }
        else {
            this.currentBetSelectedIndex -= 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    PokerController.prototype.actionAll_In = function () {
        //  cc.log("Poker actionAll_In");
        this.btnBet.active = false;
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 0, 0, 1, 0));
    };
    PokerController.prototype.actionRaise = function () {
        //  cc.log("Poker actionRaise");
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        var rawMeGold = this.getPlayerHouse(0).userGold.string.replace(/\./g, "");
        var currentMeMoney = parseInt(rawMeGold);
        //  cc.log("Poker actionRaise currentMeMoney : ", currentMeMoney);
        //  cc.log("Poker actionRaise arrBetValue : ", this.arrBetValue);
        //  cc.log("Poker actionRaise currentBetSelectedIndex : ", this.currentBetSelectedIndex);
        var betValue = Math.min(this.arrBetValue[this.currentBetSelectedIndex], currentMeMoney);
        // let betValue = Math.min(this.currentRaiseValue - this.currentMeBet, currentMeMoney);
        //  cc.log("Poker actionRaise betValue : ", betValue);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 0, 0, 0, betValue));
    };
    PokerController.prototype.actionCheck = function () {
        //  cc.log("Poker actionCheck");
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 1, 0, 0, 0));
    };
    PokerController.prototype.actionCall = function () {
        //  cc.log("Poker actionCall");
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(0, 0, 1, 0, 0));
    };
    PokerController.prototype.actionFold = function () {
        //  cc.log("Poker actionFold");
        this.btnBet.active = false;
        this.FxDealer.setAnimation(0, "cho", true);
        Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendTakeTurn(1, 0, 0, 0, 0));
    };
    PokerController.prototype.actionBuyIn = function () {
        //  cc.log("Poker actionBuyIn");
        //  cc.log("Poker input : ", this.edtBuyIn.string);
        var event = this.edtBuyIn.string;
        if (event.length > 0) {
            var rawNumber = "";
            for (var index = 0; index < event.length; index++) {
                if (event[index] == "0"
                    || event[index] == "1"
                    || event[index] == "2"
                    || event[index] == "3"
                    || event[index] == "4"
                    || event[index] == "5"
                    || event[index] == "6"
                    || event[index] == "7"
                    || event[index] == "8"
                    || event[index] == "9") {
                    rawNumber += event[index];
                }
            }
            //  cc.log("Poker actionBuyIn rawNumber : ", rawNumber);
            if (rawNumber !== "") {
                if (Configs_1.default.Login.Coin < this.maxCashIn) {
                    this.maxCashIn = Configs_1.default.Login.Coin;
                }
                if (parseInt(rawNumber) < this.minCashIn * this.currentRoomBet) {
                    App_1.default.instance.alertDialog.showMsg("Số tiền Buy In phải lớn hơn " + Utils_1.default.formatNumber(this.minCashIn * this.currentRoomBet));
                    return;
                }
                if (parseInt(rawNumber) > this.maxCashIn * this.currentRoomBet) {
                    App_1.default.instance.alertDialog.showMsg("Số tiền Buy In phải nhỏ hơn " + Utils_1.default.formatNumber(this.maxCashIn * this.currentRoomBet));
                    return;
                }
                //  cc.log("Poker actionBuyIn Cash In : ", parseInt(rawNumber));
                if (this.toggleAutoBuyIn.isChecked) {
                    Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendBuyIn(parseInt(rawNumber), 1));
                }
                else {
                    Poker_NetworkClient_1.default.getInstance().send(new Poker_Cmd_1.default.SendBuyIn(parseInt(rawNumber), 0));
                }
                App_1.default.instance.showLoading(true);
                this.closePopupBuyIn();
            }
            else {
                App_1.default.instance.alertDialog.showMsg("Số tiền không hợp lệ.");
            }
        }
    };
    // State
    PokerController.prototype.initConfigPlayer = function () {
        configPlayer = [];
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
            configPlayer.push({
                seatId: index,
                playerId: -1,
                playerPos: -1,
                isViewer: true
            });
        }
        //  cc.log("Poker configPlayer : ", configPlayer);
    };
    PokerController.prototype.resetCenterCards = function () {
        for (var index = 0; index < 5; index++) {
            this.cardsCenter.children[index].position = cc.v2(0, 100);
            this.cardsCenter.children[index].scale = 0;
            this.cardsCenter.children[index].color = cc.Color.WHITE;
        }
    };
    PokerController.prototype.resetPlayersPlaying = function () {
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).resetMatchHistory();
        }
    };
    PokerController.prototype.resetAllPlayerCountdown = function () {
        for (var index = 0; index < Poker_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).hidePlayCountdown();
        }
    };
    // handle Game Players
    PokerController.prototype.getCardsName = function (boBaiId) {
        var name = "";
        switch (boBaiId) {
            case Poker_Cmd_1.default.Code.EG_SANH_VUA:
                name = "Sảnh Vua";
                break;
            case Poker_Cmd_1.default.Code.EG_THUNG_PHA_SANH:
                name = "Thùng Phá Sảnh";
                break;
            case Poker_Cmd_1.default.Code.EG_TU_QUY:
                name = "Tứ Quý";
                break;
            case Poker_Cmd_1.default.Code.EG_CU_LU:
                name = "Cù Lũ";
                break;
            case Poker_Cmd_1.default.Code.EG_THUNG:
                name = "Thùng";
                break;
            case Poker_Cmd_1.default.Code.EG_SANH:
                name = "Sảnh";
                break;
            case Poker_Cmd_1.default.Code.EG_XAM_CO:
                name = "Xám Cô";
                break;
            case Poker_Cmd_1.default.Code.EG_HAI_DOI:
                name = "Hai Đôi";
                break;
            case Poker_Cmd_1.default.Code.EG_DOI:
                name = "Đôi";
                break;
            case Poker_Cmd_1.default.Code.EG_MAU_THAU:
                name = "Mậu Thầu";
                break;
            default:
                break;
        }
        return name;
    };
    PokerController.prototype.setupSeatPlayer = function (seatId, playerInfo) {
        //  cc.log("Poker setupSeatPlayer playerInfo : ", playerInfo);
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.currentMoney);
    };
    PokerController.prototype.findPlayerSeatByUid = function (uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerId === uid) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    PokerController.prototype.findPlayerPosBySeat = function (seat) {
        return configPlayer[seat].playerPos;
    };
    PokerController.prototype.findPlayerSeatByPos = function (pos) {
        if (pos == -1) {
            return -1;
        }
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerPos === pos) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    PokerController.prototype.getPlayerHouse = function (seatId) {
        return this.groupPlayers.children[seatId].getComponent("Poker.Player");
    };
    PokerController.prototype.getNumPlayers = function () {
        //  cc.log("playerPosEntry configPlayer : ", configPlayer);
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) {
            //  cc.log("playerPosEntry playerId : ", configPlayer[index].playerId);
            //  cc.log("playerPosEntry isViewer : ", configPlayer[index].isViewer);
            //  cc.log("-------------------------------------");
            if (configPlayer[index].playerId !== -1 && !configPlayer[index].isViewer) {
                playerPosEntry.push(configPlayer[index].seatId);
                //  cc.log("playerPosEntry seatId : ", configPlayer[index].seatId);
            }
        }
        //  cc.log("playerPosEntry : ", playerPosEntry);
        return playerPosEntry;
    };
    PokerController.prototype.update = function (dt) {
    };
    var PokerController_1;
    PokerController.instance = null;
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "UI_ChooseRoom", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelNickName", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelCoin", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "contentListRooms", void 0);
    __decorate([
        property(cc.Prefab)
    ], PokerController.prototype, "prefabItemRoom", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PokerController.prototype, "scrollListRoom", void 0);
    __decorate([
        property(cc.EditBox)
    ], PokerController.prototype, "edtFindRoom", void 0);
    __decorate([
        property(cc.Toggle)
    ], PokerController.prototype, "btnHideRoomFull", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "UI_Playing", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "meCards", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "groupPlayers", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PokerController.prototype, "spriteCards", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PokerController.prototype, "spriteCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "matchPot", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelMatchPot", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "cardsDeal", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "cardsCenter", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "btnBet", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "btnOpenCard", void 0);
    __decorate([
        property(cc.Button)
    ], PokerController.prototype, "btnLeaveRoom", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "hubChips", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelRoomBet", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "actionBetting", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "betChooseValue", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "betChooseValueTarget", void 0);
    __decorate([
        property(sp.Skeleton)
    ], PokerController.prototype, "FxDealer", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "btnActions", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "popupBuyIn", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelBuyInMin", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelBuyInMax", void 0);
    __decorate([
        property(cc.EditBox)
    ], PokerController.prototype, "edtBuyIn", void 0);
    __decorate([
        property(cc.Toggle)
    ], PokerController.prototype, "toggleAutoBuyIn", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "FxMeCardName", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PokerController.prototype, "spriteCardNames", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "notifyTimeStart", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "notifyTimeEnd", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "notifyTimeBet", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.EditBox)
    ], PokerController.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "popupNodity", void 0);
    __decorate([
        property(cc.Label)
    ], PokerController.prototype, "labelNotifyContent", void 0);
    __decorate([
        property(cc.Node)
    ], PokerController.prototype, "popupGuide", void 0);
    PokerController = PokerController_1 = __decorate([
        ccclass
    ], PokerController);
    return PokerController;
}(cc.Component));
exports.default = PokerController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUG9rZXJcXFBva2VyU2NyaXB0XFxQb2tlci5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCx5Q0FBOEI7QUFFOUIsNkRBQXVEO0FBQ3ZELG1EQUF5QztBQUN6QyxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSw2RkFBZ0Y7QUFDaEYsbUZBQTZFO0FBRTdFLElBQUksWUFBWSxHQUFHLEVBQUcsWUFBWTtBQUM5QixJQUFJO0FBQ0osaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLElBQUk7Q0FDUCxDQUFDO0FBRUYsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUc7SUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxD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Q0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQ0FDbEYsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQ0FDbEYsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQ0FDckY7cUNBQU07b0NBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQ0FDL0UsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQ0FDL0UsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQ0FDbEYsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztv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LENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0REFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzREQUNZO0lBSXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNZO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5REFDVztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUF0R1YsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW81RW5DO0lBQUQsc0JBQUM7Q0FwNUVELEFBbzVFQyxDQXA1RTRDLEVBQUUsQ0FBQyxTQUFTLEdBbzVFeEQ7a0JBcDVFb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vUG9rZXIuQ21kXCI7XG5cbmltcG9ydCBQb2tlck5ldHdvcmtDbGllbnQgZnJvbSBcIi4vUG9rZXIuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IENhcmRVdGlscyBmcm9tIFwiLi9Qb2tlci5DYXJkVXRpbFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgY21kTmV0d29yayBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuQ21kXCI7XG5cbnZhciBjb25maWdQbGF5ZXIgPSBbICAvLyA5IFBsYXllcnNcbiAgICAvLyB7XG4gICAgLy8gICAgIHNlYXRJZDogMCxcbiAgICAvLyAgICAgcGxheWVySWQ6IC0xLFxuICAgIC8vICAgICBwbGF5ZXJQb3M6IC0xLFxuICAgIC8vICAgICBpc1ZpZXdlcjogdHJ1ZVxuICAgIC8vIH1cbl07XG5cbi8vIGRlZmF1bHRQbGF5ZXJQb3NbMCAtPiA4XVswXSA9IHBsYXllcl9wb3Mgb2YgbWVcbmxldCBkZWZhdWx0UGxheWVyUG9zID0gWyAvLyA5IHBsYXllcnNcbiAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF0sXG4gICAgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDBdLFxuICAgIFsyLCAzLCA0LCA1LCA2LCA3LCA4LCAwLCAxXSxcbiAgICBbMywgNCwgNSwgNiwgNywgOCwgMCwgMSwgMl0sXG4gICAgWzQsIDUsIDYsIDcsIDgsIDAsIDEsIDIsIDNdLFxuICAgIFs1LCA2LCA3LCA4LCAwLCAxLCAyLCAzLCA0XSxcbiAgICBbNiwgNywgOCwgMCwgMSwgMiwgMywgNCwgNV0sXG4gICAgWzcsIDgsIDAsIDEsIDIsIDMsIDQsIDUsIDZdLFxuICAgIFs4LCAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3XSxcbl1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBva2VyQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBQb2tlckNvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgLy8gVUkgUm9vbXNcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9DaG9vc2VSb29tOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxOaWNrTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50TGlzdFJvb21zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZWZhYkl0ZW1Sb29tOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjcm9sbExpc3RSb29tOiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRGaW5kUm9vbTogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICBidG5IaWRlUm9vbUZ1bGw6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgaXNJbml0ZWRVSVJvb20gPSBmYWxzZTtcblxuICAgIC8vIFVJIFBsYXlpbmdcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9QbGF5aW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBtZUNhcmRzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBncm91cFBsYXllcnM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVDYXJkczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVDYXJkQmFjazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1hdGNoUG90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxNYXRjaFBvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRzRGVhbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNDZW50ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkJldDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuT3BlbkNhcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuTGVhdmVSb29tOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGh1YkNoaXBzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxSb29tSWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxSb29tQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uQmV0dGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmV0Q2hvb3NlVmFsdWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJldENob29zZVZhbHVlVGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgRnhEZWFsZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5BY3Rpb25zOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwQnV5SW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbEJ1eUluTWluOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQnV5SW5NYXg6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRCdXlJbjogY2MuRWRpdEJveCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVBdXRvQnV5SW46IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBGeE1lQ2FyZE5hbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNwcml0ZUNhcmROYW1lczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgLy8gTm90aWZ5XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm90aWZ5VGltZVN0YXJ0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpZnlUaW1lRW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpZnlUaW1lQmV0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIFVJIENoYXRcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9DaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRDaGF0SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgLy8gUG9wdXBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cE5vZGl0eTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsTm90aWZ5Q29udGVudDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBzZWF0T3duZXIgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudFJvb21CZXQgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBtaW51dGVzID0gbnVsbDtcbiAgICBwcml2YXRlIHNlY29uZHMgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIHRpbWVBdXRvU3RhcnQgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZUVuZCA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lQmV0ID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVUaGlua2luZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbFdhaXR0aW5nID0gbnVsbDtcbiAgICBwcml2YXRlIGludGVydmFsRW5kID0gbnVsbDtcbiAgICBwcml2YXRlIGludGVydmFsQmV0dGluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbFRoaW5raW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgY3VycmVudENhcmQgPSBudWxsO1xuICAgIHByaXZhdGUgY3VycmVudENlbnRlckNhcmQgPSBudWxsO1xuICAgIHByaXZhdGUgbnVtQ2FyZE9wZW5lZCA9IDA7XG5cbiAgICAvLyBiZXRcbiAgICBwcml2YXRlIGFyckJldFZhbHVlID0gW107XG4gICAgcHJpdmF0ZSBhcnJCZXRQb3MgPSBbLTE3MCwgLTg1LCAwLCA4NSwgMTcwXTtcbiAgICBwcml2YXRlIGN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ID0gMDtcblxuICAgIHByaXZhdGUgY3VycmVudE1hdGNoUG90VmFsdWUgPSAwO1xuICAgIHByaXZhdGUgdGltZW91dENoaWFCYWlEb25lID0gbnVsbDtcblxuICAgIHByaXZhdGUgbWluQ2FzaEluID0gbnVsbDtcbiAgICBwcml2YXRlIG1heENhc2hJbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRNYXhCZXQgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudFJhaXNlTWluID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRSYWlzZVZhbHVlID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRSYWlzZVN0ZXAgPSAwO1xuICAgIHByaXZhdGUgY3VycmVudE1lQmV0ID0gMDtcbiAgICBwcml2YXRlIGxhc3RNZUJldCA9IDA7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRQcml2YXRlQ2FyZExpc3QgPSBbXTtcblxuICAgIHByaXZhdGUgcm9vbU1pbkJ1eUluID0gMDtcbiAgICBwcml2YXRlIHJvb21NYXhCdXlJbiA9IDA7XG5cbiAgICBwcml2YXRlIGlzRm9sZGVkID0gZmFsc2U7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgUG9rZXJDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcblxuICAgICAgICB0aGlzLnNlYXRPd25lciA9IC0xO1xuXG4gICAgICAgIHRoaXMuaW5pdENvbmZpZ1BsYXllcigpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnNob3dVSVJvb21zKCk7XG5cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcga+G6v3QgbuG7kWkgdOG7m2kgc2VydmVyLi4uXCIpO1xuICAgICAgICBQb2tlck5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcgxJFhbmcgxJHEg25nIG5o4bqtcC4uLlwiKTtcbiAgICAgICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZE5ldHdvcmsuU2VuZExvZ2luKENvbmZpZ3MuTG9naW4uTmlja25hbWUsIENvbmZpZ3MuTG9naW4uQWNjZXNzVG9rZW4pKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmxvYWRTY2VuZShcIkxvYmJ5XCIpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgUG9rZXJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8vIFJlcXVlc3QgVUkgUm9vbVxuICAgIGpvaW5Sb29tKGluZm8pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGpvaW5Sb29tIHJvb21JbmZvIDogXCIsIGluZm8pO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kSm9pblJvb21CeUlkKGluZm9bXCJpZFwiXSkpO1xuICAgIH1cblxuICAgIHJlZmVzaExpc3RSb29tKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kR2V0TGlzdFJvb20oKSk7XG4gICAgfVxuXG4gICAgZmluZFJvb21JZCgpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGZpbmRSb29tSWQgaWQgOiBcIiwgdGhpcy5lZHRGaW5kUm9vbS5zdHJpbmcpO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZWR0RmluZFJvb20uc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGlkRmluZCA9IHBhcnNlSW50KHRleHQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJQb2tlci5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgICAgICBpZiAocm9vbUl0ZW0ucm9vbUluZm9bXCJpZFwiXSAhPSBpZEZpbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlUm9vbUZ1bGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmJ0bkhpZGVSb29tRnVsbC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCByb29tSXRlbSA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uZ2V0Q29tcG9uZW50KFwiUG9rZXIuSXRlbVJvb21cIik7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdID09IHJvb21JdGVtLnJvb21JbmZvW1wibWF4VXNlclBlclJvb21cIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VUlSb29tcygpIHtcbiAgICAgICAgdGhpcy5VSV9DaG9vc2VSb29tLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGVkVUlSb29tKSB7XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pc0luaXRlZFVJUm9vbSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsTmlja05hbWUuc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhYmVsQ29pbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcblxuICAgICAgICAgICAgdGhpcy5zZXR1cExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVVJUm9vbSgpIHtcbiAgICAgICAgdGhpcy5VSV9DaG9vc2VSb29tLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVJvb20oKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBjcmVhdGVSb29tXCIpO1xuICAgIH1cblxuICAgIHBsYXlpbmdOb3coKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBwbGF5aW5nTm93XCIpO1xuICAgICAgICBsZXQgYXJyUm9vbU9rTW9uZXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgcm9vbUl0ZW0gPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChcIlBva2VyLkl0ZW1Sb29tXCIpO1xuICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1wicmVxdWlyZWRNb25leVwiXSA8IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgICAgIGFyclJvb21Pa01vbmV5LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHBsYXlpbmdOb3cgYXJyUm9vbU9rTW9uZXkgOiBcIiwgYXJyUm9vbU9rTW9uZXkpO1xuXG4gICAgICAgIGlmIChhcnJSb29tT2tNb25leS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcm9vbUNyb3dlZCA9IGFyclJvb21Pa01vbmV5WzBdO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHBsYXlpbmdOb3cgcm9vbUNyb3dlZCBzdGFydCA6IFwiLCByb29tQ3Jvd2VkKTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJSb29tT2tNb25leS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUl0ZW0gPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5bYXJyUm9vbU9rTW9uZXlbaW5kZXhdXS5nZXRDb21wb25lbnQoXCJQb2tlci5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUl0ZW1Dcm93ZWQgPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5bcm9vbUNyb3dlZF0uZ2V0Q29tcG9uZW50KFwiUG9rZXIuSXRlbVJvb21cIik7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHBsYXlpbmdOb3cgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBwbGF5aW5nTm93IHJvb21JdGVtIDogXCIsIHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgcGxheWluZ05vdyByb29tSXRlbUNyb3dlZCA6IFwiLCByb29tSXRlbUNyb3dlZC5yb29tSW5mb1tcInVzZXJDb3VudFwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdID4gcm9vbUl0ZW1Dcm93ZWQucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vbUNyb3dlZCA9IGFyclJvb21Pa01vbmV5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHBsYXlpbmdOb3cgcm9vbUNyb3dlZCB1cGRhdGUgOiBcIiwgcm9vbUNyb3dlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHBsYXlpbmdOb3cgcm9vbUNyb3dlZCBlbmQgOiBcIiwgcm9vbUNyb3dlZCk7XG4gICAgICAgICAgICBsZXQgcm9vbUNob29zZWQgPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5bcm9vbUNyb3dlZF0uZ2V0Q29tcG9uZW50KFwiUG9rZXIuSXRlbVJvb21cIik7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgcGxheWluZ05vdyByb29tQ3Jvd2VkIGVuZCByb29tSW5mbyA6IFwiLCByb29tQ2hvb3NlZC5yb29tSW5mbyk7XG4gICAgICAgICAgICB0aGlzLmpvaW5Sb29tKHJvb21DaG9vc2VkLnJvb21JbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiS2jDtG5nIMSR4bunIHRp4buBbiB0aGFtIGdpYVxcbmLhuqV0IGvhu7MgcGjDsm5nIG7DoG8gIVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYXRcbiAgICBzaG93VUlDaGF0KCkge1xuICAgICAgICB0aGlzLlVJX0NoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5VSV9DaGF0LnggPSAxMDAwO1xuICAgICAgICB0aGlzLlVJX0NoYXQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5VSV9DaGF0LnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjI1LCA1NDYsIDApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xvc2VVSUNoYXQoKSB7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC4yNSwgMTAwMCwgMClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjaGF0RW1vdGlvbihldmVudCwgaWQpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGNoYXRFbW90aW9uIGlkIDogXCIsIGlkKTtcbiAgICAgICAgUG9rZXJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGF0Um9vbSgxLCBpZCkpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgfVxuXG4gICAgY2hhdE1zZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgUG9rZXJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGF0Um9vbSgwLCB0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcpKTtcbiAgICAgICAgICAgIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UG9wdXBHdWlkZSgpIHtcbiAgICAgICAgdGhpcy5wb3B1cEd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cEd1aWRlKCkge1xuICAgICAgICB0aGlzLnBvcHVwR3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYmFja1RvTG9iYnkoKSB7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cbiAgICAvLyBQbGF5aW5nXG4gICAgc2hvd1VJUGxheWluZygpIHtcbiAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuRnhEZWFsZXIuc2V0QW5pbWF0aW9uKDAsIFwiY2hvXCIsIHRydWUpO1xuICAgIH1cblxuICAgIGNsb3NlVUlQbGF5aW5nKCkge1xuICAgICAgICB0aGlzLmFjdGlvbkxlYXZlUm9vbSgpO1xuICAgIH1cblxuICAgIHNldHVwTWF0Y2goZGF0YTogY21kLlJlY2VpdmVkSm9pblJvb21TdWNjZWVkKSB7XG4gICAgICAgIHRoaXMuc2hvd1VJUGxheWluZygpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGRhdGEgOiBcIiwgZGF0YSk7XG5cbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgICAgXCJteUNoYWlyXCI6IDAsXG4gICAgICAgIC8vICAgICBcIm1vbmV5QmV0XCI6IDEyODAwMCxcbiAgICAgICAgLy8gICAgIFwicm9vbU93bmVyXCI6IDAsXG4gICAgICAgIC8vICAgICBcInJvb21JZFwiOiAyMzgwOCxcbiAgICAgICAgLy8gICAgIFwiZ2FtZUlkXCI6IDEwMDYwOSxcbiAgICAgICAgLy8gICAgIFwibW9uZXlUeXBlXCI6IDAsXG4gICAgICAgIC8vICAgICBcInJ1bGVcIjogMCxcbiAgICAgICAgLy8gICAgIFwicGxheWVyU2l6ZVwiOiAwLFxuICAgICAgICAvLyAgICAgXCJwbGF5ZXJTdGF0dXNcIjogW10sXG4gICAgICAgIC8vICAgICBcInBsYXllckluZm9zXCI6IFtdLFxuICAgICAgICAvLyAgICAgXCJoYW5kQ2FyZFNpemVTaXplXCI6IDAsXG4gICAgICAgIC8vICAgICBcImhhbmRDYXJkU2l6ZUxpc3RcIjogW10sXG4gICAgICAgIC8vICAgICBcIm1pbkJ1eUluVGlMZVwiOiAwLFxuICAgICAgICAvLyAgICAgXCJtYXhCdXlJblRpTGVcIjogMFxuICAgICAgICAvLyAgIH1cblxuICAgICAgICBsZXQgbXlDaGFpciA9IGRhdGFbXCJteUNoYWlyXCJdO1xuICAgICAgICBsZXQgbW9uZXlCZXQgPSBkYXRhW1wibW9uZXlCZXRcIl07XG4gICAgICAgIGxldCByb29tT3duZXIgPSBkYXRhW1wicm9vbU93bmVyXCJdO1xuICAgICAgICBsZXQgcm9vbUlkID0gZGF0YVtcInJvb21JZFwiXTtcbiAgICAgICAgbGV0IGdhbWVJZCA9IGRhdGFbXCJnYW1lSWRcIl07XG4gICAgICAgIGxldCBtb25leVR5cGUgPSBkYXRhW1wibW9uZXlUeXBlXCJdO1xuICAgICAgICBsZXQgcnVsZSA9IGRhdGFbXCJydWxlXCJdO1xuICAgICAgICBsZXQgcGxheWVyU2l6ZSA9IGRhdGFbXCJwbGF5ZXJTaXplXCJdO1xuICAgICAgICBsZXQgcGxheWVyU3RhdHVzID0gZGF0YVtcInBsYXllclN0YXR1c1wiXTtcbiAgICAgICAgbGV0IHBsYXllckluZm9zID0gZGF0YVtcInBsYXllckluZm9zXCJdO1xuICAgICAgICBsZXQgaGFuZENhcmRTaXplU2l6ZSA9IGRhdGFbXCJoYW5kQ2FyZFNpemVTaXplXCJdO1xuICAgICAgICBsZXQgaGFuZENhcmRTaXplTGlzdCA9IGRhdGFbXCJoYW5kQ2FyZFNpemVMaXN0XCJdO1xuICAgICAgICBsZXQgbWluQnV5SW5UaUxlID0gZGF0YVtcIm1pbkJ1eUluVGlMZVwiXTtcbiAgICAgICAgbGV0IG1heEJ1eUluVGlMZSA9IGRhdGFbXCJtYXhCdXlJblRpTGVcIl1cblxuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCBteUNoYWlyICA6IFwiLCBteUNoYWlyKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggbW9uZXlCZXQgIDogXCIsIG1vbmV5QmV0KTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggcm9vbU93bmVyICA6IFwiLCByb29tT3duZXIpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCByb29tSWQgIDogXCIsIHJvb21JZCk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGdhbWVJZCAgOiBcIiwgZ2FtZUlkKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggbW9uZXlUeXBlICA6IFwiLCBtb25leVR5cGUpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCBydWxlICA6IFwiLCBydWxlKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggcGxheWVyU2l6ZSAgOiBcIiwgcGxheWVyU2l6ZSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIHBsYXllclN0YXR1cyAgOiBcIiwgcGxheWVyU3RhdHVzKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggcGxheWVySW5mb3MgIDogXCIsIHBsYXllckluZm9zKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggaGFuZENhcmRTaXplU2l6ZSAgOiBcIiwgaGFuZENhcmRTaXplU2l6ZSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGhhbmRDYXJkU2l6ZUxpc3QgIDogXCIsIGhhbmRDYXJkU2l6ZUxpc3QpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCBtaW5CdXlJblRpTGUgIDogXCIsIG1pbkJ1eUluVGlMZSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIG1heEJ1eUluVGlMZSAgOiBcIiwgbWF4QnV5SW5UaUxlKTtcblxuICAgICAgICAvLyBLaWVtIHRyYSwgY2hvbiAxIHRob2lcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSBjbWQuQ29kZS5TVEFURV9KT0lOX1JPT007XG5cbiAgICAgICAgdGhpcy5yb29tTWluQnV5SW4gPSBtaW5CdXlJblRpTGU7XG4gICAgICAgIHRoaXMucm9vbU1heEJ1eUluID0gbWF4QnV5SW5UaUxlO1xuXG4gICAgICAgIHRoaXMubGFiZWxSb29tSWQuc3RyaW5nID0gXCJQT0tFUiAtIFBIw5JORzogXCIgKyByb29tSWQ7XG4gICAgICAgIHRoaXMubGFiZWxSb29tQmV0LnN0cmluZyA9IFwiTeG7qEMgQ8av4buiQzogXCIgKyBVdGlscy5mb3JtYXROdW1iZXIobW9uZXlCZXQpICsgXCIvXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoMiAqIG1vbmV5QmV0KSArIFwiJFwiO1xuICAgICAgICB0aGlzLmN1cnJlbnRSb29tQmV0ID0gbW9uZXlCZXQ7XG5cbiAgICAgICAgdGhpcy5yZXNldENlbnRlckNhcmRzKCk7XG5cbiAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllcklkID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllclBvcyA9IG15Q2hhaXI7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciBNZSA6IFwiLCBjb25maWdQbGF5ZXJbMF0pO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgIDogXCIsIGNvbmZpZ1BsYXllcik7XG5cbiAgICAgICAgdmFyIG51bVBsYXllcnMgPSAwO1xuICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcbiAgICAgICAgdmFyIGFyclBsYXllckluZm8gPSBbXTtcbiAgICAgICAgdmFyIGFyclBsYXllclN0YXR1cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAocGxheWVySW5mb3NbaW5kZXhdLm5pY2tOYW1lICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgbnVtUGxheWVycyArPSAxO1xuICAgICAgICAgICAgICAgIGFyclBsYXllclBvc0V4aXN0LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIGFyclBsYXllckluZm8ucHVzaChwbGF5ZXJJbmZvc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGFyclBsYXllclN0YXR1cy5wdXNoKHBsYXllclN0YXR1c1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIG51bVBsYXllcnMgOiBcIiwgbnVtUGxheWVycyk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGFyclBsYXllclN0YXR1cyA6IFwiLCBhcnJQbGF5ZXJTdGF0dXMpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCBhcnJQbGF5ZXJJbmZvIDogXCIsIGFyclBsYXllckluZm8pO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgc2V0dXBNYXRjaCBhcnJQbGF5ZXJQb3NFeGlzdCA6IFwiLCBhcnJQbGF5ZXJQb3NFeGlzdCk7XG5cbiAgICAgICAgdGhpcy5yZXNldEh1YkNoaXBzKCk7XG4gICAgICAgIHRoaXMuRnhNZUNhcmROYW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkZ4RGVhbGVyLnNldEFuaW1hdGlvbigwLCBcImNob1wiLCB0cnVlKTtcblxuICAgICAgICAvLyBzZXR1cCBjb25maWdQbGF5ZXJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgIGNvbmZpZ1BsYXllclthXS5wbGF5ZXJQb3MgPSBkZWZhdWx0UGxheWVyUG9zW215Q2hhaXJdW2FdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IFN0YXRlIG9mIFNlYXQgOiBZZXMgfCBObyBleGlzdCBQbGF5ZXJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBmaW5kUG9zID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XG5cbiAgICAgICAgICAgIHZhciBzZWF0SWQgPSBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZDtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oKTtcbiAgICAgICAgICAgIGlmIChmaW5kUG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGlzdCBwbGF5ZXIgLT4gU2V0IFBsYXllciBJbmZvXG4gICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwICYmIGFyclBsYXllclN0YXR1c1tmaW5kUG9zXSA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1NJVFRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wdXBCdXlJbihtaW5CdXlJblRpTGUsIG1heEJ1eUluVGlMZSwgbW9uZXlCZXQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhcnJQbGF5ZXJTdGF0dXNbZmluZFBvc10gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19TSVRUSU5HIHx8IGFyclBsYXllclN0YXR1c1tmaW5kUG9zXSA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbc2VhdElkXS5wbGF5ZXJJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFZpZXdlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgYXJyUGxheWVySW5mb1tmaW5kUG9zXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93QnRuSW52aXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldE93bmVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhdE93bmVyID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKHJvb21Pd25lcik7XG4gICAgICAgIGlmIChzZWF0T3duZXIgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRPd25lcikuc2V0T3duZXIodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNlYXRPd25lciA9IHNlYXRPd25lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciA6IFwiLCBjb25maWdQbGF5ZXIpO1xuICAgIH1cblxuXG4gICAgLy8gVGltZSBTdGFydFxuICAgIHN0YXJ0VGhpbmtpbmdDb3VudERvd24oc2VhdElkLCB0dXJuVGltZSkge1xuICAgICAgICB0aGlzLnRpbWVUaGlua2luZyA9IHR1cm5UaW1lO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFRoaW5raW5nKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsVGhpbmtpbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVUaGlua2luZy0tO1xuICAgICAgICAgICAgdmFyIHJhdGUgPSAodGhpcy50aW1lVGhpbmtpbmcgLyB0dXJuVGltZSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wcm9jZXNzVGhpbmtpbmcocmF0ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lVGhpbmtpbmcgPCAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxUaGlua2luZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmhpZGVQbGF5Q291bnRkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEpXG4gICAgfVxuXG4gICAgc3RhcnRXYWl0dGluZ0NvdW50RG93bih0aW1lV2FpdCkge1xuICAgICAgICB0aGlzLnRpbWVBdXRvU3RhcnQgPSB0aW1lV2FpdDtcbiAgICAgICAgdGhpcy5zZXRUaW1lV2FpdHRpbmdDb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lU3RhcnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxXYWl0dGluZyk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lQXV0b1N0YXJ0LS07XG4gICAgICAgICAgICB0aGlzLnNldFRpbWVXYWl0dGluZ0NvdW50RG93bigpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZUF1dG9TdGFydCA8IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBzZXRUaW1lV2FpdHRpbmdDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lQXV0b1N0YXJ0ICUgNjApO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIELhuq90IMSR4bqndSBzYXUgOiBcIiArIHRoaXMuc2Vjb25kcyArIFwicyBcIjtcbiAgICB9XG5cbiAgICAvLyBUaW1lIEVuZFxuICAgIHN0YXJ0RW5kQ291bnREb3duKHRpbWVXYWl0KSB7XG4gICAgICAgIHRoaXMudGltZUVuZCA9IHRpbWVXYWl0O1xuICAgICAgICB0aGlzLnNldFRpbWVFbmRDb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lRW5kLS07XG4gICAgICAgICAgICB0aGlzLnNldFRpbWVFbmRDb3VudERvd24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVFbmQgPCAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBzZXRUaW1lRW5kQ291bnREb3duKCkge1xuICAgICAgICB0aGlzLnNlY29uZHMgPSBNYXRoLmZsb29yKHRoaXMudGltZUVuZCAlIDYwKTtcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgS+G6v3QgdGjDumMgc2F1IDogXCIgKyB0aGlzLnNlY29uZHMgKyBcInMgXCI7XG4gICAgfVxuXG4gICAgLy8gVGltZSBCZXRcbiAgICBzdGFydEJldHRpbmdDb3VudERvd24odHVyblRpbWUpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHN0YXJ0QmV0dGluZ0NvdW50RG93biB0dXJuVGltZSA6IFwiLCB0dXJuVGltZSk7XG4gICAgICAgIHRoaXMudGltZUJldCA9IHR1cm5UaW1lO1xuICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzQmV0dGluZygxKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxCZXR0aW5nKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsQmV0dGluZyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZUJldC0tO1xuICAgICAgICAgICAgdmFyIHJhdGUgPSAodGhpcy50aW1lQmV0IC8gdHVyblRpbWUpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NCZXR0aW5nKHJhdGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZUJldCA8IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEJldHRpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0JldHRpbmcocmF0ZSkge1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgcHJvY2Vzc0JldHRpbmcgcmF0ZSA6IFwiLCByYXRlKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHByb2Nlc3NCZXR0aW5nIGZpbGxSYW5nZSA6IFwiLCB0aGlzLmFjdGlvbkJldHRpbmcuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlKTtcbiAgICAgICAgdGhpcy5hY3Rpb25CZXR0aW5nLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgLy8gT3BlbiBNZSBDYXJkXG4gICAgb3Blbk1lQ2FyZChldmVudCwgaXRlbUlkKSB7XG4gICAgICAgIC8vIE9wZW4gTWUgY2FyZHNcbiAgICAgICAgbGV0IGNhcmRQb3MgPSBwYXJzZUludChpdGVtSWQpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgb3Blbk1lQ2FyZCBjYXJkUG9zIDogXCIsIGNhcmRQb3MpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgb3Blbk1lQ2FyZCBjdXJyZW50Q2FyZCA6IFwiLCB0aGlzLmN1cnJlbnRDYXJkKTtcblxuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnByZXBhcmVDYXJkUmVhbChjYXJkUG9zKTtcbiAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZCh0aGlzLmN1cnJlbnRDYXJkW2NhcmRQb3NdKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS50cmFuc2Zvcm1Ub0NhcmRSZWFsKGNhcmRQb3MsIHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXSk7XG5cbiAgICAgICAgdGhpcy5udW1DYXJkT3BlbmVkICs9IDE7XG4gICAgICAgIGlmICh0aGlzLm51bUNhcmRPcGVuZWQgPT0gMykge1xuICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLkZ4RGVhbGVyLnNldEFuaW1hdGlvbigwLCBcImNob1wiLCB0cnVlKTtcblxuICAgICAgICAgICAgbGV0IHNjb3JlID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMzsgYSsrKSB7XG4gICAgICAgICAgICAgICAgc2NvcmUgKz0gQ2FyZFV0aWxzLmdldERpZW1CeUlkKHRoaXMuY3VycmVudENhcmRbYV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNjb3JlID4gMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNob3dDYXJkTmFtZSgoc2NvcmUgJSAxMCkgKyBcIiDEkGnhu4NtXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNob3dDYXJkTmFtZShzY29yZSArIFwiIMSQaeG7g21cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkucmVzZXRDYXJkUmVhZHkoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlQ2hpcHNUb0h1Yk5vdyhpbmRleCkge1xuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWzIgKiBpbmRleF0ucG9zaXRpb24gPSBjYy52MigyNSwgODApO1xuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWzIgKiBpbmRleF0uc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWygyICogaW5kZXgpICsgMV0ucG9zaXRpb24gPSBjYy52MigyNSwgODApO1xuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWygyICogaW5kZXgpICsgMV0uc2NhbGUgPSAwO1xuICAgIH1cblxuICAgIGZ4TW92ZUNoaXBzKGNoaXBzLCBkZWxheSwgdG9YLCB0b1kpIHtcbiAgICAgICAgY2hpcHMucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKGRlbGF5KSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAsIDEsIDEpLFxuICAgICAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC44LCB0b1gsIHRvWSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC44LCAwLCAwKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZXNldEh1YkNoaXBzKCkge1xuICAgICAgICB2YXIgYXJyRnJvbVggPSBbNzAsIDI4MCwgMjgwLCAyNjAsIDEwMCwgLTI2MCwgLTM3NSwgLTM2MF07XG4gICAgICAgIHZhciBhcnJGcm9tWSA9IFstMTk1LCAtMTUwLCAtNTUsIDcwLCA5MCwgODUsIC0zMCwgLTE1NV07XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIGluZGV4XS5wb3NpdGlvbiA9IGNjLnYyKGFyckZyb21YW2luZGV4XSwgYXJyRnJvbVlbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bKDIgKiBpbmRleCkgKyAxXS5wb3NpdGlvbiA9IGNjLnYyKGFyckZyb21YW2luZGV4XSwgYXJyRnJvbVlbaW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxNjsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEJldCgpIHtcbiAgICAgICAgLy8gYXJyQmV0VmFsdWVcbiAgICAgICAgdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWVUYXJnZXQueSA9IHRoaXMuYXJyQmV0UG9zW3RoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXhdO1xuICAgIH1cblxuICAgIHNob3dCdG5SYWlzZShzdGF0ZSkge1xuICAgICAgICB0aGlzLmJ0bkFjdGlvbnMuY2hpbGRyZW5bMF0uYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2hvd0J0bkNoZWNrKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuYnRuQWN0aW9ucy5jaGlsZHJlblsxXS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93QnRuQ2FsbChzdGF0ZSkge1xuICAgICAgICB0aGlzLmJ0bkFjdGlvbnMuY2hpbGRyZW5bMl0uYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcmVzZXRCdG5BY3Rpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5idG5BY3Rpb25zLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1BvcHVwQnV5SW4obWluLCBtYXgsIGJldCkge1xuICAgICAgICB0aGlzLm1pbkNhc2hJbiA9IG1pbjtcbiAgICAgICAgdGhpcy5tYXhDYXNoSW4gPSBtYXg7XG4gICAgICAgIHRoaXMucG9wdXBCdXlJbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsQnV5SW5NaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldCAqIG1pbik7XG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPiBiZXQgKiBtYXgpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWxCdXlJbk1heC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoYmV0ICogbWF4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWxCdXlJbk1heC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoQ29uZmlncy5Mb2dpbi5Db2luKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVkdEJ1eUluLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMudG9nZ2xlQXV0b0J1eUluLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cEJ1eUluKCkge1xuICAgICAgICB0aGlzLnBvcHVwQnV5SW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGV4dENoYW5nZShldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHJhd051bWJlciA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50W2luZGV4XSA9PSBcIjBcIlxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudFtpbmRleF0gPT0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiMlwiXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjNcIlxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudFtpbmRleF0gPT0gXCI0XCJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjZcIlxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudFtpbmRleF0gPT0gXCI3XCJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiOFwiXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjlcIikge1xuICAgICAgICAgICAgICAgICAgICByYXdOdW1iZXIgKz0gZXZlbnRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBvblRleHRDaGFuZ2UgcmF3TnVtYmVyIDogXCIsIHJhd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmF3TnVtYmVyICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZHRCdXlJbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocGFyc2VJbnQocmF3TnVtYmVyKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWR0QnV5SW4uc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHNob3cgQ2VudGVyIENhcmRzXG4gICAgc2hvd0FsbENlbnRlckNhcmRzKGNlbnRlckNhcmRzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENlbnRlckNhcmQgPSBjZW50ZXJDYXJkcztcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNlbnRlckNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZChjZW50ZXJDYXJkc1tpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlbltpbmRleF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRzW3Nwcml0ZUNhcmRJZF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkdWEgMyBsYSBsZW4gLTE3NSwgLTEwIHJvaSB4b2UgcmEgYmVuIHBoYWlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzBdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgLTE3MCwgLTQ1KSxcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5bMV0ucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIC0xNywgLTQ1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgLTg1LCAtNDUpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5bMl0ucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIC0xNzAsIC00NSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSwgMSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIDAsIC00NSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzNdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIDg1LCAtNDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlbls0XS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjUpLFxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIDE3MCwgLTQ1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9XG5cbiAgICBzaG93Q2VudGVyQ2FyZHMxc3RSb3VuZChjZW50ZXJDYXJkcykge1xuICAgICAgICB0aGlzLmN1cnJlbnRDZW50ZXJDYXJkID0gY2VudGVyQ2FyZHM7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjZW50ZXJDYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQoY2VudGVyQ2FyZHNbaW5kZXhdKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlblswXS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLCAtMTcwLCAtNDUpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzFdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLCAtMTcsIC00NSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgLTg1LCAtNDUpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5bMl0ucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIC0xNzAsIC00NSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgMCwgLTQ1KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3dDZW50ZXJDYXJkczJuZFJvdW5kKGNlbnRlckNhcmRzKSB7XG4gICAgICAgIHRoaXMuY3VycmVudENlbnRlckNhcmQucHVzaChjZW50ZXJDYXJkc1swXSk7XG4gICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQoY2VudGVyQ2FyZHNbMF0pO1xuICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdO1xuXG4gICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5bM10ucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLCA4NSwgLTQ1KSxcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzaG93Q2VudGVyQ2FyZHMzcmRSb3VuZChjZW50ZXJDYXJkcykge1xuICAgICAgICB0aGlzLmN1cnJlbnRDZW50ZXJDYXJkLnB1c2goY2VudGVyQ2FyZHNbMF0pO1xuICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNlbnRlckNhcmRzWzBdKTtcbiAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlbls0XS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXTtcblxuICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzRdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjUpLFxuICAgICAgICAgICAgICAgIGNjLnNwYXduKFxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLCAxNzAsIC00NSksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBhZGRMaXN0ZW5lclxuICAgIHNldHVwTGlzdGVuZXIoKSB7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpPSU5fUk9PTV9TVUNDRVNTOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgSk9JTl9ST09NX1NVQ0NFU1NcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRKb2luUm9vbVN1Y2NlZWQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgSk9JTl9ST09NX1NVQ0NFU1MgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJUm9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cE1hdGNoKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5USE9OR19USU5fQkFOX0NIT0k6ICAvLyBSZWNvbm5lY3RcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFRIT05HX1RJTl9CQU5fQ0hPSVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEdhbWVJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFRIT05HX1RJTl9CQU5fQ0hPSSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1heFBsYXllclwiOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2FyZFNpemVcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2FyZHNcIjogWzEzLCAyMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJwdWJsaWNDYXJkU2l6ZVwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicHVibGljQ2FyZHNcIjogWzcsIDM3LCAxNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJkZWFsZXJDaGFpclwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwic21hbGxCbGluZENoYWlyXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJiaWdCbGluZENoYWlyXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJwb3RBbW91bnRcIjogMzEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJtYXhCZXRcIjogNDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInJhaXNlU3RlcFwiOiA0MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicm91bmRJZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiZ2FtZVNlcnZlclN0YXRlXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJnYW1lQWN0aW9uXCI6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjb3VudERvd25UaW1lXCI6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjdXJyZW50QWN0aXZlQ2hhaXJcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1vbmV5VHlwZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiYmV0XCI6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVJZFwiOiAxMzUxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicm9vbUlkXCI6IDkzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaGFzSW5mb1NpemVcIjogOSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImhhc0luZm9MaXN0XCI6IFsxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInBsYXllckluZm9MaXN0XCI6IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNhcmRTaXplID0gcmVzW1wibXlDYXJkU2l6ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNhcmRzID0gcmVzW1wibXlDYXJkc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJsaWNDYXJkU2l6ZSA9IHJlc1tcInB1YmxpY0NhcmRTaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmxpY0NhcmRzID0gcmVzW1wicHVibGljQ2FyZHNcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVhbGVyQ2hhaXIgPSByZXNbXCJkZWFsZXJDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbWFsbEJsaW5kQ2hhaXIgPSByZXNbXCJzbWFsbEJsaW5kQ2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmlnQmxpbmRDaGFpciA9IHJlc1tcImJpZ0JsaW5kQ2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG90QW1vdW50ID0gcmVzW1wicG90QW1vdW50XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heEJldCA9IHJlc1tcIm1heEJldFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYWlzZVN0ZXAgPSByZXNbXCJyYWlzZVN0ZXBcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91bmRJZCA9IHJlc1tcInJvdW5kSWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZVNlcnZlclN0YXRlID0gcmVzW1wiZ2FtZVNlcnZlclN0YXRlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVBY3Rpb24gPSByZXNbXCJnYW1lQWN0aW9uXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50RG93blRpbWUgPSByZXNbXCJjb3VudERvd25UaW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRBY3RpdmVDaGFpciA9IHJlc1tcImN1cnJlbnRBY3RpdmVDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZXQgPSByZXNbXCJiZXRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZUlkID0gcmVzW1wiZ2FtZUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvb21JZCA9IHJlc1tcInJvb21JZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNJbmZvU2l6ZSA9IHJlc1tcImhhc0luZm9TaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm9MaXN0ID0gcmVzW1wiaGFzSW5mb0xpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVySW5mb0xpc3QgPSByZXNbXCJwbGF5ZXJJbmZvTGlzdFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJUm9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VUlQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSb29tSWQuc3RyaW5nID0gXCJQT0tFUiAtIFBIw5JORzogXCIgKyByb29tSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsUm9vbUJldC5zdHJpbmcgPSBcIk3hu6hDIEPGr+G7okM6IFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKGJldCkgKyBcIi9cIiArIFV0aWxzLmZvcm1hdE51bWJlcigyICogYmV0KSArIFwiJFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tQmV0ID0gYmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IG15Q2FyZHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3RBbW91bnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlID0gcG90QW1vdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocG90QW1vdW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heEJldCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF4QmV0ID0gbWF4QmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFpc2VTdGVwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYWlzZVN0ZXAgPSByYWlzZVN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhaXNlVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXhCZXQgKyB0aGlzLmN1cnJlbnRSYWlzZVN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYWlzZU1pbiA9IHRoaXMuY3VycmVudE1heEJldCArIHRoaXMuY3VycmVudFJhaXNlU3RlcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHB1YmxpY0NhcmRTaXplID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwdWJsaWNDYXJkU2l6ZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NlbnRlckNhcmRzMXN0Um91bmQocHVibGljQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHVibGljQ2FyZFNpemUgPT0gNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91bmRfMSA9IFtwdWJsaWNDYXJkc1swXSwgcHVibGljQ2FyZHNbMV0sIHB1YmxpY0NhcmRzWzJdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdW5kXzIgPSBwdWJsaWNDYXJkc1szXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2VudGVyQ2FyZHMxc3RSb3VuZChyb3VuZF8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2VudGVyQ2FyZHMybmRSb3VuZChyb3VuZF8yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHB1YmxpY0NhcmRTaXplID09IDUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QWxsQ2VudGVyQ2FyZHMocHVibGljQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllcklkID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllclswXS5wbGF5ZXJQb3MgPSBjaGFpcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciBNZSA6IFwiLCBjb25maWdQbGF5ZXJbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyICA6IFwiLCBjb25maWdQbGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtUGxheWVycyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzSW5mb0xpc3RbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVBsYXllcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUGxheWVyUG9zRXhpc3QucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIG51bVBsYXllcnMgOiBcIiwgbnVtUGxheWVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldHVwIGNvbmZpZ1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbYV0ucGxheWVyUG9zID0gZGVmYXVsdFBsYXllclBvc1tjaGFpcl1bYV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBTdGF0ZSBvZiBTZWF0IDogWWVzIHwgTm8gZXhpc3QgUGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5kUG9zID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UGxheWVySW5mbygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRQb3MgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGlzdCBwbGF5ZXIgLT4gU2V0IFBsYXllciBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHBsYXllckluZm9MaXN0W2luZGV4XS5uaWNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcjogcGxheWVySW5mb0xpc3RbaW5kZXhdLmF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb25leTogcGxheWVySW5mb0xpc3RbaW5kZXhdLmN1cnJlbnRNb25leSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0NhcmRSZWFkeSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckluZm9MaXN0W2luZGV4XS5jdXJyZW50QmV0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEJldChwbGF5ZXJJbmZvTGlzdFtpbmRleF0uY3VycmVudEJldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuYWRkQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJJbmZvTGlzdFtpbmRleF0uZm9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dBY3Rpb25TdGF0ZShcIsOaUFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGb2xkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckluZm9MaXN0W2luZGV4XS5oYXNBbGxJbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dBY3Rpb25TdGF0ZShcIkFMTC1JTlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0J0bkludml0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldERlYWxlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0U21hbGxCaW5kKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRCaWdCaW5kKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlYWxlclNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhkZWFsZXJDaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVhbGVyU2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShkZWFsZXJDaGFpcikuc2V0RGVhbGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2JTZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3Moc21hbGxCbGluZENoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYlNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2JTZWF0SWQpLnNldFNtYWxsQmluZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJiU2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGJpZ0JsaW5kQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJiU2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShiYlNlYXRJZCkuc2V0QmlnQmluZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjdXJyZW50QWN0aXZlQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoYWN0aXZlU2VhdElkKS5zaG93UGxheUNvdW50ZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaGlua2luZ0NvdW50RG93bihhY3RpdmVTZWF0SWQsIGNvdW50RG93blRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIE1lIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobXlDYXJkU2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNob3dDYXJkUmVhZHkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBjYXJkSWQgOiBcIiwgbXlDYXJkc1thXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQobXlDYXJkc1thXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkucHJlcGFyZVRvVHJhbnNmb3JtKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkudHJhbnNmb3JtVG9DYXJkUmVhbChhLCB0aGlzLnNwcml0ZUNhcmRzW3Nwcml0ZUNhcmRJZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEh1YkNoaXBzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5EQU5HX0tZX1RIT0FUX1BIT05HOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgREFOR19LWV9USE9BVF9QSE9OR1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZE5vdGlmeVJlZ091dFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgREFOR19LWV9USE9BVF9QSE9ORyByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0Q2hhaXIgPSByZXNbXCJvdXRDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc091dFJvb20gPSByZXNbXCJpc091dFJvb21cIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3Mob3V0Q2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNPdXRSb29tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiU+G6r3AgcuG7nWkgYsOgbiAhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiS2jDtCBNw6F1ICFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTkVXX1VTRVJfSk9JTjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIE5FV19VU0VSX0pPSU5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRVc2VySm9pblJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgTkVXX1VTRVJfSk9JTiByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuaWNrTmFtZSA9IHJlc1tcImluZm9cIl1bXCJuaWNrTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdmF0YXIgPSByZXNbXCJpbmZvXCJdW1wiYXZhdGFyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25leSA9IHJlc1tcImluZm9cIl1bXCJtb25leVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcInVDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXMgPSByZXNbXCJ1U3RhdHVzXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3MgPT0gY2hhaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhpc3QgcGxheWVyIC0+IFNldCBQbGF5ZXIgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbVBsYXllckluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiOiBhdmF0YXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5pY2tOYW1lXCI6IG5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXJyZW50TW9uZXlcIjogY3VycmVudE1vbmV5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlYXRQbGF5ZXIoc2VhdElkLCBjdXN0b21QbGF5ZXJJbmZvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfVklFV0VSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW3NlYXRJZF0ucGxheWVySWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4Vmlld2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRJZF0uaXNWaWV3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxFQVZFX0dBTUU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBMRUFWRV9HQU1FXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkVXNlckxlYXZlUm9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBMRUFWRV9HQU1FIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZCBjbGVhciBjb25maWdQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQgPT0gc2VhdElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLmlzVmlld2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0J0bkludml0ZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJTZWF0RXhpc3RMYXN0ID0gdGhpcy5nZXROdW1QbGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclNlYXRFeGlzdExhc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllcnNQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDZW50ZXJDYXJkcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZSBsZWF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVJX0Nob29zZVJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5UQUtFX1RVUk46XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBUQUtFX1RVUk5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRUYWtlVHVybihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBUQUtFX1RVUk4gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJhY3Rpb25DaGFpclwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiYWN0aW9uXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJsYXN0UmFpc2VcIjogNTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY3VycmVudEJldFwiOiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibWF4QmV0XCI6IDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjdXJyZW50TW9uZXlcIjogMjkwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyYWlzZVN0ZXBcIjogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInJhaXNlQmxvY2tcIjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uQ2hhaXIgPSByZXNbXCJhY3Rpb25DaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSByZXNbXCJhY3Rpb25cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdFJhaXNlID0gcmVzW1wibGFzdFJhaXNlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRCZXQgPSByZXNbXCJjdXJyZW50QmV0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heEJldCA9IHJlc1tcIm1heEJldFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TW9uZXkgPSByZXNbXCJjdXJyZW50TW9uZXlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFpc2VTdGVwID0gcmVzW1wicmFpc2VTdGVwXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhaXNlQmxvY2sgPSByZXNbXCJyYWlzZUJsb2NrXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgVEFLRV9UVVJOIGFjdGlvbkNoYWlyIDogXCIsIGFjdGlvbkNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBUQUtFX1RVUk4gYWN0aW9uIDogXCIsIGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgVEFLRV9UVVJOIGxhc3RSYWlzZSA6IFwiLCBsYXN0UmFpc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFRBS0VfVFVSTiBjdXJyZW50QmV0IDogXCIsIGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFRBS0VfVFVSTiBtYXhCZXQgOiBcIiwgbWF4QmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBUQUtFX1RVUk4gY3VycmVudE1vbmV5IDogXCIsIGN1cnJlbnRNb25leSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgVEFLRV9UVVJOIHJhaXNlU3RlcCA6IFwiLCByYWlzZVN0ZXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFRBS0VfVFVSTiByYWlzZUJsb2NrIDogXCIsIHJhaXNlQmxvY2spO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXhCZXQgPSBtYXhCZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYWlzZVN0ZXAgPSByYWlzZVN0ZXA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoYWN0aW9uQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNZUJldCA9IHRoaXMuY3VycmVudE1lQmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNZUJldCA9IGN1cnJlbnRCZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbk5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0FNRV9BQ1RJT05fRk9MRDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWUgPSBcIsOaUFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmZ4TWVGb2xkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRm9sZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdBTUVfQUNUSU9OX0NIRUNLOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZSA9IFwiWEVNXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HQU1FX0FDVElPTl9DQUxMOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZSA9IFwiVEhFT1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgUGxheWVyIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWF0SWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY3VycmVudE1lQmV0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0FNRV9BQ1RJT05fUkFJU0U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lID0gXCJU4buQXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0QmV0KGN1cnJlbnRCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmFkZENoaXBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzYW5nIHR1cm4gbW9pLCBraGkgcGxheWVyIHRydW9jIFJhaXNlIHZhIG1pbmggY2h1YSBCZXQgZ2lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWF0SWQgIT0gMCAmJiB0aGlzLmN1cnJlbnRNZUJldCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50TWVCZXQgPSBsYXN0UmFpc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HQU1FX0FDVElPTl9BTExfSU46XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lID0gXCJBTEwtSU5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRCZXQoY3VycmVudEJldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuYWRkQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEdvbGQoY3VycmVudE1vbmV5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0FjdGlvblN0YXRlKGFjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0VMRUNUX0RFQUxFUjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRTZWxlY3REZWFsZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgU0VMRUNUX0RFQUxFUiByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWFsZXJDaGFpciA9IHJlc1tcImRlYWxlckNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsQmxpbmRDaGFpciA9IHJlc1tcInNtYWxsQmxpbmRDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiaWdCbGluZENoYWlyID0gcmVzW1wiYmlnQmxpbmRDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNJbmZvU2l6ZSA9IHJlc1tcImhhc0luZm9TaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm9MaXN0ID0gcmVzW1wiaGFzSW5mb0xpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyU3RhdHVzTGlzdCA9IHJlc1tcInBsYXllclN0YXR1c0xpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZUlkID0gcmVzW1wiZ2FtZUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ2hlYXQgPSByZXNbXCJpc0NoZWF0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25leVNpemUgPSByZXNbXCJjdXJyZW50TW9uZXlTaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25leUxpc3QgPSByZXNbXCJjdXJyZW50TW9uZXlMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNpemUgPSByZXNbXCJzaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RCZXRCaWdCbGluZCA9IHJlc1tcImxpc3RCZXRCaWdCbGluZFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgZGVhbGVyQ2hhaXIgOiBcIiwgZGVhbGVyQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgc21hbGxCbGluZENoYWlyIDogXCIsIHNtYWxsQmxpbmRDaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgU0VMRUNUX0RFQUxFUiBiaWdCbGluZENoYWlyIDogXCIsIGJpZ0JsaW5kQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgaGFzSW5mb1NpemUgOiBcIiwgaGFzSW5mb1NpemUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgaGFzSW5mb0xpc3QgOiBcIiwgaGFzSW5mb0xpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgcGxheWVyU3RhdHVzTGlzdCA6IFwiLCBwbGF5ZXJTdGF0dXNMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBTRUxFQ1RfREVBTEVSIGdhbWVJZCA6IFwiLCBnYW1lSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgaXNDaGVhdCA6IFwiLCBpc0NoZWF0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBTRUxFQ1RfREVBTEVSIGN1cnJlbnRNb25leVNpemUgOiBcIiwgY3VycmVudE1vbmV5U2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgU0VMRUNUX0RFQUxFUiBjdXJyZW50TW9uZXlMaXN0IDogXCIsIGN1cnJlbnRNb25leUxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgc2l6ZSA6IFwiLCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBTRUxFQ1RfREVBTEVSIGxpc3RCZXRCaWdCbGluZCA6IFwiLCBsaXN0QmV0QmlnQmxpbmQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgRGVhbGVyLCBTQiwgQkIgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0RGVhbGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRTbWFsbEJpbmQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldEJpZ0JpbmQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkRGVhbGVyID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGRlYWxlckNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWREZWFsZXIgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZERlYWxlcikuc2V0RGVhbGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkU21hbGxCaW5kID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKHNtYWxsQmxpbmRDaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkU21hbGxCaW5kICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZFNtYWxsQmluZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1lQmV0ID0gdGhpcy5jdXJyZW50Um9vbUJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWRTbWFsbEJpbmQpLnNldFNtYWxsQmluZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZFNtYWxsQmluZCkuc2V0QmV0KHRoaXMuY3VycmVudFJvb21CZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkU21hbGxCaW5kKS5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkQmlnQmluZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhiaWdCbGluZENoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWRCaWdCaW5kICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZEJpZ0JpbmQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNZUJldCA9IDIgKiB0aGlzLmN1cnJlbnRSb29tQmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZEJpZ0JpbmQpLnNldEJpZ0JpbmQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWRCaWdCaW5kKS5zZXRCZXQoMiAqIHRoaXMuY3VycmVudFJvb21CZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkQmlnQmluZCkuYWRkQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZEJpZ0JpbmQpLmFkZENoaXBzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1hdGNoUG90VmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbE1hdGNoUG90LnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF4QmV0ID0gMiAqIHRoaXMuY3VycmVudFJvb21CZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYWlzZVN0ZXAgPSAyICogdGhpcy5jdXJyZW50Um9vbUJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhaXNlVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXhCZXQgKyB0aGlzLmN1cnJlbnRSYWlzZVN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgU0VMRUNUX0RFQUxFUiBjdXJyZW50TWVCZXQgOiBcIiwgdGhpcy5jdXJyZW50TWVCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgY3VycmVudFJhaXNlU3RlcCA6IFwiLCB0aGlzLmN1cnJlbnRSYWlzZVN0ZXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFNFTEVDVF9ERUFMRVIgY3VycmVudFJhaXNlVmFsdWUgOiBcIiwgdGhpcy5jdXJyZW50UmFpc2VWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBHb2xkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY3VycmVudE1vbmV5TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0R29sZChjdXJyZW50TW9uZXlMaXN0W2luZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRNb25leUxpc3RbaW5kZXhdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRJZF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXVtcImlzVmlld2VyXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldElzVmlld2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW3NlYXRJZF0ucGxheWVySWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wbGF5RnhWaWV3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQlVZX0lOOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQlVZX0lOXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkQnV5SW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQlVZX0lOIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnV5SW5Nb25leSA9IHJlc1tcImJ1eUluTW9uZXlcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBCVVlfSU4gY2hhaXIgOiBcIiwgY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIEJVWV9JTiBidXlJbk1vbmV5IDogXCIsIGJ1eUluTW9uZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWUgYnV5IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEdvbGQoYnV5SW5Nb25leSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ERUFMX1BSSVZBVEVfQ0FSRDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIERFQUxfUFJJVkFURV9DQVJEXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkRGVhbENhcmRzKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIERFQUxfUFJJVkFURV9DQVJEIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZUNhcmQgPSByZXNbXCJzaXplQ2FyZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNhcmRzID0gcmVzW1wibXlDYXJkc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib0JhaUlkID0gcmVzW1wiYm9CYWlJZFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRml4IGN1bmcgLT4gY2FuIHRpbSBjYWNoIHNldCBmaXJzdCByYWlzZSBzdGVwXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBERUFMX1BSSVZBVEVfQ0FSRCBjaGFpciAgOiBcIiwgY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIERFQUxfUFJJVkFURV9DQVJEIHNpemVDYXJkIDogXCIsIHNpemVDYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBERUFMX1BSSVZBVEVfQ0FSRCBteUNhcmRzIDogXCIsIG15Q2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIERFQUxfUFJJVkFURV9DQVJEIGJvQmFpSWQgOiBcIiwgYm9CYWlJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GeERlYWxlci5zZXRBbmltYXRpb24oMCwgXCJjaG9cIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSBteUNhcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFJlY2VpdmVkQ2hpYUJhaSBjdXJyZW50Q2FyZCA6IFwiLCB0aGlzLmN1cnJlbnRDYXJkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyclNlYXRFeGlzdCA9IHRoaXMuZ2V0TnVtUGxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bVBsYXllciA9IGFyclNlYXRFeGlzdC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgUmVjZWl2ZWRDaGlhQmFpIGFyclNlYXRFeGlzdCA6IFwiLCBhcnJTZWF0RXhpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFJlY2VpdmVkQ2hpYUJhaSBudW1QbGF5ZXIgOiBcIiwgbnVtUGxheWVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiB8IEhpZGUgY2FyZHMgbm90IHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVIgKiAyOyBpbmRleCsrKSB7IC8vIDggcGxheWVycyAqIDIgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gaW5kZXggPj0gbnVtUGxheWVyICogMiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0ucG9zaXRpb24gPSBjYy52MigwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBDYXJkcyB1c2VkIHRvIGVhY2ggcGxheWVyIGpvaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAyOyBhKyspIHsgLy8gcGxheWVycyB4IDIgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IG51bVBsYXllcjsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSBhcnJTZWF0RXhpc3RbYl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZDRNZSA9IHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuWyhhICogbnVtUGxheWVyKSArIGJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhd1BsYXllclBvcyA9IHRoaXMuZ3JvdXBQbGF5ZXJzLmNoaWxkcmVuW3NlYXRJZF0ucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQ0hJQV9CQUkgZGVsYXlUaW1lIDogXCIsICgoYSAqIG51bVBsYXllcikgKyBiKSAqIDAuMTUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZDRNZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgoKGEgKiBudW1QbGF5ZXIpICsgYikgKiAwLjE1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiwgcmF3UGxheWVyUG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWxheU92ZXIyVW5kZXIgPSAwLjI7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4RGVsYXkgPSAoKDEgKiBudW1QbGF5ZXIpICsgKG51bVBsYXllciAtIDEpKSAqIDAuMTU7IC8vICgoYSAqIG51bVBsYXllcikgKyBiKSAqIDAuMTVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lVW5kZXJMYXllciA9IChtYXhEZWxheSArIDAuMiArIGRlbGF5T3ZlcjJVbmRlcikgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNISUFfQkFJIHRpbWVVbmRlckxheWVyIDogXCIsIHRpbWVVbmRlckxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSICogMjsgaW5kZXgrKykgeyAvLyA4IHBsYXllcnMgKiAyIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJDSElBX0JBSSBjYXJkc0RlYWwgaW5kZXggOiBcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bVBsYXllcjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdEV4aXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3AgbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWR5KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDYXJkUmVhbChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIE1lIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAyOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGNhcmRJZCA6IFwiLCBteUNhcmRzW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZChteUNhcmRzW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5wcmVwYXJlVG9UcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS50cmFuc2Zvcm1Ub0NhcmRSZWFsKGEsIHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkTmFtZSA9IHRoaXMuZ2V0Q2FyZHNOYW1lKGJvQmFpSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkuc2hvd0NhcmROYW1lKGNhcmROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVVbmRlckxheWVyKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTkVXX1JPVU5EOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgTkVXX1JPVU5EXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkTmV3QmV0Um91bmQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgTkVXX1JPVU5EIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicm91bmRJZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwic2l6ZUNhcmRcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInBsdXNDYXJkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAyN1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjYXJkTmFtZVwiOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicG90QW1vdW50XCI6IDQwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91bmRJZCA9IHJlc1tcInJvdW5kSWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZUNhcmQgPSByZXNbXCJzaXplQ2FyZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbHVzQ2FyZHMgPSByZXNbXCJwbHVzQ2FyZHNcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZE5hbWUgPSByZXNbXCJjYXJkTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3RBbW91bnQgPSByZXNbXCJwb3RBbW91bnRcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBORVdfUk9VTkQgcm91bmRJZCA6IFwiLCByb3VuZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBORVdfUk9VTkQgc2l6ZUNhcmQgOiBcIiwgc2l6ZUNhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIE5FV19ST1VORCBwbHVzQ2FyZHMgOiBcIiwgcGx1c0NhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBORVdfUk9VTkQgY2FyZE5hbWUgOiBcIiwgY2FyZE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIE5FV19ST1VORCBwb3RBbW91bnQgOiBcIiwgcG90QW1vdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSA9IHBvdEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocG90QW1vdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVCZXQgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXhCZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UmFpc2VTdGVwID0gMiAqIHRoaXMuY3VycmVudFJvb21CZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYWlzZVZhbHVlID0gdGhpcy5jdXJyZW50TWF4QmV0ICsgdGhpcy5jdXJyZW50UmFpc2VTdGVwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zaG93UGxheWVyQmV0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRm9sZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyb3VuZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NlbnRlckNhcmRzMXN0Um91bmQocGx1c0NhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDZW50ZXJDYXJkczJuZFJvdW5kKHBsdXNDYXJkcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2VudGVyQ2FyZHMzcmRSb3VuZChwbHVzQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBORVdfUk9VTkQgTWUgaXMgZm9sZGVkIC0+IENhbiBub3Qgc2VlIGNlbnRlciBjYXJkc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaG93Q2FyZE5hbWUodGhpcy5nZXRDYXJkc05hbWUoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQU5HRV9UVVJOOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQ0hBTkdFX1RVUk5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRDaGFuZ2VUdXJuKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIENIQU5HRV9UVVJOIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvdW5kSWQgPSByZXNbXCJyb3VuZElkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmV0VGltZSA9IHJlc1tcImJldFRpbWVcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBDSEFOR0VfVFVSTiByb3VuZElkIDogXCIsIHJvdW5kSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIENIQU5HRV9UVVJOIGNoYWlyIDogXCIsIGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBDSEFOR0VfVFVSTiBiZXRUaW1lIDogXCIsIGJldFRpbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWxsUGxheWVyQ291bnRkb3duKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93UGxheUNvdW50ZG93bigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaGlua2luZ0NvdW50RG93bihzZWF0SWQsIGJldFRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4RGVhbGVyLnNldEFuaW1hdGlvbigwLCBcIm5vdGlcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cEJldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhaXNlVmFsdWUgPSB0aGlzLmN1cnJlbnRNYXhCZXQgKyB0aGlzLmN1cnJlbnRSYWlzZVN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhaXNlTWluID0gdGhpcy5jdXJyZW50TWF4QmV0ICsgdGhpcy5jdXJyZW50UmFpc2VTdGVwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5ldSBtYSBtaW5CZXQgPiBjdXJyZW50TWVHb2xkIHRoaSBhbiBudXQgUmFpc2UgZGksIGNoaSBjaG8gRm9sZCB8IEFsbC1JblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1lR29sZCA9IHRoaXMuZ2V0UGxheWVySG91c2UoMCkuZ2V0R29sZCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhbmcgZ2FwIGxvaSBtaW5CZXQgc2FpLCBkYXQgbWluQmV0IGsgZGMsIHBo4bqjaSBkYyArKzEgbeG7m2kgZGNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyX0JFVCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIiwgcm91bmRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlcl9CRVQgY3VycmVudE1heEJldCA6IFwiLCB0aGlzLmN1cnJlbnRNYXhCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfQkVUIGN1cnJlbnRSYWlzZVN0ZXAgOiBcIiwgdGhpcy5jdXJyZW50UmFpc2VTdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyX0JFVCBjdXJyZW50UmFpc2VNaW4gOiBcIiwgdGhpcy5jdXJyZW50UmFpc2VNaW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfQkVUIGN1cnJlbnRSYWlzZVZhbHVlIDogXCIsIHRoaXMuY3VycmVudFJhaXNlVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfQkVUIGN1cnJlbnRNZUJldCA6IFwiLCB0aGlzLmN1cnJlbnRNZUJldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlcl9CRVQgbGFzdE1lQmV0IDogXCIsIHRoaXMubGFzdE1lQmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyX0JFVCBjdXJyZW50TWVHb2xkIDogXCIsIGN1cnJlbnRNZUdvbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfQkVUIGN1cnJlbnRSb29tQmV0IDogXCIsIHRoaXMuY3VycmVudFJvb21CZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfQkVUIGN1cnJlbnRNYXRjaFBvdFZhbHVlIDogXCIsIHRoaXMuY3VycmVudE1hdGNoUG90VmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5fMDEgPSB0aGlzLmN1cnJlbnRSYWlzZVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuXzAyID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5fMDMgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdW5kSWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuXzAyID0gTWF0aC5tYXgoNCAqIHRoaXMuY3VycmVudFJvb21CZXQsIHRoaXMuY3VycmVudFJhaXNlU3RlcCkgKyB0aGlzLmN1cnJlbnRNYXhCZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5fMDMgPSBNYXRoLm1heCg2ICogdGhpcy5jdXJyZW50Um9vbUJldCwgdGhpcy5jdXJyZW50UmFpc2VTdGVwKSArIHRoaXMuY3VycmVudE1heEJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bl8wMiA9IE1hdGgubWF4KHRoaXMuY3VycmVudE1hdGNoUG90VmFsdWUgLyAyLCB0aGlzLmN1cnJlbnRSYWlzZVN0ZXApICsgdGhpcy5jdXJyZW50TWF4QmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuXzAzID0gTWF0aC5tYXgodGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSwgdGhpcy5jdXJyZW50UmFpc2VTdGVwKSArIHRoaXMuY3VycmVudE1heEJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJldFZhbHVlLnB1c2goYnRuXzAxIC0gdGhpcy5jdXJyZW50TWVCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJldFZhbHVlLnB1c2goYnRuXzAyIC0gdGhpcy5jdXJyZW50TWVCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJldFZhbHVlLnB1c2goYnRuXzAzIC0gdGhpcy5jdXJyZW50TWVCZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJldFZhbHVlLnB1c2goYnRuXzAzICsgKDIgKiB0aGlzLmN1cnJlbnRSb29tQmV0KSAtIHRoaXMuY3VycmVudE1lQmV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZS5wdXNoKGJ0bl8wMyArICg0ICogdGhpcy5jdXJyZW50Um9vbUJldCkgLSB0aGlzLmN1cnJlbnRNZUJldCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWUuY2hpbGRyZW5baW5kZXhdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyTWluKHRoaXMuYXJyQmV0VmFsdWVbNCAtIGluZGV4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91bmRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWUuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZS5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiM0JCXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIyQkJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWUuY2hpbGRyZW5bNF0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIk1JTlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZS5jaGlsZHJlblswXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWUuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlBPVFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZS5jaGlsZHJlblszXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiUE9ULzJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWUuY2hpbGRyZW5bNF0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIk1JTlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEJ0bkFjdGlvbnMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50TWF4QmV0ID09IHRoaXMuY3VycmVudE1lQmV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCdG5DYWxsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0J0bkNoZWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRNYXhCZXQgLSB0aGlzLmN1cnJlbnRNZUJldCkgPj0gY3VycmVudE1lR29sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0J0blJhaXNlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCdG5DYWxsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dCdG5DaGVjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0J0bkNhbGwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93QnRuQ2hlY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnRSYWlzZVZhbHVlIC0gdGhpcy5jdXJyZW50TWVCZXQpID49IGN1cnJlbnRNZUdvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0J0blJhaXNlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLktFVF9USFVDOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgS0VUX1RIVUNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRFbmRHYW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIEtFVF9USFVDIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicG90QW1vdW50XCI6IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyYW5rU2l6ZVwiOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicmFua0xpc3RcIjogWzEsIDEwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImtxdHRTaXplXCI6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJrcXR0TGlzdFwiOiBbMTQ5MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJib29sZWFuV2luZXJTaXplXCI6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJib29sZWFuV2luZXJMaXN0XCI6IFsxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1vbmV5QXJyYXlTaXplXCI6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjdXJyZW50TW9uZXlcIjogWzIwNDkwLCAxOTUwMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJnYW1lTW9uZXlcIjogWzQzNzAzMDYsIDY0Njc2NTIsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiZ2FtZU1vbmV5U2l6ZVwiOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicHVibGljQ2FyZFNpemVcIjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInB1YmxpY0NhcmRzXCI6IFsxMCwgMjYsIDIsIDIxLCA3XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImhhc0luZm9TaXplXCI6IDksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJoYXNJbmZvTGlzdFwiOiBbMywgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJwcml2YXRlQ2FyZExpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBbMTgsIDE2XSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1heENhcmRMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgWzE4LCAxNiwgMjYsIDIxLCAxMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFsxMCwgOSwgNDMsIDI2LCAyMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNhcmROYW1lTGlzdFwiOiBbOCwgOCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvdEFtb3VudCA9IHJlc1tcInBvdEFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5rU2l6ZSA9IHJlc1tcInJhbmtTaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmtMaXN0ID0gcmVzW1wicmFua0xpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga3F0dFNpemUgPSByZXNbXCJrcXR0U2l6ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrcXR0TGlzdCA9IHJlc1tcImtxdHRMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2xlYW5XaW5lclNpemUgPSByZXNbXCJib29sZWFuV2luZXJTaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvb2xlYW5XaW5lckxpc3QgPSByZXNbXCJib29sZWFuV2luZXJMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vbmV5QXJyYXlTaXplID0gcmVzW1wibW9uZXlBcnJheVNpemVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1vbmV5ID0gcmVzW1wiY3VycmVudE1vbmV5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNb25leSA9IHJlc1tcImdhbWVNb25leVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9uZXlTaXplID0gcmVzW1wiZ2FtZU1vbmV5U2l6ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJsaWNDYXJkU2l6ZSA9IHJlc1tcInB1YmxpY0NhcmRTaXplXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmxpY0NhcmRzID0gcmVzW1wicHVibGljQ2FyZHNcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzSW5mb1NpemUgPSByZXNbXCJoYXNJbmZvU2l6ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNJbmZvTGlzdCA9IHJlc1tcImhhc0luZm9MaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaXZhdGVDYXJkTGlzdCA9IHJlc1tcInByaXZhdGVDYXJkTGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDYXJkTGlzdCA9IHJlc1tcIm1heENhcmRMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lTGlzdCA9IHJlc1tcImNhcmROYW1lTGlzdFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSA9IHBvdEFtb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocG90QW1vdW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GeERlYWxlci5zZXRBbmltYXRpb24oMCwgXCJjaG9cIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFByaXZhdGVDYXJkTGlzdCA9IHByaXZhdGVDYXJkTGlzdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBGeCB3aW5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBQbGF5ZXJzIGlzIFBsYXlpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJQbGF5ZXJQb3NFeGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4Q2FyZExpc3RbaW5kZXhdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUGxheWVyUG9zRXhpc3QucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIFdpbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9vbGVhbldpbmVyTGlzdFtpbmRleF0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaW5uZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5meFdpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXlDaGFuZ2U6IGtxdHRMaXN0W2luZGV4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9uZXk6IGN1cnJlbnRNb25leVtpbmRleF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZSB3aW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSBnYW1lTW9uZXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnVtUGxheWVycyA+IDIgdGhpIGRjIG9wZW5DYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG51bVBsYXllciA9IHRoaXMuZ2V0TnVtUGxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1QbGF5ZXIubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvc2UgOiBjYW4ga2llbSB0cmEgeGVtIGNvIHBoYWkgaXNQbGF5aW5nIGtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmRJZCA9IGFyclBsYXllclBvc0V4aXN0LmluZGV4T2YoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluZElkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuZnhMb3NlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25leUNoYW5nZToga3F0dExpc3RbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb25leTogY3VycmVudE1vbmV5W2luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSBnYW1lTW9uZXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgQ2VudGVyIENhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBbGxDZW50ZXJDYXJkcyhwdWJsaWNDYXJkcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc2hvdyBNZSBjYXJkcyBmb3IgcmVjb25uZWN0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgTWUgbWF4IGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kTWVDYXJkcyA9IHRoaXMuY3VycmVudENhcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kQ2VudGVyQ2FyZHMgPSBwdWJsaWNDYXJkcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbmRNZU1heENhcmRzID0gbWF4Q2FyZExpc3RbY29uZmlnUGxheWVyWzBdLnBsYXllclBvc107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBLRVRfVEhVQyBlbmRNZUNhcmRzIDogXCIsIGVuZE1lQ2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIEtFVF9USFVDIGVuZENlbnRlckNhcmRzIDogXCIsIGVuZENlbnRlckNhcmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBLRVRfVEhVQyBlbmRNZU1heENhcmRzIDogXCIsIGVuZE1lTWF4Q2FyZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuZE1lTWF4Q2FyZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbmRNZUNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluZElkID0gZW5kTWVNYXhDYXJkcy5pbmRleE9mKGVuZE1lQ2FyZHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkuc2V0Q2FyZFdpbihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNldENhcmRXaW4oaW5kZXgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJDYXJkVXBwZXIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZW5kQ2VudGVyQ2FyZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5kSWQgPSBlbmRNZU1heENhcmRzLmluZGV4T2YoZW5kQ2VudGVyQ2FyZHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJDYXJkVXBwZXIucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuW2luZGV4XS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyckNhcmRVcHBlci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5bYXJyQ2FyZFVwcGVyW2luZGV4XV0ueSA9IC0xMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGNhcmQgbmVlZFNob3cgb2YgT3RoZXJQbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykgeyAgLy8gaW5kZXggc3RhcnQgZnJvbSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyckNhcmRzRW5kID0gbWF4Q2FyZExpc3RbY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJDYXJkc0VuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkRGlmZmVyZW50ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgYXJyQ2FyZHNFbmQubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0V4aXN0ID0gcHVibGljQ2FyZHMuaW5kZXhPZihhcnJDYXJkc0VuZFthXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeGlzdCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2VudGVyIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBsYXllciBjYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERpZmZlcmVudC5wdXNoKGFyckNhcmRzRW5kW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkU2hvdyA9IHRoaXMuY3VycmVudFByaXZhdGVDYXJkTGlzdFtjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMjsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zaGFkb3dFYWNoQ2FyZFJlYWwoYSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZFNob3cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAyOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgY2FyZElkIDogXCIsIGNhcmRTaG93W2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNhcmRTaG93W2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5wcmVwYXJlVG9UcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS50cmFuc2Zvcm1Ub0NhcmRSZWFsKGEsIHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmREaWZmZXJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IGNhcmREaWZmZXJlbnQubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkU2hvd1thXSA9PSBjYXJkRGlmZmVyZW50W2JdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2hhZG93RWFjaENhcmRSZWFsKGEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNoYWRvd0NhcmRSZWFsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBDYXJkcyBOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyUGxheWVyUG9zRXhpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lID0gdGhpcy5nZXRDYXJkc05hbWUoY2FyZE5hbWVMaXN0W2FyclBsYXllclBvc0V4aXN0W2luZGV4XV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoYXJyUGxheWVyUG9zRXhpc3RbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmhpZGVDYXJkTmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GeE1lQ2FyZE5hbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRnhNZUNhcmROYW1lLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkTmFtZXNbY2FyZE5hbWVMaXN0W2FyclBsYXllclBvc0V4aXN0W2luZGV4XV1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDYXJkTmFtZShjYXJkTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9NQVRDSDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFVQREFURV9NQVRDSFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFVwZGF0ZU1hdGNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFVQREFURV9NQVRDSCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNoYWlyXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJoYXNJbmZvU2l6ZVwiOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaGFzSW5mb0xpc3RcIjogWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY3VycmVudE1vbmV5TGlzdFwiOiBbMTk5OTAsIDE5OTkwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInN0YXR1c0xpc3RcIjogWzIsIDIsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm9TaXplID0gcmVzW1wiaGFzSW5mb1NpemVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzSW5mb0xpc3QgPSByZXNbXCJoYXNJbmZvTGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TW9uZXlMaXN0ID0gcmVzW1wiY3VycmVudE1vbmV5TGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNMaXN0ID0gcmVzW1wic3RhdHVzTGlzdFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVvIFBvcyBraG9uZyBwaGFpIFNlYXRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllclBvc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzSW5mb0xpc3RbcG9zXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldEdvbGQgc2UgaW5hY3RpdmUgaXNWaWV3ZXIgbmVuIGRhdCBubyBsZW4gZGF1IGRlIGJlbiBkdW9pIGNvbmZpZyBsYWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0R29sZChjdXJyZW50TW9uZXlMaXN0W3Bvc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzTGlzdFtwb3NdID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfU0lUVElORyB8fCBzdGF0dXNMaXN0W3Bvc10gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudE1vbmV5TGlzdFtwb3NdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLmlzVmlld2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wiaXNWaWV3ZXJcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldElzVmlld2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnBsYXlGeFZpZXdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldElzVmlld2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldElzVmlld2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5wbGF5RnhWaWV3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllcklkXCJdID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TSE9XX0NBUkQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBTSE9XX0NBUkRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRTaG93Q2FyZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBTSE9XX0NBUkQgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRTaG93ID0gdGhpcy5jdXJyZW50UHJpdmF0ZUNhcmRMaXN0W2NoYWlyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZFNob3cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDI7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGNhcmRJZCA6IFwiLCBjYXJkU2hvd1thXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNhcmRTaG93W2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wcmVwYXJlVG9UcmFuc2Zvcm0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS50cmFuc2Zvcm1Ub0NhcmRSZWFsKGEsIHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5SRVFVRVNUX0JVWV9JTjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFJFUVVFU1RfU1RBTkRfVVBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luID49ICh0aGlzLmN1cnJlbnRSb29tQmV0ICogdGhpcy5yb29tTWluQnV5SW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wdXBCdXlJbih0aGlzLnJvb21NaW5CdXlJbiwgdGhpcy5yb29tTWF4QnV5SW4sIHRoaXMuY3VycmVudFJvb21CZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkxlYXZlUm9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuUkVRVUVTVF9TVEFORF9VUDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFJFUVVFU1RfU1RBTkRfVVBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRTdGFuZFVwKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFJFUVVFU1RfU1RBTkRfVVAgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzVXAgPSByZXNbXCJpc1VwXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgUkVRVUVTVF9TVEFORF9VUCBpc1VwIDogXCIsIGlzVXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cblxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9HSU46XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXNoTGlzdFJvb20oKTtcbiAgICAgICAgICAgICAgICAgICAgUG9rZXJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFJlY29ubmVjdFJvb20oKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVE9QU0VSVkVSOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFRPUFNFUlZFUlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9QSU5HUE9ORzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBDTURfUElOR1BPTkdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfSk9JTl9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIENNRF9KT0lOX1JPT01cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfUkVDT05ORUNUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQ01EX1JFQ09OTkVDVF9ST09NXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX1JFQ09OTkVDVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIENNRF9SRUNPTk5FQ1RfUk9PTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk1PTkVZX0JFVF9DT05GSUc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgTU9ORVlfQkVUX0NPTkZJR1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpPSU5fUk9PTV9GQUlMOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRKb2luUm9vbUZhaWwoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgSk9JTl9ST09NX0ZBSUwgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IFwiTOG7l2kgXCIgKyByZXMuZ2V0RXJyb3IoKSArIFwiLCBraMO0bmcgeMOhYyDEkeG7i25oLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZ2V0RXJyb3IoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJM4buXaSBraeG7g20gdHJhIHRow7RuZyB0aW4hXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJLaMO0bmcgdMOsbSDEkcaw4bujYyBwaMOybmcgdGjDrWNoIGjhu6NwLiBWdWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiQuG6oW4ga2jDtG5nIMSR4bunIHRp4buBbiB2w6BvIHBow7JuZyBjaMahaSBuw6B5IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiS2jDtG5nIHTDrG0gxJHGsOG7o2MgcGjDsm5nIHRow61jaCBo4bujcC4gVnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIk3hu5dpIGzhuqduIHbDoG8gcGjDsm5nIHBo4bqjaSBjw6FjaCBuaGF1IDEwIGdpw6J5IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiSOG7hyB0aOG7kW5nIGLhuqNvIHRyw6whXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJLaMO0bmcgdMOsbSB0aOG6pXkgcGjDsm5nIGNoxqFpIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiTeG6rXQga2jhuql1IHBow7JuZyBjaMahaSBraMO0bmcgxJHDum5nIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiUGjDsm5nIGNoxqFpIMSRw6MgxJHhu6cgbmfGsOG7nWkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiQuG6oW4gYuG7iyBjaOG7pyBwaMOybmcga2jDtG5nIGNobyB2w6BvIGLDoG4hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HRVRfTElTVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEdldExpc3RSb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlcy5saXN0W2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtUm9vbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJQb2tlci5JdGVtUm9vbVwiKS5pbml0SXRlbShpdGVtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMaXN0Um9vbS5zY3JvbGxUb1RvcCgwLjIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSk9JTl9HQU1FX1JPT01fQllfSUQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgSk9JTl9HQU1FX1JPT01fQllfSURcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVFVfRE9OR19CQVRfREFVOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRBdXRvU3RhcnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgUmVjZWl2ZUF1dG9TdGFydCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0F1dG9TdGFydFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidGltZUF1dG9TdGFydFwiOiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4TWVDYXJkTmFtZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGb2xkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuaXNBdXRvU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Q2VudGVyQ2FyZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SHViQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0V2FpdHRpbmdDb3VudERvd24ocmVzLnRpbWVBdXRvU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GeERlYWxlci5zZXRBbmltYXRpb24oMCwgXCJjaG9cIiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDZW50ZXJDYXJkID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UHJpdmF0ZUNhcmRMaXN0ID0gW107XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1lQmV0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNZUJldCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXhCZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhaXNlTWluID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSYWlzZVN0ZXAgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJhaXNlVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllcnNQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5GeERlYWxlci5zZXRBbmltYXRpb24oMCwgXCJjaG9cIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5NT0lfREFUX0NVT0M6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZE1vaURhdEN1b2MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgUmVjZWl2ZWRNb2lEYXRDdW9jIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRpbWVEYXRDdW9jXCI6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCZXR0aW5nQ291bnREb3duKHJlcy50aW1lRGF0Q3VvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJldFZhbHVlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBcIjBcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyckJldFZhbHVlLnB1c2godGhpcy5jdXJyZW50Um9vbUJldCAqIChpbmRleCArIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlck1pbih0aGlzLmN1cnJlbnRSb29tQmV0ICogKDQgLSBpbmRleCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYmV0IGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSB0aGlzLnNlYXRPd25lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgUmVjZWl2ZWRNb2lEYXRDdW9jIGluZGV4IDogXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0QmV0KHRoaXMuY3VycmVudFJvb21CZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gMCkgeyAvLyBrIGtlIGN1YSwgZGFuaCBiaWVuIGR1b2MgbGVuIGNoaW5oIG1pbmhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldHVwQmV0VmFsdWUodGhpcy5jdXJyZW50Um9vbUJldCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWF0SWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGxheWVySWQ6IC0xLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHBsYXllclBvczogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXNWaWV3ZXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhdE93bmVyID09IDApIHsgLy8gTWUgbGEgQ2h1b25nIC0+IEsgZGMgYmV0IHZhIGsgZGMgdmFvIGdhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkZ4RGVhbGVyLnNldEFuaW1hdGlvbigwLCBcImNob1wiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRnhEZWFsZXIuc2V0QW5pbWF0aW9uKDAsIFwibm90aVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwQmV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIE1PSV9EQVRfQ1VPQyB0aGlzLmFyckJldFZhbHVlIDogXCIsIHRoaXMuYXJyQmV0VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bUNhcmRPcGVuZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ0hFQVRfQ0FSRFM6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQ0hFQVRfQ0FSRFNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5EQU5HX0tZX0NIT0lfVElFUDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBEQU5HX0tZX0NIT0lfVElFUFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9PV05FUl9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFVQREFURV9PV05FUl9ST09NXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTk9USUZZX0tJQ0tfRlJPTV9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRLaWNrT2ZmKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIFJlY2VpdmVkS2lja09mZiByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5OT1RJRllfVVNFUl9HRVRfSkFDS1BPVDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBOT1RJRllfVVNFUl9HRVRfSkFDS1BPVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQVRfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkQ2hhdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgQ0hBVF9ST09NIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImlzSWNvblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY29udGVudFwiOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm5pY2tuYW1lXCI6IFwiY2hhb2FlOTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNoYWlyXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0ljb25cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjb250ZW50XCI6IFwibGFsYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm5pY2tuYW1lXCI6IFwiY2hhb2FlOTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSWNvbiA9IHJlc1tcImlzSWNvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gcmVzW1wiY29udGVudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGF0IEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2hhdEVtb3Rpb24oY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGF0IE1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDaGF0TXNnKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgVW5rbm93biAtLWlucGFja2V0LmdldENtZElkKCk6IFwiICsgaW5wYWNrZXQuZ2V0Q21kSWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0XG4gICAgYWN0aW9uTGVhdmVSb29tKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgYWN0aW9uTGVhdmVSb29tXCIpO1xuICAgICAgICBQb2tlck5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kU2VuZFJlcXVlc3RMZWF2ZUdhbWUoKSk7XG4gICAgfVxuXG4gICAgYWN0aW9uT3BlbkNhcmQoKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBhY3Rpb25PcGVuQ2FyZFwiKTtcbiAgICAgICAgUG9rZXJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTaG93Q2FyZCgpKTtcbiAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhY3Rpb25TZW5kVmFvR2EoKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBhY3Rpb25TZW5kVmFvR2FcIik7XG5cbiAgICB9XG5cbiAgICBpbmNyZWFzZUJldFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCA9PSAodGhpcy5hcnJCZXRWYWx1ZS5sZW5ndGggLSAxKSkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ICs9IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJldENob29zZVZhbHVlVGFyZ2V0LnkgPSB0aGlzLmFyckJldFBvc1t0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4XTtcbiAgICB9XG5cbiAgICBkZWNyZWFzZUJldFZhbHVlKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCA9PSAwKSB7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWVUYXJnZXQueSA9IHRoaXMuYXJyQmV0UG9zW3RoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXhdO1xuICAgIH1cblxuICAgIGFjdGlvbkFsbF9JbigpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvbkFsbF9JblwiKTtcbiAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVGFrZVR1cm4oMCwgMCwgMCwgMSwgMCkpO1xuICAgIH1cblxuICAgIGFjdGlvblJhaXNlKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgYWN0aW9uUmFpc2VcIik7XG4gICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkZ4RGVhbGVyLnNldEFuaW1hdGlvbigwLCBcImNob1wiLCB0cnVlKTtcbiAgICAgICAgbGV0IHJhd01lR29sZCA9IHRoaXMuZ2V0UGxheWVySG91c2UoMCkudXNlckdvbGQuc3RyaW5nLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcbiAgICAgICAgbGV0IGN1cnJlbnRNZU1vbmV5ID0gcGFyc2VJbnQocmF3TWVHb2xkKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvblJhaXNlIGN1cnJlbnRNZU1vbmV5IDogXCIsIGN1cnJlbnRNZU1vbmV5KTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvblJhaXNlIGFyckJldFZhbHVlIDogXCIsIHRoaXMuYXJyQmV0VmFsdWUpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgYWN0aW9uUmFpc2UgY3VycmVudEJldFNlbGVjdGVkSW5kZXggOiBcIiwgdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCk7XG4gICAgICAgIGxldCBiZXRWYWx1ZSA9IE1hdGgubWluKHRoaXMuYXJyQmV0VmFsdWVbdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleF0sIGN1cnJlbnRNZU1vbmV5KTtcbiAgICAgICAgLy8gbGV0IGJldFZhbHVlID0gTWF0aC5taW4odGhpcy5jdXJyZW50UmFpc2VWYWx1ZSAtIHRoaXMuY3VycmVudE1lQmV0LCBjdXJyZW50TWVNb25leSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlciBhY3Rpb25SYWlzZSBiZXRWYWx1ZSA6IFwiLCBiZXRWYWx1ZSk7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVGFrZVR1cm4oMCwgMCwgMCwgMCwgYmV0VmFsdWUpKTtcbiAgICB9XG5cbiAgICBhY3Rpb25DaGVjaygpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvbkNoZWNrXCIpO1xuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5GeERlYWxlci5zZXRBbmltYXRpb24oMCwgXCJjaG9cIiwgdHJ1ZSk7XG4gICAgICAgIFBva2VyTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVGFrZVR1cm4oMCwgMSwgMCwgMCwgMCkpO1xuXG4gICAgfVxuXG4gICAgYWN0aW9uQ2FsbCgpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvbkNhbGxcIik7XG4gICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLkZ4RGVhbGVyLnNldEFuaW1hdGlvbigwLCBcImNob1wiLCB0cnVlKTtcbiAgICAgICAgUG9rZXJOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRUYWtlVHVybigwLCAwLCAxLCAwLCAwKSk7XG5cbiAgICB9XG5cbiAgICBhY3Rpb25Gb2xkKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgYWN0aW9uRm9sZFwiKTtcbiAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuRnhEZWFsZXIuc2V0QW5pbWF0aW9uKDAsIFwiY2hvXCIsIHRydWUpO1xuICAgICAgICBQb2tlck5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFRha2VUdXJuKDEsIDAsIDAsIDAsIDApKTtcbiAgICB9XG5cbiAgICBhY3Rpb25CdXlJbigpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvbkJ1eUluXCIpO1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgaW5wdXQgOiBcIiwgdGhpcy5lZHRCdXlJbi5zdHJpbmcpO1xuICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmVkdEJ1eUluLnN0cmluZztcbiAgICAgICAgaWYgKGV2ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciByYXdOdW1iZXIgPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChldmVudFtpbmRleF0gPT0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjJcIlxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudFtpbmRleF0gPT0gXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiNFwiXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjVcIlxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudFtpbmRleF0gPT0gXCI2XCJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiN1wiXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjhcIlxuICAgICAgICAgICAgICAgICAgICB8fCBldmVudFtpbmRleF0gPT0gXCI5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmF3TnVtYmVyICs9IGV2ZW50W2luZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgYWN0aW9uQnV5SW4gcmF3TnVtYmVyIDogXCIsIHJhd051bWJlcik7XG4gICAgICAgICAgICBpZiAocmF3TnVtYmVyICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbiA8IHRoaXMubWF4Q2FzaEluKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4Q2FzaEluID0gQ29uZmlncy5Mb2dpbi5Db2luO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludChyYXdOdW1iZXIpIDwgdGhpcy5taW5DYXNoSW4gKiB0aGlzLmN1cnJlbnRSb29tQmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gQnV5IEluIHBo4bqjaSBs4bubbiBoxqFuIFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMubWluQ2FzaEluICogdGhpcy5jdXJyZW50Um9vbUJldCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KHJhd051bWJlcikgPiB0aGlzLm1heENhc2hJbiAqIHRoaXMuY3VycmVudFJvb21CZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJT4buRIHRp4buBbiBCdXkgSW4gcGjhuqNpIG5o4buPIGjGoW4gXCIgKyBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5tYXhDYXNoSW4gKiB0aGlzLmN1cnJlbnRSb29tQmV0KSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIGFjdGlvbkJ1eUluIENhc2ggSW4gOiBcIiwgcGFyc2VJbnQocmF3TnVtYmVyKSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQXV0b0J1eUluLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBQb2tlck5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEJ1eUluKHBhcnNlSW50KHJhd051bWJlciksIDEpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQb2tlck5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEJ1eUluKHBhcnNlSW50KHJhd051bWJlciksIDApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEJ1eUluKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4ga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGVcbiAgICBpbml0Q29uZmlnUGxheWVyKCkge1xuICAgICAgICBjb25maWdQbGF5ZXIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbmZpZ1BsYXllci5wdXNoKHtcbiAgICAgICAgICAgICAgICBzZWF0SWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIHBsYXllcklkOiAtMSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3M6IC0xLFxuICAgICAgICAgICAgICAgIGlzVmlld2VyOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgfVxuXG4gICAgcmVzZXRDZW50ZXJDYXJkcygpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uID0gY2MudjIoMCwgMTAwKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLnNjYWxlID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldFBsYXllcnNQbGF5aW5nKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkucmVzZXRNYXRjaEhpc3RvcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0QWxsUGxheWVyQ291bnRkb3duKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuaGlkZVBsYXlDb3VudGRvd24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhhbmRsZSBHYW1lIFBsYXllcnNcbiAgICBnZXRDYXJkc05hbWUoYm9CYWlJZCkge1xuICAgICAgICBsZXQgbmFtZSA9IFwiXCI7XG4gICAgICAgIHN3aXRjaCAoYm9CYWlJZCkge1xuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19TQU5IX1ZVQTpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJT4bqjbmggVnVhXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX1RIVU5HX1BIQV9TQU5IOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIlRow7luZyBQaMOhIFPhuqNuaFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19UVV9RVVk6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiVOG7qSBRdcO9XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX0NVX0xVOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIkPDuSBMxalcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRUdfVEhVTkc6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiVGjDuW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX1NBTkg6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiU+G6o25oXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX1hBTV9DTzpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJYw6FtIEPDtFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19IQUlfRE9JOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIkhhaSDEkMO0aVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19ET0k6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwixJDDtGlcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRUdfTUFVX1RIQVU6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiTeG6rXUgVGjhuqd1XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIHNldHVwU2VhdFBsYXllcihzZWF0SWQsIHBsYXllckluZm8pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyIHNldHVwU2VhdFBsYXllciBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xuICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5wbGF5ZXJJZCA9IHBsYXllckluZm8ubmlja05hbWU7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRBdmF0YXIocGxheWVySW5mby5hdmF0YXIpO1xuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0TmFtZShwbGF5ZXJJbmZvLm5pY2tOYW1lKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEdvbGQocGxheWVySW5mby5jdXJyZW50TW9uZXkpO1xuICAgIH1cblxuICAgIGZpbmRQbGF5ZXJTZWF0QnlVaWQodWlkKSB7XG4gICAgICAgIGxldCBzZWF0ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCA9PT0gdWlkKSB7XG4gICAgICAgICAgICAgICAgc2VhdCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWF0O1xuICAgIH1cblxuICAgIGZpbmRQbGF5ZXJQb3NCeVNlYXQoc2VhdCkge1xuICAgICAgICByZXR1cm4gY29uZmlnUGxheWVyW3NlYXRdLnBsYXllclBvcztcbiAgICB9XG5cbiAgICBmaW5kUGxheWVyU2VhdEJ5UG9zKHBvcykge1xuICAgICAgICBpZiAocG9zID09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2VhdCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICBzZWF0ID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlYXQ7XG4gICAgfVxuXG4gICAgZ2V0UGxheWVySG91c2Uoc2VhdElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwUGxheWVycy5jaGlsZHJlbltzZWF0SWRdLmdldENvbXBvbmVudChcIlBva2VyLlBsYXllclwiKTtcbiAgICB9XG5cbiAgICBnZXROdW1QbGF5ZXJzKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgICAgIHZhciBwbGF5ZXJQb3NFbnRyeSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllclBvc0VudHJ5IHBsYXllcklkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllclBvc0VudHJ5IGlzVmlld2VyIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCAhPT0gLTEgJiYgIWNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NFbnRyeS5wdXNoKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgc2VhdElkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgOiBcIiwgcGxheWVyUG9zRW50cnkpO1xuICAgICAgICByZXR1cm4gcGxheWVyUG9zRW50cnk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICB9XG59XG5cbiJdfQ==