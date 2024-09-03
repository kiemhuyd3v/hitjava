"use strict";
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