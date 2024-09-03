"use strict";
cc._RF.push(module, '8dcf1d04CtOE75piBWi/t9b', 'ShootFish.Fish');
// ShootFish/ShootFishScript/ShootFish.Fish.ts

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
var ShootFishNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/ShootFishNetworkClient");
var ShootFish_Play_1 = require("./ShootFish.Play");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.lblId = null;
        _this.isDie = false;
        _this.type = -1;
        _this.polygon = null;
        // private lastPolygonAngle = 0;
        _this.dataPointsUpdate = [];
        _this.currentStep = 0;
        _this.currentTimeStep = -1;
        _this.currentVStepX = 0;
        _this.currentVStepY = 0;
        return _this;
    }
    Fish.prototype.setData = function (fishData) {
        this.id = fishData['id'];
        this.lblId.string = this.id.toString();
        if (fishData["h"] <= 0 || fishData['path'].length == 0) {
            this.die();
            if (fishData['path'].length == 0) {
                //  cc.log("fishData path length = 0");
            }
            return;
        }
        if (this.type != fishData["t"]) {
            this.type = fishData["t"];
            this.anim.removeAllChildren();
            var animNode = cc.instantiate(ShootFish_Play_1.default.instance.getFishAnimByType(this.type));
            animNode.parent = this.anim;
            var width = fishData['H'];
            var height = fishData['w'];
            this.polygon = new SAT.Box(new SAT.Vector(0, 0), width, height).toPolygon();
            this.polygon.translate(-width / 2, -height / 2);
            this.node.width = width;
            this.node.height = height;
        }
        // //  cc.log("setfishdata " + this.id)
        var dX = Number(fishData['dx']);
        var dY = Number(fishData['dy']);
        var posX = Number(fishData['px']);
        var posY = Number(fishData['py']);
        var path = fishData['path'];
        var time = ShootFishNetworkClient_1.default.serverCurrentTimeMillis();
        this.node.angle = Math.atan2(dY, dX) * Utils_1.default.Rad2Deg;
        var dataPoints = [];
        for (var i = 0; i < path.length; i++) {
            var dataP = { 't': Number(path[i]['t']) };
            dataP['p'] = cc.v2(Number(path[i]['x']), Number(path[i]['y']));
            switch (ShootFish_Play_1.default.instance.mePlayer.serverPos) {
                case 1:
                    dataP['p'] = cc.v2(-Number(path[i]['x']), Number(path[i]['y']));
                    break;
                case 2:
                    dataP['p'] = cc.v2(-Number(path[i]['x']), -Number(path[i]['y']));
                    break;
                case 3:
                    dataP['p'] = cc.v2(Number(path[i]['x']), -Number(path[i]['y']));
                    break;
            }
            dataPoints.push(dataP);
        }
        this.node.setPosition(posX, posY);
        switch (ShootFish_Play_1.default.instance.mePlayer.serverPos) {
            case 1:
                this.node.setPosition(-posX, posY);
                break;
            case 2:
                this.node.setPosition(-posX, -posY);
                break;
            case 3:
                this.node.setPosition(posX, -posY);
                break;
        }
        var isFirstPoint = true;
        var point = -1;
        this.dataPointsUpdate.length = 0;
        for (var i_1 = 1; i_1 < dataPoints.length; i_1++) {
            var data1 = dataPoints[i_1 - 1];
            var data2 = dataPoints[i_1];
            var p1 = data1['p'];
            var p2 = data2['p'];
            var t1 = data1['t'];
            var t2 = data2['t'];
            if (time - t2 < 0) {
                if (point < 0)
                    point = i_1;
                var deltaPos = p2.clone().sub(p1);
                var angle = Math.atan2(deltaPos.y, deltaPos.x) * Utils_1.default.Rad2Deg;
                var timeMove = 0;
                if (isFirstPoint) {
                    timeMove = (t2 - time) / 1000;
                    isFirstPoint = false;
                }
                else {
                    timeMove = (t2 - t1) / 1000;
                }
                this.dataPointsUpdate.push({ 'p': p2, 't': timeMove, 'a': angle, "tms": t2 });
            }
        }
        this.currentTimeStep = -1;
        this.currentStep = 0;
        this.currentVStepX = 0;
        this.currentVStepY = 0;
        if (this.dataPointsUpdate.length > 0) {
            this.currentTimeStep = this.dataPointsUpdate[this.currentStep]['t'];
            var moveToPos = this.dataPointsUpdate[this.currentStep]['p'];
            var deltaPos = moveToPos.sub(new cc.Vec2(this.node.position.x, this.node.position.y));
            this.currentVStepX = deltaPos.x / this.currentTimeStep;
            this.currentVStepY = deltaPos.y / this.currentTimeStep;
            this.node.angle = this.dataPointsUpdate[this.currentStep]['a'];
        }
        else {
            //  cc.log("can't find path: " + this.id);
        }
        this.isDie = false;
        this.node.active = true;
    };
    Fish.prototype.updateRealTime = function (dt) {
        if (!this.node.active || this.isDie) {
            return;
        }
        if (this.dataPointsUpdate.length > 0) {
            if (this.currentTimeStep >= 0) {
                var pos = this.node.position;
                this.currentTimeStep -= dt;
                if (this.currentTimeStep < 0) {
                    this.currentStep++;
                    if (this.currentStep < this.dataPointsUpdate.length) {
                        this.currentTimeStep = this.dataPointsUpdate[this.currentStep]['t'] + Math.abs(this.currentTimeStep);
                        this.node.angle = this.dataPointsUpdate[this.currentStep]['a'];
                        this.polygon.angle = this.node.angle * Utils_1.default.Deg2Rad;
                        var moveToPos = this.dataPointsUpdate[this.currentStep]['p'];
                        var deltaPos = moveToPos.sub(new cc.Vec2(pos.x, pos.y));
                        this.currentVStepX = deltaPos.x / this.currentTimeStep;
                        this.currentVStepY = deltaPos.y / this.currentTimeStep;
                        ////  cc.log("fish " + this.id + " cstep: " + this._currentStep + " maxStep: " + this._dataPointsUpdate.length + " moveToPos: " + moveToPos.x + ", " + moveToPos.y);
                    }
                    else {
                        ////  cc.log("this._current " + this.id + " PrepareStop _dataPointsUpdatel: " + this._dataPointsUpdate.length + "  _currentStep: " + this._currentStep);
                    }
                }
                pos.x += this.currentVStepX * dt;
                pos.y += this.currentVStepY * dt;
                this.node.position = pos;
            }
        }
    };
    Fish.prototype.die = function () {
        this.isDie = true;
        this.node.active = false;
    };
    Fish.prototype.getPolygon = function () {
        // if (Math.abs(this.lastPolygonAngle - this.node.angle) >= 3) {
        //     this.lastPolygonAngle = this.node.angle;
        //     this.polygon.setAngle(this.node.angle * Utils.Deg2Rad);
        // }
        this.polygon.pos = new SAT.Vector(this.node.position.x, this.node.position.y);
        return this.polygon;
    };
    Fish.prototype.hurt = function () {
        if (this.anim.children.length == 0 || this.anim.children[0].children.length == 0)
            return;
        this.anim.children[0].children[0].stopActionByTag(99);
        var action = cc.sequence(cc.tintTo(0.05, 255, 54, 54), cc.delayTime(0.1), cc.tintTo(0.05, 255, 255, 255));
        action.setTag(99);
        this.anim.children[0].children[0].runAction(action);
    };
    __decorate([
        property(cc.Node)
    ], Fish.prototype, "anim", void 0);
    __decorate([
        property(cc.Label)
    ], Fish.prototype, "lblId", void 0);
    Fish = __decorate([
        ccclass
    ], Fish);
    return Fish;
}(cc.Component));
exports.default = Fish;

cc._RF.pop();