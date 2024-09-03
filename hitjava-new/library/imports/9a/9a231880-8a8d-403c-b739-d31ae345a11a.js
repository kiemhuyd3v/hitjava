"use strict";
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