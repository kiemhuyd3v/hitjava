
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuSieuToc/Scripts/TaiXiuST.PopupDetailHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09c98kFr0VGvpZn6EHnMi9N', 'TaiXiuST.PopupDetailHistory');
// TaiXiuSieuToc/Scripts/TaiXiuST.PopupDetailHistory.ts

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
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var TaiXiuSieuToc_NetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/TaiXiuSieuToc.NetworkClient");
var TaiXiuSieuToc_Controller_1 = require("./TaiXiuSieuToc.Controller");
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
        App_1.default.instance.showBgMiniGame("TaiXiuSieuToc");
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
        TaiXiuSieuToc_NetworkClient_1.default.getInstance().getHistorySessionId(this.session, function (err, res) {
            if (err != null)
                return;
            _this.historiesTai = [];
            _this.historiesXiu = [];
            App_1.default.instance.showLoading(false);
            if (res["result"] !== null) {
                if (res['lstData'] != null && res['lstData'].length > 0) {
                    res['lstData'].forEach(function (element) {
                        element['result'] = JSON.parse(element['result']);
                        element;
                    });
                }
                res['result'] = JSON.parse(res['result']);
                for (var i = 0; i < res["lstData"].length; i++) {
                    var itemData = res["lstData"][i];
                    if (itemData["typed"] === 1) {
                        _this.historiesTai.push(itemData);
                        _this.totalBetTai += itemData["betamount"];
                        _this.totalRefundTai += itemData["refundamount"];
                    }
                    else {
                        _this.historiesXiu.push(itemData);
                        _this.totalBetXiu += itemData["betamount"];
                        _this.totalRefundXiu += itemData["refundamount"];
                    }
                }
                for (var i = 0; i < _this.items.length; i++) {
                    _this.items[i].active = false;
                }
                _this.page = 1;
                _this.totalPage = _this.historiesXiu.length > _this.historiesTai.length ? _this.historiesXiu.length : _this.historiesTai.length;
                _this.totalPage = Math.ceil(_this.totalPage / _this.items.length);
                _this.lblPage.string = _this.page + "/" + _this.totalPage;
                _this.lblSession.string = "Phiên: #" + res["id"];
                var totalPoint = res["result"][0] + res["result"][1] + res["result"][2];
                _this.lblResult.string = totalPoint > 10
                    ? " - Tài " + totalPoint + "(" + res["result"][0] + "-" + res["result"][1] + "-" + res["result"][2] + ")"
                    : " - Xỉu " + totalPoint + "(" + res["result"][0] + "-" + res["result"][1] + "-" + res["result"][2] + ")";
                _this.lblTotalBetTai.string = Utils_1.default.formatNumber(_this.totalBetTai) + " / " + Utils_1.default.formatNumber(_this.totalRefundTai);
                _this.lblTotalBetXiu.string = Utils_1.default.formatNumber(_this.totalBetXiu) + " / " + Utils_1.default.formatNumber(_this.totalRefundXiu);
                _this.sprDice1.spriteFrame = _this.sfDices[res["result"][0]];
                _this.sprDice1.node.active = true;
                _this.sprDice2.spriteFrame = _this.sfDices[res["result"][1]];
                _this.sprDice2.node.active = true;
                _this.sprDice3.spriteFrame = _this.sfDices[res["result"][2]];
                _this.sprDice3.node.active = true;
                // this.sprResult.spriteFrame = res["lstData"]["result"] == 1 ? this.sfTai : this.sfXiu;
                if (totalPoint > 10) {
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
                var time = itemData['bettime'];
                time = time.substring(0, time.indexOf("."));
                time = time.replace("T", "\n");
                item.getChildByName("Time").getComponent(cc.Label).string = time;
                item.getChildByName("Account").getComponent(cc.Label).string = itemData["loginname"];
                item.getChildByName("Refund").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refundamount"]);
                item.getChildByName("Bet").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betamount"]);
            }
            else {
                item.getChildByName("Time").getComponent(cc.Label).string = "";
                item.getChildByName("Account").getComponent(cc.Label).string = "";
                item.getChildByName("Refund").getComponent(cc.Label).string = "";
                item.getChildByName("Bet").getComponent(cc.Label).string = "";
            }
            if (idx < this.historiesXiu.length) {
                var itemData = this.historiesXiu[idx];
                var time = itemData['bettime'];
                time = time.substring(0, time.indexOf("."));
                time = time.replace("T", "\n");
                item.getChildByName("Time2").getComponent(cc.Label).string = time;
                item.getChildByName("Account2").getComponent(cc.Label).string = itemData["loginname"];
                item.getChildByName("Refund2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["refundamount"]);
                item.getChildByName("Bet2").getComponent(cc.Label).string = Utils_1.default.formatNumber(itemData["betamount"]);
            }
            else {
                item.getChildByName("Time2").getComponent(cc.Label).string = "";
                item.getChildByName("Account2").getComponent(cc.Label).string = "";
                item.getChildByName("Refund2").getComponent(cc.Label).string = "";
                item.getChildByName("Bet2").getComponent(cc.Label).string = "";
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
        var dataHis = TaiXiuSieuToc_Controller_1.default.instance.historySoiCau;
        if (this.session > dataHis[dataHis.length - 1].session) {
            this.session = dataHis[dataHis.length - 1].session;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1U2lldVRvY1xcU2NyaXB0c1xcVGFpWGl1U1QuUG9wdXBEZXRhaWxIaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGlFQUE0RDtBQUM1RCx1RUFBa0U7QUFDbEUscUVBQWdFO0FBQ2hFLG1IQUF3RztBQUN4Ryx1RUFBaUU7QUFHM0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBZ0Qsc0NBQU07SUFBdEQ7UUFBQSxxRUFnUUM7UUE5UEcsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBR3pCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBR2hDLHVCQUFpQixHQUFhLElBQUksQ0FBQztRQUVuQyx1QkFBaUIsR0FBYSxJQUFJLENBQUM7UUFHbkMsYUFBTyxHQUFxQixFQUFFLENBQUM7UUFFL0IsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFFN0IsV0FBSyxHQUFtQixJQUFJLENBQUM7UUFHN0IsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFjLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLFlBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsZUFBUyxHQUFXLENBQUMsQ0FB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QUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt5REFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZEQUNZO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ1k7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDVztJQXZDWixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQWdRdEM7SUFBRCx5QkFBQztDQWhRRCxBQWdRQyxDQWhRK0MsZ0JBQU0sR0FnUXJEO2tCQWhRb0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9IdHRwXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFRhaVhpdVNUTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1RhaVhpdVNpZXVUb2MuTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IFRhaVhpdVNpZXVUb2NDb250cm9sbGVyIGZyb20gXCIuL1RhaVhpdVNpZXVUb2MuQ29udHJvbGxlclwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cERldGFpbEhpc3RvcnkgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxTZXNzaW9uOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFJlc3VsdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQYWdlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxCZXRUYWk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG90YWxCZXRYaXU6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbFJlZnVuZFRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbFJlZnVuZFhpdTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc2ZEaWNlczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZlRhaTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZlhpdTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJEaWNlMTogY2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwckRpY2UyOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByRGljZTM6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJSZXN1bHQ6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3ByUmVzdWx0X1RhaTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgc3ByUmVzdWx0X1hpdTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtVGVtcGxhdGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpdGVtczogY2MuTm9kZVtdID0gW107XG4gICAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHNlc3Npb246IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBwYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgdG90YWxQYWdlOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgaGlzdG9yaWVzVGFpID0gW107XG4gICAgcHJpdmF0ZSBoaXN0b3JpZXNYaXUgPSBbXTtcbiAgICBwcml2YXRlIHRvdGFsQmV0VGFpID0gMDtcbiAgICBwcml2YXRlIHRvdGFsUmVmdW5kVGFpID0gMDtcbiAgICBwcml2YXRlIHRvdGFsQmV0WGl1ID0gMDtcbiAgICBwcml2YXRlIHRvdGFsUmVmdW5kWGl1ID0gMDtcblxuICAgIHNob3dEZXRhaWwoc2Vzc2lvbjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1U2lldVRvY1wiKTtcbiAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwckRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyB0aGlzLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJsUmVzdWx0LnN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbVRlbXBsYXRlLnBhcmVudDtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgc3VwZXIuX29uU2hvd2VkKCk7XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWREYXRhKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwckRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3ByRGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5zcHJSZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyB0aGlzLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJsUmVzdWx0LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMudG90YWxCZXRUYWkgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsQmV0WGl1ID0gMDtcbiAgICAgICAgdGhpcy50b3RhbFJlZnVuZFRhaSA9IDA7XG4gICAgICAgIHRoaXMudG90YWxSZWZ1bmRYaXUgPSAwO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIFRhaVhpdVNUTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmdldEhpc3RvcnlTZXNzaW9uSWQodGhpcy5zZXNzaW9uLCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXNUYWkgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzWGl1ID0gW107XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHJlc1tcInJlc3VsdFwiXSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNbJ2xzdERhdGEnXSAhPSBudWxsICYmIHJlc1snbHN0RGF0YSddLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzWydsc3REYXRhJ10uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ3Jlc3VsdCddID0gSlNPTi5wYXJzZShlbGVtZW50WydyZXN1bHQnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNbJ3Jlc3VsdCddID0gSlNPTi5wYXJzZShyZXNbJ3Jlc3VsdCddKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc1tcImxzdERhdGFcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1EYXRhID0gcmVzW1wibHN0RGF0YVwiXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1EYXRhW1widHlwZWRcIl0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzVGFpLnB1c2goaXRlbURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEJldFRhaSArPSBpdGVtRGF0YVtcImJldGFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSZWZ1bmRUYWkgKz0gaXRlbURhdGFbXCJyZWZ1bmRhbW91bnRcIl07XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzWGl1LnB1c2goaXRlbURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbEJldFhpdSArPSBpdGVtRGF0YVtcImJldGFtb3VudFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxSZWZ1bmRYaXUgKz0gaXRlbURhdGFbXCJyZWZ1bmRhbW91bnRcIl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlID0gdGhpcy5oaXN0b3JpZXNYaXUubGVuZ3RoID4gdGhpcy5oaXN0b3JpZXNUYWkubGVuZ3RoID8gdGhpcy5oaXN0b3JpZXNYaXUubGVuZ3RoIDogdGhpcy5oaXN0b3JpZXNUYWkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxQYWdlID0gTWF0aC5jZWlsKHRoaXMudG90YWxQYWdlIC8gdGhpcy5pdGVtcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsUGFnZS5zdHJpbmcgPSB0aGlzLnBhZ2UgKyBcIi9cIiArIHRoaXMudG90YWxQYWdlO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiUGhpw6puOiAjXCIgKyByZXNbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICBsZXQgdG90YWxQb2ludCA9IHJlc1tcInJlc3VsdFwiXVswXSArIHJlc1tcInJlc3VsdFwiXVsxXSArIHJlc1tcInJlc3VsdFwiXVsyXTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFJlc3VsdC5zdHJpbmcgPSB0b3RhbFBvaW50ID4gMTBcbiAgICAgICAgICAgICAgICAgICAgPyBcIiAtIFTDoGkgXCIgKyB0b3RhbFBvaW50ICsgXCIoXCIgKyByZXNbXCJyZXN1bHRcIl1bMF0gKyBcIi1cIiArIHJlc1tcInJlc3VsdFwiXVsxXSArIFwiLVwiICsgcmVzW1wicmVzdWx0XCJdWzJdICsgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcIiAtIFjhu4l1IFwiICsgdG90YWxQb2ludCArIFwiKFwiICsgcmVzW1wicmVzdWx0XCJdWzBdICsgXCItXCIgKyByZXNbXCJyZXN1bHRcIl1bMV0gKyBcIi1cIiArIHJlc1tcInJlc3VsdFwiXVsyXSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMudG90YWxCZXRUYWkpICsgXCIgLyBcIiArIFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLnRvdGFsUmVmdW5kVGFpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0WGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLnRvdGFsQmV0WGl1KSArIFwiIC8gXCIgKyBVdGlscy5mb3JtYXROdW1iZXIodGhpcy50b3RhbFJlZnVuZFhpdSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNwckRpY2UxLnNwcml0ZUZyYW1lID0gdGhpcy5zZkRpY2VzW3Jlc1tcInJlc3VsdFwiXVswXV07XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJEaWNlMS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJEaWNlMi5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZEaWNlc1tyZXNbXCJyZXN1bHRcIl1bMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByRGljZTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByRGljZTMuc3ByaXRlRnJhbWUgPSB0aGlzLnNmRGljZXNbcmVzW1wicmVzdWx0XCJdWzJdXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckRpY2UzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0LnNwcml0ZUZyYW1lID0gcmVzW1wibHN0RGF0YVwiXVtcInJlc3VsdFwiXSA9PSAxID8gdGhpcy5zZlRhaSA6IHRoaXMuc2ZYaXU7XG4gICAgICAgICAgICAgICAgaWYgKHRvdGFsUG9pbnQgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcHJSZXN1bHRfVGFpKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByUmVzdWx0X1hpdSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUmVzdWx0X1RhaS5zY2FsZSA9IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHRfWGl1LnNjYWxlID0gMC42O1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwclJlc3VsdF9UYWkpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKGNjLnR3ZWVuKCkudG8oMC4zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2NhbGU6IDAuNyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMC42IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHNjYWxlOiAwLjUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgc2NhbGU6IDAuNiB9KSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQodGhpcy5zcHJSZXN1bHRfVGFpKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMuc3ByUmVzdWx0X1hpdSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByUmVzdWx0X1RhaS5zY2FsZSA9IDAuNjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJSZXN1bHRfWGl1LnNjYWxlID0gMC42O1xuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLnNwclJlc3VsdF9YaXUpLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHNjYWxlOiAwLjcgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgc2NhbGU6IDAuNiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMC41IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMC4zLCB7IHNjYWxlOiAwLjYgfSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3ByUmVzdWx0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9hZERhdGFQYWdlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkRGF0YVBhZ2UoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkeCA9ICh0aGlzLnBhZ2UgLSAxKSAqIHRoaXMuaXRlbXMubGVuZ3RoICsgaTtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuaGlzdG9yaWVzVGFpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtRGF0YSA9IHRoaXMuaGlzdG9yaWVzVGFpW2lkeF07XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBpdGVtRGF0YVsnYmV0dGltZSddO1xuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lLnN1YnN0cmluZygwLCB0aW1lLmluZGV4T2YoXCIuXCIpKTtcbiAgICAgICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKFwiVFwiLCBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiVGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRpbWU7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkFjY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBpdGVtRGF0YVtcImxvZ2lubmFtZVwiXTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVmdW5kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wicmVmdW5kYW1vdW50XCJdKTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wiYmV0YW1vdW50XCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJBY2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiUmVmdW5kXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlkeCA8IHRoaXMuaGlzdG9yaWVzWGl1Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtRGF0YSA9IHRoaXMuaGlzdG9yaWVzWGl1W2lkeF07XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBpdGVtRGF0YVsnYmV0dGltZSddO1xuICAgICAgICAgICAgICAgIHRpbWUgPSB0aW1lLnN1YnN0cmluZygwLCB0aW1lLmluZGV4T2YoXCIuXCIpKTtcbiAgICAgICAgICAgICAgICB0aW1lID0gdGltZS5yZXBsYWNlKFwiVFwiLCBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiVGltZTJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPXRpbWU7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIkFjY291bnQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaXRlbURhdGFbXCJsb2dpbm5hbWVcIl07XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlJlZnVuZDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoaXRlbURhdGFbXCJyZWZ1bmRhbW91bnRcIl0pO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGl0ZW1EYXRhW1wiYmV0YW1vdW50XCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcIlRpbWUyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQWNjb3VudDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJSZWZ1bmQyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiQmV0MlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYmxQYWdlLnN0cmluZyA9IHRoaXMucGFnZSArIFwiL1wiICsgdGhpcy50b3RhbFBhZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFjdE5leHRQYWdlKCkge1xuICAgICAgICB0aGlzLnBhZ2UrKztcbiAgICAgICAgaWYgKHRoaXMucGFnZSA+IHRoaXMudG90YWxQYWdlKSB0aGlzLnBhZ2UgPSB0aGlzLnRvdGFsUGFnZTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YVBhZ2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0UHJldlBhZ2UoKSB7XG4gICAgICAgIHRoaXMucGFnZS0tO1xuICAgICAgICBpZiAodGhpcy5wYWdlIDwgMSkgdGhpcy5wYWdlID0gMTtcbiAgICAgICAgdGhpcy5sb2FkRGF0YVBhZ2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0TmV4dFNlc3Npb24oKSB7XG4gICAgICAgIHRoaXMuc2Vzc2lvbisrO1xuICAgICAgICBsZXQgZGF0YUhpcyA9IFRhaVhpdVNpZXVUb2NDb250cm9sbGVyLmluc3RhbmNlLmhpc3RvcnlTb2lDYXU7XG4gICAgICAgIGlmICh0aGlzLnNlc3Npb24gPiBkYXRhSGlzW2RhdGFIaXMubGVuZ3RoIC0gMV0uc2Vzc2lvbikge1xuICAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gZGF0YUhpc1tkYXRhSGlzLmxlbmd0aCAtIDFdLnNlc3Npb247XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RQcmV2U2Vzc2lvbigpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uLS07XG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICB9XG59XG4iXX0=