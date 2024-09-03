"use strict";
cc._RF.push(module, '02c17acVFhNtJiW3VazAvsH', 'Common.CPLabel');
// Lobby/LobbyScript/Script/common/Common.CPLabel.ts

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
var VersionConfig_1 = require("../../../../Loading/src/VersionConfig");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var CPSprite = /** @class */ (function (_super) {
    __extends(CPSprite, _super);
    function CPSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.strR99 = "";
        return _this;
    }
    CPSprite.prototype.onLoad = function () {
        switch (VersionConfig_1.default.CPName) {
            default:
                this.getComponent(cc.Label).string = this.strR99;
                break;
        }
    };
    __decorate([
        property
    ], CPSprite.prototype, "strR99", void 0);
    CPSprite = __decorate([
        ccclass,
        requireComponent(cc.Label)
    ], CPSprite);
    return CPSprite;
}(cc.Component));
exports.default = CPSprite;

cc._RF.pop();