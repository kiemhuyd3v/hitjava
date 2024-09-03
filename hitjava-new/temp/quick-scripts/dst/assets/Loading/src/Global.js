
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loading/src/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9hZGluZ1xcc3JjXFxHbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQVVBLENBQUM7SUFUVSxvQkFBYSxHQUFrQixJQUFJLENBQUM7SUFDcEMsc0JBQWUsR0FBeUIsSUFBSSxDQUFDO0lBQzdDLG9CQUFhLEdBQWtCLElBQUksQ0FBQztJQUMzQywwREFBMEQ7SUFDbkQsa0JBQVcsR0FBMkIsSUFBSSxDQUFDO0lBQzNDLDZCQUFzQixHQUFHLEtBQUssQ0FBQztJQUMvQixzQkFBZSxHQUFNLElBQUksQ0FBQztJQVB4QixNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBVWxCO0lBQUQsYUFBQztDQVZELEFBVUMsSUFBQTtBQVZZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYmJ5TG9iYnlDb250cm9sbGVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9Mb2JieS5Mb2JieUNvbnRyb2xsZXJcIjtcbmltcG9ydCBQb3B1cFNlY3VyaXR5IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9Mb2JieS5Qb3B1cFNlY3VyaXR5XCI7XG5pbXBvcnQgUG9wdXBSZWdpc3RlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvUG9wdXBSZWdpc3RlclwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR2xvYmFsIHtcbiAgICBzdGF0aWMgUG9wdXBTZWN1cml0eTogUG9wdXBTZWN1cml0eSA9IG51bGw7XG4gICAgc3RhdGljIExvYmJ5Q29udHJvbGxlcjogTG9iYnlMb2JieUNvbnRyb2xsZXIgPSBudWxsO1xuICAgIHN0YXRpYyBQb3B1cFJlZ2lzdGVyOiBQb3B1cFJlZ2lzdGVyID0gbnVsbDtcbiAgICAvLyBzdGF0aWMgTGFuZ3VhZ2VNYW5hZ2VyOiBMYW5ndWFnZUxhbmd1YWdlTWFuYWdlciA9IG51bGw7XG4gICAgc3RhdGljIEJ1bmRsZUxvYmJ5OiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlID0gbnVsbDtcbiAgICBzdGF0aWMgaXNMb2dpbkZyb21PdGhlclBsYWNlcyA9IGZhbHNlO1xuICAgIHN0YXRpYyBMYW5ndWFnZU1hbmFnZXIgOmFueT1udWxsO1xuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbn1cbiJdfQ==