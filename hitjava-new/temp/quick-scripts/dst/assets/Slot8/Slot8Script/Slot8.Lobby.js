
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OC5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLCtGQUEwRjtBQUMxRix1Q0FBNkI7QUFHdkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUE0REM7UUF6REcsYUFBTyxHQUFlLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBRXRCLHFCQUFlLEdBQW9CLElBQUksQ0FBQzs7SUFxRDVDLENBQUM7SUFuRFUseUJBQUksR0FBWCxVQUFZLGdCQUFpQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTztZQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsMkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkksZ0RBQWdEO1FBQ2hELHFFQUFxRTtRQUNyRSxxRUFBcUU7UUFDckUsNEVBQTRFO1FBQzVFLElBQUk7SUFDUixDQUFDO0lBQ0QseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUU1QixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBR00sOEJBQVMsR0FBaEI7UUFDSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRTtRQUNELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyw2QkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMvQiwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxrQkFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBR00sb0NBQWUsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixJQUFJLEdBQUcsR0FBRyxJQUFJLGtCQUFHLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEUsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXhERDtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQzsrQ0FDSTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDRTtJQUxMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0E0RDlCO0lBQUQsaUJBQUM7Q0E1REQsQUE0REMsQ0E1RHVDLEVBQUUsQ0FBQyxTQUFTLEdBNERuRDtrQkE1RG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBTbG90TmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nsb3ROZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL1Nsb3Q4Q21kXCI7XG5pbXBvcnQgU2xvdDhDb250cm9sbGVyIGZyb20gXCIuL1Nsb3Q4Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDhMb2JieSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBsaXN0UG90OiBjYy5MYWJlbFtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICByb29tczogY2MuTm9kZVtdID0gW107XG5cbiAgICBtU2xvdENvbnRyb2xsZXI6IFNsb3Q4Q29udHJvbGxlciA9IG51bGw7XG5cbiAgICBwdWJsaWMgaW5pdChwU2xvdDNDb250cm9sbGVyOiBTbG90OENvbnRyb2xsZXIpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIgPSBwU2xvdDNDb250cm9sbGVyO1xuICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gMjtcbiAgICAgICAgaWYgKHRoaXMubVNsb3RDb250cm9sbGVyLmlzTXVzaWMpIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm1TbG90Q29udHJvbGxlci5tdXNpY0dhbWUsIHRydWUpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKS5ub2RlLnNldFNjYWxlKGNjLnYyKDAuNjcgKiAoY2Mud2luU2l6ZS53aWR0aCAvIDEyODApLCAwLjY3ICogKGNjLndpblNpemUuaGVpZ2h0IC8gNzIwKSkpO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucm9vbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMucm9vbXNbaV0ueCA9IHRoaXMucm9vbXNbaV0ueCAqIChjYy53aW5TaXplLndpZHRoIC8gMTI4MCk7XG4gICAgICAgIC8vICAgICB0aGlzLnJvb21zW2ldLnkgPSB0aGlzLnJvb21zW2ldLnkgKiAoY2Mud2luU2l6ZS53aWR0aCAvIDEyODApO1xuICAgICAgICAvLyAgICAgdGhpcy5yb29tc1tpXS5zY2FsZSA9IHRoaXMucm9vbXNbaV0uc2NhbGUgKiAoY2Mud2luU2l6ZS53aWR0aCAvIDEyODApXG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25CdG5CYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5tU2xvdENvbnRyb2xsZXIuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm1TbG90Q29udHJvbGxlci5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFVuU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWQpKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xuICAgICAgICBBcHAuaW5zdGFuY2UubG9hZFNjZW5lKFwiTG9iYnlcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkJ0blRyeSgpIHtcbiAgICAgICAgdGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWQgPSAwO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUodGhpcy5tU2xvdENvbnRyb2xsZXIuYmV0SWQpKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20obnVsbCk7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmlzVHJpYWwgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgcHVibGljIG9uVXBkYXRlSmFja3BvdChwRGF0YSkge1xuICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNVcGRhdGVKYWNrcG90U2xvdHMocERhdGEpO1xuICAgICAgICBsZXQgcmVzSnNvbiA9IEpTT04ucGFyc2UocmVzLnBvdHMpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMF0sIHJlc0pzb25bJ3JvbGxSb3llJ11bJzEwMCddLnAsIDMuMCk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGlzdFBvdFsxXSwgcmVzSnNvblsncm9sbFJveWUnXVsnMTAwMCddLnAsIDMuMCk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGlzdFBvdFsyXSwgcmVzSnNvblsncm9sbFJveWUnXVsnMTAwMDAnXS5wLCAzLjApO1xuICAgIH1cbn1cbiJdfQ==