
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.BoxKiemTien.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f846jDCz5Or4HPMwf5b9Hy', 'Lobby.BoxKiemTien');
// Lobby/LobbyScript/Lobby.BoxKiemTien.ts

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
var Global_1 = require("../../Loading/src/Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoxKiemTien = /** @class */ (function (_super) {
    __extends(BoxKiemTien, _super);
    function BoxKiemTien() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lbTime = null;
        _this.isMove = false;
        _this.distance = 0;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    BoxKiemTien.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            _this.node.setPosition(_this.node.getPosition().add(touch.getDelta()));
            _this.distance += Math.abs(touch.getDelta().x) + Math.abs(touch.getDelta().y);
            if (_this.distance >= 70) {
                _this.isMove = true;
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (touch) {
            if (!_this.isMove) {
                Global_1.Global.LobbyController.actKiemTien();
            }
            _this.isMove = false;
        });
    };
    BoxKiemTien.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], BoxKiemTien.prototype, "lbTime", void 0);
    BoxKiemTien = __decorate([
        ccclass
    ], BoxKiemTien);
    return BoxKiemTien;
}(cc.Component));
exports.default = BoxKiemTien;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Cb3hLaWVtVGllbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxtREFBa0Q7QUFJNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE4QkM7UUEzQkcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUN4QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUSxHQUFXLENBQUMsQ0FBQzs7UUF3QnJCLGlCQUFpQjtJQUNyQixDQUFDO0lBdEJHLHdCQUF3QjtJQUV4Qiw0QkFBTSxHQUFOO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFLO1lBQzdDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RSxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO2dCQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN0QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsS0FBSztZQUM1QyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRTtnQkFDZCxlQUFNLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3hDO1lBQ0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUF6QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSztJQUhQLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Qi9CO0lBQUQsa0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QndDLEVBQUUsQ0FBQyxTQUFTLEdBOEJwRDtrQkE5Qm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvR2xvYmFsXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm94S2llbVRpZW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiVGltZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIGlzTW92ZSA9IGZhbHNlO1xuICAgIGRpc3RhbmNlOiBudW1iZXIgPSAwO1xuXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICh0b3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLmFkZCh0b3VjaC5nZXREZWx0YSgpKSk7XG4gICAgICAgICAgICB0aGlzLmRpc3RhbmNlICs9IE1hdGguYWJzKHRvdWNoLmdldERlbHRhKCkueCkgKyBNYXRoLmFicyh0b3VjaC5nZXREZWx0YSgpLnkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2UgPj0gNzApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAodG91Y2gpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc01vdmUpIHtcbiAgICAgICAgICAgICAgICBHbG9iYWwuTG9iYnlDb250cm9sbGVyLmFjdEtpZW1UaWVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19