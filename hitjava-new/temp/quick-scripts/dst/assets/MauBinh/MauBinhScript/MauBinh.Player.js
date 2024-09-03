
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBRXRELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMGRDO1FBeGRHLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBR3RDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLHFCQUFlLEdBQXFCLEVBQUUsQ0FBQztRQUV2Qyx5QkFB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QUMsSUFBSSxDQUFDO2lEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ1c7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2tEQUNhO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ1M7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNrQjtJQUUzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNjO0lBckRmLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwZDFCO0lBQUQsYUFBQztDQTFkRCxBQTBkQyxDQTFkbUMsRUFBRSxDQUFDLFNBQVMsR0EwZC9DO2tCQTFkb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkludml0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYXZhdGFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjYXJkUmVhZHk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRSZWFsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdXNlck5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdXNlckdvbGQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBvd25lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZHNOYW1lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25WaWV3ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvblRoaW5raW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhY3Rpb25XaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBnb2xkV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uTG9zZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGdvbGRMb3NlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uWGVwWG9uZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYWN0aW9uRGFuZ1hlcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGF0RW1vdGlvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhdE1zZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc2hhZG93QXZhdGFyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzaGFkb3dJbmZvOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByaXRlQ2FyZEJhY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHJlc3VsdEdhbWU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVSZXN1bHRDaGk6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByaXRlUmVzdWx0R2VuZXJhbDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFjdGlvbkdvbGRTb0NoaTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHRpbWVvdXROb3RpZnkgPSBudWxsO1xuICAgIHByaXZhdGUgdGltZW91dFNob3dDYXJkTmFtZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hhdCA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBzaG93Q2hhdEVtb3Rpb24oY29udGVudCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBjb250ZW50LCB0cnVlKTtcbiAgICAgICAgdGhpcy50aW1lb3V0Q2hhdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgc2hvd0NoYXRNc2coY29udGVudCkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcbiAgICAgICAgdGhpcy50aW1lb3V0Q2hhdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgc2hvd0J0bkludml0ZShzdGF0ZSkge1xuICAgICAgICB0aGlzLmJ0bkludml0ZS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXRPd25lcihzdGF0ZSkge1xuICAgICAgICAvLyB0aGlzLm93bmVyLmFjdGl2ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLm93bmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldEF2YXRhcihhdmF0YXIpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXZhdGFyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gQXBwLmluc3RhbmNlLmdldEF2YXRhclNwcml0ZUZyYW1lKGF2YXRhcik7XG4gICAgfVxuXG4gICAgc2V0SXNWaWV3ZXIoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dBdmF0YXIuYWN0aXZlID0gc3RhdGU7XG4gICAgICAgIHRoaXMuc2hhZG93SW5mby5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKGRhdGEpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudXNlck5hbWUuc3RyaW5nID0gZGF0YTtcbiAgICB9XG5cbiAgICBzY2FsZUNhcmRSZWFsKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuc2NhbGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93Q2FyZFJlYWR5KHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRSZWFkeS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBzaG93Q2FyZFJlYWwoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NhbGVDYXJkUmVhbCgxKTtcbiAgICAgICAgdGhpcy5jYXJkUmVhbC5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwcmVwYXJlVG9UcmFuc2Zvcm0oKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMzsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FyZFJlYWwoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGFyZUNhcmRSZWFsKHBvcykge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW3Bvc10ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMCwgMCwgMSkpO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVRvQ2FyZFJlYWwoY2FyZFBvcywgc3ByaXRlQ2FyZCwgc2VhdElkKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltjYXJkUG9zXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUNhcmQ7XG5cbiAgICAgICAgICAgIHRoaXMuY2FyZFJlYWR5LmNoaWxkcmVuW2NhcmRQb3NdLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCAwLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bY2FyZFBvc10ucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xNSksICAvLyAyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xNSwgMSwgMSksXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2NhcmRQb3NdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlQ2FyZDtcbiAgICAgICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5bY2FyZFBvc10ucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMTUsIDEsIDEpLFxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NhcmROYW1lKGltZykge1xuICAgICAgICB0aGlzLmNhcmRzTmFtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmNhcmRzTmFtZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGltZztcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dFNob3dDYXJkTmFtZSk7XG4gICAgICAgIHRoaXMudGltZW91dFNob3dDYXJkTmFtZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDQ1MDApO1xuICAgIH1cblxuICAgIHNldEdvbGQoZGF0YSkge1xuICAgICAgICAvLyB0aGlzLmFjdGlvblZpZXdlci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnNob3dHb2xkKHRydWUpO1xuICAgICAgICB0aGlzLnVzZXJHb2xkLnN0cmluZyA9IHRoaXMuZm9ybWF0R29sZChkYXRhKTtcbiAgICB9XG5cbiAgICBzZXRDYXJkUmVhbChkYXRhLCBpbmRleCkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGRhdGE7XG4gICAgfVxuXG4gICAgc2hvd1BsYXlDb3VudGRvd24oKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucHJvY2Vzc1RoaW5raW5nKDApO1xuICAgICAgICAvLyAxID0gRnVsbCB8IDAgPSBFbXB0eVxuICAgIH1cblxuICAgIGhpZGVQbGF5Q291bnRkb3duKCkge1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb2Nlc3NUaGlua2luZyhyYXRlKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oX1BsYXllciBwcm9jZXNzVGhpbmtpbmcgcmF0ZSA6IFwiLCByYXRlKTtcbiAgICAgICAgdGhpcy5hY3Rpb25UaGlua2luZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSByYXRlO1xuICAgIH1cblxuICAgIHNob3dHb2xkKHN0YXRlKSB7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblszXS5jaGlsZHJlblsyXS5hY3RpdmUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBwcmVwYXJlRnhBY3Rpb24oKSB7XG4gICAgICAgIC8vIHRoaXMuc2hvd0dvbGQoZmFsc2UpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXNldEFjdGlvbigpO1xuICAgIH1cblxuICAgIC8vIEZ4IEFjdGlvblxuICAgIHBsYXlGeFZpZXdlcigpIHtcbiAgICAgICAgdGhpcy5wcmVwYXJlRnhBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5hY3Rpb25WaWV3ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwbGF5RnhEYW5nWGVwKCkge1xuICAgICAgICB0aGlzLnByZXBhcmVGeEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdGlvbkRhbmdYZXAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25YZXBYb25nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHBsYXlGeFhlcFhvbmcoKSB7XG4gICAgICAgIHRoaXMucHJlcGFyZUZ4QWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0aW9uRGFuZ1hlcC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25YZXBYb25nLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcGxheUZ4U29DaGlUb3RhbChpbWcpIHtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJlc3VsdEdhbWUuY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBpbWc7XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlblszXS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGxheUZ4UmVzdWx0R2VuZXJhbChzZWF0SWQsIGlzR29vZCwgdHlwZSwgaXNTb0NoaSkge1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bN10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZXN1bHRHYW1lLmNoaWxkcmVuWzNdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRHYW1lLmNoaWxkcmVuWzNdLnkgPSBpc1NvQ2hpID09IDAgPyAzMCA6IDEwMDtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5zY2FsZSA9IGlzU29DaGkgPT0gMCA/IDEgOiAwLjU7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEdhbWUuY2hpbGRyZW5bM10uY2hpbGRyZW5bMV0uc2NhbGUgPSBpc1NvQ2hpID09IDAgPyAxIDogMC41O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlblszXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZVxuICAgICAgICAgICAgPSBpc0dvb2QgPyB0aGlzLnNwcml0ZVJlc3VsdEdlbmVyYWxbMF0gOiB0aGlzLnNwcml0ZVJlc3VsdEdlbmVyYWxbMV07XG5cbiAgICAgICAgdGhpcy5yZXN1bHRHYW1lLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXNHb29kID8gdHlwZSA6IFwiXCI7XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGxheUZ4Q29tcGFyZUNoaShpZCwgaW1nKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oX1BsYXllciBwbGF5RnhDb21wYXJlQ2hpIGlkIDogXCIsIGlkKTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlbltpZCAtIDFdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzdWx0R2FtZS5jaGlsZHJlbltpZCAtIDFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gaW1nO1xuICAgICAgICB0aGlzLnJlc3VsdEdhbWUuY2hpbGRyZW5baWQgLSAxXS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGxheUZ4R29sZFNvQ2hpKGdvbGRDaGkpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmhfUGxheWVyIHBsYXlGeEdvbGRTb0NoaSBnb2xkQ2hpIDogXCIsIGdvbGRDaGkpO1xuICAgICAgICBpZiAoZ29sZENoaSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkdvbGRTb0NoaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25Hb2xkU29DaGkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIGdvbGRDaGkgKyBcIiBDaGlcIjtcbiAgICAgICAgfSBlbHNlIGlmIChnb2xkQ2hpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25Hb2xkU29DaGkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uR29sZFNvQ2hpLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ29sZENoaSArIFwiIENoaVwiO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25Hb2xkU29DaGkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDI1MDApO1xuICAgIH1cblxuICAgIHBsYXlGeFdpblNvQ2hpKHJlc3VsdCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaF9QbGF5ZXIgcGxheUZ4V2luU29DaGkgcmVzdWx0IDogXCIsIHJlc3VsdCk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdvbGRXaW4uc3RyaW5nID0gXCIrXCIgKyByZXN1bHQgKyBcIiBDaGlcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIHBsYXlGeExvc2VTb0NoaShyZXN1bHQpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmhfUGxheWVyIHBsYXlGeExvc2VTb0NoaSByZXN1bHQgOiBcIiwgcmVzdWx0KTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nb2xkTG9zZS5zdHJpbmcgPSByZXN1bHQgKyBcIiBDaGlcIjtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDIwMDApO1xuICAgIH1cblxuICAgIGZ4V2luKHBsYXllckluZm8pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIk1hdUJpbmhfUGxheWVyIHBsYXlGeFdpbiBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25Mb3NlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmdvbGRXaW4ubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmZ4R29sZENoYW5nZSgwLCBwbGF5ZXJJbmZvLm1vbmV5Q2hhbmdlLCB0aGlzLmdvbGRXaW4ubm9kZSk7XG4gICAgICAgIGlmIChwbGF5ZXJJbmZvLm1vbmV5ICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldEdvbGQodGhpcy5mb3JtYXRHb2xkKHBsYXllckluZm8ubW9uZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICB9XG5cbiAgICBmeExvc2UocGxheWVySW5mbykge1xuICAgICAgICAvLyAgY2MubG9nKFwiTWF1QmluaF9QbGF5ZXIgcGxheUZ4TG9zZSBwbGF5ZXJJbmZvIDogXCIsIHBsYXllckluZm8pO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25XaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGlvbkxvc2UuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nb2xkTG9zZS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZnhHb2xkQ2hhbmdlKDAsIHBsYXllckluZm8ubW9uZXlDaGFuZ2UsIHRoaXMuZ29sZExvc2Uubm9kZSk7XG4gICAgICAgIGlmIChwbGF5ZXJJbmZvLm1vbmV5ICE9IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNldEdvbGQodGhpcy5mb3JtYXRHb2xkKHBsYXllckluZm8ubW9uZXkpKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uTG9zZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbls0XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfVxuXG4gICAgc2hhZG93Q2FyZFJlYWR5KHN0YXRlKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMzsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5baW5kZXhdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaGFkb3dDYXJkUmVhbChzdGF0ZSkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTM7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuY2FyZFJlYWwuY2hpbGRyZW5baW5kZXhdLmNoaWxkcmVuWzBdLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaGFkb3dDYXJkKGluZGV4LCBzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblsxXS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgIH1cblxuICAgIHNldENhcmRXaW4ocG9zLCBzdGF0ZSkge1xuICAgICAgICB0aGlzLmNhcmRSZWFsLmNoaWxkcmVuW3Bvc10uY2hpbGRyZW5bMF0uY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICAvLyBub3RpZnlcbiAgICBzaG93Tm90aWZ5KGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnkuY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Tm90aWZ5KTtcbiAgICAgICAgdGhpcy50aW1lb3V0Tm90aWZ5ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXRcbiAgICByZXNldFJlc3VsdEdhbWUoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdEdhbWUuY2hpbGRyZW5baW5kZXhdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzZXRSZXN1bHRDaGkoY2hpSWQpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRHYW1lLmNoaWxkcmVuW2NoaUlkIC0gMV0uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzZXRBY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm5vZGUuY2hpbGRyZW5bNF0uY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzRdLmNoaWxkcmVuW2luZGV4XS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0TWF0Y2hIaXN0b3J5KHNlYXRJZCkge1xuICAgICAgICAvLyBjYXJkXG4gICAgICAgIHRoaXMucmVzZXRDYXJkUmVhZHkoc2VhdElkKTtcbiAgICAgICAgdGhpcy5yZXNldENhcmRSZWFsKHNlYXRJZCk7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsyXS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAvLyBJbmZvXG4gICAgICAgIHRoaXMuc2hvd0dvbGQodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2FyZHNOYW1lLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIEFjdGlvblxuICAgICAgICB0aGlzLnJlc2V0QWN0aW9uKCk7XG4gICAgfVxuXG4gICAgcmVzZXRDYXJkUmVhZHkoc2VhdElkKSB7XG4gICAgICAgIGlmIChzZWF0SWQgPT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEzOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkUmVhZHkuY2hpbGRyZW5baW5kZXhdLnNjYWxlID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhcmRSZWFkeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zaGFkb3dDYXJkUmVhZHkoZmFsc2UpO1xuICAgIH1cblxuICAgIHJlc2V0Q2FyZFJlYWwoc2VhdElkKSB7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMzsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bc2VhdElkID09IDAgPyAxIDogMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2hhZG93Q2FyZFJlYWwoZmFsc2UpO1xuICAgIH1cblxuICAgIHJlc2V0UGxheWVySW5mbyhzZWF0SWQpIHtcbiAgICAgICAgLy8gSGlkZSBub2RlIEx2MVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQ7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNldCBjYXJkXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMzsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5jYXJkUmVhbC5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bc2VhdElkID09IDAgPyAxIDogMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwcml0ZUNhcmRCYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYXJkUmVhZHkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2FyZFJlYWwuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5jYXJkc05hbWUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gcmVzZXQgQWN0aW9uXG4gICAgICAgIHRoaXMuYWN0aW9uVmlld2VyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvblRoaW5raW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFjdGlvbldpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3Rpb25Mb3NlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIHJlc2V0IFZpZXdlclxuICAgICAgICB0aGlzLnNldElzVmlld2VyKHRydWUpO1xuICAgIH1cblxuICAgIGZ4R29sZENoYW5nZShnb2xkU3RhcnQsIGdvbGRFbmQsIG5vZGUpIHtcbiAgICAgICAgdmFyIGdvbGRBZGQgPSBnb2xkRW5kIC0gZ29sZFN0YXJ0O1xuICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5mb3JtYXRHb2xkKGdvbGRTdGFydCk7XG5cbiAgICAgICAgdmFyIHN0ZXBzID0gMTA7XG4gICAgICAgIHZhciBkZWx0YUdvbGRBZGQgPSBNYXRoLmZsb29yKGdvbGRBZGQgLyBzdGVwcyk7XG5cbiAgICAgICAgdmFyIHJlcCA9IGNjLnJlcGVhdChcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjA1KSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdvbGRTdGFydCArPSBkZWx0YUdvbGRBZGQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoZ29sZEFkZCA+IDAgPyBcIitcIiA6IFwiXCIpICsgdGhpcy5mb3JtYXRHb2xkKGdvbGRTdGFydCk7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICApLCBzdGVwcyk7XG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShyZXAsIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIGdvbGRTdGFydCA9IGdvbGRFbmQ7XG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gKGdvbGRBZGQgPiAwID8gXCIrXCIgOiBcIlwiKSArIHRoaXMuZm9ybWF0R29sZChnb2xkU3RhcnQpO1xuICAgICAgICB9KSk7XG4gICAgICAgIG5vZGUucnVuQWN0aW9uKHNlcSk7XG4gICAgfVxuXG4gICAgZm9ybWF0R29sZChwcmljZSkge1xuICAgICAgICByZXR1cm4gcHJpY2UudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIi5cIik7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==