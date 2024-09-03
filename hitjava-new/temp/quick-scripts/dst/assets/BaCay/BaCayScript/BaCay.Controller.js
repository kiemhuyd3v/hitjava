
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFFaEQsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4Rix5RUFBb0U7QUFDcEUscUVBQWdFO0FBQ2hFLDZGQUFnRjtBQUNoRixtREFBeUM7QUFDekMseUNBQThCO0FBQzlCLDZEQUF1RDtBQUN2RCwyQ0FBcUM7QUFFckMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQTtBQUNqQixJQUFLLFVBUUo7QUFSRCxXQUFLLFVBQVU7SUFDWCx1Q0FBTSxDQUFBO0lBQ04sMkNBQVEsQ0FBQTtJQUNSLHlDQUFPLENBQUE7SUFDUCxtREFBWSxDQUFBO0lBQ1osMkNBQVEsQ0FBQTtJQUNSLDZDQUFTLENBQUE7SUFDVCxxREFBYSxDQUFBO0FBQ2pCLENBQUMsRUFSSSxVQUFVLEtBQVYsVUFBVSxRQVFkO0FBQ0QsSUFBSSxZQUFZLEdBQUc7QUFDZixJQUFJO0FBQ0osaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixxQkFBcUI7QUFDckIscUJBQXFCO0FBQ3JCLElBQUk7Q0FDUCxDQUFDO0FBRUYsaURBQWlEO0FBQ2pELElBQUksZ0JBQWdCLEdBQUc7SUFDbkIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIs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QUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBSzNCO1FBREMsUUFBUSxDQUFDLFlBQVksQ0FBQzt5REFDVztJQWpGakIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWszQ25DO0lBQUQsc0JBQUM7Q0FsM0NELEFBazNDQyxDQWwzQzRDLEVBQUUsQ0FBQyxTQUFTLEdBazNDeEQ7a0JBbDNDb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvR2xvYmFsXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9TUFV0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBDYXJkVXRpbHMgZnJvbSBcIi4vQmFDYXkuQ2FyZFV0aWxcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vQmFDYXkuQ21kXCI7XG5pbXBvcnQgQmFDYXlOZXR3b3JrQ2xpZW50IGZyb20gXCIuL0JhQ2F5Lk5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBCYWNheVJvb20gZnJvbSBcIi4vQmFDYXkuUm9vbVwiO1xuXG52YXIgVFcgPSBjYy50d2VlblxuZW51bSBhdWRpb19jbGlwIHtcbiAgICBCRyA9IDAsXG4gICAgTE9TRSA9IDEsXG4gICAgV0lOID0gMixcbiAgICBDSElBX0JBSSA9IDMsXG4gICAgQ0hJUCA9IDQsXG4gICAgQ0xPQ0sgPSA1LFxuICAgIFNUQVJUX0JFVCA9IDZcbn1cbnZhciBjb25maWdQbGF5ZXIgPSBbXG4gICAgLy8ge1xuICAgIC8vICAgICBzZWF0SWQ6IDAsXG4gICAgLy8gICAgIHBsYXllcklkOiAtMSxcbiAgICAvLyAgICAgcGxheWVyUG9zOiAtMSxcbiAgICAvLyAgICAgaXNWaWV3ZXI6IHRydWVcbiAgICAvLyB9XG5dO1xuXG4vLyBkZWZhdWx0UGxheWVyUG9zWzAgLT4gN11bMF0gPSBwbGF5ZXJfcG9zIG9mIG1lXG5sZXQgZGVmYXVsdFBsYXllclBvcyA9IFtcbiAgICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN10sXG4gICAgWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDBdLFxuICAgIFsyLCAzLCA0LCA1LCA2LCA3LCAwLCAxXSxcbiAgICBbMywgNCwgNSwgNiwgNywgMCwgMSwgMl0sXG4gICAgWzQsIDUsIDYsIDcsIDAsIDEsIDIsIDNdLFxuICAgIFs1LCA2LCA3LCAwLCAxLCAyLCAzLCA0XSxcbiAgICBbNiwgNywgMCwgMSwgMiwgMywgNCwgNV0sXG4gICAgWzcsIDAsIDEsIDIsIDMsIDQsIDUsIDZdXG5dXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzcyhcIkJhQ2F5LkNvbnRyb2xsZXIuTm9kZVNob3dDYXJkXCIpXG5leHBvcnQgY2xhc3MgTm9kZVNob3dDYXJkIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXJkSGlkZTE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZEhpZGUyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXJkU2hvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1c2VySGFuZDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB1c2VyRmluZ2VyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVUaGlzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYW5pbUhhbmQ6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIHNldEluZm8oKSB7XG4gICAgICAgIHRoaXMubm9kZVRoaXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKHRvdWNoOiBjYy5Ub3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmltSGFuZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGRlbHRhID0gdG91Y2guZ2V0RGVsdGEoKTtcbiAgICAgICAgICAgIGlmIChkZWx0YS54ID4gMCAmJiB0aGlzLmNhcmRTaG93LmFuZ2xlID4gLTMwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FyZFNob3cuYW5nbGUgPCAtMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkSGlkZTIuYW5nbGUgLT0gZGVsdGEueCAvIDQwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRTaG93LmFuZ2xlIC09IGRlbHRhLnggLyAyMDtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJGaW5nZXIuYW5nbGUgLT0gZGVsdGEueCAvIDIwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubm9kZVRoaXMub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAodG91Y2g6IGNjLlRvdWNoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jYXJkU2hvdy5hbmdsZSA8IC0yMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgIEJhQ2F5Q29udHJvbGxlci5pbnN0YW5jZS5zaG93Q2FyZFJlYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2hvdyhjdXJyZW50Q2FyZCkge1xuICAgICAgICB0aGlzLmFuaW1IYW5kLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZVRoaXMuZ2V0Q2hpbGRCeU5hbWUoXCJhbmltSGFuZFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRIaWRlMi5hbmdsZSA9IC0yO1xuICAgICAgICB0aGlzLmNhcmRTaG93LmFuZ2xlID0gLTU7XG4gICAgICAgIHRoaXMudXNlckZpbmdlci5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuY2FyZFNob3cuZ2V0Q29tcG9uZW50KFwiVGllbkxlbi5DYXJkXCIpLnNldENhcmREYXRhKGN1cnJlbnRDYXJkWzBdKVxuICAgICAgICB0aGlzLmNhcmRIaWRlMi5nZXRDb21wb25lbnQoXCJUaWVuTGVuLkNhcmRcIikuc2V0Q2FyZERhdGEoY3VycmVudENhcmRbMV0pXG4gICAgICAgIHRoaXMuY2FyZEhpZGUxLmdldENvbXBvbmVudChcIlRpZW5MZW4uQ2FyZFwiKS5zZXRDYXJkRGF0YShjdXJyZW50Q2FyZFsyXSlcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMudXNlckhhbmQpO1xuICAgICAgICBUVyh0aGlzLnVzZXJIYW5kKS5zZXQoeyBhbmdsZTogOTAgfSkudG8oMC41LCB7IGFuZ2xlOiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0SW5mbygpO1xuICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBoaWRlKCkge1xuICAgICAgICBUVyh0aGlzLnVzZXJIYW5kKS50bygwLjUsIHsgYW5nbGU6IDkwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlVGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgIH1cbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYUNheUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogQmFDYXlDb250cm9sbGVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc0luaXRlZFVJUm9vbSA9IGZhbHNlO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlTXVzaWM6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVTb3VuZDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZ0NoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRDaGF0Tmhhbmg6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJveFNldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gVUkgUGxheWluZ1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX1BsYXlpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG1lQ2FyZHM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdyb3VwUGxheWVyczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbWF0Y2hQb3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbE1hdGNoUG90OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNEZWFsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5CZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bk9wZW5DYXJkOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkxlYXZlUm9vbTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBodWJDaGlwczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsUm9vbUlkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsUm9vbUJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbkJldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJldENob29zZVZhbHVlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiZXRDaG9vc2VWYWx1ZVRhcmdldDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBQb3B1cCBNYXRjaCBSZXN1bHRcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cE1hdGNoUmVzdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50TWF0Y2hSZXN1bHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiSXRlbVJlc3VsdDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxNYXRjaFJlc3VsdDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICAvLyBOb3RpZnlcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpZnlUaW1lU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGlmeVRpbWVFbmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGlmeVRpbWVCZXQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gVUkgQ2hhdFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIFVJX0NoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGVkdENoYXRJbnB1dDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cEd1aWRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHNvdW5kTWFuYWdlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoTm9kZVNob3dDYXJkKVxuICAgIG5vZGVTaG93Q2FyZDogTm9kZVNob3dDYXJkID0gbnVsbDtcblxuICAgIHByaXZhdGUgc2VhdE93bmVyID0gbnVsbDtcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tQmV0ID0gbnVsbDtcblxuICAgIHByaXZhdGUgZ2FtZVN0YXRlID0gbnVsbDsvLzAtd2FpdGluZywxLWN1b2MsMi1DaGlhIEJhaVxuXG4gICAgcHJpdmF0ZSBtaW51dGVzID0gbnVsbDtcbiAgICBwcml2YXRlIHNlY29uZHMgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIHRpbWVBdXRvU3RhcnQgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZUVuZCA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lQmV0ID0gbnVsbDtcbiAgICBwcml2YXRlIGludGVydmFsV2FpdHRpbmcgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxFbmQgPSBudWxsO1xuICAgIHByaXZhdGUgaW50ZXJ2YWxCZXR0aW5nID0gbnVsbDtcblxuICAgIHByaXZhdGUgY3VycmVudENhcmQgPSBudWxsO1xuICAgIHByaXZhdGUgbnVtQ2FyZE9wZW5lZCA9IDA7XG5cbiAgICAvLyBiZXRcbiAgICBwcml2YXRlIGFyckJldFZhbHVlID0gW107XG4gICAgcHJpdmF0ZSBsaXN0RGF0YVJvb20gPSBbXTtcbiAgICBwcml2YXRlIGxpc3RGdWxsUm9vbSA9IFtdO1xuICAgIHByaXZhdGUgYXJyQmV0UG9zID0gWy0xNTcuNSwgLTUyLjUsIDUyLjUsIDE1Ny41XTtcbiAgICBwcml2YXRlIGN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ID0gMDtcblxuICAgIHByaXZhdGUgY3VycmVudE1hdGNoUG90VmFsdWUgPSAwO1xuXG4gICAgcHJpdmF0ZSB0aW1lb3V0RW5kR2FtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hpYUJhaURvbmUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBhcnJQb3NEYW5oQmllbiA9IFtdO1xuICAgIHByaXZhdGUgdGltZUluQmcgPSAwO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEJhQ2F5Q29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIC8vIHRoaXMuVUlfUGxheWluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIgPSBCYWNheVJvb20uaW5zdGFuY2Uuc291bmRNYW5hZ2VyO1xuICAgICAgICB0aGlzLnNlYXRPd25lciA9IC0xO1xuXG4gICAgICAgIHRoaXMuaW5pdENvbmZpZ1BsYXllcigpO1xuXG4gICAgfVxuXG5cbiAgICBzaG93U2V0dGluZygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQgPSBTUFV0aWxzLmdldE11c2ljVm9sdW1uKCkgPiAwO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCA9IFNQVXRpbHMuZ2V0U291bmRWb2x1bW4oKSA+IDA7XG4gICAgICAgIHRoaXMubm9kZVNldHRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBoaWRlU2V0dGluZygpIHtcbiAgICAgICAgdGhpcy5ub2RlU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkJ0blRvZ2dsZU11c2ljKCkge1xuICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID8gMSA6IDApO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLk9OX0FVRElPX0NIQU5HRUQpO1xuICAgIH1cblxuICAgIG9uQnRuVG9nZ2xlU291bmQoKSB7XG4gICAgICAgIFNQVXRpbHMuc2V0U291bmRWb2x1bW4odGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQgPyAxIDogMCk7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fQVVESU9fQ0hBTkdFRCk7XG4gICAgfVxuXG4gICAgb25CdG5TZXR0aW5nKCkge1xuICAgICAgICB0aGlzLmJveFNldHRpbmcuYWN0aXZlID0gIXRoaXMuYm94U2V0dGluZy5hY3RpdmU7XG4gICAgfVxuXG4gICAgb25CdG5DbGlja0JnQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5VSV9DaGF0Lm9wYWNpdHkgPSAxMDA7XG4gICAgICAgIHRoaXMuYmdDaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQnRuQ2xpY2tCb3hDaGF0KCkge1xuICAgICAgICB0aGlzLlVJX0NoYXQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5iZ0NoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5zaG93VUlSb29tcygpO1xuICAgICAgICB0aGlzLnNldHVwVGltZVJ1bkluQmcoKTtcbiAgICAgICAgdGhpcy5iZ0NoYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnRlbnRDaGF0TmhhbmguY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuY29udGVudENoYXROaGFuaC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhdE5oYW5oTXNnKG5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldHVwTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxCZXR0aW5nKTtcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIuc3RvcEF1ZGlvRWZmZWN0KCk7XG4gICAgfVxuICAgIHNldHVwVGltZVJ1bkluQmcoKSB7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVJbkJnID0gY2Muc3lzLm5vdygpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gY2Muc3lzLm5vdygpXG4gICAgICAgICAgICBsZXQgdGltZUhpZGUgPSB0aGlzLnRpbWVJbkJnO1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0QWN0aW9uTWFuYWdlcigpLnVwZGF0ZSgodGltZU5vdyAtIHRpbWVIaWRlKSAvIDEwMDApO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFnKDEpO1xuICAgICAgICAgICAgaWYgKCh0aW1lTm93IC0gdGltZUhpZGUpIC8gMTAwMCA+IDE1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuVUlfQ2hvb3NlUm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIEJhY2F5Um9vbS5pbnN0YW5jZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWZlc2hMaXN0Um9vbSgpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfb3V0X2dhbWUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9O1xuICAgIGdlbkNhcmREZWFsKCkge1xuICAgICAgICBpZiAodGhpcy5jYXJkc0RlYWwuY2hpbGRyZW5Db3VudCA9PSAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRzRGVhbC5jaGlsZHJlblswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgLy8gUmVxdWVzdCBVSSBSb29tXG4gICAgam9pblJvb20oaW5mbykge1xuICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luIDwgaW5mby5yZXF1aXJlZE1vbmV5KSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaF9tb25leVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEpvaW5Sb29tQnlJZChpbmZvW1wiaWRcIl0pKTtcbiAgICB9XG5cbiAgICByZWZlc2hMaXN0Um9vbSgpIHtcbiAgICAgICAgLy8gdGhpcy5jb250ZW50TGlzdFJvb21zLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZEdldExpc3RSb29tKCkpO1xuICAgIH1cbiAgICB0b2dnbGVVSUNoYXQoKSB7XG4gICAgICAgIGlmICh0aGlzLlVJX0NoYXQuYWN0aXZlID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoYXRcbiAgICBzaG93VUlDaGF0KCkge1xuICAgICAgICB0aGlzLm9uQnRuQ2xpY2tCb3hDaGF0KCk7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLlVJX0NoYXQucnVuQWN0aW9uKFxuICAgICAgICAvLyAgICAgY2MubW92ZVRvKDAuNSwgNDIwLCAwKVxuICAgICAgICAvLyApO1xuICAgICAgICB0aGlzLlVJX0NoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5VSV9DaGF0KS50bygwLjMsIHsgeDogY2Mud2luU2l6ZS53aWR0aCAvIDIgLSB0aGlzLlVJX0NoYXQud2lkdGggLyAyIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIGNsb3NlVUlDaGF0KCkge1xuICAgICAgICAvLyB0aGlzLlVJX0NoYXQucnVuQWN0aW9uKFxuICAgICAgICAvLyAgICAgY2MubW92ZVRvKDAuNSwgMTAwMCwgMClcbiAgICAgICAgLy8gKTtcbiAgICAgICAgdGhpcy5vbkJ0bkNsaWNrQmdDaGF0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuVUlfQ2hhdCkudG8oMC4zLCB7IHg6IGNjLndpblNpemUud2lkdGggLyAyICsgdGhpcy5VSV9DaGF0LndpZHRoIC8gMiB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuVUlfQ2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBjaGF0RW1vdGlvbihldmVudCwgaWQpIHtcbiAgICAgICAgY2MubG9nKFwiQmFDYXkgY2hhdEVtb3Rpb24gaWQgOiBcIiwgaWQpO1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYXRSb29tKDEsIGlkKSk7XG4gICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICB9XG5cbiAgICBjaGF0TXNnKCkge1xuICAgICAgICBpZiAodGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYXRSb29tKDAsIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZykpO1xuICAgICAgICAgICAgdGhpcy5lZHRDaGF0SW5wdXQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYXROaGFuaE1zZyhtc2cpIHtcbiAgICAgICAgaWYgKG1zZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQmFDYXlOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGF0Um9vbSgwLCBtc2cpKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQb3B1cEd1aWRlKCkge1xuICAgICAgICB0aGlzLnBvcHVwR3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjbG9zZVBvcHVwR3VpZGUoKSB7XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cblxuXG5cbiAgICBjbG9zZVVJUGxheWluZygpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25MZWF2ZVJvb20oKTtcbiAgICB9XG5cbiAgICBzZXR1cE1hdGNoKGRhdGE6IGNtZC5SZWNlaXZlZEpvaW5Sb29tU3VjY2VlZCkge1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXBNYXRjaFJlc3VsdCgpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleClcbiAgICAgICAgICAgIHBsYXllci5zaG93UG9wdXBCZXQoZmFsc2UpO1xuICAgICAgICAgICAgcGxheWVyLmNsb3NlUG9wdXBSZXF1ZXN0RGFuaEJpZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLmxvZyhcIkJhQ2F5IHNldHVwTWF0Y2ggZGF0YSA6IFwiLCBkYXRhKTtcblxuICAgICAgICBsZXQgY2h1b25nQ2hhaXIgPSBkYXRhW1wiY2h1b25nQ2hhaXJcIl07XG4gICAgICAgIGxldCBjb3VudERvd25UaW1lID0gZGF0YVtcImNvdW50RG93blRpbWVcIl07XG4gICAgICAgIGxldCBnYW1lQWN0aW9uID0gZGF0YVtcImdhbWVBY3Rpb25cIl07XG4gICAgICAgIGxldCBnYW1lSWQgPSBkYXRhW1wiZ2FtZUlkXCJdO1xuICAgICAgICBsZXQgbW9uZXlCZXQgPSBkYXRhW1wibW9uZXlCZXRcIl07XG4gICAgICAgIGxldCBtb25leVR5cGUgPSBkYXRhW1wibW9uZXlUeXBlXCJdO1xuICAgICAgICBsZXQgbXlDaGFpciA9IGRhdGFbXCJteUNoYWlyXCJdO1xuICAgICAgICBsZXQgcGxheWVySW5mb3MgPSBkYXRhW1wicGxheWVySW5mb3NcIl07XG4gICAgICAgIGxldCBwbGF5ZXJTaXplID0gZGF0YVtcInBsYXllclNpemVcIl07XG4gICAgICAgIGxldCBwbGF5ZXJTdGF0dXMgPSBkYXRhW1wicGxheWVyU3RhdHVzXCJdO1xuICAgICAgICBsZXQgcm9vbUlkID0gZGF0YVtcInJvb21JZFwiXTtcbiAgICAgICAgbGV0IHJ1bGUgPSBkYXRhW1wicnVsZVwiXTtcblxuICAgICAgICB0aGlzLmxhYmVsUm9vbUlkLnN0cmluZyA9IHJvb21JZCArIFwiXCI7XG4gICAgICAgIHRoaXMubGFiZWxSb29tQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihtb25leUJldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbUJldCA9IG1vbmV5QmV0O1xuXG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZUFjdGlvbjtcblxuICAgICAgICBjb25maWdQbGF5ZXJbMF0ucGxheWVySWQgPSBDb25maWdzLkxvZ2luLk5pY2tuYW1lO1xuICAgICAgICBjb25maWdQbGF5ZXJbMF0ucGxheWVyUG9zID0gbXlDaGFpcjtcblxuXG4gICAgICAgIHZhciBudW1QbGF5ZXJzID0gMDtcbiAgICAgICAgdmFyIGFyclBsYXllclBvc0V4aXN0ID0gW107XG4gICAgICAgIHZhciBhcnJQbGF5ZXJJbmZvID0gW107XG4gICAgICAgIHZhciBhcnJQbGF5ZXJTdGF0dXMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVySW5mb3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAocGxheWVySW5mb3NbaW5kZXhdLm5pY2tOYW1lICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgbnVtUGxheWVycyArPSAxO1xuICAgICAgICAgICAgICAgIGFyclBsYXllclBvc0V4aXN0LnB1c2goaW5kZXgpO1xuICAgICAgICAgICAgICAgIGFyclBsYXllckluZm8ucHVzaChwbGF5ZXJJbmZvc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIGFyclBsYXllclN0YXR1cy5wdXNoKHBsYXllclN0YXR1c1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRIdWJDaGlwcygpO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgY29uZmlnUGxheWVyW2FdLnBsYXllclBvcyA9IGRlZmF1bHRQbGF5ZXJQb3NbbXlDaGFpcl1bYV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgbGV0IGZpbmRQb3MgPSBhcnJQbGF5ZXJQb3NFeGlzdC5pbmRleE9mKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zKTtcblxuICAgICAgICAgICAgdmFyIHNlYXRJZCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKTtcbiAgICAgICAgICAgIHBsYXllci5yZXNldFBsYXllckluZm8oKTtcbiAgICAgICAgICAgIGlmIChmaW5kUG9zID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyUGxheWVyU3RhdHVzW2ZpbmRQb3NdID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfU0lUVElORyB8fCBhcnJQbGF5ZXJTdGF0dXNbZmluZFBvc10gPT0gY21kLkNvZGUuUExBWUVSX1NUQVRVU19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldElzVmlld2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdLmlzVmlld2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldElzVmlld2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheUZ4Vmlld2VyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgYXJyUGxheWVySW5mb1tmaW5kUG9zXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE5vdCBFeGlzdCBwbGF5ZXIgIC0+IEFjdGl2ZSBCdG4gQWRkIHBsYXllclxuICAgICAgICAgICAgICAgIHBsYXllci5zaG93QnRuSW52aXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KTtcbiAgICAgICAgICAgIHBsYXllci5zZXRPd25lcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXRPd25lciA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaHVvbmdDaGFpcik7XG4gICAgICAgIGxldCBwbGF5ZXJPd25lciA9IHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdE93bmVyKVxuICAgICAgICBpZiAoc2VhdE93bmVyICE9PSAtMSkge1xuICAgICAgICAgICAgcGxheWVyT3duZXIuc2V0T3duZXIodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNlYXRPd25lciA9IHNlYXRPd25lcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnREb3duVGltZSA+IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSAxKVxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRCZXR0aW5nQ291bnREb3duKGNvdW50RG93blRpbWUpO1xuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5nZXROdW1QbGF5ZXJzKCkubGVuZ3RoIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFbmRDb3VudERvd24oY291bnREb3duVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIFRpbWUgU3RhcnRcbiAgICBzdGFydFdhaXR0aW5nQ291bnREb3duKHRpbWVXYWl0KSB7XG4gICAgICAgIHRoaXMudGltZUF1dG9TdGFydCA9IHRpbWVXYWl0O1xuICAgICAgICB0aGlzLnNldFRpbWVXYWl0dGluZ0NvdW50RG93bigpO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxXYWl0dGluZyk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsV2FpdHRpbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVBdXRvU3RhcnQtLTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZVdhaXR0aW5nQ291bnREb3duKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lQXV0b1N0YXJ0IDwgMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsV2FpdHRpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZVN0YXJ0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZVN0YXJ0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSlcbiAgICB9XG5cbiAgICBzZXRUaW1lV2FpdHRpbmdDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lQXV0b1N0YXJ0ICUgNjApO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiIELhuq90IMSR4bqndSBzYXUgOiBcIiArIHRoaXMuc2Vjb25kcyArIFwicyBcIjtcbiAgICB9XG5cbiAgICAvLyBUaW1lIEVuZFxuICAgIHN0YXJ0RW5kQ291bnREb3duKHRpbWVXYWl0KSB7XG4gICAgICAgIHRoaXMudGltZUVuZCA9IHRpbWVXYWl0O1xuICAgICAgICB0aGlzLnNldFRpbWVFbmRDb3VudERvd24oKTtcbiAgICAgICAgLy8gdGhpcy5ub3RpZnlUaW1lRW5kLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMubm90aWZ5VGltZUVuZC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbFdhaXR0aW5nKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50aW1lRW5kLS07XG4gICAgICAgICAgICB0aGlzLnNldFRpbWVFbmRDb3VudERvd24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVFbmQgPCAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuaW50ZXJ2YWxFbmQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVRpbWVFbmQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxKVxuICAgIH1cblxuICAgIHNldFRpbWVFbmRDb3VudERvd24oKSB7XG4gICAgICAgIHRoaXMuc2Vjb25kcyA9IE1hdGguZmxvb3IodGhpcy50aW1lRW5kICUgNjApO1xuICAgICAgICB0aGlzLm5vdGlmeVRpbWVTdGFydC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2VuZF9hZnRlcicpICsgXCIgXCIgKyB0aGlzLnNlY29uZHMgKyBcInMgXCI7XG4gICAgfVxuXG4gICAgLy8gVGltZSBCZXRcbiAgICBzdGFydEJldHRpbmdDb3VudERvd24odHVyblRpbWUpIHtcbiAgICAgICAgdGhpcy50aW1lQmV0ID0gdHVyblRpbWU7XG4gICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NCZXR0aW5nKDEpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5pbnRlcnZhbEJldHRpbmcpO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5zdG9wQXVkaW9FZmZlY3QoKTtcblxuICAgICAgICBsZXQgZGVsdGFUaW1lID0gdHVyblRpbWUgLyAyMDA7XG4gICAgICAgIGxldCBkZWx0YUZpbGwgPSAxIC8gMjAwO1xuICAgICAgICBsZXQgZnVsbFJhbmdlID0gMTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYWN0aW9uQmV0dGluZyk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYWN0aW9uQmV0dGluZykucmVwZWF0KDIwMCwgY2MudHdlZW4oKS5kZWxheShkZWx0YVRpbWUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgZnVsbFJhbmdlIC09IGRlbHRhRmlsbDtcbiAgICAgICAgICAgIHRoaXMudGltZUJldCAtPSBkZWx0YVRpbWU7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NCZXR0aW5nKGZ1bGxSYW5nZSk7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lQmV0IDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpLnN0YXJ0KCk7XG5cbiAgICAgICAgdGhpcy5pbnRlcnZhbEJldHRpbmcgPSB0aGlzLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLnBsYXlBdWRpb0VmZmVjdChhdWRpb19jbGlwLkNMT0NLKTtcbiAgICAgICAgfSwgMSwgdHVyblRpbWUpO1xuICAgIH1cbiAgICBzdG9wQmV0dGluZ0NvdW50RG93bigpIHtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuYWN0aW9uQmV0dGluZyk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsQmV0dGluZyk7XG4gICAgICAgIHRoaXMuYWN0aW9uQmV0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJvY2Vzc0JldHRpbmcocmF0ZSkge1xuICAgICAgICB0aGlzLmFjdGlvbkJldHRpbmcuZ2V0Q2hpbGRCeU5hbWUoXCJTdGVwXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgLy8gT3BlbiBNZSBDYXJkXG4gICAgb3Blbk1lQ2FyZChldmVudCwgaXRlbUlkKSB7XG4gICAgICAgIC8vIE9wZW4gTWUgY2FyZHNcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGxheWVySG91c2UoMCkuaXNTaG93Q2FyZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlU2hvd0NhcmQubm9kZVRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBjdXJyZW5DYXJkSWQgPSBbXVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbkNhcmRJZC5wdXNoKENhcmRVdGlscy5nZXROb3JtYWxJZChlbGVtZW50KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubm9kZVNob3dDYXJkLnNob3coY3VycmVuQ2FyZElkKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0Q2FyZHNTY29yZShhcnJDYXJkcykge1xuICAgICAgICBsZXQgc2NvcmUgPSAwO1xuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykge1xuICAgICAgICAgICAgc2NvcmUgKz0gQ2FyZFV0aWxzLmdldERpZW1CeUlkKGFyckNhcmRzW2FdKTtcbiAgICAgICAgfVxuICAgICAgICBzY29yZSA9IHNjb3JlICUgMTA7XG4gICAgICAgIGlmIChzY29yZSA9PSAwKSB7XG4gICAgICAgICAgICBzY29yZSA9IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNjb3JlO1xuICAgIH1cblxuICAgIG1vdmVDaGlwc1RvSHViTm93KGluZGV4KSB7XG4gICAgICAgIHRoaXMuaHViQ2hpcHMuY2hpbGRyZW5bMiAqIGluZGV4XS5zZXRQb3NpdGlvbigyNSwgODApO1xuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWzIgKiBpbmRleF0uc2NhbGUgPSAwO1xuICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWygyICogaW5kZXgpICsgMV0uc2V0UG9zaXRpb24oMjUsIDgwKTtcbiAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIGluZGV4KSArIDFdLnNjYWxlID0gMDtcbiAgICB9XG5cbiAgICBmeE1vdmVDaGlwcyhjaGlwcywgZGVsYXksIHRvWCwgdG9ZKSB7XG4gICAgICAgIGNoaXBzLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShkZWxheSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLCAxLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuOCwgdG9YLCB0b1kpLFxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuOCwgMCwgMClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVzZXRIdWJDaGlwcygpIHtcbiAgICAgICAgdmFyIGFyckZyb21YID0gWzcwLCAyODAsIDI4MCwgMjYwLCAxMDAsIC0yNjAsIC0zNzUsIC0zNjBdO1xuICAgICAgICB2YXIgYXJyRnJvbVkgPSBbLTE5NSwgLTE1MCwgLTU1LCA3MCwgOTAsIDg1LCAtMzAsIC0xNTVdO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWzIgKiBpbmRleF0uc2V0UG9zaXRpb24oYXJyRnJvbVhbaW5kZXhdLCBhcnJGcm9tWVtpbmRleF0pO1xuICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIGluZGV4KSArIDFdLnNldFBvc2l0aW9uKGFyckZyb21YW2luZGV4XSwgYXJyRnJvbVlbaW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxNjsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXR1cEJldCgpIHtcbiAgICAgICAgLy8gYXJyQmV0VmFsdWVcbiAgICAgICAgdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuYmV0Q2hvb3NlVmFsdWVUYXJnZXQueSA9IHRoaXMuYXJyQmV0UG9zW3RoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXhdO1xuICAgIH1cblxuICAgIC8vIG1hdGNoIHJlc3VsdFxuICAgIHNob3dQb3B1cE1hdGNoUmVzdWx0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5wb3B1cE1hdGNoUmVzdWx0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY29udGVudE1hdGNoUmVzdWx0LnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtUmVzdWx0KTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KFwiQmFDYXkuSXRlbVJlc3VsdFwiKS5pbml0SXRlbShkYXRhW2luZGV4XSk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRNYXRjaFJlc3VsdC5hZGRDaGlsZChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbE1hdGNoUmVzdWx0LnNjcm9sbFRvVG9wKDAuMik7XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cE1hdGNoUmVzdWx0KCkge1xuICAgICAgICB0aGlzLnBvcHVwTWF0Y2hSZXN1bHQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gYWRkTGlzdGVuZXJcbiAgICBzZXR1cExpc3RlbmVyKCkge1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5MT0dJTjpcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlc2hMaXN0Um9vbSgpO1xuICAgICAgICAgICAgICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kUmVjb25uZWN0Um9vbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5UT1BTRVJWRVI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFRvcFNlcnZlcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5rVHlwZSA9IHJlc1tcInJhbmtUeXBlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcERheV9tb25leSA9IHJlc1tcInRvcERheV9tb25leVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BXZWVrX21vbmV5ID0gcmVzW1widG9wV2Vla19tb25leVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BNb250aF9tb25leSA9IHJlc1tcInRvcE1vbnRoX21vbmV5XCJdO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9QSU5HUE9ORzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNNRF9KT0lOX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DTURfUkVDT05ORUNUX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5NT05FWV9CRVRfQ09ORklHOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTU9fQkFJOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRNb0JhaShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGFpck1vQmFpID0gcmVzW1wiY2hhaXJNb0JhaVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkcyA9IHJlc1tcImNhcmRzXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpck1vQmFpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xICYmIHNlYXRJZCAhPSAwICYmICFwbGF5ZXIuaXNTaG93Q2FyZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMzsgYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGVDYXJkSWQgPSBDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQoY2FyZHNbYV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudHJhbnNmb3JtVG9DYXJkUmVhbChhLCBzcHJpdGVDYXJkSWQsIGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0NhcmRSZWFsKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0NhcmROYW1lKHRoaXMuZ2V0Q2FyZHNTY29yZShjYXJkcykgKyBcIiDEkGnhu4NtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQkFUX0RBVTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkRmlyc3RUdXJuRGVjaXNpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0SHViQ2hpcHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cE1hdGNoUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5LRVRfVEhVQzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkRW5kR2FtZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmludGVydmFsRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5VGltZUVuZC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIE1vIGhldCBjYWMgbGEgYmFpIG5ldSBubyBjaHVhIGRjIG1vXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkTGlzdCA9IHJlc1tcImNhcmRMaXN0XCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpZW5UaGFuZ0NodW9uZyA9IHJlc1tcInRpZW5UaGFuZ0NodW9uZ1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aWVuVGhhbmdHYSA9IHJlc1tcInRpZW5UaGFuZ0dhXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtlQ3VhTW9uZXlMaXN0ID0gcmVzW1wia2VDdWFNb25leUxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFuaEJpZW5Nb25leUxpc3QgPSByZXNbXCJkYW5oQmllbk1vbmV5TGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b25nVGllbkN1b2lWYW4gPSByZXNbXCJ0b25nVGllbkN1b2lWYW5cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9uZ1RpZW5DdW9jTGlzdCA9IHJlc1tcInRvbmdUaWVuQ3VvY0xpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9uZ0RhbmhCaWVuTGlzdCA9IHJlc1tcInRvbmdEYW5oQmllbkxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9uZ0tlQ3VhTGlzdCA9IHJlc1tcInRvbmdLZUN1YUxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9uZ0N1b2NHYUxpc3QgPSByZXNbXCJ0b25nQ3VvY0dhTGlzdFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b25nQ3VvaVZhbkxpc3QgPSByZXNbXCJ0b25nQ3VvaVZhbkxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1vbmV5TGlzdCA9IHJlc1tcImN1cnJlbnRNb25leUxpc3RcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZUVuZEdhbWUgPSByZXNbXCJ0aW1lRW5kR2FtZVwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvc1BsYXlpbmcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRMaXN0W2luZGV4XS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1BsYXlpbmcucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluZElkID0gcG9zUGxheWluZy5pbmRleE9mKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVyUG9zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRzID0gY2FyZExpc3RbcG9zUGxheWluZ1tmaW5kSWRdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmRSZWFkeSA9IHBsYXllci5ub2RlLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBsYXllci5pc1Nob3dDYXJkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IDM7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkUmVhZHkuY2hpbGRyZW5bYV0uc2NhbGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlQ2FyZElkID0gQ2FyZFV0aWxzLmdldE5vcm1hbElkKGNhcmRzW2FdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnRyYW5zZm9ybVRvQ2FyZFJlYWwoYSwgc3ByaXRlQ2FyZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0NhcmROYW1lKHRoaXMuZ2V0Q2FyZHNTY29yZShjYXJkcykgKyBcIiDEkGnhu4NtXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmV0OiB0b25nVGllbkN1b2NMaXN0W3Bvc1BsYXlpbmdbZmluZElkXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWVuOiB0b25nRGFuaEJpZW5MaXN0W3Bvc1BsYXlpbmdbZmluZElkXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZTogdG9uZ0tlQ3VhTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2E6IHRvbmdDdW9jR2FMaXN0W3Bvc1BsYXlpbmdbZmluZElkXV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogdG9uZ0N1b2lWYW5MaXN0W3Bvc1BsYXlpbmdbZmluZElkXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXlDaGFuZ2U6IHRvbmdDdW9pVmFuTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9uZXk6IGN1cnJlbnRNb25leUxpc3RbcG9zUGxheWluZ1tmaW5kSWRdXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhOiB0b25nQ3VvY0dhTGlzdFtwb3NQbGF5aW5nW2ZpbmRJZF1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSBpbmZvLm1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLm1vbmV5Q2hhbmdlID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdpblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5wbGF5QXVkaW9FZmZlY3QoYXVkaW9fY2xpcC5XSU4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZnhXaW4oaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLnBsYXlBdWRpb0VmZmVjdChhdWRpb19jbGlwLkxPU0UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZnhMb3NlKGluZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsTWF0Y2hQb3Quc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNDAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGVTaG93Q2FyZC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCZXR0aW5nQ291bnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ZRVVfQ0FVX0RBTkhfQklFTjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkWWV1Q2F1RGFuaEJpZW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGFuaEJpZW5DaGFpciA9IHJlc1tcImRhbmhCaWVuQ2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGV2ZWwgPSByZXNbXCJsZXZlbFwiXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzRXhpc3QgPSB0aGlzLmFyclBvc0RhbmhCaWVuLmluZGV4T2YoZGFuaEJpZW5DaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNFeGlzdCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGEgY2hhcCBuaGFuIGRhbmggYmllbiBjdWEgQSB0aGkgayBkYyBndWkgeWV1IGNhdSBkYW5oIGJpZW4gbGFpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVmkgc2UgYmkgaGllbiBsYWkgcG9wdXAgcmVxdWVzdCBjaHUnIEEgbGFpIGsgdGhheSA6IGhvaSBsb2l+XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMuY3VycmVudFJvb21CZXQgKiBsZXZlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGRhbmhCaWVuQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dQb3B1cFJlcXVlc3REYW5oQmllbih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQ0hJQV9CQUk6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZENoaWFCYWkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BCZXR0aW5nQ291bnREb3duKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMTsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zaG93UG9wdXBCZXQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5jbG9zZVBvcHVwUmVxdWVzdERhbmhCaWVuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmlzU2hvd0NhcmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5pc1Nob3dDYXJkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjYXJkcyA9IHJlc1tcImNhcmRzXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVDaGlhQmFpID0gcmVzW1widGltZUNoaWFCYWlcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRFbmRHYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dEVuZEdhbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0RW5kQ291bnREb3duKHRpbWVDaGlhQmFpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gY2FyZHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnJTZWF0RXhpc3QgPSB0aGlzLmdldE51bVBsYXllcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBudW1QbGF5ZXIgPSBhcnJTZWF0RXhpc3QubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIHwgSGlkZSBjYXJkcyBub3QgdXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdlbkNhcmREZWFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgOCAqIDM7IGluZGV4KyspIHsgLy8gOCBwbGF5ZXJzICogMyBjYXJkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBpbmRleCA+PSBudW1QbGF5ZXIgKiAzID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuW2luZGV4XS5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYW5nbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZVNoaXAgPSAwLjE7IC8vIDAuMTVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgQ2FyZHMgdXNlZCB0byBlYWNoIHBsYXllciBqb2luZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgMzsgYSsrKSB7IC8vIHBsYXllcnMgeCAzIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBudW1QbGF5ZXI7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdEV4aXN0W2JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNhcmQ0TWUgPSB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlblsoYSAqIG51bVBsYXllcikgKyBiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQ0TWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYXdQbGF5ZXJQb3MgPSBuZXcgY2MuVmVjMih0aGlzLmdyb3VwUGxheWVycy5jaGlsZHJlbltzZWF0SWRdLnBvc2l0aW9uLngsIHRoaXMuZ3JvdXBQbGF5ZXJzLmNoaWxkcmVuW3NlYXRJZF0ucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjYXJkNE1lKS5kZWxheSgoKGEgKiBudW1QbGF5ZXIpICsgYikgKiB0aW1lU2hpcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGFyYWxsZWwoY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuQ0hJQV9CQUkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBjYy50d2VlbigpLnRvKDAuMiwgeyBwb3NpdGlvbjogcmF3UGxheWVyUG9zIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pLCBjYy50d2VlbigpLmJ5KDAuMiwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pKS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsYXlPdmVyMlVuZGVyID0gMC4yO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heERlbGF5ID0gKCgyICogbnVtUGxheWVyKSArIChudW1QbGF5ZXIgLSAxKSkgKiB0aW1lU2hpcDsgLy8gKChhICogbnVtUGxheWVyKSArIGIpICogdGltZVNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lVW5kZXJMYXllciA9IChtYXhEZWxheSArIDAuMiArIGRlbGF5T3ZlcjJVbmRlcikgKiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoaWFCYWlEb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dENoaWFCYWlEb25lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDggKiAzOyBpbmRleCsrKSB7IC8vIDggcGxheWVycyAqIDMgY2FyZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJkc0RlYWwuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1QbGF5ZXI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IGFyclNlYXRFeGlzdFtpbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEcm9wIGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkucmVzZXRDYXJkUmVhZHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2FyZFJlYWwodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aW1lVW5kZXJMYXllcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5LRV9DVUE6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEtlQ3VhKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyS2VDdWFGcm9tID0gcmVzW1wiY2hhaXJLZUN1YUZyb21cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXJLZUN1YVRvID0gcmVzW1wiY2hhaXJLZUN1YVRvXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsID0gcmVzW1wibGV2ZWxcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5UVV9ET05HX0JBVF9EQVU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEF1dG9TdGFydChkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pc0F1dG9TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRIdWJDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRXYWl0dGluZ0NvdW50RG93bihyZXMudGltZUF1dG9TdGFydCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5CZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQbGF5ZXJzUGxheWluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyUG9zRGFuaEJpZW4gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VQb3B1cE1hdGNoUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ET05HX1lfREFOSF9CSUVOOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRDaGFwTmhhbkRhbmhCaWVuKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhbmhCaWVuQ2hhaXIgPSByZXNbXCJkYW5oQmllbkNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsID0gcmVzW1wibGV2ZWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclBvc0RhbmhCaWVuLnB1c2goZGFuaEJpZW5DaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGRhbmhCaWVuQ2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5kaXNhYmxlRGFuaEJpZW4obGV2ZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5wbGF5RnhEYW5oQmllbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREFUX0NVT0M6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZERhdEN1b2MoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXJEYXRDdW9jID0gcmVzW1wiY2hhaXJEYXRDdW9jXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxldmVsID0gcmVzW1wibGV2ZWxcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXJEYXRDdW9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldEJldCh0aGlzLmFyckJldFZhbHVlW2xldmVsIC0gMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuQ0hJUCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5EQU5HX0tZX1RIT0FUX1BIT05HOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWROb3RpZnlSZWdPdXRSb29tKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3V0Q2hhaXIgPSByZXNbXCJvdXRDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc091dFJvb20gPSByZXNbXCJpc091dFJvb21cIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3Mob3V0Q2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3V0Um9vbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2xlYXZlJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgQXBwLmluc3RhbmNlLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yb29tX2NhbmNlbF9sZWF2ZScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dMZWF2ZVJvb20oaXNPdXRSb29tKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlZBT19HQTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuQ0hJUCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRWYW9HYShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpY0tlbkJldCA9IHJlc1tcImNoaWNLZW5CZXRcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWF0SWQgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWzIgKiBzZWF0SWRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5odWJDaGlwcy5jaGlsZHJlblsoMiAqIHNlYXRJZCkgKyAxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnhNb3ZlQ2hpcHModGhpcy5odWJDaGlwcy5jaGlsZHJlblsyICogc2VhdElkXSwgMC4xLCB0aGlzLm1hdGNoUG90LngsIHRoaXMubWF0Y2hQb3QueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5meE1vdmVDaGlwcyh0aGlzLmh1YkNoaXBzLmNoaWxkcmVuWygyICogc2VhdElkKSArIDFdLCAwLjIsIHRoaXMubWF0Y2hQb3QueCwgdGhpcy5tYXRjaFBvdC55KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbiBjb25nIGx1eSBrZSBsZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlICs9IGNoaWNLZW5CZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbE1hdGNoUG90LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5wbGF5RnhWYW9HYSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuRE9JX0NIVU9ORzpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkRG9pQ2h1b25nKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldE93bmVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhyZXNbXCJjaHVvbmdDaGFpclwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNldE93bmVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhdE93bmVyID0gc2VhdElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTU9JX0RBVF9DVU9DOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRNb2lEYXRDdW9jKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydEJldHRpbmdDb3VudERvd24ocmVzLnRpbWVEYXRDdW9jKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2xpZGVyQmV0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm51bUNhcmRPcGVuZWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuU1RBUlRfQkVUKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIRUFUX0NBUkRTOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREFOR19LWV9DSE9JX1RJRVA6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfT1dORVJfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxFQVZFX0dBTUU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZFVzZXJMZWF2ZVJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmZpbmRQbGF5ZXJTZWF0QnlQb3MoY2hhaXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOZWVkIGNsZWFyIGNvbmZpZ1BsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZCA9PSBzZWF0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIFVJXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5yZXNldFBsYXllckluZm8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0J0bkludml0ZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcnJTZWF0RXhpc3RMYXN0ID0gdGhpcy5nZXROdW1QbGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyclNlYXRFeGlzdExhc3QubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBsYXllcnNQbGF5aW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lIGxlYXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoYW5nZSBVSVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhY2F5Um9vbS5pbnN0YW5jZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXNoTGlzdFJvb20oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5OT1RJRllfS0lDS19GUk9NX1JPT006XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlZEtpY2tPZmYoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ORVdfVVNFUl9KT0lOOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRVc2VySm9pblJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IHJlc1tcImluZm9cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdUNoYWlyID0gcmVzW1widUNoYWlyXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVTdGF0dXMgPSByZXNbXCJ1U3RhdHVzXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgU3RhdGUgb2YgU2VhdCA6IFllcyB8IE5vIGV4aXN0IFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VhdElkID0gY29uZmlnUGxheWVyW2luZGV4XS5zZWF0SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3MgPT0gdUNoYWlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4aXN0IHBsYXllciAtPiBTZXQgUGxheWVyIEluZm9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucmVzZXRQbGF5ZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXN0b21QbGF5ZXJJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhdmF0YXJcIjogaW5mb1tcImF2YXRhclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmlja05hbWVcIjogaW5mb1tcIm5pY2tOYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb25leVwiOiBpbmZvW1wibW9uZXlcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwU2VhdFBsYXllcihzZWF0SWQsIGN1c3RvbVBsYXllckluZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1U3RhdHVzID09IGNtZC5Db2RlLlBMQVlFUl9TVEFUVVNfVklFV0VSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucGxheUZ4Vmlld2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5pc1ZpZXdlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldElzVmlld2VyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLk5PVElGWV9VU0VSX0dFVF9KQUNLUE9UOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX01BVENIOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZWRVcGRhdGVNYXRjaChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBteUNoYWlyID0gcmVzW1wibXlDaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNJbmZvID0gcmVzW1wiaGFzSW5mb1wiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmZvcyA9IHJlc1tcImluZm9zXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhhc0luZm8ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNvbmZpZ1BsYXllcltpbmRleF1bXCJwbGF5ZXJQb3NcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc0luZm9bcG9zXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRHb2xkIHNlIGluYWN0aXZlIGlzVmlld2VyIG5lbiBkYXQgbm8gbGVuIGRhdSBkZSBiZW4gZHVvaSBjb25maWcgbGFpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldEdvbGQoaW5mb3NbcG9zXVtcIm1vbmV5XCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcInBsYXllcklkXCJdID0gaW5mb3NbcG9zXVtcIm5pY2tOYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mb3NbcG9zXVtcInN0YXR1c1wiXSA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1NJVFRJTkcgfHwgaW5mb3NbcG9zXVtcInN0YXR1c1wiXSA9PSBjbWQuQ29kZS5QTEFZRVJfU1RBVFVTX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJpc1ZpZXdlclwiXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XVtcImlzVmlld2VyXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldElzVmlld2VyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShpbmRleCkucGxheUZ4Vmlld2VyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXR1cFNlYXRQbGF5ZXIoaW5kZXgsIGluZm9zW3Bvc10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF1bXCJwbGF5ZXJJZFwiXSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWdQbGF5ZXJbaW5kZXhdW1wiaXNWaWV3ZXJcIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQVRfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVkQ2hhdFJvb20oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0ljb24gPSByZXNbXCJpc0ljb25cIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29udGVudCA9IHJlc1tcImNvbnRlbnRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNJY29uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhdCBJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXRJZCA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaGFpcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXRJZCAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuc2hvd0NoYXRFbW90aW9uKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhdCBNc2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gdGhpcy5maW5kUGxheWVyU2VhdEJ5UG9zKGNoYWlyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhdElkICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5zaG93Q2hhdE1zZyhjb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiLS1pbnBhY2tldC5nZXRDbWRJZCgpOiBcIiArIGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gcmVxdWVzdFxuICAgIGFjdFJlSm9pblJvb20ocmVzKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cE1hdGNoUmVzdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgbGV0IG15Q2hhaXIgPSByZXNbXCJteUNoYWlyXCJdO1xuICAgICAgICBsZXQgY2h1b25nQ2hhaXIgPSByZXNbXCJjaHVvbmdDaGFpclwiXTtcbiAgICAgICAgbGV0IGNhcmRzID0gcmVzW1wiY2FyZHNcIl07XG4gICAgICAgIGxldCBjdW9jRGFuaEJpZW5MaXN0ID0gcmVzW1wiY3VvY0RhbmhCaWVuTGlzdFwiXTtcbiAgICAgICAgbGV0IGN1b2NLZUN1YUxpc3QgPSByZXNbXCJjdW9jS2VDdWFMaXN0XCJdO1xuICAgICAgICBsZXQgZ2FtZVNlcnZlclN0YXRlID0gcmVzW1wiZ2FtZVNlcnZlclN0YXRlXCJdO1xuICAgICAgICBsZXQgaXNBdXRvU3RhcnQgPSByZXNbXCJpc0F1dG9TdGFydFwiXTtcbiAgICAgICAgbGV0IGdhbWVBY3Rpb24gPSByZXNbXCJnYW1lQWN0aW9uXCJdO1xuICAgICAgICBsZXQgY291bnREb3duVGltZSA9IHJlc1tcImNvdW50RG93blRpbWVcIl07XG4gICAgICAgIGxldCBtb25leVR5cGUgPSByZXNbXCJtb25leVR5cGVcIl07XG4gICAgICAgIGxldCBtb25leUJldCA9IHJlc1tcIm1vbmV5QmV0XCJdO1xuICAgICAgICBsZXQgZ2FtZUlkID0gcmVzW1wiZ2FtZUlkXCJdO1xuICAgICAgICBsZXQgcm9vbUlkID0gcmVzW1wicm9vbUlkXCJdO1xuICAgICAgICBsZXQgaGFzSW5mbyA9IHJlc1tcImhhc0luZm9cIl07XG4gICAgICAgIGxldCBwbGF5ZXJzID0gcmVzW1wicGxheWVyc1wiXTtcblxuICAgICAgICB0aGlzLmxhYmVsUm9vbUlkLnN0cmluZyA9IHJvb21JZDtcbiAgICAgICAgdGhpcy5sYWJlbFJvb21CZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG1vbmV5QmV0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRSb29tQmV0ID0gbW9uZXlCZXQ7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZUFjdGlvbjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gY2FyZHM7XG5cbiAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllcklkID0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZTtcbiAgICAgICAgY29uZmlnUGxheWVyWzBdLnBsYXllclBvcyA9IG15Q2hhaXI7XG5cbiAgICAgICAgdmFyIG51bVBsYXllcnMgPSAwO1xuICAgICAgICB2YXIgYXJyUGxheWVyUG9zRXhpc3QgPSBbXTtcbiAgICAgICAgdmFyIGFyclBsYXllckluZm8gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGhhc0luZm8ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoaGFzSW5mb1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICBudW1QbGF5ZXJzICs9IDE7XG4gICAgICAgICAgICAgICAgYXJyUGxheWVyUG9zRXhpc3QucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgYXJyUGxheWVySW5mby5wdXNoKHBsYXllcnNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBzZXR1cCBjb25maWdQbGF5ZXJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgIGNvbmZpZ1BsYXllclthXS5wbGF5ZXJQb3MgPSBkZWZhdWx0UGxheWVyUG9zW215Q2hhaXJdW2FdO1xuICAgICAgICB9XG4gICAgICAgIC8vIHNldCBTdGF0ZSBvZiBTZWF0IDogWWVzIHwgTm8gZXhpc3QgUGxheWVyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZmluZFBvcyA9IGFyclBsYXllclBvc0V4aXN0LmluZGV4T2YoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJQb3MpO1xuICAgICAgICAgICAgdmFyIHNlYXRJZCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKTtcblxuICAgICAgICAgICAgcGxheWVyLnJlc2V0UGxheWVySW5mbygpO1xuICAgICAgICAgICAgbGV0IHBsYXllckluZm8gPSBhcnJQbGF5ZXJJbmZvW2ZpbmRQb3NdO1xuICAgICAgICAgICAgaWYgKGZpbmRQb3MgPiAtMSkge1xuICAgICAgICAgICAgICAgIGNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc2V0SXNWaWV3ZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgcGxheWVySW5mbyk7XG4gICAgICAgICAgICAgICAgcGxheWVyLnNldEJldChwbGF5ZXJJbmZvLmN1b2NDaHVvbmcgKiBtb25leUJldCk7XG4gICAgICAgICAgICAgICAgcGxheWVyLmFkZENoaXBzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllckluZm8ubmlja05hbWUgPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSAmJiBwbGF5ZXJJbmZvLmN1b2NDaHVvbmcgPT0gMCAmJiB0aGlzLmdhbWVTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NsaWRlckJldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGxheWVySW5mby5jdW9jR2EgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlICs9IG1vbmV5QmV0ICogMztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbE1hdGNoUG90LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmN1cnJlbnRNYXRjaFBvdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnBsYXlGeFZhb0dhKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA9PSAxKSB7Ly9jaHVhIGNoaWEgYmFpLlxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucmVzZXRDYXJkUmVhbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTm90IEV4aXN0IHBsYXllciAgLT4gQWN0aXZlIEJ0biBBZGQgcGxheWVyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNob3dCdG5JbnZpdGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uZmlnUGxheWVyW2luZGV4XS5pc1ZpZXdlciA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA4OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zZXRPd25lcihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlYXRPd25lciA9IHRoaXMuZmluZFBsYXllclNlYXRCeVBvcyhjaHVvbmdDaGFpcik7XG4gICAgICAgIGlmIChzZWF0T3duZXIgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRPd25lcikuc2V0T3duZXIodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNlYXRPd25lciA9IHNlYXRPd25lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRIdWJDaGlwcygpO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q2FyZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBCYUNheUNvbnRyb2xsZXIuaW5zdGFuY2Uuc2hvd0NhcmRSZWFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50RG93blRpbWUgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lU3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QmV0dGluZ0NvdW50RG93bihjb3VudERvd25UaW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEVuZENvdW50RG93bihjb3VudERvd25UaW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG4gICAgc2hvd1NsaWRlckJldCgpIHtcbiAgICAgICAgY2MubG9nKFwic2hvd1NsaWRlckJldFwiKVxuICAgICAgICB0aGlzLmFyckJldFZhbHVlID0gW107XG4gICAgICAgIHRoaXMubWF0Y2hQb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50TWF0Y2hQb3RWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMubGFiZWxNYXRjaFBvdC5zdHJpbmcgPSBcIjBcIjtcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5hcnJCZXRWYWx1ZS5wdXNoKHRoaXMuY3VycmVudFJvb21CZXQgKiAoaW5kZXggKyAxKSk7XG4gICAgICAgICAgICBsZXQgcmF3ID0gdGhpcy5jdXJyZW50Um9vbUJldCAqICg0IC0gaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHJhdyA9PSAxNTAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZS5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjEuNUtcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZS5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJNaW4ocmF3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuZ2V0UGxheWVySG91c2UoMCkuaXNWaWV3aW5nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWF0T3duZXIgPT0gMCkgeyAvLyBNZSBsYSBDaHVvbmcgLT4gSyBkYyBiZXQgdmEgayBkYyB2YW8gZ2FcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bk9wZW5DYXJkLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hQb3QuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5PcGVuQ2FyZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoUG90LmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXRjaFBvdC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBCZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGFjdGlvbkxlYXZlUm9vbSgpIHtcbiAgICAgICAgQmFDYXlOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFNlbmRSZXF1ZXN0TGVhdmVHYW1lKCkpO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5lZmZTb3VuZC5zdG9wKCk7XG4gICAgfVxuXG4gICAgYWN0aW9uT3BlbkNhcmQoKSB7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRTZW5kTW9CYWkoKSk7XG4gICAgICAgIHRoaXMuYnRuT3BlbkNhcmQuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0aW9uU2VuZFZhb0dhKCkge1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFZhb0dhKCkpO1xuICAgICAgICB0aGlzLm1hdGNoUG90LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMubWF0Y2hQb3QuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0aW9uQWNjZXB0RGFuaEJpZW4oZXZlbnQsIHNlYXRJZCkge1xuICAgICAgICBCYUNheU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuQ21kU2VuZEFjY2VwdERhbmhCaWVuKGNvbmZpZ1BsYXllcltzZWF0SWRdLnBsYXllclBvcykpO1xuICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCkuY2xvc2VQb3B1cFJlcXVlc3REYW5oQmllbihmYWxzZSk7XG4gICAgfVxuXG4gICAgaW5jcmVhc2VCZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPT0gKHRoaXMuYXJyQmV0VmFsdWUubGVuZ3RoIC0gMSkpIHtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleCArPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iZXRDaG9vc2VWYWx1ZVRhcmdldC55ID0gdGhpcy5hcnJCZXRQb3NbdGhpcy5jdXJyZW50QmV0U2VsZWN0ZWRJbmRleF07XG4gICAgfVxuICAgIGFjdENsaWNrQmV0VmFsdWUoZXZlbiwgZGF0YSkge1xuICAgICAgICBkYXRhID0gcGFyc2VJbnQoZGF0YSk7XG4gICAgICAgIHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPSBkYXRhO1xuICAgICAgICB0aGlzLmJldENob29zZVZhbHVlVGFyZ2V0LnkgPSB0aGlzLmFyckJldFBvc1t0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4XTtcbiAgICB9XG4gICAgZGVjcmVhc2VCZXRWYWx1ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEJldFNlbGVjdGVkSW5kZXggPT0gMCkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4IC09IDE7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJldENob29zZVZhbHVlVGFyZ2V0LnkgPSB0aGlzLmFyckJldFBvc1t0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4XTtcbiAgICB9XG5cbiAgICBhY3Rpb25CZXQoKSB7XG4gICAgICAgIEJhQ2F5TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5DbWRTZW5kRGF0Q3VvYyh0aGlzLmN1cnJlbnRCZXRTZWxlY3RlZEluZGV4ICsgMSkpO1xuICAgICAgICB0aGlzLmJ0bkJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gc2V0IGJldCBkZWZhdWx0XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IHRoaXMuc2VhdE93bmVyXG4gICAgICAgICAgICAgICAgJiYgIWNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXJcbiAgICAgICAgICAgICAgICAmJiBjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllcklkICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldEJldCh0aGlzLmN1cnJlbnRSb29tQmV0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5hZGRDaGlwcygpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPSAwKSB7IC8vIGsga2UgY3VhLCBkYW5oIGJpZW4gZHVvYyBsZW4gY2hpbmggbWluaFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFBsYXllckhvdXNlKGluZGV4KS5zaG93UG9wdXBCZXQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnNldHVwQmV0VmFsdWUodGhpcy5jdXJyZW50Um9vbUJldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aW9uRGFuaEJpZW4oZXZlbnQsIGlkKSB7XG4gICAgICAgIGxldCBzZWF0SWQgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoMCwgMSkpO1xuICAgICAgICBsZXQgbGV2ZWwgPSBwYXJzZUludChpZC5zdWJzdHJpbmcoMSwgMikpO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5maW5kUGxheWVyUG9zQnlTZWF0KHNlYXRJZCk7XG4gICAgICAgIGlmIChwb3MgIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5kaXNhYmxlRGFuaEJpZW4obGV2ZWwpO1xuICAgICAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZShzZWF0SWQpLnNob3dDaGF0TXNnKFwixJDDoW5oIGJpw6puXCIpO1xuICAgICAgICAgICAgQmFDYXlOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFNlbmREYW5oQmllbihwb3MsIGxldmVsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb25LZUN1YShldmVudCwgaWQpIHtcbiAgICAgICAgbGV0IHNlYXRJZCA9IHBhcnNlSW50KGlkLnN1YnN0cmluZygwLCAxKSk7XG4gICAgICAgIGxldCBsZXZlbCA9IHBhcnNlSW50KGlkLnN1YnN0cmluZygxLCAyKSkgLSAyO1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5maW5kUGxheWVyUG9zQnlTZWF0KHNlYXRJZCk7XG4gICAgICAgIGlmIChwb3MgIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2Uoc2VhdElkKS5kaXNhYmxlS2VDdWEobGV2ZWwpO1xuICAgICAgICAgICAgQmFDYXlOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLkNtZFNlbmRLZUN1YShwb3MsIGxldmVsKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGF0ZVxuICAgIGluaXRDb25maWdQbGF5ZXIoKSB7XG4gICAgICAgIGNvbmZpZ1BsYXllciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgODsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uZmlnUGxheWVyLnB1c2goe1xuICAgICAgICAgICAgICAgIHNlYXRJZDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcGxheWVySWQ6IC0xLFxuICAgICAgICAgICAgICAgIHBsYXllclBvczogLTEsXG4gICAgICAgICAgICAgICAgaXNWaWV3ZXI6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRQbGF5ZXJzUGxheWluZygpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxheWVySG91c2UoaW5kZXgpLnJlc2V0TWF0Y2hIaXN0b3J5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgR2FtZSBQbGF5ZXJzXG4gICAgc2V0dXBTZWF0UGxheWVyKHNlYXRJZCwgcGxheWVySW5mbykge1xuICAgICAgICBjb25maWdQbGF5ZXJbc2VhdElkXS5wbGF5ZXJJZCA9IHBsYXllckluZm8ubmlja05hbWU7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllckhvdXNlKHNlYXRJZCk7XG4gICAgICAgIHBsYXllci5zZXRBdmF0YXIocGxheWVySW5mby5hdmF0YXIpO1xuICAgICAgICBwbGF5ZXIuc2V0TmFtZShwbGF5ZXJJbmZvLm5pY2tOYW1lKTtcbiAgICAgICAgcGxheWVyLnNldEdvbGQocGxheWVySW5mby5tb25leSk7XG4gICAgICAgIGlmICh0aGlzLmdhbWVTdGF0ZSA+IDAgJiYgIXBsYXllci5pc1ZpZXdpbmcpIHtcbiAgICAgICAgICAgIHBsYXllci5zaG93Q2FyZFJlYWwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kUGxheWVyU2VhdEJ5VWlkKHVpZCkge1xuICAgICAgICBsZXQgc2VhdCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29uZmlnUGxheWVyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZ1BsYXllcltpbmRleF0ucGxheWVySWQgPT09IHVpZCkge1xuICAgICAgICAgICAgICAgIHNlYXQgPSBjb25maWdQbGF5ZXJbaW5kZXhdLnNlYXRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VhdDtcbiAgICB9XG5cbiAgICBmaW5kUGxheWVyUG9zQnlTZWF0KHNlYXQpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZ1BsYXllcltzZWF0XS5wbGF5ZXJQb3M7XG4gICAgfVxuXG4gICAgZmluZFBsYXllclNlYXRCeVBvcyhwb3MpIHtcbiAgICAgICAgaWYgKHBvcyA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlYXQgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbmZpZ1BsYXllci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChjb25maWdQbGF5ZXJbaW5kZXhdLnBsYXllclBvcyA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgc2VhdCA9IGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWF0O1xuICAgIH1cblxuICAgIGdldFBsYXllckhvdXNlKHNlYXRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ncm91cFBsYXllcnMuY2hpbGRyZW5bc2VhdElkXS5nZXRDb21wb25lbnQoXCJCYUNheS5QbGF5ZXJcIik7XG4gICAgfVxuXG4gICAgZ2V0TnVtUGxheWVycygpIHtcbiAgICAgICAgdmFyIHBsYXllclBvc0VudHJ5ID0gW107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb25maWdQbGF5ZXIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnUGxheWVyW2luZGV4XS5wbGF5ZXJJZCAhPT0gLTEgJiYgIWNvbmZpZ1BsYXllcltpbmRleF0uaXNWaWV3ZXIpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXJQb3NFbnRyeS5wdXNoKGNvbmZpZ1BsYXllcltpbmRleF0uc2VhdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGxheWVyUG9zRW50cnk7XG4gICAgfVxuICAgIHNob3dDYXJkUmVhbCgpIHtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5pc1Nob3dDYXJkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFyckNhcmRSZWFsID0gdGhpcy5nZXRQbGF5ZXJIb3VzZSgwKS5jYXJkUmVhbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGFyckNhcmRSZWFsLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIlRpZW5MZW4uQ2FyZFwiKS5zZXRDYXJkRGF0YShDYXJkVXRpbHMuZ2V0Tm9ybWFsSWQodGhpcy5jdXJyZW50Q2FyZFtpXSkpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19