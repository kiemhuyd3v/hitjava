
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLCtGQUEwRjtBQUMxRix5Q0FBOEI7QUFHeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyR0M7UUF4R0csYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIscUJBQWUsR0FBb0IsSUFBSSxDQUFDOztJQWtHNUMsQ0FBQztJQWhHRywyQkFBTSxHQUFOO1FBQ0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFDTSx5QkFBSSxHQUFYLFVBQVksZ0JBQWlDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7UUFDeEMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRTtZQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHlCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN0RTtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQix3Q0FBd0M7UUFDeEMsa0NBQWtDO1FBQ2xDLHlDQUF5QztRQUN6QywyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IseUJBQXlCO1FBQ3pCLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IseUJBQXlCO1FBQ3pCLDhDQUE4QztRQUM5QyxRQUFRO1FBQ1IsYUFBYTtRQUNiLDhDQUE4QztRQUM5QyxRQUFRO1FBQ1Isd0JBQXdCO1FBQ3hCLG1GQUFtRjtRQUNuRixvQkFBb0I7UUFDcEIsSUFBSTtJQUNSLENBQUM7SUFFTSw4QkFBUyxHQUFoQjtRQUVJLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyw2QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMvQiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLDRCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDL0IsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTyw2QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMvQiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzNFO1FBQ0QsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXZHRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzsrQ0FDSTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDRTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNLO0lBUE4sVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJHOUI7SUFBRCxpQkFBQztDQTNHRCxBQTJHQyxDQTNHdUMsRUFBRSxDQUFDLFNBQVMsR0EyR25EO2tCQTNHb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vU2xvdDEuQ21kXCI7XG5pbXBvcnQgU2xvdDFDb250cm9sbGVyIGZyb20gXCIuL1Nsb3QxLlNsb3QxQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDFMb2JieSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBsaXN0UG90OiBjYy5MYWJlbFtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICByb29tczogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmdBbmltOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG1TbG90Q29udHJvbGxlcjogU2xvdDFDb250cm9sbGVyID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHRpbGVXaWR0aCA9IGNjLndpblNpemUud2lkdGggLyAxMjgwO1xuICAgICAgICBsZXQgdGl0bGVoZWlnaHQgPSBjYy53aW5TaXplLmhlaWdodCAvIDcyMDtcbiAgICAgICAgdGhpcy5iZ0FuaW0uc2NhbGVYID0gdGhpcy5iZ0FuaW0uc2NhbGVYICogdGlsZVdpZHRoO1xuICAgICAgICB0aGlzLmJnQW5pbS5zY2FsZVkgPSB0aGlzLmJnQW5pbS5zY2FsZVkgKiB0aXRsZWhlaWdodDtcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDI7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuXG4gICAgfVxuICAgIHB1YmxpYyBpbml0KHBTbG90M0NvbnRyb2xsZXI6IFNsb3QxQ29udHJvbGxlcikge1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlciA9IHBTbG90M0NvbnRyb2xsZXI7XG4gICAgICAgIGlmICh0aGlzLm1TbG90Q29udHJvbGxlci5pc011c2ljKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwLjUpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMubVNsb3RDb250cm9sbGVyLm11c2ljTG9iYnksIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0FuaW1hdGlvbigpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93QW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5tU2xvdENvbnRyb2xsZXIuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm1TbG90Q29udHJvbGxlci5zb3VuZFN0YXJ0U3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy8gZm9yKHZhciBpPTA7aTx0aGlzLnJvb21zLmxlbmd0aDtpKyspe1xuICAgICAgICAvLyAgICAgdmFyIG5vZGVCb3ggPSB0aGlzLnJvb21zW2ldXG4gICAgICAgIC8vICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZUJveCk7XG4gICAgICAgIC8vICAgICBub2RlQm94Lm9wYWNpdHkgPSAwO1xuICAgICAgICAvLyAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAvLyAgICAgICAgIG5vZGVCb3gucG9zaXRpb24gPSBjYy52MygtMjAwLCAwLDApO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgIC8vICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMDAsMCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBlbHNlIGlmIChpID09IDIpIHtcbiAgICAgICAgLy8gICAgICAgICBub2RlQm94LnBvc2l0aW9uID0gY2MudjMoMCwgMjAwLDApO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYzKDIwMCwgMCwwKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKG5vZGVCb3gpXG4gICAgICAgIC8vICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgLy8gICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBvbkJ0bkJhY2soKSB7XG5cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFVuU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWQpKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bjEwMCgpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWQgPSAwO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWQpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bjVrKCkge1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZCA9IDE7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9tQnRuMTBrKCkge1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZCA9IDI7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25VcGRhdGVKYWNrcG90KHBEYXRhKSB7XG4gICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1VwZGF0ZUphY2twb3RTbG90cyhwRGF0YSk7XG4gICAgICAgIGxldCByZXNKc29uID0gSlNPTi5wYXJzZShyZXMucG90cyk7XG4gICAgICAgIGlmICh0aGlzLmxpc3RQb3RbMF0uc3RyaW5nID09IFwiMFwiKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RQb3RbMF0uc3RyaW5nID0gKHJlc0pzb25bJ2F1ZGl0aW9uJ11bJzEwMCddIC0gMTAwMDAwKSArIFwiXCI7XG4gICAgICAgICAgICB0aGlzLmxpc3RQb3RbMV0uc3RyaW5nID0gKHJlc0pzb25bJ2F1ZGl0aW9uJ11bJzEwMDAnXSAtIDEwMDAwMDApICsgXCJcIjtcbiAgICAgICAgICAgIHRoaXMubGlzdFBvdFsyXS5zdHJpbmcgPSAocmVzSnNvblsnYXVkaXRpb24nXVsnMTAwMDAnXSAtIDEwMDAwMDAwKSArIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5saXN0UG90WzBdLCByZXNKc29uWydhdWRpdGlvbiddWycxMDAnXS5wLCA0KTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5saXN0UG90WzFdLCByZXNKc29uWydhdWRpdGlvbiddWycxMDAwJ10ucCwgNCk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGlzdFBvdFsyXSwgcmVzSnNvblsnYXVkaXRpb24nXVsnMTAwMDAnXS5wLCA0KTtcbiAgICB9XG59XG4iXX0=