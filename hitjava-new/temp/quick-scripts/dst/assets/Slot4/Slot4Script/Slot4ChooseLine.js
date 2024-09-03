
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4ChooseLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94b5dmpihNOzLDCDOztSL8j', 'Slot4ChooseLine');
// Slot4/Slot4Script/Slot4ChooseLine.ts

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
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot4ChooseLine = /** @class */ (function (_super) {
    __extends(Slot4ChooseLine, _super);
    function Slot4ChooseLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeBox = null;
        _this.btnClose = null;
        _this.lineParent = null;
        _this.listToggle = [];
        _this.SELECTED = "selected";
        _this.onSelectedChanged = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Slot4ChooseLine.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = this_1.lineParent.children[i];
            var toggle = node.getComponent(cc.Toggle);
            this_1.listToggle.push(toggle);
            node[this_1.SELECTED] = true;
            node.on('click', function () {
                node[_this.SELECTED] = !node[_this.SELECTED];
                // node.opacity = node[this.SELECTED] ? 255 : 80;
                // toggle.isChecked = node[this.SELECTED];
                if (_this.onSelectedChanged != null)
                    _this.onSelectedChanged(_this.getLineSelected());
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.lineParent.childrenCount; i++) {
            _loop_1(i);
        }
    };
    Slot4ChooseLine.prototype.getLineSelected = function () {
        var lines = new Array();
        for (var i = 0; i < this.listToggle.length; i++) {
            var node = this.listToggle[i].node;
            if (typeof node[this.SELECTED] == "undefined" || node[this.SELECTED]) {
                lines.push(i + 1);
            }
        }
        this.btnClose.interactable = lines.length > 0;
        return lines;
    };
    Slot4ChooseLine.prototype.selectAll = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = true;
            // this.listToggle[i].node.opacity =  this.listToggle[i].node[this.SELECTED] ? 255 : 80;
            this.listToggle[i].isChecked = true;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot4ChooseLine.prototype.deSelectAll = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = false;
            // this.listToggle[i].node.opacity =  this.listToggle[i].node[this.SELECTED] ? 255 : 80;
            this.listToggle[i].isChecked = false;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot4ChooseLine.prototype.selectEven = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = i % 2 != 0;
            // this.listToggle[i].node.opacity = this.listToggle[i].node[this.SELECTED] ? 255 : 80;        
            this.listToggle[i].isChecked = i % 2 !== 0;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot4ChooseLine.prototype.selectOdd = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = i % 2 == 0;
            // this.listToggle[i].node.opacity = this.listToggle[i].node[this.SELECTED] ? 255 : 80;        
            this.listToggle[i].isChecked = i % 2 == 0;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot4ChooseLine.prototype.show = function (arrLineSelected) {
        Tween_1.default.showPopup(this.nodeBox, this.nodeBox.parent);
        for (var i = 0; i < this.listToggle.length; i++) {
            var node = this.listToggle[i];
            this.listToggle[i].isChecked = this.listToggle[i].node[this.SELECTED];
            // this.listToggle[i].node.opacity = this.listToggle[i].node[this.SELECTED] ? 255 : 80;        
        }
    };
    Slot4ChooseLine.prototype.hide = function () {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
    };
    __decorate([
        property(cc.Node)
    ], Slot4ChooseLine.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Button)
    ], Slot4ChooseLine.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4ChooseLine.prototype, "lineParent", void 0);
    Slot4ChooseLine = __decorate([
        ccclass
    ], Slot4ChooseLine);
    return Slot4ChooseLine;
}(cc.Component));
exports.default = Slot4ChooseLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NENob29zZUxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBRTFELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBcUdDO1FBbEdHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFnQixFQUFFLENBQUM7UUFDWixjQUFRLEdBQUcsVUFBVSxDQUFDO1FBRXZDLHVCQUFpQixHQUFtQyxJQUFJLENBQUM7O1FBd0Z6RCxpQkFBaUI7SUFDckIsQ0FBQztJQXhGRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLCtCQUFLLEdBQUw7UUFBQSxpQkFhQztnQ0FaVyxDQUFDO1lBQ0wsSUFBSSxJQUFJLEdBQUcsT0FBSyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE9BQUssVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBSyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzNDLGlEQUFpRDtnQkFDakQsMENBQTBDO2dCQUMxQyxJQUFHLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJ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LENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUE3RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSztJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1M7SUFQVixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBcUduQztJQUFELHNCQUFDO0NBckdELEFBcUdDLENBckc0QyxFQUFFLENBQUMsU0FBUyxHQXFHeEQ7a0JBckdvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDRDaG9vc2VMaW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVCb3g6Y2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5lUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIGxpc3RUb2dnbGU6IGNjLlRvZ2dsZVtdID0gW107XG4gICAgcHJpdmF0ZSByZWFkb25seSBTRUxFQ1RFRCA9IFwic2VsZWN0ZWRcIjtcblxuICAgIG9uU2VsZWN0ZWRDaGFuZ2VkOiAobGluZXM6IEFycmF5PG51bWJlcj4pID0+IHZvaWQgPSBudWxsO1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVQYXJlbnQuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGluZVBhcmVudC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCB0b2dnbGUgPSBub2RlLmdldENvbXBvbmVudChjYy5Ub2dnbGUpO1xuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlLnB1c2godG9nZ2xlKTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLlNFTEVDVEVEXSA9ICFub2RlW3RoaXMuU0VMRUNURURdO1xuICAgICAgICAgICAgICAgIC8vIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgICAgICAgICAvLyB0b2dnbGUuaXNDaGVja2VkID0gbm9kZVt0aGlzLlNFTEVDVEVEXTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRMaW5lU2VsZWN0ZWQoKSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgIFxuXG4gICAgZ2V0TGluZVNlbGVjdGVkKCkge1xuICAgICAgICBsZXQgbGluZXMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0VG9nZ2xlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlW3RoaXMuU0VMRUNURURdID09IFwidW5kZWZpbmVkXCIgfHwgbm9kZVt0aGlzLlNFTEVDVEVEXSkge1xuICAgICAgICAgICAgICAgIGxpbmVzLnB1c2goaSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gbGluZXMubGVuZ3RoID4gMDtcbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cblxuICAgIHNlbGVjdEFsbCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFRvZ2dsZS5sZW5ndGg7IGkrKykgeyAgIFxuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF0gPSB0cnVlO1xuICAgICAgICAgICAgLy8gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGUub3BhY2l0eSA9ICB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLmlzQ2hlY2tlZCA9IHRydWU7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRMaW5lU2VsZWN0ZWQoKSk7XG4gICAgfVxuXG4gICAgZGVTZWxlY3RBbGwoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RUb2dnbGUubGVuZ3RoOyBpKyspIHsgICBcbiAgICAgICAgICAgIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZS5vcGFjaXR5ID0gIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGVbaV0uaXNDaGVja2VkID0gZmFsc2U7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRMaW5lU2VsZWN0ZWQoKSk7XG4gICAgfVxuXG4gICAgc2VsZWN0RXZlbigpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFRvZ2dsZS5sZW5ndGg7IGkrKykgeyAgICBcbiAgICAgICAgICAgIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID0gaSAlIDIgIT0gMDtcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlLm9wYWNpdHkgPSB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwOyAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGVbaV0uaXNDaGVja2VkID0gaSAlIDIgIT09IDA7ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRMaW5lU2VsZWN0ZWQoKSk7XG4gICAgfVxuXG4gICAgc2VsZWN0T2RkKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0VG9nZ2xlLmxlbmd0aDsgaSsrKSB7ICAgIFxuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBpICUgMiA9PSAwO1xuICAgICAgICAgICAgLy8gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGUub3BhY2l0eSA9IHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGlzdFRvZ2dsZVtpXS5pc0NoZWNrZWQgPSBpICUgMiA9PSAwOyAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0TGluZVNlbGVjdGVkKCkpO1xuICAgIH1cblxuICAgIHNob3coYXJyTGluZVNlbGVjdGVkKSB7XG4gICAgICAgIFR3ZWVuLnNob3dQb3B1cCh0aGlzLm5vZGVCb3gsdGhpcy5ub2RlQm94LnBhcmVudCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RUb2dnbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0VG9nZ2xlW2ldO1xuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLmlzQ2hlY2tlZCA9IHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdOyAgICBcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlLm9wYWNpdHkgPSB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwOyAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgXG4gICAgICAgIFR3ZWVuLmhpZGVQb3B1cCh0aGlzLm5vZGVCb3gsdGhpcy5ub2RlQm94LnBhcmVudCxmYWxzZSk7XG4gICAgfVxuXG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=