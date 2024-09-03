"use strict";
cc._RF.push(module, 'd8c0clk/LdHK5HHnJP3Kgny', 'BaCay.Controller');
// BaCay/BaCayScript/BaCay.Controller.ts

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
exports.NodeShowCard = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var BaCay_CardUtil_1 = require("./BaCay.CardUtil");
var BaCay_Cmd_1 = require("./BaCay.Cmd");
var BaCay_NetworkClient_1 = require("./BaCay.NetworkClient");
var BaCay_Room_1 = require("./BaCay.Room");
var TW = cc.tween;
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["BG"] = 0] = "BG";
    audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
    audio_clip[audio_clip["WIN"] = 2] = "WIN";
    audio_clip[audio_clip["CHIA_BAI"] = 3] = "CHIA_BAI";
    audio_clip[audio_clip["CHIP"] = 4] = "CHIP";
    audio_clip[audio_clip["CLOCK"] = 5] = "CLOCK";
    audio_clip[audio_clip["START_BET"] = 6] = "START_BET";
})(audio_clip || (audio_clip = {}));
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
var NodeShowCard = /** @class */ (function () {
    function NodeShowCard() {
        this.cardHide1 = null;
        this.cardHide2 = null;
        this.cardShow = null;
        this.userHand = null;
        this.userFinger = null;
        this.nodeThis = null;
        this.animHand = null;
    }
    NodeShowCard.prototype.setInfo = function () {
        var _this = this;
        this.nodeThis.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            _this.animHand.node.active = false;
            var delta = touch.getDelta();
            if (delta.x > 0 && _this.cardShow.angle > -30) {
                if (_this.cardShow.angle < -12) {
                    _this.cardHide2.angle -= delta.x / 40;
                }
                _this.cardShow.angle -= delta.x / 20;
                _this.userFinger.angle -= delta.x / 20;
            }
        });
        this.nodeThis.on(cc.Node.EventType.TOUCH_END, function (touch) {
            if (_this.cardShow.angle < -20) {
                _this.hide();
                BaCayController.instance.showCardReal();
            }
        });
    };
    NodeShowCard.prototype.show = function (currentCard) {
        var _this = this;
        this.animHand.node.active = false;
        this.nodeThis.getChildByName("animHand").active = true;
        this.cardHide2.angle = -2;
        this.cardShow.angle = -5;
        this.userFinger.angle = 0;
        this.cardShow.getComponent("TienLen.Card").setCardData(currentCard[0]);
        this.cardHide2.getComponent("TienLen.Card").setCardData(currentCard[1]);
        this.cardHide1.getComponent("TienLen.Card").setCardData(currentCard[2]);
        cc.Tween.stopAllByTarget(this.userHand);
        TW(this.userHand).set({ angle: 90 }).to(0.5, { angle: 0 }, { easing: cc.easing.sineOut }).call(function () {
            _this.setInfo();
        }).start();
    };
    NodeShowCard.prototype.hide = function () {
        var _this = this;
        TW(this.userHand).to(0.5, { angle: 90 }, { easing: cc.easing.sineIn })
            .call(function () {
            _this.nodeThis.active = false;
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NodeShowCard.prototype, "cardHide1", void 0);
    __decorate([
        property(cc.Node)
    ], NodeShowCard.prototype, "cardHide2", void 0);
    __decorate([
        property(cc.Node)
    ], NodeShowCard.prototype, "cardShow", void 0);
    __decorate([
        property(cc.Node)
    ], NodeShowCard.prototype, "userHand", void 0);
    __decorate([
        property(cc.Node)
    ], NodeShowCard.prototype, "userFinger", void 0);
    __decorate([
        property(cc.Node)
    ], NodeShowCard.prototype, "nodeThis", void 0);
    __decorate([
        property(sp.Skeleton)
    ], NodeShowCard.prototype, "animHand", void 0);
    NodeShowCard = __decorate([
        ccclass("BaCay.Controller.NodeShowCard")
    ], NodeShowCard);
    return NodeShowCard;
}());
exports.NodeShowCard = NodeShowCard;
var BaCayController = /** @class */ (function (_super) {
    __extends(BaCayController, _super);
    function BaCayController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitedUIRoom = false;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.nodeSetting = null;
        _this.bgChat = null;
        _this.contentChatNhanh = null;
        _this.boxSetting = null;
        // UI Playing
        _this.UI_Playing = null;
        _this.meCards = null;
        _this.groupPlayers = null;
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
        _this.popupGuide = null;
        _this.soundManager = null;
        _this.nodeShowCard = null;
        _this.seatOwner = null;
        _this.currentRoomBet = null;
        _this.gameState = null; //0-waiting,1-cuoc,2-Chia Bai
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
        _this.listDataRoom = [];
        _this.listFullRoom = [];
        _this.arrBetPos = [-157.5, -52.5, 52.5, 157.5];
        _this.currentBetSelectedIndex = 0;
        _this.currentMatchPotValue = 0;
        _this.timeoutEndGame = null;
        _this.timeoutChiaBaiDone = null;
        _this.arrPosDanhBien = [];
        _this.timeInBg = 0;
        return _this;
    }
    BaCayController_1 = BaCayController;
    // LIFE-CYCLE CALLBACKS:
    BaCayController.prototype.onLoad = function () {
        BaCayController_1.instance = this;
        // this.UI_Playing.active = false;
        this.soundManager = BaCay_Room_1.default.instance.soundManager;
        this.seatOwner = -1;
        this.initConfigPlayer();
    };
    BaCayController.prototype.showSetting = function () {
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.nodeSetting.active = true;
    };
    BaCayController.prototype.hideSetting = function () {
        this.nodeSetting.active = false;
    };
    BaCayController.prototype.onBtnToggleMusic = function () {
        SPUtils_1.default.setMusicVolumn(this.toggleMusic.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
    };
    BaCayController.prototype.onBtnToggleSound = function () {
        SPUtils_1.default.setSoundVolumn(this.toggleSound.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
    };
    BaCayController.prototype.onBtnSetting = function () {
        this.boxSetting.active = !this.boxSetting.active;
    };
    BaCayController.prototype.onBtnClickBgChat = function () {
        this.UI_Chat.opacity = 100;
        this.bgChat.active = false;
    };
    BaCayController.prototype.onBtnClickBoxChat = function () {
        this.UI_Chat.opacity = 255;
        this.bgChat.active = true;
    };
    BaCayController.prototype.start = function () {
        // this.showUIRooms();
        this.setupTimeRunInBg();
        this.bgChat.active = false;
        var self = this;
        var _loop_1 = function () {
            var node = this_1.contentChatNhanh.children[i];
            node.on('click', function () {
                self.chatNhanhMsg(node.children[0].getComponent(cc.Label).string);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) {
            _loop_1();
        }
        this.setupListener();
        this.unschedule(this.intervalBetting);
        this.soundManager.stopAudioEffect();
    };
    BaCayController.prototype.setupTimeRunInBg = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () {
            _this.timeInBg = cc.sys.now();
        });
        cc.game.on(cc.game.EVENT_SHOW, function () {
            var timeNow = cc.sys.now();
            var timeHide = _this.timeInBg;
            cc.director.getActionManager().update((timeNow - timeHide) / 1000);
            cc.Tween.stopAllByTag(1);
            if ((timeNow - timeHide) / 1000 > 15) {
                _this.node.active = false;
                // this.UI_ChooseRoom.active = true;
                BaCay_Room_1.default.instance.node.active = true;
                _this.refeshListRoom();
                App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_out_game'));
            }
        });
    };
    ;
    BaCayController.prototype.genCardDeal = function () {
        if (this.cardsDeal.childrenCount == 1) {
            for (var i = 1; i < 24; i++) {
                this.cardsDeal.addChild(cc.instantiate(this.cardsDeal.children[0]));
            }
        }
    };
    // Request UI Room
    BaCayController.prototype.joinRoom = function (info) {
        if (Configs_1.default.Login.Coin < info.requiredMoney) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough_money"));
            return;
        }
        App_1.default.instance.showLoading(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendJoinRoomById(info["id"]));
    };
    BaCayController.prototype.refeshListRoom = function () {
        // this.contentListRooms.removeAllChildren(true);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendGetListRoom());
    };
    BaCayController.prototype.toggleUIChat = function () {
        if (this.UI_Chat.active == false) {
            this.showUIChat();
        }
        else {
            this.closeUIChat();
        }
    };
    // Chat
    BaCayController.prototype.showUIChat = function () {
        this.onBtnClickBoxChat();
        this.UI_Chat.active = true;
        // this.UI_Chat.runAction(
        //     cc.moveTo(0.5, 420, 0)
        // );
        this.UI_Chat.active = true;
        cc.tween(this.UI_Chat).to(0.3, { x: cc.winSize.width / 2 - this.UI_Chat.width / 2 }, { easing: cc.easing.sineOut }).start();
    };
    BaCayController.prototype.closeUIChat = function () {
        var _this = this;
        // this.UI_Chat.runAction(
        //     cc.moveTo(0.5, 1000, 0)
        // );
        this.onBtnClickBgChat();
        cc.tween(this.UI_Chat).to(0.3, { x: cc.winSize.width / 2 + this.UI_Chat.width / 2 }, { easing: cc.easing.sineIn }).call(function () {
            _this.UI_Chat.active = false;
        }).start();
    };
    BaCayController.prototype.chatEmotion = function (event, id) {
        cc.log("BaCay chatEmotion id : ", id);
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    BaCayController.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    BaCayController.prototype.chatNhanhMsg = function (msg) {
        if (msg.trim().length > 0) {
            BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendChatRoom(0, msg));
            this.closeUIChat();
        }
    };
    BaCayController.prototype.showPopupGuide = function () {
        this.popupGuide.active = true;
    };
    BaCayController.prototype.closePopupGuide = function () {
        this.popupGuide.active = false;
    };
    BaCayController.prototype.closeUIPlaying = function () {
        this.actionLeaveRoom();
    };
    BaCayController.prototype.setupMatch = function (data) {
        this.closePopupMatchResult();
        this.closeUIChat();
        for (var index = 1; index < 8; index++) {
            var player = this.getPlayerHouse(index);
            player.showPopupBet(false);
            player.closePopupRequestDanhBien();
        }
        cc.log("BaCay setupMatch data : ", data);
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
        this.labelRoomId.string = roomId + "";
        this.labelRoomBet.string = Utils_1.default.formatNumber(moneyBet);
        this.currentRoomBet = moneyBet;
        this.gameState = gameAction;
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
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
        this.resetHubChips();
        for (var a = 0; a < configPlayer.length; a++) {
            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        }
        // set State of Seat : Yes | No exist Player
        for (var index = 0; index < configPlayer.length; index++) {
            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
            var seatId = configPlayer[index].seatId;
            var player = this.getPlayerHouse(seatId);
            player.resetPlayerInfo();
            if (findPos > -1) {
                if (arrPlayerStatus[findPos] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_SITTING || arrPlayerStatus[findPos] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
                    configPlayer[index].isViewer = false;
                    player.setIsViewer(false);
                }
                else {
                    configPlayer[index].isViewer = true;
                    player.setIsViewer(true);
                    player.playFxViewer();
                }
                this.setupSeatPlayer(seatId, arrPlayerInfo[findPos]);
            }
            else {
                // Not Exist player  -> Active Btn Add player
                player.showBtnInvite(true);
                configPlayer[index].isViewer = true;
            }
        }
        for (var index = 0; index < 8; index++) {
            var player = this.getPlayerHouse(index);
            player.setOwner(false);
        }
        var seatOwner = this.findPlayerSeatByPos(chuongChair);
        var playerOwner = this.getPlayerHouse(seatOwner);
        if (seatOwner !== -1) {
            playerOwner.setOwner(true);
            this.seatOwner = seatOwner;
        }
        if (countDownTime > 0) {
            if (this.gameState == 1)
                this.startBettingCountDown(countDownTime);
            else if (this.getNumPlayers().length < 0) {
                this.startEndCountDown(countDownTime);
            }
        }
    };
    // Time Start
    BaCayController.prototype.startWaittingCountDown = function (timeWait) {
        var _this = this;
        this.timeAutoStart = timeWait;
        this.setTimeWaittingCountDown();
        this.notifyTimeStart.active = true;
        this.notifyTimeStart.parent.active = true;
        this.unschedule(this.intervalWaitting);
        this.unschedule(this.intervalEnd);
        this.schedule(this.intervalWaitting = function () {
            _this.timeAutoStart--;
            _this.setTimeWaittingCountDown();
            if (_this.timeAutoStart < 1) {
                _this.unschedule(_this.intervalWaitting);
                _this.notifyTimeStart.active = false;
                _this.notifyTimeStart.parent.active = false;
            }
        }, 1);
    };
    BaCayController.prototype.setTimeWaittingCountDown = function () {
        this.seconds = Math.floor(this.timeAutoStart % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = " Bắt đầu sau : " + this.seconds + "s ";
    };
    // Time End
    BaCayController.prototype.startEndCountDown = function (timeWait) {
        var _this = this;
        this.timeEnd = timeWait;
        this.setTimeEndCountDown();
        // this.notifyTimeEnd.active = true;
        // this.notifyTimeEnd.parent.active = true;
        this.notifyTimeStart.active = true;
        this.notifyTimeStart.parent.active = true;
        this.unschedule(this.intervalEnd);
        this.unschedule(this.intervalWaitting);
        this.schedule(this.intervalEnd = function () {
            _this.timeEnd--;
            _this.setTimeEndCountDown();
            if (_this.timeEnd < 1) {
                _this.unschedule(_this.intervalEnd);
                _this.notifyTimeEnd.active = false;
                _this.notifyTimeEnd.parent.active = false;
            }
        }, 1);
    };
    BaCayController.prototype.setTimeEndCountDown = function () {
        this.seconds = Math.floor(this.timeEnd % 60);
        this.notifyTimeStart.getComponent(cc.Label).string = App_1.default.instance.getTextLang('txt_end_after') + " " + this.seconds + "s ";
    };
    // Time Bet
    BaCayController.prototype.startBettingCountDown = function (turnTime) {
        var _this = this;
        this.timeBet = turnTime;
        this.actionBetting.active = true;
        this.processBetting(1);
        this.unschedule(this.intervalBetting);
        this.soundManager.stopAudioEffect();
        var deltaTime = turnTime / 200;
        var deltaFill = 1 / 200;
        var fullRange = 1;
        cc.Tween.stopAllByTarget(this.actionBetting);
        cc.tween(this.actionBetting).repeat(200, cc.tween().delay(deltaTime).call(function () {
            fullRange -= deltaFill;
            _this.timeBet -= deltaTime;
            _this.processBetting(fullRange);
            if (_this.timeBet < 0) {
                _this.actionBetting.active = false;
            }
        })).start();
        this.intervalBetting = this.schedule(function () {
            _this.soundManager.playAudioEffect(audio_clip.CLOCK);
        }, 1, turnTime);
    };
    BaCayController.prototype.stopBettingCountDown = function () {
        cc.Tween.stopAllByTarget(this.actionBetting);
        this.unschedule(this.intervalBetting);
        this.actionBetting.active = false;
    };
    BaCayController.prototype.processBetting = function (rate) {
        this.actionBetting.getChildByName("Step").getComponent(cc.Sprite).fillRange = rate;
    };
    // Open Me Card
    BaCayController.prototype.openMeCard = function (event, itemId) {
        // Open Me cards
        if (this.getPlayerHouse(0).isShowCard == false) {
            this.nodeShowCard.nodeThis.active = true;
            var currenCardId_1 = [];
            this.currentCard.forEach(function (element) {
                currenCardId_1.push(BaCay_CardUtil_1.default.getNormalId(element));
            });
            this.nodeShowCard.show(currenCardId_1);
        }
    };
    BaCayController.prototype.getCardsScore = function (arrCards) {
        var score = 0;
        for (var a = 0; a < 3; a++) {
            score += BaCay_CardUtil_1.default.getDiemById(arrCards[a]);
        }
        score = score % 10;
        if (score == 0) {
            score = 10;
        }
        return score;
    };
    BaCayController.prototype.moveChipsToHubNow = function (index) {
        this.hubChips.children[2 * index].setPosition(25, 80);
        this.hubChips.children[2 * index].scale = 0;
        this.hubChips.children[(2 * index) + 1].setPosition(25, 80);
        this.hubChips.children[(2 * index) + 1].scale = 0;
    };
    BaCayController.prototype.fxMoveChips = function (chips, delay, toX, toY) {
        chips.runAction(cc.sequence(cc.delayTime(delay), cc.scaleTo(0, 1, 1), cc.spawn(cc.moveTo(0.8, toX, toY), cc.scaleTo(0.8, 0, 0))));
    };
    BaCayController.prototype.resetHubChips = function () {
        var arrFromX = [70, 280, 280, 260, 100, -260, -375, -360];
        var arrFromY = [-195, -150, -55, 70, 90, 85, -30, -155];
        for (var index = 0; index < 8; index++) {
            this.hubChips.children[2 * index].setPosition(arrFromX[index], arrFromY[index]);
            this.hubChips.children[(2 * index) + 1].setPosition(arrFromX[index], arrFromY[index]);
        }
        for (var index = 0; index < 16; index++) {
            this.hubChips.children[index].active = false;
        }
    };
    BaCayController.prototype.setupBet = function () {
        // arrBetValue
        this.currentBetSelectedIndex = 0;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    // match result
    BaCayController.prototype.showPopupMatchResult = function (data) {
        this.popupMatchResult.active = true;
        this.contentMatchResult.removeAllChildren(true);
        for (var index = 0; index < data.length; index++) {
            var item = cc.instantiate(this.prefabItemResult);
            item.getComponent("BaCay.ItemResult").initItem(data[index]);
            this.contentMatchResult.addChild(item);
        }
        this.scrollMatchResult.scrollToTop(0.2);
    };
    BaCayController.prototype.closePopupMatchResult = function () {
        this.popupMatchResult.active = false;
    };
    // addListener
    BaCayController.prototype.setupListener = function () {
        var _this = this;
        BaCay_NetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case BaCay_Cmd_1.default.Code.LOGIN:
                    App_1.default.instance.showLoading(false);
                    _this.refeshListRoom();
                    BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdReconnectRoom());
                    break;
                case BaCay_Cmd_1.default.Code.TOPSERVER:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedTopServer(data);
                        var rankType = res["rankType"];
                        var topDay_money = res["topDay_money"];
                        var topWeek_money = res["topWeek_money"];
                        var topMonth_money = res["topMonth_money"];
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CMD_PINGPONG:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CMD_JOIN_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CMD_RECONNECT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.MONEY_BET_CONFIG:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.MO_BAI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedMoBai(data);
                        var chairMoBai = res["chairMoBai"];
                        var cards = res["cards"];
                        var seatId_1 = _this.findPlayerSeatByPos(chairMoBai);
                        var player = _this.getPlayerHouse(seatId_1);
                        if (seatId_1 != -1 && seatId_1 != 0 && !player.isShowCard) {
                            for (var a = 0; a < 3; a++) {
                                var spriteCardId = BaCay_CardUtil_1.default.getNormalId(cards[a]);
                                player.transformToCardReal(a, spriteCardId, a);
                                player.showCardReal(true);
                            }
                            player.showCardName(_this.getCardsScore(cards) + " Điểm");
                        }
                    }
                    break;
                case BaCay_Cmd_1.default.Code.BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedFirstTurnDecision(data);
                        _this.resetHubChips();
                        _this.closePopupMatchResult();
                    }
                    break;
                case BaCay_Cmd_1.default.Code.KET_THUC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedEndGame(data);
                        _this.unschedule(_this.intervalEnd);
                        _this.notifyTimeEnd.active = false;
                        _this.notifyTimeEnd.parent.active = false;
                        // // Mo het cac la bai neu no chua dc mo
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
                        var result = [];
                        for (var index = 0; index < 8; index++) {
                            var findId = posPlaying.indexOf(configPlayer[index].playerPos);
                            var player = _this.getPlayerHouse(index);
                            if (findId !== -1) {
                                var cards = cardList[posPlaying[findId]];
                                var cardReady = player.node.children[2].children[0];
                                if (!player.isShowCard) {
                                    for (var a = 0; a < 3; a++) {
                                        if (cardReady.children[a].scale == 1) {
                                            var spriteCardId = BaCay_CardUtil_1.default.getNormalId(cards[a]);
                                            player.transformToCardReal(a, spriteCardId);
                                        }
                                    }
                                    player.showCardName(_this.getCardsScore(cards) + " Điểm");
                                }
                                result.push({
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
                                    if (index == 0) {
                                        _this.soundManager.playAudioEffect(audio_clip.WIN);
                                    }
                                    player.fxWin(info);
                                }
                                else {
                                    // Lose
                                    if (index == 0) {
                                        _this.soundManager.playAudioEffect(audio_clip.LOSE);
                                    }
                                    player.fxLose(info);
                                }
                            }
                        }
                        if (result.length > 0) {
                            setTimeout(function () {
                                _this.labelMatchPot.string = "0";
                            }, 4000);
                        }
                        _this.nodeShowCard.hide();
                        _this.stopBettingCountDown();
                    }
                    break;
                case BaCay_Cmd_1.default.Code.YEU_CAU_DANH_BIEN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedYeuCauDanhBien(data);
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
                case BaCay_Cmd_1.default.Code.CHIA_BAI:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedChiaBai(data);
                        _this.stopBettingCountDown();
                        _this.btnBet.active = false;
                        _this.btnOpenCard.active = false;
                        for (var index = 1; index < 8; index++) {
                            var player = _this.getPlayerHouse(index);
                            player.showPopupBet(false);
                            player.closePopupRequestDanhBien();
                            player.isShowCard = false;
                        }
                        _this.getPlayerHouse(0).isShowCard = false;
                        _this.matchPot.getComponent(cc.Button).interactable = false;
                        _this.matchPot.children[0].color = cc.Color.GRAY;
                        var cards = res["cards"];
                        var timeChiaBai_1 = res["timeChiaBai"];
                        clearTimeout(_this.timeoutEndGame);
                        _this.timeoutEndGame = setTimeout(function () {
                            _this.startEndCountDown(timeChiaBai_1);
                        }, 2000);
                        _this.currentCard = cards;
                        var arrSeatExist = _this.getNumPlayers();
                        var numPlayer_1 = arrSeatExist.length;
                        // Open | Hide cards not use
                        _this.genCardDeal();
                        for (var index = 0; index < 8 * 3; index++) { // 8 players * 3 cards
                            _this.cardsDeal.children[index].active = index >= numPlayer_1 * 3 ? false : true;
                            _this.cardsDeal.children[index].setPosition(0, 0);
                            _this.cardsDeal.children[index].angle = 0;
                        }
                        var timeShip = 0.1; // 0.15
                        // Move Cards used to each player joined
                        for (var a = 0; a < 3; a++) { // players x 3 cards
                            for (var b = 0; b < numPlayer_1; b++) {
                                var seatId_3 = arrSeatExist[b];
                                if (seatId_3 !== -1) {
                                    var card4Me = _this.cardsDeal.children[(a * numPlayer_1) + b];
                                    card4Me.active = true;
                                    var rawPlayerPos = new cc.Vec2(_this.groupPlayers.children[seatId_3].position.x, _this.groupPlayers.children[seatId_3].position.y);
                                    cc.tween(card4Me).delay(((a * numPlayer_1) + b) * timeShip)
                                        .parallel(cc.tween().call(function () {
                                        _this.soundManager.playAudioEffect(audio_clip.CHIA_BAI);
                                    }), cc.tween().to(0.2, { position: rawPlayerPos }, { easing: cc.easing.sineIn }), cc.tween().by(0.2, { angle: 360 }, { easing: cc.easing.sineIn })).start();
                                }
                            }
                        }
                        var delayOver2Under = 0.2;
                        var maxDelay = ((2 * numPlayer_1) + (numPlayer_1 - 1)) * timeShip; // ((a * numPlayer) + b) * timeShip
                        var timeUnderLayer = (maxDelay + 0.2 + delayOver2Under) * 1000;
                        clearTimeout(_this.timeoutChiaBaiDone);
                        _this.timeoutChiaBaiDone = setTimeout(function () {
                            for (var index = 0; index < 8 * 3; index++) { // 8 players * 3 cards
                                _this.cardsDeal.children[index].active = false;
                            }
                            for (var index = 0; index < numPlayer_1; index++) {
                                var seatId_4 = arrSeatExist[index];
                                if (seatId_4 !== -1) {
                                    // Drop layer
                                    if (seatId_4 == 0) {
                                        _this.getPlayerHouse(seatId_4).resetCardReady();
                                    }
                                    _this.getPlayerHouse(seatId_4).showCardReal(true);
                                }
                            }
                        }, timeUnderLayer);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.KE_CUA:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedKeCua(data);
                        var chairKeCuaFrom = res["chairKeCuaFrom"];
                        var chairKeCuaTo = res["chairKeCuaTo"];
                        var level = res["level"];
                    }
                    break;
                case BaCay_Cmd_1.default.Code.TU_DONG_BAT_DAU:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedAutoStart(data);
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
                case BaCay_Cmd_1.default.Code.DONG_Y_DANH_BIEN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedChapNhanDanhBien(data);
                        var danhBienChair = res["danhBienChair"];
                        var level = res["level"];
                        _this.arrPosDanhBien.push(danhBienChair);
                        var seatId_5 = _this.findPlayerSeatByPos(danhBienChair);
                        if (seatId_5 != -1) {
                            _this.getPlayerHouse(seatId_5).disableDanhBien(level);
                            _this.getPlayerHouse(seatId_5).playFxDanhBien();
                        }
                    }
                    break;
                case BaCay_Cmd_1.default.Code.DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedDatCuoc(data);
                        var chairDatCuoc = res["chairDatCuoc"];
                        var level = res["level"];
                        var seatId_6 = _this.findPlayerSeatByPos(chairDatCuoc);
                        var player = _this.getPlayerHouse(seatId_6);
                        if (seatId_6 != -1) {
                            player.setBet(_this.arrBetValue[level - 1]);
                            player.addChips();
                        }
                        _this.soundManager.playAudioEffect(audio_clip.CHIP);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.DANG_KY_THOAT_PHONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedNotifyRegOutRoom(data);
                        var outChair = res["outChair"];
                        var isOutRoom = res["isOutRoom"];
                        var seatId_7 = _this.findPlayerSeatByPos(outChair);
                        if (seatId_7 == 0) {
                            if (isOutRoom)
                                App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_leave'));
                            else
                                App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_cancel_leave'));
                        }
                        if (seatId_7 !== -1) {
                            _this.getPlayerHouse(seatId_7).showLeaveRoom(isOutRoom);
                        }
                    }
                    break;
                case BaCay_Cmd_1.default.Code.VAO_GA:
                    {
                        _this.soundManager.playAudioEffect(audio_clip.CHIP);
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedVaoGa(data);
                        var chair = res["chair"];
                        var chicKenBet = res["chicKenBet"];
                        var seatId_8 = _this.findPlayerSeatByPos(chair);
                        var player = _this.getPlayerHouse(seatId_8);
                        if (seatId_8 != -1) {
                            _this.hubChips.children[2 * seatId_8].active = true;
                            _this.hubChips.children[(2 * seatId_8) + 1].active = true;
                            _this.fxMoveChips(_this.hubChips.children[2 * seatId_8], 0.1, _this.matchPot.x, _this.matchPot.y);
                            _this.fxMoveChips(_this.hubChips.children[(2 * seatId_8) + 1], 0.2, _this.matchPot.x, _this.matchPot.y);
                            // Can cong luy ke len
                            _this.currentMatchPotValue += chicKenBet;
                            _this.labelMatchPot.string = Utils_1.default.formatNumber(_this.currentMatchPotValue);
                            player.playFxVaoGa();
                        }
                    }
                    break;
                case BaCay_Cmd_1.default.Code.DOI_CHUONG:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedDoiChuong(data);
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
                case BaCay_Cmd_1.default.Code.MOI_DAT_CUOC:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedMoiDatCuoc(data);
                        _this.startBettingCountDown(res.timeDatCuoc);
                        _this.showSliderBet();
                        _this.numCardOpened = 0;
                        _this.soundManager.playAudioEffect(audio_clip.START_BET);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CHEAT_CARDS:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.DANG_KY_CHOI_TIEP:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.UPDATE_OWNER_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.LEAVE_GAME:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedUserLeaveRoom(data);
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
                            var player = _this.getPlayerHouse(seatId_10);
                            player.resetPlayerInfo();
                            player.showBtnInvite(true);
                            var arrSeatExistLast = _this.getNumPlayers();
                            if (arrSeatExistLast.length == 1) {
                                _this.resetPlayersPlaying();
                                _this.matchPot.active = false;
                            }
                            if (seatId_10 == 0) {
                                // Me leave
                                // Change UI
                                _this.node.active = false;
                                BaCay_Room_1.default.instance.node.active = true;
                                _this.refeshListRoom();
                            }
                        }
                    }
                    break;
                case BaCay_Cmd_1.default.Code.NOTIFY_KICK_FROM_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedKickOff(data);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.NEW_USER_JOIN:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedUserJoinRoom(data);
                        var info = res["info"];
                        var uChair = res["uChair"];
                        var uStatus = res["uStatus"];
                        // set State of Seat : Yes | No exist Player
                        for (var index = 0; index < configPlayer.length; index++) {
                            var seatId = configPlayer[index].seatId;
                            var player = _this.getPlayerHouse(seatId);
                            if (configPlayer[index].playerPos == uChair) {
                                // Exist player -> Set Player Info
                                player.resetPlayerInfo();
                                var customPlayerInfo = {
                                    "avatar": info["avatar"],
                                    "nickName": info["nickName"],
                                    "money": info["money"],
                                };
                                _this.setupSeatPlayer(seatId, customPlayerInfo);
                                if (uStatus == BaCay_Cmd_1.default.Code.PLAYER_STATUS_VIEWER) {
                                    configPlayer[seatId].isViewer = true;
                                    player.setIsViewer(true);
                                    player.playFxViewer();
                                }
                                else {
                                    configPlayer[seatId].isViewer = false;
                                    player.setIsViewer(false);
                                }
                            }
                        }
                    }
                    break;
                case BaCay_Cmd_1.default.Code.NOTIFY_USER_GET_JACKPOT:
                    {
                        App_1.default.instance.showLoading(false);
                    }
                    break;
                case BaCay_Cmd_1.default.Code.UPDATE_MATCH:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedUpdateMatch(data);
                        var myChair = res["myChair"];
                        var hasInfo = res["hasInfo"];
                        var infos = res["infos"];
                        for (var index = 0; index < hasInfo.length; index++) {
                            var pos = configPlayer[index]["playerPos"];
                            if (hasInfo[pos]) {
                                // setGold se inactive isViewer nen dat no len dau de ben duoi config lai
                                _this.getPlayerHouse(index).setGold(infos[pos]["money"]);
                                configPlayer[index]["playerId"] = infos[pos]["nickName"];
                                if (infos[pos]["status"] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_SITTING || infos[pos]["status"] == BaCay_Cmd_1.default.Code.PLAYER_STATUS_PLAYING) {
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
                    }
                    break;
                case BaCay_Cmd_1.default.Code.CHAT_ROOM:
                    {
                        App_1.default.instance.showLoading(false);
                        var res = new BaCay_Cmd_1.default.ReceivedChatRoom(data);
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
                    cc.log("--inpacket.getCmdId(): " + inpacket.getCmdId());
                    break;
            }
        }, this);
    };
    // request
    BaCayController.prototype.actReJoinRoom = function (res) {
        this.closePopupMatchResult();
        this.closeUIChat();
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
        this.labelRoomId.string = roomId;
        this.labelRoomBet.string = Utils_1.default.formatNumber(moneyBet);
        this.currentRoomBet = moneyBet;
        this.gameState = gameAction;
        this.currentCard = cards;
        configPlayer[0].playerId = Configs_1.default.Login.Nickname;
        configPlayer[0].playerPos = myChair;
        var numPlayers = 0;
        var arrPlayerPosExist = [];
        var arrPlayerInfo = [];
        for (var index = 0; index < hasInfo.length; index++) {
            if (hasInfo[index]) {
                numPlayers += 1;
                arrPlayerPosExist.push(index);
                arrPlayerInfo.push(players[index]);
            }
        }
        // setup configPlayer
        for (var a = 0; a < configPlayer.length; a++) {
            configPlayer[a].playerPos = defaultPlayerPos[myChair][a];
        }
        // set State of Seat : Yes | No exist Player
        for (var index = 0; index < configPlayer.length; index++) {
            var findPos = arrPlayerPosExist.indexOf(configPlayer[index].playerPos);
            var seatId = configPlayer[index].seatId;
            var player = this.getPlayerHouse(seatId);
            player.resetPlayerInfo();
            var playerInfo = arrPlayerInfo[findPos];
            if (findPos > -1) {
                configPlayer[index].isViewer = false;
                player.setIsViewer(false);
                this.setupSeatPlayer(seatId, playerInfo);
                player.setBet(playerInfo.cuocChuong * moneyBet);
                player.addChips();
                if (playerInfo.nickName == Configs_1.default.Login.Nickname && playerInfo.cuocChuong == 0 && this.gameState == 1) {
                    this.showSliderBet();
                }
                if (playerInfo.cuocGa != 0) {
                    this.currentMatchPotValue += moneyBet * 3;
                    this.labelMatchPot.string = Utils_1.default.formatNumber(this.currentMatchPotValue);
                    player.playFxVaoGa();
                }
                if (this.gameState == 1) { //chua chia bai.
                    player.resetCardReal();
                }
            }
            else {
                // Not Exist player  -> Active Btn Add player
                player.showBtnInvite(true);
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
        this.resetHubChips();
        if (this.currentCard.length > 0) {
            BaCayController_1.instance.showCardReal();
        }
        if (countDownTime > 0) {
            if (this.gameState == 1) {
                this.matchPot.active = true;
                this.startBettingCountDown(countDownTime);
            }
            else {
                this.startEndCountDown(countDownTime);
            }
        }
    };
    BaCayController.prototype.showSliderBet = function () {
        cc.log("showSliderBet");
        this.arrBetValue = [];
        this.matchPot.active = true;
        this.currentMatchPotValue = 0;
        this.labelMatchPot.string = "0";
        for (var index = 0; index < 4; index++) {
            this.arrBetValue.push(this.currentRoomBet * (index + 1));
            var raw = this.currentRoomBet * (4 - index);
            if (raw == 1500) {
                this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = "1.5K";
            }
            else {
                this.betChooseValue.children[index].children[0].getComponent(cc.Label).string = Utils_1.default.formatNumberMin(raw);
            }
        }
        if (!this.getPlayerHouse(0).isViewing) {
            if (this.seatOwner == 0) { // Me la Chuong -> K dc bet va k dc vao ga
                this.btnOpenCard.active = false;
                this.btnBet.active = false;
                this.matchPot.getComponent(cc.Button).interactable = false;
                this.matchPot.children[0].color = cc.Color.GRAY;
            }
            else {
                this.btnBet.active = true;
                this.btnOpenCard.active = false;
                this.matchPot.getComponent(cc.Button).interactable = true;
                this.matchPot.children[0].color = cc.Color.WHITE;
                this.setupBet();
            }
        }
    };
    BaCayController.prototype.actionLeaveRoom = function () {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendRequestLeaveGame());
        this.soundManager.effSound.stop();
    };
    BaCayController.prototype.actionOpenCard = function () {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendMoBai());
        this.btnOpenCard.active = false;
    };
    BaCayController.prototype.actionSendVaoGa = function () {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.SendVaoGa());
        this.matchPot.children[0].color = cc.Color.WHITE;
        this.matchPot.getComponent(cc.Button).interactable = false;
    };
    BaCayController.prototype.actionAcceptDanhBien = function (event, seatId) {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendAcceptDanhBien(configPlayer[seatId].playerPos));
        this.getPlayerHouse(seatId).closePopupRequestDanhBien(false);
    };
    BaCayController.prototype.increaseBetValue = function () {
        if (this.currentBetSelectedIndex == (this.arrBetValue.length - 1)) {
        }
        else {
            this.currentBetSelectedIndex += 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    BaCayController.prototype.actClickBetValue = function (even, data) {
        data = parseInt(data);
        this.currentBetSelectedIndex = data;
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    BaCayController.prototype.decreaseBetValue = function () {
        if (this.currentBetSelectedIndex == 0) {
        }
        else {
            this.currentBetSelectedIndex -= 1;
        }
        this.betChooseValueTarget.y = this.arrBetPos[this.currentBetSelectedIndex];
    };
    BaCayController.prototype.actionBet = function () {
        BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendDatCuoc(this.currentBetSelectedIndex + 1));
        this.btnBet.active = false;
        // set bet default
        for (var index = 0; index < configPlayer.length; index++) {
            if (index !== this.seatOwner
                && !configPlayer[index].isViewer
                && configPlayer[index].playerId !== -1) {
                this.getPlayerHouse(index).setBet(this.currentRoomBet);
                this.getPlayerHouse(index).addChips();
                if (index != 0) { // k ke cua, danh bien duoc len chinh minh
                    this.getPlayerHouse(index).showPopupBet(true);
                    this.getPlayerHouse(index).setupBetValue(this.currentRoomBet);
                }
            }
        }
    };
    BaCayController.prototype.actionDanhBien = function (event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2));
        var pos = this.findPlayerPosBySeat(seatId);
        if (pos != -1) {
            this.getPlayerHouse(seatId).disableDanhBien(level);
            this.getPlayerHouse(seatId).showChatMsg("Đánh biên");
            BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendDanhBien(pos, level));
        }
    };
    BaCayController.prototype.actionKeCua = function (event, id) {
        var seatId = parseInt(id.substring(0, 1));
        var level = parseInt(id.substring(1, 2)) - 2;
        var pos = this.findPlayerPosBySeat(seatId);
        if (pos != -1) {
            this.getPlayerHouse(seatId).disableKeCua(level);
            BaCay_NetworkClient_1.default.getInstance().send(new BaCay_Cmd_1.default.CmdSendKeCua(pos, level));
        }
    };
    // State
    BaCayController.prototype.initConfigPlayer = function () {
        configPlayer = [];
        for (var index = 0; index < 8; index++) {
            configPlayer.push({
                seatId: index,
                playerId: -1,
                playerPos: -1,
                isViewer: true
            });
        }
    };
    BaCayController.prototype.resetPlayersPlaying = function () {
        for (var index = 0; index < 8; index++) {
            this.getPlayerHouse(index).resetMatchHistory();
        }
    };
    // handle Game Players
    BaCayController.prototype.setupSeatPlayer = function (seatId, playerInfo) {
        configPlayer[seatId].playerId = playerInfo.nickName;
        var player = this.getPlayerHouse(seatId);
        player.setAvatar(playerInfo.avatar);
        player.setName(playerInfo.nickName);
        player.setGold(playerInfo.money);
        if (this.gameState > 0 && !player.isViewing) {
            player.showCardReal(true);
        }
    };
    BaCayController.prototype.findPlayerSeatByUid = function (uid) {
        var seat = -1;
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerId === uid) {
                seat = configPlayer[index].seatId;
            }
        }
        return seat;
    };
    BaCayController.prototype.findPlayerPosBySeat = function (seat) {
        return configPlayer[seat].playerPos;
    };
    BaCayController.prototype.findPlayerSeatByPos = function (pos) {
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
    BaCayController.prototype.getPlayerHouse = function (seatId) {
        return this.groupPlayers.children[seatId].getComponent("BaCay.Player");
    };
    BaCayController.prototype.getNumPlayers = function () {
        var playerPosEntry = [];
        for (var index = 0; index < configPlayer.length; index++) {
            if (configPlayer[index].playerId !== -1 && !configPlayer[index].isViewer) {
                playerPosEntry.push(configPlayer[index].seatId);
            }
        }
        return playerPosEntry;
    };
    BaCayController.prototype.showCardReal = function () {
        this.getPlayerHouse(0).isShowCard = true;
        var arrCardReal = this.getPlayerHouse(0).cardReal;
        for (var i = 0; i < 3; i++) {
            arrCardReal.children[i].children[0].getComponent("TienLen.Card").setCardData(BaCay_CardUtil_1.default.getNormalId(this.currentCard[i]));
        }
    };
    var BaCayController_1;
    BaCayController.instance = null;
    __decorate([
        property(cc.Toggle)
    ], BaCayController.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], BaCayController.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "nodeSetting", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "bgChat", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "contentChatNhanh", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "boxSetting", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "UI_Playing", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "meCards", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "groupPlayers", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "matchPot", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayController.prototype, "labelMatchPot", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "cardsDeal", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "btnBet", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "btnOpenCard", void 0);
    __decorate([
        property(cc.Button)
    ], BaCayController.prototype, "btnLeaveRoom", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "hubChips", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayController.prototype, "labelRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayController.prototype, "labelRoomBet", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "actionBetting", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "betChooseValue", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "betChooseValueTarget", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "popupMatchResult", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "contentMatchResult", void 0);
    __decorate([
        property(cc.Prefab)
    ], BaCayController.prototype, "prefabItemResult", void 0);
    __decorate([
        property(cc.ScrollView)
    ], BaCayController.prototype, "scrollMatchResult", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "notifyTimeStart", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "notifyTimeEnd", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "notifyTimeBet", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.EditBox)
    ], BaCayController.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], BaCayController.prototype, "popupGuide", void 0);
    __decorate([
        property(NodeShowCard)
    ], BaCayController.prototype, "nodeShowCard", void 0);
    BaCayController = BaCayController_1 = __decorate([
        ccclass
    ], BaCayController);
    return BaCayController;
}(cc.Component));
exports.default = BaCayController;

cc._RF.pop();