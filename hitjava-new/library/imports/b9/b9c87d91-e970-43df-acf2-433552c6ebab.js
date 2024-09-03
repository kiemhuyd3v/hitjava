"use strict";
cc._RF.push(module, 'b9c872R6XBD36zyQzVSxuur', 'XocDia.Player');
// XocDia/XocDiaScript/XocDia.Player.ts

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
        _this.info = null;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.sprAvatar = null;
        _this.lbCoin = null;
        _this.boxWin = null;
        _this.chipsPoint = cc.v2(0, 0);
        _this.chipsPoint2 = cc.v2(0, 0);
        _this.banker = null;
        _this.chatEmotion = null;
        _this.chatMsg = null;
        _this.nickname = "";
        _this.avatar = "";
        _this.timeoutChat = null;
        return _this;
    }
    Player.prototype.start = function () {
    };
    Player.prototype.leave = function () {
        this.nickname = "";
        if (this.btnInvite)
            this.btnInvite.node.active = true;
        if (this.info)
            this.info.active = false;
        this.lbCoin.node.active = false;
        this.boxWin.active = false;
        this.banker.active = false;
        this.unscheduleAllCallbacks();
    };
    Player.prototype.set = function (nickname, avatar, coin, isBanker) {
        this.nickname = nickname;
        this.lblNickname.string = nickname;
        if (this.lblNickname.string.length > 14) {
            this.lblNickname.string = this.lblNickname.string.substring(0, 11) + "...";
        }
        this.sprAvatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(avatar);
        this.setCoin(coin);
        this.banker.active = isBanker;
        if (this.btnInvite)
            this.btnInvite.node.active = false;
        if (this.info)
            this.info.active = true;
    };
    Player.prototype.setCoin = function (coin) {
        this.lblCoin.string = Utils_1.default.formatMoney(coin);
    };
    Player.prototype.clearUI = function () {
        cc.Tween.stopAllByTarget(this.lbCoin.node);
        this.lbCoin.node.active = false;
        this.boxWin.active = false;
    };
    Player.prototype.showWinCoinString = function (coin) {
        var _this = this;
        this.lbCoin.node.active = true;
        this.boxWin.active = true;
        this.boxWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "Win5", true);
        this.lbCoin.string = "" + (coin);
        cc.tween(this.lbCoin.node)
            .set({ scale: 0, y: -50 })
            .to(1.0, { scale: 0.6, y: 70 }, { easing: cc.easing.backOut })
            .delay(4.0)
            .call(function () {
            _this.lbCoin.node.active = false;
            _this.boxWin.active = false;
        }).start();
    };
    Player.prototype.showWinCoin = function (coin) {
        var _this = this;
        this.lbCoin.node.active = true;
        this.boxWin.active = true;
        this.boxWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "Win5", true);
        this.lbCoin.string = "" + Utils_1.default.formatMoney(coin);
        cc.tween(this.lbCoin.node)
            .set({ scale: 0, y: -50 })
            .to(1.0, { scale: 0.6, y: 70 }, { easing: cc.easing.backOut })
            .delay(4.0)
            .call(function () {
            _this.lbCoin.node.active = false;
            _this.boxWin.active = false;
        }).start();
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
    Player.prototype.showRefundCoin = function (coin) {
        var _this = this;
        this.lbCoin.node.active = true;
        this.boxWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "Win5", true);
        this.lbCoin.string = "" + Utils_1.default.formatMoney(coin);
        cc.tween(this.lbCoin.node)
            .set({ scale: 0, y: -50 })
            .to(1.0, { scale: 0.6, y: 70 }, { easing: cc.easing.backOut })
            .delay(4.0)
            .call(function () {
            _this.lbCoin.node.active = false;
            _this.boxWin.active = false;
        }).start();
    };
    __decorate([
        property(cc.Button)
    ], Player.prototype, "btnInvite", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "info", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "sprAvatar", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lbCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "boxWin", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "chipsPoint", void 0);
    __decorate([
        property(cc.Vec2)
    ], Player.prototype, "chipsPoint2", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "banker", void 0);
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