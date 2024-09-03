
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4Tutorial.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b8be1cyApdLjbjiQvXiWFls', 'Slot4Tutorial');
// Slot4/Slot4Script/Slot4Tutorial.ts

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
var Slot4Glory = /** @class */ (function (_super) {
    __extends(Slot4Glory, _super);
    function Slot4Glory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.spriteTutorial = null;
        _this.sfTutorialArr = [];
        return _this;
    }
    Slot4Glory.prototype.show = function (controller) {
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
    Slot4Glory.prototype.hide = function () {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
    };
    __decorate([
        property(cc.Node)
    ], Slot4Glory.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot4Glory.prototype, "spriteTutorial", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Glory.prototype, "sfTutorialArr", void 0);
    Slot4Glory = __decorate([
        ccclass
    ], Slot4Glory);
    return Slot4Glory;
}(cc.Component));
exports.default = Slot4Glory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NFR1dG9yaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHFFQUFnRTtBQUcxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQThCQztRQTVCRyxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLG1CQUFhLEdBQXFCLEVBQUUsQ0FBQzs7SUF3QnpDLENBQUM7SUF0QkcseUJBQUksR0FBSixVQUFLLFVBQTBCO1FBQzNCLGVBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELElBQUcsVUFBVSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBQztZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQ0ksSUFBRyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBQztZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQ0ksSUFBRyxVQUFVLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBQztZQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQ0c7WUFDQSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNEO0lBQ0wsQ0FBQztJQUVELHlCQUFJLEdBQUo7UUFDSSxlQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7c0RBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7cURBQ1U7SUFOcEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQThCOUI7SUFBRCxpQkFBQztDQTlCRCxBQThCQyxDQTlCdUMsRUFBRSxDQUFDLFNBQVMsR0E4Qm5EO2tCQTlCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdDRDb250cm9sbGVyIGZyb20gXCIuL1Nsb3Q0Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDRHbG9yeSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveDpjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwcml0ZVR1dG9yaWFsOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNmVHV0b3JpYWxBcnI6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcblxuICAgIHNob3coY29udHJvbGxlcjpTbG90NENvbnRyb2xsZXIpIHtcbiAgICAgICAgVHdlZW4uc2hvd1BvcHVwKHRoaXMubm9kZUJveCx0aGlzLm5vZGVCb3gucGFyZW50KTtcbiAgICAgICAgaWYoY29udHJvbGxlci5iZXRJZCA9PSAtMSl7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZVR1dG9yaWFsLnNwcml0ZUZyYW1lID0gdGhpcy5zZlR1dG9yaWFsQXJyWzJdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoY29udHJvbGxlci5iZXRJZCA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlVHV0b3JpYWwuc3ByaXRlRnJhbWUgPSB0aGlzLnNmVHV0b3JpYWxBcnJbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihjb250cm9sbGVyLmJldElkID09IDEpe1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVUdXRvcmlhbC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZUdXRvcmlhbEFyclsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5zcHJpdGVUdXRvcmlhbC5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZUdXRvcmlhbEFyclsyXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIFR3ZWVuLmhpZGVQb3B1cCh0aGlzLm5vZGVCb3gsdGhpcy5ub2RlQm94LnBhcmVudCxmYWxzZSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxufSJdfQ==