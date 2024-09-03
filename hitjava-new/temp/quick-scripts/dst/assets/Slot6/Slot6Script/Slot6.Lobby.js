
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot6/Slot6Script/Slot6.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40ad6x8asNBEpPgaoWAleg7', 'Slot6.Lobby');
// Slot6/Slot6Script/Slot6.Lobby.ts

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
var Slot6_Cmd_1 = require("./Slot6.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot6Lobby = /** @class */ (function (_super) {
    __extends(Slot6Lobby, _super);
    function Slot6Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.mSlotController = null;
        return _this;
    }
    Slot6Lobby.prototype.init = function (pSlot3Controller) {
        this.mSlotController = pSlot3Controller;
    };
    Slot6Lobby.prototype.onBtnBack = function () {
        if (this.mSlotController.soundSlotState == 1) {
            cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendUnSubcribe(this.mSlotController.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot6Lobby.prototype.onBtn100 = function () {
        this.mSlotController.betIdx = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot6Lobby.prototype.onBtn5k = function () {
        this.mSlotController.betIdx = 1;
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot6Lobby.prototype.omBtn10k = function () {
        this.mSlotController.betIdx = 2;
        SlotNetworkClient_1.default.getInstance().send(new Slot6_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot6Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot6_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson['chiemtinh']['100'].p, 0.3);
        Tween_1.default.numberTo(this.listPot[1], resJson['chiemtinh']['1000'].p, 0.3);
        Tween_1.default.numberTo(this.listPot[2], resJson['chiemtinh']['10000'].p, 0.3);
    };
    __decorate([
        property([cc.Label])
    ], Slot6Lobby.prototype, "listPot", void 0);
    Slot6Lobby = __decorate([
        ccclass
    ], Slot6Lobby);
    return Slot6Lobby;
}(cc.Component));
exports.default = Slot6Lobby;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDZcXFNsb3Q2U2NyaXB0XFxTbG90Ni5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLCtGQUEwRjtBQUMxRix5Q0FBOEI7QUFHeEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUFnREM7UUE3Q0csYUFBTyxHQUFnQixFQUFFLENBQUM7UUFFMUIscUJBQWUsR0FBcUIsSUFBSSxDQUFDOztJQTJDN0MsQ0FBQztJQXpDVSx5QkFBSSxHQUFYLFVBQVksZ0JBQWtDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDNUMsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDMUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQUcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzFGLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsYUFBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVPLDZCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU8sNEJBQU8sR0FBZjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLDZCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLG1CQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQTVDRDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzsrQ0FDSztJQUhULFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FnRDlCO0lBQUQsaUJBQUM7Q0FoREQsQUFnREMsQ0FoRHVDLEVBQUUsQ0FBQyxTQUFTLEdBZ0RuRDtrQkFoRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBTbG90TmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nsb3ROZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL1Nsb3Q2LkNtZFwiO1xuaW1wb3J0IFNsb3QzQ29udHJvbGxlciBmcm9tIFwiLi9TbG90Ni5TbG90NkNvbnRyb2xsZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90NkxvYmJ5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxuICAgIGxpc3RQb3QgOiBjYy5MYWJlbFtdID0gW107XG5cbiAgICBtU2xvdENvbnRyb2xsZXIgOiBTbG90M0NvbnRyb2xsZXIgPSBudWxsO1xuXG4gICAgcHVibGljIGluaXQocFNsb3QzQ29udHJvbGxlciA6IFNsb3QzQ29udHJvbGxlcil7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyID0gcFNsb3QzQ29udHJvbGxlcjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uQnRuQmFjaygpe1xuICAgICAgICBpZiAodGhpcy5tU2xvdENvbnRyb2xsZXIuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm1TbG90Q29udHJvbGxlci5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFVuU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4KSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLmxvYWRTY2VuZShcIkxvYmJ5XCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25CdG4xMDAoKXtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4ID0gMDtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuNWsoKXtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4ID0gMTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9tQnRuMTBrKCl7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCA9IDI7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uVXBkYXRlSmFja3BvdChwRGF0YSl7XG4gICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlc1VwZGF0ZUphY2twb3RTbG90cyhwRGF0YSk7XG4gICAgICAgIGxldCByZXNKc29uID0gSlNPTi5wYXJzZShyZXMucG90cyk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGlzdFBvdFswXSwgcmVzSnNvblsnY2hpZW10aW5oJ11bJzEwMCddLnAsIDAuMyk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGlzdFBvdFsxXSwgcmVzSnNvblsnY2hpZW10aW5oJ11bJzEwMDAnXS5wLCAwLjMpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMl0sIHJlc0pzb25bJ2NoaWVtdGluaCddWycxMDAwMCddLnAsIDAuMyk7XG4gICAgfVxufVxuIl19