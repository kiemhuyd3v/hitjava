"use strict";
cc._RF.push(module, '089fbucxjFKWpNuCc5T8uJY', 'XocDia.PanelPayDoor');
// XocDia/XocDiaScript/XocDia.PanelPayDoor.ts

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
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PanelPayDoor = /** @class */ (function (_super) {
    __extends(PanelPayDoor, _super);
    function PanelPayDoor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title1 = null;
        _this.title2 = null;
        _this.itemTemplate = null;
        _this.slider = null;
        _this.sprProgress = null;
        _this.lblCoin = null;
        _this.coin = 1;
        _this.minCoin = 1;
        _this.maxCoin = 0;
        return _this;
    }
    PanelPayDoor.prototype.start = function () {
        var _this = this;
        this.slider.node.on("slide", function () {
            _this.updateValue();
        });
    };
    PanelPayDoor.prototype.show = function (action, maxCoin) {
        if (action == 2) {
            this.title1.string = this.title2.string = "MUA CHẴN";
        }
        else {
            this.title1.string = this.title2.string = "MUA LẺ";
        }
        this.coin = this.minCoin;
        this.maxCoin = maxCoin;
        this.node.active = true;
        this.itemTemplate.active = false;
        for (var i = 1; i < this.itemTemplate.parent.childrenCount; i++) {
            this.itemTemplate.parent.children[i].destroy();
        }
        this.slider.progress = 1;
        this.sprProgress.fillRange = 1;
        this.updateValue();
    };
    PanelPayDoor.prototype.addUser = function (nickname, coin, newMaxCoin) {
        if (newMaxCoin == 0) {
            this.node.active = false;
        }
        this.maxCoin = newMaxCoin;
        if (this.coin > this.maxCoin) {
            this.coin = this.maxCoin;
        }
        this.slider.progress = this.coin / (this.maxCoin - this.minCoin);
        this.sprProgress.fillRange = this.slider.progress;
        this.lblCoin.string = Utils_1.default.formatNumber(this.coin);
        var item = cc.instantiate(this.itemTemplate);
        item.parent = this.itemTemplate.parent;
        item.getChildByName("lblNickname").getComponent(cc.Label).string = nickname;
        item.getChildByName("lblCoin").getComponent(cc.Label).string = Utils_1.default.formatMoney(coin);
        item.active = true;
    };
    PanelPayDoor.prototype.getCoin = function () {
        return this.coin;
    };
    PanelPayDoor.prototype.updateValue = function () {
        this.sprProgress.fillRange = this.slider.progress;
        this.coin = this.minCoin + Math.round((this.maxCoin - this.minCoin) * this.slider.progress);
        this.lblCoin.string = Utils_1.default.formatMoney(this.coin);
    };
    __decorate([
        property(cc.Label)
    ], PanelPayDoor.prototype, "title1", void 0);
    __decorate([
        property(cc.Label)
    ], PanelPayDoor.prototype, "title2", void 0);
    __decorate([
        property(cc.Node)
    ], PanelPayDoor.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Slider)
    ], PanelPayDoor.prototype, "slider", void 0);
    __decorate([
        property(cc.Sprite)
    ], PanelPayDoor.prototype, "sprProgress", void 0);
    __decorate([
        property(cc.Label)
    ], PanelPayDoor.prototype, "lblCoin", void 0);
    PanelPayDoor = __decorate([
        ccclass
    ], PanelPayDoor);
    return PanelPayDoor;
}(cc.Component));
exports.default = PanelPayDoor;

cc._RF.pop();