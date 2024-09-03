"use strict";
cc._RF.push(module, '08228u2XutF3JBcqOtbtrTL', 'TienLen.GameLogic');
// Lobby/LobbyScript/TienLenScript/TienLen.GameLogic.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("../Script/common/Utils");
var GameData_1 = require("../Script/games/GameData");
var TienLen_Constant_1 = require("./TienLen.Constant");
var TienLen_Player_1 = require("./TienLen.Player");
var TienLenGameLogic = /** @class */ (function () {
    function TienLenGameLogic() {
        this.roomOwnerID = 0;
        this.roomOwner = 0;
        this.bet = 0;
        this.myChair = -1;
        this.roomLock = !1;
        this.roomId = 0;
        this.roomIndex = 0;
        this.roomJackpot = 0;
        this.players = [];
        this.gameState = -1;
        this.typeToiTrang = 0;
        this.timeBaoSam = 0;
        this.timeAutoStart = 0;
        this.cardChiabai = [];
        this.cardDanhBai = [];
        this.firstTurnCards = [];
        this.changeTurnChair = -1;
        this.activeLocalChair = -1;
        this.newRound = !0;
        this.gameAction = -1;
        this.cards = [];
        this.activeTimeRemain = 0;
        this.moneyType = 1;
        this.gameId = 0;
        this.gameServerState = null;
        this.baoSam = null;
        this.boLuot = null;
        this.toiTrang = null;
        this.recentCards = [];
        this.cardSizes = [];
        this.handCardSizeSize = 0;
        this.chairLastTurn = -1;
        this.roomOwnerID = this.roomOwner = this.bet = 0;
        this.myChair = -1;
        this.roomLock = !1;
        this.roomId = this.roomIndex = this.roomJackpot = 0;
        this.players = [];
        this.gameState = -1;
        this.typeToiTrang = this.timeBaoSam = this.timeAutoStart = 0;
        this.cardChiabai = [];
        this.cardDanhBai = [];
        this.firstTurnCards = [];
        this.changeTurnChair = this.activeLocalChair = -1;
        this.newRound = !0;
        this.gameAction = -1;
        this.cards = [];
        for (var a = this.activeTimeRemain = 0; a < TienLen_Constant_1.default.Config.MAX_PLAYER; a++) {
            var b = new TienLen_Player_1.default();
            0 == a && (b.type = TienLen_Constant_1.default.PlayerType.MY);
            this.players.push(b);
        }
    }
    TienLenGameLogic.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TienLenGameLogic();
        }
        return this.instance;
    };
    TienLenGameLogic.prototype.initReconnect = function (a) {
        cc.sys.localStorage.setItem("outRoom", "0");
        GameData_1.default.getInstance().maxPlayer = a.maxPlayer;
        // 2 == gameData.maxPlayer ? GameManager.getInstance().currentGame = 4 : GameManager.getInstance().currentGame = 5;
        this.gameState = TienLen_Constant_1.default.GameState.PLAYCONTINUE;
        this.bet = a.roomBet;
        this.moneyType = a.moneyType;
        this.roomOwner = a.roomOwner;
        this.roomId = a.roomId;
        this.gameId = a.gameId;
        this.myChair = a.myChair;
        this.cardChiabai = [];
        //Utils.Log("cardChidBai size" + a.cards.length);
        for (var b = 0; b < a.cards.length; b++)
            this.cardChiabai.push(a.cards[b]), //Utils.Log("carChiabai " + a.cards[b]);
                this.gameServerState = a.gameServerState;
        this.gameAction = a.gameAction;
        this.activeTimeRemain = a.activeTimeRemain;
        this.changeTurnChair = this.activeLocalChair = this.convertChair(a.currentChair);
        this.baoSam = a.baoSam;
        this.boLuot = a.boLuot;
        this.toiTrang = a.toiTrang;
        this.recentCards = [];
        for (var b = 0; b < a.recentCards.length; b++)
            this.recentCards.push(a.recentCards[b]);
        for (var b = 0; b < this.players.length; b++)
            this.players[b].ingame = !1;
        for (var b = 0; b < GameData_1.default.getInstance().maxPlayer; b++) {
            var c = this.convertChair(b);
            0 != a.playerStatus[b] && (Utils_1.default.Log("playI: " + b + " " + c), this.players[c].ingame = !0, this.players[c].active = !0, this.players[c].info = a.playerInfos[b], Utils_1.default.Log("pkPlayerInfos" + a.playerInfos[b].nickName), this.players[c].status = a.playerStatus[b], this.players[c].chairInServer = b, this.players[c].chairLocal = c);
        }
    };
    TienLenGameLogic.prototype.initWith = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.JOINROOM;
        this.bet = a.moneyBet;
        this.moneyType = a.moneyType;
        this.roomOwner = a.roomOwner;
        this.roomId = a.roomId;
        this.gameId = a.gameId;
        this.myChair = a.myChair;
        this.gameId = a.gameId;
        this.gameAction = a.gameAction;
        this.activeTimeRemain = a.activeTimeRemain;
        this.changeTurnChair = this.activeLocalChair = this.convertChair(a.currentChair);
        this.cardSizes = [];
        for (b = 0; b < this.handCardSizeSize; b++)
            this.cardSizes.push(a.handCardSize[b]);
        for (var b = 0; b < this.players.length; b++)
            this.players[b].ingame = !1;
        for (b = 0; b < GameData_1.default.getInstance().maxPlayer; b++) {
            var c = this.convertChair(b);
            0 != a.playerStatus[b] && (this.players[c].ingame = !0, this.players[c].active = !0, this.players[c].info = a.playerInfos[b], this.players[c].status = a.playerStatus[b], this.players[c].chairInServer = b, this.players[c].chairLocal = c, this.players[c].remainCard = a.handCardSize[b]);
        }
    };
    TienLenGameLogic.prototype.convertChair = function (a) {
        a = (a - this.myChair + 4) % 4;
        2 == GameData_1.default.getInstance().maxPlayer ? 0 != a && (a = 2) : 0 != a && (a = TienLen_Constant_1.default.Config.MAX_PLAYER - a);
        return a;
    };
    TienLenGameLogic.prototype.numberPlayer = function () {
        for (var a = 0, b = 0; b < TienLen_Constant_1.default.Config.MAX_PLAYER; b++)
            this.players[b].ingame && 1 < this.players[b].status && a++;
        return a;
    };
    TienLenGameLogic.prototype.userJoinRoom = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.USERJOIN;
        var b = this.convertChair(a.uChair);
        this.activeLocalChair = b;
        this.players[b].ingame = !0;
        this.players[b].active = !0;
        this.players[b].info = a.info;
        this.players[b].status = a.uStatus;
        this.players[b].chairInServer = a.uChair;
    };
    TienLenGameLogic.prototype.updateOwnerRoom = function (a) {
        this.roomOwner = a.chair;
        this.gameState = TienLen_Constant_1.default.GameState.UPDATEOWNERROOM;
    };
    TienLenGameLogic.prototype.autoStart = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.AUTOSTART;
        this.timeAutoStart = a.autoStartTime;
    };
    TienLenGameLogic.prototype.firstTurn = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.FIRSTTURN;
        this.firstTurnCards = [0,
            0, 0, 0, 0
        ];
        if (a.isRandom)
            for (var b = 0; b < a.cards.length && b < GameData_1.default.getInstance().maxPlayer; b++)
                this.firstTurnCards[this.convertChair(b)] = a.cards[b];
        for (b = 0; b < TienLen_Constant_1.default.Config.MAX_PLAYER; b++)
            Utils_1.default.Log("this.firstTurn: " + b + " " + this.firstTurnCards[b]);
    };
    TienLenGameLogic.prototype.chiabai = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.CHIABAI;
        this.cardChiabai = a.cards;
        this.timeBaoSam = a.timeBaoSam;
        this.gameId = a.gameId;
    };
    TienLenGameLogic.prototype.danhbai = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.DANHBAI;
        this.cardDanhBai = a.cards;
        a = this.convertChair(a.chair);
        0 <= a && 4 >= a && (this.activeLocalChair =
            a);
    };
    TienLenGameLogic.prototype.boluot = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.BOLUOT;
    };
    TienLenGameLogic.prototype.notifyOutRoom = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.NOTIFYOUTROOM;
    };
    TienLenGameLogic.prototype.changeturn = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.CHANGETURN;
        this.newRound = a.newRound;
        var b = this.convertChair(a.chair);
        this.chairLastTurn = this.convertChair(a.chairLastTurn);
        //Utils.Log("chairLastTurn: " + this.chairLastTurn);
        this.changeTurnChair = this.activeLocalChair = b;
    };
    TienLenGameLogic.prototype.waitBonDoiThong = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.WAITBONDOITHONG;
        //Utils.Log("server.chair: " +
        a.chair;
        ;
        this.chairLastTurn = this.convertChair(a.chair);
        //Utils.Log("chairLastTurn: " + this.chairLastTurn);
    };
    TienLenGameLogic.prototype.quitRoom = function () {
        this.gameState = TienLen_Constant_1.default.GameState.QUIT;
    };
    TienLenGameLogic.prototype.chatchong = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.CHATCHONG;
        var b = this.convertChair(a.winChair), c = this.convertChair(a.lostChair);
        // 0 == b ? lobby.updateMoney(a.winMoney, this.moneyType) : 0 == c && lobby.updateMoney(a.lostMoney, this.moneyType);
        this.players[b].info.money = a.winCurrentMoney;
        this.players[c].info.money = a.lostCurrentMoney;
    };
    TienLenGameLogic.prototype.baosam = function (a) {
        // this.gameState =
        //     TienLenConstant.GameState.BAOSAM;
    };
    TienLenGameLogic.prototype.huybaosam = function (a) {
        // this.gameState = TienLenConstant.GameState.HUYBAOSAM
    };
    TienLenGameLogic.prototype.quyetdinhsam = function (a) {
        // this.gameState = TienLenConstant.GameState.QUYETDINHSAM
    };
    TienLenGameLogic.prototype.jackpot = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.JACKPOT;
    };
    TienLenGameLogic.prototype.userLeave = function (a) {
        var b = this.convertChair(a.chair);
        0 <= b && 3 >= b && a.nickName == this.players[b].info.nickName && (this.players[b].ingame = !1, this.activeLocalChair = b);
        this.gameState = TienLen_Constant_1.default.GameState.USERLEAVE;
    };
    TienLenGameLogic.prototype.endGame = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.ENDGAME;
        this.roomJackpot = a.roomJackpot;
        // for (var i = 0; i < a.currentMoney.length && i < GameData.getInstance().maxPlayer; i++)
        //     this.players[this.convertChair(i)].info && (this.players[this.convertChair(i)].info.money = a.currentMoney[i], 0 == this.convertChair(i) && lobby.updateMoney(a.currentMoney[i], this.moneyType));
        //Utils.Log("endGame");
    };
    TienLenGameLogic.prototype.updateMath = function (a) {
        this.gameState = TienLen_Constant_1.default.GameState.UPDATEMATH;
        this.myChair = a.myChair;
        this.roomOwner = a.ownerChair;
        for (var b = 0; b < a.hasInfo.length && b < GameData_1.default.getInstance().maxPlayer; b++)
            if (a.hasInfo[b]) {
                var c = this.convertChair(b);
                this.players[c].ingame &&
                    (this.players[c].info.money = a.infos[b].money, this.players[c].active = !0, this.players[c].status = a.infos[b].status);
            }
    };
    return TienLenGameLogic;
}());
exports.default = TienLenGameLogic;

cc._RF.pop();