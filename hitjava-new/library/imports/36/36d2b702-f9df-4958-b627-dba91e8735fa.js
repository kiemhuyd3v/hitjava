"use strict";
cc._RF.push(module, '36d2bcC+d9JWLYn26kehzX6', 'ShootFish.Bullet');
// ShootFish/ShootFishScript/ShootFish.Bullet.ts

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
var ShootFish_Play_1 = require("./ShootFish.Play");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bullet = null;
        _this.fishNet = null;
        _this.id = "";
        _this.targetFishId = -1;
        _this.worldSize = cc.size(1280, 720);
        _this.exploreDuration = 0.8;
        _this.vX = 0;
        _this.vY = 0;
        _this.collisionCount = 4;
        _this.isExplored = false;
        _this.isExploring = false;
        _this.curExplore = 0;
        _this.circle = null;
        return _this;
    }
    Bullet.prototype.run = function () {
        var speed = Number(ShootFish_Play_1.default.SERVER_CONFIG['BulletSpeed']);
        if (isNaN(speed) || speed == 0)
            speed = 1400;
        var v = Utils_1.default.degreesToVec2(this.node.angle);
        this.vX = v.x * speed;
        this.vY = v.y * speed;
        this.collisionCount = 4;
        this.isExplored = false;
        this.isExploring = false;
        this.bullet.active = true;
        this.fishNet.active = false;
        this.circle = new SAT.Circle(new SAT.Vector(this.node.position.x, this.node.position.y), Number(ShootFish_Play_1.default.SERVER_CONFIG['BulletRadius']));
    };
    Bullet.prototype.updateRealTime = function (dt) {
        if (this.isExplored)
            return;
        if (this.isExploring) {
            this.curExplore -= dt;
            if (this.curExplore <= 0) {
                this.isExplored = true;
                this.node.active = false;
            }
            return;
        }
        var newPos = this.node.position;
        newPos.x += this.vX * dt;
        newPos.y += this.vY * dt;
        this.node.position = newPos;
        if (Math.abs(newPos.x) > this.worldSize.width / 2) {
            this.vX *= -1;
            var angle = Math.atan2(this.vY, this.vX) * Utils_1.default.Rad2Deg;
            this.node.angle = angle;
            newPos.x = (newPos.x < 0 ? -1 : 1) * this.worldSize.width / 2;
            this.node.position = newPos;
            this.collisionCount--;
        }
        else if (Math.abs(newPos.y) > this.worldSize.height / 2) {
            this.vY *= -1;
            var angle = Math.atan2(this.vY, this.vX) * Utils_1.default.Rad2Deg;
            this.node.angle = angle;
            newPos.y = (newPos.y < 0 ? -1 : 1) * this.worldSize.height / 2;
            this.node.position = newPos;
            this.collisionCount--;
        }
        this.circle.pos = new SAT.Vector(this.node.position.x, this.node.position.y);
        if (this.collisionCount < 0) {
            this.node.active = false;
        }
    };
    Bullet.prototype.explore = function () {
        this.isExploring = true;
        this.curExplore = this.exploreDuration;
        this.bullet.active = false;
        this.fishNet.active = true;
        this.fishNet.opacity = 0;
        this.fishNet.angle = 0;
        this.fishNet.scale = 0;
        this.fishNet.stopAllActions();
        this.fishNet.runAction(cc.spawn(cc.sequence(cc.scaleTo(0.3, 1.1), cc.delayTime(0.07), cc.scaleTo(0.3, 1)), cc.fadeIn(0.1), cc.sequence(cc.delayTime(0.25), cc.rotateTo(0.5, 35)), cc.sequence(cc.delayTime(0.4), cc.fadeOut(0.3))));
    };
    Bullet.prototype.getCircle = function () {
        return this.circle;
    };
    __decorate([
        property(cc.Node)
    ], Bullet.prototype, "bullet", void 0);
    __decorate([
        property(cc.Node)
    ], Bullet.prototype, "fishNet", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();