"use strict";
cc._RF.push(module, 'e896eV5a85Fcot+hanXKUDz', 'TaiXiuMD5.PopupGuide');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.PopupGuide.ts

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
var Dialog_1 = require("../../../Lobby/LobbyScript/Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupGuide = /** @class */ (function (_super) {
    __extends(PopupGuide, _super);
    function PopupGuide() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgL = null;
        _this.frame1 = null;
        _this.frame2 = null;
        return _this;
    }
    PopupGuide.prototype.show = function () {
        _super.prototype.show.call(this);
        this.bgL.spriteFrame = this.frame1;
    };
    PopupGuide.prototype.actShowChungThuc = function () {
        this.bgL.spriteFrame = this.frame2;
    };
    __decorate([
        property(cc.Sprite)
    ], PopupGuide.prototype, "bgL", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupGuide.prototype, "frame1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupGuide.prototype, "frame2", void 0);
    PopupGuide = __decorate([
        ccclass
    ], PopupGuide);
    return PopupGuide;
}(Dialog_1.default));
exports.default = PopupGuide;

cc._RF.pop();