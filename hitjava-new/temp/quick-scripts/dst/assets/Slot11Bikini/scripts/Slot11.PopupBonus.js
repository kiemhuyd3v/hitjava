
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot11Bikini/scripts/Slot11.PopupBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a231iAio1APLc50xrjRaEa', 'Slot11.PopupBonus');
// Slot11Bikini/scripts/Slot11.PopupBonus.ts

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
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PopupBonus = /** @class */ (function (_super) {
    __extends(PopupBonus, _super);
    function PopupBonus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeGame1 = null;
        _this.nodeGame2 = null;
        _this.nodeNotify = null;
        _this.items = null;
        _this.itemSpecial = null;
        _this.nodeBoxNotify = null;
        _this.txtNotify = null;
        _this.lblLeft = null;
        _this.lblFactor = null;
        _this.lblHeso = null;
        _this.lblWin = null;
        _this.itemTemplate = null;
        _this.itemContainer = null;
        _this.sprItemBg = [];
        _this.sprItemBg2 = [];
        _this.factor = 1;
        _this.left = 0;
        _this.betValue = 0;
        _this.onFinished = null;
        _this.onSpecialFinished = null;
        _this.dataBonus = [];
        _this.dataSpecial = -1;
        _this.heso = 0;
        _this.win = 0;
        _this.listFactor = [];
        _this.controller = null;
        _this.isChooseFactor = false;
        return _this;
    }
    PopupBonus.prototype.start = function () {
        var _this = this;
        cc.log("chay vao start");
        var _loop_1 = function (i) {
            var node = this_1.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["ske"] = node.getChildByName("ske").getComponent(cc.Sprite);
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
                            // this.lblFactor.string = this.factor + "";
                            node['ske'].spriteFrame = _this.sprItemBg[1];
                            break;
                        case 1:
                            node['ske'].spriteFrame = _this.sprItemBg[0];
                            node['lbShadow'].active = true;
                            node["btn"].node.active = false;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 4 * _this.betValue, 0.3);
                            _this.win += 4 * _this.betValue;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 2:
                            node['ske'].spriteFrame = _this.sprItemBg[0];
                            node['lbShadow'].active = true;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 10 * _this.betValue * _this.factor, 0.3);
                            _this.win += 10 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 3:
                            node['ske'].spriteFrame = _this.sprItemBg[0];
                            node['lbShadow'].active = true;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            Tween_1.default.numberTo(node["label"], 15 * _this.betValue * _this.factor, 0.3);
                            _this.win += 15 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                        case 4:
                            node['ske'].spriteFrame = _this.sprItemBg[0];
                            node['lbShadow'].active = true;
                            node["label"].node.active = true;
                            node["label"].string = "0";
                            _this.win += 20 * _this.betValue * _this.factor;
                            Tween_1.default.numberTo(node["label"], 20 * _this.betValue * _this.factor, 0.3);
                            Tween_1.default.numberTo(_this.lblWin, _this.win, 0.3);
                            break;
                    }
                    _this.left--;
                    _this.lblLeft.string = "Lượt: " + _this.left;
                    if (_this.left <= 0) {
                        _this.showResult();
                    }
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.items.childrenCount; i++) {
            _loop_1(i);
        }
    };
    PopupBonus.prototype.initItem = function () {
        if (this.items.childrenCount < 15) {
            for (var i = 0; i < 14; i++) {
                var item = cc.instantiate(this.itemTemplate);
                item.parent = this.itemContainer;
            }
        }
    };
    PopupBonus.prototype.showBonus = function (betValue, bonus, controller, onFinished, numberIcon) {
        cc.log("chay vao showbonus");
        this.node.active = true;
        this.nodeGame2.active = true;
        this.nodeGame2.scale = 1.0;
        this.nodeGame2.opacity = 255;
        this.nodeGame1.active = false;
        this.nodeBoxNotify.active = false;
        this.isChooseFactor = false;
        this.initItem();
        this.controller = controller;
        this.win = 0;
        Tween_1.default.numberTo(this.lblWin, this.win, 0.3);
        for (var i = 0; i < this.items.childrenCount; i++) {
            var node = this.items.children[i];
            node["btn"] = node.getChildByName("btn").getComponent(cc.Button);
            node["label"] = node.getChildByName("label").getComponent(cc.Label);
            node["ske"] = node.getChildByName("ske").getComponent(cc.Sprite);
            node['ske'].spriteFrame = this.sprItemBg[2];
            node['lbShadow'] = node.getChildByName("shadow_win");
            node['lbShadow'].active = false;
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
        this.lblLeft.string = "Lượt: " + this.left;
        // this.lblFactor.string = this.factor + "";
        this.heso = this.dataBonus[0];
        this.lblHeso.string = "Hệ số:" + "x" + this.heso;
        switch (numberIcon) {
            case 3:
                this.listFactor = [1, 2, 3];
                break;
            case 4:
                this.listFactor = [2, 3, 4];
                break;
            case 5:
                this.listFactor = [3, 4, 5];
                break;
        }
        this.listFactor.sort(function () { return Math.random() - 0.5; });
        for (var i = 0; i < this.itemSpecial.childrenCount; i++) {
            var itemSpec = this.itemSpecial.children[i];
            itemSpec['is_open'] = false;
            itemSpec.scale = 1.0;
            itemSpec['sprFactor'] = itemSpec.getChildByName("sprFactor").getComponent(cc.Sprite);
            itemSpec['bg'] = itemSpec.getChildByName("ske").getComponent(cc.Sprite);
            itemSpec['bg'].spriteFrame = this.sprItemBg2[0];
            itemSpec['sprFactor'].node.active = false;
            itemSpec['sprFactor'].node.color = cc.Color.WHITE;
        }
        cc.tween(this.node).set({ y: cc.winSize.height }).to(0.5, { y: 0 }, { easing: cc.easing.sineIn }).start();
    };
    PopupBonus.prototype.onClickFactor = function (even, data) {
        var _this = this;
        var btn = even.target;
        var itemParent = btn.parent;
        if (this.isChooseFactor) {
            return;
        }
        this.isChooseFactor = true;
        var cb1 = function () {
            itemParent['is_open'] = true;
            itemParent['sprFactor'].spriteFrame = _this.sprItemBg2[_this.heso];
            itemParent['bg'].spriteFrame = _this.sprItemBg2[6];
            itemParent['sprFactor'].node.active = true;
            for (var i = 0; i < 3; i++) {
                if (_this.heso == _this.listFactor[i]) {
                    _this.listFactor.splice(i, 1);
                    break;
                }
            }
        };
        this.effOpenGift(itemParent, cb1, 1.2);
        this.scheduleOnce(function () {
            var count = 0;
            var _loop_2 = function (i) {
                var itemSpec = _this.itemSpecial.children[i];
                if (!itemSpec['is_open']) {
                    var cb = (function () {
                        itemSpec['bg'].spriteFrame = _this.sprItemBg2[6];
                        itemSpec['sprFactor'].spriteFrame = _this.sprItemBg2[_this.listFactor[count]];
                        itemSpec['sprFactor'].node.active = true;
                        itemSpec['sprFactor'].node.color = cc.Color.GRAY;
                        count++;
                    });
                    _this.effOpenGift(itemSpec, cb);
                }
            };
            for (var i = 0; i < _this.itemSpecial.childrenCount; i++) {
                _loop_2(i);
            }
        }, 1.0);
        this.scheduleOnce(function () {
            cc.tween(_this.nodeGame2).to(0.3, { scale: 0.8, opacity: 150 }, { easing: cc.easing.backIn }).call(function () {
                _this.nodeGame2.active = false;
                _this.nodeGame1.active = true;
            }).start();
        }, 4.0);
    };
    PopupBonus.prototype.effOpenGift = function (item, cb, scale) {
        if (scale === void 0) { scale = 1.0; }
        cc.tween(item)
            .to(0.5, { scale: 0.9 })
            .to(0.5, { scale: scale }, { easing: cc.easing.backOut })
            .start();
        cc.tween(item).delay(0.65).call(function () {
            cb();
        }).start();
    };
    PopupBonus.prototype.showResult = function () {
        var _this = this;
        var lbWin = this.nodeBoxNotify.getChildByName("lbResult").getComponent(cc.Label);
        lbWin.string = this.heso + " x " + Utils_1.default.formatNumber(this.win) + " = " + (Utils_1.default.formatNumber(this.win * this.heso));
        this.nodeBoxNotify.active = true;
        cc.tween(this.nodeBoxNotify)
            .set({ scale: 0.8, opacity: 150 })
            .to(0.3, { scale: 1.0, opacity: 255 }, { easing: cc.easing.backOut })
            .delay(3.0)
            .call(function () {
            _this.hidden();
        })
            .start();
    };
    PopupBonus.prototype.hidden = function () {
        var _this = this;
        cc.tween(this.node).to(0.3, { y: cc.winSize.height }, { easing: cc.easing.sineIn }).call(function () {
            _this.node.active = false;
            _this.onFinished();
        }).start();
    };
    PopupBonus.prototype.onBtnExit = function () {
        var _this = this;
        Tween_1.default.hidePopup(this.nodeBoxNotify, this.nodeBoxNotify.parent, false);
        this.scheduleOnce(function () {
            _this.onFinished();
        }, 1.5);
    };
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "nodeGame1", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "nodeGame2", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "nodeNotify", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "items", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "itemSpecial", void 0);
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
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], PopupBonus.prototype, "itemContainer", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBonus.prototype, "sprItemBg", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], PopupBonus.prototype, "sprItemBg2", void 0);
    PopupBonus = __decorate([
        ccclass
    ], PopupBonus);
    return PopupBonus;
}(cc.Component));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDExQmlraW5pXFxzY3JpcHRzXFxTbG90MTEuUG9wdXBCb251cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUVBQWdFO0FBQ2hFLHFFQUFnRTtBQUcxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFnQyw4QkFBWTtJQUE1QztRQUFBLHFFQXNSQztRQXBSRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFFekIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFeEIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBUyxHQUFxQixFQUFFLENBQUM7UUFFakMsZ0JBQVUsR0FBcUIsRUFBRSxDQUFDO1FBQzFCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxVQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1QsY0FBUSxHQUFHLENBQUMsQ0FBQztRQUNiLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBQzlCLHVCQUFpQixHQUFlLElBQUksQ0FBQztRQUNyQyxlQUFTLEdBQWtCLEVBQUUsQ0FBQztRQUM5QixpQkFBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLFVBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixnQkFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVSxHQUFxQixJQUFJLENBQUM7UUFDcEMsb0JBQWMsR0FBRyxLQUFLLENBQUM7O0lBNE9uQyxDQUFDO0lBM09HLDBCQUFLLEdBQUw7UUFBQSxpQkF1RUM7UUF0RUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dDQUNoQixDQUFDO1lBQ04sSUFBSSxJQUFJLEdBQUcsT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDdkMsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlELEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25ELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssSUFBSSxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTtvQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDdkIsUUFBUSxLQUFLLEVBQUU7d0JBQ1gsS0FBSyxDQUFDOzRCQUNGLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDZCw0Q0FBNEM7NEJBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUMsTUFBTTt3QkFDVixLQUFLLENBQUM7NEJBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzRCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDOzRCQUMzQixlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDdEQsS0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDOUIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzNDLE1BQU07d0JBRVYsS0FBSyxDQUFDOzRCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7NEJBQzNCLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQ3JFLEtBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQzs0QkFDN0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQzNDLE1BQU07d0JBQ1YsS0FBSyxDQUFDOzRCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7NEJBQy9CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzs0QkFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7NEJBQzNCLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQ3JFLEtBQUksQ0FBQyxHQUFH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LEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDTTtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSztJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aURBQ007SUFFakM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7a0RBQ087SUE5QnpCLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FzUnRCO0lBQUQsaUJBQUM7Q0F0UkQsQUFzUkMsQ0F0UitCLEVBQUUsQ0FBQyxTQUFTLEdBc1IzQztBQXRSWSxnQ0FBVTtBQXVSdkIsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZ1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBTbG90MTFDb250cm9sbGVyIGZyb20gXCIuL1Nsb3QxMS5TbG90MTFDb250cm9sbGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgUG9wdXBCb251cyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUdhbWUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlR2FtZTI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVOb3RpZnk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBpdGVtU3BlY2lhbDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveE5vdGlmeTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dE5vdGlmeTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxMZWZ0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEZhY3RvcjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxIZXNvOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFdpbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbUNvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3BySXRlbUJnOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3BySXRlbUJnMjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIHByaXZhdGUgZmFjdG9yID0gMTtcbiAgICBwcml2YXRlIGxlZnQgPSAwO1xuICAgIHByaXZhdGUgYmV0VmFsdWUgPSAwO1xuICAgIHByaXZhdGUgb25GaW5pc2hlZDogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBvblNwZWNpYWxGaW5pc2hlZDogKCkgPT4gdm9pZCA9IG51bGw7XG4gICAgcHJpdmF0ZSBkYXRhQm9udXM6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICBwcml2YXRlIGRhdGFTcGVjaWFsOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGhlc286IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSB3aW46IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0RmFjdG9yID0gW107XG4gICAgcHJpdmF0ZSBjb250cm9sbGVyOiBTbG90MTFDb250cm9sbGVyID0gbnVsbDtcbiAgICBwcml2YXRlIGlzQ2hvb3NlRmFjdG9yID0gZmFsc2U7XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLmxvZyhcImNoYXkgdmFvIHN0YXJ0XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbm9kZVtcInNrZVwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJza2VcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGVbXCJidG5cIl0ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xsZXIub25CdG5Tb3VuZFRvdWNoQm9udXMoKTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRhdGFCb251c1t0aGlzLmRhdGFCb251cy5sZW5ndGggLSB0aGlzLmxlZnRdO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImNsaWNrOlwiICsgdmFsdWUgKyBcIiA6IFwiICsgbm9kZVtcImlzX29wZW5cIl0pO1xuICAgICAgICAgICAgICAgIGlmIChub2RlW1wiaXNfb3BlblwiXSA9PSBmYWxzZSAmJiB0aGlzLmxlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbXCJpc19vcGVuXCJdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFjdG9yKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYmxGYWN0b3Iuc3RyaW5nID0gdGhpcy5mYWN0b3IgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3NrZSddLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJJdGVtQmdbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsnc2tlJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckl0ZW1CZ1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlWydsYlNoYWRvdyddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImJ0blwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKG5vZGVbXCJsYWJlbFwiXSwgNCAqIHRoaXMuYmV0VmFsdWUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gNCAqIHRoaXMuYmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW4sIHRoaXMud2luLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsnc2tlJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckl0ZW1CZ1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlWydsYlNoYWRvdyddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLCAxMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSAxMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsnc2tlJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckl0ZW1CZ1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlWydsYlNoYWRvdyddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLCAxNSAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpbiArPSAxNSAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsnc2tlJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckl0ZW1CZ1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlWydsYlNoYWRvdyddLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVtcImxhYmVsXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlW1wibGFiZWxcIl0uc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW4gKz0gMjAgKiB0aGlzLmJldFZhbHVlICogdGhpcy5mYWN0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obm9kZVtcImxhYmVsXCJdLCAyMCAqIHRoaXMuYmV0VmFsdWUgKiB0aGlzLmZhY3RvciwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbiwgdGhpcy53aW4sIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdC0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibExlZnQuc3RyaW5nID0gXCJMxrDhu6N0OiBcIiArIHRoaXMubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGVmdCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgIH1cbiAgICBpbml0SXRlbSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudCA8IDE1KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuaXRlbUNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2hvd0JvbnVzKGJldFZhbHVlOiBudW1iZXIsIGJvbnVzOiBzdHJpbmcsIGNvbnRyb2xsZXIsIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQsIG51bWJlckljb24pIHtcbiAgICAgICAgY2MubG9nKFwiY2hheSB2YW8gc2hvd2JvbnVzXCIpO1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlR2FtZTIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlR2FtZTIuc2NhbGUgPSAxLjA7XG4gICAgICAgIHRoaXMubm9kZUdhbWUyLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgIHRoaXMubm9kZUdhbWUxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGVCb3hOb3RpZnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNDaG9vc2VGYWN0b3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0SXRlbSgpO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICB0aGlzLndpbiA9IDA7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luLCB0aGlzLndpbiwgMC4zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLml0ZW1zLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbm9kZVtcImJ0blwiXSA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBub2RlW1wibGFiZWxcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5vZGVbXCJza2VcIl0gPSBub2RlLmdldENoaWxkQnlOYW1lKFwic2tlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgbm9kZVsnc2tlJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckl0ZW1CZ1syXTtcbiAgICAgICAgICAgIG5vZGVbJ2xiU2hhZG93J10gPSBub2RlLmdldENoaWxkQnlOYW1lKFwic2hhZG93X3dpblwiKTtcbiAgICAgICAgICAgIG5vZGVbJ2xiU2hhZG93J10uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBub2RlW1wiYnRuXCJdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGVbXCJsYWJlbFwiXS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgbm9kZVtcImlzX29wZW5cIl0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHRoaXMuaXRlbXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgYnRuID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ0bi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJldFZhbHVlID0gYmV0VmFsdWU7XG4gICAgICAgIHRoaXMub25GaW5pc2hlZCA9IG9uRmluaXNoZWQ7XG4gICAgICAgIGxldCBhcnJCb251cyA9IGJvbnVzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdGhpcy5kYXRhQm9udXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJCb251cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhQm9udXMucHVzaChOdW1iZXIoYXJyQm9udXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxlZnQgPSB0aGlzLmRhdGFCb251cy5sZW5ndGggLSAxO1xuICAgICAgICB0aGlzLmZhY3RvciA9IDE7XG4gICAgICAgIHRoaXMubGJsTGVmdC5zdHJpbmcgPSBcIkzGsOG7o3Q6IFwiICsgdGhpcy5sZWZ0O1xuICAgICAgICAvLyB0aGlzLmxibEZhY3Rvci5zdHJpbmcgPSB0aGlzLmZhY3RvciArIFwiXCI7XG4gICAgICAgIHRoaXMuaGVzbyA9IHRoaXMuZGF0YUJvbnVzWzBdO1xuICAgICAgICB0aGlzLmxibEhlc28uc3RyaW5nID0gXCJI4buHIHPhu5E6XCIgKyBcInhcIiArIHRoaXMuaGVzbztcbiAgICAgICAgc3dpdGNoIChudW1iZXJJY29uKSB7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0RmFjdG9yID0gWzEsIDIsIDNdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIHRoaXMubGlzdEZhY3RvciA9IFsyLCAzLCA0XTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RGYWN0b3IgPSBbMywgNCwgNV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RGYWN0b3Iuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1TcGVjaWFsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW1TcGVjID0gdGhpcy5pdGVtU3BlY2lhbC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGl0ZW1TcGVjWydpc19vcGVuJ10gPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW1TcGVjLnNjYWxlID0gMS4wO1xuICAgICAgICAgICAgaXRlbVNwZWNbJ3NwckZhY3RvciddID0gaXRlbVNwZWMuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJGYWN0b3JcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpdGVtU3BlY1snYmcnXSA9IGl0ZW1TcGVjLmdldENoaWxkQnlOYW1lKFwic2tlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaXRlbVNwZWNbJ2JnJ10uc3ByaXRlRnJhbWUgPSB0aGlzLnNwckl0ZW1CZzJbMF07XG4gICAgICAgICAgICBpdGVtU3BlY1snc3ByRmFjdG9yJ10ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW1TcGVjWydzcHJGYWN0b3InXS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5zZXQoeyB5OiBjYy53aW5TaXplLmhlaWdodCB9KS50bygwLjUsIHsgeTogMCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5zdGFydCgpO1xuICAgIH1cbiAgICBvbkNsaWNrRmFjdG9yKGV2ZW4sIGRhdGEpIHtcbiAgICAgICAgbGV0IGJ0biA9IGV2ZW4udGFyZ2V0O1xuICAgICAgICBsZXQgaXRlbVBhcmVudCA9IGJ0bi5wYXJlbnQ7XG4gICAgICAgIGlmICh0aGlzLmlzQ2hvb3NlRmFjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Nob29zZUZhY3RvciA9IHRydWU7XG5cbiAgICAgICAgbGV0IGNiMSA9ICgpID0+IHtcbiAgICAgICAgICAgIGl0ZW1QYXJlbnRbJ2lzX29wZW4nXSA9IHRydWU7XG4gICAgICAgICAgICBpdGVtUGFyZW50WydzcHJGYWN0b3InXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3BySXRlbUJnMlt0aGlzLmhlc29dO1xuICAgICAgICAgICAgaXRlbVBhcmVudFsnYmcnXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3BySXRlbUJnMls2XTtcbiAgICAgICAgICAgIGl0ZW1QYXJlbnRbJ3NwckZhY3RvciddLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVzbyA9PSB0aGlzLmxpc3RGYWN0b3JbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RmFjdG9yLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWZmT3BlbkdpZnQoaXRlbVBhcmVudCwgY2IxLCAxLjIpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1TcGVjaWFsLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtU3BlYyA9IHRoaXMuaXRlbVNwZWNpYWwuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtU3BlY1snaXNfb3BlbiddKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYiA9ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3BlY1snYmcnXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3BySXRlbUJnMls2XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TcGVjWydzcHJGYWN0b3InXS5zcHJpdGVGcmFtZSA9IHRoaXMuc3BySXRlbUJnMlt0aGlzLmxpc3RGYWN0b3JbY291bnRdXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1TcGVjWydzcHJGYWN0b3InXS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtU3BlY1snc3ByRmFjdG9yJ10ubm9kZS5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVmZk9wZW5HaWZ0KGl0ZW1TcGVjLCBjYik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEuMCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZUdhbWUyKS50bygwLjMsIHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMTUwIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuYmFja0luIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZUdhbWUyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZUdhbWUxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICB9LCA0LjApXG5cblxuXG4gICAgfVxuICAgIGVmZk9wZW5HaWZ0KGl0ZW0sIGNiLCBzY2FsZSA9IDEuMCkge1xuICAgICAgICBjYy50d2VlbihpdGVtKVxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMC45IH0pXG4gICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiBzY2FsZSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICBjYy50d2VlbihpdGVtKS5kZWxheSgwLjY1KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIGNiKCk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIHNob3dSZXN1bHQoKSB7XG4gICAgICAgIGxldCBsYldpbiA9IHRoaXMubm9kZUJveE5vdGlmeS5nZXRDaGlsZEJ5TmFtZShcImxiUmVzdWx0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxiV2luLnN0cmluZyA9IHRoaXMuaGVzbyArIFwiIHggXCIgKyBVdGlscy5mb3JtYXROdW1iZXIodGhpcy53aW4pICsgXCIgPSBcIiArIChVdGlscy5mb3JtYXROdW1iZXIodGhpcy53aW4qdGhpcy5oZXNvKSk7XG4gICAgICAgIHRoaXMubm9kZUJveE5vdGlmeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGVCb3hOb3RpZnkpXG4gICAgICAgICAgICAuc2V0KHsgc2NhbGU6IDAuOCwgb3BhY2l0eTogMTUwIH0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxLjAsIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSlcbiAgICAgICAgICAgIC5kZWxheSgzLjApXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG4gICAgaGlkZGVuKCkge1xuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRvKDAuMywgeyB5OiBjYy53aW5TaXplLmhlaWdodCB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVJbiB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2hlZCgpO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfVxuXG4gICAgb25CdG5FeGl0KCkge1xuICAgICAgICBUd2Vlbi5oaWRlUG9wdXAodGhpcy5ub2RlQm94Tm90aWZ5LCB0aGlzLm5vZGVCb3hOb3RpZnkucGFyZW50LCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2hlZCgpO1xuICAgICAgICB9LCAxLjUpO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFBvcHVwQm9udXM7Il19