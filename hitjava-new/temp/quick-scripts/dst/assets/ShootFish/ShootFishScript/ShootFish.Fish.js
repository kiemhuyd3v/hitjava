
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.Fish.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5GaXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSx5R0FBb0c7QUFDcEcsbURBQW9DO0FBRzlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBOExDO1FBM0xHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUloQixXQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsVUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRVQsYUFBTyxHQUFnQixJQUFJLENBQUM7UUFDcEMsZ0NBQWdDO1FBRXhCLHNCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixxQkFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDOztJQTJLN0IsQ0FBQztJQXpLVSxzQkFBTyxHQUFkLFVBQWUsUUFBYTtRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXZDLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDWCxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLElBQUks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InNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgU2hvb3RGaXNoTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nob290RmlzaE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBQbGF5IGZyb20gXCIuL1Nob290RmlzaC5QbGF5XCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpc2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYW5pbTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibElkOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBpZDogbnVtYmVyO1xuXG4gICAgcHVibGljIGlzRGllID0gZmFsc2U7XG4gICAgcHVibGljIHR5cGUgPSAtMTtcblxuICAgIHByaXZhdGUgcG9seWdvbjogU0FULlBvbHlnb24gPSBudWxsO1xuICAgIC8vIHByaXZhdGUgbGFzdFBvbHlnb25BbmdsZSA9IDA7XG5cbiAgICBwcml2YXRlIGRhdGFQb2ludHNVcGRhdGUgPSBbXTtcbiAgICBwcml2YXRlIGN1cnJlbnRTdGVwID0gMDtcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lU3RlcCA9IC0xO1xuICAgIHB1YmxpYyBjdXJyZW50VlN0ZXBYID0gMDtcbiAgICBwdWJsaWMgY3VycmVudFZTdGVwWSA9IDA7XG5cbiAgICBwdWJsaWMgc2V0RGF0YShmaXNoRGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuaWQgPSBmaXNoRGF0YVsnaWQnXTtcbiAgICAgICAgdGhpcy5sYmxJZC5zdHJpbmcgPSB0aGlzLmlkLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgaWYgKGZpc2hEYXRhW1wiaFwiXSA8PSAwIHx8IGZpc2hEYXRhWydwYXRoJ10ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGllKCk7XG4gICAgICAgICAgICBpZiAoZmlzaERhdGFbJ3BhdGgnXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJmaXNoRGF0YSBwYXRoIGxlbmd0aCA9IDBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudHlwZSAhPSBmaXNoRGF0YVtcInRcIl0pIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IGZpc2hEYXRhW1widFwiXTtcbiAgICAgICAgICAgIHRoaXMuYW5pbS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICAgICAgbGV0IGFuaW1Ob2RlID0gY2MuaW5zdGFudGlhdGUoUGxheS5pbnN0YW5jZS5nZXRGaXNoQW5pbUJ5VHlwZSh0aGlzLnR5cGUpKTtcbiAgICAgICAgICAgIGFuaW1Ob2RlLnBhcmVudCA9IHRoaXMuYW5pbTtcblxuICAgICAgICAgICAgbGV0IHdpZHRoID0gZmlzaERhdGFbJ0gnXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBmaXNoRGF0YVsndyddO1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uID0gbmV3IFNBVC5Cb3gobmV3IFNBVC5WZWN0b3IoMCwgMCksIHdpZHRoLCBoZWlnaHQpLnRvUG9seWdvbigpO1xuICAgICAgICAgICAgdGhpcy5wb2x5Z29uLnRyYW5zbGF0ZSgtIHdpZHRoIC8gMiwgLSBoZWlnaHQgLyAyKTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC8vIC8vICBjYy5sb2coXCJzZXRmaXNoZGF0YSBcIiArIHRoaXMuaWQpXG5cbiAgICAgICAgbGV0IGRYID0gTnVtYmVyKGZpc2hEYXRhWydkeCddKTtcbiAgICAgICAgbGV0IGRZID0gTnVtYmVyKGZpc2hEYXRhWydkeSddKTtcbiAgICAgICAgbGV0IHBvc1ggPSBOdW1iZXIoZmlzaERhdGFbJ3B4J10pO1xuICAgICAgICBsZXQgcG9zWSA9IE51bWJlcihmaXNoRGF0YVsncHknXSk7XG4gICAgICAgIGxldCBwYXRoID0gZmlzaERhdGFbJ3BhdGgnXTtcbiAgICAgICAgbGV0IHRpbWUgPSBTaG9vdEZpc2hOZXR3b3JrQ2xpZW50LnNlcnZlckN1cnJlbnRUaW1lTWlsbGlzKCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gTWF0aC5hdGFuMihkWSwgZFgpICogVXRpbHMuUmFkMkRlZztcblxuICAgICAgICBsZXQgZGF0YVBvaW50cyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBkYXRhUCA9IHsgJ3QnOiBOdW1iZXIocGF0aFtpXVsndCddKSB9O1xuICAgICAgICAgICAgZGF0YVBbJ3AnXSA9IGNjLnYyKE51bWJlcihwYXRoW2ldWyd4J10pLCBOdW1iZXIocGF0aFtpXVsneSddKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKFBsYXkuaW5zdGFuY2UubWVQbGF5ZXIuc2VydmVyUG9zKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBkYXRhUFsncCddID0gY2MudjIoLU51bWJlcihwYXRoW2ldWyd4J10pLCBOdW1iZXIocGF0aFtpXVsneSddKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBbJ3AnXSA9IGNjLnYyKC1OdW1iZXIocGF0aFtpXVsneCddKSwgLU51bWJlcihwYXRoW2ldWyd5J10pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBkYXRhUFsncCddID0gY2MudjIoTnVtYmVyKHBhdGhbaV1bJ3gnXSksIC1OdW1iZXIocGF0aFtpXVsneSddKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YVBvaW50cy5wdXNoKGRhdGFQKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3NYLCBwb3NZKTtcbiAgICAgICAgc3dpdGNoIChQbGF5Lmluc3RhbmNlLm1lUGxheWVyLnNlcnZlclBvcykge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigtcG9zWCwgcG9zWSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKC1wb3NYLCAtcG9zWSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvc1gsIC1wb3NZKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc0ZpcnN0UG9pbnQgPSB0cnVlO1xuICAgICAgICBsZXQgcG9pbnQgPSAtMTtcbiAgICAgICAgdGhpcy5kYXRhUG9pbnRzVXBkYXRlLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF0YVBvaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGExID0gZGF0YVBvaW50c1tpIC0gMV07XG4gICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhUG9pbnRzW2ldO1xuICAgICAgICAgICAgbGV0IHAxOiBjYy5WZWMyID0gZGF0YTFbJ3AnXTtcbiAgICAgICAgICAgIGxldCBwMjogY2MuVmVjMiA9IGRhdGEyWydwJ107XG4gICAgICAgICAgICBsZXQgdDE6IG51bWJlciA9IGRhdGExWyd0J107XG4gICAgICAgICAgICBsZXQgdDI6IG51bWJlciA9IGRhdGEyWyd0J107XG4gICAgICAgICAgICBpZiAodGltZSAtIHQyIDwgMCkge1xuICAgICAgICAgICAgICAgIGlmIChwb2ludCA8IDApIHBvaW50ID0gaTtcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFQb3MgPSBwMi5jbG9uZSgpLnN1YihwMSk7XG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMihkZWx0YVBvcy55LCBkZWx0YVBvcy54KSAqIFV0aWxzLlJhZDJEZWc7XG4gICAgICAgICAgICAgICAgbGV0IHRpbWVNb3ZlID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdFBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVNb3ZlID0gKHQyIC0gdGltZSkgLyAxMDAwO1xuICAgICAgICAgICAgICAgICAgICBpc0ZpcnN0UG9pbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aW1lTW92ZSA9ICh0MiAtIHQxKSAvIDEwMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVBvaW50c1VwZGF0ZS5wdXNoKHsgJ3AnOiBwMiwgJ3QnOiB0aW1lTW92ZSwgJ2EnOiBhbmdsZSwgXCJ0bXNcIjogdDJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWVTdGVwID0gLTE7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRWU3RlcFggPSAwO1xuICAgICAgICB0aGlzLmN1cnJlbnRWU3RlcFkgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGFQb2ludHNVcGRhdGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZVN0ZXAgPSB0aGlzLmRhdGFQb2ludHNVcGRhdGVbdGhpcy5jdXJyZW50U3RlcF1bJ3QnXTtcbiAgICAgICAgICAgIGxldCBtb3ZlVG9Qb3M6IGNjLlZlYzIgPSB0aGlzLmRhdGFQb2ludHNVcGRhdGVbdGhpcy5jdXJyZW50U3RlcF1bJ3AnXTtcbiAgICAgICAgICAgIGxldCBkZWx0YVBvcyA9IG1vdmVUb1Bvcy5zdWIobmV3IGNjLlZlYzIodGhpcy5ub2RlLnBvc2l0aW9uLngsdGhpcy5ub2RlLnBvc2l0aW9uLnkpKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZTdGVwWCA9IGRlbHRhUG9zLnggLyB0aGlzLmN1cnJlbnRUaW1lU3RlcDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZTdGVwWSA9IGRlbHRhUG9zLnkgLyB0aGlzLmN1cnJlbnRUaW1lU3RlcDtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuZGF0YVBvaW50c1VwZGF0ZVt0aGlzLmN1cnJlbnRTdGVwXVsnYSddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNhbid0IGZpbmQgcGF0aDogXCIgKyB0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzRGllID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVSZWFsVGltZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSB8fCB0aGlzLmlzRGllKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YVBvaW50c1VwZGF0ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZVN0ZXAgPj0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZVN0ZXAgLT0gZHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWVTdGVwIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwIDwgdGhpcy5kYXRhUG9pbnRzVXBkYXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZVN0ZXAgPSB0aGlzLmRhdGFQb2ludHNVcGRhdGVbdGhpcy5jdXJyZW50U3RlcF1bJ3QnXSArIE1hdGguYWJzKHRoaXMuY3VycmVudFRpbWVTdGVwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gdGhpcy5kYXRhUG9pbnRzVXBkYXRlW3RoaXMuY3VycmVudFN0ZXBdWydhJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvbHlnb24uYW5nbGUgPSB0aGlzLm5vZGUuYW5nbGUgKiBVdGlscy5EZWcyUmFkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW92ZVRvUG9zOiBjYy5WZWMyID0gdGhpcy5kYXRhUG9pbnRzVXBkYXRlW3RoaXMuY3VycmVudFN0ZXBdWydwJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVsdGFQb3MgPSBtb3ZlVG9Qb3Muc3ViKG5ldyBjYy5WZWMyKHBvcy54LHBvcy55KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWU3RlcFggPSBkZWx0YVBvcy54IC8gdGhpcy5jdXJyZW50VGltZVN0ZXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRWU3RlcFkgPSBkZWx0YVBvcy55IC8gdGhpcy5jdXJyZW50VGltZVN0ZXA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8gIGNjLmxvZyhcImZpc2ggXCIgKyB0aGlzLmlkICsgXCIgY3N0ZXA6IFwiICsgdGhpcy5fY3VycmVudFN0ZXAgKyBcIiBtYXhTdGVwOiBcIiArIHRoaXMuX2RhdGFQb2ludHNVcGRhdGUubGVuZ3RoICsgXCIgbW92ZVRvUG9zOiBcIiArIG1vdmVUb1Bvcy54ICsgXCIsIFwiICsgbW92ZVRvUG9zLnkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLyAgY2MubG9nKFwidGhpcy5fY3VycmVudCBcIiArIHRoaXMuaWQgKyBcIiBQcmVwYXJlU3RvcCBfZGF0YVBvaW50c1VwZGF0ZWw6IFwiICsgdGhpcy5fZGF0YVBvaW50c1VwZGF0ZS5sZW5ndGggKyBcIiAgX2N1cnJlbnRTdGVwOiBcIiArIHRoaXMuX2N1cnJlbnRTdGVwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLmN1cnJlbnRWU3RlcFggKiBkdDtcbiAgICAgICAgICAgICAgICBwb3MueSArPSB0aGlzLmN1cnJlbnRWU3RlcFkgKiBkdDtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGllKCkge1xuICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb2x5Z29uKCk6IFNBVC5Qb2x5Z29uIHtcbiAgICAgICAgLy8gaWYgKE1hdGguYWJzKHRoaXMubGFzdFBvbHlnb25BbmdsZSAtIHRoaXMubm9kZS5hbmdsZSkgPj0gMykge1xuICAgICAgICAvLyAgICAgdGhpcy5sYXN0UG9seWdvbkFuZ2xlID0gdGhpcy5ub2RlLmFuZ2xlO1xuICAgICAgICAvLyAgICAgdGhpcy5wb2x5Z29uLnNldEFuZ2xlKHRoaXMubm9kZS5hbmdsZSAqIFV0aWxzLkRlZzJSYWQpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMucG9seWdvbi5wb3MgPSBuZXcgU0FULlZlY3Rvcih0aGlzLm5vZGUucG9zaXRpb24ueCwgdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xuICAgICAgICByZXR1cm4gdGhpcy5wb2x5Z29uO1xuICAgIH1cblxuICAgIHB1YmxpYyBodXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5hbmltLmNoaWxkcmVuLmxlbmd0aCA9PSAwIHx8IHRoaXMuYW5pbS5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFuaW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uc3RvcEFjdGlvbkJ5VGFnKDk5KTtcbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MudGludFRvKDAuMDUsIDI1NSwgNTQsIDU0KSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjEpLFxuICAgICAgICAgICAgY2MudGludFRvKDAuMDUsIDI1NSwgMjU1LCAyNTUpXG4gICAgICAgICk7XG4gICAgICAgIGFjdGlvbi5zZXRUYWcoOTkpO1xuICAgICAgICB0aGlzLmFuaW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0ucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgfVxufVxuIl19