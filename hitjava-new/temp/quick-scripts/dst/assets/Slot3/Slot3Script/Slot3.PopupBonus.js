
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3/Slot3Script/Slot3.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c03a6e2Bl9MPLhXSQ+P8I4x', 'Slot3.PopupBonus');
// Slot3/Slot3Script/Slot3.PopupBonus.ts

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
        _this.listItem = [];
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
            // let node = this.items.children[i];
            var node = this_1.listItem[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["shadow"] = node.getChildByName("shadow");
            node["icon"] = node.getChildByName("icon");
            node["factor"] = node.getChildByName("factor");
            node["btn"].node.on("click", function () {
                _this.controller.onBtnSoundTouchBonus();
                var value = _this.dataBonus[_this.dataBonus.length - _this.left];
                //  cc.log("click:" + value + " : " + node["is_open"]);
                if (node["is_open"] == false && _this.left > 0) {
                    node["is_open"] = true;
                    switch (value) {
                        case 0:
                            _this.factor++;
                            node["btn"].node.active = false;
                            node["factor"].active = true;
                            break;
                        case 1:
                            node["btn"].node.active = false;
                            node["icon"].active = true;
                            node["label"].node.active = true;
                            node["shadow"].active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 2:
                            node["btn"].node.active = false;
                            node["icon"].active = true;
                            node["label"].node.active = true;
                            node["shadow"].active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 3:
                            node["btn"].node.active = false;
                            node["icon"].active = true;
                            node["label"].node.active = true;
                            node["shadow"].active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 4:
                            node["btn"].node.active = false;
                            node["icon"].active = true;
                            node["label"].node.active = true;
                            node["shadow"].active = true;
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
        // for (let i = 0; i < this.items.childrenCount; i++) {
        for (var i = 0; i < this.listItem.length; i++) {
            _loop_1(i);
        }
    };
    PopupBonus.prototype.showBonus = function (betValue, bonus, controller, onFinished) {
        // super.show();
        this.node.active = true;
        cc.tween(this.node).set({ y: cc.winSize.height }).to(0.5, { y: 0 }, { easing: cc.easing.sineIn }).start();
        this.controller = controller;
        this.win = 0;
        Tween_1.default.numberTo(this.lblWin, this.win, 0.3);
        // for (let i = 0; i < this.items.childrenCount; i++) {
        for (var i = 0; i < this.listItem.length; i++) {
            var node = this.listItem[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["icon"] = node.getChildByName("icon");
            node["factor"] = node.getChildByName("factor");
            node["icon"].active = false;
            node["factor"].active = false;
            node["is_open"] = false;
        }
        for (var i = 0; i < this.listItem.length; i++) {
            var node = this.listItem[i];
            var btn = node.getChildByName("btn").getComponent(cc.Button);
            btn.node.active = true;
            btn.interactable = true;
            node.getChildByName("label").active = false;
            node.getChildByName("shadow").active = false;
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
        this.controller.onBtnSoundSumary();
        Tween_1.default.showPopup(this.nodeBoxNotify, this.nodeBoxNotify.parent);
        Tween_1.default.numberTo(this.txtNotify, this.win, 0.3);
    };
    PopupBonus.prototype.onClickAutoOpen = function () {
        var randomList = [];
        for (var i = 0; i < this.listItem.length; i++) {
            randomList.push(i);
        }
        randomList.sort(function () { return Math.random() - 0.5; });
        var _loop_2 = function (i) {
            var node = this_2.listItem[randomList[i]];
            if (this_2.left > 0) {
                cc.tween(node).delay(0.1 * i).call(function () {
                    node.getChildByName("btn").emit("click");
                }).start();
            }
        };
        var this_2 = this;
        for (var i = 0; i < this.listItem.length; i++) {
            _loop_2(i);
        }
    };
    PopupBonus.prototype.onBtnExit = function () {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function () {
            // this.dismiss();
            cc.tween(_this.node).to(0.5, { y: cc.winSize.height }, { easing: cc.easing.backIn }).call(function () {
                _this.node.active = false;
            }).start();
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
        property([cc.Node])
    ], PopupBonus.prototype, "listItem", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDNcXFNsb3QzU2NyaXB0XFxTbG90My5Qb3B1cEJvbnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFDbEUscUVBQWdFO0FBSTFELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWdDLDhCQUFNO0lBQXRDO1FBQUEscUVBb01DO1FBbE1HLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWMsRUFBRSxDQUFDO1FBQ2pCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFvQixJQUFJLENBQUM7O0lBNEsvQyxDQUFDO0lBM0tHLDBCQUFLLEdBQUw7UUFBQSxpQkE2RUM7Z0NBMUVZLENBQUM7WUFDTixxQ0FBcUM7WUFDckMsSUFBSSxJQUFJLEdBQUcsT0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUQsdURBQXVEO2dCQUN2RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLElBQUksS0FBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLFFBQVEsS0FBSyxFQUFFO3dCQUNYLEtBQUssQ0FBQzs0QkFDRixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDN0IsTUFBTTt3QkFDVixLQUFLLENBQUM7NEJBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTs0QkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7NEJBQzNCLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUN0RCxLQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDOzRCQUM5QixlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDM0MsTUFBTTt3QkFFVixLQUFLLENBQUM7NEJBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBOzRCQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTs0QkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7NEJBQzNCLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQ3JFLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDN0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzNDLE1BQU07d0JBQ1YsS0FBSyxDQUFDOzRCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs0QkFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTs0QkFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7NEJBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUNyRSxLQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7NEJBQzdDLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUMzQyxNQUFNO3dCQUNWLEtBQUssQ0FBQzs0QkFDRixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFD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LENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7Z0RBQ0s7SUFkaEIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQW9NdEI7SUFBRCxpQkFBQztDQXBNRCxBQW9NQyxDQXBNK0IsZ0JBQU0sR0FvTXJDO0FBcE1ZLGdDQUFVO0FBcU12QixrQkFBZSxVQUFVLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgU2xvdDRDb250cm9sbGVyIGZyb20gXCIuLi8uLi9TbG90NC9TbG90NFNjcmlwdC9TbG90NENvbnRyb2xsZXJcIjtcblxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBvcHVwQm9udXMgZXh0ZW5kcyBEaWFsb2cge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQm94Tm90aWZ5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0Tm90aWZ5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibExlZnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSGVzbzogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxXaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGxpc3RJdGVtOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBwcml2YXRlIGZhY3RvciA9IDE7XG4gICAgcHJpdmF0ZSBsZWZ0ID0gMDtcbiAgICBwcml2YXRlIGJldFZhbHVlID0gMDtcbiAgICBwcml2YXRlIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuICAgIHByaXZhdGUgb25TcGVjaWFsRmluaXNoZWQ6ICgpID0+IHZvaWQgPSBudWxsO1xuICAgIHByaXZhdGUgZGF0YUJvbnVzOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHJpdmF0ZSBkYXRhU3BlY2lhbDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBoZXNvOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgd2luOiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY29udHJvbGxlcjogU2xvdDRDb250cm9sbGVyID0gbnVsbDtcbiAgICBzdGFydCgpIHtcblxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSB0aGlzLml0ZW1zLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxpc3RJdGVtW2ldO1xuICAgICAgICAgICAgbm9kZVtcImJ0blwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBub2RlW1wibGFiZWxcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5vZGVbXCJzaGFkb3dcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwic2hhZG93XCIpO1xuICAgICAgICAgICAgbm9kZVtcImljb25cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIG5vZGVbXCJmYWN0b3JcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiZmFjdG9yXCIpO1xuICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cygpO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZGF0YUJvbnVzW3RoaXMuZGF0YUJvbnVzLmxlbmd0aCAtIHRoaXMubGVmdF07XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNsaWNrOlwiICsgdmFsdWUgKyBcIiA6IFwiICsgbm9kZVtcImlzX29wZW5cIl0pO1xuICAgICAgICAgICAgICAgIGlmIChub2RlW1wiaXNfb3BlblwiXSA9PSBmYWxzZSAmJiB0aGlzLmxlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbXCJpc19vcGVuXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdG9yKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJmYWN0b3JcIl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImljb25cIl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcInNoYWRvd1wiXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCAqIHRoaXMuYmV0VmFsdWUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gNCAqIHRoaXMuYmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJpY29uXCJdLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJzaGFkb3dcIl0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhub2RlW1wibGFiZWxcIl0sIDEwICogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luICs9IDEwICogdGhpcy5iZXRWYWx1ZSAqIHRoaXMuZmFjdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLCB0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImljb25cIl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0ubm9kZS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcInNoYWRvd1wiXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgMTUgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3IsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMTUgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wiaWNvblwiXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wic2hhZG93XCJdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMjAgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLCAyMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJcIiArIHRoaXMubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgc2hvd0JvbnVzKGJldFZhbHVlOiBudW1iZXIsIGJvbnVzOiBzdHJpbmcsIGNvbnRyb2xsZXIsIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgLy8gc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5zZXQoeyB5OiBjYy53aW5TaXplLmhlaWdodCB9KS50bygwLjUsIHsgeTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB0aGlzLndpbiA9IDA7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLCB0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0SXRlbVtpXTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgbm9kZVtcImljb25cIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIG5vZGVbXCJmYWN0b3JcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiZmFjdG9yXCIpO1xuICAgICAgICAgICAgbm9kZVtcImljb25cIl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlW1wiZmFjdG9yXCJdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gdGhpcy5saXN0SXRlbVtpXTtcbiAgICAgICAgICAgIGxldCBidG4gPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNoYWRvd1wiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJldFZhbHVlID0gYmV0VmFsdWU7XG4gICAgICAgIHRoaXMub25GaW5pc2hlZCA9IG9uRmluaXNoZWQ7XG4gICAgICAgIGxldCBhcnJCb251cyA9IGJvbnVzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdGhpcy5kYXRhQm9udXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJCb251cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQm9udXMucHVzaChOdW1iZXIoYXJyQm9udXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmRhdGFCb251cy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDE7XG4gICAgICAgIHRoaXMubGJsTGVmdC5zdHJpbmcgPSBcIlwiICsgdGhpcy5sZWZ0O1xuICAgICAgICB0aGlzLmhlc28gPSB0aGlzLmRhdGFCb251c1swXTtcbiAgICAgICAgdGhpcy5sYmxIZXNvLnN0cmluZyA9IHRoaXMuaGVzbyArIFwiXCI7XG4gICAgfVxuXG5cbiAgICBoaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kU3VtYXJ5KCk7XG4gICAgICAgIFR3ZWVuLnNob3dQb3B1cCh0aGlzLm5vZGVCb3hOb3RpZnksIHRoaXMubm9kZUJveE5vdGlmeS5wYXJlbnQpO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnR4dE5vdGlmeSwgdGhpcy53aW4sIDAuMyk7XG5cbiAgICB9XG4gICAgb25DbGlja0F1dG9PcGVuKCkge1xuICAgICAgICBsZXQgcmFuZG9tTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEl0ZW0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJhbmRvbUxpc3QucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByYW5kb21MaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0SXRlbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmxpc3RJdGVtW3JhbmRvbUxpc3RbaV1dO1xuICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA+IDApIHtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKS5kZWxheSgwLjEgKiBpKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5lbWl0KFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMuY29udHJvbGxlci5vbkJ0blNvdW5kVG91Y2hCb251cygpO1xuICAgICAgICAgICAgLy8gdmFyIHZhbHVlID0gdGhpcy5kYXRhQm9udXNbdGhpcy5kYXRhQm9udXMubGVuZ3RoIC0gdGhpcy5sZWZ0XTtcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmxlZnQgPiAwKVxuICAgICAgICAgICAgLy8gICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5mYWN0b3IrKztcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndpbiArPSA0ICogdGhpcy5iZXRWYWx1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndpbiArPSAxMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndpbiArPSAxNSAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndpbiArPSAyMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIHRoaXMubGVmdC0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uQnRuRXhpdCgpIHtcbiAgICAgICAgVHdlZW4uaGlkZVBvcHVwKHRoaXMubm9kZUJveE5vdGlmeSwgdGhpcy5ub2RlQm94Tm90aWZ5LnBhcmVudCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMC41LCB7IHk6IGNjLndpblNpemUuaGVpZ2h0IH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLm9uRmluaXNoZWQoKTtcbiAgICAgICAgfSwgMS41KTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1cEJvbnVzOyJdfQ==