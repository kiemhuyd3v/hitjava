"use strict";
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