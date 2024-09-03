
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/Dropdown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff7afpi+zdIq7WTcDLQtlsb', 'Dropdown');
// Lobby/LobbyScript/Script/common/Dropdown.ts

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
var DropdownItem_1 = require("./DropdownItem");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.label = null;
        _this_1.itemTemplate = null;
        _this_1.value = 0;
        _this_1.data = [];
        _this_1.items = [];
        return _this_1;
    }
    Dropdown.prototype.start = function () {
        this.itemTemplate.node.active = false;
    };
    Dropdown.prototype.show = function () {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.runAction(cc.fadeIn(0.2));
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].checkMark.active = this.items[i].idx == this.value;
        }
    };
    Dropdown.prototype.setOptions = function (data) {
        if (data === void 0) { data = []; }
        this.data = data;
        var childen = this.itemTemplate.node.parent.children;
        for (var i = 0; i < childen.length; i++) {
            childen[i].active = false;
        }
        this.items = [];
        for (var i = 0; i < data.length; i++) {
            var item = this.getItem();
            item.idx = i;
            item.label.string = data[i];
            item.checkMark.active = i == this.value;
            this.items.push(item);
        }
    };
    Dropdown.prototype.dismiss = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    Dropdown.prototype.setOnValueChange = function (callback) {
        this.onValueChange = callback;
    };
    Dropdown.prototype.setValue = function (value) {
        if (value < this.data.length) {
            this.value = value;
            this.label.string = this.data[this.value];
        }
        else {
            this.value = 0;
        }
    };
    Dropdown.prototype.getValue = function () {
        return this.value;
    };
    Dropdown.prototype.getItem = function () {
        var _this_1 = this;
        var node = null;
        var childen = this.itemTemplate.node.parent.children;
        for (var i = 0; i < childen.length; i++) {
            if (!childen[i].active && childen[i] != this.itemTemplate.node)
                node = childen[i];
        }
        if (node == null) {
            node = cc.instantiate(this.itemTemplate.node);
            node.parent = this.itemTemplate.node.parent;
            node.on("click", function (target) {
                _this_1.value = target.getComponent(DropdownItem_1.default).idx;
                _this_1.label.string = _this_1.data[_this_1.value];
                if (_this_1.onValueChange)
                    _this_1.onValueChange(_this_1.value);
                _this_1.dismiss();
            }, this);
        }
        node.active = true;
        node.zIndex = this.getLastZIndex();
        return node.getComponent(DropdownItem_1.default);
    };
    Dropdown.prototype.getLastZIndex = function () {
        var c = 0;
        var childen = this.itemTemplate.node.parent.children;
        for (var i = 1; i < childen.length; i++) {
            if (childen[i].active)
                c++;
        }
        return c;
    };
    __decorate([
        property(cc.Label)
    ], Dropdown.prototype, "label", void 0);
    __decorate([
        property(DropdownItem_1.default)
    ], Dropdown.prototype, "itemTemplate", void 0);
    Dropdown = __decorate([
        ccclass,
        requireComponent(cc.Button)
    ], Dropdown);
    return Dropdown;
}(cc.Component));
exports.default = Dropdown;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcRHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBRTFDLG9CQUFvQjtBQUNwQixrRkFBa0Y7QUFDbEYseUZBQXlGO0FBQ3pGLG1CQUFtQjtBQUNuQiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBQ25HLDhCQUE4QjtBQUM5Qiw0RkFBNEY7QUFDNUYsbUdBQW1HO0FBRTdGLElBQUEsS0FBMEMsRUFBRSxDQUFDLFVBQVUsRUFBckQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFDO0FBSTlEO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEsdUVBZ0dDO1FBOUZHLGFBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsb0JBQVksR0FBaUIsSUFBSSxDQUFDO1FBRTFCLGFBQUssR0FBVyxDQUFDLENBQUM7UUFHbEIsWUFBSSxHQUFrQixFQUFFLENBQUM7UUFDekIsYUFBSyxHQUF3QixFQUFFLENBQUM7O0lBcUY1QyxDQUFDO0lBbkZVLHdCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFFTSx1QkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lB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QUMsQ0FBQyxDQUFDLE1BQU07Z0JBQUUsQ0FBQyxFQUFFLENBQUM7U0FDOUI7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUE3RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2tEQUNXO0lBTGpCLFFBQVE7UUFGNUIsT0FBTztRQUNQLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCxRQUFRLENBZ0c1QjtJQUFELGVBQUM7Q0FoR0QsQUFnR0MsQ0FoR3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ0dqRDtrQkFoR29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gXCIuL0Ryb3Bkb3duSXRlbVwiO1xuXG4vLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQHJlcXVpcmVDb21wb25lbnQoY2MuQnV0dG9uKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KERyb3Bkb3duSXRlbSlcbiAgICBpdGVtVGVtcGxhdGU6IERyb3Bkb3duSXRlbSA9IG51bGw7XG5cbiAgICBwcml2YXRlIHZhbHVlOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlOiAoaWR4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBkYXRhOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSBpdGVtczogQXJyYXk8RHJvcGRvd25JdGVtPiA9IFtdO1xuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaG93KCkge1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLmZhZGVJbigwLjIpKTtcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpXS5jaGVja01hcmsuYWN0aXZlID0gdGhpcy5pdGVtc1tpXS5pZHggPT0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPcHRpb25zKGRhdGE6IEFycmF5PHN0cmluZz4gPSBbXSkge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB2YXIgY2hpbGRlbiA9IHRoaXMuaXRlbVRlbXBsYXRlLm5vZGUucGFyZW50LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKCk7XG4gICAgICAgICAgICBpdGVtLmlkeCA9IGk7XG4gICAgICAgICAgICBpdGVtLmxhYmVsLnN0cmluZyA9IGRhdGFbaV07XG4gICAgICAgICAgICBpdGVtLmNoZWNrTWFyay5hY3RpdmUgPSBpID09IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzbWlzcygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5mYWRlT3V0KDAuMiksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE9uVmFsdWVDaGFuZ2UoY2FsbGJhY2s6IChpZHg6IG51bWJlcikgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICBpZiAodmFsdWUgPCB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuZGF0YVt0aGlzLnZhbHVlXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SXRlbSgpOiBEcm9wZG93bkl0ZW0ge1xuICAgICAgICB2YXIgbm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgICAgIHZhciBjaGlsZGVuID0gdGhpcy5pdGVtVGVtcGxhdGUubm9kZS5wYXJlbnQuY2hpbGRyZW47XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFjaGlsZGVuW2ldLmFjdGl2ZSAmJiBjaGlsZGVuW2ldICE9IHRoaXMuaXRlbVRlbXBsYXRlLm5vZGUpIG5vZGUgPSBjaGlsZGVuW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1UZW1wbGF0ZS5ub2RlKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtVGVtcGxhdGUubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgKHRhcmdldDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRhcmdldC5nZXRDb21wb25lbnQoRHJvcGRvd25JdGVtKS5pZHg7XG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLmRhdGFbdGhpcy52YWx1ZV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZSkgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlLnpJbmRleCA9IHRoaXMuZ2V0TGFzdFpJbmRleCgpO1xuICAgICAgICByZXR1cm4gbm9kZS5nZXRDb21wb25lbnQoRHJvcGRvd25JdGVtKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExhc3RaSW5kZXgoKSB7XG4gICAgICAgIHZhciBjID0gMDtcbiAgICAgICAgdmFyIGNoaWxkZW4gPSB0aGlzLml0ZW1UZW1wbGF0ZS5ub2RlLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjaGlsZGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRlbltpXS5hY3RpdmUpIGMrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYztcbiAgICB9XG59XG4iXX0=