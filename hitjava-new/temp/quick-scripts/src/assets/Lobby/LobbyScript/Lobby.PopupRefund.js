"use strict";
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