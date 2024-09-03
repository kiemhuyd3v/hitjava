"use strict";
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