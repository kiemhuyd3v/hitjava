"use strict";
cc._RF.push(module, 'cac588iP6JJbIwXby57HXWV', 'UIItemMail');
// Lobby/LobbyScript/UIItemMail.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIItemDiemDanh = /** @class */ (function (_super) {
    __extends(UIItemDiemDanh, _super);
    function UIItemDiemDanh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.txtContent = null;
        _this.nodeNew = null;
        _this.data = null;
        _this.uiPopupMail = null;
        return _this;
    }
    UIItemDiemDanh.prototype.init = function (uiPopupMail, data) {
        this.uiPopupMail = uiPopupMail;
        this.data = data;
        this.txtContent.string = data.title;
        this.nodeNew.active = data.status == 0 ? true : false;
    };
    UIItemDiemDanh.prototype.onBtnRead = function () {
        this.uiPopupMail.readMail(this.data);
        if (this.data.status == 0) {
            //new
            this.data.status = 1;
            this.nodeNew.active = this.data.status == 0 ? true : false;
            Http_1.default.get(Configs_1.default.App.API, { c: "404", mid: this.data.mail_id }, function (err, res) {
                App_1.default.instance.showLoading(false);
                if (err != null)
                    return;
                BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.ON_UPDATE_MAIL);
            });
        }
    };
    __decorate([
        property(cc.Label)
    ], UIItemDiemDanh.prototype, "txtContent", void 0);
    __decorate([
        property(cc.Node)
    ], UIItemDiemDanh.prototype, "nodeNew", void 0);
    UIItemDiemDanh = __decorate([
        ccclass
    ], UIItemDiemDanh);
    return UIItemDiemDanh;
}(cc.Component));
exports.default = UIItemDiemDanh;

cc._RF.pop();