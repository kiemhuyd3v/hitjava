"use strict";
cc._RF.push(module, '8e015r6u01LKrMj/o90xAyW', 'Lobby.ButtonListJackpot');
// Lobby/LobbyScript/Lobby.ButtonListJackpot.ts

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
var Tween_1 = require("./Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonListJackpot = /** @class */ (function (_super) {
    __extends(ButtonListJackpot, _super);
    function ButtonListJackpot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.button = null;
        _this.container = null;
        _this.togglesBlind = null;
        _this.labelsRangeRover = null;
        _this.labelsMayBach = null;
        _this.labelsBentley = null;
        _this.labelsRollsRoyce = null;
        _this.labelsMiniPoker = null;
        _this.labelsSlot3x3 = null;
        _this.buttonClicked = true;
        _this.buttonMoved = cc.Vec2.ZERO;
        _this.animate = false;
        _this.selectedIdx = 0;
        return _this;
    }
    ButtonListJackpot_1 = ButtonListJackpot;
    ButtonListJackpot.prototype.onLoad = function () {
        var _this = this;
        this.container.active = false;
        this.button.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.buttonClicked = true;
            _this.buttonMoved = cc.Vec2.ZERO;
        }, this);
        this.button.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            _this.buttonMoved = _this.buttonMoved.add(event.getDelta());
            if (_this.buttonClicked) {
                if (Math.abs(_this.buttonMoved.x) > 30 || Math.abs(_this.buttonMoved.y) > 30) {
                    var pos = _this.node.position;
                    pos.x += _this.buttonMoved.x;
                    pos.y += _this.buttonMoved.y;
                    _this.node.position = pos;
                    _this.buttonClicked = false;
                }
            }
            else {
                var pos = _this.node.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this.node.position = pos;
            }
        }, this);
        this.button.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.buttonClicked) {
                _this.toggleShowPanel();
            }
        }, this);
        var _loop_1 = function (i) {
            this_1.togglesBlind.toggleItems[i].node.on("toggle", function () {
                _this.selectedIdx = i;
                _this.updateJackpot(0.3);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.togglesBlind.toggleItems.length; i++) {
            _loop_1(i);
        }
    };
    ButtonListJackpot.prototype.toggleShowPanel = function () {
        var _this = this;
        if (this.animate)
            return;
        this.animate = true;
        if (!this.container.active) {
            this.container.stopAllActions();
            this.container.active = true;
            this.container.scaleY = 0;
            this.container.runAction(cc.sequence(cc.scaleTo(0.2, 1).easing(cc.easeBackOut()), cc.callFunc(function () {
                _this.animate = false;
            })));
        }
        else {
            this.container.stopAllActions();
            this.container.runAction(cc.sequence(cc.scaleTo(0.2, 1, 0).easing(cc.easeBackIn()), cc.callFunc(function () {
                _this.container.active = false;
                _this.animate = false;
            })));
        }
    };
    ButtonListJackpot.prototype.setData = function (res) {
        ButtonListJackpot_1.lastRes = res;
        this.updateJackpot();
    };
    ButtonListJackpot.prototype.updateJackpot = function (duration) {
        if (duration === void 0) { duration = 4; }
        if (ButtonListJackpot_1.lastRes == null)
            return;
        switch (this.selectedIdx) {
            case 0:
                Tween_1.default.numberTo(this.labelsRangeRover, ButtonListJackpot_1.lastRes.khoBau100, duration);
                Tween_1.default.numberTo(this.labelsMayBach, ButtonListJackpot_1.lastRes.NDV100, duration);
                Tween_1.default.numberTo(this.labelsBentley, ButtonListJackpot_1.lastRes.Avengers100, duration);
                Tween_1.default.numberTo(this.labelsRollsRoyce, ButtonListJackpot_1.lastRes.Vqv100, duration);
                Tween_1.default.numberTo(this.labelsMiniPoker, ButtonListJackpot_1.lastRes.miniPoker100, duration);
                Tween_1.default.numberTo(this.labelsSlot3x3, ButtonListJackpot_1.lastRes.pokeGo100, duration);
                break;
            case 1:
                Tween_1.default.numberTo(this.labelsRangeRover, ButtonListJackpot_1.lastRes.khoBau1000, duration);
                Tween_1.default.numberTo(this.labelsMayBach, ButtonListJackpot_1.lastRes.NDV1000, duration);
                Tween_1.default.numberTo(this.labelsBentley, ButtonListJackpot_1.lastRes.Avengers1000, duration);
                Tween_1.default.numberTo(this.labelsRollsRoyce, ButtonListJackpot_1.lastRes.Vqv1000, duration);
                Tween_1.default.numberTo(this.labelsMiniPoker, ButtonListJackpot_1.lastRes.miniPoker1000, duration);
                Tween_1.default.numberTo(this.labelsSlot3x3, ButtonListJackpot_1.lastRes.pokeGo1000, duration);
                break;
            case 2:
                Tween_1.default.numberTo(this.labelsRangeRover, ButtonListJackpot_1.lastRes.khoBau10000, duration);
                Tween_1.default.numberTo(this.labelsMayBach, ButtonListJackpot_1.lastRes.NDV10000, duration);
                Tween_1.default.numberTo(this.labelsBentley, ButtonListJackpot_1.lastRes.Avengers10000, duration);
                Tween_1.default.numberTo(this.labelsRollsRoyce, ButtonListJackpot_1.lastRes.Vqv10000, duration);
                Tween_1.default.numberTo(this.labelsMiniPoker, ButtonListJackpot_1.lastRes.miniPoker10000, duration);
                Tween_1.default.numberTo(this.labelsSlot3x3, ButtonListJackpot_1.lastRes.pokeGo10000, duration);
                break;
        }
    };
    var ButtonListJackpot_1;
    ButtonListJackpot.lastRes = null;
    __decorate([
        property(cc.Node)
    ], ButtonListJackpot.prototype, "button", void 0);
    __decorate([
        property(cc.Node)
    ], ButtonListJackpot.prototype, "container", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], ButtonListJackpot.prototype, "togglesBlind", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonListJackpot.prototype, "labelsRangeRover", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonListJackpot.prototype, "labelsMayBach", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonListJackpot.prototype, "labelsBentley", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonListJackpot.prototype, "labelsRollsRoyce", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonListJackpot.prototype, "labelsMiniPoker", void 0);
    __decorate([
        property(cc.Label)
    ], ButtonListJackpot.prototype, "labelsSlot3x3", void 0);
    ButtonListJackpot = ButtonListJackpot_1 = __decorate([
        ccclass
    ], ButtonListJackpot);
    return ButtonListJackpot;
}(cc.Component));
exports.default = ButtonListJackpot;

cc._RF.pop();