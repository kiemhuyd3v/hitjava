
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot6/Slot6Script/Slot6.PopupSelectLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4bffDEpcpDGKk75ghK1Kxi', 'Slot6.PopupSelectLine');
// Slot6/Slot6Script/Slot6.PopupSelectLine.ts

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
exports.PopupSelectLine = void 0;
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupSelectLine = /** @class */ (function (_super) {
    __extends(PopupSelectLine, _super);
    function PopupSelectLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buttonsLine = null;
        _this.btnClose = null;
        _this.onSelectedChanged = null;
        _this.SELECTED = "selected";
        return _this;
    }
    PopupSelectLine.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = this_1.buttonsLine.children[i];
            node[this_1.SELECTED] = true;
            node.on("click", function () {
                node[_this.SELECTED] = !node[_this.SELECTED];
                node.opacity = node[_this.SELECTED] ? 255 : 80;
                if (_this.onSelectedChanged != null)
                    _this.onSelectedChanged(_this.getSelectedLines());
                _this.btnClose.interactable = _this.getSelectedLines().length > 0;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            _loop_1(i);
        }
    };
    PopupSelectLine.prototype.actSelectAll = function () {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = true;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
    };
    PopupSelectLine.prototype.actSelectEven = function () {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = i % 2 != 0;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
    };
    PopupSelectLine.prototype.actSelectOdd = function () {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = i % 2 == 0;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
    };
    PopupSelectLine.prototype.actDeselectAll = function () {
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = false;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = false;
    };
    PopupSelectLine.prototype.getSelectedLines = function () {
        var lines = new Array();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            if (typeof node[this.SELECTED] == "undefined" || node[this.SELECTED]) {
                lines.push(i + 1);
            }
        }
        return lines;
    };
    PopupSelectLine.prototype.dismiss = function () {
        if (this.getSelectedLines().length > 0) {
            _super.prototype.dismiss.call(this);
        }
    };
    __decorate([
        property(cc.Node)
    ], PopupSelectLine.prototype, "buttonsLine", void 0);
    __decorate([
        property(cc.Button)
    ], PopupSelectLine.prototype, "btnClose", void 0);
    PopupSelectLine = __decorate([
        ccclass
    ], PopupSelectLine);
    return PopupSelectLine;
}(Dialog_1.default));
exports.PopupSelectLine = PopupSelectLine;
exports.default = PopupSelectLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDZcXFNsb3Q2U2NyaXB0XFxTbG90Ni5Qb3B1cFNlbGVjdExpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFrRTtBQUU1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQyxtQ0FBTTtJQUEzQztRQUFBLHFFQThFQztRQTVFRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLHVCQUFpQixHQUFtQyxJQUFJLENBQUM7UUFDeEMsY0FBUSxHQUFHLFVBQVUsQ0FBQzs7SUF1RTNDLENBQUM7SUFyRUcsK0JBQUssR0FBTDtRQUFBLGlCQVdDO2dDQVZZLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQUssUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNiLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM5QyxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO29CQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRixLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUs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SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUpsQixlQUFlO1FBRDNCLE9BQU87T0FDSyxlQUFlLENBOEUzQjtJQUFELHNCQUFDO0NBOUVELEFBOEVDLENBOUVvQyxnQkFBTSxHQThFMUM7QUE5RVksMENBQWU7QUErRTVCLGtCQUFlLGVBQWUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUG9wdXBTZWxlY3RMaW5lIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidXR0b25zTGluZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIG9uU2VsZWN0ZWRDaGFuZ2VkOiAobGluZXM6IEFycmF5PG51bWJlcj4pID0+IHZvaWQgPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgU0VMRUNURUQgPSBcInNlbGVjdGVkXCI7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnNMaW5lLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJ1dHRvbnNMaW5lLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbm9kZVt0aGlzLlNFTEVDVEVEXSA9IHRydWU7XG4gICAgICAgICAgICBub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSAhbm9kZVt0aGlzLlNFTEVDVEVEXTtcbiAgICAgICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldFNlbGVjdGVkTGluZXMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSB0aGlzLmdldFNlbGVjdGVkTGluZXMoKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RTZWxlY3RBbGwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0U2VsZWN0RXZlbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnNMaW5lLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJ1dHRvbnNMaW5lLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbm9kZVt0aGlzLlNFTEVDVEVEXSA9IGkgJSAyICE9IDA7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldFNlbGVjdGVkTGluZXMoKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhY3RTZWxlY3RPZGQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBpICUgMiA9PSAwO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0RGVzZWxlY3RBbGwoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkTGluZXMoKSB7XG4gICAgICAgIGxldCBsaW5lcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZVt0aGlzLlNFTEVDVEVEXSA9PSBcInVuZGVmaW5lZFwiIHx8IG5vZGVbdGhpcy5TRUxFQ1RFRF0pIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwU2VsZWN0TGluZTsiXX0=