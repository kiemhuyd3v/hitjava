"use strict";
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