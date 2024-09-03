"use strict";
cc._RF.push(module, '488fcGn5YZMzKtipwNuZkTw', 'Global');
// Loading/src/Global.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.PopupSecurity = null;
    Global.LobbyController = null;
    Global.PopupRegister = null;
    // static LanguageManager: LanguageLanguageManager = null;
    Global.BundleLobby = null;
    Global.isLoginFromOtherPlaces = false;
    Global.LanguageManager = null;
    Global = __decorate([
        ccclass
    ], Global);
    return Global;
}());
exports.Global = Global;

cc._RF.pop();