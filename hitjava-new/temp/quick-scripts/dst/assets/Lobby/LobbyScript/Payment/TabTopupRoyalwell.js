
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupRoyalwell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08851OwZRpGo7z3cdKQHIFf', 'TabTopupRoyalwell');
// Lobby/LobbyScript/Payment/TabTopupRoyalwell.ts

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
var BaseTabShop_1 = require("./BaseTabShop");
var TabTopupSieuToc_1 = require("./TabTopupSieuToc");
var TabTopupSieuToc_2 = require("./TabTopupSieuToc");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupPaywell = /** @class */ (function (_super) {
    __extends(TabTopupPaywell, _super);
    function TabTopupPaywell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabChuyenKhoan = null;
        _this.tabSieuToc = null;
        _this.toggleChuyenKhoan = null;
        _this.toggleSieutToc = null;
        _this.dataProvider = null;
        _this.data = null;
        return _this;
    }
    TabTopupPaywell.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
        //Utils.Log("show TabTopupPaywell:"+JSON.stringify(data));
        this.dataProvider = data;
        this.data = data.providerConfig;
        this.showPayTypes();
    };
    TabTopupPaywell.prototype.hide = function () {
        _super.prototype.hide.call(this);
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
        if (payTypeKey == "IB_ONLINE") {
            this.tabSieuToc.show(this.data, this.dataProvider.providerName);
            this.tabChuyenKhoan.hide();
        }
        else {
            this.tabSieuToc.hide();
            this.tabChuyenKhoan.show(this.data, this.dataProvider.providerName);
        }
    };
    TabTopupPaywell.prototype.onBtnChoseTab = function (target, data) {
        var payTypeKey = data;
        this.showTab(payTypeKey);
    };
    __decorate([
        property(TabTopupSieuToc_2.default)
    ], TabTopupPaywell.prototype, "tabChuyenKhoan", void 0);
    __decorate([
        property(TabTopupSieuToc_1.default)
    ], TabTopupPaywell.prototype, "tabSieuToc", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cFJveWFsd2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdsRiw2Q0FBd0M7QUFDeEMscURBQWdEO0FBQ2hELHFEQUFvRDtBQUU5QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBVztJQUF4RDtRQUFBLHFFQThFQztRQTNFRyxvQkFBYyxHQUFxQixJQUFJLENBQUM7UUFHeEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLHVCQUFpQixHQUFXLElBQUksQ0FBQztRQUVqQyxvQkFBYyxHQUFXLElBQUksQ0FBQztRQUd0QixrQkFBWSxHQUFFLElBQUksQ0FBQztRQUNuQixVQUFJLEdBQUcsSUFBSSxDQUFDOztJQStEeEIsQ0FBQztJQTlERyw4QkFBSSxHQUFKLFVBQUssSUFBSTtRQUNMLGlCQUFNLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztRQUNoQiwwREFBMEQ7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxD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QUNNO0lBR2hDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OERBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyREFDVTtJQVhiLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E4RW5DO0lBQUQsc0JBQUM7Q0E5RUQsQUE4RUMsQ0E5RTRDLHFCQUFXLEdBOEV2RDtrQkE5RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgQmFzZVRhYlNob3AgZnJvbSBcIi4vQmFzZVRhYlNob3BcIjtcbmltcG9ydCBUYWJUb3B1cFNpZXVUb2MgZnJvbSBcIi4vVGFiVG9wdXBTaWV1VG9jXCI7XG5pbXBvcnQgVGFiVG9wdXBDaHV5ZW5LaG9hbiBmcm9tIFwiLi9UYWJUb3B1cFNpZXVUb2NcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJUb3B1cFBheXdlbGwgZXh0ZW5kcyBCYXNlVGFiU2hvcHtcblxuICAgIEBwcm9wZXJ0eShUYWJUb3B1cENodXllbktob2FuKVxuICAgIHRhYkNodXllbktob2FuOlRhYlRvcHVwQ2h1eWVuS2hvYW49bnVsbDtcblxuICAgIEBwcm9wZXJ0eShUYWJUb3B1cFNpZXVUb2MpXG4gICAgdGFiU2lldVRvYzpUYWJUb3B1cFNpZXVUb2M9bnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQ2h1eWVuS2hvYW46Y2MuVG9nZ2xlPW51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVTaWV1dFRvYzpjYy5Ub2dnbGU9bnVsbDtcblxuXG4gICAgcHJpdmF0ZSBkYXRhUHJvdmlkZXIgPW51bGw7XG4gICAgcHJpdmF0ZSBkYXRhID0gbnVsbDtcbiAgICBzaG93KGRhdGEpe1xuICAgICAgICBzdXBlci5zaG93KGRhdGEpO1xuICAgICAgICAgLy9VdGlscy5Mb2coXCJzaG93IFRhYlRvcHVwUGF5d2VsbDpcIitKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gZGF0YTtcbiAgICAgICAgdGhpcy5kYXRhPSBkYXRhLnByb3ZpZGVyQ29uZmlnO1xuICAgICAgICB0aGlzLnNob3dQYXlUeXBlcygpO1xuICAgIH1cblxuICAgIGhpZGUoKXtcbiAgICAgICAgc3VwZXIuaGlkZSgpO1xuICAgIH1cblxuICAgIHNob3dQYXlUeXBlcygpe1xuICAgICAgICB0aGlzLnRvZ2dsZUNodXllbktob2FuLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMudG9nZ2xlU2lldXRUb2Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGlzRmluZCA9IGZhbHNlO1xuICAgICAgICBmb3IodmFyIGk9MDtpPHRoaXMuZGF0YS5wYXlUeXBlLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYodGhpcy5kYXRhLnBheVR5cGVbaV0uc3RhdHVzID09IDEpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUgPT0gXCJxdWlja1BheVwiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTaWV1dFRvYy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSA9PSBcImJhbmtpbmdcIil7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2h1eWVuS2hvYW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihpc0ZpbmQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkNob3NlVGFiKG51bGwsdGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUgPT0gXCJxdWlja1BheVwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2lldXRUb2MuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuZGF0YS5wYXlUeXBlW2ldLm5hbWUgPT0gXCJiYW5raW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDaHV5ZW5LaG9hbi5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpc0ZpbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih0aGlzLmRhdGEucGF5VHlwZVtpXS5uYW1lID09IFwiYmFua2luZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJ0bkNob3NlVGFiKG51bGwsdGhpcy5kYXRhLnBheVR5cGVbaV0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2lldXRUb2MuaXNDaGVja2VkICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNodXllbktob2FuLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlzRmluZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93VGFiKHBheVR5cGVLZXkpe1xuICAgICAgICBpZihwYXlUeXBlS2V5ID09IFwiSUJfT05MSU5FXCIpe1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLnNob3codGhpcy5kYXRhLHRoaXMuZGF0YVByb3ZpZGVyLnByb3ZpZGVyTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnRhYkNodXllbktob2FuLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy50YWJTaWV1VG9jLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMudGFiQ2h1eWVuS2hvYW4uc2hvdyh0aGlzLmRhdGEsdGhpcy5kYXRhUHJvdmlkZXIucHJvdmlkZXJOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuQ2hvc2VUYWIodGFyZ2V0LGRhdGEpe1xuICAgICAgICB2YXIgcGF5VHlwZUtleSA9IGRhdGE7XG4gICAgICAgIHRoaXMuc2hvd1RhYihwYXlUeXBlS2V5KTtcbiAgICB9XG59XG4iXX0=