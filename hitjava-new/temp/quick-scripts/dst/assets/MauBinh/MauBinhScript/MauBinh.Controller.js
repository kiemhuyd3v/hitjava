
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFEQUFnRDtBQUNoRCw2Q0FBZ0M7QUFFaEMsaUVBQTJEO0FBQzNELHVEQUEwQztBQUUxQyx5RUFBNEQ7QUFDNUQsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUsNkZBQWdGO0FBQ2hGLG1GQUE2RTtBQUM3RSxJQUFJLFlBQVksR0FBRztBQUNmLElBQUk7QUFDSixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsSUFBSTtDQUNQLENBQUM7QUFFRixpREFBaUQ7QUFDakQsSUFBSSxnQkFBZ0IsR0FBRztJQUNuQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDWixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNmLENBQUE7QUFFSyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQXUrREM7UUFuK0RHLFdBQVc7UUFFWCxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFrQixJQUFJLENBQUM7UUFFckMsaUJBQVcsR0FBZSxJQUFJLENBQUM7UUFFL0IscUJBQWUsR0FBYyxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBRyxLQUFLLENBQUM7UUFFOUIsYUFBYTtRQUViLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBRW5DLG9CQUFjLEdBQW1CLElBQUksQ0FBQztRQUV0QyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRS9CLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGtCQUFZLEdBQWEsSUFBSSxDQUFDO1FBRTlCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUVoQyxTQUFTO1FBRVQscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isc0JBQWdCLEdBQXFCLEVBQUUsQ0FBQztRQUV4QyxVQUFVO1FBRVYsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUVoQyxRQUFRO1FBRVIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsd0JBQWtCLEdBQWEsSUFBSSxDQUFDO1FBR3BDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUcvQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFakIsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFFZixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixhQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLHNCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQix3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFLOUIsZUFBUyxHQUFHLElBQUksQ0FBQzs7SUF5M0RyQixDQUFDOzBCQXYrRG9CLGlCQUFpQjtJQWdIbEMsd0JBQXdCO0lBRXhCLGtDQUFNLEdBQU47UUFDSSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWxDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxRCwrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDekMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqRCwrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBVSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsaUJBQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6SCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCwrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDMUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsK0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELGtCQUFrQjtJQUNsQixvQ0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULGlEQUFpRDtRQUNqRCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQiwrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsK0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksZ0VBQWdFO1FBQ2hFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxFQUFFO29CQUNuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3hEO2FBQ0o7U0FDSjthQUFNO1lBQ0gsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN2RDtTQUNKO0lBQ0wsQ0FBQztJQUVELHdDQUFZLEdBQVo7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQ2hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN0RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUN0RixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUN2RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7aUJBQ3hEO2FBQ0o7U0FDSjthQUFNO1lBQ0gsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN2RDtTQUNKO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGlCQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUNuRCwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzNELEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEMsQ0FBQztJQUVELHNDQUFVLEdBQVY7UUFDSSxpQ0FBaUM7UUFDakMsd0VBQXdFO0lBQzVFLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksaUNBQWlDO1FBQ2pDLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN0RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3RGLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pELGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDSjtRQUVELG1FQUFtRTtRQUVuRSxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQUksVUFBVSxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxpRUFBaUU7WUFDakUsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3RHLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2pHLDRFQUE0RTtnQkFDNUUsNkVBQTZFO2dCQUM3RSx5RkFBeUY7Z0JBQ3pGLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN2RSxVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQyxrRUFBa0U7aUJBQ3JFO2FBQ0o7WUFDRCwrREFBK0Q7WUFDL0QsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RixrRkFBa0Y7WUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNILGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztJQUVELE9BQU87SUFDUCxzQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNsQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3pCLENBQUM7SUFDTixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNsQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzFCLENBQUM7SUFDTixDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEtBQUssRUFBRSxFQUFFO1FBQ2pCLDRDQUE0QztRQUM1QywrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUMsK0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELDJDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkMsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDSSwrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsVUFBVTtJQUNWLHlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFpQztRQUN4QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLCtDQUErQztRQUMvQyxnREFBZ0Q7UUFDaEQsZ0RBQWdEO1FBSWhELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDcEMsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLG9CQUFvQixHQUFHLE1BQU0sQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFN0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUUvQixJQUFJLFNBQVMsSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDckMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDbEQsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDcEMscUVBQXFFO1FBRXJFLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBRXpCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3JELElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsS0FBSyxFQUFFLEVBQUU7Z0JBQ3BDLFVBQVUsSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUIsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUM3QztTQUNKO1FBQ0QsZ0RBQWdEO1FBRWhELHFCQUFxQjtRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsZ0ZBQWdGO1FBQ2hGLDBGQUEwRjtRQUMxRixrRkFBa0Y7UUFDbEYsc0ZBQXNGO1FBRXRGLDRDQUE0QztRQUM1QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN0RCxJQUFJLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXZFLHNEQUFzRDtZQUN0RCx1RkFBdUY7WUFDdkYsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFcEQsd0RBQXdEO1lBQ3hELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLGtDQUFrQztnQkFDbEMsNEZBQTRGO2dCQUM1RixJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUkscUJBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQzFILFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO3dCQUNiLElBQUksU0FBUyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDckMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNwRDtxQkFDSjtpQkFDSjtxQkFBTTtvQkFDSCxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQzlDO2dCQUVELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNILDZDQUE2QztnQkFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2hELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3ZDO1NBQ0o7UUFDRCwrREFBK0Q7SUFDbkUsQ0FBQztJQUdELGFBQWE7SUFDYixrREFBc0IsR0FBdEIsVUFBdUIsUUFBUTtRQUEvQixpQkFhQztRQVpHLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ2xDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDdkM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBRUQsb0RBQXdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNqRyxDQUFDO0lBRUQsV0FBVztJQUNYLDZDQUFpQixHQUFqQixVQUFrQixRQUFRO1FBQTFCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUM3QixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLEtBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JDO1FBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELCtDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDaEcsQ0FBQztJQUVELFdBQVc7SUFDWCxpREFBcUIsR0FBckIsVUFBc0IsUUFBUTtRQUE5QixpQkFlQztRQWRHLGtFQUFrRTtRQUNsRSxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDakMsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUN0QyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixtREFBbUQ7UUFDbkQsb0hBQW9IO1FBQ3BILElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUM1RSxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLFFBQVE7UUFDbEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixLQUFLLElBQUksMEJBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWixLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsY0FBYztJQUNkLHlDQUFhLEdBQWI7UUFBQSxpQkE0MUJDO1FBMzFCRywrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBQyxJQUFJO1lBQ2hELElBQUksUUFBUSxHQUFHLElBQUksMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxRQUFRLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUNmLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ3RCLCtCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO29CQUNwRSxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztvQkFDbkI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDMUMsNERBQTREO3dCQUU1RCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQy9CLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDdkMsSUFBSSxhQUFhLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUN6QyxJQUFJLGNBQWMsR0FBRyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztxQkFDOUM7b0JBQ0QsTUFBTTtnQkFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ3RCO3dCQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxtQ0FBbUM7cUJBQ3RDO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxhQUFhO29CQUN2Qjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsb0NBQW9DO3FCQUN2QztvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCO29CQUM1Qjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMseUNBQXlDO3FCQUM1QztvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO29CQUMxQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsdUNBQXVDO3FCQUMxQztvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztvQkFDeEI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0MsaUVBQWlFO3dCQUNqRSxJQUFJLEdBQUcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLG1CQUFtQixDQUFDO3dCQUN4RCxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTs0QkFDcEIsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQztnQ0FDaEMsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsR0FBRyxHQUFHLHVEQUF1RCxDQUFDO2dDQUM5RCxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixHQUFHLEdBQUcsdUNBQXVDLENBQUM7Z0NBQzlDLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyx1REFBdUQsQ0FBQztnQ0FDOUQsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsR0FBRyxHQUFHLDJDQUEyQyxDQUFDO2dDQUNsRCxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixHQUFHLEdBQUcsbUJBQW1CLENBQUM7Z0NBQzFCLE1BQU07NEJBQ1YsS0FBSyxDQUFDO2dDQUNGLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQztnQ0FDbkMsTUFBTTs0QkFDVixLQUFLLENBQUM7Z0NBQ0YsR0FBRyxHQUFHLGlDQUFpQyxDQUFDO2dDQUN4QyxNQUFNOzRCQUNWLEtBQUssQ0FBQztnQ0FDRixHQUFHLEdBQUcseUJBQXlCLENBQUM7Z0NBQ2hDLE1BQU07NEJBQ1YsS0FBSyxFQUFFO2dDQUNILEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQTtnQ0FDM0MsTUFBTTt5QkFDYjt3QkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pDO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxhQUFhO29CQUN2Qjt3QkFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVDLGdCQUFnQjt3QkFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN0QyxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzs0QkFDL0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDekQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDeEM7d0JBQ0QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3hDO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0I7b0JBQzlCO3dCQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQywyQ0FBMkM7cUJBQzlDO29CQUNELE1BQU07Z0JBRVYsaUVBQWlFO2dCQUVqRSxLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7b0JBQ3JCO3dCQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzFDLG9FQUFvRTt3QkFFcEUsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixJQUFJLFFBQU0sR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdDLElBQUksUUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFOzRCQUNkLElBQUksUUFBTSxJQUFJLENBQUMsRUFBRTtnQ0FDYixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0NBQ2hDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQ0FDN0IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQzNDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0NBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lDQUN6RTs2QkFDSjtpQ0FBTTtnQ0FDSCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDOzZCQUMvQzt5QkFDSjtxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztvQkFDakI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3ZDLGlFQUFpRTt3QkFFakUsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN6QixJQUFJLFFBQU0sR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzdDLElBQUksUUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFOzRCQUNkLElBQUksUUFBTSxJQUFJLENBQUMsRUFBRTtnQ0FDYixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0NBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDNUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0NBQ3JDLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lDQUM1RTs2QkFDSjtpQ0FBTTtnQ0FDSCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDOzZCQUMvQzt5QkFDSjtxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtvQkFDbEI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3hDLGtFQUFrRTt3QkFFbEUsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUV0QixLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzt3QkFDckMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUVsQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDakMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUVwQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFOzRCQUNyQyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDdEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7eUJBQzVFO3dCQUVELElBQUk7d0JBQ0osNEJBQTRCO3dCQUM1QixZQUFZO3dCQUNaLCtCQUErQjt3QkFDL0IsZ0NBQWdDO3dCQUNoQyw0Q0FBNEM7d0JBQzVDLDRDQUE0Qzt3QkFDNUMsbUNBQW1DO3dCQUNuQyx1Q0FBdUM7d0JBQ3ZDLDRCQUE0Qjt3QkFDNUIsc0NBQXNDO3dCQUN0Qyw2QkFBNkI7d0JBQzdCLHVDQUF1Qzt3QkFDdkMsYUFBYTt3QkFDYixZQUFZO3dCQUNaLCtCQUErQjt3QkFDL0IsZ0NBQWdDO3dCQUNoQyw0Q0FBNEM7d0JBQzVDLDRDQUE0Qzt3QkFDNUMsbUNBQW1DO3dCQUNuQyx1Q0FBdUM7d0JBQ3ZDLDRCQUE0Qjt3QkFDNUIscUNBQXFDO3dCQUNyQyw2QkFBNkI7d0JBQzdCLGdDQUFnQzt3QkFDaEMsWUFBWTt3QkFDWixTQUFTO3dCQUNULHVCQUF1Qjt3QkFDdkIsSUFBSTt3QkFFSixJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dCQUMvQyxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBRXJDLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO3dCQUN0QyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBRWxDLGdCQUFnQjt3QkFDaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs0QkFDMUQsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3JDLElBQUksUUFBTSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3pELElBQUksUUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLFFBQU0sSUFBSSxDQUFDLEVBQUU7Z0NBQzdCLElBQUksVUFBVSxHQUFHO29DQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQ0FDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQ0FDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQ0FDakYsQ0FBQztnQ0FFRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29DQUN6QixJQUFJLFlBQVksR0FBRywwQkFBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUNBQzdHO2dDQUNELGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO2dDQUN6QywyQkFBaUIsQ0FBQyxJQUFJLENBQUMsMkJBQWlCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs2QkFDOUQ7eUJBQ0o7d0JBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLHFCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTs0QkFDdEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs0QkFDN0MsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt5QkFDaEQ7d0JBRUQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzNDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7cUJBQ25DO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxRQUFRO29CQUNsQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsa0VBQWtFO3dCQUVsRSxJQUFJO3dCQUNKLHFFQUFxRTt3QkFDckUsb0JBQW9CO3dCQUNwQix5QkFBeUI7d0JBQ3pCLHNCQUFzQjt3QkFDdEIsSUFBSTt3QkFFSixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7d0JBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFFakMsSUFBSSxVQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLFNBQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzdCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxXQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUVqQyxZQUFZLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUNsQyxLQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQzs0QkFDN0IsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVMsQ0FBQyxDQUFDO3dCQUMxQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPO3dCQUVqQixLQUFJLENBQUMsV0FBVyxHQUFHLFVBQVEsQ0FBQzt3QkFDNUIsdUVBQXVFO3dCQUV2RSxJQUFJLFVBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pGLElBQUksVUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNILElBQUksU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzdILHdFQUF3RTt3QkFDeEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQy9CLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBRXhCLElBQUksWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDeEMsSUFBSSxXQUFTLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQzt3QkFFcEMsSUFBSSxVQUFRLEdBQUcsQ0FBQyxDQUFDO3dCQUNqQix1RkFBdUY7d0JBQ3ZGLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxxQkFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsc0JBQXNCOzRCQUN6RixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLFdBQVMsR0FBRyxVQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUNyRixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUNwRDt3QkFFRCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxPQUFPO3dCQUMzQix3Q0FBd0M7d0JBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxvQkFBb0I7NEJBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2hDLElBQUksUUFBTSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDN0IsSUFBSSxRQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0NBQ2YsSUFBSSxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0NBQzNELElBQUksWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDNUgsOEVBQThFO29DQUM5RSxPQUFPLENBQUMsU0FBUyxDQUNiLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxFQUM5QyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FDL0IsQ0FDSixDQUFDO2lDQUNMOzZCQUNKO3lCQUNKO3dCQUVELElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQzt3QkFDMUIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVMsQ0FBQyxHQUFHLENBQUMsV0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsbUNBQW1DO3dCQUMvRyxJQUFJLGNBQWMsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUMvRCx5REFBeUQ7d0JBQ3pELFlBQVksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDdEMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFVBQVUsQ0FBQzs0QkFDakMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLHFCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxzQkFBc0I7Z0NBQ3pGLGlEQUFpRDtnQ0FDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs2QkFDakQ7NEJBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFdBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDNUMsSUFBSSxRQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUNqQyxJQUFJLFFBQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtvQ0FDZixhQUFhO29DQUNiLElBQUksUUFBTSxJQUFJLENBQUMsRUFBRTt3Q0FDYixLQUFJLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsQ0FBQzt3Q0FDbkQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNoRCxnQkFBZ0I7d0NBQ2hCLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt3Q0FDNUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs0Q0FDekIsNkNBQTZDOzRDQUM3QyxJQUFJLFlBQVksR0FBRywwQkFBUyxDQUFDLFdBQVcsQ0FBQyxVQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0Q0FDdEQsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NENBQ3hDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRDQUN2QixRQUFRLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUMsU0FBUyxDQUFDO2dEQUM5QyxHQUFHLEVBQUUsQ0FBQztnREFDTixRQUFRLEVBQUUsS0FBSztnREFDZixJQUFJLEVBQUUsVUFBUSxDQUFDLENBQUMsQ0FBQzs2Q0FDcEIsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NENBQ25DLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUNBQ3BGO3dDQUdELEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO3dDQUMzQixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0NBQzVCLElBQUksTUFBTSxHQUFHLFNBQU8sSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dDQUMvRCxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQU8sQ0FBQyxDQUFDO3dDQUN6QyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO3dDQUN6QyxJQUFJLFNBQU8sSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs0Q0FDdEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt5Q0FDdEU7d0NBQ0QsS0FBSyxJQUFJLE9BQUssR0FBRyxDQUFDLEVBQUUsT0FBSyxHQUFHLFdBQVMsRUFBRSxPQUFLLEVBQUUsRUFBRTs0Q0FDNUMsSUFBSSxZQUFZLENBQUMsT0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO2dEQUMxQixLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxPQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDOzZDQUM1RDt5Q0FDSjt3Q0FFRCxJQUFJLENBQUMsR0FBRyxJQUFJLG1DQUFpQixFQUFFLENBQUM7d0NBQ2hDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dDQUM3QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWTt3Q0FDL0QsaURBQWlEO3dDQUVqRCxJQUFJLFlBQVUsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQ2pGLElBQUksWUFBVSxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0NBQzNILElBQUksV0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0NBRTdILEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsWUFBVSxDQUFDLENBQUM7d0NBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsWUFBVSxDQUFDLENBQUM7d0NBQ25ELEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBUyxDQUFDLENBQUM7d0NBRWpELEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzt3Q0FDbkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dDQUN4RyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0NBQ3pHLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQ0FFNUc7eUNBQU07d0NBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7d0NBQy9DLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FDQUNwRDtpQ0FDSjs2QkFDSjt3QkFDTCxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7cUJBQ3RCO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxlQUFlO29CQUN6Qjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMxQyxtRUFBbUU7d0JBQ25FLElBQUk7d0JBQ0osMkJBQTJCO3dCQUMzQix5QkFBeUI7d0JBQ3pCLElBQUk7d0JBRUosSUFBSSxHQUFHLENBQUMsV0FBVyxFQUFFOzRCQUNqQixLQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDakMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNwQyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs0QkFDM0IsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLHFCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDdEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs2QkFDaEQ7NEJBQ0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQzs0QkFDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3lCQUNwQztxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCO29CQUM1Qjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QyxtRUFBbUU7d0JBRW5FLFlBQVk7d0JBQ1osS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7d0JBQ3JCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFFbkIsSUFBSTt3QkFDSixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLHVCQUF1Qjt3QkFDdkIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLG9CQUFvQjt3QkFDcEIsaUJBQWlCO3dCQUNqQiwyQ0FBMkM7d0JBQzNDLG1CQUFtQjt3QkFDbkIsWUFBWTt3QkFDWiw4QkFBOEI7d0JBQzlCLDJCQUEyQjt3QkFDM0IsNkJBQTZCO3dCQUM3Qiw2QkFBNkI7d0JBQzdCLDBDQUEwQzt3QkFDMUMsc0NBQXNDO3dCQUN0QyxhQUFhO3dCQUNiLFlBQVk7d0JBQ1osOEJBQThCO3dCQUM5QiwyQkFBMkI7d0JBQzNCLDZCQUE2Qjt3QkFDN0IsNkJBQTZCO3dCQUM3Qix1Q0FBdUM7d0JBQ3ZDLHFDQUFxQzt3QkFDckMsYUFBYTt3QkFDYixZQUFZO3dCQUNaLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiw2QkFBNkI7d0JBQzdCLGlDQUFpQzt3QkFDakMscUNBQXFDO3dCQUNyQyxzQ0FBc0M7d0JBQ3RDLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWiw4RUFBOEU7d0JBQzlFLDhCQUE4Qjt3QkFDOUIsMkJBQTJCO3dCQUMzQiw2QkFBNkI7d0JBQzdCLGlDQUFpQzt3QkFDakMscUNBQXFDO3dCQUNyQyxzQ0FBc0M7d0JBQ3RDLFlBQVk7d0JBQ1osUUFBUTt3QkFDUixJQUFJO3dCQUVKLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUNqQyxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ25DLElBQUksYUFBYSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDekMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ2pDLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDM0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3ZCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUU3QixLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsR0FBRyxNQUFNLENBQUM7d0JBQ3hELEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFlBQVksR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQzt3QkFFN0UsS0FBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7d0JBRS9CLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBRTFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFFN0MsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7d0JBQ2xELFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO3dCQUNwQyxxRUFBcUU7d0JBQ3JFLGdFQUFnRTt3QkFFaEUsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQzt3QkFFM0IsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7NEJBQ2pELElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dDQUNoQixVQUFVLElBQUksQ0FBQyxDQUFDO2dDQUNoQixpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2pDO3lCQUNKO3dCQUNELGdEQUFnRDt3QkFFaEQscUJBQXFCO3dCQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDMUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDNUQ7d0JBRUQsNENBQTRDO3dCQUM1QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTs0QkFDdEQsSUFBSSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFFdkUsSUFBSSxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQzs0QkFDeEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBRXBELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dDQUNkLGtDQUFrQztnQ0FDbEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7b0NBQ3pCLFFBQVEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUTtvQ0FDbkMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO29DQUN6QyxLQUFLLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVk7aUNBQ3ZDLENBQUMsQ0FBQztnQ0FFSCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUkscUJBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7b0NBQzFELFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29DQUNyQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDOUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQ0FDOUM7cUNBQU07b0NBQ0gsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0NBQ3RDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO29DQUMvQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0NBQ2IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQ2pELEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUMvQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUU7NENBQ3hCLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7eUNBQy9DOzZDQUFNOzRDQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7eUNBQy9DO3FDQUNKO3lDQUFNO3dDQUNILEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQzt3Q0FDL0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztxQ0FDckQ7aUNBQ0o7NkJBQ0o7aUNBQU07Z0NBQ0gsNkNBQTZDO2dDQUM3QyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FDaEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7NkJBQ3ZDO3lCQUNKO3dCQUVELGdCQUFnQjt3QkFDaEIsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQzdCLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM1QyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7NEJBQzVDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQ0FDOUMsbURBQW1EO2dDQUNuRCxJQUFJLFlBQVksR0FBRywwQkFBUyxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzlELEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQ3BGO3lCQUNKO3dCQUVELElBQUksU0FBUyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDckMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO3lCQUM3QztxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CO29CQUM3Qjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqRCwyRUFBMkU7d0JBQzNFLElBQUk7d0JBQ0oscUJBQXFCO3dCQUNyQix3QkFBd0I7d0JBQ3hCLE1BQU07d0JBRU4sSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUMvQixJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBRWpDLElBQUksUUFBTSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDaEQsSUFBSSxRQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQ2YsSUFBSSxTQUFTLEVBQUU7Z0NBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7NkJBQzNEO2lDQUFNO2dDQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzZCQUN2RDt5QkFDSjtxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtvQkFDdEI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0MscUVBQXFFO3dCQUNyRSxJQUFJO3dCQUNKLHdCQUF3Qjt3QkFDeEIsTUFBTTt3QkFDTixLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUU1QyxJQUFJLEtBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUUsMENBQTBDOzRCQUNqRSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQzdCLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt5QkFFcEM7NkJBQU07NEJBQ0gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUM1QixLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBRW5DO3FCQUNKO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxXQUFXO29CQUNyQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsa0NBQWtDO3FCQUNyQztvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO29CQUMzQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsd0NBQXdDO3FCQUMzQztvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO29CQUMzQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsd0NBQXdDO3FCQUMzQztvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCO29CQUMzQjt3QkFDSSx3Q0FBd0M7d0JBQ3hDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFHLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2hELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDeEI7b0JBQ0QsTUFBTTtnQkFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7b0JBQ3BCO3dCQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzlDLHdFQUF3RTt3QkFFeEUsSUFBSTt3QkFDSixrQkFBa0I7d0JBQ2xCLDZCQUE2Qjt3QkFDN0IsTUFBTTt3QkFFTixJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRXpCLElBQUksUUFBTSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxRQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7NEJBQ2YsMEJBQTBCOzRCQUMxQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQ0FDdEQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxJQUFJLFFBQU0sRUFBRTtvQ0FDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztvQ0FDbEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUNBQ3ZDOzZCQUNKOzRCQUVELFlBQVk7NEJBQ1osS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsUUFBTSxDQUFDLENBQUM7NEJBQ3BELEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUVoRCxJQUFJLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs0QkFDNUMsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dDQUM5QixLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs2QkFDOUI7NEJBRUQsSUFBSSxRQUFNLElBQUksQ0FBQyxFQUFFO2dDQUNiLFdBQVc7Z0NBQ1gsWUFBWTtnQ0FDWixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0NBQy9CLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQ0FDakMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOzZCQUN6Qjt5QkFDSjtxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCO29CQUMvQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEMsa0VBQWtFO3FCQUNyRTtvQkFDRCxNQUFNO2dCQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYTtvQkFDdkI7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLElBQUksR0FBRyxHQUFHLElBQUkscUJBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0MsdUVBQXVFO3dCQUN2RSxJQUFJO3dCQUNKLGdCQUFnQjt3QkFDaEIsZ0NBQWdDO3dCQUNoQyx1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsU0FBUzt3QkFDVCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsTUFBTTt3QkFFTixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3ZCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUU3Qiw0Q0FBNEM7d0JBQzVDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzRCQUN0RCxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO2dDQUMxQyxrQ0FBa0M7Z0NBQ2xDLElBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0NBQ3hDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUNwRCxJQUFJLGdCQUFnQixHQUFHO29DQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztvQ0FDeEIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7b0NBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDO2lDQUN6QixDQUFBO2dDQUVELEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0NBRS9DLElBQUksT0FBTyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO29DQUMxQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQ0FDckMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7b0NBQzlDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7aUNBQzlDO3FDQUFNO29DQUNILFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29DQUN0QyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQ0FDbEQ7NkJBQ0o7eUJBQ0o7cUJBQ0o7b0JBQ0QsTUFBTTtnQkFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QjtvQkFDakM7d0JBQ0ksYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2hDLDhDQUE4QztxQkFDakQ7b0JBQ0QsTUFBTTtnQkFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7b0JBQ3RCO3dCQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLHFCQUFHLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVDLHNFQUFzRTt3QkFDdEUsSUFBSTt3QkFDSixvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLFNBQVM7d0JBQ1QsaUJBQWlCO3dCQUNqQixVQUFVO3dCQUNWLG1DQUFtQzt3QkFDbkMseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGlDQUFpQzt3QkFDakMseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLGtDQUFrQzt3QkFDbEMseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxVQUFVO3dCQUNWLG9DQUFvQzt3QkFDcEMseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLHNCQUFzQjt3QkFDdEIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLFVBQVU7d0JBQ1Ysa0NBQWtDO3dCQUNsQyx5QkFBeUI7d0JBQ3pCLDRCQUE0Qjt3QkFDNUIsc0JBQXNCO3dCQUN0QixXQUFXO3dCQUNYLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxRQUFRO3dCQUNSLE1BQU07d0JBRU4sSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUM3QixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzdCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFekIsK0RBQStEO3dCQUMvRCw2QkFBNkI7d0JBQzdCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOzRCQUNqRCxJQUFJLEdBQUcsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQzNDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dDQUNkLHlFQUF5RTtnQ0FDekUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ3hELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Z0NBQ3pELElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQ0FDbEgsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQ0FDeEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUNBQ2pEO3FDQUFNO29DQUNILFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUM7b0NBQ3ZDLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO29DQUM3QyxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO2lDQUM3QztnQ0FDRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDM0M7aUNBQU07Z0NBQ0gsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDOzZCQUMxQzt5QkFDSjt3QkFDRCwrREFBK0Q7cUJBQ2xFO29CQUNELE1BQU07Z0JBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUNuQjt3QkFDSSxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6Qyw0REFBNEQ7d0JBRTVELElBQUk7d0JBQ0osa0JBQWtCO3dCQUNsQixzQkFBc0I7d0JBQ3RCLHNCQUFzQjt3QkFDdEIsNkJBQTZCO3dCQUM3QixNQUFNO3dCQUVOLElBQUk7d0JBQ0osa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsNkJBQTZCO3dCQUM3QixNQUFNO3dCQUVOLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDekIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQzdCLElBQUksTUFBTSxFQUFFOzRCQUNSLFlBQVk7NEJBQ1osSUFBSSxRQUFNLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUM3QyxJQUFJLFFBQU0sSUFBSSxDQUFDLENBQUMsRUFBRTtnQ0FDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQzs2QkFDeEQ7eUJBQ0o7NkJBQU07NEJBQ0gsV0FBVzs0QkFDWCxJQUFJLFFBQU0sR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzdDLElBQUksUUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dDQUNkLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzZCQUNwRDt5QkFDSjtxQkFDSjtvQkFDRCxNQUFNO2dCQUNWO29CQUNJLDREQUE0RDtvQkFDNUQsTUFBTTthQUNiO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVELFVBQVU7SUFDViwyQ0FBZSxHQUFmO1FBQ0ksK0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUkscUJBQUcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELDBDQUFjLEdBQWQ7UUFDSSwrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLCtCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUNJLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNILElBQUksU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFN0gsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXhCLCtCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsK0NBQW1CLEdBQW5CO1FBQ0ksT0FBTyxDQUFDLHlDQUF5QztRQUNqRCxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzSCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdILCtCQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQywrQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxTQUFTLEVBQUUsUUFBUSxFQUFFLE9BQU87UUFDbkMsc0RBQXNEO1FBQ3RELGdEQUFnRDtRQUNoRCw4Q0FBOEM7UUFFOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLFlBQVksR0FBRywwQkFBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3RSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLFVBQVU7UUFDckIsNENBQTRDO1FBQzVDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDN0UsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO2dCQUNyQixVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNILFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7U0FDSjtJQUNMLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsVUFBVTtRQUN2Qjs7OztVQUlFO1FBRUYsNkRBQTZEO1FBQzdELHdEQUF3RDtRQUV4RCxpRkFBaUY7UUFDakYsNEVBQTRFO1FBRTVFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUMsdURBQXVEO1FBQ3ZELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDeEMsZ0ZBQWdGO1FBQ2hGLDJFQUEyRTtRQUUzRSxnRUFBZ0U7UUFFaEUsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQU0sc0JBQXNCO1lBQ2xFLElBQUksWUFBWSxHQUFHLDBCQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDekMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDckU7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxHQUFHLElBQUksbUNBQWlCLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUMvRCxpREFBaUQ7UUFFakQsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFFRCxJQUFJLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzSCxJQUFJLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdILHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELDBDQUFjLEdBQWQsVUFBZSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVE7UUFDckMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNiLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNaLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDVixHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7YUFBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDbkIsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDWDthQUFNO1lBQ0gsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDWjtRQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTdFLFFBQVEsU0FBUyxFQUFFO1lBQ2YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUNuQyxLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDOUUsTUFBTTtZQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzVCLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztnQkFDeEIsS0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEdBQUMsRUFBRSxFQUFFO29CQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLEdBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzFDLElBQUksMEJBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksMEJBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUMsR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7NEJBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7eUJBQ3ZEO3FCQUNKO2lCQUNKO2dCQUNELE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25CLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxHQUFDLEVBQUUsRUFBRTtvQkFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMxQyxJQUFJLDBCQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLDBCQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUN0RSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOzRCQUNwRCxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO3lCQUN2RDtxQkFDSjtpQkFDSjtnQkFDRCwwQ0FBMEM7Z0JBQzFDLHVIQUF1SDtnQkFDdkgsSUFBSTtnQkFDSixNQUFNO1lBQ1Y7Z0JBQ0ksTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUiw0Q0FBZ0IsR0FBaEI7UUFDSSxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxxQkFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEQsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDZCxNQUFNLEVBQUUsS0FBSztnQkFDYixRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNaLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFDO1NBQ047UUFDRCxvREFBb0Q7SUFDeEQsQ0FBQztJQUVELCtDQUFtQixHQUFuQjtRQUNJLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxxQkFBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsMkNBQWUsR0FBZixVQUFnQixNQUFNLEVBQUUsVUFBVTtRQUM5QixnRUFBZ0U7UUFDaEUsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCwrQ0FBbUIsR0FBbkIsVUFBb0IsR0FBRztRQUNuQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3RELElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsS0FBSyxHQUFHLEVBQUU7Z0JBQ3RDLElBQUksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ3JDO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLElBQUk7UUFDcEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCwrQ0FBbUIsR0FBbkIsVUFBb0IsR0FBRztRQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNYLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDYjtRQUVELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxLQUFLLEdBQUcsRUFBRTtnQkFDdkMsSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDckM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsTUFBTTtRQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCx5Q0FBYSxHQUFiO1FBQ0ksMkRBQTJEO1FBQzNELElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN0RCx1RUFBdUU7WUFDdkUsdUVBQXVFO1lBQ3ZFLG9EQUFvRDtZQUNwRCxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUN0RSxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEQsbUVBQW1FO2FBQ3RFO1NBQ0o7UUFDRCxnREFBZ0Q7UUFDaEQsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxXQUFXO1FBQ25CLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLFFBQVEsV0FBVyxFQUFFO1lBQ2pCLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztnQkFDeEIsSUFBSSxHQUFHLFdBQVcsQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCO2dCQUNuQyxJQUFJLEdBQUcsc0JBQXNCLENBQUM7Z0JBQzlCLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQjtnQkFDcEMsSUFBSSxHQUFHLHVCQUF1QixDQUFDO2dCQUMvQixNQUFNO1lBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzNCLElBQUksR0FBRyxjQUFjLENBQUM7Z0JBQ3RCLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDMUIsSUFBSSxHQUFHLGFBQWEsQ0FBQztnQkFDckIsTUFBTTtZQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2dCQUMxQixJQUFJLEdBQUcsYUFBYSxDQUFDO2dCQUNyQixNQUFNO1lBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQzFCLElBQUksR0FBRyxhQUFhLENBQUM7Z0JBQ3JCLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLGNBQWM7Z0JBQ3hCLElBQUksR0FBRyxXQUFXLENBQUM7Z0JBQ25CLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDVixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUM5RCxDQUFDLEVBQUUsQ0FBQzthQUNQO1NBQ0o7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELGtEQUFzQixHQUF0QixVQUF1QixnQkFBZ0I7UUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxXQUFXLElBQUkscUJBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDakY7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxnQkFBZ0I7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDYixDQUFDO0lBRUQsaUNBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxnQkFBZ0I7UUFDekIseUNBQXlDO1FBRDdDLGlCQTJKQztRQXhKRywyQ0FBMkM7UUFDM0MsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLHFCQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUVELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNuRCxJQUFJLHdCQUF3QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dDQUlwRSxLQUFLO1lBQ1YsSUFBSSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRWpDLElBQUksVUFBVSxHQUFHO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDOUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNqRixDQUFDO1lBQ0YsSUFBSSxDQUFDLEdBQUcsSUFBSSxtQ0FBaUIsRUFBRSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkIsSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLE9BQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBQ3ZFLHNEQUFzRDtZQUV0RCxJQUFJLE1BQU0sR0FBRyxPQUFLLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNkLHNDQUFzQztnQkFDdEMsdURBQXVEO2dCQUN2RCxJQUFJLE1BQU0sQ0FBQyxXQUFXLElBQUkscUJBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksV0FBVyxFQUFFO29CQUNoRSxpQ0FBaUM7b0JBQ2pDLDJCQUEyQjtvQkFDM0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7d0JBQ1osUUFBUSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7cUJBQ3BDO3lCQUFNLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDbkIsUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7cUJBQ3JDO3lCQUFNO3dCQUNILFFBQVEsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO3FCQUNyQztvQkFDRCxPQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBSyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDcEYsSUFBSSx3QkFBd0IsRUFBRTt3QkFDMUIsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN4RDtvQkFFRCxpQkFBaUI7b0JBQ2pCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4QixJQUFJLFlBQVksR0FBRywwQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pELE9BQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0MsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLE9BQUssV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3lCQUM5Rjt3QkFFRCxVQUFVLENBQUM7NEJBQ1AsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3RGLElBQUksWUFBWSxJQUFJLENBQUMsRUFBRTtnQ0FDbkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7NkJBQzVEO2lDQUFNO2dDQUNILEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDOzZCQUM3RDt3QkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ1o7eUJBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO3dCQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUN4QixJQUFJLFlBQVksR0FBRywwQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pELE9BQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQ25ELE9BQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBSyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQ2xHO3FCQUNKO3lCQUFNO3dCQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3hCLElBQUksWUFBWSxHQUFHLDBCQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDekQsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDbkQsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFLLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDbEc7cUJBQ0o7aUJBQ0o7cUJBQU07b0JBQ0gsdUNBQXVDO29CQUN2QywyQkFBMkI7b0JBQzNCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLHNDQUFzQzt3QkFDdEMsSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLHFCQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFOzRCQUNqRCxpQkFBaUI7NEJBQ2pCLHlEQUF5RDs0QkFDekQsSUFBSSxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDM0IsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE9BQUssZUFBZSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzZCQUNwRzs0QkFFRCxJQUFJLGNBQWMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dDQUM1QixPQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBSyxlQUFlLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7NkJBQ3JHOzRCQUVELElBQUksY0FBYyxDQUFDLE9BQU8sSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0NBQ2pELE9BQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxPQUFLLGVBQWUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs2QkFDckc7eUJBQ0o7NkJBQU07NEJBQ0gsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsSUFBSSxxQkFBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUMxRSxJQUFJLFFBQVEsR0FBRyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7NEJBQ3BELE9BQUssY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOzRCQUM5QyxPQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDaEY7d0JBRUQsSUFBSSxZQUFVLEdBQUc7NEJBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzRCQUM5RSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3lCQUNqRixDQUFDO3dCQUVGLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLEVBQUUsR0FBQyxFQUFFLEVBQUU7NEJBQ3pCLElBQUksWUFBWSxHQUFHLDBCQUFTLENBQUMsV0FBVyxDQUFDLFlBQVUsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUN4RCxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0NBQ2IsT0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLEdBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFLLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs2QkFDN0c7aUNBQU07Z0NBQ0gsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztnQ0FDakQsT0FBSyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsR0FBQyxFQUFFLE9BQUssV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzZCQUM5Rjt5QkFDSjtxQkFFSjtpQkFDSjthQUNKO1lBQ0QsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUNiLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxFQUFFLEVBQUUsR0FBQyxFQUFFLEVBQUU7b0JBQ3pCLE9BQUssY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzVDLE9BQUssT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hGO2FBQ0o7OztRQXRITCx3REFBd0Q7UUFDeEQsa0ZBQWtGO1FBRWxGLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO29CQUFuRCxLQUFLO1NBb0hiO1FBRUQsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJO1lBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ1IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNYLGdEQUFnRDtvQkFDaEQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNILG1EQUFtRDtvQkFDbkQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNqQztZQUNMLENBQUMsQ0FBQyxDQUNMLENBQ0osQ0FBQTtTQUNKO2FBQU07WUFDSCxZQUFZO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsMENBQWMsR0FBZCxVQUFlLGdCQUFnQixFQUFFLFNBQVM7UUFBMUMsaUJBeUJDO1FBeEJHLFVBQVUsQ0FBQztZQUNQLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFELElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQ2QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDOUMsSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBRTt3QkFDekIsTUFBTTt3QkFDTixLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDOUIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXOzRCQUMvQixLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTt5QkFDN0QsQ0FBQyxDQUFDO3FCQUNOO3lCQUFNO3dCQUNILE9BQU87d0JBQ1AsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7NEJBQy9CLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVzs0QkFDL0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVk7eUJBQzdELENBQUMsQ0FBQztxQkFDTjtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sZ0JBQWdCO1FBQXZCLGlCQTZFQztRQTVFRywyQkFBMkI7UUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDbkMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNsQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMxRCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFFLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQzdCLElBQUksZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTt3QkFDdEMsU0FBUyxJQUFJLENBQUMsQ0FBQztxQkFDbEI7eUJBQU07d0JBQ0gsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFOzRCQUN0QyxRQUFRLElBQUksQ0FBQyxDQUFDO3lCQUNqQjtxQkFDSjtpQkFDSjthQUNKO1lBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRWpDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNiLElBQUksU0FBUyxHQUFHLENBQUMsRUFBRTt3QkFDZixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2hDLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTs0QkFDaEIsY0FBYzs0QkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDcEY7NkJBQU07NEJBQ0gsWUFBWTs0QkFDWixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDcEY7d0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDMUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUN6QixDQUNKLENBQUM7d0JBQ0YsVUFBVSxDQUFDOzRCQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7NEJBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNaO29CQUVELElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTt3QkFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2hDLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTs0QkFDZixlQUFlOzRCQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDdkIsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzFCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDdEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUMxQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3pCLENBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUM7Z0NBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQ0FDbkMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNyQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQ1o7NkJBQU07eUJBRU47cUJBQ0o7aUJBQ0o7cUJBQU07b0JBQ0gsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO3dCQUN0QyxZQUFZO3dCQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzFFO2lCQUNKO2FBQ0o7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBRUQsZ0NBQUksR0FBSjtRQUNJLElBQUksSUFBSSxFQUFFO1lBQ04sUUFBUTtTQUNYO2FBQU07WUFDSCxrQkFBa0I7U0FDckI7SUFDTCxDQUFDO0lBRUQsc0NBQVUsR0FBVixVQUFXLEVBQUU7UUFDVCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxRQUFRLEVBQUUsRUFBRTtZQUNSLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CO2dCQUM5QixJQUFJLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ3hCLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQ3RCLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ3JCLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ2YsTUFBTTtZQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDckIsSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDZixNQUFNO1lBQ1YsS0FBSyxxQkFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUNwQixJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNkLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQ3RCLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ2hCLE1BQU07WUFDVixLQUFLLHFCQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQ25CLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2IsTUFBTTtZQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYTtnQkFDdkIsSUFBSSxHQUFHLFNBQVMsQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUsscUJBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYztnQkFDeEIsSUFBSSxHQUFHLFVBQVUsQ0FBQztnQkFDbEIsTUFBTTtZQUNWO2dCQUNJLE1BQU07U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxtQ0FBTyxHQUFQLFVBQVEsT0FBTztRQUNYLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUU5QixRQUFRLEdBQUcsRUFBRTtnQkFDVCxLQUFLLEVBQUU7b0JBQ0gsTUFBTSxJQUFJLEdBQUcsQ0FBQztvQkFDZCxNQUFNO2dCQUNWLEtBQUssRUFBRTtvQkFDSCxNQUFNLElBQUksR0FBRyxDQUFDO29CQUNkLE1BQU07Z0JBQ1YsS0FBSyxFQUFFO29CQUNILE1BQU0sSUFBSSxHQUFHLENBQUM7b0JBQ2QsTUFBTTtnQkFDVixLQUFLLEVBQUU7b0JBQ0gsTUFBTSxJQUFJLEdBQUcsQ0FBQztvQkFDZCxNQUFNO2dCQUNWO29CQUNJLE1BQU0sSUFBSSxHQUFHLENBQUM7b0JBQ2QsTUFBTTthQUNiO1lBRUQsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUNuQixNQUFNO2dCQUNWLEtBQUssQ0FBQztvQkFDRixNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRztvQkFDbkIsTUFBTTtnQkFDVixLQUFLLENBQUM7b0JBQ0YsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUc7b0JBQ25CLE1BQU07Z0JBQ1YsS0FBSyxDQUFDO29CQUNGLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHO29CQUNuQixNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtTQUNKO1FBQ0Qsa0RBQWtEO0lBQ3RELENBQUM7SUFFRCxrQ0FBTSxHQUFOLFVBQU8sRUFBRSxJQUFJLENBQUM7O0lBcCtEQSwwQkFBUSxHQUFzQixJQUFJLENBQUM7SUFJakQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0RBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrREFDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZEQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkRBQ2E7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzswREFDVTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhEQUNjO0lBTWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eURBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MERBQ1U7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2REFDYTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkRBQ1c7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhEQUNjO0lBSWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OERBQ2M7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzREQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrREFDZTtJQUl4QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkRBQ1c7SUFJaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lFQUNpQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lEQUNTO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OERBQ2M7SUFwRnRCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBdStEckM7SUFBRCx3QkFBQztDQXYrREQsQUF1K0RDLENBditEOEMsRUFBRSxDQUFDLFNBQVMsR0F1K0QxRDtrQkF2K0RvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgQ21kIGZyb20gXCIuL01hdUJpbmguQ21kXCI7XG5cbmltcG9ydCBNYXVCaW5oTmV0d29ya0NsaWVudCBmcm9tIFwiLi9NYXVCaW5oLk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBDYXJkVXRpbHMgZnJvbSBcIi4vTWF1QmluaC5DYXJkVXRpbFwiXG5cbmltcG9ydCBEZXRlY3RQbGF5ZXJDYXJkcyBmcm9tICcuL01hdUJpbmguRGV0ZWN0UGxheWVyQ2FyZHMnO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgY21kTmV0d29yayBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuQ21kXCI7XG52YXIgY29uZmlnUGxheWVyID0gW1xuICAgIC8vIHtcbiAgICAvLyAgICAgc2VhdElkOiAwLFxuICAgIC8vICAgICBwbGF5ZXJJZDogLTEsXG4gICAgLy8gICAgIHBsYXllclBvczogLTEsXG4gICAgLy8gICAgIGlzVmlld2VyOiB0cnVlXG4gICAgLy8gfVxuXTtcblxuLy8gZGVmYXVsdFBsYXllclBvc1swIC0+IDNdWzBdID0gcGxheWVyX3BvcyBvZiBtZVxubGV0IGRlZmF1bHRQbGF5ZXJQb3MgPSBbXG4gICAgWzAsIDEsIDIsIDNdLFxuICAgIFsxLCAyLCAzLCAwXSxcbiAgICBbMiwgMywgMCwgMV0sXG4gICAgWzMsIDAsIDEsIDJdXG5dXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXVCaW5oQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYXVCaW5oQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICAvLyBVSSBSb29tc1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX0Nob29zZVJvb206IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE5pY2tOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRMaXN0Um9vbXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiSXRlbVJvb206IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNjcm9sbFZpZXcpXG4gICAgc2Nyb2xsTGlzdFJvb206IGNjLlNjcm9sbFZpZXcgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkdEZpbmRSb29tOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIGJ0bkhpZGVSb29tRnVsbDogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc0luaXRlZFVJUm9vbSA9IGZhbHNlO1xuXG4gICAgLy8gVUkgUGxheWluZ1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX1BsYXlpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1lQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdyb3VwUGxheWVyczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwcml0ZUNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwcml0ZUNhcmRCYWNrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNEZWFsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkxlYXZlUm9vbTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxSb29tSWQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxSb29tQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uQmV0dGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZE1vdmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHN1Z2dlc3RUYXJnZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0blNvQ2hpOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5Db21iaW5pbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYmxlQ3VycmVudENoaTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBOb3RpZnlcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpZnlUaW1lU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGlmeVRpbWVFbmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGlmeVRpbWVCZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4U29DaGlUb3RhbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwcml0ZVNvQ2hpVG90YWw6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIC8vIFVJIENoYXRcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9DaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRDaGF0SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgLy8gUG9wdXBcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cE5vZGl0eTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsTm90aWZ5Q29udGVudDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXBHdWlkZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByaXRlR3JvdXBDYXJkOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cblxuICAgIHByaXZhdGUgc2VhdE93bmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tQmV0ID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2FtZVN0YXRlID0gbnVsbDtcblxuICAgIHByaXZhdGUgbWludXRlcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBzZWNvbmRzID0gbnVsbDtcblxuICAgIHByaXZhdGUgdGltZUF1dG9TdGFydCA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lRW5kID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVCZXQgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxXYWl0dGluZyA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbEVuZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBpbnRlcnZhbEJldHRpbmcgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50Q2FyZCA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRpbWVvdXRDaGlhQmFpRG9uZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0QmV0dGluZyA9IG51bGw7XG5cbiAgICBjYXJkTW92ZUlkOiAtMTtcbiAgICBjYXJkTW92ZVZhbHVlOiBcIlwiO1xuXG4gICAgaXNUaW5oQWNlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBNYXVCaW5oQ29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZWF0T3duZXIgPSAtMTtcblxuICAgICAgICB0aGlzLmluaXRDb25maWdQbGF5ZXIoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zaG93VUlSb29tcygpO1xuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcgxJHEg25nIG5o4bqtcC4uLlwiKTtcbiAgICAgICAgICAgIE1hdUJpbmhOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kTmV0d29yay5TZW5kTG9naW4oQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSwgQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbikpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIE1hdUJpbmhOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIC8vIFJlcXVlc3QgVUkgUm9vbVxuICAgIGpvaW5Sb29tKGluZm8pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggam9pblJvb20gcm9vbUluZm8gOiBcIiwgaW5mbyk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDbWQuU2VuZEpvaW5Sb29tQnlJZChpbmZvW1wiaWRcIl0pKTtcbiAgICB9XG5cbiAgICByZWZlc2hMaXN0Um9vbSgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgICAgICBNYXVCaW5oTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IENtZC5TZW5kR2V0TGlzdFJvb20oKSk7XG4gICAgfVxuXG4gICAgZmluZFJvb21JZCgpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggZmluZFJvb21JZCBpZCA6IFwiLCB0aGlzLmVkdEZpbmRSb29tLnN0cmluZyk7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5lZHRGaW5kUm9vbS5zdHJpbmcudHJpbSgpO1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaWRGaW5kID0gcGFyc2VJbnQodGV4dCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUl0ZW0gPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChcIk1hdUJpbmguSXRlbVJvb21cIik7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1wiaWRcIl0gIT0gaWRGaW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuY29udGVudExpc3RSb29tcy5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZVJvb21GdWxsKCkge1xuICAgICAgICBpZiAodGhpcy5idG5IaWRlUm9vbUZ1bGwuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUl0ZW0gPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudChcIk1hdUJpbmguSXRlbVJvb21cIik7XG4gICAgICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdID09IHJvb21JdGVtLnJvb21JbmZvW1wibWF4VXNlclBlclJvb21cIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VUlSb29tcygpIHtcbiAgICAgICAgdGhpcy5VSV9DaG9vc2VSb29tLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGVkVUlSb29tKSB7XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYWJlbE5pY2tOYW1lLnN0cmluZyA9IENvbmZpZ3MuTG9naW4uTmlja25hbWU7XG4gICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbENvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKENvbmZpZ3MuTG9naW4uQ29pbik7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlVUlSb29tKCkge1xuICAgICAgICB0aGlzLlVJX0Nob29zZVJvb20uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY3JlYXRlUm9vbSgpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggY3JlYXRlUm9vbVwiKTtcbiAgICAgICAgLy8gTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDbWQuU2VuZEdldFRvcFNlcnZlcigxKSk7XG4gICAgfVxuXG4gICAgcGxheWluZ05vdygpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggcGxheWluZ05vd1wiKTtcbiAgICAgICAgbGV0IGFyclJvb21Pa01vbmV5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJNYXVCaW5oLkl0ZW1Sb29tXCIpO1xuICAgICAgICAgICAgaWYgKHJvb21JdGVtLnJvb21JbmZvW1wicmVxdWlyZWRNb25leVwiXSA8IENvbmZpZ3MuTG9naW4uQ29pbikge1xuICAgICAgICAgICAgICAgIGFyclJvb21Pa01vbmV5LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggcGxheWluZ05vdyBhcnJSb29tT2tNb25leSA6IFwiLCBhcnJSb29tT2tNb25leSk7XG5cbiAgICAgICAgaWYgKGFyclJvb21Pa01vbmV5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByb29tQ3Jvd2VkID0gYXJyUm9vbU9rTW9uZXlbMF07XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBwbGF5aW5nTm93IHJvb21Dcm93ZWQgc3RhcnQgOiBcIiwgcm9vbUNyb3dlZCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyUm9vbU9rTW9uZXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvb21JdGVtID0gdGhpcy5jb250ZW50TGlzdFJvb21zLmNoaWxkcmVuW2FyclJvb21Pa01vbmV5W2luZGV4XV0uZ2V0Q29tcG9uZW50KFwiTWF1QmluaC5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUl0ZW1Dcm93ZWQgPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5bcm9vbUNyb3dlZF0uZ2V0Q29tcG9uZW50KFwiTWF1QmluaC5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBwbGF5aW5nTm93IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBwbGF5aW5nTm93IHJvb21JdGVtIDogXCIsIHJvb21JdGVtLnJvb21JbmZvW1widXNlckNvdW50XCJdKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBwbGF5aW5nTm93IHJvb21JdGVtQ3Jvd2VkIDogXCIsIHJvb21JdGVtQ3Jvd2VkLnJvb21JbmZvW1widXNlckNvdW50XCJdKTtcbiAgICAgICAgICAgICAgICBpZiAocm9vbUl0ZW0ucm9vbUluZm9bXCJ1c2VyQ291bnRcIl0gPiByb29tSXRlbUNyb3dlZC5yb29tSW5mb1tcInVzZXJDb3VudFwiXSkge1xuICAgICAgICAgICAgICAgICAgICByb29tQ3Jvd2VkID0gYXJyUm9vbU9rTW9uZXlbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBwbGF5aW5nTm93IHJvb21Dcm93ZWQgdXBkYXRlIDogXCIsIHJvb21Dcm93ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHBsYXlpbmdOb3cgcm9vbUNyb3dlZCBlbmQgOiBcIiwgcm9vbUNyb3dlZCk7XG4gICAgICAgICAgICBsZXQgcm9vbUNob29zZWQgPSB0aGlzLmNvbnRlbnRMaXN0Um9vbXMuY2hpbGRyZW5bcm9vbUNyb3dlZF0uZ2V0Q29tcG9uZW50KFwiTWF1QmluaC5JdGVtUm9vbVwiKTtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHBsYXlpbmdOb3cgcm9vbUNyb3dlZCBlbmQgcm9vbUluZm8gOiBcIiwgcm9vbUNob29zZWQucm9vbUluZm8pO1xuICAgICAgICAgICAgdGhpcy5qb2luUm9vbShyb29tQ2hvb3NlZC5yb29tSW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIktow7RuZyDEkeG7pyB0aeG7gW4gdGhhbSBnaWFcXG5i4bqldCBr4buzIHBow7JuZyBuw6BvICFcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGF0XG4gICAgc2hvd1VJQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5VSV9DaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCA1NDYsIDApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY2xvc2VVSUNoYXQoKSB7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlVG8oMC41LCAxMDAwLCAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNoYXRFbW90aW9uKGV2ZW50LCBpZCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBjaGF0RW1vdGlvbiBpZCA6IFwiLCBpZCk7XG4gICAgICAgIE1hdUJpbmhOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ21kLlNlbmRDaGF0Um9vbSgxLCBpZCkpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgfVxuXG4gICAgY2hhdE1zZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDbWQuU2VuZENoYXRSb29tKDAsIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZykpO1xuICAgICAgICAgICAgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQb3B1cEd1aWRlKCkge1xuICAgICAgICB0aGlzLnBvcHVwR3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbG9zZVBvcHVwR3VpZGUoKSB7XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBiYWNrVG9Mb2JieSgpIHtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jbG9zZSgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgLy8gUGxheWluZ1xuICAgIHNob3dVSVBsYXlpbmcoKSB7XG4gICAgICAgIHRoaXMuVUlfUGxheWluZy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsb3NlVUlQbGF5aW5nKCkge1xuICAgICAgICB0aGlzLmFjdGlvbkxlYXZlUm9vbSgpO1xuICAgIH1cblxuICAgIHNldHVwTWF0Y2goZGF0YTogQ21kLlJlY2VpdmVkSm9pblJvb21TdWNjZWVkKSB7XG4gICAgICAgIHRoaXMuc2hvd1VJUGxheWluZygpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc2V0dXBNYXRjaCBkYXRhIDogXCIsIGRhdGEpO1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGRhdGEgITAgOiBcIiwgITApO1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGRhdGEgITEgOiBcIiwgITEpO1xuXG5cblxuICAgICAgICBsZXQgbXlDaGFpciA9IGRhdGFbXCJteUNoYWlyXCJdO1xuICAgICAgICBsZXQgbW9uZXlCZXQgPSBkYXRhW1wibW9uZXlCZXRcIl07XG4gICAgICAgIGxldCByb29tSWQgPSBkYXRhW1wicm9vbUlkXCJdO1xuICAgICAgICBsZXQgZ2FtZUlkID0gZGF0YVtcImdhbWVJZFwiXTtcbiAgICAgICAgbGV0IG1vbmV5VHlwZSA9IGRhdGFbXCJtb25leVR5cGVcIl07XG4gICAgICAgIGxldCBydWxlID0gZGF0YVtcInJ1bGVcIl07XG4gICAgICAgIGxldCBwbGF5ZXJTaXplID0gZGF0YVtcInBsYXllclNpemVcIl07XG4gICAgICAgIGxldCBwbGF5ZXJTdGF0dXMgPSBkYXRhW1wicGxheWVyU3RhdHVzXCJdO1xuICAgICAgICBsZXQgcGxheWVySW5mb3MgPSBkYXRhW1wicGxheWVySW5mb3NcIl07XG4gICAgICAgIGxldCBnYW1lU3RhdGUgPSBkYXRhW1wiZ2FtZVN0YXRlXCJdO1xuICAgICAgICBsZXQgZ2FtZUFjdGlvbiA9IGRhdGFbXCJnYW1lQWN0aW9uXCJdO1xuICAgICAgICBsZXQgY291bnREb3duVGltZSA9IGRhdGFbXCJjb3VudERvd25UaW1lXCJdO1xuXG4gICAgICAgIHRoaXMubGFiZWxSb29tSWQuc3RyaW5nID0gXCJN4bqsVSBCSU5IIC0gUEjDkk5HOiBcIiArIHJvb21JZDtcbiAgICAgICAgdGhpcy5sYWJlbFJvb21CZXQuc3RyaW5nID0gXCJN4buoQyBDxq/hu6JDOiBcIiArIFV0aWxzLmZvcm1hdE51bWJlcihtb25leUJldCkgKyBcIiRcIjtcblxuICAgICAgICB0aGlzLmlzVGluaEFjZSA9IHJ1bGUgPT0gMSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbUJldCA9IG1vbmV5QmV0O1xuXG4gICAgICAgIGlmIChnYW1lU3RhdGUgPT0gQ21kLkNvZGUuU1RBVEVfUExBWUlORykge1xuICAgICAgICAgICAgdGhpcy5zdGFydEJldHRpbmdDb3VudERvd24oY291bnREb3duVGltZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdQbGF5ZXJbMF0ucGxheWVySWQgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICBjb25maWdQbGF5ZXJbMF0ucGxheWVyUG9zID0gbXlDaGFpcjtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgTWUgOiBcIiwgY29uZmlnUGxheWVyWzBdKTtcblxuICAgICAgICB2YXIgbnVtUGxheWVycyA9IDA7XG4gICAgICAgIHZhciBhcnJQbGF5ZXJQb3NFeGlzdCA9IFtdO1xuICAgICAgICB2YXIgYXJyUGxheWVySW5mbyA9IFtdO1xuICAgICAgICB2YXIgYXJyUGxheWVyU3RhdHVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYXllckluZm9zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHBsYXllckluZm9zW2luZGV4XS5uaWNrTmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG51bVBsYXllcnMgKz0gMTtcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJQb3NFeGlzdC5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJJbmZvLnB1c2gocGxheWVySW5mb3NbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBhcnJQbGF5ZXJTdGF0dXMucHVzaChwbGF5ZXJTdGF0dXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBudW1QbGF5ZXJzIDogXCIsIG51bVBsYXllcnMpO1xuXG4gICAgICAgIC8vIHNldHVwIGNvbmZpZ1BsYXllclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgY29uZmlnUGxheWVyW2FdLnBsYXllclBvcyA9IGRlZmF1bHRQbGF5ZXJQb3NbbXlDaGFpcl1bYV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGNvbmZpZ1BsYXllciAgOiBcIiwgSlNPTi5zdHJpbmdpZnkoY29uZmlnUGxheWVyKSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNldHVwTWF0Y2ggYXJyUGxheWVyUG9zRXhpc3QgIDogXCIsIEpTT04uc3RyaW5naWZ5KGFyclBsYXllclBvc0V4aXN0KSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNldHVwTWF0Y2ggYXJyUGxheWVySW5mbyAgOiBcIiwgSlNPTi5zdHJpbmdpZnkoYXJyUGxheWVySW5mbykpO1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGFyclBsYXllclN0YXR1cyAgOiBcIiwgSlNPTi5zdHJpbmdpZnkoYXJyUGxheWVyU3RhdHVzKSk7XG5cbiAgICAgICAgLy8gc2V0IFN0YXRlIG9mIFNlYXQgOiBZZXMgfCBObyBleGlzdCBQbGF5ZXJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBmaW5kUG9zID0gYXJyUGxheWVyUG9zRXhpc3QuaW5kZXhPZihjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XG5cbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNldHVwTWF0Y2ggZmluZCAtLS0tLS0tLS0tLS0tLSBcIik7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGZpbmQgXCIgKyBpbmRleCArIFwiIDogXCIgKyBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyk7XG4gICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGZpbmQgc2VhdElkIFwiLCBzZWF0SWQpO1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UGxheWVySW5mbyhzZWF0SWQpO1xuXG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzZXR1cE1hdGNoIGZpbmQgZmluZFBvcyBcIiwgZmluZFBvcyk7XG4gICAgICAgICAgICBpZiAoZmluZFBvcyA+IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gRXhpc3QgcGxheWVyIC0+IFNldCBQbGF5ZXIgSW5mb1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNldHVwTWF0Y2ggZmluZCBhcnJQbGF5ZXJTdGF0dXNbZmluZFBvc10gOiBcIiwgYXJyUGxheWVyU3RhdHVzW2ZpbmRQb3NdKTtcbiAgICAgICAgICAgICAgICBpZiAoYXJyUGxheWVyU3RhdHVzW2ZpbmRQb3NdID09IENtZC5Db2RlLlBMQVlFUl9TVEFUVVNfU0lUVElORyB8fCBhcnJQbGF5ZXJTdGF0dXNbZmluZFBvc10gPT0gQ21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldElzVmlld2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZVN0YXRlID09IENtZC5Db2RlLlNUQVRFX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4RGFuZ1hlcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDYXJkUmVhZHkoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFZpZXdlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgYXJyUGxheWVySW5mb1tmaW5kUG9zXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93QnRuSW52aXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgfVxuXG5cbiAgICAvLyBUaW1lIFN0YXJ0XG4gICAgc3RhcnRXYWl0dGluZ0NvdW50RG93bih0aW1lV2FpdCkge1xuICAgICAgICB0aGlzLnRpbWVBdXRvU3RhcnQgPSB0aW1lV2FpdDtcbiAgICAgICAgdGhpcy5zZXRUaW1lV2FpdHRpbmdDb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lU3RhcnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxXYWl0dGluZyk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lQXV0b1N0YXJ0LS07XG4gICAgICAgICAgICB0aGlzLnNldFRpbWVXYWl0dGluZ0NvdW50RG93bigpO1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZUF1dG9TdGFydCA8IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBzZXRUaW1lV2FpdHRpbmdDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lQXV0b1N0YXJ0ICUgNjApO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIELhuq90IMSR4bqndSBzYXUgOiBcIiArIHRoaXMuc2Vjb25kcyArIFwicyBcIjtcbiAgICB9XG5cbiAgICAvLyBUaW1lIEVuZFxuICAgIHN0YXJ0RW5kQ291bnREb3duKHRpbWVXYWl0KSB7XG4gICAgICAgIHRoaXMudGltZUVuZCA9IHRpbWVXYWl0O1xuICAgICAgICB0aGlzLnNldFRpbWVFbmRDb3VudERvd24oKTtcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lRW5kLS07XG4gICAgICAgICAgICB0aGlzLnNldFRpbWVFbmRDb3VudERvd24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVFbmQgPCAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBzZXRUaW1lRW5kQ291bnREb3duKCkge1xuICAgICAgICB0aGlzLnNlY29uZHMgPSBNYXRoLmZsb29yKHRoaXMudGltZUVuZCAlIDYwKTtcbiAgICAgICAgdGhpcy5ub3RpZnlUaW1lRW5kLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgS+G6v3QgdGjDumMgc2F1IDogXCIgKyB0aGlzLnNlY29uZHMgKyBcInMgXCI7XG4gICAgfVxuXG4gICAgLy8gVGltZSBCZXRcbiAgICBzdGFydEJldHRpbmdDb3VudERvd24odHVyblRpbWUpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc3RhcnRCZXR0aW5nQ291bnREb3duIHR1cm5UaW1lIDogXCIsIHR1cm5UaW1lKTtcbiAgICAgICAgdGhpcy50aW1lQmV0ID0gdHVyblRpbWU7XG4gICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NCZXR0aW5nKDEpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEJldHRpbmcpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxCZXR0aW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lQmV0LS07XG4gICAgICAgICAgICB2YXIgcmF0ZSA9ICh0aGlzLnRpbWVCZXQgLyB0dXJuVGltZSkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0JldHRpbmcocmF0ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lQmV0IDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsQmV0dGluZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25CZXR0aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzQmV0dGluZyhyYXRlKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHByb2Nlc3NCZXR0aW5nIHJhdGUgOiBcIiwgcmF0ZSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHByb2Nlc3NCZXR0aW5nIGZpbGxSYW5nZSA6IFwiLCB0aGlzLmFjdGlvbkJldHRpbmcuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlKTtcbiAgICAgICAgdGhpcy5hY3Rpb25CZXR0aW5nLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgZ2V0Q2FyZHNTY29yZShhcnJDYXJkcykge1xuICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykge1xuICAgICAgICAgICAgc2NvcmUgKz0gQ2FyZFV0aWxzLmdldERpZW1CeUlkKGFyckNhcmRzW2FdKTtcbiAgICAgICAgfVxuICAgICAgICBzY29yZSA9IHNjb3JlICUgMTA7XG4gICAgICAgIGlmIChzY29yZSA9PSAwKSB7XG4gICAgICAgICAgICBzY29yZSA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgIH1cblxuICAgIC8vIGFkZExpc3RlbmVyXG4gICAgc2V0dXBMaXN0ZW5lcigpIHtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5MT0dJTjpcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlc2hMaXN0Um9vbSgpO1xuICAgICAgICAgICAgICAgICAgICBNYXVCaW5oTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IENtZC5DbWRSZWNvbm5lY3RSb29tKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRPUFNFUlZFUjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkVG9wU2VydmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggVE9QU0VSVkVSIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmtUeXBlID0gcmVzW1wicmFua1R5cGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9wRGF5X21vbmV5ID0gcmVzW1widG9wRGF5X21vbmV5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcFdlZWtfbW9uZXkgPSByZXNbXCJ0b3BXZWVrX21vbmV5XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcE1vbnRoX21vbmV5ID0gcmVzW1widG9wTW9udGhfbW9uZXlcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5DTURfUElOR1BPTkc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBDTURfUElOR1BPTkdcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5DTURfSk9JTl9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggQ01EX0pPSU5fUk9PTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkNNRF9SRUNPTk5FQ1RfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIENNRF9SRUNPTk5FQ1RfUk9PTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLk1PTkVZX0JFVF9DT05GSUc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBNT05FWV9CRVRfQ09ORklHXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuSk9JTl9ST09NX0ZBSUw6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IENtZC5SZWNlaXZlZEpvaW5Sb29tRmFpbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIEpPSU5fUk9PTV9GQUlMIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBcIkzhu5dpIFwiICsgcmVzLmdldEVycm9yKCkgKyBcIiwga2jDtG5nIHjDoWMgxJHhu4tuaC5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmdldEVycm9yKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiTOG7l2kga2nhu4NtIHRyYSB0aMO0bmcgdGluIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiS2jDtG5nIHTDrG0gxJHGsOG7o2MgcGjDsm5nIHRow61jaCBo4bujcC4gVnVpIGzDsm5nIHRo4butIGzhuqFpIHNhdSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuqFuIGtow7RuZyDEkeG7pyB0aeG7gW4gdsOgbyBwaMOybmcgY2jGoWkgbsOgeSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIktow7RuZyB0w6xtIMSRxrDhu6NjIHBow7JuZyB0aMOtY2ggaOG7o3AuIFZ1aSBsw7JuZyB0aOG7rSBs4bqhaSBzYXUhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJN4buXaSBs4bqnbiB2w6BvIHBow7JuZyBwaOG6o2kgY8OhY2ggbmhhdSAxMCBnacOieSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkjhu4cgdGjhu5FuZyBi4bqjbyB0csOsIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyA9IFwiS2jDtG5nIHTDrG0gdGjhuqV5IHBow7JuZyBjaMahaSFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIk3huq10IGto4bqpdSBwaMOybmcgY2jGoWkga2jDtG5nIMSRw7puZyFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIlBow7JuZyBjaMahaSDEkcOjIMSR4bunIG5nxrDhu51pIVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIkLhuqFuIGLhu4sgY2jhu6cgcGjDsm5nIGtow7RuZyBjaG8gdsOgbyBiw6BuIVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdFVF9MSVNUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkR2V0TGlzdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EYXRhID0gcmVzLmxpc3RbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1Sb29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChcIk1hdUJpbmguSXRlbVJvb21cIikuaW5pdEl0ZW0oaXRlbURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudExpc3RSb29tcy5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsTGlzdFJvb20uc2Nyb2xsVG9Ub3AoMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkpPSU5fR0FNRV9ST09NX0JZX0lEOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggSk9JTl9HQU1FX1JPT01fQllfSURcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gR2FtZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgIFxuXG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5CSU5IX1NPX0NISTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkQmluaFNvQ2hpKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggUmVjZWl2ZWRCaW5oU29DaGkgcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbWJpbmluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNvQ2hpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNjYWxlQ2FyZFJlYWwoMC40NSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMzsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZUNhcmRzLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoJ01hdUJpbmguTWVDYXJkJykub2ZmRHJhZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFhlcFhvbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5YRVBfTEFJOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBDbWQuUmVjZWl2ZWRYZXBMYWkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBSZWNlaXZlZFhlcExhaSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29tYmluaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNvQ2hpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkuc2NhbGVDYXJkUmVhbCgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lQ2FyZHMuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudCgnTWF1QmluaC5NZUNhcmQnKS5hY3RpdmVEcmFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4RGFuZ1hlcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLktFVF9USFVDOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBDbWQuUmVjZWl2ZWRFbmRHYW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggUmVjZWl2ZWRFbmRHYW1lIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25Ib2xkUm9vbSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lb3V0QmV0dGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU29DaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbWJpbmluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVDdXJyZW50Q2hpLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTM7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lQ2FyZHMuY2hpbGRyZW5baW5kZXhdLmdldENvbXBvbmVudCgnTWF1QmluaC5NZUNhcmQnKS5vZmZEcmFnKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZUNhcmRzLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoJ01hdUJpbmguTWVDYXJkJykucmVzZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJwbGF5ZXJSZXN1bHRMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJjaGFpckluZGV4XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcIm1hdWJpbmhUeXBlXCI6IDcsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcImNoaTFcIjogWzUwLCA0OSwgNDcsIDQ1LCAzOF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcImNoaTJcIjogWzM1LCAzNCwgMzMsIDI3LCAyM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcImNoaTNcIjogWzIxLCAxNSwgNV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcIm1vbmV5SW5DaGlcIjogWzAsIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJtb25leUF0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcIm1vbmV5Q29tbW9uXCI6IC0xMjAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcIm1vbmV5U2FwXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcImN1cnJlbnRNb25leVwiOiAxODA2MzYxMFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcImNoYWlySW5kZXhcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwibWF1YmluaFR5cGVcIjogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiY2hpMVwiOiBbMzksIDM3LCAzNiwgNTEsIDQxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiY2hpMlwiOiBbMjIsIDIwLCAzMiwgMjksIDI0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiY2hpM1wiOiBbMTYsIDEyLCA0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwibW9uZXlJbkNoaVwiOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcIm1vbmV5QXRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwibW9uZXlDb21tb25cIjogMTE3NjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJtb25leVNhcFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJjdXJyZW50TW9uZXlcIjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRpbWVFbmRHYW1lXCI6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllclJlc3VsdExpc3QgPSByZXNbXCJwbGF5ZXJSZXN1bHRMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVFbmRHYW1lID0gcmVzW1widGltZUVuZEdhbWVcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsQmV0dGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgTWUgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGF5ZXJSZXN1bHRMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBwbGF5ZXJSZXN1bHRMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKHJlc3VsdC5jaGFpckluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xICYmIHNlYXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbENhcmRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoaTNbMF0sIHJlc3VsdC5jaGkzWzFdLCByZXN1bHQuY2hpM1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jaGkyWzBdLCByZXN1bHQuY2hpMlsxXSwgcmVzdWx0LmNoaTJbMl0sIHJlc3VsdC5jaGkyWzNdLCByZXN1bHQuY2hpMls0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5jaGkxWzBdLCByZXN1bHQuY2hpMVsxXSwgcmVzdWx0LmNoaTFbMl0sIHJlc3VsdC5jaGkxWzNdLCByZXN1bHQuY2hpMVs0XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZUNhcmRJZCA9IENhcmRVdGlscy5nZXROb3JtYWxJZCh0b3RhbENhcmRzW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVDYXJkcy5jaGlsZHJlblthXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXN1bHQuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5yZXNldFJlc3VsdEdhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5wcmVwYXJlRnhBY3Rpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zY2FsZUNhcmRSZWFsKDAuNDUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb0NoaSgxLCBwbGF5ZXJSZXN1bHRMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkNISUFfQkFJOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBDbWQuUmVjZWl2ZWRDaGlhQmFpKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggUmVjZWl2ZWRDaGlhQmFpIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2FyZExpc3RcIjogWzQ2LCA0MiwgNDEsIDM1LCAzMywgMzEsIDMwLCAyMywgMjIsIDE1LCA5LCA1LCAyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1hdUJpbmhcIjogNixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVJZFwiOiA5ODU5ODgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY291bnRkb3duXCI6IDYwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU29DaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbWJpbmluZy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRMaXN0ID0gcmVzW1wiY2FyZExpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF1QmluaCA9IHJlc1tcIm1hdUJpbmhcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ2FtZUlkID0gcmVzW1wiZ2FtZUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvdW50ZG93biA9IHJlc1tcImNvdW50ZG93blwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dEJldHRpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0QmV0dGluZyA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCZXR0aW5nQ291bnREb3duKGNvdW50ZG93bik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTsgLy8gMjAwMFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gY2FyZExpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBSZWNlaXZlZENoaWFCYWkgY3VycmVudENhcmQgOiBcIiwgdGhpcy5jdXJyZW50Q2FyZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJDaGlDdW9pID0gW3RoaXMuY3VycmVudENhcmRbMF0sIHRoaXMuY3VycmVudENhcmRbMV0sIHRoaXMuY3VycmVudENhcmRbMl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyckNoaUdpdWEgPSBbdGhpcy5jdXJyZW50Q2FyZFszXSwgdGhpcy5jdXJyZW50Q2FyZFs0XSwgdGhpcy5jdXJyZW50Q2FyZFs1XSwgdGhpcy5jdXJyZW50Q2FyZFs2XSwgdGhpcy5jdXJyZW50Q2FyZFs3XV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyQ2hpRGF1ID0gW3RoaXMuY3VycmVudENhcmRbOF0sIHRoaXMuY3VycmVudENhcmRbOV0sIHRoaXMuY3VycmVudENhcmRbMTBdLCB0aGlzLmN1cnJlbnRDYXJkWzExXSwgdGhpcy5jdXJyZW50Q2FyZFsxMl1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNoZWNrIGN1cnJlbnRDYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nQ2FyZCh0aGlzLmN1cnJlbnRDYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nQ2FyZChhcnJDaGlDdW9pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nQ2FyZChhcnJDaGlHaXVhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9nQ2FyZChhcnJDaGlEYXUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyU2VhdEV4aXN0ID0gdGhpcy5nZXROdW1QbGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnVtUGxheWVyID0gYXJyU2VhdEV4aXN0Lmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmREZWFsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZW4gfCBIaWRlIGNhcmRzIG5vdCB1c2UgLT4gTWF1IGJpbmggbmhpZXUgbGEgYmFpIHF1YSBuZW4gY2hpIGNoaWEgNCBsYSB0dW9uZyB0cnVuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENtZC5Db2RlLk1BWF9QTEFZRVIgKiBjYXJkRGVhbDsgaW5kZXgrKykgeyAvLyA0IHBsYXllcnMgKiA0IGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0RlYWwuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGluZGV4ID49IG51bVBsYXllciAqIGNhcmREZWFsID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuW2luZGV4XS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVTaGlwID0gMC4xOyAvLyAwLjE1XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIENhcmRzIHVzZWQgdG8gZWFjaCBwbGF5ZXIgam9pbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGNhcmREZWFsOyBhKyspIHsgLy8gcGxheWVycyB4IDQgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBiID0gMDsgYiA8IG51bVBsYXllcjsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSBhcnJTZWF0RXhpc3RbYl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZDRNZSA9IHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuWyhhICogbnVtUGxheWVyKSArIGJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhd1BsYXllclBvcyA9IG5ldyBjYy5WZWMyKHRoaXMuZ3JvdXBQbGF5ZXJzLmNoaWxkcmVuW3NlYXRJZF0ucG9zaXRpb24ueCx0aGlzLmdyb3VwUGxheWVycy5jaGlsZHJlbltzZWF0SWRdLnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggQ0hJQV9CQUkgZGVsYXlUaW1lIDogXCIsICgoYSAqIG51bVBsYXllcikgKyBiKSAqIHRpbWVTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQ0TWUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoKChhICogbnVtUGxheWVyKSArIGIpICogdGltZVNoaXApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yLCByYXdQbGF5ZXJQb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlbGF5T3ZlcjJVbmRlciA9IDAuMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXhEZWxheSA9ICgoKGNhcmREZWFsIC0gMSkgKiBudW1QbGF5ZXIpICsgKG51bVBsYXllciAtIDEpKSAqIHRpbWVTaGlwOyAvLyAoKGEgKiBudW1QbGF5ZXIpICsgYikgKiB0aW1lU2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVVbmRlckxheWVyID0gKG1heERlbGF5ICsgMC4yICsgZGVsYXlPdmVyMlVuZGVyKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQ0hJQV9CQUkgdGltZVVuZGVyTGF5ZXIgOiBcIiwgdGltZVVuZGVyTGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoaWFCYWlEb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dENoaWFCYWlEb25lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENtZC5Db2RlLk1BWF9QTEFZRVIgKiBjYXJkRGVhbDsgaW5kZXgrKykgeyAvLyA0IHBsYXllcnMgKiAzIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJDSElBX0JBSSBjYXJkc0RlYWwgaW5kZXggOiBcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bVBsYXllcjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdEV4aXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERyb3AgbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldENhcmRSZWFkeShzZWF0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWwoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWR5KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZW4gTWUgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnByZXBhcmVUb1RyYW5zZm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBjYXJkSWQgOiBcIiwgY2FyZExpc3RbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNhcmRMaXN0W2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRPcGVuID0gdGhpcy5tZUNhcmRzLmNoaWxkcmVuW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkT3Blbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkT3Blbi5nZXRDb21wb25lbnQoXCJNYXVCaW5oLk1lQ2FyZFwiKS5zZXR1cENhcmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNfVXBwZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZDogY2FyZExpc3RbYV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS50cmFuc2Zvcm1Ub0NhcmRSZWFsKGEsIHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXSwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbkF1dG9CaW5oU29DaGkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNvQ2hpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzR29vZCA9IG1hdUJpbmggPT0gQ21kLkNvZGUuVFlQRV9CSU5IX0xVTkcgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGVOYW1lID0gdGhpcy5nZXRCaW5oTmFtZShtYXVCaW5oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnJlc2V0UmVzdWx0R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXVCaW5oICE9IENtZC5Db2RlLlRZUEVfQklOSF9USFVPTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5wbGF5RnhSZXN1bHRHZW5lcmFsKDAsIGlzR29vZCwgdHlwZU5hbWUsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtUGxheWVyOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJTZWF0RXhpc3RbaW5kZXhdICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoYXJyU2VhdEV4aXN0W2luZGV4XSkucGxheUZ4RGFuZ1hlcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBuZXcgRGV0ZWN0UGxheWVyQ2FyZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmluaXRDYXJkKHRoaXMuY3VycmVudENhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB4LmdldFBsYXllckNhcmRzSW5mbyh0aGlzLmlzVGluaEFjZSk7IC8vIGlzVGluaEFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJjb21wbGV0ZU1vdmVDYXJkIHJlc3VsdCA6IFwiLCByZXN1bHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyckNoaUN1b2kgPSBbdGhpcy5jdXJyZW50Q2FyZFswXSwgdGhpcy5jdXJyZW50Q2FyZFsxXSwgdGhpcy5jdXJyZW50Q2FyZFsyXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyckNoaUdpdWEgPSBbdGhpcy5jdXJyZW50Q2FyZFszXSwgdGhpcy5jdXJyZW50Q2FyZFs0XSwgdGhpcy5jdXJyZW50Q2FyZFs1XSwgdGhpcy5jdXJyZW50Q2FyZFs2XSwgdGhpcy5jdXJyZW50Q2FyZFs3XV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyckNoaURhdSA9IFt0aGlzLmN1cnJlbnRDYXJkWzhdLCB0aGlzLmN1cnJlbnRDYXJkWzldLCB0aGlzLmN1cnJlbnRDYXJkWzEwXSwgdGhpcy5jdXJyZW50Q2FyZFsxMV0sIHRoaXMuY3VycmVudENhcmRbMTJdXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaExpZ2h0Q2FyZHMoMywgcmVzdWx0LmNoaUN1b2ksIGFyckNoaUN1b2kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaExpZ2h0Q2FyZHMoMiwgcmVzdWx0LmNoaUdpdWEsIGFyckNoaUdpdWEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlnaExpZ2h0Q2FyZHMoMSwgcmVzdWx0LmNoaURhdSwgYXJyQ2hpRGF1KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVDdXJyZW50Q2hpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUN1cnJlbnRDaGkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjEuIFwiICsgdGhpcy5nZXRDaGlOYW1lKHJlc3VsdC5jaGlEYXUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFibGVDdXJyZW50Q2hpLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIyLiBcIiArIHRoaXMuZ2V0Q2hpTmFtZShyZXN1bHQuY2hpR2l1YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUN1cnJlbnRDaGkuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjMuIFwiICsgdGhpcy5nZXRDaGlOYW1lKHJlc3VsdC5jaGlDdW9pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0NhcmRSZWFsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWR5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpbWVVbmRlckxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRVX0RPTkdfQkFUX0RBVTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkQXV0b1N0YXJ0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggUmVjZWl2ZUF1dG9TdGFydCByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpc0F1dG9TdGFydFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwidGltZUF1dG9TdGFydFwiOiA1XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuaXNBdXRvU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0V2FpdHRpbmdDb3VudERvd24ocmVzLnRpbWVBdXRvU3RhcnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU29DaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db21iaW5pbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUN1cnJlbnRDaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllcnNQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkucmVzZXRSZXN1bHRHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhTb0NoaVRvdGFsLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meFNvQ2hpVG90YWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5USE9OR19USU5fQkFOX0NIT0k6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IENtZC5SZWNlaXZlZEdhbWVJbmZvKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggUmVjZWl2ZWRHYW1lSW5mbyByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlY29ubmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVVJUm9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VUlQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2hhaXJcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImdhbWVTdGF0ZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiZ2FtZUFjdGlvblwiOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY291bnRkb3duVGltZVwiOiA0NixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1vbmV5QmV0XCI6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm1vbmV5VHlwZVwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiZ2FtZUlkXCI6IDU1NTY2MDksXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJyb29tSWRcIjogOTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJydWxlXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJoYXNJbmZvXCI6IFt0cnVlLCB0cnVlLCB0cnVlLCB0cnVlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInBsYXllcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcInNvY2hpXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJzdGF0dXNcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiYXZhdGFyXCI6IFwiM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJ1c2VySWRcIjogMTE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJuaWNrTmFtZVwiOiBcInRvaWNoYW5nY29naVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJjdXJyZW50TW9uZXlcIjogNjIyMzA4NVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcInNvY2hpXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJzdGF0dXNcIjogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiYXZhdGFyXCI6IFwiNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJ1c2VySWRcIjogNDAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJuaWNrTmFtZVwiOiBcInRyYXVsdWN4Y1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJjdXJyZW50TW9uZXlcIjogODYzODg3XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwic29jaGlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcInN0YXR1c1wiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJhdmF0YXJcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcInVzZXJJZFwiOiA2Nzg5NTg5LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJuaWNrTmFtZVwiOiBcIk5hcGdhbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiY3VycmVudE1vbmV5XCI6IDEwMjUwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJjYXJkTGlzdFwiOiBbMjEsIDIwLCAxLCAwLCAxOSwgMjcsIDI0LCA0MiwgMzksIDI4LCA0NSwgNDQsIDQ5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwic29jaGlcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcInN0YXR1c1wiOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJhdmF0YXJcIjogXCI2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBcInVzZXJJZFwiOiA2NzkwODk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgXCJuaWNrTmFtZVwiOiBcInZuX3N0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIFwiY3VycmVudE1vbmV5XCI6IDEwMDAwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15Q2hhaXIgPSByZXNbXCJteUNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVTdGF0ZSA9IHJlc1tcImdhbWVTdGF0ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lQWN0aW9uID0gcmVzW1wiZ2FtZUFjdGlvblwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudERvd25UaW1lID0gcmVzW1wiY291bnREb3duVGltZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb25leUJldCA9IHJlc1tcIm1vbmV5QmV0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vbmV5VHlwZSA9IHJlc1tcIm1vbmV5VHlwZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBnYW1lSWQgPSByZXNbXCJnYW1lSWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm9vbUlkID0gcmVzW1wicm9vbUlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJ1bGUgPSByZXNbXCJydWxlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhc0luZm8gPSByZXNbXCJoYXNJbmZvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllcnMgPSByZXNbXCJwbGF5ZXJzXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsUm9vbUlkLnN0cmluZyA9IFwiTeG6rFUgQklOSCAtIFBIw5JORzogXCIgKyByb29tSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsUm9vbUJldC5zdHJpbmcgPSBcIk3hu6hDIEPGr+G7okM6IFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKG1vbmV5QmV0KSArIFwiJFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSb29tQmV0ID0gbW9uZXlCZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNUaW5oQWNlID0gcnVsZSA9PSAxID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gcGxheWVyc1tteUNoYWlyXS5jYXJkTGlzdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllcklkID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllclswXS5wbGF5ZXJQb3MgPSBteUNoYWlyO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgTWUgOiBcIiwgY29uZmlnUGxheWVyWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNldHVwTWF0Y2ggY29uZmlnUGxheWVyICA6IFwiLCBjb25maWdQbGF5ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtUGxheWVycyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhhc0luZm8ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0luZm9baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bVBsYXllcnMgKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyUGxheWVyUG9zRXhpc3QucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggbnVtUGxheWVycyA6IFwiLCBudW1QbGF5ZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dXAgY29uZmlnUGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllclthXS5wbGF5ZXJQb3MgPSBkZWZhdWx0UGxheWVyUG9zW215Q2hhaXJdW2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluZFBvcyA9IGFyclBsYXllclBvc0V4aXN0LmluZGV4T2YoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlYXRJZCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oc2VhdElkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5kUG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhpc3QgcGxheWVyIC0+IFNldCBQbGF5ZXIgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VhdFBsYXllcihzZWF0SWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBwbGF5ZXJzW2ZpbmRQb3NdLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiBwYXJzZUludChwbGF5ZXJzW2ZpbmRQb3NdLmF2YXRhciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25leTogcGxheWVyc1tmaW5kUG9zXS5jdXJyZW50TW9uZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllcnNbZmluZFBvc10uc3RhdHVzID09IENtZC5Db2RlLlBMQVlFUl9TVEFUVVNfVklFV0VSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4Vmlld2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5pc1ZpZXdlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldElzVmlld2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWR5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0NhcmRSZWFsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzW2ZpbmRQb3NdLnNvY2hpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wbGF5RnhYZXBYb25nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeERhbmdYZXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU29DaGkuYWN0aXZlID0gIXBsYXllcnNbZmluZFBvc10uc29jaGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db21iaW5pbmcuYWN0aXZlID0gcGxheWVyc1tmaW5kUG9zXS5zb2NoaTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0J0bkludml0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIE1lIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2FyZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaG93Q2FyZFJlYWR5KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnByZXBhcmVUb1RyYW5zZm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgdGhpcy5jdXJyZW50Q2FyZC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXIgY2FyZElkIDogXCIsIHRoaXMuY3VycmVudENhcmRbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKHRoaXMuY3VycmVudENhcmRbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lU3RhdGUgPT0gQ21kLkNvZGUuU1RBVEVfUExBWUlORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCZXR0aW5nQ291bnREb3duKGNvdW50RG93blRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuREFOR19LWV9USE9BVF9QSE9ORzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIFJlY2VpdmVkTm90aWZ5UmVnT3V0Um9vbSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJvdXRDaGFpclwiOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaXNPdXRSb29tXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0Q2hhaXIgPSByZXNbXCJvdXRDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc091dFJvb20gPSByZXNbXCJpc091dFJvb21cIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3Mob3V0Q2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNPdXRSb29tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiU+G6r3AgcuG7nWkgYsOgbiAhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Tm90aWZ5KFwiS2jDtCBNw6F1ICFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuTU9JX0RBVF9DVU9DOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBDbWQuUmVjZWl2ZWRNb2lEYXRDdW9jKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggUmVjZWl2ZWRNb2lEYXRDdW9jIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInRpbWVEYXRDdW9jXCI6IDIwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCZXR0aW5nQ291bnREb3duKHJlcy50aW1lRGF0Q3VvYyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlYXRPd25lciA9PSAwKSB7IC8vIE1lIGxhIENodW9uZyAtPiBLIGRjIGJldCB2YSBrIGRjIHZhbyBnYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU29DaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db21iaW5pbmcuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Tb0NoaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29tYmluaW5nLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkNIRUFUX0NBUkRTOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggQ0hFQVRfQ0FSRFNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5EQU5HX0tZX0NIT0lfVElFUDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIERBTkdfS1lfQ0hPSV9USUVQXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuVVBEQVRFX09XTkVSX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBVUERBVEVfT1dORVJfUk9PTVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkpPSU5fUk9PTV9TVUNDRVNTOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBKT0lOX1JPT01fU1VDQ0VTU1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IENtZC5SZWNlaXZlZEpvaW5Sb29tU3VjY2VlZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VVSVJvb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBNYXRjaChyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuTEVBVkVfR0FNRTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkVXNlckxlYXZlUm9vbShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIFJlY2VpdmVkVXNlckxlYXZlUm9vbSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNoYWlyXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJuaWNrTmFtZVwiOiBcImNoYW9hZTk5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5lZWQgY2xlYXIgY29uZmlnUGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkID09IHNlYXRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucmVzZXRQbGF5ZXJJbmZvKHNlYXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dCdG5JbnZpdGUodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJyU2VhdEV4aXN0TGFzdCA9IHRoaXMuZ2V0TnVtUGxheWVycygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJTZWF0RXhpc3RMYXN0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQbGF5ZXJzUGxheWluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZSBsZWF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgVUlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5VSV9QbGF5aW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlVJX0Nob29zZVJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlc2hMaXN0Um9vbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLk5PVElGWV9LSUNLX0ZST01fUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkS2lja09mZihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIFJlY2VpdmVkS2lja09mZiByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5ORVdfVVNFUl9KT0lOOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBDbWQuUmVjZWl2ZWRVc2VySm9pblJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBSZWNlaXZlZFVzZXJKb2luUm9vbSByZXMgOiBcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJpbmZvXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIFwibmlja05hbWVcIjogXCJBaG9hbmc4OFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgXCJhdmF0YXJcIjogXCI3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICBcIm1vbmV5XCI6IDEwMjMwMDgwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2hhaXJcIjogNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcInVTdGF0dXNcIjogMVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0gcmVzW1wiaW5mb1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNoYWlyID0gcmVzW1wibXlDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1U3RhdHVzID0gcmVzW1widVN0YXR1c1wiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0IFN0YXRlIG9mIFNlYXQgOiBZZXMgfCBObyBleGlzdCBQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zID09IG15Q2hhaXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhpc3QgcGxheWVyIC0+IFNldCBQbGF5ZXIgSW5mb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5yZXNldFBsYXllckluZm8oc2VhdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbVBsYXllckluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF2YXRhclwiOiBpbmZvW1wiYXZhdGFyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuaWNrTmFtZVwiOiBpbmZvW1wibmlja05hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vbmV5XCI6IGluZm9bXCJtb25leVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgY3VzdG9tUGxheWVySW5mbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVTdGF0dXMgPT0gQ21kLkNvZGUuUExBWUVSX1NUQVRVU19WSUVXRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltzZWF0SWRdLmlzVmlld2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXRJc1ZpZXdlcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wbGF5RnhWaWV3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltzZWF0SWRdLmlzVmlld2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuTk9USUZZX1VTRVJfR0VUX0pBQ0tQT1Q6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBOT1RJRllfVVNFUl9HRVRfSkFDS1BPVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLlVQREFURV9NQVRDSDpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkVXBkYXRlTWF0Y2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBSZWNlaXZlZFVwZGF0ZU1hdGNoIHJlcyA6IFwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIm15Q2hhaXJcIjogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImhhc0luZm9cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaW5mb3NcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm5pY2tOYW1lXCI6IFwibmVzdGxlMTAzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXZhdGFyXCI6IFwiN1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm1vbmV5XCI6IDU1NjA4NjAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJpbWVsZGRhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwiYXZhdGFyXCI6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm1vbmV5XCI6IDM4NTI4NTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwic3RhdHVzXCI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJWTl9TdGFyMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcImF2YXRhclwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiA1NzAzNTcyLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcIm5pY2tOYW1lXCI6IFwiZ3ZuZ3ZuNDU2N1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcImF2YXRhclwiOiBcIjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiAyNzQ5Njg3LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIFwibmlja05hbWVcIjogXCJza3lwZW5vblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcImF2YXRhclwiOiBcIjVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgXCJtb25leVwiOiA1MDUxMzYzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBcInN0YXR1c1wiOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXlDaGFpciA9IHJlc1tcIm15Q2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzSW5mbyA9IHJlc1tcImhhc0luZm9cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mb3MgPSByZXNbXCJpbmZvc1wiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgOiBcIiwgY29uZmlnUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZW8gUG9zIGtob25nIHBoYWkgU2VhdElkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaGFzSW5mby5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllclBvc1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzSW5mb1twb3NdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldEdvbGQgc2UgaW5hY3RpdmUgaXNWaWV3ZXIgbmVuIGRhdCBubyBsZW4gZGF1IGRlIGJlbiBkdW9pIGNvbmZpZyBsYWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0R29sZChpbmZvc1twb3NdW1wibW9uZXlcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wicGxheWVySWRcIl0gPSBpbmZvc1twb3NdW1wibmlja05hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvc1twb3NdW1wic3RhdHVzXCJdID09IENtZC5Db2RlLlBMQVlFUl9TVEFUVVNfU0lUVElORyB8fCBpbmZvc1twb3NdW1wic3RhdHVzXCJdID09IENtZC5Db2RlLlBMQVlFUl9TVEFUVVNfUExBWUlORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRJc1ZpZXdlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wiaXNWaWV3ZXJcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5wbGF5RnhWaWV3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VhdFBsYXllcihpbmRleCwgaW5mb3NbcG9zXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllcklkXCJdID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc2V0dXBNYXRjaCBjb25maWdQbGF5ZXIgOiBcIiwgY29uZmlnUGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIENtZC5Db2RlLkNIQVRfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgQ21kLlJlY2VpdmVkQ2hhdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBDSEFUX1JPT00gcmVzIDogXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjaGFpclwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiaXNJY29uXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJjb250ZW50XCI6IFwiNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibmlja25hbWVcIjogXCJjaGFvYWU5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiY2hhaXJcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImlzSWNvblwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcImNvbnRlbnRcIjogXCJsYWxhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwibmlja25hbWVcIjogXCJjaGFvYWU5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNJY29uID0gcmVzW1wiaXNJY29uXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSByZXNbXCJjb250ZW50XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSWNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYXQgSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDaGF0RW1vdGlvbihjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYXQgTXNnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0NoYXRNc2coY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCItLWlucGFja2V0LmdldENtZElkKCk6IFwiICsgaW5wYWNrZXQuZ2V0Q21kSWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0XG4gICAgYWN0aW9uTGVhdmVSb29tKCkge1xuICAgICAgICBNYXVCaW5oTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IENtZC5DbWRTZW5kUmVxdWVzdExlYXZlR2FtZSgpKTtcbiAgICB9XG5cbiAgICBhY3Rpb25Ib2xkUm9vbSgpIHtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDbWQuQ21kU2VuZEhvbGRSb29tKCkpO1xuICAgIH1cblxuICAgIGFjdGlvbkJhb0JpbmgoKSB7XG4gICAgICAgIHRoaXMuYnRuU29DaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuQ29tYmluaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIE1hdUJpbmhOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ21kLlNlbmRCYW9CaW5oKCkpO1xuICAgIH1cblxuICAgIGFjdGlvbkJpbmhTb0NoaSgpIHtcbiAgICAgICAgbGV0IGFyckNoaUN1b2kgPSBbdGhpcy5jdXJyZW50Q2FyZFswXSwgdGhpcy5jdXJyZW50Q2FyZFsxXSwgdGhpcy5jdXJyZW50Q2FyZFsyXV07XG4gICAgICAgIGxldCBhcnJDaGlHaXVhID0gW3RoaXMuY3VycmVudENhcmRbM10sIHRoaXMuY3VycmVudENhcmRbNF0sIHRoaXMuY3VycmVudENhcmRbNV0sIHRoaXMuY3VycmVudENhcmRbNl0sIHRoaXMuY3VycmVudENhcmRbN11dO1xuICAgICAgICBsZXQgYXJyQ2hpRGF1ID0gW3RoaXMuY3VycmVudENhcmRbOF0sIHRoaXMuY3VycmVudENhcmRbOV0sIHRoaXMuY3VycmVudENhcmRbMTBdLCB0aGlzLmN1cnJlbnRDYXJkWzExXSwgdGhpcy5jdXJyZW50Q2FyZFsxMl1dO1xuXG4gICAgICAgIC8vICBjYy5sb2coXCJDaGVjayBjdXJyZW50Q2FyZCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXCIpO1xuICAgICAgICB0aGlzLmxvZ0NhcmQodGhpcy5jdXJyZW50Q2FyZCk7XG4gICAgICAgIHRoaXMubG9nQ2FyZChhcnJDaGlDdW9pKTtcbiAgICAgICAgdGhpcy5sb2dDYXJkKGFyckNoaUdpdWEpO1xuICAgICAgICB0aGlzLmxvZ0NhcmQoYXJyQ2hpRGF1KTtcblxuICAgICAgICBNYXVCaW5oTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IENtZC5TZW5kQmluaFNvQ2hpKGFyckNoaURhdSwgYXJyQ2hpR2l1YSwgYXJyQ2hpQ3VvaSkpO1xuICAgIH1cblxuICAgIGFjdGlvbkF1dG9CaW5oU29DaGkoKSB7XG4gICAgICAgIHJldHVybjsgLy8gT3BlbiB3aWxsIGVycm9yIC0+IE1lIGF1dG8gbGVhdmUgcm9vbSBcbiAgICAgICAgbGV0IGFyckNoaUN1b2kgPSBbdGhpcy5jdXJyZW50Q2FyZFswXSwgdGhpcy5jdXJyZW50Q2FyZFsxXSwgdGhpcy5jdXJyZW50Q2FyZFsyXV07XG4gICAgICAgIGxldCBhcnJDaGlHaXVhID0gW3RoaXMuY3VycmVudENhcmRbM10sIHRoaXMuY3VycmVudENhcmRbNF0sIHRoaXMuY3VycmVudENhcmRbNV0sIHRoaXMuY3VycmVudENhcmRbNl0sIHRoaXMuY3VycmVudENhcmRbN11dO1xuICAgICAgICBsZXQgYXJyQ2hpRGF1ID0gW3RoaXMuY3VycmVudENhcmRbOF0sIHRoaXMuY3VycmVudENhcmRbOV0sIHRoaXMuY3VycmVudENhcmRbMTBdLCB0aGlzLmN1cnJlbnRDYXJkWzExXSwgdGhpcy5jdXJyZW50Q2FyZFsxMl1dO1xuXG4gICAgICAgIE1hdUJpbmhOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgQ21kLlNlbmRBdXRvQmluaFNvQ2hpKGFyckNoaURhdSwgYXJyQ2hpR2l1YSwgYXJyQ2hpQ3VvaSkpO1xuICAgIH1cblxuICAgIGFjdGlvblhlcExhaSgpIHtcbiAgICAgICAgdGhpcy5idG5Tb0NoaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0bkNvbWJpbmluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgTWF1QmluaE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBDbWQuU2VuZFhlcExhaSgpKTtcbiAgICB9XG5cbiAgICBjYXJkU2VsZWN0KGNhcmRfaW5mbywgY2FyZF9wb3MsIGNhcmRfSWQpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcImNhcmRTZWxlY3QgY2FyZF9pbmZvIDogXCIsIGNhcmRfaW5mby5jYXJkKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcImNhcmRTZWxlY3QgY2FyZF9wb3MgIDogXCIsIGNhcmRfcG9zKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcImNhcmRTZWxlY3QgY2FyZF9pZCAgOiBcIiwgY2FyZF9JZCk7XG5cbiAgICAgICAgdGhpcy5jYXJkTW92ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRNb3ZlLnNldFBvc2l0aW9uKGNhcmRfcG9zLngsIGNhcmRfcG9zLnkgLSA5NSk7XG4gICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQoY2FyZF9pbmZvLmNhcmQpO1xuICAgICAgICB0aGlzLmNhcmRNb3ZlLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdO1xuXG4gICAgICAgIHRoaXMuY2FyZE1vdmVJZCA9IGNhcmRfSWQ7XG4gICAgICAgIHRoaXMuY2FyZE1vdmVWYWx1ZSA9IGNhcmRfaW5mby5jYXJkO1xuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkucmVzZXRSZXN1bHRHYW1lKCk7XG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMTM7IGErKykge1xuICAgICAgICAgICAgdGhpcy5tZUNhcmRzLmNoaWxkcmVuW2FdLmdldENvbXBvbmVudChcIk1hdUJpbmguTWVDYXJkXCIpLnNldENhcmRTaGFkb3coZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaGFkb3dDYXJkKGEsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNb3ZlVGFyZ2V0KHRhcmdldE5hbWUpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInNob3dNb3ZlVGFyZ2V0IDogXCIsIHRhcmdldE5hbWUpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkVGFyZ2V0ID0gdGhpcy5tZUNhcmRzLmNoaWxkcmVuW2luZGV4XS5nZXRDb21wb25lbnQoXCJNYXVCaW5oLk1lQ2FyZFwiKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSB0YXJnZXROYW1lKSB7XG4gICAgICAgICAgICAgICAgY2FyZFRhcmdldC5zZXRDYXJkU2hhZG93KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjYXJkVGFyZ2V0LnNldENhcmRGb2N1cyh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZFRhcmdldC5zZXRDYXJkU2hhZG93KHRydWUpO1xuICAgICAgICAgICAgICAgIGNhcmRUYXJnZXQuc2V0Q2FyZEZvY3VzKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlTW92ZUNhcmQodGFyZ2V0TmFtZSkge1xuICAgICAgICAvKiBJZCB2YWx1ZSAtIE5vZGUgXG4gICAgICAgIDAsMSwyICAgICAgICAgY2hpQ3VvaVxuICAgICAgICAzLDQsNSw2LDcgICAgIGNoaUdpdWFcbiAgICAgICAgOCw5LDEwLDExLDEyICAgICBjaGlEYXVcbiAgICAgICAgKi9cblxuICAgICAgICAvLyAgY2MubG9nKFwiY29tcGxldGVNb3ZlQ2FyZCBmcm9tIGlkICAgOiBcIiwgdGhpcy5jYXJkTW92ZUlkKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcImNvbXBsZXRlTW92ZUNhcmQgdGFyZ2V0IGlkIDogXCIsIHRhcmdldE5hbWUpO1xuXG4gICAgICAgIC8vICBjYy5sb2coXCJjb21wbGV0ZU1vdmVDYXJkIGZyb20gaW5mbyAgIDogXCIsIHRoaXMuY3VycmVudENhcmRbdGhpcy5jYXJkTW92ZUlkXSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJjb21wbGV0ZU1vdmVDYXJkIHRhcmdldCBpbmZvIDogXCIsIHRoaXMuY3VycmVudENhcmRbdGFyZ2V0TmFtZV0pO1xuXG4gICAgICAgIGxldCBjYXJkRnJvbSA9IHRoaXMuY3VycmVudENhcmRbdGhpcy5jYXJkTW92ZUlkXTtcbiAgICAgICAgbGV0IGNhcmRUbyA9IHRoaXMuY3VycmVudENhcmRbdGFyZ2V0TmFtZV07XG4gICAgICAgIC8vICBjYy5sb2coXCJjb21wbGV0ZU1vdmVDYXJkIGNhcmRGcm9tIDEgOiBcIiwgY2FyZEZyb20pO1xuICAgICAgICAvLyAgY2MubG9nKFwiY29tcGxldGVNb3ZlQ2FyZCBjYXJkVG8gICAxIDogXCIsIGNhcmRUbyk7XG4gICAgICAgIHRoaXMuY3VycmVudENhcmRbdGhpcy5jYXJkTW92ZUlkXSA9IGNhcmRUbztcbiAgICAgICAgdGhpcy5jdXJyZW50Q2FyZFt0YXJnZXROYW1lXSA9IGNhcmRGcm9tO1xuICAgICAgICAvLyAgY2MubG9nKFwiY29tcGxldGVNb3ZlQ2FyZCBjYXJkRnJvbSAyIDogXCIsIHRoaXMuY3VycmVudENhcmRbdGhpcy5jYXJkTW92ZUlkXSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJjb21wbGV0ZU1vdmVDYXJkIGNhcmRUbyAyICAgOiBcIiwgdGhpcy5jdXJyZW50Q2FyZFt0YXJnZXROYW1lXSk7XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcImNvbXBsZXRlTW92ZUNhcmQgY3VycmVudENhcmQgOiBcIiwgdGhpcy5jdXJyZW50Q2FyZCk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgY2FyZF9pZCA9IHRoaXMuY3VycmVudENhcmRbaW5kZXhdOyAgICAgIC8vIHtcImNhcmRcIjo0LFwiZmFjZVwiOjJ9XG4gICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNhcmRfaWQpO1xuICAgICAgICAgICAgbGV0IHNyYyA9IHRoaXMuc3ByaXRlQ2FyZHNbc3ByaXRlQ2FyZElkXTtcbiAgICAgICAgICAgIGxldCBjYXJkX09wZW4gPSB0aGlzLm1lQ2FyZHMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgY2FyZF9PcGVuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYXJkX09wZW4uZ2V0Q29tcG9uZW50KFwiTWF1QmluaC5NZUNhcmRcIikudXBkYXRlQ2FyZChjYXJkX2lkLCBzcmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJkTW92ZVZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5jYXJkTW92ZUlkID0gLTE7XG5cbiAgICAgICAgbGV0IHggPSBuZXcgRGV0ZWN0UGxheWVyQ2FyZHMoKTtcbiAgICAgICAgeC5pbml0Q2FyZCh0aGlzLmN1cnJlbnRDYXJkKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHguZ2V0UGxheWVyQ2FyZHNJbmZvKHRoaXMuaXNUaW5oQWNlKTsgLy8gaXNUaW5oQWNlXG4gICAgICAgIC8vICBjYy5sb2coXCJjb21wbGV0ZU1vdmVDYXJkIHJlc3VsdCA6IFwiLCByZXN1bHQpO1xuXG4gICAgICAgIGxldCBpc0dvb2QgPSByZXN1bHQuY2FyZFR5cGUgPT0gQ21kLkNvZGUuVFlQRV9CSU5IX0xVTkcgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgIGxldCB0eXBlTmFtZSA9IHRoaXMuZ2V0QmluaE5hbWUocmVzdWx0LmNhcmRUeXBlKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5yZXNldFJlc3VsdEdhbWUoKTtcbiAgICAgICAgaWYgKHJlc3VsdC5jYXJkVHlwZSAhPSBDbWQuQ29kZS5UWVBFX0JJTkhfVEhVT05HKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnBsYXlGeFJlc3VsdEdlbmVyYWwoMCwgaXNHb29kLCB0eXBlTmFtZSwgMCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXJyQ2hpQ3VvaSA9IFt0aGlzLmN1cnJlbnRDYXJkWzBdLCB0aGlzLmN1cnJlbnRDYXJkWzFdLCB0aGlzLmN1cnJlbnRDYXJkWzJdXTtcbiAgICAgICAgbGV0IGFyckNoaUdpdWEgPSBbdGhpcy5jdXJyZW50Q2FyZFszXSwgdGhpcy5jdXJyZW50Q2FyZFs0XSwgdGhpcy5jdXJyZW50Q2FyZFs1XSwgdGhpcy5jdXJyZW50Q2FyZFs2XSwgdGhpcy5jdXJyZW50Q2FyZFs3XV07XG4gICAgICAgIGxldCBhcnJDaGlEYXUgPSBbdGhpcy5jdXJyZW50Q2FyZFs4XSwgdGhpcy5jdXJyZW50Q2FyZFs5XSwgdGhpcy5jdXJyZW50Q2FyZFsxMF0sIHRoaXMuY3VycmVudENhcmRbMTFdLCB0aGlzLmN1cnJlbnRDYXJkWzEyXV07XG5cbiAgICAgICAgLy8gIGNjLmxvZyhcIkNoZWNrIGN1cnJlbnRDYXJkID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgdGhpcy5sb2dDYXJkKHRoaXMuY3VycmVudENhcmQpO1xuICAgICAgICB0aGlzLmxvZ0NhcmQoYXJyQ2hpQ3VvaSk7XG4gICAgICAgIHRoaXMubG9nQ2FyZChhcnJDaGlHaXVhKTtcbiAgICAgICAgdGhpcy5sb2dDYXJkKGFyckNoaURhdSk7XG5cbiAgICAgICAgdGhpcy5oaWdoTGlnaHRDYXJkcygzLCByZXN1bHQuY2hpQ3VvaSwgYXJyQ2hpQ3VvaSk7XG4gICAgICAgIHRoaXMuaGlnaExpZ2h0Q2FyZHMoMiwgcmVzdWx0LmNoaUdpdWEsIGFyckNoaUdpdWEpO1xuICAgICAgICB0aGlzLmhpZ2hMaWdodENhcmRzKDEsIHJlc3VsdC5jaGlEYXUsIGFyckNoaURhdSk7XG5cbiAgICAgICAgdGhpcy50YWJsZUN1cnJlbnRDaGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50YWJsZUN1cnJlbnRDaGkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjEuIFwiICsgdGhpcy5nZXRDaGlOYW1lKHJlc3VsdC5jaGlEYXUpO1xuICAgICAgICB0aGlzLnRhYmxlQ3VycmVudENoaS5jaGlsZHJlblsyXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMi4gXCIgKyB0aGlzLmdldENoaU5hbWUocmVzdWx0LmNoaUdpdWEpO1xuICAgICAgICB0aGlzLnRhYmxlQ3VycmVudENoaS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiMy4gXCIgKyB0aGlzLmdldENoaU5hbWUocmVzdWx0LmNoaUN1b2kpO1xuXG4gICAgICAgIHRoaXMuYWN0aW9uQXV0b0JpbmhTb0NoaSgpO1xuICAgIH1cblxuICAgIGhpZ2hMaWdodENhcmRzKGNoaUlkLCBncm91cEtpbmQsIGNhcmRMaXN0KSB7XG4gICAgICAgIGxldCBzdGFydCA9IC0xO1xuICAgICAgICBsZXQgZW5kID0gLTE7XG4gICAgICAgIGlmIChjaGlJZCA9PSAzKSB7XG4gICAgICAgICAgICBzdGFydCA9IDA7XG4gICAgICAgICAgICBlbmQgPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaUlkID09IDIpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gMztcbiAgICAgICAgICAgIGVuZCA9IDg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydCA9IDg7XG4gICAgICAgICAgICBlbmQgPSAxMztcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGEgPSBzdGFydDsgYSA8IGVuZDsgYSsrKSB0aGlzLmdldFBsYXllckhvdXNlKDApLnNoYWRvd0NhcmQoYSwgdHJ1ZSk7XG5cbiAgICAgICAgc3dpdGNoIChncm91cEtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuR1JPVVBfVEhVTkdfUEhBX1NBTkg6XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX0NVX0xVOlxuICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5HUk9VUF9USFVORzpcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuR1JPVVBfU0FOSDpcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gc3RhcnQ7IGEgPCBlbmQ7IGErKykgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaGFkb3dDYXJkKGEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuR1JPVVBfVFVfUVVZOlxuICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5HUk9VUF9TQU1fQ086XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX01PVF9ET0k6XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX01BVV9USEFVOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgY2FyZExpc3QubGVuZ3RoIC0gMTsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGIgPSBhICsgMTsgYiA8IGNhcmRMaXN0Lmxlbmd0aDsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ2FyZFV0aWxzLmdldE51bWJlcihjYXJkTGlzdFthXSkgPT0gQ2FyZFV0aWxzLmdldE51bWJlcihjYXJkTGlzdFtiXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNoYWRvd0NhcmQoYSArIHN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaGFkb3dDYXJkKGIgKyBzdGFydCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5HUk9VUF9USFU6XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjYXJkTGlzdC5sZW5ndGggLSAxOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYiA9IGEgKyAxOyBiIDwgY2FyZExpc3QubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChDYXJkVXRpbHMuZ2V0TnVtYmVyKGNhcmRMaXN0W2FdKSA9PSBDYXJkVXRpbHMuZ2V0TnVtYmVyKGNhcmRMaXN0W2JdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoMCkuc2hhZG93Q2FyZChhICsgc3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKDApLnNoYWRvd0NhcmQoYiArIHN0YXJ0LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIChhID0gMDsgYSA8IGNhcmRMaXN0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNhcmRMaXN0W2FdICE9IGNhcmRMaXN0WzBdICYmIGNhcmRMaXN0W2FdICE9IGNhcmRMaXN0WzFdIHx8IHRoaXMuZ2V0UGxheWVySG91c2UoMCkuc2hhZG93Q2FyZChhICsgc3RhcnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhdGVcbiAgICBpbml0Q29uZmlnUGxheWVyKCkge1xuICAgICAgICBjb25maWdQbGF5ZXIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IENtZC5Db2RlLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbmZpZ1BsYXllci5wdXNoKHtcbiAgICAgICAgICAgICAgICBzZWF0SWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIHBsYXllcklkOiAtMSxcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3M6IC0xLFxuICAgICAgICAgICAgICAgIGlzVmlld2VyOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBjb25maWdQbGF5ZXIgOiBcIiwgY29uZmlnUGxheWVyKTtcbiAgICB9XG5cbiAgICByZXNldFBsYXllcnNQbGF5aW5nKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQ21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkucmVzZXRNYXRjaEhpc3RvcnkoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIEdhbWUgUGxheWVyc1xuICAgIHNldHVwU2VhdFBsYXllcihzZWF0SWQsIHBsYXllckluZm8pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc2V0dXBTZWF0UGxheWVyIHBsYXllckluZm8gOiBcIiwgcGxheWVySW5mbyk7XG4gICAgICAgIGNvbmZpZ1BsYXllcltzZWF0SWRdLnBsYXllcklkID0gcGxheWVySW5mby5uaWNrTmFtZTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldEF2YXRhcihwbGF5ZXJJbmZvLmF2YXRhcik7XG4gICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zZXROYW1lKHBsYXllckluZm8ubmlja05hbWUpO1xuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2V0R29sZChwbGF5ZXJJbmZvLm1vbmV5KTtcbiAgICB9XG5cbiAgICBmaW5kUGxheWVyU2VhdEJ5VWlkKHVpZCkge1xuICAgICAgICBsZXQgc2VhdCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgPT09IHVpZCkge1xuICAgICAgICAgICAgICAgIHNlYXQgPSBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VhdDtcbiAgICB9XG5cbiAgICBmaW5kUGxheWVyUG9zQnlTZWF0KHNlYXQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZ1BsYXllcltzZWF0XS5wbGF5ZXJQb3M7XG4gICAgfVxuXG4gICAgZmluZFBsYXllclNlYXRCeVBvcyhwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXQgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgc2VhdCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWF0O1xuICAgIH1cblxuICAgIGdldFBsYXllckhvdXNlKHNlYXRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cFBsYXllcnMuY2hpbGRyZW5bc2VhdElkXS5nZXRDb21wb25lbnQoXCJNYXVCaW5oLlBsYXllclwiKTtcbiAgICB9XG5cbiAgICBnZXROdW1QbGF5ZXJzKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgY29uZmlnUGxheWVyIDogXCIsIGNvbmZpZ1BsYXllcik7XG4gICAgICAgIHZhciBwbGF5ZXJQb3NFbnRyeSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllclBvc0VudHJ5IHBsYXllcklkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInBsYXllclBvc0VudHJ5IGlzVmlld2VyIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XG4gICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCAhPT0gLTEgJiYgIWNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NFbnRyeS5wdXNoKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgc2VhdElkIDogXCIsIGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyAgY2MubG9nKFwicGxheWVyUG9zRW50cnkgOiBcIiwgcGxheWVyUG9zRW50cnkpO1xuICAgICAgICByZXR1cm4gcGxheWVyUG9zRW50cnk7XG4gICAgfVxuXG4gICAgZ2V0QmluaE5hbWUobWF1YmluaFR5cGUpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKG1hdWJpbmhUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRZUEVfU0FOSF9ST05HOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIlPhuqNuaCBS4buTbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuVFlQRV9NVU9JX0JBX0NBWV9ET05HX01BVTpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJNxrDhu51pIEJhIEPDonkgxJDhu5NuZyBNw6B1XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRZUEVfTVVPSV9IQUlfQ0FZX0RPTkdfTUFVOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIk3GsOG7nWkgSGFpIEPDonkgxJDhu5NuZyBNw6B1XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRZUEVfQkFfQ0FJX1RIVU5HOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIkJhIEPDoWkgVGjDuW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRZUEVfQkFfQ0FJX1NBTkg6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiQmEgQ8OhaSBT4bqjbmhcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuVFlQRV9MVUNfUEhFX0JPTjpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJM4bulYyBQaOG6vyBCw7RuXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLlRZUEVfQklOSF9USFVPTkc6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiQmluaCBUaMaw4budbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuVFlQRV9CSU5IX0xVTkc6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiQmluaCBM4bunbmdcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgbmVlZFNvQ2hpKHBsYXllclJlc3VsdExpc3QpIHtcbiAgICAgICAgbGV0IGEgPSAwO1xuICAgICAgICBmb3IgKHZhciBiID0gMDsgYiA8IHBsYXllclJlc3VsdExpc3QubGVuZ3RoOyBiKyspIHtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJSZXN1bHRMaXN0W2JdLm1hdWJpbmhUeXBlID09IENtZC5Db2RlLlRZUEVfQklOSF9USFVPTkcpIHtcbiAgICAgICAgICAgICAgICBhKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDIgPD0gYTtcbiAgICB9XG5cbiAgICBuZWVkU2hvd01vbmV5V2hlblNvQ2hpKHBsYXllclJlc3VsdExpc3QpIHtcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBwbGF5ZXJSZXN1bHRMaXN0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICB2YXIgYiA9IHBsYXllclJlc3VsdExpc3RbYV07XG4gICAgICAgICAgICBpZiAoMCA9PSBiLmNoYWlySW5kZXggJiYgYi5tYXViaW5oVHlwZSAhPSBDbWQuQ29kZS5UWVBFX0JJTkhfVEhVT05HKSByZXR1cm4gITFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gITBcbiAgICB9XG5cbiAgICBuZWVkQmF0U2FwKHBsYXllclJlc3VsdExpc3QpIHtcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBwbGF5ZXJSZXN1bHRMaXN0Lmxlbmd0aDsgYSsrKVxuICAgICAgICAgICAgaWYgKDAgIT0gcGxheWVyUmVzdWx0TGlzdFthXS5tb25leVNhcCkgcmV0dXJuICEwO1xuICAgICAgICByZXR1cm4gITFcbiAgICB9XG5cbiAgICBzb0NoaShjaGlJZCwgcGxheWVyUmVzdWx0TGlzdCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaCBzb0NoaSBpZCA6IFwiLCBjaGlJZCk7XG5cbiAgICAgICAgLy8gaGlkZSByZXN1bHQgY2hpIDEgLSAzIDogbm90IGhpZGUgZ2VuZXJhbFxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQ21kLkNvZGUuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkucmVzZXRSZXN1bHRDaGkoMSk7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5yZXNldFJlc3VsdENoaSgyKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnJlc2V0UmVzdWx0Q2hpKDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzTmVlZFNvQ2hpID0gdGhpcy5uZWVkU29DaGkocGxheWVyUmVzdWx0TGlzdCk7XG4gICAgICAgIGxldCBpc05lZWRTaG93TW9uZXlXaGVuU29DaGkgPSB0aGlzLm5lZWRTaG93TW9uZXlXaGVuU29DaGkocGxheWVyUmVzdWx0TGlzdCk7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIHNvQ2hpIGlzTmVlZFNvQ2hpIDogXCIsIGlzTmVlZFNvQ2hpKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmggc29DaGkgaXNOZWVkU2hvd01vbmV5V2hlblNvQ2hpIDogXCIsIGlzTmVlZFNob3dNb25leVdoZW5Tb0NoaSk7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYXllclJlc3VsdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gcGxheWVyUmVzdWx0TGlzdFtpbmRleF07XG4gICAgICAgICAgICBsZXQgY2hhaXIgPSByZXN1bHRbJ2NoYWlySW5kZXgnXTtcblxuICAgICAgICAgICAgbGV0IHRvdGFsQ2FyZHMgPSBbXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNoaTNbMF0sIHJlc3VsdC5jaGkzWzFdLCByZXN1bHQuY2hpM1syXSxcbiAgICAgICAgICAgICAgICByZXN1bHQuY2hpMlswXSwgcmVzdWx0LmNoaTJbMV0sIHJlc3VsdC5jaGkyWzJdLCByZXN1bHQuY2hpMlszXSwgcmVzdWx0LmNoaTJbNF0sXG4gICAgICAgICAgICAgICAgcmVzdWx0LmNoaTFbMF0sIHJlc3VsdC5jaGkxWzFdLCByZXN1bHQuY2hpMVsyXSwgcmVzdWx0LmNoaTFbM10sIHJlc3VsdC5jaGkxWzRdXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbGV0IHggPSBuZXcgRGV0ZWN0UGxheWVyQ2FyZHMoKTtcbiAgICAgICAgICAgIHguaW5pdENhcmQodG90YWxDYXJkcyk7XG4gICAgICAgICAgICBsZXQgcGxheWVyQ2FyZEluZm8gPSB4LmdldFBsYXllckNhcmRzSW5mbyh0aGlzLmlzVGluaEFjZSk7IC8vIGlzVGluaEFjZVxuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNvQ2hpIHBsYXllckNhcmRJbmZvIDogXCIsIHBsYXllckNhcmRJbmZvKTtcblxuICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNvQ2hpIHNlYXRJZCA6IFwiLCBzZWF0SWQpO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJzb0NoaSBtYXViaW5oVHlwZSA6IFwiLCByZXN1bHQubWF1YmluaFR5cGUpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWF1YmluaFR5cGUgPT0gQ21kLkNvZGUuVFlQRV9CSU5IX1RIVU9ORyAmJiBpc05lZWRTb0NoaSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTbyBDaGkgLT4gU2hvdyBjYXJkIHR1bmcgY2hpIDFcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNvQ2hpIGNhc2UgMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwcml0ZUlkID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIGxldCBnb2xkQ2hpID0gcmVzdWx0Lm1vbmV5SW5DaGlbY2hpSWQgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaUlkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUlkID0gcGxheWVyQ2FyZEluZm8uY2hpRGF1O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNoaUlkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUlkID0gcGxheWVyQ2FyZEluZm8uY2hpR2l1YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUlkID0gcGxheWVyQ2FyZEluZm8uY2hpQ3VvaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4Q29tcGFyZUNoaShjaGlJZCwgdGhpcy5zcHJpdGVHcm91cENhcmRbc3ByaXRlSWRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTmVlZFNob3dNb25leVdoZW5Tb0NoaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeEdvbGRTb0NoaShnb2xkQ2hpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgY2FyZHMgY2hpXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlJZCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IDM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQocmVzdWx0LmNoaTNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wcmVwYXJlQ2FyZFJlYWwoYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdLCBzZWF0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxHb2xkQ2hpID0gcmVzdWx0Lm1vbmV5SW5DaGlbMF0gKyByZXN1bHQubW9uZXlJbkNoaVsxXSArIHJlc3VsdC5tb25leUluQ2hpWzJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbEdvbGRDaGkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4V2luU29DaGkodG90YWxHb2xkQ2hpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4TG9zZVNvQ2hpKHRvdGFsR29sZENoaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjUwMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpSWQgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCA1OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKHJlc3VsdC5jaGkyW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucHJlcGFyZUNhcmRSZWFsKGEgKyAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkudHJhbnNmb3JtVG9DYXJkUmVhbChhICsgMywgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdLCBzZWF0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCA1OyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKHJlc3VsdC5jaGkxW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucHJlcGFyZUNhcmRSZWFsKGEgKyA4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkudHJhbnNmb3JtVG9DYXJkUmVhbChhICsgOCwgdGhpcy5zcHJpdGVDYXJkc1tzcHJpdGVDYXJkSWRdLCBzZWF0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gS2hvbmcgY2FuIFNvIGNoaSAtPiBTaG93IHRhdCBjYXJkIHJhXG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJzb0NoaSBjYXNlIDJcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlJZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgLy8gc2hvdyBBbGwgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJzb0NoaSBjYXNlIDIgY2hpSWQgPT0gMVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubWF1YmluaFR5cGUgPT0gQ21kLkNvZGUuVFlQRV9CSU5IX1RIVU9ORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgQmluaCBUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNvQ2hpIGNhc2UgMiBjaGlJZCA9PSAxID0gVFlQRV9CSU5IX1RIVU9OR1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyQ2FyZEluZm8uY2hpRGF1IDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucGxheUZ4Q29tcGFyZUNoaShjaGlJZCwgdGhpcy5zcHJpdGVHcm91cENhcmRbcGxheWVyQ2FyZEluZm8uY2hpRGF1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckNhcmRJbmZvLmNoaUdpdWEgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wbGF5RnhDb21wYXJlQ2hpKGNoaUlkLCB0aGlzLnNwcml0ZUdyb3VwQ2FyZFtwbGF5ZXJDYXJkSW5mby5jaGlHaXVhXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckNhcmRJbmZvLmNoaUdpdWEgPT0gQ21kLkNvZGUuR1JPVVBfU0FNX0NPKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wbGF5RnhDb21wYXJlQ2hpKGNoaUlkLCB0aGlzLnNwcml0ZUdyb3VwQ2FyZFtwbGF5ZXJDYXJkSW5mby5jaGlDdW9pXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNHb29kID0gcmVzdWx0Lm1hdWJpbmhUeXBlID09IENtZC5Db2RlLlRZUEVfQklOSF9MVU5HID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eXBlTmFtZSA9IHRoaXMuZ2V0QmluaE5hbWUocmVzdWx0Lm1hdWJpbmhUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucmVzZXRSZXN1bHRHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFJlc3VsdEdlbmVyYWwoc2VhdElkLCBpc0dvb2QsIHR5cGVOYW1lLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsQ2FyZHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoaTNbMF0sIHJlc3VsdC5jaGkzWzFdLCByZXN1bHQuY2hpM1syXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuY2hpMlswXSwgcmVzdWx0LmNoaTJbMV0sIHJlc3VsdC5jaGkyWzJdLCByZXN1bHQuY2hpMlszXSwgcmVzdWx0LmNoaTJbNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmNoaTFbMF0sIHJlc3VsdC5jaGkxWzFdLCByZXN1bHQuY2hpMVsyXSwgcmVzdWx0LmNoaTFbM10sIHJlc3VsdC5jaGkxWzRdXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDEzOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKHRvdGFsQ2FyZHNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lQ2FyZHMuY2hpbGRyZW5bYV0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRzW3Nwcml0ZUNhcmRJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnByZXBhcmVUb1RyYW5zZm9ybSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkudHJhbnNmb3JtVG9DYXJkUmVhbChhLCB0aGlzLnNwcml0ZUNhcmRzW3Nwcml0ZUNhcmRJZF0sIHNlYXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDEzOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5zaGFkb3dDYXJkKGEsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZUNhcmRzLmNoaWxkcmVuW2FdLmdldENvbXBvbmVudChcIk1hdUJpbmguTWVDYXJkXCIpLnNldENhcmRTaGFkb3coZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05lZWRTb0NoaSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi41KSwgLy8zc1xuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpSWQgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNvQ2hpIHNob3dHb2xkUmVzdWx0IHJlY2FsbCBzb0NoaVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvQ2hpKGNoaUlkICsgMSwgcGxheWVyUmVzdWx0TGlzdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJzb0NoaSBzaG93R29sZFJlc3VsdCBubyByZWNhbGwgc29DaGlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93R29sZFJlc3VsdChwbGF5ZXJSZXN1bHRMaXN0LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhdFNhcChwbGF5ZXJSZXN1bHRMaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBzaG93IEdvbGRcbiAgICAgICAgICAgIHRoaXMuc2hvd0dvbGRSZXN1bHQocGxheWVyUmVzdWx0TGlzdCwgMTAwMCk7XG4gICAgICAgICAgICB0aGlzLmJhdFNhcChwbGF5ZXJSZXN1bHRMaXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dHb2xkUmVzdWx0KHBsYXllclJlc3VsdExpc3QsIGRlbGF5VGltZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGF5ZXJSZXN1bHRMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBwbGF5ZXJSZXN1bHRMaXN0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXN1bHRbJ2NoYWlySW5kZXgnXTtcbiAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnJlc2V0UmVzdWx0R2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lm1vbmV5Q29tbW9uID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmZ4V2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25leUNoYW5nZTogcmVzdWx0Lm1vbmV5Q29tbW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbmV5OiByZXN1bHQuY3VycmVudE1vbmV5ID09IDAgPyAtMSA6IHJlc3VsdC5jdXJyZW50TW9uZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLmZ4TG9zZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXlDaGFuZ2U6IHJlc3VsdC5tb25leUNvbW1vbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25leTogcmVzdWx0LmN1cnJlbnRNb25leSA9PSAwID8gLTEgOiByZXN1bHQuY3VycmVudE1vbmV5XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZGVsYXlUaW1lKTtcbiAgICB9XG5cbiAgICBiYXRTYXAocGxheWVyUmVzdWx0TGlzdCkge1xuICAgICAgICAvLyAgY2MubG9nKFwic29DaGkgYmF0U2FwXCIpO1xuICAgICAgICBpZiAodGhpcy5uZWVkQmF0U2FwKHBsYXllclJlc3VsdExpc3QpKSB7XG4gICAgICAgICAgICBsZXQgY291bnRXaW4gPSAwO1xuICAgICAgICAgICAgbGV0IGNvdW50TG9zZSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyUmVzdWx0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKHBsYXllclJlc3VsdExpc3RbaW5kZXhdLmNoYWlySW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEgJiYgc2VhdElkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllclJlc3VsdExpc3RbaW5kZXhdLm1vbmV5U2FwID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnRMb3NlICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyUmVzdWx0TGlzdFtpbmRleF0ubW9uZXlTYXAgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRXaW4gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5meFNvQ2hpVG90YWwuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwbGF5ZXJSZXN1bHRMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MocGxheWVyUmVzdWx0TGlzdFtpbmRleF0uY2hhaXJJbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudExvc2UgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50TG9zZSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmlfc2FwX2xhbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlU29DaGlUb3RhbFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2FwXzNfY2hpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meFNvQ2hpVG90YWwuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZVNvQ2hpVG90YWxbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yNSwgMS4xLCAxLjEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMjUsIDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMjUsIDEuMSwgMS4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjI1LCAxLCAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhTb0NoaVRvdGFsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnRXaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50V2luID09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYXRfc2FwX2xhbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlU29DaGlUb3RhbFsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjI1LCAxLjEsIDEuMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMjUsIDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjI1LCAxLjEsIDEuMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMjUsIDEsIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZ4U29DaGlUb3RhbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJSZXN1bHRMaXN0W2luZGV4XS5tb25leVNhcCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNhcF8zX2NoaVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnBsYXlGeFNvQ2hpVG90YWwodGhpcy5zcHJpdGVTb0NoaVRvdGFsWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc29BdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29BdCgpIHtcbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIC8vIHNvIEF0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaW5oIHRpZW4gY2h1bmdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldENoaU5hbWUoaWQpIHtcbiAgICAgICAgbGV0IG5hbWUgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX1RIVU5HX1BIQV9TQU5IOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIlRow7luZyBQaMOhIFPhuqNuaFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5HUk9VUF9UVV9RVVk6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiVOG7qSBRdcO9XCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX0NVX0xVOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIkPDuSBMxalcIjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQ21kLkNvZGUuR1JPVVBfVEhVTkc6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiVGjDuW5nXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX1NBTkg6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiU+G6o25oXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX1NBTV9DTzpcbiAgICAgICAgICAgICAgICBuYW1lID0gXCJTw6FtIEPDtFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5HUk9VUF9USFU6XG4gICAgICAgICAgICAgICAgbmFtZSA9IFwiVGjDulwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBDbWQuQ29kZS5HUk9VUF9NT1RfRE9JOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIk3hu5l0IMSQw7RpXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENtZC5Db2RlLkdST1VQX01BVV9USEFVOlxuICAgICAgICAgICAgICAgIG5hbWUgPSBcIk3huq11IFRo4bqndVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG5cblxuICAgIGxvZ0NhcmQoYXJyQ2FyZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFyckNhcmQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihhcnJDYXJkW2luZGV4XSAvIDQpICsgMjtcbiAgICAgICAgICAgIGxldCBmYWNlID0gYXJyQ2FyZFtpbmRleF0gJSA0O1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG51bSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIkFcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiS1wiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCJRXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIkpcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IG51bTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoZmFjZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwi4pmgIFwiOyAvL0JcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCLimaMgXCI7IC8vVFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIuKZpiBcIjsgLy9SXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwi4pmlIFwiOyAvL0NcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gIGNjLmxvZyhcIkNoZWNrIGN1cnJlbnRDYXJkIFZpc3VhbCA6IFwiLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkgeyB9XG59XG4iXX0=