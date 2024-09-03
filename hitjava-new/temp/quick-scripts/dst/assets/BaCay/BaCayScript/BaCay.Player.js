
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaCay/BaCayScript/BaCay.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFDYXlcXEJhQ2F5U2NyaXB0XFxCYUNheS5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHFFQUFnRTtBQUVoRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFBO0FBQ1gsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUErakJDO1FBN2pCRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQVksSUFB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QUFDLEtBQUssQ0FBQzsyQ0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNpQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDOytDQUNVO0lBR3BDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzhDQUNPO0lBeERoQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBK2pCMUI7SUFBRCxhQUFDO0NBL2pCRCxBQStqQkMsQ0EvakJtQyxFQUFFLENBQUMsU0FBUyxHQStqQi9DO2tCQS9qQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cbnZhciBUVyA9IGNjLnR3ZWVuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5JbnZpdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGF2YXRhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZFJlYWR5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXJkUmVhbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHVzZXJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHVzZXJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3duZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRzTmFtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uVmFvR2E6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbkRhbmhCaWVuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25WaWV3ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvblRoaW5raW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25XaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBnb2xkV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uTG9zZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdvbGRMb3NlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaHViOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ29sZEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiSXRlbUNoaXA6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGF0RW1vdGlvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhdE1zZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXBCZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwUmVxdWVzdERhbmhCaWVuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxWYWx1ZURhbmhCaWVuOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b25EYXRhKVxuICAgIGRhdGFBbmltV2luOiBzcC5Ta2VsZXRvbkRhdGEgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5CaXRtYXBGb250XSlcbiAgICBmb250TnVtYmVyOiBjYy5CaXRtYXBGb250W10gPSBbXTtcblxuXG5cbiAgICBwcml2YXRlIHBvc0NhcmRPcGVuZWQgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZW91dE5vdGlmeSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRpbWVvdXRTaG93Q2FyZE5hbWUgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZW91dENoYXQgPSBudWxsO1xuICAgIHByaXZhdGUgYW5pbVdpbkxvc2U6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIHB1YmxpYyBpc1Nob3dDYXJkID0gZmFsc2U7XG4gICAgcHVibGljIGlzVmlld2luZyA9IGZhbHNlO1xuICAgIHB1YmxpYyBzdGF0dXMgPSAwO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNhcmQgPSB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdO1xuICAgICAgICAgICAgY2FyZFsnaW5pdFBvcyddID0gY2FyZC5nZXRQb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zQ2FyZE9wZW5lZChkYXRhKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAtMSA6IGNodWEgbW8gY2FpIG5hb1xuICAgICAgICAgMCA6IG1vIGxlZnRcbiAgICAgICAgIDEgOiBtbyByaWdodFxuICAgICAgICAgMjogbW8gaGV0IHJcbiAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wb3NDYXJkT3BlbmVkID0gZGF0YTtcbiAgICB9XG5cbiAgICBzaG93Q2hhdEVtb3Rpb24oY29udGVudCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bN10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjb250ZW50LCB0cnVlKTtcbiAgICAgICAgdGhpcy50aW1lb3V0Q2hhdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgc2hvd0NoYXRNc2coY29udGVudCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bN10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxuICAgIHNob3dQb3B1cEJldChzdGF0ZSkge1xuICAgICAgICB0aGlzLnBvcHVwQmV0LmFjdGl2ZSA9IHN0YXRlO1xuICAgICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bNV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bNl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FuRGFuaEJpZW4odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldENhbktlQ3VhKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBCZXRWYWx1ZShiZXQpIHtcbiAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlblsyXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihiZXQpO1xuICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzNdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldCAqIDIpO1xuICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzVdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldCk7XG4gICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bNl0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoYmV0ICogMik7XG4gICAgfVxuXG4gICAgZGlzYWJsZURhbmhCaWVuKGlkKSB7XG4gICAgICAgIGlmIChpZCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENhbkRhbmhCaWVuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBkaXNhYmxlS2VDdWEoaWQpIHtcbiAgICAgICAgaWYgKGlkID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bNl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0Q2FuS2VDdWEoZmFsc2UpO1xuICAgIH1cblxuICAgIHNldENhbkRhbmhCaWVuKHN0YXRlKSB7XG4gICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gc3RhdGU7XG4gICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bM10uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0Q2FuS2VDdWEoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlbls1XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlbls2XS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93QnRuSW52aXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuYnRuSW52aXRlLmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHNldE93bmVyKHN0YXRlKSB7XG4gICAgICAgIHRoaXMub3duZXIuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0QXZhdGFyKGF2YXRhcikge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdmF0YXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBBcHAuaW5zdGFuY2UuZ2V0QXZhdGFyU3ByaXRlRnJhbWUoYXZhdGFyKTtcbiAgICB9XG5cbiAgICBzZXRJc1ZpZXdlcihzdGF0ZSkge1xuICAgICAgICAvLyB0aGlzLnNoYWRvd0F2YXRhci5hY3RpdmUgPSBzdGF0ZTtcbiAgICAgICAgLy8gdGhpcy5zaGFkb3dJbmZvLmFjdGl2ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLmlzVmlld2luZyA9IHN0YXRlO1xuICAgICAgICB0aGlzLmF2YXRhci5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBsZXQgYmdJbmZvID0gY2MuZmluZChcIkluZm8vQkdcIiwgdGhpcy5ub2RlKTtcbiAgICAgICAgYmdJbmZvLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIGNjLmZpbmQoXCJJbmZvL1VzZXJOYW1lXCIsIHRoaXMubm9kZSkuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgY2MuZmluZChcIkluZm8vdXNlckdvbGRcIiwgdGhpcy5ub2RlKS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgIH1cblxuICAgIHNldE5hbWUoZGF0YSkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VyTmFtZS5zdHJpbmcgPSBkYXRhO1xuICAgIH1cblxuICAgIHNob3dDYXJkUmVhZHkoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHNob3dDYXJkUmVhbChzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJlcGFyZVRvVHJhbnNmb3JtKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYXJkUmVhbCgwKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlQ2FyZFJlYWwoMSk7XG4gICAgICAgIHRoaXMucHJlcGFyZUNhcmRSZWFsKDIpO1xuICAgIH1cblxuICAgIHByZXBhcmVDYXJkUmVhbChwb3MpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltwb3NdLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAsIDAsIDEpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1Ub0NhcmRSZWFsKGNhcmRQb3MsIGlkQ2FyZCwgaW5kZXhDYXJkID0gbnVsbCkge1xuICAgICAgICBsZXQgY2FyZFJlYWR5ID0gdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bY2FyZFBvc107XG4gICAgICAgIGxldCBjYXJkUmVhbCA9IHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bY2FyZFBvc10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiVGllbkxlbi5DYXJkXCIpO1xuICAgICAgICBsZXQgZGVsYXkgPSAwLjEgKiBpbmRleENhcmQ7XG4gICAgICAgIHRoaXMuZWZmQ2FyZChjYXJkUmVhbCwgZGVsYXksIGlkQ2FyZCk7XG4gICAgICAgIHRoaXMuaXNTaG93Q2FyZCA9IHRydWU7XG4gICAgfVxuICAgIGVmZkNhcmQoY2FyZCwgZGVsYXksIGlkQ2FyZCkge1xuICAgICAgICBsZXQgc2sxID0gMDtcbiAgICAgICAgbGV0IHNrMiA9IDA7XG4gICAgICAgIGxldCBpbmRleCA9IDE7XG4gICAgICAgIGlmIChpbmRleCA8PSAxKSB7XG4gICAgICAgICAgICBzazEgPSAtMTU7XG4gICAgICAgICAgICBzazIgPSAxNTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNrMSA9IDE1O1xuICAgICAgICAgICAgc2syID0gLTE1O1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmdQb3MgPSBjYXJkLm5vZGVbJ2luaXRQb3MnXTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGNhcmQubm9kZSk7XG4gICAgICAgIFRXKGNhcmQubm9kZSlcbiAgICAgICAgICAgIC5kZWxheShkZWxheSlcbiAgICAgICAgICAgIC50bygwLjE1LCB7IHNjYWxlWDogMCwgc2NhbGVZOiAxLjA1LCBza2V3WDogMCwgc2tld1k6IHNrMSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmN1YmljT3V0IH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZC5zZXRDYXJkRGF0YSg1Mik7XG4gICAgICAgICAgICAgICAgY2FyZC5ub2RlLnNrZXdZID0gc2syXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDAuMTUsIHsgc2NhbGU6IDEuMDUsIHNrZXdYOiAwLCBza2V3WTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmN1YmljT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4xNSwgeyBzY2FsZVg6IDAsIHNjYWxlWTogMS4wNSwgc2tld1g6IDAsIHNrZXdZOiBzazEgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5jdWJpY091dCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhcmQuc2V0Q2FyZERhdGEoaWRDYXJkKTtcbiAgICAgICAgICAgICAgICBjYXJkLm5vZGUuc2tld1kgPSBzazJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4xNSwgeyBzY2FsZTogMS4wLCBza2V3WDogMCwgc2tld1k6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5jdWJpY091dCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIFRXKGNhcmQubm9kZSlcbiAgICAgICAgICAgIC5kZWxheShkZWxheSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgcG9zaXRpb246IGNjLnYyKG9yZ1Bvcy54LCBvcmdQb3MueSArIDMwKSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmN1YmljT3V0IH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHBvc2l0aW9uOiBvcmdQb3MgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5jdWJpY091dCB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2hvd0NhcmROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jYXJkc05hbWUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBuYW1lO1xuICAgICAgICAvLyBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0U2hvd0NhcmROYW1lKTtcbiAgICAgICAgLy8gdGhpcy50aW1lb3V0U2hvd0NhcmROYW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gfSwgNDUwMCk7XG4gICAgfVxuXG4gICAgc2V0R29sZChkYXRhKSB7XG4gICAgICAgIC8vIHRoaXMuYWN0aW9uVmlld2VyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuc2hvd0dvbGQodHJ1ZSk7XG4gICAgICAgIHRoaXMudXNlckdvbGQuc3RyaW5nID0gdGhpcy5mb3JtYXRHb2xkKGRhdGEpO1xuICAgIH1cblxuICAgIHNldEJldChkYXRhKSB7XG4gICAgICAgIHRoaXMuc2hvd1BsYXllckJldCh0cnVlKTtcbiAgICAgICAgdGhpcy5nb2xkQmV0LnN0cmluZyA9IHRoaXMuZm9ybWF0R29sZChkYXRhKTtcbiAgICB9XG5cbiAgICBhZGRDaGlwcygpIHtcbiAgICAgICAgdmFyIGl0ZW0xID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJJdGVtQ2hpcCk7XG4gICAgICAgIHZhciBpdGVtMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbUNoaXApO1xuICAgICAgICB0aGlzLmh1Yi5hZGRDaGlsZChpdGVtMSk7XG4gICAgICAgIHRoaXMuaHViLmFkZENoaWxkKGl0ZW0yKTtcbiAgICB9XG5cbiAgICBzaG93UGxheWVyQmV0KHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls1XS5hY3RpdmUgPSBzdGF0ZTtcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgLy8gY2xlYXIgSHViXG4gICAgICAgICAgICB0aGlzLmh1Yi5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENhcmRSZWFsMDEoZGF0YSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gZGF0YTtcbiAgICB9XG5cbiAgICBzZXRDYXJkUmVhbDAyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2hvd1BsYXlDb3VudGRvd24oKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc1RoaW5raW5nKDApO1xuICAgICAgICAvLyAxID0gRnVsbCB8IDAgPSBFbXB0eVxuICAgIH1cblxuICAgIGhpZGVQbGF5Q291bnRkb3duKCkge1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb2Nlc3NUaGlua2luZyhyYXRlKSB7XG4gICAgICAgIGNjLmxvZyhcIkJhQ2F5X1BsYXllciBwcm9jZXNzVGhpbmtpbmcgcmF0ZSA6IFwiLCByYXRlKTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSByYXRlO1xuICAgIH1cblxuICAgIHNob3dHb2xkKHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblszXS5jaGlsZHJlblsyXS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93UG9wdXBSZXF1ZXN0RGFuaEJpZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5wb3B1cFJlcXVlc3REYW5oQmllbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsVmFsdWVEYW5oQmllbi5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQodmFsdWUpO1xuICAgIH1cblxuICAgIGNsb3NlUG9wdXBSZXF1ZXN0RGFuaEJpZW4oKSB7XG4gICAgICAgIHRoaXMucG9wdXBSZXF1ZXN0RGFuaEJpZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJlcGFyZUZ4QWN0aW9uKCkge1xuICAgICAgICAvLyB0aGlzLnNob3dHb2xkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRBY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvLyBGeCBBY3Rpb25cbiAgICBwbGF5RnhEYW5oQmllbigpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aW9uRGFuaEJpZW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25EYW5oQmllbi5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAsIDApLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjEsIDEuMSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjA1LCAxLCAxKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBsYXlGeFZhb0dhKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25WYW9HYS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvblZhb0dhLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMCwgMCksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMSwgMS4xKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMDUsIDEsIDEpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGxheUZ4Vmlld2VyKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVGeEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdGlvblZpZXdlci5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ4T3RoZXJQbGF5ZXJGb2xkKCkge1xuICAgICAgICAvLyBSZWFkeSBjYXJkXG4gICAgICAgIC8vIHRoaXMuc2hhZG93Q2FyZFJlYWR5KHRydWUpO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC41LCAwLCAtMTAwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ4TWVGb2xkKCkge1xuICAgICAgICAvLyBSZWFsIGNhcmRcbiAgICAgICAgdGhpcy5zaGFkb3dDYXJkUmVhbCh0cnVlKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC41LCAwLCAtMjApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2hvd0VhdEdhKHN0YXRlKSB7XG4gICAgICAgIGxldCBzcHJUZXh0R2EgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJBY3Rpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJGeCBBbiBHYVwiKTtcbiAgICAgICAgc3ByVGV4dEdhLmFjdGl2ZSA9IHN0YXRlO1xuICAgICAgICBUVyhzcHJUZXh0R2EpLnNldCh7IHk6IDQ4IH0pLnRvKDEuMCwgeyB5OiAxMDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZnhXaW4ocGxheWVySW5mbykge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25XaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5meEdvbGRDaGFuZ2UoMCwgcGxheWVySW5mby5tb25leUNoYW5nZSwgdGhpcy5nb2xkV2luLm5vZGUpO1xuICAgICAgICB0aGlzLnNldEdvbGQodGhpcy5mb3JtYXRHb2xkKHBsYXllckluZm8ubW9uZXkpKTtcbiAgICAgICAgdGhpcy5zaG93RWF0R2EocGxheWVySW5mby5nYSA+IDAgPyB0cnVlIDogZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oaWRlQW5pbVdpbkxvc2UoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIHRoaXMuc2hvd0FuaW1XaW5Mb3NlKHRydWUpO1xuICAgIH1cblxuICAgIGZ4TG9zZShwbGF5ZXJJbmZvKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5meEdvbGRDaGFuZ2UoMCwgcGxheWVySW5mby5tb25leUNoYW5nZSwgdGhpcy5nb2xkTG9zZS5ub2RlKTtcbiAgICAgICAgdGhpcy5zZXRHb2xkKHRoaXMuZm9ybWF0R29sZChwbGF5ZXJJbmZvLm1vbmV5KSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25Mb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oaWRlQW5pbVdpbkxvc2UoKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIHRoaXMuc2hvd0FuaW1XaW5Mb3NlKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzaGFkb3dDYXJkUmVhZHkoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMV0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMl0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICB9XG5cbiAgICBzaGFkb3dDYXJkUmVhbChzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgIH1cblxuICAgIHNldENhcmRXaW4ocG9zLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW3Bvc10uY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICAvLyBub3RpZnlcbiAgICBzaG93Tm90aWZ5KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Tm90aWZ5KTtcbiAgICAgICAgdGhpcy50aW1lb3V0Tm90aWZ5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuICAgIHNob3dMZWF2ZVJvb20oc3RhdHVzKSB7XG4gICAgICAgIHRoaXMubm90aWZ5LmFjdGl2ZSA9IHN0YXR1cztcbiAgICB9XG4gICAgLy8gcmVzZXRcbiAgICByZXNldEFjdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubm9kZS5jaGlsZHJlbls0XS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRNYXRjaEhpc3RvcnkoKSB7XG4gICAgICAgIC8vIGNhcmRcblxuICAgICAgICB0aGlzLnJlc2V0Q2FyZFJlYWR5KCk7XG4gICAgICAgIHRoaXMucmVzZXRDYXJkUmVhbCgpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gdGhpcy5zZXRDYXJkV2luKDAsIHRydWUpO1xuICAgICAgICAvLyB0aGlzLnNldENhcmRXaW4oMSwgdHJ1ZSk7XG4gICAgICAgIC8vIHRoaXMuc2V0Q2FyZFdpbigyLCB0cnVlKTtcblxuICAgICAgICAvLyBJbmZvXG4gICAgICAgIHRoaXMuc2hvd0dvbGQodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFjdGlvblxuICAgICAgICB0aGlzLnJlc2V0QWN0aW9uKCk7XG5cbiAgICAgICAgLy8gQ2hpcHNcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzVdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdvbGRCZXQuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMuaHViLnJlbW92ZUFsbENoaWxkcmVuKHRydWUpO1xuXG4gICAgfVxuXG4gICAgcmVzZXRDYXJkUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMV0uc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5jaGlsZHJlblsyXS5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnNoYWRvd0NhcmRSZWFkeShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVzZXRDYXJkUmVhbCgpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC55ID0gMDtcbiAgICAgICAgLy8gdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJUaWVuTGVuLkNhcmRcIikuc2V0Q2FyZERhdGEoNTIpO1xuICAgICAgICAvLyB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIlRpZW5MZW4uQ2FyZFwiKS5zZXRDYXJkRGF0YSg1Mik7XG4gICAgICAgIC8vIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiVGllbkxlbi5DYXJkXCIpLnNldENhcmREYXRhKDUyKTtcblxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIlRpZW5MZW4uQ2FyZFwiKS5zZXRDYXJkRGF0YSg1Mik7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiVGllbkxlbi5DYXJkXCIpLnNldENhcmREYXRhKDUyKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJUaWVuTGVuLkNhcmRcIikuc2V0Q2FyZERhdGEoNTIpO1xuICAgICAgICB0aGlzLnNoYWRvd0NhcmRSZWFsKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXNldFBsYXllckluZm8oKSB7XG4gICAgICAgIC8vIEhpZGUgbm9kZSBMdjFcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgY2FyZFxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChcIlRpZW5MZW4uQ2FyZFwiKS5zZXRDYXJkRGF0YSg1Mik7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KFwiVGllbkxlbi5DYXJkXCIpLnNldENhcmREYXRhKDUyKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJUaWVuTGVuLkNhcmRcIikuc2V0Q2FyZERhdGEoNTIpO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyByZXNldCBBY3Rpb25cbiAgICAgICAgdGhpcy5hY3Rpb25WYW9HYS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25EYW5oQmllbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uVGhpbmtpbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXQgSHViIGNoaXBzXG4gICAgICAgIHRoaXMuZ29sZEJldC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG5cbiAgICAgICAgLy8gcmVzZXQgVmlld2VyXG4gICAgICAgIHRoaXMuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgfVxuXG4gICAgZnhHb2xkQ2hhbmdlKGdvbGRTdGFydCwgZ29sZEVuZCwgbm9kZSkge1xuICAgICAgICB2YXIgZ29sZEFkZCA9IGdvbGRFbmQgLSBnb2xkU3RhcnQ7XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZ29sZFN0YXJ0KTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnQgPSBnb2xkQWRkID4gMCA/IHRoaXMuZm9udE51bWJlclswXSA6IHRoaXMuZm9udE51bWJlclsxXTtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMjA7XG4gICAgICAgIG5vZGUueSA9IGdvbGRBZGQgPiAwID8gMTYgOiAyMTtcbiAgICAgICAgdmFyIHN0ZXBzID0gMTA7XG4gICAgICAgIHZhciBkZWx0YUdvbGRBZGQgPSBNYXRoLmZsb29yKGdvbGRBZGQgLyBzdGVwcyk7XG5cbiAgICAgICAgdmFyIHJlcCA9IGNjLnJlcGVhdChcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjA1KSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdvbGRTdGFydCArPSBkZWx0YUdvbGRBZGQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoZ29sZEFkZCA+IDAgPyBcIitcIiA6IFwiXCIpICsgdGhpcy5mb3JtYXRHb2xkKGdvbGRTdGFydCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLCBzdGVwcyk7XG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShyZXAsIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIGdvbGRTdGFydCA9IGdvbGRFbmQ7XG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdvbGRBZGQgPiAwID8gXCIrXCIgOiBcIlwiKSArIHRoaXMuZm9ybWF0R29sZChnb2xkU3RhcnQpO1xuICAgICAgICB9KSk7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcSk7XG4gICAgfVxuXG4gICAgZm9ybWF0R29sZChwcmljZSkge1xuICAgICAgICByZXR1cm4gcHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIi5cIik7XG4gICAgfVxuICAgIHNob3dBbmltV2luTG9zZShzdGF0ZSkge1xuICAgICAgICBpZiAodGhpcy5hbmltV2luTG9zZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1XaW5Mb3NlID0gbmV3IGNjLk5vZGUoXCJhbmltV2luTG9zZVwiKS5hZGRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgdGhpcy5hbmltV2luTG9zZS5za2VsZXRvbkRhdGEgPSB0aGlzLmRhdGFBbmltV2luO1xuICAgICAgICAgICAgdGhpcy5hbmltV2luTG9zZS5ub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFuaW1XaW5Mb3NlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGFuaW1OYW1lID0gc3RhdGUgPyBcInRo4bqvbmczXCIgOiBcInRodWFcIjtcbiAgICAgICAgdGhpcy5hbmltV2luTG9zZS5ub2RlLnNjYWxlID0gc3RhdGUgPyAwLjYgOiAwLjc7XG4gICAgICAgIGxldCBwb3NBbmltID0gc3RhdGUgPyBjYy52MigwLCAtODcpIDogY2MudjIoLTQwLCAtODcpO1xuICAgICAgICB0aGlzLmFuaW1XaW5Mb3NlLm5vZGUuc2V0UG9zaXRpb24ocG9zQW5pbSk7XG4gICAgICAgIHRoaXMuYW5pbVdpbkxvc2Uuc2V0QW5pbWF0aW9uKDAsIGFuaW1OYW1lLCB0cnVlKTtcbiAgICB9XG4gICAgaGlkZUFuaW1XaW5Mb3NlKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltV2luTG9zZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1XaW5Mb3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19