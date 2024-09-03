"use strict";
cc._RF.push(module, 'e07a8lBr39OXr5c0VekIC9q', 'BaCay.ItemRoom');
// BaCay/BaCayScript/BaCay.ItemRoom.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var BaCay_Room_1 = require("./BaCay.Room");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaCayItemRoom = /** @class */ (function (_super) {
    __extends(BaCayItemRoom, _super);
    function BaCayItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.progressNumPlayers = null;
        _this.roomInfo = null;
        _this.requireChip = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    BaCayItemRoom.prototype.onLoad = function () {
        this.node.active = false;
    };
    BaCayItemRoom.prototype.start = function () {
    };
    BaCayItemRoom.prototype.initItem = function (info) {
        cc.log("initItem:" + JSON.stringify(info));
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["id"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.requireChip = info["requiredMoney"];
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
        this.progressNumPlayers.fillRange = info["userCount"] / info["maxUserPerRoom"];
    };
    BaCayItemRoom.prototype.chooseRoom = function () {
        if (Configs_1.default.Login.Coin >= this.requireChip) {
            BaCay_Room_1.default.instance.joinRoom(this.roomInfo);
        }
        else if (this.roomInfo["userCount"] >= this.roomInfo["maxUserPerRoom"]) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_room_err9'));
        }
        else {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
        }
        // BaCayController.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], BaCayItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], BaCayItemRoom.prototype, "labelNumPlayers", void 0);
    __decorate([
        property(cc.Sprite)
    ], BaCayItemRoom.prototype, "progressNumPlayers", void 0);
    BaCayItemRoom = __decorate([
        ccclass
    ], BaCayItemRoom);
    return BaCayItemRoom;
}(cc.Component));
exports.default = BaCayItemRoom;

cc._RF.pop();