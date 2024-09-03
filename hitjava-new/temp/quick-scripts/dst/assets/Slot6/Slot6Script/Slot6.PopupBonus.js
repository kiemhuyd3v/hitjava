
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot6/Slot6Script/Slot6.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eaebbTQ/mdK7IKgBs2fkKOY', 'Slot6.PopupBonus');
// Slot6/Slot6Script/Slot6.PopupBonus.ts

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
        _this.lblFactor = null;
        _this.lblHeso = null;
        _this.lblWin = null;
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
        var seft = this;
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("win").getComponentInChildren(cc.Label);
            node["miss"] = node.getChildByName("miss");
            node["btn"].node.active = true;
            node["miss"].active = false;
            node["label"].node.parent.active = false;
            node["btn"].node.on("click", function () {
                seft.controller.onBtnSoundTouchBonus();
                var value = seft.dataBonus[seft.dataBonus.length - seft.left];
                if (node["is_open"] == false && seft.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            seft.factor++;
                            seft.lblFactor.string = "X" + seft.factor + "";
                            node["btn"].node.active = false;
                            node["miss"].active = true;
                            break;
                        case 1:
                            node["miss"].active = false;
                            node["btn"].node.active = false;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * seft.betValue, 0.3);
                            seft.win += 4 * seft.betValue;
                            Tween_1.default.numberTo(seft.lblWin, seft.win, 0.3);
                            break;
                        case 2:
                            node["miss"].active = false;
                            node["btn"].node.active = false;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * seft.betValue * seft.factor, 0.3);
                            seft.win += 10 * seft.betValue * seft.factor;
                            Tween_1.default.numberTo(seft.lblWin, seft.win, 0.3);
                            break;
                        case 3:
                            node["miss"].active = false;
                            node["btn"].node.active = false;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * seft.betValue * seft.factor, 0.3);
                            seft.win += 15 * seft.betValue * seft.factor;
                            Tween_1.default.numberTo(seft.lblWin, seft.win, 0.3);
                            break;
                        case 4:
                            node["miss"].active = false;
                            node["btn"].node.active = false;
                            node["label"].node.parent.active = true;
                            node["label"].string = "0";
                            seft.win += 20 * seft.betValue * seft.factor;
                            Tween_1.default.numberTo(node["label"], 20 * seft.betValue * seft.factor, 0.3);
                            Tween_1.default.numberTo(seft.lblWin, seft.win, 0.3);
                            break;
                    }
                    seft.left--;
                    seft.lblLeft.string = "" + seft.left;
                    if (seft.left <= 0) {
                        seft.hidden();
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
            node["label"] = node.getChildByName("win").getComponentInChildren(cc.Label);
            node["miss"] = node.getChildByName("miss");
            node["btn"].node.active = true;
            node["label"].node.parent.active = true;
            node["miss"].active = false;
            node["is_open"] = false;
        }
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            var btn = node.getChildByName("btn").getComponent(cc.Button);
            btn.node.active = true;
            btn.interactable = true;
            node.getChildByName("win").active = false;
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
        this.lblFactor.string = "X" + this.factor + "";
        this.heso = this.dataBonus[0];
        if (this.lblHeso != null)
            this.lblHeso.string = "x" + this.heso;
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
    ], PopupBonus.prototype, "lblFactor", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBonus.prototype, "lblHeso", void 0);
    __decorate([
        property(cc.Label)
    ], PopupBonus.prototype, "lblWin", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDZcXFNsb3Q2U2NyaXB0XFxTbG90Ni5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBNkpDO1FBM0pHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsU0FBRyxHQUFZLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBcUk5QyxDQUFDO0lBcElHLDBCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Z0NBQ1AsQ0FBQztZQUNOLElBQUksSUFBSSxHQUFHLE9BQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBQztvQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDdkIsUUFBUSxLQUFLLEVBQUU7d0JBQ1gsS0FBSyxDQUFDOzRCQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBQyxFQUFFLENBQUM7NEJBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQzNCLE1BQU07d0JBQ1YsS0FBSyxDQUFDOzRCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRyxHQUFHLENBQUMsQ0FBQzs0QkFDckQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDN0IsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzFDLE1BQU07d0JBRVYsS0FBSyxDQUFDOzRCQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxF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QUE2SkMsQ0E3SitCLGdCQUFNLEdBNkpyQztBQTdKWSxnQ0FBVTtBQThKdkIsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdDZDb250cm9sbGVyIGZyb20gXCIuL1Nsb3Q2LlNsb3Q2Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwQm9udXMgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQm94Tm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0Tm90aWZ5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibExlZnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRmFjdG9yOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEhlc286IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBmYWN0b3IgPSAxO1xuICAgIHByaXZhdGUgbGVmdCA9IDA7XG4gICAgcHJpdmF0ZSBiZXRWYWx1ZSA9IDA7XG4gICAgcHJpdmF0ZSBvbkZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIG9uU3BlY2lhbEZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIGRhdGFCb251czogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHByaXZhdGUgZGF0YVNwZWNpYWw6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgaGVzbzpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2luIDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbnRyb2xsZXI6U2xvdDZDb250cm9sbGVyID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdmFyIHNlZnQgPSB0aGlzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aW5cIikuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgICAgICBub2RlW1wibWlzc1wiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtaXNzXCIpO1xuICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBub2RlW1wibWlzc1wiXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWZ0LmNvbnRyb2xsZXIub25CdG5Tb3VuZFRvdWNoQm9udXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWZ0LmRhdGFCb251c1tzZWZ0LmRhdGFCb251cy5sZW5ndGggLSBzZWZ0LmxlZnRdO1xuICAgICAgICAgICAgICAgIGlmKG5vZGVbXCJpc19vcGVuXCJdID09IGZhbHNlICYmIHNlZnQubGVmdCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBub2RlW1wiaXNfb3BlblwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0LmZhY3RvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQubGJsRmFjdG9yLnN0cmluZyA9IFwiWFwiICsgc2VmdC5mYWN0b3IrXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIm1pc3NcIl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibWlzc1wiXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCpzZWZ0LmJldFZhbHVlICwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0LndpbiArPSA0KiBzZWZ0LmJldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHNlZnQubGJsV2luLHNlZnQud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibWlzc1wiXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwxMCogc2VmdC5iZXRWYWx1ZSAqIHNlZnQuZmFjdG9yLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQud2luICs9IDEwKiBzZWZ0LmJldFZhbHVlICogc2VmdC5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8oc2VmdC5sYmxXaW4sc2VmdC53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIm1pc3NcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sMTUqIHNlZnQuYmV0VmFsdWUgKiBzZWZ0LmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZ0LndpbiArPSAxNSogc2VmdC5iZXRWYWx1ZSAqIHNlZnQuZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHNlZnQubGJsV2luLHNlZnQud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJtaXNzXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VmdC53aW4gKz0gMjAqIHNlZnQuYmV0VmFsdWUgKiBzZWZ0LmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sMjAqIHNlZnQuYmV0VmFsdWUgKiBzZWZ0LmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhzZWZ0LmxibFdpbixzZWZ0LndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VmdC5sZWZ0LS07XG4gICAgICAgICAgICAgICAgICAgIHNlZnQubGJsTGVmdC5zdHJpbmcgPSBcIlwiICsgc2VmdC5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VmdC5sZWZ0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZnQuaGlkZGVuKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgfVxuXG4gICAgc2hvd0JvbnVzKGJldFZhbHVlOiBudW1iZXIsIGJvbnVzOiBzdHJpbmcsY29udHJvbGxlciwgb25GaW5pc2hlZDogKCkgPT4gdm9pZCkge1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMud2luID0gMDtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sdGhpcy53aW4sIDAuMyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIndpblwiKS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5vZGVbXCJtaXNzXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1pc3NcIik7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGVbXCJtaXNzXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aW5cIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZXRWYWx1ZSA9IGJldFZhbHVlO1xuICAgICAgICB0aGlzLm9uRmluaXNoZWQgPSBvbkZpbmlzaGVkO1xuICAgICAgICBsZXQgYXJyQm9udXMgPSBib251cy5zcGxpdChcIixcIik7XG4gICAgICAgIHRoaXMuZGF0YUJvbnVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyQm9udXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUJvbnVzLnB1c2goTnVtYmVyKGFyckJvbnVzW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5kYXRhQm9udXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJcIiArIHRoaXMubGVmdDtcbiAgICAgICAgdGhpcy5sYmxGYWN0b3Iuc3RyaW5nID0gXCJYXCIgKyB0aGlzLmZhY3RvcitcIlwiO1xuICAgICAgICB0aGlzLmhlc28gPSB0aGlzLmRhdGFCb251c1swXTtcbiAgICAgICAgaWYgKHRoaXMubGJsSGVzbyAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5sYmxIZXNvLnN0cmluZyA9IFwieFwiK3RoaXMuaGVzbztcbiAgICB9XG5cbiAgICBcbiAgICBoaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaGVkKCk7XG4gICAgICAgIH0sIDEuNSk7XG4gICAgICAgIC8vIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kU3VtYXJ5KCk7XG4gICAgICAgIC8vIFR3ZWVuLnNob3dQb3B1cCh0aGlzLm5vZGVCb3hOb3RpZnksdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCk7XG4gICAgICAgIC8vIFR3ZWVuLm51bWJlclRvKHRoaXMudHh0Tm90aWZ5LHRoaXMud2luLCAwLjMpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBvbkJ0bkV4aXQoKXtcbiAgICAgICAgVHdlZW4uaGlkZVBvcHVwKHRoaXMubm9kZUJveE5vdGlmeSx0aGlzLm5vZGVCb3hOb3RpZnkucGFyZW50LGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoZWQoKTtcbiAgICAgICAgfSwgMS41KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cEJvbnVzOyJdfQ==