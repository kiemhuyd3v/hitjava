
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Common.CPLabel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ29tbW9uLkNQTGFiZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBRzVELElBQUEsS0FBMEMsRUFBRSxDQUFDLFVBQVUsRUFBckQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBSTlEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBWUM7UUFURyxZQUFNLEdBQVcsRUFBRSxDQUFDOztJQVN4QixDQUFDO0lBUEcseUJBQU0sR0FBTjtRQUNJLFFBQVEsdUJBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2pELE1BQU07U0FDYjtJQUNMLENBQUM7SUFSRDtRQURDLFFBQVE7NENBQ1c7SUFISCxRQUFRO1FBRjVCLE9BQU87UUFDUCxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO09BQ04sUUFBUSxDQVk1QjtJQUFELGVBQUM7Q0FaRCxBQVlDLENBWnFDLEVBQUUsQ0FBQyxTQUFTLEdBWWpEO2tCQVpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZlcnNpb25Db25maWcgZnJvbSBcIi4uLy4uLy4uLy4uL0xvYWRpbmcvc3JjL1ZlcnNpb25Db25maWdcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQHJlcXVpcmVDb21wb25lbnQoY2MuTGFiZWwpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDUFNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzdHJSOTk6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN3aXRjaCAoVmVyc2lvbkNvbmZpZy5DUE5hbWUpIHtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuc3RyUjk5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19