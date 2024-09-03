
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/UIItemDiemDanh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxVSUl0ZW1EaWVtRGFuaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBa0M7QUFDbEMsMkNBQXNDO0FBRXRDLGlGQUE0RTtBQUM1RSx5RUFBb0U7QUFFOUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUE2SUM7UUExSUcsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFFN0IsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBOEh4QixDQUFDO0lBNUhHLHVDQUFjLEdBQWQsVUFBZSxNQUFNO1FBQ2pCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLFFBQVEsTUFBTSxFQUFFO1lBQ1osS0FBSyxHQUFHO2dCQUNKLEdBQUcsR0FBRyx3REFBd0QsQ0FBQztnQkFDL0QsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixHQUFHLEdBQUcsb0RBQW9ELENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osR0FBRyxHQUFHLHNEQUFzRCxDQUFDO2dCQUM3RCxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLEdBQUcsR0FBRyx1REFBdUQsQ0FBQztnQkFDOUQsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixHQUFHLEdBQUcsdURBQXVELENBQUM7Z0JBQzlELE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osR0FBRyxHQUFHLHNEQUFzRCxDQUFDO2dCQUM3RCxNQUFNO2dCQUNO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LDRCQUE0QixDQUFDLENBQUM7WUFDMUQsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN6QyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLDREQUE0RDtRQUM1RCwrQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxlQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBeklEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3VEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dEQUNXO0lBYlosY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQTZJbEM7SUFBRCxxQkFBQztDQTdJRCxBQTZJQyxDQTdJMkMsRUFBRSxDQUFDLFNBQVMsR0E2SXZEO2tCQTdJb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgY21kIH0gZnJvbSBcIi4vTG9iYnkuQ21kXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IE1pbmlHYW1lTmV0d29ya0NsaWVudCBmcm9tIFwiLi9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSBcIi4vU2NyaXB0L25ldHdvcmtzL1Nsb3ROZXR3b3JrQ2xpZW50XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUl0ZW1EaWVtRGFuaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0UHJvZ3Jlc3M6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0RGVzOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBpbWdQcm9ncmVzczogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5MYW06IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bk5oYW5UaHVvbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ0bkhvYW5UaGFuaDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGRhdGEgPSBudWxsO1xuXG4gICAgZ2V0RGVzY3JpcHRpb24oZ2FtZUlkKSB7XG4gICAgICAgIHZhciBkZXMgPSBcIlwiO1xuICAgICAgICBzd2l0Y2ggKGdhbWVJZCkge1xuICAgICAgICAgICAgY2FzZSAxOTE6XG4gICAgICAgICAgICAgICAgZGVzID0gXCJU4buVbmcgY8aw4bujYyBDaGnDqm0gdGluaCAyMDBrIFThurduZyAxIGzGsOG7o3QgcXVheSBCaXRjb2luIDEwMFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNzA6XG4gICAgICAgICAgICAgICAgZGVzID0gXCJU4buVbmcgY8aw4bujYyBCaXRjb2luIDIwMGsgVOG6t25nIDEgbMaw4bujdCBxdWF5IMSQdWEgWGUgMTAwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDExMDpcbiAgICAgICAgICAgICAgICBkZXMgPSBcIlThu5VuZyBjxrDhu6NjIMSQdWEgWGUgMjAwayBU4bq3bmcgMSBsxrDhu6N0IHF1YXkgQ2hpbSDEkGnDqm4gMTAwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE2MDpcbiAgICAgICAgICAgICAgICBkZXMgPSBcIlThu5VuZyBjxrDhu6NjIENoaW0gxJBpw6puIDIwMGsgVOG6t25nIDEgbMaw4bujdCBxdWF5IELDs25nIMSQw6EgMTAwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE1MDpcbiAgICAgICAgICAgICAgICBkZXMgPSBcIlThu5VuZyBjxrDhu6NjIELDs25nIMSQw6EgMjAwayBU4bq3bmcgMSBsxrDhu6N0IHF1YXkgQ2hpbSDEkGnDqm4gMTAwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE4MDpcbiAgICAgICAgICAgICAgICBkZXMgPSBcIlThu5VuZyBjxrDhu6NjIFRo4bqnbiBCw6BpIDIwMGsgVOG6t25nIDEgbMaw4bujdCBxdWF5IEJpdGNvaW4gMTAwXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlcztcbiAgICB9XG5cbiAgICBpbml0KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy50eHREZXMuc3RyaW5nID0gdGhpcy5nZXREZXNjcmlwdGlvbihkYXRhLmRhaWx5UXVlc3REYXRhLmdhbWVJZCk7XG4gICAgICAgIHZhciByYXRpbyA9IGRhdGEuZGFpbHlHaWZ0RGF0YS5jdXJyZW50VmFsdWUgLyBkYXRhLmRhaWx5UXVlc3REYXRhLnZhbHVlRG9uZTtcbiAgICAgICAgaWYgKHJhdGlvID4gMSkge1xuICAgICAgICAgICAgcmF0aW8gPSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHh0UHJvZ3Jlc3Muc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcHJvZ3Jlc3MnKSArIFwiOiBcIiArIE1hdGguZmxvb3IocmF0aW8gKiAxMDApICsgXCIlXCI7XG4gICAgICAgIHRoaXMuaW1nUHJvZ3Jlc3MuZmlsbFJhbmdlID0gcmF0aW87XG4gICAgICAgIGlmIChkYXRhLmRhaWx5R2lmdERhdGEuaXNSZWNlaXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuTGFtLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idG5OaGFuVGh1b25nLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5idG5Ib2FuVGhhbmguYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YS5kYWlseUdpZnREYXRhLmlzU3VjY2VzcyA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmJ0bkxhbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuTmhhblRodW9uZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5Ib2FuVGhhbmguYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnRuTGFtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0bk5oYW5UaHVvbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkhvYW5UaGFuaC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuTGFtKCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmRhaWx5UXVlc3REYXRhLmdhbWVJZCA9PSAxMjApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90M1wiLCBcIlNsb3QzXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLmRhaWx5UXVlc3REYXRhLmdhbWVJZCA9PSAxMTApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90MVwiLCBcIlNsb3QxXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLmRhaWx5UXVlc3REYXRhLmdhbWVJZCA9PSAxNzApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90N1wiLCBcIlNsb3Q3XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLmRhaWx5UXVlc3REYXRhLmdhbWVJZCA9PSAxNjApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90NFwiLCBcIlNsb3Q0XCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5kYXRhLmRhaWx5UXVlc3REYXRhLmdhbWVJZCA9PSAxNTApIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5yZW1vdmVBbGxXZWJWaWV3KCk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmNoZWNrQ29ubmVjdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uub3BlbkdhbWUoXCJTbG90MTBcIiwgXCJTbG90MTBcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmRhdGEuZGFpbHlRdWVzdERhdGEuZ2FtZUlkID09IDE1MCkge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnJlbW92ZUFsbFdlYlZpZXcoKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5vcGVuR2FtZShcIlNsb3QxMFwiLCBcIlNsb3QxMFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5kYWlseVF1ZXN0RGF0YS5nYW1lSWQgPT0gMTkxKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcga+G6v3QgbuG7kWkgdOG7m2kgc2VydmVyLi4uXCIpO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5HYW1lKFwiU2xvdDZcIiwgXCJTbG90NlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5kYWlseVF1ZXN0RGF0YS5nYW1lSWQgPT0gMTgwKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2UucmVtb3ZlQWxsV2ViVmlldygpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKFwixJBhbmcga+G6v3QgbuG7kWkgdOG7m2kgc2VydmVyLi4uXCIpO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLm9wZW5HYW1lKFwiU2xvdDhcIiwgXCJTbG90OFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5OaGFuVGh1b25nKCkge1xuICAgICAgICAvL1V0aWxzLkxvZyhcIm9uQnRuTmhhblRodW9uZzpcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuUmVxUmVjZWl2ZVF1ZXN0KHRoaXMuZGF0YS5pbmRleCkpO1xuICAgIH1cbn1cbiJdfQ==