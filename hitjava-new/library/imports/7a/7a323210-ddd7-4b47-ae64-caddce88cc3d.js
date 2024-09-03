"use strict";
cc._RF.push(module, '7a323IQ3ddLR65kyt3OiMw9', 'Slot8.Lobby');
// Slot8/Slot8Script/Slot8.Lobby.ts

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
var Slot8Cmd_1 = require("./Slot8Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot8Lobby = /** @class */ (function (_super) {
    __extends(Slot8Lobby, _super);
    function Slot8Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
    }
    Slot8Lobby.prototype.init = function (pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.node.zIndex = 2;
        if (this.mSlotController.isMusic)
            cc.audioEngine.playMusic(this.mSlotController.musicGame, true);
        this.show();
    };
    Slot8Lobby.prototype.onLoad = function () {
        this.node.getComponentInChildren(sp.Skeleton).node.setScale(cc.v2(0.67 * (cc.winSize.width / 1280), 0.67 * (cc.winSize.height / 720)));
        // for (let i = 0; i < this.rooms.length; i++) {
        //     this.rooms[i].x = this.rooms[i].x * (cc.winSize.width / 1280);
        //     this.rooms[i].y = this.rooms[i].y * (cc.winSize.width / 1280);
        //     this.rooms[i].scale = this.rooms[i].scale * (cc.winSize.width / 1280)
        // }
    };
    Slot8Lobby.prototype.show = function () {
        this.node.active = true;
    };
    Slot8Lobby.prototype.hide = function () {
        this.node.active = false;
    };
    Slot8Lobby.prototype.onBtnBack = function () {
        if (this.mSlotController.isSound) {
            cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendUnSubcribe(this.mSlotController.betId));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot8Lobby.prototype.onBtnTry = function () {
        this.mSlotController.betId = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom(null);
        this.mSlotController.isTrial = true;
    };
    Slot8Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot8Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson['rollRoye']['100'].p, 3.0);
        Tween_1.default.numberTo(this.listPot[1], resJson['rollRoye']['1000'].p, 3.0);
        Tween_1.default.numberTo(this.listPot[2], resJson['rollRoye']['10000'].p, 3.0);
    };
    __decorate([
        property([cc.Label])
    ], Slot8Lobby.prototype, "listPot", void 0);
    __decorate([
        property([cc.Node])
    ], Slot8Lobby.prototype, "rooms", void 0);
    Slot8Lobby = __decorate([
        ccclass
    ], Slot8Lobby);
    return Slot8Lobby;
}(cc.Component));
exports.default = Slot8Lobby;

cc._RF.pop();