"use strict";
cc._RF.push(module, 'f3de4Savp5BHqfZYOvwMNmn', 'ShootFish.CoinEffect');
// ShootFish/ShootFishScript/ShootFish.CoinEffect.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CoinEffect = /** @class */ (function (_super) {
    __extends(CoinEffect, _super);
    function CoinEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblCoin = null;
        _this.coinExplore = null;
        _this.coin0 = null;
        _this.coin1 = null;
        _this.coin2 = null;
        return _this;
    }
    CoinEffect.prototype.run = function (coin, startPos, toPos) {
        var _this = this;
        this.coinExplore.node.position = startPos;
        this.coin0.stopAllActions();
        this.coin0.position = startPos.clone().add(cc.v2(Utils_1.default.randomRange(80, -80), Utils_1.default.randomRange(80, -80)));
        this.coin0.scale = 0;
        this.coin1.stopAllActions();
        this.coin1.position = startPos.clone().add(cc.v2(Utils_1.default.randomRange(80, -80), Utils_1.default.randomRange(80, -80)));
        this.coin1.scale = 0;
        this.coin2.stopAllActions();
        this.coin2.position = startPos.clone().add(cc.v2(Utils_1.default.randomRange(80, -80), Utils_1.default.randomRange(80, -80)));
        this.coin2.scale = 0;
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
        this.lblCoin.node.position = startPos;
        this.lblCoin.node.stopAllActions();
        this.lblCoin.node.opacity = 0;
        this.lblCoin.node.scale = 0;
        this.lblCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(0.2), cc.scaleTo(0.2, 1)), cc.moveBy(0.1, new cc.Vec2(0, 5)), cc.moveBy(0.1, new cc.Vec2(0, -5)), cc.moveBy(0.1, new cc.Vec2(0, 5)), cc.moveBy(0.1, new cc.Vec2(0, -5)), cc.moveBy(0.1, new cc.Vec2(0, 5)), cc.moveBy(0.1, new cc.Vec2(0, -5)), cc.moveBy(0.1, new cc.Vec2(0, 5)), cc.moveBy(0.1, new cc.Vec2(0, -5)), cc.fadeOut(0.15)));
        this.coinExplore.setAnimation(0, "Idle", false);
        this.coin0.runAction(cc.sequence(cc.scaleTo(0.15, Utils_1.default.randomRange(0.7, 1)), cc.delayTime(0.4), cc.moveBy(0.1, new cc.Vec2(0, 50)), cc.moveBy(0.1, new cc.Vec2(0, -50)), cc.moveBy(0.1, new cc.Vec2(0, 50)), cc.moveBy(0.1, new cc.Vec2(0, -50)), cc.moveTo(0.7, toPos), cc.scaleTo(0.15, 0)));
        this.coin1.runAction(cc.sequence(cc.scaleTo(0.15, Utils_1.default.randomRange(0.7, 1)), cc.delayTime(0.55), cc.moveBy(0.1, new cc.Vec2(0, 50)), cc.moveBy(0.1, new cc.Vec2(0, -50)), cc.moveBy(0.1, new cc.Vec2(0, 50)), cc.moveBy(0.1, new cc.Vec2(0, -50)), cc.moveTo(0.7, toPos), cc.scaleTo(0.15, 0)));
        this.coin2.runAction(cc.sequence(cc.scaleTo(0.15, Utils_1.default.randomRange(0.7, 1)), cc.delayTime(0.7), cc.moveBy(0.1, new cc.Vec2(0, 50)), cc.moveBy(0.1, new cc.Vec2(0, -50)), cc.moveBy(0.1, new cc.Vec2(0, 50)), cc.moveBy(0.1, new cc.Vec2(0, -50)), cc.moveTo(0.7, toPos), cc.scaleTo(0.15, 0), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    __decorate([
        property(cc.Label)
    ], CoinEffect.prototype, "lblCoin", void 0);
    __decorate([
        property(sp.Skeleton)
    ], CoinEffect.prototype, "coinExplore", void 0);
    __decorate([
        property(cc.Node)
    ], CoinEffect.prototype, "coin0", void 0);
    __decorate([
        property(cc.Node)
    ], CoinEffect.prototype, "coin1", void 0);
    __decorate([
        property(cc.Node)
    ], CoinEffect.prototype, "coin2", void 0);
    CoinEffect = __decorate([
        ccclass
    ], CoinEffect);
    return CoinEffect;
}(cc.Component));
exports.default = CoinEffect;

cc._RF.pop();