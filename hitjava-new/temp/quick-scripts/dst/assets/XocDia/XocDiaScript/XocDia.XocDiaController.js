
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/XocDia/XocDiaScript/XocDia.XocDiaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aad824KfeNGiJI70LxlK0AI', 'XocDia.XocDiaController');
// XocDia/XocDiaScript/XocDia.XocDiaController.ts

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
exports.SoundManager = void 0;
var XocDia_Lobby_1 = require("./XocDia.Lobby");
var XocDia_Play_1 = require("./XocDia.Play");
var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Network_Cmd_1 = require("../../Lobby/LobbyScript/Script/networks/Network.Cmd");
var SPUtils_1 = require("../../Lobby/LobbyScript/Script/common/SPUtils");
var Common_AudioManager_1 = require("../../Lobby/LobbyScript/Script/common/Common.AudioManager");
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["BG"] = 0] = "BG";
    audio_clip[audio_clip["LOSE"] = 1] = "LOSE";
    audio_clip[audio_clip["WIN"] = 2] = "WIN";
    audio_clip[audio_clip["START_GAME"] = 3] = "START_GAME";
    audio_clip[audio_clip["XOC_DIA"] = 4] = "XOC_DIA";
    audio_clip[audio_clip["CHIP"] = 5] = "CHIP";
})(audio_clip || (audio_clip = {}));
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SoundManager = /** @class */ (function () {
    function SoundManager() {
        this.bgMusic = null;
        this.effSound = null;
        this.listAudio = [];
    }
    SoundManager.prototype.playBgMusic = function () {
        if (SPUtils_1.default.getMusicVolumn() > 0) {
            this.bgMusic.clip = this.listAudio[audio_clip.BG];
            this.bgMusic.play();
        }
    };
    SoundManager.prototype.playAudioEffect = function (indexAudio) {
        if (SPUtils_1.default.getSoundVolumn() > 0) {
            cc.audioEngine.play(this.listAudio[indexAudio], false, 1);
        }
    };
    SoundManager.prototype.stopBgMusic = function () {
        this.bgMusic.stop();
    };
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "bgMusic", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "effSound", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "listAudio", void 0);
    SoundManager = __decorate([
        ccclass("XocDia.SoundManager")
    ], SoundManager);
    return SoundManager;
}());
exports.SoundManager = SoundManager;
var XocDiaController = /** @class */ (function (_super) {
    __extends(XocDiaController, _super);
    function XocDiaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.noteLobby = null;
        _this.nodePlay = null;
        _this.soundManager = null;
        _this.lobby = null;
        _this.play = null;
        return _this;
    }
    XocDiaController_1 = XocDiaController;
    XocDiaController.prototype.onLoad = function () {
        XocDiaController_1.instance = this;
        this.lobby = this.noteLobby.getComponent(XocDia_Lobby_1.default);
    };
    XocDiaController.prototype.start = function () {
        var _this = this;
        this.lobby.init();
        // this.play.init();
        this.lobby.node.active = true;
        // this.play.node.active = false;
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        XocDia_XocDiaNetworkClient_1.default.getInstance().addOnOpen(function () {
            App_1.default.instance.showErrLoading("Đang đăng nhập...");
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new Network_Cmd_1.default.SendLogin(Configs_1.default.Login.Nickname, Configs_1.default.Login.AccessToken));
        }, this);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addOnClose(function () {
            //  cc.log("-----------XocDia close:"+XocDiaNetworkClient.getInstance().isConnected());
            XocDia_XocDiaNetworkClient_1.default.getInstance().close();
            App_1.default.instance.loadScene("Lobby");
        }, this);
        XocDia_XocDiaNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Network_Cmd_1.default.Code.LOGIN:
                    App_1.default.instance.showLoading(false);
                    //this.lobby.actRefesh();
                    _this.lobby.actQuickPlay();
                    break;
            }
        }, this);
        //  cc.log("-----------XocDia start:"+XocDiaNetworkClient.getInstance().isConnected());
        if (XocDia_XocDiaNetworkClient_1.default.getInstance().isConnected() == false) {
            XocDia_XocDiaNetworkClient_1.default.getInstance().connect();
        }
        Common_AudioManager_1.default.getInstance().playBackgroundMusic(this.soundManager.listAudio[audio_clip.BG]);
    };
    XocDiaController.prototype.showLobby = function () {
        this.lobby.show();
        this.play.node.active = false;
    };
    XocDiaController.prototype.showGamePlay = function (res) {
        var _this = this;
        if (this.play == null) {
            App_1.default.instance.showLoading(true);
            cc.assetManager.loadBundle("XocDia", function (err, bundleGame) {
                bundleGame.load("res/prefabs/Play", cc.Prefab, function (finish, total) {
                    App_1.default.instance.showErrLoading(App_1.default.instance.getTextLang('txt_loading1'));
                }, function (err, prefab) {
                    _this.play = cc.instantiate(prefab).getComponent(XocDia_Play_1.default);
                    _this.play.node.parent = _this.node;
                    _this.play.init();
                    _this.play.show(res);
                    App_1.default.instance.showLoading(false);
                    //  cc.log("init game player succecss!");
                    _this.lobby.node.active = false;
                });
            });
        }
        else {
            this.lobby.node.active = false;
            this.play.show(res);
        }
    };
    XocDiaController.prototype.playAudioEffect = function (index) {
        this.soundManager.playAudioEffect(index);
    };
    var XocDiaController_1;
    XocDiaController.instance = null;
    __decorate([
        property(cc.Node)
    ], XocDiaController.prototype, "noteLobby", void 0);
    __decorate([
        property(cc.Node)
    ], XocDiaController.prototype, "nodePlay", void 0);
    __decorate([
        property(SoundManager)
    ], XocDiaController.prototype, "soundManager", void 0);
    XocDiaController = XocDiaController_1 = __decorate([
        ccclass
    ], XocDiaController);
    return XocDiaController;
}(cc.Component));
exports.default = XocDiaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcWG9jRGlhXFxYb2NEaWFTY3JpcHRcXFhvY0RpYS5Yb2NEaWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrQ0FBbUM7QUFDbkMsNkNBQWlDO0FBQ2pDLDJFQUErRDtBQUUvRCxxREFBZ0Q7QUFDaEQsaUVBQTREO0FBQzVELDZGQUFnRjtBQUNoRixtRkFBNkU7QUFDN0UseUVBQW9FO0FBQ3BFLGlHQUFxRjtBQUNyRixJQUFLLFVBT0o7QUFQRCxXQUFLLFVBQVU7SUFDWCx1Q0FBTSxDQUFBO0lBQ04sMkNBQVEsQ0FBQTtJQUNSLHlDQUFPLENBQUE7SUFDUCx1REFBYyxDQUFBO0lBQ2QsaURBQVcsQ0FBQTtJQUNYLDJDQUFRLENBQUE7QUFDWixDQUFDLEVBUEksVUFBVSxLQUFWLFVBQVUsUUFPZDtBQUNLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQUE7UUFFSSxZQUFPLEdBQW1CLElBQUksQ0FBQztRQUcvQixhQUFRLEdBQW1CLElBQUksQ0FBQztRQUdoQyxjQUFTLEdBQW1CLEVBQUUsQ0FBQztJQWVuQyxDQUFDO0lBZEcsa0NBQVcsR0FBWDtRQUNJLElBQUksaUJBQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFDRCxzQ0FBZSxHQUFmLFVBQWdCLFVBQVU7UUFDdEIsSUFBSSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FB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SUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hDLHlDQUF5QztvQkFDekMsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQTtTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQUNNLDBDQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7SUE5RWEseUJBQVEsR0FBcUIsSUFBSSxDQUFDO0lBR2hEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxZQUFZLENBQUM7MERBQ1c7SUFUakIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FpRnBDO0lBQUQsdUJBQUM7Q0FqRkQsQUFpRkMsQ0FqRjZDLEVBQUUsQ0FBQyxTQUFTLEdBaUZ6RDtrQkFqRm9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IExvYmJ5IGZyb20gXCIuL1hvY0RpYS5Mb2JieVwiO1xuaW1wb3J0IFBsYXkgZnJvbSBcIi4vWG9jRGlhLlBsYXlcIjtcbmltcG9ydCBYb2NEaWFOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1hvY0RpYS5Yb2NEaWFOZXR3b3JrQ2xpZW50XCI7XG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IGNtZE5ldHdvcmsgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkNtZFwiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Db21tb24uQXVkaW9NYW5hZ2VyXCI7XG5lbnVtIGF1ZGlvX2NsaXAge1xuICAgIEJHID0gMCxcbiAgICBMT1NFID0gMSxcbiAgICBXSU4gPSAyLFxuICAgIFNUQVJUX0dBTUUgPSAzLFxuICAgIFhPQ19ESUEgPSA0LFxuICAgIENISVAgPSA1XG59XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3MoXCJYb2NEaWEuU291bmRNYW5hZ2VyXCIpXG5leHBvcnQgY2xhc3MgU291bmRNYW5hZ2VyIHtcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgYmdNdXNpYzogY2MuQXVkaW9Tb3VyY2UgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvU291cmNlKVxuICAgIGVmZlNvdW5kOiBjYy5BdWRpb1NvdXJjZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXG4gICAgbGlzdEF1ZGlvOiBjYy5BdWRpb0NsaXBbXSA9IFtdO1xuICAgIHBsYXlCZ011c2ljKCkge1xuICAgICAgICBpZiAoU1BVdGlscy5nZXRNdXNpY1ZvbHVtbigpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5iZ011c2ljLmNsaXAgPSB0aGlzLmxpc3RBdWRpb1thdWRpb19jbGlwLkJHXTtcbiAgICAgICAgICAgIHRoaXMuYmdNdXNpYy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGxheUF1ZGlvRWZmZWN0KGluZGV4QXVkaW8pIHtcbiAgICAgICAgaWYgKFNQVXRpbHMuZ2V0U291bmRWb2x1bW4oKSA+IDApIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5saXN0QXVkaW9baW5kZXhBdWRpb10sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdG9wQmdNdXNpYygpIHtcbiAgICAgICAgdGhpcy5iZ011c2ljLnN0b3AoKTtcbiAgICB9XG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWG9jRGlhQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBYb2NEaWFDb250cm9sbGVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vdGVMb2JieTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTb3VuZE1hbmFnZXIpXG4gICAgc291bmRNYW5hZ2VyOiBTb3VuZE1hbmFnZXIgPSBudWxsO1xuXG4gICAgcHVibGljIGxvYmJ5OiBMb2JieSA9IG51bGw7XG4gICAgcHVibGljIHBsYXk6IFBsYXkgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBYb2NEaWFDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5sb2JieSA9IHRoaXMubm90ZUxvYmJ5LmdldENvbXBvbmVudChMb2JieSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubG9iYnkuaW5pdCgpO1xuICAgICAgICAvLyB0aGlzLnBsYXkuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMubG9iYnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLnBsYXkubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgIFhvY0RpYU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbk9wZW4oKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcgxJHEg25nIG5o4bqtcC4uLlwiKTtcbiAgICAgICAgICAgIFhvY0RpYU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWROZXR3b3JrLlNlbmRMb2dpbihDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuKSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwiLS0tLS0tLS0tLS1Yb2NEaWEgY2xvc2U6XCIrWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmlzQ29ubmVjdGVkKCkpO1xuICAgICAgICAgICAgWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNsb3NlKCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kTmV0d29yay5Db2RlLkxPR0lOOlxuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMubG9iYnkuYWN0UmVmZXNoKCk7XG5cdFx0XHRcdFx0dGhpcy5sb2JieS5hY3RRdWlja1BsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAvLyAgY2MubG9nKFwiLS0tLS0tLS0tLS1Yb2NEaWEgc3RhcnQ6XCIrWG9jRGlhTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmlzQ29ubmVjdGVkKCkpO1xuICAgICAgICBpZihYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuaXNDb25uZWN0ZWQoKSA9PSBmYWxzZSl7XG4gICAgICAgICAgICBYb2NEaWFOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIEF1ZGlvTWFuYWdlci5nZXRJbnN0YW5jZSgpLnBsYXlCYWNrZ3JvdW5kTXVzaWModGhpcy5zb3VuZE1hbmFnZXIubGlzdEF1ZGlvW2F1ZGlvX2NsaXAuQkddKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2hvd0xvYmJ5KCkge1xuICAgICAgICB0aGlzLmxvYmJ5LnNob3coKTtcbiAgICAgICAgdGhpcy5wbGF5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93R2FtZVBsYXkocmVzKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRCdW5kbGUoXCJYb2NEaWFcIiwgKGVyciwgYnVuZGxlR2FtZSkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1bmRsZUdhbWUubG9hZChcInJlcy9wcmVmYWJzL1BsYXlcIiwgY2MuUHJlZmFiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSk7XG4gICAgICAgICAgICAgICAgfSwgKGVyciwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoUGxheSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheS5ub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5LmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5LnNob3cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImluaXQgZ2FtZSBwbGF5ZXIgc3VjY2Vjc3MhXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYmJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2JieS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wbGF5LnNob3cocmVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcGxheUF1ZGlvRWZmZWN0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLnBsYXlBdWRpb0VmZmVjdChpbmRleCk7XG4gICAgfVxufVxuIl19