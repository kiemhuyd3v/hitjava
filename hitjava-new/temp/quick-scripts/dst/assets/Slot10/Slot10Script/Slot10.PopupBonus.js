
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot10/Slot10Script/Slot10.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e2d2mVjHFH2YJBTVjzn6v0', 'Slot10.PopupBonus');
// Slot10/Slot10Script/Slot10.PopupBonus.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
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
        _this.sfGangTayActive = null;
        _this.sfGangTayDisActive = null;
        _this.sfGangTayNormal = null;
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
    PopupBonus.prototype.start = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").children[0].getComponent(cc.Label);
            node["icon"] = node.getChildByName("icon");
            node["btn"].node.on("click", function () {
                _this.controller.onBtnSoundTouchBonus();
                var value = _this.dataBonus[_this.dataBonus.length - _this.left];
                //  cc.log("click:"+value+" : "+node["is_open"]);
                if (node["is_open"] == false && _this.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            _this.factor++;
                            node["btn"].node.active = false;
                            node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayDisActive;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            break;
                        case 1:
                            node["btn"].node.active = false;
                            node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 2:
                            node["btn"].node.active = false;
                            node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 3:
                            node["btn"].node.active = false;
                            node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 4:
                            node["btn"].node.active = false;
                            node["icon"].getComponent(cc.Sprite).spriteFrame = _this.sfGangTayActive;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            _this.win += 20 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(node["label"], 20 * _this.betValue * _this.factor, 0.3);
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                    }
                    _this.left--;
                    _this.lblLeft.string = "" + _this.left;
                    if (_this.left <= 0) {
                        _this.hidden();
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.items.childrenCount; i++) {
            _loop_1(i);
        }
    };
    PopupBonus.prototype.showBonus = function (betValue, bonus, controller, onFinished) {
        _super.prototype.show.call(this);
        this.controller = controller;
        this.win = 0;
        Tween_1.default.numberTo(this.lblWin, this.win, 0.3);
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["icon"] = node.getChildByName("icon");
            node["icon"].getComponent(cc.Sprite).spriteFrame = this.sfGangTayNormal;
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
        this.lblHeso.string = this.heso + "";
    };
    PopupBonus.prototype.hidden = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.dismiss();
            _this.onFinished();
        }, 1.5);
        // this.controller.onBtnSoundSumary();
        // Tween.showPopup(this.nodeBoxNotify,this.nodeBoxNotify.parent);
        // Tween.numberTo(this.txtNotify,this.win, 0.3);
    };
    PopupBonus.prototype.onBtnExit = function () {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function () {
            _this.dismiss();
            _this.onFinished();
        }, 1.5);
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
        property(cc.SpriteFrame)
    ], PopupBonus.prototype, "sfGangTayActive", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupBonus.prototype, "sfGangTayDisActive", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PopupBonus.prototype, "sfGangTayNormal", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDEwXFxTbG90MTBTY3JpcHRcXFNsb3QxMC5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBMEpDO1FBeEpHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixxQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2Qix3QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFFMUIscUJBQWUsR0FBRyxJQUFJLENBQUM7UUFDZixZQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsVUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixnQkFBVSxHQUFlLElBQUksQ0FBQztRQUM5Qix1QkFBaUIsR0FBZSxJQUFJLENBQUM7UUFDckMsZUFBUyxHQUFrQixFQUFFLENBQUM7UUFDOUIsaUJBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixVQUFJLEdBQVUsQ0FBQyxDQUFDO1FBQ2hCLFNBQUcsR0FBWSxDQUFDLENBQUM7UUFDakIsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDOztJQThIL0MsQ0FBQztJQTdIRywwQkFBSyxHQUFMO1FBQUEsaUJBdUVDO2dDQXJFWSxDQUFDO1lBQ04sSUFBSSxJQUFJLEdBQUcsT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQ3ZDLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RCxpREFBaUQ7Z0JBQ2pELElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDdkIsUUFBUSxLQUFLLEVBQUU7d0JBQ1gsS0FBSyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUM7NEJBQzNFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUMzQixNQUFNO3dCQUNWLEtBQUssQ0FBQzs0QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDOzRCQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQzs0QkFDM0IsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUcsR0FBRyxDQUFDLENBQUM7NEJBQ3JELEtBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFFLEtBQUksQ0FBQyxRQUFRLENBQUM7NEJBQzdCLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQyxLQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUMxQyxNQUFNO3dCQUVWLEtBQUssQ0FBQzs0QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDOzRCQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzRCQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFD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QUEySnZCLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFNsb3QxMENvbnRyb2xsZXIgZnJvbSBcIi4vU2xvdDEwLlNsb3QxMENvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQb3B1cEJvbnVzIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveE5vdGlmeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dE5vdGlmeTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxMZWZ0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEhlc286IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmR2FuZ1RheUFjdGl2ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmR2FuZ1RheURpc0FjdGl2ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmR2FuZ1RheU5vcm1hbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBmYWN0b3IgPSAxO1xuICAgIHByaXZhdGUgbGVmdCA9IDA7XG4gICAgcHJpdmF0ZSBiZXRWYWx1ZSA9IDA7XG4gICAgcHJpdmF0ZSBvbkZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIG9uU3BlY2lhbEZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIGRhdGFCb251czogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHByaXZhdGUgZGF0YVNwZWNpYWw6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgaGVzbzpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2luIDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbnRyb2xsZXI6U2xvdDEwQ29udHJvbGxlciA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbm9kZVtcImljb25cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFRvdWNoQm9udXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRhdGFCb251c1t0aGlzLmRhdGFCb251cy5sZW5ndGggLSB0aGlzLmxlZnRdO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJjbGljazpcIit2YWx1ZStcIiA6IFwiK25vZGVbXCJpc19vcGVuXCJdKTtcbiAgICAgICAgICAgICAgICBpZihub2RlW1wiaXNfb3BlblwiXSA9PSBmYWxzZSAmJiB0aGlzLmxlZnQgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWN0b3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImljb25cIl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmR2FuZ1RheURpc0FjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJpY29uXCJdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZkdhbmdUYXlBY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCp0aGlzLmJldFZhbHVlICwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSA0KiB0aGlzLmJldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImljb25cIl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmR2FuZ1RheUFjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLDEwKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbix0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImljb25cIl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmR2FuZ1RheUFjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLDE1KiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTUqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbix0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImljb25cIl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmR2FuZ1RheUFjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMjAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sMjAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbix0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWZ0LS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsTGVmdC5zdHJpbmcgPSBcIlwiICsgdGhpcy5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgfVxuXG4gICAgc2hvd0JvbnVzKGJldFZhbHVlOiBudW1iZXIsIGJvbnVzOiBzdHJpbmcsY29udHJvbGxlciwgb25GaW5pc2hlZDogKCkgPT4gdm9pZCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMud2luID0gMDtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sdGhpcy53aW4sIDAuMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbm9kZVtcImljb25cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIG5vZGVbXCJpY29uXCJdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZkdhbmdUYXlOb3JtYWw7XG4gICAgICAgICAgICBub2RlW1wiaXNfb3BlblwiXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmV0VmFsdWUgPSBiZXRWYWx1ZTtcbiAgICAgICAgdGhpcy5vbkZpbmlzaGVkID0gb25GaW5pc2hlZDtcbiAgICAgICAgbGV0IGFyckJvbnVzID0gYm9udXMuc3BsaXQoXCIsXCIpO1xuICAgICAgICB0aGlzLmRhdGFCb251cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckJvbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFCb251cy5wdXNoKE51bWJlcihhcnJCb251c1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuZGF0YUJvbnVzLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICAgICAgdGhpcy5sYmxMZWZ0LnN0cmluZyA9IFwiXCIgKyB0aGlzLmxlZnQ7XG4gICAgICAgIHRoaXMuaGVzbyA9IHRoaXMuZGF0YUJvbnVzWzBdO1xuICAgICAgICB0aGlzLmxibEhlc28uc3RyaW5nID0gdGhpcy5oZXNvK1wiXCI7XG4gICAgfVxuXG4gICAgXG4gICAgaGlkZGVuKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2hlZCgpO1xuICAgICAgICB9LCAxLjUpO1xuICAgICAgICAvLyB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFN1bWFyeSgpO1xuICAgICAgICAvLyBUd2Vlbi5zaG93UG9wdXAodGhpcy5ub2RlQm94Tm90aWZ5LHRoaXMubm9kZUJveE5vdGlmeS5wYXJlbnQpO1xuICAgICAgICAvLyBUd2Vlbi5udW1iZXJUbyh0aGlzLnR4dE5vdGlmeSx0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25CdG5FeGl0KCl7XG4gICAgICAgIFR3ZWVuLmhpZGVQb3B1cCh0aGlzLm5vZGVCb3hOb3RpZnksdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCxmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaGVkKCk7XG4gICAgICAgIH0sIDEuNSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBCb251czsiXX0=