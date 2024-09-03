
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/TabMenuGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a998AUPGFBK7L6mmSVzFP+', 'TabMenuGame');
// Lobby/LobbyScript/TabMenuGame.ts

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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lobby_TabsListGame_1 = require("./Lobby.TabsListGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabMenuGame = /** @class */ (function (_super) {
    __extends(TabMenuGame, _super);
    function TabMenuGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabGameSport = null;
        _this.tabGameLive = null;
        _this.tabGameSlot = null;
        _this.tabGameMini = null;
        _this.tabGameCard = null;
        _this.contentScroll = null;
        _this.listTab = [];
        _this.listToggle = [];
        _this.listAllGame = [];
        _this.listLiveGame = [];
        _this.listSlotGame = [];
        _this.listCardGame = [];
        _this.listMiniGame = [];
        _this.listGameSport = [];
        _this.tabListGame = null;
        _this.index = 0;
        return _this;
    }
    TabMenuGame.prototype.onBtnTabAll = function () {
        this.tabGameSport.setSiblingIndex(4);
        this.tabGameLive.setSiblingIndex(0);
        this.tabGameSlot.setSiblingIndex(2);
        this.tabGameMini.setSiblingIndex(1);
        this.tabGameCard.setSiblingIndex(3);
        this.contentScroll.content.position = new cc.Vec3(-2000, 0, 0);
        this.contentScroll.scrollToPercentHorizontal(0, .8);
    };
    TabMenuGame.prototype.onBtnTabSport = function () {
        this.tabGameSport.setSiblingIndex(0);
        this.contentScroll.content.position = new cc.Vec3(-2000, 0, 0);
        this.contentScroll.scrollToPercentHorizontal(0, .8);
    };
    TabMenuGame.prototype.onBtnTabLive = function () {
        this.tabGameLive.setSiblingIndex(0);
        this.contentScroll.content.position = new cc.Vec3(-2000, 0, 0);
        this.contentScroll.scrollToPercentHorizontal(0, .8);
    };
    TabMenuGame.prototype.onBtnTabSlot = function () {
        this.tabGameSlot.setSiblingIndex(0);
        this.contentScroll.content.position = new cc.Vec3(-2000, 0, 0);
        this.contentScroll.scrollToPercentHorizontal(0, .8);
    };
    TabMenuGame.prototype.onBtnTabMini = function () {
        this.tabGameMini.setSiblingIndex(0);
        this.contentScroll.content.position = new cc.Vec3(-2000, 0, 0);
        this.contentScroll.scrollToPercentHorizontal(0, .8);
    };
    TabMenuGame.prototype.onBtnTabCard = function () {
        this.tabGameCard.setSiblingIndex(0);
        this.contentScroll.content.position = new cc.Vec3(-2000, 0, 0);
        this.contentScroll.scrollToPercentHorizontal(0, .8);
    };
    TabMenuGame.prototype.start = function () {
        var _a, _b, _c, _d, _e;
        this.index = 0;
        this.onBtnChangeTab(null, this.index);
        (_a = this.listAllGame).push.apply(_a, __spread(this.listLiveGame));
        (_b = this.listAllGame).push.apply(_b, __spread(this.listCardGame));
        (_c = this.listAllGame).push.apply(_c, __spread(this.listMiniGame));
        (_d = this.listAllGame).push.apply(_d, __spread(this.listSlotGame));
        (_e = this.listAllGame).push.apply(_e, __spread(this.listGameSport));
    };
    TabMenuGame.prototype.onBtnChangeTab = function (obj, param) {
        var _this = this;
        if (this.index == param)
            return;
        this.listToggle[this.index].isChecked = false;
        this.listToggle[param].isChecked = true;
        this.index = param;
        this.listAllGame.forEach(function (item) {
            item.active = false;
            item.opacity = 0;
        });
        var listGame = [];
        switch (param) {
            case "0":
                listGame = this.listAllGame;
                break;
            case "1":
                listGame = this.listMiniGame;
                break;
            case "2":
                listGame = this.listCardGame;
                break;
            case "3":
                listGame = this.listSlotGame;
                break;
            case "4":
                listGame = this.listLiveGame;
                break;
            case "5":
                cc.log("parammm==", this.listGameSport);
                listGame = this.listGameSport;
                break;
        }
        listGame.forEach(function (item) {
            item.active = true;
            cc.tween(item).to(0.3, { opacity: 255 }, { easing: cc.easing.sineIn }).start();
        });
        setTimeout(function () {
            _this.tabListGame.changeTabGame();
            _this.tabListGame.onScrollEvent();
        }, 50);
    };
    __decorate([
        property(cc.Node)
    ], TabMenuGame.prototype, "tabGameSport", void 0);
    __decorate([
        property(cc.Node)
    ], TabMenuGame.prototype, "tabGameLive", void 0);
    __decorate([
        property(cc.Node)
    ], TabMenuGame.prototype, "tabGameSlot", void 0);
    __decorate([
        property(cc.Node)
    ], TabMenuGame.prototype, "tabGameMini", void 0);
    __decorate([
        property(cc.Node)
    ], TabMenuGame.prototype, "tabGameCard", void 0);
    __decorate([
        property(cc.ScrollView)
    ], TabMenuGame.prototype, "contentScroll", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listTab", void 0);
    __decorate([
        property([cc.Toggle])
    ], TabMenuGame.prototype, "listToggle", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listAllGame", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listLiveGame", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listSlotGame", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listCardGame", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listMiniGame", void 0);
    __decorate([
        property([cc.Node])
    ], TabMenuGame.prototype, "listGameSport", void 0);
    __decorate([
        property(Lobby_TabsListGame_1.default)
    ], TabMenuGame.prototype, "tabListGame", void 0);
    TabMenuGame = __decorate([
        ccclass
    ], TabMenuGame);
    return TabMenuGame;
}(cc.Component));
exports.default = TabMenuGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxUYWJNZW51R2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDJEQUFnRDtBQUUxQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQTZIQztRQTFIRyxrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFXLElBQUksQ0FBQztRQUUzQixtQkFBYSxHQUFpQixJQUFJLENBQUM7UUFHbkMsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUd4QixnQkFBVSxHQUFnQixFQUFFLENBQUM7UUFHN0IsaUJBQVcsR0FBYyxFQUFFLENBQUM7UUFFNUIsa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0Isa0JBQVksR0FBYyxFQUFFLENBQUM7UUFFN0IsbUJBQWEsR0FBYyxFQUFFLENBQUM7UUFFOUIsaUJBQVcsR0FBaUIsSUFBSSxDQUFDO1FBc0N6QixXQUFLLEdBQUcsQ0FBQyxDQUFDOztJQXFEdEIsQ0FBQztJQXpGRyxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdB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QUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dEQUNJO0lBR3hCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO21EQUNPO0lBRzdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO29EQUNRO0lBRTVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLDRCQUFZLENBQUM7b0RBQ1U7SUFsQ2hCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E2SC9CO0lBQUQsa0JBQUM7Q0E3SEQsQUE2SEMsQ0E3SHdDLEVBQUUsQ0FBQyxTQUFTLEdBNkhwRDtrQkE3SG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFRhYnNMaXN0R2FtZSBmcm9tIFwiLi9Mb2JieS5UYWJzTGlzdEdhbWVcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYk1lbnVHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYkdhbWVTcG9ydDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFiR2FtZUxpdmUgOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YWJHYW1lU2xvdCA6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYkdhbWVNaW5pOmNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHRhYkdhbWVDYXJkOmNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICAgIGNvbnRlbnRTY3JvbGw6Y2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGxpc3RUYWI6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5Ub2dnbGVdKVxuICAgIGxpc3RUb2dnbGU6IGNjLlRvZ2dsZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGxpc3RBbGxHYW1lOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGxpc3RMaXZlR2FtZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBsaXN0U2xvdEdhbWU6IGNjLk5vZGVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgbGlzdENhcmRHYW1lOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGxpc3RNaW5pR2FtZTogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBsaXN0R2FtZVNwb3J0OiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoVGFic0xpc3RHYW1lKVxuICAgIHRhYkxpc3RHYW1lOiBUYWJzTGlzdEdhbWUgPSBudWxsO1xuXG4gICAgb25CdG5UYWJBbGwoKXtcbiAgICAgICAgdGhpcy50YWJHYW1lU3BvcnQuc2V0U2libGluZ0luZGV4KDQpO1xuICAgICAgICB0aGlzLnRhYkdhbWVMaXZlLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgdGhpcy50YWJHYW1lU2xvdC5zZXRTaWJsaW5nSW5kZXgoMik7XG4gICAgICAgIHRoaXMudGFiR2FtZU1pbmkuc2V0U2libGluZ0luZGV4KDEpO1xuICAgICAgICB0aGlzLnRhYkdhbWVDYXJkLnNldFNpYmxpbmdJbmRleCgzKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsLmNvbnRlbnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygtMjAwMCwwLDApO1xuICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGwuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCgwLCAuOCk7XG4gICAgfVxuXG4gICAgb25CdG5UYWJTcG9ydCgpe1xuICAgICAgICB0aGlzLnRhYkdhbWVTcG9ydC5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgICAgIHRoaXMuY29udGVudFNjcm9sbC5jb250ZW50LnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoLTIwMDAsMCwwKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsLnNjcm9sbFRvUGVyY2VudEhvcml6b250YWwoMCwgLjgpO1xuICAgIH1cblxuICAgIG9uQnRuVGFiTGl2ZSgpe1xuICAgICAgICB0aGlzLnRhYkdhbWVMaXZlLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsLmNvbnRlbnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygtMjAwMCwwLDApO1xuICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGwuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCgwLCAuOCk7XG4gICAgfVxuICAgIG9uQnRuVGFiU2xvdCgpe1xuICAgICAgICB0aGlzLnRhYkdhbWVTbG90LnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsLmNvbnRlbnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygtMjAwMCwwLDApO1xuICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGwuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCgwLCAuOCk7XG4gICAgfVxuICAgIG9uQnRuVGFiTWluaSgpe1xuICAgICAgICB0aGlzLnRhYkdhbWVNaW5pLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsLmNvbnRlbnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygtMjAwMCwwLDApO1xuICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGwuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCgwLCAuOCk7XG4gICAgfVxuICAgIG9uQnRuVGFiQ2FyZCgpe1xuICAgICAgICB0aGlzLnRhYkdhbWVDYXJkLnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsLmNvbnRlbnQucG9zaXRpb24gPSBuZXcgY2MuVmVjMygtMjAwMCwwLDApO1xuICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGwuc2Nyb2xsVG9QZXJjZW50SG9yaXpvbnRhbCgwLCAuOCk7XG4gICAgfVxuICAgIHByaXZhdGUgaW5kZXggPSAwO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5vbkJ0bkNoYW5nZVRhYihudWxsLCB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5saXN0QWxsR2FtZS5wdXNoKC4uLnRoaXMubGlzdExpdmVHYW1lKTtcbiAgICAgICAgdGhpcy5saXN0QWxsR2FtZS5wdXNoKC4uLnRoaXMubGlzdENhcmRHYW1lKTtcbiAgICAgICAgdGhpcy5saXN0QWxsR2FtZS5wdXNoKC4uLnRoaXMubGlzdE1pbmlHYW1lKTtcbiAgICAgICAgdGhpcy5saXN0QWxsR2FtZS5wdXNoKC4uLnRoaXMubGlzdFNsb3RHYW1lKTtcbiAgICAgICAgdGhpcy5saXN0QWxsR2FtZS5wdXNoKC4uLnRoaXMubGlzdEdhbWVTcG9ydCk7XG4gICAgfVxuXG4gICAgb25CdG5DaGFuZ2VUYWIob2JqLCBwYXJhbSkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA9PSBwYXJhbSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxpc3RUb2dnbGVbdGhpcy5pbmRleF0uaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGlzdFRvZ2dsZVtwYXJhbV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHBhcmFtO1xuICAgICAgICB0aGlzLmxpc3RBbGxHYW1lLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGxpc3RHYW1lID0gW107XG4gICAgICAgIHN3aXRjaCAocGFyYW0pIHtcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XG4gICAgICAgICAgICAgICAgbGlzdEdhbWUgPSB0aGlzLmxpc3RBbGxHYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgICAgICAgICBsaXN0R2FtZSA9IHRoaXMubGlzdE1pbmlHYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgICAgICAgICBsaXN0R2FtZSA9IHRoaXMubGlzdENhcmRHYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgICAgICAgICBsaXN0R2FtZSA9IHRoaXMubGlzdFNsb3RHYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgICAgICAgICBsaXN0R2FtZSA9IHRoaXMubGlzdExpdmVHYW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJwYXJhbW1tPT1cIiwgdGhpcy5saXN0R2FtZVNwb3J0KTtcbiAgICAgICAgICAgICAgICBsaXN0R2FtZSA9IHRoaXMubGlzdEdhbWVTcG9ydDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RHYW1lLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGl0ZW0pLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lSW4gfSkuc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50YWJMaXN0R2FtZS5jaGFuZ2VUYWJHYW1lKCk7XG4gICAgICAgICAgICB0aGlzLnRhYkxpc3RHYW1lLm9uU2Nyb2xsRXZlbnQoKTtcbiAgICAgICAgfSwgNTApO1xuXG4gICAgfVxufVxuIl19