
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/Add-on/DropDown/Script/DropDownItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0e0c1OzYPVOfpEPKQp433tu', 'DropDownItem');
// Loading/Add-on/DropDown/Script/DropDownItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DropDownItem = /** @class */ (function (_super) {
    __extends(DropDownItem, _super);
    function DropDownItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = undefined;
        _this.sprite = undefined;
        _this.toggle = undefined;
        return _this;
    }
    __decorate([
        property(cc.Label)
    ], DropDownItem.prototype, "label", void 0);
    __decorate([
        property(cc.Sprite)
    ], DropDownItem.prototype, "sprite", void 0);
    __decorate([
        property(cc.Toggle)
    ], DropDownItem.prototype, "toggle", void 0);
    DropDownItem = __decorate([
        ccclass()
    ], DropDownItem);
    return DropDownItem;
}(cc.Component));
exports.default = DropDownItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcQWRkLW9uXFxEcm9wRG93blxcU2NyaXB0XFxEcm9wRG93bkl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFRQztRQUxVLFdBQUssR0FBYSxTQUFTLENBQUM7UUFFNUIsWUFBTSxHQUFjLFNBQVMsQ0FBQztRQUU5QixZQUFNLEdBQWMsU0FBUyxDQUFDOztJQUN6QyxDQUFDO0lBTEc7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDZ0I7SUFFbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDaUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDaUI7SUFQcEIsWUFBWTtRQURoQyxPQUFPLEVBQUU7T0FDVyxZQUFZLENBUWhDO0lBQUQsbUJBQUM7Q0FSRCxBQVFDLENBUnlDLEVBQUUsQ0FBQyxTQUFTLEdBUXJEO2tCQVJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3MoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcERvd25JdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwdWJsaWMgbGFiZWw6IGNjLkxhYmVsID0gdW5kZWZpbmVkO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgcHVibGljIHNwcml0ZTogY2MuU3ByaXRlID0gdW5kZWZpbmVkO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgcHVibGljIHRvZ2dsZTogY2MuVG9nZ2xlID0gdW5kZWZpbmVkO1xufSJdfQ==