
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/ConfirmDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ29uZmlybURpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFHeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFnREM7UUE3Q0csZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixpQkFBVyxHQUErQixJQUFJLENBQUM7UUFDL0Msc0JBQWdCLEdBQWEsSUFBSSxDQUFDO1FBQ2xDLHFCQUFlLEdBQVksS0FBSyxDQUFDOztJQXFDckMsQ0FBQztJQW5DRyw2QkFBSyxHQUFMLFVBQU0sR0FBVztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxHQUFXLEVBQUUsV0FBdUM7UUFDckQscURBQXFEO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxHQUFXLEVBQUUsWUFBb0IsRUFBRSxXQUF1QztRQUM1RSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sR0FBVyxFQUFFLFNBQWtCLEVBQUUsWUFBcUIsRUFBRSxXQUF3QztRQUNsRyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUM3QixpQkFBTSxJQUFJLFdBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNJLGdCQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELG9DQUFZLEdBQVo7UUFDSSxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVU7WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNTO0lBUFgsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQWdEakM7SUFBRCxvQkFBQztDQWhERCxBQWdEQyxDQWhEMEMsZ0JBQU0sR0FnRGhEO2tCQWhEb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vVXRpbHNcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibE1lc3NhZ2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRG9uZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxDb25maXJtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBvbkRpc21pc3NlZDogKGlzQ29uZmlybTogYm9vbGVhbik9PnZvaWQgPSBudWxsO1xuICAgIG9uQ29uZmlybUNsaWNrZWQ6IEZ1bmN0aW9uID0gbnVsbDtcbiAgICBpc0NsaWNrZENvbmZpcm06IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHNob3cxKG1zZzogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5zaG93NChtc2cpO1xuICAgIH1cblxuICAgIHNob3cyKG1zZzogc3RyaW5nLCBvbkRpc21pc3NlZDogKGlzQ29uZmlybTogYm9vbGVhbik9PnZvaWQpe1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJQYXJlbnQgQ29uZmlybTpcIit0aGlzLm5vZGUucGFyZW50Lm5hbWUpO1xuICAgICAgICB0aGlzLnNob3c0KG1zZywgbnVsbCwgbnVsbCwgb25EaXNtaXNzZWQpO1xuICAgIH1cblxuICAgIHNob3czKG1zZzogc3RyaW5nLCBjb25maXJtVGl0bGU6IHN0cmluZywgb25EaXNtaXNzZWQ6IChpc0NvbmZpcm06IGJvb2xlYW4pPT52b2lkKXtcbiAgICAgICAgdGhpcy5zaG93NChtc2csIG51bGwsIGNvbmZpcm1UaXRsZSwgb25EaXNtaXNzZWQpO1xuICAgIH1cblxuICAgIHNob3c0KG1zZzogc3RyaW5nLCBkb25lVGl0bGU/OiBzdHJpbmcsIGNvbmZpcm1UaXRsZT86IHN0cmluZywgb25EaXNtaXNzZWQ/OiAoaXNDb25maXJtOiBib29sZWFuKT0+dm9pZCkgOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pc0NsaWNrZENvbmZpcm0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxEb25lLnN0cmluZyA9ICFkb25lVGl0bGUgPyBcIkjhu6d5XCIgOiBkb25lVGl0bGU7XG4gICAgICAgIHRoaXMubGJsQ29uZmlybS5zdHJpbmcgPSAhY29uZmlybVRpdGxlID8gXCLEkOG7k25nIMO9XCIgOiBjb25maXJtVGl0bGU7XG4gICAgICAgIHRoaXMub25EaXNtaXNzZWQgPSBvbkRpc21pc3NlZDtcbiAgICAgICAgdGhpcy5sYmxNZXNzYWdlLnN0cmluZyA9IG1zZztcbiAgICAgICAgc3VwZXIuc2hvdygpXG4gICAgfVxuXG4gICAgYWN0Q29uZmlybSgpe1xuICAgICAgICB0aGlzLmlzQ2xpY2tkQ29uZmlybSA9IHRydWU7XG4gICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cblxuICAgIF9vblNob3dlZCgpIHtcbiAgICAgICAgRGlhbG9nLnByb3RvdHlwZS5fb25TaG93ZWQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBfb25EaXNtaXNzZWQoKSB7XG4gICAgICAgIERpYWxvZy5wcm90b3R5cGUuX29uRGlzbWlzc2VkLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vbkRpc21pc3NlZCA9PT0gXCJmdW5jdGlvblwiKSB0aGlzLm9uRGlzbWlzc2VkKHRoaXMuaXNDbGlja2RDb25maXJtKTtcbiAgICB9XG59XG4iXX0=