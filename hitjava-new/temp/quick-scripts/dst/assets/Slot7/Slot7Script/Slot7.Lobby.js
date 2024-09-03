
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot7/Slot7Script/Slot7.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDdcXFNsb3Q3U2NyaXB0XFxTbG90Ny5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLCtGQUEwRjtBQUMxRix5Q0FBOEI7QUFHeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUF5REM7UUF2REMsYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QixxQkFBZSxHQUFvQixJQUFJLENBQUM7O0lBcUQxQyxDQUFDO0lBbkRRLHlCQUFJLEdBQVgsVUFBWSxnQkFBaUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUNsQyxJQUFJLG1CQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQ3BELENBQUM7UUFDRixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTyw2QkFBUSxHQUFoQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQ2xDLElBQUksbUJBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FDbEQsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTyw0QkFBTyxHQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDbEMsSUFBSSxtQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVPLDZCQUFRLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FDbEMsSUFBSSxtQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUNsRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUF0REQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7K0NBQ0k7SUFGTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBeUQ5QjtJQUFELGlCQUFDO0NBekRELEFBeURDLENBekR1QyxFQUFFLENBQUMsU0FBUyxHQXlEbkQ7a0JBekRvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBjbWQgZnJvbSBcIi4vU2xvdDcuQ21kXCI7XG5pbXBvcnQgU2xvdDNDb250cm9sbGVyIGZyb20gXCIuL1Nsb3Q3LlNsb3Q3Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDdMb2JieSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxuICBsaXN0UG90OiBjYy5MYWJlbFtdID0gW107XG5cbiAgbVNsb3RDb250cm9sbGVyOiBTbG90M0NvbnRyb2xsZXIgPSBudWxsO1xuXG4gIHB1YmxpYyBpbml0KHBTbG90M0NvbnRyb2xsZXI6IFNsb3QzQ29udHJvbGxlcikge1xuICAgIHRoaXMubVNsb3RDb250cm9sbGVyID0gcFNsb3QzQ29udHJvbGxlcjtcbiAgICB0aGlzLm5vZGUuekluZGV4ID0gMjtcbiAgfVxuXG4gIHB1YmxpYyBvbkJ0bkJhY2soKSB7XG4gICAgaWYgKHRoaXMubVNsb3RDb250cm9sbGVyLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5tU2xvdENvbnRyb2xsZXIuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgIH1cbiAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQoXG4gICAgICBuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeClcbiAgICApO1xuICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gIH1cblxuICBwcml2YXRlIG9uQnRuMTAwKCkge1xuICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCA9IDA7XG4gICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKFxuICAgICAgbmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4KVxuICAgICk7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgfVxuXG4gIHByaXZhdGUgb25CdG41aygpIHtcbiAgICB0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHggPSAxO1xuICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChcbiAgICAgIG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeClcbiAgICApO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG4gIH1cblxuICBwcml2YXRlIG9tQnRuMTBrKCkge1xuICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCA9IDI7XG4gICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKFxuICAgICAgbmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4KVxuICAgICk7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgfVxuXG4gIHB1YmxpYyBvblVwZGF0ZUphY2twb3QocERhdGEpIHtcbiAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNVcGRhdGVKYWNrcG90U2xvdHMocERhdGEpO1xuICAgIGxldCByZXNKc29uID0gSlNPTi5wYXJzZShyZXMucG90cyk7XG5cbiAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMF0sIHJlc0pzb25bXCJiZW5sZXlcIl1bXCIxMDBcIl0ucCwgMC4zKTtcbiAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMV0sIHJlc0pzb25bXCJiZW5sZXlcIl1bXCIxMDAwXCJdLnAsIDAuMyk7XG4gICAgVHdlZW4ubnVtYmVyVG8odGhpcy5saXN0UG90WzJdLCByZXNKc29uW1wiYmVubGV5XCJdW1wiMTAwMDBcIl0ucCwgMC4zKTtcbiAgfVxufVxuIl19