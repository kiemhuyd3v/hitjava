"use strict";
cc._RF.push(module, '89938zvBc1CAaNyePwL3b4R', 'Dialog');
// Lobby/LobbyScript/Script/common/Dialog.ts

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
var TW = cc.tween;
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.isAnimated = true;
        _this_1.bg = null;
        _this_1.container = null;
        _this_1.showScale = 1.0;
        _this_1.startScale = 0.7;
        return _this_1;
    }
    Dialog.prototype.show = function () {
        var _this_1 = this;
        // this.node.parent = App.instance.canvas;
        var _this = this;
        this.node.setSiblingIndex(this.node.parent.childrenCount);
        if (!this.bg)
            this.bg = this.node.getChildByName("Bg");
        if (!this.container)
            this.container = this.node.getChildByName("Container");
        this.node.active = true;
        this.isAnimated = false;
        this.bg.stopAllActions();
        this.bg.opacity = 0;
        this.bg.runAction(cc.fadeTo(0.2, 128));
        this.bg.setContentSize(cc.winSize);
        // this.container.stopAllActions();
        // this.container.opacity = 0;
        // this.container.scale = this.startScale;
        // this.container.runAction(cc.sequence(
        //     cc.spawn(cc.scaleTo(0.2, this.showScale), cc.fadeIn(0.2)),
        //     cc.scaleTo(0.1, 1),
        //     cc.callFunc(_this._onShowed.bind(this))
        // ));
        cc.Tween.stopAllByTarget(this.container);
        TW(this.container)
            .set({ opacity: 0, scale: this.startScale })
            .to(0.3, { opacity: 255, scale: 1.0 }, { easing: cc.easing.backOut })
            .call(function () {
            _this_1._onShowed();
        })
            .start();
        this.node.zIndex = cc.macro.MAX_ZINDEX - 10;
    };
    Dialog.prototype.dismiss = function () {
        var _this_1 = this;
        if (!this.bg)
            this.bg = this.node.getChildByName("Bg");
        if (!this.container)
            this.container = this.node.getChildByName("Container");
        this.isAnimated = false;
        this.bg.stopAllActions();
        this.bg.opacity = 128;
        this.bg.runAction(cc.fadeOut(0.2));
        this.container.stopAllActions();
        this.container.opacity = 255;
        this.container.scale = 1;
        TW(this.container).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn })
            .call(function () {
            _this_1._onDismissed();
        })
            .start();
    };
    Dialog.prototype._onShowed = function () {
        this.isAnimated = true;
        var edits = this.node.getComponentsInChildren(cc.EditBox);
        for (var i = 0; i < edits.length; i++) {
            edits[i].tabIndex = 0;
        }
    };
    Dialog.prototype._onDismissed = function () {
        var edits = this.node.getComponentsInChildren(cc.EditBox);
        for (var i = 0; i < edits.length; i++) {
            edits[i].tabIndex = -1;
        }
        this.node.active = false;
        this.isAnimated = true;
    };
    __decorate([
        property(cc.Node)
    ], Dialog.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], Dialog.prototype, "container", void 0);
    Dialog = __decorate([
        ccclass
    ], Dialog);
    return Dialog;
}(cc.Component));
exports.default = Dialog;

cc._RF.pop();