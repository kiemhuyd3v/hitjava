
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Payment/LobbyChoseBank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82e7cHeU+lHOaWOjtarMnfq', 'LobbyChoseBank');
// Lobby/LobbyScript/Payment/LobbyChoseBank.ts

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
var App_1 = require("../Script/common/App");
var Dialog_1 = require("../Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LobbyChoseBank = /** @class */ (function (_super) {
    __extends(LobbyChoseBank, _super);
    function LobbyChoseBank() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeContent = null;
        _this.prefabItem = null;
        _this.nodeBox = null;
        _this.lbTitle = null;
        return _this;
    }
    LobbyChoseBank.prototype.init = function (tabWell, banks, callback, isWithDraw) {
        var _this = this;
        if (isWithDraw === void 0) { isWithDraw = false; }
        this.node.active = true;
        this.nodeContent.removeAllChildren();
        this.lbTitle.string = App_1.default.instance.getTextLang('txt_select_bank').toUpperCase();
        if (tabWell == "clickpay") {
            for (var i = 0; i < banks.length; i++) {
                if (banks[i].stat == 1) {
                    var nodeItem = cc.instantiate(this.prefabItem);
                    nodeItem.parent = this.nodeContent;
                    nodeItem.getComponent("ItemChoseBank").init(tabWell, banks[i], function (dataBank) {
                        callback(dataBank);
                        _this.dismiss();
                    });
                }
            }
        }
        else {
            for (var i = 0; i < banks.length; i++) {
                if (banks[i].status == 1) {
                    var nodeItem = cc.instantiate(this.prefabItem);
                    nodeItem.parent = this.nodeContent;
                    nodeItem.getComponent("ItemChoseBank").init(tabWell, banks[i], function (dataBank) {
                        callback(dataBank);
                        _this.dismiss();
                    });
                }
            }
        }
        if (tabWell == "payasec") {
            this.lbTitle.string = App_1.default.instance.getTextLang('txt_select_card').toUpperCase();
        }
    };
    LobbyChoseBank.prototype.onBtnExit = function () {
        this.dismiss();
    };
    __decorate([
        property(cc.Node)
    ], LobbyChoseBank.prototype, "nodeContent", void 0);
    __decorate([
        property(cc.Node)
    ], LobbyChoseBank.prototype, "prefabItem", void 0);
    __decorate([
        property(cc.Node)
    ], LobbyChoseBank.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Label)
    ], LobbyChoseBank.prototype, "lbTitle", void 0);
    LobbyChoseBank = __decorate([
        ccclass
    ], LobbyChoseBank);
    return LobbyChoseBank;
}(Dialog_1.default));
exports.default = LobbyChoseBank;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxQYXltZW50XFxMb2JieUNob3NlQmFuay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRiw0Q0FBdUM7QUFDdkMsa0RBQTZDO0FBR3ZDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFNO0lBQWxEO1FBQUEscUVBb0RDO1FBakRHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQzs7SUF3QzdCLENBQUM7SUF0Q0csNkJBQUksR0FBSixVQUFLLE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQWtCO1FBQWpELGlCQStCQztRQS9COEIsMkJBQUEsRUFBQSxrQkFBa0I7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hGLElBQUksT0FBTyxJQUFJLFVBQVUsRUFBRTtZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDcEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztvQkFDbkMsUUFBUSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFDLFFBQVE7d0JBQ3BFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDbkIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsQ0FBQztpQkFDTjthQUNKO1NBQ0o7YUFDSTtZQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNuQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN0QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDL0MsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNuQyxRQUFRLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUMsUUFBUTt3QkFDcEUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNuQixLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ25CLENBQUMsQ0FBQyxDQUFDO2lCQUNOO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25GO0lBQ0wsQ0FBQztJQUlELGtDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQWhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ1M7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO21EQUNNO0lBWlIsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQW9EbEM7SUFBRCxxQkFBQztDQXBERCxBQW9EQyxDQXBEMkMsZ0JBQU0sR0FvRGpEO2tCQXBEb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgQXBwIGZyb20gXCIuLi9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYmJ5Q2hvc2VCYW5rIGV4dGVuZHMgRGlhbG9nIHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVDb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByZWZhYkl0ZW06IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJUaXRsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgaW5pdCh0YWJXZWxsLCBiYW5rcywgY2FsbGJhY2ssIGlzV2l0aERyYXcgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlQ29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2VsZWN0X2JhbmsnKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBpZiAodGFiV2VsbCA9PSBcImNsaWNrcGF5XCIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYmFua3NbaV0uc3RhdCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlSXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJdGVtLnBhcmVudCA9IHRoaXMubm9kZUNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJdGVtLmdldENvbXBvbmVudChcIkl0ZW1DaG9zZUJhbmtcIikuaW5pdCh0YWJXZWxsLCBiYW5rc1tpXSwgKGRhdGFCYW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhQmFuayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChiYW5rc1tpXS5zdGF0dXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZUl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBub2RlSXRlbS5wYXJlbnQgPSB0aGlzLm5vZGVDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBub2RlSXRlbS5nZXRDb21wb25lbnQoXCJJdGVtQ2hvc2VCYW5rXCIpLmluaXQodGFiV2VsbCwgYmFua3NbaV0sIChkYXRhQmFuaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YUJhbmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiV2VsbCA9PSBcInBheWFzZWNcIikge1xuICAgICAgICAgICAgdGhpcy5sYlRpdGxlLnN0cmluZyA9IEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3NlbGVjdF9jYXJkJykudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBvbkJ0bkV4aXQoKSB7XG4gICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgIH1cbn1cbiJdfQ==