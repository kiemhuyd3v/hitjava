
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/AlertDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQWxlcnREaWFsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQ3hCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBS0ksOEJBQVksR0FBVyxFQUFFLFNBQWlCLEVBQUUsV0FBdUI7UUFDL0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQUdEO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBa0VDO1FBL0RHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixpQkFBVyxHQUFRLElBQUksQ0FBQztRQUV4QixXQUFLLEdBQWdDLElBQUksS0FBSyxFQUF3QixDQUFDOztJQXVEM0UsQ0FBQztJQXJERyw2QkFBTyxHQUFQLFVBQVEsR0FBVztRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDRDQUFzQixHQUF0QixVQUF1QixHQUFXLEVBQUUsV0FBdUIsRUFBRSxRQUFlO1FBQWYseUJBQUEsRUFBQSxlQUFlO1FBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFB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QVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNNO0lBUFIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQWtFL0I7SUFBRCxrQkFBQztDQWxFRCxBQWtFQyxDQWxFd0MsZ0JBQU0sR0FrRTlDO2tCQWxFb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5jbGFzcyBBbGVydERpYWxvZ1F1ZXVlSXRlbSB7XG4gICAgbXNnOiBzdHJpbmc7XG4gICAgZG9uZVRpdGxlOiBzdHJpbmc7XG4gICAgb25EaXNtaXNzZWQ6ICgpID0+IHZvaWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihtc2c6IHN0cmluZywgZG9uZVRpdGxlOiBzdHJpbmcsIG9uRGlzbWlzc2VkOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMubXNnID0gbXNnO1xuICAgICAgICB0aGlzLmRvbmVUaXRsZSA9IGRvbmVUaXRsZTtcbiAgICAgICAgdGhpcy5vbkRpc21pc3NlZCA9IG9uRGlzbWlzc2VkO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsZXJ0RGlhbG9nIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxNZXNzYWdlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRG9uZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgb25EaXNtaXNzZWQ6IGFueSA9IG51bGw7XG5cbiAgICBxdWV1ZTogQXJyYXk8QWxlcnREaWFsb2dRdWV1ZUl0ZW0+ID0gbmV3IEFycmF5PEFsZXJ0RGlhbG9nUXVldWVJdGVtPigpO1xuXG4gICAgc2hvd01zZyhtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNob3c0KG1zZywgbnVsbCwgbnVsbCwgZmFsc2UpO1xuICAgIH1cblxuICAgIHNob3dNc2dXaXRoT25EaXNtaXNzZWQobXNnOiBzdHJpbmcsIG9uRGlzbWlzc2VkOiAoKSA9PiB2b2lkLCBjYW5DbG9zZSA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5zaG93NChtc2csIG51bGwsIG9uRGlzbWlzc2VkKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5ub2RlLmFjdGl2ZSA9IGNhbkNsb3NlO1xuICAgIH1cblxuICAgIHNob3czKG1zZzogc3RyaW5nLCBvbkRpc21pc3NlZDogKCkgPT4gdm9pZCwgYWRkUXVldWU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnNob3c0KG1zZywgbnVsbCwgb25EaXNtaXNzZWQsIGFkZFF1ZXVlKTtcbiAgICB9XG5cbiAgICBzaG93NChtc2c6IHN0cmluZywgZG9uZVRpdGxlOiBzdHJpbmcsIG9uRGlzbWlzc2VkOiAoKSA9PiB2b2lkLCBhZGRRdWV1ZTogYm9vbGVhbiA9IGZhbHNlLCBmb3JjZUFkZFF1ZXVlOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgICAgICBpZiAoYWRkUXVldWUpIHtcbiAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChuZXcgQWxlcnREaWFsb2dRdWV1ZUl0ZW0obXNnLCBkb25lVGl0bGUsIG9uRGlzbWlzc2VkKSk7XG4gICAgICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGJsRG9uZS5zdHJpbmcgPSAhZG9uZVRpdGxlID8gXCJYw4FDIE5I4bqsTlwiIDogZG9uZVRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzZWQgPSBvbkRpc21pc3NlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxibE1lc3NhZ2Uuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCA+IDAgJiYgZm9yY2VBZGRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWUucHVzaChuZXcgQWxlcnREaWFsb2dRdWV1ZUl0ZW0obXNnLCBkb25lVGl0bGUsIG9uRGlzbWlzc2VkKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubGJsRG9uZS5zdHJpbmcgPSAhZG9uZVRpdGxlID8gXCJYw4FDIE5I4bqsTlwiIDogZG9uZVRpdGxlO1xuICAgICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzZWQgPSBvbkRpc21pc3NlZDtcbiAgICAgICAgICAgICAgICB0aGlzLmxibE1lc3NhZ2Uuc3RyaW5nID0gbXNnO1xuICAgICAgICAgICAgICAgIHN1cGVyLnNob3coKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQoKTtcbiAgICB9XG5cbiAgICBfb25EaXNtaXNzZWQoKSB7XG4gICAgICAgIHN1cGVyLl9vbkRpc21pc3NlZCgpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25EaXNtaXNzZWQgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5vbkRpc21pc3NlZCgpO1xuICAgICAgICBpZiAodGhpcy5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXVlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3c0KHRoaXMucXVldWVbMF0ubXNnLCB0aGlzLnF1ZXVlWzBdLmRvbmVUaXRsZSwgdGhpcy5xdWV1ZVswXS5vbkRpc21pc3NlZCwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0FuaW1hdGVkKSByZXR1cm47XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICB9XG59XG4iXX0=