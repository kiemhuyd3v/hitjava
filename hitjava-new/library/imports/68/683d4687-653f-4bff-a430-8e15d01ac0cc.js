"use strict";
cc._RF.push(module, '683d4aHZT9L/6QwjhXQGsDM', 'Lieng.Player');
// Lieng/LiengScript/Lieng.Player.ts

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
        _this.dealer = null;
        _this.smallBind = null;
        _this.bigBind = null;
        _this.owner = null;
        _this.cardsName = null;
        _this.actionState = null;
        _this.actionAllIn = null;
        _this.actionFold = null;
        _this.actionViewer = null;
        _this.actionThinking = null;
        _this.actionWin = null;
        _this.goldWin = null;
        _this.actionLose = null;
        _this.goldLose = null;
        _this.hub = null;
        _this.goldBet = null;
        _this.prefabItemChip = null;
        _this.notify = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.shadowAvatar = null;
        _this.shadowInfo = null;
        _this.spriteCardBack = null;
        _this.posCardOpened = null;
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
    Player.prototype.updatePosCardOpened = function (data) {
        /*
         -1 : chua mo cai nao
         0 : mo left
         1 : mo right
         2: mo het r
        */
        this.posCardOpened = data;
    };
    Player.prototype.showChatEmotion = function (content) {
        var _this = this;
        this.node.children[7].active = true;
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
        this.node.children[7].active = true;
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
        this.owner.active = state;
    };
    Player.prototype.setDealer = function (state) {
        this.dealer.active = state;
    };
    Player.prototype.setSmallBind = function (state) {
        this.smallBind.active = state;
    };
    Player.prototype.setBigBind = function (state) {
        this.bigBind.active = state;
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
    Player.prototype.showCardReady = function (state) {
        this.node.children[2].active = true;
        this.cardReady.active = state;
    };
    Player.prototype.showCardReal = function (state) {
        this.node.children[2].active = true;
        this.cardReal.active = state;
    };
    Player.prototype.prepareToTransform = function () {
        this.prepareCardReal(0);
        this.prepareCardReal(1);
        this.prepareCardReal(2);
    };
    Player.prototype.prepareCardReal = function (pos) {
        this.cardReal.children[pos].runAction(cc.scaleTo(0, 0, 1));
    };
    Player.prototype.transformToCardReal = function (cardPos, spriteCard) {
        this.showCardReal(true);
        this.cardReal.children[cardPos].children[0].getComponent(cc.Sprite).spriteFrame = spriteCard;
        this.cardReady.children[cardPos].runAction(cc.sequence(cc.scaleTo(0.15, 0, 1), cc.callFunc(function () {
        })));
        this.cardReal.children[cardPos].runAction(cc.sequence(cc.delayTime(0.15), // 2
        cc.scaleTo(0.15, 1, 1), cc.callFunc(function () {
        })));
    };
    // TAKE_TURN
    Player.prototype.showCardName = function (name) {
        var _this = this;
        //  cc.log("Lieng_Player showCardName name : ", name);
        this.cardsName.active = true;
        this.cardsName.children[0].getComponent(cc.Label).string = name;
        clearTimeout(this.timeoutShowCardName);
        this.timeoutShowCardName = setTimeout(function () {
            _this.cardsName.active = false;
        }, 4500);
    };
    Player.prototype.setGold = function (data) {
        // this.actionAllIn.active = false;
        // this.actionFold.active = false;
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.showGold(true);
        this.userGold.string = this.formatGold(data);
    };
    Player.prototype.setBet = function (data) {
        this.showPlayerBet(true);
        this.goldBet.string = this.formatGold(data);
    };
    Player.prototype.addChips = function () {
        var item1 = cc.instantiate(this.prefabItemChip);
        var item2 = cc.instantiate(this.prefabItemChip);
        this.hub.addChild(item1);
        this.hub.addChild(item2);
    };
    Player.prototype.showPlayerBet = function (state) {
        this.node.children[5].active = state;
        if (!state) {
            // clear Hub
            this.hub.removeAllChildren(true);
        }
    };
    Player.prototype.setCardReal01 = function (data) {
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = data;
    };
    Player.prototype.setCardReal02 = function (data) {
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = data;
    };
    Player.prototype.showPlayCountdown = function () {
        this.node.children[1].active = true;
        this.actionThinking.active = true;
        this.processThinking(0);
        // 1 = Full | 0 = Empty
    };
    Player.prototype.hidePlayCountdown = function () {
        this.actionThinking.active = false;
    };
    Player.prototype.processThinking = function (rate) {
        //cc.log("Lieng_Player processThinking rate : ", rate);
        this.actionThinking.getComponent(cc.Sprite).fillRange = rate;
    };
    Player.prototype.showGold = function (state) {
        this.node.children[3].children[2].active = state;
    };
    Player.prototype.prepareFxAction = function () {
        this.showGold(false);
        this.node.children[4].active = true;
        this.resetAction();
    };
    // Fx Action
    Player.prototype.showActionState = function (state) {
        this.node.children[4].active = true;
        this.actionState.active = true;
        this.actionState.children[1].getComponent(cc.Label).string = state;
    };
    Player.prototype.playFxFold = function () {
        this.actionFold.active = true;
        this.actionFold.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(0.1, 1.1, 1.1), cc.scaleTo(0.05, 1, 1)));
    };
    Player.prototype.playFxAllIn = function () {
        this.actionAllIn.active = true;
        this.actionAllIn.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(0.1, 1.1, 1.1), cc.scaleTo(0.05, 1, 1)));
    };
    Player.prototype.playFxViewer = function () {
        this.prepareFxAction();
        this.actionViewer.active = true;
    };
    Player.prototype.fxOtherPlayerFold = function () {
        // Ready card
        // this.shadowCardReady(true);
        this.cardReady.runAction(cc.moveBy(0.5, 0, -100));
    };
    Player.prototype.fxMeFold = function () {
        // Real card
        this.shadowCardReal(true);
        this.cardReal.runAction(cc.moveBy(0.5, 0, -20));
    };
    Player.prototype.showEatGa = function (state) {
        this.actionWin.children[3].active = state;
    };
    Player.prototype.fxWin = function (playerInfo) {
        var _this = this;
        //  cc.log("Lieng_Player fxWin playerInfo : ", playerInfo);
        this.node.children[4].active = true;
        this.actionWin.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldWin.node);
        this.setGold(this.formatGold(playerInfo.currentMoney));
        setTimeout(function () {
            _this.actionWin.active = false;
            _this.node.children[4].active = false;
        }, 2500);
    };
    Player.prototype.fxLose = function (playerInfo) {
        var _this = this;
        //  cc.log("Lieng_Player fxLose playerInfo : ", playerInfo);
        this.node.children[4].active = true;
        this.actionLose.active = false;
        // this.actionLose.active = true;
        // this.fxGoldChange(0, playerInfo.moneyChange, this.goldLose.node);
        this.setGold(this.formatGold(playerInfo.currentMoney));
        setTimeout(function () {
            _this.actionLose.active = false;
            _this.node.children[4].active = false;
        }, 2500);
    };
    Player.prototype.shadowCardReady = function (state) {
        this.cardReady.children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReady.children[1].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReady.children[2].color = state ? cc.Color.GRAY : cc.Color.WHITE;
    };
    Player.prototype.shadowCardReal = function (state) {
        this.cardReal.children[0].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReal.children[1].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReal.children[2].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
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
    Player.prototype.resetAction = function () {
        for (var index = 0; index < this.node.children[4].childrenCount; index++) {
            this.node.children[4].children[index].active = false;
        }
    };
    Player.prototype.resetMatchHistory = function () {
        // card
        this.resetCardReady();
        this.resetCardReal();
        this.node.children[2].active = false;
        // this.setCardWin(0, true);
        // this.setCardWin(1, true);
        // Info
        this.showGold(true);
        this.cardsName.active = false;
        this.setDealer(false);
        this.setBigBind(false);
        this.setSmallBind(false);
        // Action
        this.resetAction();
        // Chips
        this.node.children[5].active = false;
        this.goldBet.string = "0";
        this.hub.removeAllChildren(true);
    };
    Player.prototype.resetCardReady = function () {
        this.cardReady.children[0].scale = 1;
        this.cardReady.children[1].scale = 1;
        this.cardReady.children[2].scale = 1;
        this.cardReady.active = false;
        // this.shadowCardReady(false);
    };
    Player.prototype.resetCardReal = function () {
        this.cardReal.active = false;
        this.cardReal.y = 0;
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.shadowCardReal(false);
    };
    Player.prototype.resetPlayerInfo = function () {
        // Hide node Lv1
        for (var index = 0; index < this.node.childrenCount; index++) {
            this.node.children[index].active = false;
        }
        // reset card
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReady.active = false;
        this.cardReal.active = false;
        // reset dealer | big
        this.setDealer(false);
        this.setBigBind(false);
        this.setSmallBind(false);
        this.cardsName.active = false;
        // reset Action
        // this.actionAllIn.active = false;
        // this.actionFold.active = false;
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.actionWin.active = false;
        this.actionLose.active = false;
        // reset Hub chips
        this.goldBet.string = "0";
        this.hub.removeAllChildren(true);
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
    ], Player.prototype, "dealer", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "smallBind", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "bigBind", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "owner", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "cardsName", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionState", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionAllIn", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionFold", void 0);
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
    ], Player.prototype, "hub", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "goldBet", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "prefabItemChip", void 0);
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
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();