
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3/Slot3Script/Slot3.PopupSelectLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c2c527KvpLq4jyUbajqGto', 'Slot3.PopupSelectLine');
// Slot3/Slot3Script/Slot3.PopupSelectLine.ts

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
        _this.atlasPopup = null;
        _this.listBtn = [];
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
    PopupSelectLine.prototype.onClickOptionLine = function (even, data) {
    };
    PopupSelectLine.prototype.resetSpriteButton = function () {
        var listSpriteName = ["btn_bochon", "btn_chonchan", "btn_chonle", "btn_tatca"];
        for (var i = 0; i < this.listBtn.length; i++) {
            //  cc.log("name sprite==")
            this.listBtn[i].node.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame(listSpriteName[i]);
        }
    };
    PopupSelectLine.prototype.actSelectAll = function (even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = true;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_tatca_on");
    };
    PopupSelectLine.prototype.actSelectEven = function (even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = i % 2 != 0;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_chonchan_on");
    };
    PopupSelectLine.prototype.actSelectOdd = function (even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = i % 2 == 0;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = true;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_chonle_on");
    };
    PopupSelectLine.prototype.actDeselectAll = function (even) {
        this.resetSpriteButton();
        for (var i = 0; i < this.buttonsLine.childrenCount; i++) {
            var node = this.buttonsLine.children[i];
            node[this.SELECTED] = false;
            node.opacity = node[this.SELECTED] ? 255 : 80;
        }
        if (this.onSelectedChanged != null)
            this.onSelectedChanged(this.getSelectedLines());
        this.btnClose.interactable = false;
        even.target.getComponent(cc.Sprite).spriteFrame = this.atlasPopup.getSpriteFrame("btn_bochon_on");
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
    __decorate([
        property(cc.SpriteAtlas)
    ], PopupSelectLine.prototype, "atlasPopup", void 0);
    __decorate([
        property([cc.Button])
    ], PopupSelectLine.prototype, "listBtn", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDNcXFNsb3QzU2NyaXB0XFxTbG90My5Qb3B1cFNlbGVjdExpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVFQUFrRTtBQUU1RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFxQyxtQ0FBTTtJQUEzQztRQUFBLHFFQW1HQztRQWpHRyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixjQUFRLEdBQWMsSUFBSSxDQUFDO1FBRTNCLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQWdCLEVBQUUsQ0FBQztRQUUxQix1QkFBaUIsR0FBbUMsSUFBSSxDQUFDO1FBQ3hDLGNBQVEsR0FBRyxVQUFVLENBQUM7O0lBd0YzQyxDQUFDO0lBdEZHLCtCQUFLLEdBQUw7UUFBQSxpQkFXQztnQ0FWWSxDQUFDO1lBQ04sSUFBSSxJQUFJLEdBQUcsT0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxPQUFLLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDYixJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxLQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSTtvQkFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztnQkFD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QzthQUNyQjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEMsaUJBQU0sT0FBTyxXQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBaEdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0RBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3VEQUNTO0lBRWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29EQUNJO0lBUmpCLGVBQWU7UUFEM0IsT0FBTztPQUNLLGVBQWUsQ0FtRzNCO0lBQUQsc0JBQUM7Q0FuR0QsQUFtR0MsQ0FuR29DLGdCQUFNLEdBbUcxQztBQW5HWSwwQ0FBZTtBQW9HNUIsa0JBQWUsZUFBZSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1bmRsZUNvbnRyb2wgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2xcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vRGlhbG9nXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUG9wdXBTZWxlY3RMaW5lIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidXR0b25zTGluZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlQXRsYXMpXG4gICAgYXRsYXNQb3B1cDogY2MuU3ByaXRlQXRsYXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQnV0dG9uXSlcbiAgICBsaXN0QnRuOiBjYy5CdXR0b25bXSA9IFtdO1xuXG4gICAgb25TZWxlY3RlZENoYW5nZWQ6IChsaW5lczogQXJyYXk8bnVtYmVyPikgPT4gdm9pZCA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkb25seSBTRUxFQ1RFRCA9IFwic2VsZWN0ZWRcIjtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZVt0aGlzLlNFTEVDVEVEXSA9ICFub2RlW3RoaXMuU0VMRUNURURdO1xuICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IG5vZGVbdGhpcy5TRUxFQ1RFRF0gPyAyNTUgOiA4MDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vblNlbGVjdGVkQ2hhbmdlZCAhPSBudWxsKSB0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNsaWNrT3B0aW9uTGluZShldmVuLCBkYXRhKSB7XG5cbiAgICB9XG4gICAgcmVzZXRTcHJpdGVCdXR0b24oKSB7XG4gICAgICAgIGxldCBsaXN0U3ByaXRlTmFtZSA9IFtcImJ0bl9ib2Nob25cIiwgXCJidG5fY2hvbmNoYW5cIiwgXCJidG5fY2hvbmxlXCIsIFwiYnRuX3RhdGNhXCJdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJ0bi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcIm5hbWUgc3ByaXRlPT1cIilcbiAgICAgICAgICAgIHRoaXMubGlzdEJ0bltpXS5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hdGxhc1BvcHVwLmdldFNwcml0ZUZyYW1lKGxpc3RTcHJpdGVOYW1lW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RTZWxlY3RBbGwoZXZlbikge1xuICAgICAgICB0aGlzLnJlc2V0U3ByaXRlQnV0dG9uKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIGV2ZW4udGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hdGxhc1BvcHVwLmdldFNwcml0ZUZyYW1lKFwiYnRuX3RhdGNhX29uXCIpO1xuICAgIH1cblxuICAgIGFjdFNlbGVjdEV2ZW4oZXZlbikge1xuICAgICAgICB0aGlzLnJlc2V0U3ByaXRlQnV0dG9uKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbdGhpcy5TRUxFQ1RFRF0gPSBpICUgMiAhPSAwO1xuICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gbm9kZVt0aGlzLlNFTEVDVEVEXSA/IDI1NSA6IDgwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uU2VsZWN0ZWRDaGFuZ2VkICE9IG51bGwpIHRoaXMub25TZWxlY3RlZENoYW5nZWQodGhpcy5nZXRTZWxlY3RlZExpbmVzKCkpO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIGV2ZW4udGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hdGxhc1BvcHVwLmdldFNwcml0ZUZyYW1lKFwiYnRuX2Nob25jaGFuX29uXCIpO1xuICAgIH1cblxuICAgIGFjdFNlbGVjdE9kZChldmVuKSB7XG4gICAgICAgIHRoaXMucmVzZXRTcHJpdGVCdXR0b24oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnNMaW5lLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJ1dHRvbnNMaW5lLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbm9kZVt0aGlzLlNFTEVDVEVEXSA9IGkgJSAyID09IDA7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldFNlbGVjdGVkTGluZXMoKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgZXZlbi50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmF0bGFzUG9wdXAuZ2V0U3ByaXRlRnJhbWUoXCJidG5fY2hvbmxlX29uXCIpO1xuICAgIH1cblxuICAgIGFjdERlc2VsZWN0QWxsKGV2ZW4pIHtcbiAgICAgICAgdGhpcy5yZXNldFNwcml0ZUJ1dHRvbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuYnV0dG9uc0xpbmUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW3RoaXMuU0VMRUNURURdID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlLm9wYWNpdHkgPSBub2RlW3RoaXMuU0VMRUNURURdID8gMjU1IDogODA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25TZWxlY3RlZENoYW5nZWQgIT0gbnVsbCkgdGhpcy5vblNlbGVjdGVkQ2hhbmdlZCh0aGlzLmdldFNlbGVjdGVkTGluZXMoKSk7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIGV2ZW4udGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5hdGxhc1BvcHVwLmdldFNwcml0ZUZyYW1lKFwiYnRuX2JvY2hvbl9vblwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkTGluZXMoKSB7XG4gICAgICAgIGxldCBsaW5lcyA9IG5ldyBBcnJheTxudW1iZXI+KCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5idXR0b25zTGluZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZVt0aGlzLlNFTEVDVEVEXSA9PSBcInVuZGVmaW5lZFwiIHx8IG5vZGVbdGhpcy5TRUxFQ1RFRF0pIHtcbiAgICAgICAgICAgICAgICBsaW5lcy5wdXNoKGkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGluZXM7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0U2VsZWN0ZWRMaW5lcygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwU2VsZWN0TGluZTsiXX0=