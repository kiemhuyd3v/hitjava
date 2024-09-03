
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8.Tutorial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '480cfQ7Nn5GEqMzNINK0G48', 'Slot8.Tutorial');
// Slot8/Slot8Script/Slot8.Tutorial.ts

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
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot8Tutorial = /** @class */ (function (_super) {
    __extends(Slot8Tutorial, _super);
    function Slot8Tutorial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.spriteTutorial = null;
        _this.sfTutorialArr = [];
        return _this;
    }
    Slot8Tutorial.prototype.show = function (controller) {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        if (controller.betId == -1) {
            this.spriteTutorial.spriteFrame = this.sfTutorialArr[2];
        }
        else if (controller.betId == 0) {
            this.spriteTutorial.spriteFrame = this.sfTutorialArr[0];
        }
        else if (controller.betId == 1) {
            this.spriteTutorial.spriteFrame = this.sfTutorialArr[1];
        }
        else {
            this.spriteTutorial.spriteFrame = this.sfTutorialArr[2];
        }
    };
    Slot8Tutorial.prototype.hide = function () {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
    };
    __decorate([
        property(cc.Node)
    ], Slot8Tutorial.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot8Tutorial.prototype, "spriteTutorial", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Tutorial.prototype, "sfTutorialArr", void 0);
    Slot8Tutorial = __decorate([
        ccclass
    ], Slot8Tutorial);
    return Slot8Tutorial;
}(cc.Component));
exports.default = Slot8Tutorial;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OC5UdXRvcmlhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxRUFBZ0U7QUFHMUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUE4QkM7UUE1QkcsYUFBTyxHQUFXLElBQUksQ0FBQztRQUV2QixvQkFBYyxHQUFjLElBQUksQ0FBQztRQUVqQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7O0lBd0J6QyxDQUFDO0lBdEJHLDRCQUFJLEdBQUosVUFBSyxVQUEwQjtRQUMzQixlQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFHLFVBQVUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUNJLElBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUNJLElBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUM7WUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDthQUNHO1lBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0ksZUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRTVELENBQUM7SUF6QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dEQUNVO0lBTnBCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E4QmpDO0lBQUQsb0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjBDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ0RDtrQkE5Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFNsb3Q0Q29udHJvbGxlciBmcm9tIFwiLi9TbG90OENvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q4VHV0b3JpYWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVCb3g6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJpdGVUdXRvcmlhbDogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzZlR1dG9yaWFsQXJyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgICBzaG93KGNvbnRyb2xsZXI6U2xvdDRDb250cm9sbGVyKSB7XG4gICAgICAgIFR3ZWVuLnNob3dQb3B1cCh0aGlzLm5vZGVCb3gsdGhpcy5ub2RlQm94LnBhcmVudCk7XG4gICAgICAgIGlmKGNvbnRyb2xsZXIuYmV0SWQgPT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVUdXRvcmlhbC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZUdXRvcmlhbEFyclsyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGNvbnRyb2xsZXIuYmV0SWQgPT0gMCl7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZVR1dG9yaWFsLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR1dG9yaWFsQXJyWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29udHJvbGxlci5iZXRJZCA9PSAxKXtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlVHV0b3JpYWwuc3ByaXRlRnJhbWUgPSB0aGlzLnNmVHV0b3JpYWxBcnJbMV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlVHV0b3JpYWwuc3ByaXRlRnJhbWUgPSB0aGlzLnNmVHV0b3JpYWxBcnJbMl07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICBUd2Vlbi5oaWRlUG9wdXAodGhpcy5ub2RlQm94LHRoaXMubm9kZUJveC5wYXJlbnQsZmFsc2UpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBcbn0iXX0=