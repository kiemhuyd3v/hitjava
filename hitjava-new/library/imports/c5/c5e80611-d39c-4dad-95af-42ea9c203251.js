"use strict";
cc._RF.push(module, 'c5e80YR05xNrZWvQuqcIDJR', 'Lobby.PopupLuckyWheel');
// Lobby/LobbyScript/Lobby.PopupLuckyWheel.ts

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
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("./Script/networks/Network.InPacket");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupLuckyWheel = /** @class */ (function (_super) {
    __extends(PopupLuckyWheel, _super);
    function PopupLuckyWheel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wheel1 = null;
        _this.wheel3 = null;
        _this.lblCount = null;
        _this.btnClose = null;
        _this.btnSpin = null;
        _this.spinCount = 0;
        return _this;
    }
    PopupLuckyWheel.prototype.start = function () {
        var _this = this;
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inPacket = new Network_InPacket_1.default(data);
            switch (inPacket.getCmdId()) {
                case Lobby_Cmd_1.default.Code.SPIN_LUCKY_WHEEL: {
                    var res = new Lobby_Cmd_1.default.ResSpinLuckyWheel(data);
                    //  //Utils.Log(res);
                    if (res.error != 0) {
                        switch (res.error) {
                            case 1:
                                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_check_connect'));
                                break;
                            case 2:
                                App_1.default.instance.alertDialog.showMsg("Bạn đã hết lượt quay.");
                                break;
                            case 3:
                                App_1.default.instance.alertDialog.showMsg("Mỗi ngày chỉ được quay tối đa 2 lần!");
                                break;
                        }
                        _this.btnSpin.interactable = true;
                        _this.btnClose.interactable = true;
                        break;
                    }
                    _this.spinCount -= 1;
                    _this.lblCount.string = _this.spinCount.toString();
                    Configs_1.default.Login.LuckyWheel = res.remainCount;
                    Configs_1.default.Login.Coin = res.currentMoneyVin;
                    var msg_1 = "Chúc mừng bạn đã nhận được\n";
                    var rotateToIdx1 = 3;
                    switch (res.prizeSlot) {
                        case "KhoBau1":
                            rotateToIdx1 = 2;
                            msg_1 += "1 lượt quay Range Rover";
                            break;
                        case "KhoBau2":
                            rotateToIdx1 = 6;
                            msg_1 += "2 lượt quay Range Rover";
                            break;
                        case "KhoBau3":
                            rotateToIdx1 = 11;
                            msg_1 += "3 lượt quay Range Rover";
                            break;
                        case "NuDiepVien1":
                            rotateToIdx1 = 0;
                            msg_1 += "1 lượt quay MayBach";
                            break;
                        case "NuDiepVien2":
                            rotateToIdx1 = 10;
                            msg_1 += "2 lượt quay MayBach";
                            break;
                        case "NuDiepVien3":
                            rotateToIdx1 = 4;
                            msg_1 += "3 lượt quay MayBach";
                            break;
                        case "SieuAnhHung1":
                            rotateToIdx1 = 5;
                            msg_1 += "1 lượt quay Bentley";
                            break;
                        case "SieuAnhHung2":
                            rotateToIdx1 = 1;
                            msg_1 += "1 lượt quay Bentley";
                            break;
                        case "SieuAnhHung3":
                            rotateToIdx1 = 8;
                            msg_1 += "1 lượt quay Bentley";
                            break;
                        case "more":
                            rotateToIdx1 = 9;
                            msg_1 += "thêm 1 lượt quay";
                            break;
                    }
                    if (rotateToIdx1 != 3)
                        msg_1 += "và ";
                    var rotateToIdx3 = 1;
                    switch (res.prizeVin) {
                        case "1000":
                            rotateToIdx3 = 7;
                            msg_1 += "1.000 Xu";
                            break;
                        case "2000":
                            rotateToIdx3 = 5;
                            msg_1 += "2.000 Xu";
                            break;
                        case "5000":
                            rotateToIdx3 = 3;
                            msg_1 += "5.000 Xu";
                            break;
                        case "10000":
                            rotateToIdx3 = 6;
                            msg_1 += "10.000 Xu";
                            break;
                        case "20000":
                            rotateToIdx3 = 2;
                            msg_1 += "20.000 Xu";
                            break;
                        case "50000":
                            rotateToIdx3 = 4;
                            msg_1 += "50.000 Xu";
                            break;
                        case "100000":
                            rotateToIdx3 = 0;
                            msg_1 += "100.000 Xu";
                            break;
                        default:
                            break;
                    }
                    msg_1 += ".";
                    if (rotateToIdx3 == 1 && rotateToIdx1 == 3) {
                        msg_1 = "Chúc bạn may mắn lần sau.";
                    }
                    _this.wheel1.stopAllActions();
                    _this.wheel3.stopAllActions();
                    _this.wheel1.angle = 0;
                    _this.wheel3.angle = 0;
                    _this.wheel1.runAction(cc.rotateTo(3, -(360 * 4 + (360 - 360 / 12 * rotateToIdx1) - 360 / 12 / 2)).easing(cc.easeSineInOut()));
                    _this.wheel3.runAction(cc.sequence(cc.delayTime(0.25), cc.rotateTo(4, 360 * 4 + 360 / 8 * rotateToIdx3 + 360 / 8 / 2).easing(cc.easeSineInOut()), cc.callFunc(function () {
                        _this.btnSpin.interactable = true;
                        _this.btnClose.interactable = true;
                        _this.spinCount = Configs_1.default.Login.LuckyWheel;
                        _this.lblCount.string = _this.spinCount.toString();
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        App_1.default.instance.alertDialog.showMsg(msg_1);
                    })));
                    break;
                }
            }
        }, this);
    };
    PopupLuckyWheel.prototype.show = function () {
        _super.prototype.show.call(this);
        this.wheel1.angle = 0;
        this.wheel3.angle = 0;
        this.spinCount = Configs_1.default.Login.LuckyWheel;
        this.lblCount.string = this.spinCount.toString();
    };
    PopupLuckyWheel.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
    };
    PopupLuckyWheel.prototype.actSpin = function () {
        this.btnSpin.interactable = false;
        this.btnClose.interactable = false;
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.default.ReqSpinLuckyWheel());
    };
    __decorate([
        property(cc.Node)
    ], PopupLuckyWheel.prototype, "wheel1", void 0);
    __decorate([
        property(cc.Node)
    ], PopupLuckyWheel.prototype, "wheel3", void 0);
    __decorate([
        property(cc.Label)
    ], PopupLuckyWheel.prototype, "lblCount", void 0);
    __decorate([
        property(cc.Button)
    ], PopupLuckyWheel.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Button)
    ], PopupLuckyWheel.prototype, "btnSpin", void 0);
    PopupLuckyWheel = __decorate([
        ccclass
    ], PopupLuckyWheel);
    return PopupLuckyWheel;
}(Dialog_1.default));
exports.default = PopupLuckyWheel;

cc._RF.pop();