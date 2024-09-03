"use strict";
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