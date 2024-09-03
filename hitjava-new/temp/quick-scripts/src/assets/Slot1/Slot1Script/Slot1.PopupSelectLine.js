"use strict";
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