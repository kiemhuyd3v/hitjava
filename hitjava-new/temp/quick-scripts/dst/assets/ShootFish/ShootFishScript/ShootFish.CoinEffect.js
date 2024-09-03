
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.CoinEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5Db2luRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQWlGQztRQTlFRyxhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUVoQyxXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQzs7SUFzRTFCLENBQUM7SUFwRVUsd0JBQUcsR0FBVixVQUFXLElBQVksRUFBRSxRQUFpQixFQUFFLEtBQWM7UUFBMUQsaUJBbUVDO1FBbEVHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxlQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDbkMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzVDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDakMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQ25CLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDNUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZUFBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDM0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNsQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUNsQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQ3JCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUN0QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUM1QixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUMzQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNsQixFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNuQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNuQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFDckIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQ3RCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQzVCLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGVBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ25DLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDbEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ25DLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUNyQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFDbkIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzttREFDVTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNJO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDSTtJQVhMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FpRjlCO0lBQUQsaUJBQUM7Q0FqRkQsQUFpRkMsQ0FqRnVDLEVBQUUsQ0FBQyxTQUFTLEdBaUZuRDtrQkFqRm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvaW5FZmZlY3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgY29pbkV4cGxvcmU6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2luMDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29pbjE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvaW4yOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBydW4oY29pbjogbnVtYmVyLCBzdGFydFBvczogY2MuVmVjMiwgdG9Qb3M6IGNjLlZlYzIpIHtcbiAgICAgICAgdGhpcy5jb2luRXhwbG9yZS5ub2RlLnBvc2l0aW9uID0gc3RhcnRQb3M7XG5cbiAgICAgICAgdGhpcy5jb2luMC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmNvaW4wLnBvc2l0aW9uID0gc3RhcnRQb3MuY2xvbmUoKS5hZGQoY2MudjIoVXRpbHMucmFuZG9tUmFuZ2UoODAsIC04MCksIFV0aWxzLnJhbmRvbVJhbmdlKDgwLCAtODApKSk7XG4gICAgICAgIHRoaXMuY29pbjAuc2NhbGUgPSAwO1xuXG4gICAgICAgIHRoaXMuY29pbjEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5jb2luMS5wb3NpdGlvbiA9IHN0YXJ0UG9zLmNsb25lKCkuYWRkKGNjLnYyKFV0aWxzLnJhbmRvbVJhbmdlKDgwLCAtODApLCBVdGlscy5yYW5kb21SYW5nZSg4MCwgLTgwKSkpO1xuICAgICAgICB0aGlzLmNvaW4xLnNjYWxlID0gMDtcblxuICAgICAgICB0aGlzLmNvaW4yLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuY29pbjIucG9zaXRpb24gPSBzdGFydFBvcy5jbG9uZSgpLmFkZChjYy52MihVdGlscy5yYW5kb21SYW5nZSg4MCwgLTgwKSwgVXRpbHMucmFuZG9tUmFuZ2UoODAsIC04MCkpKTtcbiAgICAgICAgdGhpcy5jb2luMi5zY2FsZSA9IDA7XG5cbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjb2luKTtcbiAgICAgICAgdGhpcy5sYmxDb2luLm5vZGUucG9zaXRpb24gPSBzdGFydFBvcztcbiAgICAgICAgdGhpcy5sYmxDb2luLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5sYmxDb2luLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMubGJsQ29pbi5ub2RlLnNjYWxlID0gMDtcbiAgICAgICAgdGhpcy5sYmxDb2luLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2Muc3Bhd24oY2MuZmFkZUluKDAuMiksIGNjLnNjYWxlVG8oMC4yLCAxKSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCA1KSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCAtNSkpLFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMSwgbmV3IGNjLlZlYzIoMCwgNSkpLFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMSwgbmV3IGNjLlZlYzIoMCwgLTUpKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIDUpKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIC01KSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCA1KSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCAtNSkpLFxuICAgICAgICAgICAgY2MuZmFkZU91dCgwLjE1KVxuICAgICAgICApKTtcblxuICAgICAgICB0aGlzLmNvaW5FeHBsb3JlLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNvaW4wLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xNSwgVXRpbHMucmFuZG9tUmFuZ2UoMC43LCAxKSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMC40KSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIDUwKSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCAtNTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIDUwKSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCAtNTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjcsIHRvUG9zKSxcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xNSwgMClcbiAgICAgICAgKSk7XG4gICAgICAgIHRoaXMuY29pbjEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCBVdGlscy5yYW5kb21SYW5nZSgwLjcsIDEpKSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjU1KSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIDUwKSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCAtNTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIDUwKSksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMC4xLCBuZXcgY2MuVmVjMigwLCAtNTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVUbygwLjcsIHRvUG9zKSxcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xNSwgMClcbiAgICAgICAgKSk7XG4gICAgICAgIHRoaXMuY29pbjIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCBVdGlscy5yYW5kb21SYW5nZSgwLjcsIDEpKSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjcpLFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMSwgbmV3IGNjLlZlYzIoMCwgNTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIC01MCkpLFxuICAgICAgICAgICAgY2MubW92ZUJ5KDAuMSwgbmV3IGNjLlZlYzIoMCwgNTApKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgwLjEsIG5ldyBjYy5WZWMyKDAsIC01MCkpLFxuICAgICAgICAgICAgY2MubW92ZVRvKDAuNywgdG9Qb3MpLFxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjE1LCAwKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG59XG4iXX0=