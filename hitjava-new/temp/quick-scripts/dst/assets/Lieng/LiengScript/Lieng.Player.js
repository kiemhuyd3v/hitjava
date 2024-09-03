
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lieng/LiengScript/Lieng.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTGllbmdcXExpZW5nU2NyaXB0XFxMaWVuZy5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBaWVDO1FBL2RHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsb0JBQWMsR0FBYyxJQUFJLENBQUM7UUFFakMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUks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QUM7Z0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNhO0lBMURyQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaWUxQjtJQUFELGFBQUM7Q0FqZUQsQUFpZUMsQ0FqZW1DLEVBQUUsQ0FBQyxTQUFTLEdBaWUvQztrQkFqZW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0bkludml0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGF2YXRhcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhcmRSZWFkeTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhcmRSZWFsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHVzZXJOYW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB1c2VyR29sZDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZWFsZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzbWFsbEJpbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiaWdCaW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgb3duZXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYXJkc05hbWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhY3Rpb25TdGF0ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjdGlvbkFsbEluOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWN0aW9uRm9sZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjdGlvblZpZXdlcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFjdGlvblRoaW5raW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWN0aW9uV2luOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGdvbGRXaW46IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWN0aW9uTG9zZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBnb2xkTG9zZTogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBodWI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ29sZEJldDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByZWZhYkl0ZW1DaGlwOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub3RpZnk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGF0RW1vdGlvbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNoYXRNc2c6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaGFkb3dBdmF0YXI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzaGFkb3dJbmZvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHNwcml0ZUNhcmRCYWNrOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwb3NDYXJkT3BlbmVkID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGltZW91dE5vdGlmeSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lb3V0U2hvd0NhcmROYW1lID0gbnVsbDtcclxuICAgIHByaXZhdGUgdGltZW91dENoYXQgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQb3NDYXJkT3BlbmVkKGRhdGEpIHtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAtMSA6IGNodWEgbW8gY2FpIG5hb1xyXG4gICAgICAgICAwIDogbW8gbGVmdFxyXG4gICAgICAgICAxIDogbW8gcmlnaHRcclxuICAgICAgICAgMjogbW8gaGV0IHJcclxuICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucG9zQ2FyZE9wZW5lZCA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NoYXRFbW90aW9uKGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bN10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcclxuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGNvbnRlbnQsIHRydWUpO1xyXG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDaGF0TXNnKGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bN10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcclxuICAgICAgICB0aGlzLmNoYXRNc2cuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dCdG5JbnZpdGUoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLmJ0bkludml0ZS5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPd25lcihzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMub3duZXIuYWN0aXZlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVhbGVyKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5kZWFsZXIuYWN0aXZlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U21hbGxCaW5kKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zbWFsbEJpbmQuYWN0aXZlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmlnQmluZChzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuYmlnQmluZC5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdmF0YXIoYXZhdGFyKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdmF0YXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBBcHAuaW5zdGFuY2UuZ2V0QXZhdGFyU3ByaXRlRnJhbWUoYXZhdGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJc1ZpZXdlcihzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc2hhZG93QXZhdGFyLmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMuc2hhZG93SW5mby5hY3RpdmUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROYW1lKGRhdGEpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bM10uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lLnN0cmluZyA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NhcmRSZWFkeShzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dDYXJkUmVhbChzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZVRvVHJhbnNmb3JtKCkge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUNhcmRSZWFsKDApO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUNhcmRSZWFsKDEpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUNhcmRSZWFsKDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVDYXJkUmVhbChwb3MpIHtcclxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW3Bvc10ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMCwgMCwgMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybVRvQ2FyZFJlYWwoY2FyZFBvcywgc3ByaXRlQ2FyZCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0NhcmRSZWFsKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bY2FyZFBvc10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVDYXJkO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuW2NhcmRQb3NdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDAsIDEpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2NhcmRQb3NdLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xNSksICAvLyAyXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDEsIDEpLFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUtFX1RVUk5cclxuXHJcbiAgICBzaG93Q2FyZE5hbWUobmFtZSkge1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMaWVuZ19QbGF5ZXIgc2hvd0NhcmROYW1lIG5hbWUgOiBcIiwgbmFtZSk7XHJcbiAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhcmRzTmFtZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG5hbWU7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFNob3dDYXJkTmFtZSk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0U2hvd0NhcmROYW1lID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDQ1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdvbGQoZGF0YSkge1xyXG4gICAgICAgIC8vIHRoaXMuYWN0aW9uQWxsSW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5hY3Rpb25Gb2xkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVmlld2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVGhpbmtpbmcuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0dvbGQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy51c2VyR29sZC5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmV0KGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNob3dQbGF5ZXJCZXQodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5nb2xkQmV0LnN0cmluZyA9IHRoaXMuZm9ybWF0R29sZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlwcygpIHtcclxuICAgICAgICB2YXIgaXRlbTEgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1DaGlwKTtcclxuICAgICAgICB2YXIgaXRlbTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW1DaGlwKTtcclxuICAgICAgICB0aGlzLmh1Yi5hZGRDaGlsZChpdGVtMSk7XHJcbiAgICAgICAgdGhpcy5odWIuYWRkQ2hpbGQoaXRlbTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQbGF5ZXJCZXQoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNV0uYWN0aXZlID0gc3RhdGU7XHJcbiAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAvLyBjbGVhciBIdWJcclxuICAgICAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRSZWFsMDEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhcmRSZWFsMDIoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQbGF5Q291bnRkb3duKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVGhpbmtpbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NUaGlua2luZygwKTtcclxuICAgICAgICAvLyAxID0gRnVsbCB8IDAgPSBFbXB0eVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGVQbGF5Q291bnRkb3duKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVGhpbmtpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc1RoaW5raW5nKHJhdGUpIHtcclxuICAgICAgICAvL2NjLmxvZyhcIkxpZW5nX1BsYXllciBwcm9jZXNzVGhpbmtpbmcgcmF0ZSA6IFwiLCByYXRlKTtcclxuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHJhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dvbGQoc3RhdGUpIHtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bM10uY2hpbGRyZW5bMl0uYWN0aXZlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlcGFyZUZ4QWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0dvbGQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVzZXRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGeCBBY3Rpb25cclxuICAgIHNob3dBY3Rpb25TdGF0ZShzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU3RhdGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvblN0YXRlLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUZ4Rm9sZCgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbkZvbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvbkZvbGQucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMCwgMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMS4xLCAxLjEpLFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjA1LCAxLCAxKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5RnhBbGxJbigpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbkFsbEluLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25BbGxJbi5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLCAwKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxLjEsIDEuMSksXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMDUsIDEsIDEpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlGeFZpZXdlcigpIHtcclxuICAgICAgICB0aGlzLnByZXBhcmVGeEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uVmlld2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnhPdGhlclBsYXllckZvbGQoKSB7XHJcbiAgICAgICAgLy8gUmVhZHkgY2FyZFxyXG4gICAgICAgIC8vIHRoaXMuc2hhZG93Q2FyZFJlYWR5KHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuNSwgMCwgLTEwMClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ4TWVGb2xkKCkge1xyXG4gICAgICAgIC8vIFJlYWwgY2FyZFxyXG4gICAgICAgIHRoaXMuc2hhZG93Q2FyZFJlYWwodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjUsIDAsIC0yMClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dFYXRHYShzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uV2luLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ4V2luKHBsYXllckluZm8pIHtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTGllbmdfUGxheWVyIGZ4V2luIHBsYXllckluZm8gOiBcIiwgcGxheWVySW5mbyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25XaW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZ4R29sZENoYW5nZSgwLCBwbGF5ZXJJbmZvLm1vbmV5Q2hhbmdlLCB0aGlzLmdvbGRXaW4ubm9kZSk7XHJcbiAgICAgICAgdGhpcy5zZXRHb2xkKHRoaXMuZm9ybWF0R29sZChwbGF5ZXJJbmZvLmN1cnJlbnRNb25leSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbldpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDI1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ4TG9zZShwbGF5ZXJJbmZvKSB7XHJcbiAgICAgICAgLy8gIGNjLmxvZyhcIkxpZW5nX1BsYXllciBmeExvc2UgcGxheWVySW5mbyA6IFwiLCBwbGF5ZXJJbmZvKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5hY3Rpb25Mb3NlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5meEdvbGRDaGFuZ2UoMCwgcGxheWVySW5mby5tb25leUNoYW5nZSwgdGhpcy5nb2xkTG9zZS5ub2RlKTtcclxuICAgICAgICB0aGlzLnNldEdvbGQodGhpcy5mb3JtYXRHb2xkKHBsYXllckluZm8uY3VycmVudE1vbmV5KSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDI1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNoYWRvd0NhcmRSZWFkeShzdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMV0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLmNhcmRSZWFkeS5jaGlsZHJlblsyXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xyXG4gICAgfVxyXG5cclxuICAgIHNoYWRvd0NhcmRSZWFsKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FyZFdpbihwb3MsIHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltwb3NdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkdSQVk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm90aWZ5XHJcbiAgICBzaG93Tm90aWZ5KGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLm5vdGlmeS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm90aWZ5LmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Tm90aWZ5KTtcclxuICAgICAgICB0aGlzLnRpbWVvdXROb3RpZnkgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzZXRcclxuICAgIHJlc2V0QWN0aW9uKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldE1hdGNoSGlzdG9yeSgpIHtcclxuICAgICAgICAvLyBjYXJkXHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRDYXJkUmVhZHkoKTtcclxuICAgICAgICB0aGlzLnJlc2V0Q2FyZFJlYWwoKTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2V0Q2FyZFdpbigwLCB0cnVlKTtcclxuICAgICAgICAvLyB0aGlzLnNldENhcmRXaW4oMSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vIEluZm9cclxuICAgICAgICB0aGlzLnNob3dHb2xkKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0RGVhbGVyKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEJpZ0JpbmQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U21hbGxCaW5kKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uXHJcbiAgICAgICAgdGhpcy5yZXNldEFjdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBDaGlwc1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls1XS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdvbGRCZXQuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5odWIucmVtb3ZlQWxsQ2hpbGRyZW4odHJ1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0Q2FyZFJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuWzBdLnNjYWxlID0gMTtcclxuICAgICAgICB0aGlzLmNhcmRSZWFkeS5jaGlsZHJlblsxXS5zY2FsZSA9IDE7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5bMl0uc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuc2hhZG93Q2FyZFJlYWR5KGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldENhcmRSZWFsKCkge1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJkUmVhbC55ID0gMDtcclxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkQmFjaztcclxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkQmFjaztcclxuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVDYXJkQmFjaztcclxuICAgICAgICB0aGlzLnNoYWRvd0NhcmRSZWFsKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFBsYXllckluZm8oKSB7XHJcbiAgICAgICAgLy8gSGlkZSBub2RlIEx2MVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgY2FyZFxyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWR5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGRlYWxlciB8IGJpZ1xyXG4gICAgICAgIHRoaXMuc2V0RGVhbGVyKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldEJpZ0JpbmQoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0U21hbGxCaW5kKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgQWN0aW9uXHJcbiAgICAgICAgLy8gdGhpcy5hY3Rpb25BbGxJbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmFjdGlvbkZvbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjdGlvbldpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IEh1YiBjaGlwc1xyXG4gICAgICAgIHRoaXMuZ29sZEJldC5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLmh1Yi5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgVmlld2VyXHJcbiAgICAgICAgdGhpcy5zZXRJc1ZpZXdlcih0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmeEdvbGRDaGFuZ2UoZ29sZFN0YXJ0LCBnb2xkRW5kLCBub2RlKSB7XHJcbiAgICAgICAgdmFyIGdvbGRBZGQgPSBnb2xkRW5kIC0gZ29sZFN0YXJ0O1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmZvcm1hdEdvbGQoZ29sZFN0YXJ0KTtcclxuXHJcbiAgICAgICAgdmFyIHN0ZXBzID0gMTA7XHJcbiAgICAgICAgdmFyIGRlbHRhR29sZEFkZCA9IE1hdGguZmxvb3IoZ29sZEFkZCAvIHN0ZXBzKTtcclxuXHJcbiAgICAgICAgdmFyIHJlcCA9IGNjLnJlcGVhdChcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4wNSksXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29sZFN0YXJ0ICs9IGRlbHRhR29sZEFkZDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdvbGRBZGQgPiAwID8gXCIrXCIgOiBcIlwiKSArIHRoaXMuZm9ybWF0R29sZChnb2xkU3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICksIHN0ZXBzKTtcclxuICAgICAgICB2YXIgc2VxID0gY2Muc2VxdWVuY2UocmVwLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGdvbGRTdGFydCA9IGdvbGRFbmQ7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoZ29sZEFkZCA+IDAgPyBcIitcIiA6IFwiXCIpICsgdGhpcy5mb3JtYXRHb2xkKGdvbGRTdGFydCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0R29sZChwcmljZSkge1xyXG4gICAgICAgIHJldHVybiBwcmljZS50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==