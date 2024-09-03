
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/ShootFish/ShootFishScript/ShootFish.PanelMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ebbaXYFItGA4MRPRT0exe9', 'ShootFish.PanelMenu');
// ShootFish/ShootFishScript/ShootFish.PanelMenu.ts

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
var ShootFish_Play_1 = require("./ShootFish.Play");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelMenu = /** @class */ (function (_super) {
    __extends(PanelMenu, _super);
    function PanelMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrow = null;
        _this.btnSound = null;
        _this.sfSoundOn = null;
        _this.sfSoundOff = null;
        _this.btnMusic = null;
        _this.sfMusicOn = null;
        _this.sfMusicOff = null;
        _this.isShow = false;
        _this.soundState = 1;
        _this.musicState = 1;
        return _this;
    }
    PanelMenu.prototype.show = function (isShow) {
        this.isShow = isShow;
        if (this.isShow) {
            this.node.runAction(cc.moveTo(0.3, cc.v2(-115, 0)));
            this.arrow.runAction(cc.rotateTo(0.3, 0));
        }
        else {
            this.node.runAction(cc.moveTo(0.3, cc.v2(0, 0)));
            this.arrow.runAction(cc.rotateTo(0.3, 180));
        }
        this.btnSound.getComponent(cc.Sprite).spriteFrame = this.getSound() > 0 ? this.sfSoundOn : this.sfSoundOff;
        this.btnMusic.getComponent(cc.Sprite).spriteFrame = this.getMussic() > 0 ? this.sfMusicOn : this.sfMusicOff;
    };
    PanelMenu.prototype.toggleShow = function () {
        this.show(!this.isShow);
    };
    PanelMenu.prototype.toggleSound = function () {
        //SPUtils.setSoundVolumn(SPUtils.getSoundVolumn() > 0 ? 0 : 1);
        var state = this.getSound() > 0 ? 0 : 1;
        this.btnSound.getComponent(cc.Sprite).spriteFrame = state > 0 ? this.sfSoundOn : this.sfSoundOff;
        ShootFish_Play_1.default.instance.settingSound();
    };
    PanelMenu.prototype.toggleMusic = function () {
        //SPUtils.setMusicVolumn(SPUtils.getMusicVolumn() > 0 ? 0 : 1);
        var state = this.getMussic() > 0 ? 0 : 1;
        //  cc.log("toggle music result "+state);
        this.btnMusic.getComponent(cc.Sprite).spriteFrame = state > 0 ? this.sfMusicOn : this.sfMusicOff;
        ShootFish_Play_1.default.instance.settingMusic();
    };
    PanelMenu.prototype.getSound = function () {
        var soundSave = cc.sys.localStorage.getItem("sound_fish_shot");
        if (soundSave != null) {
            this.soundState = parseInt(soundSave);
        }
        return this.soundState;
    };
    PanelMenu.prototype.getMussic = function () {
        var soundSave = cc.sys.localStorage.getItem("music_fish_shot");
        if (soundSave != null) {
            this.musicState = parseInt(soundSave);
        }
        return this.musicState;
    };
    __decorate([
        property(cc.Node)
    ], PanelMenu.prototype, "arrow", void 0);
    __decorate([
        property(cc.Button)
    ], PanelMenu.prototype, "btnSound", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PanelMenu.prototype, "sfSoundOn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PanelMenu.prototype, "sfSoundOff", void 0);
    __decorate([
        property(cc.Button)
    ], PanelMenu.prototype, "btnMusic", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PanelMenu.prototype, "sfMusicOn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PanelMenu.prototype, "sfMusicOff", void 0);
    PanelMenu = __decorate([
        ccclass
    ], PanelMenu);
    return PanelMenu;
}(cc.Component));
exports.default = PanelMenu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2hvb3RGaXNoXFxTaG9vdEZpc2hTY3JpcHRcXFNob290RmlzaC5QYW5lbE1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW9DO0FBRTlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBK0VDO1FBNUVHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQW1CLElBQUksQ0FBQztRQUVqQyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFFMUIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUVmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZ0JBQVUsR0FBRyxDQUFDLENBQUM7O0lBeUQzQixDQUFDO0lBdkRHLHdCQUFJLEdBQUosVUFBSyxNQUFlO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FB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SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNTO0lBR2xDO1FBRkMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBRU87SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztnREFDUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO2lEQUNTO0lBakJqQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0U3QjtJQUFELGdCQUFDO0NBL0VELEFBK0VDLENBL0VzQyxFQUFFLENBQUMsU0FBUyxHQStFbEQ7a0JBL0VvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXkgZnJvbSBcIi4vU2hvb3RGaXNoLlBsYXlcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbmVsTWVudSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBhcnJvdzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blNvdW5kOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZlNvdW5kT246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZTb3VuZE9mZjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG5cbiAgICBidG5NdXNpYzogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZNdXNpY09uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmTXVzaWNPZmY6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNTaG93ID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNvdW5kU3RhdGUgPSAxO1xuICAgIHByaXZhdGUgbXVzaWNTdGF0ZSA9IDE7XG5cbiAgICBzaG93KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmlzU2hvdyA9IGlzU2hvdztcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLm1vdmVUbygwLjMsIGNjLnYyKC0xMTUsIDApKSk7XG4gICAgICAgICAgICB0aGlzLmFycm93LnJ1bkFjdGlvbihjYy5yb3RhdGVUbygwLjMsIDApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuMywgY2MudjIoMCwgMCkpKTtcbiAgICAgICAgICAgIHRoaXMuYXJyb3cucnVuQWN0aW9uKGNjLnJvdGF0ZVRvKDAuMywgMTgwKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYnRuU291bmQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNvdW5kKCkgPiAwID8gdGhpcy5zZlNvdW5kT24gOiB0aGlzLnNmU291bmRPZmY7XG4gICAgICAgIHRoaXMuYnRuTXVzaWMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmdldE11c3NpYygpID4gMCA/IHRoaXMuc2ZNdXNpY09uIDogdGhpcy5zZk11c2ljT2ZmO1xuICAgIH1cblxuICAgIHRvZ2dsZVNob3coKSB7XG4gICAgICAgIHRoaXMuc2hvdyghdGhpcy5pc1Nob3cpO1xuICAgIH1cblxuICAgIHRvZ2dsZVNvdW5kKCkge1xuICAgICAgICAvL1NQVXRpbHMuc2V0U291bmRWb2x1bW4oU1BVdGlscy5nZXRTb3VuZFZvbHVtbigpID4gMCA/IDAgOiAxKTtcbiAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5nZXRTb3VuZCgpID4gMCA/IDAgOiAxO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5idG5Tb3VuZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHN0YXRlID4gMCA/IHRoaXMuc2ZTb3VuZE9uIDogdGhpcy5zZlNvdW5kT2ZmO1xuICAgICAgICBQbGF5Lmluc3RhbmNlLnNldHRpbmdTb3VuZCgpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVNdXNpYygpIHtcbiAgICAgICAgLy9TUFV0aWxzLnNldE11c2ljVm9sdW1uKFNQVXRpbHMuZ2V0TXVzaWNWb2x1bW4oKSA+IDAgPyAwIDogMSk7XG4gICAgICAgIFxuICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLmdldE11c3NpYygpID4gMCA/IDAgOiAxO1xuICAgICAgICAvLyAgY2MubG9nKFwidG9nZ2xlIG11c2ljIHJlc3VsdCBcIitzdGF0ZSk7XG4gICAgICAgIFxuXG4gICAgICAgIHRoaXMuYnRuTXVzaWMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzdGF0ZSA+IDAgPyB0aGlzLnNmTXVzaWNPbiA6IHRoaXMuc2ZNdXNpY09mZjtcbiAgICAgICAgUGxheS5pbnN0YW5jZS5zZXR0aW5nTXVzaWMoKTtcbiAgICB9XG4gICAgZ2V0U291bmQoKXtcbiAgICAgICAgXG4gICAgICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzb3VuZF9maXNoX3Nob3RcIik7XG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zb3VuZFN0YXRlO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBnZXRNdXNzaWMoKXtcbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljX2Zpc2hfc2hvdFwiKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljU3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm11c2ljU3RhdGU7XG4gICAgfVxuICAgIFxufVxuIl19