
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8Icon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4985eM9ufVPb4eRHWycmY18', 'Slot8Icon');
// Slot8/Slot8Script/Slot8Icon.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot8Icon = /** @class */ (function (_super) {
    __extends(Slot8Icon, _super);
    function Slot8Icon() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeIcon = null;
        _this.spineIcon = null;
        _this.animation = null;
        return _this;
        // update (dt) {}
    }
    Slot8Icon.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
    };
    Slot8Icon.prototype.start = function () {
    };
    Slot8Icon.prototype.setSprite = function (sf) {
        this.nodeIcon.active = true;
        this.spineIcon.node.active = false;
        this.nodeIcon.getComponent(cc.Sprite).spriteFrame = sf;
    };
    Slot8Icon.prototype.setSpine = function (ske, id) {
        this.nodeIcon.active = false;
        this.spineIcon.node.active = true;
        this.spineIcon.skeletonData = ske;
        if (id == 0) {
            this.spineIcon.setAnimation(0, "jackport", true);
        }
        else if (id == 1) {
            this.spineIcon.setAnimation(0, "bonus", true);
        }
        else if (id == 2) {
            this.spineIcon.setAnimation(0, "freespin", true);
        }
    };
    Slot8Icon.prototype.normal = function () {
        this.nodeIcon.color = new cc.Color(255, 255, 255);
        this.spineIcon.node.color = new cc.Color(255, 255, 255);
    };
    Slot8Icon.prototype.unscale = function () {
        this.nodeIcon.color = new cc.Color(50, 50, 50);
        this.spineIcon.node.color = new cc.Color(50, 50, 50);
    };
    Slot8Icon.prototype.scale = function () {
        this.nodeIcon.color = new cc.Color(255, 255, 255);
        this.spineIcon.node.color = new cc.Color(255, 255, 255);
        if (this.nodeIcon.active) {
            this.animation.play();
        }
    };
    __decorate([
        property(cc.Node)
    ], Slot8Icon.prototype, "nodeIcon", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot8Icon.prototype, "spineIcon", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Icon.prototype, "animation", void 0);
    Slot8Icon = __decorate([
        ccclass
    ], Slot8Icon);
    return Slot8Icon;
}(cc.Component));
exports.default = Slot8Icon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OEljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFJSSx3QkFBd0I7UUFKNUIscUVBK0RDO1FBeERHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFHdEIsZUFBUyxHQUFlLElBQUksQ0FBQzs7UUFrRHJDLGlCQUFpQjtJQUNyQixDQUFDO0lBakRHLDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDZCQUFTLEdBQVQsVUFBVSxFQUFrQjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMzRCxDQUFDO0lBRUQsNEJBQVEsR0FBUixVQUFTLEdBQW1CLEVBQUMsRUFBRTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbEMsSUFBRyxFQUFFLElBQUksQ0FBQyxFQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQztTQUNsRDthQUNJLElBQUcsRUFBRSxJQUFJLENBQUMsRUFBQztZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7YUFDSSxJQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUNELDBCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDJCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQXJERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1E7SUFHOUI7UUFGQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFFbUI7SUFacEIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStEN0I7SUFBRCxnQkFBQztDQS9ERCxBQStEQyxDQS9Ec0MsRUFBRSxDQUFDLFNBQVMsR0ErRGxEO2tCQS9Eb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q4SWNvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlSWNvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIHNwaW5lSWNvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IGNjLkFuaW1hdGlvbj1udWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRTcHJpdGUoc2Y6IGNjLlNwcml0ZUZyYW1lKSB7XG4gICAgICAgIHRoaXMubm9kZUljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm5vZGVJY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc2Y7XG4gICAgfVxuXG4gICAgc2V0U3BpbmUoc2tlOnNwLlNrZWxldG9uRGF0YSxpZCkge1xuICAgICAgICB0aGlzLm5vZGVJY29uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNwaW5lSWNvbi5za2VsZXRvbkRhdGEgPSBza2U7XG4gICAgICAgIGlmKGlkID09IDApe1xuICAgICAgICAgICAgdGhpcy5zcGluZUljb24uc2V0QW5pbWF0aW9uKDAsXCJqYWNrcG9ydFwiLHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaWQgPT0gMSl7XG4gICAgICAgICAgICB0aGlzLnNwaW5lSWNvbi5zZXRBbmltYXRpb24oMCxcImJvbnVzXCIsdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpZCA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMuc3BpbmVJY29uLnNldEFuaW1hdGlvbigwLFwiZnJlZXNwaW5cIix0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3JtYWwoKXtcbiAgICAgICAgdGhpcy5ub2RlSWNvbi5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XG4gICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xuICAgIH1cblxuICAgIHVuc2NhbGUoKSB7XG4gICAgICAgIHRoaXMubm9kZUljb24uY29sb3IgPSBuZXcgY2MuQ29sb3IoNTAsNTAsNTApO1xuICAgICAgICB0aGlzLnNwaW5lSWNvbi5ub2RlLmNvbG9yID0gbmV3IGNjLkNvbG9yKDUwLDUwLDUwKTtcbiAgICB9XG5cbiAgICBzY2FsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlSWNvbi5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsMjU1LDI1NSk7XG4gICAgICAgIHRoaXMuc3BpbmVJY29uLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LDI1NSwyNTUpO1xuICAgICAgICBpZiAodGhpcy5ub2RlSWNvbi5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=