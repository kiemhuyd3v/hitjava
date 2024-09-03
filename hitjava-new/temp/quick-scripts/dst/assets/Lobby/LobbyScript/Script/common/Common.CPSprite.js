
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Common.CPSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c8f7r8zA1PcpxwyriIc3li', 'Common.CPSprite');
// Lobby/LobbyScript/Script/common/Common.CPSprite.ts

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
        _this.sprR99 = null;
        _this.sprVip52 = null;
        _this.sprXXeng = null;
        _this.sprManVip = null;
        return _this;
    }
    CPSprite.prototype.onLoad = function () {
        switch (VersionConfig_1.default.CPName) {
            default:
                this.getComponent(cc.Sprite).spriteFrame = this.sprR99;
                break;
        }
    };
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprR99", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprVip52", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprXXeng", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CPSprite.prototype, "sprManVip", void 0);
    CPSprite = __decorate([
        ccclass,
        requireComponent(cc.Sprite)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ29tbW9uLkNQU3ByaXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFrRTtBQUc1RCxJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUk5RDtJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWtCQztRQWZHLFlBQU0sR0FBbUIsSUFBSSxDQUFDO1FBRTlCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBbUIsSUFBSSxDQUFDOztJQVNyQyxDQUFDO0lBUEcseUJBQU0sR0FBTjtRQUNJLFFBQVEsdUJBQWEsQ0FBQyxNQUFNLEVBQUU7WUFDMUI7Z0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZELE1BQU07U0FDYjtJQUNMLENBQUM7SUFkRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOzRDQUNLO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7OENBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs4Q0FDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNRO0lBVGhCLFFBQVE7UUFGNUIsT0FBTztRQUNQLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxRQUFRLENBa0I1QjtJQUFELGVBQUM7Q0FsQkQsQUFrQkMsQ0FsQnFDLEVBQUUsQ0FBQyxTQUFTLEdBa0JqRDtrQkFsQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmVyc2lvbkNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vLi4vTG9hZGluZy9zcmMvVmVyc2lvbkNvbmZpZ1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5TcHJpdGUpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDUFNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByUjk5OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwclZpcDUyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwclhYZW5nOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwck1hblZpcDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzd2l0Y2ggKFZlcnNpb25Db25maWcuQ1BOYW1lKSB7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclI5OTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==