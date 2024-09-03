
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupClickPay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2fed6f5EyhK4KPQiC3UiS1X', 'TabTopupClickPay');
// Lobby/LobbyScript/Payment/TabTopupClickPay.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var TabTopupSieuToc_1 = require("./TabTopupSieuToc");
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupClickPay = /** @class */ (function (_super) {
    __extends(TabTopupClickPay, _super);
    function TabTopupClickPay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabChuyenKhoan = null;
        _this.tabSieuToc = null;
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        _this.dataProvider = null;
        _this.data = null;
        return _this;
    }
    TabTopupClickPay.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
        this.onBtnChoseTab(null, "quickPay");
    };
    TabTopupClickPay.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tabChuyenKhoan.editMoney.tabIndex = -1;
        this.tabChuyenKhoan.editName.tabIndex = -1;
        this.tabSieuToc.editMoney.tabIndex = -1;
        this.tabSieuToc.editName.tabIndex = -1;
    };
    TabTopupClickPay.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleSieutToc.node.active = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                if (this.data.payType[i].name == "quickPay") {
                    this.toggleSieutToc.node.active = true;
                }
                else if (this.data.payType[i].name == "banking") {
                    this.toggleChuyenKhoan.node.active = true;
                }
            }
        }
    };
    TabTopupClickPay.prototype.showTab = function (payTypeKey) {
        if (payTypeKey == "quickPay") {
            this.tabSieuToc.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.hide();
            this.tabChuyenKhoan.editMoney.tabIndex = -1;
            this.tabChuyenKhoan.editName.tabIndex = -1;
            this.tabSieuToc.editMoney.tabIndex = 0;
            this.tabSieuToc.editName.tabIndex = 0;
        }
        else {
            this.tabSieuToc.hide();
            this.tabChuyenKhoan.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.editMoney.tabIndex = 0;
            this.tabChuyenKhoan.editName.tabIndex = 0;
            this.tabSieuToc.editMoney.tabIndex = -1;
            this.tabSieuToc.editName.tabIndex = -1;
        }
    };
    TabTopupClickPay.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    __decorate([
        property(TabTopupChuyenKhoan_1.default)
    ], TabTopupClickPay.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupSieuToc_1.default)
    ], TabTopupClickPay.prototype, "tabSieuToc", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupClickPay.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupClickPay.prototype, "toggleSieutToc", void 0);
    TabTopupClickPay = __decorate([
        ccclass
    ], TabTopupClickPay);
    return TabTopupClickPay;
}(BaseTabShop_1.default));
exports.default = TabTopupClickPay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cENsaWNrUGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBQzFDLDZEQUF3RDtBQUN4RCxxREFBZ0Q7QUFDaEQsNkNBQXdDO0FBRXhDO0lBQThDLG9DQUFXO0lBQXpEO1FBQUEscUVBd0VDO1FBckVHLG9CQUFjLEdBQXFCLElBQUksQ0FBQztRQUd4QyxnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsdUJBQWlCLEdBQVcsSUFBSSxDQUFDO1FBRWpDLG9CQUFjLEdBQVcsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQUUsSUFBSSxDQUFDO1FBQ25CLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBeUR4QixDQUFDO0lBeERHLCtCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ0wsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDSSxpQkFBTSxJQUFJLFdBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FB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UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrREFDYTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzREQUNVO0lBWGIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0F3RXBDO0lBQUQsdUJBQUM7Q0F4RUQsQUF3RUMsQ0F4RTZDLHFCQUFXLEdBd0V4RDtrQkF4RW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCBUYWJQb3B1cENodXllbktob2FuIGZyb20gXCIuL1RhYlRvcHVwQ2h1eWVuS2hvYW5cIjtcbmltcG9ydCBUYWJQb3B1cFNpZXVUb2MgZnJvbSBcIi4vVGFiVG9wdXBTaWV1VG9jXCI7XG5pbXBvcnQgQmFzZVRhYlNob3AgZnJvbSBcIi4vQmFzZVRhYlNob3BcIjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cENsaWNrUGF5IGV4dGVuZHMgQmFzZVRhYlNob3B7XG5cbiAgICBAcHJvcGVydHkoVGFiUG9wdXBDaHV5ZW5LaG9hbilcbiAgICB0YWJDaHV5ZW5LaG9hbjpUYWJQb3B1cENodXllbktob2FuPW51bGw7XG5cbiAgICBAcHJvcGVydHkoVGFiUG9wdXBTaWV1VG9jKVxuICAgIHRhYlNpZXVUb2M6VGFiUG9wdXBTaWV1VG9jPW51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZUNodXllbktob2FuOmNjLlRvZ2dsZT1udWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlU2lldXRUb2M6Y2MuVG9nZ2xlPW51bGw7XG5cblxuICAgIHByaXZhdGUgZGF0YVByb3ZpZGVyID1udWxsO1xuICAgIHByaXZhdGUgZGF0YSA9IG51bGw7XG4gICAgc2hvdyhkYXRhKXtcbiAgICAgICAgc3VwZXIuc2hvdyhkYXRhKTtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGE9IGRhdGEucHJvdmlkZXJDb25maWc7XG4gICAgICAgIHRoaXMuc2hvd1BheVR5cGVzKCk7XG4gICAgICAgIHRoaXMub25CdG5DaG9zZVRhYihudWxsLFwicXVpY2tQYXlcIik7XG4gICAgfVxuXG4gICAgaGlkZSgpe1xuICAgICAgICBzdXBlci5oaWRlKCk7XG4gICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy50YWJTaWV1VG9jLmVkaXRNb25leS50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICB9XG5cbiAgICBzaG93UGF5VHlwZXMoKXtcbiAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvZ2dsZVNpZXV0VG9jLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8dGhpcy5kYXRhLnBheVR5cGUubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZih0aGlzLmRhdGEucGF5VHlwZVtpXS5zdGF0dXMgPT0gMSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSA9PSBcInF1aWNrUGF5XCIpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNpZXV0VG9jLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwiYmFua2luZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RhYihwYXlUeXBlS2V5KXtcbiAgICAgICAgaWYocGF5VHlwZUtleSA9PSBcInF1aWNrUGF5XCIpe1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLnNob3codGhpcy5kYXRhLHRoaXMuZGF0YVByb3ZpZGVyLnByb3ZpZGVyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmhpZGUoKTtcblxuICAgICAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TW9uZXkudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmVkaXROYW1lLnRhYkluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uc2hvdyh0aGlzLmRhdGEsdGhpcy5kYXRhUHJvdmlkZXIucHJvdmlkZXJOYW1lKTtcblxuICAgICAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TW9uZXkudGFiSW5kZXggPSAwO1xuICAgICAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TmFtZS50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE5hbWUudGFiSW5kZXggPSAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuQ2hvc2VUYWIodGFyZ2V0LGRhdGEpe1xuICAgICAgICB2YXIgcGF5VHlwZUtleSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2hvd1RhYihwYXlUeXBlS2V5KTtcbiAgICB9XG59XG4iXX0=