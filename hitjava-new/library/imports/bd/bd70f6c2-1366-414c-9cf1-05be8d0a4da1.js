"use strict";
cc._RF.push(module, 'bd70fbCE2ZBTJzxBb6NCk2h', 'UIPopupMail');
// Lobby/LobbyScript/UIPopupMail.ts

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
var Http_1 = require("../../Loading/src/Http");
var App_1 = require("./Script/common/App");
var BroadcastReceiver_1 = require("./Script/common/BroadcastReceiver");
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPopupMail = /** @class */ (function (_super) {
    __extends(UIPopupMail, _super);
    function UIPopupMail() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblPage = null;
        _this.content = null;
        _this.prefab = null;
        _this.txtTitle = null;
        _this.txtContent = null;
        _this.txtTime = null;
        _this.txtSender = null;
        _this.boxInfo = null;
        _this.boxEmpty = null;
        _this.boxHave = null;
        _this.page = 1;
        _this.maxPage = 1;
        _this.items = new Array();
        _this.listMail = [];
        _this.dataMailReading = null;
        return _this;
    }
    UIPopupMail.prototype.start = function () {
    };
    UIPopupMail.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
        this.page = 1;
        this.maxPage = 1;
        this.lblPage.string = this.page + "/" + this.maxPage;
        this.loadData();
    };
    UIPopupMail.prototype.actNextPage = function () {
        if (this.page < this.maxPage) {
            this.page++;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    UIPopupMail.prototype.actPrevPage = function () {
        if (this.page > 1) {
            this.page--;
            this.lblPage.string = this.page + "/" + this.maxPage;
            this.loadData();
        }
    };
    UIPopupMail.prototype.show = function () {
        _super.prototype.show.call(this);
        // this.loadData();
    };
    UIPopupMail.prototype.loadData = function () {
        var _this = this;
        App_1.default.instance.showLoading(true);
        Http_1.default.get(Configs_1.default.App.API, { c: "405", nn: Configs_1.default.Login.Nickname, p: this.page }, function (err, res) {
            App_1.default.instance.showLoading(false);
            if (err != null)
                return;
            //Utils.Log("UIPopupMail:" + JSON.stringify(res));
            if (res["success"]) {
                if (res["errorCode"] == "10001") {
                    _this.boxEmpty.active = true;
                    _this.boxHave.active = false;
                }
                else {
                    _this.boxEmpty.active = false;
                    _this.boxHave.active = true;
                    _this.boxInfo.active = false;
                    _this.content.removeAllChildren();
                    _this.maxPage = res["totalPages"];
                    _this.lblPage.string = _this.page + "/" + _this.maxPage;
                    Configs_1.default.Login.ListMail = res["transactions"];
                    res['transactions'].sort(function (x, y) {
                        return x['status'] - y['status'];
                    });
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_UPDATE_MAIL);
                    for (var i = 0; i < res["transactions"].length; i++) {
                        var dataItem = res["transactions"][i];
                        //Utils.Log("Status==" + dataItem['status']);
                        var item = cc.instantiate(_this.prefab);
                        item.parent = _this.content;
                        item.getComponent("UIItemMail").init(_this, dataItem);
                    }
                }
            }
        });
    };
    UIPopupMail.prototype.readMail = function (dataMail) {
        this.dataMailReading = dataMail;
        this.boxInfo.active = true;
        this.txtTitle.string = App_1.default.instance.getTextLang('txt_mail_title') + dataMail.title + " " + dataMail.title;
        this.txtContent.string = App_1.default.instance.getTextLang('txt_mail_content') + dataMail.content;
        this.txtTime.string = App_1.default.instance.getTextLang('txt_mail_time_send') + dataMail.createTime;
        this.txtSender.string = App_1.default.instance.getTextLang('txt_mail_from') + dataMail.author;
    };
    UIPopupMail.prototype.OpenURL = function () {
        cc.sys.openURL("https://google.com");
    };
    UIPopupMail.prototype.onBtnXoa = function () {
        var _this = this;
        if (this.dataMailReading != null) {
            App_1.default.instance.showLoading(true);
            Http_1.default.get(Configs_1.default.App.API, { c: "403", mid: this.dataMailReading.mail_id }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                if (res.success) {
                    _this.loadData();
                }
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "lblPage", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "prefab", void 0);
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "txtTitle", void 0);
    __decorate([
        property(cc.RichText)
    ], UIPopupMail.prototype, "txtContent", void 0);
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "txtTime", void 0);
    __decorate([
        property(cc.Label)
    ], UIPopupMail.prototype, "txtSender", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "boxInfo", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "boxEmpty", void 0);
    __decorate([
        property(cc.Node)
    ], UIPopupMail.prototype, "boxHave", void 0);
    UIPopupMail = __decorate([
        ccclass
    ], UIPopupMail);
    return UIPopupMail;
}(Dialog_1.default));
exports.default = UIPopupMail;

cc._RF.pop();