
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4Icon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7d51i8PLtHRr6dBVGfiTV6', 'Slot4Icon');
// Slot4/Slot4Script/Slot4Icon.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeIcon = null;
        _this.fxJackpot = null;
        _this.fxBonus = null;
        _this.fxFree = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onLoad = function () {
        this.animation = this.getComponent(cc.Animation);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.setSprite = function (sf) {
        this.nodeIcon.active = true;
        this.fxJackpot.active = false;
        this.fxBonus.active = false;
        this.fxFree.active = false;
        this.nodeIcon.getComponent(cc.Sprite).spriteFrame = sf;
    };
    NewClass.prototype.setSpine = function (id) {
        this.nodeIcon.active = false;
        this.fxJackpot.active = false;
        this.fxBonus.active = false;
        this.fxFree.active = false;
        switch (parseInt(id)) {
            case 0:
                this.fxJackpot.active = true;
                break;
            case 1:
                this.fxBonus.active = true;
                break;
            case 2:
                this.fxFree.active = true;
                break;
            default:
                break;
        }
    };
    NewClass.prototype.scale = function () {
        if (this.nodeIcon.active) {
            this.animation.play();
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "nodeIcon", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fxJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fxBonus", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "fxFree", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NEljb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFJSSx3QkFBd0I7UUFKNUIscUVBNkRDO1FBdERHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7O1FBK0N2QixpQkFBaUI7SUFDckIsQ0FBQztJQTVDRyx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsRUFBa0I7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzNELENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsRUFBRTtRQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMzQixRQUFRLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNsQixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM3QixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDM0IsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE1BQU07WUFDVjtnQkFDSSxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7SUFuREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQWJOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2RDVCO0lBQUQsZUFBQztDQTdERCxBQTZEQyxDQTdEcUMsRUFBRSxDQUFDLFNBQVMsR0E2RGpEO2tCQTdEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVJY29uOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmeEphY2twb3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4Qm9udXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGZ4RnJlZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGFuaW1hdGlvbjogY2MuQW5pbWF0aW9uO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICB9XG5cbiAgICBzZXRTcHJpdGUoc2Y6IGNjLlNwcml0ZUZyYW1lKSB7XG4gICAgICAgIHRoaXMubm9kZUljb24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5meEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnhCb251cy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5meEZyZWUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5ub2RlSWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNmO1xuICAgIH1cblxuICAgIHNldFNwaW5lKGlkKSB7XG4gICAgICAgIHRoaXMubm9kZUljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnhKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZ4Qm9udXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnhGcmVlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHBhcnNlSW50KGlkKSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRoaXMuZnhKYWNrcG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5meEJvbnVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGhpcy5meEZyZWUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzY2FsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZUljb24uYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19