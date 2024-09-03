
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Lobby/LobbyScript/Script/common/CustomUI.PageView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ceabdBtOklPuoiWtcN+Swi6', 'CustomUI.PageView');
// Lobby/LobbyScript/Script/common/CustomUI.PageView.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PageView = /** @class */ (function (_super) {
    __extends(PageView, _super);
    function PageView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoInit = true;
        _this.infinity = true;
        _this.cancelInnerEvents = true;
        _this.spacing = 30;
        _this.moveOffset = 30;
        _this.content = null;
        _this.items = null;
        _this.pages = null;
        _this.indicator = null;
        _this.index = 0;
        _this.pageCount = 0;
        _this.left = null;
        _this.center = null;
        _this.right = null;
        _this.pageItems = [];
        _this.touchMoved = false;
        _this.onTouchStart = null;
        _this.onTouchMove = null;
        _this.onTouchEndOrCancel = null;
        _this.onPageChanged = null;
        return _this;
    }
    PageView.prototype.onLoad = function () {
        var _this = this;
        cc.PageView;
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            _this.touchMoved = false;
            if (_this.onTouchStart != null)
                _this.onTouchStart();
        }, this.node, true);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (!_this.cancelInnerEvents) {
                return;
            }
            if (_this.touchMoved) {
                var p = _this.items.position;
                p.x += event.getDeltaX();
                var offset = _this.content.width + _this.spacing;
                if (!_this.infinity) {
                    if (_this.items.position.x > 0 && _this.index == 0) {
                        offset = _this.moveOffset;
                    }
                    else if (_this.items.position.x < 0 && _this.index == _this.pageCount - 1) {
                        offset = _this.moveOffset;
                    }
                }
                if (Math.abs(p.x) > offset) {
                    p.x = p.x > 0 ? offset : -offset;
                }
                _this.items.position = p;
                if (_this.onTouchMove != null)
                    _this.onTouchMove();
            }
            var deltaMove = event.touch.getLocation().sub(event.touch.getStartLocation()); //FIXME: touch move delta should be calculated by DPI.
            if (deltaMove.mag() > 7) {
                if (!_this.touchMoved && event.target != _this.node) {
                    //Utils.Log(event.target);
                    // Simulate touch cancel for target node
                    var cancelEvent = new cc.Event.EventTouch(event.getTouches(), event.bubbles);
                    cancelEvent.type = cc.Node.EventType.TOUCH_CANCEL;
                    cancelEvent.touch = event.touch;
                    // cancelEvent.simulate = true;
                    event.target.dispatchEvent(cancelEvent);
                    _this.touchMoved = true;
                }
            }
        }, this.node, true);
        var cbEnd = function (event) {
            if (!_this.touchMoved) {
                return;
            }
            if (Math.abs(_this.items.position.x) > _this.content.width / 4) {
                var idx_1 = _this.index;
                var position = cc.Vec2.ZERO;
                if (_this.infinity) {
                    if (_this.items.position.x < 0) {
                        idx_1++;
                        if (idx_1 > _this.pageCount - 1)
                            idx_1 = 0;
                        position = cc.v2(-_this.content.width - _this.spacing, 0);
                    }
                    else {
                        idx_1--;
                        if (idx_1 < 0)
                            idx_1 = _this.pageCount - 1;
                        position = cc.v2(_this.content.width + _this.spacing, 0);
                    }
                }
                else {
                    if (_this.items.position.x < 0 && idx_1 < _this.pageItems.length - 1) {
                        idx_1++;
                    }
                    else if (_this.items.position.x > 0 && idx_1 >= 1) {
                        idx_1--;
                    }
                    position = _this.index > idx_1 ? cc.v2(_this.content.width + _this.spacing, 0) : cc.v2(-_this.content.width - _this.spacing, 0);
                }
                if (_this.index != idx_1) {
                    _this.items.stopAllActions();
                    _this.items.runAction(cc.sequence(cc.moveTo((_this.content.width + _this.spacing - Math.abs(_this.items.position.x)) / (_this.content.width + _this.spacing) * 0.5, position), cc.callFunc(function () {
                        _this.setPageIndex(idx_1);
                        if (_this.onPageChanged != null)
                            _this.onPageChanged();
                    })));
                }
                else {
                    _this.items.stopAllActions();
                    _this.items.runAction(cc.sequence(cc.moveTo(0.3, cc.Vec2.ZERO), cc.callFunc(function () {
                    })));
                }
            }
            else {
                _this.items.stopAllActions();
                _this.items.runAction(cc.sequence(cc.moveTo(0.3, cc.Vec2.ZERO), cc.callFunc(function () {
                })));
            }
            if (_this.onTouchEndOrCancel != null)
                _this.onTouchEndOrCancel();
        };
        this.node.on(cc.Node.EventType.TOUCH_END, cbEnd, this.node, true);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, cbEnd, this.node, true);
        for (var i = 0; i < this.pages.childrenCount; i++) {
            this.pages.children[i].active = false;
        }
        this.left = new cc.Node();
        this.left.parent = this.items;
        this.left.setPosition(-this.content.width - this.spacing, 0);
        this.left.active = true;
        this.center = new cc.Node();
        this.center.parent = this.items;
        this.center.setPosition(0, 0);
        this.center.active = true;
        this.right = new cc.Node();
        this.right.parent = this.items;
        this.right.setPosition(this.content.width + this.spacing, 0);
        this.right.active = true;
        if (this.autoInit)
            this.init();
    };
    PageView.prototype.init = function () {
        for (var i = 1; i < this.indicator.childrenCount; i++) {
            this.indicator.children[i].destroy();
            i--;
        }
        this.indicator.children[0].active = false;
        this.pageCount = this.pages.childrenCount;
        //Utils.Log("PageCount: "+this.pageCount);
        for (var i = 0; i < this.pages.childrenCount; i++) {
            this.pageItems.push(this.pages.children[i]);
            var item = cc.instantiate(this.indicator.children[0]);
            item.parent = this.indicator;
            item.active = true;
        }
        this.setPageIndex(0);
    };
    PageView.prototype.scrollToIndex = function (index, moveToLeft) {
        var _this = this;
        if (moveToLeft === void 0) { moveToLeft = false; }
        if (this.index != index) {
            var position = cc.Vec2.ZERO;
            if (this.infinity) {
                position = moveToLeft ? cc.v2(this.content.width + this.spacing, 0) : cc.v2(-this.content.width - this.spacing, 0);
            }
            else {
                position = this.index > index ? cc.v2(this.content.width + this.spacing, 0) : cc.v2(-this.content.width - this.spacing, 0);
            }
            this.items.stopAllActions();
            if (this.infinity || (Math.abs(this.index - index) == 1 || Math.abs(this.index - index) != this.pageCount - 1)) {
                this.items.runAction(cc.sequence(cc.moveTo(0.5, position), cc.callFunc(function () {
                    _this.setPageIndex(index);
                })));
            }
            else {
                this.setPageIndex(index);
            }
        }
    };
    PageView.prototype.scrollToNextIndex = function () {
        var idx = this.index + 1;
        if (idx >= this.pageCount)
            idx = 0;
        this.scrollToIndex(idx, false);
    };
    PageView.prototype.setPageIndex = function (index) {
        this.index = index;
        for (var i = 0; i < this.pageItems.length; i++) {
            this.pageItems[i].active = false;
        }
        if (this.infinity) {
            var idx = this.index - 1;
            if (idx < 0)
                idx = this.pageCount - 1;
            this.pageItems[idx].active = true;
            this.pageItems[idx].parent = this.left;
            idx = this.index;
            this.pageItems[idx].active = true;
            this.pageItems[idx].parent = this.center;
            idx = this.index + 1;
            if (idx > this.pageCount - 1)
                idx = 0;
            this.pageItems[idx].active = true;
            this.pageItems[idx].parent = this.right;
        }
        else {
            if (this.pageCount >= 3 && this.index >= 1) {
                this.pageItems[this.index - 1].active = true;
                this.pageItems[this.index - 1].parent = this.left;
            }
            if (this.pageCount >= this.index + 1) {
                this.pageItems[this.index].active = true;
                this.pageItems[this.index].parent = this.center;
            }
            if (this.pageCount >= 2 && this.index < this.pageCount - 1) {
                this.pageItems[this.index + 1].active = true;
                this.pageItems[this.index + 1].parent = this.right;
            }
        }
        this.items.setPosition(cc.Vec2.ZERO);
        this.updateIndicator();
    };
    PageView.prototype.updateIndicator = function () {
        for (var i = 1; i < this.indicator.childrenCount; i++) {
            var item = this.indicator.children[i];
            item.parent = this.indicator;
            var active = (i - 1) == this.index;
            item.getChildByName("active").active = active;
            item.getChildByName("inactive").active = !active;
        }
    };
    __decorate([
        property
    ], PageView.prototype, "autoInit", void 0);
    __decorate([
        property
    ], PageView.prototype, "infinity", void 0);
    __decorate([
        property
    ], PageView.prototype, "cancelInnerEvents", void 0);
    __decorate([
        property
    ], PageView.prototype, "spacing", void 0);
    __decorate([
        property
    ], PageView.prototype, "moveOffset", void 0);
    __decorate([
        property(cc.Node)
    ], PageView.prototype, "content", void 0);
    __decorate([
        property(cc.Node)
    ], PageView.prototype, "items", void 0);
    __decorate([
        property(cc.Node)
    ], PageView.prototype, "pages", void 0);
    __decorate([
        property(cc.Node)
    ], PageView.prototype, "indicator", void 0);
    PageView = __decorate([
        ccclass
    ], PageView);
    return PageView;
}(cc.Component));
exports.default = PageView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcTG9iYnlcXExvYmJ5U2NyaXB0XFxTY3JpcHRcXGNvbW1vblxcQ3VzdG9tVUkuUGFnZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0UEM7UUF6UEcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUVsQyxhQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGdCQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFbEIsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLGdCQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGtCQUFZLEdBQWUsSUFBSSxDQUFDO1FBQ2hDLGlCQUFXLEdBQWUsSUFBSSxDQUFDO1FBQy9CLHdCQUFrQixHQUFlLElBQUksQ0FBQztRQUN0QyxtQkFBYSxHQUFlLElBQUksQ0FBQzs7SUE2TjVDLENBQUM7SUEzTkcseUJBQU0sR0FBTjtRQUFBLGlCQTJIQztRQTFIRyxFQUFFLENBQUMsUUFBUSxDQUFBO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUks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LEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUs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SUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFekMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztnQkFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzNDO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JEO1lBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNuRDtZQUNELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN0RDtTQUNKO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGtDQUFlLEdBQXZCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUNwRDtJQUNMLENBQUM7SUF4UEQ7UUFEQyxRQUFROzhDQUNnQjtJQUV6QjtRQURDLFFBQVE7OENBQ2dCO0lBRXpCO1FBREMsUUFBUTt1REFDeUI7SUFFbEM7UUFEQyxRQUFROzZDQUNZO0lBRXJCO1FBREMsUUFBUTtnREFDZTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBbkJULFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E0UDVCO0lBQUQsZUFBQztDQTVQRCxBQTRQQyxDQTVQcUMsRUFBRSxDQUFDLFNBQVMsR0E0UGpEO2tCQTVQb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlscyBmcm9tIFwiLi4vY29tbW9uL1V0aWxzXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBhdXRvSW5pdDogYm9vbGVhbiA9IHRydWU7XG4gICAgQHByb3BlcnR5XG4gICAgaW5maW5pdHk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIEBwcm9wZXJ0eVxuICAgIGNhbmNlbElubmVyRXZlbnRzOiBib29sZWFuID0gdHJ1ZTtcbiAgICBAcHJvcGVydHlcbiAgICBzcGFjaW5nOiBudW1iZXIgPSAzMDtcbiAgICBAcHJvcGVydHlcbiAgICBtb3ZlT2Zmc2V0OiBudW1iZXIgPSAzMDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGFnZXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluZGljYXRvcjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGluZGV4ID0gMDtcbiAgICBwcml2YXRlIHBhZ2VDb3VudCA9IDA7XG4gICAgcHJpdmF0ZSBsZWZ0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIGNlbnRlcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSByaWdodDogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwYWdlSXRlbXM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgdG91Y2hNb3ZlZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBvblRvdWNoU3RhcnQ6ICgpID0+IHZvaWQgPSBudWxsO1xuICAgIHB1YmxpYyBvblRvdWNoTW92ZTogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHVibGljIG9uVG91Y2hFbmRPckNhbmNlbDogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHVibGljIG9uUGFnZUNoYW5nZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5QYWdlVmlld1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5vblRvdWNoU3RhcnQgIT0gbnVsbCkgdGhpcy5vblRvdWNoU3RhcnQoKTtcbiAgICAgICAgfSwgdGhpcy5ub2RlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FuY2VsSW5uZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRvdWNoTW92ZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMuaXRlbXMucG9zaXRpb247XG4gICAgICAgICAgICAgICAgcC54ICs9IGV2ZW50LmdldERlbHRhWCgpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuY29udGVudC53aWR0aCArIHRoaXMuc3BhY2luZztcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMucG9zaXRpb24ueCA+IDAgJiYgdGhpcy5pbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSB0aGlzLm1vdmVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pdGVtcy5wb3NpdGlvbi54IDwgMCAmJiB0aGlzLmluZGV4ID09IHRoaXMucGFnZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gdGhpcy5tb3ZlT2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHAueCkgPiBvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcC54ID0gcC54ID4gMCA/IG9mZnNldCA6IC1vZmZzZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucG9zaXRpb24gPSBwO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub25Ub3VjaE1vdmUgIT0gbnVsbCkgdGhpcy5vblRvdWNoTW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgZGVsdGFNb3ZlID0gZXZlbnQudG91Y2guZ2V0TG9jYXRpb24oKS5zdWIoZXZlbnQudG91Y2guZ2V0U3RhcnRMb2NhdGlvbigpKTsgLy9GSVhNRTogdG91Y2ggbW92ZSBkZWx0YSBzaG91bGQgYmUgY2FsY3VsYXRlZCBieSBEUEkuXG4gICAgICAgICAgICBpZiAoZGVsdGFNb3ZlLm1hZygpID4gNykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy50b3VjaE1vdmVkICYmIGV2ZW50LnRhcmdldCAhPSB0aGlzLm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgIC8vVXRpbHMuTG9nKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIHRvdWNoIGNhbmNlbCBmb3IgdGFyZ2V0IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbmNlbEV2ZW50ID0gbmV3IGNjLkV2ZW50LkV2ZW50VG91Y2goZXZlbnQuZ2V0VG91Y2hlcygpLCBldmVudC5idWJibGVzKTtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsRXZlbnQudHlwZSA9IGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTDtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsRXZlbnQudG91Y2ggPSBldmVudC50b3VjaDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuY2VsRXZlbnQuc2ltdWxhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChjYW5jZWxFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLm5vZGUsIHRydWUpO1xuXG4gICAgICAgIGxldCBjYkVuZCA9IChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRvdWNoTW92ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5pdGVtcy5wb3NpdGlvbi54KSA+IHRoaXMuY29udGVudC53aWR0aCAvIDQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMucG9zaXRpb24ueCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA+IHRoaXMucGFnZUNvdW50IC0gMSkgaWR4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gY2MudjIoLXRoaXMuY29udGVudC53aWR0aCAtIHRoaXMuc3BhY2luZywgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPCAwKSBpZHggPSB0aGlzLnBhZ2VDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGNjLnYyKHRoaXMuY29udGVudC53aWR0aCArIHRoaXMuc3BhY2luZywgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcy5wb3NpdGlvbi54IDwgMCAmJiBpZHggPCB0aGlzLnBhZ2VJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHgrKztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLml0ZW1zLnBvc2l0aW9uLnggPiAwICYmIGlkeCA+PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHgtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuaW5kZXggPiBpZHggPyBjYy52Mih0aGlzLmNvbnRlbnQud2lkdGggKyB0aGlzLnNwYWNpbmcsIDApIDogY2MudjIoLXRoaXMuY29udGVudC53aWR0aCAtIHRoaXMuc3BhY2luZywgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ICE9IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKCh0aGlzLmNvbnRlbnQud2lkdGggKyB0aGlzLnNwYWNpbmcgLSBNYXRoLmFicyh0aGlzLml0ZW1zLnBvc2l0aW9uLngpKSAvICh0aGlzLmNvbnRlbnQud2lkdGggKyB0aGlzLnNwYWNpbmcpICogMC41LCBwb3NpdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdlSW5kZXgoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vblBhZ2VDaGFuZ2VkICE9IG51bGwpIHRoaXMub25QYWdlQ2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjMsIGNjLlZlYzIuWkVSTyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMywgY2MuVmVjMi5aRVJPKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub25Ub3VjaEVuZE9yQ2FuY2VsICE9IG51bGwpIHRoaXMub25Ub3VjaEVuZE9yQ2FuY2VsKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGNiRW5kLCB0aGlzLm5vZGUsIHRydWUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCBjYkVuZCwgdGhpcy5ub2RlLCB0cnVlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnZXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgdGhpcy5sZWZ0LnBhcmVudCA9IHRoaXMuaXRlbXM7XG4gICAgICAgIHRoaXMubGVmdC5zZXRQb3NpdGlvbigtdGhpcy5jb250ZW50LndpZHRoIC0gdGhpcy5zcGFjaW5nLCAwKTtcbiAgICAgICAgdGhpcy5sZWZ0LmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jZW50ZXIgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICB0aGlzLmNlbnRlci5wYXJlbnQgPSB0aGlzLml0ZW1zO1xuICAgICAgICB0aGlzLmNlbnRlci5zZXRQb3NpdGlvbigwLCAwKTtcbiAgICAgICAgdGhpcy5jZW50ZXIuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnJpZ2h0ID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgdGhpcy5yaWdodC5wYXJlbnQgPSB0aGlzLml0ZW1zO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFBvc2l0aW9uKHRoaXMuY29udGVudC53aWR0aCArIHRoaXMuc3BhY2luZywgMCk7XG4gICAgICAgIHRoaXMucmlnaHQuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5hdXRvSW5pdCkgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5pbmRpY2F0b3IuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5jaGlsZHJlbltpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSB0aGlzLnBhZ2VzLmNoaWxkcmVuQ291bnQ7XG4gICAgICAgICAvL1V0aWxzLkxvZyhcIlBhZ2VDb3VudDogXCIrdGhpcy5wYWdlQ291bnQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnZXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJdGVtcy5wdXNoKHRoaXMucGFnZXMuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmluZGljYXRvci5jaGlsZHJlblswXSk7XG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaW5kaWNhdG9yO1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UGFnZUluZGV4KDApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIG1vdmVUb0xlZnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCAhPSBpbmRleCkge1xuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IG1vdmVUb0xlZnQgPyBjYy52Mih0aGlzLmNvbnRlbnQud2lkdGggKyB0aGlzLnNwYWNpbmcsIDApIDogY2MudjIoLXRoaXMuY29udGVudC53aWR0aCAtIHRoaXMuc3BhY2luZywgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5pbmRleCA+IGluZGV4ID8gY2MudjIodGhpcy5jb250ZW50LndpZHRoICsgdGhpcy5zcGFjaW5nLCAwKSA6IGNjLnYyKC10aGlzLmNvbnRlbnQud2lkdGggLSB0aGlzLnNwYWNpbmcsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pdGVtcy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5maW5pdHkgfHwgKE1hdGguYWJzKHRoaXMuaW5kZXggLSBpbmRleCkgPT0gMSB8fCBNYXRoLmFicyh0aGlzLmluZGV4IC0gaW5kZXgpICE9IHRoaXMucGFnZUNvdW50IC0gMSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSwgcG9zaXRpb24pLFxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhZ2VJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UGFnZUluZGV4KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzY3JvbGxUb05leHRJbmRleCgpIHtcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuaW5kZXggKyAxO1xuICAgICAgICBpZiAoaWR4ID49IHRoaXMucGFnZUNvdW50KSBpZHggPSAwO1xuICAgICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoaWR4LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhZ2VJbmRleChpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFnZUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZmluaXR5KSB7XG4gICAgICAgICAgICBsZXQgaWR4ID0gdGhpcy5pbmRleCAtIDE7XG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkgaWR4ID0gdGhpcy5wYWdlQ291bnQgLSAxO1xuICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXNbaWR4XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXNbaWR4XS5wYXJlbnQgPSB0aGlzLmxlZnQ7XG5cbiAgICAgICAgICAgIGlkeCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1tpZHhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1tpZHhdLnBhcmVudCA9IHRoaXMuY2VudGVyO1xuXG4gICAgICAgICAgICBpZHggPSB0aGlzLmluZGV4ICsgMTtcbiAgICAgICAgICAgIGlmIChpZHggPiB0aGlzLnBhZ2VDb3VudCAtIDEpIGlkeCA9IDA7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1tpZHhdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1tpZHhdLnBhcmVudCA9IHRoaXMucmlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlQ291bnQgPj0gMyAmJiB0aGlzLmluZGV4ID49IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1t0aGlzLmluZGV4IC0gMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1t0aGlzLmluZGV4IC0gMV0ucGFyZW50ID0gdGhpcy5sZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUNvdW50ID49IHRoaXMuaW5kZXggKyAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSXRlbXNbdGhpcy5pbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1t0aGlzLmluZGV4XS5wYXJlbnQgPSB0aGlzLmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VDb3VudCA+PSAyICYmIHRoaXMuaW5kZXggPCB0aGlzLnBhZ2VDb3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1t0aGlzLmluZGV4ICsgMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VJdGVtc1t0aGlzLmluZGV4ICsgMV0ucGFyZW50ID0gdGhpcy5yaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1zLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5kaWNhdG9yKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVJbmRpY2F0b3IoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5pbmRpY2F0b3IuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaW5kaWNhdG9yLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaXRlbS5wYXJlbnQgPSB0aGlzLmluZGljYXRvcjtcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSAoaSAtIDEpID09IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiYWN0aXZlXCIpLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJpbmFjdGl2ZVwiKS5hY3RpdmUgPSAhYWN0aXZlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19