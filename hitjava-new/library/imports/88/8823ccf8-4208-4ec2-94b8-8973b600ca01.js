"use strict";
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