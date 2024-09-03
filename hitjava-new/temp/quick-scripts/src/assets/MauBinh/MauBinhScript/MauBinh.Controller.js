"use strict";
cc._RF.push(module, '97c85/a1ahNR5WoU+8m1+Ga', 'MauBinh.Controller');
// MauBinh/MauBinhScript/MauBinh.Controller.ts

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
var MauBinh_Cmd_1 = require("./MauBinh.Cmd");
var MauBinh_NetworkClient_1 = require("./MauBinh.NetworkClient");
var MauBinh_CardUtil_1 = require("./MauBinh.CardUtil");
var MauBinh_DetectPlayerCards_1 = require("./MauBinh.DetectPlayerCards");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
var configPlayer = [
// {
//     seatId: 0,
//     playerId: -1,
//     playerPos: -1,
//     isViewer: true
// }
];
// defaultPlayerPos[0 -> 3][0] = player_pos of me
var defaultPlayerPos = [
    [0, 1, 2, 3],
    [1, 2, 3, 0],
    [2, 3, 0, 1],
    [3, 0, 1, 2]
];
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MauBinhController = /** @class */ (function (_super) {
    __extends(MauBinhController, _super);
    function MauBinhController() {
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
        _this.cardsDeal = null;
        _this.btnLeaveRoom = null;
        _this.labelRoomId = null;
        _this.labelRoomBet = null;
        _this.actionBetting = null;
        _this.cardMove = null;
        _this.suggestTarget = null;
        _this.btnSoChi = null;
        _this.btnCombining = null;
        _this.tableCurrentChi = null;
        // Notify
        _this.notifyTimeStart = null;
        _this.notifyTimeEnd = null;
        _this.notifyTimeBet = null;
        _this.fxSoChiTotal = null;
        _this.spriteSoChiTotal = [];
        // UI Chat
        _this.UI_Chat = null;
        _this.edtChatInput = null;
        // Popup
        _this.popupNodity = null;
        _this.labelNotifyContent = null;
        _this.popupGuide = null;
        _this.spriteGroupCard = [];
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
        _this.timeoutChiaBaiDone = null;
        _this.timeoutBetting = null;
        _this.isTinhAce = null;
        return _this;
    }
    MauBinhController_1 = MauBinhController;
    // LIFE-CYCLE CALLBACKS:
    MauBinhController.prototype.onLoad = function () {
        MauBinhController_1.instance = this;
        this.seatOwner = -1;
        this.initConfigPlayer();
    };
    MauBinhController.prototype.start = function () {
        this.showUIRooms();
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        MauBinh_NetworkClient_1.default.getInstance().addOnOpen(function () {
            App_1.default.instance.showErrLoading("Đang đăng nhập...");
            MauBinh_NetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        MauBinh_NetworkClient_1.default.getInstance().addOnClose(function () {
            App_1.default.instance.loadScene("Lobby");
        }, this);
        MauBinh_NetworkClient_1.default.getInstance().connect();
    };
    // Request UI Room
    MauBinhController.prototype.joinRoom = function (info) {
        //  cc.log("MauBinh joinRoom roomInfo : ", info);
        App_1.default.instance.showLoading(true);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendJoinRoomById(info["id"]));
    };
    MauBinhController.prototype.refeshListRoom = function () {
        this.contentListRooms.removeAllChildren(true);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendGetListRoom());
    };
    MauBinhController.prototype.findRoomId = function () {
        //  cc.log("MauBinh findRoomId id : ", this.edtFindRoom.string);
        var text = this.edtFindRoom.string.trim();
        if (text.length > 0) {
            var idFind = parseInt(text);
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("MauBinh.ItemRoom");
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
    MauBinhController.prototype.hideRoomFull = function () {
        if (this.btnHideRoomFull.isChecked) {
            for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
                var roomItem = this.contentListRooms.children[index].getComponent("MauBinh.ItemRoom");
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
    MauBinhController.prototype.showUIRooms = function () {
        var _this = this;
        this.UI_ChooseRoom.active = true;
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
    MauBinhController.prototype.closeUIRoom = function () {
        this.UI_ChooseRoom.active = false;
    };
    MauBinhController.prototype.createRoom = function () {
        //  cc.log("MauBinh createRoom");
        // MauBinhNetworkClient.getInstance().send(new Cmd.SendGetTopServer(1));
    };
    MauBinhController.prototype.playingNow = function () {
        //  cc.log("MauBinh playingNow");
        var arrRoomOkMoney = [];
        for (var index = 0; index < this.contentListRooms.childrenCount; index++) {
            var roomItem = this.contentListRooms.children[index].getComponent("MauBinh.ItemRoom");
            if (roomItem.roomInfo["requiredMoney"] < Configs_1.default.Login.Coin) {
                arrRoomOkMoney.push(index);
            }
        }
        //  cc.log("MauBinh playingNow arrRoomOkMoney : ", arrRoomOkMoney);
        if (arrRoomOkMoney.length > 0) {
            var roomCrowed = arrRoomOkMoney[0];
            //  cc.log("MauBinh playingNow roomCrowed start : ", roomCrowed);
            for (var index = 0; index < arrRoomOkMoney.length; index++) {
                var roomItem = this.contentListRooms.children[arrRoomOkMoney[index]].getComponent("MauBinh.ItemRoom");
                var roomItemCrowed = this.contentListRooms.children[roomCrowed].getComponent("MauBinh.ItemRoom");
                //  cc.log("MauBinh playingNow ------------------------------------------");
                //  cc.log("MauBinh playingNow roomItem : ", roomItem.roomInfo["userCount"]);
                //  cc.log("MauBinh playingNow roomItemCrowed : ", roomItemCrowed.roomInfo["userCount"]);
                if (roomItem.roomInfo["userCount"] > roomItemCrowed.roomInfo["userCount"]) {
                    roomCrowed = arrRoomOkMoney[index];
                    //  cc.log("MauBinh playingNow roomCrowed update : ", roomCrowed);
                }
            }
            //  cc.log("MauBinh playingNow roomCrowed end : ", roomCrowed);
            var roomChoosed = this.contentListRooms.children[roomCrowed].getComponent("MauBinh.ItemRoom");
            //  cc.log("MauBinh playingNow roomCrowed end roomInfo : ", roomChoosed.roomInfo);
            this.joinRoom(roomChoosed.roomInfo);
        }
        else {
            App_1.default.instance.alertDialog.showMsg("Không đủ tiền tham gia\nbất kỳ phòng nào !");
        }
    };
    // Chat
    MauBinhController.prototype.showUIChat = function () {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(0.5, 546, 0));
    };
    MauBinhController.prototype.closeUIChat = function () {
        this.UI_Chat.runAction(cc.moveTo(0.5, 1000, 0));
    };
    MauBinhController.prototype.chatEmotion = function (event, id) {
        //  cc.log("MauBinh chatEmotion id : ", id);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    MauBinhController.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    MauBinhController.prototype.showPopupGuide = function () {
        this.popupGuide.active = true;
    };
    MauBinhController.prototype.closePopupGuide = function () {
        this.popupGuide.active = false;
    };
    MauBinhController.prototype.backToLobby = function () {
        MauBinh_NetworkClient_1.default.getInstance().close();
        App_1.default.instance.loadScene("Lobby");
    };
    // Playing
    MauBinhController.prototype.showUIPlaying = function () {
        this.UI_Playing.active = true;
    };
    MauBinhController.prototype.closeUIPlaying = function () {
        this.actionLeaveRoom();
    };
    MauBinhController.prototype.setupMatch = function (data) {
        this.showUIPlaying();
        this.closeUIChat();
        //  cc.log("MauBinh setupMatch data : ", data);
        //  cc.log("MauBinh setupMatch data !0 : ", !0);
        //  cc.log("MauBinh setupMatch data !1 : ", !1);
        var myChair = data["myChair"];
        var moneyBet = data["moneyBet"];
        var roomId = data["roomId"];
        var gameId = data["gameId"];
        var moneyType = data["moneyType"];
        var rule = data["rule"];
        var playerSize = data["playerSize"];
        var playerStatus = data["playerStatus"];
        var playerInfos = data["playerInfos"];
        var gameState = data["gameState"];
        var gameAction = data["gameAction"];
        var countDownTime = data["countDownTime"];
        this.labelRoomId.string = "MẬU BINH - PHÒNG: " + roomId;
        this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "$";
        this.isTinhAce = rule == 1 ? true : false;
        this.currentRoomBet = moneyBet;
        if (gameState == MauBinh_Cmd_1.default.Code.STATE_PLAYING) {
            this.startBettingCountDown(countDownTime);
        }
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        //  cc.log("MauBinh setupMatch configPlayer Me : ", configPlayer[0]);
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
        //  cc.log("MauBinh numPlayers : ", numPlayers);
        // setup configPlayer
        for (var a = 0; a < configPlayer.length; a++) {
            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        }
        //  cc.log("MauBinh setupMatch configPlayer  : ", JSON.stringify(configPlayer));
        //  cc.log("MauBinh setupMatch arrPlayerPosExist  : ", JSON.stringify(arrPlayerPosExist));
        //  cc.log("MauBinh setupMatch arrPlayerInfo  : ", JSON.stringify(arrPlayerInfo));
        //  cc.log("MauBinh setupMatch arrPlayerStatus  : ", JSON.stringify(arrPlayerStatus));
        // set State of Seat : Yes | No exist Player
        for (var index = 0; index < configPlayer.length; index++) {
            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
            //  cc.log("MauBinh setupMatch find -------------- ");
            //  cc.log("MauBinh setupMatch find " + index + " : " + configPlayer[index].playerPos);
            var seatId = configPlayer[index].seatId;
            //  cc.log("MauBinh setupMatch find seatId ", seatId);
            this.getPlayerHouse(seatId).resetPlayerInfo(seatId);
            //  cc.log("MauBinh setupMatch find findPos ", findPos);
            if (findPos > -1) {
                // Exist player -> Set Player Info
                //  cc.log("MauBinh setupMatch find arrPlayerStatus[findPos] : ", arrPlayerStatus[findPos]);
                if (arrPlayerStatus[findPos] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                    configPlayer[index].isViewer = false;
                    this.getPlayerHouse(seatId).setIsViewer(false);
                    if (seatId != 0) {
                        if (gameState == MauBinh_Cmd_1.default.Code.STATE_PLAYING) {
                            this.getPlayerHouse(seatId).playFxDangXep();
                            this.getPlayerHouse(seatId).showCardReal(true);
                            this.getPlayerHouse(seatId).showCardReady(false);
                        }
                    }
                }
                else {
                    configPlayer[index].isViewer = true;
                    this.getPlayerHouse(seatId).setIsViewer(true);
                    this.getPlayerHouse(seatId).playFxViewer();
                }
                this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
            }
            else {
                // Not Exist player  -> Active Btn Add player
                this.getPlayerHouse(seatId).showBtnInvite(true);
                configPlayer[index].isViewer = true;
            }
        }
        //  cc.log("MauBinh setupMatch configPlayer : ", configPlayer);
    };
    // Time Start
    MauBinhController.prototype.startWaittingCountDown = function (timeWait) {
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
    MauBinhController.prototype.setTimeWaittingCountDown = function () {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " Bắt đầu sau : " + this.seconds + "s ";
    };
    // Time End
    MauBinhController.prototype.startEndCountDown = function (timeWait) {
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
    MauBinhController.prototype.setTimeEndCountDown = function () {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeEnd.getComponent(cc.Label).string = " Kết thúc sau : " + this.seconds + "s ";
    };
    // Time Bet
    MauBinhController.prototype.startBettingCountDown = function (turnTime) {
        var _this = this;
        //  cc.log("MauBinh startBettingCountDown turnTime : ", turnTime);
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
    MauBinhController.prototype.processBetting = function (rate) {
        //  cc.log("MauBinh processBetting rate : ", rate);
        //  cc.log("MauBinh processBetting fillRange : ", this.actionBetting.children[0].getComponent(cc.Sprite).fillRange);
        this.actionBetting.children[0].getComponent(cc.Sprite).fillRange = rate;
    };
    MauBinhController.prototype.getCardsScore = function (arrCards) {
        var score = 0;
        for (var a = 0; a < 3; a++) {
            score += MauBinh_CardUtil_1.default.getDiemById(arrCards[a]);
        }
        score = score % 10;
        if (score == 0) {
            score = 10;
        }
        return score;
    };
    // addListener
    MauBinhController.prototype.setupListener = function () {
        var _this = this;
        MauBinh_NetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case MauBinh_Cmd_1.default.Code.LOGIN:
                    App_1.default.instance.showLoading(false);
                    _this.refeshListRoom();
                    MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.CmdReconnectRoom());
                    break;
                case MauBinh_Cmd_1.default.Code.TOPSERVER:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedTopServer(data);
                        //  cc.log("MauBinh TOPSERVER res : ", JSON.stringify(res));
                        var rankType = res["rankType"];
                        var topDay_money = res["topDay_money"];
                        var topWeek_money = res["topWeek_money"];
                        var topMonth_money = res["topMonth_money"];
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.CMD_PINGPONG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh CMD_PINGPONG");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.CMD_JOIN_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh CMD_JOIN_ROOM");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh CMD_RECONNECT_ROOM");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.MONEY_BET_CONFIG:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh MONEY_BET_CONFIG");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.JOIN_ROOM_FAIL:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedJoinRoomFail(data);
                        //  cc.log("MauBinh JOIN_ROOM_FAIL res : ", JSON.stringify(res));
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
                                break;
                        }
                        App_1.default.instance.alertDialog.showMsg(msg);
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.GET_LIST_ROOM:
                    {
                        var res = new MauBinh_Cmd_1.default.ReceivedGetListRoom(data);
                        //  cc.log(res);
                        for (var i = 0; i < res.list.length; i++) {
                            var itemData = res.list[i];
                            var item = cc.instantiate(_this.prefabItemRoom);
                            item.getComponent("MauBinh.ItemRoom").initItem(itemData);
                            _this.contentListRooms.addChild(item);
                        }
                        _this.scrollListRoom.scrollToTop(0.2);
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.JOIN_GAME_ROOM_BY_ID:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh JOIN_GAME_ROOM_BY_ID");
                    }
                    break;
                // ------------------------ Game ---------------------------     
                case MauBinh_Cmd_1.default.Code.BINH_SO_CHI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedBinhSoChi(data);
                        //  cc.log("MauBinh ReceivedBinhSoChi res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var seatId_1 = _this.findPlayerSeatByPos(chair);
                        if (seatId_1 != -1) {
                            if (seatId_1 == 0) {
                                _this.btnCombining.active = true;
                                _this.btnSoChi.active = false;
                                _this.getPlayerHouse(0).scaleCardReal(0.45);
                                for (var index = 0; index < 13; index++) {
                                    _this.meCards.children[index].getComponent('MauBinh.MeCard').offDrag();
                                }
                            }
                            else {
                                _this.getPlayerHouse(seatId_1).playFxXepXong();
                            }
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.XEP_LAI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedXepLai(data);
                        //  cc.log("MauBinh ReceivedXepLai res : ", JSON.stringify(res));
                        var chair = res["chair"];
                        var seatId_2 = _this.findPlayerSeatByPos(chair);
                        if (seatId_2 != -1) {
                            if (seatId_2 == 0) {
                                _this.btnCombining.active = false;
                                _this.btnSoChi.active = true;
                                _this.getPlayerHouse(0).scaleCardReal(1);
                                for (var index = 0; index < 13; index++) {
                                    _this.meCards.children[index].getComponent('MauBinh.MeCard').activeDrag();
                                }
                            }
                            else {
                                _this.getPlayerHouse(seatId_2).playFxDangXep();
                            }
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.KET_THUC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedEndGame(data);
                        //  cc.log("MauBinh ReceivedEndGame res : ", JSON.stringify(res));
                        _this.actionHoldRoom();
                        _this.unschedule(_this.timeoutBetting);
                        _this.actionBetting.active = false;
                        _this.btnSoChi.active = false;
                        _this.btnCombining.active = false;
                        _this.tableCurrentChi.active = false;
                        for (var index = 0; index < 13; index++) {
                            _this.meCards.children[index].getComponent('MauBinh.MeCard').offDrag();
                            _this.meCards.children[index].getComponent('MauBinh.MeCard').resetState();
                        }
                        // {
                        //     "playerResultList": [
                        //         {
                        //             "chairIndex": 0,
                        //             "maubinhType": 7,
                        //             "chi1": [50, 49, 47, 45, 38],
                        //             "chi2": [35, 34, 33, 27, 23],
                        //             "chi3": [21, 15, 5],
                        //             "moneyInChi": [0, 0, 0],
                        //             "moneyAt": 0,
                        //             "moneyCommon": -120000,
                        //             "moneySap": 0,
                        //             "currentMoney": 18063610
                        //         },
                        //         {
                        //             "chairIndex": 1,
                        //             "maubinhType": 6,
                        //             "chi1": [39, 37, 36, 51, 41],
                        //             "chi2": [22, 20, 32, 29, 24],
                        //             "chi3": [16, 12, 4],
                        //             "moneyInChi": [0, 0, 0],
                        //             "moneyAt": 0,
                        //             "moneyCommon": 117600,
                        //             "moneySap": 0,
                        //             "currentMoney": 0
                        //         }
                        //     ],
                        //     "timeEndGame": 5
                        // }
                        var playerResultList = res["playerResultList"];
                        var timeEndGame = res["timeEndGame"];
                        _this.unschedule(_this.intervalBetting);
                        _this.actionBetting.active = false;
                        // show Me cards
                        for (var index = 0; index < playerResultList.length; index++) {
                            var result = playerResultList[index];
                            var seatId_3 = _this.findPlayerSeatByPos(result.chairIndex);
                            if (seatId_3 != -1 && seatId_3 == 0) {
                                var totalCards = [
                                    result.chi3[0], result.chi3[1], result.chi3[2],
                                    result.chi2[0], result.chi2[1], result.chi2[2], result.chi2[3], result.chi2[4],
                                    result.chi1[0], result.chi1[1], result.chi1[2], result.chi1[3], result.chi1[4]
                                ];
                                for (var a = 0; a < 13; a++) {
                                    var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(totalCards[a]);
                                    _this.meCards.children[a].children[1].getComponent(cc.Sprite).spriteFrame = _this.spriteCards[spriteCardId];
                                }
                                Configs_1.default.Login.Coin = result.currentMoney;
                                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            }
                        }
                        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
                            _this.getPlayerHouse(index).resetResultGame();
                            _this.getPlayerHouse(index).prepareFxAction();
                        }
                        _this.getPlayerHouse(0).scaleCardReal(0.45);
                        _this.soChi(1, playerResultList);
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.CHIA_BAI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedChiaBai(data);
                        //  cc.log("MauBinh ReceivedChiaBai res : ", JSON.stringify(res));
                        // {
                        //     "cardList": [46, 42, 41, 35, 33, 31, 30, 23, 22, 15, 9, 5, 2],
                        //     "mauBinh": 6,
                        //     "gameId": 9859882,
                        //     "countdown": 60
                        // }
                        _this.btnSoChi.active = false;
                        _this.btnCombining.active = false;
                        var cardList_1 = res["cardList"];
                        var mauBinh_1 = res["mauBinh"];
                        var gameId = res["gameId"];
                        var countdown_1 = res["countdown"];
                        clearTimeout(_this.timeoutBetting);
                        _this.timeoutBetting = setTimeout(function () {
                            _this.startBettingCountDown(countdown_1);
                        }, 3000); // 2000
                        _this.currentCard = cardList_1;
                        //  cc.log("MauBinh ReceivedChiaBai currentCard : ", this.currentCard);
                        var arrChiCuoi = [_this.currentCard[0], _this.currentCard[1], _this.currentCard[2]];
                        var arrChiGiua = [_this.currentCard[3], _this.currentCard[4], _this.currentCard[5], _this.currentCard[6], _this.currentCard[7]];
                        var arrChiDau = [_this.currentCard[8], _this.currentCard[9], _this.currentCard[10], _this.currentCard[11], _this.currentCard[12]];
                        //  cc.log("Check currentCard ====================================== ");
                        _this.logCard(_this.currentCard);
                        _this.logCard(arrChiCuoi);
                        _this.logCard(arrChiGiua);
                        _this.logCard(arrChiDau);
                        var arrSeatExist = _this.getNumPlayers();
                        var numPlayer_1 = arrSeatExist.length;
                        var cardDeal_1 = 4;
                        // Open | Hide cards not use -> Mau binh nhieu la bai qua nen chi chia 4 la tuong trung
                        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER * cardDeal_1; index++) { // 4 players * 4 cards
                            _this.cardsDeal.children[index].active = index >= numPlayer_1 * cardDeal_1 ? false : true;
                            _this.cardsDeal.children[index].setPosition(0, 0);
                        }
                        var timeShip = 0.1; // 0.15
                        // Move Cards used to each player joined
                        for (var a = 0; a < cardDeal_1; a++) { // players x 4 cards
                            for (var b = 0; b < numPlayer_1; b++) {
                                var seatId_4 = arrSeatExist[b];
                                if (seatId_4 !== -1) {
                                    var card4Me = _this.cardsDeal.children[(a * numPlayer_1) + b];
                                    var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[seatId_4].position.x, _this.groupPlayers.children[seatId_4].position.y);
                                    //  cc.log("MauBinh CHIA_BAI delayTime : ", ((a * numPlayer) + b) * timeShip);
                                    card4Me.runAction(cc.sequence(cc.delayTime(((a * numPlayer_1) + b) * timeShip), cc.moveTo(0.2, rawPlayerPos)));
                                }
                            }
                        }
                        var delayOver2Under = 0.2;
                        var maxDelay = (((cardDeal_1 - 1) * numPlayer_1) + (numPlayer_1 - 1)) * timeShip; // ((a * numPlayer) + b) * timeShip
                        var timeUnderLayer = (maxDelay + 0.2 + delayOver2Under) * 1000;
                        //  cc.log("CHIA_BAI timeUnderLayer : ", timeUnderLayer);
                        clearTimeout(_this.timeoutChiaBaiDone);
                        _this.timeoutChiaBaiDone = setTimeout(function () {
                            for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER * cardDeal_1; index++) { // 4 players * 3 cards
                                //  cc.log("CHIA_BAI cardsDeal index : ", index);
                                _this.cardsDeal.children[index].active = false;
                            }
                            for (var index = 0; index < numPlayer_1; index++) {
                                var seatId_5 = arrSeatExist[index];
                                if (seatId_5 !== -1) {
                                    // Drop layer
                                    if (seatId_5 == 0) {
                                        _this.getPlayerHouse(seatId_5).resetCardReady(seatId_5);
                                        _this.getPlayerHouse(seatId_5).showCardReal(false);
                                        _this.getPlayerHouse(seatId_5).showCardReady(true);
                                        // Open Me cards
                                        _this.getPlayerHouse(0).prepareToTransform();
                                        for (var a = 0; a < 13; a++) {
                                            //  cc.log("MauBinh cardId : ", cardList[a]);
                                            var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(cardList_1[a]);
                                            var cardOpen = _this.meCards.children[a];
                                            cardOpen.active = true;
                                            cardOpen.getComponent("MauBinh.MeCard").setupCard({
                                                pos: a,
                                                is_Upper: false,
                                                card: cardList_1[a]
                                            }, _this.spriteCards[spriteCardId]);
                                            _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId], 0);
                                        }
                                        _this.actionAutoBinhSoChi();
                                        _this.btnSoChi.active = true;
                                        var isGood = mauBinh_1 == MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG ? false : true;
                                        var typeName = _this.getBinhName(mauBinh_1);
                                        _this.getPlayerHouse(0).resetResultGame();
                                        if (mauBinh_1 != MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG) {
                                            _this.getPlayerHouse(0).playFxResultGeneral(0, isGood, typeName, 0);
                                        }
                                        for (var index_1 = 0; index_1 < numPlayer_1; index_1++) {
                                            if (arrSeatExist[index_1] != 0) {
                                                _this.getPlayerHouse(arrSeatExist[index_1]).playFxDangXep();
                                            }
                                        }
                                        var x = new MauBinh_DetectPlayerCards_1.default();
                                        x.initCard(_this.currentCard);
                                        var result = x.getPlayerCardsInfo(_this.isTinhAce); // isTinhAce
                                        //  cc.log("completeMoveCard result : ", result);
                                        var arrChiCuoi_1 = [_this.currentCard[0], _this.currentCard[1], _this.currentCard[2]];
                                        var arrChiGiua_1 = [_this.currentCard[3], _this.currentCard[4], _this.currentCard[5], _this.currentCard[6], _this.currentCard[7]];
                                        var arrChiDau_1 = [_this.currentCard[8], _this.currentCard[9], _this.currentCard[10], _this.currentCard[11], _this.currentCard[12]];
                                        _this.highLightCards(3, result.chiCuoi, arrChiCuoi_1);
                                        _this.highLightCards(2, result.chiGiua, arrChiGiua_1);
                                        _this.highLightCards(1, result.chiDau, arrChiDau_1);
                                        _this.tableCurrentChi.active = true;
                                        _this.tableCurrentChi.children[1].getComponent(cc.Label).string = "1. " + _this.getChiName(result.chiDau);
                                        _this.tableCurrentChi.children[2].getComponent(cc.Label).string = "2. " + _this.getChiName(result.chiGiua);
                                        _this.tableCurrentChi.children[3].getComponent(cc.Label).string = "3. " + _this.getChiName(result.chiCuoi);
                                    }
                                    else {
                                        _this.getPlayerHouse(seatId_5).showCardReal(true);
                                        _this.getPlayerHouse(seatId_5).showCardReady(false);
                                    }
                                }
                            }
                        }, timeUnderLayer);
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.TU_DONG_BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedAutoStart(data);
                        //  cc.log("MauBinh ReceiveAutoStart res : ", JSON.stringify(res));
                        // {
                        //     "isAutoStart": true,
                        //     "timeAutoStart": 5
                        // }
                        if (res.isAutoStart) {
                            _this.startWaittingCountDown(res.timeAutoStart);
                            _this.btnSoChi.active = false;
                            _this.btnCombining.active = false;
                            _this.tableCurrentChi.active = false;
                            _this.resetPlayersPlaying();
                            for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
                                _this.getPlayerHouse(index).resetResultGame();
                            }
                            _this.fxSoChiTotal.stopAllActions();
                            _this.fxSoChiTotal.active = false;
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.THONG_TIN_BAN_CHOI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedGameInfo(data);
                        //  cc.log("MauBinh ReceivedGameInfo res : ", JSON.stringify(res));
                        // Reconnect
                        _this.closeUIRoom();
                        _this.showUIPlaying();
                        _this.closeUIChat();
                        // {
                        //     "myChair": 3,
                        //     "gameState": 1,
                        //     "gameAction": 2,
                        //     "countdownTime": 46,
                        //     "moneyBet": 500,
                        //     "moneyType": 1,
                        //     "gameId": 5556609,
                        //     "roomId": 94,
                        //     "rule": 0,
                        //     "hasInfo": [true, true, true, true],
                        //     "players": [
                        //         {
                        //             "sochi": false,
                        //             "status": 3,
                        //             "avatar": "3",
                        //             "userId": 114,
                        //             "nickName": "toichangcogi",
                        //             "currentMoney": 6223085
                        //         },
                        //         {
                        //             "sochi": false,
                        //             "status": 3,
                        //             "avatar": "4",
                        //             "userId": 403,
                        //             "nickName": "traulucxc",
                        //             "currentMoney": 863887
                        //         },
                        //         {
                        //             "sochi": false,
                        //             "status": 3,
                        //             "avatar": "1",
                        //             "userId": 6789589,
                        //             "nickName": "Napgame",
                        //             "currentMoney": 1025000
                        //         },
                        //         {
                        //             "cardList": [21, 20, 1, 0, 19, 27, 24, 42, 39, 28, 45, 44, 49],
                        //             "sochi": false,
                        //             "status": 3,
                        //             "avatar": "6",
                        //             "userId": 6790894,
                        //             "nickName": "vn_star",
                        //             "currentMoney": 1000000
                        //         }
                        //     ]
                        // }
                        var myChair = res["myChair"];
                        var gameState = res["gameState"];
                        var gameAction = res["gameAction"];
                        var countDownTime = res["countDownTime"];
                        var moneyBet = res["moneyBet"];
                        var moneyType = res["moneyType"];
                        var gameId = res["gameId"];
                        var roomId = res["roomId"];
                        var rule = res["rule"];
                        var hasInfo = res["hasInfo"];
                        var players = res["players"];
                        _this.labelRoomId.string = "MẬU BINH - PHÒNG: " + roomId;
                        _this.labelRoomBet.string = "MỨC CƯỢC: " + Utils_1.default.formatNumber(moneyBet) + "$";
                        _this.currentRoomBet = moneyBet;
                        _this.isTinhAce = rule == 1 ? true : false;
                        _this.currentCard = players[myChair].cardList;
                        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
                        configPlayer[0].playerPos = myChair;
                        //  cc.log("MauBinh setupMatch configPlayer Me : ", configPlayer[0]);
                        //  cc.log("MauBinh setupMatch configPlayer  : ", configPlayer);
                        var numPlayers = 0;
                        var arrPlayerPosExist = [];
                        for (var index = 0; index < hasInfo.length; index++) {
                            if (hasInfo[index]) {
                                numPlayers += 1;
                                arrPlayerPosExist.push(index);
                            }
                        }
                        //  cc.log("MauBinh numPlayers : ", numPlayers);
                        // setup configPlayer
                        for (var a = 0; a < configPlayer.length; a++) {
                            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
                        }
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
                            var seatId = configPlayer[index].seatId;
                            _this.getPlayerHouse(seatId).resetPlayerInfo(seatId);
                            if (findPos > -1) {
                                // Exist player -> Set Player Info
                                _this.setupSeatPlayer(seatId, {
                                    nickName: players[findPos].nickName,
                                    avatar: parseInt(players[findPos].avatar),
                                    money: players[findPos].currentMoney
                                });
                                if (players[findPos].status == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    configPlayer[seatId].isViewer = true;
                                    _this.getPlayerHouse(seatId).setIsViewer(true);
                                    _this.getPlayerHouse(seatId).playFxViewer();
                                }
                                else {
                                    configPlayer[seatId].isViewer = false;
                                    _this.getPlayerHouse(seatId).setIsViewer(false);
                                    if (seatId != 0) {
                                        _this.getPlayerHouse(seatId).showCardReady(false);
                                        _this.getPlayerHouse(seatId).showCardReal(true);
                                        if (players[findPos].sochi) {
                                            _this.getPlayerHouse(seatId).playFxXepXong();
                                        }
                                        else {
                                            _this.getPlayerHouse(seatId).playFxDangXep();
                                        }
                                    }
                                    else {
                                        _this.btnSoChi.active = !players[findPos].sochi;
                                        _this.btnCombining.active = players[findPos].sochi;
                                    }
                                }
                            }
                            else {
                                // Not Exist player  -> Active Btn Add player
                                _this.getPlayerHouse(seatId).showBtnInvite(true);
                                configPlayer[index].isViewer = true;
                            }
                        }
                        // Open Me cards
                        if (_this.currentCard.length > 0) {
                            _this.getPlayerHouse(0).showCardReady(false);
                            _this.getPlayerHouse(0).prepareToTransform();
                            for (var a = 0; a < _this.currentCard.length; a++) {
                                //  cc.log("Poker cardId : ", this.currentCard[a]);
                                var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(_this.currentCard[a]);
                                _this.getPlayerHouse(0).transformToCardReal(a, _this.spriteCards[spriteCardId], 0);
                            }
                        }
                        if (gameState == MauBinh_Cmd_1.default.Code.STATE_PLAYING) {
                            _this.startBettingCountDown(countDownTime);
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                        //  cc.log("MauBinh ReceivedNotifyRegOutRoom res : ", JSON.stringify(res));
                        // {
                        //     "outChair": 1,
                        //     "isOutRoom": true
                        //   }
                        var outChair = res["outChair"];
                        var isOutRoom = res["isOutRoom"];
                        var seatId_6 = _this.findPlayerSeatByPos(outChair);
                        if (seatId_6 !== -1) {
                            if (isOutRoom) {
                                _this.getPlayerHouse(seatId_6).showNotify("Sắp rời bàn !");
                            }
                            else {
                                _this.getPlayerHouse(seatId_6).showNotify("Khô Máu !");
                            }
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.MOI_DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedMoiDatCuoc(data);
                        //  cc.log("MauBinh ReceivedMoiDatCuoc res : ", JSON.stringify(res));
                        // {
                        //     "timeDatCuoc": 20
                        //   }
                        _this.startBettingCountDown(res.timeDatCuoc);
                        if (_this.seatOwner == 0) { // Me la Chuong -> K dc bet va k dc vao ga
                            _this.btnSoChi.active = false;
                            _this.btnCombining.active = false;
                        }
                        else {
                            _this.btnSoChi.active = true;
                            _this.btnCombining.active = true;
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.CHEAT_CARDS:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh CHEAT_CARDS");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh DANG_KY_CHOI_TIEP");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh UPDATE_OWNER_ROOM");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.JOIN_ROOM_SUCCESS:
                    {
                        //  cc.log("MauBinh JOIN_ROOM_SUCCESS");
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedJoinRoomSucceed(data);
                        _this.closeUIRoom();
                        _this.setupMatch(res);
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.LEAVE_GAME:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedUserLeaveRoom(data);
                        //  cc.log("MauBinh ReceivedUserLeaveRoom res : ", JSON.stringify(res));
                        // {
                        //     "chair": 1,
                        //     "nickName": "chaoae99"
                        //   }
                        var chair = res["chair"];
                        var seatId_7 = _this.findPlayerSeatByPos(chair);
                        if (seatId_7 !== -1) {
                            // Need clear configPlayer
                            for (var index = 0; index < configPlayer.length; index++) {
                                if (configPlayer[index].seatId == seatId_7) {
                                    configPlayer[index].playerId = -1;
                                    configPlayer[index].isViewer = true;
                                }
                            }
                            // Change UI
                            _this.getPlayerHouse(seatId_7).resetPlayerInfo(seatId_7);
                            _this.getPlayerHouse(seatId_7).showBtnInvite(true);
                            var arrSeatExistLast = _this.getNumPlayers();
                            if (arrSeatExistLast.length == 1) {
                                _this.resetPlayersPlaying();
                            }
                            if (seatId_7 == 0) {
                                // Me leave
                                // Change UI
                                _this.UI_Playing.active = false;
                                _this.UI_ChooseRoom.active = true;
                                _this.refeshListRoom();
                            }
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedKickOff(data);
                        //  cc.log("MauBinh ReceivedKickOff res : ", JSON.stringify(res));
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.NEW_USER_JOIN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedUserJoinRoom(data);
                        //  cc.log("MauBinh ReceivedUserJoinRoom res : ", JSON.stringify(res));
                        // {
                        //     "info": {
                        //       "nickName": "Ahoang88",
                        //       "avatar": "7",
                        //       "money": 10230080
                        //     },
                        //     "myChair": 5,
                        //     "uStatus": 1
                        //   }
                        var info = res["info"];
                        var myChair = res["myChair"];
                        var uStatus = res["uStatus"];
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            if (configPlayer[index].playerPos == myChair) {
                                // Exist player -> Set Player Info
                                var seatId = configPlayer[index].seatId;
                                _this.getPlayerHouse(seatId).resetPlayerInfo(seatId);
                                var customPlayerInfo = {
                                    "avatar": info["avatar"],
                                    "nickName": info["nickName"],
                                    "money": info["money"],
                                };
                                _this.setupSeatPlayer(seatId, customPlayerInfo);
                                if (uStatus == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    configPlayer[seatId].isViewer = true;
                                    _this.getPlayerHouse(seatId).setIsViewer(true);
                                    _this.getPlayerHouse(seatId).playFxViewer();
                                }
                                else {
                                    configPlayer[seatId].isViewer = false;
                                    _this.getPlayerHouse(seatId).setIsViewer(false);
                                }
                            }
                        }
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
                    {
                        App_1.default.instance.showLoading(false);
                        //  cc.log("MauBinh NOTIFY_USER_GET_JACKPOT");
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.UPDATE_MATCH:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedUpdateMatch(data);
                        //  cc.log("MauBinh ReceivedUpdateMatch res : ", JSON.stringify(res));
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
                        //  cc.log("MauBinh setupMatch configPlayer : ", configPlayer);
                        // theo Pos khong phai SeatId
                        for (var index = 0; index < hasInfo.length; index++) {
                            var pos = configPlayer[index]["playerPos"];
                            if (hasInfo[pos]) {
                                // setGold se inactive isViewer nen dat no len dau de ben duoi config lai
                                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                                if (infos[pos]["status"] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == MauBinh_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                                    configPlayer[index]["isViewer"] = false;
                                    _this.getPlayerHouse(index).setIsViewer(false);
                                }
                                else {
                                    configPlayer[index]["isViewer"] = true;
                                    _this.getPlayerHouse(index).setIsViewer(true);
                                    _this.getPlayerHouse(index).playFxViewer();
                                }
                                _this.setupSeatPlayer(index, infos[pos]);
                            }
                            else {
                                configPlayer[index]["playerId"] = -1;
                                configPlayer[index]["isViewer"] = true;
                            }
                        }
                        //  cc.log("MauBinh setupMatch configPlayer : ", configPlayer);
                    }
                    break;
                case MauBinh_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new MauBinh_Cmd_1.default.ReceivedChatRoom(data);
                        //  cc.log("MauBinh CHAT_ROOM res : ", JSON.stringify(res));
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
                            var seatId_8 = _this.findPlayerSeatByPos(chair);
                            if (seatId_8 != -1) {
                                _this.getPlayerHouse(seatId_8).showChatEmotion(content);
                            }
                        }
                        else {
                            // Chat Msg
                            var seatId_9 = _this.findPlayerSeatByPos(chair);
                            if (seatId_9 != -1) {
                                _this.getPlayerHouse(seatId_9).showChatMsg(content);
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
    MauBinhController.prototype.actionLeaveRoom = function () {
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.CmdSendRequestLeaveGame());
    };
    MauBinhController.prototype.actionHoldRoom = function () {
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.CmdSendHoldRoom());
    };
    MauBinhController.prototype.actionBaoBinh = function () {
        this.btnSoChi.active = false;
        this.btnCombining.active = true;
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendBaoBinh());
    };
    MauBinhController.prototype.actionBinhSoChi = function () {
        var arrChiCuoi = [this.currentCard[0], this.currentCard[1], this.currentCard[2]];
        var arrChiGiua = [this.currentCard[3], this.currentCard[4], this.currentCard[5], this.currentCard[6], this.currentCard[7]];
        var arrChiDau = [this.currentCard[8], this.currentCard[9], this.currentCard[10], this.currentCard[11], this.currentCard[12]];
        //  cc.log("Check currentCard ============================== ");
        this.logCard(this.currentCard);
        this.logCard(arrChiCuoi);
        this.logCard(arrChiGiua);
        this.logCard(arrChiDau);
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendBinhSoChi(arrChiDau, arrChiGiua, arrChiCuoi));
    };
    MauBinhController.prototype.actionAutoBinhSoChi = function () {
        return; // Open will error -> Me auto leave room 
        var arrChiCuoi = [this.currentCard[0], this.currentCard[1], this.currentCard[2]];
        var arrChiGiua = [this.currentCard[3], this.currentCard[4], this.currentCard[5], this.currentCard[6], this.currentCard[7]];
        var arrChiDau = [this.currentCard[8], this.currentCard[9], this.currentCard[10], this.currentCard[11], this.currentCard[12]];
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendAutoBinhSoChi(arrChiDau, arrChiGiua, arrChiCuoi));
    };
    MauBinhController.prototype.actionXepLai = function () {
        this.btnSoChi.active = true;
        this.btnCombining.active = false;
        MauBinh_NetworkClient_1.default.getInstance().send(new MauBinh_Cmd_1.default.SendXepLai());
    };
    MauBinhController.prototype.cardSelect = function (card_info, card_pos, card_Id) {
        //  cc.log("cardSelect card_info : ", card_info.card);
        //  cc.log("cardSelect card_pos  : ", card_pos);
        //  cc.log("cardSelect card_id  : ", card_Id);
        this.cardMove.active = true;
        this.cardMove.setPosition(card_pos.x, card_pos.y - 95);
        var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(card_info.card);
        this.cardMove.children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCards[spriteCardId];
        this.cardMoveId = card_Id;
        this.cardMoveValue = card_info.card;
        this.getPlayerHouse(0).resetResultGame();
        for (var a = 0; a < 13; a++) {
            this.meCards.children[a].getComponent("MauBinh.MeCard").setCardShadow(false);
            this.getPlayerHouse(0).shadowCard(a, false);
        }
    };
    MauBinhController.prototype.showMoveTarget = function (targetName) {
        //  cc.log("showMoveTarget : ", targetName);
        for (var index = 0; index < 13; index++) {
            var cardTarget = this.meCards.children[index].getComponent("MauBinh.MeCard");
            if (index == targetName) {
                cardTarget.setCardShadow(false);
                cardTarget.setCardFocus(true);
            }
            else {
                cardTarget.setCardShadow(true);
                cardTarget.setCardFocus(false);
            }
        }
    };
    MauBinhController.prototype.completeMoveCard = function (targetName) {
        /* Id value - Node
        0,1,2         chiCuoi
        3,4,5,6,7     chiGiua
        8,9,10,11,12     chiDau
        */
        //  cc.log("completeMoveCard from id   : ", this.cardMoveId);
        //  cc.log("completeMoveCard target id : ", targetName);
        //  cc.log("completeMoveCard from info   : ", this.currentCard[this.cardMoveId]);
        //  cc.log("completeMoveCard target info : ", this.currentCard[targetName]);
        var cardFrom = this.currentCard[this.cardMoveId];
        var cardTo = this.currentCard[targetName];
        //  cc.log("completeMoveCard cardFrom 1 : ", cardFrom);
        //  cc.log("completeMoveCard cardTo   1 : ", cardTo);
        this.currentCard[this.cardMoveId] = cardTo;
        this.currentCard[targetName] = cardFrom;
        //  cc.log("completeMoveCard cardFrom 2 : ", this.currentCard[this.cardMoveId]);
        //  cc.log("completeMoveCard cardTo 2   : ", this.currentCard[targetName]);
        //  cc.log("completeMoveCard currentCard : ", this.currentCard);
        for (var index = 0; index < 13; index++) {
            var card_id = this.currentCard[index]; // {"card":4,"face":2}
            var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(card_id);
            var src = this.spriteCards[spriteCardId];
            var card_Open = this.meCards.children[index];
            card_Open.active = true;
            card_Open.getComponent("MauBinh.MeCard").updateCard(card_id, src);
        }
        this.cardMoveValue = "";
        this.cardMoveId = -1;
        var x = new MauBinh_DetectPlayerCards_1.default();
        x.initCard(this.currentCard);
        var result = x.getPlayerCardsInfo(this.isTinhAce); // isTinhAce
        //  cc.log("completeMoveCard result : ", result);
        var isGood = result.cardType == MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG ? false : true;
        var typeName = this.getBinhName(result.cardType);
        this.getPlayerHouse(0).resetResultGame();
        if (result.cardType != MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG) {
            this.getPlayerHouse(0).playFxResultGeneral(0, isGood, typeName, 0);
        }
        var arrChiCuoi = [this.currentCard[0], this.currentCard[1], this.currentCard[2]];
        var arrChiGiua = [this.currentCard[3], this.currentCard[4], this.currentCard[5], this.currentCard[6], this.currentCard[7]];
        var arrChiDau = [this.currentCard[8], this.currentCard[9], this.currentCard[10], this.currentCard[11], this.currentCard[12]];
        //  cc.log("Check currentCard =======================================");
        this.logCard(this.currentCard);
        this.logCard(arrChiCuoi);
        this.logCard(arrChiGiua);
        this.logCard(arrChiDau);
        this.highLightCards(3, result.chiCuoi, arrChiCuoi);
        this.highLightCards(2, result.chiGiua, arrChiGiua);
        this.highLightCards(1, result.chiDau, arrChiDau);
        this.tableCurrentChi.active = true;
        this.tableCurrentChi.children[1].getComponent(cc.Label).string = "1. " + this.getChiName(result.chiDau);
        this.tableCurrentChi.children[2].getComponent(cc.Label).string = "2. " + this.getChiName(result.chiGiua);
        this.tableCurrentChi.children[3].getComponent(cc.Label).string = "3. " + this.getChiName(result.chiCuoi);
        this.actionAutoBinhSoChi();
    };
    MauBinhController.prototype.highLightCards = function (chiId, groupKind, cardList) {
        var start = -1;
        var end = -1;
        if (chiId == 3) {
            start = 0;
            end = 3;
        }
        else if (chiId == 2) {
            start = 3;
            end = 8;
        }
        else {
            start = 8;
            end = 13;
        }
        for (var a = start; a < end; a++)
            this.getPlayerHouse(0).shadowCard(a, true);
        switch (groupKind) {
            case MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH:
            case MauBinh_Cmd_1.default.Code.GROUP_CU_LU:
            case MauBinh_Cmd_1.default.Code.GROUP_THUNG:
            case MauBinh_Cmd_1.default.Code.GROUP_SANH:
                for (var a = start; a < end; a++)
                    this.getPlayerHouse(0).shadowCard(a, false);
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_TU_QUY:
            case MauBinh_Cmd_1.default.Code.GROUP_SAM_CO:
            case MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI:
            case MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU:
                for (var a_1 = 0; a_1 < cardList.length - 1; a_1++) {
                    for (var b = a_1 + 1; b < cardList.length; b++) {
                        if (MauBinh_CardUtil_1.default.getNumber(cardList[a_1]) == MauBinh_CardUtil_1.default.getNumber(cardList[b])) {
                            this.getPlayerHouse(0).shadowCard(a_1 + start, false);
                            this.getPlayerHouse(0).shadowCard(b + start, false);
                        }
                    }
                }
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_THU:
                for (var a_2 = 0; a_2 < cardList.length - 1; a_2++) {
                    for (var b = a_2 + 1; b < cardList.length; b++) {
                        if (MauBinh_CardUtil_1.default.getNumber(cardList[a_2]) == MauBinh_CardUtil_1.default.getNumber(cardList[b])) {
                            this.getPlayerHouse(0).shadowCard(a_2 + start, false);
                            this.getPlayerHouse(0).shadowCard(b + start, false);
                        }
                    }
                }
                // for (a = 0; a < cardList.length; a++) {
                //     cardList[a] != cardList[0] && cardList[a] != cardList[1] || this.getPlayerHouse(0).shadowCard(a + start, false);
                // }
                break;
            default:
                break;
        }
    };
    // State
    MauBinhController.prototype.initConfigPlayer = function () {
        configPlayer = [];
        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
            configPlayer.push({
                seatId: index,
                playerId: -1,
                playerPos: -1,
                isViewer: true
            });
        }
        //  cc.log("MauBinh configPlayer : ", configPlayer);
    };
    MauBinhController.prototype.resetPlayersPlaying = function () {
        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).resetMatchHistory(index);
        }
    };
    // handle Game Players
    MauBinhController.prototype.setupSeatPlayer = function (seatId, playerInfo) {
        //  cc.log("MauBinh setupSeatPlayer playerInfo : ", playerInfo);
        configPlayer[seatId].playerId = playerInfo.nickName;
        this.getPlayerHouse(seatId).setAvatar(playerInfo.avatar);
        this.getPlayerHouse(seatId).setName(playerInfo.nickName);
        this.getPlayerHouse(seatId).setGold(playerInfo.money);
    };
    MauBinhController.prototype.findPlayerSeatByUid = function (uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerId === uid) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    MauBinhController.prototype.findPlayerPosBySeat = function (seat) {
        return configPlayer[seat].playerPos;
    };
    MauBinhController.prototype.findPlayerSeatByPos = function (pos) {
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
    MauBinhController.prototype.getPlayerHouse = function (seatId) {
        return this.groupPlayers.children[seatId].getComponent("MauBinh.Player");
    };
    MauBinhController.prototype.getNumPlayers = function () {
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
    MauBinhController.prototype.getBinhName = function (maubinhType) {
        var name = "";
        switch (maubinhType) {
            case MauBinh_Cmd_1.default.Code.TYPE_SANH_RONG:
                name = "Sảnh Rồng";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_MUOI_BA_CAY_DONG_MAU:
                name = "Mười Ba Cây Đồng Màu";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_MUOI_HAI_CAY_DONG_MAU:
                name = "Mười Hai Cây Đồng Màu";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_THUNG:
                name = "Ba Cái Thùng";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_BA_CAI_SANH:
                name = "Ba Cái Sảnh";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_LUC_PHE_BON:
                name = "Lục Phế Bôn";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG:
                name = "Binh Thường";
                break;
            case MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG:
                name = "Binh Lủng";
                break;
            default:
                break;
        }
        return name;
    };
    MauBinhController.prototype.needSoChi = function (playerResultList) {
        var a = 0;
        for (var b = 0; b < playerResultList.length; b++) {
            if (playerResultList[b].maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG) {
                a++;
            }
        }
        return 2 <= a;
    };
    MauBinhController.prototype.needShowMoneyWhenSoChi = function (playerResultList) {
        for (var a = 0; a < playerResultList.length; a++) {
            var b = playerResultList[a];
            if (0 == b.chairIndex && b.maubinhType != MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG)
                return !1;
        }
        return !0;
    };
    MauBinhController.prototype.needBatSap = function (playerResultList) {
        for (var a = 0; a < playerResultList.length; a++)
            if (0 != playerResultList[a].moneySap)
                return !0;
        return !1;
    };
    MauBinhController.prototype.soChi = function (chiId, playerResultList) {
        //  cc.log("MauBinh soChi id : ", chiId);
        var _this = this;
        // hide result chi 1 - 3 : not hide general
        for (var index = 0; index < MauBinh_Cmd_1.default.Code.MAX_PLAYER; index++) {
            this.getPlayerHouse(index).resetResultChi(1);
            this.getPlayerHouse(index).resetResultChi(2);
            this.getPlayerHouse(index).resetResultChi(3);
        }
        var isNeedSoChi = this.needSoChi(playerResultList);
        var isNeedShowMoneyWhenSoChi = this.needShowMoneyWhenSoChi(playerResultList);
        var _loop_1 = function (index) {
            var result = playerResultList[index];
            var chair = result['chairIndex'];
            var totalCards = [
                result.chi3[0], result.chi3[1], result.chi3[2],
                result.chi2[0], result.chi2[1], result.chi2[2], result.chi2[3], result.chi2[4],
                result.chi1[0], result.chi1[1], result.chi1[2], result.chi1[3], result.chi1[4]
            ];
            var x = new MauBinh_DetectPlayerCards_1.default();
            x.initCard(totalCards);
            var playerCardInfo = x.getPlayerCardsInfo(this_1.isTinhAce); // isTinhAce
            //  cc.log("soChi playerCardInfo : ", playerCardInfo);
            var seatId = this_1.findPlayerSeatByPos(chair);
            if (seatId != -1) {
                //  cc.log("soChi seatId : ", seatId);
                //  cc.log("soChi maubinhType : ", result.maubinhType);
                if (result.maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG && isNeedSoChi) {
                    // So Chi -> Show card tung chi 1
                    //  cc.log("soChi case 1");
                    var spriteId = -1;
                    var goldChi = result.moneyInChi[chiId - 1];
                    if (chiId == 1) {
                        spriteId = playerCardInfo.chiDau;
                    }
                    else if (chiId == 2) {
                        spriteId = playerCardInfo.chiGiua;
                    }
                    else {
                        spriteId = playerCardInfo.chiCuoi;
                    }
                    this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[spriteId]);
                    if (isNeedShowMoneyWhenSoChi) {
                        this_1.getPlayerHouse(seatId).playFxGoldSoChi(goldChi);
                    }
                    // Show cards chi
                    if (chiId == 3) {
                        for (var a = 0; a < 3; a++) {
                            var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(result.chi3[a]);
                            this_1.getPlayerHouse(seatId).prepareCardReal(a);
                            this_1.getPlayerHouse(seatId).transformToCardReal(a, this_1.spriteCards[spriteCardId], seatId);
                        }
                        setTimeout(function () {
                            var totalGoldChi = result.moneyInChi[0] + result.moneyInChi[1] + result.moneyInChi[2];
                            if (totalGoldChi >= 0) {
                                _this.getPlayerHouse(seatId).playFxWinSoChi(totalGoldChi);
                            }
                            else {
                                _this.getPlayerHouse(seatId).playFxLoseSoChi(totalGoldChi);
                            }
                        }, 2500);
                    }
                    else if (chiId == 2) {
                        for (var a = 0; a < 5; a++) {
                            var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(result.chi2[a]);
                            this_1.getPlayerHouse(seatId).prepareCardReal(a + 3);
                            this_1.getPlayerHouse(seatId).transformToCardReal(a + 3, this_1.spriteCards[spriteCardId], seatId);
                        }
                    }
                    else {
                        for (var a = 0; a < 5; a++) {
                            var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(result.chi1[a]);
                            this_1.getPlayerHouse(seatId).prepareCardReal(a + 8);
                            this_1.getPlayerHouse(seatId).transformToCardReal(a + 8, this_1.spriteCards[spriteCardId], seatId);
                        }
                    }
                }
                else {
                    // Khong can So chi -> Show tat card ra
                    //  cc.log("soChi case 2");
                    if (chiId == 1) {
                        //  // show All cards
                        //  cc.log("soChi case 2 chiId == 1");
                        if (result.maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_THUONG) {
                            // show Binh Type
                            //  cc.log("soChi case 2 chiId == 1 = TYPE_BINH_THUONG");
                            if (playerCardInfo.chiDau < 2) {
                                this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[playerCardInfo.chiDau]);
                            }
                            if (playerCardInfo.chiGiua < 2) {
                                this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[playerCardInfo.chiGiua]);
                            }
                            if (playerCardInfo.chiGiua == MauBinh_Cmd_1.default.Code.GROUP_SAM_CO) {
                                this_1.getPlayerHouse(seatId).playFxCompareChi(chiId, this_1.spriteGroupCard[playerCardInfo.chiCuoi]);
                            }
                        }
                        else {
                            var isGood = result.maubinhType == MauBinh_Cmd_1.default.Code.TYPE_BINH_LUNG ? false : true;
                            var typeName = this_1.getBinhName(result.maubinhType);
                            this_1.getPlayerHouse(seatId).resetResultGame();
                            this_1.getPlayerHouse(seatId).playFxResultGeneral(seatId, isGood, typeName, 1);
                        }
                        var totalCards_1 = [
                            result.chi3[0], result.chi3[1], result.chi3[2],
                            result.chi2[0], result.chi2[1], result.chi2[2], result.chi2[3], result.chi2[4],
                            result.chi1[0], result.chi1[1], result.chi1[2], result.chi1[3], result.chi1[4]
                        ];
                        for (var a_3 = 0; a_3 < 13; a_3++) {
                            var spriteCardId = MauBinh_CardUtil_1.default.getNormalId(totalCards_1[a_3]);
                            if (seatId == 0) {
                                this_1.meCards.children[a_3].children[1].getComponent(cc.Sprite).spriteFrame = this_1.spriteCards[spriteCardId];
                            }
                            else {
                                this_1.getPlayerHouse(seatId).prepareToTransform();
                                this_1.getPlayerHouse(seatId).transformToCardReal(a_3, this_1.spriteCards[spriteCardId], seatId);
                            }
                        }
                    }
                }
            }
            if (seatId == 0) {
                for (var a_4 = 0; a_4 < 13; a_4++) {
                    this_1.getPlayerHouse(0).shadowCard(a_4, false);
                    this_1.meCards.children[a_4].getComponent("MauBinh.MeCard").setCardShadow(false);
                }
            }
        };
        var this_1 = this;
        //  cc.log("MauBinh soChi isNeedSoChi : ", isNeedSoChi);
        //  cc.log("MauBinh soChi isNeedShowMoneyWhenSoChi : ", isNeedShowMoneyWhenSoChi);
        for (var index = 0; index < playerResultList.length; index++) {
            _loop_1(index);
        }
        if (isNeedSoChi) {
            this.node.stopAllActions();
            this.node.runAction(cc.sequence(cc.delayTime(2.5), //3s
            cc.callFunc(function () {
                if (chiId < 3) {
                    //  cc.log("soChi showGoldResult recall soChi");
                    _this.soChi(chiId + 1, playerResultList);
                }
                else {
                    //  cc.log("soChi showGoldResult no recall soChi");
                    _this.showGoldResult(playerResultList, 2000);
                    _this.batSap(playerResultList);
                }
            })));
        }
        else {
            // show Gold
            this.showGoldResult(playerResultList, 1000);
            this.batSap(playerResultList);
        }
    };
    MauBinhController.prototype.showGoldResult = function (playerResultList, delayTime) {
        var _this = this;
        setTimeout(function () {
            for (var index = 0; index < playerResultList.length; index++) {
                var result = playerResultList[index];
                var chair = result['chairIndex'];
                var seatId = _this.findPlayerSeatByPos(chair);
                if (seatId != -1) {
                    _this.getPlayerHouse(seatId).resetResultGame();
                    if (result.moneyCommon >= 0) {
                        // Win
                        _this.getPlayerHouse(seatId).fxWin({
                            moneyChange: result.moneyCommon,
                            money: result.currentMoney == 0 ? -1 : result.currentMoney
                        });
                    }
                    else {
                        // Lose
                        _this.getPlayerHouse(seatId).fxLose({
                            moneyChange: result.moneyCommon,
                            money: result.currentMoney == 0 ? -1 : result.currentMoney
                        });
                    }
                }
            }
        }, delayTime);
    };
    MauBinhController.prototype.batSap = function (playerResultList) {
        var _this = this;
        //  cc.log("soChi batSap");
        if (this.needBatSap(playerResultList)) {
            var countWin = 0;
            var countLose = 0;
            for (var index = 0; index < playerResultList.length; index++) {
                var seatId = this.findPlayerSeatByPos(playerResultList[index].chairIndex);
                if (seatId != -1 && seatId != 0) {
                    if (playerResultList[index].moneySap > 0) {
                        countLose += 1;
                    }
                    else {
                        if (playerResultList[index].moneySap < 0) {
                            countWin += 1;
                        }
                    }
                }
            }
            this.fxSoChiTotal.active = false;
            for (var index = 0; index < playerResultList.length; index++) {
                var seatId = this.findPlayerSeatByPos(playerResultList[index].chairIndex);
                if (seatId == 0) {
                    if (countLose > 0) {
                        this.fxSoChiTotal.active = true;
                        if (countLose == 3) {
                            // bi_sap_lang
                            this.fxSoChiTotal.getComponent(cc.Sprite).spriteFrame = this.spriteSoChiTotal[1];
                        }
                        else {
                            // sap_3_chi
                            this.fxSoChiTotal.getComponent(cc.Sprite).spriteFrame = this.spriteSoChiTotal[2];
                        }
                        this.fxSoChiTotal.runAction(cc.sequence(cc.scaleTo(0.25, 1.1, 1.1), cc.scaleTo(0.25, 1, 1), cc.scaleTo(0.25, 1.1, 1.1), cc.scaleTo(0.25, 1, 1)));
                        setTimeout(function () {
                            _this.fxSoChiTotal.stopAllActions();
                            _this.fxSoChiTotal.active = false;
                        }, 2000);
                    }
                    if (countWin > 0) {
                        this.fxSoChiTotal.active = true;
                        if (countWin == 3) {
                            // bat_sap_lang
                            this.fxSoChiTotal.getComponent(cc.Sprite).spriteFrame = this.spriteSoChiTotal[1];
                            this.fxSoChiTotal.runAction(cc.sequence(cc.scaleTo(0.25, 1.1, 1.1), cc.scaleTo(0.25, 1, 1), cc.scaleTo(0.25, 1.1, 1.1), cc.scaleTo(0.25, 1, 1)));
                            setTimeout(function () {
                                _this.fxSoChiTotal.stopAllActions();
                                _this.fxSoChiTotal.active = false;
                            }, 2000);
                        }
                        else {
                        }
                    }
                }
                else {
                    if (playerResultList[index].moneySap < 0) {
                        // sap_3_chi
                        this.getPlayerHouse(seatId).playFxSoChiTotal(this.spriteSoChiTotal[2]);
                    }
                }
            }
        }
        else {
            this.soAt();
        }
    };
    MauBinhController.prototype.soAt = function () {
        if (true) {
            // so At
        }
        else {
            // Tinh tien chung
        }
    };
    MauBinhController.prototype.getChiName = function (id) {
        var name = "";
        switch (id) {
            case MauBinh_Cmd_1.default.Code.GROUP_THUNG_PHA_SANH:
                name = "Thùng Phá Sảnh";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_TU_QUY:
                name = "Tứ Quý";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_CU_LU:
                name = "Cù Lũ";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_THUNG:
                name = "Thùng";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_SANH:
                name = "Sảnh";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_SAM_CO:
                name = "Sám Cô";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_THU:
                name = "Thú";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_MOT_DOI:
                name = "Một Đôi";
                break;
            case MauBinh_Cmd_1.default.Code.GROUP_MAU_THAU:
                name = "Mậu Thầu";
                break;
            default:
                break;
        }
        return name;
    };
    MauBinhController.prototype.logCard = function (arrCard) {
        var result = "";
        for (var index = 0; index < arrCard.length; index++) {
            var num = Math.floor(arrCard[index] / 4) + 2;
            var face = arrCard[index] % 4;
            switch (num) {
                case 14:
                    result += "A";
                    break;
                case 13:
                    result += "K";
                    break;
                case 12:
                    result += "Q";
                    break;
                case 11:
                    result += "J";
                    break;
                default:
                    result += num;
                    break;
            }
            switch (face) {
                case 0:
                    result += "♠ "; //B
                    break;
                case 1:
                    result += "♣ "; //T
                    break;
                case 2:
                    result += "♦ "; //R
                    break;
                case 3:
                    result += "♥ "; //C
                    break;
                default:
                    break;
            }
        }
        //  cc.log("Check currentCard Visual : ", result);
    };
    MauBinhController.prototype.update = function (dt) { };
    var MauBinhController_1;
    MauBinhController.instance = null;
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "UI_ChooseRoom", void 0);
    __decorate([
        property(cc.Label)
    ], MauBinhController.prototype, "labelNickName", void 0);
    __decorate([
        property(cc.Label)
    ], MauBinhController.prototype, "labelCoin", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "contentListRooms", void 0);
    __decorate([
        property(cc.Prefab)
    ], MauBinhController.prototype, "prefabItemRoom", void 0);
    __decorate([
        property(cc.ScrollView)
    ], MauBinhController.prototype, "scrollListRoom", void 0);
    __decorate([
        property(cc.EditBox)
    ], MauBinhController.prototype, "edtFindRoom", void 0);
    __decorate([
        property(cc.Toggle)
    ], MauBinhController.prototype, "btnHideRoomFull", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "UI_Playing", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "meCards", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "groupPlayers", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MauBinhController.prototype, "spriteCards", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MauBinhController.prototype, "spriteCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "cardsDeal", void 0);
    __decorate([
        property(cc.Button)
    ], MauBinhController.prototype, "btnLeaveRoom", void 0);
    __decorate([
        property(cc.Label)
    ], MauBinhController.prototype, "labelRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], MauBinhController.prototype, "labelRoomBet", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "actionBetting", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "cardMove", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "suggestTarget", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "btnSoChi", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "btnCombining", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "tableCurrentChi", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "notifyTimeStart", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "notifyTimeEnd", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "notifyTimeBet", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "fxSoChiTotal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MauBinhController.prototype, "spriteSoChiTotal", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.EditBox)
    ], MauBinhController.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "popupNodity", void 0);
    __decorate([
        property(cc.Label)
    ], MauBinhController.prototype, "labelNotifyContent", void 0);
    __decorate([
        property(cc.Node)
    ], MauBinhController.prototype, "popupGuide", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], MauBinhController.prototype, "spriteGroupCard", void 0);
    MauBinhController = MauBinhController_1 = __decorate([
        ccclass
    ], MauBinhController);
    return MauBinhController;
}(cc.Component));
exports.default = MauBinhController;

cc._RF.pop();