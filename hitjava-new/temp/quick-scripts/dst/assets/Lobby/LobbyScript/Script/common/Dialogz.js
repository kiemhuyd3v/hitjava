
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Dialogz.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcRGlhbG9nei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFvQywwQkFBWTtJQUFoRDtRQUFBLHVFQXlEQztRQXhERyxrQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixVQUFFLEdBQVksSUFBSSxDQUFDO1FBQ25CLGlCQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGlCQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGtCQUFVLEdBQUcsR0FBRyxDQUFDOztJQW1EckIsQ0FBQztJQWpERyxxQkFBSSxHQUFKO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFeEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDekQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQ2xCLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDMUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdCQUFPLEdBQVA7UUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBRXhCLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDaEMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUMvQixFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQzNELEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDN0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBeERnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeUQxQjtJQUFELGFBQUM7Q0F6REQsQUF5REMsQ0F6RG1DLEVBQUUsQ0FBQyxTQUFTLEdBeUQvQztrQkF6RG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGlzQW5pbWF0ZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBzaG93U2NhbGUgPSAxLjE7XHJcbiAgICBzdGFydFNjYWxlID0gMC43O1xyXG5cclxuICAgIHNob3coKTogdm9pZCB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZighdGhpcy5iZykgdGhpcy5iZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJnXCIpO1xyXG4gICAgICAgIGlmKCF0aGlzLmNvbnRhaW5lcikgdGhpcy5jb250YWluZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb250YWluZXJcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuYmcuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmJnLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuYmcucnVuQWN0aW9uKGNjLmZhZGVUbygwLjIsIDEyOCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnNjYWxlID0gdGhpcy5zdGFydFNjYWxlO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc3Bhd24oY2Muc2NhbGVUbygwLjIsIHRoaXMuc2hvd1NjYWxlKSwgY2MuZmFkZUluKDAuMikpLFxyXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuMSwgMSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKF90aGlzLl9vblNob3dlZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3MoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuYmcpIHRoaXMuYmcgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJCZ1wiKTtcclxuICAgICAgICBpZighdGhpcy5jb250YWluZXIpIHRoaXMuY29udGFpbmVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5iZy5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuYmcub3BhY2l0eSA9IDEyODtcclxuICAgICAgICB0aGlzLmJnLnJ1bkFjdGlvbihjYy5mYWRlT3V0KDAuMikpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIHRoaXMuc2hvd1NjYWxlKSxcclxuICAgICAgICAgICAgY2Muc3Bhd24oY2Muc2NhbGVUbygwLjIsIHRoaXMuc3RhcnRTY2FsZSksIGNjLmZhZGVPdXQoMC4yKSksXHJcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKF90aGlzLl9vbkRpc21pc3NlZC5iaW5kKHRoaXMpKVxyXG4gICAgICAgICkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblNob3dlZCgpIHtcclxuICAgICAgICB0aGlzLmlzQW5pbWF0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIF9vbkRpc21pc3NlZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0FuaW1hdGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=