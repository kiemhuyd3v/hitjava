"use strict";
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