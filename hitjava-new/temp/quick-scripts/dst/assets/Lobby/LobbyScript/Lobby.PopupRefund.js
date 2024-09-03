
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupRefund.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d524tFxTBFWJT0CtM5GeW2', 'Lobby.PopupRefund');
// Lobby/LobbyScript/Lobby.PopupRefund.ts

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
exports.PopupRefund = void 0;
var Configs_1 = require("../../Loading/src/Configs");
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupRefund = /** @class */ (function (_super) {
    __extends(PopupRefund, _super);
    function PopupRefund() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblBalance = null;
        _this.edbCoin = null;
        _this.listItem = [];
        _this.fonts = [];
        _this.popupConfirm = null;
        _this.lbSport = null;
        _this.lbCasino = null;
        _this.lbGameLot = null;
        _this.lbTotal = null;
        _this.lbInfomation = null;
        _this.btnConfirm = null;
        _this.currentItemRefund = null;
        return _this;
    }
    PopupRefund.prototype.onLoad = function () {
    };
    PopupRefund.prototype.onEnable = function () {
        this.setInfo();
    };
    PopupRefund.prototype.start = function () {
    };
    PopupRefund.prototype.setInfo = function () {
        var _this = this;
        var today = new Date().getTime();
        //Utils.Log("today==" + today);
        var firstDayRefund = today - 86400 * 1000 * 8;
        var firstDay = new Date(firstDayRefund).getDate();
        var _loop_1 = function (i) {
            var item = this_1.listItem[i];
            var dayRefund = new Date(today - (86400 * 1000 * (7 - i)));
            var date = dayRefund.getDate();
            var month = dayRefund.getMonth() + 1;
            var year = dayRefund.getFullYear();
            item.getChildByName('lbDay').getComponent(cc.Label).string = cc.js.formatStr("%s/%s/%s", (date < 10 ? "0" + date : date), (month < 10 ? "0" + month : month), year);
            item.getComponent(cc.Button).clickEvents[0].customEventData = cc.js.formatStr("%s-%s-%s", year, (month < 10 ? "0" + month : month), (date < 10 ? "0" + date : date));
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: "2029", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, date: item.getComponent(cc.Button).clickEvents[0].customEventData }, function (err, res) {
                //Utils.Log(res);
                App_1.default.instance.showLoading(false);
                var lbChip = item.getChildByName('lbChip').getComponent(cc.Label);
                if (res["success"]) {
                    var totalRefund = res['data']['sumCasino'] + res['data']['sumGame'] + res['data']['sumSport'];
                    lbChip.string = "";
                    lbChip.font = _this.fonts[0];
                    lbChip.string = Utils_1.default.formatNumber(totalRefund);
                    lbChip.fontSize = 40;
                    lbChip.node.y = -101.237;
                    item.getComponentInChildren(cc.Sprite).node.color = cc.Color.WHITE;
                    item.getComponent(cc.Button).interactable = true;
                    item['data'] = res['data'];
                    item['data']['total'] = totalRefund;
                    item['data']['date'] = cc.js.formatStr("%s-%s-%s", (date < 10 ? "0" + date : date), (month < 10 ? "0" + month : month), year); //cái này để show ra cho dễ nhìn
                    item['data']['dateRefund'] = cc.js.formatStr("%s-%s-%s", year, (month < 10 ? "0" + month : month), (date < 10 ? "0" + date : date)); //cái này để gưi lên cho server
                }
                else {
                    lbChip.string = "";
                    lbChip.font = _this.fonts[1];
                    lbChip.node.y = -94;
                    lbChip.fontSize = 20;
                    item.getComponentInChildren(cc.Sprite).node.color = cc.Color.GRAY;
                    item.getComponent(cc.Button).interactable = false;
                    if (res['errorCode'] == 1002) {
                        lbChip.string = App_1.default.instance.getTextLang('txt_refund_receive');
                    }
                    else {
                        lbChip.string = App_1.default.instance.getTextLang('txt_refund_error');
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < 7; i++) {
            _loop_1(i);
        }
    };
    PopupRefund.prototype.onClickReceive = function (even, data) {
        var dataItem = even.target['data'];
        this.currentItemRefund = even.target;
        this.popupConfirm.show();
        this.lbCasino.string = Utils_1.default.formatNumber(dataItem['sumCasino']);
        this.lbSport.string = Utils_1.default.formatNumber(dataItem['sumSport']);
        this.lbGameLot.string = Utils_1.default.formatNumber(dataItem['sumGame']);
        this.lbTotal.string = Utils_1.default.formatNumber(dataItem['total']);
        this.lbInfomation.string = App_1.default.instance.getTextLang('txt_refund_confirm') + "\n" + dataItem['date'];
        this.btnConfirm.clickEvents[0].customEventData = dataItem['dateRefund'];
    };
    PopupRefund.prototype.onClickConfirm = function (even, data) {
        var _this = this;
        this.popupConfirm.dismiss();
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "2030", nn: Configs_1.default.Login.Nickname, at: Configs_1.default.Login.AccessToken, date: data }, function (err, res) {
            //Utils.Log(res);
            App_1.default.instance.showLoading(false);
            if (res["success"]) {
                App_1.default.instance.ShowAlertDialog(App_1.default.instance.getTextLang('txt_refund_success'));
                Configs_1.default.Login.Coin += _this.currentItemRefund['data']['total'];
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                var lbChip = _this.currentItemRefund.getChildByName('lbChip').getComponent(cc.Label);
                _this.currentItemRefund.getComponent(cc.Button).interactable = false;
                _this.currentItemRefund.getComponentInChildren(cc.Sprite).node.color = cc.Color.GRAY;
                lbChip.font = _this.fonts[1];
                lbChip.node.y = -94;
                lbChip.fontSize = 20;
                lbChip.string = App_1.default.instance.getTextLang('txt_refund_receive');
            }
            else {
                App_1.default.instance.ShowAlertDialog(res.data);
            }
        });
    };
    __decorate([
        property(cc.Label)
    ], PopupRefund.prototype, "lblBalance", void 0);
    __decorate([
        property(cc.EditBox)
    ], PopupRefund.prototype, "edbCoin", void 0);
    __decorate([
        property([cc.Node])
    ], PopupRefund.prototype, "listItem", void 0);
    __decorate([
        property([cc.Font])
    ], PopupRefund.prototype, "fonts", void 0);
    __decorate([
        property(Dialog_1.default)
    ], PopupRefund.prototype, "popupConfirm", void 0);
    __decorate([
        property(cc.Label)
    ], PopupRefund.prototype, "lbSport", void 0);
    __decorate([
        property(cc.Label)
    ], PopupRefund.prototype, "lbCasino", void 0);
    __decorate([
        property(cc.Label)
    ], PopupRefund.prototype, "lbGameLot", void 0);
    __decorate([
        property(cc.Label)
    ], PopupRefund.prototype, "lbTotal", void 0);
    __decorate([
        property(cc.Label)
    ], PopupRefund.prototype, "lbInfomation", void 0);
    __decorate([
        property(cc.Button)
    ], PopupRefund.prototype, "btnConfirm", void 0);
    PopupRefund = __decorate([
        ccclass
    ], PopupRefund);
    return PopupRefund;
}(Dialog_1.default));
exports.PopupRefund = PopupRefund;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFJlZnVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBQ2hELCtDQUEwQztBQUMxQywyQ0FBc0M7QUFDdEMsdUVBQWtFO0FBQ2xFLGlEQUE0QztBQUM1QywrQ0FBMEM7QUFHcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsK0JBQU07SUFBdkM7UUFBQSxxRUEwSEM7UUF4SEcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFlLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBRXpCLFdBQUssR0FBYyxFQUFFLENBQUM7UUFFdEIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFHNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3Qix1QkFBaUIsR0FBRyxJQUFJLENBQUM7O0lBaUc3QixDQUFDO0lBaEdHLDRCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0QsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCw2QkFBTyxHQUFQO1FBQUEsaUJBa0RDO1FBakRHLElBQUksS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDaEMsK0JBQStCO1FBQ2hDLElBQUksY0FBYyxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFB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QyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUVsRTtpQkFDSTtnQkFDRCxhQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUM7UUFDTCxDQUFDLENBQ0EsQ0FBQztJQUNOLENBQUM7SUF2SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzttREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNNO0lBRTNCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2lEQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDOzhDQUNFO0lBRXRCO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7cURBQ1c7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNPO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNXO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1M7SUF2QnBCLFdBQVc7UUFEdkIsT0FBTztPQUNLLFdBQVcsQ0EwSHZCO0lBQUQsa0JBQUM7Q0ExSEQsQUEwSEMsQ0ExSGdDLGdCQUFNLEdBMEh0QztBQTFIWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuL1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQb3B1cFJlZnVuZCBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJhbGFuY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBlZGJDb2luOiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGxpc3RJdGVtOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLkZvbnRdKVxuICAgIGZvbnRzOiBjYy5Gb250W10gPSBbXTtcbiAgICBAcHJvcGVydHkoRGlhbG9nKVxuICAgIHBvcHVwQ29uZmlybTogRGlhbG9nID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlNwb3J0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiQ2FzaW5vOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiR2FtZUxvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlRvdGFsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSW5mb21hdGlvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQ29uZmlybTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIGN1cnJlbnRJdGVtUmVmdW5kID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICBcbiAgICB9XG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5zZXRJbmZvKCk7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgIFxuICAgIH1cbiAgICBzZXRJbmZvKCkge1xuICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgIC8vVXRpbHMuTG9nKFwidG9kYXk9PVwiICsgdG9kYXkpO1xuICAgICAgICBsZXQgZmlyc3REYXlSZWZ1bmQgPSB0b2RheSAtIDg2NDAwICogMTAwMCAqIDg7XG4gICAgICAgIGxldCBmaXJzdERheSA9IG5ldyBEYXRlKGZpcnN0RGF5UmVmdW5kKS5nZXREYXRlKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMubGlzdEl0ZW1baV07XG4gICAgICAgICAgICBsZXQgZGF5UmVmdW5kID0gbmV3IERhdGUodG9kYXkgLSAoODY0MDAgKiAxMDAwICogKDcgLSBpKSkpO1xuICAgICAgICAgICAgbGV0IGRhdGUgPSBkYXlSZWZ1bmQuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgbGV0IG1vbnRoID0gZGF5UmVmdW5kLmdldE1vbnRoKCkgKyAxO1xuICAgICAgICAgICAgbGV0IHllYXIgPSBkYXlSZWZ1bmQuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoJ2xiRGF5JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5qcy5mb3JtYXRTdHIoXCIlcy8lcy8lc1wiLCAoZGF0ZSA8IDEwID8gXCIwXCIgKyBkYXRlIDogZGF0ZSksIChtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoKSwgeWVhcik7XG4gICAgICAgICAgICBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzWzBdLmN1c3RvbUV2ZW50RGF0YSA9IGNjLmpzLmZvcm1hdFN0cihcIiVzLSVzLSVzXCIsIHllYXIsIChtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoKSwgKGRhdGUgPCAxMCA/IFwiMFwiICsgZGF0ZSA6IGRhdGUpKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBjOiBcIjIwMjlcIiwgbm46IENvbmZpZ3MuTG9naW4uTmlja25hbWUsIGF0OiBDb25maWdzLkxvZ2luLkFjY2Vzc1Rva2VuLCBkYXRlOiBpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzWzBdLmN1c3RvbUV2ZW50RGF0YSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgLy9VdGlscy5Mb2cocmVzKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBsYkNoaXAgPSBpdGVtLmdldENoaWxkQnlOYW1lKCdsYkNoaXAnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIGlmIChyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFJlZnVuZCA9IHJlc1snZGF0YSddWydzdW1DYXNpbm8nXSArIHJlc1snZGF0YSddWydzdW1HYW1lJ10gKyByZXNbJ2RhdGEnXVsnc3VtU3BvcnQnXTtcbiAgICAgICAgICAgICAgICAgICAgbGJDaGlwLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIGxiQ2hpcC5mb250ID0gdGhpcy5mb250c1swXTtcbiAgICAgICAgICAgICAgICAgICAgbGJDaGlwLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0b3RhbFJlZnVuZCk7XG4gICAgICAgICAgICAgICAgICAgIGxiQ2hpcC5mb250U2l6ZSA9IDQwO1xuICAgICAgICAgICAgICAgICAgICBsYkNoaXAubm9kZS55ID0gLTEwMS4yMzc7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtWydkYXRhJ10gPSByZXNbJ2RhdGEnXTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVsnZGF0YSddWyd0b3RhbCddID0gdG90YWxSZWZ1bmQ7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1bJ2RhdGEnXVsnZGF0ZSddID0gY2MuanMuZm9ybWF0U3RyKFwiJXMtJXMtJXNcIiwgKGRhdGUgPCAxMCA/IFwiMFwiICsgZGF0ZSA6IGRhdGUpLCAobW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aCksIHllYXIpOy8vY8OhaSBuw6B5IMSR4buDIHNob3cgcmEgY2hvIGThu4UgbmjDrG5cbiAgICAgICAgICAgICAgICAgICAgaXRlbVsnZGF0YSddWydkYXRlUmVmdW5kJ10gPSBjYy5qcy5mb3JtYXRTdHIoXCIlcy0lcy0lc1wiLCB5ZWFyLCAobW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aCksIChkYXRlIDwgMTAgPyBcIjBcIiArIGRhdGUgOiBkYXRlKSk7IC8vY8OhaSBuw6B5IMSR4buDIGfGsGkgbMOqbiBjaG8gc2VydmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYkNoaXAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgbGJDaGlwLmZvbnQgPSB0aGlzLmZvbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBsYkNoaXAubm9kZS55ID0gLTk0O1xuICAgICAgICAgICAgICAgICAgICBsYkNoaXAuZm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlNwcml0ZSkubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNbJ2Vycm9yQ29kZSddID09IDEwMDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxiQ2hpcC5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZWZ1bmRfcmVjZWl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGJDaGlwLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3JlZnVuZF9lcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQ2xpY2tSZWNlaXZlKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgbGV0IGRhdGFJdGVtID0gZXZlbi50YXJnZXRbJ2RhdGEnXTtcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbVJlZnVuZCA9IGV2ZW4udGFyZ2V0O1xuICAgICAgICB0aGlzLnBvcHVwQ29uZmlybS5zaG93KCk7XG4gICAgICAgIHRoaXMubGJDYXNpbm8uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGRhdGFJdGVtWydzdW1DYXNpbm8nXSk7XG4gICAgICAgIHRoaXMubGJTcG9ydC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YUl0ZW1bJ3N1bVNwb3J0J10pO1xuICAgICAgICB0aGlzLmxiR2FtZUxvdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YUl0ZW1bJ3N1bUdhbWUnXSk7XG4gICAgICAgIHRoaXMubGJUb3RhbC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoZGF0YUl0ZW1bJ3RvdGFsJ10pO1xuICAgICAgICB0aGlzLmxiSW5mb21hdGlvbi5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZWZ1bmRfY29uZmlybScpICsgXCJcXG5cIiArIGRhdGFJdGVtWydkYXRlJ107XG4gICAgICAgIHRoaXMuYnRuQ29uZmlybS5jbGlja0V2ZW50c1swXS5jdXN0b21FdmVudERhdGEgPSBkYXRhSXRlbVsnZGF0ZVJlZnVuZCddO1xuICAgIH1cbiAgICBvbkNsaWNrQ29uZmlybShldmVuLCBkYXRhKSB7XG4gICAgICAgIHRoaXMucG9wdXBDb25maXJtLmRpc21pc3MoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKHRydWUpO1xuICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCIyMDMwXCIsIG5uOiBDb25maWdzLkxvZ2luLk5pY2tuYW1lLCBhdDogQ29uZmlncy5Mb2dpbi5BY2Nlc3NUb2tlbiwgZGF0ZTogZGF0YSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAvL1V0aWxzLkxvZyhyZXMpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChyZXNbXCJzdWNjZXNzXCJdKSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9yZWZ1bmRfc3VjY2VzcycpKTtcbiAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gKz0gdGhpcy5jdXJyZW50SXRlbVJlZnVuZFsnZGF0YSddWyd0b3RhbCddO1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgbGV0IGxiQ2hpcCA9IHRoaXMuY3VycmVudEl0ZW1SZWZ1bmQuZ2V0Q2hpbGRCeU5hbWUoJ2xiQ2hpcCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbVJlZnVuZC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJdGVtUmVmdW5kLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuU3ByaXRlKS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcbiAgICAgICAgICAgICAgICBsYkNoaXAuZm9udCA9IHRoaXMuZm9udHNbMV07XG4gICAgICAgICAgICAgICAgbGJDaGlwLm5vZGUueSA9IC05NDtcbiAgICAgICAgICAgICAgICBsYkNoaXAuZm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgICAgICBsYkNoaXAuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfcmVmdW5kX3JlY2VpdmUnKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLlNob3dBbGVydERpYWxvZyhyZXMuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=