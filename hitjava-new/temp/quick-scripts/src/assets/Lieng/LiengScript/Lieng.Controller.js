"use strict";
cc._RF.push(module, '8bd9eeyoExOCZRelG4QwJB6', 'Lieng.Controller');
// Lieng/LiengScript/Lieng.Controller.ts

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
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Lieng_Cmd_1 = require("./Lieng.Cmd");
var Lieng_NetworkClient_1 = require("./Lieng.NetworkClient");
var Lieng_CardUtil_1 = require("./Lieng.CardUtil");
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
var LiengController = /** @class */ (function (_super) {
    __extends(LiengController, _super);
    function LiengController() {
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
        _this.btnCall = null;
        _this.btnRaise = null;
        _this.btnFollow = null;
        _this.btnOpenCard = null;
        _this.btnLeaveRoom = null;
        _this.hubChips = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.betChooseValue = null;
        _this.betChooseValueTarget = null;
        _this.FxDealer = null;
        _this.btnBuyCashIn = null;
        _this.popupBuyIn = null;
        _this.labelBuyInMin = null;
        _this.labelBuyInMax = null;
        _this.edtBuyIn = null;
        _this.toggleAutoBuyIn = null;
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
        _this.seatOwner = null;
        _this.currentRoomBet = null;
        _this.gameState = null;
        _this.privateCards = null;
        _this.listWins = null;
        _this.maxBet = 0;
        _this.oldMaxBet = 0;
        _this.lastRaise = 0;
        _this.boBaiId = null;
        _this.currentMoney = 0;
        _this.currentBet = 0;
        _this.hasMoBai = false;
        _this.hasAllIn = false;
        _this.action = null;
        _this.raiseStep = 0;
        _this.raiseBlock = 0;
        _this.totalAllIn = 0;
        _this.totalFold = 0;
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
        _this.arrBetPos = [-157.5, -52.5, 52.5, 157.5];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutEndGame = null;
        _this.timeoutChiaBaiDone = null;
        _this.minCashIn = null;
        _this.maxCashIn = null;
        return _this;
    }
    LiengController_1 = LiengController;
    // LIFE-CYCLE CALLBACKS:
    LiengController.prototype.onLoad = function () {
        LiengController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
    };
    LiengController.prototype.start = function () {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        Lieng_NetworkClient_1.default.getInstance().addOnOpen(function () {
            App_1.default.instance.showErrLoading("Đang đang đăng nhập...");
            Lieng_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        Lieng_NetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.loadScene("Lobby");
        }, this);
        Lieng_NetworkClient_1.default.getInstance().connect();
    };
    // Request UI Room
    LiengController.prototype.joinRoom = function (info) {
        //   console.log('555');
        //  cc.log("Lieng joinRoom roomInfo : ", info);
        if (info["requiredMoney"] < Configs_1.default.Login.Coin) {
            App_1.default.instance.showLoading(true);
            Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendJoinRoomById(info["id"]));
        }
        else {
            App_1.default.instance.alertDialog.showMsg("Bạn cần có tối thiểu " + info["requiredMoney"] + " để vào bàn.");
        }
    };
    LiengController.prototype.refeshListRoom = function () {
        this.contentListRooms.removeAllChildren(true);
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendGetListRoom());
    };
    LiengController.prototype.findRoomId = function () {
        //cc.log("Lieng findRoomId id : ", this.edtFindRoom.string);
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
            var idFind = parseInt(text);
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("Lieng.ItemRoom");
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
    LiengController.prototype.hideRoomFull = function () {
        if (this.btnHideRoomFull.isChecked) {
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("Lieng.ItemRoom");
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
    LiengController.prototype.showUIRooms = function () {
        var _this = this;
        this.UI_ChooseRoom.active = true;
        this.UI_Playing.active = false;
        if (this.isInitedUIRoom) {
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        }
        else {
            this.labelNickName.string = Configs_1.default.Login.Nickname;
            BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
                _this.labelCoin.string = Utils_1.default.formatNumber(Configs_1.default.Login.Coin);
            }, this);
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
            this.setupListener();
        }
    };
    LiengController.prototype.closeUIRoom = function () {
        this.UI_ChooseRoom.active = false;
    };
    LiengController.prototype.createRoom = function () {
        App_1.default.instance.alertDialog.showMsg("Tính năng tạo bàn đang tắt.");
    };
    LiengController.prototype.playingNow = function () {
        //cc.log("Lieng playingNow");
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("Lieng.ItemRoom");
            if (roomItem.roomInfo["userCount"] < roomItem.roomInfo["maxUserPerRoom"]) {
                //cc.log("Lieng playingNow con Slot");
                //cc.log("Lieng playingNow requiredMoney : ", roomItem.roomInfo["requiredMoney"]);
                //cc.log("Lieng playingNow Coin : ", Configs.Login.Coin);
                if (roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin) {
                    //cc.log("Lieng playingNow Du tien requiredMoney");
                    //cc.log("Lieng playingNow result : ", roomItem.roomInfo);
                    this.joinRoom(roomItem.roomInfo);
                    index = 100000; // break
                    return;
                }
            }
        }
    };
    // Chat
    LiengController.prototype.showUIChat = function () {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(0.5, 546, 0));
    };
    LiengController.prototype.closeUIChat = function () {
        this.UI_Chat.runAction(cc.moveTo(0.5, 1000, 0));
    };
    LiengController.prototype.chatEmotion = function (event, id) {
        //  cc.log("Lieng chatEmotion id : ", id);
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    LiengController.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    LiengController.prototype.backToLobby = function () {
        //  console.log('5555');
        Lieng_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    // Playing
    LiengController.prototype.showUIPlaying = function () {
        this.UI_Playing.active = true;
    };
    LiengController.prototype.closeUIPlaying = function () {
        this.actionLeaveRoom();
    };
    LiengController.prototype.setupMatch = function (data) {
        this.showUIPlaying();
        this.closeUIChat();
        //cc.log("Lieng setupMatch data : ", data);
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
        //cc.log("Lieng setupMatch myChair  : ", myChair);
        //cc.log("Lieng setupMatch moneyBet  : ", moneyBet);
        //cc.log("Lieng setupMatch roomOwner  : ", roomOwner);
        //cc.log("Lieng setupMatch roomId  : ", roomId);
        //cc.log("Lieng setupMatch gameId  : ", gameId);
        //cc.log("Lieng setupMatch moneyType  : ", moneyType);
        //cc.log("Lieng setupMatch rule  : ", rule);
        //cc.log("Lieng setupMatch playerSize  : ", playerSize);
        //cc.log("Lieng setupMatch playerStatus  : ", playerStatus);
        //cc.log("Lieng setupMatch playerInfos  : ", playerInfos);
        //cc.log("Lieng setupMatch handCardSizeSize  : ", handCardSizeSize);
        //cc.log("Lieng setupMatch handCardSizeList  : ", handCardSizeList);
        //cc.log("Lieng setupMatch minBuyInTiLe  : ", minBuyInTiLe);
        //cc.log("Lieng setupMatch maxBuyInTiLe  : ", maxBuyInTiLe);
        // Kiem tra, chon 1 thoi
        this.gameState = Lieng_Cmd_1.default.Code.STATE_JOIN_ROOM;
        this.labelRoomId.string = "Lieng - PHÒNG: " + roomId;
        this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "$";
        this.currentRoomBet = moneyBet;
        this.resetCenterCards();
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        //cc.log("Lieng setupMatch configPlayer Me : ", configPlayer[0]);
        //cc.log("Lieng setupMatch configPlayer  : ", configPlayer);
        //this.players = playerInfos;
        //    console.log('hhhhhh', playerInfos);
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        var arrPlayerStatus = [];
        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
            if (playerInfos[index].nickName !== "") {
                numPlayers += 1;
                arrPlayerPosExist.push(index);
                arrPlayerInfo.push(playerInfos[index]);
                arrPlayerStatus.push(playerStatus[index]);
            }
        }
        //cc.log("Lieng setupMatch numPlayers : ", numPlayers);
        //cc.log("Lieng setupMatch arrPlayerStatus : ", arrPlayerStatus);
        //cc.log("Lieng setupMatch arrPlayerInfo : ", arrPlayerInfo);
        //cc.log("Lieng setupMatch arrPlayerPosExist : ", arrPlayerPosExist);
        this.resetHubChips();
        // setup configPlayer
        for (var a = 0; a < configPlayer.length; a++) {
            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        }
        // set State of Seat : Yes | No exist Player
        for (var index = 0; index < configPlayer.length; index++) {
            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
            var seatId = configPlayer[index].seatId;
            this.getPlayerHouse(seatId).resetPlayerInfo();
            //     console.log('hhhhhh', seatId);
            if (findPos > -1) {
                // Exist player -> Set Player Info
                if (seatId == 0) {
                    this.showPopupBuyIn(minBuyInTiLe, maxBuyInTiLe, moneyBet);
                }
                if (arrPlayerStatus[findPos] == Lieng_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == Lieng_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                    configPlayer[index].isViewer = false;
                    this.getPlayerHouse(seatId).setIsViewer(false);
                }
                else {
                    configPlayer[index].isViewer = true;
                    this.getPlayerHouse(seatId).setIsViewer(true);
                }
                this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
            }
            else {
                // Not Exist player  -> Active Btn Add player
                this.getPlayerHouse(seatId).showBtnInvite(true);
                configPlayer[index].isViewer = true;
            }
        }
        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).setOwner(false);
        }
        var seatOwner = this.findPlayerSeatByPos(roomOwner);
        if (seatOwner !== -1) {
            this.getPlayerHouse(seatOwner).setOwner(true);
            this.seatOwner = seatOwner;
        }
        //  cc.log("Lieng setupMatch configPlayer : ", configPlayer);
    };
    // Time Start
    LiengController.prototype.startThinkingCountDown = function (seatId, turnTime) {
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
    LiengController.prototype.startWaittingCountDown = function (timeWait) {
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
    LiengController.prototype.setTimeWaittingCountDown = function () {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " Bắt đầu sau : " + this.seconds + "s ";
    };
    // Time End
    LiengController.prototype.startEndCountDown = function (timeWait) {
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
    LiengController.prototype.setTimeEndCountDown = function () {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " Kết thúc sau : " + this.seconds + "s ";
    };
    // Time Bet
    LiengController.prototype.startBettingCountDown = function (turnTime) {
        var _this = this;
        //("Lieng startBettingCountDown turnTime : ", turnTime);
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
    LiengController.prototype.processBetting = function (rate) {
        //cc.log("Lieng processBetting rate : ", rate);
        //cc.log("Lieng processBetting fillRange : ", this.actionBetting.children[0].getComponent(cc.Sprite).fillRange);
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
    };
    // Open Me Card
    LiengController.prototype.openMeCard = function (event, itemId) {
        var _this = this;
        // Open Me cards
        var cardPos = parseInt(itemId);
        //cc.log("Lieng openMeCard cardPos : ", cardPos);
        //  cc.log("Lieng openMeCard currentCard : ", this.currentCard);
        this.getPlayerHouse(0).prepareCardReal(cardPos);
        var spriteCardId = Lieng_CardUtil_1.default.getNormalId(this.currentCard[cardPos]);
        this.getPlayerHouse(0).transformToCardReal(cardPos, this.spriteCards[spriteCardId]);
        this.numCardOpened += 1;
        if (this.numCardOpened == 3) {
            this.btnOpenCard.active = false;
            //this.btnBet.active = false;
            this.getPlayerHouse(0).showCardName(this.getCardsScore());
            setTimeout(function () {
                _this.getPlayerHouse(0).resetCardReady();
            }, 200);
        }
    };
    LiengController.prototype.getCardsScore = function () {
        if (this.boBaiId == null) {
            return "";
        }
        if (this.boBaiId >= 0 && this.boBaiId <= 8) {
            return this.boBaiId + "Điểm";
        }
        if (this.boBaiId == 11)
            return "9 Điểm";
        if (this.boBaiId == 12)
            return "Ảnh";
        if (this.boBaiId == 13)
            return "Liêng";
        if (this.boBaiId == 21)
            return "Sáp Át";
        if (this.boBaiId >= 22 && this.boBaiId <= 30)
            return "Sáp " + (this.boBaiId - 10);
        if (this.boBaiId == 31)
            return "Sáp J";
        if (this.boBaiId == 32)
            return "Sáp Q";
        if (this.boBaiId == 33)
            return "Sáp K";
        return "";
    };
    LiengController.prototype.moveChipsToHubNow = function (index) {
        this.hubChips.children[2 * index].position = cc.v2(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[(2 * index) + 1].position = cc.v2(25, 80);
        this.hubChips.children[(2 * index) + 1].scale = 0;
    };
    LiengController.prototype.fxMoveChips = function (chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(0.8, toX, toY), cc.scaleTo(0.8, 0, 0))));
    };
    LiengController.prototype.resetHubChips = function () {
        var arrFromX = [70, 280, 280, 260, 100, -260, -375, -360];
        var arrFromY = [-195, -150, -55, 70, 90, 85, -30, -155];
        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.hubChips.children[2 * index].position = cc.v2(arrFromX[index], arrFromY[index]);
            this.hubChips.children[(2 * index) + 1].position = cc.v2(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) {
            this.hubChips.children[index].active = false;
        }
    };
    LiengController.prototype.setupBet = function () {
        // arrBetValue
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    LiengController.prototype.showPopupBuyIn = function (min, max, bet) {
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
    LiengController.prototype.closePopupBuyIn = function () {
        this.popupBuyIn.active = false;
    };
    LiengController.prototype.textChange = function (event) {
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
            //  cc.log("Lieng onTextChange rawNumber : ", rawNumber);
            if (rawNumber !== "") {
                this.edtBuyIn.string = Utils_1.default.formatNumber(parseInt(rawNumber));
            }
            else {
                this.edtBuyIn.string = "";
            }
        }
    };
    LiengController.prototype.showOneCenterCards = function (centerCards, index) {
        var _this = this;
        for (var indexq = 0; indexq < centerCards.length; indexq++) {
            var spriteCardId = Lieng_CardUtil_1.default.getNormalId(centerCards[indexq]);
            this.cardsCenter.children[index].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
            this.currentCenterCard.push(centerCards[indexq]);
        }
        // dua 3 la len -175, -10 roi xoe ra ben phai
        setTimeout(function () {
            switch (index) {
                case 0:
                    _this.cardsCenter.children[0].runAction(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)));
                    break;
                case 1:
                    _this.cardsCenter.children[1].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -17, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.2, -85, -45)));
                    break;
                case 2:
                    _this.cardsCenter.children[2].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.2, 0, -45)));
                    break;
                case 3:
                    _this.cardsCenter.children[3].runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(0.1, 85, -45), cc.scaleTo(0.1, 1, 1))));
                    break;
                case 4:
                    _this.cardsCenter.children[4].runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.moveTo(0.1, 170, -45), cc.scaleTo(0.1, 1, 1))));
                    break;
            }
        }, 400);
    };
    // show Center Cards
    LiengController.prototype.showAllCenterCards = function (centerCards) {
        var _this = this;
        this.currentCenterCard = centerCards;
        for (var index = 0; index < centerCards.length; index++) {
            var spriteCardId = Lieng_CardUtil_1.default.getNormalId(centerCards[index]);
            this.cardsCenter.children[index].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        }
        // dua 3 la len -175, -10 roi xoe ra ben phai
        setTimeout(function () {
            _this.cardsCenter.children[0].runAction(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)));
            _this.cardsCenter.children[1].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -17, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.2, -85, -45)));
            _this.cardsCenter.children[2].runAction(cc.sequence(cc.spawn(cc.moveTo(0.1, -170, -45), cc.scaleTo(0.1, 1, 1)), cc.delayTime(0.1), cc.moveTo(0.2, 0, -45)));
            if (_this.currentCenterCard.length > 3) {
                _this.cardsCenter.children[3].runAction(cc.sequence(cc.delayTime(1), cc.spawn(cc.moveTo(0.1, 85, -45), cc.scaleTo(0.1, 1, 1))));
                _this.cardsCenter.children[4].runAction(cc.sequence(cc.delayTime(1.5), cc.spawn(cc.moveTo(0.1, 170, -45), cc.scaleTo(0.1, 1, 1))));
            }
        }, 400);
    };
    // addListener
    LiengController.prototype.setupListener = function () {
        var _this = this;
        Lieng_NetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Lieng_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        //cc.log("Lieng JOIN_ROOM_SUCCESS");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedJoinRoomSucceed(data);
                        //cc.log("Lieng JOIN_ROOM_SUCCESS res : ", JSON.stringify(res));
                        _this.closeUIRoom();
                        _this.setupMatch(res);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
                    {
                        //cc.log("Lieng THONG_TIN_BAN_CHOI");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedGameInfo(data);
                        //cc.log("Lieng THONG_TIN_BAN_CHOI res : ", JSON.stringify(res));
                        _this.closeUIRoom();
                        _this.showUIPlaying();
                        _this.closeUIChat();
                    }
                    break;
                case Lieng_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
                    {
                        //cc.log("Lieng DANG_KY_THOAT_PHONG");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                        //cc.log("Lieng DANG_KY_THOAT_PHONG res : ", JSON.stringify(res));
                        var outChair = res["outChair"];
                        var isOutRoom = res["isOutRoom"];
                        var seatId_1 = _this.findPlayerSeatByPos(outChair);
                        if (seatId_1 !== -1) {
                            _this.getPlayerHouse(seatId_1).showNotify("Sắp rời bàn !");
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.NEW_USER_JOIN:
                    {
                        //cc.log("Lieng NEW_USER_JOIN");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedUserJoinRoom(data);
                        //cc.log("Lieng NEW_USER_JOIN res : ", JSON.stringify(res));
                        var nickName = res["info"]["nickName"];
                        var avatar = res["info"]["avatar"];
                        var currentMoney = res["info"]["money"];
                        var chair = res["uChair"];
                        var status = res["uStatus"];
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            if (configPlayer[index].playerPos == chair) {
                                // Exist player -> Set Player Info
                                var seat = configPlayer[index].seatId;
                                _this.getPlayerHouse(seat).resetPlayerInfo();
                                var customPlayerInfo = {
                                    "avatar": avatar,
                                    "nickName": nickName,
                                    "currentMoney": currentMoney,
                                };
                                _this.setupSeatPlayer(seat, customPlayerInfo);
                                if (status == Lieng_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    _this.getPlayerHouse(seat).setIsViewer(true);
                                    configPlayer[seat].isViewer = true;
                                    // this.getPlayerHouse(seat).playFxViewer();
                                }
                                else {
                                    _this.getPlayerHouse(seat).setIsViewer(false);
                                    configPlayer[seat].isViewer = false;
                                }
                            }
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.LEAVE_GAME:
                    {
                        //  cc.log("Lieng LEAVE_GAME");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedUserLeaveRoom(data);
                        //  cc.log("Lieng LEAVE_GAME res : ", JSON.stringify(res));
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
                case Lieng_Cmd_1.default.Code.TAKE_TURN:
                    {
                        //cc.log("Lieng TAKE_TURN");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedTakeTurn(data);
                        //cc.log("Lieng TAKE_TURN res : ", JSON.stringify(res));
                        var actionChair = res["actionChair"];
                        var action = res["action"];
                        var lastRaise = res["lastRaise"];
                        var currentBet = res["currentBet"];
                        var maxBet = res["maxBet"];
                        _this.action = action;
                        var currentMoney = res["currentMoney"];
                        var raiseStep = res["raiseStep"];
                        var raiseBlock = res["raiseBlock"];
                        _this.oldMaxBet = _this.maxBet;
                        _this.maxBet = maxBet;
                        if (_this.oldMaxBet < _this.maxBet) {
                            _this.lastRaise = _this.maxBet - _this.oldMaxBet;
                        }
                        _this.raiseStep = raiseStep;
                        if (_this.raiseStep < _this.currentRoomBet) {
                            _this.raiseStep = _this.currentRoomBet;
                        }
                        _this.raiseBlock = raiseBlock;
                        //cc.log("Lieng TAKE_TURN actionChair : ", actionChair);
                        //cc.log("Lieng TAKE_TURN action : ", action);
                        //cc.log("Lieng TAKE_TURN lastRaise : ", lastRaise);
                        //cc.log("Lieng TAKE_TURN currentBet : ", currentBet);
                        //cc.log("Lieng TAKE_TURN maxBet : ", maxBet);
                        ///cc.log("Lieng TAKE_TURN currentMoney : ", currentMoney);
                        //cc.log("Lieng TAKE_TURN raiseStep : ", raiseStep);
                        //cc.log("Lieng TAKE_TURN raiseBlock : ", raiseBlock);
                        var seatId_3 = _this.findPlayerSeatByPos(actionChair);
                        if (seatId_3 == 0) {
                            _this.currentBet = currentBet;
                            _this.currentMoney = currentMoney;
                            if (_this.action == Lieng_Cmd_1.default.Code.GAME_ACTION_FOLD) {
                                _this.hasMoBai = true;
                            }
                            if (_this.action == Lieng_Cmd_1.default.Code.GAME_ACTION_ALL_IN) {
                                _this.hasAllIn = true;
                            }
                        }
                        if (seatId_3 != -1) {
                            var actionName = "";
                            switch (action) {
                                case Lieng_Cmd_1.default.Code.GAME_ACTION_FOLD:
                                    actionName = "FOLD";
                                    _this.totalFold += 1;
                                    break;
                                case Lieng_Cmd_1.default.Code.GAME_ACTION_CHECK:
                                    actionName = "CHECK";
                                    break;
                                case Lieng_Cmd_1.default.Code.GAME_ACTION_CALL:
                                    actionName = "CALL";
                                    break;
                                case Lieng_Cmd_1.default.Code.GAME_ACTION_RAISE:
                                    actionName = "RAISE";
                                    break;
                                case Lieng_Cmd_1.default.Code.GAME_ACTION_ALL_IN:
                                    actionName = "ALL-IN";
                                    _this.totalAllIn += 1;
                                    break;
                                default:
                                    break;
                            }
                            _this.getPlayerHouse(seatId_3).showActionState(actionName);
                            _this.getPlayerHouse(seatId_3).setGold(currentMoney);
                            _this.getPlayerHouse(seatId_3).setBet(currentBet);
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.SELECT_DEALER:
                    {
                        //cc.log("Lieng SELECT_DEALER");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedSelectDealer(data);
                        //cc.log("Lieng SELECT_DEALER res : ", JSON.stringify(res));
                        _this.raiseBlock = 0;
                        _this.boBaiId = null;
                        _this.numCardOpened = 0;
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
                        _this.raiseStep = _this.oldMaxBet = _this.maxBet = _this.currentRoomBet;
                        _this.privateCards = null;
                        _this.listWins = null;
                        _this.hasAllIn = false;
                        _this.hasMoBai = false;
                        _this.totalFold = 0;
                        _this.totalAllIn = 0;
                        //cc.log("Lieng SELECT_DEALER dealerChair : ", dealerChair);
                        //cc.log("Lieng SELECT_DEALER smallBlindChair : ", smallBlindChair);
                        //cc.log("Lieng SELECT_DEALER bigBlindChair : ", bigBlindChair);
                        //cc.log("Lieng SELECT_DEALER hasInfoSize : ", hasInfoSize);
                        //cc.log("Lieng SELECT_DEALER hasInfoList : ", hasInfoList);
                        //cc.log("Lieng SELECT_DEALER playerStatusList : ", playerStatusList);
                        //cc.log("Lieng SELECT_DEALER gameId : ", gameId);
                        //cc.log("Lieng SELECT_DEALER isCheat : ", isCheat);
                        //cc.log("Lieng SELECT_DEALER currentMoneySize : ", currentMoneySize);
                        //cc.log("Lieng SELECT_DEALER currentMoneyList : ", currentMoneyList);
                        //cc.log("Lieng SELECT_DEALER size : ", size);
                        //cc.log("Lieng SELECT_DEALER listBetBigBlind : ", listBetBigBlind);
                        // set Dealer, SB, BB state
                        for (var index = _this.lastRaise = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            _this.getPlayerHouse(index).setDealer(false);
                            _this.getPlayerHouse(index).setSmallBind(false);
                            _this.getPlayerHouse(index).setBigBind(false);
                            // if (listBetBigBlind[index]) {
                            //     let id = this.findPlayerSeatByPos(index);
                            //     this.getPlayerHouse(id).setBet(2 * this.currentRoomBet);
                            // }
                        }
                        var seatIdDealer = _this.findPlayerSeatByPos(dealerChair);
                        if (seatIdDealer != -1) {
                            _this.getPlayerHouse(seatIdDealer).setDealer(true);
                        }
                        _this.currentBet = 0;
                        // let seatIdSmallBind = this.findPlayerSeatByPos(smallBlindChair);
                        // if (seatIdSmallBind != -1) {
                        //     this.getPlayerHouse(seatIdSmallBind).setSmallBind(true);
                        //     let small = 0 < listBetBigBlind[smallBlindChair] ? 2 * this.currentRoomBet : this.currentRoomBet;
                        //     if (seatIdSmallBind == 0) {
                        //         this.currentBet = small;
                        //     }
                        //     console.log('6666', listBetBigBlind, small, smallBlindChair, seatIdSmallBind);
                        //     this.getPlayerHouse(seatIdSmallBind).setBet(small);
                        // }
                        // let seatIdBigBind = this.findPlayerSeatByPos(bigBlindChair);
                        // if (seatIdBigBind != -1) {
                        //     if (seatIdBigBind == 0) {
                        //         this.currentBet = 2 * this.currentRoomBet;
                        //     }
                        //     this.getPlayerHouse(seatIdBigBind).setBigBind(true);
                        //     this.getPlayerHouse(seatIdBigBind).setBet(2 * this.currentRoomBet);
                        // }
                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            if (configPlayer[index].isViewer === false) {
                                var seatId_4 = configPlayer[index].seatId;
                                if (seatId_4 == 0) {
                                    _this.currentBet = _this.currentRoomBet;
                                    _this.currentMoney = _this.currentMoney - _this.currentRoomBet;
                                }
                                _this.getPlayerHouse(seatId_4).setBet(_this.currentRoomBet);
                            }
                        }
                        // update Gold
                        for (var index = 0; index < currentMoneyList.length; index++) {
                            if (currentMoneyList[index] > 0) {
                                var seatId_5 = _this.findPlayerSeatByPos(index);
                                if (seatId_5 == 0) {
                                    _this.currentMoney = currentMoneyList[index];
                                }
                                _this.getPlayerHouse(seatId_5).setGold(currentMoneyList[index]);
                                _this.getPlayerHouse(seatId_5).addChips();
                            }
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.BUY_IN:
                    {
                        //cc.log("Lieng BUY_IN");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedBuyIn(data);
                        //cc.log("Lieng BUY_IN res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var buyInMoney = res["buyInMoney"];
                        //cc.log("Lieng BUY_IN chair : ", chair);
                        //cc.log("Lieng BUY_IN buyInMoney : ", buyInMoney);
                        var seatId_6 = _this.findPlayerSeatByPos(chair);
                        if (seatId_6 != -1) {
                            if (seatId_6 == 0) {
                                // Me buy in
                                App_1.default.instance.showLoading(false);
                                _this.currentMoney = buyInMoney;
                            }
                            _this.getPlayerHouse(seatId_6).setGold(buyInMoney);
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.DEAL_PRIVATE_CARD:
                    {
                        //cc.log("Lieng DEAL_PRIVATE_CARD");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedDealCards(data);
                        //cc.log("Lieng DEAL_PRIVATE_CARD res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var sizeCard = res["sizeCard"];
                        var myCards = res["myCards"];
                        var boBaiId = res["boBaiId"];
                        _this.boBaiId = boBaiId;
                        //cc.log("Lieng DEAL_PRIVATE_CARD chair : ", chair);
                        //cc.log("Lieng DEAL_PRIVATE_CARD sizeCard : ", sizeCard);
                        //cc.log("Lieng DEAL_PRIVATE_CARD myCards : ", myCards);
                        //cc.log("Lieng DEAL_PRIVATE_CARD boBaiId : ", boBaiId);
                        _this.btnBet.active = false;
                        _this.btnOpenCard.active = false;
                        _this.matchPot.active = true;
                        _this.currentCard = myCards;
                        //cc.log("Lieng ReceivedChiaBai currentCard : ", this.currentCard);
                        var arrSeatExist = _this.getNumPlayers();
                        var numPlayer_1 = arrSeatExist.length;
                        //cc.log("Lieng ReceivedChiaBai arrSeatExist : ", arrSeatExist);
                        //cc.log("Lieng ReceivedChiaBai numPlayer : ", numPlayer);
                        // Open | Hide cards not use
                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER * 2; index++) { // 8 players * 2 cards
                            _this.cardsDeal.children[index].active = index >= numPlayer_1 * 2 ? false : true;
                            _this.cardsDeal.children[index].position = cc.v2(0, 0);
                        }
                        // Move Cards used to each player joined
                        for (var a = 0; a < 3; a++) { // players x 2 cards
                            for (var b = 0; b < numPlayer_1; b++) {
                                var seatId_7 = arrSeatExist[b];
                                if (seatId_7 !== -1) {
                                    var card4Me = _this.cardsDeal.children[(a * numPlayer_1) + b];
                                    var rawPlayerPos = _this.groupPlayers.children[seatId_7].position;
                                    //cc.log("Lieng CHIA_BAI delayTime : ", ((a * numPlayer) + b) * 0.15);
                                    card4Me.runAction(cc.sequence(cc.delayTime(((a * numPlayer_1) + b) * 0.15), cc.moveTo(0.2, rawPlayerPos)));
                                }
                            }
                        }
                        var delayOver2Under = 0.2;
                        var maxDelay = ((1 * numPlayer_1) + (numPlayer_1 - 1)) * 0.15; // ((a * numPlayer) + b) * 0.15
                        var timeUnderLayer = (maxDelay + 0.2 + delayOver2Under) * 1000;
                        //cc.log("CHIA_BAI timeUnderLayer : ", timeUnderLayer);
                        clearTimeout(_this.timeoutChiaBaiDone);
                        _this.timeoutChiaBaiDone = setTimeout(function () {
                            for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER * 2; index++) { // 8 players * 2 cards
                                //cc.log("CHIA_BAI cardsDeal index : ", index);
                                _this.cardsDeal.children[index].active = false;
                            }
                            for (var index = 0; index < numPlayer_1; index++) {
                                var seatId_8 = arrSeatExist[index];
                                if (seatId_8 !== -1) {
                                    // Drop layer
                                    if (seatId_8 == 0) {
                                        _this.getPlayerHouse(seatId_8).resetCardReady();
                                    }
                                    _this.getPlayerHouse(seatId_8).showCardReady(true);
                                    _this.getPlayerHouse(seatId_8).showCardReal(false);
                                }
                            }
                            // Open Me cards
                            // for (let a = 0; a < 3; a++) {
                            //     //cc.log("Lieng cardId : ", myCards[a]);
                            //     let spriteCardId = CardUtils.getNormalId(myCards[a]);
                            //     this.getPlayerHouse(0).prepareToTransform();
                            //     this.getPlayerHouse(0).transformToCardReal(a, this.spriteCards[spriteCardId]);
                            // }
                            // let cardName = this.getCardsName(boBaiId);
                            // this.getPlayerHouse(0).showCardName(cardName);
                        }, timeUnderLayer);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.NEW_ROUND:
                    {
                        //cc.log("Lieng NEW_ROUND");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedNewBetRound(data);
                        //cc.log("Lieng NEW_ROUND res : ", JSON.stringify(res));
                        var roundId = res["roundId"];
                        var sizeCard = res["sizeCard"];
                        var plusCards = res["plusCards"];
                        var cardName = res["cardName"];
                        var potAmount = res["potAmount"];
                        if (sizeCard == 3) {
                            _this.showAllCenterCards(plusCards);
                        }
                        else {
                            _this.showOneCenterCards(plusCards, _this.currentCenterCard.length);
                        }
                        //this.action = null;
                        _this.maxBet = 0;
                        _this.currentBet = 0;
                        _this.raiseStep = 2 * _this.currentRoomBet;
                        //cc.log("Lieng NEW_ROUND roundId : ", roundId);
                        //cc.log("Lieng NEW_ROUND sizeCard : ", sizeCard);
                        //cc.log("Lieng NEW_ROUND plusCards : ", plusCards);
                        //cc.log("Lieng NEW_ROUND cardName : ", cardName);
                        //cc.log("Lieng NEW_ROUND potAmount : ", potAmount);
                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            if (configPlayer[index].playerId != -1) {
                                var id = _this.findPlayerSeatByPos(index);
                                _this.getPlayerHouse(configPlayer[index].seatId).setBet(0);
                            }
                        }
                        _this.matchPot.active = true;
                        _this.currentMatchPotValue = potAmount;
                        _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CHANGE_TURN:
                    {
                        //cc.log("Lieng CHANGE_TURN");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedChangeTurn(data);
                        //cc.log("Lieng CHANGE_TURN res : ", JSON.stringify(res));
                        var roundId = res["roundId"];
                        var chair = res["chair"];
                        var betTime = res["betTime"];
                        //  cc.log("Lieng CHANGE_TURN roundId : ", roundId);
                        //cc.log("Lieng CHANGE_TURN chair : ", chair);
                        //cc.log("Lieng CHANGE_TURN betTime : ", betTime);
                        //         console.log('777777', this.currentBet, this.maxBet,this.currentMoney, this.raiseBlock, this.totalAllIn, this.totalFold, configPlayer);
                        var seatId_9 = _this.findPlayerSeatByPos(chair);
                        if (seatId_9 != -1) {
                            _this.getPlayerHouse(seatId_9).showPlayCountdown();
                            _this.startThinkingCountDown(seatId_9, betTime);
                            if (seatId_9 == 0) {
                                if (_this.hasMoBai) {
                                    _this.btnBet.active = false;
                                    _this.btnOpenCard.active = true;
                                }
                                else if (_this.hasAllIn) {
                                    _this.btnBet.active = false;
                                    _this.btnOpenCard.active = false;
                                }
                                else {
                                    if (_this.maxBet == _this.currentBet) {
                                        _this.btnCall.active = false;
                                        _this.btnRaise.active = true;
                                        _this.btnFollow.active = true;
                                    }
                                    else if (_this.maxBet - _this.currentBet >= _this.currentMoney) {
                                        _this.btnCall.active = false;
                                        _this.btnRaise.active = false;
                                        _this.btnFollow.active = false;
                                    }
                                    else {
                                        var totalPlay = 0;
                                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                                            if (configPlayer[index].isViewer == false) {
                                                totalPlay += 1;
                                            }
                                        }
                                        if (_this.totalAllIn + _this.totalFold + 1 < totalPlay) {
                                            _this.btnCall.active = true;
                                            _this.btnRaise.active = true;
                                            _this.btnFollow.active = false;
                                        }
                                        else {
                                            _this.btnCall.active = true;
                                            _this.btnRaise.active = false;
                                            _this.btnFollow.active = false;
                                        }
                                    }
                                    _this.btnBet.active = true;
                                    _this.btnOpenCard.active = false;
                                }
                            }
                            _this.arrBetValue = [];
                            //this.matchPot.active = true;
                            //this.currentMatchPotValue = 0;
                            //this.labelMatchPot.string = "0";
                            //console.log('777777', this.maxBet, this.raiseStep);
                            for (var index = 0; index < 4; index++) {
                                _this.arrBetValue.push((_this.maxBet + _this.raiseStep) * (index + 1));
                                _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin((_this.maxBet + _this.raiseStep) * (4 - index));
                            }
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.KET_THUC:
                    {
                        //cc.log("Lieng KET_THUC");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedEndGame(data);
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
                        _this.action = null;
                        _this.matchPot.active = true;
                        _this.currentMatchPotValue = potAmount;
                        _this.labelMatchPot.string = Utils_1.default.formatNumber(potAmount);
                        // show Fx win
                        _this.privateCards = privateCardList;
                        _this.listWins = booleanWinerList;
                        // find Players is Playing
                        // let arrPlayerPosExist = [];
                        // for (let index = 0; index < cmd.Code.MAX_PLAYER; index++) {
                        //     if (maxCardList[index].length > 0) {
                        //         arrPlayerPosExist.push(index);
                        //     }
                        // }
                        for (var index = 0; index < publicCards.length; index++) {
                            if (publicCards[index] === 1 && privateCardList[index].length > 0) {
                                var id = _this.findPlayerSeatByPos(index);
                                if (id != -1 && id != 0) {
                                    for (var a = 0; a < 3; a++) {
                                        //cc.log("Lieng cardId : ", myCards[a]);
                                        var spriteCardId = Lieng_CardUtil_1.default.getNormalId(privateCardList[index][a]);
                                        _this.getPlayerHouse(id).prepareToTransform();
                                        _this.getPlayerHouse(id).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                                    }
                                    //this.getPlayerHouse(id).transformToCardReal();
                                }
                            }
                        }
                        // find Winner
                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            var seatId_10 = _this.findPlayerSeatByPos(index);
                            if (booleanWinerList[index] == 1) {
                                // Winner
                                if (seatId_10 != -1) {
                                    _this.getPlayerHouse(seatId_10).fxWin({
                                        moneyChange: kqttList[index],
                                        currentMoney: currentMoney[index]
                                    });
                                    if (seatId_10 == 0) {
                                        // Me win
                                        _this.currentMoney = currentMoney[index];
                                        //this.btnOpenCard.active = true;
                                        _this.btnBet.active = false;
                                    }
                                }
                            }
                            else {
                                // Lose : can kiem tra xem co phai isPlaying k
                                //let findId = arrPlayerPosExist.indexOf(index);
                                if (hasInfoList[index]) {
                                    _this.getPlayerHouse(seatId_10).fxLose({
                                        moneyChange: kqttList[index],
                                        currentMoney: currentMoney[index]
                                    });
                                    if (seatId_10 == 0) {
                                        // Me win
                                        _this.currentMoney = currentMoney[index];
                                    }
                                }
                            }
                            if (seatId_10 == 0) {
                                Configs_1.default.Login.Coin = gameMoney[index];
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            }
                        }
                        // show Center Cards
                        //this.showAllCenterCards(publicCards);
                        // reshow Me cards for reconnect
                        // find Me max cards
                        var endMeCards = _this.currentCard;
                        var endCenterCards = publicCards;
                        // let endMeMaxCards = maxCardList[configPlayer[0].playerPos];
                        // //cc.log("Lieng KET_THUC endMeCards : ", endMeCards);
                        // // cc.log("Lieng KET_THUC endCenterCards : ", endCenterCards);
                        // //cc.log("Lieng KET_THUC endMeMaxCards : ", endMeMaxCards);
                        // if (endMeMaxCards != undefined && endMeMaxCards.length > 0) {
                        //     for (let index = 0; index < endMeCards.length; index++) {
                        //         let findId = endMeMaxCards.indexOf(endMeCards[index]);
                        //         if (findId !== -1) {
                        //             this.getPlayerHouse(0).setCardWin(index, true);
                        //         } else {
                        //             this.getPlayerHouse(0).setCardWin(index, false);
                        //         }
                        //     }
                        //     for (let index = 0; index < endCenterCards.length; index++) {
                        //         let findId = endMeMaxCards.indexOf(endCenterCards[index]);
                        //         if (findId !== -1) {
                        //             this.cardsCenter.children[index].color = cc.Color.WHITE;
                        //         } else {
                        //             this.cardsCenter.children[index].color = cc.Color.GRAY;
                        //         }
                        //     }
                        // }
                        // show Cards Name
                        // for (let index = 0; index < arrPlayerPosExist.length; index++) {
                        //     let cardName = this.getCardsName(cardNameList[arrPlayerPosExist[index]]);
                        //     let seatId = this.findPlayerSeatByPos(arrPlayerPosExist[index]);
                        //     if (seatId != -1) {
                        //         this.getPlayerHouse(seatId).showCardName(cardName);
                        //     }
                        // }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.UPDATE_MATCH:
                    {
                        //  cc.log("Lieng UPDATE_MATCH");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedUpdateMatch(data);
                        //  cc.log("Lieng UPDATE_MATCH res : ", JSON.stringify(res));
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
                        //  cc.log("Lieng setupMatch configPlayer : ", configPlayer);
                        // theo Pos khong phai SeatId
                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            var pos = configPlayer[index]["playerPos"];
                            if (hasInfoList[pos] == 1) {
                                // setGold se inactive isViewer nen dat no len dau de ben duoi config lai
                                _this.getPlayerHouse(index).setGold(currentMoneyList[pos]);
                                if (statusList[pos] == Lieng_Cmd_1.default.Code.PLAYER_STATUS_SITTING || statusList[pos] == Lieng_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                                    configPlayer[index].isViewer = false;
                                    configPlayer[index]["isViewer"] = false;
                                    _this.getPlayerHouse(index).setIsViewer(false);
                                }
                                else {
                                    configPlayer[index].isViewer = true;
                                    configPlayer[index]["isViewer"] = true;
                                    _this.getPlayerHouse(index).setIsViewer(true);
                                }
                            }
                            else {
                                configPlayer[index]["playerId"] = -1;
                                configPlayer[index]["isViewer"] = true;
                            }
                        }
                        //  cc.log("Lieng setupMatch configPlayer : ", configPlayer);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.SHOW_CARD:
                    {
                        //cc.log("Lieng SHOW_CARD");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedShowCard(data);
                        //cc.log("Lieng SHOW_CARD res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var id = _this.findPlayerSeatByPos(chair);
                        var cardShow = _this.privateCards[chair];
                        if (id != -1 && id != 0) {
                            for (var a = 0; a < 3; a++) {
                                //cc.log("Lieng cardId : ", myCards[a]);
                                var spriteCardId = Lieng_CardUtil_1.default.getNormalId(cardShow[a]);
                                _this.getPlayerHouse(id).prepareToTransform();
                                _this.getPlayerHouse(id).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                            }
                            //this.getPlayerHouse(id).transformToCardReal();
                        }
                        //  cc.log("Lieng SHOW_CARD chair : ", chair);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.REQUEST_BUY_IN:
                    {
                        //  cc.log("Lieng REQUEST_BUY_IN");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.REQUEST_STAND_UP:
                    {
                        //  cc.log("Lieng REQUEST_STAND_UP");
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedStandUp(data);
                        //  cc.log("Lieng REQUEST_STAND_UP res : ", JSON.stringify(res));
                        var isUp = res["isUp"];
                        //  cc.log("Lieng REQUEST_STAND_UP isUp : ", isUp);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.LOGIN:
                    App_1.default.instance.showLoading(false);
                    _this.refeshListRoom();
                    Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.CmdReconnectRoom());
                    break;
                case Lieng_Cmd_1.default.Code.TOPSERVER:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng TOPSERVER");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CMD_PINGPONG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng CMD_PINGPONG");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CMD_JOIN_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng CMD_JOIN_ROOM");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng CMD_RECONNECT_ROOM");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng CMD_RECONNECT_ROOM");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.MONEY_BET_CONFIG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng MONEY_BET_CONFIG");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.JOIN_ROOM_FAIL:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedJoinRoomFail(data);
                        //  cc.log("Lieng JOIN_ROOM_FAIL res : ", JSON.stringify(res));
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
                case Lieng_Cmd_1.default.Code.GET_LIST_ROOM:
                    {
                        var res = new Lieng_Cmd_1.default.ReceivedGetListRoom(data);
                        //  cc.log(res);
                        for (var i = 0; i < res.list.length; i++) {
                            var itemData = res.list[i];
                            var item = cc.instantiate(_this.prefabItemRoom);
                            item.getComponent("Lieng.ItemRoom").initItem(itemData);
                            _this.contentListRooms.addChild(item);
                        }
                        _this.scrollListRoom.scrollToTop(0.2);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng JOIN_GAME_ROOM_BY_ID");
                    }
                    break;
                // ------------------------ Game ---------------------------   
                case Lieng_Cmd_1.default.Code.TU_DONG_BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedAutoStart(data);
                        //  cc.log("Lieng ReceiveAutoStart res : ", JSON.stringify(res));
                        // {
                        //     "isAutoStart": true,
                        //     "timeAutoStart": 5
                        // }
                        if (res.isAutoStart) {
                            _this.resetCenterCards();
                            _this.resetHubChips();
                            _this.startWaittingCountDown(res.timeAutoStart);
                            _this.btnBet.active = false;
                            _this.btnOpenCard.active = false;
                            _this.matchPot.active = false;
                            _this.currentMatchPotValue = 0;
                            _this.labelMatchPot.string = Utils_1.default.formatNumber(0);
                            _this.resetPlayersPlaying();
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedGameInfo(data);
                        //  cc.log("Lieng ReceivedGameInfo res : ", JSON.stringify(res));
                        // case Reconnect
                        // user dang o trong 1 phong nao do
                        // neu req join room nhan dc cai nay thi -> dua vao phong dang choi
                        // {
                        //     "myChair": 3,
                        //     "chuongChair": 4,
                        //     "cards": [22, 34, 32],
                        //     "cuocDanhBienList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "cuocKeCuaList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "gameServerState": 1,
                        //     "isAutoStart": true,
                        //     "gameAction": 2,
                        //     "countDownTime": 13,
                        //     "moneyType": 1,
                        //     "moneyBet": 100,
                        //     "gameId": 1828082,
                        //     "roomId": 98,
                        //     "hasInfo": [true, true, true, true, true, false, false, false],
                        //     "players": [[], [], [], [], [], [], [], []]
                        // }
                        _this.closeUIRoom();
                        _this.showUIPlaying();
                        _this.closeUIChat();
                        var myChair = res["myChair"];
                        var chuongChair = res["chuongChair"];
                        var cards = res["cards"];
                        var cuocDanhBienList = res["cuocDanhBienList"];
                        var cuocKeCuaList = res["cuocKeCuaList"];
                        var gameServerState = res["gameServerState"];
                        var isAutoStart = res["isAutoStart"];
                        var gameAction = res["gameAction"];
                        var countDownTime = res["countDownTime"];
                        var moneyType = res["moneyType"];
                        var moneyBet = res["moneyBet"];
                        var gameId = res["gameId"];
                        var roomId = res["roomId"];
                        var hasInfo = res["hasInfo"];
                        var players = res["players"];
                        _this.labelRoomId.string = "BA CÂY - PHÒNG: " + roomId;
                        _this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "$";
                        _this.currentRoomBet = moneyBet;
                        _this.gameState = gameAction;
                        _this.currentCard = cards;
                        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
                        configPlayer[0].playerPos = myChair;
                        //  cc.log("Lieng setupMatch configPlayer Me : ", configPlayer[0]);
                        //  cc.log("Lieng setupMatch configPlayer  : ", configPlayer);
                        var numPlayers = 0;
                        var arrPlayerPosExist = [];
                        for (var index = 0; index < hasInfo.length; index++) {
                            if (hasInfo[index]) {
                                numPlayers += 1;
                                arrPlayerPosExist.push(index);
                            }
                        }
                        //  cc.log("Lieng numPlayers : ", numPlayers);
                        // setup configPlayer
                        for (var a = 0; a < configPlayer.length; a++) {
                            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
                        }
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
                            var seatId = configPlayer[index].seatId;
                            _this.getPlayerHouse(seatId).resetPlayerInfo();
                            if (findPos > -1) {
                                // Exist player -> Set Player Info
                                // dang thieu thong tin -> se k hien dc UserInfo
                                // if (arrPlayerStatus[findPos] == cmd.Code.PLAYER_STATUS_READY) {
                                //     configPlayer[index].isViewer = false;
                                //     this.getPlayerHouse(seatId).setIsViewer(false);
                                // } else {
                                //     configPlayer[index].isViewer = true;
                                //     this.getPlayerHouse(seatId).setIsViewer(true);
                                // }
                                _this.getPlayerHouse(seatId).setIsViewer(false);
                                _this.setupSeatPlayer(seatId, {
                                    nickName: "",
                                    avatar: Utils_1.default.randomRange(1, 9),
                                    currentMoney: ""
                                });
                            }
                            else {
                                // Not Exist player  -> Active Btn Add player
                                _this.getPlayerHouse(seatId).showBtnInvite(true);
                                configPlayer[index].isViewer = true;
                            }
                        }
                        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            _this.getPlayerHouse(index).setOwner(false);
                        }
                        var seatOwner = _this.findPlayerSeatByPos(chuongChair);
                        if (seatOwner !== -1) {
                            _this.getPlayerHouse(seatOwner).setOwner(true);
                            _this.seatOwner = seatOwner;
                        }
                        _this.resetHubChips();
                    }
                    break;
                case Lieng_Cmd_1.default.Code.MOI_DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedMoiDatCuoc(data);
                        //  cc.log("Lieng ReceivedMoiDatCuoc res : ", JSON.stringify(res));
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
                                //  cc.log("Lieng ReceivedMoiDatCuoc index : ", index);
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
                        }
                        else {
                            _this.btnBet.active = true;
                            _this.btnOpenCard.active = false;
                            _this.setupBet();
                            //  cc.log("Lieng MOI_DAT_CUOC this.arrBetValue : ", this.arrBetValue);
                        }
                        _this.numCardOpened = 0;
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CHEAT_CARDS:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng CHEAT_CARDS");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng DANG_KY_CHOI_TIEP");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng UPDATE_OWNER_ROOM");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedKickOff(data);
                        //  cc.log("Lieng ReceivedKickOff res : ", JSON.stringify(res));
                    }
                    break;
                case Lieng_Cmd_1.default.Code.NEW_USER_JOIN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedUserJoinRoom(data);
                        //  cc.log("Lieng ReceivedUserJoinRoom res : ", JSON.stringify(res));
                        // {
                        //     "info": {
                        //       "nickName": "Ahoang88",
                        //       "avatar": "7",
                        //       "money": 10230080
                        //     },
                        //     "uChair": 5,
                        //     "uStatus": 1
                        //   }
                        var info = res["info"];
                        var uChair = res["uChair"];
                        var uStatus = res["uStatus"];
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            if (configPlayer[index].playerPos == uChair) {
                                // Exist player -> Set Player Info
                                var seat = configPlayer[index].seatId;
                                _this.getPlayerHouse(seat).resetPlayerInfo();
                                var customPlayerInfo = {
                                    "avatar": info["avatar"],
                                    "nickName": info["nickName"],
                                    "currentMoney": info["money"],
                                };
                                _this.setupSeatPlayer(seat, customPlayerInfo);
                                if (uStatus == Lieng_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    _this.getPlayerHouse(seat).setIsViewer(true);
                                    configPlayer[seat].isViewer = true;
                                    // this.getPlayerHouse(seat).playFxViewer();
                                }
                                else {
                                    _this.getPlayerHouse(seat).setIsViewer(false);
                                    configPlayer[seat].isViewer = false;
                                }
                            }
                        }
                    }
                    break;
                case Lieng_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("Lieng NOTIFY_USER_GET_JACKPOT");
                    }
                    break;
                case Lieng_Cmd_1.default.Code.UPDATE_MATCH:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedUpdateMatch(data);
                        //  cc.log("Lieng ReceivedUpdateMatch res : ", JSON.stringify(res));
                        // {
                        //     "myChair": 2,
                        //     "hasInfo": [
                        //       true,
                        //       true,
                        //       true,
                        //       true,
                        //       false,
                        //       true,
                        //       false,
                        //       false
                        //     ],
                        //     "infos": [
                        //       {
                        //         "nickName": "nestle103",
                        //         "avatar": "7",
                        //         "money": 5560860,
                        //         "status": 2
                        //       },
                        //       {
                        //         "nickName": "imeldda",
                        //         "avatar": "2",
                        //         "money": 3852854,
                        //         "status": 2
                        //       },
                        //       {
                        //         "nickName": "VN_Star1",
                        //         "avatar": "2",
                        //         "money": 5703572,
                        //         "status": 2
                        //       },
                        //       {
                        //         "nickName": "gvngvn4567",
                        //         "avatar": "2",
                        //         "money": 2749687,
                        //         "status": 2
                        //       },
                        //       {},
                        //       {
                        //         "nickName": "skypenon",
                        //         "avatar": "5",
                        //         "money": 5051363,
                        //         "status": 2
                        //       },
                        //       {},
                        //       {}
                        //     ]
                        //   }
                        var myChair = res["myChair"];
                        var hasInfo = res["hasInfo"];
                        var infos = res["infos"];
                        //  cc.log("Lieng setupMatch configPlayer : ", configPlayer);
                        // theo Pos khong phai SeatId
                        for (var index = 0; index < hasInfo.length; index++) {
                            var pos = configPlayer[index]["playerPos"];
                            if (hasInfo[pos]) {
                                // setGold se inactive isViewer nen dat no len dau de ben duoi config lai
                                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                                if (infos[pos]["status"] == Lieng_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == Lieng_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                                    configPlayer[index]["isViewer"] = false;
                                    _this.getPlayerHouse(index).setIsViewer(false);
                                }
                                else {
                                    configPlayer[index]["isViewer"] = true;
                                    _this.getPlayerHouse(index).setIsViewer(true);
                                }
                                _this.setupSeatPlayer(index, infos[pos]);
                            }
                            else {
                                configPlayer[index]["playerId"] = -1;
                                configPlayer[index]["isViewer"] = true;
                            }
                        }
                        //  cc.log("Lieng setupMatch configPlayer : ", configPlayer);
                    }
                    break;
                case Lieng_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new Lieng_Cmd_1.default.ReceivedChatRoom(data);
                        //  cc.log("Lieng CHAT_ROOM res : ", JSON.stringify(res));
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
                            var seatId_11 = _this.findPlayerSeatByPos(chair);
                            if (seatId_11 != -1) {
                                _this.getPlayerHouse(seatId_11).showChatEmotion(content);
                            }
                        }
                        else {
                            // Chat Msg
                            var seatId_12 = _this.findPlayerSeatByPos(chair);
                            if (seatId_12 != -1) {
                                _this.getPlayerHouse(seatId_12).showChatMsg(content);
                            }
                        }
                    }
                    break;
                default:
                    //  cc.log("--inpacket.getCmdId(): " + inpacket.getCmdId());
                    break;
            }
        }, this);
    };
    // request
    LiengController.prototype.actionLeaveRoom = function () {
        //  cc.log("Lieng actionLeaveRoom");
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.CmdSendRequestLeaveGame());
    };
    LiengController.prototype.actionOpenCard = function () {
        //  cc.log("Lieng actionOpenCard");
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendShowCard());
        this.btnOpenCard.active = false;
    };
    LiengController.prototype.actionSendVaoGa = function () {
        //  cc.log("Lieng actionSendVaoGa");
    };
    LiengController.prototype.increaseBetValue = function () {
        if (this.currentBetSelectedIndex == (this.arrBetValue.length - 1)) {
        }
        else {
            this.currentBetSelectedIndex += 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    LiengController.prototype.decreaseBetValue = function () {
        if (this.currentBetSelectedIndex == 0) {
        }
        else {
            this.currentBetSelectedIndex -= 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    LiengController.prototype.actionAll_In = function () {
        //  cc.log("Lieng actionAll_In");
        this.btnBet.active = false;
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendTakeTurn(0, 0, 0, 1, 0));
    };
    LiengController.prototype.actionRaise = function () {
        //  cc.log("Lieng actionRaise");
        this.btnBet.active = false;
        var rawMeGold = this.getPlayerHouse(0).userGold.string.replace(/\./g, "");
        //  cc.log("Lieng actionRaise raw : ", this.getPlayerHouse(0).userGold.string);
        //  cc.log("Lieng actionRaise rawMeGold : ", rawMeGold);
        var currentMeMoney = parseInt(rawMeGold);
        //  cc.log("Lieng actionRaise currentMeMoney : ", currentMeMoney);
        //  cc.log("Lieng actionRaise betted : ", this.arrBetValue[this.currentBetSelectedIndex]);
        var betValue = Math.min(this.arrBetValue[this.currentBetSelectedIndex], currentMeMoney);
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendTakeTurn(0, 0, 0, 0, betValue));
    };
    LiengController.prototype.actionCheck = function () {
        //  cc.log("Lieng actionCheck");
        this.btnBet.active = false;
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendTakeTurn(0, 1, 0, 0, 0));
    };
    LiengController.prototype.actionCall = function () {
        //  cc.log("Lieng actionCall");
        this.btnBet.active = false;
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendTakeTurn(0, 0, 1, 0, 0));
    };
    LiengController.prototype.actionFold = function () {
        //  cc.log("Lieng actionFold");
        this.btnBet.active = false;
        Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendTakeTurn(1, 0, 0, 0, 0));
    };
    LiengController.prototype.actionBuyIn = function () {
        //cc.log("Lieng actionBuyIn");
        //cc.log("Lieng input : ", this.edtBuyIn.string);
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
            //cc.log("Lieng actionBuyIn rawNumber : ", rawNumber);
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
                if (parseInt(rawNumber) > Configs_1.default.Login.Coin) {
                    App_1.default.instance.alertDialog.showMsg("Bạn không đủ tiền.");
                    return;
                }
                //cc.log("Lieng actionBuyIn Cash In : ", parseInt(rawNumber));
                if (this.toggleAutoBuyIn.isChecked) {
                    Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendBuyIn(parseInt(rawNumber), 1));
                }
                else {
                    Lieng_NetworkClient_1.default.getInstance().send(new Lieng_Cmd_1.default.SendBuyIn(parseInt(rawNumber), 0));
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
    LiengController.prototype.initConfigPlayer = function () {
        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
            configPlayer.push({
                seatId: index,
                playerId: -1,
                playerPos: -1,
                isViewer: true
            });
        }
        //  cc.log("Lieng configPlayer : ", configPlayer);
    };
    LiengController.prototype.resetCenterCards = function () {
        for (var index = 0; index < 5; index++) {
            this.cardsCenter.children[index].position = cc.v2(0, 100);
            this.cardsCenter.children[index].scale = 0;
            this.cardsCenter.children[index].color = cc.Color.WHITE;
        }
    };
    LiengController.prototype.resetPlayersPlaying = function () {
        for (var index = 0; index < Lieng_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).resetMatchHistory();
        }
    };
    // handle Game Players
    LiengController.prototype.getCardsName = function (boBaiId) {
        var name = "";
        switch (boBaiId) {
            case Lieng_Cmd_1.default.Code.EG_SANH_VUA:
                name = "Sảnh Vua";
                break;
            case Lieng_Cmd_1.default.Code.EG_THUNG_PHA_SANH:
                name = "Thùng Phá Sảnh";
                break;
            case Lieng_Cmd_1.default.Code.EG_TU_QUY:
                name = "Tứ Quý";
                break;
            case Lieng_Cmd_1.default.Code.EG_CU_LU:
                name = "Cù Lũ";
                break;
            case Lieng_Cmd_1.default.Code.EG_THUNG:
                name = "Thùng";
                break;
            case Lieng_Cmd_1.default.Code.EG_SANH:
                name = "Sảnh";
                break;
            case Lieng_Cmd_1.default.Code.EG_XAM_CO:
                name = "Xám Cô";
                break;
            case Lieng_Cmd_1.default.Code.EG_HAI_DOI:
                name = "Hai Đôi";
                break;
            case Lieng_Cmd_1.default.Code.EG_DOI:
                name = "Đôi";
                break;
            case Lieng_Cmd_1.default.Code.EG_MAU_THAU:
                name = "Mậu Thầu";
                break;
            default:
                break;
        }
        return name;
    };
    LiengController.prototype.setupSeatPlayer = function (seatId, playerInfo) {
        //cc.log("Lieng setupSeatPlayer playerInfo : ", playerInfo);
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.currentMoney);
    };
    LiengController.prototype.findPlayerSeatByUid = function (uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerId === uid) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    LiengController.prototype.findPlayerPosBySeat = function (seat) {
        return configPlayer[seat].playerPos;
    };
    LiengController.prototype.findPlayerSeatByPos = function (pos) {
        if (pos == -1) {
            return -1;
        }
        var seat = -1;
        //console.log('6666', pos, configPlayer);
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerPos === pos) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    LiengController.prototype.getPlayerHouse = function (seatId) {
        return this.groupPlayers.children[seatId].getComponent("Lieng.Player");
    };
    LiengController.prototype.getNumPlayers = function () {
        //cc.log("playerPosEntry configPlayer : ", configPlayer);
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) {
            //cc.log("playerPosEntry playerId : ", configPlayer[index].playerId);
            //cc.log("playerPosEntry isViewer : ", configPlayer[index].isViewer);
            //cc.log("-------------------------------------");
            if (configPlayer[index].playerId !== -1 && !configPlayer[index].isViewer) {
                playerPosEntry.push(configPlayer[index].seatId);
                //cc.log("playerPosEntry seatId : ", configPlayer[index].seatId);
            }
        }
        //cc.log("playerPosEntry : ", playerPosEntry);
        return playerPosEntry;
    };
    LiengController.prototype.update = function (dt) {
    };
    var LiengController_1;
    LiengController.instance = null;
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "UI_ChooseRoom", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelNickName", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelCoin", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "contentListRooms", void 0);
    __decorate([
        property(cc.Prefab)
    ], LiengController.prototype, "prefabItemRoom", void 0);
    __decorate([
        property(cc.ScrollView)
    ], LiengController.prototype, "scrollListRoom", void 0);
    __decorate([
        property(cc.EditBox)
    ], LiengController.prototype, "edtFindRoom", void 0);
    __decorate([
        property(cc.Toggle)
    ], LiengController.prototype, "btnHideRoomFull", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "UI_Playing", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "meCards", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "groupPlayers", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LiengController.prototype, "spriteCards", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LiengController.prototype, "spriteCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "matchPot", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelMatchPot", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "cardsDeal", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "cardsCenter", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "btnBet", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "btnCall", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "btnRaise", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "btnFollow", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "btnOpenCard", void 0);
    __decorate([
        property(cc.Button)
    ], LiengController.prototype, "btnLeaveRoom", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "hubChips", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelRoomBet", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "actionBetting", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "betChooseValue", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "betChooseValueTarget", void 0);
    __decorate([
        property(sp.Skeleton)
    ], LiengController.prototype, "FxDealer", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "btnBuyCashIn", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "popupBuyIn", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelBuyInMin", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelBuyInMax", void 0);
    __decorate([
        property(cc.EditBox)
    ], LiengController.prototype, "edtBuyIn", void 0);
    __decorate([
        property(cc.Toggle)
    ], LiengController.prototype, "toggleAutoBuyIn", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "notifyTimeStart", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "notifyTimeEnd", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "notifyTimeBet", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.EditBox)
    ], LiengController.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], LiengController.prototype, "popupNodity", void 0);
    __decorate([
        property(cc.Label)
    ], LiengController.prototype, "labelNotifyContent", void 0);
    LiengController = LiengController_1 = __decorate([
        ccclass
    ], LiengController);
    return LiengController;
}(cc.Component));
exports.default = LiengController;

cc._RF.pop();