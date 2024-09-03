
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loto/Loto_Script/Loto.ItemNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b398MAPnBPtpaf/K5cX9oJ', 'Loto.ItemNumber');
// Loto/Loto_Script/Loto.ItemNumber.ts

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
var Loto_Controller_1 = require("./Loto.Controller");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelValue = null;
        _this.itemInfo = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initItem = function (numCount, data) {
        this.itemInfo = data;
        this.formatName(numCount);
    };
    NewClass.prototype.formatName = function (numCount) {
        var text = this.itemInfo;
        if (numCount == 10) {
        }
        else if (numCount == 100) {
            if (this.itemInfo < 10) {
                text = "0" + this.itemInfo;
            }
        }
        else {
            if (this.itemInfo < 10) {
                text = "00" + this.itemInfo;
            }
            else if (this.itemInfo < 100) {
                text = "0" + this.itemInfo;
            }
        }
        this.labelValue.string = text;
    };
    NewClass.prototype.choose = function () {
        var state = this.node.getComponent(cc.Toggle).isChecked;
        if (state) {
            Loto_Controller_1.default.instance.addNumberPicked(this.labelValue.string);
        }
        else {
            Loto_Controller_1.default.instance.removeNumberPicked(this.labelValue.string);
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelValue", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG90b1xcTG90b19TY3JpcHRcXExvdG8uSXRlbU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBK0M7QUFFekMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnREM7UUE3Q0csZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFcEIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUEwQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBekNHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsUUFBUSxFQUFFLElBQUk7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLFFBQVE7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLElBQUksUUFBUSxJQUFJLEVBQUUsRUFBRTtTQUVuQjthQUFNLElBQUksUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO2dCQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDOUI7U0FDSjthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRTtnQkFDcEIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQy9CO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7Z0JBQzVCLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM5QjtTQUNKO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUN4RCxJQUFJLEtBQUssRUFBRTtZQUNQLHlCQUFjLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDSCx5QkFBYyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RFO0lBQ0wsQ0FBQztJQTFDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNTO0lBSFgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdENUI7SUFBRCxlQUFDO0NBaERELEFBZ0RDLENBaERxQyxFQUFFLENBQUMsU0FBUyxHQWdEakQ7a0JBaERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvdG9Db250cm9sbGVyIGZyb20gXCIuL0xvdG8uQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbFZhbHVlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpdGVtSW5mbyA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGluaXRJdGVtKG51bUNvdW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtSW5mbyA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5mb3JtYXROYW1lKG51bUNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXROYW1lKG51bUNvdW50KSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLml0ZW1JbmZvO1xyXG4gICAgICAgIGlmIChudW1Db3VudCA9PSAxMCkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKG51bUNvdW50ID09IDEwMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtSW5mbyA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gXCIwXCIgKyB0aGlzLml0ZW1JbmZvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbUluZm8gPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwiMDBcIiArIHRoaXMuaXRlbUluZm87XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pdGVtSW5mbyA8IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IFwiMFwiICsgdGhpcy5pdGVtSW5mbztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhYmVsVmFsdWUuc3RyaW5nID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBjaG9vc2UoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmlzQ2hlY2tlZDtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgTG90b0NvbnRyb2xsZXIuaW5zdGFuY2UuYWRkTnVtYmVyUGlja2VkKHRoaXMubGFiZWxWYWx1ZS5zdHJpbmcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIExvdG9Db250cm9sbGVyLmluc3RhbmNlLnJlbW92ZU51bWJlclBpY2tlZCh0aGlzLmxhYmVsVmFsdWUuc3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=