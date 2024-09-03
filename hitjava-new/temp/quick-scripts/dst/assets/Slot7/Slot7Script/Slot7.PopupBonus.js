
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot7/Slot7Script/Slot7.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f2dam5xj9Gkaw6Wt5EaOjW', 'Slot7.PopupBonus');
// Slot7/Slot7Script/Slot7.PopupBonus.ts

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
        var _this = this;
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["ske"] = node.getChildByName("ske").getComponent(sp.Skeleton);
            node["ske"].animation = "mo";
            node["ske"].loop = true;
            node["btn"].node.active = true;
            node["btn"].node.on("click", function () {
                _this.controller.onBtnSoundTouchBonus();
                var value = _this.dataBonus[_this.dataBonus.length - _this.left];
                cc.log("click:" + value + " : " + node["is_open"]);
                if (node["is_open"] == false && _this.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            _this.factor++;
                            _this.lblFactor.string = _this.factor + "";
                            node["ske"].animation = "miss";
                            node["ske"].loop = true;
                            node["btn"].node.active = false;
                            break;
                        case 1:
                            node["ske"].animation = "mo2";
                            node["ske"].loop = true;
                            node["btn"].node.active = false;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 2:
                            node["ske"].animation = "mo2";
                            node["ske"].loop = true;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 3:
                            node["ske"].animation = "mo2";
                            node["ske"].loop = true;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 4:
                            node["ske"].animation = "mo2";
                            node["ske"].loop = true;
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
        Tween_1.default.numberTo(this.lblWin, this.win, 0.3);
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["ske"] = node.getChildByName("ske").getComponent(sp.Skeleton);
            node["ske"].animation = "mo";
            node["ske"].loop = true;
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
        this.lblFactor.string = this.factor + "";
        this.heso = this.dataBonus[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDdcXFNsb3Q3U2NyaXB0XFxTbG90Ny5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBMktDO1FBektDLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFvQixJQUFJLENBQUM7O0lBbUo3QyxDQUFDO0lBbEpDLDBCQUFLLEdBQUw7UUFBQSxpQkFvRkM7Z0NBbkZVLENBQUM7WUFDUixJQUFJLElBQUksR0FBRyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFB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QUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNLO0lBZGIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQTJLdEI7SUFBRCxpQkFBQztDQTNLRCxBQTJLQyxDQTNLK0IsZ0JBQU0sR0EyS3JDO0FBM0tZLGdDQUFVO0FBNEt2QixrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdDdDb250cm9sbGVyIGZyb20gXCIuL1Nsb3Q3LlNsb3Q3Q29udHJvbGxlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwQm9udXMgZXh0ZW5kcyBEaWFsb2cge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgaXRlbXM6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbm9kZUJveE5vdGlmeTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdHh0Tm90aWZ5OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJsTGVmdDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibEZhY3RvcjogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxibEhlc286IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBsYmxXaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgcHJpdmF0ZSBmYWN0b3IgPSAxO1xuICBwcml2YXRlIGxlZnQgPSAwO1xuICBwcml2YXRlIGJldFZhbHVlID0gMDtcbiAgcHJpdmF0ZSBvbkZpbmlzaGVkOiAoKSA9PiB2b2lkID0gbnVsbDtcbiAgcHJpdmF0ZSBvblNwZWNpYWxGaW5pc2hlZDogKCkgPT4gdm9pZCA9IG51bGw7XG4gIHByaXZhdGUgZGF0YUJvbnVzOiBBcnJheTxudW1iZXI+ID0gW107XG4gIHByaXZhdGUgZGF0YVNwZWNpYWw6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIGhlc286IG51bWJlciA9IDA7XG4gIHByaXZhdGUgd2luOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIGNvbnRyb2xsZXI6IFNsb3Q3Q29udHJvbGxlciA9IG51bGw7XG4gIHN0YXJ0KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBub2RlW1wic2tlXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNrZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgbm9kZVtcInNrZVwiXS5hbmltYXRpb24gPSBcIm1vXCI7XG4gICAgICBub2RlW1wic2tlXCJdLmxvb3AgPSB0cnVlO1xuICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlW1wiYnRuXCJdLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cygpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRhdGFCb251c1t0aGlzLmRhdGFCb251cy5sZW5ndGggLSB0aGlzLmxlZnRdO1xuICAgICAgICBjYy5sb2coXCJjbGljazpcIiArIHZhbHVlICsgXCIgOiBcIiArIG5vZGVbXCJpc19vcGVuXCJdKTtcbiAgICAgICAgaWYgKG5vZGVbXCJpc19vcGVuXCJdID09IGZhbHNlICYmIHRoaXMubGVmdCA+IDApIHtcbiAgICAgICAgICBub2RlW1wiaXNfb3BlblwiXSA9IHRydWU7XG4gICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICB0aGlzLmZhY3RvcisrO1xuICAgICAgICAgICAgICB0aGlzLmxibEZhY3Rvci5zdHJpbmcgPSB0aGlzLmZhY3RvciArIFwiXCI7XG4gICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0uYW5pbWF0aW9uID0gXCJtaXNzXCI7XG4gICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0ubG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0uYW5pbWF0aW9uID0gXCJtbzJcIjtcbiAgICAgICAgICAgICAgbm9kZVtcInNrZVwiXS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCAqIHRoaXMuYmV0VmFsdWUsIDAuMyk7XG4gICAgICAgICAgICAgIHRoaXMud2luICs9IDQgKiB0aGlzLmJldFZhbHVlO1xuICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0uYW5pbWF0aW9uID0gXCJtbzJcIjtcbiAgICAgICAgICAgICAgbm9kZVtcInNrZVwiXS5sb29wID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKFxuICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXSxcbiAgICAgICAgICAgICAgICAxMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcixcbiAgICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTAgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLCB0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0uYW5pbWF0aW9uID0gXCJtbzJcIjtcbiAgICAgICAgICAgICAgbm9kZVtcInNrZVwiXS5sb29wID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKFxuICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXSxcbiAgICAgICAgICAgICAgICAxNSAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcixcbiAgICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTUgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLCB0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgIG5vZGVbXCJza2VcIl0uYW5pbWF0aW9uID0gXCJtbzJcIjtcbiAgICAgICAgICAgICAgbm9kZVtcInNrZVwiXS5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICB0aGlzLndpbiArPSAyMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8oXG4gICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLFxuICAgICAgICAgICAgICAgIDIwICogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yLFxuICAgICAgICAgICAgICAgIDAuM1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxlZnQtLTtcbiAgICAgICAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJcIiArIHRoaXMubGVmdDtcbiAgICAgICAgICBpZiAodGhpcy5sZWZ0IDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzaG93Qm9udXMoXG4gICAgYmV0VmFsdWU6IG51bWJlcixcbiAgICBib251czogc3RyaW5nLFxuICAgIGNvbnRyb2xsZXIsXG4gICAgb25GaW5pc2hlZDogKCkgPT4gdm9pZFxuICApIHtcbiAgICBzdXBlci5zaG93KCk7XG4gICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB0aGlzLndpbiA9IDA7XG4gICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICBub2RlW1wic2tlXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNrZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgbm9kZVtcInNrZVwiXS5hbmltYXRpb24gPSBcIm1vXCI7XG4gICAgICBub2RlW1wic2tlXCJdLmxvb3AgPSB0cnVlO1xuICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIG5vZGVbXCJpc19vcGVuXCJdID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgIGxldCBidG4gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgYnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmJldFZhbHVlID0gYmV0VmFsdWU7XG4gICAgdGhpcy5vbkZpbmlzaGVkID0gb25GaW5pc2hlZDtcbiAgICBsZXQgYXJyQm9udXMgPSBib251cy5zcGxpdChcIixcIik7XG4gICAgdGhpcy5kYXRhQm9udXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckJvbnVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmRhdGFCb251cy5wdXNoKE51bWJlcihhcnJCb251c1tpXSkpO1xuICAgIH1cbiAgICB0aGlzLmxlZnQgPSB0aGlzLmRhdGFCb251cy5sZW5ndGggLSAxO1xuICAgIHRoaXMuZmFjdG9yID0gMTtcbiAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJcIiArIHRoaXMubGVmdDtcbiAgICB0aGlzLmxibEZhY3Rvci5zdHJpbmcgPSB0aGlzLmZhY3RvciArIFwiXCI7XG4gICAgdGhpcy5oZXNvID0gdGhpcy5kYXRhQm9udXNbMF07XG4gICAgdGhpcy5sYmxIZXNvLnN0cmluZyA9IFwieFwiICsgdGhpcy5oZXNvO1xuICB9XG5cbiAgaGlkZGVuKCkge1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgdGhpcy5vbkZpbmlzaGVkKCk7XG4gICAgfSwgMS41KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFN1bWFyeSgpO1xuICAgIC8vIFR3ZWVuLnNob3dQb3B1cCh0aGlzLm5vZGVCb3hOb3RpZnksdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCk7XG4gICAgLy8gVHdlZW4ubnVtYmVyVG8odGhpcy50eHROb3RpZnksdGhpcy53aW4sIDAuMyk7XG4gIH1cblxuICBvbkJ0bkV4aXQoKSB7XG4gICAgVHdlZW4uaGlkZVBvcHVwKHRoaXMubm9kZUJveE5vdGlmeSwgdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCwgZmFsc2UpO1xuICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgdGhpcy5vbkZpbmlzaGVkKCk7XG4gICAgfSwgMS41KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBCb251cztcbiJdfQ==