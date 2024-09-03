"use strict";
cc._RF.push(module, 'fd5cfBXVIZC4Ks6evy9ygnF', 'DropDownOptionData');
// Loading/Add-on/DropDown/Script/DropDownOptionData.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DropDownOptionData = /** @class */ (function () {
    function DropDownOptionData() {
        this.optionString = "";
        this.optionSf = null;
    }
    __decorate([
        property(cc.String)
    ], DropDownOptionData.prototype, "optionString", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], DropDownOptionData.prototype, "optionSf", void 0);
    DropDownOptionData = __decorate([
        ccclass("DropDownOptionData")
    ], DropDownOptionData);
    return DropDownOptionData;
}());
exports.default = DropDownOptionData;

cc._RF.pop();