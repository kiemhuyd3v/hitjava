
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/CustomUI.Dropdown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b81d3z5VwhM85GAeyQWdMCP', 'CustomUI.Dropdown');
// Lobby/LobbyScript/Script/common/CustomUI.Dropdown.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.template = null;
        _this.options = [];
        _this.value = 0;
        _this.blocker = null;
        _this.dropdownList = null;
        _this.animating = false;
        return _this;
    }
    Dropdown.prototype.onLoad = function () {
        var _this = this;
        this.template.active = false;
        var parent = this.findParent();
        this.node.on("click", function () {
            if (_this.animating)
                return;
            _this.animating = true;
            _this.blocker = _this.addBlocker(parent);
            _this.dropdownList = cc.instantiate(_this.template);
            _this.dropdownList.getComponent(cc.Widget).enabled = false;
            _this.dropdownList.parent = _this.blocker;
            _this.dropdownList.name = "dropdownList";
            var pos = _this.template.convertToWorldSpaceAR(_this.template.position);
            _this.dropdownList.position = _this.dropdownList.convertToNodeSpaceAR(pos);
            _this.dropdownList.active = true;
            _this.dropdownList.scaleY = 0;
            _this.dropdownList.opacity = 0;
            _this.dropdownList.stopAllActions();
            _this.dropdownList.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.3, 1, 1).easing(cc.easeBackOut()), cc.fadeIn(0.15)), cc.callFunc(function () {
                _this.animating = false;
            })));
            //draw list options
            var scrContent = _this.dropdownList.getComponent(cc.ScrollView).content;
            var itemTemp = scrContent.children[0];
            itemTemp.active = false;
            var _loop_1 = function (i) {
                var item = cc.instantiate(itemTemp);
                item.parent = itemTemp.parent;
                item.active = true;
                var label = item.getComponentInChildren(cc.Label);
                label.string = _this.options[i];
                var check = item.getComponentInChildren(cc.Sprite);
                check.node.active = i == _this.value;
                item.on("click", function () {
                    _this.setValue(i);
                    if (_this.onValueChanged != null)
                        _this.onValueChanged(i);
                    _this.dismiss();
                });
                if (i == _this.value) {
                    var p = scrContent.position;
                    p.y = itemTemp.height * i - itemTemp.height / 2;
                    scrContent.position = p;
                }
            };
            for (var i = 0; i < _this.options.length; i++) {
                _loop_1(i);
            }
        });
    };
    Dropdown.prototype.onEnable = function () {
        if (this.blocker != null)
            this.blocker.destroy();
    };
    Dropdown.prototype.onDestroy = function () {
        if (this.blocker != null)
            this.blocker.destroy();
    };
    Dropdown.prototype.addBlocker = function (parent) {
        var _this = this;
        var blocker = new cc.Node("blocker");
        blocker.parent = parent;
        blocker.addComponent(cc.Button);
        blocker.zIndex = 30000;
        var widget = blocker.addComponent(cc.Widget);
        widget.isAlignTop = true;
        widget.top = 0;
        widget.isAlignBottom = true;
        widget.bottom = 0;
        widget.isAlignLeft = true;
        widget.left = 0;
        widget.isAlignRight = true;
        widget.right = 0;
        // blocker.setSiblingIndex(30000);
        blocker.on("click", function () {
            _this.dismiss();
        });
        cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LOADING, function () {
            //  //Utils.Log("cc.Director.EVENT_BEFORE_SCENE_LOADING");
            _this.onDestroy();
        });
        return blocker;
    };
    Dropdown.prototype.findParent = function (node) {
        if (node === void 0) { node = null; }
        if (node == null)
            node = this.node;
        if (node.parent == null || node.parent instanceof cc.Scene) {
            return node;
        }
        return this.findParent(node.parent);
    };
    Dropdown.prototype.dismiss = function () {
        var _this = this;
        if (this.animating)
            return;
        this.animating = true;
        this.dropdownList.stopAllActions();
        this.dropdownList.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.3, 1, 0).easing(cc.easeBackIn()), cc.sequence(cc.delayTime(0.15), cc.fadeOut(0.15))), cc.callFunc(function () {
            _this.blocker.destroy();
            _this.blocker = null;
            _this.animating = false;
        })));
    };
    Dropdown.prototype.setOptions = function (options) {
        this.options = options;
    };
    Dropdown.prototype.setValue = function (value) {
        this.value = value;
        this.label.string = this.options[this.value];
    };
    Dropdown.prototype.getValue = function () {
        return this.value;
    };
    Dropdown.prototype.getLabelString = function () {
        return this.label.string;
    };
    Dropdown.prototype.setOnValueChange = function (onValueChanged) {
        this.onValueChanged = onValueChanged;
    };
    __decorate([
        property(cc.Label)
    ], Dropdown.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Dropdown.prototype, "template", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ3VzdG9tVUkuRHJvcGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUEwQyxFQUFFLENBQUMsVUFBVSxFQUFyRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQWtCLENBQUM7QUFJOUQ7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEySkM7UUF4SkcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRWpCLGFBQU8sR0FBYSxFQUFFLENBQUM7UUFDdkIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBZ0o5QixDQUFDO0lBN0lHLHlCQUFNLEdBQU47UUFBQSxpQkEyREM7UUExREcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTdCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDbEIsSUFBSSxLQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPO1lBQzNCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2QyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FB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LFNBQVMsR0EySmpEO2tCQTNKb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChjYy5CdXR0b24pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0ZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIG9wdGlvbnM6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSB2YWx1ZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGJsb2NrZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZHJvcGRvd25MaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGFuaW1hdGluZyA9IGZhbHNlO1xuICAgIHByaXZhdGUgb25WYWx1ZUNoYW5nZWQ6IChpZHg6IG51bWJlcikgPT4gdm9pZDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5maW5kUGFyZW50KCk7XG4gICAgICAgIHRoaXMubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ibG9ja2VyID0gdGhpcy5hZGRCbG9ja2VyKHBhcmVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25MaXN0ID0gY2MuaW5zdGFudGlhdGUodGhpcy50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5wYXJlbnQgPSB0aGlzLmJsb2NrZXI7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5uYW1lID0gXCJkcm9wZG93bkxpc3RcIjtcblxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMudGVtcGxhdGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudGVtcGxhdGUucG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkxpc3QucG9zaXRpb24gPSB0aGlzLmRyb3Bkb3duTGlzdC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpO1xuXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkxpc3Quc2NhbGVZID0gMDtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25MaXN0Lm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkxpc3Quc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25MaXN0LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjMsIDEsIDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgpKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuZmFkZUluKDAuMTUpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvL2RyYXcgbGlzdCBvcHRpb25zXG4gICAgICAgICAgICBsZXQgc2NyQ29udGVudCA9IHRoaXMuZHJvcGRvd25MaXN0LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50O1xuICAgICAgICAgICAgbGV0IGl0ZW1UZW1wID0gc2NyQ29udGVudC5jaGlsZHJlblswXTtcbiAgICAgICAgICAgIGl0ZW1UZW1wLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKGl0ZW1UZW1wKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGl0ZW1UZW1wLnBhcmVudDtcbiAgICAgICAgICAgICAgICBpdGVtLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgbGFiZWwgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMub3B0aW9uc1tpXTtcblxuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGl0ZW0uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpO1xuICAgICAgICAgICAgICAgIGNoZWNrLm5vZGUuYWN0aXZlID0gaSA9PSB0aGlzLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaXRlbS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblZhbHVlQ2hhbmdlZChpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwID0gc2NyQ29udGVudC5wb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcC55ID0gaXRlbVRlbXAuaGVpZ2h0ICogaSAtIGl0ZW1UZW1wLmhlaWdodCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHNjckNvbnRlbnQucG9zaXRpb24gPSBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrZXIgIT0gbnVsbCkgdGhpcy5ibG9ja2VyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmJsb2NrZXIgIT0gbnVsbCkgdGhpcy5ibG9ja2VyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEJsb2NrZXIocGFyZW50OiBjYy5Ob2RlKTogY2MuTm9kZSB7XG4gICAgICAgIGxldCBibG9ja2VyID0gbmV3IGNjLk5vZGUoXCJibG9ja2VyXCIpO1xuICAgICAgICBibG9ja2VyLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgYmxvY2tlci5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYmxvY2tlci56SW5kZXggPSAzMDAwMDtcblxuICAgICAgICBsZXQgd2lkZ2V0ID0gYmxvY2tlci5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAgICAgd2lkZ2V0LmlzQWxpZ25Ub3AgPSB0cnVlO1xuICAgICAgICB3aWRnZXQudG9wID0gMDtcbiAgICAgICAgd2lkZ2V0LmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xuICAgICAgICB3aWRnZXQuYm90dG9tID0gMDtcbiAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcbiAgICAgICAgd2lkZ2V0LmxlZnQgPSAwO1xuICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gMDtcbiAgICAgICAgLy8gYmxvY2tlci5zZXRTaWJsaW5nSW5kZXgoMzAwMDApO1xuICAgICAgICBibG9ja2VyLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNjLmRpcmVjdG9yLm9uKGNjLkRpcmVjdG9yLkVWRU5UX0JFRk9SRV9TQ0VORV9MT0FESU5HLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyAgLy9VdGlscy5Mb2coXCJjYy5EaXJlY3Rvci5FVkVOVF9CRUZPUkVfU0NFTkVfTE9BRElOR1wiKTtcbiAgICAgICAgICAgIHRoaXMub25EZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmxvY2tlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmRQYXJlbnQobm9kZTogY2MuTm9kZSA9IG51bGwpOiBjYy5Ob2RlIHtcbiAgICAgICAgaWYgKG5vZGUgPT0gbnVsbCkgbm9kZSA9IHRoaXMubm9kZTtcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09IG51bGwgfHwgbm9kZS5wYXJlbnQgaW5zdGFuY2VvZiBjYy5TY2VuZSkge1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFBhcmVudChub2RlLnBhcmVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNtaXNzKCkge1xuICAgICAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICAgICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5zcGF3bihcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMywgMSwgMCkuZWFzaW5nKGNjLmVhc2VCYWNrSW4oKSksXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuMTUpLCBjYy5mYWRlT3V0KDAuMTUpKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrZXIuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRPcHRpb25zKG9wdGlvbnM6IHN0cmluZ1tdKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMub3B0aW9uc1t0aGlzLnZhbHVlXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VmFsdWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExhYmVsU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmxhYmVsLnN0cmluZztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T25WYWx1ZUNoYW5nZShvblZhbHVlQ2hhbmdlZDogKGlkeDogbnVtYmVyKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZWQgPSBvblZhbHVlQ2hhbmdlZDtcbiAgICB9XG59XG4iXX0=