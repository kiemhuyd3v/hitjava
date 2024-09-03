"use strict";
cc._RF.push(module, '1f198ZBwStLe5rFEKOd4Xci', 'AlertDialog');
// Lobby/LobbyScript/Script/common/AlertDialog.ts

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
var AlertDialogQueueItem = /** @class */ (function () {
    function AlertDialogQueueItem(msg, doneTitle, onDismissed) {
        this.msg = msg;
        this.doneTitle = doneTitle;
        this.onDismissed = onDismissed;
    }
    return AlertDialogQueueItem;
}());
var AlertDialog = /** @class */ (function (_super) {
    __extends(AlertDialog, _super);
    function AlertDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lblMessage = null;
        _this.btnClose = null;
        _this.lblDone = null;
        _this.onDismissed = null;
        _this.queue = new Array();
        return _this;
    }
    AlertDialog.prototype.showMsg = function (msg) {
        this.show4(msg, null, null, false);
    };
    AlertDialog.prototype.showMsgWithOnDismissed = function (msg, onDismissed, canClose) {
        if (canClose === void 0) { canClose = true; }
        this.show4(msg, null, onDismissed);
        this.btnClose.node.active = canClose;
    };
    AlertDialog.prototype.show3 = function (msg, onDismissed, addQueue) {
        if (addQueue === void 0) { addQueue = false; }
        this.show4(msg, null, onDismissed, addQueue);
    };
    AlertDialog.prototype.show4 = function (msg, doneTitle, onDismissed, addQueue, forceAddQueue) {
        if (addQueue === void 0) { addQueue = false; }
        if (forceAddQueue === void 0) { forceAddQueue = true; }
        if (addQueue) {
            this.queue.push(new AlertDialogQueueItem(msg, doneTitle, onDismissed));
            if (this.queue.length == 1) {
                this.lblDone.string = !doneTitle ? "XÁC NHẬN" : doneTitle;
                this.onDismissed = onDismissed;
                this.lblMessage.string = msg;
                _super.prototype.show.call(this);
            }
        }
        else {
            if (this.queue.length > 0 && forceAddQueue) {
                this.queue.push(new AlertDialogQueueItem(msg, doneTitle, onDismissed));
            }
            else {
                this.lblDone.string = !doneTitle ? "XÁC NHẬN" : doneTitle;
                this.onDismissed = onDismissed;
                this.lblMessage.string = msg;
                _super.prototype.show.call(this);
            }
        }
    };
    AlertDialog.prototype._onShowed = function () {
        _super.prototype._onShowed.call(this);
    };
    AlertDialog.prototype._onDismissed = function () {
        _super.prototype._onDismissed.call(this);
        if (typeof this.onDismissed === "function")
            this.onDismissed();
        if (this.queue.length > 0) {
            this.queue.splice(0, 1);
            if (this.queue.length > 0) {
                this.show4(this.queue[0].msg, this.queue[0].doneTitle, this.queue[0].onDismissed, false, false);
            }
        }
    };
    AlertDialog.prototype.dismiss = function () {
        if (!this.isAnimated)
            return;
        _super.prototype.dismiss.call(this);
    };
    __decorate([
        property(cc.Label)
    ], AlertDialog.prototype, "lblMessage", void 0);
    __decorate([
        property(cc.Button)
    ], AlertDialog.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Label)
    ], AlertDialog.prototype, "lblDone", void 0);
    AlertDialog = __decorate([
        ccclass
    ], AlertDialog);
    return AlertDialog;
}(Dialog_1.default));
exports.default = AlertDialog;

cc._RF.pop();