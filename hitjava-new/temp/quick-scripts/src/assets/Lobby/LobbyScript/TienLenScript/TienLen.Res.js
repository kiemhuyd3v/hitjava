"use strict";
cc._RF.push(module, '58801ZFBQ5OS4/DxLCGB5/q', 'TienLen.Res');
// Lobby/LobbyScript/TienLenScript/TienLen.Res.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Res = /** @class */ (function (_super) {
    __extends(Res, _super);
    function Res() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // cards = [];
        // cardItem = null;
        _this.cardItem = null;
        _this.cards = [];
        return _this;
    }
    Res_1 = Res;
    Res.getInstance = function () {
        return this.instance;
    };
    Res.prototype.onLoad = function () {
        Res_1.instance = this;
        cc.game.addPersistRootNode(Res_1.instance.node);
    };
    // constructor() {
    //     cc.loader.loadResDir("sprites/LaBai", cc.SpriteFrame, (err, sprs, urls) => {
    //         this.cards = sprs;
    //     });
    //     cc.loader.loadRes("prefabs/card/card", cc.Prefab, (err, prefab) => {
    //         this.cardItem = prefab;
    //     });
    // }
    Res.prototype.getCardFace = function (index) {
        if (index < 10)
            index = "0" + index;
        return this.cards.filter(function (card) { return card.name == ("labai_" + index); })[0];
    };
    Res.prototype.getCardItem = function () {
        return this.cardItem;
    };
    var Res_1;
    __decorate([
        property(cc.Prefab)
    ], Res.prototype, "cardItem", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Res.prototype, "cards", void 0);
    Res = Res_1 = __decorate([
        ccclass
    ], Res);
    return Res;
}(cc.Component));
exports.default = Res;

cc._RF.pop();