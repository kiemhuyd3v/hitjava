"use strict";
cc._RF.push(module, '412f4i4blxDIrSUXZ0FQPQH', 'TienLen.Player');
// Lobby/LobbyScript/TienLenScript/TienLen.Player.ts

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
var Utils_1 = require("../Script/common/Utils");
var TienLen_Card_1 = require("./TienLen.Card");
var TienLen_Res_1 = require("./TienLen.Res");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var STATE_GAME;
(function (STATE_GAME) {
    STATE_GAME[STATE_GAME["WAITING"] = 0] = "WAITING";
    STATE_GAME[STATE_GAME["PLAYING"] = 1] = "PLAYING";
    STATE_GAME[STATE_GAME["FINISH"] = 2] = "FINISH";
})(STATE_GAME || (STATE_GAME = {}));
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
        _this.clockTurn = null;
        _this.animWinLose = null;
        _this.animToiTrang = null;
        _this.fontNumber = [];
        _this.fontNormal = null;
        _this.ic_back_game = null;
        _this.cardDeal = [];
        _this.ingame = false;
        _this.active = false;
        _this.chairLocal = -1;
        _this.chairInServer = -1;
        _this.type = 1;
        _this.cards = [];
        _this.state = STATE_GAME.WAITING;
        _this.status = -1;
        _this.info = null;
        _this.runRemain = null;
        _this.timeoutChat = null;
        return _this;
    }
    Player.prototype.setPlayerInfo = function (info) {
        //Utils.Log("TLMN setPlayerInfo : ", info);
        this.lblNickname.string = info.nickName;
        this.setCoin(info.money);
        if (info.nickName == Configs_1.default.Login.Nickname) {
            this.avatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(Configs_1.default.Login.Avatar);
        }
        this.node.active = true;
        this.active = true;
        this.info = info;
        this.ic_back_game.active = false;
        this.offFirstCard();
        this.clockTurn.active = false;
    };
    Player.prototype.setStateViewing = function (state) {
        cc.find("/avatar/face", this.node).color = state ? cc.Color.GRAY : cc.Color.WHITE;
        if (state) {
            this.state = STATE_GAME.WAITING;
            this.setStatus("Đang Xem");
        }
        else {
            this.state = STATE_GAME.PLAYING;
            this.setStatus();
        }
    };
    Player.prototype.setFirstCard = function (index) {
        this.card.spriteFrame = TienLen_Res_1.default.getInstance().getCardFace(index);
        this.card.node.active = true;
        this.lblCardRemain.node.active = false;
    };
    Player.prototype.offFirstCard = function () {
        this.card.node.active = false;
        this.card.spriteFrame = TienLen_Res_1.default.getInstance().getCardFace(52);
    };
    Player.prototype.setCardRemain = function (cardSize) {
        //Utils.Log("card size==" + cardSize);
        if (cardSize == 0) {
            this.card.node.active = false;
            return;
        }
        //Utils.Log("Active carrd size");
        this.card.spriteFrame = TienLen_Res_1.default.getInstance().getCardFace(52);
        this.card.node.active = true;
        this.lblCardRemain.node.active = true;
        this.lblCardRemain.string = cardSize;
    };
    Player.prototype.setTimeRemain = function (remain) {
        var _this = this;
        if (remain === void 0) { remain = 0; }
        if (remain == 0) {
            cc.Tween.stopAllByTarget(this.clockTurn);
            this.clockTurn.active = false;
            return;
        }
        else {
            this.clockTurn.active = true;
            this.clockTurn.getComponentInChildren(cc.Label).string = remain + "";
            cc.Tween.stopAllByTarget(this.clockTurn);
            cc.tween(this.clockTurn)
                .set({ angle: 0 })
                .to(0.25, { angle: 5 }).to(0.25, { angle: 0 })
                .to(0.25, { angle: -5 })
                .to(0.25, { angle: 0 })
                .call(function () {
                remain--;
                _this.setTimeRemain(remain);
            }).start();
        }
    };
    Player.prototype.clearTimeRemain = function () {
        this.timeRemain.fillRange = 0;
    };
    Player.prototype.setStatus = function (status) {
        if (status === void 0) { status = ""; }
        if (status == "") {
            this.lbStatus.node.active = false;
            return;
        }
        this.lbStatus.node.active = true;
        this.lbStatus.fontSize = 22;
        this.lbStatus.font = this.fontNormal;
        this.lbStatus.node.color = new cc.Color().fromHEX("#F7E0A0");
        var stt = status.toUpperCase();
        this.lbStatus.string = stt;
    };
    Player.prototype.setNotify = function (data) {
        var _this = this;
        this.lbStatus.font = this.fontNormal;
        this.lbStatus.node.color = new cc.Color().fromHEX("#F7E0A0");
        this.lbStatus.string = data;
        this.lbStatus.node.active = true;
        cc.Tween.stopAllByTarget(this.lbStatus.node);
        this.lbStatus.fontSize = 32;
        cc.tween(this.lbStatus.node).set({ y: 0, scale: 0 }).to(0.3, { scale: 1.0 }, { easing: cc.easing.backOut }).start();
        setTimeout(function () {
            _this.lbStatus.node.active = false;
        }, 1000);
    };
    Player.prototype.setCoin = function (coin) {
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
    };
    Player.prototype.setCoinChange = function (change) {
        //Utils.Log("set coin change:" + change);
        this.lbStatus.node.color = cc.Color.WHITE;
        this.lbStatus.node.active = true;
        this.lbStatus.string = "";
        if (change > 0) {
            this.lbStatus.font = this.fontNumber[0];
            this.lbStatus.string = "+" + Utils_1.default.formatNumber(change);
        }
        else if (change < 0) {
            this.lbStatus.font = this.fontNumber[1];
            this.lbStatus.string = Utils_1.default.formatNumber(change);
        }
        this.lbStatus.spacingX = -1;
        this.lbStatus.fontSize = 25;
        cc.Tween.stopAllByTarget(this.lbStatus.node);
        cc.tween(this.lbStatus.node).set({ y: 0, scale: 1.0 }).to(1.0, { y: 6, scale: 1.2 }, { easing: cc.easing.backOut }).start();
    };
    Player.prototype.setLeaveRoom = function () {
        this.node.active = false;
        this.active = false;
        this.info = null;
    };
    Player.prototype.setBackGame = function (state) {
        this.ic_back_game.active = state;
    };
    Player.prototype.setCardLine = function (cards) {
        var _this = this;
        this.cardLine.getComponent(cc.Layout).enabled = true;
        cards.forEach(function (card) {
            var item = cc.instantiate(TienLen_Res_1.default.getInstance().getCardItem());
            item.parent = _this.cardLine;
            item.removeComponent(cc.Button);
            item.getComponent(TienLen_Card_1.default).setCardData(card);
            item.opacity = 0;
        });
        setTimeout(function () {
            if (_this.node.x > 0) {
                _this.cardLine.getComponent(cc.Layout).enabled = false;
                var size = _this.cardLine.childrenCount;
                for (var i = 0; i < size; i++) {
                    _this.cardLine.children[i].zIndex = size - i;
                    cc.tween(_this.cardLine.children[i]).to(0.1 * i, { opacity: 255 }).start();
                }
            }
            else {
                _this.cardLine.getComponent(cc.Layout).enabled = false;
                var size = _this.cardLine.childrenCount;
                for (var i = 0; i < size; i++) {
                    _this.cardLine.children[i].zIndex = i;
                    cc.tween(_this.cardLine.children[i]).to(0.1 * i, { opacity: 255 }).start();
                }
            }
        }, 100);
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
        this.chatMsg.getComponentInChildren(cc.Label).string = content;
        this.timeoutChat = setTimeout(function () {
            _this.chatEmotion.active = false;
            _this.chatMsg.active = false;
        }, 5000);
    };
    Player.prototype.hideChat = function () {
        clearTimeout(this.timeoutChat);
        this.chatEmotion.active = false;
        this.chatMsg.active = false;
    };
    Player.prototype.showAnimWinLose = function (state) {
        this.animWinLose.node.active = true;
        var animName = state ? "thắng3" : "thua";
        this.animWinLose.node.scale = state ? 0.6 : 0.7;
        var posAnim = state ? cc.v2(0, -81) : cc.v2(-40, -77);
        this.animWinLose.node.setPosition(posAnim);
        this.animWinLose.setAnimation(0, animName, true);
    };
    Player.prototype.showAnimToiTrang = function (winType) {
        var animName = "5 đoi thòng";
        switch (winType) {
            case 4:
                animName = "sanh rong";
                break;
            case 5:
                animName = "tu quy hai";
                break;
            case 6:
                animName = "5 đoi thòng";
                break;
            case 7:
                animName = "6 doi";
                break;
        }
        this.animToiTrang.node.active = true;
        this.animToiTrang.setAnimation(0, animName, true);
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
    __decorate([
        property(cc.Node)
    ], Player.prototype, "clockTurn", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Player.prototype, "animWinLose", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Player.prototype, "animToiTrang", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], Player.prototype, "fontNumber", void 0);
    __decorate([
        property(cc.Font)
    ], Player.prototype, "fontNormal", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "ic_back_game", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();