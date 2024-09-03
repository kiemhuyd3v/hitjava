
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Lobby.PopupTaiApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxMb2JieS5Qb3B1cFRhaUFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFDaEQsaURBQTRDO0FBRXRDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DO1FBQUEscUVBMENDO1FBdkNHLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFHeEIsdUJBQWlCLEdBQWtCLElBQUksQ0FBQztRQUV4QyxtQkFBYSxHQUFrQixJQUFJLENBQUM7UUFHcEMsc0JBQWdCLEdBQWtCLElBQUksQ0FBQztRQUV2QyxrQkFBWSxHQUFrQixJQUFJLENBQUM7O0lBMkJ2QyxDQUFDO0lBMUJHLDJCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLGlCQUFNLElBQUksV0FBRSxDQUFDO1FBRWIsSUFBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2hEO2FBQ0c7WUFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMvQztJQUNMLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0QyxrRUFBa0U7SUFDdEUsQ0FBQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3RDLGtFQUFrRTtJQUN0RSxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ1E7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDSTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzBEQUNlO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ1c7SUFHcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5REFDYztJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3FEQUNVO0lBZmxCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0EwQy9CO0lBQUQsa0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3dDLGdCQUFNLEdBMEM5QztrQkExQ29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFRhaUFwcCBleHRlbmRzIERpYWxvZyB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHFyX2FuZHJvaWQ6Y2MuU3ByaXRlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHFyX2lvczpjYy5TcHJpdGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHFyX2FuZHJvaWRfbG90ZTg4OmNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcXJfaW9zX2xvdGU4ODpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcXJfYW5kcm9pZF9sb3Q3OTpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHFyX2lvc19sb3Q3OTpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgXG4gICAgICAgIGlmKENvbmZpZ3MuQXBwLklTX1BSTyA9PSBmYWxzZSl7XG4gICAgICAgICAgICB0aGlzLnFyX2FuZHJvaWQuc3ByaXRlRnJhbWUgPSB0aGlzLnFyX2FuZHJvaWRfbG90ZTg4O1xuICAgICAgICAgICAgdGhpcy5xcl9pb3Muc3ByaXRlRnJhbWUgPSB0aGlzLnFyX2lvc19sb3RlODg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMucXJfYW5kcm9pZC5zcHJpdGVGcmFtZSA9IHRoaXMucXJfYW5kcm9pZF9sb3Q3OTtcbiAgICAgICAgICAgIHRoaXMucXJfaW9zLnNwcml0ZUZyYW1lID0gdGhpcy5xcl9pb3NfbG90Nzk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RUYWlBcGsoKSB7XG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly9GQU5WSU4ud0lOL1wiKTtcbiAgICAgICAgLy8gQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coXCJUw61uaCBuxINuZyDEkWFuZyBwaMOhdCB0cmnhu4NuLlwiKTtcbiAgICB9XG5cbiAgICBhY3RUYWlJb3MoKXtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL0ZBTlZJTi53SU4vXCIpO1xuICAgICAgICAvLyBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhcIlTDrW5oIG7Eg25nIMSRYW5nIHBow6F0IHRyaeG7g24uXCIpO1xuICAgIH1cbn1cbiJdfQ==