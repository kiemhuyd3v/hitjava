"use strict";
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