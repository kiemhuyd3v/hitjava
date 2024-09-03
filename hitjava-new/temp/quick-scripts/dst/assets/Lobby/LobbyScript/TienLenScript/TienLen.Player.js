
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLlBsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBbUQ7QUFDbkQsNENBQXVDO0FBQ3ZDLGdEQUEyQztBQUMzQywrQ0FBa0M7QUFDbEMsNkNBQWdDO0FBRzFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUssVUFJSjtBQUpELFdBQUssVUFBVTtJQUNYLGlEQUFXLENBQUE7SUFDWCxpREFBVyxDQUFBO0lBQ1gsK0NBQVUsQ0FBQTtBQUNkLENBQUMsRUFKSSxVQUFVLEtBQVYsVUFBVSxRQUlkO0FBR0Q7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUFtUkM7UUFoUkcsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFFdkIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFnQixJQUFJLENBQUM7UUFHaEMsa0JBQVksR0FBZ0IsSUFBSSxDQUFDO1FBR2pDLGdCQUFVLEdBQW9CLEVBQUUsQ0FBQztRQUVqQyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsWUFBTSxHQUFHLEtB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QUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLGVBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0Q7YUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQzVCLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxF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QyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNXO0lBdkNaLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtUjFCO0lBQUQsYUFBQztDQW5SRCxBQW1SQyxDQW5SbUMsRUFBRSxDQUFDLFNBQVMsR0FtUi9DO2tCQW5Sb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9UaWVuTGVuLkNhcmRcIjtcbmltcG9ydCBSZXMgZnJvbSBcIi4vVGllbkxlbi5SZXNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuZW51bSBTVEFURV9HQU1FIHtcbiAgICBXQUlUSU5HID0gMCxcbiAgICBQTEFZSU5HID0gMSxcbiAgICBGSU5JU0ggPSAyLFxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxOaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxDb2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBhdmF0YXI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBjYXJkOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxDYXJkUmVtYWluOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICB0aW1lUmVtYWluOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlN0YXR1czogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNhcmRMaW5lOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXRFbW90aW9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjaGF0TXNnOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNsb2NrVHVybjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYW5pbVdpbkxvc2U6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBhbmltVG9pVHJhbmc6IHNwLlNrZWxldG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQml0bWFwRm9udF0pXG4gICAgZm9udE51bWJlcjogY2MuQml0bWFwRm9udFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLkZvbnQpXG4gICAgZm9udE5vcm1hbDogY2MuRm9udCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpY19iYWNrX2dhbWU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgY2FyZERlYWwgPSBbXTtcbiAgICBpbmdhbWUgPSBmYWxzZTtcbiAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICBjaGFpckxvY2FsID0gLTE7XG4gICAgY2hhaXJJblNlcnZlciA9IC0xO1xuICAgIHR5cGUgPSAxO1xuICAgIGNhcmRzID0gW107XG4gICAgc3RhdGUgPSBTVEFURV9HQU1FLldBSVRJTkc7XG4gICAgc3RhdHVzID0gLTE7XG4gICAgaW5mbyA9IG51bGw7XG5cbiAgICBydW5SZW1haW4gPSBudWxsO1xuXG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hhdCA9IG51bGw7XG5cbiAgICBzZXRQbGF5ZXJJbmZvKGluZm8pIHtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiVExNTiBzZXRQbGF5ZXJJbmZvIDogXCIsIGluZm8pO1xuICAgICAgICB0aGlzLmxibE5pY2tuYW1lLnN0cmluZyA9IGluZm8ubmlja05hbWU7XG4gICAgICAgIHRoaXMuc2V0Q29pbihpbmZvLm1vbmV5KTtcbiAgICAgICAgaWYgKGluZm8ubmlja05hbWUgPT0gQ29uZmlncy5Mb2dpbi5OaWNrbmFtZSkge1xuICAgICAgICAgICAgdGhpcy5hdmF0YXIuc3ByaXRlRnJhbWUgPSBBcHAuaW5zdGFuY2UuZ2V0QXZhdGFyU3ByaXRlRnJhbWUoQ29uZmlncy5Mb2dpbi5BdmF0YXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICAgICAgdGhpcy5pY19iYWNrX2dhbWUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2ZmRmlyc3RDYXJkKCk7XG4gICAgICAgIHRoaXMuY2xvY2tUdXJuLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzZXRTdGF0ZVZpZXdpbmcoc3RhdGUpIHtcbiAgICAgICAgY2MuZmluZChcIi9hdmF0YXIvZmFjZVwiLCB0aGlzLm5vZGUpLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0dBTUUuV0FJVElORztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKFwixJBhbmcgWGVtXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IFNUQVRFX0dBTUUuUExBWUlORztcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzKCk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzZXRGaXJzdENhcmQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gUmVzLmdldEluc3RhbmNlKCkuZ2V0Q2FyZEZhY2UoaW5kZXgpO1xuICAgICAgICB0aGlzLmNhcmQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibENhcmRSZW1haW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvZmZGaXJzdENhcmQoKSB7XG4gICAgICAgIHRoaXMuY2FyZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhcmQuc3ByaXRlRnJhbWUgPSBSZXMuZ2V0SW5zdGFuY2UoKS5nZXRDYXJkRmFjZSg1Mik7XG4gICAgfVxuXG4gICAgc2V0Q2FyZFJlbWFpbihjYXJkU2l6ZSkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJjYXJkIHNpemU9PVwiICsgY2FyZFNpemUpO1xuICAgICAgICBpZiAoY2FyZFNpemUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgIC8vVXRpbHMuTG9nKFwiQWN0aXZlIGNhcnJkIHNpemVcIik7XG4gICAgICAgIHRoaXMuY2FyZC5zcHJpdGVGcmFtZSA9IFJlcy5nZXRJbnN0YW5jZSgpLmdldENhcmRGYWNlKDUyKTtcbiAgICAgICAgdGhpcy5jYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYmxDYXJkUmVtYWluLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYmxDYXJkUmVtYWluLnN0cmluZyA9IGNhcmRTaXplO1xuICAgIH1cblxuICAgIHNldFRpbWVSZW1haW4ocmVtYWluID0gMCkge1xuICAgICAgICBpZiAocmVtYWluID09IDApIHtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmNsb2NrVHVybik7XG4gICAgICAgICAgICB0aGlzLmNsb2NrVHVybi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvY2tUdXJuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNsb2NrVHVybi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSByZW1haW4gKyBcIlwiO1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY2xvY2tUdXJuKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2xvY2tUdXJuKVxuICAgICAgICAgICAgICAgIC5zZXQoeyBhbmdsZTogMCB9KVxuICAgICAgICAgICAgICAgIC50bygwLjI1LCB7IGFuZ2xlOiA1IH0pLnRvKDAuMjUsIHsgYW5nbGU6IDAgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBhbmdsZTogLTUgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4yNSwgeyBhbmdsZTogMCB9KVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZVJlbWFpbihyZW1haW4pO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclRpbWVSZW1haW4oKSB7XG4gICAgICAgIHRoaXMudGltZVJlbWFpbi5maWxsUmFuZ2UgPSAwO1xuICAgIH1cblxuICAgIHNldFN0YXR1cyhzdGF0dXMgPSBcIlwiKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5sYlN0YXR1cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYlN0YXR1cy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGJTdGF0dXMuZm9udFNpemUgPSAyMjtcbiAgICAgICAgdGhpcy5sYlN0YXR1cy5mb250ID0gdGhpcy5mb250Tm9ybWFsO1xuICAgICAgICB0aGlzLmxiU3RhdHVzLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKFwiI0Y3RTBBMFwiKTtcbiAgICAgICAgdmFyIHN0dCA9IHN0YXR1cy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLmxiU3RhdHVzLnN0cmluZyA9IHN0dDtcbiAgICB9XG5cbiAgICBzZXROb3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLmxiU3RhdHVzLmZvbnQgPSB0aGlzLmZvbnROb3JtYWw7XG4gICAgICAgIHRoaXMubGJTdGF0dXMubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigpLmZyb21IRVgoXCIjRjdFMEEwXCIpO1xuICAgICAgICB0aGlzLmxiU3RhdHVzLnN0cmluZyA9IGRhdGE7XG4gICAgICAgIHRoaXMubGJTdGF0dXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sYlN0YXR1cy5ub2RlKTtcbiAgICAgICAgdGhpcy5sYlN0YXR1cy5mb250U2l6ZSA9IDMyO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxiU3RhdHVzLm5vZGUpLnNldCh7IHk6IDAsIHNjYWxlOiAwIH0pLnRvKDAuMywgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KS5zdGFydCgpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGJTdGF0dXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBzZXRDb2luKGNvaW4pIHtcbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjb2luKTtcbiAgICB9XG5cbiAgICBzZXRDb2luQ2hhbmdlKGNoYW5nZSkge1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJzZXQgY29pbiBjaGFuZ2U6XCIgKyBjaGFuZ2UpO1xuICAgICAgICB0aGlzLmxiU3RhdHVzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgdGhpcy5sYlN0YXR1cy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGJTdGF0dXMuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYgKGNoYW5nZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGJTdGF0dXMuZm9udCA9IHRoaXMuZm9udE51bWJlclswXTtcbiAgICAgICAgICAgIHRoaXMubGJTdGF0dXMuc3RyaW5nID0gXCIrXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoY2hhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2UgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmxiU3RhdHVzLmZvbnQgPSB0aGlzLmZvbnROdW1iZXJbMV07XG4gICAgICAgICAgICB0aGlzLmxiU3RhdHVzLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJTdGF0dXMuc3BhY2luZ1ggPSAtMTtcbiAgICAgICAgdGhpcy5sYlN0YXR1cy5mb250U2l6ZSA9IDI1O1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5sYlN0YXR1cy5ub2RlKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5sYlN0YXR1cy5ub2RlKS5zZXQoeyB5OiAwLCBzY2FsZTogMS4wIH0pLnRvKDEuMCwgeyB5OiA2LCBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBzZXRMZWF2ZVJvb20oKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmZvID0gbnVsbDtcbiAgICB9XG4gICAgc2V0QmFja0dhbWUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pY19iYWNrX2dhbWUuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuICAgIHNldENhcmRMaW5lKGNhcmRzKSB7XG4gICAgICAgIHRoaXMuY2FyZExpbmUuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKFJlcy5nZXRJbnN0YW5jZSgpLmdldENhcmRJdGVtKCkpO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmNhcmRMaW5lO1xuICAgICAgICAgICAgaXRlbS5yZW1vdmVDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KENhcmQpLnNldENhcmREYXRhKGNhcmQpO1xuICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS54ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZExpbmUuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBzaXplID0gdGhpcy5jYXJkTGluZS5jaGlsZHJlbkNvdW50O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FyZExpbmUuY2hpbGRyZW5baV0uekluZGV4ID0gc2l6ZSAtIGk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FyZExpbmUuY2hpbGRyZW5baV0pLnRvKDAuMSAqIGksIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaW5lLmdldENvbXBvbmVudChjYy5MYXlvdXQpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuY2FyZExpbmUuY2hpbGRyZW5Db3VudDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcmRMaW5lLmNoaWxkcmVuW2ldLnpJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuY2FyZExpbmUuY2hpbGRyZW5baV0pLnRvKDAuMSAqIGksIHsgb3BhY2l0eTogMjU1IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgfVxuXG4gICAgY2xlYXJDYXJkTGluZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkTGluZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIHNob3dDaGF0RW1vdGlvbihjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hhdCk7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHNob3dDaGF0TXNnKGNvbnRlbnQpIHtcblxuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoYXQpO1xuICAgICAgICB0aGlzLmNoYXRNc2cuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcbiAgICAgICAgdGhpcy50aW1lb3V0Q2hhdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfVxuXG4gICAgaGlkZUNoYXQoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBzaG93QW5pbVdpbkxvc2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5hbmltV2luTG9zZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBhbmltTmFtZSA9IHN0YXRlID8gXCJ0aOG6r25nM1wiIDogXCJ0aHVhXCI7XG4gICAgICAgIHRoaXMuYW5pbVdpbkxvc2Uubm9kZS5zY2FsZSA9IHN0YXRlID8gMC42IDogMC43O1xuICAgICAgICBsZXQgcG9zQW5pbSA9IHN0YXRlID8gY2MudjIoMCwgLTgxKSA6IGNjLnYyKC00MCwgLTc3KTtcbiAgICAgICAgdGhpcy5hbmltV2luTG9zZS5ub2RlLnNldFBvc2l0aW9uKHBvc0FuaW0pO1xuICAgICAgICB0aGlzLmFuaW1XaW5Mb3NlLnNldEFuaW1hdGlvbigwLCBhbmltTmFtZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHNob3dBbmltVG9pVHJhbmcod2luVHlwZSkge1xuICAgICAgICBsZXQgYW5pbU5hbWUgPSBcIjUgxJFvaSB0aMOybmdcIjtcbiAgICAgICAgc3dpdGNoICh3aW5UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgYW5pbU5hbWUgPSBcInNhbmggcm9uZ1wiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgYW5pbU5hbWUgPSBcInR1IHF1eSBoYWlcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgIGFuaW1OYW1lID0gXCI1IMSRb2kgdGjDsm5nXCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBhbmltTmFtZSA9IFwiNiBkb2lcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbVRvaVRyYW5nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltVG9pVHJhbmcuc2V0QW5pbWF0aW9uKDAsIGFuaW1OYW1lLCB0cnVlKTtcbiAgICB9XG59XG4iXX0=