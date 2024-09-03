"use strict";
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