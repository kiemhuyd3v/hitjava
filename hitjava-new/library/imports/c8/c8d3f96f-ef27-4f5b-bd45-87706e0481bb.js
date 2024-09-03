"use strict";
cc._RF.push(module, 'c8d3flv7ydPW71Fh3BuBIG7', 'Dialogz');
// Lobby/LobbyScript/Script/common/Dialogz.ts

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
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.isAnimated = true;
        _this_1.bg = null;
        _this_1.container = null;
        _this_1.showScale = 1.1;
        _this_1.startScale = 0.7;
        return _this_1;
    }
    Dialog.prototype.show = function () {
        var _this = this;
        if (!this.bg)
            this.bg = this.node.getChildByName("Bg");
        if (!this.container)
            this.container = this.node.getChildByName("Container");
        this.node.active = true;
        this.isAnimated = false;
        this.bg.stopAllActions();
        this.bg.opacity = 0;
        this.bg.runAction(cc.fadeTo(0.2, 128));
        this.container.stopAllActions();
        this.container.opacity = 0;
        this.container.scale = this.startScale;
        this.container.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.2, this.showScale), cc.fadeIn(0.2)), cc.scaleTo(0.1, 1), cc.callFunc(_this._onShowed.bind(this))));
    };
    Dialog.prototype.dismiss = function () {
        if (!this.bg)
            this.bg = this.node.getChildByName("Bg");
        if (!this.container)
            this.container = this.node.getChildByName("Container");
        var _this = this;
        this.isAnimated = false;
        this.bg.stopAllActions();
        this.bg.opacity = 128;
        this.bg.runAction(cc.fadeOut(0.2));
        this.container.stopAllActions();
        this.container.opacity = 255;
        this.container.scale = 1;
        this.container.runAction(cc.sequence(cc.scaleTo(0.1, this.showScale), cc.spawn(cc.scaleTo(0.2, this.startScale), cc.fadeOut(0.2)), cc.callFunc(_this._onDismissed.bind(this))));
    };
    Dialog.prototype._onShowed = function () {
        this.isAnimated = true;
    };
    Dialog.prototype._onDismissed = function () {
        this.node.active = false;
        this.isAnimated = true;
    };
    Dialog = __decorate([
        ccclass
    ], Dialog);
    return Dialog;
}(cc.Component));
exports.default = Dialog;

cc._RF.pop();