
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/HandlerButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28a51G8kGhIrLmcDlTxUxKT', 'HandlerButton');
// Lobby/LobbyScript/Script/common/HandlerButton.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.spriteFrameOn = null;
        _this.spriteFrameOff = null;
        _this.sprite = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.sprite.spriteFrame = this.spriteFrameOn;
    };
    NewClass.prototype.SetActive = function (active) {
        //  //Utils.Log("activeactiveactiveactiveactive: "+active);
        if (active)
            this.sprite.spriteFrame = this.spriteFrameOn;
        else
            this.sprite.spriteFrame = this.spriteFrameOff;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "spriteFrameOn", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "spriteFrameOff", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "sprite", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcSGFuZGxlckJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3RixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXVCQztRQXBCRyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFFckMsb0JBQWMsR0FBbUIsSUFBSSxDQUFDO1FBRXRDLFlBQU0sR0FBYyxJQUFJLENBQUM7O0lBZ0I3QixDQUFDO0lBZEcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQy9DLENBQUM7SUFFTSw0QkFBUyxHQUFoQixVQUFpQixNQUFjO1FBRTNCLDJEQUEyRDtRQUMzRCxJQUFHLE1BQU07WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOztZQUUzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQ2hELENBQUM7SUFuQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDWTtJQUVyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO29EQUNhO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFQUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUI1QjtJQUFELGVBQUM7Q0F2QkQsQUF1QkMsQ0F2QnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUJqRDtrQkF2Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwcml0ZUZyYW1lT246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByaXRlRnJhbWVPZmY6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWU9dGhpcy5zcHJpdGVGcmFtZU9uO1xuICAgIH1cblxuICAgIHB1YmxpYyBTZXRBY3RpdmUoYWN0aXZlOkJvb2xlYW4pXG4gICAge1xuICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJhY3RpdmVhY3RpdmVhY3RpdmVhY3RpdmVhY3RpdmU6IFwiK2FjdGl2ZSk7XG4gICAgICAgIGlmKGFjdGl2ZSlcbiAgICAgICAgdGhpcy5zcHJpdGUuc3ByaXRlRnJhbWU9dGhpcy5zcHJpdGVGcmFtZU9uO1xuICAgICAgICBlbHNlXG4gICAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lPXRoaXMuc3ByaXRlRnJhbWVPZmY7XG4gICAgfVxufVxuIl19