"use strict";
cc._RF.push(module, 'ff7afpi+zdIq7WTcDLQtlsb', 'Dropdown');
// Lobby/LobbyScript/Script/common/Dropdown.ts

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
var DropdownItem_1 = require("./DropdownItem");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.label = null;
        _this_1.itemTemplate = null;
        _this_1.value = 0;
        _this_1.data = [];
        _this_1.items = [];
        return _this_1;
    }
    Dropdown.prototype.start = function () {
        this.itemTemplate.node.active = false;
    };
    Dropdown.prototype.show = function () {
        this.node.active = true;
        this.node.opacity = 0;
        this.node.runAction(cc.fadeIn(0.2));
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].checkMark.active = this.items[i].idx == this.value;
        }
    };
    Dropdown.prototype.setOptions = function (data) {
        if (data === void 0) { data = []; }
        this.data = data;
        var childen = this.itemTemplate.node.parent.children;
        for (var i = 0; i < childen.length; i++) {
            childen[i].active = false;
        }
        this.items = [];
        for (var i = 0; i < data.length; i++) {
            var item = this.getItem();
            item.idx = i;
            item.label.string = data[i];
            item.checkMark.active = i == this.value;
            this.items.push(item);
        }
    };
    Dropdown.prototype.dismiss = function () {
        var _this = this;
        this.node.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function () {
            _this.node.active = false;
        })));
    };
    Dropdown.prototype.setOnValueChange = function (callback) {
        this.onValueChange = callback;
    };
    Dropdown.prototype.setValue = function (value) {
        if (value < this.data.length) {
            this.value = value;
            this.label.string = this.data[this.value];
        }
        else {
            this.value = 0;
        }
    };
    Dropdown.prototype.getValue = function () {
        return this.value;
    };
    Dropdown.prototype.getItem = function () {
        var _this_1 = this;
        var node = null;
        var childen = this.itemTemplate.node.parent.children;
        for (var i = 0; i < childen.length; i++) {
            if (!childen[i].active && childen[i] != this.itemTemplate.node)
                node = childen[i];
        }
        if (node == null) {
            node = cc.instantiate(this.itemTemplate.node);
            node.parent = this.itemTemplate.node.parent;
            node.on("click", function (target) {
                _this_1.value = target.getComponent(DropdownItem_1.default).idx;
                _this_1.label.string = _this_1.data[_this_1.value];
                if (_this_1.onValueChange)
                    _this_1.onValueChange(_this_1.value);
                _this_1.dismiss();
            }, this);
        }
        node.active = true;
        node.zIndex = this.getLastZIndex();
        return node.getComponent(DropdownItem_1.default);
    };
    Dropdown.prototype.getLastZIndex = function () {
        var c = 0;
        var childen = this.itemTemplate.node.parent.children;
        for (var i = 1; i < childen.length; i++) {
            if (childen[i].active)
                c++;
        }
        return c;
    };
    __decorate([
        property(cc.Label)
    ], Dropdown.prototype, "label", void 0);
    __decorate([
        property(DropdownItem_1.default)
    ], Dropdown.prototype, "itemTemplate", void 0);
    Dropdown = __decorate([
        ccclass,
        requireComponent(cc.Button)
    ], Dropdown);
    return Dropdown;
}(cc.Component));
exports.default = Dropdown;

cc._RF.pop();