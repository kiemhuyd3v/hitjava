
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.PopupSelectLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad8628yd4BFt4+9o8RkusFb', 'Slot1.PopupSelectLine');
// Slot1/Slot1Script/Slot1.PopupSelectLine.ts

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
        _this.arrLine = null;
        _this.soundClick = null;
        _this.soundSlotState = null;
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
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
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
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
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
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
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
        if (this.canPlaySound()) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
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
            var arrLineSelected = this.getSelectedLines();
            for (var index = 0; index < 20; index++) {
                this.arrLine.children[index].opacity = 80;
            }
            for (var index = 0; index < arrLineSelected.length; index++) {
                this.arrLine.children[arrLineSelected[index] - 1].opacity = 255;
            }
            if (this.canPlaySound()) {
                cc.audioEngine.play(this.soundClick, false, 1);
            }
            _super.prototype.dismiss.call(this);
        }
    };
    PopupSelectLine.prototype.canPlaySound = function () {
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_1");
        if (soundSave != null) {
            this.soundSlotState = parseInt(soundSave);
        }
        else {
            this.soundSlotState = 1;
        }
        if (this.soundSlotState == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        property(cc.Node)
    ], PopupSelectLine.prototype, "buttonsLine", void 0);
    __decorate([
        property(cc.Button)
    ], PopupSelectLine.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Node)
    ], PopupSelectLine.prototype, "arrLine", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], PopupSelectLine.prototype, "soundClick", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5Qb3B1cFNlbGVjdExpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVFQUFrRTtBQUU1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQyxtQ0FBTTtJQUEzQztRQUFBLHFFQTBIQztRQXhIRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRTlCLHVCQUFpQixHQUFtQyxJQUFJLENBQUM7UUFDeEMsY0FBUSxHQUFHLFVBQVUsQ0FBQzs7SUE4RzNDLENBQUM7SUE1R0csK0JBQUssR0FBTDtRQUFBLGlCQVdDO2dDQVZZLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQUssUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNiLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUM5QyxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJO29CQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMs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LEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsaUJBQU0sT0FBTyxXQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRUQsc0NBQVksR0FBWjtRQUNJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUF2SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt3REFDVTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNPO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNEO0lBUnZCLGVBQWU7UUFEM0IsT0FBTztPQUNLLGVBQWUsQ0EwSDNCO0lBQUQsc0JBQUM7Q0ExSEQsQUEwSEMsQ0ExSG9DLGdCQUFNLEdBMEgxQztBQTFIWSwwQ0FBZTtBQTJINUIsa0JBQWUsZUFBZSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQb3B1cFNlbGVjdExpbmUgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJ1dHRvbnNMaW5lOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkNsb3NlOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFyckxpbmU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgcHJpdmF0ZSBzb3VuZFNsb3RTdGF0ZSA9IG51bGw7XG5cbiAgICBvblNlbGVjdGVkQ2hhbmdlZDogKGxpbmVzOiBBcnJheTxudW1iZXI+KSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEID0gXCJzZWxlY3RlZFwiO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gIW5vZGVbdGhpcy5TRUxFQ1RFRF07XG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gdGhpcy5nZXRTZWxlY3RlZExpbmVzKCkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0U2VsZWN0QWxsKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QbGF5U291bmQoKSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdFNlbGVjdEV2ZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmNhblBsYXlTb3VuZCgpKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBpICUgMiAhPSAwO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0U2VsZWN0T2RkKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QbGF5U291bmQoKSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gaSAlIDIgPT0gMDtcbiAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpKTtcbiAgICAgICAgdGhpcy5idG5DbG9zZS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdERlc2VsZWN0QWxsKCkge1xuICAgICAgICBpZiAodGhpcy5jYW5QbGF5U291bmQoKSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldFNlbGVjdGVkTGluZXMoKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTZWxlY3RlZExpbmVzKCkge1xuICAgICAgICBsZXQgbGluZXMgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPT0gXCJ1bmRlZmluZWRcIiB8fCBub2RlW3RoaXMuU0VMRUNURURdKSB7XG4gICAgICAgICAgICAgICAgbGluZXMucHVzaChpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbmVzO1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldFNlbGVjdGVkTGluZXMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgYXJyTGluZVNlbGVjdGVkID0gdGhpcy5nZXRTZWxlY3RlZExpbmVzKCk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAyMDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyTGluZS5jaGlsZHJlbltpbmRleF0ub3BhY2l0eSA9IDgwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyTGluZVNlbGVjdGVkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyTGluZS5jaGlsZHJlblthcnJMaW5lU2VsZWN0ZWRbaW5kZXhdIC0gMV0ub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNhblBsYXlTb3VuZCgpKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhblBsYXlTb3VuZCgpIHtcbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNvdW5kX1Nsb3RfMVwiKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cFNlbGVjdExpbmU7Il19