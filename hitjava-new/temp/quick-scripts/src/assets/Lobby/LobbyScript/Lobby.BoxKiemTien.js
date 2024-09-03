"use strict";
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