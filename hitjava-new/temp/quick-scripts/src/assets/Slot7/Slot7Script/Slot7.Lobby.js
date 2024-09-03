"use strict";
cc._RF.push(module, '6a0e3+/bGtPQZvIcUFds/S8', 'Slot7.Lobby');
// Slot7/Slot7Script/Slot7.Lobby.ts

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
var Slot7_Cmd_1 = require("./Slot7.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot7Lobby = /** @class */ (function (_super) {
    __extends(Slot7Lobby, _super);
    function Slot7Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.mSlotController = null;
        return _this;
    }
    Slot7Lobby.prototype.init = function (pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        this.node.zIndex = 2;
    };
    Slot7Lobby.prototype.onBtnBack = function () {
        if (this.mSlotController.soundSlotState == 1) {
            cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendUnSubcribe(this.mSlotController.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot7Lobby.prototype.onBtn100 = function () {
        this.mSlotController.betIdx = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot7Lobby.prototype.onBtn5k = function () {
        this.mSlotController.betIdx = 1;
        SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot7Lobby.prototype.omBtn10k = function () {
        this.mSlotController.betIdx = 2;
        SlotNetworkClient_1.default.getInstance().send(new Slot7_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot7Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot7_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson["benley"]["100"].p, 0.3);
        Tween_1.default.numberTo(this.listPot[1], resJson["benley"]["1000"].p, 0.3);
        Tween_1.default.numberTo(this.listPot[2], resJson["benley"]["10000"].p, 0.3);
    };
    __decorate([
        property([cc.Label])
    ], Slot7Lobby.prototype, "listPot", void 0);
    Slot7Lobby = __decorate([
        ccclass
    ], Slot7Lobby);
    return Slot7Lobby;
}(cc.Component));
exports.default = Slot7Lobby;

cc._RF.pop();