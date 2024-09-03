"use strict";
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