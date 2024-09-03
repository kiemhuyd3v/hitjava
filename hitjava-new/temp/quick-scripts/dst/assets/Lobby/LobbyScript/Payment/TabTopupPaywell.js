
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupPaywell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f4a6SZ2EtHYIc3/jSG4VbZ', 'TabTopupPaywell');
// Lobby/LobbyScript/Payment/TabTopupPaywell.ts

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
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupChuyenKhoan_1 = require("./TabTopupChuyenKhoan");
var TabTopupNapThe_1 = require("./TabTopupNapThe");
var TabTopupSieuToc_1 = require("./TabTopupSieuToc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupPaywell = /** @class */ (function (_super) {
    __extends(TabTopupPaywell, _super);
    function TabTopupPaywell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabChuyenKhoan = null;
        _this.tabSieuToc = null;
        _this.tabNapThe = null;
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        _this.dataProvider = null;
        _this.data = null;
        return _this;
    }
    TabTopupPaywell.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        //Utils.Log("show TabTopupPaywell:" + JSON.stringify(data));
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
    };
    TabTopupPaywell.prototype.hide = function () {
        _super.prototype.hide.call(this);
        this.tabChuyenKhoan.editMoney.tabIndex = -1;
        this.tabChuyenKhoan.editName.tabIndex = -1;
        this.tabSieuToc.editMoney.tabIndex = -1;
        this.tabSieuToc.editName.tabIndex = -1;
    };
    TabTopupPaywell.prototype.showPayTypes = function () {
        this.toggleChuyenKhoan.node.active = false;
        this.toggleSieutToc.node.active = false;
        var isFind = false;
        for (var i = 0; i < this.data.payType.length; i++) {
            if (this.data.payType[i].status == 1) {
                if (this.data.payType[i].name == "quickPay") {
                    this.toggleSieutToc.node.active = true;
                }
                else if (this.data.payType[i].name == "banking") {
                    this.toggleChuyenKhoan.node.active = true;
                }
                if (isFind == false) {
                    this.onBtnChoseTab(null, this.data.payType[i].name);
                    if (this.data.payType[i].name == "quickPay") {
                        this.toggleSieutToc.isChecked = true;
                    }
                    else if (this.data.payType[i].name == "banking") {
                        this.toggleChuyenKhoan.isChecked = true;
                    }
                    isFind = true;
                }
                if (this.data.payType[i].name == "banking") {
                    this.onBtnChoseTab(null, this.data.payType[i].name);
                    this.toggleSieutToc.isChecked = false;
                    this.toggleChuyenKhoan.isChecked = true;
                    isFind = true;
                }
            }
        }
    };
    TabTopupPaywell.prototype.showTab = function (payTypeKey) {
        if (payTypeKey == "quickPay") {
            this.tabSieuToc.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.hide();
            this.tabChuyenKhoan.node.getChildByName("");
            this.tabChuyenKhoan.editMoney.tabIndex = -1;
            this.tabChuyenKhoan.editName.tabIndex = -1;
            if (this.tabSieuToc != null) {
                this.tabSieuToc.editMoney.tabIndex = 0;
                this.tabSieuToc.editName.tabIndex = -0;
            }
        }
        else {
            this.tabChuyenKhoan.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.editMoney.tabIndex = 0;
            this.tabChuyenKhoan.editName.tabIndex = 0;
            if (this.tabSieuToc != null) {
                this.tabSieuToc.hide();
                this.tabSieuToc.editMoney.tabIndex = -1;
                this.tabSieuToc.editName.tabIndex = -1;
            }
        }
    };
    TabTopupPaywell.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    __decorate([
        property(TabTopupChuyenKhoan_1.default)
    ], TabTopupPaywell.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupSieuToc_1.default)
    ], TabTopupPaywell.prototype, "tabSieuToc", void 0);
    __decorate([
        property(TabTopupNapThe_1.default)
    ], TabTopupPaywell.prototype, "tabNapThe", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleChuyenKhoan", void 0);
    __decorate([
        property(cc.Toggle)
    ], TabTopupPaywell.prototype, "toggleSieutToc", void 0);
    TabTopupPaywell = __decorate([
        ccclass
    ], TabTopupPaywell);
    return TabTopupPaywell;
}(BaseTabShop_1.default));
exports.default = TabTopupPaywell;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cFBheXdlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCxtREFBOEM7QUFDOUMscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFXO0lBQXhEO1FBQUEscUVBbUdDO1FBaEdHLG9CQUFjLEdBQXdCLElBQUksQ0FBQztRQUczQyxnQkFBVSxHQUFvQixJQUFJLENBQUM7UUFHbkMsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFHakMsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBRXBDLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLFVBQUksR0FBRyxJQUFJLENBQUM7O0lBaUZ2QixDQUFDO0lBaEZHLDhCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ0wsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLDREQUE0RDtRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCw4QkFBSSxHQUFKO1FBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7UUFDYixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFD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RSxDQUFDLE1BQU0sQ0FBQzs4REFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDYTtJQWRoQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBbUduQztJQUFELHNCQUFDO0NBbkdELEFBbUdDLENBbkc0QyxxQkFBVyxHQW1HdkQ7a0JBbkdvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEJhc2VUYWJTaG9wIGZyb20gXCIuL0Jhc2VUYWJTaG9wXCI7XG5pbXBvcnQgVGFiVG9wdXBDaHV5ZW5LaG9hbiBmcm9tIFwiLi9UYWJUb3B1cENodXllbktob2FuXCI7XG5pbXBvcnQgVGFiVG9wdXBOYXBUaGUgZnJvbSBcIi4vVGFiVG9wdXBOYXBUaGVcIjtcbmltcG9ydCBUYWJUb3B1cFNpZXVUb2MgZnJvbSBcIi4vVGFiVG9wdXBTaWV1VG9jXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cFBheXdlbGwgZXh0ZW5kcyBCYXNlVGFiU2hvcCB7XG5cbiAgICBAcHJvcGVydHkoVGFiVG9wdXBDaHV5ZW5LaG9hbilcbiAgICB0YWJDaHV5ZW5LaG9hbjogVGFiVG9wdXBDaHV5ZW5LaG9hbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVGFiVG9wdXBTaWV1VG9jKVxuICAgIHRhYlNpZXVUb2M6IFRhYlRvcHVwU2lldVRvYyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoVGFiVG9wdXBOYXBUaGUpXG4gICAgdGFiTmFwVGhlOiBUYWJUb3B1cE5hcFRoZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZUNodXllbktob2FuOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlU2lldXRUb2M6IGNjLlRvZ2dsZSA9IG51bGw7XG5cblxuICAgIHB1YmxpYyBkYXRhUHJvdmlkZXIgPSBudWxsO1xuICAgIHB1YmxpYyBkYXRhID0gbnVsbDtcbiAgICBzaG93KGRhdGEpIHtcbiAgICAgICAgc3VwZXIuc2hvdyhkYXRhKTtcbiAgICAgICAgLy9VdGlscy5Mb2coXCJzaG93IFRhYlRvcHVwUGF5d2VsbDpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgdGhpcy5kYXRhUHJvdmlkZXIgPSBkYXRhO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLnByb3ZpZGVyQ29uZmlnO1xuICAgICAgICB0aGlzLnNob3dQYXlUeXBlcygpO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHN1cGVyLmhpZGUoKTtcbiAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TW9uZXkudGFiSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIHNob3dQYXlUeXBlcygpIHtcbiAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvZ2dsZVNpZXV0VG9jLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHZhciBpc0ZpbmQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5wYXlUeXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnBheVR5cGVbaV0uc3RhdHVzID09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSA9PSBcInF1aWNrUGF5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTaWV1dFRvYy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUgPT0gXCJiYW5raW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRmluZCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQnRuQ2hvc2VUYWIobnVsbCwgdGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwicXVpY2tQYXlcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTaWV1dFRvYy5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUgPT0gXCJiYW5raW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2h1eWVuS2hvYW4uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlzRmluZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwiYmFua2luZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CdG5DaG9zZVRhYihudWxsLCB0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTaWV1dFRvYy5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1RhYihwYXlUeXBlS2V5KSB7XG4gICAgICAgIGlmIChwYXlUeXBlS2V5ID09IFwicXVpY2tQYXlcIikge1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLnNob3codGhpcy5kYXRhLCB0aGlzLmRhdGFQcm92aWRlci5wcm92aWRlck5hbWUpO1xuICAgICAgICAgICAgdGhpcy50YWJDaHV5ZW5LaG9hbi5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJcIik7XG5cbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uZWRpdE1vbmV5LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmVkaXROYW1lLnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJTaWV1VG9jICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE1vbmV5LnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYlNpZXVUb2MuZWRpdE5hbWUudGFiSW5kZXggPSAtMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uc2hvdyh0aGlzLmRhdGEsIHRoaXMuZGF0YVByb3ZpZGVyLnByb3ZpZGVyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmVkaXRNb25leS50YWJJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmVkaXROYW1lLnRhYkluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYlNpZXVUb2MgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiU2lldVRvYy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmVkaXRNb25leS50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMudGFiU2lldVRvYy5lZGl0TmFtZS50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQnRuQ2hvc2VUYWIodGFyZ2V0LCBkYXRhKSB7XG4gICAgICAgIHZhciBwYXlUeXBlS2V5ID0gZGF0YTtcbiAgICAgICAgdGhpcy5zaG93VGFiKHBheVR5cGVLZXkpO1xuICAgIH1cbn1cbiJdfQ==