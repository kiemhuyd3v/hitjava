
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Poker/PokerScript/Poker.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a80dskJA1MzZkQWeG+gkTZ', 'Poker.Player');
// Poker/PokerScript/Poker.Player.ts

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
        //  cc.log("Poker_Player showCardName name : ", name);
        this.cardsName.active = true;
        this.cardsName.children[0].getComponent(cc.Label).string = name;
        clearTimeout(this.timeoutShowCardName);
        this.timeoutShowCardName = setTimeout(function () {
            _this.cardsName.active = false;
        }, 4500);
    };
    Player.prototype.hideCardName = function () {
        this.cardsName.active = false;
    };
    Player.prototype.setGold = function (data) {
        // this.actionAllIn.active = false;
        // this.actionFold.active = false;
        this.actionViewer.active = false;
        this.actionThinking.active = false;
        this.showGold(true);
        this.userGold.string = this.formatGold(data);
    };
    Player.prototype.getGold = function () {
        var raw = this.userGold.string.replace(/\./g, "");
        //  cc.log("Poker_Player getGold raw : ", raw);
        return parseInt(raw);
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
        //  cc.log("Poker_Player processThinking rate : ", rate);
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
        //  cc.log("Poker_Player fxWin playerInfo : ", playerInfo);
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
        //  cc.log("Poker_Player fxLose playerInfo : ", playerInfo);
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
    };
    Player.prototype.shadowCardReal = function (state) {
        this.cardReal.children[0].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
        this.cardReal.children[1].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
    };
    Player.prototype.shadowEachCardReal = function (id, state) {
        this.cardReal.children[id].children[0].color = state ? cc.Color.GRAY : cc.Color.WHITE;
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
        this.cardReady.active = false;
        // this.shadowCardReady(false);
    };
    Player.prototype.resetCardReal = function () {
        this.cardReal.active = false;
        this.cardReal.y = 0;
        this.cardReal.children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
        this.cardReal.children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.spriteCardBack;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcUG9rZXJcXFBva2VyU2NyaXB0XFxQb2tlci5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBR3RELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBeWVDO1FBdmVHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUks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cHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuSW52aXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhdmF0YXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRSZWFkeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZFJlYWw6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB1c2VyTmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB1c2VyR29sZDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGRlYWxlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc21hbGxCaW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBiaWdCaW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvd25lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNOYW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25TdGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uQWxsSW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbkZvbGQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvblZpZXdlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uVGhpbmtpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbldpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdvbGRXaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25Mb3NlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ29sZExvc2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBodWI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBnb2xkQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcmVmYWJJdGVtQ2hpcDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub3RpZnk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXRFbW90aW9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGF0TXNnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGFkb3dBdmF0YXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNoYWRvd0luZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVDYXJkQmFjazogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBwb3NDYXJkT3BlbmVkID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVvdXROb3RpZnkgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0aW1lb3V0U2hvd0NhcmROYW1lID0gbnVsbDtcbiAgICBwcml2YXRlIHRpbWVvdXRDaGF0ID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZVBvc0NhcmRPcGVuZWQoZGF0YSkge1xuICAgICAgICAvKlxuICAgICAgICAgLTEgOiBjaHVhIG1vIGNhaSBuYW9cbiAgICAgICAgIDAgOiBtbyBsZWZ0XG4gICAgICAgICAxIDogbW8gcmlnaHRcbiAgICAgICAgIDI6IG1vIGhldCByXG4gICAgICAgICovXG4gICAgICAgIHRoaXMucG9zQ2FyZE9wZW5lZCA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2hvd0NoYXRFbW90aW9uKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hhdCk7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHNob3dDaGF0TXNnKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hhdCk7XG4gICAgICAgIHRoaXMuY2hhdE1zZy5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHNob3dCdG5JbnZpdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5idG5JbnZpdGUuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0T3duZXIoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5vd25lci5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXREZWFsZXIoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5kZWFsZXIuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0U21hbGxCaW5kKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc21hbGxCaW5kLmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHNldEJpZ0JpbmQoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5iaWdCaW5kLmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHNldEF2YXRhcihhdmF0YXIpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXZhdGFyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQXBwLmluc3RhbmNlLmdldEF2YXRhclNwcml0ZUZyYW1lKGF2YXRhcik7XG4gICAgfVxuXG4gICAgc2V0SXNWaWV3ZXIoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dBdmF0YXIuYWN0aXZlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc2hhZG93SW5mby5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKGRhdGEpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlck5hbWUuc3RyaW5nID0gZGF0YTtcbiAgICB9XG5cbiAgICBzaG93Q2FyZFJlYWR5KHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93Q2FyZFJlYWwoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJlcGFyZVRvVHJhbnNmb3JtKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYXJkUmVhbCgwKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlQ2FyZFJlYWwoMSk7XG4gICAgfVxuXG4gICAgcHJlcGFyZUNhcmRSZWFsKHBvcykge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW3Bvc10ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMCwgMCwgMSkpO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVRvQ2FyZFJlYWwoY2FyZFBvcywgc3ByaXRlQ2FyZCkge1xuICAgICAgICB0aGlzLnNob3dDYXJkUmVhbCh0cnVlKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltjYXJkUG9zXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUNhcmQ7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuW2NhcmRQb3NdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xNSwgMCwgMSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2NhcmRQb3NdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjE1KSwgIC8vIDJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDEsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICAvLyBUQUtFX1RVUk5cblxuICAgIHNob3dDYXJkTmFtZShuYW1lKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlcl9QbGF5ZXIgc2hvd0NhcmROYW1lIG5hbWUgOiBcIiwgbmFtZSk7XG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbmFtZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFNob3dDYXJkTmFtZSk7XG4gICAgICAgIHRoaXMudGltZW91dFNob3dDYXJkTmFtZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDQ1MDApO1xuICAgIH1cblxuICAgIGhpZGVDYXJkTmFtZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0R29sZChkYXRhKSB7XG4gICAgICAgIC8vIHRoaXMuYWN0aW9uQWxsSW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuYWN0aW9uRm9sZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uVGhpbmtpbmcuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zaG93R29sZCh0cnVlKTtcbiAgICAgICAgdGhpcy51c2VyR29sZC5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0R29sZCgpIHtcbiAgICAgICAgbGV0IHJhdyA9IHRoaXMudXNlckdvbGQuc3RyaW5nLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIlBva2VyX1BsYXllciBnZXRHb2xkIHJhdyA6IFwiLCByYXcpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQocmF3KTtcbiAgICB9XG5cbiAgICBzZXRCZXQoZGF0YSkge1xuICAgICAgICB0aGlzLnNob3dQbGF5ZXJCZXQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZ29sZEJldC5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgYWRkQ2hpcHMoKSB7XG4gICAgICAgIHZhciBpdGVtMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbUNoaXApO1xuICAgICAgICB2YXIgaXRlbTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1DaGlwKTtcbiAgICAgICAgdGhpcy5odWIuYWRkQ2hpbGQoaXRlbTEpO1xuICAgICAgICB0aGlzLmh1Yi5hZGRDaGlsZChpdGVtMik7XG4gICAgfVxuXG4gICAgc2hvd1BsYXllckJldChzdGF0ZSkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNV0uYWN0aXZlID0gc3RhdGU7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIEh1YlxuICAgICAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDYXJkUmVhbDAxKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2V0Q2FyZFJlYWwwMihkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBkYXRhO1xuICAgIH1cblxuICAgIHNob3dQbGF5Q291bnRkb3duKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NUaGlua2luZygwKTtcbiAgICAgICAgLy8gMSA9IEZ1bGwgfCAwID0gRW1wdHlcbiAgICB9XG5cbiAgICBoaWRlUGxheUNvdW50ZG93bigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm9jZXNzVGhpbmtpbmcocmF0ZSkge1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfUGxheWVyIHByb2Nlc3NUaGlua2luZyByYXRlIDogXCIsIHJhdGUpO1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHJhdGU7XG4gICAgfVxuXG4gICAgc2hvd0dvbGQoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHByZXBhcmVGeEFjdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaG93R29sZChmYWxzZSk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gRnggQWN0aW9uXG4gICAgc2hvd0FjdGlvblN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvblN0YXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aW9uU3RhdGUuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwbGF5RnhGb2xkKCkge1xuICAgICAgICB0aGlzLmFjdGlvbkZvbGQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25Gb2xkLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMCwgMCksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDEuMSwgMS4xKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMDUsIDEsIDEpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcGxheUZ4QWxsSW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uQWxsSW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25BbGxJbi5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAsIDApLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjEsIDEuMSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjA1LCAxLCAxKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBsYXlGeFZpZXdlcigpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRnhBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmeE90aGVyUGxheWVyRm9sZCgpIHtcbiAgICAgICAgLy8gUmVhZHkgY2FyZFxuICAgICAgICAvLyB0aGlzLnNoYWRvd0NhcmRSZWFkeSh0cnVlKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuNSwgMCwgLTEwMClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmeE1lRm9sZCgpIHtcbiAgICAgICAgLy8gUmVhbCBjYXJkXG4gICAgICAgIHRoaXMuc2hhZG93Q2FyZFJlYWwodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuNSwgMCwgLTIwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3dFYXRHYShzdGF0ZSkge1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5jaGlsZHJlblszXS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBmeFdpbihwbGF5ZXJJbmZvKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJQb2tlcl9QbGF5ZXIgZnhXaW4gcGxheWVySW5mbyA6IFwiLCBwbGF5ZXJJbmZvKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aW9uV2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZnhHb2xkQ2hhbmdlKDAsIHBsYXllckluZm8ubW9uZXlDaGFuZ2UsIHRoaXMuZ29sZFdpbi5ub2RlKTtcbiAgICAgICAgdGhpcy5zZXRHb2xkKHRoaXMuZm9ybWF0R29sZChwbGF5ZXJJbmZvLmN1cnJlbnRNb25leSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICB9XG5cbiAgICBmeExvc2UocGxheWVySW5mbykge1xuICAgICAgICAvLyAgY2MubG9nKFwiUG9rZXJfUGxheWVyIGZ4TG9zZSBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25Mb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmFjdGlvbkxvc2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5meEdvbGRDaGFuZ2UoMCwgcGxheWVySW5mby5tb25leUNoYW5nZSwgdGhpcy5nb2xkTG9zZS5ub2RlKTtcbiAgICAgICAgdGhpcy5zZXRHb2xkKHRoaXMuZm9ybWF0R29sZChwbGF5ZXJJbmZvLmN1cnJlbnRNb25leSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfVxuXG4gICAgc2hhZG93Q2FyZFJlYWR5KHN0YXRlKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzFdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgfVxuXG4gICAgc2hhZG93Q2FyZFJlYWwoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgfVxuXG4gICAgc2hhZG93RWFjaENhcmRSZWFsKGlkLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2lkXS5jaGlsZHJlblswXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgIH1cblxuICAgIHNldENhcmRXaW4ocG9zLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW3Bvc10uY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICAvLyBub3RpZnlcbiAgICBzaG93Tm90aWZ5KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Tm90aWZ5KTtcbiAgICAgICAgdGhpcy50aW1lb3V0Tm90aWZ5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXRcbiAgICByZXNldEFjdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubm9kZS5jaGlsZHJlbls0XS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRNYXRjaEhpc3RvcnkoKSB7XG4gICAgICAgIC8vIGNhcmRcblxuICAgICAgICB0aGlzLnJlc2V0Q2FyZFJlYWR5KCk7XG4gICAgICAgIHRoaXMucmVzZXRDYXJkUmVhbCgpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gdGhpcy5zZXRDYXJkV2luKDAsIHRydWUpO1xuICAgICAgICAvLyB0aGlzLnNldENhcmRXaW4oMSwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gSW5mb1xuICAgICAgICB0aGlzLnNob3dHb2xkKHRydWUpO1xuICAgICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXREZWFsZXIoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldEJpZ0JpbmQoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFNtYWxsQmluZChmYWxzZSk7XG5cbiAgICAgICAgLy8gQWN0aW9uXG4gICAgICAgIHRoaXMucmVzZXRBY3Rpb24oKTtcblxuICAgICAgICAvLyBDaGlwc1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ29sZEJldC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG5cbiAgICB9XG5cbiAgICByZXNldENhcmRSZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMF0uc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5jaGlsZHJlblsxXS5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLnNoYWRvd0NhcmRSZWFkeShmYWxzZSk7XG4gICAgfVxuXG4gICAgcmVzZXRDYXJkUmVhbCgpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC55ID0gMDtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZEJhY2s7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xuICAgICAgICB0aGlzLnNoYWRvd0NhcmRSZWFsKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXNldFBsYXllckluZm8oKSB7XG4gICAgICAgIC8vIEhpZGUgbm9kZSBMdjFcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVzZXQgY2FyZFxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkQmFjaztcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZEJhY2s7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IGRlYWxlciB8IGJpZ1xuICAgICAgICB0aGlzLnNldERlYWxlcihmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0QmlnQmluZChmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0U21hbGxCaW5kKGZhbHNlKTtcbiAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXQgQWN0aW9uXG4gICAgICAgIC8vIHRoaXMuYWN0aW9uQWxsSW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuYWN0aW9uRm9sZC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uVGhpbmtpbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXQgSHViIGNoaXBzXG4gICAgICAgIHRoaXMuZ29sZEJldC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG5cbiAgICAgICAgLy8gcmVzZXQgVmlld2VyXG4gICAgICAgIHRoaXMuc2V0SXNWaWV3ZXIodHJ1ZSk7XG4gICAgfVxuXG4gICAgZnhHb2xkQ2hhbmdlKGdvbGRTdGFydCwgZ29sZEVuZCwgbm9kZSkge1xuICAgICAgICB2YXIgZ29sZEFkZCA9IGdvbGRFbmQgLSBnb2xkU3RhcnQ7XG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZ29sZFN0YXJ0KTtcblxuICAgICAgICB2YXIgc3RlcHMgPSAxMDtcbiAgICAgICAgdmFyIGRlbHRhR29sZEFkZCA9IE1hdGguZmxvb3IoZ29sZEFkZCAvIHN0ZXBzKTtcblxuICAgICAgICB2YXIgcmVwID0gY2MucmVwZWF0KFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMDUpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ29sZFN0YXJ0ICs9IGRlbHRhR29sZEFkZDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChnb2xkQWRkID4gMCA/IFwiK1wiIDogXCJcIikgKyB0aGlzLmZvcm1hdEdvbGQoZ29sZFN0YXJ0KTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICksIHN0ZXBzKTtcbiAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKHJlcCwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgZ29sZFN0YXJ0ID0gZ29sZEVuZDtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoZ29sZEFkZCA+IDAgPyBcIitcIiA6IFwiXCIpICsgdGhpcy5mb3JtYXRHb2xkKGdvbGRTdGFydCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oc2VxKTtcbiAgICB9XG5cbiAgICBmb3JtYXRHb2xkKHByaWNlKSB7XG4gICAgICAgIHJldHVybiBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLlwiKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19