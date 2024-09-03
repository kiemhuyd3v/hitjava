"use strict";
cc._RF.push(module, '36926qIdxdMrpX//tGzu5q2', 'MauBinh.ItemRoom');
// MauBinh/MauBinhScript/MauBinh.ItemRoom.ts

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
var MauBinh_Controller_1 = require("./MauBinh.Controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ItemRoom = /** @class */ (function (_super) {
    __extends(ItemRoom, _super);
    function ItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ItemRoom.prototype.start = function () {
    };
    ItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    ItemRoom.prototype.chooseRoom = function () {
        MauBinh_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], ItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], ItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], ItemRoom.prototype, "labelNumPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], ItemRoom.prototype, "progressNumPlayers", void 0);
    ItemRoom = __decorate([
        ccclass
    ], ItemRoom);
    return ItemRoom;
}(cc.Component));
exports.default = ItemRoom;

cc._RF.pop();