"use strict";
cc._RF.push(module, 'dd656ny0zpC6q+M7t8zKmpW', 'Common.AudioManager');
// Lobby/LobbyScript/Script/common/Common.AudioManager.ts

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
var BroadcastReceiver_1 = require("./BroadcastReceiver");
var SPUtils_1 = require("./SPUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioManager = /** @class */ (function (_super) {
    __extends(AudioManager, _super);
    function AudioManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.audioSource = null;
        _this.isOnMusic = true;
        _this.isOnSound = true;
        return _this;
    }
    AudioManager_1 = AudioManager;
    AudioManager.getInstance = function () {
        if (this.instance == null) {
            var node = new cc.Node("AudioManager");
            this.instance = node.addComponent(AudioManager_1);
            this.instance.audioSource = node.addComponent(cc.AudioSource);
            cc.game.addPersistRootNode(node);
        }
        return this.instance;
    };
    AudioManager.prototype.start = function () {
        var _this = this;
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.ON_AUDIO_CHANGED, function () {
            _this.isOnMusic = SPUtils_1.default.getMusicVolumn() > 0;
            _this.isOnSound = SPUtils_1.default.getSoundVolumn() > 0;
            _this.audioSource.mute = !_this.isOnMusic;
            if (!_this.isOnSound) {
                cc.audioEngine.stopAllEffects();
            }
        }, this);
        this.isOnMusic = SPUtils_1.default.getMusicVolumn() > 0;
        this.isOnSound = SPUtils_1.default.getSoundVolumn() > 0;
        this.audioSource.mute = !this.isOnMusic;
    };
    AudioManager.prototype.playEffect = function (audioClip, volumn) {
        if (volumn === void 0) { volumn = 1; }
        if (audioClip == null) {
            //   cc.warn("AudioManager playEffect audioClip is null");
            return;
        }
        if (this.isOnSound && volumn > 0)
            cc.audioEngine.play(audioClip, false, volumn);
    };
    AudioManager.prototype.playBackgroundMusic = function (audioClip, loop, volumn) {
        if (loop === void 0) { loop = true; }
        if (volumn === void 0) { volumn = 1; }
        if (audioClip == null) {
            //   cc.warn("AudioManager playBackgroundMusic audioClip is null");
            //Utils.Log("AudioManager playBackgroundMusic audioClip is null");
            return;
        }
        this.audioSource.stop();
        this.audioSource.clip = audioClip;
        this.audioSource.volume = volumn;
        this.audioSource.mute = !this.isOnMusic;
        this.audioSource.loop = loop;
        this.audioSource.play();
    };
    var AudioManager_1;
    AudioManager.instance = null;
    AudioManager = AudioManager_1 = __decorate([
        ccclass
    ], AudioManager);
    return AudioManager;
}(cc.Component));
exports.default = AudioManager;

cc._RF.pop();