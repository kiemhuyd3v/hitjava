"use strict";
cc._RF.push(module, '3b3fbf24/lNQJPbFfV4QPi8', 'Slot1.Lobby');
// Slot1/Slot1Script/Slot1.Lobby.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var Slot1_Cmd_1 = require("./Slot1.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot1Lobby = /** @class */ (function (_super) {
    __extends(Slot1Lobby, _super);
    function Slot1Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.bgAnim = null;
        _this.mSlotController = null;
        return _this;
    }
    Slot1Lobby.prototype.onLoad = function () {
        var tileWidth = cc.winSize.width / 1280;
        var titleheight = cc.winSize.height / 720;
        this.bgAnim.scaleX = this.bgAnim.scaleX * tileWidth;
        this.bgAnim.scaleY = this.bgAnim.scaleY * titleheight;
        this.node.zIndex = 2;
    };
    Slot1Lobby.prototype.start = function () {
    };
    Slot1Lobby.prototype.init = function (pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        if (this.mSlotController.isMusic) {
            cc.audioEngine.setMusicVolume(0.5);
            cc.audioEngine.playMusic(this.mSlotController.musicLobby, true);
        }
        this.show();
    };
    Slot1Lobby.prototype.show = function () {
        this.node.active = true;
        this.showAnimation();
    };
    Slot1Lobby.prototype.hide = function () {
        this.node.active = false;
    };
    Slot1Lobby.prototype.showAnimation = function () {
        if (this.mSlotController.isSound) {
            cc.audioEngine.play(this.mSlotController.soundStartSpin, false, 1);
        }
        var self = this;
        // for(var i=0;i<this.rooms.length;i++){
        //     var nodeBox = this.rooms[i]
        //     cc.Tween.stopAllByTarget(nodeBox);
        //     nodeBox.opacity = 0;
        //     if (i == 0) {
        //         nodeBox.position = cc.v3(-200, 0,0);
        //     }
        //     else if (i == 1) {
        //         nodeBox.position = cc.v3(0, -200,0);
        //     }
        //     else if (i == 2) {
        //         nodeBox.position = cc.v3(0, 200,0);
        //     }
        //     else {
        //         nodeBox.position = cc.v3(200, 0,0);
        //     }
        //     cc.tween(nodeBox)
        //         .to(1, { position: cc.v3(0, 0,0), opacity: 255 }, { easing: "backOut" })
        //         .start();
        // }
    };
    Slot1Lobby.prototype.onBtnBack = function () {
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendUnSubcribe(this.mSlotController.betId));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot1Lobby.prototype.onBtn100 = function () {
        this.mSlotController.betId = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot1Lobby.prototype.onBtn5k = function () {
        this.mSlotController.betId = 1;
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot1Lobby.prototype.omBtn10k = function () {
        this.mSlotController.betId = 2;
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot1Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot1_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        if (this.listPot[0].string == "0") {
            this.listPot[0].string = (resJson['audition']['100'] - 100000) + "";
            this.listPot[1].string = (resJson['audition']['1000'] - 1000000) + "";
            this.listPot[2].string = (resJson['audition']['10000'] - 10000000) + "";
        }
        Tween_1.default.numberTo(this.listPot[0], resJson['audition']['100'].p, 4);
        Tween_1.default.numberTo(this.listPot[1], resJson['audition']['1000'].p, 4);
        Tween_1.default.numberTo(this.listPot[2], resJson['audition']['10000'].p, 4);
    };
    __decorate([
        property([cc.Label])
    ], Slot1Lobby.prototype, "listPot", void 0);
    __decorate([
        property([cc.Node])
    ], Slot1Lobby.prototype, "rooms", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Lobby.prototype, "bgAnim", void 0);
    Slot1Lobby = __decorate([
        ccclass
    ], Slot1Lobby);
    return Slot1Lobby;
}(cc.Component));
exports.default = Slot1Lobby;

cc._RF.pop();