"use strict";
cc._RF.push(module, '0d387sG0+JCpKQXz96BnXJw', 'ItemGameLive');
// Lobby/LobbyScript/GameLive/ItemGameLive.ts

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
var Tween_1 = require("../Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemGameLive = /** @class */ (function (_super) {
    __extends(ItemGameLive, _super);
    function ItemGameLive() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.txtName = null;
        _this.txtBalance = null;
        _this.txtMaintain = null;
        _this.nodeBox = null;
        _this.money = 0;
        return _this;
    }
    ItemGameLive.prototype.show = function () {
        this.node.active = true;
        this.money = 0;
    };
    ItemGameLive.prototype.hide = function () {
        this.node.active = false;
    };
    ItemGameLive.prototype.maintain = function () {
        this.txtBalance.node.active = false;
        this.txtMaintain.node.active = true;
    };
    ItemGameLive.prototype.updateData = function (data) {
        this.txtBalance.node.active = true;
        this.txtMaintain.node.active = false;
        this.money = parseInt(data);
        if (this.id == 1 || this.id == 2 || this.id == 3) {
            Tween_1.default.numberTo(this.txtBalance, this.money * 1000, 1);
        }
        else {
            Tween_1.default.numberTo(this.txtBalance, this.money, 1);
        }
    };
    ItemGameLive.prototype.onBtnClick = function () {
    };
    __decorate([
        property
    ], ItemGameLive.prototype, "id", void 0);
    __decorate([
        property(cc.Label)
    ], ItemGameLive.prototype, "txtName", void 0);
    __decorate([
        property(cc.Label)
    ], ItemGameLive.prototype, "txtBalance", void 0);
    __decorate([
        property(cc.Label)
    ], ItemGameLive.prototype, "txtMaintain", void 0);
    __decorate([
        property(cc.Node)
    ], ItemGameLive.prototype, "nodeBox", void 0);
    ItemGameLive = __decorate([
        ccclass
    ], ItemGameLive);
    return ItemGameLive;
}(cc.Component));
exports.default = ItemGameLive;

cc._RF.pop();