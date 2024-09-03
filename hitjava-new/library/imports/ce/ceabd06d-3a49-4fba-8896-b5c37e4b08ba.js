"use strict";
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