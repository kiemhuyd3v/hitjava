"use strict";
cc._RF.push(module, '5afd3HR2JJIa7aGu5TcA8YD', 'Lobby.PopupTaiApp');
// Lobby/LobbyScript/Lobby.PopupTaiApp.ts

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
var Dialog_1 = require("./Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupTaiApp = /** @class */ (function (_super) {
    __extends(PopupTaiApp, _super);
    function PopupTaiApp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.qr_android = null;
        _this.qr_ios = null;
        _this.qr_android_lote88 = null;
        _this.qr_ios_lote88 = null;
        _this.qr_android_lot79 = null;
        _this.qr_ios_lot79 = null;
        return _this;
    }
    PopupTaiApp.prototype.start = function () {
    };
    PopupTaiApp.prototype.show = function () {
        _super.prototype.show.call(this);
        if (Configs_1.default.App.IS_PRO == false) {
            this.qr_android.spriteFrame = this.qr_android_lote88;
            this.qr_ios.spriteFrame = this.qr_ios_lote88;
        }
        else {
            this.qr_android.spriteFrame = this.qr_android_lot79;
            this.qr_ios.spriteFrame = this.qr_ios_lot79;
        }
    };
    PopupTaiApp.prototype.actTaiApk = function () {
        cc.sys.openURL("https://FANVIN.wIN/");
        // App.instance.alertDialog.showMsg("Tính năng đang phát triển.");
    };
    PopupTaiApp.prototype.actTaiIos = function () {
        cc.sys.openURL("https://FANVIN.wIN/");
        // App.instance.alertDialog.showMsg("Tính năng đang phát triển.");
    };
    __decorate([
        property(cc.Sprite)
    ], PopupTaiApp.prototype, "qr_android", void 0);
    __decorate([
        property(cc.Sprite)
    ], PopupTaiApp.prototype, "qr_ios", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupTaiApp.prototype, "qr_android_lote88", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupTaiApp.prototype, "qr_ios_lote88", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupTaiApp.prototype, "qr_android_lot79", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupTaiApp.prototype, "qr_ios_lot79", void 0);
    PopupTaiApp = __decorate([
        ccclass
    ], PopupTaiApp);
    return PopupTaiApp;
}(Dialog_1.default));
exports.default = PopupTaiApp;

cc._RF.pop();