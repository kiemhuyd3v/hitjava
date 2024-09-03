
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TienLenScript/TienLen.Playerz.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00490qIEBlApIH/wOluLBYt', 'TienLen.Playerz');
// Lobby/LobbyScript/TienLenScript/TienLen.Playerz.ts

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
var App_1 = require("../Script/common/App");
var Utils_1 = require("../Script/common/Utils");
var TienLen_Card_1 = require("./TienLen.Card");
var TienLen_Resz_1 = require("./TienLen.Resz");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
        _this.ingame = false;
        _this.active = false;
        _this.chairLocal = -1;
        _this.chairInServer = -1;
        _this.type = 1;
        _this.cards = [];
        _this.state = 0;
        _this.status = -1;
        _this.info = null;
        _this.runRemain = null;
        _this.timeoutChat = null;
        return _this;
    }
    Player.prototype.setPlayerInfo = function (info) {
        //  cc.log("TLMN setPlayerInfo : ", info);
        this.lblNickname.string = info.nickName;
        this.setCoin(info.money);
        this.avatar.spriteFrame = App_1.default.instance.getAvatarSpriteFrame(info.avatar);
        this.node.active = true;
        this.active = true;
        this.info = info;
        this.offFirstCard();
    };
    Player.prototype.setFirstCard = function (index) {
        this.card.spriteFrame = TienLen_Resz_1.default.getInstance().getCardFace(index);
        this.card.node.active = true;
        this.lblCardRemain.node.active = false;
    };
    Player.prototype.offFirstCard = function () {
        this.card.node.active = false;
        this.card.spriteFrame = TienLen_Resz_1.default.getInstance().getCardFace(52);
    };
    Player.prototype.setCardRemain = function (cardSize) {
        if (cardSize == 0) {
            this.card.node.active = false;
            return;
        }
        this.card.spriteFrame = TienLen_Resz_1.default.getInstance().getCardFace(52);
        this.card.node.active = true;
        this.lblCardRemain.node.active = true;
        this.lblCardRemain.string = cardSize;
    };
    Player.prototype.setTimeRemain = function (remain) {
        if (remain === void 0) { remain = 0; }
        //  cc.log("OOOOOOOOOOOOOOOO : ", remain);
        if (remain == 0) {
            clearInterval(this.runRemain);
            this.timeRemain.fillRange = 0;
            return;
        }
        else {
            var refresh = 100;
            var step = refresh / remain / 1000;
            var sefl = this;
            var change = function () {
                if (!sefl || !sefl.timeRemain)
                    return;
                if (sefl.timeRemain.fillRange <= 0) {
                    clearInterval(sefl.runRemain);
                    sefl.timeRemain.fillRange = 0;
                    return;
                }
                sefl.timeRemain.fillRange -= step;
            };
            this.timeRemain.fillRange = 1;
            this.runRemain = setInterval(change, refresh);
        }
    };
    Player.prototype.clearTimeRemain = function () {
        this.timeRemain.fillRange = 0;
    };
    Player.prototype.setStatus = function (status) {
        if (status === void 0) { status = ""; }
        var stt = status.toUpperCase();
        this.lbStatus.string = stt;
    };
    Player.prototype.setNotify = function (data) {
        var _this = this;
        this.lbStatus.string = data;
        setTimeout(function () {
            _this.lbStatus.string = "";
        }, 1000);
    };
    Player.prototype.setCoin = function (coin) {
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
    };
    Player.prototype.setCoinChange = function (change) {
        if (change > 0) {
            //  cc.log("GGGG hide setCoinChange change : ", change);
            this.lbStatus.node.active = true;
            this.lbStatus.string = "+" + Utils_1.default.formatNumber(change);
        }
        else if (change < 0) {
            this.lbStatus.node.active = true;
            this.lbStatus.string = Utils_1.default.formatNumber(change);
        }
    };
    Player.prototype.setLeaveRoom = function () {
        this.node.active = false;
        this.active = false;
        this.info = null;
    };
    Player.prototype.setCardLine = function (cards) {
        var _this = this;
        cards.forEach(function (card) {
            var item = cc.instantiate(TienLen_Resz_1.default.getInstance().getCardItem());
            item.parent = _this.cardLine;
            item.removeComponent(cc.Button);
            item.getComponent(TienLen_Card_1.default).setCardData(card);
        });
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
        this.chatMsg.children[1].getComponent(cc.Label).string = content;
        this.timeoutChat = setTimeout(function () {
            _this.chatEmotion.active = false;
            _this.chatMsg.active = false;
        }, 3000);
    };
    Player.prototype.hideChat = function () {
        clearTimeout(this.timeoutChat);
        this.chatEmotion.active = false;
        this.chatMsg.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUaWVuTGVuU2NyaXB0XFxUaWVuTGVuLlBsYXllcnoudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNENBQXVDO0FBQ3ZDLGdEQUEyQztBQUMzQywrQ0FBa0M7QUFDbEMsK0NBQWlDO0FBRTNCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOEtDO1FBM0tHLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTdCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoQixtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25CLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFlBQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNaLFVBQUksR0FBRyxJQUFJLENBQUE7UUFFWCxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRVQsaUJBQVcsR0FBRyxJQUFJLENBQUM7O0lBMEkvQixDQUFDO0lBeElHLDhCQUFhLEdBQWIsVUFBYyxJ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Q007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswQ0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDUztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNNO0lBdEJQLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E4SzFCO0lBQUQsYUFBQztDQTlLRCxBQThLQyxDQTlLbUMsRUFBRSxDQUFDLFNBQVMsR0E4Sy9DO2tCQTlLb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9UaWVuTGVuLkNhcmRcIjtcbmltcG9ydCBSZXMgZnJvbSBcIi4vVGllbkxlbi5SZXN6XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibE5pY2tuYW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGF2YXRhcjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIGNhcmQ6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENhcmRSZW1haW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHRpbWVSZW1haW46IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiU3RhdHVzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2FyZExpbmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhdEVtb3Rpb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXRNc2c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgaW5nYW1lID0gZmFsc2U7XG4gICAgYWN0aXZlID0gZmFsc2U7XG4gICAgY2hhaXJMb2NhbCA9IC0xO1xuICAgIGNoYWlySW5TZXJ2ZXIgPSAtMTtcbiAgICB0eXBlID0gMTtcbiAgICBjYXJkcyA9IFtdO1xuICAgIHN0YXRlID0gMDtcbiAgICBzdGF0dXMgPSAtMTtcbiAgICBpbmZvID0gbnVsbFxuXG4gICAgcnVuUmVtYWluID0gbnVsbDtcblxuICAgIHByaXZhdGUgdGltZW91dENoYXQgPSBudWxsO1xuXG4gICAgc2V0UGxheWVySW5mbyhpbmZvKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJUTE1OIHNldFBsYXllckluZm8gOiBcIiwgaW5mbyk7XG4gICAgICAgIHRoaXMubGJsTmlja25hbWUuc3RyaW5nID0gaW5mby5uaWNrTmFtZTtcbiAgICAgICAgdGhpcy5zZXRDb2luKGluZm8ubW9uZXkpO1xuICAgICAgICB0aGlzLmF2YXRhci5zcHJpdGVGcmFtZSA9IEFwcC5pbnN0YW5jZS5nZXRBdmF0YXJTcHJpdGVGcmFtZShpbmZvLmF2YXRhcik7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmZvID0gaW5mbztcbiAgICAgICAgdGhpcy5vZmZGaXJzdENhcmQoKTtcbiAgICB9XG5cbiAgICBzZXRGaXJzdENhcmQoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gUmVzLmdldEluc3RhbmNlKCkuZ2V0Q2FyZEZhY2UoaW5kZXgpO1xuICAgICAgICB0aGlzLmNhcmQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibENhcmRSZW1haW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvZmZGaXJzdENhcmQoKSB7XG4gICAgICAgIHRoaXMuY2FyZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhcmQuc3ByaXRlRnJhbWUgPSBSZXMuZ2V0SW5zdGFuY2UoKS5nZXRDYXJkRmFjZSg1Mik7XG4gICAgfVxuXG4gICAgc2V0Q2FyZFJlbWFpbihjYXJkU2l6ZSkge1xuICAgICAgICBpZiAoY2FyZFNpemUgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5jYXJkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gUmVzLmdldEluc3RhbmNlKCkuZ2V0Q2FyZEZhY2UoNTIpO1xuICAgICAgICB0aGlzLmNhcmQubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibENhcmRSZW1haW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibENhcmRSZW1haW4uc3RyaW5nID0gY2FyZFNpemU7XG4gICAgfVxuXG4gICAgc2V0VGltZVJlbWFpbihyZW1haW4gPSAwKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJPT09PT09PT09PT09PT09PIDogXCIsIHJlbWFpbik7XG4gICAgICAgIGlmIChyZW1haW4gPT0gMCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnJ1blJlbWFpbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVSZW1haW4uZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZWZyZXNoID0gMTAwO1xuICAgICAgICAgICAgdmFyIHN0ZXAgPSByZWZyZXNoIC8gcmVtYWluIC8gMTAwMDtcbiAgICAgICAgICAgIHZhciBzZWZsID0gdGhpcztcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzZWZsIHx8ICFzZWZsLnRpbWVSZW1haW4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoc2VmbC50aW1lUmVtYWluLmZpbGxSYW5nZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2VmbC5ydW5SZW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBzZWZsLnRpbWVSZW1haW4uZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWZsLnRpbWVSZW1haW4uZmlsbFJhbmdlIC09IHN0ZXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRpbWVSZW1haW4uZmlsbFJhbmdlID0gMTtcbiAgICAgICAgICAgIHRoaXMucnVuUmVtYWluID0gc2V0SW50ZXJ2YWwoY2hhbmdlLCByZWZyZXNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyVGltZVJlbWFpbigpIHtcbiAgICAgICAgdGhpcy50aW1lUmVtYWluLmZpbGxSYW5nZSA9IDA7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzKHN0YXR1cyA9IFwiXCIpIHtcbiAgICAgICAgdmFyIHN0dCA9IHN0YXR1cy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB0aGlzLmxiU3RhdHVzLnN0cmluZyA9IHN0dDtcbiAgICB9XG5cbiAgICBzZXROb3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLmxiU3RhdHVzLnN0cmluZyA9IGRhdGE7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYlN0YXR1cy5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHNldENvaW4oY29pbikge1xuICAgICAgICB0aGlzLmxibENvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGNvaW4pO1xuICAgIH1cblxuICAgIHNldENvaW5DaGFuZ2UoY2hhbmdlKSB7XG4gICAgICAgIGlmIChjaGFuZ2UgPiAwKSB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiR0dHRyBoaWRlIHNldENvaW5DaGFuZ2UgY2hhbmdlIDogXCIsIGNoYW5nZSk7XG4gICAgICAgICAgICB0aGlzLmxiU3RhdHVzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJTdGF0dXMuc3RyaW5nID0gXCIrXCIgKyBVdGlscy5mb3JtYXROdW1iZXIoY2hhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFuZ2UgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmxiU3RhdHVzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJTdGF0dXMuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGNoYW5nZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRMZWF2ZVJvb20oKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbmZvID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRDYXJkTGluZShjYXJkcykge1xuICAgICAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShSZXMuZ2V0SW5zdGFuY2UoKS5nZXRDYXJkSXRlbSgpKTtcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gdGhpcy5jYXJkTGluZTtcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChDYXJkKS5zZXRDYXJkRGF0YShjYXJkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJDYXJkTGluZSgpIHtcbiAgICAgICAgdGhpcy5jYXJkTGluZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIH1cblxuICAgIHNob3dDaGF0RW1vdGlvbihjb250ZW50KSB7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hhdCk7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHNob3dDaGF0TXNnKGNvbnRlbnQpIHtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcbiAgICAgICAgdGhpcy50aW1lb3V0Q2hhdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgaGlkZUNoYXQoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cblxuXG4iXX0=