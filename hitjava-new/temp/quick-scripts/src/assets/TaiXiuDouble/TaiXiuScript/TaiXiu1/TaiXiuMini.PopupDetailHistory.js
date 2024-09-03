"use strict";
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