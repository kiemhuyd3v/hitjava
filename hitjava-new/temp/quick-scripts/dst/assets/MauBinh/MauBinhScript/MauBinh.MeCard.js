
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.MeCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac60a4Gdu5MyL1USBM5ktVY', 'MauBinh.MeCard');
// MauBinh/MauBinhScript/MauBinh.MeCard.ts

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
var MauBinh_Controller_1 = require("./MauBinh.Controller");
var MauBinh_DragCard_1 = require("./MauBinh.DragCard");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MeCardController = /** @class */ (function (_super) {
    __extends(MeCardController, _super);
    function MeCardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imgFocus = null;
        _this.imgCard = null;
        _this.imgShadow = null;
        _this.card_info = null;
        _this.initPos = null;
        _this.canDrag = null;
        return _this;
        // update (dt) {}
    }
    MeCardController_1 = MeCardController;
    // LIFE-CYCLE CALLBACKS:
    MeCardController.prototype.onLoad = function () {
        MeCardController_1.instance = this;
        this.initPos = this.node.position;
    };
    MeCardController.prototype.start = function () { };
    MeCardController.prototype.onEnable = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
    };
    MeCardController.prototype.onDisable = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
    };
    MeCardController.prototype.activeDrag = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
    };
    MeCardController.prototype.offDrag = function () {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onBeginDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onDrag, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onEndDrag, this);
    };
    MeCardController.prototype.onBeginDrag = function (event) {
        //  cc.log("onBeginDrag : ", this.node.name);
        //  cc.log("onBeginDrag initPos : ", this.initPos);
        //  cc.log("onBeginDrag card_info : ", this.card_info);
        MauBinh_Controller_1.default.instance.cardSelect(this.card_info, this.node.position, parseInt(this.node.name) - 1);
    };
    MeCardController.prototype.onDrag = function (event) {
        this.dragging = true;
        var delta = event.getDelta();
        var currentPos = this.node.position;
        this.node.x = currentPos.x + delta.x;
        this.node.y = currentPos.y + delta.y;
        MauBinh_DragCard_1.default.instance.updatePos(currentPos.x + delta.x, currentPos.y + delta.y - 95);
    };
    MeCardController.prototype.onEndDrag = function (event) {
        this.dragging = false;
        this.node.position = this.initPos;
        MauBinh_DragCard_1.default.instance.endMove();
    };
    MeCardController.prototype.resetState = function () {
        if (this.initPos) {
            this.node.position = this.initPos;
            this.setCardFocus(false);
            this.setCardShadow(false);
        }
    };
    MeCardController.prototype.setupCard = function (data, src) {
        var _this = this;
        this.card_info = data;
        //  cc.log("MauBinh MeCard card_info : ", data);
        this.setCardFocus(false);
        this.setCardShadow(false);
        cc.tween(this.node)
            .to(0.1, { scaleX: 0 })
            .call(function () {
            _this.imgCard.getComponent(cc.Sprite).spriteFrame = src;
        })
            .to(0.1, { scaleX: 1 })
            .start();
    };
    MeCardController.prototype.updateCard = function (data, src) {
        this.card_info.card = data;
        this.setCardFocus(false);
        this.setCardShadow(false);
        this.setCardSrc(src);
    };
    MeCardController.prototype.setCardSrc = function (src) {
        this.imgCard.getComponent(cc.Sprite).spriteFrame = src;
    };
    MeCardController.prototype.setCardShadow = function (state) {
        this.imgShadow.active = state;
    };
    MeCardController.prototype.setCardFocus = function (state) {
        this.imgFocus.active = state;
    };
    MeCardController.prototype.setIsActive = function (state) {
        this.node.active = state;
    };
    MeCardController.prototype.getIsActive = function () {
        return this.node.active;
    };
    var MeCardController_1;
    MeCardController.instance = null;
    __decorate([
        property(cc.Node)
    ], MeCardController.prototype, "imgFocus", void 0);
    __decorate([
        property(cc.Node)
    ], MeCardController.prototype, "imgCard", void 0);
    __decorate([
        property(cc.Node)
    ], MeCardController.prototype, "imgShadow", void 0);
    MeCardController = MeCardController_1 = __decorate([
        ccclass
    ], MeCardController);
    return MeCardController;
}(cc.Component));
exports.default = MeCardController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5NZUNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXFEO0FBQ3JELHVEQUFvRDtBQUM5QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQTRIQztRQXZIRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGFBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixhQUFPLEdBQUcsSUFBSSxDQUFDOztRQThHZixpQkFBaUI7SUFDckIsQ0FBQzt5QkE1SG9CLGdCQUFnQjtJQWdCakMsd0JBQXdCO0lBRXhCLGlDQUFNLEdBQU47UUFDSSxrQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsbUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxvQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsa0NBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMs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LGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNYXVCaW5oQ29udHJvbGxlciBmcm9tIFwiLi9NYXVCaW5oLkNvbnRyb2xsZXJcIjtcbmltcG9ydCBEcmFnQ2FyZENvbnRyb2xsZXIgZnJvbSBcIi4vTWF1QmluaC5EcmFnQ2FyZFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lQ2FyZENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogTWVDYXJkQ29udHJvbGxlciA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpbWdGb2N1czogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaW1nQ2FyZDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaW1nU2hhZG93OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGNhcmRfaW5mbyA9IG51bGw7XG4gICAgaW5pdFBvcyA9IG51bGw7XG4gICAgY2FuRHJhZyA9IG51bGw7XG4gICAgZHJhZ2dpbmc6IGJvb2xlYW47XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTWVDYXJkQ29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5pbml0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgIH1cblxuICAgIHN0YXJ0KCkgeyB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQmVnaW5EcmFnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25EcmFnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkVuZERyYWcsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkJlZ2luRHJhZywgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkRyYWcsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkVuZERyYWcsIHRoaXMpO1xuICAgIH1cblxuICAgIGFjdGl2ZURyYWcoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkJlZ2luRHJhZywgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRHJhZywgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25FbmREcmFnLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvZmZEcmFnKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uQmVnaW5EcmFnLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRHJhZywgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uRW5kRHJhZywgdGhpcyk7XG4gICAgfVxuXG4gICAgb25CZWdpbkRyYWcoZXZlbnQpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIm9uQmVnaW5EcmFnIDogXCIsIHRoaXMubm9kZS5uYW1lKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIm9uQmVnaW5EcmFnIGluaXRQb3MgOiBcIiwgdGhpcy5pbml0UG9zKTtcbiAgICAgICAgLy8gIGNjLmxvZyhcIm9uQmVnaW5EcmFnIGNhcmRfaW5mbyA6IFwiLCB0aGlzLmNhcmRfaW5mbyk7XG4gICAgICAgIE1hdUJpbmhDb250cm9sbGVyLmluc3RhbmNlLmNhcmRTZWxlY3QodGhpcy5jYXJkX2luZm8sIHRoaXMubm9kZS5wb3NpdGlvbiwgcGFyc2VJbnQodGhpcy5ub2RlLm5hbWUpIC0gMSk7XG4gICAgfVxuXG4gICAgb25EcmFnKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xuXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGUueCA9IGN1cnJlbnRQb3MueCArIGRlbHRhLng7XG4gICAgICAgIHRoaXMubm9kZS55ID0gY3VycmVudFBvcy55ICsgZGVsdGEueTtcbiAgICAgICAgRHJhZ0NhcmRDb250cm9sbGVyLmluc3RhbmNlLnVwZGF0ZVBvcyhjdXJyZW50UG9zLnggKyBkZWx0YS54LCBjdXJyZW50UG9zLnkgKyBkZWx0YS55IC0gOTUpO1xuICAgIH1cblxuICAgIG9uRW5kRHJhZyhldmVudCkge1xuICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuaW5pdFBvcztcbiAgICAgICAgRHJhZ0NhcmRDb250cm9sbGVyLmluc3RhbmNlLmVuZE1vdmUoKTtcbiAgICB9XG5cbiAgICByZXNldFN0YXRlKCkge1xuICAgICAgICBpZiAodGhpcy5pbml0UG9zKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLmluaXRQb3M7XG4gICAgICAgICAgICB0aGlzLnNldENhcmRGb2N1cyhmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnNldENhcmRTaGFkb3coZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0dXBDYXJkKGRhdGEsIHNyYykge1xuICAgICAgICB0aGlzLmNhcmRfaW5mbyA9IGRhdGE7XG4gICAgICAgIC8vICBjYy5sb2coXCJNYXVCaW5oIE1lQ2FyZCBjYXJkX2luZm8gOiBcIiwgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0Q2FyZEZvY3VzKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRDYXJkU2hhZG93KGZhbHNlKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlWDogMCB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nQ2FyZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNyYztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlWDogMSB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ2FyZChkYXRhLCBzcmMpIHtcbiAgICAgICAgdGhpcy5jYXJkX2luZm8uY2FyZCA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2V0Q2FyZEZvY3VzKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRDYXJkU2hhZG93KGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRDYXJkU3JjKHNyYyk7XG4gICAgfVxuXG4gICAgc2V0Q2FyZFNyYyhzcmMpIHtcbiAgICAgICAgdGhpcy5pbWdDYXJkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3JjO1xuICAgIH1cblxuICAgIHNldENhcmRTaGFkb3coc3RhdGUpIHtcbiAgICAgICAgdGhpcy5pbWdTaGFkb3cuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0Q2FyZEZvY3VzKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuaW1nRm9jdXMuYWN0aXZlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0SXNBY3RpdmUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIGdldElzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmFjdGl2ZTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19