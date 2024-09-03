"use strict";
cc._RF.push(module, '868b0KfGnlMuaIuzX7DlHVR', 'Slot10.Lobby');
// Slot10/Slot10Script/Slot10.Lobby.ts

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
var Slot10_Cmd_1 = require("./Slot10.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot10Lobby = /** @class */ (function (_super) {
    __extends(Slot10Lobby, _super);
    function Slot10Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.rooms = [];
        _this.mSlotController = null;
        return _this;
    }
    Slot10Lobby.prototype.init = function (pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
        // for(var i=0;i<this.rooms.length;i++){
        //     this.rooms[i].opacity = 0;
        // }
        // var self = this;
        // setTimeout(function(){
        //     self.showAnimation();
        // },2000);
        this.node.zIndex = 2;
    };
    Slot10Lobby.prototype.showAnimation = function () {
        var self = this;
        for (var i = 0; i < this.rooms.length; i++) {
            var nodeBox = this.rooms[i];
            cc.Tween.stopAllByTarget(nodeBox);
            nodeBox.opacity = 0;
            if (i == 0) {
                nodeBox.position = cc.v2(-200, 0);
            }
            else if (i == 1) {
                nodeBox.position = cc.v2(0, -200);
            }
            else if (i == 2) {
                nodeBox.position = cc.v2(0, 200);
            }
            else {
                nodeBox.position = cc.v2(200, 0);
            }
            cc.tween(nodeBox)
                .to(1, { position: cc.v2(0, 0), opacity: 255 }, { easing: "backOut" })
                .start();
        }
    };
    Slot10Lobby.prototype.onBtnBack = function () {
        if (this.mSlotController.soundSlotState == 1) {
            cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendUnSubcribe(this.mSlotController.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot10Lobby.prototype.onBtnTry = function () {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 0;
        this.mSlotController.mIsTrial = false;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot10Lobby.prototype.onBtn100 = function () {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 0;
        this.mSlotController.mIsTrial = true;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot10Lobby.prototype.onBtn5k = function () {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 1;
        this.mSlotController.mIsTrial = true;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot10Lobby.prototype.omBtn10k = function () {
        this.mSlotController.dailyFreeSpin = 0;
        this.mSlotController.lblFreeSpinCount.node.parent.active = false;
        this.mSlotController.betIdx = 2;
        this.mSlotController.mIsTrial = true;
        this.mSlotController.toggleTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot10Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot10_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson['maybach']['100'].p, 0.3);
        Tween_1.default.numberTo(this.listPot[1], resJson['maybach']['1000'].p, 0.3);
        Tween_1.default.numberTo(this.listPot[2], resJson['maybach']['10000'].p, 0.3);
    };
    __decorate([
        property([cc.Label])
    ], Slot10Lobby.prototype, "listPot", void 0);
    __decorate([
        property([cc.Node])
    ], Slot10Lobby.prototype, "rooms", void 0);
    Slot10Lobby = __decorate([
        ccclass
    ], Slot10Lobby);
    return Slot10Lobby;
}(cc.Component));
exports.default = Slot10Lobby;

cc._RF.pop();