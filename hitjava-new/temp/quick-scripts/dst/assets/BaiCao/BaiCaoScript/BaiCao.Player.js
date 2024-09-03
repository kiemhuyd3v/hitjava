
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BaiCao/BaiCaoScript/BaiCao.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '62496vjvC9JXqua2Il+i42X', 'BaiCao.Player');
// BaiCao/BaiCaoScript/BaiCao.Player.ts

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
        _this.shadowAvatar = null;
        _this.shadowInfo = null;
        _this.spriteCardBack = null;
        _this.popupBet = null;
        _this.popupRequestDanhBien = null;
        _this.labelValueDanhBien = null;
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
    Player.prototype.showCardName = function (name) {
        var _this = this;
        //  cc.log("BaiCao_Player showCardName name : ", name);
        this.cardsName.active = true;
        this.cardsName.children[0].getComponent(cc.Label).string = name;
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
        //  cc.log("BaiCao_Player processThinking rate : ", rate);
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
        this.actionWin.children[3].active = state;
    };
    Player.prototype.fxWin = function (playerInfo) {
        var _this = this;
        //  cc.log("BaiCao_Player fxWin playerInfo : ", playerInfo);
        this.node.children[4].active = true;
        this.actionWin.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldWin.node);
        this.setGold(this.formatGold(playerInfo.money));
        this.showEatGa(playerInfo.ga > 0 ? true : false);
        setTimeout(function () {
            _this.actionWin.active = false;
            _this.node.children[4].active = false;
        }, 2500);
    };
    Player.prototype.fxLose = function (playerInfo) {
        var _this = this;
        //  cc.log("BaiCao_Player fxLose playerInfo : ", playerInfo);
        this.node.children[4].active = true;
        this.actionLose.active = true;
        this.fxGoldChange(0, playerInfo.moneyChange, this.goldLose.node);
        this.setGold(this.formatGold(playerInfo.money));
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
    ], Player.prototype, "shadowAvatar", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "shadowInfo", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Player.prototype, "spriteCardBack", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "popupBet", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "popupRequestDanhBien", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "labelValueDanhBien", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmFpQ2FvXFxCYWlDYW9TY3JpcHRcXEJhaUNhby5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQTZmQztRQTNmRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUz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Q0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCw4QkFBYSxHQUFiLFVBQWMsR0FBRztRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELGdDQUFlLEdBQWYsVUFBZ0IsRUFBRTtRQUNkLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDNUM7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O0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ2E7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNtQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNpQjtJQXhEbkIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZmMUI7SUFBRCxhQUFDO0NBN2ZELEFBNmZDLENBN2ZtQyxFQUFFLENBQUMsU0FBUyxHQTZmL0M7a0JBN2ZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5JbnZpdGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGF2YXRhcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZFJlYWR5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXJkUmVhbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHVzZXJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHVzZXJHb2xkOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgb3duZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRzTmFtZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uVmFvR2E6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbkRhbmhCaWVuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25WaWV3ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvblRoaW5raW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25XaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBnb2xkV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uTG9zZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdvbGRMb3NlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaHViOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgZ29sZEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJlZmFiSXRlbUNoaXA6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGF0RW1vdGlvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhdE1zZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2hhZG93QXZhdGFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGFkb3dJbmZvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByaXRlQ2FyZEJhY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cEJldDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcG9wdXBSZXF1ZXN0RGFuaEJpZW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbFZhbHVlRGFuaEJpZW46IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgcG9zQ2FyZE9wZW5lZCA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0Tm90aWZ5ID0gbnVsbDtcblxuICAgIHByaXZhdGUgdGltZW91dFNob3dDYXJkTmFtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hhdCA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGVQb3NDYXJkT3BlbmVkKGRhdGEpIHtcbiAgICAgICAgLypcbiAgICAgICAgIC0xIDogY2h1YSBtbyBjYWkgbmFvXG4gICAgICAgICAwIDogbW8gbGVmdFxuICAgICAgICAgMSA6IG1vIHJpZ2h0XG4gICAgICAgICAyOiBtbyBoZXQgclxuICAgICAgICAqL1xuICAgICAgICB0aGlzLnBvc0NhcmRPcGVuZWQgPSBkYXRhO1xuICAgIH1cblxuICAgIHNob3dDaGF0RW1vdGlvbihjb250ZW50KSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls3XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoYXQpO1xuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB0aGlzLnRpbWVvdXRDaGF0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBzaG93Q2hhdE1zZyhjb250ZW50KSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls3XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoYXQpO1xuICAgICAgICB0aGlzLmNoYXRNc2cuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnRpbWVvdXRDaGF0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBzaG93UG9wdXBCZXQoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5wb3B1cEJldC5hY3RpdmUgPSBzdGF0ZTtcbiAgICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzVdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzZdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldENhbkRhbmhCaWVuKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRDYW5LZUN1YSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwQmV0VmFsdWUoYmV0KSB7XG4gICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoYmV0KTtcbiAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlblszXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihiZXQgKiAyKTtcbiAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlbls1XS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihiZXQpO1xuICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzZdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGJldCAqIDIpO1xuICAgIH1cblxuICAgIGRpc2FibGVEYW5oQmllbihpZCkge1xuICAgICAgICBpZiAoaWQgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDYW5EYW5oQmllbihmYWxzZSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUtlQ3VhKGlkKSB7XG4gICAgICAgIGlmIChpZCA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzZdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEJldC5jaGlsZHJlbls1XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENhbktlQ3VhKGZhbHNlKTtcbiAgICB9XG5cbiAgICBzZXRDYW5EYW5oQmllbihzdGF0ZSkge1xuICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnBvcHVwQmV0LmNoaWxkcmVuWzNdLmdldENvbXBvbmVudChjYy5CdXR0b24pLmludGVyYWN0YWJsZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHNldENhbktlQ3VhKHN0YXRlKSB7XG4gICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bNV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gc3RhdGU7XG4gICAgICAgIHRoaXMucG9wdXBCZXQuY2hpbGRyZW5bNl0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2hvd0J0bkludml0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLmJ0bkludml0ZS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXRPd25lcihzdGF0ZSkge1xuICAgICAgICB0aGlzLm93bmVyLmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHNldEF2YXRhcihhdmF0YXIpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXZhdGFyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQXBwLmluc3RhbmNlLmdldEF2YXRhclNwcml0ZUZyYW1lKGF2YXRhcik7XG4gICAgfVxuXG4gICAgc2V0SXNWaWV3ZXIoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dBdmF0YXIuYWN0aXZlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc2hhZG93SW5mby5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKGRhdGEpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlck5hbWUuc3RyaW5nID0gZGF0YTtcbiAgICB9XG5cbiAgICBzaG93Q2FyZFJlYWR5KHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93Q2FyZFJlYWwoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHJlcGFyZVRvVHJhbnNmb3JtKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVDYXJkUmVhbCgwKTtcbiAgICAgICAgdGhpcy5wcmVwYXJlQ2FyZFJlYWwoMSk7XG4gICAgICAgIHRoaXMucHJlcGFyZUNhcmRSZWFsKDIpO1xuICAgIH1cblxuICAgIHByZXBhcmVDYXJkUmVhbChwb3MpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltwb3NdLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAsIDAsIDEpKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm1Ub0NhcmRSZWFsKGNhcmRQb3MsIHNwcml0ZUNhcmQpIHtcbiAgICAgICAgdGhpcy5zaG93Q2FyZFJlYWwodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bY2FyZFBvc10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVDYXJkO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5jaGlsZHJlbltjYXJkUG9zXS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDAsIDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltjYXJkUG9zXS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xNSksICAvLyAyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCAxLCAxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgc2hvd0NhcmROYW1lKG5hbWUpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIkJhaUNhb19QbGF5ZXIgc2hvd0NhcmROYW1lIG5hbWUgOiBcIiwgbmFtZSk7XG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbmFtZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFNob3dDYXJkTmFtZSk7XG4gICAgICAgIHRoaXMudGltZW91dFNob3dDYXJkTmFtZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDQ1MDApO1xuICAgIH1cblxuICAgIHNldEdvbGQoZGF0YSkge1xuICAgICAgICAvLyB0aGlzLmFjdGlvblZpZXdlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNob3dHb2xkKHRydWUpO1xuICAgICAgICB0aGlzLnVzZXJHb2xkLnN0cmluZyA9IHRoaXMuZm9ybWF0R29sZChkYXRhKTtcbiAgICB9XG5cbiAgICBzZXRCZXQoZGF0YSkge1xuICAgICAgICB0aGlzLnNob3dQbGF5ZXJCZXQodHJ1ZSk7XG4gICAgICAgIHRoaXMuZ29sZEJldC5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZGF0YSk7XG4gICAgfVxuXG4gICAgYWRkQ2hpcHMoKSB7XG4gICAgICAgIHZhciBpdGVtMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbUNoaXApO1xuICAgICAgICB2YXIgaXRlbTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1DaGlwKTtcbiAgICAgICAgdGhpcy5odWIuYWRkQ2hpbGQoaXRlbTEpO1xuICAgICAgICB0aGlzLmh1Yi5hZGRDaGlsZChpdGVtMik7XG4gICAgfVxuXG4gICAgc2hvd1BsYXllckJldChzdGF0ZSkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNV0uYWN0aXZlID0gc3RhdGU7XG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIEh1YlxuICAgICAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRDYXJkUmVhbDAxKGRhdGEpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2V0Q2FyZFJlYWwwMihkYXRhKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBkYXRhO1xuICAgIH1cblxuICAgIHNob3dQbGF5Q291bnRkb3duKCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2Nlc3NUaGlua2luZygwKTtcbiAgICAgICAgLy8gMSA9IEZ1bGwgfCAwID0gRW1wdHlcbiAgICB9XG5cbiAgICBoaWRlUGxheUNvdW50ZG93bigpIHtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcm9jZXNzVGhpbmtpbmcocmF0ZSkge1xuICAgICAgICAvLyAgY2MubG9nKFwiQmFpQ2FvX1BsYXllciBwcm9jZXNzVGhpbmtpbmcgcmF0ZSA6IFwiLCByYXRlKTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSByYXRlO1xuICAgIH1cblxuICAgIHNob3dHb2xkKHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblszXS5jaGlsZHJlblsyXS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93UG9wdXBSZXF1ZXN0RGFuaEJpZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5wb3B1cFJlcXVlc3REYW5oQmllbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxhYmVsVmFsdWVEYW5oQmllbi5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQodmFsdWUpO1xuICAgIH1cblxuICAgIGNsb3NlUG9wdXBSZXF1ZXN0RGFuaEJpZW4oKSB7XG4gICAgICAgIHRoaXMucG9wdXBSZXF1ZXN0RGFuaEJpZW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJlcGFyZUZ4QWN0aW9uKCkge1xuICAgICAgICAvLyB0aGlzLnNob3dHb2xkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRBY3Rpb24oKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRnggQWN0aW9uXG4gICAgcGxheUZ4RGFuaEJpZW4oKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbkRhbmhCaWVuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aW9uRGFuaEJpZW4ucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLCAwKSxcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS4xLCAxLjEpLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4wNSwgMSwgMSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwbGF5RnhWYW9HYSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aW9uVmFvR2EuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25WYW9HYS5ydW5BY3Rpb24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAsIDApLFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjEsIDEuMSksXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjA1LCAxLCAxKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHBsYXlGeFZpZXdlcigpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRnhBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmeE90aGVyUGxheWVyRm9sZCgpIHtcbiAgICAgICAgLy8gUmVhZHkgY2FyZFxuICAgICAgICAvLyB0aGlzLnNoYWRvd0NhcmRSZWFkeSh0cnVlKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuNSwgMCwgLTEwMClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmeE1lRm9sZCgpIHtcbiAgICAgICAgLy8gUmVhbCBjYXJkXG4gICAgICAgIHRoaXMuc2hhZG93Q2FyZFJlYWwodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuNSwgMCwgLTIwKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHNob3dFYXRHYShzdGF0ZSkge1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5jaGlsZHJlblszXS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBmeFdpbihwbGF5ZXJJbmZvKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW9fUGxheWVyIGZ4V2luIHBsYXllckluZm8gOiBcIiwgcGxheWVySW5mbyk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmZ4R29sZENoYW5nZSgwLCBwbGF5ZXJJbmZvLm1vbmV5Q2hhbmdlLCB0aGlzLmdvbGRXaW4ubm9kZSk7XG4gICAgICAgIHRoaXMuc2V0R29sZCh0aGlzLmZvcm1hdEdvbGQocGxheWVySW5mby5tb25leSkpO1xuICAgICAgICB0aGlzLnNob3dFYXRHYShwbGF5ZXJJbmZvLmdhID4gMCA/IHRydWUgOiBmYWxzZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25XaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDI1MDApO1xuICAgIH1cblxuICAgIGZ4TG9zZShwbGF5ZXJJbmZvKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJCYWlDYW9fUGxheWVyIGZ4TG9zZSBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25Mb3NlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZnhHb2xkQ2hhbmdlKDAsIHBsYXllckluZm8ubW9uZXlDaGFuZ2UsIHRoaXMuZ29sZExvc2Uubm9kZSk7XG4gICAgICAgIHRoaXMuc2V0R29sZCh0aGlzLmZvcm1hdEdvbGQocGxheWVySW5mby5tb25leSkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfVxuXG4gICAgc2hhZG93Q2FyZFJlYWR5KHN0YXRlKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzFdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzJdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgfVxuXG4gICAgc2hhZG93Q2FyZFJlYWwoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICB9XG5cbiAgICBzZXRDYXJkV2luKHBvcywgc3RhdGUpIHtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltwb3NdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XG4gICAgfVxuXG4gICAgLy8gbm90aWZ5XG4gICAgc2hvd05vdGlmeShjb250ZW50KSB7XG4gICAgICAgIHRoaXMubm90aWZ5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm90aWZ5LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dE5vdGlmeSk7XG4gICAgICAgIHRoaXMudGltZW91dE5vdGlmeSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDE1MDApO1xuICAgIH1cblxuICAgIC8vIHJlc2V0XG4gICAgcmVzZXRBY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0TWF0Y2hIaXN0b3J5KCkge1xuICAgICAgICAvLyBjYXJkXG5cbiAgICAgICAgdGhpcy5yZXNldENhcmRSZWFkeSgpO1xuICAgICAgICB0aGlzLnJlc2V0Q2FyZFJlYWwoKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMuc2V0Q2FyZFdpbigwLCB0cnVlKTtcbiAgICAgICAgLy8gdGhpcy5zZXRDYXJkV2luKDEsIHRydWUpO1xuICAgICAgICAvLyB0aGlzLnNldENhcmRXaW4oMiwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gSW5mb1xuICAgICAgICB0aGlzLnNob3dHb2xkKHRydWUpO1xuICAgICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBBY3Rpb25cbiAgICAgICAgdGhpcy5yZXNldEFjdGlvbigpO1xuXG4gICAgICAgIC8vIENoaXBzXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls1XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nb2xkQmV0LnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLmh1Yi5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcblxuICAgIH1cblxuICAgIHJlc2V0Q2FyZFJlYWR5KCkge1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5jaGlsZHJlblswXS5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzFdLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMl0uc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zaGFkb3dDYXJkUmVhZHkoZmFsc2UpO1xuICAgIH1cblxuICAgIHJlc2V0Q2FyZFJlYWwoKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwueSA9IDA7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkQmFjaztcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZEJhY2s7XG4gICAgICAgIHRoaXMuc2hhZG93Q2FyZFJlYWwoZmFsc2UpO1xuICAgIH1cblxuICAgIHJlc2V0UGxheWVySW5mbygpIHtcbiAgICAgICAgLy8gSGlkZSBub2RlIEx2MVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCBjYXJkXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkQmFjaztcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByaXRlQ2FyZEJhY2s7XG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IEFjdGlvblxuICAgICAgICB0aGlzLmFjdGlvblZhb0dhLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvbkRhbmhCaWVuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvblZpZXdlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25XaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyByZXNldCBIdWIgY2hpcHNcbiAgICAgICAgdGhpcy5nb2xkQmV0LnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLmh1Yi5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcblxuICAgICAgICAvLyByZXNldCBWaWV3ZXJcbiAgICAgICAgdGhpcy5zZXRJc1ZpZXdlcih0cnVlKTtcbiAgICB9XG5cbiAgICBmeEdvbGRDaGFuZ2UoZ29sZFN0YXJ0LCBnb2xkRW5kLCBub2RlKSB7XG4gICAgICAgIHZhciBnb2xkQWRkID0gZ29sZEVuZCAtIGdvbGRTdGFydDtcbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZm9ybWF0R29sZChnb2xkU3RhcnQpO1xuXG4gICAgICAgIHZhciBzdGVwcyA9IDEwO1xuICAgICAgICB2YXIgZGVsdGFHb2xkQWRkID0gTWF0aC5mbG9vcihnb2xkQWRkIC8gc3RlcHMpO1xuXG4gICAgICAgIHZhciByZXAgPSBjYy5yZXBlYXQoXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wNSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnb2xkU3RhcnQgKz0gZGVsdGFHb2xkQWRkO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdvbGRBZGQgPiAwID8gXCIrXCIgOiBcIlwiKSArIHRoaXMuZm9ybWF0R29sZChnb2xkU3RhcnQpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKSwgc3RlcHMpO1xuICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UocmVwLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBnb2xkU3RhcnQgPSBnb2xkRW5kO1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChnb2xkQWRkID4gMCA/IFwiK1wiIDogXCJcIikgKyB0aGlzLmZvcm1hdEdvbGQoZ29sZFN0YXJ0KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBub2RlLnJ1bkFjdGlvbihzZXEpO1xuICAgIH1cblxuICAgIGZvcm1hdEdvbGQocHJpY2UpIHtcbiAgICAgICAgcmV0dXJuIHByaWNlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=