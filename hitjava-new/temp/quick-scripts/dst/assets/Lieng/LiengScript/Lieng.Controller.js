
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lieng/LiengScript/Lieng.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTGllbmdcXExpZW5nU2NyaXB0XFxMaWVuZy5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFFaEUsaUVBQTREO0FBQzVELDZGQUFnRjtBQUNoRixtRkFBNkU7QUFDN0UscURBQWdEO0FBQ2hELHlDQUE4QjtBQUU5Qiw2REFBdUQ7QUFDdkQsbURBQXdDO0FBRXhDLElBQUksWUFBWSxHQUFHLEVBQUcsWUFBWTtBQUM5QixJQUFJO0FBQ0osaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLElBQUk7Q0FDUCxDQUFDO0FBRUYsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUc7SUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxD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S0FBSyxDQUFDOzBEQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztxREFDTztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNjO0lBSWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNZO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzt5REFDVztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2lCO0lBdkduQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBc3pFbkM7SUFBRCxzQkFBQztDQXR6RUQsQUFzekVDLENBdHpFNEMsRUFBRSxDQUFDLFNBQVMsR0FzekV4RDtrQkF0ekVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcclxuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xyXG5pbXBvcnQgY21kTmV0d29yayBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuQ21kXCI7XHJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XHJcbmltcG9ydCBjbWQgZnJvbSBcIi4vTGllbmcuQ21kXCI7XHJcblxyXG5pbXBvcnQgTGllbmdOZXR3b3JrQ2xpZW50IGZyb20gXCIuL0xpZW5nLk5ldHdvcmtDbGllbnRcIjtcclxuaW1wb3J0IENhcmRVdGlscyBmcm9tIFwiLi9MaWVuZy5DYXJkVXRpbFwiXHJcblxyXG52YXIgY29uZmlnUGxheWVyID0gWyAgLy8gOSBQbGF5ZXJzXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgc2VhdElkOiAwLFxyXG4gICAgLy8gICAgIHBsYXllcklkOiAtMSxcclxuICAgIC8vICAgICBwbGF5ZXJQb3M6IC0xLFxyXG4gICAgLy8gICAgIGlzVmlld2VyOiB0cnVlXHJcbiAgICAvLyB9XHJcbl07XHJcblxyXG4vLyBkZWZhdWx0UGxheWVyUG9zWzAgLT4gOF1bMF0gPSBwbGF5ZXJfcG9zIG9mIG1lXHJcbmxldCBkZWZhdWx0UGxheWVyUG9zID0gWyAvLyA5IHBsYXllcnNcclxuICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSxcclxuICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCAwXSxcclxuICAgIFsyLCAzLCA0LCA1LCA2LCA3LCA4LCAwLCAxXSxcclxuICAgIFszLCA0LCA1LCA2LCA3LCA4LCAwLCAxLCAyXSxcclxuICAgIFs0LCA1LCA2LCA3LCA4LCAwLCAxLCAyLCAzXSxcclxuICAgIFs1LCA2LCA3LCA4LCAwLCAxLCAyLCAzLCA0XSxcclxuICAgIFs2LCA3LCA4LCAwLCAxLCAyLCAzLCA0LCA1XSxcclxuICAgIFs3LCA4LCAwLCAxLCAyLCAzLCA0LCA1LCA2XSxcclxuICAgIFs4LCAwLCAxLCAyLCAzLCA0LCA1LCA2LCA3XSxcclxuXVxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpZW5nQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTGllbmdDb250cm9sbGVyID0gbnVsbDtcclxuXHJcbiAgICAvLyBVSSBSb29tc1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSV9DaG9vc2VSb29tOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsTmlja05hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjb250ZW50TGlzdFJvb21zOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcmVmYWJJdGVtUm9vbTogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxyXG4gICAgc2Nyb2xsTGlzdFJvb206IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZHRGaW5kUm9vbTogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgYnRuSGlkZVJvb21GdWxsOiBjYy5Ub2dnbGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc0luaXRlZFVJUm9vbSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFVJIFBsYXlpbmdcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgVUlfUGxheWluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1lQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBncm91cFBsYXllcnM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgc3ByaXRlQ2FyZHM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHNwcml0ZUNhcmRCYWNrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hdGNoUG90OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsTWF0Y2hQb3Q6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FyZHNEZWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FyZHNDZW50ZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5CZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQ2FsbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blJhaXNlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuRm9sbG93OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bk9wZW5DYXJkOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBidG5MZWF2ZVJvb206IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGh1YkNoaXBzOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsUm9vbUlkOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbFJvb21CZXQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWN0aW9uQmV0dGluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJldENob29zZVZhbHVlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmV0Q2hvb3NlVmFsdWVUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgRnhEZWFsZXI6IHNwLlNrZWxldG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQnV5Q2FzaEluOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBvcHVwQnV5SW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxCdXlJbk1pbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxCdXlJbk1heDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBlZHRCdXlJbjogY2MuRWRpdEJveCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxyXG4gICAgdG9nZ2xlQXV0b0J1eUluOiBjYy5Ub2dnbGUgPSBudWxsO1xyXG5cclxuICAgIC8vIE5vdGlmeVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpZnlUaW1lU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpZnlUaW1lRW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm90aWZ5VGltZUJldDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gVUkgQ2hhdFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBVSV9DaGF0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgZWR0Q2hhdElucHV0OiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICAvLyBQb3B1cFxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwb3B1cE5vZGl0eTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbE5vdGlmeUNvbnRlbnQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNlYXRPd25lciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tQmV0ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdhbWVTdGF0ZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByaXZhdGVDYXJkcyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxpc3RXaW5zID0gbnVsbDtcclxuICAgIHByaXZhdGUgbWF4QmV0ID0gMDtcclxuICAgIHByaXZhdGUgb2xkTWF4QmV0ID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFJhaXNlID0gMDtcclxuICAgIHByaXZhdGUgYm9CYWlJZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRNb25leSA9IDA7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRCZXQgPSAwO1xyXG4gICAgcHJpdmF0ZSBoYXNNb0JhaSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBoYXNBbGxJbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBhY3Rpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSByYWlzZVN0ZXAgPSAwO1xyXG4gICAgcHJpdmF0ZSByYWlzZUJsb2NrID0gMDtcclxuICAgIHByaXZhdGUgdG90YWxBbGxJbiA9IDA7XHJcbiAgICBwcml2YXRlIHRvdGFsRm9sZCA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBtaW51dGVzID0gbnVsbDtcclxuICAgIHByaXZhdGUgc2Vjb25kcyA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgdGltZUF1dG9TdGFydCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRpbWVFbmQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSB0aW1lQmV0ID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGltZVRoaW5raW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWxXYWl0dGluZyA9IG51bGw7XHJcbiAgICBwcml2YXRlIGludGVydmFsRW5kID0gbnVsbDtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWxCZXR0aW5nID0gbnVsbDtcclxuICAgIHByaXZhdGUgaW50ZXJ2YWxUaGlua2luZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Q2FyZCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRDZW50ZXJDYXJkID0gbnVsbDtcclxuICAgIHByaXZhdGUgbnVtQ2FyZE9wZW5lZCA9IDA7XHJcblxyXG4gICAgLy8gYmV0XHJcbiAgICBwcml2YXRlIGFyckJldFZhbHVlID0gW107XHJcbiAgICBwcml2YXRlIGFyckJldFBvcyA9IFstMTU3LjUsIC01Mi41LCA1Mi41LCAxNTcuNV07XHJcbiAgICBwcml2YXRlIGN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRNYXRjaFBvdFZhbHVlID0gMDtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVvdXRFbmRHYW1lID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGltZW91dENoaWFCYWlEb25lID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtaW5DYXNoSW4gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtYXhDYXNoSW4gPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaWVuZ0NvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXRPd25lciA9IC0xO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRDb25maWdQbGF5ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnNob3dVSVJvb21zKCk7XHJcblxyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbk9wZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyDEkWFuZyDEkcSDbmcgbmjhuq1wLi4uXCIpO1xyXG4gICAgICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWROZXR3b3JrLlNlbmRMb2dpbihDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuKSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgTGllbmdOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jb25uZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVxdWVzdCBVSSBSb29tXHJcbiAgICBqb2luUm9vbShpbmZvKSB7XHJcbiAgICAgLy8gICBjb25zb2xlLmxvZygnNTU1Jyk7XHJcbiAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIGpvaW5Sb29tIHJvb21JbmZvIDogXCIsIGluZm8pO1xyXG4gICAgICAgIGlmIChpbmZvW1wicmVxdWlyZWRNb25leVwiXSA8IENvbmZpZ3MuTG9naW4uQ29pbikge1xyXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kSm9pblJvb21CeUlkKGluZm9bXCJpZFwiXSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4gY+G6p24gY8OzIHThu5FpIHRoaeG7g3UgXCIgKyBpbmZvW1wicmVxdWlyZWRNb25leVwiXSArIFwiIMSR4buDIHbDoG8gYsOgbi5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZWZlc2hMaXN0Um9vbSgpIHtcclxuICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgTGllbmdOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRHZXRMaXN0Um9vbSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUm9vbUlkKCkge1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgZmluZFJvb21JZCBpZCA6IFwiLCB0aGlzLmVkdEZpbmRSb29tLnN0cmluZyk7XHJcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmVkdEZpbmRSb29tLnN0cmluZy50cmltKCk7XHJcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaWRGaW5kID0gcGFyc2VJbnQodGV4dCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJMaWVuZy5JdGVtUm9vbVwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChyb29tSXRlbS5yb29tSW5mb1tcImlkXCJdICE9IGlkRmluZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlUm9vbUZ1bGwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuSGlkZVJvb21GdWxsLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGxldCByb29tSXRlbSA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uZ2V0Q29tcG9uZW50KFwiTGllbmcuSXRlbVJvb21cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAocm9vbUl0ZW0ucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0gPT0gcm9vbUl0ZW0ucm9vbUluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93VUlSb29tcygpIHtcclxuICAgICAgICB0aGlzLlVJX0Nob29zZVJvb20uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLlVJX1BsYXlpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0ZWRVSVJvb20pIHtcclxuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsTmlja05hbWUuc3RyaW5nID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcclxuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbENvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXR1cExpc3RlbmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVUlSb29tKCkge1xyXG4gICAgICAgIHRoaXMuVUlfQ2hvb3NlUm9vbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVSb29tKCkge1xyXG4gICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiVMOtbmggbsSDbmcgdOG6oW8gYsOgbiDEkWFuZyB04bqvdC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWluZ05vdygpIHtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHBsYXlpbmdOb3dcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb29tSXRlbSA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uZ2V0Q29tcG9uZW50KFwiTGllbmcuSXRlbVJvb21cIik7XHJcbiAgICAgICAgICAgIGlmIChyb29tSXRlbS5yb29tSW5mb1tcInVzZXJDb3VudFwiXSA8IHJvb21JdGVtLnJvb21JbmZvW1wibWF4VXNlclBlclJvb21cIl0pIHtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgcGxheWluZ05vdyBjb24gU2xvdFwiKTtcclxuICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgcGxheWluZ05vdyByZXF1aXJlZE1vbmV5IDogXCIsIHJvb21JdGVtLnJvb21JbmZvW1wicmVxdWlyZWRNb25leVwiXSk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHBsYXlpbmdOb3cgQ29pbiA6IFwiLCBDb25maWdzLkxvZ2luLkNvaW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1wicmVxdWlyZWRNb25leVwiXSA8IENvbmZpZ3MuTG9naW4uQ29pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgcGxheWluZ05vdyBEdSB0aWVuIHJlcXVpcmVkTW9uZXlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBwbGF5aW5nTm93IHJlc3VsdCA6IFwiLCByb29tSXRlbS5yb29tSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qb2luUm9vbShyb29tSXRlbS5yb29tSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAxMDAwMDA7IC8vIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGF0XHJcbiAgICBzaG93VUlDaGF0KCkge1xyXG4gICAgICAgIHRoaXMuVUlfQ2hhdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIDU0NiwgMClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlVUlDaGF0KCkge1xyXG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsIDEwMDAsIDApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGF0RW1vdGlvbihldmVudCwgaWQpIHtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgY2hhdEVtb3Rpb24gaWQgOiBcIiwgaWQpO1xyXG4gICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhdFJvb20oMSwgaWQpKTtcclxuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhdE1zZygpIHtcclxuICAgICAgICBpZiAodGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nLnRyaW0oKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhdFJvb20oMCwgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmFja1RvTG9iYnkoKSB7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZygnNTU1NScpO1xyXG4gICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XHJcbiAgICAgICAgQXBwLmluc3RhbmNlLmxvYWRTY2VuZShcIkxvYmJ5XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBsYXlpbmdcclxuICAgIHNob3dVSVBsYXlpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VVSVBsYXlpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25MZWF2ZVJvb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cE1hdGNoKGRhdGE6IGNtZC5SZWNlaXZlZEpvaW5Sb29tU3VjY2VlZCkge1xyXG4gICAgICAgIHRoaXMuc2hvd1VJUGxheWluZygpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggZGF0YSA6IFwiLCBkYXRhKTtcclxuXHJcbiAgICAgICAgLy8ge1xyXG4gICAgICAgIC8vICAgICBcIm15Q2hhaXJcIjogMCxcclxuICAgICAgICAvLyAgICAgXCJtb25leUJldFwiOiAxMjgwMDAsXHJcbiAgICAgICAgLy8gICAgIFwicm9vbU93bmVyXCI6IDAsXHJcbiAgICAgICAgLy8gICAgIFwicm9vbUlkXCI6IDIzODA4LFxyXG4gICAgICAgIC8vICAgICBcImdhbWVJZFwiOiAxMDA2MDksXHJcbiAgICAgICAgLy8gICAgIFwibW9uZXlUeXBlXCI6IDAsXHJcbiAgICAgICAgLy8gICAgIFwicnVsZVwiOiAwLFxyXG4gICAgICAgIC8vICAgICBcInBsYXllclNpemVcIjogMCxcclxuICAgICAgICAvLyAgICAgXCJwbGF5ZXJTdGF0dXNcIjogW10sXHJcbiAgICAgICAgLy8gICAgIFwicGxheWVySW5mb3NcIjogW10sXHJcbiAgICAgICAgLy8gICAgIFwiaGFuZENhcmRTaXplU2l6ZVwiOiAwLFxyXG4gICAgICAgIC8vICAgICBcImhhbmRDYXJkU2l6ZUxpc3RcIjogW10sXHJcbiAgICAgICAgLy8gICAgIFwibWluQnV5SW5UaUxlXCI6IDAsXHJcbiAgICAgICAgLy8gICAgIFwibWF4QnV5SW5UaUxlXCI6IDBcclxuICAgICAgICAvLyAgIH1cclxuXHJcbiAgICAgICAgbGV0IG15Q2hhaXIgPSBkYXRhW1wibXlDaGFpclwiXTtcclxuICAgICAgICBsZXQgbW9uZXlCZXQgPSBkYXRhW1wibW9uZXlCZXRcIl07XHJcbiAgICAgICAgbGV0IHJvb21Pd25lciA9IGRhdGFbXCJyb29tT3duZXJcIl07XHJcbiAgICAgICAgbGV0IHJvb21JZCA9IGRhdGFbXCJyb29tSWRcIl07XHJcbiAgICAgICAgbGV0IGdhbWVJZCA9IGRhdGFbXCJnYW1lSWRcIl07XHJcbiAgICAgICAgbGV0IG1vbmV5VHlwZSA9IGRhdGFbXCJtb25leVR5cGVcIl07XHJcbiAgICAgICAgbGV0IHJ1bGUgPSBkYXRhW1wicnVsZVwiXTtcclxuICAgICAgICBsZXQgcGxheWVyU2l6ZSA9IGRhdGFbXCJwbGF5ZXJTaXplXCJdO1xyXG4gICAgICAgIGxldCBwbGF5ZXJTdGF0dXMgPSBkYXRhW1wicGxheWVyU3RhdHVzXCJdO1xyXG4gICAgICAgIGxldCBwbGF5ZXJJbmZvcyA9IGRhdGFbXCJwbGF5ZXJJbmZvc1wiXTtcclxuICAgICAgICBsZXQgaGFuZENhcmRTaXplU2l6ZSA9IGRhdGFbXCJoYW5kQ2FyZFNpemVTaXplXCJdO1xyXG4gICAgICAgIGxldCBoYW5kQ2FyZFNpemVMaXN0ID0gZGF0YVtcImhhbmRDYXJkU2l6ZUxpc3RcIl07XHJcbiAgICAgICAgbGV0IG1pbkJ1eUluVGlMZSA9IGRhdGFbXCJtaW5CdXlJblRpTGVcIl07XHJcbiAgICAgICAgbGV0IG1heEJ1eUluVGlMZSA9IGRhdGFbXCJtYXhCdXlJblRpTGVcIl1cclxuXHJcbiAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBzZXR1cE1hdGNoIG15Q2hhaXIgIDogXCIsIG15Q2hhaXIpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBtb25leUJldCAgOiBcIiwgbW9uZXlCZXQpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCByb29tT3duZXIgIDogXCIsIHJvb21Pd25lcik7XHJcbiAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBzZXR1cE1hdGNoIHJvb21JZCAgOiBcIiwgcm9vbUlkKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggZ2FtZUlkICA6IFwiLCBnYW1lSWQpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBtb25leVR5cGUgIDogXCIsIG1vbmV5VHlwZSk7XHJcbiAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBzZXR1cE1hdGNoIHJ1bGUgIDogXCIsIHJ1bGUpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBwbGF5ZXJTaXplICA6IFwiLCBwbGF5ZXJTaXplKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggcGxheWVyU3RhdHVzICA6IFwiLCBwbGF5ZXJTdGF0dXMpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBwbGF5ZXJJbmZvcyAgOiBcIiwgcGxheWVySW5mb3MpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBoYW5kQ2FyZFNpemVTaXplICA6IFwiLCBoYW5kQ2FyZFNpemVTaXplKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggaGFuZENhcmRTaXplTGlzdCAgOiBcIiwgaGFuZENhcmRTaXplTGlzdCk7XHJcbiAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBzZXR1cE1hdGNoIG1pbkJ1eUluVGlMZSAgOiBcIiwgbWluQnV5SW5UaUxlKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggbWF4QnV5SW5UaUxlICA6IFwiLCBtYXhCdXlJblRpTGUpO1xyXG5cclxuICAgICAgICAvLyBLaWVtIHRyYSwgY2hvbiAxIHRob2lcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IGNtZC5Db2RlLlNUQVRFX0pPSU5fUk9PTTtcclxuXHJcbiAgICAgICAgdGhpcy5sYWJlbFJvb21JZC5zdHJpbmcgPSBcIkxpZW5nIC0gUEjDkk5HOiBcIiArIHJvb21JZDtcclxuICAgICAgICB0aGlzLmxhYmVsUm9vbUJldC5zdHJpbmcgPSBcIk3hu6hDIEPGr+G7okM6IFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKG1vbmV5QmV0KSArIFwiJFwiO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRSb29tQmV0ID0gbW9uZXlCZXQ7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRDZW50ZXJDYXJkcygpO1xyXG5cclxuICAgICAgICBjb25maWdQbGF5ZXJbMF0ucGxheWVySWQgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xyXG4gICAgICAgIGNvbmZpZ1BsYXllclswXS5wbGF5ZXJQb3MgPSBteUNoYWlyO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgTWUgOiBcIiwgY29uZmlnUGxheWVyWzBdKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyICA6IFwiLCBjb25maWdQbGF5ZXIpO1xyXG4gICAgICAgIC8vdGhpcy5wbGF5ZXJzID0gcGxheWVySW5mb3M7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZygnaGhoaGhoJywgcGxheWVySW5mb3MpO1xyXG4gICAgICAgIHZhciBudW1QbGF5ZXJzID0gMDtcclxuICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcclxuICAgICAgICB2YXIgYXJyUGxheWVySW5mbyA9IFtdO1xyXG4gICAgICAgIHZhciBhcnJQbGF5ZXJTdGF0dXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKHBsYXllckluZm9zW2luZGV4XS5uaWNrTmFtZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgbnVtUGxheWVycyArPSAxO1xyXG4gICAgICAgICAgICAgICAgYXJyUGxheWVyUG9zRXhpc3QucHVzaChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJJbmZvLnB1c2gocGxheWVySW5mb3NbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIGFyclBsYXllclN0YXR1cy5wdXNoKHBsYXllclN0YXR1c1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBudW1QbGF5ZXJzIDogXCIsIG51bVBsYXllcnMpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBhcnJQbGF5ZXJTdGF0dXMgOiBcIiwgYXJyUGxheWVyU3RhdHVzKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggYXJyUGxheWVySW5mbyA6IFwiLCBhcnJQbGF5ZXJJbmZvKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggYXJyUGxheWVyUG9zRXhpc3QgOiBcIiwgYXJyUGxheWVyUG9zRXhpc3QpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0SHViQ2hpcHMoKTtcclxuXHJcbiAgICAgICAgLy8gc2V0dXAgY29uZmlnUGxheWVyXHJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBhKyspIHtcclxuICAgICAgICAgICAgY29uZmlnUGxheWVyW2FdLnBsYXllclBvcyA9IGRlZmF1bHRQbGF5ZXJQb3NbbXlDaGFpcl1bYV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBmaW5kUG9zID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oKTtcclxuICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnaGhoaGhoJywgc2VhdElkKTtcclxuICAgICAgICAgICAgaWYgKGZpbmRQb3MgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEV4aXN0IHBsYXllciAtPiBTZXQgUGxheWVyIEluZm9cclxuICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwQnV5SW4obWluQnV5SW5UaUxlLCBtYXhCdXlJblRpTGUsIG1vbmV5QmV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyUGxheWVyU3RhdHVzW2ZpbmRQb3NdID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfU0lUVElORyB8fCBhcnJQbGF5ZXJTdGF0dXNbZmluZFBvc10gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgYXJyUGxheWVySW5mb1tmaW5kUG9zXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3QgRXhpc3QgcGxheWVyICAtPiBBY3RpdmUgQnRuIEFkZCBwbGF5ZXJcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93QnRuSW52aXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldE93bmVyKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNlYXRPd25lciA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhyb29tT3duZXIpO1xyXG4gICAgICAgIGlmIChzZWF0T3duZXIgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdE93bmVyKS5zZXRPd25lcih0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWF0T3duZXIgPSBzZWF0T3duZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgOiBcIiwgY29uZmlnUGxheWVyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gVGltZSBTdGFydFxyXG4gICAgc3RhcnRUaGlua2luZ0NvdW50RG93bihzZWF0SWQsIHR1cm5UaW1lKSB7XHJcbiAgICAgICAgdGhpcy50aW1lVGhpbmtpbmcgPSB0dXJuVGltZTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFRoaW5raW5nKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxUaGlua2luZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lVGhpbmtpbmctLTtcclxuICAgICAgICAgICAgdmFyIHJhdGUgPSAodGhpcy50aW1lVGhpbmtpbmcgLyB0dXJuVGltZSkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnByb2Nlc3NUaGlua2luZyhyYXRlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZVRoaW5raW5nIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxUaGlua2luZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuaGlkZVBsYXlDb3VudGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRXYWl0dGluZ0NvdW50RG93bih0aW1lV2FpdCkge1xyXG4gICAgICAgIHRoaXMudGltZUF1dG9TdGFydCA9IHRpbWVXYWl0O1xyXG4gICAgICAgIHRoaXMuc2V0VGltZVdhaXR0aW5nQ291bnREb3duKCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lU3RhcnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxXYWl0dGluZyA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lQXV0b1N0YXJ0LS07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZVdhaXR0aW5nQ291bnREb3duKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVBdXRvU3RhcnQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZVN0YXJ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lV2FpdHRpbmdDb3VudERvd24oKSB7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVBdXRvU3RhcnQgJSA2MCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lU3RhcnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBC4bqvdCDEkeG6p3Ugc2F1IDogXCIgKyB0aGlzLnNlY29uZHMgKyBcInMgXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGltZSBFbmRcclxuICAgIHN0YXJ0RW5kQ291bnREb3duKHRpbWVXYWl0KSB7XHJcbiAgICAgICAgdGhpcy50aW1lRW5kID0gdGltZVdhaXQ7XHJcbiAgICAgICAgdGhpcy5zZXRUaW1lRW5kQ291bnREb3duKCk7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lRW5kLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZUVuZENvdW50RG93bigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lRW5kIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lRW5kQ291bnREb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lRW5kICUgNjApO1xyXG4gICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIEvhur90IHRow7pjIHNhdSA6IFwiICsgdGhpcy5zZWNvbmRzICsgXCJzIFwiO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRpbWUgQmV0XHJcbiAgICBzdGFydEJldHRpbmdDb3VudERvd24odHVyblRpbWUpIHtcclxuICAgICAgICAvLyhcIkxpZW5nIHN0YXJ0QmV0dGluZ0NvdW50RG93biB0dXJuVGltZSA6IFwiLCB0dXJuVGltZSk7XHJcbiAgICAgICAgdGhpcy50aW1lQmV0ID0gdHVyblRpbWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25CZXR0aW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzQmV0dGluZygxKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEJldHRpbmcpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEJldHRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUJldC0tO1xyXG4gICAgICAgICAgICB2YXIgcmF0ZSA9ICh0aGlzLnRpbWVCZXQgLyB0dXJuVGltZSkudG9GaXhlZCgxKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmV0dGluZyhyYXRlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZUJldCA8IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsQmV0dGluZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzQmV0dGluZyhyYXRlKSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBwcm9jZXNzQmV0dGluZyByYXRlIDogXCIsIHJhdGUpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgcHJvY2Vzc0JldHRpbmcgZmlsbFJhbmdlIDogXCIsIHRoaXMuYWN0aW9uQmV0dGluZy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSByYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gTWUgQ2FyZFxyXG4gICAgb3Blbk1lQ2FyZChldmVudCwgaXRlbUlkKSB7XHJcbiAgICAgICAgLy8gT3BlbiBNZSBjYXJkc1xyXG4gICAgICAgIGxldCBjYXJkUG9zID0gcGFyc2VJbnQoaXRlbUlkKTtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIG9wZW5NZUNhcmQgY2FyZFBvcyA6IFwiLCBjYXJkUG9zKTtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgb3Blbk1lQ2FyZCBjdXJyZW50Q2FyZCA6IFwiLCB0aGlzLmN1cnJlbnRDYXJkKTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5wcmVwYXJlQ2FyZFJlYWwoY2FyZFBvcyk7XHJcbiAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZCh0aGlzLmN1cnJlbnRDYXJkW2NhcmRQb3NdKTtcclxuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnRyYW5zZm9ybVRvQ2FyZFJlYWwoY2FyZFBvcywgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcclxuXHJcbiAgICAgICAgdGhpcy5udW1DYXJkT3BlbmVkICs9IDE7XHJcbiAgICAgICAgaWYgKHRoaXMubnVtQ2FyZE9wZW5lZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNob3dDYXJkTmFtZSh0aGlzLmdldENhcmRzU2NvcmUoKSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkucmVzZXRDYXJkUmVhZHkoKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FyZHNTY29yZSgpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmJvQmFpSWQgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5ib0JhaUlkID49IDAgJiYgdGhpcy5ib0JhaUlkIDw9IDgpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib0JhaUlkICsgXCLEkGnhu4NtXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmJvQmFpSWQgPT0gMTEpIHJldHVybiBcIjkgxJBp4buDbVwiO1xyXG5cclxuICAgICAgICBpZih0aGlzLmJvQmFpSWQgPT0gMTIpIHJldHVybiBcIuG6om5oXCI7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYm9CYWlJZCA9PSAxMykgcmV0dXJuIFwiTGnDqm5nXCI7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuYm9CYWlJZCA9PSAyMSkgcmV0dXJuIFwiU8OhcCDDgXRcIjsgXHJcblxyXG4gICAgICAgIGlmKHRoaXMuYm9CYWlJZCA+PSAyMiAmJiB0aGlzLmJvQmFpSWQgPD0gMzApIHJldHVybiBcIlPDoXAgXCIgKyAodGhpcy5ib0JhaUlkIC0gMTApO1xyXG5cclxuICAgICAgICBpZih0aGlzLmJvQmFpSWQgPT0gMzEpIHJldHVybiBcIlPDoXAgSlwiO1xyXG4gICAgICAgIGlmKHRoaXMuYm9CYWlJZCA9PSAzMikgcmV0dXJuIFwiU8OhcCBRXCI7XHJcbiAgICAgICAgaWYodGhpcy5ib0JhaUlkID09IDMzKSByZXR1cm4gXCJTw6FwIEtcIjtcclxuXHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUNoaXBzVG9IdWJOb3coaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWzIgKiBpbmRleF0ucG9zaXRpb24gPSBjYy52MigyNSwgODApO1xyXG4gICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIGluZGV4XS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIGluZGV4KSArIDFdLnBvc2l0aW9uID0gY2MudjIoMjUsIDgwKTtcclxuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWygyICogaW5kZXgpICsgMV0uc2NhbGUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ4TW92ZUNoaXBzKGNoaXBzLCBkZWxheSwgdG9YLCB0b1kpIHtcclxuICAgICAgICBjaGlwcy5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKGRlbGF5KSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMCwgMSwgMSksXHJcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC44LCB0b1gsIHRvWSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjgsIDAsIDApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SHViQ2hpcHMoKSB7XHJcbiAgICAgICAgdmFyIGFyckZyb21YID0gWzcwLCAyODAsIDI4MCwgMjYwLCAxMDAsIC0yNjAsIC0zNzUsIC0zNjBdO1xyXG4gICAgICAgIHZhciBhcnJGcm9tWSA9IFstMTk1LCAtMTUwLCAtNTUsIDcwLCA5MCwgODUsIC0zMCwgLTE1NV07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIGluZGV4XS5wb3NpdGlvbiA9IGNjLnYyKGFyckZyb21YW2luZGV4XSwgYXJyRnJvbVlbaW5kZXhdKTtcclxuICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIGluZGV4KSArIDFdLnBvc2l0aW9uID0gY2MudjIoYXJyRnJvbVhbaW5kZXhdLCBhcnJGcm9tWVtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE2OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXR1cEJldCgpIHtcclxuICAgICAgICAvLyBhcnJCZXRWYWx1ZVxyXG4gICAgICAgIHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWVUYXJnZXQueSA9IHRoaXMuYXJyQmV0UG9zW3RoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQb3B1cEJ1eUluKG1pbiwgbWF4LCBiZXQpIHtcclxuICAgICAgICB0aGlzLm1pbkNhc2hJbiA9IG1pbjtcclxuICAgICAgICB0aGlzLm1heENhc2hJbiA9IG1heDtcclxuICAgICAgICB0aGlzLnBvcHVwQnV5SW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhYmVsQnV5SW5NaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldCAqIG1pbik7XHJcbiAgICAgICAgaWYgKENvbmZpZ3MuTG9naW4uQ29pbiA+IGJldCAqIG1heCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsQnV5SW5NYXguc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldCAqIG1heCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEJ1eUluTWF4LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVkdEJ1eUluLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy50b2dnbGVBdXRvQnV5SW4uaXNDaGVja2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvcHVwQnV5SW4oKSB7XHJcbiAgICAgICAgdGhpcy5wb3B1cEJ1eUluLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRDaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgcmF3TnVtYmVyID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50W2luZGV4XSA9PSBcIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50W2luZGV4XSA9PSBcIjlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJhd051bWJlciArPSBldmVudFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIG9uVGV4dENoYW5nZSByYXdOdW1iZXIgOiBcIiwgcmF3TnVtYmVyKTtcclxuICAgICAgICAgICAgaWYgKHJhd051bWJlciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZHRCdXlJbi5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocGFyc2VJbnQocmF3TnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkdEJ1eUluLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd09uZUNlbnRlckNhcmRzKGNlbnRlckNhcmRzLCBpbmRleCkge1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleHEgPSAwOyBpbmRleHEgPCBjZW50ZXJDYXJkcy5sZW5ndGg7IGluZGV4cSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQoY2VudGVyQ2FyZHNbaW5kZXhxXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDZW50ZXJDYXJkLnB1c2goY2VudGVyQ2FyZHNbaW5kZXhxXSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGR1YSAzIGxhIGxlbiAtMTc1LCAtMTAgcm9pIHhvZSByYSBiZW4gcGhhaVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlblswXS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgLTE3MCwgLTQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzFdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLCAtMTcsIC00NSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCAtODUsIC00NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlblsyXS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgLTE3MCwgLTQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIDAsIC00NSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlblszXS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgODUsIC00NSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzRdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIDE3MCwgLTQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG93IENlbnRlciBDYXJkc1xyXG4gICAgc2hvd0FsbENlbnRlckNhcmRzKGNlbnRlckNhcmRzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q2VudGVyQ2FyZCA9IGNlbnRlckNhcmRzO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjZW50ZXJDYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZChjZW50ZXJDYXJkc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGR1YSAzIGxhIGxlbiAtMTc1LCAtMTAgcm9pIHhvZSByYSBiZW4gcGhhaVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzBdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIC0xNzAsIC00NSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5bMV0ucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIC0xNywgLTQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCAtODUsIC00NSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlblsyXS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgLTE3MCwgLTQ1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCAwLCAtNDUpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2VudGVyQ2FyZC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzNdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjEsIDg1LCAtNDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuWzRdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNwYXduKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgMTcwLCAtNDUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9LCA0MDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZExpc3RlbmVyXHJcbiAgICBzZXR1cExpc3RlbmVyKCkge1xyXG4gICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5KT0lOX1JPT01fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgSk9JTl9ST09NX1NVQ0NFU1NcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkSm9pblJvb21TdWNjZWVkKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIEpPSU5fUk9PTV9TVUNDRVNTIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJUm9vbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwTWF0Y2gocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlRIT05HX1RJTl9CQU5fQ0hPSTpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgVEhPTkdfVElOX0JBTl9DSE9JXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEdhbWVJbmZvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFRIT05HX1RJTl9CQU5fQ0hPSSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSVJvb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VUlQbGF5aW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBTkdfS1lfVEhPQVRfUEhPTkc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIERBTkdfS1lfVEhPQVRfUEhPTkdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBEQU5HX0tZX1RIT0FUX1BIT05HIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG91dENoYWlyID0gcmVzW1wib3V0Q2hhaXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc091dFJvb20gPSByZXNbXCJpc091dFJvb21cIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKG91dENoYWlyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiU+G6r3AgcuG7nWkgYsOgbiAhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ORVdfVVNFUl9KT0lOOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBORVdfVVNFUl9KT0lOXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFVzZXJKb2luUm9vbShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBORVdfVVNFUl9KT0lOIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuaWNrTmFtZSA9IHJlc1tcImluZm9cIl1bXCJuaWNrTmFtZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF2YXRhciA9IHJlc1tcImluZm9cIl1bXCJhdmF0YXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TW9uZXkgPSByZXNbXCJpbmZvXCJdW1wibW9uZXlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcInVDaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXR1cyA9IHJlc1tcInVTdGF0dXNcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zID09IGNoYWlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhpc3QgcGxheWVyIC0+IFNldCBQbGF5ZXIgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWF0ID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0KS5yZXNldFBsYXllckluZm8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VzdG9tUGxheWVySW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIjogYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5pY2tOYW1lXCI6IG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRNb25leVwiOiBjdXJyZW50TW9uZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlYXRQbGF5ZXIoc2VhdCwgY3VzdG9tUGxheWVySW5mbyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19WSUVXRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0KS5zZXRJc1ZpZXdlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRdLmlzVmlld2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0KS5wbGF5RnhWaWV3ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXQpLnNldElzVmlld2VyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRdLmlzVmlld2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MRUFWRV9HQU1FOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIExFQVZFX0dBTUVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkVXNlckxlYXZlUm9vbShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIExFQVZFX0dBTUUgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmVlZCBjbGVhciBjb25maWdQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkID09IHNlYXRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgVUlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93QnRuSW52aXRlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJTZWF0RXhpc3RMYXN0ID0gdGhpcy5nZXROdW1QbGF5ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyU2VhdEV4aXN0TGFzdC5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQbGF5ZXJzUGxheWluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDZW50ZXJDYXJkcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWUgbGVhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgVUlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVJX1BsYXlpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5VSV9DaG9vc2VSb29tLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlRBS0VfVFVSTjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgVEFLRV9UVVJOXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFRha2VUdXJuKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFRBS0VfVFVSTiByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uQ2hhaXIgPSByZXNbXCJhY3Rpb25DaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IHJlc1tcImFjdGlvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RSYWlzZSA9IHJlc1tcImxhc3RSYWlzZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRCZXQgPSByZXNbXCJjdXJyZW50QmV0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4QmV0ID0gcmVzW1wibWF4QmV0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25leSA9IHJlc1tcImN1cnJlbnRNb25leVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhaXNlU3RlcCA9IHJlc1tcInJhaXNlU3RlcFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhaXNlQmxvY2sgPSByZXNbXCJyYWlzZUJsb2NrXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbGRNYXhCZXQgPSB0aGlzLm1heEJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhCZXQgPSBtYXhCZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMub2xkTWF4QmV0IDwgdGhpcy5tYXhCZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFJhaXNlID0gdGhpcy5tYXhCZXQgLSB0aGlzLm9sZE1heEJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWlzZVN0ZXAgID0gcmFpc2VTdGVwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnJhaXNlU3RlcCA8IHRoaXMuY3VycmVudFJvb21CZXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWlzZVN0ZXAgPSB0aGlzLmN1cnJlbnRSb29tQmV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFpc2VCbG9jayA9IHJhaXNlQmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgVEFLRV9UVVJOIGFjdGlvbkNoYWlyIDogXCIsIGFjdGlvbkNoYWlyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBUQUtFX1RVUk4gYWN0aW9uIDogXCIsIGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgVEFLRV9UVVJOIGxhc3RSYWlzZSA6IFwiLCBsYXN0UmFpc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFRBS0VfVFVSTiBjdXJyZW50QmV0IDogXCIsIGN1cnJlbnRCZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFRBS0VfVFVSTiBtYXhCZXQgOiBcIiwgbWF4QmV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vY2MubG9nKFwiTGllbmcgVEFLRV9UVVJOIGN1cnJlbnRNb25leSA6IFwiLCBjdXJyZW50TW9uZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFRBS0VfVFVSTiByYWlzZVN0ZXAgOiBcIiwgcmFpc2VTdGVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBUQUtFX1RVUk4gcmFpc2VCbG9jayA6IFwiLCByYWlzZUJsb2NrKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoYWN0aW9uQ2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJldCA9IGN1cnJlbnRCZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IGN1cnJlbnRNb25leTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PSBjbWQuQ29kZS5HQU1FX0FDVElPTl9GT0xEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNNb0JhaSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09IGNtZC5Db2RlLkdBTUVfQUNUSU9OX0FMTF9JTikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQWxsSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb25OYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5HQU1FX0FDVElPTl9GT0xEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lID0gXCJGT0xEXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxGb2xkICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0FNRV9BQ1RJT05fQ0hFQ0s6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWUgPSBcIkNIRUNLXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0FNRV9BQ1RJT05fQ0FMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZSA9IFwiQ0FMTFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdBTUVfQUNUSU9OX1JBSVNFOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lID0gXCJSQUlTRVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdBTUVfQUNUSU9OX0FMTF9JTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTmFtZSA9IFwiQUxMLUlOXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxBbGxJbiArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0FjdGlvblN0YXRlKGFjdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEdvbGQoY3VycmVudE1vbmV5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRCZXQoY3VycmVudEJldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TRUxFQ1RfREVBTEVSOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBTRUxFQ1RfREVBTEVSXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFNlbGVjdERlYWxlcihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBTRUxFQ1RfREVBTEVSIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWlzZUJsb2NrID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib0JhaUlkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1DYXJkT3BlbmVkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlYWxlckNoYWlyID0gcmVzW1wiZGVhbGVyQ2hhaXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbWFsbEJsaW5kQ2hhaXIgPSByZXNbXCJzbWFsbEJsaW5kQ2hhaXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiaWdCbGluZENoYWlyID0gcmVzW1wiYmlnQmxpbmRDaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm9TaXplID0gcmVzW1wiaGFzSW5mb1NpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNJbmZvTGlzdCA9IHJlc1tcImhhc0luZm9MaXN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyU3RhdHVzTGlzdCA9IHJlc1tcInBsYXllclN0YXR1c0xpc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lSWQgPSByZXNbXCJnYW1lSWRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0NoZWF0ID0gcmVzW1wiaXNDaGVhdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25leVNpemUgPSByZXNbXCJjdXJyZW50TW9uZXlTaXplXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1vbmV5TGlzdCA9IHJlc1tcImN1cnJlbnRNb25leUxpc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gcmVzW1wic2l6ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RCZXRCaWdCbGluZCA9IHJlc1tcImxpc3RCZXRCaWdCbGluZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWlzZVN0ZXAgPSB0aGlzLm9sZE1heEJldCA9IHRoaXMubWF4QmV0ID0gdGhpcy5jdXJyZW50Um9vbUJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpdmF0ZUNhcmRzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0V2lucyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQWxsSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNNb0JhaSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsRm9sZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxBbGxJbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBkZWFsZXJDaGFpciA6IFwiLCBkZWFsZXJDaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBzbWFsbEJsaW5kQ2hhaXIgOiBcIiwgc21hbGxCbGluZENoYWlyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBTRUxFQ1RfREVBTEVSIGJpZ0JsaW5kQ2hhaXIgOiBcIiwgYmlnQmxpbmRDaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBoYXNJbmZvU2l6ZSA6IFwiLCBoYXNJbmZvU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBoYXNJbmZvTGlzdCA6IFwiLCBoYXNJbmZvTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBwbGF5ZXJTdGF0dXNMaXN0IDogXCIsIHBsYXllclN0YXR1c0xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFNFTEVDVF9ERUFMRVIgZ2FtZUlkIDogXCIsIGdhbWVJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBpc0NoZWF0IDogXCIsIGlzQ2hlYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFNFTEVDVF9ERUFMRVIgY3VycmVudE1vbmV5U2l6ZSA6IFwiLCBjdXJyZW50TW9uZXlTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBTRUxFQ1RfREVBTEVSIGN1cnJlbnRNb25leUxpc3QgOiBcIiwgY3VycmVudE1vbmV5TGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0VMRUNUX0RFQUxFUiBzaXplIDogXCIsIHNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIFNFTEVDVF9ERUFMRVIgbGlzdEJldEJpZ0JsaW5kIDogXCIsIGxpc3RCZXRCaWdCbGluZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgRGVhbGVyLCBTQiwgQkIgc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAgdGhpcy5sYXN0UmFpc2UgPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldERlYWxlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRTbWFsbEJpbmQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0QmlnQmluZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAobGlzdEJldEJpZ0JsaW5kW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBpZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpZCkuc2V0QmV0KDIgKiB0aGlzLmN1cnJlbnRSb29tQmV0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZERlYWxlciA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhkZWFsZXJDaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWREZWFsZXIgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkRGVhbGVyKS5zZXREZWFsZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJldCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHNlYXRJZFNtYWxsQmluZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhzbWFsbEJsaW5kQ2hhaXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHNlYXRJZFNtYWxsQmluZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWRTbWFsbEJpbmQpLnNldFNtYWxsQmluZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBzbWFsbCA9IDAgPCBsaXN0QmV0QmlnQmxpbmRbc21hbGxCbGluZENoYWlyXSA/IDIgKiB0aGlzLmN1cnJlbnRSb29tQmV0IDogdGhpcy5jdXJyZW50Um9vbUJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChzZWF0SWRTbWFsbEJpbmQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudEJldCA9IHNtYWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJzY2NjYnLCBsaXN0QmV0QmlnQmxpbmQsIHNtYWxsLCBzbWFsbEJsaW5kQ2hhaXIsIHNlYXRJZFNtYWxsQmluZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZFNtYWxsQmluZCkuc2V0QmV0KHNtYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHNlYXRJZEJpZ0JpbmQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoYmlnQmxpbmRDaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWF0SWRCaWdCaW5kICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoc2VhdElkQmlnQmluZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50QmV0ID0gMiAqIHRoaXMuY3VycmVudFJvb21CZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZEJpZ0JpbmQpLnNldEJpZ0JpbmQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZEJpZ0JpbmQpLnNldEJldCgyICogdGhpcy5jdXJyZW50Um9vbUJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciAgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlYXRJZCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0ID0gdGhpcy5jdXJyZW50Um9vbUJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSB0aGlzLmN1cnJlbnRNb25leSAtIHRoaXMuY3VycmVudFJvb21CZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRCZXQodGhpcy5jdXJyZW50Um9vbUJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBHb2xkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50TW9uZXlMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRNb25leUxpc3RbaW5kZXhdID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlYXRJZCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSBjdXJyZW50TW9uZXlMaXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEdvbGQoY3VycmVudE1vbmV5TGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5hZGRDaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5CVVlfSU46XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIEJVWV9JTlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRCdXlJbihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBCVVlfSU4gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidXlJbk1vbmV5ID0gcmVzW1wiYnV5SW5Nb25leVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgQlVZX0lOIGNoYWlyIDogXCIsIGNoYWlyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBCVVlfSU4gYnV5SW5Nb25leSA6IFwiLCBidXlJbk1vbmV5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZSBidXkgaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1vbmV5ID0gYnV5SW5Nb25leTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0R29sZChidXlJbk1vbmV5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREVBTF9QUklWQVRFX0NBUkQ6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIERFQUxfUFJJVkFURV9DQVJEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZERlYWxDYXJkcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBERUFMX1BSSVZBVEVfQ0FSRCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNpemVDYXJkID0gcmVzW1wic2l6ZUNhcmRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNhcmRzID0gcmVzW1wibXlDYXJkc1wiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvQmFpSWQgPSByZXNbXCJib0JhaUlkXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib0JhaUlkID0gYm9CYWlJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgREVBTF9QUklWQVRFX0NBUkQgY2hhaXIgOiBcIiwgY2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIERFQUxfUFJJVkFURV9DQVJEIHNpemVDYXJkIDogXCIsIHNpemVDYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBERUFMX1BSSVZBVEVfQ0FSRCBteUNhcmRzIDogXCIsIG15Q2FyZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIERFQUxfUFJJVkFURV9DQVJEIGJvQmFpSWQgOiBcIiwgYm9CYWlJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IG15Q2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgUmVjZWl2ZWRDaGlhQmFpIGN1cnJlbnRDYXJkIDogXCIsIHRoaXMuY3VycmVudENhcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyclNlYXRFeGlzdCA9IHRoaXMuZ2V0TnVtUGxheWVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtUGxheWVyID0gYXJyU2VhdEV4aXN0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBSZWNlaXZlZENoaWFCYWkgYXJyU2VhdEV4aXN0IDogXCIsIGFyclNlYXRFeGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgUmVjZWl2ZWRDaGlhQmFpIG51bVBsYXllciA6IFwiLCBudW1QbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3BlbiB8IEhpZGUgY2FyZHMgbm90IHVzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUiAqIDI7IGluZGV4KyspIHsgLy8gOCBwbGF5ZXJzICogMiBjYXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0RlYWwuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGluZGV4ID49IG51bVBsYXllciAqIDIgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0ucG9zaXRpb24gPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTW92ZSBDYXJkcyB1c2VkIHRvIGVhY2ggcGxheWVyIGpvaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykgeyAvLyBwbGF5ZXJzIHggMiBjYXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBudW1QbGF5ZXI7IGIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSBhcnJTZWF0RXhpc3RbYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQ0TWUgPSB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlblsoYSAqIG51bVBsYXllcikgKyBiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhd1BsYXllclBvcyA9IHRoaXMuZ3JvdXBQbGF5ZXJzLmNoaWxkcmVuW3NlYXRJZF0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgQ0hJQV9CQUkgZGVsYXlUaW1lIDogXCIsICgoYSAqIG51bVBsYXllcikgKyBiKSAqIDAuMTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkNE1lLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgoKGEgKiBudW1QbGF5ZXIpICsgYikgKiAwLjE1KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCByYXdQbGF5ZXJQb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsYXlPdmVyMlVuZGVyID0gMC4yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF4RGVsYXkgPSAoKDEgKiBudW1QbGF5ZXIpICsgKG51bVBsYXllciAtIDEpKSAqIDAuMTU7IC8vICgoYSAqIG51bVBsYXllcikgKyBiKSAqIDAuMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVVbmRlckxheWVyID0gKG1heERlbGF5ICsgMC4yICsgZGVsYXlPdmVyMlVuZGVyKSAqIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiQ0hJQV9CQUkgdGltZVVuZGVyTGF5ZXIgOiBcIiwgdGltZVVuZGVyTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hpYUJhaURvbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVIgKiAyOyBpbmRleCsrKSB7IC8vIDggcGxheWVycyAqIDIgY2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkNISUFfQkFJIGNhcmRzRGVhbCBpbmRleCA6IFwiLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0RlYWwuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1QbGF5ZXI7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdEV4aXN0W2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wIGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0Q2FyZFJlYWR5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDYXJkUmVhZHkodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIE1lIGNhcmRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vY2MubG9nKFwiTGllbmcgY2FyZElkIDogXCIsIG15Q2FyZHNbYV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQobXlDYXJkc1thXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5wcmVwYXJlVG9UcmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBjYXJkTmFtZSA9IHRoaXMuZ2V0Q2FyZHNOYW1lKGJvQmFpSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaG93Q2FyZE5hbWUoY2FyZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aW1lVW5kZXJMYXllcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTkVXX1JPVU5EOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBORVdfUk9VTkRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkTmV3QmV0Um91bmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgTkVXX1JPVU5EIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3VuZElkID0gcmVzW1wicm91bmRJZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNpemVDYXJkID0gcmVzW1wic2l6ZUNhcmRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbHVzQ2FyZHMgPSByZXNbXCJwbHVzQ2FyZHNcIl07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lID0gcmVzW1wiY2FyZE5hbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3RBbW91bnQgPSByZXNbXCJwb3RBbW91bnRcIl07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpemVDYXJkID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FsbENlbnRlckNhcmRzKHBsdXNDYXJkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dPbmVDZW50ZXJDYXJkcyhwbHVzQ2FyZHMsIHRoaXMuY3VycmVudENlbnRlckNhcmQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuYWN0aW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhCZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXQgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaXNlU3RlcCA9IDIgKiB0aGlzLmN1cnJlbnRSb29tQmV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIE5FV19ST1VORCByb3VuZElkIDogXCIsIHJvdW5kSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIE5FV19ST1VORCBzaXplQ2FyZCA6IFwiLCBzaXplQ2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgTkVXX1JPVU5EIHBsdXNDYXJkcyA6IFwiLCBwbHVzQ2FyZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIE5FV19ST1VORCBjYXJkTmFtZSA6IFwiLCBjYXJkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgTkVXX1JPVU5EIHBvdEFtb3VudCA6IFwiLCBwb3RBbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgIT0gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKS5zZXRCZXQoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlID0gcG90QW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTWF0Y2hQb3Quc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHBvdEFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSEFOR0VfVFVSTjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgQ0hBTkdFX1RVUk5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkQ2hhbmdlVHVybihkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBDSEFOR0VfVFVSTiByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91bmRJZCA9IHJlc1tcInJvdW5kSWRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmV0VGltZSA9IHJlc1tcImJldFRpbWVcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgQ0hBTkdFX1RVUk4gcm91bmRJZCA6IFwiLCByb3VuZElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBDSEFOR0VfVFVSTiBjaGFpciA6IFwiLCBjaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgQ0hBTkdFX1RVUk4gYmV0VGltZSA6IFwiLCBiZXRUaW1lKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCc3Nzc3NzcnLCB0aGlzLmN1cnJlbnRCZXQsIHRoaXMubWF4QmV0LHRoaXMuY3VycmVudE1vbmV5LCB0aGlzLnJhaXNlQmxvY2ssIHRoaXMudG90YWxBbGxJbiwgdGhpcy50b3RhbEZvbGQsIGNvbmZpZ1BsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd1BsYXlDb3VudGRvd24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaGlua2luZ0NvdW50RG93bihzZWF0SWQsIGJldFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc01vQmFpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhhc0FsbEluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heEJldCA9PSB0aGlzLmN1cnJlbnRCZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2FsbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUmFpc2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuRm9sbG93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXhCZXQgLSB0aGlzLmN1cnJlbnRCZXQgPj0gdGhpcy5jdXJyZW50TW9uZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2FsbC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUmFpc2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkZvbGxvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFBsYXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQbGF5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG90YWxBbGxJbiArIHRoaXMudG90YWxGb2xkICsgMSA8IHRvdGFsUGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2FsbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUmFpc2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkZvbGxvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5DYWxsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5SYWlzZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkZvbGxvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyQmV0VmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5tYXRjaFBvdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5sYWJlbE1hdGNoUG90LnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnNzc3Nzc3JywgdGhpcy5tYXhCZXQsIHRoaXMucmFpc2VTdGVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZS5wdXNoKCh0aGlzLm1heEJldCArIHRoaXMucmFpc2VTdGVwKSAqIChpbmRleCArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlck1pbigodGhpcy5tYXhCZXQgKyB0aGlzLnJhaXNlU3RlcCkgKiAoNCAtIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLktFVF9USFVDOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBLRVRfVEhVQ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRFbmRHYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3RBbW91bnQgPSByZXNbXCJwb3RBbW91bnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5rU2l6ZSA9IHJlc1tcInJhbmtTaXplXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmFua0xpc3QgPSByZXNbXCJyYW5rTGlzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtxdHRTaXplID0gcmVzW1wia3F0dFNpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrcXR0TGlzdCA9IHJlc1tcImtxdHRMaXN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbGVhbldpbmVyU2l6ZSA9IHJlc1tcImJvb2xlYW5XaW5lclNpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBib29sZWFuV2luZXJMaXN0ID0gcmVzW1wiYm9vbGVhbldpbmVyTGlzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vbmV5QXJyYXlTaXplID0gcmVzW1wibW9uZXlBcnJheVNpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TW9uZXkgPSByZXNbXCJjdXJyZW50TW9uZXlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9uZXkgPSByZXNbXCJnYW1lTW9uZXlcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lTW9uZXlTaXplID0gcmVzW1wiZ2FtZU1vbmV5U2l6ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHB1YmxpY0NhcmRTaXplID0gcmVzW1wicHVibGljQ2FyZFNpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwdWJsaWNDYXJkcyA9IHJlc1tcInB1YmxpY0NhcmRzXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzSW5mb1NpemUgPSByZXNbXCJoYXNJbmZvU2l6ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm9MaXN0ID0gcmVzW1wiaGFzSW5mb0xpc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcml2YXRlQ2FyZExpc3QgPSByZXNbXCJwcml2YXRlQ2FyZExpc3RcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q2FyZExpc3QgPSByZXNbXCJtYXhDYXJkTGlzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmROYW1lTGlzdCA9IHJlc1tcImNhcmROYW1lTGlzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1hdGNoUG90VmFsdWUgPSBwb3RBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocG90QW1vdW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgRnggd2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpdmF0ZUNhcmRzID0gcHJpdmF0ZUNhcmRMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RXaW5zID0gYm9vbGVhbldpbmVyTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIFBsYXllcnMgaXMgUGxheWluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChtYXhDYXJkTGlzdFtpbmRleF0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFyclBsYXllclBvc0V4aXN0LnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwdWJsaWNDYXJkcy5sZW5ndGg7IGluZGV4ICsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHB1YmxpY0NhcmRzW2luZGV4XSA9PT0gMSAmJiBwcml2YXRlQ2FyZExpc3RbaW5kZXhdLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkICE9IC0xICYmIGlkICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMzsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIGNhcmRJZCA6IFwiLCBteUNhcmRzW2FdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQocHJpdmF0ZUNhcmRMaXN0W2luZGV4XVthXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGlkKS5wcmVwYXJlVG9UcmFuc2Zvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaWQpLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0UGxheWVySG91c2UoaWQpLnRyYW5zZm9ybVRvQ2FyZFJlYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmQgV2lubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjbWQuQ29kZS5NQVhfUExBWUVSOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChib29sZWFuV2luZXJMaXN0W2luZGV4XSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2lubmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuZnhXaW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXlDaGFuZ2U6IGtxdHRMaXN0W2luZGV4XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRNb25leTogY3VycmVudE1vbmV5W2luZGV4XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWUgd2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNb25leSA9IGN1cnJlbnRNb25leVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3NlIDogY2FuIGtpZW0gdHJhIHhlbSBjbyBwaGFpIGlzUGxheWluZyBrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sZXQgZmluZElkID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0luZm9MaXN0W2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuZnhMb3NlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbmV5Q2hhbmdlOiBrcXR0TGlzdFtpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50TW9uZXk6IGN1cnJlbnRNb25leVtpbmRleF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lIHdpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TW9uZXkgPSBjdXJyZW50TW9uZXlbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IGdhbWVNb25leVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBDZW50ZXIgQ2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNob3dBbGxDZW50ZXJDYXJkcyhwdWJsaWNDYXJkcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNob3cgTWUgY2FyZHMgZm9yIHJlY29ubmVjdFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmluZCBNZSBtYXggY2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVuZE1lQ2FyZHMgPSB0aGlzLmN1cnJlbnRDYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZW5kQ2VudGVyQ2FyZHMgPSBwdWJsaWNDYXJkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGVuZE1lTWF4Q2FyZHMgPSBtYXhDYXJkTGlzdFtjb25maWdQbGF5ZXJbMF0ucGxheWVyUG9zXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vY2MubG9nKFwiTGllbmcgS0VUX1RIVUMgZW5kTWVDYXJkcyA6IFwiLCBlbmRNZUNhcmRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gY2MubG9nKFwiTGllbmcgS0VUX1RIVUMgZW5kQ2VudGVyQ2FyZHMgOiBcIiwgZW5kQ2VudGVyQ2FyZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvL2NjLmxvZyhcIkxpZW5nIEtFVF9USFVDIGVuZE1lTWF4Q2FyZHMgOiBcIiwgZW5kTWVNYXhDYXJkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChlbmRNZU1heENhcmRzICE9IHVuZGVmaW5lZCAmJiBlbmRNZU1heENhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbmRNZUNhcmRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCBmaW5kSWQgPSBlbmRNZU1heENhcmRzLmluZGV4T2YoZW5kTWVDYXJkc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChmaW5kSWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkuc2V0Q2FyZFdpbihpbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zZXRDYXJkV2luKGluZGV4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbmRDZW50ZXJDYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgZmluZElkID0gZW5kTWVNYXhDYXJkcy5pbmRleE9mKGVuZENlbnRlckNhcmRzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGZpbmRJZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlbltpbmRleF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuW2luZGV4XS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93IENhcmRzIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyclBsYXllclBvc0V4aXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNhcmROYW1lID0gdGhpcy5nZXRDYXJkc05hbWUoY2FyZE5hbWVMaXN0W2FyclBsYXllclBvc0V4aXN0W2luZGV4XV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhhcnJQbGF5ZXJQb3NFeGlzdFtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZE5hbWUoY2FyZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfTUFUQ0g6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgVVBEQVRFX01BVENIXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFVwZGF0ZU1hdGNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgVVBEQVRFX01BVENIIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaGFzSW5mb1NpemVcIjogOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaGFzSW5mb0xpc3RcIjogWzEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjdXJyZW50TW9uZXlMaXN0XCI6IFsxOTk5MCwgMTk5OTAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJzdGF0dXNMaXN0XCI6IFsyLCAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm9TaXplID0gcmVzW1wiaGFzSW5mb1NpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNJbmZvTGlzdCA9IHJlc1tcImhhc0luZm9MaXN0XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1vbmV5TGlzdCA9IHJlc1tcImN1cnJlbnRNb25leUxpc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGF0dXNMaXN0ID0gcmVzW1wic3RhdHVzTGlzdFwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciA6IFwiLCBjb25maWdQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVvIFBvcyBraG9uZyBwaGFpIFNlYXRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNvbmZpZ1BsYXllcltpbmRleF1bXCJwbGF5ZXJQb3NcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzSW5mb0xpc3RbcG9zXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0R29sZCBzZSBpbmFjdGl2ZSBpc1ZpZXdlciBuZW4gZGF0IG5vIGxlbiBkYXUgZGUgYmVuIGR1b2kgY29uZmlnIGxhaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldEdvbGQoY3VycmVudE1vbmV5TGlzdFtwb3NdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzTGlzdFtwb3NdID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfU0lUVElORyB8fCBzdGF0dXNMaXN0W3Bvc10gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldElzVmlld2VyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLmlzVmlld2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wicGxheWVySWRcIl0gPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wiaXNWaWV3ZXJcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciA6IFwiLCBjb25maWdQbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0hPV19DQVJEOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBTSE9XX0NBUkRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkU2hvd0NhcmQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2MubG9nKFwiTGllbmcgU0hPV19DQVJEIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkU2hvdyA9IHRoaXMucHJpdmF0ZUNhcmRzW2NoYWlyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkICE9IC0xICYmIGlkICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMzsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBjYXJkSWQgOiBcIiwgbXlDYXJkc1thXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZChjYXJkU2hvd1thXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpZCkucHJlcGFyZVRvVHJhbnNmb3JtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpZCkudHJhbnNmb3JtVG9DYXJkUmVhbChhLCB0aGlzLnNwcml0ZUNhcmRzW3Nwcml0ZUNhcmRJZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdldFBsYXllckhvdXNlKGlkKS50cmFuc2Zvcm1Ub0NhcmRSZWFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIFNIT1dfQ0FSRCBjaGFpciA6IFwiLCBjaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5SRVFVRVNUX0JVWV9JTjpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBSRVFVRVNUX0JVWV9JTlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFUVVFU1RfU1RBTkRfVVA6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgUkVRVUVTVF9TVEFORF9VUFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRTdGFuZFVwKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgUkVRVUVTVF9TVEFORF9VUCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc1VwID0gcmVzW1wiaXNVcFwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBSRVFVRVNUX1NUQU5EX1VQIGlzVXAgOiBcIiwgaXNVcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT0dJTjpcclxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXNoTGlzdFJvb20oKTtcclxuICAgICAgICAgICAgICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kUmVjb25uZWN0Um9vbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVE9QU0VSVkVSOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIFRPUFNFUlZFUlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9QSU5HUE9ORzpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBDTURfUElOR1BPTkdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfSk9JTl9ST09NOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIENNRF9KT0lOX1JPT01cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfUkVDT05ORUNUX1JPT006XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgQ01EX1JFQ09OTkVDVF9ST09NXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX1JFQ09OTkVDVF9ST09NOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIENNRF9SRUNPTk5FQ1RfUk9PTVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk1PTkVZX0JFVF9DT05GSUc6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgTU9ORVlfQkVUX0NPTkZJR1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpPSU5fUk9PTV9GQUlMOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRKb2luUm9vbUZhaWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBKT0lOX1JPT01fRkFJTCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBcIkzhu5dpIFwiICsgcmVzLmdldEVycm9yKCkgKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZ2V0RXJyb3IoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiTOG7l2kga2nhu4NtIHRyYSB0aMO0bmcgdGluIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiS2jDtG5nIHTDrG0gxJHGsOG7o2MgcGjDsm5nIHRow61jaCBo4bujcC4gVnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuqFuIGtow7RuZyDEkeG7pyB0aeG7gW4gdsOgbyBwaMOybmcgY2jGoWkgbsOgeSFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIktow7RuZyB0w6xtIMSRxrDhu6NjIHBow7JuZyB0aMOtY2ggaOG7o3AuIFZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJN4buXaSBs4bqnbiB2w6BvIHBow7JuZyBwaOG6o2kgY8OhY2ggbmhhdSAxMCBnacOieSFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkjhu4cgdGjhu5FuZyBi4bqjbyB0csOsIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiS2jDtG5nIHTDrG0gdGjhuqV5IHBow7JuZyBjaMahaSFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIk3huq10IGto4bqpdSBwaMOybmcgY2jGoWkga2jDtG5nIMSRw7puZyFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIlBow7JuZyBjaMahaSDEkcOjIMSR4bunIG5nxrDhu51pIVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuqFuIGLhu4sgY2jhu6cgcGjDsm5nIGtow7RuZyBjaG8gdsOgbyBiw6BuIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2cobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9MSVNUX1JPT006XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEdldExpc3RSb29tKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGF0YSA9IHJlcy5saXN0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1Sb29tKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiTGllbmcuSXRlbVJvb21cIikuaW5pdEl0ZW0oaXRlbURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGlzdFJvb20uc2Nyb2xsVG9Ub3AoMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpPSU5fR0FNRV9ST09NX0JZX0lEOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIEpPSU5fR0FNRV9ST09NX0JZX0lEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR2FtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICBcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVFVfRE9OR19CQVRfREFVOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRBdXRvU3RhcnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBSZWNlaXZlQXV0b1N0YXJ0IHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0F1dG9TdGFydFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aW1lQXV0b1N0YXJ0XCI6IDVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmlzQXV0b1N0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Q2VudGVyQ2FyZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIdWJDaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFdhaXR0aW5nQ291bnREb3duKHJlcy50aW1lQXV0b1N0YXJ0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTWF0Y2hQb3Quc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllcnNQbGF5aW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5USE9OR19USU5fQkFOX0NIT0k6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEdhbWVJbmZvKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgUmVjZWl2ZWRHYW1lSW5mbyByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIFJlY29ubmVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VyIGRhbmcgbyB0cm9uZyAxIHBob25nIG5hbyBkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXUgcmVxIGpvaW4gcm9vbSBuaGFuIGRjIGNhaSBuYXkgdGhpIC0+IGR1YSB2YW8gcGhvbmcgZGFuZyBjaG9pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2hhaXJcIjogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2h1b25nQ2hhaXJcIjogNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2FyZHNcIjogWzIyLCAzNCwgMzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjdW9jRGFuaEJpZW5MaXN0XCI6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY3VvY0tlQ3VhTGlzdFwiOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVTZXJ2ZXJTdGF0ZVwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0F1dG9TdGFydFwiOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJnYW1lQWN0aW9uXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNvdW50RG93blRpbWVcIjogMTMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1vbmV5VHlwZVwiOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJtb25leUJldFwiOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVJZFwiOiAxODI4MDgyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyb29tSWRcIjogOTgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImhhc0luZm9cIjogW3RydWUsIHRydWUsIHRydWUsIHRydWUsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2VdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJwbGF5ZXJzXCI6IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSVJvb20oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VUlQbGF5aW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNoYWlyID0gcmVzW1wibXlDaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNodW9uZ0NoYWlyID0gcmVzW1wiY2h1b25nQ2hhaXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkcyA9IHJlc1tcImNhcmRzXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VvY0RhbmhCaWVuTGlzdCA9IHJlc1tcImN1b2NEYW5oQmllbkxpc3RcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdW9jS2VDdWFMaXN0ID0gcmVzW1wiY3VvY0tlQ3VhTGlzdFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVTZXJ2ZXJTdGF0ZSA9IHJlc1tcImdhbWVTZXJ2ZXJTdGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzQXV0b1N0YXJ0ID0gcmVzW1wiaXNBdXRvU3RhcnRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lQWN0aW9uID0gcmVzW1wiZ2FtZUFjdGlvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50RG93blRpbWUgPSByZXNbXCJjb3VudERvd25UaW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9uZXlUeXBlID0gcmVzW1wibW9uZXlUeXBlXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9uZXlCZXQgPSByZXNbXCJtb25leUJldFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVJZCA9IHJlc1tcImdhbWVJZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvb21JZCA9IHJlc1tcInJvb21JZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm8gPSByZXNbXCJoYXNJbmZvXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVycyA9IHJlc1tcInBsYXllcnNcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsUm9vbUlkLnN0cmluZyA9IFwiQkEgQ8OCWSAtIFBIw5JORzogXCIgKyByb29tSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSb29tQmV0LnN0cmluZyA9IFwiTeG7qEMgQ8av4buiQzogXCIgKyBVdGlscy5mb3JtYXROdW1iZXIobW9uZXlCZXQpICsgXCIkXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tQmV0ID0gbW9uZXlCZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZUFjdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSBjYXJkcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllclswXS5wbGF5ZXJJZCA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllclswXS5wbGF5ZXJQb3MgPSBteUNoYWlyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgTWUgOiBcIiwgY29uZmlnUGxheWVyWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyICA6IFwiLCBjb25maWdQbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG51bVBsYXllcnMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoYXNJbmZvLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0luZm9baW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtUGxheWVycyArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclBsYXllclBvc0V4aXN0LnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBudW1QbGF5ZXJzIDogXCIsIG51bVBsYXllcnMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgY29uZmlnUGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgY29uZmlnUGxheWVyLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbYV0ucGxheWVyUG9zID0gZGVmYXVsdFBsYXllclBvc1tteUNoYWlyXVthXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IFN0YXRlIG9mIFNlYXQgOiBZZXMgfCBObyBleGlzdCBQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5kUG9zID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlYXRJZCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UGxheWVySW5mbygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5kUG9zID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGlzdCBwbGF5ZXIgLT4gU2V0IFBsYXllciBJbmZvXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhbmcgdGhpZXUgdGhvbmcgdGluIC0+IHNlIGsgaGllbiBkYyBVc2VySW5mb1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoYXJyUGxheWVyU3RhdHVzW2ZpbmRQb3NdID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfUkVBRFkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBVdGlscy5yYW5kb21SYW5nZSgxLCA5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE1vbmV5OiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93QnRuSW52aXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0T3duZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0T3duZXIgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2h1b25nQ2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdE93bmVyICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0T3duZXIpLnNldE93bmVyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWF0T3duZXIgPSBzZWF0T3duZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIdWJDaGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5NT0lfREFUX0NVT0M6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRNb2lEYXRDdW9jKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgUmVjZWl2ZWRNb2lEYXRDdW9jIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aW1lRGF0Q3VvY1wiOiAyMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJldHRpbmdDb3VudERvd24ocmVzLnRpbWVEYXRDdW9jKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE1hdGNoUG90VmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTWF0Y2hQb3Quc3RyaW5nID0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZS5wdXNoKHRoaXMuY3VycmVudFJvb21CZXQgKiAoaW5kZXggKyAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlck1pbih0aGlzLmN1cnJlbnRSb29tQmV0ICogKDQgLSBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgYmV0IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gdGhpcy5zZWF0T3duZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiAhY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIFJlY2VpdmVkTW9pRGF0Q3VvYyBpbmRleCA6IFwiLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0QmV0KHRoaXMuY3VycmVudFJvb21CZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLmFkZENoaXBzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9IDApIHsgLy8gayBrZSBjdWEsIGRhbmggYmllbiBkdW9jIGxlbiBjaGluaCBtaW5oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldHVwQmV0VmFsdWUodGhpcy5jdXJyZW50Um9vbUJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWF0SWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwbGF5ZXJJZDogLTEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwbGF5ZXJQb3M6IC0xLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaXNWaWV3ZXI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VhdE93bmVyID09IDApIHsgLy8gTWUgbGEgQ2h1b25nIC0+IEsgZGMgYmV0IHZhIGsgZGMgdmFvIGdhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBCZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBNT0lfREFUX0NVT0MgdGhpcy5hcnJCZXRWYWx1ZSA6IFwiLCB0aGlzLmFyckJldFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1DYXJkT3BlbmVkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIRUFUX0NBUkRTOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIENIRUFUX0NBUkRTXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREFOR19LWV9DSE9JX1RJRVA6XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgREFOR19LWV9DSE9JX1RJRVBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfT1dORVJfUk9PTTpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBVUERBVEVfT1dORVJfUk9PTVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTk9USUZZX0tJQ0tfRlJPTV9ST09NOlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRLaWNrT2ZmKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgUmVjZWl2ZWRLaWNrT2ZmIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk5FV19VU0VSX0pPSU46XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFVzZXJKb2luUm9vbShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIFJlY2VpdmVkVXNlckpvaW5Sb29tIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpbmZvXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgXCJuaWNrTmFtZVwiOiBcIkFob2FuZzg4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIFwiYXZhdGFyXCI6IFwiN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBcIm1vbmV5XCI6IDEwMjMwMDgwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ1Q2hhaXJcIjogNSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidVN0YXR1c1wiOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSByZXNbXCJpbmZvXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdUNoYWlyID0gcmVzW1widUNoYWlyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdVN0YXR1cyA9IHJlc1tcInVTdGF0dXNcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zID09IHVDaGFpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4aXN0IHBsYXllciAtPiBTZXQgUGxheWVyIEluZm9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhdCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdCkucmVzZXRQbGF5ZXJJbmZvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbVBsYXllckluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCI6IGluZm9bXCJhdmF0YXJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmlja05hbWVcIjogaW5mb1tcIm5pY2tOYW1lXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1cnJlbnRNb25leVwiOiBpbmZvW1wibW9uZXlcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VhdFBsYXllcihzZWF0LCBjdXN0b21QbGF5ZXJJbmZvKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVTdGF0dXMgPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19WSUVXRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0KS5zZXRJc1ZpZXdlcih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRdLmlzVmlld2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0KS5wbGF5RnhWaWV3ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXQpLnNldElzVmlld2VyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRdLmlzVmlld2VyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5OT1RJRllfVVNFUl9HRVRfSkFDS1BPVDpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBOT1RJRllfVVNFUl9HRVRfSkFDS1BPVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9NQVRDSDpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkVXBkYXRlTWF0Y2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBSZWNlaXZlZFVwZGF0ZU1hdGNoIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJteUNoYWlyXCI6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImhhc0luZm9cIjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpbmZvc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm5pY2tOYW1lXCI6IFwibmVzdGxlMTAzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJhdmF0YXJcIjogXCI3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiA1NTYwODYwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJpbWVsZGRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJhdmF0YXJcIjogXCIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiAzODUyODU0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJWTl9TdGFyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXZhdGFyXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibW9uZXlcIjogNTcwMzU3MixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm5pY2tOYW1lXCI6IFwiZ3ZuZ3ZuNDU2N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXZhdGFyXCI6IFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibW9uZXlcIjogMjc0OTY4NyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJuaWNrTmFtZVwiOiBcInNreXBlbm9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJhdmF0YXJcIjogXCI1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiA1MDUxMzYzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhaXIgPSByZXNbXCJteUNoYWlyXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzSW5mbyA9IHJlc1tcImhhc0luZm9cIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvcyA9IHJlc1tcImluZm9zXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW8gUG9zIGtob25nIHBoYWkgU2VhdElkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoYXNJbmZvLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNvbmZpZ1BsYXllcltpbmRleF1bXCJwbGF5ZXJQb3NcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzSW5mb1twb3NdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0R29sZCBzZSBpbmFjdGl2ZSBpc1ZpZXdlciBuZW4gZGF0IG5vIGxlbiBkYXUgZGUgYmVuIGR1b2kgY29uZmlnIGxhaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldEdvbGQoaW5mb3NbcG9zXVtcIm1vbmV5XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wicGxheWVySWRcIl0gPSBpbmZvc1twb3NdW1wibmlja05hbWVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm9zW3Bvc11bXCJzdGF0dXNcIl0gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19TSVRUSU5HIHx8IGluZm9zW3Bvc11bXCJzdGF0dXNcIl0gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRJc1ZpZXdlcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKGluZGV4LCBpbmZvc1twb3NdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllcklkXCJdID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgOiBcIiwgY29uZmlnUGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQVRfUk9PTTpcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkQ2hhdFJvb20oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBDSEFUX1JPT00gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjaGFpclwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0ljb25cIjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY29udGVudFwiOiBcIjZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibmlja25hbWVcIjogXCJjaGFvYWU5OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjaGFpclwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0ljb25cIjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNvbnRlbnRcIjogXCJsYWxhbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJuaWNrbmFtZVwiOiBcImNoYW9hZTk5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSWNvbiA9IHJlc1tcImlzSWNvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSByZXNbXCJjb250ZW50XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGF0IEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2hhdEVtb3Rpb24oY29udGVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGF0IE1zZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDaGF0TXNnKGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiLS1pbnBhY2tldC5nZXRDbWRJZCgpOiBcIiArIGlucGFja2V0LmdldENtZElkKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVxdWVzdFxyXG4gICAgYWN0aW9uTGVhdmVSb29tKCkge1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25MZWF2ZVJvb21cIik7XHJcbiAgICAgICAgTGllbmdOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFNlbmRSZXF1ZXN0TGVhdmVHYW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbk9wZW5DYXJkKCkge1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25PcGVuQ2FyZFwiKTtcclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNob3dDYXJkKCkpO1xyXG4gICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uU2VuZFZhb0dhKCkge1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25TZW5kVmFvR2FcIik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluY3JlYXNlQmV0VmFsdWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPT0gKHRoaXMuYXJyQmV0VmFsdWUubGVuZ3RoIC0gMSkpIHtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZVRhcmdldC55ID0gdGhpcy5hcnJCZXRQb3NbdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VCZXRWYWx1ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCA9PSAwKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggLT0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWVUYXJnZXQueSA9IHRoaXMuYXJyQmV0UG9zW3RoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbkFsbF9JbigpIHtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgYWN0aW9uQWxsX0luXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVGFrZVR1cm4oMCwgMCwgMCwgMSwgMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvblJhaXNlKCkge1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25SYWlzZVwiKTtcclxuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgcmF3TWVHb2xkID0gdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS51c2VyR29sZC5zdHJpbmcucmVwbGFjZSgvXFwuL2csIFwiXCIpO1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25SYWlzZSByYXcgOiBcIiwgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS51c2VyR29sZC5zdHJpbmcpO1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25SYWlzZSByYXdNZUdvbGQgOiBcIiwgcmF3TWVHb2xkKTtcclxuICAgICAgICBsZXQgY3VycmVudE1lTW9uZXkgPSBwYXJzZUludChyYXdNZUdvbGQpO1xyXG5cclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgYWN0aW9uUmFpc2UgY3VycmVudE1lTW9uZXkgOiBcIiwgY3VycmVudE1lTW9uZXkpO1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25SYWlzZSBiZXR0ZWQgOiBcIiwgdGhpcy5hcnJCZXRWYWx1ZVt0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4XSk7XHJcbiAgICAgICAgbGV0IGJldFZhbHVlID0gTWF0aC5taW4odGhpcy5hcnJCZXRWYWx1ZVt0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4XSwgY3VycmVudE1lTW9uZXkpO1xyXG5cclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFRha2VUdXJuKDAsIDAsIDAsIDAsIGJldFZhbHVlKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbkNoZWNrKCkge1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZyBhY3Rpb25DaGVja1wiKTtcclxuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFRha2VUdXJuKDAsIDEsIDAsIDAsIDApKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uQ2FsbCgpIHtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgYWN0aW9uQ2FsbFwiKTtcclxuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFRha2VUdXJuKDAsIDAsIDEsIDAsIDApKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uRm9sZCgpIHtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgYWN0aW9uRm9sZFwiKTtcclxuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFRha2VUdXJuKDEsIDAsIDAsIDAsIDApKTtcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25CdXlJbigpIHtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIGFjdGlvbkJ1eUluXCIpO1xyXG4gICAgICAgIC8vY2MubG9nKFwiTGllbmcgaW5wdXQgOiBcIiwgdGhpcy5lZHRCdXlJbi5zdHJpbmcpO1xyXG4gICAgICAgIGxldCBldmVudCA9IHRoaXMuZWR0QnV5SW4uc3RyaW5nO1xyXG4gICAgICAgIGlmIChldmVudC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciByYXdOdW1iZXIgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnQubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRbaW5kZXhdID09IFwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbaW5kZXhdID09IFwiOVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmF3TnVtYmVyICs9IGV2ZW50W2luZGV4XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIGFjdGlvbkJ1eUluIHJhd051bWJlciA6IFwiLCByYXdOdW1iZXIpO1xyXG4gICAgICAgICAgICBpZiAocmF3TnVtYmVyICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luIDwgdGhpcy5tYXhDYXNoSW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heENhc2hJbiA9IENvbmZpZ3MuTG9naW4uQ29pbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocmF3TnVtYmVyKSA8IHRoaXMubWluQ2FzaEluICogdGhpcy5jdXJyZW50Um9vbUJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gQnV5IEluIHBo4bqjaSBs4bubbiBoxqFuIFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMubWluQ2FzaEluICogdGhpcy5jdXJyZW50Um9vbUJldCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocmF3TnVtYmVyKSA+IHRoaXMubWF4Q2FzaEluICogdGhpcy5jdXJyZW50Um9vbUJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiU+G7kSB0aeG7gW4gQnV5IEluIHBo4bqjaSBuaOG7jyBoxqFuIFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMubWF4Q2FzaEluICogdGhpcy5jdXJyZW50Um9vbUJldCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQocmF3TnVtYmVyKSA+IENvbmZpZ3MuTG9naW4uQ29pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKFwiQuG6oW4ga2jDtG5nIMSR4bunIHRp4buBbi5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coXCJMaWVuZyBhY3Rpb25CdXlJbiBDYXNoIEluIDogXCIsIHBhcnNlSW50KHJhd051bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQXV0b0J1eUluLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIExpZW5nTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQnV5SW4ocGFyc2VJbnQocmF3TnVtYmVyKSwgMSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBMaWVuZ05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEJ1eUluKHBhcnNlSW50KHJhd051bWJlciksIDApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cEJ1eUluKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlPhu5EgdGnhu4FuIGtow7RuZyBo4bujcCBs4buHLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTdGF0ZVxyXG4gICAgaW5pdENvbmZpZ1BsYXllcigpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25maWdQbGF5ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzZWF0SWQ6IGluZGV4LFxyXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IC0xLFxyXG4gICAgICAgICAgICAgICAgcGxheWVyUG9zOiAtMSxcclxuICAgICAgICAgICAgICAgIGlzVmlld2VyOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmcgY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDZW50ZXJDYXJkcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRzQ2VudGVyLmNoaWxkcmVuW2luZGV4XS5wb3NpdGlvbiA9IGNjLnYyKDAsIDEwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNDZW50ZXIuY2hpbGRyZW5baW5kZXhdLnNjYWxlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jYXJkc0NlbnRlci5jaGlsZHJlbltpbmRleF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQbGF5ZXJzUGxheWluZygpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5yZXNldE1hdGNoSGlzdG9yeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGUgR2FtZSBQbGF5ZXJzXHJcbiAgICBnZXRDYXJkc05hbWUoYm9CYWlJZCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgICBzd2l0Y2ggKGJvQmFpSWQpIHtcclxuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19TQU5IX1ZVQTpcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIlPhuqNuaCBWdWFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX1RIVU5HX1BIQV9TQU5IOlxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiVGjDuW5nIFBow6EgU+G6o25oXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19UVV9RVVk6XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJU4bupIFF1w71cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX0NVX0xVOlxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiQ8O5IEzFqVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRUdfVEhVTkc6XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJUaMO5bmdcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX1NBTkg6XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJT4bqjbmhcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkVHX1hBTV9DTzpcclxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIljDoW0gQ8O0XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19IQUlfRE9JOlxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiSGFpIMSQw7RpXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5FR19ET0k6XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCLEkMO0aVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRUdfTUFVX1RIQVU6XHJcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJN4bqtdSBUaOG6p3VcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU2VhdFBsYXllcihzZWF0SWQsIHBsYXllckluZm8pIHtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nIHNldHVwU2VhdFBsYXllciBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xyXG4gICAgICAgIGNvbmZpZ1BsYXllcltzZWF0SWRdLnBsYXllcklkID0gcGxheWVySW5mby5uaWNrTmFtZTtcclxuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0QXZhdGFyKHBsYXllckluZm8uYXZhdGFyKTtcclxuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0TmFtZShwbGF5ZXJJbmZvLm5pY2tOYW1lKTtcclxuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0R29sZChwbGF5ZXJJbmZvLmN1cnJlbnRNb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZFBsYXllclNlYXRCeVVpZCh1aWQpIHtcclxuICAgICAgICBsZXQgc2VhdCA9IC0xO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkID09PSB1aWQpIHtcclxuICAgICAgICAgICAgICAgIHNlYXQgPSBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VhdDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUGxheWVyUG9zQnlTZWF0KHNlYXQpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlnUGxheWVyW3NlYXRdLnBsYXllclBvcztcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUGxheWVyU2VhdEJ5UG9zKHBvcykge1xyXG4gICAgICAgIGlmIChwb3MgPT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlYXQgPSAtMTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCc2NjY2JywgcG9zLCBjb25maWdQbGF5ZXIpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyA9PT0gcG9zKSB7XHJcbiAgICAgICAgICAgICAgICBzZWF0ID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxheWVySG91c2Uoc2VhdElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBQbGF5ZXJzLmNoaWxkcmVuW3NlYXRJZF0uZ2V0Q29tcG9uZW50KFwiTGllbmcuUGxheWVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bVBsYXllcnMoKSB7XHJcbiAgICAgICAgLy9jYy5sb2coXCJwbGF5ZXJQb3NFbnRyeSBjb25maWdQbGF5ZXIgOiBcIiwgY29uZmlnUGxheWVyKTtcclxuICAgICAgICB2YXIgcGxheWVyUG9zRW50cnkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcInBsYXllclBvc0VudHJ5IHBsYXllcklkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQpO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcInBsYXllclBvc0VudHJ5IGlzVmlld2VyIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpO1xyXG4gICAgICAgICAgICAvL2NjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkICE9PSAtMSAmJiAhY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlcikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyUG9zRW50cnkucHVzaChjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZCk7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcInBsYXllclBvc0VudHJ5IHNlYXRJZCA6IFwiLCBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jYy5sb2coXCJwbGF5ZXJQb3NFbnRyeSA6IFwiLCBwbGF5ZXJQb3NFbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIHBsYXllclBvc0VudHJ5O1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=