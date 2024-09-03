
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Tween.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b463e/ybFpMl6HKyeG5WLZz', 'Tween');
// Lobby/LobbyScript/Script/common/Tween.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var common;
(function (common) {
    var TweenListener = /** @class */ (function () {
        function TweenListener() {
            this.target = null;
            this.duration = 0;
            this.curDuration = 0;
            this.callback = null;
        }
        return TweenListener;
    }());
    common.TweenListener = TweenListener;
    var Tween = /** @class */ (function (_super) {
        __extends(Tween, _super);
        function Tween() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.skeepFrame = false;
            _this.countSkeep = 1;
            _this.curCountSkeep = 0;
            _this.delta = 0;
            return _this;
        }
        Tween_1 = Tween;
        Tween.getInstance = function () {
            if (this.instance == null) {
                var node = new cc.Node();
                node.name = "Tween";
                cc.game.addPersistRootNode(node);
                this.instance = node.addComponent(Tween_1);
            }
            return this.instance;
        };
        Tween.prototype.update = function (dt) {
            if (this.skeepFrame) {
                this.curCountSkeep++;
                this.delta += dt;
                if (this.curCountSkeep >= this.countSkeep) {
                    this.curCountSkeep = 0;
                    this.skeepFrame = false;
                }
                return;
            }
            for (var i = 0; i < Tween_1.listeners.length; i++) {
                var listener = Tween_1.listeners[i];
                if (listener.target && listener.target instanceof cc.Component && listener.target.node) {
                    listener.curDuration = Math.min(listener.duration, listener.curDuration + dt + this.delta);
                    listener.callback(listener.curDuration / listener.duration);
                    if (listener.curDuration >= listener.duration) {
                        Tween_1.listeners.splice(i--, 1);
                    }
                }
                else {
                    Tween_1.listeners.splice(i--, 1);
                }
            }
            this.skeepFrame = true;
            this.delta = 0;
        };
        Tween.numberTo = function (label, toNumber, duration, format) {
            if (format === void 0) { format = function (n) { return Utils_1.default.formatNumber(n); }; }
            this.getInstance();
            var listener = null;
            for (var i = 0; i < Tween_1.listeners.length; i++) {
                var _listener = Tween_1.listeners[i];
                if (_listener.target == label) {
                    listener = _listener;
                    break;
                }
            }
            if (listener == null) {
                listener = new TweenListener();
                this.listeners.push(listener);
            }
            var startNumber = Utils_1.default.stringToInt(label.string);
            var distance = toNumber - startNumber;
            listener.curDuration = 0;
            listener.duration = duration;
            listener.target = label;
            listener.callback = function (p) {
                label.string = format(parseInt("" + (startNumber + distance * p)));
            };
        };
        Tween.showPopup = function (box, parent) {
            parent.active = true;
            box.scale = 0;
            parent.opacity = 0;
            cc.Tween.stopAllByTarget(box);
            cc.Tween.stopAllByTarget(parent);
            cc.tween(box)
                .to(0.5, { scale: 1 }, { easing: "backOut" })
                .start();
            cc.tween(parent)
                .to(0.3, { opacity: 255 }, { easing: "linear" })
                .start();
        };
        Tween.hidePopup = function (box, parent, isDestroy) {
            if (isDestroy === void 0) { isDestroy = true; }
            cc.Tween.stopAllByTarget(box);
            cc.Tween.stopAllByTarget(parent);
            cc.tween(box)
                .to(0.5, { scale: 0 }, { easing: "backIn" })
                .call(function () {
                if (isDestroy) {
                    parent.destroy();
                }
                else {
                    parent.active = false;
                }
            })
                .start();
            cc.tween(parent)
                .to(0.5, { opacity: 0 }, { easing: "linear" })
                .start();
        };
        var Tween_1;
        Tween.instance = null;
        Tween.listeners = new Array();
        Tween = Tween_1 = __decorate([
            ccclass
        ], Tween);
        return Tween;
    }(cc.Component));
    common.Tween = Tween;
})(common || (common = {}));
exports.default = common.Tween;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcVHdlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUNBQTRCO0FBRXRCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQVUsTUFBTSxDQXNIZjtBQXRIRCxXQUFVLE1BQU07SUFFWjtRQUFBO1lBQ0ksV0FBTSxHQUFpQixJQUFJLENBQUM7WUFDNUIsYUFBUSxHQUFXLENBQUMsQ0FBQztZQUNyQixnQkFBVyxHQUFXLENBQUMsQ0FBQztZQUN4QixhQUFRLEdBQXdCLElBQUksQ0FBQztRQUN6QyxDQUFDO1FBQUQsb0JBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLG9CQUFhLGdCQUt6QixDQUFBO0lBR0Q7UUFBMkIseUJBQVk7UUFBdkM7WUFBQSxxRUF5R0M7WUExRlcsZ0JBQVUsR0FBRyxLQUFLLENBQUM7WUFDVixnQkFBVSxHQUFHLENBQUMsQ0FBQztZQUN4QixtQkFBYSxHQUFHLENBQUMsQ0FBQztZQUNsQixXQUFLLEdBQUcsQ0FBQyxDQUFDOztRQXVGdEIsQ0FBQztrQkF6R1ksS0FBSztRQUdDLGlCQUFXLEdBQTFCO1lBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBSyxDQUFDLENBQUM7YUFDNUM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENB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WUFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1IsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztpQkFDM0MsSUFBSSxDQUFDO2dCQUNGLElBQUcsU0FBUyxFQUFDO29CQUNULE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDcEI7cUJBQ0c7b0JBQ0EsTUFBTSxDQUFDLE1BQU0sR0FBSSxLQUFLLENBQUM7aUJBQzFCO1lBQ0wsQ0FBQyxDQUFDO2lCQUNELEtBQUssRUFBRSxDQUFDO1lBRWIsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7aUJBQ1gsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztpQkFDN0MsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQzs7UUF0R2MsY0FBUSxHQUFVLElBQUksQ0FBQztRQVd2QixlQUFTLEdBQUcsSUFBSSxLQUFLLEVBQWlCLENBQUM7UUFiN0MsS0FBSztZQURqQixPQUFPO1dBQ0ssS0FBSyxDQXlHakI7UUFBRCxZQUFDO0tBekdELEFBeUdDLENBekcwQixFQUFFLENBQUMsU0FBUyxHQXlHdEM7SUF6R1ksWUFBSyxRQXlHakIsQ0FBQTtBQUdMLENBQUMsRUF0SFMsTUFBTSxLQUFOLE1BQU0sUUFzSGY7QUFDRCxrQkFBZSxNQUFNLENBQUMsS0FBSyxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gXCIuL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbm5hbWVzcGFjZSBjb21tb24ge1xuXG4gICAgZXhwb3J0IGNsYXNzIFR3ZWVuTGlzdGVuZXIge1xuICAgICAgICB0YXJnZXQ6IGNjLkNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xuICAgICAgICBjdXJEdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgY2FsbGJhY2s6IChwOiBudW1iZXIpID0+IHZvaWQgPSBudWxsO1xuICAgIH1cblxuICAgIEBjY2NsYXNzXG4gICAgZXhwb3J0IGNsYXNzIFR3ZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogVHdlZW4gPSBudWxsO1xuICAgICAgICBwcml2YXRlIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBUd2VlbiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgIG5vZGUubmFtZSA9IFwiVHdlZW5cIjtcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbm9kZS5hZGRDb21wb25lbnQoVHdlZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIHN0YXRpYyBsaXN0ZW5lcnMgPSBuZXcgQXJyYXk8VHdlZW5MaXN0ZW5lcj4oKTtcblxuICAgICAgICBwcml2YXRlIHNrZWVwRnJhbWUgPSBmYWxzZTtcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBjb3VudFNrZWVwID0gMTtcbiAgICAgICAgcHJpdmF0ZSBjdXJDb3VudFNrZWVwID0gMDtcbiAgICAgICAgcHJpdmF0ZSBkZWx0YSA9IDA7XG5cbiAgICAgICAgdXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNrZWVwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckNvdW50U2tlZXArKztcbiAgICAgICAgICAgICAgICB0aGlzLmRlbHRhICs9IGR0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1ckNvdW50U2tlZXAgPj0gdGhpcy5jb3VudFNrZWVwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyQ291bnRTa2VlcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2tlZXBGcmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IFR3ZWVuLmxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IFR3ZWVuLmxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIudGFyZ2V0ICYmIGxpc3RlbmVyLnRhcmdldCBpbnN0YW5jZW9mIGNjLkNvbXBvbmVudCAmJiBsaXN0ZW5lci50YXJnZXQubm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jdXJEdXJhdGlvbiA9IE1hdGgubWluKGxpc3RlbmVyLmR1cmF0aW9uLCBsaXN0ZW5lci5jdXJEdXJhdGlvbiArIGR0ICsgdGhpcy5kZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGxiYWNrKGxpc3RlbmVyLmN1ckR1cmF0aW9uIC8gbGlzdGVuZXIuZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIuY3VyRHVyYXRpb24gPj0gbGlzdGVuZXIuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLmxpc3RlbmVycy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuLmxpc3RlbmVycy5zcGxpY2UoaS0tLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2tlZXBGcmFtZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmRlbHRhID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRpYyBudW1iZXJUbyhsYWJlbDogY2MuTGFiZWwsIHRvTnVtYmVyOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIsIGZvcm1hdDogKG46IG51bWJlcikgPT4gc3RyaW5nID0gKG4pID0+IHsgcmV0dXJuIFV0aWxzLmZvcm1hdE51bWJlcihuKSB9KSB7XG4gICAgICAgICAgICB0aGlzLmdldEluc3RhbmNlKCk7XG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBUd2Vlbi5saXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2xpc3RlbmVyID0gVHdlZW4ubGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChfbGlzdGVuZXIudGFyZ2V0ID09IGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gX2xpc3RlbmVyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gbmV3IFR3ZWVuTGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdGFydE51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KGxhYmVsLnN0cmluZyk7XG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSB0b051bWJlciAtIHN0YXJ0TnVtYmVyO1xuICAgICAgICAgICAgbGlzdGVuZXIuY3VyRHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgbGlzdGVuZXIuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIGxpc3RlbmVyLnRhcmdldCA9IGxhYmVsO1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbGJhY2sgPSAocDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gZm9ybWF0KHBhcnNlSW50KFwiXCIgKyAoc3RhcnROdW1iZXIgKyBkaXN0YW5jZSAqIHApKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc3RhdGljIHNob3dQb3B1cChib3g6Y2MuTm9kZSxwYXJlbnQ6Y2MuTm9kZSl7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJveC5zY2FsZSA9IDA7XG4gICAgICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoYm94KTtcbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChwYXJlbnQpO1xuICAgICAgICAgICAgY2MudHdlZW4oYm94KVxuICAgICAgICAgICAgICAgIC50bygwLjUsIHsgc2NhbGU6IDEgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgXG4gICAgICAgICAgICBjYy50d2VlbihwYXJlbnQpXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwibGluZWFyXCIgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBwdWJsaWMgc3RhdGljIGhpZGVQb3B1cChib3g6Y2MuTm9kZSxwYXJlbnQ6Y2MuTm9kZSxpc0Rlc3Ryb3k6Ym9vbGVhbiA9IHRydWUpe1xuICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGJveCk7XG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQocGFyZW50KTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGJveClcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwIH0sIHsgZWFzaW5nOiBcImJhY2tJblwiIH0pXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihpc0Rlc3Ryb3kpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9ICBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgXG4gICAgICAgICAgICBjYy50d2VlbihwYXJlbnQpXG4gICAgICAgICAgICAgICAgLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZXhwb3J0IGRlZmF1bHQgY29tbW9uLlR3ZWVuOyJdfQ==