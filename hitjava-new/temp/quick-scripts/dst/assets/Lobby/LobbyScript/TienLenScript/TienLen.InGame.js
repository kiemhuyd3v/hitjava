
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.InGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '342d3Cd3U9Nz7EQADJPgCr3', 'TienLen.InGame');
// Lobby/LobbyScript/TienLenScript/TienLen.InGame.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../Script/common/App");
var BroadcastReceiver_1 = require("../Script/common/BroadcastReceiver");
var SPUtils_1 = require("../Script/common/SPUtils");
var Utils_1 = require("../Script/common/Utils");
var TienLenNetworkClient_1 = require("../Script/networks/TienLenNetworkClient");
var TienLen_Card_1 = require("./TienLen.Card");
var TienLen_CardGoup_1 = require("./TienLen.CardGoup");
var TienLen_Cmd_1 = require("./TienLen.Cmd");
var TienLen_Constant_1 = require("./TienLen.Constant");
var TienLen_Player_1 = require("./TienLen.Player");
var TienLen_Res_1 = require("./TienLen.Res");
var TienLen_Room_1 = require("./TienLen.Room");
var TienLen_PopupHistory_1 = require("./TienLen.PopupHistory");
var TW = cc.tween;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TYPECARD;
(function (TYPECARD) {
    TYPECARD[TYPECARD["MOT_LA"] = 1] = "MOT_LA";
    TYPECARD[TYPECARD["MOT_DOI"] = 2] = "MOT_DOI";
    TYPECARD[TYPECARD["HAI_DOI_THONG"] = 12] = "HAI_DOI_THONG";
    TYPECARD[TYPECARD["SAM_CO"] = 3] = "SAM_CO";
    TYPECARD[TYPECARD["SANH"] = 4] = "SANH";
    TYPECARD[TYPECARD["TU_QUY"] = 5] = "TU_QUY";
    TYPECARD[TYPECARD["HAI_TU_QUY"] = 25] = "HAI_TU_QUY";
    TYPECARD[TYPECARD["BA_DOI_THONG"] = 6] = "BA_DOI_THONG";
    TYPECARD[TYPECARD["BON_DOI_THONG"] = 7] = "BON_DOI_THONG";
    TYPECARD[TYPECARD["NAM_DOI_THONG"] = 8] = "NAM_DOI_THONG";
    TYPECARD[TYPECARD["SAU_DOI_THUONG"] = 9] = "SAU_DOI_THUONG";
    TYPECARD[TYPECARD["SAU_DOI_THONG"] = 10] = "SAU_DOI_THONG";
    TYPECARD[TYPECARD["SANH_RONG"] = 11] = "SANH_RONG";
})(TYPECARD || (TYPECARD = {}));
var TYPE_WIN;
(function (TYPE_WIN) {
    TYPE_WIN[TYPE_WIN["SANH_RONG"] = 1] = "SANH_RONG";
    TYPE_WIN[TYPE_WIN["TU_QUY"] = 2] = "TU_QUY";
    TYPE_WIN[TYPE_WIN["NAM_DOI_THONG"] = 3] = "NAM_DOI_THONG";
    TYPE_WIN[TYPE_WIN["SAU_DOI"] = 4] = "SAU_DOI";
})(TYPE_WIN || (TYPE_WIN = {}));
var STATE_GAME;
(function (STATE_GAME) {
    STATE_GAME[STATE_GAME["WAITING"] = 0] = "WAITING";
    STATE_GAME[STATE_GAME["PLAYING"] = 1] = "PLAYING";
    STATE_GAME[STATE_GAME["FINISH"] = 2] = "FINISH";
})(STATE_GAME || (STATE_GAME = {}));
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["BG"] = 0] = "BG";
    audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
    audio_clip[audio_clip["WIN"] = 2] = "WIN";
    audio_clip[audio_clip["CHETMAYNE"] = 3] = "CHETMAYNE";
    audio_clip[audio_clip["DODI"] = 4] = "DODI";
    audio_clip[audio_clip["HAINE"] = 5] = "HAINE";
    audio_clip[audio_clip["MAYHABUOI"] = 6] = "MAYHABUOI";
    audio_clip[audio_clip["THUADICUNG"] = 7] = "THUADICUNG";
    audio_clip[audio_clip["START_GAME"] = 8] = "START_GAME";
    audio_clip[audio_clip["CHIA_BAI"] = 9] = "CHIA_BAI";
    audio_clip[audio_clip["DANH"] = 10] = "DANH";
})(audio_clip || (audio_clip = {}));
var InGame = /** @class */ (function (_super) {
    __extends(InGame, _super);
    function InGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.history = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.nodeSetting = null;
        _this.contentChatNhanh = null;
        _this.bgChat = null;
        _this.boxSetting = null;
        _this.sprAvatar = null;
        _this.lbRoomId = null;
        _this.lbRoomBet = null;
        _this.players = [];
        _this.lbTimeCountDown = null;
        _this.cards = [];
        _this.cardLine = null;
        _this.cardItem = null;
        _this.board = null;
        _this.btnsInGame = null;
        _this.lblToast = null;
        _this.popupGuide = null;
        // UI Chat
        _this.UI_Chat = null;
        _this.edtChatInput = null;
        // Popup Result
        _this.popupResult = null;
        _this.scrollPopupResult = null;
        _this.contentPopupResult = null;
        _this.prefabPlayerResult = null;
        _this.fxWhoPlayFirst = null;
        _this.animWin = null;
        _this.dataAnimChatHai = null;
        _this.animBeat = null;
        _this.animToiTrang = null;
        _this.animBeatTypeCard = null;
        _this.soundManager = null;
        _this.dataFirstTurn = null;
        _this.dataChiaBai = null;
        _this.state_game = STATE_GAME.WAITING;
        _this.cardsOnHand = {};
        _this.buttons = {};
        _this.myChair = 0;
        _this.sortBySuit = true;
        _this.currTurnCards = [];
        _this.curCardOnBoard = [];
        _this.countChat = 0;
        _this.checkTurn = false;
        _this.countDown = null;
        _this.timeoutChiaBaiDone = null;
        _this.timeoutDelayChiaBai = null;
        _this.cachePlayersInfo = [];
        return _this;
    }
    InGame_1 = InGame;
    InGame.prototype.onLoad = function () {
        InGame_1.instance = this;
        this.soundManager = TienLen_Room_1.default.instance.soundManager;
        this.initRes();
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        cc.Tween.stopAllByTarget(this.popupResult);
        this.popupResult.active = false;
        this.bgChat.active = false;
        var self = this;
        var _loop_1 = function () {
            var node = this_1.contentChatNhanh.children[i];
            node.on('click', function () {
                self.onBtnClickBoxChat();
                self.chatNhanhMsg(node.children[0].getComponent(cc.Label).string);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) {
            _loop_1();
        }
        this.edtChatInput.node.on('click', function () {
            self.onBtnClickBoxChat();
        });
    };
    InGame.prototype.showSetting = function () {
        this.toggleMusic.isChecked = SPUtils_1.default.getMusicVolumn() > 0;
        this.toggleSound.isChecked = SPUtils_1.default.getSoundVolumn() > 0;
        this.nodeSetting.active = true;
    };
    InGame.prototype.hideSetting = function () {
        this.nodeSetting.active = false;
    };
    InGame.prototype.onBtnHistory = function () {
        var _this = this;
        // this.actCoomingSoon();
        // return;
        if (this.history == null) {
            App_1.default.instance.showLoading(true);
            cc.assetManager.getBundle("TienLen").load("PopupHistory", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                App_1.default.instance.showLoading(false);
                if (err1 != null) {
                    //Utils.Log("errr load game TIENLEN:", err1);
                }
                else {
                    //Utils.Log("vao daycai chu");
                    _this.history = cc.instantiate(prefab).getComponent("TienLen.PopupHistory");
                    _this.history.node.parent = _this.node.parent;
                    _this.history.node.active = true;
                    _this.history.show();
                }
            });
        }
        else {
            this.history.node.parent = this.node.parent;
            this.history.node.active = true;
            this.history.show();
        }
        // App.instance.showLoading(true);
        // Http.get(Configs.App.API, { "c": 139, "p": this.page, "un": Configs.Login.Nickname, "gn": "Audition" }, (err, res) => {
        //     App.instance.showLoading(false);
        //     if (err != null) return;
        //      //Utils.Log("");
        // });
    };
    InGame.prototype.onBtnToggleMusic = function () {
        SPUtils_1.default.setMusicVolumn(this.toggleMusic.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
    };
    InGame.prototype.onBtnToggleSound = function () {
        SPUtils_1.default.setSoundVolumn(this.toggleSound.isChecked ? 1 : 0);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_AUDIO_CHANGED);
    };
    InGame.prototype.initRes = function () {
        var _this = this;
        TienLen_Res_1.default.getInstance();
        this.btnsInGame.children.forEach(function (btn) {
            _this.buttons[btn.name] = btn;
        });
    };
    InGame.prototype.onBtnSetting = function () {
        this.boxSetting.active = !this.boxSetting.active;
    };
    InGame.prototype.show = function (isShow, roomInfo) {
        if (roomInfo === void 0) { roomInfo = null; }
        if (isShow) {
            this.node.active = true;
            this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
            this.cleanCardLine();
            this.cleanCardsOnBoard();
            this.cleanCardsOnHand();
            for (var index = 0; index < TienLen_Constant_1.default.Config.MAX_PLAYER; index++) {
                this.players[index].setStatus();
                this.players[index].setLeaveRoom();
                this.players[index].state = STATE_GAME.WAITING;
            }
            this.setRoomInfo(roomInfo);
        }
        else {
            this.node.active = false;
        }
    };
    InGame.prototype.actLeaveRoom = function () {
        TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendRequestLeaveGame());
    };
    InGame.prototype.setRoomInfo = function (room) {
        //Utils.Log("TLMN setRoomInfo data : ", room);
        this.lbRoomId.string = room.roomId;
        if (room.moneyBet == 0) {
            this.lbRoomBet.string = "";
        }
        else {
            this.lbRoomBet.string = Utils_1.default.formatNumber(room.moneyBet);
        }
        this.lbTimeCountDown.node.active = false;
        this.myChair = room.myChair;
        this.setPlayersInfo(room);
        for (var index = 0; index < 4; index++) {
            this.players[index].hideChat();
        }
        if (room.cards != null) {
            if (room.cards.length > 0) {
                this.cardLine.active = true;
                this.setCardsOnHand(this.sortCards(room.cards));
                this.setActiveButtons(["bt_sort"], [true]);
            }
        }
        this.closePopupResult();
    };
    InGame.prototype.setPlayersInfo = function (room) {
        this.cachePlayersInfo = [];
        for (var i = 0; i < room.playerInfos.length; i++) {
            var info = room.playerInfos[i];
            if (room.playerStatus[i] != 0) {
                this.cachePlayersInfo.push(info.nickName);
                var chair = this.convertChair(i);
                var pl = this.players[chair];
                if (pl)
                    pl.setPlayerInfo(info);
                if (room.playerStatus[i] == 1) {
                    pl.setStateViewing(true);
                }
                if (info.nickName == Configs_1.default.Login.Nickname && room.playerStatus[i] == 1) {
                    this.state_game = STATE_GAME.PLAYING;
                }
                if (room.playerStatus[i] == 3 && room.hasOwnProperty("handCardSize")) {
                    pl.setCardRemain(room.handCardSize[i]);
                }
            }
        }
    };
    InGame.prototype.updateGameInfo = function (data) {
        this.show(true, data);
    };
    InGame.prototype.onUserJoinRoom = function (user) {
        if (user.uStatus != 0) {
            this.cachePlayersInfo[user.uChair] = user.info.nickName;
            var player = this.players[this.convertChair(user.uChair)];
            if (this.state_game == STATE_GAME.PLAYING) {
                player.setStateViewing(true);
            }
            player.setPlayerInfo(user.info);
        }
    };
    InGame.prototype.autoStart = function (autoInfo) {
        if (autoInfo.isAutoStart) {
            this.state_game = STATE_GAME.WAITING;
            this.setTimeCountDown("Ván đấu bắt đầu sau: ", autoInfo.autoStartTime);
            this.closePopupResult();
            this.players.forEach(function (player) {
                if (player.node.active)
                    player.setStateViewing(false);
            });
        }
    };
    InGame.prototype.setTimeCountDown = function (msg, t) {
        var _this = this;
        this.lbTimeCountDown.string = msg + "" + t + "s";
        this.lbTimeCountDown.node.active = true;
        clearInterval(this.countDown);
        this.countDown = setInterval(function () {
            if (_this.node) {
                t--;
                if (t < 1) {
                    _this.state_game = STATE_GAME.PLAYING;
                }
                if (t < 0) {
                    clearInterval(_this.countDown);
                    _this.lbTimeCountDown.node.active = false;
                }
                else {
                    _this.lbTimeCountDown.string = msg + "" + t + "s";
                }
            }
        }, 1000);
    };
    InGame.prototype.firstTurn = function (data) {
        var _this = this;
        this.cleanCardLine();
        clearTimeout(this.timeoutDelayChiaBai);
        // this.timeoutDelayChiaBai = setTimeout(() => {
        var numPlayer = 0;
        var arrSeatId = [];
        for (var i = 0; i < data.cards.length; i++) {
            var pl = this.players[this.convertChair(i)];
            if (pl.active) {
                numPlayer += 1;
                arrSeatId.push(this.convertChair(i));
            }
        }
        var cardDeal = 6;
        // Open | Hide cards not use -> Mau binh nhieu la bai qua nen chi chia 4 la tuong trung
        // for (let index = 0; index < 4 * cardDeal; index++) { // 4 players * 6 cards
        var timeShip = 0.05; // 0.15
        // Move Cards used to each player joined
        if (numPlayer > 4)
            numPlayer = 4;
        this.fxWhoPlayFirst.active = true;
        //Utils.Log("thang ngay danh truoc:" + this.cachePlayersInfo[data.chair]);
        this.fxWhoPlayFirst.getChildByName("txt").getComponent(cc.Label).string = this.cachePlayersInfo[data.chair] + " đánh trước !";
        this.scheduleOnce(function () {
            _this.fxWhoPlayFirst.active = false;
        }, 2.0);
        for (var i = 0; i < this.players.length; i++) {
            var player = this.players[i];
            this.resolveCardDeal(player);
        }
        // }, 1000);
    };
    InGame.prototype.actCoomingSoon = function () {
        App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang("txt_function_in_development"));
    };
    InGame.prototype.resolveCardDeal = function (player) {
        var _this = this;
        if (player.state == STATE_GAME.PLAYING) {
            var _loop_2 = function (j, l) {
                var card4Me = player.cardDeal[j];
                if (!card4Me) {
                    card4Me = cc.instantiate(this_2.cardItem);
                    card4Me.getComponent(TienLen_Card_1.default).setCardData(52);
                    this_2.node.addChild(card4Me);
                    player.cardDeal.push(card4Me);
                }
                card4Me.active = true;
                var rawPlayerPos = cc.v2(player.node.x, player.node.y - 50);
                cc.Tween.stopAllByTarget(card4Me);
                TW(card4Me)
                    .set({ opacity: 150, scale: 0.5, x: 0, y: 0 })
                    .delay(j * 0.05)
                    .parallel(TW()
                    .to(0.2, { x: rawPlayerPos.x, y: rawPlayerPos.y, opacity: 255 }, { easing: cc.easing.sineOut }), TW().by(0.15, { angle: 360 }, { easing: cc.easing.sineOut }))
                    .call(function () {
                    _this.soundManager.playAudioEffect(audio_clip.CHIA_BAI);
                    card4Me.active = false;
                    if (j == l - 1 && _this.players.indexOf(player) == 0) {
                        _this.resolveChiaBai(_this.dataChiaBai);
                    }
                }).start();
            };
            var this_2 = this;
            for (var j = 0, l = 6; j < l; j++) {
                _loop_2(j, l);
            }
        }
    };
    InGame.prototype.chiaBai = function (data) {
        this.dataChiaBai = data;
        this.firstTurn(this.dataFirstTurn);
    };
    InGame.prototype.resolveChiaBai = function (data) {
        this.setCardsOnHand(this.sortCards(data.cards));
        if (data.toiTrang > 0) {
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].active && this.players[i].state == STATE_GAME.PLAYING) {
                this.players[i].offFirstCard();
                if (i > 0) {
                    this.players[i].setCardRemain(data.cardSize);
                }
            }
        }
        this.setActiveButtons(["bt_sort"], [true]);
    };
    InGame.prototype.changeTurn = function (turn) {
        var chair = this.convertChair(turn.chair);
        for (var index = 0; index < 4; index++) {
            this.players[index].setTimeRemain(0);
        }
        if (turn.time) {
            this.players[chair].setTimeRemain(turn.time);
        }
        else {
            this.players[chair].setTimeRemain(14);
        }
        if (chair == 0) {
            this.setActiveButtons(["bt_submit_turn", "bt_pass_turn"], [true, true]);
            this.checkTurn = true;
        }
        if (turn.newRound) {
            this.cleanCardsOnBoard();
            this.currTurnCards = [];
            this.curCardOnBoard = [];
            this.countChat = 0;
            this.checkTurn = false;
            // for (let i = 0; i < this.players.length; i++) {
            //     if (this.players[i].active) {
            //         this.players[i].setStatus();
            //     }
            // }
        }
    };
    InGame.prototype.submitTurn = function (turn) {
        this.setActiveButtons(["bt_submit_turn", "bt_pass_turn"], [false, false]);
        this.players[0].setTimeRemain(0);
        var cards = this.sortCards(turn.cards);
        var isExist2 = false;
        for (var index = 0; index < turn.cards.length; index++) {
            if (turn.cards[index] == 48 || turn.cards[index] == 49 || turn.cards[index] == 50 || turn.cards[index] == 51) {
                isExist2 = true;
            }
        }
        if (isExist2) {
            var animChatHai_1 = new cc.Node("animChatHai").addComponent(sp.Skeleton);
            this.node.getChildByName("board").addChild(animChatHai_1.node);
            animChatHai_1.node.setPosition(cc.v2(-98, -348));
            animChatHai_1.skeletonData = this.dataAnimChatHai;
            animChatHai_1.setAnimation(0, "Đánh 2", false);
            setTimeout(function () {
                animChatHai_1.node.destroy();
            }, 1500);
        }
        var cardHalf = (cards.length - 1) / 2;
        var ranX = Math.floor(Math.random() * 100) - 50;
        var ranY = Math.floor(Math.random() * 100) - 30;
        var chair = this.convertChair(turn.chair);
        var pl = this.players[chair];
        this.board.children.forEach(function (card) {
            card.color = cc.Color.GRAY;
        });
        if (chair == 0) { //this player
            for (var i = 0; i < cards.length; i++) {
                var cardIndex = cards[i];
                var _card = this.cardsOnHand[cardIndex];
                var pos = _card.parent.convertToWorldSpaceAR(_card.position);
                pos = this.board.convertToNodeSpaceAR(pos);
                _card.parent = this.board;
                _card.setPosition(pos);
                _card.runAction(cc.moveTo(0.2, cc.v2((i - cardHalf) * 30 + ranX, ranY)));
                _card.runAction(cc.scaleTo(0.2, 0.65, 0.65));
                delete this.cardsOnHand[cardIndex];
            }
        }
        else { //that player
            var pos = pl.node.parent.convertToWorldSpaceAR(pl.node.position);
            pos = this.board.convertToNodeSpaceAR(pos);
            for (var i = 0; i < cards.length; i++) {
                var cardItem = cc.instantiate(this.cardItem);
                cardItem.parent = this.board;
                cardItem.setScale(0.65, 0.65);
                cardItem.setPosition(pos);
                cardItem.getComponent(TienLen_Card_1.default).setCardData(cards[i]);
                cardItem.setContentSize(cc.size(100, 135));
                cardItem.runAction(cc.moveTo(0.2, cc.v2((i - cardHalf) * 30 + ranX, ranY)));
            }
            pl.setCardRemain(turn.numberCard);
            this.currTurnCards = cards;
        }
        this.checkTypeSoundEff(cards, this.curCardOnBoard);
        this.curCardOnBoard = cards;
        var typeCard = this.getTypeCard(cards);
        this.showAnimTypeCard(typeCard, cards);
    };
    InGame.prototype.checkTypeSoundEff = function (cards, currTurnCards) {
        if (currTurnCards === void 0) { currTurnCards = null; }
        var typeSound = 10;
        var arrPig = [48, 49, 50, 51];
        if (arrPig.some(function (ele) { return cards.includes(ele); })) {
            typeSound = audio_clip.HAINE;
        }
        if (currTurnCards.some(function (ele) { return arrPig.includes(ele); })) { //chat dc 2.
            this.countChat++;
            if (this.countChat == 1)
                typeSound = audio_clip.CHETMAYNE;
            else if (this.countChat == 2) {
                typeSound = audio_clip.MAYHABUOI;
            }
            else if (this.countChat == 3) {
                typeSound = audio_clip.DODI;
            }
        }
        this.soundManager.playAudioEffect(typeSound);
    };
    InGame.prototype.passTurn = function (turn) {
        //Utils.Log("Pass turn");
        this.players[this.convertChair(turn.chair)].setNotify("Bỏ lượt");
        this.setActiveButtons(["bt_submit_turn", "bt_pass_turn"], [false, false]);
        this.players[0].setTimeRemain(0);
    };
    InGame.prototype.actSubmitTurn = function () {
        var cardSelected = [];
        this.cardLine.children.forEach(function (card) {
            var _card = card.getComponent(TienLen_Card_1.default);
            if (_card.isSelected)
                cardSelected.push(_card.getCardIndex());
        });
        this.sendSubmitTurn(cardSelected);
        this.checkTurn = false;
    };
    InGame.prototype.sendSubmitTurn = function (cardSelected) {
        TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendDanhBai(!1, cardSelected));
    };
    InGame.prototype.actPassTurn = function () {
        this.sendPassTurn();
        this.checkTurn = false;
    };
    InGame.prototype.sendPassTurn = function () {
        TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendBoLuot(!0));
    };
    InGame.prototype.sortCards = function (cards) {
        cards = TienLen_CardGoup_1.default.indexsToCards(cards);
        var _cards = [];
        if (this.sortBySuit)
            _cards = new TienLen_CardGoup_1.default(cards).getOrderedBySuit();
        else
            _cards = TienLen_CardGoup_1.default.sortCards(cards);
        return TienLen_CardGoup_1.default.cardsToIndexs(_cards);
    };
    InGame.prototype.actSort = function () {
        this.sortBySuit = !this.sortBySuit;
        var cards = this.getCardsOnHand();
        cards = this.sortCards(cards);
        this.sortCardsOnHand(cards);
        this.setToggleCardsOnHand();
    };
    InGame.prototype.setCardsOnHand = function (cards) {
        var _this = this;
        var count = 0;
        cards.forEach(function (card) {
            var cardItem = cc.instantiate(_this.cardItem);
            cardItem.setContentSize(cc.size(100, 135));
            cardItem.parent = _this.cardLine;
            cardItem.getComponent(TienLen_Card_1.default).setCardData(52);
            cc.tween(cardItem).delay(0.05 * count)
                .to(0.2, { angle: -10, scaleX: 0 })
                .to(0.2, { angle: 0, scaleX: 1 }).call(function () {
                cardItem.getComponent(TienLen_Card_1.default).setCardData(card, _this.onCardSelectCallback.bind(_this));
                _this.cardsOnHand[card] = cardItem;
            }).start();
            count++;
        });
    };
    InGame.prototype.onCardSelectCallback = function (card) {
        if (this.currTurnCards
            && this.currTurnCards.length == 1
            && this.currTurnCards[0].card >= 48) //1 la khac 2
         {
            this.setToggleCardsOnHand();
            this.setToggleCardsOnHand([card]);
        }
        else
            this.checkSuggestion(card);
    };
    InGame.prototype.checkSuggestion = function (data) {
        var _this = this;
        data = TienLen_CardGoup_1.default.indexToCard(data);
        var cardsOnHand = TienLen_CardGoup_1.default.indexsToCards(this.getCardsOnHand());
        var turnCards = TienLen_CardGoup_1.default.indexsToCards(this.currTurnCards);
        var suggestionCards;
        if (this.checkTurn)
            suggestionCards = new TienLen_CardGoup_1.default(cardsOnHand).getSuggestionCards(turnCards, data, function () {
                var tmp = new Array();
                for (var key in _this.cardsOnHand) {
                    var tmpCard = _this.cardsOnHand[key].getComponent(TienLen_Card_1.default);
                    if (tmpCard.isSelected) {
                        tmp.push(tmpCard);
                    }
                }
                return new TienLen_CardGoup_1.default(cardsOnHand).getSuggestionNoCards(tmp, data, true);
            });
        else {
            var tmp = new Array();
            for (var key in this.cardsOnHand) {
                var tmpCard = this.cardsOnHand[key].getComponent(TienLen_Card_1.default);
                if (tmpCard.isSelected) {
                    tmp.push(tmpCard);
                }
            }
            suggestionCards = new TienLen_CardGoup_1.default(cardsOnHand).getSuggestionNoCards(tmp, data);
        }
        if (suggestionCards) {
            for (var i = 0; i < suggestionCards.length; i++) {
                for (var j = 0; j < suggestionCards[i].length; j++) {
                    if (TienLen_CardGoup_1.default.cardToIndex(data) == TienLen_CardGoup_1.default.cardToIndex(suggestionCards[i][j])) {
                        this.setToggleCardsOnHand(TienLen_CardGoup_1.default.cardsToIndexs(suggestionCards[i]));
                    }
                }
            }
        }
    };
    InGame.prototype.getCardsOnHand = function () {
        var cards = [];
        for (var key in this.cardsOnHand) {
            cards.push(this.cardsOnHand[key].getComponent(TienLen_Card_1.default).getCardIndex());
        }
        return cards;
    };
    InGame.prototype.cleanCardsOnHand = function () {
        for (var key in this.cardsOnHand)
            delete this.cardsOnHand[key];
    };
    InGame.prototype.cleanCardsOnBoard = function () {
        this.board.removeAllChildren();
    };
    InGame.prototype.setToggleCardsOnHand = function (cards) {
        if (cards === void 0) { cards = null; }
        if (cards === null) {
            for (var key in this.cardsOnHand) {
                this.cardsOnHand[key].getComponent(TienLen_Card_1.default).deSelect();
            }
        }
        else {
            for (var key in this.cardsOnHand) {
                this.cardsOnHand[key].getComponent(TienLen_Card_1.default).deSelect();
            }
            for (var i = 0; i < cards.length; i++) {
                this.cardsOnHand[cards[i]].getComponent(TienLen_Card_1.default).select();
            }
        }
    };
    InGame.prototype.sortCardsOnHand = function (cards) {
        for (var i = 0; i < cards.length; i++) {
            var index = cards[i];
            this.cardsOnHand[index].setSiblingIndex(i);
        }
    };
    InGame.prototype.cleanCardLine = function () {
        this.cardLine.removeAllChildren();
        for (var i = 1; i < this.players.length; i++) {
            this.players[i].clearCardLine();
        }
    };
    InGame.prototype.setActiveButtons = function (btnNames, actives) {
        for (var i = 0; i < btnNames.length; i++) {
            this.buttons[btnNames[i]].active = actives[i];
        }
    };
    InGame.prototype.endGame = function (data) {
        var _this = this;
        //Utils.Log("TTTTTTTTTT endGame data : ", JSON.stringify(data));
        this.state_game = STATE_GAME.FINISH;
        for (var index = 0; index < 4; index++) {
            this.players[index].setTimeRemain(0);
        }
        if (this.cardLine.childrenCount > 0) {
            this.soundManager.playAudioEffect(audio_clip.THUADICUNG);
        }
        var coinChanges = data.ketQuaTinhTienList;
        for (var i = 0; i < coinChanges.length; i++) {
            var chair = this.convertChair(i);
            if (i < TienLen_Constant_1.default.Config.MAX_PLAYER) {
                this.players[chair].setCoinChange(coinChanges[i]);
                this.players[chair].setCoin(data.currentMoney[i]);
            }
        }
        for (var i = 0, l = data.ketQuaTinhTienList.length; i < l; i++) {
            var chair = this.convertChair(i);
            if (i < TienLen_Constant_1.default.Config.MAX_PLAYER) {
                var player = this.players[chair];
                if (data.winTypes[i] != 1) {
                    if (data.winTypes[i] < 11 && player.node.active) {
                        player.showAnimWinLose(true);
                        if ([4, 5, 6, 7, 8, 9].includes(data.winTypes[i])) {
                            player.showAnimToiTrang(data.winTypes[i]);
                        }
                        if (player == this.players[0]) {
                            this.soundManager.playAudioEffect(audio_clip.WIN);
                        }
                    }
                    else {
                        player.showAnimWinLose(false);
                        if (player == this.players[0]) {
                            this.soundManager.playAudioEffect(audio_clip.LOSE);
                        }
                    }
                }
            }
        }
        for (var i = 0; i < data.cards.length; i++) {
            var chair = this.convertChair(i);
            if (chair != 0) {
                this.players[chair].setCardLine(data.cards[i]);
                this.players[chair].setCardRemain(0);
            }
        }
        this.setActiveButtons(["bt_sort"], [false]);
        if (data.countDown == 0) {
            this.setTimeCountDown("Ván đấu kết thúc sau: ", 10);
            setTimeout(function () {
                _this.cleanCardsOnHand();
                _this.cleanCardLine();
                _this.cleanCardsOnBoard();
                for (var index = 0; index < TienLen_Constant_1.default.Config.MAX_PLAYER; index++) {
                    _this.players[index].setStatus();
                    _this.players[index].animWinLose.node.active = false;
                    _this.players[index].animToiTrang.node.active = false;
                    _this.players[index].setTimeRemain(0);
                }
            }, 5000);
        }
        else {
            //Utils.Log("TTTTTTTTTT TLMN");
            setTimeout(function () {
                _this.setTimeCountDown("Ván đấu kết thúc sau: ", data.countDown - 6);
            }, 4000);
            setTimeout(function () {
                _this.cleanCardsOnHand();
                _this.cleanCardLine();
                _this.cleanCardsOnBoard();
                for (var index = 0; index < TienLen_Constant_1.default.Config.MAX_PLAYER; index++) {
                    _this.players[index].animWinLose.node.active = false;
                    _this.players[index].animToiTrang.node.active = false;
                    _this.players[index].setStatus();
                    _this.players[index].setTimeRemain(0);
                }
            }, 9000);
        }
        TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendReadyAutoStart());
        cc.Tween.stopAllByTarget(this.popupResult.getChildByName("bg"));
        setTimeout(function () {
            // show Popup Result
            _this.popupResult.active = true;
            TW(_this.popupResult.getChildByName("bg")).set({ opacity: 150, scale: 0.8 }).to(0.3, { scale: 1.0, opacity: 255 }, { easing: cc.easing.backInOut }).start();
            _this.contentPopupResult.destroyAllChildren();
            _this.contentPopupResult.removeAllChildren();
            var isTLMN = data.sizeWinType == 5 ? false : true;
            var ketQuaTinhTien = data.ketQuaTinhTienList.slice().sort(function (x, y) {
                return y - x;
            });
            var countId = 0;
            for (var index = 0; index < ketQuaTinhTien.length; index++) {
                if (ketQuaTinhTien[index] != 0) {
                    countId++;
                    var item = cc.instantiate(_this.prefabPlayerResult).getComponent("TienLen.ItemPlayerResult");
                    var indexInDataKqtt = data.ketQuaTinhTienList.indexOf(ketQuaTinhTien[index]);
                    item.initItem({
                        id: index + 1,
                        userName: _this.cachePlayersInfo[indexInDataKqtt],
                        goldChange: data.ketQuaTinhTienList[indexInDataKqtt],
                        cards: data.cards[indexInDataKqtt],
                        winTypes: data.winTypes[indexInDataKqtt],
                        isTLMN: isTLMN,
                        countId: countId
                    });
                    _this.contentPopupResult.addChild(item.node);
                }
            }
            _this.scrollPopupResult.scrollToTop(0);
        }, 4000);
    };
    InGame.prototype.updateMatch = function (data) {
    };
    InGame.prototype.userLeaveRoom = function (data) {
        var chair = this.convertChair(data.chair);
        this.players[chair].setLeaveRoom();
        if (chair == 0) {
            this.show(false);
            TienLen_Room_1.default.instance.show(true);
            TienLen_Room_1.default.instance.refreshRoom();
        }
    };
    InGame.prototype.notifyUserRegOutRoom = function (res) {
        var outChair = res["outChair"];
        var isOutRoom = res["isOutRoom"];
        var chair = this.convertChair(outChair);
        if (chair == 0) {
            if (isOutRoom) {
                // this.players[chair].setNotify("Sắp rời bàn !");
                App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_leave'));
                this.players[chair].setBackGame(true);
            }
            else {
                // this.players[chair].setNotify("Khô Máu !");
                App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_cancel_leave'));
                this.players[chair].setBackGame(false);
            }
        }
    };
    InGame.prototype.playerChat = function (res) {
        var chair = res["chair"];
        var isIcon = res["isIcon"];
        var content = res["content"];
        var seatId = this.convertChair(chair);
        if (isIcon) {
            // Chat Icon
            this.players[seatId].showChatEmotion(content);
        }
        else {
            // Chat Msg
            this.players[seatId].showChatMsg(content);
        }
    };
    InGame.prototype.playerChatChong = function (res) {
        var _this = this;
        var winChair = res["winChair"];
        var lostChair = res["lostChair"];
        var winMoney = res["winMoney"];
        var lostMoney = res["lostMoney"];
        var winCurrentMoney = res["winCurrentMoney"];
        var lostCurrentMoney = res["lostCurrentMoney"];
        setTimeout(function () {
            var seatIdWin = _this.convertChair(winChair);
            var seatIdLost = _this.convertChair(lostChair);
            _this.players[seatIdWin].setCoinChange(winMoney);
            _this.players[seatIdLost].setCoinChange(lostMoney);
            _this.players[seatIdWin].setCoin(winCurrentMoney);
            _this.players[seatIdLost].setCoin(lostCurrentMoney);
            setTimeout(function () {
                _this.players[seatIdWin].setStatus("");
                _this.players[seatIdLost].setStatus("");
            }, 2000);
        }, 1000);
    };
    InGame.prototype.wait4doithong = function (res) {
        var _this = this;
        var chair = res["chair"];
        this.fxWhoPlayFirst.active = true;
        this.fxWhoPlayFirst.getChildByName("txt").getComponent(cc.Label).string = "Đợi Bốn Đôi Thông !";
        setTimeout(function () {
            _this.fxWhoPlayFirst.active = false;
        }, 2000);
    };
    InGame.prototype.showPopupGuide = function () {
        this.popupGuide.active = true;
    };
    InGame.prototype.closePopupGuide = function () {
        this.popupGuide.active = false;
    };
    // Chat
    InGame.prototype.onBtnClickBgChat = function () {
        this.UI_Chat.opacity = 100;
        this.bgChat.active = false;
    };
    InGame.prototype.onBtnClickBoxChat = function () {
        this.UI_Chat.opacity = 255;
        this.bgChat.active = true;
    };
    InGame.prototype.showUIChat = function () {
        this.onBtnClickBoxChat();
        this.UI_Chat.active = true;
        cc.tween(this.UI_Chat).to(0.3, { x: cc.winSize.width / 2 - this.UI_Chat.width / 2 }, { easing: cc.easing.sineOut }).start();
    };
    InGame.prototype.toggleUIChat = function () {
        if (this.UI_Chat.active == false) {
            this.showUIChat();
        }
        else {
            this.closeUIChat();
        }
    };
    InGame.prototype.closeUIChat = function () {
        var _this = this;
        this.UI_Chat.active = false;
        cc.tween(this.UI_Chat).to(0.3, { x: cc.winSize.width / 2 + this.UI_Chat.width / 2 }, { easing: cc.easing.sineIn }).call(function () {
            _this.UI_Chat.active = false;
        }).start();
    };
    InGame.prototype.chatEmotion = function (event, id) {
        //Utils.Log("BaCay chatEmotion id : ", id);
        TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendChatRoom(1, id));
        this.closeUIChat();
    };
    InGame.prototype.chatMsg = function () {
        if (this.edtChatInput.string.trim().length > 0) {
            TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendChatRoom(0, this.edtChatInput.string));
            this.edtChatInput.string = "";
            this.closeUIChat();
        }
    };
    InGame.prototype.chatNhanhMsg = function (msg) {
        if (msg.trim().length > 0) {
            //Utils.Log("chatNhanhMsg:"+msg);
            TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendChatRoom(0, msg));
            this.closeUIChat();
        }
    };
    InGame.prototype.convertChair = function (a) {
        return (a - this.myChair + 4) % 4;
    };
    InGame.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    InGame.prototype.closePopupResult = function () {
        var _this = this;
        cc.Tween.stopAllByTarget(this.popupResult);
        TW(this.popupResult.getChildByName("bg")).to(0.3, { opacity: 150, scale: 0.8 }, { easing: cc.easing.backIn }).call(function () {
            _this.popupResult.active = false;
        }).start();
    };
    InGame.prototype.getTypeCard = function (arrCard) {
        var indexsToCard = [];
        arrCard.forEach(function (element) {
            indexsToCard.push(TienLen_CardGoup_1.default.indexToCard(element));
        });
        var cardtype = new TienLen_CardGoup_1.default(indexsToCard).getCardType();
        return cardtype;
    };
    InGame.prototype.showAnimTypeCard = function (typeCard, cards) {
        var animName = "";
        switch (typeCard) {
            case TYPECARD.BA_DOI_THONG:
                animName = "chat ba doi thong";
                break;
            case TYPECARD.BON_DOI_THONG:
                animName = "chat bon doi thong";
                break;
            case TYPECARD.TU_QUY:
                animName = "chat tu quy";
                break;
        }
        if (animName != "") {
            this.animBeat.node.parent.active = true;
            this.animBeat.setAnimation(0, animName, true);
            this.showSpecialCard(cards);
        }
    };
    InGame.prototype.showSpecialCard = function (indexs) {
        // card.zIndex = 1000;
        // card.runAction(
        //     cc.sequence(
        //         cc.delayTime(delay),
        //         cc.spawn(
        //             cc.scaleTo(0.15,0.01,1.2),
        //             cc.skewTo(0.15,0,-15),
        //         ),
        //         cc.callFunc(()=>{
        //             card.skewY = 15;
        //             card.getComponent('Card').setTextureWithCode(code);
        //         }),
        //         cc.spawn(
        //             cc.scaleTo(0.15,1.2),
        //             cc.skewTo(0.15,0,0),
        //         ),
        //         cc.delayTime(0.1),
        //         cc.scaleTo(0.2,1).easing(cc.easeCubicActionIn()),
        //         cc.delayTime(0.2),
        var _this = this;
        //     )
        // )
        var totalSize = ((120 * indexs.length) / 2) + 60;
        var initPos = cc.v2(-(totalSize / 2) + 60, 0);
        var cardNode = [];
        for (var i = 0; i < indexs.length; i++) {
            var cardItem = cc.instantiate(this.cardItem);
            cardNode.push(cardItem);
            cardItem.parent = this.animBeat.node.parent;
            cardItem.getComponent(TienLen_Card_1.default).setCardData(indexs[i]);
            // cardItem.setScale(0.6, 0.6);
            cardItem.setPosition(cc.v2(0, -cc.winSize.height));
            cardItem.active = true;
            TW(cardItem).delay(0.05 * i).to(0.15, { x: initPos.x + (i * 60), y: -cc.winSize.height / 4, scaleX: 0.01, scaleY: 1.2, skewX: 0, skewY: -15 })
                .call(function () {
                cardItem.skewY = 15;
            }).to(0.15, { x: initPos.x + (i * 60), y: initPos.y, scale: 1.2, skewX: 0, skewY: 0 })
                .delay(0.1)
                .to(0.2, { scale: 1.0 }, { easing: cc.easing.cubicOut })
                .start();
        }
        setTimeout(function () {
            cardNode.forEach(function (card) {
                card.destroy();
            });
            _this.animBeat.node.parent.active = false;
        }, 2500);
        this.animBeat.node.scale = 0.6;
        this.animBeat.node.setPosition(cc.v2(-74.5, -158));
    };
    var InGame_1;
    InGame.instance = null;
    __decorate([
        property(TienLen_PopupHistory_1.default)
    ], InGame.prototype, "history", void 0);
    __decorate([
        property(cc.Toggle)
    ], InGame.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], InGame.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "nodeSetting", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "contentChatNhanh", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "bgChat", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "boxSetting", void 0);
    __decorate([
        property(cc.Sprite)
    ], InGame.prototype, "sprAvatar", void 0);
    __decorate([
        property(cc.Label)
    ], InGame.prototype, "lbRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], InGame.prototype, "lbRoomBet", void 0);
    __decorate([
        property(TienLen_Player_1.default)
    ], InGame.prototype, "players", void 0);
    __decorate([
        property(cc.Label)
    ], InGame.prototype, "lbTimeCountDown", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], InGame.prototype, "cards", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "cardLine", void 0);
    __decorate([
        property(cc.Prefab)
    ], InGame.prototype, "cardItem", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "board", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "btnsInGame", void 0);
    __decorate([
        property(cc.Label)
    ], InGame.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "popupGuide", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "UI_Chat", void 0);
    __decorate([
        property(cc.EditBox)
    ], InGame.prototype, "edtChatInput", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "popupResult", void 0);
    __decorate([
        property(cc.ScrollView)
    ], InGame.prototype, "scrollPopupResult", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "contentPopupResult", void 0);
    __decorate([
        property(cc.Prefab)
    ], InGame.prototype, "prefabPlayerResult", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "fxWhoPlayFirst", void 0);
    __decorate([
        property(sp.Skeleton)
    ], InGame.prototype, "animWin", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], InGame.prototype, "dataAnimChatHai", void 0);
    __decorate([
        property(sp.Skeleton)
    ], InGame.prototype, "animBeat", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], InGame.prototype, "animToiTrang", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], InGame.prototype, "animBeatTypeCard", void 0);
    InGame = InGame_1 = __decorate([
        ccclass
    ], InGame);
    return InGame;
}(cc.Component));
exports.default = InGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLkluR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFFbkQsNENBQXVDO0FBQ3ZDLHdFQUFtRTtBQUNuRSxvREFBK0M7QUFDL0MsZ0RBQTJDO0FBQzNDLGdGQUEyRTtBQUMzRSwrQ0FBa0M7QUFDbEMsdURBQTJDO0FBQzNDLDZDQUF1QztBQUN2Qyx1REFBaUQ7QUFDakQsbURBQXNDO0FBQ3RDLDZDQUFnQztBQUNoQywrQ0FBa0M7QUFDbEMsK0RBQTRDO0FBRTVDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDWixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFLLFFBY0o7QUFkRCxXQUFLLFFBQVE7SUFDVCwyQ0FBVSxDQUFBO0lBQ1YsNkNBQVcsQ0FBQTtJQUNYLDBEQUFrQixDQUFBO0lBQ2xCLDJDQUFVLENBQUE7SUFDVix1Q0FBUSxDQUFBO0lBQ1IsMkNBQVUsQ0FBQTtJQUNWLG9EQUFlLENBQUE7SUFDZix1REFBZ0IsQ0FBQTtJQUNoQix5REFBaUIsQ0FBQTtJQUNqQix5REFBaUIsQ0FBQTtJQUNqQiwyREFBa0IsQ0FBQTtJQUNsQiwwREFBa0IsQ0FBQTtJQUNsQixrREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFkSSxRQUFRLEtBQVIsUUFBUSxRQWNaO0FBQ0QsSUFBSyxRQU1KO0FBTkQsV0FBSyxRQUFRO0lBQ1QsaURBQWEsQ0FBQTtJQUNiLDJDQUFVLENBQUE7SUFDVix5REFBaUIsQ0FBQTtJQUNqQiw2Q0FBVyxDQUFBO0FBRWYsQ0FBQyxFQU5JLFFBQVEsS0FBUixRQUFRLFFBTVo7QUFDRCxJQUFLLFVBSUo7QUFKRCxXQUFLLFVBQVU7SUFDWCxpREFBVyxDQUFB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QUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNXO0lBSWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztxREFDZ0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDaUI7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDaUI7SUFHckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDYTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzJDQUNNO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7bURBQ2M7SUFHeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0Q0FDTztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO2dEQUNXO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0RBQ2U7SUExRXhCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FnaEMxQjtJQUFELGFBQUM7Q0FoaENELEFBZ2hDQyxDQWhoQ21DLEVBQUUsQ0FBQyxTQUFTLEdBZ2hDL0M7a0JBaGhDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgVGllbkxlbk5ldHdvcmtDbGllbnQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9UaWVuTGVuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vVGllbkxlbi5DYXJkXCI7XG5pbXBvcnQgQ2FyZEdyb3VwIGZyb20gXCIuL1RpZW5MZW4uQ2FyZEdvdXBcIjtcbmltcG9ydCBUaWVuTGVuQ21kIGZyb20gXCIuL1RpZW5MZW4uQ21kXCI7XG5pbXBvcnQgVGllbkxlbkNvbnN0YW50IGZyb20gXCIuL1RpZW5MZW4uQ29uc3RhbnRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vVGllbkxlbi5QbGF5ZXJcIjtcbmltcG9ydCBSZXMgZnJvbSBcIi4vVGllbkxlbi5SZXNcIjtcbmltcG9ydCBSb29tIGZyb20gXCIuL1RpZW5MZW4uUm9vbVwiO1xuaW1wb3J0IEhpc3RvcnkgZnJvbSBcIi4vVGllbkxlbi5Qb3B1cEhpc3RvcnlcIlxuXG52YXIgVFcgPSBjYy50d2VlbjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5lbnVtIFRZUEVDQVJEIHtcbiAgICBNT1RfTEEgPSAxLFxuICAgIE1PVF9ET0kgPSAyLFxuICAgIEhBSV9ET0lfVEhPTkcgPSAxMixcbiAgICBTQU1fQ08gPSAzLFxuICAgIFNBTkggPSA0LFxuICAgIFRVX1FVWSA9IDUsXG4gICAgSEFJX1RVX1FVWSA9IDI1LFxuICAgIEJBX0RPSV9USE9ORyA9IDYsXG4gICAgQk9OX0RPSV9USE9ORyA9IDcsXG4gICAgTkFNX0RPSV9USE9ORyA9IDgsXG4gICAgU0FVX0RPSV9USFVPTkcgPSA5LFxuICAgIFNBVV9ET0lfVEhPTkcgPSAxMCxcbiAgICBTQU5IX1JPTkcgPSAxMVxufVxuZW51bSBUWVBFX1dJTiB7XG4gICAgU0FOSF9ST05HID0gMSxcbiAgICBUVV9RVVkgPSAyLFxuICAgIE5BTV9ET0lfVEhPTkcgPSAzLFxuICAgIFNBVV9ET0kgPSA0LFxuXG59XG5lbnVtIFNUQVRFX0dBTUUge1xuICAgIFdBSVRJTkcgPSAwLFxuICAgIFBMQVlJTkcgPSAxLFxuICAgIEZJTklTSCA9IDIsXG59XG5lbnVtIGF1ZGlvX2NsaXAge1xuICAgIEJHID0gMCxcbiAgICBMT1NFID0gMSxcbiAgICBXSU4gPSAyLFxuICAgIENIRVRNQVlORSA9IDMsXG4gICAgRE9ESSA9IDQsXG4gICAgSEFJTkUgPSA1LFxuICAgIE1BWUhBQlVPSSA9IDYsXG4gICAgVEhVQURJQ1VORyA9IDcsXG4gICAgU1RBUlRfR0FNRSA9IDgsXG4gICAgQ0hJQV9CQUkgPSA5LFxuICAgIERBTkggPSAxMFxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBJbkdhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShIaXN0b3J5KVxuICAgIGhpc3Rvcnk6IEhpc3RvcnkgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlTXVzaWM6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVTb3VuZDogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU2V0dGluZzpjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbnRlbnRDaGF0Tmhhbmg6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmdDaGF0OmNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJveFNldHRpbmc6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJBdmF0YXI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUm9vbUlkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUm9vbUJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXG4gICAgcGxheWVyczogUGxheWVyW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaW1lQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZExpbmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2FyZEl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bnNJbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb2FzdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIFVJIENoYXRcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9DaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRDaGF0SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgLy8gUG9wdXAgUmVzdWx0XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXBSZXN1bHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIHNjcm9sbFBvcHVwUmVzdWx0OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50UG9wdXBSZXN1bHQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiUGxheWVyUmVzdWx0OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnhXaG9QbGF5Rmlyc3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGFuaW1XaW46IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gICAgZGF0YUFuaW1DaGF0SGFpOiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGFuaW1CZWF0OiBzcC5Ta2VsZXRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIGFuaW1Ub2lUcmFuZzogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbkRhdGEpXG4gICAgYW5pbUJlYXRUeXBlQ2FyZDogc3AuU2tlbGV0b25EYXRhID0gbnVsbDtcblxuICAgIHNvdW5kTWFuYWdlciA9IG51bGw7XG5cbiAgICBkYXRhRmlyc3RUdXJuID0gbnVsbDtcbiAgICBkYXRhQ2hpYUJhaSA9IG51bGw7XG4gICAgc3RhdGVfZ2FtZSA9IFNUQVRFX0dBTUUuV0FJVElORztcblxuICAgIGNhcmRzT25IYW5kID0ge307XG4gICAgYnV0dG9ucyA9IHt9O1xuICAgIG15Q2hhaXIgPSAwO1xuICAgIHNvcnRCeVN1aXQgPSB0cnVlO1xuICAgIGN1cnJUdXJuQ2FyZHMgPSBbXTtcbiAgICBjdXJDYXJkT25Cb2FyZCA9IFtdO1xuICAgIGNvdW50Q2hhdCA9IDA7XG4gICAgY2hlY2tUdXJuID0gZmFsc2U7XG5cbiAgICBjb3VudERvd24gPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hpYUJhaURvbmUgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZW91dERlbGF5Q2hpYUJhaSA9IG51bGw7XG5cbiAgICBjYWNoZVBsYXllcnNJbmZvID0gW107XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIEluR2FtZS5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuc291bmRNYW5hZ2VyID0gUm9vbS5pbnN0YW5jZS5zb3VuZE1hbmFnZXI7XG4gICAgICAgIHRoaXMuaW5pdFJlcygpO1xuICAgICAgICB0aGlzLnNwckF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShDb25maWdzLkxvZ2luLkF2YXRhcik7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBvcHVwUmVzdWx0KTtcbiAgICAgICAgdGhpcy5wb3B1cFJlc3VsdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iZ0NoYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLmNvbnRlbnRDaGF0TmhhbmguY2hpbGRyZW5Db3VudDtpKyspe1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNvbnRlbnRDaGF0TmhhbmguY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBzZWxmLm9uQnRuQ2xpY2tCb3hDaGF0KCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGF0TmhhbmhNc2cobm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWR0Q2hhdElucHV0Lm5vZGUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5vbkJ0bkNsaWNrQm94Q2hhdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBcblxuICAgIHNob3dTZXR0aW5nKCl7XG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gU1BVdGlscy5nZXRNdXNpY1ZvbHVtbigpID4gMDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQgPSBTUFV0aWxzLmdldFNvdW5kVm9sdW1uKCkgPiAwO1xuICAgICAgICB0aGlzLm5vZGVTZXR0aW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaGlkZVNldHRpbmcoKXtcbiAgICAgICAgdGhpcy5ub2RlU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBcblxuICAgIHByaXZhdGUgb25CdG5IaXN0b3J5KCkge1xuXG4gICAgICAgIC8vIHRoaXMuYWN0Q29vbWluZ1Nvb24oKTtcbiAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5oaXN0b3J5ID09IG51bGwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJUaWVuTGVuXCIpLmxvYWQoXCJQb3B1cEhpc3RvcnlcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZmluaXNoLCB0b3RhbCwgaXRlbSkge1xuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcImVycnIgbG9hZCBnYW1lIFRJRU5MRU46XCIsIGVycjEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcInZhbyBkYXljYWkgY2h1XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlRpZW5MZW4uUG9wdXBIaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnkubm9kZS5wYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcnkuc2hvdygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeS5ub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmhpc3Rvcnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5LnNob3coKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAvLyBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgXCJjXCI6IDEzOSwgXCJwXCI6IHRoaXMucGFnZSwgXCJ1blwiOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBcImduXCI6IFwiQXVkaXRpb25cIiB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgLy8gICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIC8vICAgICBpZiAoZXJyICE9IG51bGwpIHJldHVybjtcbiAgICAgICAgLy8gICAgICAvL1V0aWxzLkxvZyhcIlwiKTtcblxuICAgICAgICAgICAgXG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuXG4gICAgb25CdG5Ub2dnbGVNdXNpYygpe1xuICAgICAgICBTUFV0aWxzLnNldE11c2ljVm9sdW1uKHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID8gMSA6IDApO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLk9OX0FVRElPX0NIQU5HRUQpO1xuICAgIH1cblxuICAgIG9uQnRuVG9nZ2xlU291bmQoKXtcbiAgICAgICAgU1BVdGlscy5zZXRTb3VuZFZvbHVtbih0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCA/IDEgOiAwKTtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5PTl9BVURJT19DSEFOR0VEKTtcbiAgICB9XG5cbiAgICBpbml0UmVzKCkge1xuICAgICAgICBSZXMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgdGhpcy5idG5zSW5HYW1lLmNoaWxkcmVuLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc1tidG4ubmFtZV0gPSBidG47XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQnRuU2V0dGluZygpe1xuICAgICAgICB0aGlzLmJveFNldHRpbmcuYWN0aXZlID0gIXRoaXMuYm94U2V0dGluZy5hY3RpdmU7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3coaXNTaG93OiBib29sZWFuLCByb29tSW5mbyA9IG51bGwpIHtcbiAgICAgICAgaWYgKGlzU2hvdykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNwckF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShDb25maWdzLkxvZ2luLkF2YXRhcik7XG4gICAgICAgICAgICB0aGlzLmNsZWFuQ2FyZExpbmUoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uSGFuZCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFRpZW5MZW5Db25zdGFudC5Db25maWcuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tpbmRleF0uc2V0U3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRMZWF2ZVJvb20oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaW5kZXhdLnN0YXRlID0gU1RBVEVfR0FNRS5XQUlUSU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRSb29tSW5mbyhyb29tSW5mbyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdExlYXZlUm9vbSgpIHtcbiAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRSZXF1ZXN0TGVhdmVHYW1lKCkpO1xuICAgIH1cblxuICAgIHNldFJvb21JbmZvKHJvb20pIHtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiVExNTiBzZXRSb29tSW5mbyBkYXRhIDogXCIsIHJvb20pO1xuICAgICAgICB0aGlzLmxiUm9vbUlkLnN0cmluZyA9IHJvb20ucm9vbUlkO1xuICAgICAgICBpZiAocm9vbS5tb25leUJldCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxiUm9vbUJldC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYlJvb21CZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJvb20ubW9uZXlCZXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXlDaGFpciA9IHJvb20ubXlDaGFpcjtcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJzSW5mbyhyb29tKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tpbmRleF0uaGlkZUNoYXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm9vbS5jYXJkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocm9vbS5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkTGluZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FyZHNPbkhhbmQodGhpcy5zb3J0Q2FyZHMocm9vbS5jYXJkcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlQnV0dG9ucyhbXCJidF9zb3J0XCJdLCBbdHJ1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cFJlc3VsdCgpO1xuICAgIH1cblxuICAgIHNldFBsYXllcnNJbmZvKHJvb20pIHtcbiAgICAgICAgdGhpcy5jYWNoZVBsYXllcnNJbmZvID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vbS5wbGF5ZXJJbmZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZm8gPSByb29tLnBsYXllckluZm9zW2ldO1xuICAgICAgICAgICAgaWYgKHJvb20ucGxheWVyU3RhdHVzW2ldICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlUGxheWVyc0luZm8ucHVzaChpbmZvLm5pY2tOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihpKTtcbiAgICAgICAgICAgICAgICB2YXIgcGwgPSB0aGlzLnBsYXllcnNbY2hhaXJdO1xuXG5cbiAgICAgICAgICAgICAgICBpZiAocGwpIHBsLnNldFBsYXllckluZm8oaW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKHJvb20ucGxheWVyU3RhdHVzW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGwuc2V0U3RhdGVWaWV3aW5nKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5mby5uaWNrTmFtZSA9PSBDb25maWdzLkxvZ2luLk5pY2tuYW1lICYmIHJvb20ucGxheWVyU3RhdHVzW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZV9nYW1lID0gU1RBVEVfR0FNRS5QTEFZSU5HO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocm9vbS5wbGF5ZXJTdGF0dXNbaV0gPT0gMyAmJiByb29tLmhhc093blByb3BlcnR5KFwiaGFuZENhcmRTaXplXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsLnNldENhcmRSZW1haW4ocm9vbS5oYW5kQ2FyZFNpemVbaV0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlR2FtZUluZm8oZGF0YSkge1xuICAgICAgICB0aGlzLnNob3codHJ1ZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgb25Vc2VySm9pblJvb20odXNlcikge1xuICAgICAgICBpZiAodXNlci51U3RhdHVzICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVQbGF5ZXJzSW5mb1t1c2VyLnVDaGFpcl0gPSB1c2VyLmluZm8ubmlja05hbWU7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW3RoaXMuY29udmVydENoYWlyKHVzZXIudUNoYWlyKV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZV9nYW1lID09IFNUQVRFX0dBTUUuUExBWUlORykge1xuICAgICAgICAgICAgICAgIHBsYXllci5zZXRTdGF0ZVZpZXdpbmcodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGF5ZXIuc2V0UGxheWVySW5mbyh1c2VyLmluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXV0b1N0YXJ0KGF1dG9JbmZvKSB7XG4gICAgICAgIGlmIChhdXRvSW5mby5pc0F1dG9TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZV9nYW1lID0gU1RBVEVfR0FNRS5XQUlUSU5HO1xuICAgICAgICAgICAgdGhpcy5zZXRUaW1lQ291bnREb3duKFwiVsOhbiDEkeG6pXUgYuG6r3QgxJHhuqd1IHNhdTogXCIsIGF1dG9JbmZvLmF1dG9TdGFydFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwUmVzdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5ub2RlLmFjdGl2ZSlcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNldFN0YXRlVmlld2luZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZUNvdW50RG93bihtc2csIHQpIHtcbiAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24uc3RyaW5nID0gbXNnICsgXCJcIiArIHQgKyBcInNcIjtcbiAgICAgICAgdGhpcy5sYlRpbWVDb3VudERvd24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY291bnREb3duKTtcbiAgICAgICAgdGhpcy5jb3VudERvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICAgICAgICAgICAgdC0tO1xuICAgICAgICAgICAgICAgIGlmICh0IDwgMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlX2dhbWUgPSBTVEFURV9HQU1FLlBMQVlJTkc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0IDwgMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLnN0cmluZyA9IG1zZyArIFwiXCIgKyB0ICsgXCJzXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBmaXJzdFR1cm4oZGF0YSkge1xuICAgICAgICB0aGlzLmNsZWFuQ2FyZExpbmUoKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dERlbGF5Q2hpYUJhaSk7XG4gICAgICAgIC8vIHRoaXMudGltZW91dERlbGF5Q2hpYUJhaSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgbnVtUGxheWVyID0gMDtcbiAgICAgICAgbGV0IGFyclNlYXRJZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwbCA9IHRoaXMucGxheWVyc1t0aGlzLmNvbnZlcnRDaGFpcihpKV1cbiAgICAgICAgICAgIGlmIChwbC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBudW1QbGF5ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBhcnJTZWF0SWQucHVzaCh0aGlzLmNvbnZlcnRDaGFpcihpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FyZERlYWwgPSA2O1xuICAgICAgICAvLyBPcGVuIHwgSGlkZSBjYXJkcyBub3QgdXNlIC0+IE1hdSBiaW5oIG5oaWV1IGxhIGJhaSBxdWEgbmVuIGNoaSBjaGlhIDQgbGEgdHVvbmcgdHJ1bmdcbiAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQgKiBjYXJkRGVhbDsgaW5kZXgrKykgeyAvLyA0IHBsYXllcnMgKiA2IGNhcmRzXG5cbiAgICAgICAgbGV0IHRpbWVTaGlwID0gMC4wNTsgLy8gMC4xNVxuICAgICAgICAvLyBNb3ZlIENhcmRzIHVzZWQgdG8gZWFjaCBwbGF5ZXIgam9pbmVkXG4gICAgICAgIGlmIChudW1QbGF5ZXIgPiA0KSBudW1QbGF5ZXIgPSA0O1xuICAgICAgICB0aGlzLmZ4V2hvUGxheUZpcnN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcInRoYW5nIG5nYXkgZGFuaCB0cnVvYzpcIiArIHRoaXMuY2FjaGVQbGF5ZXJzSW5mb1tkYXRhLmNoYWlyXSk7XG4gICAgICAgIHRoaXMuZnhXaG9QbGF5Rmlyc3QuZ2V0Q2hpbGRCeU5hbWUoXCJ0eHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNhY2hlUGxheWVyc0luZm9bZGF0YS5jaGFpcl0gKyBcIiDEkcOhbmggdHLGsOG7m2MgIVwiO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZ4V2hvUGxheUZpcnN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAyLjApXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2ldO1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ2FyZERlYWwocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB9LCAxMDAwKTtcbiAgICB9XG4gICAgYWN0Q29vbWluZ1Nvb24oKXtcbiAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfZnVuY3Rpb25faW5fZGV2ZWxvcG1lbnRcIikpO1xuICAgIH1cbiAgICByZXNvbHZlQ2FyZERlYWwocGxheWVyKSB7XG4gICAgICAgIGlmIChwbGF5ZXIuc3RhdGUgPT0gU1RBVEVfR0FNRS5QTEFZSU5HKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgbCA9IDY7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FyZDRNZSA9IHBsYXllci5jYXJkRGVhbFtqXTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhcmQ0TWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZDRNZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZEl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBjYXJkNE1lLmdldENvbXBvbmVudChDYXJkKS5zZXRDYXJkRGF0YSg1Mik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjYXJkNE1lKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLmNhcmREZWFsLnB1c2goY2FyZDRNZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhcmQ0TWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcmF3UGxheWVyUG9zID0gY2MudjIocGxheWVyLm5vZGUueCwgcGxheWVyLm5vZGUueSAtIDUwKTtcbiAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoY2FyZDRNZSk7XG4gICAgICAgICAgICAgICAgVFcoY2FyZDRNZSlcbiAgICAgICAgICAgICAgICAgICAgLnNldCh7IG9wYWNpdHk6IDE1MCwgc2NhbGU6IDAuNSwgeDogMCwgeTogMCB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoaiAqIDAuMDUpXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChUVygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHg6IHJhd1BsYXllclBvcy54LCB5OiByYXdQbGF5ZXJQb3MueSwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRXKCkuYnkoMC4xNSwgeyBhbmdsZTogMzYwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLnBsYXlBdWRpb0VmZmVjdChhdWRpb19jbGlwLkNISUFfQkFJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmQ0TWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBsIC0gMSAmJiB0aGlzLnBsYXllcnMuaW5kZXhPZihwbGF5ZXIpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVDaGlhQmFpKHRoaXMuZGF0YUNoaWFCYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hpYUJhaShkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoaWFCYWkgPSBkYXRhO1xuICAgICAgICB0aGlzLmZpcnN0VHVybih0aGlzLmRhdGFGaXJzdFR1cm4pO1xuICAgIH1cbiAgICByZXNvbHZlQ2hpYUJhaShkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0Q2FyZHNPbkhhbmQodGhpcy5zb3J0Q2FyZHMoZGF0YS5jYXJkcykpO1xuICAgICAgICBpZiAoZGF0YS50b2lUcmFuZyA+IDApIHtcblxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJzW2ldLmFjdGl2ZSAmJiB0aGlzLnBsYXllcnNbaV0uc3RhdGUgPT0gU1RBVEVfR0FNRS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldLm9mZkZpcnN0Q2FyZCgpO1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaV0uc2V0Q2FyZFJlbWFpbihkYXRhLmNhcmRTaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVCdXR0b25zKFtcImJ0X3NvcnRcIl0sIFt0cnVlXSk7XG4gICAgfVxuXG4gICAgY2hhbmdlVHVybih0dXJuKSB7XG4gICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKHR1cm4uY2hhaXIpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRUaW1lUmVtYWluKDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0dXJuLnRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0VGltZVJlbWFpbih0dXJuLnRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2NoYWlyXS5zZXRUaW1lUmVtYWluKDE0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFpciA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc3VibWl0X3R1cm5cIiwgXCJidF9wYXNzX3R1cm5cIl0sIFt0cnVlLCB0cnVlXSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVHVybiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR1cm4ubmV3Um91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclR1cm5DYXJkcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jdXJDYXJkT25Cb2FyZCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jb3VudENoYXQgPSAwO1xuICAgICAgICAgICAgdGhpcy5jaGVja1R1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMucGxheWVyc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldLnNldFN0YXR1cygpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFR1cm4odHVybikge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc3VibWl0X3R1cm5cIiwgXCJidF9wYXNzX3R1cm5cIl0sIFtmYWxzZSwgZmFsc2VdKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNldFRpbWVSZW1haW4oMCk7XG4gICAgICAgIHZhciBjYXJkcyA9IHRoaXMuc29ydENhcmRzKHR1cm4uY2FyZHMpO1xuXG4gICAgICAgIGxldCBpc0V4aXN0MiA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdHVybi5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0dXJuLmNhcmRzW2luZGV4XSA9PSA0OCB8fCB0dXJuLmNhcmRzW2luZGV4XSA9PSA0OSB8fCB0dXJuLmNhcmRzW2luZGV4XSA9PSA1MCB8fCB0dXJuLmNhcmRzW2luZGV4XSA9PSA1MSkge1xuICAgICAgICAgICAgICAgIGlzRXhpc3QyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V4aXN0Mikge1xuICAgICAgICAgICAgbGV0IGFuaW1DaGF0SGFpID0gbmV3IGNjLk5vZGUoXCJhbmltQ2hhdEhhaVwiKS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9hcmRcIikuYWRkQ2hpbGQoYW5pbUNoYXRIYWkubm9kZSk7XG4gICAgICAgICAgICBhbmltQ2hhdEhhaS5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKC05OCwgLTM0OCkpO1xuICAgICAgICAgICAgYW5pbUNoYXRIYWkuc2tlbGV0b25EYXRhID0gdGhpcy5kYXRhQW5pbUNoYXRIYWk7XG4gICAgICAgICAgICBhbmltQ2hhdEhhaS5zZXRBbmltYXRpb24oMCwgXCLEkMOhbmggMlwiLCBmYWxzZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltQ2hhdEhhaS5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIDE1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhcmRIYWxmID0gKGNhcmRzLmxlbmd0aCAtIDEpIC8gMjtcbiAgICAgICAgdmFyIHJhblggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gNTA7XG4gICAgICAgIHZhciByYW5ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSAtIDMwO1xuICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcih0dXJuLmNoYWlyKTtcbiAgICAgICAgdmFyIHBsID0gdGhpcy5wbGF5ZXJzW2NoYWlyXTtcbiAgICAgICAgdGhpcy5ib2FyZC5jaGlsZHJlbi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICBjYXJkLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGNoYWlyID09IDApIHsvL3RoaXMgcGxheWVyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmRJbmRleCA9IGNhcmRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBfY2FyZCA9IHRoaXMuY2FyZHNPbkhhbmRbY2FyZEluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gX2NhcmQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihfY2FyZC5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmJvYXJkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICAgICAgX2NhcmQucGFyZW50ID0gdGhpcy5ib2FyZDtcbiAgICAgICAgICAgICAgICBfY2FyZC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgIF9jYXJkLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4yLCBjYy52MigoaSAtIGNhcmRIYWxmKSAqIDMwICsgcmFuWCwgcmFuWSkpKTtcbiAgICAgICAgICAgICAgICBfY2FyZC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIDAuNjUsIDAuNjUpKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5jYXJkc09uSGFuZFtjYXJkSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgeyAvL3RoYXQgcGxheWVyXG4gICAgICAgICAgICB2YXIgcG9zID0gcGwubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBsLm5vZGUucG9zaXRpb24pXG4gICAgICAgICAgICBwb3MgPSB0aGlzLmJvYXJkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmRJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkSXRlbSk7XG4gICAgICAgICAgICAgICAgY2FyZEl0ZW0ucGFyZW50ID0gdGhpcy5ib2FyZDtcbiAgICAgICAgICAgICAgICBjYXJkSXRlbS5zZXRTY2FsZSgwLjY1LCAwLjY1KTtcbiAgICAgICAgICAgICAgICBjYXJkSXRlbS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgIGNhcmRJdGVtLmdldENvbXBvbmVudChDYXJkKS5zZXRDYXJkRGF0YShjYXJkc1tpXSk7XG4gICAgICAgICAgICAgICAgY2FyZEl0ZW0uc2V0Q29udGVudFNpemUoY2Muc2l6ZSgxMDAsIDEzNSkpO1xuICAgICAgICAgICAgICAgIGNhcmRJdGVtLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4yLCBjYy52MigoaSAtIGNhcmRIYWxmKSAqIDMwICsgcmFuWCwgcmFuWSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBsLnNldENhcmRSZW1haW4odHVybi5udW1iZXJDYXJkKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclR1cm5DYXJkcyA9IGNhcmRzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hlY2tUeXBlU291bmRFZmYoY2FyZHMsIHRoaXMuY3VyQ2FyZE9uQm9hcmQpO1xuICAgICAgICB0aGlzLmN1ckNhcmRPbkJvYXJkID0gY2FyZHM7XG5cbiAgICAgICAgbGV0IHR5cGVDYXJkID0gdGhpcy5nZXRUeXBlQ2FyZChjYXJkcyk7XG4gICAgICAgIHRoaXMuc2hvd0FuaW1UeXBlQ2FyZCh0eXBlQ2FyZCwgY2FyZHMpO1xuXG5cbiAgICB9XG4gICAgY2hlY2tUeXBlU291bmRFZmYoY2FyZHMsIGN1cnJUdXJuQ2FyZHMgPSBudWxsKSB7XG4gICAgICAgIGxldCB0eXBlU291bmQgPSAxMDtcbiAgICAgICAgbGV0IGFyclBpZyA9IFs0OCwgNDksIDUwLCA1MV07XG5cbiAgICAgICAgaWYgKGFyclBpZy5zb21lKGVsZSA9PiBjYXJkcy5pbmNsdWRlcyhlbGUpKSkge1xuICAgICAgICAgICAgdHlwZVNvdW5kID0gYXVkaW9fY2xpcC5IQUlORTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VyclR1cm5DYXJkcy5zb21lKGVsZSA9PiBhcnJQaWcuaW5jbHVkZXMoZWxlKSkpIHsvL2NoYXQgZGMgMi5cbiAgICAgICAgICAgIHRoaXMuY291bnRDaGF0Kys7XG4gICAgICAgICAgICBpZiAodGhpcy5jb3VudENoYXQgPT0gMSlcbiAgICAgICAgICAgICAgICB0eXBlU291bmQgPSBhdWRpb19jbGlwLkNIRVRNQVlORTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY291bnRDaGF0ID09IDIpIHtcbiAgICAgICAgICAgICAgICB0eXBlU291bmQgPSBhdWRpb19jbGlwLk1BWUhBQlVPSTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb3VudENoYXQgPT0gMykge1xuICAgICAgICAgICAgICAgIHR5cGVTb3VuZCA9IGF1ZGlvX2NsaXAuRE9ESTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5wbGF5QXVkaW9FZmZlY3QodHlwZVNvdW5kKTtcbiAgICB9XG5cbiAgICBwYXNzVHVybih0dXJuKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIlBhc3MgdHVyblwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzW3RoaXMuY29udmVydENoYWlyKHR1cm4uY2hhaXIpXS5zZXROb3RpZnkoXCJC4buPIGzGsOG7o3RcIik7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlQnV0dG9ucyhbXCJidF9zdWJtaXRfdHVyblwiLCBcImJ0X3Bhc3NfdHVyblwiXSwgW2ZhbHNlLCBmYWxzZV0pO1xuICAgICAgICB0aGlzLnBsYXllcnNbMF0uc2V0VGltZVJlbWFpbigwKTtcbiAgICB9XG5cbiAgICBhY3RTdWJtaXRUdXJuKCkge1xuICAgICAgICB2YXIgY2FyZFNlbGVjdGVkID0gW107XG4gICAgICAgIHRoaXMuY2FyZExpbmUuY2hpbGRyZW4uZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIHZhciBfY2FyZCA9IGNhcmQuZ2V0Q29tcG9uZW50KENhcmQpO1xuICAgICAgICAgICAgaWYgKF9jYXJkLmlzU2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgY2FyZFNlbGVjdGVkLnB1c2goX2NhcmQuZ2V0Q2FyZEluZGV4KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZW5kU3VibWl0VHVybihjYXJkU2VsZWN0ZWQpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tUdXJuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VuZFN1Ym1pdFR1cm4oY2FyZFNlbGVjdGVkKSB7XG4gICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgVGllbkxlbkNtZC5TZW5kRGFuaEJhaSghMSwgY2FyZFNlbGVjdGVkKSk7XG4gICAgfVxuXG4gICAgYWN0UGFzc1R1cm4oKSB7XG4gICAgICAgIHRoaXMuc2VuZFBhc3NUdXJuKCk7XG5cbiAgICAgICAgdGhpcy5jaGVja1R1cm4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZW5kUGFzc1R1cm4oKSB7XG4gICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgVGllbkxlbkNtZC5TZW5kQm9MdW90KCEwKSk7XG4gICAgfVxuXG4gICAgc29ydENhcmRzKGNhcmRzKSB7XG4gICAgICAgIGNhcmRzID0gQ2FyZEdyb3VwLmluZGV4c1RvQ2FyZHMoY2FyZHMpO1xuICAgICAgICB2YXIgX2NhcmRzID0gW107XG4gICAgICAgIGlmICh0aGlzLnNvcnRCeVN1aXQpXG4gICAgICAgICAgICBfY2FyZHMgPSBuZXcgQ2FyZEdyb3VwKGNhcmRzKS5nZXRPcmRlcmVkQnlTdWl0KCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIF9jYXJkcyA9IENhcmRHcm91cC5zb3J0Q2FyZHMoY2FyZHMpO1xuICAgICAgICByZXR1cm4gQ2FyZEdyb3VwLmNhcmRzVG9JbmRleHMoX2NhcmRzKTtcbiAgICB9XG5cbiAgICBhY3RTb3J0KCkge1xuICAgICAgICB0aGlzLnNvcnRCeVN1aXQgPSAhdGhpcy5zb3J0QnlTdWl0O1xuICAgICAgICB2YXIgY2FyZHMgPSB0aGlzLmdldENhcmRzT25IYW5kKCk7XG4gICAgICAgIGNhcmRzID0gdGhpcy5zb3J0Q2FyZHMoY2FyZHMpO1xuICAgICAgICB0aGlzLnNvcnRDYXJkc09uSGFuZChjYXJkcyk7XG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlQ2FyZHNPbkhhbmQoKTtcbiAgICB9XG5cbiAgICBzZXRDYXJkc09uSGFuZChjYXJkcykge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgdmFyIGNhcmRJdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5jYXJkSXRlbSk7XG4gICAgICAgICAgICBjYXJkSXRlbS5zZXRDb250ZW50U2l6ZShjYy5zaXplKDEwMCwgMTM1KSk7XG4gICAgICAgICAgICBjYXJkSXRlbS5wYXJlbnQgPSB0aGlzLmNhcmRMaW5lO1xuICAgICAgICAgICAgY2FyZEl0ZW0uZ2V0Q29tcG9uZW50KENhcmQpLnNldENhcmREYXRhKDUyKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGNhcmRJdGVtKS5kZWxheSgwLjA1ICogY291bnQpXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBhbmdsZTogLTEwLCBzY2FsZVg6IDAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IGFuZ2xlOiAwLCBzY2FsZVg6IDEgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRJdGVtLmdldENvbXBvbmVudChDYXJkKS5zZXRDYXJkRGF0YShjYXJkLCB0aGlzLm9uQ2FyZFNlbGVjdENhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzT25IYW5kW2NhcmRdID0gY2FyZEl0ZW07XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2FyZFNlbGVjdENhbGxiYWNrKGNhcmQpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VyclR1cm5DYXJkc1xuICAgICAgICAgICAgJiYgdGhpcy5jdXJyVHVybkNhcmRzLmxlbmd0aCA9PSAxXG4gICAgICAgICAgICAmJiB0aGlzLmN1cnJUdXJuQ2FyZHNbMF0uY2FyZCA+PSA0OCkgLy8xIGxhIGtoYWMgMlxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNhcmRzT25IYW5kKCk7XG4gICAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNhcmRzT25IYW5kKFtjYXJkXSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhpcy5jaGVja1N1Z2dlc3Rpb24oY2FyZCk7XG4gICAgfVxuXG4gICAgY2hlY2tTdWdnZXN0aW9uKGRhdGEpIHtcbiAgICAgICAgZGF0YSA9IENhcmRHcm91cC5pbmRleFRvQ2FyZChkYXRhKTtcbiAgICAgICAgdmFyIGNhcmRzT25IYW5kID0gQ2FyZEdyb3VwLmluZGV4c1RvQ2FyZHModGhpcy5nZXRDYXJkc09uSGFuZCgpKTtcbiAgICAgICAgdmFyIHR1cm5DYXJkcyA9IENhcmRHcm91cC5pbmRleHNUb0NhcmRzKHRoaXMuY3VyclR1cm5DYXJkcyk7XG4gICAgICAgIHZhciBzdWdnZXN0aW9uQ2FyZHM7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrVHVybilcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DYXJkcyA9IG5ldyBDYXJkR3JvdXAoY2FyZHNPbkhhbmQpLmdldFN1Z2dlc3Rpb25DYXJkcyh0dXJuQ2FyZHMsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG1wID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FyZHNPbkhhbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcENhcmQgPSB0aGlzLmNhcmRzT25IYW5kW2tleV0uZ2V0Q29tcG9uZW50KENhcmQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG1wQ2FyZC5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaCh0bXBDYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENhcmRHcm91cChjYXJkc09uSGFuZCkuZ2V0U3VnZ2VzdGlvbk5vQ2FyZHModG1wLCBkYXRhLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0bXAgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhcmRzT25IYW5kKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcENhcmQgPSB0aGlzLmNhcmRzT25IYW5kW2tleV0uZ2V0Q29tcG9uZW50KENhcmQpO1xuICAgICAgICAgICAgICAgIGlmICh0bXBDYXJkLmlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2godG1wQ2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3VnZ2VzdGlvbkNhcmRzID0gbmV3IENhcmRHcm91cChjYXJkc09uSGFuZCkuZ2V0U3VnZ2VzdGlvbk5vQ2FyZHModG1wLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VnZ2VzdGlvbkNhcmRzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1Z2dlc3Rpb25DYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc3VnZ2VzdGlvbkNhcmRzW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChDYXJkR3JvdXAuY2FyZFRvSW5kZXgoZGF0YSkgPT0gQ2FyZEdyb3VwLmNhcmRUb0luZGV4KHN1Z2dlc3Rpb25DYXJkc1tpXVtqXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VG9nZ2xlQ2FyZHNPbkhhbmQoQ2FyZEdyb3VwLmNhcmRzVG9JbmRleHMoc3VnZ2VzdGlvbkNhcmRzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDYXJkc09uSGFuZCgpIHtcbiAgICAgICAgdmFyIGNhcmRzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhcmRzT25IYW5kKSB7XG4gICAgICAgICAgICBjYXJkcy5wdXNoKHRoaXMuY2FyZHNPbkhhbmRba2V5XS5nZXRDb21wb25lbnQoQ2FyZCkuZ2V0Q2FyZEluZGV4KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJkcztcbiAgICB9XG5cbiAgICBjbGVhbkNhcmRzT25IYW5kKCkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYXJkc09uSGFuZClcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNhcmRzT25IYW5kW2tleV07XG4gICAgfVxuXG4gICAgY2xlYW5DYXJkc09uQm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9XG5cbiAgICBzZXRUb2dnbGVDYXJkc09uSGFuZChjYXJkcyA9IG51bGwpIHtcbiAgICAgICAgaWYgKGNhcmRzID09PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYXJkc09uSGFuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNPbkhhbmRba2V5XS5nZXRDb21wb25lbnQoQ2FyZCkuZGVTZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhcmRzT25IYW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc09uSGFuZFtrZXldLmdldENvbXBvbmVudChDYXJkKS5kZVNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNPbkhhbmRbY2FyZHNbaV1dLmdldENvbXBvbmVudChDYXJkKS5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNvcnRDYXJkc09uSGFuZChjYXJkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjYXJkc1tpXTtcbiAgICAgICAgICAgIHRoaXMuY2FyZHNPbkhhbmRbaW5kZXhdLnNldFNpYmxpbmdJbmRleChpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFuQ2FyZExpbmUoKSB7XG4gICAgICAgIHRoaXMuY2FyZExpbmUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMucGxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldLmNsZWFyQ2FyZExpbmUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFjdGl2ZUJ1dHRvbnMoYnRuTmFtZXMsIGFjdGl2ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25zW2J0bk5hbWVzW2ldXS5hY3RpdmUgPSBhY3RpdmVzW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kR2FtZShkYXRhKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIlRUVFRUVFRUVFQgZW5kR2FtZSBkYXRhIDogXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgdGhpcy5zdGF0ZV9nYW1lID0gU1RBVEVfR0FNRS5GSU5JU0g7XG5cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tpbmRleF0uc2V0VGltZVJlbWFpbigwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYXJkTGluZS5jaGlsZHJlbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuVEhVQURJQ1VORyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvaW5DaGFuZ2VzID0gZGF0YS5rZXRRdWFUaW5oVGllbkxpc3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKGkpO1xuICAgICAgICAgICAgaWYgKGkgPCBUaWVuTGVuQ29uc3RhbnQuQ29uZmlnLk1BWF9QTEFZRVIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldENvaW5DaGFuZ2UoY29pbkNoYW5nZXNbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0Q29pbihkYXRhLmN1cnJlbnRNb25leVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBkYXRhLmtldFF1YVRpbmhUaWVuTGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKGkpO1xuICAgICAgICAgICAgaWYgKGkgPCBUaWVuTGVuQ29uc3RhbnQuQ29uZmlnLk1BWF9QTEFZRVIpIHtcbiAgICAgICAgICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2NoYWlyXTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS53aW5UeXBlc1tpXSAhPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLndpblR5cGVzW2ldIDwgMTEgJiYgcGxheWVyLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0FuaW1XaW5Mb3NlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFs0LCA1LCA2LCA3LCA4LCA5XS5pbmNsdWRlcyhkYXRhLndpblR5cGVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zaG93QW5pbVRvaVRyYW5nKGRhdGEud2luVHlwZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PSB0aGlzLnBsYXllcnNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5wbGF5QXVkaW9FZmZlY3QoYXVkaW9fY2xpcC5XSU4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2hvd0FuaW1XaW5Mb3NlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5wbGF5ZXJzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuTE9TRSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihpKTtcbiAgICAgICAgICAgIGlmIChjaGFpciAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2NoYWlyXS5zZXRDYXJkTGluZShkYXRhLmNhcmRzW2ldKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldENhcmRSZW1haW4oMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVCdXR0b25zKFtcImJ0X3NvcnRcIl0sIFtmYWxzZV0pO1xuICAgICAgICBpZiAoZGF0YS5jb3VudERvd24gPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUaW1lQ291bnREb3duKFwiVsOhbiDEkeG6pXUga+G6v3QgdGjDumMgc2F1OiBcIiwgMTApO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkNhcmRzT25IYW5kKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkNhcmRMaW5lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbkNhcmRzT25Cb2FyZCgpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBUaWVuTGVuQ29uc3RhbnQuQ29uZmlnLk1BWF9QTEFZRVI7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5hbmltV2luTG9zZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaW5kZXhdLmFuaW1Ub2lUcmFuZy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaW5kZXhdLnNldFRpbWVSZW1haW4oMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy9VdGlscy5Mb2coXCJUVFRUVFRUVFRUIFRMTU5cIik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRpbWVDb3VudERvd24oXCJWw6FuIMSR4bqldSBr4bq/dCB0aMO6YyBzYXU6IFwiLCBkYXRhLmNvdW50RG93biAtIDYpO1xuICAgICAgICAgICAgfSwgNDAwMCk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uSGFuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkTGluZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgVGllbkxlbkNvbnN0YW50LkNvbmZpZy5NQVhfUExBWUVSOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tpbmRleF0uYW5pbVdpbkxvc2Uubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5hbmltVG9pVHJhbmcubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRUaW1lUmVtYWluKDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDkwMDApO1xuICAgICAgICB9XG4gICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgVGllbkxlbkNtZC5TZW5kUmVhZHlBdXRvU3RhcnQoKSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBvcHVwUmVzdWx0LmdldENoaWxkQnlOYW1lKFwiYmdcIikpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIHNob3cgUG9wdXAgUmVzdWx0XG4gICAgICAgICAgICB0aGlzLnBvcHVwUmVzdWx0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBUVyh0aGlzLnBvcHVwUmVzdWx0LmdldENoaWxkQnlOYW1lKFwiYmdcIikpLnNldCh7IG9wYWNpdHk6IDE1MCwgc2NhbGU6IDAuOCB9KS50bygwLjMsIHsgc2NhbGU6IDEuMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRQb3B1cFJlc3VsdC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFBvcHVwUmVzdWx0LnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgICAgIGxldCBpc1RMTU4gPSBkYXRhLnNpemVXaW5UeXBlID09IDUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICBsZXQga2V0UXVhVGluaFRpZW4gPSBkYXRhLmtldFF1YVRpbmhUaWVuTGlzdC5zbGljZSgpLnNvcnQoKHgsIHkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4geSAtIHg7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgY291bnRJZCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwga2V0UXVhVGluaFRpZW4ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtldFF1YVRpbmhUaWVuW2luZGV4XSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50SWQrKztcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYlBsYXllclJlc3VsdCkuZ2V0Q29tcG9uZW50KFwiVGllbkxlbi5JdGVtUGxheWVyUmVzdWx0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhJbkRhdGFLcXR0ID0gZGF0YS5rZXRRdWFUaW5oVGllbkxpc3QuaW5kZXhPZihrZXRRdWFUaW5oVGllbltpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmluaXRJdGVtKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsLy8gaW5kZXggKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6IHRoaXMuY2FjaGVQbGF5ZXJzSW5mb1tpbmRleEluRGF0YUtxdHRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZENoYW5nZTogZGF0YS5rZXRRdWFUaW5oVGllbkxpc3RbaW5kZXhJbkRhdGFLcXR0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRzOiBkYXRhLmNhcmRzW2luZGV4SW5EYXRhS3F0dF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5UeXBlczogZGF0YS53aW5UeXBlc1tpbmRleEluRGF0YUtxdHRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUTE1OOiBpc1RMTU4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudElkOiBjb3VudElkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFBvcHVwUmVzdWx0LmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxQb3B1cFJlc3VsdC5zY3JvbGxUb1RvcCgwKTtcbiAgICAgICAgfSwgNDAwMCk7XG4gICAgfVxuXG4gICAgdXBkYXRlTWF0Y2goZGF0YSkge1xuXG4gICAgfVxuXG4gICAgdXNlckxlYXZlUm9vbShkYXRhKSB7XG4gICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKGRhdGEuY2hhaXIpO1xuICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldExlYXZlUm9vbSgpO1xuICAgICAgICBpZiAoY2hhaXIgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93KGZhbHNlKTtcbiAgICAgICAgICAgIFJvb20uaW5zdGFuY2Uuc2hvdyh0cnVlKTtcbiAgICAgICAgICAgIFJvb20uaW5zdGFuY2UucmVmcmVzaFJvb20oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeVVzZXJSZWdPdXRSb29tKHJlcykge1xuICAgICAgICBsZXQgb3V0Q2hhaXIgPSByZXNbXCJvdXRDaGFpclwiXTtcbiAgICAgICAgbGV0IGlzT3V0Um9vbSA9IHJlc1tcImlzT3V0Um9vbVwiXTtcbiAgICAgICAgbGV0IGNoYWlyID0gdGhpcy5jb252ZXJ0Q2hhaXIob3V0Q2hhaXIpO1xuICAgICAgICBpZiAoY2hhaXIgPT0gMCkge1xuICAgICAgICAgICAgaWYgKGlzT3V0Um9vbSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0Tm90aWZ5KFwiU+G6r3AgcuG7nWkgYsOgbiAhXCIpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9sZWF2ZScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldEJhY2tHYW1lKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBsYXllcnNbY2hhaXJdLnNldE5vdGlmeShcIktow7QgTcOhdSAhXCIpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcm9vbV9jYW5jZWxfbGVhdmUnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2NoYWlyXS5zZXRCYWNrR2FtZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJDaGF0KHJlcykge1xuICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgbGV0IGlzSWNvbiA9IHJlc1tcImlzSWNvblwiXTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSByZXNbXCJjb250ZW50XCJdO1xuXG4gICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmNvbnZlcnRDaGFpcihjaGFpcik7XG4gICAgICAgIGlmIChpc0ljb24pIHtcbiAgICAgICAgICAgIC8vIENoYXQgSWNvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW3NlYXRJZF0uc2hvd0NoYXRFbW90aW9uKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ2hhdCBNc2dcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRdLnNob3dDaGF0TXNnKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQ2hhdENob25nKHJlcykge1xuICAgICAgICBsZXQgd2luQ2hhaXIgPSByZXNbXCJ3aW5DaGFpclwiXTtcbiAgICAgICAgbGV0IGxvc3RDaGFpciA9IHJlc1tcImxvc3RDaGFpclwiXTtcbiAgICAgICAgbGV0IHdpbk1vbmV5ID0gcmVzW1wid2luTW9uZXlcIl07XG4gICAgICAgIGxldCBsb3N0TW9uZXkgPSByZXNbXCJsb3N0TW9uZXlcIl07XG4gICAgICAgIGxldCB3aW5DdXJyZW50TW9uZXkgPSByZXNbXCJ3aW5DdXJyZW50TW9uZXlcIl07XG4gICAgICAgIGxldCBsb3N0Q3VycmVudE1vbmV5ID0gcmVzW1wibG9zdEN1cnJlbnRNb25leVwiXTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWF0SWRXaW4gPSB0aGlzLmNvbnZlcnRDaGFpcih3aW5DaGFpcik7XG4gICAgICAgICAgICBsZXQgc2VhdElkTG9zdCA9IHRoaXMuY29udmVydENoYWlyKGxvc3RDaGFpcik7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkV2luXS5zZXRDb2luQ2hhbmdlKHdpbk1vbmV5KTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRMb3N0XS5zZXRDb2luQ2hhbmdlKGxvc3RNb25leSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkV2luXS5zZXRDb2luKHdpbkN1cnJlbnRNb25leSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkTG9zdF0uc2V0Q29pbihsb3N0Q3VycmVudE1vbmV5KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRXaW5dLnNldFN0YXR1cyhcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkTG9zdF0uc2V0U3RhdHVzKFwiXCIpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHdhaXQ0ZG9pdGhvbmcocmVzKSB7XG4gICAgICAgIGxldCBjaGFpciA9IHJlc1tcImNoYWlyXCJdO1xuXG4gICAgICAgIHRoaXMuZnhXaG9QbGF5Rmlyc3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5meFdob1BsYXlGaXJzdC5nZXRDaGlsZEJ5TmFtZShcInR4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwixJDhu6NpIELhu5FuIMSQw7RpIFRow7RuZyAhXCI7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5meFdob1BsYXlGaXJzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgfVxuXG4gICAgc2hvd1BvcHVwR3VpZGUoKSB7XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGNsb3NlUG9wdXBHdWlkZSgpIHtcbiAgICAgICAgdGhpcy5wb3B1cEd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBDaGF0XG5cbiAgICBvbkJ0bkNsaWNrQmdDaGF0KCl7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB0aGlzLmJnQ2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkJ0bkNsaWNrQm94Q2hhdCgpe1xuICAgICAgICB0aGlzLlVJX0NoYXQub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgdGhpcy5iZ0NoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgc2hvd1VJQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5vbkJ0bkNsaWNrQm94Q2hhdCgpO1xuICAgICAgICB0aGlzLlVJX0NoYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5VSV9DaGF0KS50bygwLjMsIHsgeDogY2Mud2luU2l6ZS53aWR0aCAvIDIgLSB0aGlzLlVJX0NoYXQud2lkdGggLyAyIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgIH1cblxuICAgIHRvZ2dsZVVJQ2hhdCgpe1xuICAgICAgICBpZih0aGlzLlVJX0NoYXQuYWN0aXZlID09IGZhbHNlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1VJQ2hhdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVVJQ2hhdCgpIHtcbiAgICAgICAgdGhpcy5VSV9DaGF0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLlVJX0NoYXQpLnRvKDAuMywgeyB4OiBjYy53aW5TaXplLndpZHRoIC8gMiArIHRoaXMuVUlfQ2hhdC53aWR0aCAvIDIgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlVJX0NoYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgY2hhdEVtb3Rpb24oZXZlbnQsIGlkKSB7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIkJhQ2F5IGNoYXRFbW90aW9uIGlkIDogXCIsIGlkKTtcbiAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRDaGF0Um9vbSgxLCBpZCkpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgfVxuXG4gICAgY2hhdE1zZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRDaGF0Um9vbSgwLCB0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcpKTtcbiAgICAgICAgICAgIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGF0TmhhbmhNc2cobXNnKSB7XG4gICAgICAgIGlmIChtc2cudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAvL1V0aWxzLkxvZyhcImNoYXROaGFuaE1zZzpcIittc2cpO1xuICAgICAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRDaGF0Um9vbSgwLCBtc2cpKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VVSUNoYXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnZlcnRDaGFpcihhKSB7XG4gICAgICAgIHJldHVybiAoYSAtIHRoaXMubXlDaGFpciArIDQpICUgNDtcbiAgICB9XG5cbiAgICBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGJsVG9hc3Quc3RyaW5nID0gbWVzc2FnZTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQ7XG4gICAgICAgIHBhcmVudC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBwYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcGFyZW50Lm9wYWNpdHkgPSAwO1xuICAgICAgICBwYXJlbnQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVJbigwLjEpLCBjYy5kZWxheVRpbWUoMiksIGNjLmZhZGVPdXQoMC4yKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KSkpO1xuICAgIH1cblxuICAgIGNsb3NlUG9wdXBSZXN1bHQoKSB7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLnBvcHVwUmVzdWx0KTtcbiAgICAgICAgVFcodGhpcy5wb3B1cFJlc3VsdC5nZXRDaGlsZEJ5TmFtZShcImJnXCIpKS50bygwLjMsIHsgb3BhY2l0eTogMTUwLCBzY2FsZTogMC44IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3B1cFJlc3VsdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG4gICAgZ2V0VHlwZUNhcmQoYXJyQ2FyZCkge1xuICAgICAgICBsZXQgaW5kZXhzVG9DYXJkID0gW107XG4gICAgICAgIGFyckNhcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaW5kZXhzVG9DYXJkLnB1c2goQ2FyZEdyb3VwLmluZGV4VG9DYXJkKGVsZW1lbnQpKVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNhcmR0eXBlID0gbmV3IENhcmRHcm91cChpbmRleHNUb0NhcmQpLmdldENhcmRUeXBlKCk7XG4gICAgICAgIHJldHVybiBjYXJkdHlwZTtcbiAgICB9XG4gICAgc2hvd0FuaW1UeXBlQ2FyZCh0eXBlQ2FyZCwgY2FyZHMpIHtcbiAgICAgICAgbGV0IGFuaW1OYW1lID0gXCJcIjtcbiAgICAgICAgc3dpdGNoICh0eXBlQ2FyZCkge1xuICAgICAgICAgICAgY2FzZSBUWVBFQ0FSRC5CQV9ET0lfVEhPTkc6XG4gICAgICAgICAgICAgICAgYW5pbU5hbWUgPSBcImNoYXQgYmEgZG9pIHRob25nXCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRUNBUkQuQk9OX0RPSV9USE9ORzpcbiAgICAgICAgICAgICAgICBhbmltTmFtZSA9IFwiY2hhdCBib24gZG9pIHRob25nXCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRUNBUkQuVFVfUVVZOlxuICAgICAgICAgICAgICAgIGFuaW1OYW1lID0gXCJjaGF0IHR1IHF1eVwiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFuaW1OYW1lICE9IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbUJlYXQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbUJlYXQuc2V0QW5pbWF0aW9uKDAsIGFuaW1OYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NwZWNpYWxDYXJkKGNhcmRzKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgc2hvd1NwZWNpYWxDYXJkKGluZGV4cykge1xuICAgICAgICAvLyBjYXJkLnpJbmRleCA9IDEwMDA7XG4gICAgICAgIC8vIGNhcmQucnVuQWN0aW9uKFxuICAgICAgICAvLyAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgIC8vICAgICAgICAgY2MuZGVsYXlUaW1lKGRlbGF5KSxcbiAgICAgICAgLy8gICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgLy8gICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LDAuMDEsMS4yKSxcbiAgICAgICAgLy8gICAgICAgICAgICAgY2Muc2tld1RvKDAuMTUsMCwtMTUpLFxuICAgICAgICAvLyAgICAgICAgICksXG4gICAgICAgIC8vICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcbiAgICAgICAgLy8gICAgICAgICAgICAgY2FyZC5za2V3WSA9IDE1O1xuICAgICAgICAvLyAgICAgICAgICAgICBjYXJkLmdldENvbXBvbmVudCgnQ2FyZCcpLnNldFRleHR1cmVXaXRoQ29kZShjb2RlKTtcbiAgICAgICAgLy8gICAgICAgICB9KSxcbiAgICAgICAgLy8gICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgLy8gICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LDEuMiksXG4gICAgICAgIC8vICAgICAgICAgICAgIGNjLnNrZXdUbygwLjE1LDAsMCksXG4gICAgICAgIC8vICAgICAgICAgKSxcbiAgICAgICAgLy8gICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcbiAgICAgICAgLy8gICAgICAgICBjYy5zY2FsZVRvKDAuMiwxKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSksXG4gICAgICAgIC8vICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMiksXG5cbiAgICAgICAgLy8gICAgIClcbiAgICAgICAgLy8gKVxuICAgICAgICBsZXQgdG90YWxTaXplID0gKCgxMjAgKiBpbmRleHMubGVuZ3RoKSAvIDIpICsgNjA7XG4gICAgICAgIGxldCBpbml0UG9zID0gY2MudjIoLSh0b3RhbFNpemUgLyAyKSArIDYwLCAwKTtcbiAgICAgICAgbGV0IGNhcmROb2RlID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYXJkSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZEl0ZW0pO1xuICAgICAgICAgICAgY2FyZE5vZGUucHVzaChjYXJkSXRlbSk7XG4gICAgICAgICAgICBjYXJkSXRlbS5wYXJlbnQgPSB0aGlzLmFuaW1CZWF0Lm5vZGUucGFyZW50XG4gICAgICAgICAgICBjYXJkSXRlbS5nZXRDb21wb25lbnQoQ2FyZCkuc2V0Q2FyZERhdGEoaW5kZXhzW2ldKTtcbiAgICAgICAgICAgIC8vIGNhcmRJdGVtLnNldFNjYWxlKDAuNiwgMC42KTtcbiAgICAgICAgICAgIGNhcmRJdGVtLnNldFBvc2l0aW9uKGNjLnYyKDAsIC1jYy53aW5TaXplLmhlaWdodCkpO1xuICAgICAgICAgICAgY2FyZEl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIFRXKGNhcmRJdGVtKS5kZWxheSgwLjA1ICogaSkudG8oMC4xNSwgeyB4OiBpbml0UG9zLnggKyAoaSAqIDYwKSwgeTogLWNjLndpblNpemUuaGVpZ2h0IC8gNCwgc2NhbGVYOiAwLjAxLCBzY2FsZVk6IDEuMiwgc2tld1g6IDAsIHNrZXdZOiAtMTUgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FyZEl0ZW0uc2tld1kgPSAxNTtcbiAgICAgICAgICAgICAgICB9KS50bygwLjE1LCB7IHg6IGluaXRQb3MueCArIChpICogNjApLCB5OiBpbml0UG9zLnksIHNjYWxlOiAxLjIsIHNrZXdYOiAwLCBza2V3WTogMCB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjEpXG4gICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuY3ViaWNPdXQgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNhcmROb2RlLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5hbmltQmVhdC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjUwMClcbiAgICAgICAgdGhpcy5hbmltQmVhdC5ub2RlLnNjYWxlID0gMC42O1xuICAgICAgICB0aGlzLmFuaW1CZWF0Lm5vZGUuc2V0UG9zaXRpb24oY2MudjIoLTc0LjUsIC0xNTgpKTtcbiAgICB9XG59XG4iXX0=