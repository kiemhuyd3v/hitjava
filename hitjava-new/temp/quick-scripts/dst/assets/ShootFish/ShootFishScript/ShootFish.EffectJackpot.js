
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.EffectJackpot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ce53aga3XZMIaymrxUZy+Ja', 'ShootFish.EffectJackpot');
// ShootFish/ShootFishScript/ShootFish.EffectJackpot.ts

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
var EffectJackpot = /** @class */ (function (_super) {
    __extends(EffectJackpot, _super);
    function EffectJackpot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeletons = [];
        _this.lblNickname = null;
        _this.lblCoin = null;
        return _this;
    }
    EffectJackpot.prototype.show = function (isShow, nickname, coin) {
        var _this = this;
        if (nickname === void 0) { nickname = null; }
        if (coin === void 0) { coin = 0; }
        this.node.stopAllActions();
        if (isShow) {
            this.lblCoin.string = Utils_1.default.formatNumber(coin);
            this.lblCoin.node.active = false;
            this.lblNickname.string = nickname;
            this.lblNickname.node.active = false;
            for (var i = 0; i < this.skeletons.length; i++) {
                this.skeletons[i].setAnimation(0, "Idle", false);
            }
            this.node.active = true;
            this.node.runAction(cc.sequence(cc.delayTime(0.7), cc.callFunc(function () {
                _this.lblNickname.node.active = true;
                _this.lblCoin.node.active = true;
            }), cc.delayTime(5), cc.callFunc(function () {
                _this.node.active = false;
            })));
        }
        else {
            this.node.active = false;
        }
    };
    __decorate([
        property([sp.Skeleton])
    ], EffectJackpot.prototype, "skeletons", void 0);
    __decorate([
        property(cc.Label)
    ], EffectJackpot.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], EffectJackpot.prototype, "lblCoin", void 0);
    EffectJackpot = __decorate([
        ccclass
    ], EffectJackpot);
    return EffectJackpot;
}(cc.Component));
exports.default = EffectJackpot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5FZmZlY3RKYWNrcG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQXFDQztRQWxDRyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUU5QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixhQUFPLEdBQWEsSUFBSSxDQUFDOztJQThCN0IsQ0FBQztJQTVCVSw0QkFBSSxHQUFYLFVBQVksTUFBZSxFQUFFLFFBQXVCLEVBQUUsSUFBZ0I7UUFBdEUsaUJBMkJDO1FBM0I0Qix5QkFBQSxFQUFBLGVBQXVCO1FBQUUscUJBQUEsRUFBQSxRQUFnQjtRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUcsTUFBTSxFQUFDO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXJDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQztnQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNwRDtZQUVELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUMzQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEMsQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FDTCxDQUFDLENBQUE7U0FDTDthQUFJO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQWpDRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvREFDTTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ007SUFQUixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUNqQztJQUFELG9CQUFDO0NBckNELEFBcUNDLENBckMwQyxFQUFFLENBQUMsU0FBUyxHQXFDdEQ7a0JBckNvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0SmFja3BvdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoW3NwLlNrZWxldG9uXSlcbiAgICBza2VsZXRvbnM6IHNwLlNrZWxldG9uW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsTmlja25hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQ29pbjogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHVibGljIHNob3coaXNTaG93OiBib29sZWFuLCBuaWNrbmFtZTogc3RyaW5nID0gbnVsbCwgY29pbjogbnVtYmVyID0gMCl7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBpZihpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjb2luKTtcbiAgICAgICAgICAgIHRoaXMubGJsQ29pbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYmxOaWNrbmFtZS5zdHJpbmcgPSBuaWNrbmFtZTtcbiAgICAgICAgICAgIHRoaXMubGJsTmlja25hbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGk8dGhpcy5za2VsZXRvbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuc2tlbGV0b25zW2ldLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjcpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsTmlja25hbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibENvaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSg1KSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19