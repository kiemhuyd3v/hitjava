
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dc4aB00A1MC4fYR4ZvgofA', 'Slot8.PopupBonus');
// Slot8/Slot8Script/Slot8.PopupBonus.ts

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
        _this.sfMiss = [];
        _this.sfWin = [];
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
        var _this = this;
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["labai"] = node["btn"].node.getChildByName("labai");
            node["miss"] = node["btn"].node.getChildByName("miss");
            node["win"] = node["btn"].node.getChildByName("win");
            node["label"] = node["win"].getComponentInChildren(cc.Label);
            node["chat"] = node["btn"].node.getChildByName("chat").getComponent(cc.Sprite);
            node["btn"].node.on("click", function () {
                _this.controller.onBtnSoundTouchBonus();
                var value = _this.dataBonus[_this.dataBonus.length - _this.left];
                //  cc.log("click:"+value+" : "+node["is_open"]);
                if (node["is_open"] == false && _this.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            _this.factor++;
                            _this.lblFactor.string = _this.factor + "";
                            node["labai"].active = false;
                            node["miss"].active = true;
                            node["win"].active = false;
                            node["chat"].node.active = true;
                            node["chat"].spriteFrame = _this.sfMiss[parseInt(Math.random() * _this.sfMiss.length + "")];
                            break;
                        case 1:
                            node["labai"].active = false;
                            node["miss"].active = false;
                            node["win"].active = true;
                            node["chat"].node.active = true;
                            node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 2:
                            node["labai"].active = false;
                            node["miss"].active = false;
                            node["win"].active = true;
                            node["chat"].node.active = true;
                            node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 3:
                            node["labai"].active = false;
                            node["miss"].active = false;
                            node["win"].active = true;
                            node["chat"].node.active = true;
                            node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 4:
                            node["labai"].active = false;
                            node["miss"].active = false;
                            node["win"].active = true;
                            node["chat"].node.active = true;
                            node["chat"].spriteFrame = _this.sfWin[parseInt(Math.random() * _this.sfWin.length + "")];
                            node["label"].node.active = true;
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
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["labai"] = node["btn"].node.getChildByName("labai");
            node["miss"] = node["btn"].node.getChildByName("miss");
            node["win"] = node["btn"].node.getChildByName("win");
            node["label"] = node["win"].getComponentInChildren(cc.Label);
            node["chat"] = node["btn"].node.getChildByName("chat").getComponent(cc.Sprite);
            node["is_open"] = false;
        }
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            var btn = node.getChildByName("btn").getComponent(cc.Button);
            btn.node.active = true;
            btn.interactable = true;
            node["labai"].active = true;
            node["miss"].active = false;
            node["win"].active = false;
            node["chat"].node.active = false;
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
        this.lblFactor.string = this.factor + "";
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
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function () {
            _this.dismiss();
            _this.onFinished();
        }, 1.5);
    };
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBonus.prototype, "sfMiss", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBonus.prototype, "sfWin", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OC5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBNktDO1FBM0tHLFlBQU0sR0FBb0IsRUFBRSxDQUFDO1FBRTdCLFdBQUssR0FBb0IsRUFBRSxDQUFDO1FBRTVCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsU0FBRyxHQUFZLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBaUo5QyxDQUFDO0lBaEpHLDBCQUFLLEdBQUw7UUFBQSxpQkF5RkM7Z0NBdkZZLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFD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OiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdDRDb250cm9sbGVyIGZyb20gXCIuL1Nsb3Q4Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwQm9udXMgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNmTWlzczpjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc2ZXaW46Y2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQm94Tm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0Tm90aWZ5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibExlZnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRmFjdG9yOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEhlc286IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsV2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSBmYWN0b3IgPSAxO1xuICAgIHByaXZhdGUgbGVmdCA9IDA7XG4gICAgcHJpdmF0ZSBiZXRWYWx1ZSA9IDA7XG4gICAgcHJpdmF0ZSBvbkZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIG9uU3BlY2lhbEZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgICBwcml2YXRlIGRhdGFCb251czogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgIHByaXZhdGUgZGF0YVNwZWNpYWw6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgaGVzbzpudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2luIDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvbnRyb2xsZXI6U2xvdDRDb250cm9sbGVyID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbm9kZVtcImxhYmFpXCJdID0gbm9kZVtcImJ0blwiXS5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiYWlcIik7XG4gICAgICAgICAgICBub2RlW1wibWlzc1wiXSA9IG5vZGVbXCJidG5cIl0ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1pc3NcIik7XG4gICAgICAgICAgICBub2RlW1wid2luXCJdID0gbm9kZVtcImJ0blwiXS5ub2RlLmdldENoaWxkQnlOYW1lKFwid2luXCIpO1xuICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZVtcIndpblwiXS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5vZGVbXCJjaGF0XCJdID0gbm9kZVtcImJ0blwiXS5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhdFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcblxuICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cygpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZGF0YUJvbnVzW3RoaXMuZGF0YUJvbnVzLmxlbmd0aCAtIHRoaXMubGVmdF07XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNsaWNrOlwiK3ZhbHVlK1wiIDogXCIrbm9kZVtcImlzX29wZW5cIl0pO1xuICAgICAgICAgICAgICAgIGlmKG5vZGVbXCJpc19vcGVuXCJdID09IGZhbHNlICYmIHRoaXMubGVmdCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBub2RlW1wiaXNfb3BlblwiXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhY3RvcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRmFjdG9yLnN0cmluZyA9IHRoaXMuZmFjdG9yK1wiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmFpXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJtaXNzXCJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIndpblwiXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiY2hhdFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImNoYXRcIl0uc3ByaXRlRnJhbWUgPSB0aGlzLnNmTWlzc1twYXJzZUludChNYXRoLnJhbmRvbSgpKnRoaXMuc2ZNaXNzLmxlbmd0aCtcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmFpXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJtaXNzXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJ3aW5cIl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiY2hhdFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImNoYXRcIl0uc3ByaXRlRnJhbWUgPSB0aGlzLnNmV2luW3BhcnNlSW50KE1hdGgucmFuZG9tKCkqdGhpcy5zZldpbi5sZW5ndGgrXCJcIildO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCp0aGlzLmJldFZhbHVlICwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSA0KiB0aGlzLmJldFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiYWlcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIm1pc3NcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIndpblwiXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJjaGF0XCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiY2hhdFwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZXaW5bcGFyc2VJbnQoTWF0aC5yYW5kb20oKSp0aGlzLnNmV2luLmxlbmd0aCtcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLDEwKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbix0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiYWlcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIm1pc3NcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIndpblwiXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJjaGF0XCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiY2hhdFwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZXaW5bcGFyc2VJbnQoTWF0aC5yYW5kb20oKSp0aGlzLnNmV2luLmxlbmd0aCtcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLDE1KiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTUqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbix0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiYWlcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIm1pc3NcIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcIndpblwiXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJjaGF0XCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiY2hhdFwiXS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZXaW5bcGFyc2VJbnQoTWF0aC5yYW5kb20oKSp0aGlzLnNmV2luLmxlbmd0aCtcIlwiKSBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luICs9IDIwKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLDIwKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJcIiArIHRoaXMubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgIFxuICAgIH1cblxuICAgIHNob3dCb251cyhiZXRWYWx1ZTogbnVtYmVyLCBib251czogc3RyaW5nLGNvbnRyb2xsZXIsIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB0aGlzLndpbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbm9kZVtcImxhYmFpXCJdID0gbm9kZVtcImJ0blwiXS5ub2RlLmdldENoaWxkQnlOYW1lKFwibGFiYWlcIik7XG4gICAgICAgICAgICBub2RlW1wibWlzc1wiXSA9IG5vZGVbXCJidG5cIl0ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1pc3NcIik7XG4gICAgICAgICAgICBub2RlW1wid2luXCJdID0gbm9kZVtcImJ0blwiXS5ub2RlLmdldENoaWxkQnlOYW1lKFwid2luXCIpO1xuICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZVtcIndpblwiXS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5vZGVbXCJjaGF0XCJdID0gbm9kZVtcImJ0blwiXS5ub2RlLmdldENoaWxkQnlOYW1lKFwiY2hhdFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIG5vZGVbXCJpc19vcGVuXCJdID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGJ0biA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYnRuLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICBub2RlW1wibGFiYWlcIl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGVbXCJtaXNzXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbm9kZVtcIndpblwiXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIG5vZGVbXCJjaGF0XCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZXRWYWx1ZSA9IGJldFZhbHVlO1xuICAgICAgICB0aGlzLm9uRmluaXNoZWQgPSBvbkZpbmlzaGVkO1xuICAgICAgICBsZXQgYXJyQm9udXMgPSBib251cy5zcGxpdChcIixcIik7XG4gICAgICAgIHRoaXMuZGF0YUJvbnVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyQm9udXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YUJvbnVzLnB1c2goTnVtYmVyKGFyckJvbnVzW2ldKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sZWZ0ID0gdGhpcy5kYXRhQm9udXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5mYWN0b3IgPSAxO1xuICAgICAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJcIiArIHRoaXMubGVmdDtcbiAgICAgICAgdGhpcy5sYmxGYWN0b3Iuc3RyaW5nID0gIHRoaXMuZmFjdG9yK1wiXCI7XG4gICAgICAgIHRoaXMuaGVzbyA9IHRoaXMuZGF0YUJvbnVzWzBdO1xuICAgICAgICB0aGlzLmxibEhlc28uc3RyaW5nID0gXCJ4XCIrdGhpcy5oZXNvO1xuICAgIH1cblxuICAgIFxuICAgIGhpZGRlbigpIHtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLm9uQnRuU291bmRTdW1hcnkoKTtcbiAgICAgICAgVHdlZW4uc2hvd1BvcHVwKHRoaXMubm9kZUJveE5vdGlmeSx0aGlzLm5vZGVCb3hOb3RpZnkucGFyZW50KTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50eHROb3RpZnksdGhpcy53aW4sIDAuMyk7XG4gICAgfVxuXG4gICAgb25CdG5FeGl0KCl7XG4gICAgICAgIFR3ZWVuLmhpZGVQb3B1cCh0aGlzLm5vZGVCb3hOb3RpZnksdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCxmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaGVkKCk7XG4gICAgICAgIH0sIDEuNSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBCb251czsiXX0=