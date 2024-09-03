"use strict";
cc._RF.push(module, '51ffe0qf+FFWK0X275xS9fw', 'XocDia.Room');
// XocDia/XocDiaScript/XocDia.Room.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var XocDia_Cmd_1 = require("./XocDia.Cmd");
var XocDia_XocDiaNetworkClient_1 = require("./XocDia.XocDiaNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var XocDiaRoom = /** @class */ (function (_super) {
    __extends(XocDiaRoom, _super);
    function XocDiaRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBet = null;
        _this.lblMin = null;
        _this.lblPlayers = null;
        _this.sprPlayers = null;
        // LIFE-CYCLE CALLBACKS:
        _this.itemData = null;
        return _this;
    }
    XocDiaRoom.prototype.init = function (itemData) {
        this.itemData = itemData;
        this.lblBet.string = Utils_1.default.formatNumber(itemData["id"]);
        this.lblMin.string = Utils_1.default.formatNumber(itemData["requiredMoney"]);
        this.lblPlayers.string = itemData["userCount"] + "/" + itemData["maxUserPerRoom"];
        this.sprPlayers.fillRange = itemData["userCount"] / itemData["maxUserPerRoom"];
    };
    XocDiaRoom.prototype.onBtnClick = function () {
        if (Configs_1.default.Login.Coin >= this.itemData["requiredMoney"]) {
            App_1.default.instance.showLoading(true);
            XocDia_XocDiaNetworkClient_1.default.getInstance().send(new XocDia_Cmd_1.default.SendJoinRoomById(this.itemData["id"]));
        }
        else {
            App_1.default.instance.showToast("Số dư của bạn không đủ! Vui lòng nạp thêm.");
        }
    };
    __decorate([
        property(cc.Label)
    ], XocDiaRoom.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], XocDiaRoom.prototype, "lblMin", void 0);
    __decorate([
        property(cc.Label)
    ], XocDiaRoom.prototype, "lblPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], XocDiaRoom.prototype, "sprPlayers", void 0);
    XocDiaRoom = __decorate([
        ccclass
    ], XocDiaRoom);
    return XocDiaRoom;
}(cc.Component));
exports.default = XocDiaRoom;

cc._RF.pop();