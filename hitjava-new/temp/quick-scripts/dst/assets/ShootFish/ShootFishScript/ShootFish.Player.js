
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '720d1dsYhpMV5P3msI2r43M', 'ShootFish.Player');
// ShootFish/ShootFishScript/ShootFish.Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localPos = 0;
        _this.lblNickname = null;
        _this.lblCoin = null;
        _this.lblBet = null;
        _this.gunRotate = null;
        _this.sprGunBar = null;
        _this.sprFramesGunBar = [];
        _this.guns = [];
        _this.id = 0;
        _this.username = "";
        _this.nickname = "";
        _this.coin = 0;
        _this.avatar = "";
        _this.serverPos = -1;
        _this.gun = null;
        _this.curGunIdx = -1;
        return _this;
    }
    Player.prototype.set = function (id, username, nickname, coin, avatar) {
        this.id = id;
        this.username = username;
        this.nickname = nickname;
        this.coin = coin;
        this.avatar = avatar;
        this.gunRotate.angle = 0;
        this.node.active = true;
        this.lblNickname.string = this.nickname;
        this.lblCoin.string = Utils_1.default.formatNumber(coin);
        switch (this.localPos) {
            case 0:
            case 1:
                this.gunRotate.angle = 90;
                break;
            case 2:
            case 3:
                this.gunRotate.angle = -90;
                break;
        }
        this.setGun(0);
    };
    Player.prototype.leave = function () {
        this.id = -1;
        this.nickname = "";
        this.coin = 0;
        this.avatar = "";
        this.node.active = false;
    };
    Player.prototype.setGun = function (gunIdx) {
        if (gunIdx >= this.guns.length)
            gunIdx = 0;
        if (this.curGunIdx == gunIdx)
            return;
        this.curGunIdx = gunIdx;
        for (var i = 0; i < this.guns.length; i++) {
            this.guns[i].node.active = i == gunIdx;
        }
        this.sprGunBar.spriteFrame = this.sprFramesGunBar[gunIdx];
        this.gun = this.guns[gunIdx];
    };
    Player.prototype.rotateGun = function (touchPos) {
        var gunWorldPos = this.gunRotate.convertToWorldSpaceAR(cc.Vec2.ZERO);
        var d = touchPos.sub(gunWorldPos);
        var angle = Math.atan2(d.y, d.x) * Utils_1.default.Rad2Deg;
        if (angle < -90) {
            angle = 180;
        }
        else if (angle < 0 && angle > -90) {
            angle = 0;
        }
        this.gunRotate.angle = angle;
    };
    Player.prototype.shoot = function () {
        this.gun.setAnimation(0, "2", false);
        this.gun.addAnimation(0, "1", true);
    };
    __decorate([
        property
    ], Player.prototype, "localPos", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblNickname", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Player.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Node)
    ], Player.prototype, "gunRotate", void 0);
    __decorate([
        property(cc.Sprite)
    ], Player.prototype, "sprGunBar", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Player.prototype, "sprFramesGunBar", void 0);
    __decorate([
        property([sp.Skeleton])
    ], Player.prototype, "guns", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMEZDO1FBdkZHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixxQkFBZSxHQUFxQixFQUFFLENBQUM7UUFFdkMsVUFBSSxHQUFrQixFQUFFLENBQUM7UUFFbEIsUUFBRSxHQUFHLENBQUMsQ0FBQztRQUNQLGNBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixlQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFZCxTQUFHLEdBQWdCLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBK0QzQixDQUFDO0lBN0RHLG9CQUFHLEdBQUgsVUFBSSxFQUFVLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLElBQVksRUFBRSxNQUFjO1FBQzVFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJ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QyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUF0RkQ7UUFEQyxRQUFROzRDQUNZO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzttREFDWTtJQUV2QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3Q0FDQztJQWpCUixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMEYxQjtJQUFELGFBQUM7Q0ExRkQsQUEwRkMsQ0ExRm1DLEVBQUUsQ0FBQyxTQUFTLEdBMEYvQztrQkExRm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIGxvY2FsUG9zOiBudW1iZXIgPSAwO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxOaWNrbmFtZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxDb2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGd1blJvdGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJHdW5CYXI6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByRnJhbWVzR3VuQmFyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbl0pXG4gICAgZ3Vuczogc3AuU2tlbGV0b25bXSA9IFtdO1xuXG4gICAgcHVibGljIGlkID0gMDtcbiAgICBwdWJsaWMgdXNlcm5hbWUgPSBcIlwiO1xuICAgIHB1YmxpYyBuaWNrbmFtZSA9IFwiXCI7XG4gICAgcHVibGljIGNvaW4gPSAwO1xuICAgIHB1YmxpYyBhdmF0YXIgPSBcIlwiO1xuICAgIHB1YmxpYyBzZXJ2ZXJQb3MgPSAtMTtcblxuICAgIHByaXZhdGUgZ3VuOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBjdXJHdW5JZHggPSAtMTtcblxuICAgIHNldChpZDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBuaWNrbmFtZTogc3RyaW5nLCBjb2luOiBudW1iZXIsIGF2YXRhcjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLm5pY2tuYW1lID0gbmlja25hbWU7XG4gICAgICAgIHRoaXMuY29pbiA9IGNvaW47XG4gICAgICAgIHRoaXMuYXZhdGFyID0gYXZhdGFyO1xuICAgICAgICB0aGlzLmd1blJvdGF0ZS5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMubGJsTmlja25hbWUuc3RyaW5nID0gdGhpcy5uaWNrbmFtZTtcbiAgICAgICAgdGhpcy5sYmxDb2luLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjb2luKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvY2FsUG9zKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5ndW5Sb3RhdGUuYW5nbGUgPSA5MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB0aGlzLmd1blJvdGF0ZS5hbmdsZSA9IC05MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEd1bigwKTtcbiAgICB9XG5cbiAgICBsZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5pZCA9IC0xO1xuICAgICAgICB0aGlzLm5pY2tuYW1lID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb2luID0gMDtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBcIlwiO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0R3VuKGd1bklkeDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChndW5JZHggPj0gdGhpcy5ndW5zLmxlbmd0aCkgZ3VuSWR4ID0gMDtcbiAgICAgICAgaWYgKHRoaXMuY3VyR3VuSWR4ID09IGd1bklkeCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY3VyR3VuSWR4ID0gZ3VuSWR4O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ndW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmd1bnNbaV0ubm9kZS5hY3RpdmUgPSBpID09IGd1bklkeDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwckd1bkJhci5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVzR3VuQmFyW2d1bklkeF07XG4gICAgICAgIHRoaXMuZ3VuID0gdGhpcy5ndW5zW2d1bklkeF07XG4gICAgfVxuXG4gICAgcm90YXRlR3VuKHRvdWNoUG9zOiBjYy5WZWMyKSB7XG4gICAgICAgIHZhciBndW5Xb3JsZFBvcyA9IHRoaXMuZ3VuUm90YXRlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy5WZWMyLlpFUk8pO1xuICAgICAgICB2YXIgZCA9IHRvdWNoUG9zLnN1YihndW5Xb3JsZFBvcyk7XG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoZC55LCBkLngpICogVXRpbHMuUmFkMkRlZztcbiAgICAgICAgaWYgKGFuZ2xlIDwgLTkwKSB7XG4gICAgICAgICAgICBhbmdsZSA9IDE4MDtcbiAgICAgICAgfSBlbHNlIGlmIChhbmdsZSA8IDAgJiYgYW5nbGUgPiAtOTApIHtcbiAgICAgICAgICAgIGFuZ2xlID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmd1blJvdGF0ZS5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICB0aGlzLmd1bi5zZXRBbmltYXRpb24oMCwgXCIyXCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5ndW4uYWRkQW5pbWF0aW9uKDAsIFwiMVwiLCB0cnVlKTtcbiAgICB9XG59XG4iXX0=