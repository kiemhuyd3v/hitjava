
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/UIItemMail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxVSUl0ZW1NYWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCwrQ0FBMEM7QUFDMUMsMkNBQXNDO0FBQ3RDLHVFQUFrRTtBQUk1RCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDtRQUFBLHFFQWdDQztRQTdCRyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUc1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR2hCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFDWixpQkFBVyxHQUFHLElBQUksQ0FBQzs7SUFzQi9CLENBQUM7SUFyQkcsNkJBQUksR0FBSixVQUFLLFdBQVcsRUFBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLElBQUksQ0FBQSxDQUFDLENBQUEsS0FBSyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ3JCLEtBQUs7WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxJQUFJLENBQUEsQ0FBQyxDQUFBLEtBQUssQ0FBQztZQUN4RCxjQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztnQkFDckUsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxJQUFJLElBQUk7b0JBQUUsT0FBTztnQkFDeEIsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTdELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBNUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1M7SUFHNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQU5QLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnQ2xDO0lBQUQscUJBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0N2RDtrQkFoQ29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5cblxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJSXRlbURpZW1EYW5oIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHRDb250ZW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZU5ldzogY2MuTm9kZSA9IG51bGw7XG4gICBcblxuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgcHJpdmF0ZSB1aVBvcHVwTWFpbCA9IG51bGw7XG4gICAgaW5pdCh1aVBvcHVwTWFpbCxkYXRhKXtcbiAgICAgICAgdGhpcy51aVBvcHVwTWFpbCA9IHVpUG9wdXBNYWlsO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLnR4dENvbnRlbnQuc3RyaW5nID0gZGF0YS50aXRsZTtcbiAgICAgICAgdGhpcy5ub2RlTmV3LmFjdGl2ZSA9IGRhdGEuc3RhdHVzID09IDAgP3RydWU6ZmFsc2U7XG4gICAgfVxuXG4gICAgb25CdG5SZWFkKCl7XG4gICAgICAgIHRoaXMudWlQb3B1cE1haWwucmVhZE1haWwodGhpcy5kYXRhKTtcbiAgICAgICAgaWYodGhpcy5kYXRhLnN0YXR1cyA9PSAwKXtcbiAgICAgICAgICAgIC8vbmV3XG4gICAgICAgICAgICB0aGlzLmRhdGEuc3RhdHVzID0gMTtcbiAgICAgICAgICAgIHRoaXMubm9kZU5ldy5hY3RpdmUgPSB0aGlzLmRhdGEuc3RhdHVzID09IDAgP3RydWU6ZmFsc2U7XG4gICAgICAgICAgICBIdHRwLmdldChDb25maWdzLkFwcC5BUEksIHsgYzogXCI0MDRcIiwgbWlkOiB0aGlzLmRhdGEubWFpbF9pZCB9LCAoZXJyLCByZXMpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuT05fVVBEQVRFX01BSUwpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=