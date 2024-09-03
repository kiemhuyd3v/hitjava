"use strict";
cc._RF.push(module, 'b79c0saMihPJLkLCRpjTeK5', 'MauBinh.Player');
// MauBinh/MauBinhScript/MauBinh.Player.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnInvite = null;
        _this.avatar = null;
        _this.cardReady = null;
        _this.cardReal = null;
        _this.userName = null;
        _this.userGold = null;
        _this.owner = null;
        _this.cardsName = null;
        _this.actionViewer = null;
        _this.actionThinking = null;
        _this.actionWin = null;
        _this.goldWin = null;
        _this.actionLose = null;
        _this.goldLose = null;
        _this.actionXepXong = null;
        _this.actionDangXep = null;
        _this.notify = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.shadowAvatar = null;
        _this.shadowInfo = null;
        _this.spriteCardBack = null;
        _this.resultGame = null;
        _this.spriteResultChi = [];
        _this.spriteResultGeneral = [];
        _this.actionGoldSoChi = null;
        _this.timeoutNotify = null;
        _this.timeoutShowCardName = null;
        _this.timeoutChat = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Player.prototype.start = function () {
    };
    Player.prototype.showChatEmotion = function (content) {
        var _this = this;
        this.node.children[6].active = true;
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
        this.node.children[6].active = true;
        this.chatEmotion.active = false;
        this.chatMsg.active = true;
        clearTimeout(this.timeoutChat);
        this.chatMsg.children[1].getComponent(cc.Label).string = content;
        this.timeoutChat = setTimeout(function () {
            _this.chatEmotion.active = false;
            _this.chatMsg.active = false;
        }, 3000);
    };
    Player.prototype.showBtnInvite = function (state) {
        this.btnInvite.active = state;
    };
    Player.prototype.setOwner = function (state) {
        // this.owner.active = state;
        this.owner.active = false;
    };
    Player.prototype.setAvatar = function (avatar) {
        this.node.children[1].active = true;
        this.avatar.getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(avatar);
    };
    Player.prototype.setIsViewer = function (state) {
        this.shadowAvatar.active = state;
        this.shadowInfo.active = state;
    };
    Player.prototype.setName = function (data) {
        this.node.children[3].active = true;
        this.userName.string = data;
    };
    Player.prototype.scaleCardReal = function (state) {
        this.cardReal.scale = state;
    };
    Player.prototype.showCardReady = function (state) {
        this.node.children[2].active = true;
        this.cardReady.active = state;
    };
    Player.prototype.showCardReal = function (state) {
        this.node.children[2].active = true;
        this.scaleCardReal(1);
        this.cardReal.active = state;
    };
    Player.prototype.prepareToTransform = function () {
        for (var index = 0; index < 13; index++) {
            this.prepareCardReal(index);
        }
    };
    Player.prototype.prepareCardReal = function (pos) {
        this.cardReal.children[pos].runAction(cc.scaleTo(0, 0, 1));
    };
    Player.prototype.transformToCardReal = function (cardPos, spriteCard, seatId) {
        this.node.children[2].active = true;
        this.cardReal.active = true;
        if (seatId == 0) {
            this.cardReal.children[cardPos].children[1].getComponent(cc.Sprite).spriteFrame = spriteCard;
            this.cardReady.children[cardPos].runAction(cc.sequence(cc.scaleTo(0.15, 0, 1), cc.callFunc(function () {
            })));
            this.cardReal.children[cardPos].runAction(cc.sequence(cc.delayTime(0.15), // 2
            cc.scaleTo(0.15, 1, 1), cc.callFunc(function () {
            })));
        }
        else {
            this.cardReal.children[cardPos].children[0].getComponent(cc.Sprite).spriteFrame = spriteCard;
            this.cardReal.children[cardPos].runAction(cc.sequence(cc.scaleTo(0.15, 1, 1), cc.callFunc(function () {
            })));
        }
    };
    Player.prototype.showCardName = function (img) {
        var _this = this;
        this.cardsName.active = true;
        this.cardsName.getComponent(cc.Sprite).spriteFrame = img;
        clearTimeout(this.timeoutShowCardName);
        this.timeoutShowCardName = setTimeout(function () {
            _this.cardsName.active = false;
        }, 4500);
    };
    Player.prototype.setGold = function (data) {
        // this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.showGold(true);
        this.userGold.string = this.formatGold(data);
    };
    Player.prototype.setCardReal = function (data, index) {
        this.cardReal.children[index].children[1].getComponent(cc.Sprite).spriteFrame = data;
    };
    Player.prototype.showPlayCountdown = function () {
        this.node.children[4].active = true;
        this.actionThinking.active = true;
        this.processThinking(0);
        // 1 = Full | 0 = Empty
    };
    Player.prototype.hidePlayCountdown = function () {
        this.actionThinking.active = false;
    };
    Player.prototype.processThinking = function (rate) {
        //  cc.log("MauBinh_Player processThinking rate : ", rate);
        this.actionThinking.getComponent(cc.Sprite).fillRange = rate;
    };
    Player.prototype.showGold = function (state) {
        this.node.children[3].children[2].active = state;
    };
    Player.prototype.prepareFxAction = function () {
        // this.showGold(false);
        this.node.children[4].active = true;
        this.resetAction();
    };
    // Fx Action
    Player.prototype.playFxViewer = function () {
        this.prepareFxAction();
        this.actionViewer.active = true;
    };
    Player.prototype.playFxDangXep = function () {
        this.prepareFxAction();
        this.actionDangXep.active = true;
        this.actionXepXong.active = false;
    };
    Player.prototype.playFxXepXong = function () {
        this.prepareFxAction();
        this.actionDangXep.active = false;
        this.actionXepXong.active = true;
    };
    Player.prototype.playFxSoChiTotal = function (img) {
        this.node.children[7].active = true;
        this.resultGame.children[3].active = true;
        this.resultGame.children[3].children[0].getComponent(cc.Sprite).spriteFrame = img;
        this.resultGame.children[3].children[1].getComponent(cc.Label).string = "";
        this.resultGame.children[3].getComponent(cc.Animation).play();
    };
    Player.prototype.playFxResultGeneral = function (seatId, isGood, type, isSoChi) {
        this.node.children[7].active = true;
        this.resultGame.children[3].active = true;
        if (seatId == 0) {
            this.resultGame.children[3].y = isSoChi == 0 ? 30 : 100;
            this.resultGame.children[3].children[0].scale = isSoChi == 0 ? 1 : 0.5;
            this.resultGame.children[3].children[1].scale = isSoChi == 0 ? 1 : 0.5;
        }
        this.resultGame.children[3].children[0].getComponent(cc.Sprite).spriteFrame
            = isGood ? this.spriteResultGeneral[0] : this.spriteResultGeneral[1];
        this.resultGame.children[3].children[1].getComponent(cc.Label).string = isGood ? type : "";
        this.resultGame.children[3].getComponent(cc.Animation).play();
    };
    Player.prototype.playFxCompareChi = function (id, img) {
        //  cc.log("MauBinh_Player playFxCompareChi id : ", id);
        this.node.children[7].active = true;
        this.resultGame.children[id - 1].active = true;
        this.resultGame.children[id - 1].children[0].getComponent(cc.Sprite).spriteFrame = img;
        this.resultGame.children[id - 1].getComponent(cc.Animation).play();
    };
    Player.prototype.playFxGoldSoChi = function (goldChi) {
        var _this = this;
        //  cc.log("MauBinh_Player playFxGoldSoChi goldChi : ", goldChi);
        if (goldChi >= 0) {
            this.actionGoldSoChi.active = true;
            this.actionGoldSoChi.children[1].getComponent(cc.Label).string = "+" + goldChi + " Chi";
        }
        else if (goldChi < 0) {
            this.actionGoldSoChi.active = true;
            this.actionGoldSoChi.children[1].getComponent(cc.Label).string = goldChi + " Chi";
        }
        setTimeout(function () {
            _this.actionGoldSoChi.active = false;
        }, 2500);
    };
    Player.prototype.playFxWinSoChi = function (result) {
        var _this = this;
        //  cc.log("MauBinh_Player playFxWinSoChi result : ", result);
        this.node.children[4].active = true;
        this.actionWin.active = true;
        this.actionWin.children[1].active = true;
        this.goldWin.string = "+" + result + " Chi";
        setTimeout(function () {
            _this.node.children[4].active = false;
        }, 2000);
    };
    Player.prototype.playFxLoseSoChi = function (result) {
        var _this = this;
        //  cc.log("MauBinh_Player playFxLoseSoChi result : ", result);
        this.node.children[4].active = true;
        this.actionLose.active = true;
        this.actionLose.children[1].active = true;
        this.goldLose.string = result + " Chi";
        setTimeout(function () {
            _this.node.children[4].active = false;
        }, 2000);
    };
    Player.prototype.fxWin = function (playerInfo) {
        var _this = this;
        //  cc.log("MauBinh_Player playFxWin playerInfo : ", playerInfo);
        this.node.children[4].active = true;
        this.actionLose.active = false;
        this.actionWin.active = true;
        this.actionWin.children[1].active = true;
        this.goldWin.node.stopAllActions();
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldWin.node);
        if (playerInfo.money != -1) {
            this.setGold(this.formatGold(playerInfo.money));
        }
        setTimeout(function () {
            _this.actionWin.active = false;
            _this.node.children[4].active = false;
        }, 2500);
    };
    Player.prototype.fxLose = function (playerInfo) {
        var _this = this;
        //  cc.log("MauBinh_Player playFxLose playerInfo : ", playerInfo);
        this.node.children[4].active = true;
        this.actionWin.active = false;
        this.actionLose.active = true;
        this.actionLose.children[1].active = true;
        this.goldLose.node.stopAllActions();
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldLose.node);
        if (playerInfo.money != -1) {
            this.setGold(this.formatGold(playerInfo.money));
        }
        setTimeout(function () {
            _this.actionLose.active = false;
            _this.node.children[4].active = false;
        }, 2500);
    };
    Player.prototype.shadowCardReady = function (state) {
        for (var index = 0; index < 13; index++) {
            this.cardReady.children[index].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        }
    };
    Player.prototype.shadowCardReal = function (state) {
        for (var index = 0; index < 13; index++) {
            this.cardReal.children[index].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        }
    };
    Player.prototype.shadowCard = function (index, state) {
        this.cardReal.children[index].children[1].color = state ? cc.Color.GRAY : cc.Color.WHITE;
    };
    Player.prototype.setCardWin = function (pos, state) {
        this.cardReal.children[pos].children[0].color = state ? cc.Color.WHITE : cc.Color.GRAY;
    };
    // notify
    Player.prototype.showNotify = function (content) {
        var _this = this;
        this.notify.active = true;
        this.notify.children[1].getComponent(cc.Label).string = content;
        clearTimeout(this.timeoutNotify);
        this.timeoutNotify = setTimeout(function () {
            _this.notify.active = false;
        }, 1500);
    };
    // reset
    Player.prototype.resetResultGame = function () {
        for (var index = 0; index < 4; index++) {
            this.resultGame.children[index].active = false;
        }
    };
    Player.prototype.resetResultChi = function (chiId) {
        this.resultGame.children[chiId - 1].active = false;
    };
    Player.prototype.resetAction = function () {
        for (var index = 0; index < this.node.children[4].childrenCount; index++) {
            this.node.children[4].children[index].active = false;
        }
    };
    Player.prototype.resetMatchHistory = function (seatId) {
        // card
        this.resetCardReady(seatId);
        this.resetCardReal(seatId);
        this.node.children[2].active = false;
        // Info
        this.showGold(true);
        this.cardsName.active = false;
        // Action
        this.resetAction();
    };
    Player.prototype.resetCardReady = function (seatId) {
        if (seatId == 0) {
            for (var index = 0; index < 13; index++) {
                this.cardReady.children[index].scale = 1;
            }
        }
        this.cardReady.active = false;
        // this.shadowCardReady(false);
    };
    Player.prototype.resetCardReal = function (seatId) {
        this.cardReal.active = false;
        for (var index = 0; index < 13; index++) {
            this.cardReal.children[index].children[seatId == 0 ? 1 : 0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        }
        this.shadowCardReal(false);
    };
    Player.prototype.resetPlayerInfo = function (seatId) {
        // Hide node Lv1
        for (var index = 0; index < this.node.childrenCount; index++) {
            this.node.children[index].active = false;
        }
        // reset card
        for (var index = 0; index < 13; index++) {
            this.cardReal.children[index].children[seatId == 0 ? 1 : 0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        }
        this.cardReady.active = false;
        this.cardReal.active = false;
        this.cardsName.active = false;
        // reset Action
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.actionWin.active = false;
        this.actionLose.active = false;
        // reset Viewer
        this.setIsViewer(true);
    };
    Player.prototype.fxGoldChange = function (goldStart, goldEnd, node) {
        var _this = this;
        var goldAdd = goldEnd - goldStart;
        node.getComponent(cc.Label).string = this.formatGold(goldStart);
        var steps = 10;
        var deltaGoldAdd = Math.floor(goldAdd / steps);
        var rep = cc.repeat(cc.sequence(cc.delayTime(0.05), cc.callFunc(function () {
            goldStart += deltaGoldAdd;
            node.getComponent(cc.Label).string = (goldAdd > 0 ? "+" : "") + _this.formatGold(goldStart);
        })), steps);
        var seq = cc.sequence(rep, cc.callFunc(function () {
            goldStart = goldEnd;
            node.getComponent(cc.Label).string = (goldAdd > 0 ? "+" : "") + _this.formatGold(goldStart);
        }));
        node.runAction(seq);
    };
    Player.prototype.formatGold = function (price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    __decorate([
        property(cc.Node)
    ], Player.prototype, "btnInvite", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "avatar", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "cardReady", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "cardReal", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "userName", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "userGold", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "owner", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "cardsName", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionViewer", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionThinking", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionWin", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "goldWin", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionLose", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "goldLose", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionXepXong", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionDangXep", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "notify", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "chatEmotion", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "chatMsg", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "shadowAvatar", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "shadowInfo", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "spriteCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "resultGame", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "spriteResultChi", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "spriteResultGeneral", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionGoldSoChi", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();