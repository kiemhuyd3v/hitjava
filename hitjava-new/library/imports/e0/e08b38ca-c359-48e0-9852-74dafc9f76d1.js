"use strict";
cc._RF.push(module, 'e08b3jKw1lI4JhSdNr8n3bR', 'MauBinh.DragCard');
// MauBinh/MauBinhScript/MauBinh.DragCard.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DragCardController = /** @class */ (function (_super) {
    __extends(DragCardController, _super);
    function DragCardController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // LIFE-CYCLE CALLBACKS:
        _this.currentTarget = null;
        _this.other = null;
        _this.self = null;
        return _this;
        // update (dt) {}
    }
    DragCardController_1 = DragCardController;
    DragCardController.prototype.onLoad = function () {
        DragCardController_1.instance = this;
    };
    DragCardController.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    DragCardController.prototype.updatePos = function (pos_X, pos_Y) {
        // this.node.opacity = 100;
        this.node.opacity = 255;
        this.node.setPosition(pos_X, pos_Y);
    };
    DragCardController.prototype.endMove = function () {
        //  cc.log("endMove : ", this.currentTarget);
        MauBinh_Controller_1.default.instance.completeMoveCard(this.currentTarget);
        this.node.active = false;
    };
    DragCardController.prototype.onCollisionEnter = function (other, self) {
        this.other = other.node;
        this.self = self.node;
        this.currentTarget = parseInt(this.other.name) - 1;
        MauBinh_Controller_1.default.instance.showMoveTarget(this.currentTarget);
    };
    var DragCardController_1;
    DragCardController.instance = null;
    DragCardController = DragCardController_1 = __decorate([
        ccclass
    ], DragCardController);
    return DragCardController;
}(cc.Component));
exports.default = DragCardController;

cc._RF.pop();