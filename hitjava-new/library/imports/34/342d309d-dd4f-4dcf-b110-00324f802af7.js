"use strict";
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