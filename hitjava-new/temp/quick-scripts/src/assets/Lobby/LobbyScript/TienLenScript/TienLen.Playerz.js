"use strict";
cc._RF.push(module, '00490qIEBlApIH/wOluLBYt', 'TienLen.Playerz');
// Lobby/LobbyScript/TienLenScript/TienLen.Playerz.ts

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
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var TienLen_Card_1 = require("./TienLen.Card");
var TienLen_Resz_1 = require("./TienLen.Resz");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.avatar = null;
        _this.card = null;
        _this.lblCardRemain = null;
        _this.timeRemain = null;
        _this.lbStatus = null;
        _this.cardLine = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.ingame = false;
        _this.active = false;
        _this.chairLocal = -1;
        _this.chairInServer = -1;
        _this.type = 1;
        _this.cards = [];
        _this.state = 0;
        _this.status = -1;
        _this.info = null;
        _this.runRemain = null;
        _this.timeoutChat = null;
        return _this;
    }
    Player.prototype.setPlayerInfo = function (info) {
        //  cc.log("TLMN setPlayerInfo : ", info);
        this.lblNickname.string = info.nickName;
        this.setCoin(info.money);
        this.avatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(info.avatar);
        this.node.active = true;
        this.active = true;
        this.info = info;
        this.offFirstCard();
    };
    Player.prototype.setFirstCard = function (index) {
        this.card.spriteFrame = TienLen_Resz_1.default.getInstance().getCardFace(index);
        this.card.node.active = true;
        this.lblCardRemain.node.active = false;
    };
    Player.prototype.offFirstCard = function () {
        this.card.node.active = false;
        this.card.spriteFrame = TienLen_Resz_1.default.getInstance().getCardFace(52);
    };
    Player.prototype.setCardRemain = function (cardSize) {
        if (cardSize == 0) {
            this.card.node.active = false;
            return;
        }
        this.card.spriteFrame = TienLen_Resz_1.default.getInstance().getCardFace(52);
        this.card.node.active = true;
        this.lblCardRemain.node.active = true;
        this.lblCardRemain.string = cardSize;
    };
    Player.prototype.setTimeRemain = function (remain) {
        if (remain === void 0) { remain = 0; }
        //  cc.log("OOOOOOOOOOOOOOOO : ", remain);
        if (remain == 0) {
            clearInterval(this.runRemain);
            this.timeRemain.fillRange = 0;
            return;
        }
        else {
            var refresh = 100;
            var step = refresh / remain / 1000;
            var sefl = this;
            var change = function () {
                if (!sefl || !sefl.timeRemain)
                    return;
                if (sefl.timeRemain.fillRange <= 0) {
                    clearInterval(sefl.runRemain);
                    sefl.timeRemain.fillRange = 0;
                    return;
                }
                sefl.timeRemain.fillRange -= step;
            };
            this.timeRemain.fillRange = 1;
            this.runRemain = setInterval(change, refresh);
        }
    };
    Player.prototype.clearTimeRemain = function () {
        this.timeRemain.fillRange = 0;
    };
    Player.prototype.setStatus = function (status) {
        if (status === void 0) { status = ""; }
        var stt = status.toUpperCase();
        this.lbStatus.string = stt;
    };
    Player.prototype.setNotify = function (data) {
        var _this = this;
        this.lbStatus.string = data;
        setTimeout(function () {
            _this.lbStatus.string = "";
        }, 1000);
    };
    Player.prototype.setCoin = function (coin) {
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
    };
    Player.prototype.setCoinChange = function (change) {
        if (change > 0) {
            //  cc.log("GGGG hide setCoinChange change : ", change);
            this.lbStatus.node.active = true;
            this.lbStatus.string = "+" + Utils_1.default.formatNumber(change);
        }
        else if (change < 0) {
            this.lbStatus.node.active = true;
            this.lbStatus.string = Utils_1.default.formatNumber(change);
        }
    };
    Player.prototype.setLeaveRoom = function () {
        this.node.active = false;
        this.active = false;
        this.info = null;
    };
    Player.prototype.setCardLine = function (cards) {
        var _this = this;
        cards.forEach(function (card) {
            var item = cc.instantiate(TienLen_Resz_1.default.getInstance().getCardItem());
            item.parent = _this.cardLine;
            item.removeComponent(cc.Button);
            item.getComponent(TienLen_Card_1.default).setCardData(card);
        });
    };
    Player.prototype.clearCardLine = function () {
        this.cardLine.removeAllChildren();
    };
    Player.prototype.showChatEmotion = function (content) {
        var _this = this;
        this.chatEmotion.active = true;
        this.chatMsg.active = false;
        clearTimeout(this.timeoutChat);
        this.chatEmotion.getComponent(sp.Skeleton).setAnimation(0, content, true);
        this.timeoutChat = setTimeout(function () {
            _this.chatEmotion.active = false;
            _this.chatMsg.active = false;
        }, 3000);
    };
    Player.prototype.showChatMsg = function (content) {
        var _this = this;
        this.chatEmotion.active = false;
        this.chatMsg.active = true;
        clearTimeout(this.timeoutChat);
        this.chatMsg.children[1].getComponent(cc.Label).string = content;
        this.timeoutChat = setTimeout(function () {
            _this.chatEmotion.active = false;
            _this.chatMsg.active = false;
        }, 3000);
    };
    Player.prototype.hideChat = function () {
        clearTimeout(this.timeoutChat);
        this.chatEmotion.active = false;
        this.chatMsg.active = false;
    };
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "avatar", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "card", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblCardRemain", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "timeRemain", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lbStatus", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "cardLine", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "chatEmotion", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "chatMsg", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();