"use strict";
cc._RF.push(module, '3e4a4YbN9FGnbtYmPvTrs9e', 'ShootFish.EffectBigWin');
// ShootFish/ShootFishScript/ShootFish.EffectBigWin.ts

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
var EffectBigWin = /** @class */ (function (_super) {
    __extends(EffectBigWin, _super);
    function EffectBigWin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeleton = null;
        _this.lblNickname = null;
        _this.lblCoin = null;
        return _this;
    }
    EffectBigWin.prototype.show = function (isShow, nickname, coin) {
        var _this = this;
        if (nickname === void 0) { nickname = null; }
        if (coin === void 0) { coin = 0; }
        this.node.stopAllActions();
        if (isShow) {
            this.lblCoin.string = Utils_1.default.formatNumber(coin);
            this.lblCoin.node.active = false;
            this.lblNickname.string = nickname;
            this.lblNickname.node.active = false;
            this.skeleton.setAnimation(0, "animation", false);
            this.node.active = true;
            this.node.runAction(cc.sequence(cc.delayTime(0.7), cc.callFunc(function () {
                _this.lblNickname.node.active = true;
                _this.lblCoin.node.active = true;
            }), cc.delayTime(3), cc.callFunc(function () {
                _this.node.active = false;
            })));
        }
        else {
            this.node.active = false;
        }
    };
    __decorate([
        property(sp.Skeleton)
    ], EffectBigWin.prototype, "skeleton", void 0);
    __decorate([
        property(cc.Label)
    ], EffectBigWin.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], EffectBigWin.prototype, "lblCoin", void 0);
    EffectBigWin = __decorate([
        ccclass
    ], EffectBigWin);
    return EffectBigWin;
}(cc.Component));
exports.default = EffectBigWin;

cc._RF.pop();