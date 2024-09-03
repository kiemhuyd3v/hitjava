
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b33afE9ObFA3aGH1L/Nfmpf', 'Slot1.PopupBonus');
// Slot1/Slot1Script/Slot1.PopupBonus.ts

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
exports.PopupBonus = void 0;
var Dialog_1 = require("../../Lobby/LobbyScript/Script/common/Dialog");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var arr_animation = ["baoliendang", "binhtiendon", "kinhchieuyeu", "quatbatieu", "thap", "vongcankhon"];
var PopupBonus = /** @class */ (function (_super) {
    __extends(PopupBonus, _super);
    function PopupBonus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = null;
        _this.nodeBoxNotify = null;
        _this.txtNotify = null;
        _this.lblLeft = null;
        _this.lblHeso = null;
        _this.lblWin = null;
        _this.sprBgItem = [];
        _this.sprIcon = [];
        _this.sprLight = null;
        _this.listRandomIcon = [];
        _this.factor = 1;
        _this.left = 0;
        _this.betValue = 0;
        _this.onFinished = null;
        _this.onSpecialFinished = null;
        _this.dataBonus = [];
        _this.dataSpecial = -1;
        _this.heso = 0;
        _this.win = 0;
        _this.controller = null;
        return _this;
    }
    PopupBonus.prototype.onLoad = function () {
        this.node.y = cc.winSize.height;
        this.node.opacity = 0;
    };
    PopupBonus.prototype.start = function () {
        var _this = this;
        this.initItem();
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            this_1.resetItem(node);
            node["btn"].node.on("click", function () {
                var value = _this.dataBonus[_this.dataBonus.length - _this.left];
                //  cc.log("click:" + value + " : " + node["is_open"]);
                if (node["is_open"] == false && _this.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            _this.factor++;
                            node["ske"].spriteFrame = _this.sprBgItem[1];
                            node['icon'].node.active = false;
                            node["btn"].node.active = false;
                            _this.controller.onBtnSoundTouchBonus(false);
                            break;
                        case 1:
                            node["ske"].spriteFrame = _this.sprBgItem[0];
                            node['icon'].spriteFrame = _this.sprLight;
                            node["btn"].node.active = false;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            _this.controller.onBtnSoundTouchBonus(true);
                            cc.tween(node['label'].node).set({ opacity: 0, x: -100 }).to(0.5, { opacity: 255, x: 0 }, { easing: cc.easing.backOut }).start();
                            break;
                        case 2:
                            node["ske"].spriteFrame = _this.sprBgItem[0];
                            node['icon'].spriteFrame = _this.sprLight;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            _this.controller.onBtnSoundTouchBonus(true);
                            cc.tween(node['label'].node).set({ opacity: 0, x: -100 }).to(0.5, { opacity: 255, x: 0 }, { easing: cc.easing.backOut }).start();
                            break;
                        case 3:
                            node["ske"].spriteFrame = _this.sprBgItem[0];
                            node['icon'].spriteFrame = _this.sprLight;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            _this.controller.onBtnSoundTouchBonus(true);
                            cc.tween(node['label'].node).set({ opacity: 0, x: -100 }).to(0.5, { opacity: 255, x: 0 }, { easing: cc.easing.backOut }).start();
                            break;
                        case 4:
                            node["ske"].spriteFrame = _this.sprBgItem[0];
                            node['icon'].spriteFrame = _this.sprLight;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            _this.win += 20 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(node["label"], 20 * _this.betValue * _this.factor, 0.3);
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            _this.controller.onBtnSoundTouchBonus(true);
                            cc.tween(node['label'].node).set({ opacity: 0, x: -100 }).to(0.5, { opacity: 255, x: 0 }, { easing: cc.easing.backOut }).start();
                            break;
                    }
                    _this.left--;
                    _this.lblLeft.string = "" + _this.left;
                    if (_this.left <= 0) {
                        _this.hidden();
                    }
                }
            });
            var ranIndex = Utils_1.default.randomRangeInt(0, this_1.sprIcon.length);
            node["icon"].spriteFrame = this_1.sprIcon[ranIndex];
        };
        var this_1 = this;
        for (var i = 0; i < this.items.childrenCount; i++) {
            _loop_1(i);
        }
    };
    PopupBonus.prototype.onDisable = function () {
    };
    PopupBonus.prototype.resetItem = function (node) {
        node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
        node["label"] = node.getChildByName("label").getComponent(cc.Label);
        node["ske"] = node.getChildByName("ske").getComponent(cc.Sprite);
        node["icon"] = node.getChildByName("icon").getComponent(cc.Sprite);
        node["is_open"] = false;
        node["btn"].node.active = true;
        node["icon"].node.active = true;
        node['label'].node.active = false;
        node['ske'].spriteFrame = this.sprBgItem[0];
        var ranIndex = Utils_1.default.randomRangeInt(0, this.sprIcon.length);
        node["icon"].spriteFrame = this.sprIcon[ranIndex];
    };
    PopupBonus.prototype.initItem = function () {
        for (var i = 0; i < 15; i++) {
            var item = this.items.children[i];
            if (!item) {
                item = cc.instantiate(this.items.children[0]);
                item.parent = this.items;
            }
        }
    };
    PopupBonus.prototype.showBonus = function (betValue, bonus, controller, onFinished) {
        // super.show();
        this.node.active = true;
        cc.tween(this.node).to(0.3, { y: 0, opacity: 255 }, { easing: cc.easing.sineIn }).start();
        this.controller = controller;
        this.win = 0;
        Tween_1.default.numberTo(this.lblWin, this.win, 0.3);
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["ske"] = node.getChildByName("ske").getComponent(cc.Sprite);
            node["ske"].node.active = true;
            node["btn"].node.active = true;
            node["label"].node.active = false;
            node["is_open"] = false;
        }
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            var btn = node.getChildByName("btn").getComponent(cc.Button);
            btn.node.active = true;
            btn.interactable = true;
            node.getChildByName("label").active = false;
        }
        this.betValue = betValue;
        this.onFinished = onFinished;
        var arrBonus = bonus.split(",");
        this.dataBonus = [];
        for (var i = 0; i < arrBonus.length; i++) {
            this.dataBonus.push(Number(arrBonus[i]));
        }
        this.left = this.dataBonus.length - 1;
        this.factor = 1;
        this.lblLeft.string = "" + this.left;
        this.heso = this.dataBonus[0];
        this.lblHeso.string = "x" + this.heso;
    };
    PopupBonus.prototype.hidden = function () {
        this.controller.onBtnSoundSumary();
        Tween_1.default.showPopup(this.nodeBoxNotify, this.nodeBoxNotify.parent);
        Tween_1.default.numberTo(this.txtNotify, this.win, 0.3);
    };
    PopupBonus.prototype.onBtnExit = function () {
        var _this = this;
        cc.tween(this.node).to(0.3, { y: cc.winSize.height, opacity: 0 }, { easing: cc.easing.backIn }).call(function () {
            Tween_1.default.hidePopup(_this.nodeBoxNotify, _this.nodeBoxNotify.parent, false);
            for (var i = 0; i < _this.items.childrenCount; i++) {
                //  cc.log("chay den i===" + i);
                _this.resetItem(_this.items.children[i]);
            }
            _this.node.active = false;
            _this.scheduleOnce(function () {
                _this.onFinished();
            }, 1.5);
        }).start();
    };
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "items", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "nodeBoxNotify", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBonus.prototype, "txtNotify", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBonus.prototype, "lblLeft", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBonus.prototype, "lblHeso", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBonus.prototype, "lblWin", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBonus.prototype, "sprBgItem", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBonus.prototype, "sprIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupBonus.prototype, "sprLight", void 0);
    PopupBonus = __decorate([
        ccclass
    ], PopupBonus);
    return PopupBonus;
}(Dialog_1.default));
exports.PopupBonus = PopupBonus;
exports.default = PopupBonus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBQ2hFLHFFQUFnRTtBQUcxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1QyxJQUFNLGFBQWEsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFMUc7SUFBZ0MsOEJBQU07SUFBdEM7UUFBQSxxRUFzTUM7UUFwTUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFHekIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBcUIsRUFBRSxDQUFDO1FBRWpDLGFBQU8sR0FBcUIsRUFBRSxDQUFDO1FBRS9CLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFVBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxjQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFDOUIsdUJBQWlCLEdBQWUsSUFBSSxDQUFDO1FBQ3JDLGVBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDekIsVUFBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFVLEdBQW9CLElBQUksQ0FB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LGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgU2xvdDFDb250cm9sbGVyIGZyb20gXCIuL1Nsb3QxLlNsb3QxQ29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgYXJyX2FuaW1hdGlvbiA9IFtcImJhb2xpZW5kYW5nXCIsIFwiYmluaHRpZW5kb25cIiwgXCJraW5oY2hpZXV5ZXVcIiwgXCJxdWF0YmF0aWV1XCIsIFwidGhhcFwiLCBcInZvbmdjYW5raG9uXCJdO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQb3B1cEJvbnVzIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveE5vdGlmeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dE5vdGlmeTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxMZWZ0OiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSGVzbzogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxXaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJCZ0l0ZW06IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJJY29uOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckxpZ2h0OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgbGlzdFJhbmRvbUljb24gPSBbXTtcbiAgICBwcml2YXRlIGZhY3RvciA9IDE7XG4gICAgcHJpdmF0ZSBsZWZ0ID0gMDtcbiAgICBwcml2YXRlIGJldFZhbHVlID0gMDtcbiAgICBwcml2YXRlIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuICAgIHByaXZhdGUgb25TcGVjaWFsRmluaXNoZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YUJvbnVzOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHJpdmF0ZSBkYXRhU3BlY2lhbDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBoZXNvOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2luOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udHJvbGxlcjogU2xvdDFDb250cm9sbGVyID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS55ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaW5pdEl0ZW0oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgdGhpcy5yZXNldEl0ZW0obm9kZSk7XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5kYXRhQm9udXNbdGhpcy5kYXRhQm9udXMubGVuZ3RoIC0gdGhpcy5sZWZ0XTtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiY2xpY2s6XCIgKyB2YWx1ZSArIFwiIDogXCIgKyBub2RlW1wiaXNfb3BlblwiXSk7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGVbXCJpc19vcGVuXCJdID09IGZhbHNlICYmIHRoaXMubGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWN0b3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wic2tlXCJdLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJCZ0l0ZW1bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsnaWNvbiddLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcInNrZVwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQmdJdGVtWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ2ljb24nXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByTGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCAqIHRoaXMuYmV0VmFsdWUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gNCAqIHRoaXMuYmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlWydsYWJlbCddLm5vZGUpLnNldCh7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSwgeDogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckJnSXRlbVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlWydpY29uJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckxpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgMTAgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTAgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlWydsYWJlbCddLm5vZGUpLnNldCh7IG9wYWNpdHk6IDAsIHg6IC0xMDAgfSkudG8oMC41LCB7IG9wYWNpdHk6IDI1NSwgeDogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wic2tlXCJdLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJCZ0l0ZW1bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsnaWNvbiddLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJMaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sIDE1ICogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luICs9IDE1ICogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLCB0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFRvdWNoQm9udXModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZVsnbGFiZWwnXS5ub2RlKS5zZXQoeyBvcGFjaXR5OiAwLCB4OiAtMTAwIH0pLnRvKDAuNSwgeyBvcGFjaXR5OiAyNTUsIHg6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcInNrZVwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQmdJdGVtWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ2ljb24nXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByTGlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMjAgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLCAyMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sbGVyLm9uQnRuU291bmRUb3VjaEJvbnVzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVbJ2xhYmVsJ10ubm9kZSkuc2V0KHsgb3BhY2l0eTogMCwgeDogLTEwMCB9KS50bygwLjUsIHsgb3BhY2l0eTogMjU1LCB4OiAwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja091dCB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnQtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxMZWZ0LnN0cmluZyA9IFwiXCIgKyB0aGlzLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IHJhbkluZGV4ID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgdGhpcy5zcHJJY29uLmxlbmd0aCk7XG4gICAgICAgICAgICBub2RlW1wiaWNvblwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3BySWNvbltyYW5JbmRleF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgIH1cbiAgICByZXNldEl0ZW0obm9kZSkge1xuICAgICAgICBub2RlW1wiYnRuXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIG5vZGVbXCJza2VcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwic2tlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBub2RlW1wiaWNvblwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBub2RlW1wiaXNfb3BlblwiXSA9IGZhbHNlO1xuICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbm9kZVtcImljb25cIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBub2RlWydsYWJlbCddLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG5vZGVbJ3NrZSddLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJCZ0l0ZW1bMF07XG4gICAgICAgIGxldCByYW5JbmRleCA9IFV0aWxzLnJhbmRvbVJhbmdlSW50KDAsIHRoaXMuc3BySWNvbi5sZW5ndGgpO1xuICAgICAgICBub2RlW1wiaWNvblwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3BySWNvbltyYW5JbmRleF07XG4gICAgfVxuICAgIGluaXRJdGVtKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1zLmNoaWxkcmVuWzBdKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd0JvbnVzKGJldFZhbHVlOiBudW1iZXIsIGJvbnVzOiBzdHJpbmcsIGNvbnRyb2xsZXIsIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgLy8gc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgeTogMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMud2luID0gMDtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbm9kZVtcInNrZVwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJza2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBub2RlW1wic2tlXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlW1wiaXNfb3BlblwiXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmV0VmFsdWUgPSBiZXRWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkZpbmlzaGVkID0gb25GaW5pc2hlZDtcbiAgICAgICAgbGV0IGFyckJvbnVzID0gYm9udXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICB0aGlzLmRhdGFCb251cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckJvbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFCb251cy5wdXNoKE51bWJlcihhcnJCb251c1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuZGF0YUJvbnVzLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5sYmxMZWZ0LnN0cmluZyA9IFwiXCIgKyB0aGlzLmxlZnQ7XG5cbiAgICAgICAgdGhpcy5oZXNvID0gdGhpcy5kYXRhQm9udXNbMF07XG4gICAgICAgIHRoaXMubGJsSGVzby5zdHJpbmcgPSBcInhcIiArIHRoaXMuaGVzbztcbiAgICB9XG5cblxuICAgIGhpZGRlbigpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9uQnRuU291bmRTdW1hcnkoKTtcbiAgICAgICAgVHdlZW4uc2hvd1BvcHVwKHRoaXMubm9kZUJveE5vdGlmeSwgdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudHh0Tm90aWZ5LCB0aGlzLndpbiwgMC4zKTtcblxuICAgIH1cblxuICAgIG9uQnRuRXhpdCgpIHtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS50bygwLjMsIHsgeTogY2Mud2luU2l6ZS5oZWlnaHQsIG9wYWNpdHk6IDAgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5iYWNrSW4gfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBUd2Vlbi5oaWRlUG9wdXAodGhpcy5ub2RlQm94Tm90aWZ5LCB0aGlzLm5vZGVCb3hOb3RpZnkucGFyZW50LCBmYWxzZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNoYXkgZGVuIGk9PT1cIiArIGkpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRJdGVtKHRoaXMuaXRlbXMuY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25GaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSwgMS41KTtcbiAgICAgICAgfSkuc3RhcnQoKTtcblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwQm9udXM7Il19