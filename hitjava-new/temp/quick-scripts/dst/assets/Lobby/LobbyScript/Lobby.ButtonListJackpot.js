
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.ButtonListJackpot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5CdXR0b25MaXN0SmFja3BvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBMEM7QUFFcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFpSUM7UUE5SEcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQXVCLElBQUksQ0FBQztRQUd4QyxzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEMsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBRWxDLHFCQUFlLEdBQWEsSUFBSSxDQUFDO1FBRWpDLG1CQUFhLEdBQWEsSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsYUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixpQkFBVyxHQUFHLENBQUMsQ0FBQzs7SUFxRzVCLENBQUM7MEJBaklvQixpQkFBaUI7SUE4QmxDLGtDQUFNLEdBQU47UUFBQSxpQkFzQ0M7UUFyQ0csSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTlCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQTBCO1lBQ3JFLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FB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Q2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0REFDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0RBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDYztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzREQUNZO0lBckJkLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBaUlyQztJQUFELHdCQUFDO0NBaklELEFBaUlDLENBakk4QyxFQUFFLENBQUMsU0FBUyxHQWlJMUQ7a0JBaklvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gXCIuL0xvYmJ5LkNtZFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuL1NjcmlwdC9jb21tb24vVHdlZW5cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbkxpc3RKYWNrcG90IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgdG9nZ2xlc0JsaW5kOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsc1JhbmdlUm92ZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxzTWF5QmFjaDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbHNCZW50bGV5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsc1JvbGxzUm95Y2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWxzTWluaVBva2VyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsc1Nsb3QzeDM6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgYnV0dG9uQ2xpY2tlZCA9IHRydWU7XG4gICAgcHJpdmF0ZSBidXR0b25Nb3ZlZCA9IGNjLlZlYzIuWkVSTztcbiAgICBwcml2YXRlIGFuaW1hdGUgPSBmYWxzZTtcblxuICAgIHByaXZhdGUgc3RhdGljIGxhc3RSZXM6IGNtZC5SZXNVcGRhdGVKYWNrcG90cyA9IG51bGw7XG4gICAgcHJpdmF0ZSBzZWxlY3RlZElkeCA9IDA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbk1vdmVkID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uTW92ZWQgPSB0aGlzLmJ1dHRvbk1vdmVkLmFkZChldmVudC5nZXREZWx0YSgpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvbkNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5idXR0b25Nb3ZlZC54KSA+IDMwIHx8IE1hdGguYWJzKHRoaXMuYnV0dG9uTW92ZWQueSkgPiAzMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBwb3MueCArPSB0aGlzLmJ1dHRvbk1vdmVkLng7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ICs9IHRoaXMuYnV0dG9uTW92ZWQueTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb247XG4gICAgICAgICAgICAgICAgcG9zLnggKz0gZXZlbnQuZ2V0RGVsdGFYKCk7XG4gICAgICAgICAgICAgICAgcG9zLnkgKz0gZXZlbnQuZ2V0RGVsdGFZKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uQ2xpY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2hvd1BhbmVsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2dnbGVzQmxpbmQudG9nZ2xlSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlc0JsaW5kLnRvZ2dsZUl0ZW1zW2ldLm5vZGUub24oXCJ0b2dnbGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJZHggPSBpO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgwLjMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVNob3dQYW5lbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuY29udGFpbmVyLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zY2FsZVkgPSAwO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxKS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoKSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4yLCAxLCAwKS5lYXNpbmcoY2MuZWFzZUJhY2tJbigpKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXRhKHJlczogY21kLlJlc1VwZGF0ZUphY2twb3RzKSB7XG4gICAgICAgIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMgPSByZXM7XG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZUphY2twb3QoZHVyYXRpb246IG51bWJlciA9IDQpIHtcbiAgICAgICAgaWYgKEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0ZWRJZHgpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc1JhbmdlUm92ZXIsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMua2hvQmF1MTAwLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYWJlbHNNYXlCYWNoLCBCdXR0b25MaXN0SmFja3BvdC5sYXN0UmVzLk5EVjEwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzQmVudGxleSwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5BdmVuZ2VyczEwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzUm9sbHNSb3ljZSwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5WcXYxMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc01pbmlQb2tlciwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5taW5pUG9rZXIxMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc1Nsb3QzeDMsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMucG9rZUdvMTAwLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYWJlbHNSYW5nZVJvdmVyLCBCdXR0b25MaXN0SmFja3BvdC5sYXN0UmVzLmtob0JhdTEwMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc01heUJhY2gsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMuTkRWMTAwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzQmVudGxleSwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5BdmVuZ2VyczEwMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc1JvbGxzUm95Y2UsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMuVnF2MTAwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzTWluaVBva2VyLCBCdXR0b25MaXN0SmFja3BvdC5sYXN0UmVzLm1pbmlQb2tlcjEwMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc1Nsb3QzeDMsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMucG9rZUdvMTAwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzUmFuZ2VSb3ZlciwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5raG9CYXUxMDAwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzTWF5QmFjaCwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5ORFYxMDAwMCwgZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGFiZWxzQmVudGxleSwgQnV0dG9uTGlzdEphY2twb3QubGFzdFJlcy5BdmVuZ2VyczEwMDAwLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYWJlbHNSb2xsc1JveWNlLCBCdXR0b25MaXN0SmFja3BvdC5sYXN0UmVzLlZxdjEwMDAwLCBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYWJlbHNNaW5pUG9rZXIsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMubWluaVBva2VyMTAwMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxhYmVsc1Nsb3QzeDMsIEJ1dHRvbkxpc3RKYWNrcG90Lmxhc3RSZXMucG9rZUdvMTAwMDAsIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=