
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5CdWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBQ2hFLG1EQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHFFQXNHQztRQW5HRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFakIsUUFBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixrQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRVIsZUFBUyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLHFCQUFlLEdBQVcsR0FBRyxDQUFDO1FBRXZDLFFBQUUsR0FBRyxDQUFDLENBQUM7UUFDUCxRQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1Asb0JBQWMsR0FBRyxDQUFDLENBQUM7UUFDM0IsZ0JBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDWixnQkFBVSxHQUFHLENBQUMsQ0FBQztRQUNmLFlBQU0sR0FBZSxJQUFJLENBQUM7O0lBbUZ0QyxDQUFDO0lBakZVLG9CQUFHLEdBQVY7UUFDSSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsd0JBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztZQUFFLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsZUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxD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QUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FDM0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3pFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3JELEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2xELENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSwwQkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBbEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUxQLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FzRzFCO0lBQUQsYUFBQztDQXRHRCxBQXNHQyxDQXRHbUMsRUFBRSxDQUFDLFNBQVMsR0FzRy9DO2tCQXRHb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFBsYXkgZnJvbSBcIi4vU2hvb3RGaXNoLlBsYXlcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnVsbGV0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmaXNoTmV0OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gXCJcIjtcbiAgICBwdWJsaWMgdGFyZ2V0RmlzaElkID0gLTE7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU2l6ZTogY2MuU2l6ZSA9IGNjLnNpemUoMTI4MCwgNzIwKTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV4cGxvcmVEdXJhdGlvbjogbnVtYmVyID0gMC44O1xuXG4gICAgcHJpdmF0ZSB2WCA9IDA7XG4gICAgcHJpdmF0ZSB2WSA9IDA7XG4gICAgcHJpdmF0ZSBjb2xsaXNpb25Db3VudCA9IDQ7XG4gICAgaXNFeHBsb3JlZCA9IGZhbHNlO1xuICAgIGlzRXhwbG9yaW5nID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBjdXJFeHBsb3JlID0gMDtcbiAgICBwcml2YXRlIGNpcmNsZTogU0FULkNpcmNsZSA9IG51bGw7XG5cbiAgICBwdWJsaWMgcnVuKCkge1xuICAgICAgICBsZXQgc3BlZWQgPSBOdW1iZXIoUGxheS5TRVJWRVJfQ09ORklHWydCdWxsZXRTcGVlZCddKTtcbiAgICAgICAgaWYoaXNOYU4oc3BlZWQpIHx8IHNwZWVkID09IDApIHNwZWVkID0gMTQwMDtcbiAgICAgICAgbGV0IHYgPSBVdGlscy5kZWdyZWVzVG9WZWMyKHRoaXMubm9kZS5hbmdsZSk7XG4gICAgICAgIHRoaXMudlggPSB2LnggKiBzcGVlZDtcbiAgICAgICAgdGhpcy52WSA9IHYueSAqIHNwZWVkO1xuICAgICAgICB0aGlzLmNvbGxpc2lvbkNvdW50ID0gNDtcbiAgICAgICAgdGhpcy5pc0V4cGxvcmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNFeHBsb3JpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWxsZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maXNoTmV0LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2lyY2xlID0gbmV3IFNBVC5DaXJjbGUobmV3IFNBVC5WZWN0b3IodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KSwgTnVtYmVyKFBsYXkuU0VSVkVSX0NPTkZJR1snQnVsbGV0UmFkaXVzJ10pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlUmVhbFRpbWUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc0V4cGxvcmVkKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmlzRXhwbG9yaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmN1ckV4cGxvcmUgLT0gZHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJFeHBsb3JlIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRXhwbG9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICBuZXdQb3MueCArPSB0aGlzLnZYICogZHQ7XG4gICAgICAgIG5ld1Bvcy55ICs9IHRoaXMudlkgKiBkdDtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gbmV3UG9zO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhuZXdQb3MueCkgPiB0aGlzLndvcmxkU2l6ZS53aWR0aCAvIDIpIHtcbiAgICAgICAgICAgIHRoaXMudlggKj0gLTE7XG5cbiAgICAgICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIodGhpcy52WSwgdGhpcy52WCkgKiBVdGlscy5SYWQyRGVnO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XG5cbiAgICAgICAgICAgIG5ld1Bvcy54ID0gKG5ld1Bvcy54IDwgMCA/IC0xIDogMSkgKiB0aGlzLndvcmxkU2l6ZS53aWR0aCAvIDI7XG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBuZXdQb3M7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGlzaW9uQ291bnQtLTtcbiAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhuZXdQb3MueSkgPiB0aGlzLndvcmxkU2l6ZS5oZWlnaHQgLyAyKSB7XG4gICAgICAgICAgICB0aGlzLnZZICo9IC0xO1xuXG4gICAgICAgICAgICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHRoaXMudlksIHRoaXMudlgpICogVXRpbHMuUmFkMkRlZztcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IGFuZ2xlO1xuXG4gICAgICAgICAgICBuZXdQb3MueSA9IChuZXdQb3MueSA8IDAgPyAtMSA6IDEpICogdGhpcy53b3JsZFNpemUuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IG5ld1BvcztcblxuICAgICAgICAgICAgdGhpcy5jb2xsaXNpb25Db3VudC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaXJjbGUucG9zID0gbmV3IFNBVC5WZWN0b3IodGhpcy5ub2RlLnBvc2l0aW9uLngsIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcblxuICAgICAgICBpZiAodGhpcy5jb2xsaXNpb25Db3VudCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBleHBsb3JlKCkge1xuICAgICAgICB0aGlzLmlzRXhwbG9yaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJFeHBsb3JlID0gdGhpcy5leHBsb3JlRHVyYXRpb247XG4gICAgICAgIHRoaXMuYnVsbGV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZpc2hOZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5maXNoTmV0Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmZpc2hOZXQuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLmZpc2hOZXQuc2NhbGUgPSAwO1xuXG4gICAgICAgIHRoaXMuZmlzaE5ldC5zdG9wQWxsQWN0aW9ucygpO1xuXG4gICAgICAgIHRoaXMuZmlzaE5ldC5ydW5BY3Rpb24oY2Muc3Bhd24oXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMywgMS4xKSwgY2MuZGVsYXlUaW1lKDAuMDcpLCBjYy5zY2FsZVRvKDAuMywgMSkpLFxuICAgICAgICAgICAgY2MuZmFkZUluKDAuMSksXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4yNSksIGNjLnJvdGF0ZVRvKDAuNSwgMzUpKSxcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjQpLCBjYy5mYWRlT3V0KDAuMykpXG4gICAgICAgICkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaXJjbGUoKTogU0FULkNpcmNsZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNpcmNsZTtcbiAgICB9XG59XG4iXX0=