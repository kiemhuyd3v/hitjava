
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4812c8fHhdGUpAoly1lQpvf', 'Slot4.PopupBonus');
// Slot4/Slot4Script/Slot4.PopupBonus.ts

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
        var sefl = this;
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["btn"].node.on("click", function () {
                _this.controller.onBtnSoundTouchBonus();
                var value = sefl.dataBonus[sefl.dataBonus.length - _this.left];
                //  cc.log("click:"+value+" : "+node["is_open"]);
                if (node["is_open"] == false && sefl.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            sefl.factor++;
                            sefl.lblFactor.string = _this.factor + "";
                            node["btn_spine"].setAnimation(0, "idle_0", true);
                            node["btn_spine"].addAnimation(1, "open_0", false);
                            break;
                        case 1:
                            node["btn_spine"].setAnimation(0, "idle_1", true);
                            node["btn_spine"].addAnimation(1, "open_1", false);
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 2:
                            node["btn_spine"].setAnimation(0, "idle_2", true);
                            node["btn_spine"].addAnimation(1, "open_2", false);
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 3:
                            node["btn_spine"].setAnimation(0, "idle_3", true);
                            node["btn_spine"].addAnimation(1, "open_3", false);
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 4:
                            node["btn_spine"].setAnimation(0, "idle_4", true);
                            node["btn_spine"].addAnimation(1, "open_4", false);
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
            node["btn_spine"] = node["btn"].getComponentInChildren(sp.Skeleton);
            node["btn_spine"].setAnimation(0, "idle", true);
            node["btn_spine"].addAnimation(1, "appear", false);
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
            if (i === 10)
                break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NC5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBRzFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBc0pDO1FBcEpHLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFhLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQWEsSUFBSSxDQUFDO1FBQ2hCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVSxDQUFDLENBQUM7UUFDaEIsU0FBRyxHQUFZLENBQUMsQ0FBQztRQUNqQixnQkFBVSxHQUFtQixJQUFJLENBQUM7O0lBOEg5QyxDQUFDO0lBN0hHLDBCQUFLLEdBQUw7UUFBQSxpQkF3RUM7UUF0RUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO2dDQUNQLENBQUM7WUFDTixJQUFJLElBQUksR0FBRyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FB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QUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRWpELENBQUM7SUFFRCw4QkFBUyxHQUFUO1FBQUEsaUJBTUM7UUFMRyxlQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0lBbkpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ0k7SUFFdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFkZixVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBc0p0QjtJQUFELGlCQUFDO0NBdEpELEFBc0pDLENBdEorQixnQkFBTSxHQXNKckM7QUF0SlksZ0NBQVU7QUF1SnZCLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9EaWFsb2dcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFNsb3Q0Q29udHJvbGxlciBmcm9tIFwiLi9TbG90NENvbnRyb2xsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBQb3B1cEJvbnVzIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveE5vdGlmeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dE5vdGlmeTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxMZWZ0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEZhY3RvcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxIZXNvOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFdpbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgZmFjdG9yID0gMTtcbiAgICBwcml2YXRlIGxlZnQgPSAwO1xuICAgIHByaXZhdGUgYmV0VmFsdWUgPSAwO1xuICAgIHByaXZhdGUgb25GaW5pc2hlZDogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBvblNwZWNpYWxGaW5pc2hlZDogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBkYXRhQm9udXM6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwcml2YXRlIGRhdGFTcGVjaWFsOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGhlc286bnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHdpbiA6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBjb250cm9sbGVyOlNsb3Q0Q29udHJvbGxlciA9IG51bGw7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIFxuICAgICAgICB2YXIgc2VmbCA9IHRoaXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVtcy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFRvdWNoQm9udXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzZWZsLmRhdGFCb251c1tzZWZsLmRhdGFCb251cy5sZW5ndGggLSB0aGlzLmxlZnRdO1xuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJjbGljazpcIit2YWx1ZStcIiA6IFwiK25vZGVbXCJpc19vcGVuXCJdKTtcbiAgICAgICAgICAgICAgICBpZihub2RlW1wiaXNfb3BlblwiXSA9PSBmYWxzZSAmJiBzZWZsLmxlZnQgPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VmbC5mYWN0b3IrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWZsLmxibEZhY3Rvci5zdHJpbmcgPSB0aGlzLmZhY3RvcitcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJidG5fc3BpbmVcIl0uc2V0QW5pbWF0aW9uKDAsXCJpZGxlXzBcIix0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuX3NwaW5lXCJdLmFkZEFuaW1hdGlvbigxLFwib3Blbl8wXCIsZmFsc2UpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuX3NwaW5lXCJdLnNldEFuaW1hdGlvbigwLFwiaWRsZV8xXCIsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0bl9zcGluZVwiXS5hZGRBbmltYXRpb24oMSxcIm9wZW5fMVwiLGZhbHNlKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLCA0KnRoaXMuYmV0VmFsdWUgLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luICs9IDQqIHRoaXMuYmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJidG5fc3BpbmVcIl0uc2V0QW5pbWF0aW9uKDAsXCJpZGxlXzJcIix0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuX3NwaW5lXCJdLmFkZEFuaW1hdGlvbigxLFwib3Blbl8yXCIsZmFsc2UpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sMTAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSAxMCogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJidG5fc3BpbmVcIl0uc2V0QW5pbWF0aW9uKDAsXCJpZGxlXzNcIix0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuX3NwaW5lXCJdLmFkZEFuaW1hdGlvbigxLFwib3Blbl8zXCIsZmFsc2UpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sMTUqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSAxNSogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJidG5fc3BpbmVcIl0uc2V0QW5pbWF0aW9uKDAsXCJpZGxlXzRcIix0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuX3NwaW5lXCJdLmFkZEFuaW1hdGlvbigxLFwib3Blbl80XCIsZmFsc2UpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSAyMCogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwyMCogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnQtLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxMZWZ0LnN0cmluZyA9IFwiXCIgKyB0aGlzLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlZnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICBcbiAgICB9XG5cbiAgICBzaG93Qm9udXMoYmV0VmFsdWU6IG51bWJlciwgYm9udXM6IHN0cmluZyxjb250cm9sbGVyLCBvbkZpbmlzaGVkOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHN1cGVyLnNob3coKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgdGhpcy53aW4gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5fc3BpbmVcIl0gPSBub2RlW1wiYnRuXCJdLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgbm9kZVtcImJ0bl9zcGluZVwiXS5zZXRBbmltYXRpb24oMCxcImlkbGVcIix0cnVlKTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5fc3BpbmVcIl0uYWRkQW5pbWF0aW9uKDEsXCJhcHBlYXJcIixmYWxzZSk7IFxuICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJldFZhbHVlID0gYmV0VmFsdWU7XG4gICAgICAgIHRoaXMub25GaW5pc2hlZCA9IG9uRmluaXNoZWQ7XG4gICAgICAgIGxldCBhcnJCb251cyA9IGJvbnVzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdGhpcy5kYXRhQm9udXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJCb251cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQm9udXMucHVzaChOdW1iZXIoYXJyQm9udXNbaV0pKTtcbiAgICAgICAgICAgIGlmIChpID09PSAxMClcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmRhdGFCb251cy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDE7XG4gICAgICAgIHRoaXMubGJsTGVmdC5zdHJpbmcgPSBcIlwiICsgdGhpcy5sZWZ0O1xuICAgICAgICB0aGlzLmxibEZhY3Rvci5zdHJpbmcgPSAgdGhpcy5mYWN0b3IrXCJcIjtcbiAgICAgICAgdGhpcy5oZXNvID0gdGhpcy5kYXRhQm9udXNbMF07XG4gICAgICAgIHRoaXMubGJsSGVzby5zdHJpbmcgPSBcInhcIit0aGlzLmhlc287XG4gICAgfVxuXG4gICAgXG4gICAgaGlkZGVuKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFN1bWFyeSgpO1xuICAgICAgICBUd2Vlbi5zaG93UG9wdXAodGhpcy5ub2RlQm94Tm90aWZ5LHRoaXMubm9kZUJveE5vdGlmeS5wYXJlbnQpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnR4dE5vdGlmeSx0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25CdG5FeGl0KCl7XG4gICAgICAgIFR3ZWVuLmhpZGVQb3B1cCh0aGlzLm5vZGVCb3hOb3RpZnksdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCxmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICAgICAgdGhpcy5vbkZpbmlzaGVkKCk7XG4gICAgICAgIH0sIDEuNSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9wdXBCb251czsiXX0=