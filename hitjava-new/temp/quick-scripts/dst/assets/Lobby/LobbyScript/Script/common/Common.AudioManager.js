
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Common.AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ29tbW9uLkF1ZGlvTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQscUNBQWdDO0FBRzFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBcURDO1FBeENXLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQUNuQyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGVBQVMsR0FBRyxJQUFJLENBQUM7O0lBc0M3QixDQUFDO3FCQXJEb0IsWUFBWTtJQUdmLHdCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVksQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlELEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQU1ELDRCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpHLDJCQUFpQixDQUFDLFFBQVEsQ0FBQywyQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMzRCxLQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLEtBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFOUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBRU0saUNBQVUsR0FBakIsVUFBa0IsU0FBdUIsRUFBRSxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLFVBQWtCO1FBQ3pELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUN0QiwwREFBMEQ7WUFDdkQsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLE1BQU0sR0FBRyxDQUFDO1lBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sMENBQW1CLEdBQTFCLFVBQTJCLFNBQXVCLEVBQUUsSUFBb0IsRUFBRSxNQUFrQjtRQUF4QyxxQkFBQSxFQUFBLFdBQW9CO1FBQUUsdUJBQUEsRUFBQSxVQUFrQjtRQUN4RixJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDdEIsbUVBQW1FO1lBQy9ELGtFQUFrRTtZQUNuRSxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7O0lBbERjLHFCQUFRLEdBQWlCLElBQUksQ0FBQztJQUY1QixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBcURoQztJQUFELG1CQUFDO0NBckRELEFBcURDLENBckR5QyxFQUFFLENBQUMsU0FBUyxHQXFEckQ7a0JBckRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi9TUFV0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1ZGlvTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogQXVkaW9NYW5hZ2VyID0gbnVsbDtcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEF1ZGlvTWFuYWdlciB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoXCJBdWRpb01hbmFnZXJcIik7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbm9kZS5hZGRDb21wb25lbnQoQXVkaW9NYW5hZ2VyKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuYXVkaW9Tb3VyY2UgPSBub2RlLmFkZENvbXBvbmVudChjYy5BdWRpb1NvdXJjZSk7XG4gICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShub2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1ZGlvU291cmNlOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBpc09uTXVzaWMgPSB0cnVlO1xuICAgIHByaXZhdGUgaXNPblNvdW5kID0gdHJ1ZTtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5PTl9BVURJT19DSEFOR0VELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzT25NdXNpYyA9IFNQVXRpbHMuZ2V0TXVzaWNWb2x1bW4oKSA+IDA7XG4gICAgICAgICAgICB0aGlzLmlzT25Tb3VuZCA9IFNQVXRpbHMuZ2V0U291bmRWb2x1bW4oKSA+IDA7XG5cbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubXV0ZSA9ICF0aGlzLmlzT25NdXNpYztcbiAgICAgICAgICAgIGlmICghdGhpcy5pc09uU291bmQpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5pc09uTXVzaWMgPSBTUFV0aWxzLmdldE11c2ljVm9sdW1uKCkgPiAwO1xuICAgICAgICB0aGlzLmlzT25Tb3VuZCA9IFNQVXRpbHMuZ2V0U291bmRWb2x1bW4oKSA+IDA7XG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubXV0ZSA9ICF0aGlzLmlzT25NdXNpYztcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheUVmZmVjdChhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCwgdm9sdW1uOiBudW1iZXIgPSAxKSB7XG4gICAgICAgIGlmIChhdWRpb0NsaXAgPT0gbnVsbCkge1xuICAgICAgICAgLy8gICBjYy53YXJuKFwiQXVkaW9NYW5hZ2VyIHBsYXlFZmZlY3QgYXVkaW9DbGlwIGlzIG51bGxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNPblNvdW5kICYmIHZvbHVtbiA+IDApIGNjLmF1ZGlvRW5naW5lLnBsYXkoYXVkaW9DbGlwLCBmYWxzZSwgdm9sdW1uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxheUJhY2tncm91bmRNdXNpYyhhdWRpb0NsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiA9IHRydWUsIHZvbHVtbjogbnVtYmVyID0gMSkge1xuICAgICAgICBpZiAoYXVkaW9DbGlwID09IG51bGwpIHtcbiAgICAgICAgIC8vICAgY2Mud2FybihcIkF1ZGlvTWFuYWdlciBwbGF5QmFja2dyb3VuZE11c2ljIGF1ZGlvQ2xpcCBpcyBudWxsXCIpO1xuICAgICAgICAgICAgIC8vVXRpbHMuTG9nKFwiQXVkaW9NYW5hZ2VyIHBsYXlCYWNrZ3JvdW5kTXVzaWMgYXVkaW9DbGlwIGlzIG51bGxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5zdG9wKCk7XG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UuY2xpcCA9IGF1ZGlvQ2xpcDtcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS52b2x1bWUgPSB2b2x1bW47XG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UubXV0ZSA9ICF0aGlzLmlzT25NdXNpYztcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5sb29wID0gbG9vcDtcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XG4gICAgfVxufVxuIl19