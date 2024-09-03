
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/TabTopupGame - 001.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6012fy2b9JNzImWO4KoZhSU', 'TabTopupGame - 001');
// Lobby/LobbyScript/Payment/TabTopupGame - 001.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TabTopupGame = /** @class */ (function (_super) {
    __extends(TabTopupGame, _super);
    function TabTopupGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabTopupGame = __decorate([
        ccclass
    ], TabTopupGame);
    return TabTopupGame;
}(BaseTabShop_1.default));
exports.default = TabTopupGame;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxUYWJUb3B1cEdhbWUgLSAwMDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEYsNkNBQXdDO0FBU2xDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFXO0lBQXJEOztJQUVBLENBQUM7SUFGb0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQUVoQztJQUFELG1CQUFDO0NBRkQsQUFFQyxDQUZ5QyxxQkFBVyxHQUVwRDtrQkFGb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEh0dHAgZnJvbSBcIi4uLy4uLy4uL0xvYWRpbmcvc3JjL0h0dHBcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uL1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQmFzZVRhYlNob3AgZnJvbSBcIi4vQmFzZVRhYlNob3BcIjtcbmltcG9ydCBUYWJUb3B1cENodXllbktob2FuIGZyb20gXCIuL1RhYlRvcHVwQ2h1eWVuS2hvYW5cIjtcbmltcG9ydCBUYWJUb3B1cE1hbnVhbEJhbmsgZnJvbSBcIi4vVGFiVG9wdXBNYW51YWxCYW5rXCI7XG5pbXBvcnQgVGFwVG9wdXBNYW51YWxNb21vIGZyb20gXCIuL1RhYlRvcHVwTWFudWFsTW9tb1wiO1xuaW1wb3J0IFRhcFRvcHVwTWFudWFsWmFsbyBmcm9tIFwiLi9UYWJUb3B1cE1hbnVhbFphbG9cIjtcbmltcG9ydCBUYWJUb3B1cE1vbW8gZnJvbSBcIi4vVGFiVG9wdXBNb21vXCI7XG5pbXBvcnQgVGFiQmFua3MgZnJvbSBcIi4vTG9iYnkuUG9wdXBUaGVzXCI7XG5pbXBvcnQgVGFiVG9wdXBTaWV1VG9jIGZyb20gXCIuL1RhYlRvcHVwU2lldVRvY1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiVG9wdXBHYW1lIGV4dGVuZHMgQmFzZVRhYlNob3Age1xuXG59XG4iXX0=