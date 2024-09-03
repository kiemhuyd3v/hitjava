
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot11Bikini/scripts/Slot11.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b516dKgl6tFWbenab3JZqAh', 'Slot11.Lobby');
// Slot11Bikini/scripts/Slot11.Lobby.ts

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
var Slot11_Cmd_1 = require("./Slot11.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot11Lobby = /** @class */ (function (_super) {
    __extends(Slot11Lobby, _super);
    function Slot11Lobby() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listPot = [];
        _this.mSlotController = null;
        return _this;
    }
    Slot11Lobby.prototype.init = function (pSlot11Controller) {
        this.mSlotController = pSlot11Controller;
        this.node.zIndex = 2;
    };
    Slot11Lobby.prototype.onBtnBack = function () {
        if (this.mSlotController.soundSlotState == 1) {
            cc.audioEngine.play(this.mSlotController.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendUnSubcribe(this.mSlotController.betIdx));
        cc.audioEngine.stopAll();
        App_1.default.instance.loadScene("Lobby");
    };
    Slot11Lobby.prototype.onBtn100 = function () {
        this.mSlotController.betIdx = 0;
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot11Lobby.prototype.onBtn5k = function () {
        this.mSlotController.betIdx = 1;
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot11Lobby.prototype.omBtn10k = function () {
        this.mSlotController.betIdx = 2;
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot11Lobby.prototype.omBtnTrial = function () {
        this.mSlotController.actTrialOnCheck();
        SlotNetworkClient_1.default.getInstance().send(new Slot11_Cmd_1.default.SendSubcribe(this.mSlotController.betIdx));
        this.node.active = false;
        this.mSlotController.onJoinRoom();
    };
    Slot11Lobby.prototype.onUpdateJackpot = function (pData) {
        var res = new Slot11_Cmd_1.default.ResUpdateJackpotSlots(pData);
        var resJson = JSON.parse(res.pots);
        Tween_1.default.numberTo(this.listPot[0], resJson['benley']['100'].p, 3.0);
        Tween_1.default.numberTo(this.listPot[1], resJson['benley']['1000'].p, 3.0);
        Tween_1.default.numberTo(this.listPot[2], resJson['benley']['10000'].p, 3.0);
    };
    __decorate([
        property([cc.Label])
    ], Slot11Lobby.prototype, "listPot", void 0);
    Slot11Lobby = __decorate([
        ccclass
    ], Slot11Lobby);
    return Slot11Lobby;
}(cc.Component));
exports.default = Slot11Lobby;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDExQmlraW5pXFxzY3JpcHRzXFxTbG90MTEuTG9iYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUVBQTREO0FBQzVELHFFQUFnRTtBQUNoRSwrRkFBMEY7QUFDMUYsMkNBQStCO0FBR3pCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBeURDO1FBdERHLGFBQU8sR0FBZSxFQUFFLENBQUM7UUFFekIscUJBQWUsR0FBcUIsSUFBSSxDQUFDOztJQW9EN0MsQ0FBQztJQWxEVSwwQkFBSSxHQUFYLFVBQVksaUJBQW1DO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSwrQkFBUyxHQUFoQjtRQUNJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyw4QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLDZCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksb0JBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFTyw4QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVPLGdDQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QywyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVNLHFDQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxvQkFBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFyREQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7Z0RBQ0k7SUFIUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBeUQvQjtJQUFELGtCQUFDO0NBekRELEFBeURDLENBekR3QyxFQUFFLENBQUMsU0FBUyxHQXlEcEQ7a0JBekRvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9TbG90MTEuQ21kXCI7XG5pbXBvcnQgU2xvdDExQ29udHJvbGxlciBmcm9tIFwiLi9TbG90MTEuU2xvdDExQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDExTG9iYnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5MYWJlbF0pXG4gICAgbGlzdFBvdDogY2MuTGFiZWxbXSA9IFtdO1xuXG4gICAgbVNsb3RDb250cm9sbGVyOiBTbG90MTFDb250cm9sbGVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KHBTbG90MTFDb250cm9sbGVyOiBTbG90MTFDb250cm9sbGVyKSB7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyID0gcFNsb3QxMUNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSAyO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbkJ0bkJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLm1TbG90Q29udHJvbGxlci5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubVNsb3RDb250cm9sbGVyLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHgpKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0bjEwMCgpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4ID0gMDtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuNWsoKSB7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCA9IDE7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZHgpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlci5vbkpvaW5Sb29tKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbUJ0bjEwaygpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4ID0gMjtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkeCkpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20oKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9tQnRuVHJpYWwoKSB7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmFjdFRyaWFsT25DaGVjaygpO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWR4KSk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIub25Kb2luUm9vbSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblVwZGF0ZUphY2twb3QocERhdGEpIHtcbiAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVzVXBkYXRlSmFja3BvdFNsb3RzKHBEYXRhKTtcbiAgICAgICAgbGV0IHJlc0pzb24gPSBKU09OLnBhcnNlKHJlcy5wb3RzKTtcblxuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMF0sIHJlc0pzb25bJ2JlbmxleSddWycxMDAnXS5wLCAzLjApO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMV0sIHJlc0pzb25bJ2JlbmxleSddWycxMDAwJ10ucCwgMy4wKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5saXN0UG90WzJdLCByZXNKc29uWydiZW5sZXknXVsnMTAwMDAnXS5wLCAzLjApO1xuICAgIH1cbn1cbiJdfQ==