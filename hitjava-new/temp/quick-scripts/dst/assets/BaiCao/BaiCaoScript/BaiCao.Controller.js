
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8823cz4QghOwpS4iXO2AMoB', 'BaiCao.Controller');
// BaiCao/BaiCaoScript/BaiCao.Controller.ts

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
var BaiCao_Cmd_1 = require("./BaiCao.Cmd");
var BaiCao_NetworkClient_1 = require("./BaiCao.NetworkClient");
var BaiCao_CardUtil_1 = require("./BaiCao.CardUtil");
var configPlayer = [
// {
//     seatId: 0,
//     playerId: -1,
//     playerPos: -1,
//     isViewer: true
// }
];
// defaultPlayerPos[0 -> 7][0] = player_pos of me
var defaultPlayerPos = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4, 5, 6, 7, 0],
    [2, 3, 4, 5, 6, 7, 0, 1],
    [3, 4, 5, 6, 7, 0, 1, 2],
    [4, 5, 6, 7, 0, 1, 2, 3],
    [5, 6, 7, 0, 1, 2, 3, 4],
    [6, 7, 0, 1, 2, 3, 4, 5],
    [7, 0, 1, 2, 3, 4, 5, 6]
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaiCaoController = /** @class */ (function (_super) {
    __extends(BaiCaoController, _super);
    function BaiCaoController() {
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
        _this.btnBet = null;
        _this.btnOpenCard = null;
        _this.btnLeaveRoom = null;
        _this.hubChips = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.betChooseValue = null;
        _this.betChooseValueTarget = null;
        // Popup Match Result
        _this.popupMatchResult = null;
        _this.contentMatchResult = null;
        _this.prefabItemResult = null;
        _this.scrollMatchResult = null;
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
        _this.intervalWaitting = null;
        _this.intervalEnd = null;
        _this.intervalBetting = null;
        _this.currentCard = null;
        _this.numCardOpened = 0;
        // bet
        _this.arrBetValue = [];
        _this.arrBetPos = [-157.5, -52.5, 52.5, 157.5];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutEndGame = null;
        _this.timeoutChiaBaiDone = null;
        _this.arrPosDanhBien = [];
        return _this;
    }
    BaiCaoController_1 = BaiCaoController;
    // LIFE-CYCLE CALLBACKS:
    BaiCaoController.prototype.onLoad = function () {
        BaiCaoController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
    };
    BaiCaoController.prototype.start = function () {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        BaiCao_NetworkClient_1.default.getInstance().addOnOpen(function () {
            App_1.default.instance.showErrLoading("Đang đang đăng nhập...");
            BaiCao_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        BaiCao_NetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.loadScene("Lobby");
        }, this);
        BaiCao_NetworkClient_1.default.getInstance().connect();
    };
    // Request UI Room
    BaiCaoController.prototype.joinRoom = function (info) {
        //   cc.log("BaiCao joinRoom roomInfo : ", info);
        App_1.default.instance.showLoading(true);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendJoinRoomById(info["id"]));
    };
    BaiCaoController.prototype.refeshListRoom = function () {
        this.contentListRooms.removeAllChildren(true);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendGetListRoom());
    };
    BaiCaoController.prototype.findRoomId = function () {
        //  cc.log("BaiCao findRoomId id : ", this.edtFindRoom.string);
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
            var idFind = parseInt(text);
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("BaiCao.ItemRoom");
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
    BaiCaoController.prototype.hideRoomFull = function () {
        if (this.btnHideRoomFull.isChecked) {
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("BaiCao.ItemRoom");
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
    BaiCaoController.prototype.showUIRooms = function () {
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
    BaiCaoController.prototype.closeUIRoom = function () {
        this.UI_ChooseRoom.active = false;
    };
    BaiCaoController.prototype.createRoom = function () {
        //  cc.log("BaiCao createRoom");
    };
    BaiCaoController.prototype.playingNow = function () {
        //  cc.log("BaiCao playingNow");
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("BaiCao.ItemRoom");
            if (roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin) {
                arrRoomOkMoney.push(index);
            }
        }
        //  cc.log("BaiCao playingNow arrRoomOkMoney : ", arrRoomOkMoney);
        if (arrRoomOkMoney.length > 0) {
            var roomCrowed = arrRoomOkMoney[0];
            //  cc.log("BaiCao playingNow roomCrowed start : ", roomCrowed);
            for (var index = 0; index < arrRoomOkMoney.length; index++) {
                var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("BaiCao.ItemRoom");
                var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("BaiCao.ItemRoom");
                //  cc.log("BaiCao playingNow ------------------------------------------");
                //  cc.log("BaiCao playingNow roomItem : ", roomItem.roomInfo["userCount"]);
                //  cc.log("BaiCao playingNow roomItemCrowed : ", roomItemCrowed.roomInfo["userCount"]);
                if (roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"]) {
                    roomCrowed = arrRoomOkMoney[index];
                    //  cc.log("BaiCao playingNow roomCrowed update : ", roomCrowed);
                }
            }
            //  cc.log("BaiCao playingNow roomCrowed end : ", roomCrowed);
            var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("BaiCao.ItemRoom");
            //  cc.log("BaiCao playingNow roomCrowed end roomInfo : ", roomChoosed.roomInfo);
            this.joinRoom(roomChoosed.roomInfo);
        }
        else {
            App_1.default.instance.alertDialog.showMsg("Không đủ tiền tham gia\nbất kỳ phòng nào !");
        }
    };
    // Chat
    BaiCaoController.prototype.showUIChat = function () {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(0.5, 546, 0));
    };
    BaiCaoController.prototype.closeUIChat = function () {
        this.UI_Chat.runAction(cc.moveTo(0.5, 1000, 0));
    };
    BaiCaoController.prototype.chatEmotion = function (event, id) {
        //  cc.log("BaiCao chatEmotion id : ", id);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    BaiCaoController.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    BaiCaoController.prototype.showPopupGuide = function () {
        this.popupGuide.active = true;
    };
    BaiCaoController.prototype.closePopupGuide = function () {
        this.popupGuide.active = false;
    };
    BaiCaoController.prototype.closePopupNotify = function () {
        this.popupNodity.active = false;
    };
    BaiCaoController.prototype.backToLobby = function () {
        BaiCao_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    // Playing
    BaiCaoController.prototype.showUIPlaying = function () {
        this.UI_Playing.active = true;
    };
    BaiCaoController.prototype.closeUIPlaying = function () {
        this.actionLeaveRoom();
    };
    BaiCaoController.prototype.setupMatch = function (data) {
        this.showUIPlaying();
        this.closePopupMatchResult();
        this.closeUIChat();
        for (var index = 1; index < 8; index++) {
            this.getPlayerHouse(index).showPopupBet(false);
            this.getPlayerHouse(index).closePopupRequestDanhBien();
        }
        //  cc.log("BaiCao setupMatch data : ", data);
        var chuongChair = data["chuongChair"];
        var countDownTime = data["countDownTime"];
        var gameAction = data["gameAction"];
        var gameId = data["gameId"];
        var moneyBet = data["moneyBet"];
        var moneyType = data["moneyType"];
        var myChair = data["myChair"];
        var playerInfos = data["playerInfos"];
        var playerSize = data["playerSize"];
        var playerStatus = data["playerStatus"];
        var roomId = data["roomId"];
        var rule = data["rule"];
        this.labelRoomId.string = "BÀI CÀO - PHÒNG: " + roomId;
        this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "$";
        this.currentRoomBet = moneyBet;
        this.gameState = gameAction;
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        //  cc.log("BaiCao setupMatch configPlayer Me : ", configPlayer[0]);
        //  cc.log("BaiCao setupMatch configPlayer  : ", configPlayer);
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        var arrPlayerStatus = [];
        for (var index = 0; index < playerInfos.length; index++) {
            if (playerInfos[index].nickName !== "") {
                numPlayers += 1;
                arrPlayerPosExist.push(index);
                arrPlayerInfo.push(playerInfos[index]);
                arrPlayerStatus.push(playerStatus[index]);
            }
        }
        //  cc.log("BaiCao numPlayers : ", numPlayers);
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
            if (findPos > -1) {
                // Exist player -> Set Player Info
                if (arrPlayerStatus[findPos] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
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
                this.getPlayerHouse(seatId).showBtnInvite(false);
                configPlayer[index].isViewer = true;
            }
        }
        for (var index = 0; index < 8; index++) {
            this.getPlayerHouse(index).setOwner(false);
        }
        var seatOwner = this.findPlayerSeatByPos(chuongChair);
        if (seatOwner !== -1) {
            this.getPlayerHouse(seatOwner).setOwner(true);
            this.seatOwner = seatOwner;
        }
        //  cc.log("BaiCao setupMatch configPlayer : ", configPlayer);
        var msg = "";
        switch (this.gameState) {
            case 1: //bat dau van moi
                msg = "Bắt đầu ván mới";
                break;
            case 2: //bat dau dat cua
                {
                    msg = "Bắt đầu đặt cửa";
                }
                break;
            case 3: //bat dau ban cua
                {
                }
                break;
            case 4: //nha cai can tien, hoan tien
                msg = "Nhà cái cân tiền, hoàn tiền";
                break;
            case 5: //bat dau hoan tien
                msg = "Bắt đầu hoàn tiền";
                break;
            case 6: //bat dau tra thuong
                msg = "Bắt đầu trả thưởng";
                break;
        }
        if (msg != "") {
        }
    };
    // Time Start
    BaiCaoController.prototype.startWaittingCountDown = function (timeWait) {
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
    BaiCaoController.prototype.setTimeWaittingCountDown = function () {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " Bắt đầu sau : " + this.seconds + "s ";
    };
    // Time End
    BaiCaoController.prototype.startEndCountDown = function (timeWait) {
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
    BaiCaoController.prototype.setTimeEndCountDown = function () {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " Kết thúc sau : " + this.seconds + "s ";
    };
    // Time Bet
    BaiCaoController.prototype.startBettingCountDown = function (turnTime) {
        var _this = this;
        //  cc.log("BaiCao startBettingCountDown turnTime : ", turnTime);
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
    BaiCaoController.prototype.processBetting = function (rate) {
        //  cc.log("BaiCao processBetting rate : ", rate);
        //  cc.log("BaiCao processBetting fillRange : ", this.actionBetting.children[0].getComponent(cc.Sprite).fillRange);
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
    };
    BaiCaoController.prototype.getCardsScore = function (arrCards) {
        var score = 0;
        //  cc.log("BaiCao getCardsScore -------------------------------------");
        //  cc.log("BaiCao getCardsScore arrCards : ", arrCards);
        for (var a = 0; a < 3; a++) {
            score += BaiCao_CardUtil_1.default.getDiemById(arrCards[a]);
            //  cc.log("BaiCao getCardsScore ------------------------------------- : ", a);
            //  cc.log("BaiCao getCardsScore getSoById : ", CardUtils.getSoById(arrCards[a]));
            //  cc.log("BaiCao getCardsScore getDiemById : ", CardUtils.getDiemById(arrCards[a]));
        }
        score = score % 10;
        return score;
    };
    // Open Me Card
    BaiCaoController.prototype.openMeCard = function (event, itemId) {
        var _this = this;
        // Open Me cards
        var cardPos = parseInt(itemId);
        //  cc.log("BaiCao openMeCard cardPos : ", cardPos);
        //  cc.log("BaiCao openMeCard currentCard : ", this.currentCard);
        this.getPlayerHouse(0).prepareCardReal(cardPos);
        var spriteCardId = BaiCao_CardUtil_1.default.getNormalId(this.currentCard[cardPos]);
        this.getPlayerHouse(0).transformToCardReal(cardPos, this.spriteCards[spriteCardId]);
        this.numCardOpened += 1;
        if (this.numCardOpened == 3) {
            this.btnOpenCard.active = true;
            this.btnBet.active = false;
            this.getPlayerHouse(0).showCardName(this.getCardsScore(this.currentCard) + " Điểm");
            setTimeout(function () {
                _this.getPlayerHouse(0).resetCardReady();
            }, 200);
        }
    };
    BaiCaoController.prototype.moveChipsToHubNow = function (index) {
        this.hubChips.children[2 * index].position = cc.v2(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[(2 * index) + 1].position = cc.v2(25, 80);
        this.hubChips.children[(2 * index) + 1].scale = 0;
    };
    BaiCaoController.prototype.fxMoveChips = function (chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(0.8, toX, toY), cc.scaleTo(0.8, 0, 0))));
    };
    BaiCaoController.prototype.resetHubChips = function () {
        var arrFromX = [70, 280, 280, 260, 100, -260, -375, -360];
        var arrFromY = [-195, -150, -55, 70, 90, 85, -30, -155];
        for (var index = 0; index < 8; index++) {
            this.hubChips.children[2 * index].position = cc.v2(arrFromX[index], arrFromY[index]);
            this.hubChips.children[(2 * index) + 1].position = cc.v2(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) {
            this.hubChips.children[index].active = false;
        }
    };
    BaiCaoController.prototype.setupBet = function () {
        // arrBetValue
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    // match result
    BaiCaoController.prototype.showPopupMatchResult = function (data) {
        this.popupMatchResult.active = true;
        this.contentMatchResult.removeAllChildren(true);
        for (var index = 0; index < data.length; index++) {
            var item = cc.instantiate(this.prefabItemResult);
            item.getComponent("BaiCao.ItemResult").initItem(data[index]);
            this.contentMatchResult.addChild(item);
        }
        this.scrollMatchResult.scrollToTop(0.2);
    };
    BaiCaoController.prototype.closePopupMatchResult = function () {
        this.popupMatchResult.active = false;
    };
    // addListener
    BaiCaoController.prototype.setupListener = function () {
        var _this = this;
        BaiCao_NetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case BaiCao_Cmd_1.default.Code.LOGIN:
                    App_1.default.instance.showLoading(false);
                    _this.refeshListRoom();
                    BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdReconnectRoom());
                    break;
                case BaiCao_Cmd_1.default.Code.TOPSERVER:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao TOPSERVER");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CMD_PINGPONG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao CMD_PINGPONG");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CMD_JOIN_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao CMD_JOIN_ROOM");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao CMD_RECONNECT_ROOM");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao CMD_RECONNECT_ROOM");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.MONEY_BET_CONFIG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao MONEY_BET_CONFIG");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.JOIN_ROOM_FAIL:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedJoinRoomFail(data);
                        //  cc.log("BaiCao JOIN_ROOM_FAIL res : ", JSON.stringify(res));
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
                case BaiCao_Cmd_1.default.Code.GET_LIST_ROOM:
                    {
                        var res = new BaiCao_Cmd_1.default.ReceivedGetListRoom(data);
                        //  cc.log(res);
                        for (var i = 0; i < res.list.length; i++) {
                            var itemData = res.list[i];
                            var item = cc.instantiate(_this.prefabItemRoom);
                            item.getComponent("BaiCao.ItemRoom").initItem(itemData);
                            _this.contentListRooms.addChild(item);
                        }
                        _this.scrollListRoom.scrollToTop(0.2);
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao JOIN_GAME_ROOM_BY_ID");
                    }
                    break;
                // ------------------------ Game ---------------------------     
                case BaiCao_Cmd_1.default.Code.MO_BAI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedMoBai(data);
                        //  cc.log("BaiCao ReceivedMoBai res : ", JSON.stringify(res));
                        // {
                        // "chairMoBai": 0,
                        // "cardSize": 3,
                        // "cards": [
                        //   19,
                        //   17,
                        //   32
                        // ]
                        // }
                        var chairMoBai = res["chairMoBai"];
                        var cards = res["cards"];
                        var seatId_1 = _this.findPlayerSeatByPos(chairMoBai);
                        if (seatId_1 != -1 && seatId_1 != 0) {
                            _this.getPlayerHouse(seatId_1).prepareToTransform();
                            for (var a = 0; a < 3; a++) {
                                var spriteCardId = BaiCao_CardUtil_1.default.getNormalId(cards[a]);
                                _this.getPlayerHouse(seatId_1).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                            }
                            _this.getPlayerHouse(seatId_1).showCardName(_this.getCardsScore(cards) + " Điểm");
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao BAT_DAU");
                        var res = new BaiCao_Cmd_1.default.ReceivedFirstTurnDecision(data);
                        //  cc.log("BaiCao ReceivedFirstTurnDecision res : ", JSON.stringify(res));
                        _this.resetHubChips();
                        _this.closePopupMatchResult();
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.KET_THUC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedEndGame(data);
                        //  cc.log("BaiCao ReceivedEndGame res : ", JSON.stringify(res));
                        // {
                        //     "statusList": [3, 3, 0, 0, 0, 0, 0, 0],
                        //     "cardList": [
                        //         [6, 23, 21],
                        //         [11, 25, 28],
                        //         [],
                        //         [],
                        //         [],
                        //         [],
                        //         [],
                        //         []
                        //     ],
                        //     "tienThangChuong": -20000,
                        //     "tienThangGa": 0,
                        //     "keCuaMoneyList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "danhBienMoneyList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "tongTienCuoiVan": -20000,
                        //     "tongTienCuocList": [-20000, 20000, 0, 0, 0, 0, 0, 0],
                        //     "tongDanhBienList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "tongKeCuaList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "tongCuocGaList": [0, 0, 0, 0, 0, 0, 0, 0],
                        //     "tongCuoiVanList": [-20000, 19600, 0, 0, 0, 0, 0, 0],
                        //     "currentMoneyList": [4643704, 411662, 0, 0, 0, 0, 0, 0],
                        //     "timeEndGame": 12
                        // }
                        _this.unschedule(_this.intervalEnd);
                        _this.notifyTimeEnd.active = false;
                        // // Mo het cac la bai neu no chua dc mo
                        // if (!this.isBtnOpenCardShowed && !configPlayer[0].isViewer) {
                        //     let cardReady = this.getPlayerHouse(0).node.children[2].children[0];
                        //     for (let index = 0; index < 3; index++) {
                        //         if (cardReady.children[index].scale == 1) {
                        //             let spriteCardId = CardUtils.getNormalId(this.currentCard[index]);
                        //             this.getPlayerHouse(0).transformToCardReal(index, this.spriteCards[spriteCardId]);
                        //         }
                        //     }
                        // }
                        // 
                        var cardList = res["cardList"];
                        var tienThangChuong = res["tienThangChuong"];
                        var tienThangGa = res["tienThangGa"];
                        var keCuaMoneyList = res["keCuaMoneyList"];
                        var danhBienMoneyList = res["danhBienMoneyList"];
                        var tongTienCuoiVan = res["tongTienCuoiVan"];
                        var tongTienCuocList = res["tongTienCuocList"];
                        var tongDanhBienList = res["tongDanhBienList"];
                        var tongKeCuaList = res["tongKeCuaList"];
                        var tongCuocGaList = res["tongCuocGaList"];
                        var tongCuoiVanList = res["tongCuoiVanList"];
                        var currentMoneyList = res["currentMoneyList"];
                        var timeEndGame = res["timeEndGame"];
                        var posPlaying = [];
                        for (var index = 0; index < 8; index++) {
                            if (cardList[index].length > 0) {
                                posPlaying.push(index);
                            }
                        }
                        //  cc.log("BaiCao ReceivedEndGame posPlaying : ", posPlaying);
                        var result_1 = [];
                        for (var index = 0; index < 8; index++) {
                            var findId = posPlaying.indexOf(configPlayer[index].playerPos);
                            if (findId !== -1) {
                                //  cc.log("--------------------------------");
                                //  cc.log("playerId : ", configPlayer[index].playerId);
                                //  cc.log("bet : ", tongTienCuocList[posPlaying[findId]]);
                                //  cc.log("bien : ", tongDanhBienList[posPlaying[findId]]);
                                //  cc.log("ke : ", tongKeCuaList[posPlaying[findId]]);
                                //  cc.log("ga : ", tongCuocGaList[posPlaying[findId]]);
                                //  cc.log("total : ", tongCuoiVanList[posPlaying[findId]]);
                                //  cc.log("money : ", currentMoneyList[posPlaying[findId]]);
                                var cards = cardList[posPlaying[findId]];
                                var cardReady = _this.getPlayerHouse(index).node.children[2].children[0];
                                for (var a = 0; a < 3; a++) {
                                    if (cardReady.children[a].scale == 1) {
                                        var spriteCardId = BaiCao_CardUtil_1.default.getNormalId(cards[a]);
                                        _this.getPlayerHouse(index).transformToCardReal(a, _this.spriteCards[spriteCardId]);
                                    }
                                }
                                _this.getPlayerHouse(index).showCardName(_this.getCardsScore(cards) + " Điểm");
                                result_1.push({
                                    userName: configPlayer[index].playerId,
                                    bet: tongTienCuocList[posPlaying[findId]],
                                    bien: tongDanhBienList[posPlaying[findId]],
                                    ke: tongKeCuaList[posPlaying[findId]],
                                    ga: tongCuocGaList[posPlaying[findId]],
                                    total: tongCuoiVanList[posPlaying[findId]]
                                });
                                var info = {
                                    moneyChange: tongCuoiVanList[posPlaying[findId]],
                                    money: currentMoneyList[posPlaying[findId]],
                                    ga: tongCuocGaList[posPlaying[findId]],
                                };
                                if (index == 0) {
                                    Configs_1.default.Login.Coin = info.money;
                                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                                }
                                if (info.moneyChange >= 0) {
                                    // Win
                                    _this.getPlayerHouse(index).fxWin(info);
                                }
                                else {
                                    // Lose
                                    _this.getPlayerHouse(index).fxLose(info);
                                }
                            }
                        }
                        if (result_1.length > 0) {
                            setTimeout(function () {
                                _this.showPopupMatchResult(result_1);
                            }, 4000);
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.YEU_CAU_DANH_BIEN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedYeuCauDanhBien(data);
                        //  cc.log("BaiCao ReceivedYeuCauDanhBien res : ", JSON.stringify(res));
                        var danhBienChair = res["danhBienChair"];
                        var level = res["level"];
                        var isExist = _this.arrPosDanhBien.indexOf(danhBienChair);
                        if (isExist > -1) {
                            // Da chap nhan danh bien cua A thi k dc gui yeu cau danh bien lai
                            // Vi se bi hien lai popup request chu' A lai k thay : hoi loi~
                        }
                        else {
                            var value = _this.currentRoomBet * level;
                            var seatId_2 = _this.findPlayerSeatByPos(danhBienChair);
                            if (seatId_2 != -1) {
                                _this.getPlayerHouse(seatId_2).showPopupRequestDanhBien(value);
                            }
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CHIA_BAI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedChiaBai(data);
                        //  cc.log("BaiCao ReceivedChiaBai res : ", JSON.stringify(res));
                        // {
                        //     "cardSize": 3,
                        //     "cards": [
                        //       17,
                        //       28,
                        //       33
                        //     ],
                        //     "gameId": 1567389,
                        //     "timeChiaBai": 20
                        //   }
                        _this.btnBet.active = false;
                        _this.btnOpenCard.active = false;
                        for (var index = 1; index < 8; index++) {
                            _this.getPlayerHouse(index).showPopupBet(false);
                            _this.getPlayerHouse(index).closePopupRequestDanhBien();
                        }
                        _this.matchPot.getComponent(cc.Button).interactable = false;
                        _this.matchPot.children[0].color = cc.Color.GRAY;
                        var cards = res["cards"];
                        var timeChiaBai_1 = res["timeChiaBai"];
                        clearTimeout(_this.timeoutEndGame);
                        _this.timeoutEndGame = setTimeout(function () {
                            _this.startEndCountDown(timeChiaBai_1);
                        }, 2000);
                        _this.currentCard = cards;
                        //  cc.log("BaiCao ReceivedChiaBai currentCard : ", this.currentCard);
                        var arrSeatExist = _this.getNumPlayers();
                        var numPlayer_1 = arrSeatExist.length;
                        // Open | Hide cards not use
                        for (var index = 0; index < 8 * 3; index++) { // 8 players * 3 cards
                            _this.cardsDeal.children[index].active = index >= numPlayer_1 * 3 ? false : true;
                            _this.cardsDeal.children[index].position = cc.v2(0, 0);
                        }
                        var timeShip = 0.1; // 0.15
                        // Move Cards used to each player joined
                        for (var a = 0; a < 3; a++) { // players x 3 cards
                            for (var b = 0; b < numPlayer_1; b++) {
                                var seatId_3 = arrSeatExist[b];
                                if (seatId_3 !== -1) {
                                    var card4Me = _this.cardsDeal.children[(a * numPlayer_1) + b];
                                    var rawPlayerPos = _this.groupPlayers.children[seatId_3].position;
                                    //  cc.log("BaiCao CHIA_BAI delayTime : ", ((a * numPlayer) + b) * timeShip);
                                    card4Me.runAction(cc.sequence(cc.delayTime(((a * numPlayer_1) + b) * timeShip), cc.moveTo(0.2, rawPlayerPos)));
                                }
                            }
                        }
                        var delayOver2Under = 0.2;
                        var maxDelay = ((2 * numPlayer_1) + (numPlayer_1 - 1)) * timeShip; // ((a * numPlayer) + b) * timeShip
                        var timeUnderLayer = (maxDelay + 0.2 + delayOver2Under) * 1000;
                        //  cc.log("CHIA_BAI timeUnderLayer : ", timeUnderLayer);
                        clearTimeout(_this.timeoutChiaBaiDone);
                        _this.timeoutChiaBaiDone = setTimeout(function () {
                            for (var index = 0; index < 8 * 3; index++) { // 8 players * 3 cards
                                //  cc.log("CHIA_BAI cardsDeal index : ", index);
                                _this.cardsDeal.children[index].active = false;
                            }
                            for (var index = 0; index < numPlayer_1; index++) {
                                var seatId_4 = arrSeatExist[index];
                                if (seatId_4 !== -1) {
                                    // Drop layer
                                    if (seatId_4 == 0) {
                                        _this.getPlayerHouse(seatId_4).resetCardReady();
                                    }
                                    _this.getPlayerHouse(seatId_4).showCardReady(true);
                                    _this.getPlayerHouse(seatId_4).showCardReal(false);
                                }
                            }
                        }, timeUnderLayer);
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.KE_CUA:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedKeCua(data);
                        //  cc.log("BaiCao ReceivedKeCua res : ", JSON.stringify(res));
                        // {
                        //     "chairKeCuaFrom": 5,
                        //     "chairKeCuaTo": 0,
                        //     "level": 2
                        //   }
                        var chairKeCuaFrom = res["chairKeCuaFrom"];
                        var chairKeCuaTo = res["chairKeCuaTo"];
                        var level = res["level"];
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.TU_DONG_BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedAutoStart(data);
                        //  cc.log("BaiCao ReceiveAutoStart res : ", JSON.stringify(res));
                        // {
                        //     "isAutoStart": true,
                        //     "timeAutoStart": 5
                        // }
                        if (res.isAutoStart) {
                            _this.resetHubChips();
                            _this.startWaittingCountDown(res.timeAutoStart);
                            _this.btnBet.active = false;
                            _this.btnOpenCard.active = false;
                            _this.matchPot.active = false;
                            _this.matchPot.getComponent(cc.Button).interactable = true;
                            _this.matchPot.children[0].color = cc.Color.WHITE;
                            _this.resetPlayersPlaying();
                            _this.arrPosDanhBien = [];
                        }
                        _this.closePopupMatchResult();
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.DONG_Y_DANH_BIEN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedChapNhanDanhBien(data);
                        //  cc.log("BaiCao ReceivedChapNhanDanhBien res : ", JSON.stringify(res));
                        var danhBienChair = res["danhBienChair"];
                        var level = res["level"];
                        _this.arrPosDanhBien.push(danhBienChair);
                        var seatId_5 = _this.findPlayerSeatByPos(danhBienChair);
                        if (seatId_5 != -1) {
                            //  cc.log("BaiCao ReceivedChapNhanDanhBien Me seatId : 0");
                            //  cc.log("BaiCao ReceivedChapNhanDanhBien Bien seatId : ", seatId);
                            _this.getPlayerHouse(seatId_5).disableDanhBien(level);
                            _this.getPlayerHouse(seatId_5).playFxDanhBien();
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedDatCuoc(data);
                        //  cc.log("BaiCao ReceivedDatCuoc res : ", JSON.stringify(res));
                        // {
                        //     "chairDatCuoc": 1,
                        //     "level": 2
                        //   }
                        var chairDatCuoc = res["chairDatCuoc"];
                        var level = res["level"];
                        var seatId_6 = _this.findPlayerSeatByPos(chairDatCuoc);
                        if (seatId_6 != -1) {
                            _this.getPlayerHouse(seatId_6).setBet(_this.arrBetValue[level - 1]);
                            _this.getPlayerHouse(seatId_6).addChips();
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedGameInfo(data);
                        //  cc.log("BaiCao ReceivedGameInfo res : ", JSON.stringify(res));
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
                        _this.closePopupMatchResult();
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
                        _this.labelRoomId.string = "BÀI CÀO - PHÒNG: " + roomId;
                        _this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "$";
                        _this.currentRoomBet = moneyBet;
                        _this.gameState = gameAction;
                        _this.currentCard = cards;
                        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
                        configPlayer[0].playerPos = myChair;
                        //  cc.log("BaiCao setupMatch configPlayer Me : ", configPlayer[0]);
                        //  cc.log("BaiCao setupMatch configPlayer  : ", configPlayer);
                        var numPlayers = 0;
                        var arrPlayerPosExist = [];
                        for (var index = 0; index < hasInfo.length; index++) {
                            if (hasInfo[index]) {
                                numPlayers += 1;
                                arrPlayerPosExist.push(index);
                            }
                        }
                        //  cc.log("BaiCao numPlayers : ", numPlayers);
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
                                    money: ""
                                });
                            }
                            else {
                                // Not Exist player  -> Active Btn Add player
                                _this.getPlayerHouse(seatId).showBtnInvite(false);
                                configPlayer[index].isViewer = true;
                            }
                        }
                        for (var index = 0; index < 8; index++) {
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
                case BaiCao_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                        //  cc.log("BaiCao ReceivedNotifyRegOutRoom res : ", JSON.stringify(res));
                        // {
                        //     "outChair": 1,
                        //     "isOutRoom": true
                        //   }
                        var outChair = res["outChair"];
                        var isOutRoom = res["isOutRoom"];
                        var seatId_7 = _this.findPlayerSeatByPos(outChair);
                        if (seatId_7 !== -1) {
                            if (isOutRoom) {
                                _this.getPlayerHouse(seatId_7).showNotify("Sắp rời bàn !");
                            }
                            else {
                                _this.getPlayerHouse(seatId_7).showNotify("Khô Máu !");
                            }
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.VAO_GA:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedVaoGa(data);
                        //  cc.log("BaiCao ReceivedVaoGa res : ", JSON.stringify(res));
                        // {
                        //     "chair": 3,
                        //     "chicKenBet": 300
                        //   }
                        var chair = res["chair"];
                        var chicKenBet = res["chicKenBet"];
                        var seatId_8 = _this.findPlayerSeatByPos(chair);
                        if (seatId_8 != -1) {
                            _this.hubChips.children[2 * seatId_8].active = true;
                            _this.hubChips.children[(2 * seatId_8) + 1].active = true;
                            _this.fxMoveChips(_this.hubChips.children[2 * seatId_8], 0.1, _this.matchPot.x, _this.matchPot.y);
                            _this.fxMoveChips(_this.hubChips.children[(2 * seatId_8) + 1], 0.2, _this.matchPot.x, _this.matchPot.y);
                            // Can cong luy ke len
                            _this.currentMatchPotValue += chicKenBet;
                            _this.labelMatchPot.string = Utils_1.default.formatNumber(_this.currentMatchPotValue);
                            _this.getPlayerHouse(seatId_8).playFxVaoGa();
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.DOI_CHUONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedDoiChuong(data);
                        //  cc.log("BaiCao ReceivedDoiChuong res : ", JSON.stringify(res));
                        // {
                        //     "chuongChair": 2
                        //   }
                        for (var index = 0; index < 8; index++) {
                            _this.getPlayerHouse(index).setOwner(false);
                        }
                        var seatId_9 = _this.findPlayerSeatByPos(res["chuongChair"]);
                        if (seatId_9 != -1) {
                            _this.getPlayerHouse(seatId_9).setOwner(true);
                            _this.seatOwner = seatId_9;
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.MOI_DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedMoiDatCuoc(data);
                        //  cc.log("BaiCao ReceivedMoiDatCuoc res : ", JSON.stringify(res));
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
                            var raw = _this.currentRoomBet * (4 - index);
                            if (raw == 1500) {
                                _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = "1.5K";
                            }
                            else {
                                _this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin(raw);
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
                            _this.matchPot.getComponent(cc.Button).interactable = false;
                            _this.matchPot.children[0].color = cc.Color.GRAY;
                        }
                        else {
                            _this.btnBet.active = true;
                            _this.btnOpenCard.active = false;
                            _this.matchPot.getComponent(cc.Button).interactable = true;
                            _this.matchPot.children[0].color = cc.Color.WHITE;
                            _this.setupBet();
                            //  cc.log("BaiCao MOI_DAT_CUOC this.arrBetValue : ", this.arrBetValue);
                        }
                        _this.numCardOpened = 0;
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CHEAT_CARDS:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao CHEAT_CARDS");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao DANG_KY_CHOI_TIEP");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao UPDATE_OWNER_ROOM");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedJoinRoomSucceed(data);
                        _this.closeUIRoom();
                        _this.setupMatch(res);
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.LEAVE_GAME:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedUserLeaveRoom(data);
                        //  cc.log("BaiCao ReceivedUserLeaveRoom res : ", JSON.stringify(res));
                        // {
                        //     "chair": 1,
                        //     "nickName": "chaoae99"
                        //   }
                        var chair = res["chair"];
                        var seatId_10 = _this.findPlayerSeatByPos(chair);
                        if (seatId_10 !== -1) {
                            // Need clear configPlayer
                            for (var index = 0; index < configPlayer.length; index++) {
                                if (configPlayer[index].seatId == seatId_10) {
                                    configPlayer[index].playerId = -1;
                                    configPlayer[index].isViewer = true;
                                }
                            }
                            // Change UI
                            _this.getPlayerHouse(seatId_10).resetPlayerInfo();
                            _this.getPlayerHouse(seatId_10).showBtnInvite(false);
                            var arrSeatExistLast = _this.getNumPlayers();
                            if (arrSeatExistLast.length == 1) {
                                _this.resetPlayersPlaying();
                                _this.matchPot.active = false;
                            }
                            if (seatId_10 == 0) {
                                // Me leave
                                // Change UI
                                _this.UI_Playing.active = false;
                                _this.UI_ChooseRoom.active = true;
                                _this.refeshListRoom();
                            }
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedKickOff(data);
                        //  cc.log("BaiCao ReceivedKickOff res : ", JSON.stringify(res));
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.NEW_USER_JOIN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedUserJoinRoom(data);
                        //  cc.log("BaiCao ReceivedUserJoinRoom res : ", JSON.stringify(res));
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
                                var seatId = configPlayer[index].seatId;
                                _this.getPlayerHouse(seatId).resetPlayerInfo();
                                var customPlayerInfo = {
                                    "avatar": info["avatar"],
                                    "nickName": info["nickName"],
                                    "money": info["money"],
                                };
                                _this.setupSeatPlayer(seatId, customPlayerInfo);
                                if (uStatus == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    _this.getPlayerHouse(seatId).setIsViewer(true);
                                    // this.getPlayerHouse(seatId).playFxViewer();
                                    configPlayer[seatId].isViewer = true;
                                }
                                else {
                                    configPlayer[seatId].isViewer = false;
                                    _this.getPlayerHouse(seatId).setIsViewer(false);
                                }
                            }
                        }
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("BaiCao NOTIFY_USER_GET_JACKPOT");
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.UPDATE_MATCH:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedUpdateMatch(data);
                        //  cc.log("BaiCao ReceivedUpdateMatch res : ", JSON.stringify(res));
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
                        //  cc.log("BaiCao setupMatch configPlayer : ", configPlayer);
                        // theo Pos khong phai SeatId
                        for (var index = 0; index < hasInfo.length; index++) {
                            var pos = configPlayer[index]["playerPos"];
                            if (hasInfo[pos]) {
                                // setGold se inactive isViewer nen dat no len dau de ben duoi config lai
                                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                                if (infos[pos]["status"] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == BaiCao_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
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
                        //  cc.log("BaiCao setupMatch configPlayer : ", configPlayer);
                    }
                    break;
                case BaiCao_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaiCao_Cmd_1.default.ReceivedChatRoom(data);
                        //  cc.log("BaiCao CHAT_ROOM res : ", JSON.stringify(res));
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
    BaiCaoController.prototype.actionLeaveRoom = function () {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendRequestLeaveGame());
    };
    BaiCaoController.prototype.actionOpenCard = function () {
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendMoBai());
        this.btnOpenCard.active = false;
    };
    BaiCaoController.prototype.actionSendVaoGa = function () {
        //  cc.log("BaiCao actionSendVaoGa");
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.SendVaoGa());
        this.matchPot.children[0].color = cc.Color.WHITE;
        this.matchPot.getComponent(cc.Button).interactable = false;
    };
    BaiCaoController.prototype.actionAcceptDanhBien = function (event, seatId) {
        //  cc.log("BaiCao actionAcceptDanhBien seatId : ", seatId);
        //  cc.log("BaiCao actionAcceptDanhBien playerPos : ", configPlayer[seatId].playerPos);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendAcceptDanhBien(configPlayer[seatId].playerPos));
        this.getPlayerHouse(seatId).closePopupRequestDanhBien(false);
    };
    BaiCaoController.prototype.increaseBetValue = function () {
        if (this.currentBetSelectedIndex == (this.arrBetValue.length - 1)) {
        }
        else {
            this.currentBetSelectedIndex += 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    BaiCaoController.prototype.decreaseBetValue = function () {
        if (this.currentBetSelectedIndex == 0) {
        }
        else {
            this.currentBetSelectedIndex -= 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    BaiCaoController.prototype.actionBet = function () {
        //  cc.log("BaiCao actionBet betted : ", this.arrBetValue[this.currentBetSelectedIndex]);
        BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendDatCuoc(this.currentBetSelectedIndex + 1));
        this.btnBet.active = false;
        // set bet default
        for (var index = 0; index < configPlayer.length; index++) {
            if (index !== this.seatOwner
                && !configPlayer[index].isViewer
                && configPlayer[index].playerId !== -1) {
                //  cc.log("BaiCao ReceivedMoiDatCuoc index : ", index);
                this.getPlayerHouse(index).setBet(this.currentRoomBet);
                this.getPlayerHouse(index).addChips();
                if (index != 0) { // k ke cua, danh bien duoc len chinh minh
                    this.getPlayerHouse(index).showPopupBet(true);
                    this.getPlayerHouse(index).setupBetValue(this.currentRoomBet);
                }
            }
        }
    };
    BaiCaoController.prototype.actionDanhBien = function (event, id) {
        //  cc.log("BaiCao actionDanhBien id : ", id);
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2));
        //  cc.log("BaiCao actionDanhBien seatId : ", seatId);
        //  cc.log("BaiCao actionDanhBien level : ", level);
        var pos = this.findPlayerPosBySeat(seatId);
        //  cc.log("BaiCao actionDanhBien pos : ", pos);
        if (pos != -1) {
            //  cc.log("BaiCao actionDanhBien ------------");
            //  cc.log("BaiCao actionDanhBien seatId : ", seatId);
            //  cc.log("BaiCao actionDanhBien pos : ", pos);
            //  cc.log("BaiCao actionDanhBien seatId : 0");
            //  cc.log("BaiCao actionDanhBien me : ", configPlayer[0].playerPos);
            //  cc.log("BaiCao actionDanhBien ------------");
            this.getPlayerHouse(seatId).disableDanhBien(level);
            this.getPlayerHouse(seatId).showNotify("Đánh biên");
            BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendDanhBien(pos, level));
        }
    };
    BaiCaoController.prototype.actionKeCua = function (event, id) {
        //  cc.log("BaiCao actionKeCua id : ", id);
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2)) - 2;
        //  cc.log("BaiCao actionKeCua seatId : ", seatId);
        //  cc.log("BaiCao actionKeCua level : ", level);
        var pos = this.findPlayerPosBySeat(seatId);
        //  cc.log("BaiCao actionKeCua pos : ", pos);
        if (pos != -1) {
            this.getPlayerHouse(seatId).disableKeCua(level);
            BaiCao_NetworkClient_1.default.getInstance().send(new BaiCao_Cmd_1.default.CmdSendKeCua(pos, level));
        }
    };
    // State
    BaiCaoController.prototype.initConfigPlayer = function () {
        configPlayer = [];
        for (var index = 0; index < 8; index++) {
            configPlayer.push({
                seatId: index,
                playerId: -1,
                playerPos: -1,
                isViewer: true
            });
        }
        //  cc.log("BaiCao configPlayer : ", configPlayer);
    };
    BaiCaoController.prototype.resetPlayersPlaying = function () {
        for (var index = 0; index < 8; index++) {
            this.getPlayerHouse(index).resetMatchHistory();
        }
    };
    // handle Game Players
    BaiCaoController.prototype.setupSeatPlayer = function (seatId, playerInfo) {
        //  cc.log("BaiCao setupSeatPlayer playerInfo : ", playerInfo);
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.money);
    };
    BaiCaoController.prototype.findPlayerSeatByUid = function (uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerId === uid) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    BaiCaoController.prototype.findPlayerPosBySeat = function (seat) {
        return configPlayer[seat].playerPos;
    };
    BaiCaoController.prototype.findPlayerSeatByPos = function (pos) {
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
    BaiCaoController.prototype.getPlayerHouse = function (seatId) {
        return this.groupPlayers.children[seatId].getComponent("BaiCao.Player");
    };
    BaiCaoController.prototype.getNumPlayers = function () {
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
    BaiCaoController.prototype.update = function (dt) {
    };
    var BaiCaoController_1;
    BaiCaoController.instance = null;
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "UI_ChooseRoom", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoController.prototype, "labelNickName", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoController.prototype, "labelCoin", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "contentListRooms", void 0);
    __decorate([
        property(cc.Prefab)
    ], BaiCaoController.prototype, "prefabItemRoom", void 0);
    __decorate([
        property(cc.ScrollView)
    ], BaiCaoController.prototype, "scrollListRoom", void 0);
    __decorate([
        property(cc.EditBox)
    ], BaiCaoController.prototype, "edtFindRoom", void 0);
    __decorate([
        property(cc.Toggle)
    ], BaiCaoController.prototype, "btnHideRoomFull", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "UI_Playing", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "meCards", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "groupPlayers", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], BaiCaoController.prototype, "spriteCards", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], BaiCaoController.prototype, "spriteCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "matchPot", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoController.prototype, "labelMatchPot", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "cardsDeal", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "btnBet", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "btnOpenCard", void 0);
    __decorate([
        property(cc.Button)
    ], BaiCaoController.prototype, "btnLeaveRoom", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "hubChips", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoController.prototype, "labelRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoController.prototype, "labelRoomBet", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "actionBetting", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "betChooseValue", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "betChooseValueTarget", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "popupMatchResult", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "contentMatchResult", void 0);
    __decorate([
        property(cc.Prefab)
    ], BaiCaoController.prototype, "prefabItemResult", void 0);
    __decorate([
        property(cc.ScrollView)
    ], BaiCaoController.prototype, "scrollMatchResult", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "notifyTimeStart", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "notifyTimeEnd", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "notifyTimeBet", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.EditBox)
    ], BaiCaoController.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "popupNodity", void 0);
    __decorate([
        property(cc.Label)
    ], BaiCaoController.prototype, "labelNotifyContent", void 0);
    __decorate([
        property(cc.Node)
    ], BaiCaoController.prototype, "popupGuide", void 0);
    BaiCaoController = BaiCaoController_1 = __decorate([
        ccclass
    ], BaiCaoController);
    return BaiCaoController;
}(cc.Component));
exports.default = BaiCaoController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFFaEUsaUVBQTREO0FBQzVELDZGQUFnRjtBQUNoRixtRkFBNkU7QUFDN0UscURBQWdEO0FBQ2hELDJDQUErQjtBQUUvQiwrREFBeUQ7QUFDekQscURBQTBDO0FBRzFDLElBQUksWUFBWSxHQUFHO0FBQ2YsSUFBSTtBQUNKLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLHFCQUFxQjtBQUNyQixJQUFJO0NBQ1AsQ0FBQztBQUVGLGlEQUFpRDtBQUNqRCxJQUFJLGdCQUFnQixHQUFHO0lBQ25CLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FB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RTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrRUFDbUI7SUFJckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4REFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dFQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNlO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7K0RBQ2dCO0lBSXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNZO0lBSTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswREFDVztJQUloQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0VBQ2lCO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1M7SUEzRlYsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0Erc0RwQztJQUFELHVCQUFDO0NBL3NERCxBQStzREMsQ0Evc0Q2QyxFQUFFLENBQUMsU0FBUyxHQStzRHpEO2tCQS9zRG9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgY21kTmV0d29yayBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuQ21kXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9CYWlDYW8uQ21kXCI7XG5cbmltcG9ydCBCYWlDYW9OZXR3b3JrQ2xpZW50IGZyb20gXCIuL0JhaUNhby5OZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgQ2FyZFV0aWxzIGZyb20gXCIuL0JhaUNhby5DYXJkVXRpbFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQmFpQ2FvLkNhcmRcIjtcblxudmFyIGNvbmZpZ1BsYXllciA9IFtcbiAgICAvLyB7XG4gICAgLy8gICAgIHNlYXRJZDogMCxcbiAgICAvLyAgICAgcGxheWVySWQ6IC0xLFxuICAgIC8vICAgICBwbGF5ZXJQb3M6IC0xLFxuICAgIC8vICAgICBpc1ZpZXdlcjogdHJ1ZVxuICAgIC8vIH1cbl07XG5cbi8vIGRlZmF1bHRQbGF5ZXJQb3NbMCAtPiA3XVswXSA9IHBsYXllcl9wb3Mgb2YgbWVcbmxldCBkZWZhdWx0UGxheWVyUG9zID0gW1xuICAgIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3XSxcbiAgICBbMSwgMiwgMywgNCwgNSwgNiwgNywgMF0sXG4gICAgWzIsIDMsIDQsIDUsIDYsIDcsIDAsIDFdLFxuICAgIFszLCA0LCA1LCA2LCA3LCAwLCAxLCAyXSxcbiAgICBbNCwgNSwgNiwgNywgMCwgMSwgMiwgM10sXG4gICAgWzUsIDYsIDcsIDAsIDEsIDIsIDMsIDRdLFxuICAgIFs2LCA3LCAwLCAxLCAyLCAzLCA0LCA1XSxcbiAgICBbNywgMCwgMSwgMiwgMywgNCwgNSwgNl1cbl1cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhaUNhb0NvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogQmFpQ2FvQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICAvLyBVSSBSb29tc1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX0Nob29zZVJvb206IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE5pY2tOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRMaXN0Um9vbXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiSXRlbVJvb206IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsTGlzdFJvb206IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkdEZpbmRSb29tOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIGJ0bkhpZGVSb29tRnVsbDogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc0luaXRlZFVJUm9vbSA9IGZhbHNlO1xuXG4gICAgLy8gVUkgUGxheWluZ1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX1BsYXlpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1lQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdyb3VwUGxheWVyczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwcml0ZUNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwcml0ZUNhcmRCYWNrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWF0Y2hQb3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE1hdGNoUG90OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNEZWFsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5CZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bk9wZW5DYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkxlYXZlUm9vbTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBodWJDaGlwczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsUm9vbUlkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsUm9vbUJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbkJldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJldENob29zZVZhbHVlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZXRDaG9vc2VWYWx1ZVRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBQb3B1cCBNYXRjaCBSZXN1bHRcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cE1hdGNoUmVzdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50TWF0Y2hSZXN1bHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiSXRlbVJlc3VsdDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxNYXRjaFJlc3VsdDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICAvLyBOb3RpZnlcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpZnlUaW1lU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGlmeVRpbWVFbmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGlmeVRpbWVCZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gVUkgQ2hhdFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX0NoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkdENoYXRJbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICAvLyBQb3B1cFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwTm9kaXR5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxOb3RpZnlDb250ZW50OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cEd1aWRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgc2VhdE93bmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tQmV0ID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2FtZVN0YXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgbWludXRlcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBzZWNvbmRzID0gbnVsbDtcblxuXG4gICAgcHJpdmF0ZSB0aW1lQXV0b1N0YXJ0ID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVFbmQgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZUJldCA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbFdhaXR0aW5nID0gbnVsbDtcbiAgICBwcml2YXRlIGludGVydmFsRW5kID0gbnVsbDtcbiAgICBwcml2YXRlIGludGVydmFsQmV0dGluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIGN1cnJlbnRDYXJkID0gbnVsbDtcbiAgICBwcml2YXRlIG51bUNhcmRPcGVuZWQgPSAwO1xuXG4gICAgLy8gYmV0XG4gICAgcHJpdmF0ZSBhcnJCZXRWYWx1ZSA9IFtdO1xuICAgIHByaXZhdGUgYXJyQmV0UG9zID0gWy0xNTcuNSwgLTUyLjUsIDUyLjUsIDE1Ny41XTtcbiAgICBwcml2YXRlIGN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ID0gMDtcblxuICAgIHByaXZhdGUgY3VycmVudE1hdGNoUG90VmFsdWUgPSAwO1xuXG4gICAgcHJpdmF0ZSB0aW1lb3V0RW5kR2FtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hpYUJhaURvbmUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBhcnJQb3NEYW5oQmllbiA9IFtdO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEJhaUNhb0NvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2VhdE93bmVyID0gLTE7XG5cbiAgICAgICAgdGhpcy5pbml0Q29uZmlnUGxheWVyKCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2hvd1VJUm9vbXMoKTtcblxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgIEJhaUNhb05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcgxJFhbmcgxJHEg25nIG5o4bqtcC4uLlwiKTtcbiAgICAgICAgICAgIEJhaUNhb05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWROZXR3b3JrLlNlbmRMb2dpbihDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuKSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCYWlDYW9OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCYWlDYW9OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8vIFJlcXVlc3QgVUkgUm9vbVxuICAgIGpvaW5Sb29tKGluZm8pIHtcbiAgICAgLy8gICBjYy5sb2coXCJCYWlDYW8gam9pblJvb20gcm9vbUluZm8gOiBcIiwgaW5mbyk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kSm9pblJvb21CeUlkKGluZm9bXCJpZFwiXSkpO1xuICAgIH1cblxuICAgIHJlZmVzaExpc3RSb29tKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgICAgIEJhaUNhb05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEdldExpc3RSb29tKCkpO1xuICAgIH1cblxuICAgIGZpbmRSb29tSWQoKSB7XG4gICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGZpbmRSb29tSWQgaWQgOiBcIiwgdGhpcy5lZHRGaW5kUm9vbS5zdHJpbmcpO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZWR0RmluZFJvb20uc3RyaW5nLnRyaW0oKTtcbiAgICAgICAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGlkRmluZCA9IHBhcnNlSW50KHRleHQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJCYWlDYW8uSXRlbVJvb21cIik7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1wiaWRcIl0gIT0gaWRGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZVJvb21GdWxsKCkge1xuICAgICAgICBpZiAodGhpcy5idG5IaWRlUm9vbUZ1bGwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUl0ZW0gPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChcIkJhaUNhby5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgICAgICBpZiAocm9vbUl0ZW0ucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0gPT0gcm9vbUl0ZW0ucm9vbUluZm9bXCJtYXhVc2VyUGVyUm9vbVwiXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dVSVJvb21zKCkge1xuICAgICAgICB0aGlzLlVJX0Nob29zZVJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0ZWRVSVJvb20pIHtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzSW5pdGVkVUlSb29tID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGFiZWxOaWNrTmFtZS5zdHJpbmcgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGFiZWxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihDb25maWdzLkxvZ2luLkNvaW4pO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgICAgICAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlVUlSb29tKCkge1xuICAgICAgICB0aGlzLlVJX0Nob29zZVJvb20uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY3JlYXRlUm9vbSgpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBjcmVhdGVSb29tXCIpO1xuICAgIH1cblxuICAgIHBsYXlpbmdOb3coKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gcGxheWluZ05vd1wiKTtcbiAgICAgICAgbGV0IGFyclJvb21Pa01vbmV5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJCYWlDYW8uSXRlbVJvb21cIik7XG4gICAgICAgICAgICBpZiAocm9vbUl0ZW0ucm9vbUluZm9bXCJyZXF1aXJlZE1vbmV5XCJdIDwgQ29uZmlncy5Mb2dpbi5Db2luKSB7XG4gICAgICAgICAgICAgICAgYXJyUm9vbU9rTW9uZXkucHVzaChpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHBsYXlpbmdOb3cgYXJyUm9vbU9rTW9uZXkgOiBcIiwgYXJyUm9vbU9rTW9uZXkpO1xuXG4gICAgICAgIGlmIChhcnJSb29tT2tNb25leS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcm9vbUNyb3dlZCA9IGFyclJvb21Pa01vbmV5WzBdO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBwbGF5aW5nTm93IHJvb21Dcm93ZWQgc3RhcnQgOiBcIiwgcm9vbUNyb3dlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyUm9vbU9rTW9uZXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2FyclJvb21Pa01vbmV5W2luZGV4XV0uZ2V0Q29tcG9uZW50KFwiQmFpQ2FvLkl0ZW1Sb29tXCIpO1xuICAgICAgICAgICAgICAgIGxldCByb29tSXRlbUNyb3dlZCA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltyb29tQ3Jvd2VkXS5nZXRDb21wb25lbnQoXCJCYWlDYW8uSXRlbVJvb21cIik7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBwbGF5aW5nTm93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHBsYXlpbmdOb3cgcm9vbUl0ZW0gOiBcIiwgcm9vbUl0ZW0ucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0pO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gcGxheWluZ05vdyByb29tSXRlbUNyb3dlZCA6IFwiLCByb29tSXRlbUNyb3dlZC5yb29tSW5mb1tcInVzZXJDb3VudFwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdID4gcm9vbUl0ZW1Dcm93ZWQucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vbUNyb3dlZCA9IGFyclJvb21Pa01vbmV5W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBwbGF5aW5nTm93IHJvb21Dcm93ZWQgdXBkYXRlIDogXCIsIHJvb21Dcm93ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gcGxheWluZ05vdyByb29tQ3Jvd2VkIGVuZCA6IFwiLCByb29tQ3Jvd2VkKTtcbiAgICAgICAgICAgIGxldCByb29tQ2hvb3NlZCA9IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltyb29tQ3Jvd2VkXS5nZXRDb21wb25lbnQoXCJCYWlDYW8uSXRlbVJvb21cIik7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHBsYXlpbmdOb3cgcm9vbUNyb3dlZCBlbmQgcm9vbUluZm8gOiBcIiwgcm9vbUNob29zZWQucm9vbUluZm8pO1xuICAgICAgICAgICAgdGhpcy5qb2luUm9vbShyb29tQ2hvb3NlZC5yb29tSW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIktow7RuZyDEkeG7pyB0aeG7gW4gdGhhbSBnaWFcXG5i4bqldCBr4buzIHBow7JuZyBuw6BvICFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGF0XG4gICAgc2hvd1VJQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5VSV9DaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCA1NDYsIDApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xvc2VVSUNoYXQoKSB7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAxMDAwLCAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNoYXRFbW90aW9uKGV2ZW50LCBpZCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGNoYXRFbW90aW9uIGlkIDogXCIsIGlkKTtcbiAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhdFJvb20oMSwgaWQpKTtcbiAgICAgICAgdGhpcy5jbG9zZVVJQ2hhdCgpO1xuICAgIH1cblxuICAgIGNoYXRNc2coKSB7XG4gICAgICAgIGlmICh0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIEJhaUNhb05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYXRSb29tKDAsIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZykpO1xuICAgICAgICAgICAgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQb3B1cEd1aWRlKCkge1xuICAgICAgICB0aGlzLnBvcHVwR3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbG9zZVBvcHVwR3VpZGUoKSB7XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cdGNsb3NlUG9wdXBOb3RpZnkoKSB7XG4gICAgICAgIHRoaXMucG9wdXBOb2RpdHkuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYmFja1RvTG9iYnkoKSB7XG4gICAgICAgIEJhaUNhb05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jbG9zZSgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgLy8gUGxheWluZ1xuICAgIHNob3dVSVBsYXlpbmcoKSB7XG4gICAgICAgIHRoaXMuVUlfUGxheWluZy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsb3NlVUlQbGF5aW5nKCkge1xuICAgICAgICB0aGlzLmFjdGlvbkxlYXZlUm9vbSgpO1xuICAgIH1cblxuICAgIHNldHVwTWF0Y2goZGF0YTogY21kLlJlY2VpdmVkSm9pblJvb21TdWNjZWVkKSB7XG4gICAgICAgIHRoaXMuc2hvd1VJUGxheWluZygpO1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXBNYXRjaFJlc3VsdCgpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zaG93UG9wdXBCZXQoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuY2xvc2VQb3B1cFJlcXVlc3REYW5oQmllbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBzZXR1cE1hdGNoIGRhdGEgOiBcIiwgZGF0YSk7XG5cbiAgICAgICAgbGV0IGNodW9uZ0NoYWlyID0gZGF0YVtcImNodW9uZ0NoYWlyXCJdO1xuICAgICAgICBsZXQgY291bnREb3duVGltZSA9IGRhdGFbXCJjb3VudERvd25UaW1lXCJdO1xuICAgICAgICBsZXQgZ2FtZUFjdGlvbiA9IGRhdGFbXCJnYW1lQWN0aW9uXCJdO1xuICAgICAgICBsZXQgZ2FtZUlkID0gZGF0YVtcImdhbWVJZFwiXTtcbiAgICAgICAgbGV0IG1vbmV5QmV0ID0gZGF0YVtcIm1vbmV5QmV0XCJdO1xuICAgICAgICBsZXQgbW9uZXlUeXBlID0gZGF0YVtcIm1vbmV5VHlwZVwiXTtcbiAgICAgICAgbGV0IG15Q2hhaXIgPSBkYXRhW1wibXlDaGFpclwiXTtcbiAgICAgICAgbGV0IHBsYXllckluZm9zID0gZGF0YVtcInBsYXllckluZm9zXCJdO1xuICAgICAgICBsZXQgcGxheWVyU2l6ZSA9IGRhdGFbXCJwbGF5ZXJTaXplXCJdO1xuICAgICAgICBsZXQgcGxheWVyU3RhdHVzID0gZGF0YVtcInBsYXllclN0YXR1c1wiXTtcbiAgICAgICAgbGV0IHJvb21JZCA9IGRhdGFbXCJyb29tSWRcIl07XG4gICAgICAgIGxldCBydWxlID0gZGF0YVtcInJ1bGVcIl07XG5cbiAgICAgICAgdGhpcy5sYWJlbFJvb21JZC5zdHJpbmcgPSBcIkLDgEkgQ8OATyAtIFBIw5JORzogXCIgKyByb29tSWQ7XG4gICAgICAgIHRoaXMubGFiZWxSb29tQmV0LnN0cmluZyA9IFwiTeG7qEMgQ8av4buiQzogXCIgKyBVdGlscy5mb3JtYXROdW1iZXIobW9uZXlCZXQpICsgXCIkXCI7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbUJldCA9IG1vbmV5QmV0O1xuXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZUFjdGlvbjtcbiAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllcklkID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllclBvcyA9IG15Q2hhaXI7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgTWUgOiBcIiwgY29uZmlnUGxheWVyWzBdKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciAgOiBcIiwgY29uZmlnUGxheWVyKTtcblxuICAgICAgICB2YXIgbnVtUGxheWVycyA9IDA7XG4gICAgICAgIHZhciBhcnJQbGF5ZXJQb3NFeGlzdCA9IFtdO1xuICAgICAgICB2YXIgYXJyUGxheWVySW5mbyA9IFtdO1xuICAgICAgICB2YXIgYXJyUGxheWVyU3RhdHVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYXllckluZm9zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHBsYXllckluZm9zW2luZGV4XS5uaWNrTmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG51bVBsYXllcnMgKz0gMTtcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJQb3NFeGlzdC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJJbmZvLnB1c2gocGxheWVySW5mb3NbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJTdGF0dXMucHVzaChwbGF5ZXJTdGF0dXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIG51bVBsYXllcnMgOiBcIiwgbnVtUGxheWVycyk7XG5cbiAgICAgICAgdGhpcy5yZXNldEh1YkNoaXBzKCk7XG5cbiAgICAgICAgLy8gc2V0dXAgY29uZmlnUGxheWVyXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgY29uZmlnUGxheWVyLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICBjb25maWdQbGF5ZXJbYV0ucGxheWVyUG9zID0gZGVmYXVsdFBsYXllclBvc1tteUNoYWlyXVthXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBTdGF0ZSBvZiBTZWF0IDogWWVzIHwgTm8gZXhpc3QgUGxheWVyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZmluZFBvcyA9IGFyclBsYXllclBvc0V4aXN0LmluZGV4T2YoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3MpO1xuXG4gICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucmVzZXRQbGF5ZXJJbmZvKCk7XG5cbiAgICAgICAgICAgIGlmIChmaW5kUG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBFeGlzdCBwbGF5ZXIgLT4gU2V0IFBsYXllciBJbmZvXG4gICAgICAgICAgICAgICAgaWYgKGFyclBsYXllclN0YXR1c1tmaW5kUG9zXSA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1NJVFRJTkcgfHwgYXJyUGxheWVyU3RhdHVzW2ZpbmRQb3NdID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfUExBWUlORykge1xuICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLmlzVmlld2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlYXRQbGF5ZXIoc2VhdElkLCBhcnJQbGF5ZXJJbmZvW2ZpbmRQb3NdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTm90IEV4aXN0IHBsYXllciAgLT4gQWN0aXZlIEJ0biBBZGQgcGxheWVyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dCdG5JbnZpdGUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldE93bmVyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VhdE93bmVyID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNodW9uZ0NoYWlyKTtcbiAgICAgICAgaWYgKHNlYXRPd25lciAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdE93bmVyKS5zZXRPd25lcih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2VhdE93bmVyID0gc2VhdE93bmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciA6IFwiLCBjb25maWdQbGF5ZXIpO1xuXG4gICAgICAgIGxldCBtc2cgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2FtZVN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6Ly9iYXQgZGF1IHZhbiBtb2lcbiAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuq90IMSR4bqndSB2w6FuIG3hu5tpXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6Ly9iYXQgZGF1IGRhdCBjdWFcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiQuG6r3QgxJHhuqd1IMSR4bq3dCBj4butYVwiO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOi8vYmF0IGRhdSBiYW4gY3VhXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0Oi8vbmhhIGNhaSBjYW4gdGllbiwgaG9hbiB0aWVuXG4gICAgICAgICAgICAgICAgbXNnID0gXCJOaMOgIGPDoWkgY8OibiB0aeG7gW4sIGhvw6BuIHRp4buBblwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1Oi8vYmF0IGRhdSBob2FuIHRpZW5cbiAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuq90IMSR4bqndSBob8OgbiB0aeG7gW5cIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjovL2JhdCBkYXUgdHJhIHRodW9uZ1xuICAgICAgICAgICAgICAgIG1zZyA9IFwiQuG6r3QgxJHhuqd1IHRy4bqjIHRoxrDhu59uZ1wiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtc2cgIT0gXCJcIikge1xuXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFRpbWUgU3RhcnRcbiAgICBzdGFydFdhaXR0aW5nQ291bnREb3duKHRpbWVXYWl0KSB7XG4gICAgICAgIHRoaXMudGltZUF1dG9TdGFydCA9IHRpbWVXYWl0O1xuICAgICAgICB0aGlzLnNldFRpbWVXYWl0dGluZ0NvdW50RG93bigpO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsV2FpdHRpbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVBdXRvU3RhcnQtLTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZVdhaXR0aW5nQ291bnREb3duKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lQXV0b1N0YXJ0IDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsV2FpdHRpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZVN0YXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKVxuICAgIH1cblxuICAgIHNldFRpbWVXYWl0dGluZ0NvdW50RG93bigpIHtcbiAgICAgICAgdGhpcy5zZWNvbmRzID0gTWF0aC5mbG9vcih0aGlzLnRpbWVBdXRvU3RhcnQgJSA2MCk7XG4gICAgICAgIHRoaXMubm90aWZ5VGltZVN0YXJ0LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgQuG6r3QgxJHhuqd1IHNhdSA6IFwiICsgdGhpcy5zZWNvbmRzICsgXCJzIFwiO1xuICAgIH1cblxuICAgIC8vIFRpbWUgRW5kXG4gICAgc3RhcnRFbmRDb3VudERvd24odGltZVdhaXQpIHtcbiAgICAgICAgdGhpcy50aW1lRW5kID0gdGltZVdhaXQ7XG4gICAgICAgIHRoaXMuc2V0VGltZUVuZENvdW50RG93bigpO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVFbmQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVFbmQtLTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZUVuZENvdW50RG93bigpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZUVuZCA8IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEVuZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKVxuICAgIH1cblxuICAgIHNldFRpbWVFbmRDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lRW5kICUgNjApO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVFbmQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIiBL4bq/dCB0aMO6YyBzYXUgOiBcIiArIHRoaXMuc2Vjb25kcyArIFwicyBcIjtcbiAgICB9XG5cbiAgICAvLyBUaW1lIEJldFxuICAgIHN0YXJ0QmV0dGluZ0NvdW50RG93bih0dXJuVGltZSkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHN0YXJ0QmV0dGluZ0NvdW50RG93biB0dXJuVGltZSA6IFwiLCB0dXJuVGltZSk7XG4gICAgICAgIHRoaXMudGltZUJldCA9IHR1cm5UaW1lO1xuICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wcm9jZXNzQmV0dGluZygxKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxCZXR0aW5nKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsQmV0dGluZyA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudGltZUJldC0tO1xuICAgICAgICAgICAgdmFyIHJhdGUgPSAodGhpcy50aW1lQmV0IC8gdHVyblRpbWUpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NCZXR0aW5nKHJhdGUpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZUJldCA8IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEJldHRpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0JldHRpbmcocmF0ZSkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHByb2Nlc3NCZXR0aW5nIHJhdGUgOiBcIiwgcmF0ZSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gcHJvY2Vzc0JldHRpbmcgZmlsbFJhbmdlIDogXCIsIHRoaXMuYWN0aW9uQmV0dGluZy5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UpO1xuICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gcmF0ZTtcbiAgICB9XG5cbiAgICBnZXRDYXJkc1Njb3JlKGFyckNhcmRzKSB7XG4gICAgICAgIGxldCBzY29yZSA9IDA7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gZ2V0Q2FyZHNTY29yZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGdldENhcmRzU2NvcmUgYXJyQ2FyZHMgOiBcIiwgYXJyQ2FyZHMpO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykge1xuICAgICAgICAgICAgc2NvcmUgKz0gQ2FyZFV0aWxzLmdldERpZW1CeUlkKGFyckNhcmRzW2FdKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gZ2V0Q2FyZHNTY29yZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIDogXCIsIGEpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBnZXRDYXJkc1Njb3JlIGdldFNvQnlJZCA6IFwiLCBDYXJkVXRpbHMuZ2V0U29CeUlkKGFyckNhcmRzW2FdKSk7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGdldENhcmRzU2NvcmUgZ2V0RGllbUJ5SWQgOiBcIiwgQ2FyZFV0aWxzLmdldERpZW1CeUlkKGFyckNhcmRzW2FdKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcmUgPSBzY29yZSAlIDEwO1xuICAgICAgICByZXR1cm4gc2NvcmU7XG4gICAgfVxuXG4gICAgLy8gT3BlbiBNZSBDYXJkXG4gICAgb3Blbk1lQ2FyZChldmVudCwgaXRlbUlkKSB7XG4gICAgICAgIC8vIE9wZW4gTWUgY2FyZHNcbiAgICAgICAgbGV0IGNhcmRQb3MgPSBwYXJzZUludChpdGVtSWQpO1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIG9wZW5NZUNhcmQgY2FyZFBvcyA6IFwiLCBjYXJkUG9zKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBvcGVuTWVDYXJkIGN1cnJlbnRDYXJkIDogXCIsIHRoaXMuY3VycmVudENhcmQpO1xuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkucHJlcGFyZUNhcmRSZWFsKGNhcmRQb3MpO1xuICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKHRoaXMuY3VycmVudENhcmRbY2FyZFBvc10pO1xuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnRyYW5zZm9ybVRvQ2FyZFJlYWwoY2FyZFBvcywgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcblxuICAgICAgICB0aGlzLm51bUNhcmRPcGVuZWQgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMubnVtQ2FyZE9wZW5lZCA9PSAzKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaG93Q2FyZE5hbWUodGhpcy5nZXRDYXJkc1Njb3JlKHRoaXMuY3VycmVudENhcmQpICsgXCIgxJBp4buDbVwiKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5yZXNldENhcmRSZWFkeSgpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVDaGlwc1RvSHViTm93KGluZGV4KSB7XG4gICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIGluZGV4XS5wb3NpdGlvbiA9IGNjLnYyKDI1LCA4MCk7XG4gICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIGluZGV4XS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bKDIgKiBpbmRleCkgKyAxXS5wb3NpdGlvbiA9IGNjLnYyKDI1LCA4MCk7XG4gICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bKDIgKiBpbmRleCkgKyAxXS5zY2FsZSA9IDA7XG4gICAgfVxuXG4gICAgZnhNb3ZlQ2hpcHMoY2hpcHMsIGRlbGF5LCB0b1gsIHRvWSkge1xuICAgICAgICBjaGlwcy5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoZGVsYXkpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMCwgMSwgMSksXG4gICAgICAgICAgICAgICAgY2Muc3Bhd24oXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjgsIHRvWCwgdG9ZKSxcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjgsIDAsIDApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlc2V0SHViQ2hpcHMoKSB7XG4gICAgICAgIHZhciBhcnJGcm9tWCA9IFs3MCwgMjgwLCAyODAsIDI2MCwgMTAwLCAtMjYwLCAtMzc1LCAtMzYwXTtcbiAgICAgICAgdmFyIGFyckZyb21ZID0gWy0xOTUsIC0xNTAsIC01NSwgNzAsIDkwLCA4NSwgLTMwLCAtMTU1XTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsyICogaW5kZXhdLnBvc2l0aW9uID0gY2MudjIoYXJyRnJvbVhbaW5kZXhdLCBhcnJGcm9tWVtpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIGluZGV4KSArIDFdLnBvc2l0aW9uID0gY2MudjIoYXJyRnJvbVhbaW5kZXhdLCBhcnJGcm9tWVtpbmRleF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDE2OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwQmV0KCkge1xuICAgICAgICAvLyBhcnJCZXRWYWx1ZVxuICAgICAgICB0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZVRhcmdldC55ID0gdGhpcy5hcnJCZXRQb3NbdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleF07XG4gICAgfVxuXG4gICAgLy8gbWF0Y2ggcmVzdWx0XG4gICAgc2hvd1BvcHVwTWF0Y2hSZXN1bHQoZGF0YSkge1xuICAgICAgICB0aGlzLnBvcHVwTWF0Y2hSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250ZW50TWF0Y2hSZXN1bHQucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1SZXN1bHQpO1xuICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoXCJCYWlDYW8uSXRlbVJlc3VsdFwiKS5pbml0SXRlbShkYXRhW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRNYXRjaFJlc3VsdC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbE1hdGNoUmVzdWx0LnNjcm9sbFRvVG9wKDAuMik7XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cE1hdGNoUmVzdWx0KCkge1xuICAgICAgICB0aGlzLnBvcHVwTWF0Y2hSZXN1bHQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gYWRkTGlzdGVuZXJcbiAgICBzZXR1cExpc3RlbmVyKCkge1xuICAgICAgICBCYWlDYW9OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTE9HSU46XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXNoTGlzdFJvb20oKTtcbiAgICAgICAgICAgICAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRSZWNvbm5lY3RSb29tKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlRPUFNFUlZFUjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gVE9QU0VSVkVSXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX1BJTkdQT05HOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBDTURfUElOR1BPTkdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfSk9JTl9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBDTURfSk9JTl9ST09NXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ01EX1JFQ09OTkVDVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBDTURfUkVDT05ORUNUX1JPT01cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfUkVDT05ORUNUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIENNRF9SRUNPTk5FQ1RfUk9PTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk1PTkVZX0JFVF9DT05GSUc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIE1PTkVZX0JFVF9DT05GSUdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5KT0lOX1JPT01fRkFJTDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkSm9pblJvb21GYWlsKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBKT0lOX1JPT01fRkFJTCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gXCJM4buXaSBcIiArIHJlcy5nZXRFcnJvcigpICsgXCIsIGtow7RuZyB4w6FjIMSR4buLbmguXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5nZXRFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkzhu5dpIGtp4buDbSB0cmEgdGjDtG5nIHRpbiFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIktow7RuZyB0w6xtIMSRxrDhu6NjIHBow7JuZyB0aMOtY2ggaOG7o3AuIFZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJC4bqhbiBraMO0bmcgxJHhu6cgdGnhu4FuIHbDoG8gcGjDsm5nIGNoxqFpIG7DoHkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJLaMO0bmcgdMOsbSDEkcaw4bujYyBwaMOybmcgdGjDrWNoIGjhu6NwLiBWdWkgbMOybmcgdGjhu60gbOG6oWkgc2F1IVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiTeG7l2kgbOG6p24gdsOgbyBwaMOybmcgcGjhuqNpIGPDoWNoIG5oYXUgMTAgZ2nDonkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJI4buHIHRo4buRbmcgYuG6o28gdHLDrCFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIktow7RuZyB0w6xtIHRo4bqleSBwaMOybmcgY2jGoWkhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJN4bqtdCBraOG6qXUgcGjDsm5nIGNoxqFpIGtow7RuZyDEkcO6bmchXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJQaMOybmcgY2jGoWkgxJHDoyDEkeG7pyBuZ8aw4budaSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJC4bqhbiBi4buLIGNo4bunIHBow7JuZyBraMO0bmcgY2hvIHbDoG8gYsOgbiFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkdFVF9MSVNUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkR2V0TGlzdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzLmxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1Sb29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIkJhaUNhby5JdGVtUm9vbVwiKS5pbml0SXRlbShpdGVtRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmFkZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxMaXN0Um9vbS5zY3JvbGxUb1RvcCgwLjIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSk9JTl9HQU1FX1JPT01fQllfSUQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIEpPSU5fR0FNRV9ST09NX0JZX0lEXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEdhbWUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgICBcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk1PX0JBSTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkTW9CYWkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVkTW9CYWkgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJjaGFpck1vQmFpXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcImNhcmRTaXplXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBcImNhcmRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgMTksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDE3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAzMlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXJNb0JhaSA9IHJlc1tcImNoYWlyTW9CYWlcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZHMgPSByZXNbXCJjYXJkc1wiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpck1vQmFpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEgJiYgc2VhdElkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucHJlcGFyZVRvVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNhcmRzW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDYXJkTmFtZSh0aGlzLmdldENhcmRzU2NvcmUoY2FyZHMpICsgXCIgxJBp4buDbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQkFUX0RBVTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gQkFUX0RBVVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkRmlyc3RUdXJuRGVjaXNpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVkRmlyc3RUdXJuRGVjaXNpb24gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SHViQ2hpcHMoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwTWF0Y2hSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLktFVF9USFVDOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRFbmRHYW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZEVuZEdhbWUgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJzdGF0dXNMaXN0XCI6IFszLCAzLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNhcmRMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgWzYsIDIzLCAyMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFsxMSwgMjUsIDI4XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aWVuVGhhbmdDaHVvbmdcIjogLTIwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidGllblRoYW5nR2FcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImtlQ3VhTW9uZXlMaXN0XCI6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImRhbmhCaWVuTW9uZXlMaXN0XCI6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRvbmdUaWVuQ3VvaVZhblwiOiAtMjAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0b25nVGllbkN1b2NMaXN0XCI6IFstMjAwMDAsIDIwMDAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRvbmdEYW5oQmllbkxpc3RcIjogWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidG9uZ0tlQ3VhTGlzdFwiOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0b25nQ3VvY0dhTGlzdFwiOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0b25nQ3VvaVZhbkxpc3RcIjogWy0yMDAwMCwgMTk2MDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY3VycmVudE1vbmV5TGlzdFwiOiBbNDY0MzcwNCwgNDExNjYyLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRpbWVFbmRHYW1lXCI6IDEyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gTW8gaGV0IGNhYyBsYSBiYWkgbmV1IG5vIGNodWEgZGMgbW9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICghdGhpcy5pc0J0bk9wZW5DYXJkU2hvd2VkICYmICFjb25maWdQbGF5ZXJbMF0uaXNWaWV3ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgY2FyZFJlYWR5ID0gdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5ub2RlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChjYXJkUmVhZHkuY2hpbGRyZW5baW5kZXhdLnNjYWxlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQodGhpcy5jdXJyZW50Q2FyZFtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS50cmFuc2Zvcm1Ub0NhcmRSZWFsKGluZGV4LCB0aGlzLnNwcml0ZUNhcmRzW3Nwcml0ZUNhcmRJZF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZExpc3QgPSByZXNbXCJjYXJkTGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aWVuVGhhbmdDaHVvbmcgPSByZXNbXCJ0aWVuVGhhbmdDaHVvbmdcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGllblRoYW5nR2EgPSByZXNbXCJ0aWVuVGhhbmdHYVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZUN1YU1vbmV5TGlzdCA9IHJlc1tcImtlQ3VhTW9uZXlMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhbmhCaWVuTW9uZXlMaXN0ID0gcmVzW1wiZGFuaEJpZW5Nb25leUxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9uZ1RpZW5DdW9pVmFuID0gcmVzW1widG9uZ1RpZW5DdW9pVmFuXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvbmdUaWVuQ3VvY0xpc3QgPSByZXNbXCJ0b25nVGllbkN1b2NMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvbmdEYW5oQmllbkxpc3QgPSByZXNbXCJ0b25nRGFuaEJpZW5MaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvbmdLZUN1YUxpc3QgPSByZXNbXCJ0b25nS2VDdWFMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvbmdDdW9jR2FMaXN0ID0gcmVzW1widG9uZ0N1b2NHYUxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9uZ0N1b2lWYW5MaXN0ID0gcmVzW1widG9uZ0N1b2lWYW5MaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNb25leUxpc3QgPSByZXNbXCJjdXJyZW50TW9uZXlMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVFbmRHYW1lID0gcmVzW1widGltZUVuZEdhbWVcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3NQbGF5aW5nID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkTGlzdFtpbmRleF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NQbGF5aW5nLnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gUmVjZWl2ZWRFbmRHYW1lIHBvc1BsYXlpbmcgOiBcIiwgcG9zUGxheWluZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpbmRJZCA9IHBvc1BsYXlpbmcuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwicGxheWVySWQgOiBcIiwgY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJiZXQgOiBcIiwgdG9uZ1RpZW5DdW9jTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImJpZW4gOiBcIiwgdG9uZ0RhbmhCaWVuTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImtlIDogXCIsIHRvbmdLZUN1YUxpc3RbcG9zUGxheWluZ1tmaW5kSWRdXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJnYSA6IFwiLCB0b25nQ3VvY0dhTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInRvdGFsIDogXCIsIHRvbmdDdW9pVmFuTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIm1vbmV5IDogXCIsIGN1cnJlbnRNb25leUxpc3RbcG9zUGxheWluZ1tmaW5kSWRdXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRzID0gY2FyZExpc3RbcG9zUGxheWluZ1tmaW5kSWRdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRSZWFkeSA9IHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLm5vZGUuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCAzOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkUmVhZHkuY2hpbGRyZW5bYV0uc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQoY2FyZHNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNob3dDYXJkTmFtZSh0aGlzLmdldENhcmRzU2NvcmUoY2FyZHMpICsgXCIgxJBp4buDbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJldDogdG9uZ1RpZW5DdW9jTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmllbjogdG9uZ0RhbmhCaWVuTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2U6IHRvbmdLZUN1YUxpc3RbcG9zUGxheWluZ1tmaW5kSWRdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhOiB0b25nQ3VvY0dhTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRvbmdDdW9pVmFuTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXlDaGFuZ2U6IHRvbmdDdW9pVmFuTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXk6IGN1cnJlbnRNb25leUxpc3RbcG9zUGxheWluZ1tmaW5kSWRdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhOiB0b25nQ3VvY0dhTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IGluZm8ubW9uZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm8ubW9uZXlDaGFuZ2UgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2luXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5meFdpbihpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLmZ4TG9zZShpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcHVwTWF0Y2hSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA0MDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuWUVVX0NBVV9EQU5IX0JJRU46XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFlldUNhdURhbmhCaWVuKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZFlldUNhdURhbmhCaWVuIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYW5oQmllbkNoYWlyID0gcmVzW1wiZGFuaEJpZW5DaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IHJlc1tcImxldmVsXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNFeGlzdCA9IHRoaXMuYXJyUG9zRGFuaEJpZW4uaW5kZXhPZihkYW5oQmllbkNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0V4aXN0ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEYSBjaGFwIG5oYW4gZGFuaCBiaWVuIGN1YSBBIHRoaSBrIGRjIGd1aSB5ZXUgY2F1IGRhbmggYmllbiBsYWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWaSBzZSBiaSBoaWVuIGxhaSBwb3B1cCByZXF1ZXN0IGNodScgQSBsYWkgayB0aGF5IDogaG9pIGxvaX5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5jdXJyZW50Um9vbUJldCAqIGxldmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoZGFuaEJpZW5DaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd1BvcHVwUmVxdWVzdERhbmhCaWVuKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSElBX0JBSTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkQ2hpYUJhaShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gUmVjZWl2ZWRDaGlhQmFpIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNhcmRTaXplXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjYXJkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAxNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIDI4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgMzNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiZ2FtZUlkXCI6IDE1NjczODksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aW1lQ2hpYUJhaVwiOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zaG93UG9wdXBCZXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLmNsb3NlUG9wdXBSZXF1ZXN0RGFuaEJpZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZHMgPSByZXNbXCJjYXJkc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lQ2hpYUJhaSA9IHJlc1tcInRpbWVDaGlhQmFpXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0RW5kR2FtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRFbmRHYW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEVuZENvdW50RG93bih0aW1lQ2hpYUJhaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IGNhcmRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZENoaWFCYWkgY3VycmVudENhcmQgOiBcIiwgdGhpcy5jdXJyZW50Q2FyZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJTZWF0RXhpc3QgPSB0aGlzLmdldE51bVBsYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1QbGF5ZXIgPSBhcnJTZWF0RXhpc3QubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIHwgSGlkZSBjYXJkcyBub3QgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOCAqIDM7IGluZGV4KyspIHsgLy8gOCBwbGF5ZXJzICogMyBjYXJkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBpbmRleCA+PSBudW1QbGF5ZXIgKiAzID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuW2luZGV4XS5wb3NpdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVNoaXAgPSAwLjE7IC8vIDAuMTVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgQ2FyZHMgdXNlZCB0byBlYWNoIHBsYXllciBqb2luZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMzsgYSsrKSB7IC8vIHBsYXllcnMgeCAzIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBudW1QbGF5ZXI7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdEV4aXN0W2JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQ0TWUgPSB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlblsoYSAqIG51bVBsYXllcikgKyBiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYXdQbGF5ZXJQb3MgPSB0aGlzLmdyb3VwUGxheWVycy5jaGlsZHJlbltzZWF0SWRdLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBDSElBX0JBSSBkZWxheVRpbWUgOiBcIiwgKChhICogbnVtUGxheWVyKSArIGIpICogdGltZVNoaXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZDRNZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgoKGEgKiBudW1QbGF5ZXIpICsgYikgKiB0aW1lU2hpcCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIHJhd1BsYXllclBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsYXlPdmVyMlVuZGVyID0gMC4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heERlbGF5ID0gKCgyICogbnVtUGxheWVyKSArIChudW1QbGF5ZXIgLSAxKSkgKiB0aW1lU2hpcDsgLy8gKChhICogbnVtUGxheWVyKSArIGIpICogdGltZVNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lVW5kZXJMYXllciA9IChtYXhEZWxheSArIDAuMiArIGRlbGF5T3ZlcjJVbmRlcikgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNISUFfQkFJIHRpbWVVbmRlckxheWVyIDogXCIsIHRpbWVVbmRlckxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4ICogMzsgaW5kZXgrKykgeyAvLyA4IHBsYXllcnMgKiAzIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJDSElBX0JBSSBjYXJkc0RlYWwgaW5kZXggOiBcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bVBsYXllcjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdEV4aXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3AgbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldENhcmRSZWFkeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDYXJkUmVhZHkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0NhcmRSZWFsKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVVbmRlckxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLktFX0NVQTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkS2VDdWEoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVkS2VDdWEgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJLZUN1YUZyb21cIjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNoYWlyS2VDdWFUb1wiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibGV2ZWxcIjogMlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpcktlQ3VhRnJvbSA9IHJlc1tcImNoYWlyS2VDdWFGcm9tXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyS2VDdWFUbyA9IHJlc1tcImNoYWlyS2VDdWFUb1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IHJlc1tcImxldmVsXCJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVFVfRE9OR19CQVRfREFVOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRBdXRvU3RhcnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVBdXRvU3RhcnQgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaXNBdXRvU3RhcnRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRpbWVBdXRvU3RhcnRcIjogNVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc0F1dG9TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIdWJDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRXYWl0dGluZ0NvdW50RG93bihyZXMudGltZUF1dG9TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQbGF5ZXJzUGxheWluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyUG9zRGFuaEJpZW4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cE1hdGNoUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ET05HX1lfREFOSF9CSUVOOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRDaGFwTmhhbkRhbmhCaWVuKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZENoYXBOaGFuRGFuaEJpZW4gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhbmhCaWVuQ2hhaXIgPSByZXNbXCJkYW5oQmllbkNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsID0gcmVzW1wibGV2ZWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0RhbmhCaWVuLnB1c2goZGFuaEJpZW5DaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGRhbmhCaWVuQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gUmVjZWl2ZWRDaGFwTmhhbkRhbmhCaWVuIE1lIHNlYXRJZCA6IDBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZENoYXBOaGFuRGFuaEJpZW4gQmllbiBzZWF0SWQgOiBcIiwgc2VhdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuZGlzYWJsZURhbmhCaWVuKGxldmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4RGFuaEJpZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBVF9DVU9DOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWREYXRDdW9jKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZERhdEN1b2MgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJEYXRDdW9jXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJsZXZlbFwiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyRGF0Q3VvYyA9IHJlc1tcImNoYWlyRGF0Q3VvY1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsZXZlbCA9IHJlc1tcImxldmVsXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyRGF0Q3VvYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEJldCh0aGlzLmFyckJldFZhbHVlW2xldmVsIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVEhPTkdfVElOX0JBTl9DSE9JOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRHYW1lSW5mbyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gUmVjZWl2ZWRHYW1lSW5mbyByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgUmVjb25uZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VyIGRhbmcgbyB0cm9uZyAxIHBob25nIG5hbyBkb1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV1IHJlcSBqb2luIHJvb20gbmhhbiBkYyBjYWkgbmF5IHRoaSAtPiBkdWEgdmFvIHBob25nIGRhbmcgY2hvaVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJteUNoYWlyXCI6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjaHVvbmdDaGFpclwiOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2FyZHNcIjogWzIyLCAzNCwgMzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY3VvY0RhbmhCaWVuTGlzdFwiOiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjdW9jS2VDdWFMaXN0XCI6IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVTZXJ2ZXJTdGF0ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaXNBdXRvU3RhcnRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVBY3Rpb25cIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNvdW50RG93blRpbWVcIjogMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJtb25leVR5cGVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1vbmV5QmV0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVJZFwiOiAxODI4MDgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwicm9vbUlkXCI6IDk4LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaGFzSW5mb1wiOiBbdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJwbGF5ZXJzXCI6IFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSVJvb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1VJUGxheWluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwTWF0Y2hSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhaXIgPSByZXNbXCJteUNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNodW9uZ0NoYWlyID0gcmVzW1wiY2h1b25nQ2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZHMgPSByZXNbXCJjYXJkc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdW9jRGFuaEJpZW5MaXN0ID0gcmVzW1wiY3VvY0RhbmhCaWVuTGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdW9jS2VDdWFMaXN0ID0gcmVzW1wiY3VvY0tlQ3VhTGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lU2VydmVyU3RhdGUgPSByZXNbXCJnYW1lU2VydmVyU3RhdGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNBdXRvU3RhcnQgPSByZXNbXCJpc0F1dG9TdGFydFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lQWN0aW9uID0gcmVzW1wiZ2FtZUFjdGlvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25UaW1lID0gcmVzW1wiY291bnREb3duVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb25leVR5cGUgPSByZXNbXCJtb25leVR5cGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9uZXlCZXQgPSByZXNbXCJtb25leUJldFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lSWQgPSByZXNbXCJnYW1lSWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9vbUlkID0gcmVzW1wicm9vbUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm8gPSByZXNbXCJoYXNJbmZvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllcnMgPSByZXNbXCJwbGF5ZXJzXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsUm9vbUlkLnN0cmluZyA9IFwiQsOASSBDw4BPIC0gUEjDkk5HOiBcIiArIHJvb21JZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxSb29tQmV0LnN0cmluZyA9IFwiTeG7qEMgQ8av4buiQzogXCIgKyBVdGlscy5mb3JtYXROdW1iZXIobW9uZXlCZXQpICsgXCIkXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFJvb21CZXQgPSBtb25leUJldDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZUFjdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IGNhcmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbMF0ucGxheWVySWQgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllclBvcyA9IG15Q2hhaXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyIE1lIDogXCIsIGNvbmZpZ1BsYXllclswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyICA6IFwiLCBjb25maWdQbGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtUGxheWVycyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhhc0luZm8ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0luZm9baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVBsYXllcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUGxheWVyUG9zRXhpc3QucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBudW1QbGF5ZXJzIDogXCIsIG51bVBsYXllcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXR1cCBjb25maWdQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgY29uZmlnUGxheWVyLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2FdLnBsYXllclBvcyA9IGRlZmF1bHRQbGF5ZXJQb3NbbXlDaGFpcl1bYV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCBTdGF0ZSBvZiBTZWF0IDogWWVzIHwgTm8gZXhpc3QgUGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaW5kUG9zID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UGxheWVySW5mbygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRQb3MgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGlzdCBwbGF5ZXIgLT4gU2V0IFBsYXllciBJbmZvXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGFuZyB0aGlldSB0aG9uZyB0aW4gLT4gc2UgayBoaWVuIGRjIFVzZXJJbmZvXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGFyclBsYXllclN0YXR1c1tmaW5kUG9zXSA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1JFQURZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLmlzVmlld2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VhdFBsYXllcihzZWF0SWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBVdGlscy5yYW5kb21SYW5nZSgxLCA5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbmV5OiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0J0bkludml0ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRPd25lcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdE93bmVyID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNodW9uZ0NoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0T3duZXIgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0T3duZXIpLnNldE93bmVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhdE93bmVyID0gc2VhdE93bmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SHViQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBTkdfS1lfVEhPQVRfUEhPTkc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZE5vdGlmeVJlZ091dFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJvdXRDaGFpclwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaXNPdXRSb29tXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0Q2hhaXIgPSByZXNbXCJvdXRDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc091dFJvb20gPSByZXNbXCJpc091dFJvb21cIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3Mob3V0Q2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNPdXRSb29tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiU+G6r3AgcuG7nWkgYsOgbiAhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiS2jDtCBNw6F1ICFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVkFPX0dBOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRWYW9HYShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gUmVjZWl2ZWRWYW9HYSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjaGFpclwiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hpY0tlbkJldFwiOiAzMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGljS2VuQmV0ID0gcmVzW1wiY2hpY0tlbkJldFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsyICogc2VhdElkXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bKDIgKiBzZWF0SWQpICsgMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4TW92ZUNoaXBzKHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIHNlYXRJZF0sIDAuMSwgdGhpcy5tYXRjaFBvdC54LCB0aGlzLm1hdGNoUG90LnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhNb3ZlQ2hpcHModGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIHNlYXRJZCkgKyAxXSwgMC4yLCB0aGlzLm1hdGNoUG90LngsIHRoaXMubWF0Y2hQb3QueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW4gY29uZyBsdXkga2UgbGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSArPSBjaGljS2VuQmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFZhb0dhKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ET0lfQ0hVT05HOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWREb2lDaHVvbmcoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVkRG9pQ2h1b25nIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNodW9uZ0NoYWlyXCI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0T3duZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKHJlc1tcImNodW9uZ0NoYWlyXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0T3duZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWF0T3duZXIgPSBzZWF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5NT0lfREFUX0NVT0M6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZE1vaURhdEN1b2MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIFJlY2VpdmVkTW9pRGF0Q3VvYyByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJ0aW1lRGF0Q3VvY1wiOiAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QmV0dGluZ0NvdW50RG93bihyZXMudGltZURhdEN1b2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTWF0Y2hQb3Quc3RyaW5nID0gXCIwXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZS5wdXNoKHRoaXMuY3VycmVudFJvb21CZXQgKiAoaW5kZXggKyAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhdyA9IHRoaXMuY3VycmVudFJvb21CZXQgKiAoNCAtIGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmF3ID09IDE1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZS5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjEuNUtcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldENob29zZVZhbHVlLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlck1pbihyYXcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlYXRJZDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwbGF5ZXJJZDogLTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGxheWVyUG9zOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpc1ZpZXdlcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWF0T3duZXIgPT0gMCkgeyAvLyBNZSBsYSBDaHVvbmcgLT4gSyBkYyBiZXQgdmEgayBkYyB2YW8gZ2FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cEJldCgpO1xuXG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gTU9JX0RBVF9DVU9DIHRoaXMuYXJyQmV0VmFsdWUgOiBcIiwgdGhpcy5hcnJCZXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQ2FyZE9wZW5lZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSEVBVF9DQVJEUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gQ0hFQVRfQ0FSRFNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5EQU5HX0tZX0NIT0lfVElFUDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gREFOR19LWV9DSE9JX1RJRVBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfT1dORVJfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gVVBEQVRFX09XTkVSX1JPT01cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5KT0lOX1JPT01fU1VDQ0VTUzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkSm9pblJvb21TdWNjZWVkKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJUm9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cE1hdGNoKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MRUFWRV9HQU1FOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRVc2VyTGVhdmVSb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZFVzZXJMZWF2ZVJvb20gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjaGFpclwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibmlja05hbWVcIjogXCJjaGFvYWU5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZWVkIGNsZWFyIGNvbmZpZ1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZCA9PSBzZWF0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UGxheWVySW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93QnRuSW52aXRlKGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJTZWF0RXhpc3RMYXN0ID0gdGhpcy5nZXROdW1QbGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclNlYXRFeGlzdExhc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllcnNQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lIGxlYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVJX1BsYXlpbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVUlfQ2hvb3NlUm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVzaExpc3RSb29tKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTk9USUZZX0tJQ0tfRlJPTV9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRLaWNrT2ZmKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZEtpY2tPZmYgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTkVXX1VTRVJfSk9JTjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkVXNlckpvaW5Sb29tKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZFVzZXJKb2luUm9vbSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIFwibmlja05hbWVcIjogXCJBaG9hbmc4OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgXCJhdmF0YXJcIjogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBcIm1vbmV5XCI6IDEwMjMwMDgwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInVDaGFpclwiOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidVN0YXR1c1wiOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZm8gPSByZXNbXCJpbmZvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVDaGFpciA9IHJlc1tcInVDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1U3RhdHVzID0gcmVzW1widVN0YXR1c1wiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IFN0YXRlIG9mIFNlYXQgOiBZZXMgfCBObyBleGlzdCBQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zID09IHVDaGFpcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGlzdCBwbGF5ZXIgLT4gU2V0IFBsYXllciBJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZWF0SWQgPSBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UGxheWVySW5mbygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VzdG9tUGxheWVySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXZhdGFyXCI6IGluZm9bXCJhdmF0YXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5pY2tOYW1lXCI6IGluZm9bXCJuaWNrTmFtZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibW9uZXlcIjogaW5mb1tcIm1vbmV5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlYXRQbGF5ZXIoc2VhdElkLCBjdXN0b21QbGF5ZXJJbmZvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodVN0YXR1cyA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1ZJRVdFUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldElzVmlld2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFZpZXdlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRJZF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW3NlYXRJZF0uaXNWaWV3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5OT1RJRllfVVNFUl9HRVRfSkFDS1BPVDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gTk9USUZZX1VTRVJfR0VUX0pBQ0tQT1RcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfTUFUQ0g6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFVwZGF0ZU1hdGNoKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBSZWNlaXZlZFVwZGF0ZU1hdGNoIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2hhaXJcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImhhc0luZm9cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaW5mb3NcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm5pY2tOYW1lXCI6IFwibmVzdGxlMTAzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXZhdGFyXCI6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm1vbmV5XCI6IDU1NjA4NjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJpbWVsZGRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXZhdGFyXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm1vbmV5XCI6IDM4NTI4NTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJWTl9TdGFyMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcImF2YXRhclwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiA1NzAzNTcyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm5pY2tOYW1lXCI6IFwiZ3ZuZ3ZuNDU2N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcImF2YXRhclwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiAyNzQ5Njg3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJza3lwZW5vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcImF2YXRhclwiOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiA1MDUxMzYzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFpciA9IHJlc1tcIm15Q2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzSW5mbyA9IHJlc1tcImhhc0luZm9cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mb3MgPSByZXNbXCJpbmZvc1wiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciA6IFwiLCBjb25maWdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlbyBQb3Mga2hvbmcgcGhhaSBTZWF0SWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBoYXNJbmZvLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjb25maWdQbGF5ZXJbaW5kZXhdW1wicGxheWVyUG9zXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNJbmZvW3Bvc10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0R29sZCBzZSBpbmFjdGl2ZSBpc1ZpZXdlciBuZW4gZGF0IG5vIGxlbiBkYXUgZGUgYmVuIGR1b2kgY29uZmlnIGxhaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRHb2xkKGluZm9zW3Bvc11bXCJtb25leVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJwbGF5ZXJJZFwiXSA9IGluZm9zW3Bvc11bXCJuaWNrTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZm9zW3Bvc11bXCJzdGF0dXNcIl0gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19TSVRUSU5HIHx8IGluZm9zW3Bvc11bXCJzdGF0dXNcIl0gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wiaXNWaWV3ZXJcIl0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldElzVmlld2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRJc1ZpZXdlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VhdFBsYXllcihpbmRleCwgaW5mb3NbcG9zXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllcklkXCJdID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciA6IFwiLCBjb25maWdQbGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ0hBVF9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRDaGF0Um9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gQ0hBVF9ST09NIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImlzSWNvblwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY29udGVudFwiOiBcIjZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm5pY2tuYW1lXCI6IFwiY2hhb2FlOTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNoYWlyXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0ljb25cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjb250ZW50XCI6IFwibGFsYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm5pY2tuYW1lXCI6IFwiY2hhb2FlOTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSWNvbiA9IHJlc1tcImlzSWNvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gcmVzW1wiY29udGVudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0ljb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGF0IEljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2hhdEVtb3Rpb24oY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGF0IE1zZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDaGF0TXNnKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiLS1pbnBhY2tldC5nZXRDbWRJZCgpOiBcIiArIGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gcmVxdWVzdFxuICAgIGFjdGlvbkxlYXZlUm9vbSgpIHtcbiAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRTZW5kUmVxdWVzdExlYXZlR2FtZSgpKTtcbiAgICB9XG5cbiAgICBhY3Rpb25PcGVuQ2FyZCgpIHtcbiAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRTZW5kTW9CYWkoKSk7XG4gICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0aW9uU2VuZFZhb0dhKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGFjdGlvblNlbmRWYW9HYVwiKTtcbiAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVmFvR2EoKSk7XG4gICAgICAgIHRoaXMubWF0Y2hQb3QuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5tYXRjaFBvdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBhY3Rpb25BY2NlcHREYW5oQmllbihldmVudCwgc2VhdElkKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uQWNjZXB0RGFuaEJpZW4gc2VhdElkIDogXCIsIHNlYXRJZCk7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uQWNjZXB0RGFuaEJpZW4gcGxheWVyUG9zIDogXCIsIGNvbmZpZ1BsYXllcltzZWF0SWRdLnBsYXllclBvcyk7XG4gICAgICAgIEJhaUNhb05ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kU2VuZEFjY2VwdERhbmhCaWVuKGNvbmZpZ1BsYXllcltzZWF0SWRdLnBsYXllclBvcykpO1xuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuY2xvc2VQb3B1cFJlcXVlc3REYW5oQmllbihmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VCZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPT0gKHRoaXMuYXJyQmV0VmFsdWUubGVuZ3RoIC0gMSkpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZVRhcmdldC55ID0gdGhpcy5hcnJCZXRQb3NbdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleF07XG4gICAgfVxuXG4gICAgZGVjcmVhc2VCZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPT0gMCkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJldENob29zZVZhbHVlVGFyZ2V0LnkgPSB0aGlzLmFyckJldFBvc1t0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4XTtcbiAgICB9XG5cbiAgICBhY3Rpb25CZXQoKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uQmV0IGJldHRlZCA6IFwiLCB0aGlzLmFyckJldFZhbHVlW3RoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXhdKTtcbiAgICAgICAgQmFpQ2FvTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRTZW5kRGF0Q3VvYyh0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ICsgMSkpO1xuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gc2V0IGJldCBkZWZhdWx0XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHRoaXMuc2VhdE93bmVyXG4gICAgICAgICAgICAgICAgJiYgIWNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXJcbiAgICAgICAgICAgICAgICAmJiBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gUmVjZWl2ZWRNb2lEYXRDdW9jIGluZGV4IDogXCIsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRCZXQodGhpcy5jdXJyZW50Um9vbUJldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuYWRkQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT0gMCkgeyAvLyBrIGtlIGN1YSwgZGFuaCBiaWVuIGR1b2MgbGVuIGNoaW5oIG1pbmhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2hvd1BvcHVwQmV0KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXR1cEJldFZhbHVlKHRoaXMuY3VycmVudFJvb21CZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGlvbkRhbmhCaWVuKGV2ZW50LCBpZCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGFjdGlvbkRhbmhCaWVuIGlkIDogXCIsIGlkKTtcbiAgICAgICAgbGV0IHNlYXRJZCA9IHBhcnNlSW50KGlkLnN1YnN0cmluZygwLCAxKSk7XG4gICAgICAgIGxldCBsZXZlbCA9IHBhcnNlSW50KGlkLnN1YnN0cmluZygxLCAyKSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gc2VhdElkIDogXCIsIHNlYXRJZCk7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gbGV2ZWwgOiBcIiwgbGV2ZWwpO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5maW5kUGxheWVyUG9zQnlTZWF0KHNlYXRJZCk7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gcG9zIDogXCIsIHBvcyk7XG4gICAgICAgIGlmIChwb3MgIT0gLTEpIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gLS0tLS0tLS0tLS0tXCIpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBhY3Rpb25EYW5oQmllbiBzZWF0SWQgOiBcIiwgc2VhdElkKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gcG9zIDogXCIsIHBvcyk7XG5cbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gc2VhdElkIDogMFwiKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gYWN0aW9uRGFuaEJpZW4gbWUgOiBcIiwgY29uZmlnUGxheWVyWzBdLnBsYXllclBvcyk7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIGFjdGlvbkRhbmhCaWVuIC0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5kaXNhYmxlRGFuaEJpZW4obGV2ZWwpO1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dOb3RpZnkoXCLEkMOhbmggYmnDqm5cIik7XG4gICAgICAgICAgICBCYWlDYW9OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFNlbmREYW5oQmllbihwb3MsIGxldmVsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb25LZUN1YShldmVudCwgaWQpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBhY3Rpb25LZUN1YSBpZCA6IFwiLCBpZCk7XG4gICAgICAgIGxldCBzZWF0SWQgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoMCwgMSkpO1xuICAgICAgICBsZXQgbGV2ZWwgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoMSwgMikpIC0gMjtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBhY3Rpb25LZUN1YSBzZWF0SWQgOiBcIiwgc2VhdElkKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBhY3Rpb25LZUN1YSBsZXZlbCA6IFwiLCBsZXZlbCk7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmZpbmRQbGF5ZXJQb3NCeVNlYXQoc2VhdElkKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhbyBhY3Rpb25LZUN1YSBwb3MgOiBcIiwgcG9zKTtcbiAgICAgICAgaWYgKHBvcyAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmRpc2FibGVLZUN1YShsZXZlbCk7XG4gICAgICAgICAgICBCYWlDYW9OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFNlbmRLZUN1YShwb3MsIGxldmVsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0ZVxuICAgIGluaXRDb25maWdQbGF5ZXIoKSB7XG4gICAgICAgIGNvbmZpZ1BsYXllciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uZmlnUGxheWVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHNlYXRJZDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IC0xLFxuICAgICAgICAgICAgICAgIHBsYXllclBvczogLTEsXG4gICAgICAgICAgICAgICAgaXNWaWV3ZXI6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW8gY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgfVxuXG4gICAgcmVzZXRQbGF5ZXJzUGxheWluZygpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnJlc2V0TWF0Y2hIaXN0b3J5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgR2FtZSBQbGF5ZXJzXG4gICAgc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgcGxheWVySW5mbykge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvIHNldHVwU2VhdFBsYXllciBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xuICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5wbGF5ZXJJZCA9IHBsYXllckluZm8ubmlja05hbWU7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRBdmF0YXIocGxheWVySW5mby5hdmF0YXIpO1xuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0TmFtZShwbGF5ZXJJbmZvLm5pY2tOYW1lKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEdvbGQocGxheWVySW5mby5tb25leSk7XG4gICAgfVxuXG4gICAgZmluZFBsYXllclNlYXRCeVVpZCh1aWQpIHtcbiAgICAgICAgbGV0IHNlYXQgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkID09PSB1aWQpIHtcbiAgICAgICAgICAgICAgICBzZWF0ID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlYXQ7XG4gICAgfVxuXG4gICAgZmluZFBsYXllclBvc0J5U2VhdChzZWF0KSB7XG4gICAgICAgIHJldHVybiBjb25maWdQbGF5ZXJbc2VhdF0ucGxheWVyUG9zO1xuICAgIH1cblxuICAgIGZpbmRQbGF5ZXJTZWF0QnlQb3MocG9zKSB7XG4gICAgICAgIGlmIChwb3MgPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWF0ID0gLTE7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3MgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHNlYXQgPSBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VhdDtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJIb3VzZShzZWF0SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBQbGF5ZXJzLmNoaWxkcmVuW3NlYXRJZF0uZ2V0Q29tcG9uZW50KFwiQmFpQ2FvLlBsYXllclwiKTtcbiAgICB9XG5cbiAgICBnZXROdW1QbGF5ZXJzKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgICAgIHZhciBwbGF5ZXJQb3NFbnRyeSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllclBvc0VudHJ5IHBsYXllcklkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllclBvc0VudHJ5IGlzVmlld2VyIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCAhPT0gLTEgJiYgIWNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NFbnRyeS5wdXNoKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgc2VhdElkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgOiBcIiwgcGxheWVyUG9zRW50cnkpO1xuICAgICAgICByZXR1cm4gcGxheWVyUG9zRW50cnk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG5cbiAgICB9XG59XG4iXX0=