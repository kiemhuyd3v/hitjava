
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.EffectBigWin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5FZmZlY3RCaWdXaW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBRTFELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBbUNDO1FBaENHLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRTdCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGFBQU8sR0FBYSxJQUFJLENBQUM7O0lBNEI3QixDQUFDO0lBMUJVLDJCQUFJLEdBQVgsVUFBWSxNQUFlLEVBQUUsUUFBdUIsRUFBRSxJQUFnQjtRQUF0RSxpQkF5QkM7UUF6QjRCLHlCQUFBLEVBQUEsZUFBdUI7UUFBRSxxQkFBQSxFQUFBLFFBQWdCO1FBQ2xFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsSUFBRyxNQUFNLEVBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFFckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVsRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDM0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDUixLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDUixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFBO1NBQ0w7YUFBSTtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUEvQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztrREFDTztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ007SUFQUixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUNoQztJQUFELG1CQUFDO0NBbkNELEFBbUNDLENBbkN5QyxFQUFFLENBQUMsU0FBUyxHQW1DckQ7a0JBbkNvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0QmlnV2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBza2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxOaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxDb2luOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwdWJsaWMgc2hvdyhpc1Nob3c6IGJvb2xlYW4sIG5pY2tuYW1lOiBzdHJpbmcgPSBudWxsLCBjb2luOiBudW1iZXIgPSAwKXtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGlmKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLmxibENvaW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGNvaW4pO1xuICAgICAgICAgICAgdGhpcy5sYmxDb2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxibE5pY2tuYW1lLnN0cmluZyA9IG5pY2tuYW1lO1xuICAgICAgICAgICAgdGhpcy5sYmxOaWNrbmFtZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5za2VsZXRvbi5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgIFxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjcpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsTmlja25hbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibENvaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgzKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19