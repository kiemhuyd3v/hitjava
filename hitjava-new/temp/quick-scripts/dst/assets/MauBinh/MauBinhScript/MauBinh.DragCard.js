
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/MauBinh/MauBinhScript/MauBinh.DragCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTWF1QmluaFxcTWF1QmluaFNjcmlwdFxcTWF1QmluaC5EcmFnQ2FyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUQ7QUFDL0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQVk7SUFBNUQ7UUFBQSxxRUFzQ0M7UUFuQ0csd0JBQXdCO1FBRXhCLG1CQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFdBQUssR0FBRyxJQUFJLENBQUM7UUFDYixVQUFJLEdBQUcsSUFBSSxDQUFDOztRQThCWixpQkFBaUI7SUFDckIsQ0FBQzsyQkF0Q29CLGtCQUFrQjtJQVNuQyxtQ0FBTSxHQUFOO1FBQ0ksb0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0NBQUssR0FBTDtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDbEIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDSSw2Q0FBNkM7UUFDN0MsNEJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELDZDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXRCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELDRCQUFpQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7O0lBakNhLDJCQUFRLEdBQXVCLElBQUksQ0FBQztJQUZqQyxrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXNDdEM7SUFBRCx5QkFBQztDQXRDRCxBQXNDQyxDQXRDK0MsRUFBRSxDQUFDLFNBQVMsR0FzQzNEO2tCQXRDb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hdUJpbmhDb250cm9sbGVyIGZyb20gXCIuL01hdUJpbmguQ29udHJvbGxlclwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdDYXJkQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBEcmFnQ2FyZENvbnRyb2xsZXIgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgY3VycmVudFRhcmdldCA9IG51bGw7XG4gICAgb3RoZXIgPSBudWxsO1xuICAgIHNlbGYgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBEcmFnQ2FyZENvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlUG9zKHBvc19YLCBwb3NfWSkge1xuICAgICAgICAvLyB0aGlzLm5vZGUub3BhY2l0eSA9IDEwMDtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3NfWCwgcG9zX1kpO1xuICAgIH1cblxuICAgIGVuZE1vdmUoKSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJlbmRNb3ZlIDogXCIsIHRoaXMuY3VycmVudFRhcmdldCk7XG4gICAgICAgIE1hdUJpbmhDb250cm9sbGVyLmluc3RhbmNlLmNvbXBsZXRlTW92ZUNhcmQodGhpcy5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgdGhpcy5vdGhlciA9IG90aGVyLm5vZGU7XG4gICAgICAgIHRoaXMuc2VsZiA9IHNlbGYubm9kZTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRUYXJnZXQgPSBwYXJzZUludCh0aGlzLm90aGVyLm5hbWUpIC0gMTtcbiAgICAgICAgTWF1QmluaENvbnRyb2xsZXIuaW5zdGFuY2Uuc2hvd01vdmVUYXJnZXQodGhpcy5jdXJyZW50VGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19