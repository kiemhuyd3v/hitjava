
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUE7QUFFakI7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSx1RUE4RUM7UUE3RUcsa0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsVUFBRSxHQUFZLElBQUksQ0FBQztRQUVuQixpQkFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixpQkFBUyxHQUFHLEdBQUcsQ0FBQztRQUNoQixrQkFBVSxHQUFHLEdBQUcsQ0FBQzs7SUF1RXJCLENBQUM7SUFyRUcscUJBQUksR0FBSjtRQUFBLG1CQStCQztRQTlCRywwQ0FBMEM7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFj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bkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQTFFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NDQUNDO0lBRW5CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1E7SUFMVCxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBOEUxQjtJQUFELGFBQUM7Q0E5RUQsQUE4RUMsQ0E5RW1DLEVBQUUsQ0FBQyxTQUFTLEdBOEUvQztrQkE5RW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xudmFyIFRXID0gY2MudHdlZW5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGlzQW5pbWF0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHNob3dTY2FsZSA9IDEuMDtcbiAgICBzdGFydFNjYWxlID0gMC43O1xuXG4gICAgc2hvdygpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBhcmVudCA9IEFwcC5pbnN0YW5jZS5jYW52YXM7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbkNvdW50KTtcbiAgICAgICAgaWYgKCF0aGlzLmJnKSB0aGlzLmJnID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmdcIik7XG4gICAgICAgIGlmICghdGhpcy5jb250YWluZXIpIHRoaXMuY29udGFpbmVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5iZy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmJnLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLmJnLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLCAxMjgpKTtcbiAgICAgICAgdGhpcy5iZy5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplKTtcblxuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvLyB0aGlzLmNvbnRhaW5lci5vcGFjaXR5ID0gMDtcbiAgICAgICAgLy8gdGhpcy5jb250YWluZXIuc2NhbGUgPSB0aGlzLnN0YXJ0U2NhbGU7XG4gICAgICAgIC8vIHRoaXMuY29udGFpbmVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgLy8gICAgIGNjLnNwYXduKGNjLnNjYWxlVG8oMC4yLCB0aGlzLnNob3dTY2FsZSksIGNjLmZhZGVJbigwLjIpKSxcbiAgICAgICAgLy8gICAgIGNjLnNjYWxlVG8oMC4xLCAxKSxcbiAgICAgICAgLy8gICAgIGNjLmNhbGxGdW5jKF90aGlzLl9vblNob3dlZC5iaW5kKHRoaXMpKVxuICAgICAgICAvLyApKTtcbiAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgVFcodGhpcy5jb250YWluZXIpXG4gICAgICAgICAgICAuc2V0KHsgb3BhY2l0eTogMCwgc2NhbGU6IHRoaXMuc3RhcnRTY2FsZSB9KVxuICAgICAgICAgICAgLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUsIHNjYWxlOiAxLjAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25TaG93ZWQoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLm1hY3JvLk1BWF9aSU5ERVggLSAxMDtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBpZiAoIXRoaXMuYmcpIHRoaXMuYmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCZ1wiKTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikgdGhpcy5jb250YWluZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuaXNBbmltYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYmcuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5iZy5vcGFjaXR5ID0gMTI4O1xuICAgICAgICB0aGlzLmJnLnJ1bkFjdGlvbihjYy5mYWRlT3V0KDAuMikpO1xuXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNjYWxlID0gMTtcbiAgICAgICAgVFcodGhpcy5jb250YWluZXIpLnRvKDAuMywgeyBzY2FsZTogMC44LCBvcGFjaXR5OiAxNTAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrSW4gfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkRpc21pc3NlZCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIGVkaXRzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHNJbkNoaWxkcmVuKGNjLkVkaXRCb3gpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVkaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlZGl0c1tpXS50YWJJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfb25EaXNtaXNzZWQoKSB7XG4gICAgICAgIHZhciBlZGl0cyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihjYy5FZGl0Qm94KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVkaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBlZGl0c1tpXS50YWJJbmRleCA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=