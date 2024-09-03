"use strict";
cc._RF.push(module, 'd2ba1FAR7NFVK4X4KMOiW6z', 'ConfirmDialog');
// Lobby/LobbyScript/Script/common/ConfirmDialog.ts

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
var Dialog_1 = require("./Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConfirmDialog = /** @class */ (function (_super) {
    __extends(ConfirmDialog, _super);
    function ConfirmDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblMessage = null;
        _this.lblDone = null;
        _this.lblConfirm = null;
        _this.onDismissed = null;
        _this.onConfirmClicked = null;
        _this.isClickdConfirm = false;
        return _this;
    }
    ConfirmDialog.prototype.show1 = function (msg) {
        this.show4(msg);
    };
    ConfirmDialog.prototype.show2 = function (msg, onDismissed) {
        //Utils.Log("Parent Confirm:"+this.node.parent.name);
        this.show4(msg, null, null, onDismissed);
    };
    ConfirmDialog.prototype.show3 = function (msg, confirmTitle, onDismissed) {
        this.show4(msg, null, confirmTitle, onDismissed);
    };
    ConfirmDialog.prototype.show4 = function (msg, doneTitle, confirmTitle, onDismissed) {
        this.isClickdConfirm = false;
        this.lblDone.string = !doneTitle ? "Hủy" : doneTitle;
        this.lblConfirm.string = !confirmTitle ? "Đồng ý" : confirmTitle;
        this.onDismissed = onDismissed;
        this.lblMessage.string = msg;
        _super.prototype.show.call(this);
    };
    ConfirmDialog.prototype.actConfirm = function () {
        this.isClickdConfirm = true;
        this.dismiss();
    };
    ConfirmDialog.prototype._onShowed = function () {
        Dialog_1.default.prototype._onShowed.call(this);
    };
    ConfirmDialog.prototype._onDismissed = function () {
        Dialog_1.default.prototype._onDismissed.call(this);
        if (typeof this.onDismissed === "function")
            this.onDismissed(this.isClickdConfirm);
    };
    __decorate([
        property(cc.Label)
    ], ConfirmDialog.prototype, "lblMessage", void 0);
    __decorate([
        property(cc.Label)
    ], ConfirmDialog.prototype, "lblDone", void 0);
    __decorate([
        property(cc.Label)
    ], ConfirmDialog.prototype, "lblConfirm", void 0);
    ConfirmDialog = __decorate([
        ccclass
    ], ConfirmDialog);
    return ConfirmDialog;
}(Dialog_1.default));
exports.default = ConfirmDialog;

cc._RF.pop();