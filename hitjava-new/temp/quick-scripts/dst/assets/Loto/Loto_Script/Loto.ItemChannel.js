
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Loto/Loto_Script/Loto.ItemChannel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4b03Zm9+hMQpmh+Zyf2xn9', 'Loto.ItemChannel');
// Loto/Loto_Script/Loto.ItemChannel.ts

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
        _this.labelName = null;
        _this.itemInfo = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.initItem = function (data) {
        this.itemInfo = data;
        this.labelName.string = data.name;
    };
    NewClass.prototype.itemClicked = function () {
        //  cc.log("Loto.ItemLocation itemClicked : ", this.itemInfo);
        Loto_Controller_1.default.instance.onBetChannelSelected(this.itemInfo.from, this.itemInfo.id);
    };
    NewClass.prototype.updateInfo = function (newFrom) {
        this.itemInfo.from = newFrom;
        //  cc.log("Loto.ItemLocation itemClicked : ", this.itemInfo);
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "labelName", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG90b1xcTG90b19TY3JpcHRcXExvdG8uSXRlbUNoYW5uZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQStDO0FBQ3pDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0JDO1FBNUJHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFbkIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUF5QnhCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsSUFBSTtRQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQUVELDhCQUFXLEdBQVg7UUFDSSw4REFBOEQ7UUFDOUQseUJBQWMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsNkJBQVUsR0FBVixVQUFXLE9BQU87UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDN0IsOERBQThEO0lBQ2xFLENBQUM7SUF6QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDUTtJQUhWLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErQjVCO0lBQUQsZUFBQztDQS9CRCxBQStCQyxDQS9CcUMsRUFBRSxDQUFDLFNBQVMsR0ErQmpEO2tCQS9Cb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb3RvQ29udHJvbGxlciBmcm9tIFwiLi9Mb3RvLkNvbnRyb2xsZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbE5hbWU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGl0ZW1JbmZvID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEl0ZW0oZGF0YSkge1xyXG4gICAgICAgIHRoaXMuaXRlbUluZm8gPSBkYXRhO1xyXG4gICAgICAgIHRoaXMubGFiZWxOYW1lLnN0cmluZyA9IGRhdGEubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBpdGVtQ2xpY2tlZCgpIHtcclxuICAgICAgICAvLyAgY2MubG9nKFwiTG90by5JdGVtTG9jYXRpb24gaXRlbUNsaWNrZWQgOiBcIiwgdGhpcy5pdGVtSW5mbyk7XHJcbiAgICAgICAgTG90b0NvbnRyb2xsZXIuaW5zdGFuY2Uub25CZXRDaGFubmVsU2VsZWN0ZWQodGhpcy5pdGVtSW5mby5mcm9tLCB0aGlzLml0ZW1JbmZvLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbmZvKG5ld0Zyb20pIHtcclxuICAgICAgICB0aGlzLml0ZW1JbmZvLmZyb20gPSBuZXdGcm9tO1xyXG4gICAgICAgIC8vICBjYy5sb2coXCJMb3RvLkl0ZW1Mb2NhdGlvbiBpdGVtQ2xpY2tlZCA6IFwiLCB0aGlzLml0ZW1JbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==