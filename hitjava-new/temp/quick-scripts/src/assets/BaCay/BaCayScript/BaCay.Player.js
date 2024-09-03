"use strict";
cc._RF.push(module, 'a69f2nHXcZBJ4K9vYGrZxlY', 'BaCay.Player');
// BaCay/BaCayScript/BaCay.Player.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TW = cc.tween;
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
        _this.actionVaoGa = null;
        _this.actionDanhBien = null;
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
        _this.popupBet = null;
        _this.popupRequestDanhBien = null;
        _this.labelValueDanhBien = null;
        _this.dataAnimWin = null;
        _this.fontNumber = [];
        _this.posCardOpened = null;
        _this.timeoutNotify = null;
        _this.timeoutShowCardName = null;
        _this.timeoutChat = null;
        _this.animWinLose = null;
        _this.isShowCard = false;
        _this.isViewing = false;
        _this.status = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Player.prototype.start = function () {
        for (var i = 0; i < this.cardReal.childrenCount; i++) {
            var card = this.cardReal.children[i].children[0];
            card['initPos'] = card.getPosition();
        }
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
        this.chatMsg.getComponentInChildren(cc.Label).string = content;
        this.timeoutChat = setTimeout(function () {
            _this.chatEmotion.active = false;
            _this.chatMsg.active = false;
        }, 5000);
    };
    Player.prototype.showPopupBet = function (state) {
        this.popupBet.active = state;
        if (state) {
            this.popupBet.children[2].active = true;
            this.popupBet.children[3].active = true;
            this.popupBet.children[5].active = true;
            this.popupBet.children[6].active = true;
            this.setCanDanhBien(true);
            this.setCanKeCua(true);
        }
    };
    Player.prototype.setupBetValue = function (bet) {
        this.popupBet.children[2].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(bet);
        this.popupBet.children[3].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(bet * 2);
        this.popupBet.children[5].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(bet);
        this.popupBet.children[6].children[1].getComponent(cc.Label).string = Utils_1.default.formatNumber(bet * 2);
    };
    Player.prototype.disableDanhBien = function (id) {
        if (id == 1) {
            this.popupBet.children[3].active = false;
        }
        else {
            this.popupBet.children[2].active = false;
        }
        this.setCanDanhBien(false);
    };
    Player.prototype.disableKeCua = function (id) {
        if (id == 1) {
            this.popupBet.children[6].active = false;
        }
        else {
            this.popupBet.children[5].active = false;
        }
        this.setCanKeCua(false);
    };
    Player.prototype.setCanDanhBien = function (state) {
        this.popupBet.children[2].getComponent(cc.Button).interactable = state;
        this.popupBet.children[3].getComponent(cc.Button).interactable = state;
    };
    Player.prototype.setCanKeCua = function (state) {
        this.popupBet.children[5].getComponent(cc.Button).interactable = state;
        this.popupBet.children[6].getComponent(cc.Button).interactable = state;
    };
    Player.prototype.showBtnInvite = function (state) {
        this.btnInvite.active = state;
    };
    Player.prototype.setOwner = function (state) {
        this.owner.active = state;
    };
    Player.prototype.setAvatar = function (avatar) {
        this.node.children[1].active = true;
        this.avatar.getComponent(cc.Sprite).spriteFrame = App_1.default.instance.getAvatarSpriteFrame(avatar);
    };
    Player.prototype.setIsViewer = function (state) {
        // this.shadowAvatar.active = state;
        // this.shadowInfo.active = state;
        this.isViewing = state;
        this.avatar.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        var bgInfo = cc.find("Info/BG", this.node);
        bgInfo.color = state ? cc.Color.GRAY : cc.Color.WHITE;
        cc.find("Info/UserName", this.node).color = state ? cc.Color.GRAY : cc.Color.WHITE;
        cc.find("Info/userGold", this.node).color = state ? cc.Color.GRAY : cc.Color.WHITE;
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
        this.cardsName.active = false;
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
    Player.prototype.transformToCardReal = function (cardPos, idCard, indexCard) {
        if (indexCard === void 0) { indexCard = null; }
        var cardReady = this.cardReady.children[cardPos];
        var cardReal = this.cardReal.children[cardPos].children[0].getComponent("TienLen.Card");
        var delay = 0.1 * indexCard;
        this.effCard(cardReal, delay, idCard);
        this.isShowCard = true;
    };
    Player.prototype.effCard = function (card, delay, idCard) {
        var sk1 = 0;
        var sk2 = 0;
        var index = 1;
        if (index <= 1) {
            sk1 = -15;
            sk2 = 15;
        }
        else {
            sk1 = 15;
            sk2 = -15;
        }
        var orgPos = card.node['initPos'];
        cc.Tween.stopAllByTarget(card.node);
        TW(card.node)
            .delay(delay)
            .to(0.15, { scaleX: 0, scaleY: 1.05, skewX: 0, skewY: sk1 }, { easing: cc.easing.cubicOut })
            .call(function () {
            card.setCardData(52);
            card.node.skewY = sk2;
        })
            .to(0.15, { scale: 1.05, skewX: 0, skewY: 0 }, { easing: cc.easing.cubicOut })
            .to(0.15, { scaleX: 0, scaleY: 1.05, skewX: 0, skewY: sk1 }, { easing: cc.easing.cubicOut })
            .call(function () {
            card.setCardData(idCard);
            card.node.skewY = sk2;
        })
            .to(0.15, { scale: 1.0, skewX: 0, skewY: 0 }, { easing: cc.easing.cubicOut })
            .call(function () {
        })
            .start();
        TW(card.node)
            .delay(delay)
            .to(0.3, { position: cc.v2(orgPos.x, orgPos.y + 30) }, { easing: cc.easing.cubicOut })
            .to(0.3, { position: orgPos }, { easing: cc.easing.cubicOut })
            .start();
    };
    Player.prototype.showCardName = function (name) {
        this.cardsName.active = true;
        this.cardsName.children[0].getComponent(cc.Label).string = name;
        // clearTimeout(this.timeoutShowCardName);
        // this.timeoutShowCardName = setTimeout(() => {
        //     this.cardsName.active = false;
        // }, 4500);
    };
    Player.prototype.setGold = function (data) {
        // this.actionViewer.active = false;
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
        this.node.children[4].active = true;
        this.actionThinking.active = true;
        this.processThinking(0);
        // 1 = Full | 0 = Empty
    };
    Player.prototype.hidePlayCountdown = function () {
        this.actionThinking.active = false;
    };
    Player.prototype.processThinking = function (rate) {
        cc.log("BaCay_Player processThinking rate : ", rate);
        this.actionThinking.getComponent(cc.Sprite).fillRange = rate;
    };
    Player.prototype.showGold = function (state) {
        this.node.children[3].children[2].active = state;
    };
    Player.prototype.showPopupRequestDanhBien = function (value) {
        this.popupRequestDanhBien.active = true;
        this.labelValueDanhBien.string = this.formatGold(value);
    };
    Player.prototype.closePopupRequestDanhBien = function () {
        this.popupRequestDanhBien.active = false;
    };
    Player.prototype.prepareFxAction = function () {
        // this.showGold(false);
        this.node.children[4].active = true;
        this.resetAction();
    };
    // Fx Action
    Player.prototype.playFxDanhBien = function () {
        this.node.children[4].active = true;
        this.actionDanhBien.active = true;
        this.actionDanhBien.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(0.1, 1.1, 1.1), cc.scaleTo(0.05, 1, 1)));
    };
    Player.prototype.playFxVaoGa = function () {
        this.node.children[4].active = true;
        this.actionVaoGa.active = true;
        this.actionVaoGa.runAction(cc.sequence(cc.scaleTo(0, 0), cc.scaleTo(0.1, 1.1, 1.1), cc.scaleTo(0.05, 1, 1)));
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
        var sprTextGa = this.node.getChildByName("Action").getChildByName("Fx An Ga");
        sprTextGa.active = state;
        TW(sprTextGa).set({ y: 48 }).to(1.0, { y: 100 }, { easing: cc.easing.backOut }).start();
    };
    Player.prototype.fxWin = function (playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionWin.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldWin.node);
        this.setGold(this.formatGold(playerInfo.money));
        this.showEatGa(playerInfo.ga > 0 ? true : false);
        setTimeout(function () {
            _this.actionWin.active = false;
            _this.node.children[4].active = false;
            _this.hideAnimWinLose();
        }, 3000);
        this.showAnimWinLose(true);
    };
    Player.prototype.fxLose = function (playerInfo) {
        var _this = this;
        this.node.children[4].active = true;
        this.actionLose.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldLose.node);
        this.setGold(this.formatGold(playerInfo.money));
        setTimeout(function () {
            _this.actionLose.active = false;
            _this.node.children[4].active = false;
            _this.hideAnimWinLose();
        }, 3000);
        this.showAnimWinLose(false);
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
    Player.prototype.showLeaveRoom = function (status) {
        this.notify.active = status;
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
        // this.setCardWin(2, true);
        // Info
        this.showGold(true);
        this.cardsName.active = false;
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
        // this.cardReal.children[0].children[0].getComponent("TienLen.Card").setCardData(52);
        // this.cardReal.children[1].children[0].getComponent("TienLen.Card").setCardData(52);
        // this.cardReal.children[2].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[0].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[1].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[2].children[0].getComponent("TienLen.Card").setCardData(52);
        this.shadowCardReal(false);
    };
    Player.prototype.resetPlayerInfo = function () {
        // Hide node Lv1
        for (var index = 0; index < this.node.childrenCount; index++) {
            this.node.children[index].active = false;
        }
        // reset card
        this.cardReal.children[0].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[1].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReal.children[2].children[0].getComponent("TienLen.Card").setCardData(52);
        this.cardReady.active = false;
        this.cardReal.active = false;
        this.cardsName.active = false;
        // reset Action
        this.actionVaoGa.active = false;
        this.actionDanhBien.active = false;
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
        node.getComponent(cc.Label).font = goldAdd > 0 ? this.fontNumber[0] : this.fontNumber[1];
        node.getComponent(cc.Label).fontSize = 20;
        node.y = goldAdd > 0 ? 16 : 21;
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
    Player.prototype.showAnimWinLose = function (state) {
        if (this.animWinLose == null) {
            this.animWinLose = new cc.Node("animWinLose").addComponent(sp.Skeleton);
            this.animWinLose.skeletonData = this.dataAnimWin;
            this.animWinLose.node.parent = this.node;
        }
        this.animWinLose.node.active = true;
        var animName = state ? "thắng3" : "thua";
        this.animWinLose.node.scale = state ? 0.6 : 0.7;
        var posAnim = state ? cc.v2(0, -87) : cc.v2(-40, -87);
        this.animWinLose.node.setPosition(posAnim);
        this.animWinLose.setAnimation(0, animName, true);
    };
    Player.prototype.hideAnimWinLose = function () {
        if (this.animWinLose != null) {
            this.animWinLose.node.active = false;
        }
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
    ], Player.prototype, "actionVaoGa", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "actionDanhBien", void 0);
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
    ], Player.prototype, "popupBet", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "popupRequestDanhBien", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "labelValueDanhBien", void 0);
    __decorate([
        property(sp.SkeletonData)
    ], Player.prototype, "dataAnimWin", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], Player.prototype, "fontNumber", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();