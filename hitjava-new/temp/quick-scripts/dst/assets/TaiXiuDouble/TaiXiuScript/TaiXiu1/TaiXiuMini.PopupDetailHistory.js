
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupDetailHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21f0d1UG0BOWpn2bpe9+oRh', 'TaiXiuMini.PopupDetailHistory');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.PopupDetailHistory.ts

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
var Http_1 = require("../../../Loading/src/Http");
var Configs_1 = require("../../../Loading/src/Configs");
var TaiXiuMini_TaiXiuMiniController_1 = require("./TaiXiuMini.TaiXiuMiniController");
var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupDetailHistory = /** @class */ (function (_super) {
    __extends(PopupDetailHistory, _super);
    function PopupDetailHistory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblSession = null;
        _this.lblResult = null;
        _this.lblPage = null;
        _this.lblTotalBetTai = null;
        _this.lblTotalBetXiu = null;
        _this.lblTotalRefundTai = null;
        _this.lblTotalRefundXiu = null;
        _this.sfDices = [];
        _this.sfTai = null;
        _this.sfXiu = null;
        _this.sprDice1 = null;
        _this.sprDice2 = null;
        _this.sprDice3 = null;
        _this.sprResult = null;
        _this.sprResult_Tai = null;
        _this.sprResult_Xiu = null;
        _this.itemTemplate = null;
        _this.items = [];
        _this.inited = false;
        _this.session = 0;
        _this.page = 1;
        _this.totalPage = 1;
        _this.historiesTai = [];
        _this.historiesXiu = [];
        _this.totalBetTai = 0;
        _this.totalRefundTai = 0;
        _this.totalBetXiu = 0;
        _this.totalRefundXiu = 0;
        return _this;
    }
    PopupDetailHistory.prototype.showDetail = function (session) {
        this.session = session;
        this.show();
    };
    PopupDetailHistory.prototype.show = function () {
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        // this.sprResult.node.active = false;
        this.lblSession.string = "Phiên: #" + this.session;
        this.lblResult.string = "";
        if (this.inited) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].active = false;
            }
            return;
        }
        this.itemTemplate.active = false;
        for (var i = 0; i < 9; i++) {
            var node = cc.instantiate(this.itemTemplate);
            node.parent = this.itemTemplate.parent;
            node.active = false;
            this.items.push(node);
        }
        this.inited = true;
    };
    PopupDetailHistory.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.loadData();
    };
    PopupDetailHistory.prototype.loadData = function () {
        var _this = this;
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].active = false;
        }
        this.sprDice1.node.active = false;
        this.sprDice2.node.active = false;
        this.sprDice3.node.active = false;
        // this.sprResult.node.active = false;
        this.lblSession.string = "Phiên: #" + this.session;
        this.lblResult.string = "";
        this.totalBetTai = 0;
        this.totalBetXiu = 0;
        this.totalRefundTai = 0;
        this.totalRefundXiu = 0;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { "c": 102, "rid": this.session, "mt": Configs_1.default.App.MONEY_TYPE }, function (err, res) {
            if (err != null)
                return;
            _this.historiesTai = [];
            _this.historiesXiu = [];
            App_1.default.instance.showLoading(false);
            if (res.success && res["resultTX"] !== null) {
                //  cc.log("HISTORY SESSION:", JSON.stringify(res));
                for (var i = 0; i < res["transactions"].length; i++) {
                    var itemData = res["transactions"][i];
                    if (itemData["betSide"] === 1) {
                        _this.historiesTai.push(itemData);
                        _this.totalBetTai += itemData["betValue"];
                        _this.totalRefundTai += itemData["refund"];
                    }
                    else {
                        _this.historiesXiu.push(itemData);
                        _this.totalBetXiu += itemData["betValue"];
                        _this.totalRefundXiu += itemData["refund"];
                    }
                }
                for (var i = 0; i < _this.items.length; i++) {
                    _this.items[i].active = false;
                }
                _this.page = 1;
                _this.totalPage = _this.historiesXiu.length > _this.historiesTai.length ? _this.historiesXiu.length : _this.historiesTai.length;
                _this.totalPage = Math.ceil(_this.totalPage / _this.items.length);
                _this.lblPage.string = _this.page + "/" + _this.totalPage;
                _this.lblSession.string = "Phiên: #" + res["resultTX"]["referenceId"];
                _this.lblResult.string = res["resultTX"]["result"] == 1
                    ? " - Tài " + (res["resultTX"]["dice1"] + res["resultTX"]["dice2"] + res["resultTX"]["dice3"]) + "(" + res["resultTX"]["dice1"] + "-" + res["resultTX"]["dice2"] + "-" + res["resultTX"]["dice3"] + ")"
                    : " - Xỉu " + (res["resultTX"]["dice1"] + res["resultTX"]["dice2"] + res["resultTX"]["dice3"]) + "(" + res["resultTX"]["dice1"] + "-" + res["resultTX"]["dice2"] + "-" + res["resultTX"]["dice3"] + ")";
                _this.lblTotalBetTai.string = Utils_1.default.formatNumber(_this.totalBetTai) + " / " + Utils_1.default.formatNumber(_this.totalRefundTai);
                _this.lblTotalBetXiu.string = Utils_1.default.formatNumber(_this.totalBetXiu) + " / " + Utils_1.default.formatNumber(_this.totalRefundXiu);
                _this.sprDice1.spriteFrame = _this.sfDices[res["resultTX"]["dice1"]];
                _this.sprDice1.node.active = true;
                _this.sprDice2.spriteFrame = _this.sfDices[res["resultTX"]["dice2"]];
                _this.sprDice2.node.active = true;
                _this.sprDice3.spriteFrame = _this.sfDices[res["resultTX"]["dice3"]];
                _this.sprDice3.node.active = true;
                // this.sprResult.spriteFrame = res["resultTX"]["result"] == 1 ? this.sfTai : this.sfXiu;
                if (res["resultTX"]["result"] == 1) {
                    cc.Tween.stopAllByTarget(_this.sprResult_Tai);
                    cc.Tween.stopAllByTarget(_this.sprResult_Xiu);
                    _this.sprResult_Tai.scale = 0.6;
                    _this.sprResult_Xiu.scale = 0.6;
                    cc.tween(_this.sprResult_Tai).repeatForever(cc.tween().sequence(cc.tween().to(0.3, { scale: 0.7 }), cc.tween().to(0.3, { scale: 0.6 }), cc.tween().to(0.3, { scale: 0.5 }), cc.tween().to(0.3, { scale: 0.6 })))
                        .start();
                }
                else {
                    cc.Tween.stopAllByTarget(_this.sprResult_Tai);
                    cc.Tween.stopAllByTarget(_this.sprResult_Xiu);
                    _this.sprResult_Tai.scale = 0.6;
                    _this.sprResult_Xiu.scale = 0.6;
                    cc.tween(_this.sprResult_Xiu).repeatForever(cc.tween().sequence(cc.tween().to(0.3, { scale: 0.7 }), cc.tween().to(0.3, { scale: 0.6 }), cc.tween().to(0.3, { scale: 0.5 }), cc.tween().to(0.3, { scale: 0.6 })))
                        .start();
                }
                // this.sprResult.node.active = true;
                _this.loadDataPage();
            }
        });
    };
    PopupDetailHistory.prototype.loadDataPage = function () {
        for (var i = 0; i < this.items.length; i++) {
            var idx = (this.page - 1) * this.items.length + i;
            var item = this.items[i];
            item.active = true;
            if (idx < this.historiesTai.length) {
                var itemData = this.historiesTai[idx];
                item.getChildByName("Time").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("Refund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                item.getChildByName("Jackpot").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["jpAmount"]);
            }
            else {
                item.getChildByName("Time").getComponent(cc.Label).string = "";
                item.getChildByName("Account").getComponent(cc.Label).string = "";
                item.getChildByName("Refund").getComponent(cc.Label).string = "";
                item.getChildByName("Bet").getComponent(cc.Label).string = "";
                item.getChildByName("Jackpot").getComponent(cc.Label).string = "";
            }
            if (idx < this.historiesXiu.length) {
                var itemData = this.historiesXiu[idx];
                item.getChildByName("Time2").getComponent(cc.Label).string = (itemData["inputTime"] < 10 ? "00:0" : "00:") + itemData["inputTime"];
                item.getChildByName("Account2").getComponent(cc.Label).string = itemData["username"];
                item.getChildByName("Refund2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refund"]);
                item.getChildByName("Bet2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betValue"]);
                item.getChildByName("Jackpot2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["jpAmount"]);
            }
            else {
                item.getChildByName("Time2").getComponent(cc.Label).string = "";
                item.getChildByName("Account2").getComponent(cc.Label).string = "";
                item.getChildByName("Refund2").getComponent(cc.Label).string = "";
                item.getChildByName("Bet2").getComponent(cc.Label).string = "";
                item.getChildByName("Jackpot2").getComponent(cc.Label).string = "";
            }
        }
        this.lblPage.string = this.page + "/" + this.totalPage;
    };
    PopupDetailHistory.prototype.actNextPage = function () {
        this.page++;
        if (this.page > this.totalPage)
            this.page = this.totalPage;
        this.loadDataPage();
    };
    PopupDetailHistory.prototype.actPrevPage = function () {
        this.page--;
        if (this.page < 1)
            this.page = 1;
        this.loadDataPage();
    };
    PopupDetailHistory.prototype.actNextSession = function () {
        this.session++;
        if (this.session > TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.length - 1].session) {
            this.session = TaiXiuMini_TaiXiuMiniController_1.default.instance.histories[TaiXiuMini_TaiXiuMiniController_1.default.instance.histories.length - 1].session;
            return;
        }
        this.loadData();
    };
    PopupDetailHistory.prototype.actPrevSession = function () {
        this.session--;
        this.loadData();
    };
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblResult", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalRefundTai", void 0);
    __decorate([
        property(cc.Label)
    ], PopupDetailHistory.prototype, "lblTotalRefundXiu", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupDetailHistory.prototype, "sfDices", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupDetailHistory.prototype, "sfTai", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupDetailHistory.prototype, "sfXiu", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprDice1", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprDice2", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprDice3", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupDetailHistory.prototype, "sprResult", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDetailHistory.prototype, "sprResult_Tai", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDetailHistory.prototype, "sprResult_Xiu", void 0);
    __decorate([
        property(cc.Node)
    ], PopupDetailHistory.prototype, "itemTemplate", void 0);
    PopupDetailHistory = __decorate([
        ccclass
    ], PopupDetailHistory);
    return PopupDetailHistory;
}(Dialog_1.default));
exports.default = PopupDetailHistory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuUG9wdXBEZXRhaWxIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUE2QztBQUM3Qyx3REFBbUQ7QUFDbkQscUZBQXFFO0FBQ3JFLDBFQUFxRTtBQUNyRSx3RUFBbUU7QUFDbkUsb0VBQStEO0FBRXpELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdELHNDQUFNO0lBQXREO1FBQUEscUVBc1BDO1FBcFBHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUd6QixvQkFBYyxHQUFhLElBQUksQ0FBQztRQUVoQyxvQkFBYyxHQUFhLElBQUksQ0FBQztRQUdoQyx1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFFbkMsdUJBQWlCLEdBQWEsSUFBSSxDQUFDO1FBR25DLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRTdCLFdBQUssR0FBbUIsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFckIsV0FBSyxHQUFjLEVBQUUsQ0FBQztRQUN0QixZQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixVQUFJLEdBQVcsQ0FBQyxD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QUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt1REFDSTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNJO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7cURBQ0k7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7d0RBQ087SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDVztJQXZDWixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQXNQdEM7SUFBRCx5QkFBQztDQXRQRCxBQXNQQyxDQXRQK0MsZ0JBQU0sR0FzUHJEO2tCQXRQb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSHR0cCBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvSHR0cFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBUYWlYaXVNaW5pQ29udHJvbGxlciBmcm9tIFwiLi9UYWlYaXVNaW5pLlRhaVhpdU1pbmlDb250cm9sbGVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBEZXRhaWxIaXN0b3J5IGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsU2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxSZXN1bHQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUGFnZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0VGFpOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0WGl1OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxSZWZ1bmRUYWk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxSZWZ1bmRYaXU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNmRGljZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZUYWk6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZYaXU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByRGljZTE6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJEaWNlMjogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckRpY2UzOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByUmVzdWx0OiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNwclJlc3VsdF9UYWk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNwclJlc3VsdF9YaXU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXRlbXM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzZXNzaW9uOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgcGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHRvdGFsUGFnZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGhpc3Rvcmllc1RhaSA9IFtdO1xuICAgIHByaXZhdGUgaGlzdG9yaWVzWGl1ID0gW107XG4gICAgcHJpdmF0ZSB0b3RhbEJldFRhaSA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbFJlZnVuZFRhaSA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbEJldFhpdSA9IDA7XG4gICAgcHJpdmF0ZSB0b3RhbFJlZnVuZFhpdSA9IDA7XG5cbiAgICBzaG93RGV0YWlsKHNlc3Npb246IG51bWJlcikge1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwckRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyB0aGlzLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJsUmVzdWx0LnN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWREYXRhKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwckRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyB0aGlzLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJsUmVzdWx0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMudG90YWxCZXRUYWkgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsQmV0WGl1ID0gMDtcbiAgICAgICAgdGhpcy50b3RhbFJlZnVuZFRhaSA9IDA7XG4gICAgICAgIHRoaXMudG90YWxSZWZ1bmRYaXUgPSAwO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIEh0dHAuZ2V0KENvbmZpZ3MuQXBwLkFQSSwgeyBcImNcIjogMTAyLCBcInJpZFwiOiB0aGlzLnNlc3Npb24sIFwibXRcIjogQ29uZmlncy5BcHAuTU9ORVlfVFlQRSB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXNUYWkgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzWGl1ID0gW107XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlcy5zdWNjZXNzICYmIHJlc1tcInJlc3VsdFRYXCJdICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcIkhJU1RPUlkgU0VTU0lPTjpcIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXNbXCJ0cmFuc2FjdGlvbnNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1EYXRhID0gcmVzW1widHJhbnNhY3Rpb25zXCJdW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbURhdGFbXCJiZXRTaWRlXCJdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcmllc1RhaS5wdXNoKGl0ZW1EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXRUYWkgKz0gaXRlbURhdGFbXCJiZXRWYWx1ZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSZWZ1bmRUYWkgKz0gaXRlbURhdGFbXCJyZWZ1bmRcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzWGl1LnB1c2goaXRlbURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEJldFhpdSArPSBpdGVtRGF0YVtcImJldFZhbHVlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFJlZnVuZFhpdSArPSBpdGVtRGF0YVtcInJlZnVuZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSB0aGlzLmhpc3Rvcmllc1hpdS5sZW5ndGggPiB0aGlzLmhpc3Rvcmllc1RhaS5sZW5ndGggPyB0aGlzLmhpc3Rvcmllc1hpdS5sZW5ndGggOiB0aGlzLmhpc3Rvcmllc1RhaS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFBhZ2UgPSBNYXRoLmNlaWwodGhpcy50b3RhbFBhZ2UgLyB0aGlzLml0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy50b3RhbFBhZ2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCJQaGnDqm46ICNcIiArIHJlc1tcInJlc3VsdFRYXCJdW1wicmVmZXJlbmNlSWRcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxSZXN1bHQuc3RyaW5nID0gcmVzW1wicmVzdWx0VFhcIl1bXCJyZXN1bHRcIl0gPT0gMVxuICAgICAgICAgICAgICAgICAgICA/IFwiIC0gVMOgaSBcIiArIChyZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UxXCJdICsgcmVzW1wicmVzdWx0VFhcIl1bXCJkaWNlMlwiXSArIHJlc1tcInJlc3VsdFRYXCJdW1wiZGljZTNcIl0pICsgXCIoXCIgKyByZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UxXCJdICsgXCItXCIgKyByZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UyXCJdICsgXCItXCIgKyByZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UzXCJdICsgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIiAtIFjhu4l1IFwiICsgKHJlc1tcInJlc3VsdFRYXCJdW1wiZGljZTFcIl0gKyByZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UyXCJdICsgcmVzW1wicmVzdWx0VFhcIl1bXCJkaWNlM1wiXSkgKyBcIihcIiArIHJlc1tcInJlc3VsdFRYXCJdW1wiZGljZTFcIl0gKyBcIi1cIiArIHJlc1tcInJlc3VsdFRYXCJdW1wiZGljZTJcIl0gKyBcIi1cIiArIHJlc1tcInJlc3VsdFRYXCJdW1wiZGljZTNcIl0gKyBcIilcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0VGFpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLnRvdGFsQmV0VGFpKSArIFwiIC8gXCIgKyBVdGlscy5mb3JtYXROdW1iZXIodGhpcy50b3RhbFJlZnVuZFRhaSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIodGhpcy50b3RhbEJldFhpdSkgKyBcIiAvIFwiICsgVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMudG90YWxSZWZ1bmRYaXUpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJEaWNlMS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZEaWNlc1tyZXNbXCJyZXN1bHRUWFwiXVtcImRpY2UxXCJdXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckRpY2UxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckRpY2UyLnNwcml0ZUZyYW1lID0gdGhpcy5zZkRpY2VzW3Jlc1tcInJlc3VsdFRYXCJdW1wiZGljZTJcIl1dO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByRGljZTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByRGljZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmRGljZXNbcmVzW1wicmVzdWx0VFhcIl1bXCJkaWNlM1wiXV07XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJEaWNlMy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNwclJlc3VsdC5zcHJpdGVGcmFtZSA9IHJlc1tcInJlc3VsdFRYXCJdW1wicmVzdWx0XCJdID09IDEgPyB0aGlzLnNmVGFpIDogdGhpcy5zZlhpdTtcbiAgICAgICAgICAgICAgICBpZiAocmVzW1wicmVzdWx0VFhcIl1bXCJyZXN1bHRcIl0gPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcHJSZXN1bHRfVGFpKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByUmVzdWx0X1hpdSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUmVzdWx0X1RhaS5zY2FsZSA9IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHRfWGl1LnNjYWxlID0gMC42O1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwclJlc3VsdF9UYWkpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKGNjLnR3ZWVuKCkudG8oMC4zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGU6IDAuNyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMC42IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHNjYWxlOiAwLjUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgc2NhbGU6IDAuNiB9KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcHJSZXN1bHRfVGFpKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByUmVzdWx0X1hpdSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUmVzdWx0X1RhaS5zY2FsZSA9IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHRfWGl1LnNjYWxlID0gMC42O1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwclJlc3VsdF9YaXUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHNjYWxlOiAwLjcgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgc2NhbGU6IDAuNiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMC41IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHNjYWxlOiAwLjYgfSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFQYWdlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YVBhZ2UoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMuaXRlbXMubGVuZ3RoICsgaTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuaGlzdG9yaWVzVGFpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtRGF0YSA9IHRoaXMuaGlzdG9yaWVzVGFpW2lkeF07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAoaXRlbURhdGFbXCJpbnB1dFRpbWVcIl0gPCAxMCA/IFwiMDA6MFwiIDogXCIwMDpcIikgKyBpdGVtRGF0YVtcImlucHV0VGltZVwiXTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQWNjb3VudFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJlZnVuZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcInJlZnVuZFwiXSk7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkJldFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImJldFZhbHVlXCJdKTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiSmFja3BvdFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImpwQW1vdW50XCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJBY2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVmdW5kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiSmFja3BvdFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpZHggPCB0aGlzLmhpc3Rvcmllc1hpdS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbURhdGEgPSB0aGlzLmhpc3Rvcmllc1hpdVtpZHhdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJUaW1lMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IChpdGVtRGF0YVtcImlucHV0VGltZVwiXSA8IDEwID8gXCIwMDowXCIgOiBcIjAwOlwiKSArIGl0ZW1EYXRhW1wiaW5wdXRUaW1lXCJdO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJBY2NvdW50MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGl0ZW1EYXRhW1widXNlcm5hbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJlZnVuZDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJyZWZ1bmRcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wiYmV0VmFsdWVcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJKYWNrcG90MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihpdGVtRGF0YVtcImpwQW1vdW50XCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWUyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQWNjb3VudDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZWZ1bmQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkphY2twb3QyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxibFBhZ2Uuc3RyaW5nID0gdGhpcy5wYWdlICsgXCIvXCIgKyB0aGlzLnRvdGFsUGFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0TmV4dFBhZ2UoKSB7XG4gICAgICAgIHRoaXMucGFnZSsrO1xuICAgICAgICBpZiAodGhpcy5wYWdlID4gdGhpcy50b3RhbFBhZ2UpIHRoaXMucGFnZSA9IHRoaXMudG90YWxQYWdlO1xuICAgICAgICB0aGlzLmxvYWREYXRhUGFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RQcmV2UGFnZSgpIHtcbiAgICAgICAgdGhpcy5wYWdlLS07XG4gICAgICAgIGlmICh0aGlzLnBhZ2UgPCAxKSB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxvYWREYXRhUGFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3ROZXh0U2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uKys7XG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24gPiBUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXNbVGFpWGl1TWluaUNvbnRyb2xsZXIuaW5zdGFuY2UuaGlzdG9yaWVzLmxlbmd0aCAtIDFdLnNlc3Npb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2Vzc2lvbiA9IFRhaVhpdU1pbmlDb250cm9sbGVyLmluc3RhbmNlLmhpc3Rvcmllc1tUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZS5oaXN0b3JpZXMubGVuZ3RoIC0gMV0uc2Vzc2lvbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdFByZXZTZXNzaW9uKCkge1xuICAgICAgICB0aGlzLnNlc3Npb24tLTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cbn1cbiJdfQ==