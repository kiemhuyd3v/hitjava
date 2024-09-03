"use strict";
cc._RF.push(module, '2ff94A+5olPVpaMTr+lNUIb', 'Lieng.ItemRoom');
// Lieng/LiengScript/Lieng.ItemRoom.ts

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
var Lieng_Controller_1 = require("./Lieng.Controller");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LiengItemRoom = /** @class */ (function (_super) {
    __extends(LiengItemRoom, _super);
    function LiengItemRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelBet = null;
        _this.labelBetMin = null;
        _this.labelNumPlayers = null;
        _this.roomInfo = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    LiengItemRoom.prototype.start = function () {
    };
    LiengItemRoom.prototype.initItem = function (info) {
        this.roomInfo = info;
        this.labelBet.string = Utils_1.default.formatNumber(info["moneyBet"]);
        this.labelBetMin.string = Utils_1.default.formatNumber(info["requiredMoney"]);
        this.labelNumPlayers.string = info["userCount"] + "/" + info["maxUserPerRoom"];
    };
    LiengItemRoom.prototype.chooseRoom = function () {
        //  console.log('444');
        Lieng_Controller_1.default.instance.joinRoom(this.roomInfo);
    };
    __decorate([
        property(cc.Label)
    ], LiengItemRoom.prototype, "labelBet", void 0);
    __decorate([
        property(cc.Label)
    ], LiengItemRoom.prototype, "labelBetMin", void 0);
    __decorate([
        property(cc.Label)
    ], LiengItemRoom.prototype, "labelNumPlayers", void 0);
    LiengItemRoom = __decorate([
        ccclass
    ], LiengItemRoom);
    return LiengItemRoom;
}(cc.Component));
exports.default = LiengItemRoom;

cc._RF.pop();