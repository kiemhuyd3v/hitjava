
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8ChooseLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43fd7c1dypE9p/N4WIGtJGb', 'Slot8ChooseLine');
// Slot8/Slot8Script/Slot8ChooseLine.ts

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
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot8ChooseLine = /** @class */ (function (_super) {
    __extends(Slot8ChooseLine, _super);
    function Slot8ChooseLine() {
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
    Slot8ChooseLine.prototype.start = function () {
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
    Slot8ChooseLine.prototype.getLineSelected = function () {
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
    Slot8ChooseLine.prototype.selectAll = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = true;
            // this.listToggle[i].node.opacity =  this.listToggle[i].node[this.SELECTED] ? 255 : 80;
            this.listToggle[i].isChecked = true;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot8ChooseLine.prototype.deSelectAll = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = false;
            // this.listToggle[i].node.opacity =  this.listToggle[i].node[this.SELECTED] ? 255 : 80;
            this.listToggle[i].isChecked = false;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot8ChooseLine.prototype.selectEven = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = i % 2 != 0;
            // this.listToggle[i].node.opacity = this.listToggle[i].node[this.SELECTED] ? 255 : 80;        
            this.listToggle[i].isChecked = i % 2 !== 0;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot8ChooseLine.prototype.selectOdd = function () {
        for (var i = 0; i < this.listToggle.length; i++) {
            this.listToggle[i].node[this.SELECTED] = i % 2 == 0;
            // this.listToggle[i].node.opacity = this.listToggle[i].node[this.SELECTED] ? 255 : 80;        
            this.listToggle[i].isChecked = i % 2 == 0;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getLineSelected());
    };
    Slot8ChooseLine.prototype.showPopup = function (arrLineSelected) {
        _super.prototype.show.call(this);
        // Tween.showPopup(this.nodeBox,this.nodeBox.parent);
        for (var i = 0; i < this.listToggle.length; i++) {
            var node = this.listToggle[i];
            this.listToggle[i].isChecked = this.listToggle[i].node[this.SELECTED];
            // this.listToggle[i].node.opacity = this.listToggle[i].node[this.SELECTED] ? 255 : 80;        
        }
    };
    Slot8ChooseLine.prototype.hide = function () {
        Tween_1.default.hidePopup(this.nodeBox, this.nodeBox.parent, false);
    };
    __decorate([
        property(cc.Node)
    ], Slot8ChooseLine.prototype, "nodeBox", void 0);
    __decorate([
        property(cc.Button)
    ], Slot8ChooseLine.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8ChooseLine.prototype, "lineParent", void 0);
    Slot8ChooseLine = __decorate([
        ccclass
    ], Slot8ChooseLine);
    return Slot8ChooseLine;
}(Dialog_1.default));
exports.default = Slot8ChooseLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OENob29zZUxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBQ2xFLHFFQUFnRTtBQUUxRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBTTtJQUFuRDtRQUFBLHFFQXVHQztRQXBHRyxhQUFPLEdBQVcsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBQ1osY0FBUSxHQUFHLFVBQVUsQ0FBQztRQUV2Qyx1QkFBaUIsR0FBbUMsSUFBSSxDQUFDOztRQTBGekQsaUJBQWlCO0lBQ3JCLENBQUM7SUExRkcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZiwrQkFBSyxHQUFMO1FBQUEsaUJBYUM7Z0NBWlcsQ0FBQztZQUNMLElBQUksSUFBSSxHQUFHLE9BQUssVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQyxPQUFLLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQUssUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNiLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxpREFBaUQ7Z0JBQ2pELDBDQUEwQztnQkFDMUMsSUFBRyxLQUFJLENBQUMsaUJB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TyxDQUFDLE1BQU0sRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBL0ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ0s7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUNTO0lBUFYsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXVHbkM7SUFBRCxzQkFBQztDQXZHRCxBQXVHQyxDQXZHNEMsZ0JBQU0sR0F1R2xEO2tCQXZHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90OENob29zZUxpbmUgZXh0ZW5kcyBEaWFsb2cge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveDpjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkNsb3NlOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmVQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgbGlzdFRvZ2dsZTogY2MuVG9nZ2xlW10gPSBbXTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgb25TZWxlY3RlZENoYW5nZWQ6IChsaW5lczogQXJyYXk8bnVtYmVyPikgPT4gdm9pZCA9IG51bGw7XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGluZVBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saW5lUGFyZW50LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHRvZ2dsZSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlRvZ2dsZSk7XG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGUucHVzaCh0b2dnbGUpO1xuICAgICAgICAgICAgbm9kZVt0aGlzLlNFTEVDVEVEXSA9IHRydWU7XG4gICAgICAgICAgICBub2RlLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gIW5vZGVbdGhpcy5TRUxFQ1RFRF07XG4gICAgICAgICAgICAgICAgLy8gbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICAgICAgICAgIC8vIHRvZ2dsZS5pc0NoZWNrZWQgPSBub2RlW3RoaXMuU0VMRUNURURdO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldExpbmVTZWxlY3RlZCgpKTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgXG5cbiAgICBnZXRMaW5lU2VsZWN0ZWQoKSB7XG4gICAgICAgIGxldCBsaW5lcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RUb2dnbGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGU7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPT0gXCJ1bmRlZmluZWRcIiB8fCBub2RlW3RoaXMuU0VMRUNURURdKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSBsaW5lcy5sZW5ndGggPiAwO1xuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0VG9nZ2xlLmxlbmd0aDsgaSsrKSB7ICAgXG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZVt0aGlzLlNFTEVDVEVEXSA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZS5vcGFjaXR5ID0gIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGVbaV0uaXNDaGVja2VkID0gdHJ1ZTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldExpbmVTZWxlY3RlZCgpKTtcbiAgICB9XG5cbiAgICBkZVNlbGVjdEFsbCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFRvZ2dsZS5sZW5ndGg7IGkrKykgeyAgIFxuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlLm9wYWNpdHkgPSAgdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgICAgIHRoaXMubGlzdFRvZ2dsZVtpXS5pc0NoZWNrZWQgPSBmYWxzZTsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldExpbmVTZWxlY3RlZCgpKTtcbiAgICB9XG5cbiAgICBzZWxlY3RFdmVuKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0VG9nZ2xlLmxlbmd0aDsgaSsrKSB7ICAgIFxuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBpICUgMiAhPSAwO1xuICAgICAgICAgICAgLy8gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGUub3BhY2l0eSA9IHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7ICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubGlzdFRvZ2dsZVtpXS5pc0NoZWNrZWQgPSBpICUgMiAhPT0gMDsgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldExpbmVTZWxlY3RlZCgpKTtcbiAgICB9XG5cbiAgICBzZWxlY3RPZGQoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RUb2dnbGUubGVuZ3RoOyBpKyspIHsgICAgXG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZVt0aGlzLlNFTEVDVEVEXSA9IGkgJSAyID09IDA7XG4gICAgICAgICAgICAvLyB0aGlzLmxpc3RUb2dnbGVbaV0ubm9kZS5vcGFjaXR5ID0gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDsgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5saXN0VG9nZ2xlW2ldLmlzQ2hlY2tlZCA9IGkgJSAyID09IDA7ICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRMaW5lU2VsZWN0ZWQoKSk7XG4gICAgfVxuXG4gICAgc2hvd1BvcHVwKGFyckxpbmVTZWxlY3RlZCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIC8vIFR3ZWVuLnNob3dQb3B1cCh0aGlzLm5vZGVCb3gsdGhpcy5ub2RlQm94LnBhcmVudCk7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdFRvZ2dsZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxpc3RUb2dnbGVbaV07XG4gICAgICAgICAgICB0aGlzLmxpc3RUb2dnbGVbaV0uaXNDaGVja2VkID0gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGVbdGhpcy5TRUxFQ1RFRF07ICAgIFxuICAgICAgICAgICAgLy8gdGhpcy5saXN0VG9nZ2xlW2ldLm5vZGUub3BhY2l0eSA9IHRoaXMubGlzdFRvZ2dsZVtpXS5ub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7ICAgICAgICBcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICBcbiAgICAgICAgVHdlZW4uaGlkZVBvcHVwKHRoaXMubm9kZUJveCx0aGlzLm5vZGVCb3gucGFyZW50LGZhbHNlKTtcbiAgICB9XG5cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==