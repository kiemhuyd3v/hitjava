
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/CanvasUpdateApp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d9fcI6tENBhbjEpxnzpxlp', 'CanvasUpdateApp');
// Lobby/LobbyScript/CanvasUpdateApp.ts

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
var App_1 = require("./Script/common/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CanvasUpdateApp = /** @class */ (function (_super) {
    __extends(CanvasUpdateApp, _super);
    function CanvasUpdateApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CanvasUpdateApp.prototype.start = function () {
        // App.instance.removeAllWebView();
        App_1.default.instance.node.parent = this.node;
        // App.instance.node.setSiblingIndex(this.node.childrenCount);
        App_1.default.instance.node.zIndex = cc.macro.MAX_ZINDEX;
        App_1.default.instance.node.position = cc.v3(0, 0, 0);
    };
    CanvasUpdateApp.prototype.onDisable = function () {
        App_1.default.instance.node.parent = null;
    };
    CanvasUpdateApp = __decorate([
        ccclass
    ], CanvasUpdateApp);
    return CanvasUpdateApp;
}(cc.Component));
exports.default = CanvasUpdateApp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxDYW52YXNVcGRhdGVBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsMkNBQXNDO0FBR2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBQXpEOztJQWVBLENBQUM7SUFaRywrQkFBSyxHQUFMO1FBRUksbUNBQW1DO1FBQ25DLGFBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLDhEQUE4RDtRQUM5RCxhQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDL0MsYUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLGFBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQWRnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBZW5DO0lBQUQsc0JBQUM7Q0FmRCxBQWVDLENBZjRDLEVBQUUsQ0FBQyxTQUFTLEdBZXhEO2tCQWZvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBBcHAgZnJvbSBcIi4vU2NyaXB0L2NvbW1vbi9BcHBcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzVXBkYXRlQXBwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgc3RhcnQoKSB7XG5cbiAgICAgICAgLy8gQXBwLmluc3RhbmNlLnJlbW92ZUFsbFdlYlZpZXcoKTtcbiAgICAgICAgQXBwLmluc3RhbmNlLm5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgICAgICAvLyBBcHAuaW5zdGFuY2Uubm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQpO1xuICAgICAgICBBcHAuaW5zdGFuY2Uubm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xuICAgICAgICBBcHAuaW5zdGFuY2Uubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDAsIDAsIDApO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLm5vZGUucGFyZW50ID0gbnVsbDtcbiAgICB9XG59XG4iXX0=