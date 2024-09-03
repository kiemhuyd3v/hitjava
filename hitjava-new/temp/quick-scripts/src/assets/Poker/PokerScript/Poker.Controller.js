"use strict";
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