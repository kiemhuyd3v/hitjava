
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLenz.InGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78580HvLq9BzqCWt/YB6XVU', 'TienLenz.InGame');
// Lobby/LobbyScript/TienLenScript/TienLenz.InGame.ts

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
var Utils_1 = require("../Script/common/Utils");
var TienLenNetworkClient_1 = require("../Script/networks/TienLenNetworkClient");
var TienLen_Card_1 = require("./TienLen.Card");
var TienLen_CardGoup_1 = require("./TienLen.CardGoup");
var TienLen_Cmd_1 = require("./TienLen.Cmd");
var TienLen_Constant_1 = require("./TienLen.Constant");
var TienLen_Playerz_1 = require("./TienLen.Playerz");
var TienLen_Resz_1 = require("./TienLen.Resz");
var TienLen_Room_1 = require("./TienLen.Room");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InGame = /** @class */ (function (_super) {
    __extends(InGame, _super);
    function InGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
        _this.cardsDeal = null;
        // Popup Result
        _this.popupResult = null;
        _this.scrollPopupResult = null;
        _this.contentPopupResult = null;
        _this.prefabPlayerResult = null;
        _this.fxMeWin = null;
        _this.fxMeLose = null;
        _this.fxWhoPlayFirst = null;
        _this.cardsOnHand = {};
        _this.buttons = {};
        _this.myChair = 0;
        _this.sortBySuit = true;
        _this.currTurnCards = [];
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
        this.initRes();
    };
    InGame.prototype.initRes = function () {
        var _this = this;
        TienLen_Resz_1.default.getInstance();
        this.btnsInGame.children.forEach(function (btn) {
            _this.buttons[btn.name] = btn;
        });
    };
    InGame.prototype.show = function (isShow, roomInfo) {
        if (roomInfo === void 0) { roomInfo = null; }
        if (isShow) {
            this.node.active = true;
            this.cleanCardLine();
            this.cleanCardsOnBoard();
            this.cleanCardsOnHand();
            for (var index = 0; index < TienLen_Constant_1.default.Config.MAX_PLAYER; index++) {
                this.players[index].setStatus();
                this.players[index].setLeaveRoom();
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
        //  cc.log("TLMN setRoomInfo data : ", room);
        this.lbRoomId.string = room.roomId;
        if (room.moneyBet == 0) {
            this.lbRoomBet.string = "";
        }
        else {
            this.lbRoomBet.string = Utils_1.default.formatNumber(room.moneyBet);
        }
        this.myChair = room.myChair;
        this.setPlayersInfo(room);
        for (var index = 0; index < 4; index++) {
            this.players[index].hideChat();
        }
        if (room.cards != null) {
            if (room.cards.length > 0) {
                this.cardLine.active = true;
                //  cc.log("TLMN setRoomInfo show card");
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
            }
        }
    };
    InGame.prototype.updateGameInfo = function (data) {
        this.show(true, data);
    };
    InGame.prototype.onUserJoinRoom = function (user) {
        if (user.uStatus != 0) {
            this.cachePlayersInfo[user.uChair] = user.info.nickName;
            this.players[this.convertChair(user.uChair)].setPlayerInfo(user.info);
        }
    };
    InGame.prototype.autoStart = function (autoInfo) {
        if (autoInfo.isAutoStart) {
            this.setTimeCountDown("Ván đấu bắt đầu sau: ", autoInfo.autoStartTime);
            this.closePopupResult();
        }
    };
    InGame.prototype.setTimeCountDown = function (msg, t) {
        var _this = this;
        this.lbTimeCountDown.string = msg + "" + t + "s";
        this.lbTimeCountDown.node.active = true;
        clearInterval(this.countDown);
        this.countDown = setInterval(function () {
            t--;
            if (t < 0) {
                clearInterval(_this.countDown);
                _this.lbTimeCountDown.node.active = false;
            }
            else {
                _this.lbTimeCountDown.string = msg + "" + t + "s";
            }
        }, 1000);
    };
    InGame.prototype.firstTurn = function (data) {
        var _this = this;
        this.cleanCardLine();
        //  cc.log("TLMN firstTurn data : ", data);
        clearTimeout(this.timeoutDelayChiaBai);
        this.timeoutDelayChiaBai = setTimeout(function () {
            var numPlayer = 0;
            var arrSeatId = [];
            for (var i = 0; i < data.cards.length; i++) {
                var pl = _this.players[_this.convertChair(i)];
                if (pl.active) {
                    numPlayer += 1;
                    arrSeatId.push(_this.convertChair(i));
                }
            }
            var cardDeal = 6;
            // Open | Hide cards not use -> Mau binh nhieu la bai qua nen chi chia 4 la tuong trung
            for (var index = 0; index < 4 * cardDeal; index++) { // 4 players * 6 cards
                _this.cardsDeal.children[index].active = index >= numPlayer * cardDeal ? false : true;
                _this.cardsDeal.children[index].position = cc.v2(0, 0);
            }
            var timeShip = 0.1; // 0.15
            // Move Cards used to each player joined
            for (var a = 0; a < cardDeal; a++) { // players x 6 cards
                for (var b = 0; b < numPlayer; b++) {
                    var seatId = arrSeatId[b];
                    var card4Me = _this.cardsDeal.children[(a * numPlayer) + b];
                    var rawPlayerPos = _this.players[seatId].node.position;
                    //  cc.log("TLMN CHIA_BAI delayTime : ", ((a * numPlayer) + b) * timeShip);
                    card4Me.runAction(cc.sequence(cc.delayTime(((a * numPlayer) + b) * timeShip), cc.moveTo(0.2, rawPlayerPos)));
                }
            }
            var delayOver2Under = 0.2;
            var maxDelay = (((cardDeal - 1) * numPlayer) + (numPlayer - 1)) * timeShip; // ((a * numPlayer) + b) * timeShip
            var timeUnderLayer = (maxDelay + 0.2 + delayOver2Under) * 1000;
            //  cc.log("CHIA_BAI timeUnderLayer : ", timeUnderLayer);
            clearTimeout(_this.timeoutChiaBaiDone);
            _this.timeoutChiaBaiDone = setTimeout(function () {
                for (var index = 0; index < 4 * 6; index++) { // 4 players * 6 cards
                    //  cc.log("CHIA_BAI cardsDeal index : ", index);
                    _this.cardsDeal.children[index].active = false;
                }
                _this.fxWhoPlayFirst.active = false;
            }, timeUnderLayer);
            _this.fxWhoPlayFirst.active = true;
            _this.fxWhoPlayFirst.children[0].getComponent(cc.Label).string = _this.cachePlayersInfo[data.chair] + " đánh trước !";
        }, 1000);
        for (var i = 0; i < data.cards.length; i++) {
            var card = data.cards[i];
            var pl = this.players[this.convertChair(i)];
            if (pl.active) {
                pl.setFirstCard(card);
            }
        }
    };
    InGame.prototype.chiaBai = function (data) {
        this.setCardsOnHand(this.sortCards(data.cards));
        if (data.toiTrang > 0) {
        }
        for (var i = 0; i < this.players.length; i++) {
            if (this.players[i].active) {
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
        //  cc.log("UUUUUUU turn : ", turn);
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
            this.checkTurn = false;
            for (var i = 0; i < this.players.length; i++) {
                if (this.players[i].active) {
                    this.players[i].setStatus();
                }
            }
        }
    };
    InGame.prototype.submitTurn = function (turn) {
        var _this = this;
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
            this.fxWhoPlayFirst.active = true;
            this.fxWhoPlayFirst.children[0].getComponent(cc.Label).string = "Heo !";
            setTimeout(function () {
                _this.fxWhoPlayFirst.active = false;
            }, 2000);
        }
        var cardHalf = (cards.length - 1) / 2;
        var ranX = Math.floor(Math.random() * 100) - 50;
        var ranY = Math.floor(Math.random() * 100) - 50;
        var chair = this.convertChair(turn.chair);
        var pl = this.players[chair];
        if (chair == 0) {
            for (var i = 0; i < cards.length; i++) {
                var cardIndex = cards[i];
                var _card = this.cardsOnHand[cardIndex];
                var pos = _card.parent.convertToWorldSpaceAR(_card.position);
                pos = this.board.convertToNodeSpaceAR(pos);
                _card.parent = this.board;
                _card.setPosition(pos);
                _card.runAction(cc.moveTo(0.2, cc.v2((i - cardHalf) * 30 + ranX, ranY)));
                _card.runAction(cc.scaleTo(0.2, 0.6, 0.6));
                delete this.cardsOnHand[cardIndex];
            }
        }
        else {
            var pos = pl.node.parent.convertToWorldSpaceAR(pl.node.position);
            pos = this.board.convertToNodeSpaceAR(pos);
            for (var i = 0; i < cards.length; i++) {
                var cardItem = cc.instantiate(this.cardItem);
                cardItem.parent = this.board;
                cardItem.setScale(0.6, 0.6);
                cardItem.setPosition(pos);
                cardItem.getComponent(TienLen_Card_1.default).setCardData(cards[i]);
                cardItem.runAction(cc.moveTo(0.2, cc.v2((i - cardHalf) * 30 + ranX, ranY)));
            }
            pl.setCardRemain(turn.numberCard);
            this.currTurnCards = cards;
        }
    };
    InGame.prototype.passTurn = function (turn) {
        this.players[this.convertChair(turn.chair)].setStatus("Bỏ lượt");
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
        cards.forEach(function (card) {
            var cardItem = cc.instantiate(_this.cardItem);
            cardItem.parent = _this.cardLine;
            cardItem.getComponent(TienLen_Card_1.default).setCardData(card, _this.onCardSelectCallback.bind(_this));
            _this.cardsOnHand[card] = cardItem;
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
        //  cc.log("TTTTTTTTTT endGame data : ", data);
        for (var index = 0; index < 4; index++) {
            this.players[index].setTimeRemain(0);
        }
        var coinChanges = data.ketQuaTinhTienList;
        for (var i = 0; i < coinChanges.length; i++) {
            var chair = this.convertChair(i);
            if (i < TienLen_Constant_1.default.Config.MAX_PLAYER) {
                this.players[chair].setCoinChange(coinChanges[i]);
                this.players[chair].setCoin(data.currentMoney[i]);
                if (chair == 0) {
                    Configs_1.default.Login.Coin = data.currentMoney[i];
                    this.fxMeWin.active = coinChanges[i] > 0 ? true : false;
                    this.fxMeLose.active = coinChanges[i] < 0 ? true : false;
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
        //  cc.log("TTTTTTTTTT Sam 1 : ", data.countDown);
        if (data.countDown == 0) {
            //  cc.log("TTTTTTTTTT Sam");
            this.setTimeCountDown("Ván đấu kết thúc sau: ", 10);
            setTimeout(function () {
                _this.cleanCardsOnHand();
                _this.cleanCardLine();
                _this.cleanCardsOnBoard();
                for (var index = 0; index < TienLen_Constant_1.default.Config.MAX_PLAYER; index++) {
                    _this.players[index].setStatus();
                }
            }, 5000);
        }
        else {
            //  cc.log("TTTTTTTTTT TLMN");
            setTimeout(function () {
                _this.setTimeCountDown("Ván đấu kết thúc sau: ", data.countDown - 6);
            }, 4000);
            setTimeout(function () {
                _this.cleanCardsOnHand();
                _this.cleanCardLine();
                _this.cleanCardsOnBoard();
                for (var index = 0; index < TienLen_Constant_1.default.Config.MAX_PLAYER; index++) {
                    _this.players[index].setStatus();
                }
            }, 9000);
        }
        TienLenNetworkClient_1.default.getInstance().send(new TienLen_Cmd_1.default.SendReadyAutoStart());
        setTimeout(function () {
            // show Popup Result
            _this.fxMeWin.active = false;
            _this.fxMeLose.active = false;
            _this.popupResult.active = true;
            _this.contentPopupResult.destroyAllChildren();
            _this.contentPopupResult.removeAllChildren();
            var isTLMN = data.sizeWinType == 5 ? false : true;
            for (var index = 0; index < data.ketQuaTinhTienList.length; index++) {
                if (data.ketQuaTinhTienList[index] != 0) {
                    var item = cc.instantiate(_this.prefabPlayerResult).getComponent("TienLen.ItemPlayerResult");
                    item.initItem({
                        id: index + 1,
                        userName: _this.cachePlayersInfo[index],
                        goldChange: data.ketQuaTinhTienList[index],
                        cards: data.cards[index],
                        winTypes: data.winTypes[index],
                        isTLMN: isTLMN
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
                this.players[chair].setNotify("Sắp rời bàn !");
            }
            else {
                this.players[chair].setNotify("Khô Máu !");
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
        this.fxWhoPlayFirst.children[0].getComponent(cc.Label).string = "Đợi Bốn Đôi Thông !";
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
    InGame.prototype.showUIChat = function () {
        this.UI_Chat.active = true;
        this.UI_Chat.runAction(cc.moveTo(0.5, 420, 0));
    };
    InGame.prototype.closeUIChat = function () {
        this.UI_Chat.runAction(cc.moveTo(0.5, 1000, 0));
    };
    InGame.prototype.chatEmotion = function (event, id) {
        //  cc.log("BaCay chatEmotion id : ", id);
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
        this.popupResult.active = false;
    };
    var InGame_1;
    InGame.instance = null;
    __decorate([
        property(cc.Label)
    ], InGame.prototype, "lbRoomId", void 0);
    __decorate([
        property(cc.Label)
    ], InGame.prototype, "lbRoomBet", void 0);
    __decorate([
        property(TienLen_Playerz_1.default)
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
    ], InGame.prototype, "cardsDeal", void 0);
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
    ], InGame.prototype, "fxMeWin", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "fxMeLose", void 0);
    __decorate([
        property(cc.Node)
    ], InGame.prototype, "fxWhoPlayFirst", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuei5JbkdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQW1EO0FBS25ELGdEQUEyQztBQUMzQyxnRkFBMkU7QUFDM0UsK0NBQWtDO0FBQ2xDLHVEQUEyQztBQUMzQyw2Q0FBdUM7QUFDdkMsdURBQWlEO0FBQ2pELHFEQUF1QztBQUN2QywrQ0FBaUM7QUFDakMsK0NBQWtDO0FBSTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBbXNCQztRQTlyQkcsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFFdkIscUJBQWUsR0FBYSxJQUFJLENBQUM7UUFFakMsV0FBSyxHQUFxQixFQUFFLENBQUM7UUFFN0IsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixVQUFVO1FBRVYsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFlLElBQUksQ0FBQztRQUdoQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQWU7UUFFZixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1Qix1QkFBaUIsR0FBa0IsSUFBSSxDQUFDO1FBRXhDLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUVuQyx3QkFBa0IsR0FBYyxJQUFJLENBQUM7UUFHckMsYUFBTyxHQUFZ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QUkxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUM7cURBQ2dCO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ2lCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2lCO0lBR3JDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNhO0lBbkRkLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0Ftc0IxQjtJQUFELGFBQUM7Q0Fuc0JELEFBbXNCQyxDQW5zQm1DLEVBQUUsQ0FBQyxTQUFTLEdBbXNCL0M7a0JBbnNCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgVGllbkxlbk5ldHdvcmtDbGllbnQgZnJvbSBcIi4uL1NjcmlwdC9uZXR3b3Jrcy9UaWVuTGVuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vVGllbkxlbi5DYXJkXCI7XG5pbXBvcnQgQ2FyZEdyb3VwIGZyb20gXCIuL1RpZW5MZW4uQ2FyZEdvdXBcIjtcbmltcG9ydCBUaWVuTGVuQ21kIGZyb20gXCIuL1RpZW5MZW4uQ21kXCI7XG5pbXBvcnQgVGllbkxlbkNvbnN0YW50IGZyb20gXCIuL1RpZW5MZW4uQ29uc3RhbnRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vVGllbkxlbi5QbGF5ZXJ6XCI7XG5pbXBvcnQgUmVzIGZyb20gXCIuL1RpZW5MZW4uUmVzelwiO1xuaW1wb3J0IFJvb20gZnJvbSBcIi4vVGllbkxlbi5Sb29tXCI7XG5pbXBvcnQgSGlzdG9yeSBmcm9tIFwiLi9UaWVuTGVuLlBvcHVwSGlzdG9yeVwiXG5pbXBvcnQgY21kIGZyb20gXCIuLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5DbWRcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBJbkdhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUm9vbUlkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiUm9vbUJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXG4gICAgcGxheWVyczogUGxheWVyW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaW1lQ291bnREb3duOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIGNhcmRzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZExpbmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY2FyZEl0ZW06IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9hcmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bnNJbkdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb2FzdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwR3VpZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIFVJIENoYXRcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBVSV9DaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZHRDaGF0SW5wdXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNEZWFsOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vIFBvcHVwIFJlc3VsdFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwUmVzdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgICBzY3JvbGxQb3B1cFJlc3VsdDogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudFBvcHVwUmVzdWx0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByZWZhYlBsYXllclJlc3VsdDogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4TWVXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4TWVMb3NlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4V2hvUGxheUZpcnN0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGNhcmRzT25IYW5kID0ge307XG4gICAgYnV0dG9ucyA9IHt9O1xuICAgIG15Q2hhaXIgPSAwO1xuICAgIHNvcnRCeVN1aXQgPSB0cnVlO1xuICAgIGN1cnJUdXJuQ2FyZHMgPSBbXTtcbiAgICBjaGVja1R1cm4gPSBmYWxzZTtcblxuICAgIGNvdW50RG93biA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRpbWVvdXRDaGlhQmFpRG9uZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0RGVsYXlDaGlhQmFpID0gbnVsbDtcblxuICAgIGNhY2hlUGxheWVyc0luZm8gPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgSW5HYW1lLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5pbml0UmVzKCk7XG4gICAgfVxuXG4gICAgaW5pdFJlcygpIHtcbiAgICAgICAgUmVzLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuYnRuc0luR2FtZS5jaGlsZHJlbi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbnNbYnRuLm5hbWVdID0gYnRuO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvdyhpc1Nob3c6IGJvb2xlYW4sIHJvb21JbmZvID0gbnVsbCkge1xuICAgICAgICBpZiAoaXNTaG93KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkTGluZSgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbkNhcmRzT25Cb2FyZCgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhbkNhcmRzT25IYW5kKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgVGllbkxlbkNvbnN0YW50LkNvbmZpZy5NQVhfUExBWUVSOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRTdGF0dXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaW5kZXhdLnNldExlYXZlUm9vbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRSb29tSW5mbyhyb29tSW5mbyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdExlYXZlUm9vbSgpIHtcbiAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRSZXF1ZXN0TGVhdmVHYW1lKCkpO1xuICAgIH1cblxuICAgIHNldFJvb21JbmZvKHJvb20pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlRMTU4gc2V0Um9vbUluZm8gZGF0YSA6IFwiLCByb29tKTtcbiAgICAgICAgdGhpcy5sYlJvb21JZC5zdHJpbmcgPSByb29tLnJvb21JZDtcbiAgICAgICAgaWYgKHJvb20ubW9uZXlCZXQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sYlJvb21CZXQuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJSb29tQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyb29tLm1vbmV5QmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubXlDaGFpciA9IHJvb20ubXlDaGFpcjtcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJzSW5mbyhyb29tKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tpbmRleF0uaGlkZUNoYXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm9vbS5jYXJkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAocm9vbS5jYXJkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkTGluZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJUTE1OIHNldFJvb21JbmZvIHNob3cgY2FyZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhcmRzT25IYW5kKHRoaXMuc29ydENhcmRzKHJvb20uY2FyZHMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc29ydFwiXSwgW3RydWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cFJlc3VsdCgpO1xuICAgIH1cblxuICAgIHNldFBsYXllcnNJbmZvKHJvb20pIHtcbiAgICAgICAgdGhpcy5jYWNoZVBsYXllcnNJbmZvID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vbS5wbGF5ZXJJbmZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZm8gPSByb29tLnBsYXllckluZm9zW2ldO1xuICAgICAgICAgICAgaWYgKHJvb20ucGxheWVyU3RhdHVzW2ldICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlUGxheWVyc0luZm8ucHVzaChpbmZvLm5pY2tOYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihpKTtcbiAgICAgICAgICAgICAgICB2YXIgcGwgPSB0aGlzLnBsYXllcnNbY2hhaXJdO1xuICAgICAgICAgICAgICAgIGlmIChwbCkgcGwuc2V0UGxheWVySW5mbyhpbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUdhbWVJbmZvKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zaG93KHRydWUsIGRhdGEpO1xuICAgIH1cblxuICAgIG9uVXNlckpvaW5Sb29tKHVzZXIpIHtcbiAgICAgICAgaWYgKHVzZXIudVN0YXR1cyAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLmNhY2hlUGxheWVyc0luZm9bdXNlci51Q2hhaXJdID0gdXNlci5pbmZvLm5pY2tOYW1lO1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW3RoaXMuY29udmVydENoYWlyKHVzZXIudUNoYWlyKV0uc2V0UGxheWVySW5mbyh1c2VyLmluZm8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXV0b1N0YXJ0KGF1dG9JbmZvKSB7XG4gICAgICAgIGlmIChhdXRvSW5mby5pc0F1dG9TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUaW1lQ291bnREb3duKFwiVsOhbiDEkeG6pXUgYuG6r3QgxJHhuqd1IHNhdTogXCIsIGF1dG9JbmZvLmF1dG9TdGFydFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZVBvcHVwUmVzdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRUaW1lQ291bnREb3duKG1zZywgdCkge1xuICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5zdHJpbmcgPSBtc2cgKyBcIlwiICsgdCArIFwic1wiO1xuICAgICAgICB0aGlzLmxiVGltZUNvdW50RG93bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pO1xuICAgICAgICB0aGlzLmNvdW50RG93biA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHQtLTtcbiAgICAgICAgICAgIGlmICh0IDwgMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jb3VudERvd24pO1xuICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGJUaW1lQ291bnREb3duLnN0cmluZyA9IG1zZyArIFwiXCIgKyB0ICsgXCJzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIGZpcnN0VHVybihkYXRhKSB7XG4gICAgICAgIHRoaXMuY2xlYW5DYXJkTGluZSgpO1xuICAgICAgICAvLyAgY2MubG9nKFwiVExNTiBmaXJzdFR1cm4gZGF0YSA6IFwiLCBkYXRhKTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0RGVsYXlDaGlhQmFpKTtcbiAgICAgICAgdGhpcy50aW1lb3V0RGVsYXlDaGlhQmFpID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbnVtUGxheWVyID0gMDtcbiAgICAgICAgICAgIGxldCBhcnJTZWF0SWQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwbCA9IHRoaXMucGxheWVyc1t0aGlzLmNvbnZlcnRDaGFpcihpKV1cbiAgICAgICAgICAgICAgICBpZiAocGwuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bVBsYXllciArPSAxO1xuICAgICAgICAgICAgICAgICAgICBhcnJTZWF0SWQucHVzaCh0aGlzLmNvbnZlcnRDaGFpcihpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2FyZERlYWwgPSA2O1xuICAgICAgICAgICAgLy8gT3BlbiB8IEhpZGUgY2FyZHMgbm90IHVzZSAtPiBNYXUgYmluaCBuaGlldSBsYSBiYWkgcXVhIG5lbiBjaGkgY2hpYSA0IGxhIHR1b25nIHRydW5nXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNCAqIGNhcmREZWFsOyBpbmRleCsrKSB7IC8vIDQgcGxheWVycyAqIDYgY2FyZHNcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gaW5kZXggPj0gbnVtUGxheWVyICogY2FyZERlYWwgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc0RlYWwuY2hpbGRyZW5baW5kZXhdLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0aW1lU2hpcCA9IDAuMTsgLy8gMC4xNVxuICAgICAgICAgICAgLy8gTW92ZSBDYXJkcyB1c2VkIHRvIGVhY2ggcGxheWVyIGpvaW5lZFxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjYXJkRGVhbDsgYSsrKSB7IC8vIHBsYXllcnMgeCA2IGNhcmRzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYiA9IDA7IGIgPCBudW1QbGF5ZXI7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VhdElkID0gYXJyU2VhdElkW2JdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZDRNZSA9IHRoaXMuY2FyZHNEZWFsLmNoaWxkcmVuWyhhICogbnVtUGxheWVyKSArIGJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmF3UGxheWVyUG9zID0gdGhpcy5wbGF5ZXJzW3NlYXRJZF0ubm9kZS5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIlRMTU4gQ0hJQV9CQUkgZGVsYXlUaW1lIDogXCIsICgoYSAqIG51bVBsYXllcikgKyBiKSAqIHRpbWVTaGlwKTtcbiAgICAgICAgICAgICAgICAgICAgY2FyZDRNZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoKChhICogbnVtUGxheWVyKSArIGIpICogdGltZVNoaXApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIsIHJhd1BsYXllclBvcylcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkZWxheU92ZXIyVW5kZXIgPSAwLjI7XG4gICAgICAgICAgICB2YXIgbWF4RGVsYXkgPSAoKChjYXJkRGVhbCAtIDEpICogbnVtUGxheWVyKSArIChudW1QbGF5ZXIgLSAxKSkgKiB0aW1lU2hpcDsgLy8gKChhICogbnVtUGxheWVyKSArIGIpICogdGltZVNoaXBcbiAgICAgICAgICAgIGxldCB0aW1lVW5kZXJMYXllciA9IChtYXhEZWxheSArIDAuMiArIGRlbGF5T3ZlcjJVbmRlcikgKiAxMDAwO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkNISUFfQkFJIHRpbWVVbmRlckxheWVyIDogXCIsIHRpbWVVbmRlckxheWVyKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRDaGlhQmFpRG9uZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0ICogNjsgaW5kZXgrKykgeyAvLyA0IHBsYXllcnMgKiA2IGNhcmRzXG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJDSElBX0JBSSBjYXJkc0RlYWwgaW5kZXggOiBcIiwgaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRGVhbC5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZnhXaG9QbGF5Rmlyc3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCB0aW1lVW5kZXJMYXllcik7XG5cbiAgICAgICAgICAgIHRoaXMuZnhXaG9QbGF5Rmlyc3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZnhXaG9QbGF5Rmlyc3QuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmNhY2hlUGxheWVyc0luZm9bZGF0YS5jaGFpcl0gKyBcIiDEkcOhbmggdHLGsOG7m2MgIVwiO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYXJkID0gZGF0YS5jYXJkc1tpXTtcbiAgICAgICAgICAgIHZhciBwbCA9IHRoaXMucGxheWVyc1t0aGlzLmNvbnZlcnRDaGFpcihpKV1cbiAgICAgICAgICAgIGlmIChwbC5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBwbC5zZXRGaXJzdENhcmQoY2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlhQmFpKGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZXRDYXJkc09uSGFuZCh0aGlzLnNvcnRDYXJkcyhkYXRhLmNhcmRzKSk7XG4gICAgICAgIGlmIChkYXRhLnRvaVRyYW5nID4gMCkge1xuXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNbaV0uYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldLm9mZkZpcnN0Q2FyZCgpO1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaV0uc2V0Q2FyZFJlbWFpbihkYXRhLmNhcmRTaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBY3RpdmVCdXR0b25zKFtcImJ0X3NvcnRcIl0sIFt0cnVlXSk7XG4gICAgfVxuXG4gICAgY2hhbmdlVHVybih0dXJuKSB7XG4gICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKHR1cm4uY2hhaXIpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgNDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2luZGV4XS5zZXRUaW1lUmVtYWluKDApO1xuICAgICAgICB9XG4gICAgICAgIC8vICBjYy5sb2coXCJVVVVVVVVVIHR1cm4gOiBcIiwgdHVybik7XG4gICAgICAgIGlmICh0dXJuLnRpbWUpIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0VGltZVJlbWFpbih0dXJuLnRpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2NoYWlyXS5zZXRUaW1lUmVtYWluKDE0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFpciA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc3VibWl0X3R1cm5cIiwgXCJidF9wYXNzX3R1cm5cIl0sIFt0cnVlLCB0cnVlXSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrVHVybiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR1cm4ubmV3Um91bmQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uQm9hcmQoKTtcbiAgICAgICAgICAgIHRoaXMuY3VyclR1cm5DYXJkcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jaGVja1R1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbGF5ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyc1tpXS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2ldLnNldFN0YXR1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1Ym1pdFR1cm4odHVybikge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc3VibWl0X3R1cm5cIiwgXCJidF9wYXNzX3R1cm5cIl0sIFtmYWxzZSwgZmFsc2VdKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNldFRpbWVSZW1haW4oMCk7XG4gICAgICAgIHZhciBjYXJkcyA9IHRoaXMuc29ydENhcmRzKHR1cm4uY2FyZHMpO1xuXG4gICAgICAgIGxldCBpc0V4aXN0MiA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdHVybi5jYXJkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh0dXJuLmNhcmRzW2luZGV4XSA9PSA0OCB8fCB0dXJuLmNhcmRzW2luZGV4XSA9PSA0OSB8fCB0dXJuLmNhcmRzW2luZGV4XSA9PSA1MCB8fCB0dXJuLmNhcmRzW2luZGV4XSA9PSA1MSkge1xuICAgICAgICAgICAgICAgIGlzRXhpc3QyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V4aXN0Mikge1xuICAgICAgICAgICAgdGhpcy5meFdob1BsYXlGaXJzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5meFdob1BsYXlGaXJzdC5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiSGVvICFcIjtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZnhXaG9QbGF5Rmlyc3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYXJkSGFsZiA9IChjYXJkcy5sZW5ndGggLSAxKSAvIDI7XG4gICAgICAgIHZhciByYW5YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSAtIDUwO1xuICAgICAgICB2YXIgcmFuWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCkgLSA1MDtcbiAgICAgICAgdmFyIGNoYWlyID0gdGhpcy5jb252ZXJ0Q2hhaXIodHVybi5jaGFpcik7XG4gICAgICAgIHZhciBwbCA9IHRoaXMucGxheWVyc1tjaGFpcl07XG4gICAgICAgIGlmIChjaGFpciA9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhcmRJbmRleCA9IGNhcmRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBfY2FyZCA9IHRoaXMuY2FyZHNPbkhhbmRbY2FyZEluZGV4XTtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gX2NhcmQucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihfY2FyZC5wb3NpdGlvbilcbiAgICAgICAgICAgICAgICBwb3MgPSB0aGlzLmJvYXJkLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XG4gICAgICAgICAgICAgICAgX2NhcmQucGFyZW50ID0gdGhpcy5ib2FyZDtcbiAgICAgICAgICAgICAgICBfY2FyZC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgIF9jYXJkLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4yLCBjYy52MigoaSAtIGNhcmRIYWxmKSAqIDMwICsgcmFuWCwgcmFuWSkpKTtcbiAgICAgICAgICAgICAgICBfY2FyZC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjIsIDAuNiwgMC42KSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2FyZHNPbkhhbmRbY2FyZEluZGV4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBwbC5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocGwubm9kZS5wb3NpdGlvbilcbiAgICAgICAgICAgIHBvcyA9IHRoaXMuYm9hcmQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2FyZEl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNhcmRJdGVtKTtcbiAgICAgICAgICAgICAgICBjYXJkSXRlbS5wYXJlbnQgPSB0aGlzLmJvYXJkO1xuICAgICAgICAgICAgICAgIGNhcmRJdGVtLnNldFNjYWxlKDAuNiwgMC42KTtcbiAgICAgICAgICAgICAgICBjYXJkSXRlbS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgIGNhcmRJdGVtLmdldENvbXBvbmVudChDYXJkKS5zZXRDYXJkRGF0YShjYXJkc1tpXSk7XG4gICAgICAgICAgICAgICAgY2FyZEl0ZW0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjIsIGNjLnYyKChpIC0gY2FyZEhhbGYpICogMzAgKyByYW5YLCByYW5ZKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGwuc2V0Q2FyZFJlbWFpbih0dXJuLm51bWJlckNhcmQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyVHVybkNhcmRzID0gY2FyZHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXNzVHVybih0dXJuKSB7XG4gICAgICAgIHRoaXMucGxheWVyc1t0aGlzLmNvbnZlcnRDaGFpcih0dXJuLmNoYWlyKV0uc2V0U3RhdHVzKFwiQuG7jyBsxrDhu6N0XCIpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc3VibWl0X3R1cm5cIiwgXCJidF9wYXNzX3R1cm5cIl0sIFtmYWxzZSwgZmFsc2VdKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNldFRpbWVSZW1haW4oMCk7XG4gICAgfVxuXG4gICAgYWN0U3VibWl0VHVybigpIHtcbiAgICAgICAgdmFyIGNhcmRTZWxlY3RlZCA9IFtdO1xuICAgICAgICB0aGlzLmNhcmRMaW5lLmNoaWxkcmVuLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICB2YXIgX2NhcmQgPSBjYXJkLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgIGlmIChfY2FyZC5pc1NlbGVjdGVkKVxuICAgICAgICAgICAgICAgIGNhcmRTZWxlY3RlZC5wdXNoKF9jYXJkLmdldENhcmRJbmRleCgpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VuZFN1Ym1pdFR1cm4oY2FyZFNlbGVjdGVkKTtcblxuICAgICAgICB0aGlzLmNoZWNrVHVybiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNlbmRTdWJtaXRUdXJuKGNhcmRTZWxlY3RlZCkge1xuICAgICAgICBUaWVuTGVuTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IFRpZW5MZW5DbWQuU2VuZERhbmhCYWkoITEsIGNhcmRTZWxlY3RlZCkpO1xuICAgIH1cblxuICAgIGFjdFBhc3NUdXJuKCkge1xuICAgICAgICB0aGlzLnNlbmRQYXNzVHVybigpO1xuXG4gICAgICAgIHRoaXMuY2hlY2tUdXJuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2VuZFBhc3NUdXJuKCkge1xuICAgICAgICBUaWVuTGVuTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IFRpZW5MZW5DbWQuU2VuZEJvTHVvdCghMCkpO1xuICAgIH1cblxuICAgIHNvcnRDYXJkcyhjYXJkcykge1xuICAgICAgICBjYXJkcyA9IENhcmRHcm91cC5pbmRleHNUb0NhcmRzKGNhcmRzKTtcbiAgICAgICAgdmFyIF9jYXJkcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zb3J0QnlTdWl0KVxuICAgICAgICAgICAgX2NhcmRzID0gbmV3IENhcmRHcm91cChjYXJkcykuZ2V0T3JkZXJlZEJ5U3VpdCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBfY2FyZHMgPSBDYXJkR3JvdXAuc29ydENhcmRzKGNhcmRzKTtcbiAgICAgICAgcmV0dXJuIENhcmRHcm91cC5jYXJkc1RvSW5kZXhzKF9jYXJkcyk7XG4gICAgfVxuXG4gICAgYWN0U29ydCgpIHtcbiAgICAgICAgdGhpcy5zb3J0QnlTdWl0ID0gIXRoaXMuc29ydEJ5U3VpdDtcbiAgICAgICAgdmFyIGNhcmRzID0gdGhpcy5nZXRDYXJkc09uSGFuZCgpO1xuICAgICAgICBjYXJkcyA9IHRoaXMuc29ydENhcmRzKGNhcmRzKTtcbiAgICAgICAgdGhpcy5zb3J0Q2FyZHNPbkhhbmQoY2FyZHMpO1xuICAgICAgICB0aGlzLnNldFRvZ2dsZUNhcmRzT25IYW5kKCk7XG4gICAgfVxuXG4gICAgc2V0Q2FyZHNPbkhhbmQoY2FyZHMpIHtcbiAgICAgICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIHZhciBjYXJkSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY2FyZEl0ZW0pO1xuICAgICAgICAgICAgY2FyZEl0ZW0ucGFyZW50ID0gdGhpcy5jYXJkTGluZTtcbiAgICAgICAgICAgIGNhcmRJdGVtLmdldENvbXBvbmVudChDYXJkKS5zZXRDYXJkRGF0YShjYXJkLCB0aGlzLm9uQ2FyZFNlbGVjdENhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5jYXJkc09uSGFuZFtjYXJkXSA9IGNhcmRJdGVtO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNhcmRTZWxlY3RDYWxsYmFjayhjYXJkKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJUdXJuQ2FyZHNcbiAgICAgICAgICAgICYmIHRoaXMuY3VyclR1cm5DYXJkcy5sZW5ndGggPT0gMVxuICAgICAgICAgICAgJiYgdGhpcy5jdXJyVHVybkNhcmRzWzBdLmNhcmQgPj0gNDgpIC8vMSBsYSBraGFjIDJcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zZXRUb2dnbGVDYXJkc09uSGFuZCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRUb2dnbGVDYXJkc09uSGFuZChbY2FyZF0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTdWdnZXN0aW9uKGNhcmQpO1xuICAgIH1cblxuICAgIGNoZWNrU3VnZ2VzdGlvbihkYXRhKSB7XG4gICAgICAgIGRhdGEgPSBDYXJkR3JvdXAuaW5kZXhUb0NhcmQoZGF0YSk7XG4gICAgICAgIHZhciBjYXJkc09uSGFuZCA9IENhcmRHcm91cC5pbmRleHNUb0NhcmRzKHRoaXMuZ2V0Q2FyZHNPbkhhbmQoKSk7XG4gICAgICAgIHZhciB0dXJuQ2FyZHMgPSBDYXJkR3JvdXAuaW5kZXhzVG9DYXJkcyh0aGlzLmN1cnJUdXJuQ2FyZHMpO1xuICAgICAgICB2YXIgc3VnZ2VzdGlvbkNhcmRzO1xuICAgICAgICBpZiAodGhpcy5jaGVja1R1cm4pXG4gICAgICAgICAgICBzdWdnZXN0aW9uQ2FyZHMgPSBuZXcgQ2FyZEdyb3VwKGNhcmRzT25IYW5kKS5nZXRTdWdnZXN0aW9uQ2FyZHModHVybkNhcmRzLCBkYXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhcmRzT25IYW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBDYXJkID0gdGhpcy5jYXJkc09uSGFuZFtrZXldLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRtcENhcmQuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2godG1wQ2FyZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDYXJkR3JvdXAoY2FyZHNPbkhhbmQpLmdldFN1Z2dlc3Rpb25Ob0NhcmRzKHRtcCwgZGF0YSwgdHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG1wID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYXJkc09uSGFuZCkge1xuICAgICAgICAgICAgICAgIGxldCB0bXBDYXJkID0gdGhpcy5jYXJkc09uSGFuZFtrZXldLmdldENvbXBvbmVudChDYXJkKTtcbiAgICAgICAgICAgICAgICBpZiAodG1wQ2FyZC5pc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKHRtcENhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1Z2dlc3Rpb25DYXJkcyA9IG5ldyBDYXJkR3JvdXAoY2FyZHNPbkhhbmQpLmdldFN1Z2dlc3Rpb25Ob0NhcmRzKHRtcCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Z2dlc3Rpb25DYXJkcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWdnZXN0aW9uQ2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHN1Z2dlc3Rpb25DYXJkc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ2FyZEdyb3VwLmNhcmRUb0luZGV4KGRhdGEpID09IENhcmRHcm91cC5jYXJkVG9JbmRleChzdWdnZXN0aW9uQ2FyZHNbaV1bal0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRvZ2dsZUNhcmRzT25IYW5kKENhcmRHcm91cC5jYXJkc1RvSW5kZXhzKHN1Z2dlc3Rpb25DYXJkc1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q2FyZHNPbkhhbmQoKSB7XG4gICAgICAgIHZhciBjYXJkcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYXJkc09uSGFuZCkge1xuICAgICAgICAgICAgY2FyZHMucHVzaCh0aGlzLmNhcmRzT25IYW5kW2tleV0uZ2V0Q29tcG9uZW50KENhcmQpLmdldENhcmRJbmRleCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FyZHM7XG4gICAgfVxuXG4gICAgY2xlYW5DYXJkc09uSGFuZCgpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FyZHNPbkhhbmQpXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jYXJkc09uSGFuZFtrZXldO1xuICAgIH1cblxuICAgIGNsZWFuQ2FyZHNPbkJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgc2V0VG9nZ2xlQ2FyZHNPbkhhbmQoY2FyZHMgPSBudWxsKSB7XG4gICAgICAgIGlmIChjYXJkcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FyZHNPbkhhbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzT25IYW5kW2tleV0uZ2V0Q29tcG9uZW50KENhcmQpLmRlU2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5jYXJkc09uSGFuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNPbkhhbmRba2V5XS5nZXRDb21wb25lbnQoQ2FyZCkuZGVTZWxlY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzT25IYW5kW2NhcmRzW2ldXS5nZXRDb21wb25lbnQoQ2FyZCkuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzb3J0Q2FyZHNPbkhhbmQoY2FyZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2FyZHNbaV07XG4gICAgICAgICAgICB0aGlzLmNhcmRzT25IYW5kW2luZGV4XS5zZXRTaWJsaW5nSW5kZXgoaSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhbkNhcmRMaW5lKCkge1xuICAgICAgICB0aGlzLmNhcmRMaW5lLnJlbW92ZUFsbENoaWxkcmVuKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnBsYXllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tpXS5jbGVhckNhcmRMaW5lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRBY3RpdmVCdXR0b25zKGJ0bk5hbWVzLCBhY3RpdmVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnRuTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uc1tidG5OYW1lc1tpXV0uYWN0aXZlID0gYWN0aXZlc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZEdhbWUoZGF0YSkge1xuICAgICAgICAvLyAgY2MubG9nKFwiVFRUVFRUVFRUVCBlbmRHYW1lIGRhdGEgOiBcIiwgZGF0YSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbaW5kZXhdLnNldFRpbWVSZW1haW4oMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvaW5DaGFuZ2VzID0gZGF0YS5rZXRRdWFUaW5oVGllbkxpc3Q7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29pbkNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKGkpO1xuICAgICAgICAgICAgaWYgKGkgPCBUaWVuTGVuQ29uc3RhbnQuQ29uZmlnLk1BWF9QTEFZRVIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldENvaW5DaGFuZ2UoY29pbkNoYW5nZXNbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0Q29pbihkYXRhLmN1cnJlbnRNb25leVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYWlyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gZGF0YS5jdXJyZW50TW9uZXlbaV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnhNZVdpbi5hY3RpdmUgPSBjb2luQ2hhbmdlc1tpXSA+IDAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnhNZUxvc2UuYWN0aXZlID0gY29pbkNoYW5nZXNbaV0gPCAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuY2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGFpciA9IHRoaXMuY29udmVydENoYWlyKGkpO1xuICAgICAgICAgICAgaWYgKGNoYWlyICE9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbY2hhaXJdLnNldENhcmRMaW5lKGRhdGEuY2FyZHNbaV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0Q2FyZFJlbWFpbigwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEFjdGl2ZUJ1dHRvbnMoW1wiYnRfc29ydFwiXSwgW2ZhbHNlXSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJUVFRUVFRUVFRUIFNhbSAxIDogXCIsIGRhdGEuY291bnREb3duKTtcbiAgICAgICAgaWYgKGRhdGEuY291bnREb3duID09IDApIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJUVFRUVFRUVFRUIFNhbVwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VGltZUNvdW50RG93bihcIlbDoW4gxJHhuqV1IGvhur90IHRow7pjIHNhdTogXCIsIDEwKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uSGFuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkTGluZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW5DYXJkc09uQm9hcmQoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgVGllbkxlbkNvbnN0YW50LkNvbmZpZy5NQVhfUExBWUVSOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tpbmRleF0uc2V0U3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiVFRUVFRUVFRUVCBUTE1OXCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaW1lQ291bnREb3duKFwiVsOhbiDEkeG6pXUga+G6v3QgdGjDumMgc2F1OiBcIiwgZGF0YS5jb3VudERvd24gLSA2KTtcbiAgICAgICAgICAgIH0sIDQwMDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuQ2FyZHNPbkhhbmQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuQ2FyZExpbmUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFuQ2FyZHNPbkJvYXJkKCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IFRpZW5MZW5Db25zdGFudC5Db25maWcuTUFYX1BMQVlFUjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbaW5kZXhdLnNldFN0YXR1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDkwMDApO1xuICAgICAgICB9XG4gICAgICAgIFRpZW5MZW5OZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgVGllbkxlbkNtZC5TZW5kUmVhZHlBdXRvU3RhcnQoKSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBzaG93IFBvcHVwIFJlc3VsdFxuICAgICAgICAgICAgdGhpcy5meE1lV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5meE1lTG9zZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBSZXN1bHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudFBvcHVwUmVzdWx0LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgdGhpcy5jb250ZW50UG9wdXBSZXN1bHQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcblxuICAgICAgICAgICAgbGV0IGlzVExNTiA9IGRhdGEuc2l6ZVdpblR5cGUgPT0gNSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEua2V0UXVhVGluaFRpZW5MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmtldFF1YVRpbmhUaWVuTGlzdFtpbmRleF0gIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiUGxheWVyUmVzdWx0KS5nZXRDb21wb25lbnQoXCJUaWVuTGVuLkl0ZW1QbGF5ZXJSZXN1bHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaW5pdEl0ZW0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiB0aGlzLmNhY2hlUGxheWVyc0luZm9baW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ29sZENoYW5nZTogZGF0YS5rZXRRdWFUaW5oVGllbkxpc3RbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZHM6IGRhdGEuY2FyZHNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luVHlwZXM6IGRhdGEud2luVHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUTE1OOiBpc1RMTU5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UG9wdXBSZXN1bHQuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFBvcHVwUmVzdWx0LnNjcm9sbFRvVG9wKDApO1xuICAgICAgICB9LCA0MDAwKTtcbiAgICB9XG5cbiAgICB1cGRhdGVNYXRjaChkYXRhKSB7XG5cbiAgICB9XG5cbiAgICB1c2VyTGVhdmVSb29tKGRhdGEpIHtcbiAgICAgICAgdmFyIGNoYWlyID0gdGhpcy5jb252ZXJ0Q2hhaXIoZGF0YS5jaGFpcik7XG4gICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0TGVhdmVSb29tKCk7XG4gICAgICAgIGlmIChjaGFpciA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3coZmFsc2UpO1xuICAgICAgICAgICAgUm9vbS5pbnN0YW5jZS5zaG93KHRydWUpO1xuICAgICAgICAgICAgUm9vbS5pbnN0YW5jZS5yZWZyZXNoUm9vbSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5VXNlclJlZ091dFJvb20ocmVzKSB7XG4gICAgICAgIGxldCBvdXRDaGFpciA9IHJlc1tcIm91dENoYWlyXCJdO1xuICAgICAgICBsZXQgaXNPdXRSb29tID0gcmVzW1wiaXNPdXRSb29tXCJdO1xuICAgICAgICBsZXQgY2hhaXIgPSB0aGlzLmNvbnZlcnRDaGFpcihvdXRDaGFpcik7XG4gICAgICAgIGlmIChjaGFpciA9PSAwKSB7XG4gICAgICAgICAgICBpZiAoaXNPdXRSb29tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW2NoYWlyXS5zZXROb3RpZnkoXCJT4bqvcCBy4budaSBiw6BuICFcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tjaGFpcl0uc2V0Tm90aWZ5KFwiS2jDtCBNw6F1ICFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5ZXJDaGF0KHJlcykge1xuICAgICAgICBsZXQgY2hhaXIgPSByZXNbXCJjaGFpclwiXTtcbiAgICAgICAgbGV0IGlzSWNvbiA9IHJlc1tcImlzSWNvblwiXTtcbiAgICAgICAgbGV0IGNvbnRlbnQgPSByZXNbXCJjb250ZW50XCJdO1xuXG4gICAgICAgIGxldCBzZWF0SWQgPSB0aGlzLmNvbnZlcnRDaGFpcihjaGFpcik7XG4gICAgICAgIGlmIChpc0ljb24pIHtcbiAgICAgICAgICAgIC8vIENoYXQgSWNvblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzW3NlYXRJZF0uc2hvd0NoYXRFbW90aW9uKGNvbnRlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ2hhdCBNc2dcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRdLnNob3dDaGF0TXNnKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheWVyQ2hhdENob25nKHJlcykge1xuICAgICAgICBsZXQgd2luQ2hhaXIgPSByZXNbXCJ3aW5DaGFpclwiXTtcbiAgICAgICAgbGV0IGxvc3RDaGFpciA9IHJlc1tcImxvc3RDaGFpclwiXTtcbiAgICAgICAgbGV0IHdpbk1vbmV5ID0gcmVzW1wid2luTW9uZXlcIl07XG4gICAgICAgIGxldCBsb3N0TW9uZXkgPSByZXNbXCJsb3N0TW9uZXlcIl07XG4gICAgICAgIGxldCB3aW5DdXJyZW50TW9uZXkgPSByZXNbXCJ3aW5DdXJyZW50TW9uZXlcIl07XG4gICAgICAgIGxldCBsb3N0Q3VycmVudE1vbmV5ID0gcmVzW1wibG9zdEN1cnJlbnRNb25leVwiXTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGxldCBzZWF0SWRXaW4gPSB0aGlzLmNvbnZlcnRDaGFpcih3aW5DaGFpcik7XG4gICAgICAgICAgICBsZXQgc2VhdElkTG9zdCA9IHRoaXMuY29udmVydENoYWlyKGxvc3RDaGFpcik7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkV2luXS5zZXRDb2luQ2hhbmdlKHdpbk1vbmV5KTtcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRMb3N0XS5zZXRDb2luQ2hhbmdlKGxvc3RNb25leSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkV2luXS5zZXRDb2luKHdpbkN1cnJlbnRNb25leSk7XG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkTG9zdF0uc2V0Q29pbihsb3N0Q3VycmVudE1vbmV5KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1tzZWF0SWRXaW5dLnNldFN0YXR1cyhcIlwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbc2VhdElkTG9zdF0uc2V0U3RhdHVzKFwiXCIpO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgfVxuXG4gICAgd2FpdDRkb2l0aG9uZyhyZXMpIHtcbiAgICAgICAgbGV0IGNoYWlyID0gcmVzW1wiY2hhaXJcIl07XG5cbiAgICAgICAgdGhpcy5meFdob1BsYXlGaXJzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZ4V2hvUGxheUZpcnN0LmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLEkOG7o2kgQuG7kW4gxJDDtGkgVGjDtG5nICFcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZ4V2hvUGxheUZpcnN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICB9XG5cbiAgICBzaG93UG9wdXBHdWlkZSgpIHtcbiAgICAgICAgdGhpcy5wb3B1cEd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgY2xvc2VQb3B1cEd1aWRlKCkge1xuICAgICAgICB0aGlzLnBvcHVwR3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hhdFxuICAgIHNob3dVSUNoYXQoKSB7XG4gICAgICAgIHRoaXMuVUlfQ2hhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlVJX0NoYXQucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2MubW92ZVRvKDAuNSwgNDIwLCAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGNsb3NlVUlDaGF0KCkge1xuICAgICAgICB0aGlzLlVJX0NoYXQucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2MubW92ZVRvKDAuNSwgMTAwMCwgMClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjaGF0RW1vdGlvbihldmVudCwgaWQpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhQ2F5IGNoYXRFbW90aW9uIGlkIDogXCIsIGlkKTtcbiAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRDaGF0Um9vbSgxLCBpZCkpO1xuICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgfVxuXG4gICAgY2hhdE1zZygpIHtcbiAgICAgICAgaWYgKHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZy50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgVGllbkxlbk5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBUaWVuTGVuQ21kLlNlbmRDaGF0Um9vbSgwLCB0aGlzLmVkdENoYXRJbnB1dC5zdHJpbmcpKTtcbiAgICAgICAgICAgIHRoaXMuZWR0Q2hhdElucHV0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmNsb3NlVUlDaGF0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb252ZXJ0Q2hhaXIoYSkge1xuICAgICAgICByZXR1cm4gKGEgLSB0aGlzLm15Q2hhaXIgKyA0KSAlIDQ7XG4gICAgfVxuXG4gICAgc2hvd1RvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxibFRvYXN0LnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50O1xuICAgICAgICBwYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHBhcmVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMC4xKSwgY2MuZGVsYXlUaW1lKDIpLCBjYy5mYWRlT3V0KDAuMiksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBjbG9zZVBvcHVwUmVzdWx0KCkge1xuICAgICAgICB0aGlzLnBvcHVwUmVzdWx0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==