
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHFFQUFnRTtBQUcxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQThJQztRQTNJRyxlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixnQkFBVSxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxDLGlCQUFXLEdBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbkMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRWpCLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTSxHQUFXLEVBQUUsQ0FBQztRQUNuQixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUFnSC9CLENBQUM7SUEvR0csc0JBQUssR0FBTDtJQUVBLENBQUM7SUFDTSxzQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7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QUM7SUF6SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNnQjtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNpQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQTFCUCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEkxQjtJQUFELGFBQUM7Q0E5SUQsQUE4SUMsQ0E5SW1DLEVBQUUsQ0FBQyxTQUFTLEdBOEkvQztrQkE5SW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5JbnZpdGU6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaW5mbzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsTmlja25hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByQXZhdGFyOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkNvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3hXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxuICAgIGNoaXBzUG9pbnQ6IGNjLlZlYzIgPSBjYy52MigwLCAwKTtcbiAgICBAcHJvcGVydHkoY2MuVmVjMilcbiAgICBjaGlwc1BvaW50MjogY2MuVmVjMiA9IGNjLnYyKDAsIDApO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhbmtlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY2hhdEVtb3Rpb246IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXRNc2c6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHVibGljIG5pY2tuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHB1YmxpYyBhdmF0YXI6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSB0aW1lb3V0Q2hhdCA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgXG4gICAgfVxuICAgIHB1YmxpYyBsZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuYnRuSW52aXRlKSB0aGlzLmJ0bkludml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmluZm8pIHRoaXMuaW5mby5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYkNvaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3hXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmFua2VyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KG5pY2tuYW1lOiBzdHJpbmcsIGF2YXRhcjogc3RyaW5nLCBjb2luOiBudW1iZXIsIGlzQmFua2VyOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcbiAgICAgICAgdGhpcy5sYmxOaWNrbmFtZS5zdHJpbmcgPSBuaWNrbmFtZTtcbiAgICAgICAgaWYgKHRoaXMubGJsTmlja25hbWUuc3RyaW5nLmxlbmd0aCA+IDE0KSB7XG4gICAgICAgICAgICB0aGlzLmxibE5pY2tuYW1lLnN0cmluZyA9IHRoaXMubGJsTmlja25hbWUuc3RyaW5nLnN1YnN0cmluZygwLCAxMSkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3ByQXZhdGFyLnNwcml0ZUZyYW1lID0gQXBwLmluc3RhbmNlLmdldEF2YXRhclNwcml0ZUZyYW1lKGF2YXRhcik7XG4gICAgICAgIHRoaXMuc2V0Q29pbihjb2luKTtcbiAgICAgICAgdGhpcy5iYW5rZXIuYWN0aXZlID0gaXNCYW5rZXI7XG5cbiAgICAgICAgaWYgKHRoaXMuYnRuSW52aXRlKSB0aGlzLmJ0bkludml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pbmZvKSB0aGlzLmluZm8uYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q29pbihjb2luOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE1vbmV5KGNvaW4pO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclVJKCl7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmxiQ29pbi5ub2RlKTtcbiAgICAgICAgdGhpcy5sYkNvaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3hXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dXaW5Db2luU3RyaW5nKGNvaW46IHN0cmluZykge1xuICAgICAgICB0aGlzLmxiQ29pbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYm94V2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYm94V2luLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIldpbjVcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IFwiXCIgKyAoY29pbik7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGJDb2luLm5vZGUpXG4gICAgICAgICAgICAuc2V0KHsgc2NhbGU6IDAsIHk6IC01MCB9KVxuICAgICAgICAgICAgLnRvKDEuMCwgeyBzY2FsZTogMC42LCB5OiA3MCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSlcbiAgICAgICAgICAgIC5kZWxheSg0LjApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sYkNvaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJveFdpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dXaW5Db2luKGNvaW46IG51bWJlcikge1xuICAgICAgICB0aGlzLmxiQ29pbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYm94V2luLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYm94V2luLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIldpbjVcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMubGJDb2luLnN0cmluZyA9IFwiXCIgKyBVdGlscy5mb3JtYXRNb25leShjb2luKTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5sYkNvaW4ubm9kZSlcbiAgICAgICAgICAgIC5zZXQoeyBzY2FsZTogMCwgeTogLTUwIH0pXG4gICAgICAgICAgICAudG8oMS4wLCB7IHNjYWxlOiAwLjYsIHk6IDcwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KVxuICAgICAgICAgICAgLmRlbGF5KDQuMClcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxiQ29pbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm94V2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBzaG93Q2hhdEVtb3Rpb24oY29udGVudCkge1xuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dENoYXQpO1xuICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIGNvbnRlbnQsIHRydWUpO1xuICAgICAgICB0aGlzLnRpbWVvdXRDaGF0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYXRFbW90aW9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBzaG93Q2hhdE1zZyhjb250ZW50KSB7XG5cbiAgICAgICAgdGhpcy5jaGF0RW1vdGlvbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRDaGF0KTtcbiAgICAgICAgdGhpcy5jaGF0TXNnLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMudGltZW91dENoYXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoYXRNc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDUwMDApO1xuICAgIH1cblxuICAgIGhpZGVDaGF0KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0Q2hhdCk7XG4gICAgICAgIHRoaXMuY2hhdEVtb3Rpb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hhdE1zZy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd1JlZnVuZENvaW4oY29pbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubGJDb2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ib3hXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiV2luNVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5sYkNvaW4uc3RyaW5nID0gXCJcIiArIFV0aWxzLmZvcm1hdE1vbmV5KGNvaW4pO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxiQ29pbi5ub2RlKVxuICAgICAgICAgICAgLnNldCh7IHNjYWxlOiAwLCB5OiAtNTAgfSlcbiAgICAgICAgICAgIC50bygxLjAsIHsgc2NhbGU6IDAuNiwgeTogNzAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pXG4gICAgICAgICAgICAuZGVsYXkoNC4wKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGJDb2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3hXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgIH1cbiAgXG59XG4iXX0=