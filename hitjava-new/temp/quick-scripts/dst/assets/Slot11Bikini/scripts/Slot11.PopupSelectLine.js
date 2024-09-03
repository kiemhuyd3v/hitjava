
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot11Bikini/scripts/Slot11.PopupSelectLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b45c7U5f9dMCYD8yrGhpR+8', 'Slot11.PopupSelectLine');
// Slot11Bikini/scripts/Slot11.PopupSelectLine.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDExQmlraW5pXFxzY3JpcHRzXFxTbG90MTEuUG9wdXBTZWxlY3RMaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFFNUQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBcUMsbUNBQU07SUFBM0M7UUFBQSxxRUE4RUM7UUE1RUcsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQix1QkFBaUIsR0FBbUMsSUFBSSxDQUFDO1FBQ3hDLGNBQVEsR0FBRyxVQUFVLENBQUM7O0lBdUUzQyxDQUFDO0lBckVHLCtCQUFLLEdBQUw7UUFBQSxpQkFXQztnQ0FWWSxDQUFDO1lBQ04sSUFBSSxJQUFJLEdBQUcsT0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFLLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxLQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSTtvQkFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztnQkFDcEYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixF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QUNVO0lBRTVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ087SUFKbEIsZUFBZTtRQUQzQixPQUFPO09BQ0ssZUFBZSxDQThFM0I7SUFBRCxzQkFBQztDQTlFRCxBQThFQyxDQTlFb0MsZ0JBQU0sR0E4RTFDO0FBOUVZLDBDQUFlO0FBK0U1QixrQkFBZSxlQUFlLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwU2VsZWN0TGluZSBleHRlbmRzIERpYWxvZyB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnV0dG9uc0xpbmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQ2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBvblNlbGVjdGVkQ2hhbmdlZDogKGxpbmVzOiBBcnJheTxudW1iZXI+KSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gIW5vZGVbdGhpcy5TRUxFQ1RFRF07XG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gdGhpcy5nZXRTZWxlY3RlZExpbmVzKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0U2VsZWN0QWxsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdFNlbGVjdEV2ZW4oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBpICUgMiAhPSAwO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0U2VsZWN0T2RkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gaSAlIDIgPT0gMDtcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdERlc2VsZWN0QWxsKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldFNlbGVjdGVkTGluZXMoKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZExpbmVzKCkge1xuICAgICAgICBsZXQgbGluZXMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPT0gXCJ1bmRlZmluZWRcIiB8fCBub2RlW3RoaXMuU0VMRUNURURdKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFNlbGVjdGVkTGluZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzdXBlci5kaXNtaXNzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cFNlbGVjdExpbmU7Il19