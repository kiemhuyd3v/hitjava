"use strict";
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