"use strict";
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