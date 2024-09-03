
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot10/Slot10Script/Slot10.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDEwXFxTbG90MTBTY3JpcHRcXFNsb3QxMC5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLCtGQUEwRjtBQUMxRiwyQ0FBK0I7QUFHekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUEyR0M7UUF4R0csYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLHFCQUFlLEdBQXFCLElBQUksQ0FBQzs7SUFvRzdDLENBQUM7SUFsR1UsMEJBQUksR0FBWCxVQUFZLGdCQUFrQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFDakMsSUFBSTtRQUNKLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDM0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNSLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNyQztpQkFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO2lCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDYixPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDO2lCQUNJO2dCQUNELE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDcEM7WUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztpQkFDWixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztpQkFDckUsS0FBSyxFQUFFLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRU0sK0JBQVMsR0FBaEI7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFDRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDMUYsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixhQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sOEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXRDLENBQUM7SUFHTyw4QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLDZCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUMsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTyw4QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLHFDQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxvQkFBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUF2R0Q7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0RBQ0k7SUFFekI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7OENBQ0U7SUFMTCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBMkcvQjtJQUFELGtCQUFDO0NBM0dELEFBMkdDLENBM0d3QyxFQUFFLENBQUMsU0FBUyxHQTJHcEQ7a0JBM0dvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9TbG90MTAuQ21kXCI7XG5pbXBvcnQgU2xvdDEwQ29udHJvbGxlciBmcm9tIFwiLi9TbG90MTAuU2xvdDEwQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDEwTG9iYnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXG4gICAgbGlzdFBvdDogY2MuTGFiZWxbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgcm9vbXM6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgbVNsb3RDb250cm9sbGVyOiBTbG90MTBDb250cm9sbGVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KHBTbG90M0NvbnRyb2xsZXI6IFNsb3QxMENvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIgPSBwU2xvdDNDb250cm9sbGVyO1xuICAgICAgICAvLyBmb3IodmFyIGk9MDtpPHRoaXMucm9vbXMubGVuZ3RoO2krKyl7XG4gICAgICAgIC8vICAgICB0aGlzLnJvb21zW2ldLm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAvLyAgICAgc2VsZi5zaG93QW5pbWF0aW9uKCk7XG4gICAgICAgIC8vIH0sMjAwMCk7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyO1xuICAgIH1cblxuICAgIHNob3dBbmltYXRpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJvb21zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZUJveCA9IHRoaXMucm9vbXNbaV1cbiAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChub2RlQm94KTtcbiAgICAgICAgICAgIG5vZGVCb3gub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYyKC0yMDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYyKDAsIC0yMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYyKDAsIDIwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlQm94LnBvc2l0aW9uID0gY2MudjIoMjAwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVCb3gpXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIDApLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHVibGljIG9uQnRuQmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMubVNsb3RDb250cm9sbGVyLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tU2xvdENvbnRyb2xsZXIuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCkpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuVHJ5KCkge1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5kYWlseUZyZWVTcGluID0gMDtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4ID0gMDtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIubUlzVHJpYWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIudG9nZ2xlVHJpYWxPbkNoZWNrKCk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25CdG4xMDAoKSB7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmRhaWx5RnJlZVNwaW4gPSAwO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHggPSAwO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5tSXNUcmlhbCA9IHRydWU7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLnRvZ2dsZVRyaWFsT25DaGVjaygpO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4KSk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIub25Kb2luUm9vbSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG41aygpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCA9IDE7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm1Jc1RyaWFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIudG9nZ2xlVHJpYWxPbkNoZWNrKCk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbUJ0bjEwaygpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCA9IDI7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm1Jc1RyaWFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIudG9nZ2xlVHJpYWxPbkNoZWNrKCk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVXBkYXRlSmFja3BvdChwRGF0YSkge1xuICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNVcGRhdGVKYWNrcG90U2xvdHMocERhdGEpO1xuICAgICAgICBsZXQgcmVzSnNvbiA9IEpTT04ucGFyc2UocmVzLnBvdHMpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMF0sIHJlc0pzb25bJ21heWJhY2gnXVsnMTAwJ10ucCwgMC4zKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5saXN0UG90WzFdLCByZXNKc29uWydtYXliYWNoJ11bJzEwMDAnXS5wLCAwLjMpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMl0sIHJlc0pzb25bJ21heWJhY2gnXVsnMTAwMDAnXS5wLCAwLjMpO1xuICAgIH1cbn1cbiJdfQ==