"use strict";
cc._RF.push(module, 'd7964R9fH1DGqFU8Qaj3tM6', 'UIItemDiemDanh');
// Lobby/LobbyScript/UIItemDiemDanh.ts

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
var Lobby_Cmd_1 = require("./Lobby.Cmd");
var App_1 = require("./Script/common/App");
var MiniGameNetworkClient_1 = require("./Script/networks/MiniGameNetworkClient");
var SlotNetworkClient_1 = require("./Script/networks/SlotNetworkClient");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIItemDiemDanh = /** @class */ (function (_super) {
    __extends(UIItemDiemDanh, _super);
    function UIItemDiemDanh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.txtProgress = null;
        _this.txtDes = null;
        _this.imgProgress = null;
        _this.btnLam = null;
        _this.btnNhanThuong = null;
        _this.btnHoanThanh = null;
        _this.data = null;
        return _this;
    }
    UIItemDiemDanh.prototype.getDescription = function (gameId) {
        var des = "";
        switch (gameId) {
            case 191:
                des = "Tổng cược Chiêm tinh 200k Tặng 1 lượt quay Bitcoin 100";
                break;
            case 170:
                des = "Tổng cược Bitcoin 200k Tặng 1 lượt quay Đua Xe 100";
                break;
            case 110:
                des = "Tổng cược Đua Xe 200k Tặng 1 lượt quay Chim Điên 100";
                break;
            case 160:
                des = "Tổng cược Chim Điên 200k Tặng 1 lượt quay Bóng Đá 100";
                break;
            case 150:
                des = "Tổng cược Bóng Đá 200k Tặng 1 lượt quay Chim Điên 100";
                break;
            case 180:
                des = "Tổng cược Thần Bài 200k Tặng 1 lượt quay Bitcoin 100";
                break;
                break;
        }
        return des;
    };
    UIItemDiemDanh.prototype.init = function (data) {
        this.data = data;
        this.txtDes.string = this.getDescription(data.dailyQuestData.gameId);
        var ratio = data.dailyGiftData.currentValue / data.dailyQuestData.valueDone;
        if (ratio > 1) {
            ratio = 1;
        }
        this.txtProgress.string = App_1.default.instance.getTextLang('txt_progress') + ": " + Math.floor(ratio * 100) + "%";
        this.imgProgress.fillRange = ratio;
        if (data.dailyGiftData.isReceive == true) {
            this.btnLam.active = false;
            this.btnNhanThuong.active = false;
            this.btnHoanThanh.active = false;
        }
        else if (data.dailyGiftData.isSuccess == true) {
            this.btnLam.active = false;
            this.btnNhanThuong.active = true;
            this.btnHoanThanh.active = false;
        }
        else {
            this.btnLam.active = true;
            this.btnNhanThuong.active = false;
            this.btnHoanThanh.active = false;
        }
    };
    UIItemDiemDanh.prototype.onBtnLam = function () {
        if (this.data.dailyQuestData.gameId == 120) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot3", "Slot3");
            });
        }
        else if (this.data.dailyQuestData.gameId == 110) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot1", "Slot1");
            });
        }
        else if (this.data.dailyQuestData.gameId == 170) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot7", "Slot7");
            });
        }
        else if (this.data.dailyQuestData.gameId == 160) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot4", "Slot4");
            });
        }
        else if (this.data.dailyQuestData.gameId == 150) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot10", "Slot10");
            });
        }
        else if (this.data.dailyQuestData.gameId == 150) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot10", "Slot10");
            });
        }
        else if (this.data.dailyQuestData.gameId == 191) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot6", "Slot6");
            });
        }
        else if (this.data.dailyQuestData.gameId == 180) {
            App_1.default.instance.removeAllWebView();
            App_1.default.instance.showErrLoading("Đang kết nối tới server...");
            SlotNetworkClient_1.default.getInstance().checkConnect(function () {
                App_1.default.instance.showLoading(false);
                App_1.default.instance.openGame("Slot8", "Slot8");
            });
        }
    };
    UIItemDiemDanh.prototype.onBtnNhanThuong = function () {
        //Utils.Log("onBtnNhanThuong:" + JSON.stringify(this.data));
        MiniGameNetworkClient_1.default.getInstance().send(new Lobby_Cmd_1.cmd.ReqReceiveQuest(this.data.index));
    };
    __decorate([
        property(cc.Label)
    ], UIItemDiemDanh.prototype, "txtProgress", void 0);
    __decorate([
        property(cc.Label)
    ], UIItemDiemDanh.prototype, "txtDes", void 0);
    __decorate([
        property(cc.Sprite)
    ], UIItemDiemDanh.prototype, "imgProgress", void 0);
    __decorate([
        property(cc.Node)
    ], UIItemDiemDanh.prototype, "btnLam", void 0);
    __decorate([
        property(cc.Node)
    ], UIItemDiemDanh.prototype, "btnNhanThuong", void 0);
    __decorate([
        property(cc.Node)
    ], UIItemDiemDanh.prototype, "btnHoanThanh", void 0);
    UIItemDiemDanh = __decorate([
        ccclass
    ], UIItemDiemDanh);
    return UIItemDiemDanh;
}(cc.Component));
exports.default = UIItemDiemDanh;

cc._RF.pop();