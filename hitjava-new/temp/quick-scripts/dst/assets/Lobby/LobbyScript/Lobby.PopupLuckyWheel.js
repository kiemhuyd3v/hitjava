
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupLuckyWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cEx1Y2t5V2hlZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELHlDQUE4QjtBQUM5QiwyQ0FBc0M7QUFDdEMsdUVBQWtFO0FBQ2xFLGlEQUE0QztBQUM1QyxpRkFBNEU7QUFDNUUsdUVBQTBEO0FBR3BELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFNO0lBQW5EO1FBQUEscUVBMktDO1FBektHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsQ0FBQyxDQUFDOztJQStKMUIsQ0FBQztJQTdKRywrQkFBSyxHQUFMO1FBQUEsaUJBMElDO1FBeklHLCtCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFDLElBQUk7WUFDakQsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFBRSxPQUFPO1lBRTlCLElBQUksUUFBUSxHQUFHLElBQUksMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxRQUFRLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDekIsS0FBSyxtQkFBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLG1CQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzFDLHFCQUFxQjtvQkFFckIsSUFBSSxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTt3QkFD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Q0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsaUNBQU8sR0FBUDtRQUNJLGlCQUFNLE9BQU8sV0FBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQ0FBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNuQywrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBeEtEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztvREFDTTtJQVZULGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EyS25DO0lBQUQsc0JBQUM7Q0EzS0QsQUEyS0MsQ0EzSzRDLGdCQUFNLEdBMktsRDtrQkEzS29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9Mb2JieS5DbWRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuL1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cEx1Y2t5V2hlZWwgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdoZWVsMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2hlZWwzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkNsb3NlOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIHByaXZhdGUgc3BpbkNvdW50ID0gMDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBpblBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5QYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU1BJTl9MVUNLWV9XSEVFTDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZXNTcGluTHVja3lXaGVlbChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIC8vVXRpbHMuTG9nKHJlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvciAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2hlY2tfY29ubmVjdCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIkLhuqFuIMSRw6MgaOG6v3QgbMaw4bujdCBxdWF5LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIk3hu5dpIG5nw6B5IGNo4buJIMSRxrDhu6NjIHF1YXkgdOG7kWkgxJFhIDIgbOG6p24hXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluQ291bnQgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxDb3VudC5zdHJpbmcgPSB0aGlzLnNwaW5Db3VudC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uTHVja3lXaGVlbCA9IHJlcy5yZW1haW5Db3VudDtcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leVZpbjtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gXCJDaMO6YyBt4burbmcgYuG6oW4gxJHDoyBuaOG6rW4gxJHGsOG7o2NcXG5cIjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdGF0ZVRvSWR4MSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnByaXplU2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIktob0JhdTFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVUb0lkeDEgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjEgbMaw4bujdCBxdWF5IFJhbmdlIFJvdmVyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiS2hvQmF1MlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVRvSWR4MSA9IDY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMiBsxrDhu6N0IHF1YXkgUmFuZ2UgUm92ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJLaG9CYXUzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgxID0gMTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMyBsxrDhu6N0IHF1YXkgUmFuZ2UgUm92ZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJOdURpZXBWaWVuMVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVRvSWR4MSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMSBsxrDhu6N0IHF1YXkgTWF5QmFjaFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk51RGllcFZpZW4yXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgxID0gMTA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMiBsxrDhu6N0IHF1YXkgTWF5QmFjaFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIk51RGllcFZpZW4zXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgxID0gNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIzIGzGsOG7o3QgcXVheSBNYXlCYWNoXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2lldUFuaEh1bmcxXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgxID0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIxIGzGsOG7o3QgcXVheSBCZW50bGV5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2lldUFuaEh1bmcyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgxID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIxIGzGsOG7o3QgcXVheSBCZW50bGV5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiU2lldUFuaEh1bmczXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgxID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIxIGzGsOG7o3QgcXVheSBCZW50bGV5XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibW9yZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVRvSWR4MSA9IDk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwidGjDqm0gMSBsxrDhu6N0IHF1YXlcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3RhdGVUb0lkeDEgIT0gMykgbXNnICs9IFwidsOgIFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3RhdGVUb0lkeDMgPSAxO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy5wcml6ZVZpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjEwMDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVUb0lkeDMgPSA3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjEuMDAwIFh1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMjAwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVRvSWR4MyA9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMi4wMDAgWHVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCI1MDAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgzID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCI1LjAwMCBYdVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjEwMDAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRlVG9JZHgzID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIxMC4wMDAgWHVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCIyMDAwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVRvSWR4MyA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMjAuMDAwIFh1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNTAwMDBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3RhdGVUb0lkeDMgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIjUwLjAwMCBYdVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjEwMDAwMFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZVRvSWR4MyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IFwiMTAwLjAwMCBYdVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIuXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3RhdGVUb0lkeDMgPT0gMSAmJiByb3RhdGVUb0lkeDEgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gXCJDaMO6YyBi4bqhbiBtYXkgbeG6r24gbOG6p24gc2F1LlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVlbDEuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVlbDMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVlbDEuYW5nbGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndoZWVsMy5hbmdsZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2hlZWwxLnJ1bkFjdGlvbihjYy5yb3RhdGVUbygzLCAtKDM2MCAqIDQgKyAoMzYwIC0gMzYwIC8gMTIgKiByb3RhdGVUb0lkeDEpIC0gMzYwIC8gMTIgLyAyKSkuZWFzaW5nKGNjLmVhc2VTaW5lSW5PdXQoKSkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndoZWVsMy5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4yNSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5yb3RhdGVUbyg0LCAzNjAgKiA0ICsgMzYwIC8gOCAqIHJvdGF0ZVRvSWR4MyArIDM2MCAvIDggLyAyKS5lYXNpbmcoY2MuZWFzZVNpbmVJbk91dCgpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNwaW4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluQ291bnQgPSBDb25maWdzLkxvZ2luLkx1Y2t5V2hlZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxDb3VudC5zdHJpbmcgPSB0aGlzLnNwaW5Db3VudC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2cobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy53aGVlbDEuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLndoZWVsMy5hbmdsZSA9IDA7XG4gICAgICAgIHRoaXMuc3BpbkNvdW50ID0gQ29uZmlncy5Mb2dpbi5MdWNreVdoZWVsO1xuICAgICAgICB0aGlzLmxibENvdW50LnN0cmluZyA9IHRoaXMuc3BpbkNvdW50LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIGFjdFNwaW4oKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlJlcVNwaW5MdWNreVdoZWVsKCkpO1xuICAgIH1cbn1cbiJdfQ==