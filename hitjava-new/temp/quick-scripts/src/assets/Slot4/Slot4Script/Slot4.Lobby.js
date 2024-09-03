"use strict";
cc._RF.push(module, '4e78ebyw3FPNphXouymUKPS', 'Slot4.Lobby');
// Slot4/Slot4Script/Slot4.Lobby.ts

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
var Slot4Cmd_1 = require("./Slot4Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot4Lobby = /** @class */ (function (_super) {
    __extends(Slot4Lobby, _super);
    function Slot4Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
    }
    Slot4Lobby.prototype.init = function (pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.node.zIndex = 2;
        this.show();
    };
    Slot4Lobby.prototype.show = function () {
        this.node.active = true;
        this.showAnimation();
    };
    Slot4Lobby.prototype.hide = function () {
        this.node.active = false;
    };
    Slot4Lobby.prototype.showAnimation = function () {
        var self = this;
        for (var i = 0; i < this.rooms.length; i++) {
            var nodeBox = this.rooms[i];
            cc.Tween.stopAllByTarget(nodeBox);
            nodeBox.opacity = 0;
            if (i == 0) {
                nodeBox.position = cc.v3(-200, 0, 0);
            }
            else if (i == 1) {
                nodeBox.position = cc.v3(0, -200, 0);
            }
            else if (i == 2) {
                nodeBox.position = cc.v3(0, 200, 0);
            }
            else {
                nodeBox.position = cc.v3(200, 0, 0);
            }
            cc.tween(nodeBox)
                .to(1, { position: cc.v3(0, 0, 0), opacity: 255 }, { easing: "backOut" })
                .start();
        }
    };
    Slot4Lobby.prototype.onBtnBack = function () {
        if (this.mSlotController.isSound) {
            cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendUnSubcribe(this.mSlotController.betId));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot4Lobby.prototype.onBtnTry = function () {
        this.mSlotController.betId = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendSubcribe(this.mSlotController.betId));
        this.node.active = false;
        this.mSlotController.onJoinRoom(null);
        this.mSlotController.isTrial = false;
    };
    Slot4Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot4Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson['tamhung']['100'].p, 0.3);
        Tween_1.default.numberTo(this.listPot[1], resJson['tamhung']['1000'].p, 0.3);
        Tween_1.default.numberTo(this.listPot[2], resJson['tamhung']['10000'].p, 0.3);
    };
    __decorate([
        property([cc.Label])
    ], Slot4Lobby.prototype, "listPot", void 0);
    __decorate([
        property([cc.Node])
    ], Slot4Lobby.prototype, "rooms", void 0);
    Slot4Lobby = __decorate([
        ccclass
    ], Slot4Lobby);
    return Slot4Lobby;
}(cc.Component));
exports.default = Slot4Lobby;

cc._RF.pop();