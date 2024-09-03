
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4.Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NC5Mb2JieS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpRUFBNEQ7QUFDNUQscUVBQWdFO0FBQ2hFLCtGQUEwRjtBQUMxRix1Q0FBNkI7QUFHdkIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEwRUM7UUF2RUcsYUFBTyxHQUFnQixFQUFFLENBQUM7UUFFMUIsV0FBSyxHQUFlLEVBQUUsQ0FBQztRQUV2QixxQkFBZSxHQUFxQixJQUFJLENBQUM7O0lBbUU3QyxDQUFDO0lBakVVLHlCQUFJLEdBQVgsVUFBWSxnQkFBa0M7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx5QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsa0NBQWEsR0FBYjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FB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RUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUF0RUQ7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7K0NBQ0s7SUFFMUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0c7SUFMTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMEU5QjtJQUFELGlCQUFDO0NBMUVELEFBMEVDLENBMUV1QyxFQUFFLENBQUMsU0FBUyxHQTBFbkQ7a0JBMUVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9TbG90NENtZFwiO1xuaW1wb3J0IFNsb3Q0Q29udHJvbGxlciBmcm9tIFwiLi9TbG90NENvbnRyb2xsZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90NExvYmJ5IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShbY2MuTGFiZWxdKVxuICAgIGxpc3RQb3QgOiBjYy5MYWJlbFtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICByb29tcyA6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgbVNsb3RDb250cm9sbGVyIDogU2xvdDRDb250cm9sbGVyID0gbnVsbDtcblxuICAgIHB1YmxpYyBpbml0KHBTbG90M0NvbnRyb2xsZXIgOiBTbG90NENvbnRyb2xsZXIpe1xuICAgICAgICB0aGlzLm1TbG90Q29udHJvbGxlciA9IHBTbG90M0NvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXg9MjtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuXG4gICAgc2hvdygpe1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9uKCk7XG4gICAgfVxuXG4gICAgaGlkZSgpe1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2hvd0FuaW1hdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yKHZhciBpPTA7aTx0aGlzLnJvb21zLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdmFyIG5vZGVCb3ggPSB0aGlzLnJvb21zW2ldXG4gICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQobm9kZUJveCk7XG4gICAgICAgICAgICBub2RlQm94Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIG5vZGVCb3gucG9zaXRpb24gPSBjYy52MygtMjAwLCAwLDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYzKDAsIC0yMDAsMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpID09IDIpIHtcbiAgICAgICAgICAgICAgICBub2RlQm94LnBvc2l0aW9uID0gY2MudjMoMCwgMjAwLDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZUJveC5wb3NpdGlvbiA9IGNjLnYzKDIwMCwgMCwwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVCb3gpXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25CdG5CYWNrKCl7XG4gICAgICAgIGlmICh0aGlzLm1TbG90Q29udHJvbGxlci5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMubVNsb3RDb250cm9sbGVyLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TdWJjcmliZSh0aGlzLm1TbG90Q29udHJvbGxlci5iZXRJZCkpO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wQWxsKCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5sb2FkU2NlbmUoXCJMb2JieVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnRuVHJ5KCl7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkID0gMDtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKHRoaXMubVNsb3RDb250cm9sbGVyLmJldElkKSk7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLm9uSm9pblJvb20obnVsbCk7XG4gICAgICAgIHRoaXMubVNsb3RDb250cm9sbGVyLmlzVHJpYWwgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBvblVwZGF0ZUphY2twb3QocERhdGEpe1xuICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNVcGRhdGVKYWNrcG90U2xvdHMocERhdGEpO1xuICAgICAgICBsZXQgcmVzSnNvbiA9IEpTT04ucGFyc2UocmVzLnBvdHMpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMF0sIHJlc0pzb25bJ3RhbWh1bmcnXVsnMTAwJ10ucCwgMC4zKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5saXN0UG90WzFdLCByZXNKc29uWyd0YW1odW5nJ11bJzEwMDAnXS5wLCAwLjMpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxpc3RQb3RbMl0sIHJlc0pzb25bJ3RhbWh1bmcnXVsnMTAwMDAnXS5wLCAwLjMpO1xuICAgIH1cbn1cbiJdfQ==