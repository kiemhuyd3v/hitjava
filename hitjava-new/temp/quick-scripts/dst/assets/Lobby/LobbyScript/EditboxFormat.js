
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/EditboxFormat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '244e5R+kGVIILVh6oSM8Zt9', 'EditboxFormat');
// Lobby/LobbyScript/EditboxFormat.ts

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
var Utils_1 = require("./Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EditboxFormat = /** @class */ (function (_super) {
    __extends(EditboxFormat, _super);
    function EditboxFormat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.edit = null;
        _this.isMutiple = false;
        _this.number = 0;
        return _this;
    }
    EditboxFormat.prototype.onLoad = function () {
        this.edit = this.node.getComponent(cc.EditBox);
    };
    EditboxFormat.prototype.onChanged = function () {
        var temp = Utils_1.default.ToInt(this.edit.string);
        temp = Math.abs(temp);
        this.edit.string = Utils_1.default.ToVND(temp);
        if (cc.sys.isBrowser) {
            this.edit.focus();
        }
    };
    EditboxFormat.prototype.onFormatName = function () {
        this.edit.string = Utils_1.default.formatName(this.edit.string);
        if (cc.sys.isBrowser) {
            this.edit.focus();
        }
    };
    EditboxFormat.prototype.onFormatNameMark = function () {
        this.edit.string = Utils_1.default.formatNameBank(this.edit.string);
        if (cc.sys.isBrowser) {
            this.edit.focus();
        }
    };
    EditboxFormat.prototype.onEnded = function () {
        var _this = this;
        setTimeout(function () {
            var temp = Utils_1.default.ToInt(_this.edit.string);
            if (_this.isMutiple && temp > 1000) {
                var hs = 1000;
                if (temp % hs != 0) {
                    temp = temp - (temp % hs);
                }
            }
            temp = Math.abs(temp);
            _this.edit.string = Utils_1.default.ToVND(temp);
        }, 200);
    };
    __decorate([
        property
    ], EditboxFormat.prototype, "isMutiple", void 0);
    EditboxFormat = __decorate([
        ccclass
    ], EditboxFormat);
    return EditboxFormat;
}(cc.Component));
exports.default = EditboxFormat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxFZGl0Ym94Rm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUdwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQStDQztRQTdDVyxVQUFJLEdBQWUsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsWUFBTSxHQUFHLENBQUMsQ0FBQzs7SUEwQ2YsQ0FBQztJQXpDRyw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxlQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLGVBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBQ0Qsd0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFDRCwrQkFBTyxHQUFQO1FBQUEsaUJBY0M7UUFiRyxVQUFVLENBQUM7WUFDUCxJQUFJLElBQUksR0FBRyxlQUFLLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksR0FBRyxJQUFJLEVBQUU7Z0JBQy9CLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQTtnQkFDYixJQUFJLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNoQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2lCQUM3QjthQUVKO1lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFWixDQUFDO0lBeENEO1FBREMsUUFBUTtvREFDa0I7SUFKVixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBK0NqQztJQUFELG9CQUFDO0NBL0NELEFBK0NDLENBL0MwQyxFQUFFLENBQUMsU0FBUyxHQStDdEQ7a0JBL0NvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBVdGlscyBmcm9tIFwiLi9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRib3hGb3JtYXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBlZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHlcbiAgICBpc011dGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBudW1iZXIgPSAwO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5lZGl0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcbiAgICB9XG4gICAgb25DaGFuZ2VkKCkge1xuICAgICAgICB2YXIgdGVtcCA9IFV0aWxzLlRvSW50KHRoaXMuZWRpdC5zdHJpbmcpO1xuICAgICAgICB0ZW1wID0gTWF0aC5hYnModGVtcCk7XG4gICAgICAgIHRoaXMuZWRpdC5zdHJpbmcgPSBVdGlscy5Ub1ZORCh0ZW1wKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Gb3JtYXROYW1lKCkge1xuICAgICAgICB0aGlzLmVkaXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TmFtZSh0aGlzLmVkaXQuc3RyaW5nKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRm9ybWF0TmFtZU1hcmsoKSB7XG4gICAgICAgIHRoaXMuZWRpdC5zdHJpbmcgPSBVdGlscy5mb3JtYXROYW1lQmFuayh0aGlzLmVkaXQuc3RyaW5nKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRW5kZWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIHRlbXAgPSBVdGlscy5Ub0ludCh0aGlzLmVkaXQuc3RyaW5nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTXV0aXBsZSAmJiB0ZW1wID4gMTAwMCkge1xuICAgICAgICAgICAgICAgIGxldCBocyA9IDEwMDBcbiAgICAgICAgICAgICAgICBpZiAodGVtcCAlIGhzICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcCA9IHRlbXAgLSAodGVtcCAlIGhzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRlbXAgPSBNYXRoLmFicyh0ZW1wKTtcbiAgICAgICAgICAgIHRoaXMuZWRpdC5zdHJpbmcgPSBVdGlscy5Ub1ZORCh0ZW1wKTtcbiAgICAgICAgfSwgMjAwKTtcblxuICAgIH1cblxuXG59XG4iXX0=