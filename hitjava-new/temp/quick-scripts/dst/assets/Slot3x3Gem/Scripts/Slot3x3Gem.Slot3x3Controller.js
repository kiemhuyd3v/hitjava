
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3x3Gem/Scripts/Slot3x3Gem.Slot3x3Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bf5328IdclAa6Ur1llGhidg', 'Slot3x3Gem.Slot3x3Controller');
// Slot3x3Gem/Scripts/Slot3x3Gem.Slot3x3Controller.ts

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
exports.ButtonBet = void 0;
var Slot3x3Gem_Cmd_1 = require("./Slot3x3Gem.Cmd");
var Slot3x3Gem_PopupSelectLine_1 = require("./Slot3x3Gem.PopupSelectLine");
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Slot3x3Gem_PopupHistory_1 = require("./Slot3x3Gem.PopupHistory");
var Slot3x3Gem_PopupHonors_1 = require("./Slot3x3Gem.PopupHonors");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonBet = /** @class */ (function () {
    function ButtonBet() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
        this._isActive = false;
    }
    ButtonBet.prototype.setActive = function (isActive) {
        this._isActive = isActive;
        this.button.getComponent(cc.Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
        this.button.interactable = !isActive;
    };
    __decorate([
        property(cc.Button)
    ], ButtonBet.prototype, "button", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ButtonBet.prototype, "sfNormal", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], ButtonBet.prototype, "sfActive", void 0);
    ButtonBet = __decorate([
        ccclass("Slot3x3Gem.ButtonBet")
    ], ButtonBet);
    return ButtonBet;
}());
exports.ButtonBet = ButtonBet;
var Slot3x3GemController = /** @class */ (function (_super) {
    __extends(Slot3x3GemController, _super);
    function Slot3x3GemController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.itemTemplate = null;
        _this_1.popupContainer = null;
        _this_1.buttonBets = [];
        _this_1.columns = null;
        _this_1.linesWin = null;
        _this_1.btnSpin = null;
        _this_1.btnLine = null;
        _this_1.btnClose = null;
        _this_1.btnAuto = null;
        _this_1.sfAuto0 = null;
        _this_1.sfAuto1 = null;
        _this_1.btnBoost = null;
        _this_1.sfBoost0 = null;
        _this_1.sfBoost1 = null;
        _this_1.lblJackpot = null;
        _this_1.lblWinCash = null;
        _this_1.lblToast = null;
        _this_1.effectJackpot = null;
        _this_1.effectBigWin = null;
        _this_1.lbTotalLine = null;
        _this_1.popupSelectLine = null;
        _this_1.popups = [];
        _this_1.rollStartItemCount = 15;
        _this_1.rollAddItemCount = 10;
        _this_1.spinDuration = 1.2;
        _this_1.addSpinDuration = 0.3;
        _this_1.itemHeight = 0;
        _this_1.betIdx = 0;
        _this_1.listBet = [100, 1000, 10000];
        _this_1.arrLineSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        _this_1.isSpined = true;
        _this_1.isBoost = false;
        _this_1.isAuto = false;
        _this_1.isCanChangeBet = true;
        _this_1.lastSpinRes = null;
        _this_1.popupGuide = null;
        _this_1.popupHistory = null;
        _this_1.popupHonor = null;
        return _this_1;
    }
    Slot3x3GemController.prototype.start = function () {
        var _this_1 = this;
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var column = this.columns.children[i];
            var count = this.rollStartItemCount + i * this.rollAddItemCount;
            for (var j = 0; j < count; j++) {
                var item = cc.instantiate(this.itemTemplate);
                item.parent = column;
                if (j >= 3) {
                    item.getComponent('Slot3x3Gem.ItemSlot').id = Utils_1.default.randomRangeInt(0, 6);
                    item.getComponent('Slot3x3Gem.ItemSlot').setBlur();
                }
                else {
                    item.getComponent('Slot3x3Gem.ItemSlot').setId(Utils_1.default.randomRangeInt(0, 6));
                }
            }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        var _loop_1 = function (i) {
            btn = this_1.buttonBets[i];
            btn.setActive(i == this_1.betIdx);
            btn.button.node.on("click", function () {
                App_1.default.instance.showBgMiniGame("Slot3x3Gem");
                if (!_this_1.isCanChangeBet) {
                    _this_1.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
                    return;
                }
                var oldIdx = _this_1.betIdx;
                _this_1.betIdx = i;
                for (var i_1 = 0; i_1 < _this_1.buttonBets.length; i_1++) {
                    _this_1.buttonBets[i_1].setActive(i_1 == _this_1.betIdx);
                }
                _this_1.isCanChangeBet = false;
                _this_1.scheduleOnce(function () {
                    _this_1.isCanChangeBet = true;
                }, 1);
                MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3Gem_Cmd_1.default.SendChangeRoom(oldIdx, _this_1.betIdx));
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) {
            _loop_1(i);
        }
        this.btnAuto.node.on("click", function () {
            _this_1.isAuto = !_this_1.isAuto;
            App_1.default.instance.showBgMiniGame("Slot3x3Gem");
            if (_this_1.isAuto) {
                if (_this_1.isSpined)
                    _this_1.actSpin();
                _this_1.btnBoost.interactable = false;
                _this_1.btnAuto.getComponent(cc.Sprite).spriteFrame = _this_1.sfAuto1;
            }
            else {
                _this_1.btnBoost.interactable = true;
                _this_1.btnAuto.getComponent(cc.Sprite).spriteFrame = _this_1.sfAuto0;
                if (_this_1.isSpined) {
                    _this_1.setEnabledAllButtons(true);
                }
            }
        });
        this.btnBoost.node.on("click", function () {
            _this_1.isBoost = !_this_1.isBoost;
            App_1.default.instance.showBgMiniGame("Slot3x3Gem");
            if (_this_1.isBoost) {
                if (_this_1.isSpined)
                    _this_1.actSpin();
                _this_1.btnAuto.interactable = false;
                _this_1.btnBoost.getComponent(cc.Sprite).spriteFrame = _this_1.sfBoost1;
            }
            else {
                _this_1.btnAuto.interactable = true;
                _this_1.btnBoost.getComponent(cc.Sprite).spriteFrame = _this_1.sfBoost0;
                if (_this_1.isSpined) {
                    _this_1.setEnabledAllButtons(true);
                }
            }
        });
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this_1.node.active)
                return;
            _this_1.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this_1.node.active)
                return;
            _this_1.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this_1.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Slot3x3Gem_Cmd_1.default.Code.UPDATE_JACKPOT: {
                    var res = new Slot3x3Gem_Cmd_1.default.ReceiveUpdateJackpot(data);
                    Tween_1.default.numberTo(_this_1.lblJackpot, res.value, 0.3);
                    break;
                }
                case Slot3x3Gem_Cmd_1.default.Code.SPIN: {
                    var res = new Slot3x3Gem_Cmd_1.default.ReceiveSpin(data);
                    _this_1.onSpinResult(res);
                    break;
                }
            }
        }, this);
    };
    Slot3x3GemController.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        App_1.default.instance.showBgMiniGame("Slot3x3Gem");
        _super.prototype.show.call(this);
        this.lblToast.node.parent.active = false;
        this.lblWinCash.parent.active = false;
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        this.isSpined = true;
        this.isCanChangeBet = true;
        this.betIdx = 0;
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].setActive(i == this.betIdx);
        }
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3Gem_Cmd_1.default.SendScribe(this.betIdx));
    };
    Slot3x3GemController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        App_1.default.instance.hideGameMini("Slot3x3Gem");
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3Gem_Cmd_1.default.SendUnScribe(this.betIdx));
    };
    Slot3x3GemController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
    };
    Slot3x3GemController.prototype.actSpin = function (even) {
        if (even === void 0) { even = null; }
        if (!this.isSpined) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        if (even != null) {
            App_1.default.instance.showBgMiniGame("Slot3x3Gem");
        }
        this.isSpined = false;
        this.stopAllEffects();
        this.stopShowLinesWin();
        this.setEnabledAllButtons(false);
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].button.interactable = false;
        }
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3Gem_Cmd_1.default.SendSpin(this.listBet[this.betIdx], this.arrLineSelect.toString()));
    };
    Slot3x3GemController.prototype.setEnabledAllButtons = function (isEnabled) {
        this.btnSpin.interactable = isEnabled;
        this.btnClose.interactable = isEnabled;
        this.btnLine.interactable = isEnabled;
        this.btnSpin.node.getComponentInChildren(sp.Skeleton).node.active = isEnabled;
    };
    Slot3x3GemController.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    Slot3x3GemController.prototype.onSpinResult = function (res) {
        var _this_1 = this;
        //  cc.log(res);
        var _this = this;
        var resultSuccess = [0, 1, 2, 3, 4, 5, 6];
        if (resultSuccess.indexOf(res.result) < 0) {
            this.scheduleOnce(function () {
                this.isSpined = true;
            }, 1);
            this.setEnabledAllButtons(true);
            for (var i = 0; i < this.buttonBets.length; i++) {
                this.buttonBets[i].button.interactable = true;
            }
            this.isAuto = false;
            this.btnAuto.interactable = true;
            this.btnAuto.getComponent(cc.Sprite).spriteFrame = this.sfAuto0;
            this.isBoost = false;
            this.btnBoost.interactable = true;
            this.btnBoost.getComponent(cc.Sprite).spriteFrame = this.sfBoost0;
            switch (res.result) {
                case 102:
                    this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
                    break;
                default:
                    this.showToast(App_1.default.instance.getTextLang('txt_unknown_error1'));
                    break;
            }
            return;
        }
        Configs_1.default.Login.Coin -= this.listBet[this.betIdx] * this.arrLineSelect.length;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        Configs_1.default.Login.Coin = res.currentMoney;
        // this.node.scale=0.2;
        this.lastSpinRes = res;
        var matrix = res.matrix.split(",");
        var timeScale = this.isBoost ? 0.5 : 1;
        var _loop_2 = function (i_2) {
            var roll = this_2.columns.children[i_2];
            var step1Pos = this_2.itemHeight * 0.3;
            var step2Pos = -this_2.itemHeight * roll.childrenCount + this_2.itemHeight * 3 - this_2.itemHeight * 0.3;
            var step3Pos = -this_2.itemHeight * roll.childrenCount + this_2.itemHeight * 3;
            roll.runAction(cc.sequence(cc.delayTime(0.2 * i_2 * timeScale), cc.moveTo(0.2 * timeScale, cc.v2(roll.getPosition().x, step1Pos)).easing(cc.easeQuadraticActionOut()), cc.moveTo((this_2.spinDuration + this_2.addSpinDuration * i_2) * timeScale, cc.v2(roll.getPosition().x, step2Pos)).easing(cc.easeQuadraticActionInOut()), cc.moveTo(0.2 * timeScale, cc.v2(roll.getPosition().x, step3Pos)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function () {
                roll.setPosition(cc.v2(roll.getPosition().x, 0));
                if (i_2 === _this_1.columns.childrenCount - 1) {
                    _this.spined();
                }
            })));
            roll.runAction(cc.sequence(cc.delayTime((0.7 + 0.2 * i_2) * timeScale), cc.callFunc(function () {
                var children = roll.children;
                children[2].getComponent("Slot3x3Gem.ItemSlot").setId(parseInt(matrix[i_2]));
                children[1].getComponent("Slot3x3Gem.ItemSlot").setId(parseInt(matrix[3 + i_2]));
                children[0].getComponent("Slot3x3Gem.ItemSlot").setId(parseInt(matrix[6 + i_2]));
                var itemBlur1 = children[children.length - 1].getComponent("Slot3x3Gem.ItemSlot");
                var itemBlur2 = children[children.length - 2].getComponent("Slot3x3Gem.ItemSlot");
                var itemBlur3 = children[children.length - 3].getComponent("Slot3x3Gem.ItemSlot");
                itemBlur1.setId(parseInt(matrix[i_2]));
                itemBlur2.setId(parseInt(matrix[3 + i_2]));
                itemBlur3.setId(parseInt(matrix[6 + i_2]));
            })));
        };
        var this_2 = this;
        for (var i_2 = 0; i_2 < this.columns.childrenCount; i_2++) {
            _loop_2(i_2);
        }
    };
    Slot3x3GemController.prototype.spined = function () {
        var _this_1 = this;
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        this.isSpined = true;
        if (!this.isAuto && !this.isBoost)
            this.setEnabledAllButtons(true);
        switch (this.lastSpinRes.result) {
            case 0: //k an
                this.showLineWins();
                break;
            case 1: // thang thuong
                this.showLineWins();
                break;
            case 2: // thang lon
                this.showEffectBigWin(this.lastSpinRes.prize, function () { return _this_1.showLineWins(); });
                break;
            case 3: //jackpot
            case 4:
                this.showEffectJackpot(this.lastSpinRes.prize, function () { return _this_1.showLineWins(); });
                break;
            case 6: //thang sieu lon
                this.showEffectBigWin(this.lastSpinRes.prize, function () { return _this_1.showLineWins(); });
                break;
        }
    };
    Slot3x3GemController.prototype.showEffectBigWin = function (cash, cb) {
        var _this_1 = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function () {
            _this_1.effectBigWin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot3x3GemController.prototype.showEffectJackpot = function (cash, cb) {
        var _this_1 = this;
        if (cb === void 0) { cb = null; }
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function () {
            _this_1.effectJackpot.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot3x3GemController.prototype.showWinCash = function (coin) {
        var parent = this.lblWinCash.parent;
        var label = this.lblWinCash.getComponent(cc.Label);
        parent.stopAllActions();
        parent.active = true;
        label.string = "0";
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
            Tween_1.default.numberTo(label, coin, 0.5);
        }), cc.delayTime(1.5), cc.fadeOut(0.3), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    Slot3x3GemController.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
    };
    Slot3x3GemController.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot3x3GemController.prototype.stopAllItemEffect = function () {
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var children = this.columns.children[i].children;
            children[0].stopAllActions();
            children[1].stopAllActions();
            children[2].stopAllActions();
            children[0].runAction(cc.scaleTo(0.1, 1));
            children[1].runAction(cc.scaleTo(0.1, 1));
            children[2].runAction(cc.scaleTo(0.1, 1));
        }
    };
    Slot3x3GemController.prototype.showLineWins = function () {
        var _this_1 = this;
        this.linesWin.stopAllActions();
        var linesWin = this.lastSpinRes.linesWin.split(",");
        var linesWinChildren = this.linesWin.children;
        for (var i = 0; i < linesWinChildren.length; i++) {
            linesWinChildren[i].active = linesWin.indexOf("" + (i + 1)) >= 0;
        }
        var actions = [];
        if (this.lastSpinRes.prize > 0) {
            this.showWinCash(this.lastSpinRes.prize);
            actions.push(cc.delayTime(1.5));
            actions.push(cc.callFunc(function () {
                for (var i = 0; i < linesWinChildren.length; i++) {
                    linesWinChildren[i].active = false;
                }
            }));
        }
        actions.push(cc.delayTime(0.5));
        actions.push(cc.callFunc(function () {
            _this_1.isSpined = true;
            if (_this_1.isBoost || _this_1.isAuto) {
                _this_1.actSpin();
            }
            else {
                _this_1.setEnabledAllButtons(true);
                for (var i = 0; i < _this_1.buttonBets.length; i++) {
                    _this_1.buttonBets[i].button.interactable = true;
                }
            }
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
    };
    Slot3x3GemController.prototype.actGuide = function () {
        var _this_1 = this;
        if (this.popupGuide == null) {
            cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupGuide", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this_1.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
                _this_1.popupGuide.node.parent = _this_1.popupContainer;
                _this_1.popupGuide.show();
                _this_1.popups.push(_this_1.popupGuide.node);
                App_1.default.instance.showLoading(false);
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    Slot3x3GemController.prototype.actHistory = function () {
        var _this_1 = this;
        if (this.popupHistory == null) {
            cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupHistory", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this_1.popupHistory = cc.instantiate(prefab).getComponent(Slot3x3Gem_PopupHistory_1.default);
                _this_1.popupHistory.node.parent = _this_1.popupContainer;
                _this_1.popupHistory.show();
                _this_1.popups.push(_this_1.popupHistory.node);
                App_1.default.instance.showLoading(false);
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    Slot3x3GemController.prototype.actHonor = function () {
        var _this_1 = this;
        if (this.popupHonor == null) {
            cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupHonors", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this_1.popupHonor = cc.instantiate(prefab).getComponent(Slot3x3Gem_PopupHonors_1.default);
                _this_1.popupHonor.node.parent = _this_1.popupContainer;
                _this_1.popupHonor.show();
                _this_1.popups.push(_this_1.popupHonor.node);
                App_1.default.instance.showLoading(false);
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    Slot3x3GemController.prototype.actSelectLine = function () {
        var _this_1 = this;
        if (this.popupSelectLine == null) {
            cc.assetManager.getBundle("Slot3x3Gem").load("Prefabs/PopupSelectLine", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this_1.popupSelectLine = cc.instantiate(prefab).getComponent(Slot3x3Gem_PopupSelectLine_1.default);
                _this_1.popupSelectLine.node.parent = _this_1.popupContainer;
                _this_1.popupSelectLine.show();
                _this_1.popups.push(_this_1.popupSelectLine.node);
                App_1.default.instance.showLoading(false);
                _this_1.popupSelectLine.onSelectedChanged = function (lines) {
                    _this_1.arrLineSelect = lines;
                    //  cc.log("lines=", lines);
                    _this_1.lbTotalLine.string = lines.length + "";
                };
            });
        }
        else {
            this.popupSelectLine.show();
        }
    };
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "itemTemplate", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "popupContainer", void 0);
    __decorate([
        property([ButtonBet])
    ], Slot3x3GemController.prototype, "buttonBets", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "columns", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3GemController.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3GemController.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3GemController.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3GemController.prototype, "btnAuto", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3GemController.prototype, "sfAuto0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3GemController.prototype, "sfAuto1", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3GemController.prototype, "btnBoost", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3GemController.prototype, "sfBoost0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3GemController.prototype, "sfBoost1", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3x3GemController.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "lblWinCash", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3x3GemController.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3GemController.prototype, "effectBigWin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3x3GemController.prototype, "lbTotalLine", void 0);
    __decorate([
        property(Slot3x3Gem_PopupSelectLine_1.default)
    ], Slot3x3GemController.prototype, "popupSelectLine", void 0);
    __decorate([
        property([cc.Node])
    ], Slot3x3GemController.prototype, "popups", void 0);
    Slot3x3GemController = __decorate([
        ccclass
    ], Slot3x3GemController);
    return Slot3x3GemController;
}(MiniGame_1.default));
exports.default = Slot3x3GemController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDN4M0dlbVxcU2NyaXB0c1xcU2xvdDN4M0dlbS5TbG90M3gzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQW1DO0FBQ25DLDJFQUEyRDtBQUUzRCxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUscUVBQWdFO0FBQ2hFLHVHQUFrRztBQUNsRyw2RkFBZ0Y7QUFDaEYsaUVBQTREO0FBQzVELHFFQUFxRDtBQUNyRCxtRUFBbUQ7QUFFN0MsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtRQUVJLFdBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsYUFBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsYUFBUSxHQUFtQixJQUFJLENBQUM7UUFFaEMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU90QixDQUFDO0lBTEcsNkJBQVMsR0FBVCxVQUFVLFFBQWlCO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQ3pDLENBQUM7SUFaRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNLO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ087SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsr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RCxBQW1oQkMsQ0FuaEJpRCxrQkFBUSxHQW1oQnpEO2tCQW5oQm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbWQgZnJvbSBcIi4vU2xvdDN4M0dlbS5DbWRcIjtcbmltcG9ydCBQb3B1cFNlbGVjdExpbmUgZnJvbSBcIi4vU2xvdDN4M0dlbS5Qb3B1cFNlbGVjdExpbmVcIjtcblxuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBNaW5pR2FtZSBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvTWluaUdhbWVcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgUG9wdXBIaXN0b3J5IGZyb20gXCIuL1Nsb3QzeDNHZW0uUG9wdXBIaXN0b3J5XCI7XG5pbXBvcnQgUG9wdXBIb25vcnMgZnJvbSBcIi4vU2xvdDN4M0dlbS5Qb3B1cEhvbm9yc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIlNsb3QzeDNHZW0uQnV0dG9uQmV0XCIpXG5leHBvcnQgY2xhc3MgQnV0dG9uQmV0IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZOb3JtYWw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZBY3RpdmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gaXNBY3RpdmUgPyB0aGlzLnNmQWN0aXZlIDogdGhpcy5zZk5vcm1hbDtcbiAgICAgICAgdGhpcy5idXR0b24uaW50ZXJhY3RhYmxlID0gIWlzQWN0aXZlO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QzeDNHZW1Db250cm9sbGVyIGV4dGVuZHMgTWluaUdhbWUge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb3B1cENvbnRhaW5lcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtCdXR0b25CZXRdKVxuICAgIGJ1dHRvbkJldHM6IEJ1dHRvbkJldFtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29sdW1uczogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGluZXNXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkxpbmU6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5DbG9zZTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkF1dG86IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQXV0bzA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZBdXRvMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQm9vc3Q6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQm9vc3QwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQm9vc3QxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEphY2twb3Q6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYmxXaW5DYXNoOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVG9hc3Q6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZmZlY3RKYWNrcG90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBlZmZlY3RCaWdXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYlRvdGFsTGluZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQb3B1cFNlbGVjdExpbmUpXG4gICAgcG9wdXBTZWxlY3RMaW5lOiBQb3B1cFNlbGVjdExpbmUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgcHVibGljIHBvcHVwczogY2MuTm9kZVtdID0gW107XG5cbiAgICBwcml2YXRlIHJvbGxTdGFydEl0ZW1Db3VudCA9IDE1O1xuICAgIHByaXZhdGUgcm9sbEFkZEl0ZW1Db3VudCA9IDEwO1xuICAgIHByaXZhdGUgc3BpbkR1cmF0aW9uID0gMS4yO1xuICAgIHByaXZhdGUgYWRkU3BpbkR1cmF0aW9uID0gMC4zO1xuICAgIHByaXZhdGUgaXRlbUhlaWdodCA9IDA7XG4gICAgcHJpdmF0ZSBiZXRJZHggPSAwO1xuICAgIHByaXZhdGUgbGlzdEJldCA9IFsxMDAsIDEwMDAsIDEwMDAwXTtcbiAgICBwcml2YXRlIGFyckxpbmVTZWxlY3QgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXTtcbiAgICBwcml2YXRlIGlzU3BpbmVkID0gdHJ1ZTtcbiAgICBwcml2YXRlIGlzQm9vc3QgPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzQXV0byA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNDYW5DaGFuZ2VCZXQgPSB0cnVlO1xuICAgIHByaXZhdGUgbGFzdFNwaW5SZXM6IGNtZC5SZWNlaXZlU3BpbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEd1aWRlID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwSGlzdG9yeTogUG9wdXBIaXN0b3J5ID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwSG9ub3I6IFBvcHVwSG9ub3JzID0gbnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pdGVtSGVpZ2h0ID0gdGhpcy5pdGVtVGVtcGxhdGUuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSB0aGlzLmNvbHVtbnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgY291bnQgPSB0aGlzLnJvbGxTdGFydEl0ZW1Db3VudCArIGkgKiB0aGlzLnJvbGxBZGRJdGVtQ291bnQ7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbVRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICBpdGVtLnBhcmVudCA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBpZiAoaiA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KCdTbG90M3gzR2VtLkl0ZW1TbG90JykuaWQgPSBVdGlscy5yYW5kb21SYW5nZUludCgwLCA2KTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ1Nsb3QzeDNHZW0uSXRlbVNsb3QnKS5zZXRCbHVyKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoJ1Nsb3QzeDNHZW0uSXRlbVNsb3QnKS5zZXRJZChVdGlscy5yYW5kb21SYW5nZUludCgwLCA2KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBudWxsO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYnRuID0gdGhpcy5idXR0b25CZXRzW2ldO1xuICAgICAgICAgICAgYnRuLnNldEFjdGl2ZShpID09IHRoaXMuYmV0SWR4KTtcbiAgICAgICAgICAgIGJ0bi5idXR0b24ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJTbG90M3gzR2VtXCIpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0NhbkNoYW5nZUJldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RpZnlfZmFzdF9hY3Rpb24nKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9sZElkeCA9IHRoaXMuYmV0SWR4O1xuICAgICAgICAgICAgICAgIHRoaXMuYmV0SWR4ID0gaTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYW5nZVJvb20ob2xkSWR4LCB0aGlzLmJldElkeCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ0bkF1dG8ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRvID0gIXRoaXMuaXNBdXRvO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiU2xvdDN4M0dlbVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0bykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB0aGlzLmFjdFNwaW4oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQXV0by5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZBdXRvMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Cb29zdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQXV0by5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZBdXRvMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NwaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5Cb29zdC5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Jvb3N0ID0gIXRoaXMuaXNCb29zdDtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlNsb3QzeDNHZW1cIik7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jvb3N0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQXV0by5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZkJvb3N0MTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5BdXRvLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Cb29zdC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZCb29zdDA7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cblxuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5yZWdpc3RlcihCcm9hZGNhc3RSZWNlaXZlci5VU0VSX0xPR09VVCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkT25DbG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YTogVWludDhBcnJheSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVVcGRhdGVKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibEphY2twb3QsIHJlcy52YWx1ZSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU1BJTjoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlU3BpbihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5yZU9yZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiU2xvdDN4M0dlbVwiKTtcbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc1dpbi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUJldCA9IHRydWU7XG4gICAgICAgIHRoaXMuYmV0SWR4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5zZXRBY3RpdmUoaSA9PSB0aGlzLmJldElkeCk7XG4gICAgICAgIH1cblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNjcmliZSh0aGlzLmJldElkeCkpO1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wb3B1cHNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLmhpZGVHYW1lTWluaShcIlNsb3QzeDNHZW1cIik7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmUodGhpcy5iZXRJZHgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVPcmRlcigpIHtcbiAgICAgICAgc3VwZXIucmVPcmRlcigpO1xuXG4gICAgfVxuXG4gICAgYWN0U3BpbihldmVuPW51bGwpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RpZnlfZmFzdF9hY3Rpb24nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZlbiE9bnVsbCl7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJTbG90M3gzR2VtXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTcGluZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyhmYWxzZSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uYnV0dG9uLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3Bpbih0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLCB0aGlzLmFyckxpbmVTZWxlY3QudG9TdHJpbmcoKSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0RW5hYmxlZEFsbEJ1dHRvbnMoaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBpc0VuYWJsZWQ7XG4gICAgICAgIHRoaXMuYnRuQ2xvc2UuaW50ZXJhY3RhYmxlID0gaXNFbmFibGVkO1xuICAgICAgICB0aGlzLmJ0bkxpbmUuaW50ZXJhY3RhYmxlID0gaXNFbmFibGVkO1xuICAgICAgICB0aGlzLmJ0blNwaW4ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKS5ub2RlLmFjdGl2ZSA9IGlzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudDtcbiAgICAgICAgcGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgwLjIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNwaW5SZXN1bHQocmVzOiBjbWQuUmVjZWl2ZVNwaW4pIHtcbiAgICAgICAgLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIHZhciByZXN1bHRTdWNjZXNzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuICAgICAgICBpZiAocmVzdWx0U3VjY2Vzcy5pbmRleE9mKHJlcy5yZXN1bHQpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTcGluZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNBdXRvID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQXV0by5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZBdXRvMDtcblxuICAgICAgICAgICAgdGhpcy5pc0Jvb3N0ID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZkJvb3N0MDtcblxuICAgICAgICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3IxJykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiAtPSB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdICogdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aDtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLnNjYWxlPTAuMjtcbiAgICAgICAgdGhpcy5sYXN0U3BpblJlcyA9IHJlcztcbiAgICAgICAgbGV0IG1hdHJpeCA9IHJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy5pc0Jvb3N0ID8gMC41IDogMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm9sbCA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBzdGVwMVBvcyA9IHRoaXMuaXRlbUhlaWdodCAqIDAuMztcbiAgICAgICAgICAgIGxldCBzdGVwMlBvcyA9IC10aGlzLml0ZW1IZWlnaHQgKiByb2xsLmNoaWxkcmVuQ291bnQgKyB0aGlzLml0ZW1IZWlnaHQgKiAzIC0gdGhpcy5pdGVtSGVpZ2h0ICogMC4zO1xuICAgICAgICAgICAgbGV0IHN0ZXAzUG9zID0gLXRoaXMuaXRlbUhlaWdodCAqIHJvbGwuY2hpbGRyZW5Db3VudCArIHRoaXMuaXRlbUhlaWdodCAqIDM7XG4gICAgICAgICAgICByb2xsLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4yICogaSAqIHRpbWVTY2FsZSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiAqIHRpbWVTY2FsZSwgY2MudjIocm9sbC5nZXRQb3NpdGlvbigpLngsIHN0ZXAxUG9zKSkuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25PdXQoKSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKCh0aGlzLnNwaW5EdXJhdGlvbiArIHRoaXMuYWRkU3BpbkR1cmF0aW9uICogaSkgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwuZ2V0UG9zaXRpb24oKS54LCBzdGVwMlBvcykpLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uSW5PdXQoKSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMiAqIHRpbWVTY2FsZSwgY2MudjIocm9sbC5nZXRQb3NpdGlvbigpLngsIHN0ZXAzUG9zKSkuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25JbigpKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvbGwuc2V0UG9zaXRpb24oY2MudjIocm9sbC5nZXRQb3NpdGlvbigpLngsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuY29sdW1ucy5jaGlsZHJlbkNvdW50IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc3BpbmVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICByb2xsLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoKDAuNyArIDAuMiAqIGkpICogdGltZVNjYWxlKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHJvbGwuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzJdLmdldENvbXBvbmVudChcIlNsb3QzeDNHZW0uSXRlbVNsb3RcIikuc2V0SWQocGFyc2VJbnQobWF0cml4W2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdLmdldENvbXBvbmVudChcIlNsb3QzeDNHZW0uSXRlbVNsb3RcIikuc2V0SWQocGFyc2VJbnQobWF0cml4WzMgKyBpXSkpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblswXS5nZXRDb21wb25lbnQoXCJTbG90M3gzR2VtLkl0ZW1TbG90XCIpLnNldElkKHBhcnNlSW50KG1hdHJpeFs2ICsgaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1CbHVyMSA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLmdldENvbXBvbmVudChcIlNsb3QzeDNHZW0uSXRlbVNsb3RcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQmx1cjIgPSBjaGlsZHJlbltjaGlsZHJlbi5sZW5ndGggLSAyXS5nZXRDb21wb25lbnQoXCJTbG90M3gzR2VtLkl0ZW1TbG90XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJsdXIzID0gY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gM10uZ2V0Q29tcG9uZW50KFwiU2xvdDN4M0dlbS5JdGVtU2xvdFwiKVxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1CbHVyMS5zZXRJZChwYXJzZUludChtYXRyaXhbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUJsdXIyLnNldElkKHBhcnNlSW50KG1hdHJpeFszICsgaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUJsdXIzLnNldElkKHBhcnNlSW50KG1hdHJpeFs2ICsgaV0pKTtcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3BpbmVkKCkge1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXV0byAmJiAhdGhpcy5pc0Jvb3N0KSB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGFzdFNwaW5SZXMucmVzdWx0KSB7XG4gICAgICAgICAgICBjYXNlIDA6Ly9rIGFuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTovLyB0aGFuZyB0aHVvbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOi8vIHRoYW5nIGxvblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB0aGlzLnNob3dMaW5lV2lucygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzovL2phY2twb3RcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RKYWNrcG90KHRoaXMubGFzdFNwaW5SZXMucHJpemUsICgpID0+IHRoaXMuc2hvd0xpbmVXaW5zKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2Oi8vdGhhbmcgc2lldSBsb25cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RCaWdXaW4odGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgKCkgPT4gdGhpcy5zaG93TGluZVdpbnMoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RCaWdXaW4oY2FzaDogbnVtYmVyLCBjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdEJpZ1dpbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RKYWNrcG90KGNhc2g6IG51bWJlciwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5lZmZlY3RKYWNrcG90LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93V2luQ2FzaChjb2luOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubGJsV2luQ2FzaC5wYXJlbnQ7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubGJsV2luQ2FzaC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBwYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxhYmVsLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5mYWRlSW4oMC4zKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY29pbiwgMC41KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuNSksXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDAuMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wQWxsRWZmZWN0cygpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wU2hvd0xpbmVzV2luKCkge1xuICAgICAgICB0aGlzLmxpbmVzV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lc1dpbi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wQWxsSXRlbUVmZmVjdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEFsbEl0ZW1FZmZlY3QoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jb2x1bW5zLmNoaWxkcmVuW2ldLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW5bMF0uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGNoaWxkcmVuWzFdLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjaGlsZHJlblsyXS5zdG9wQWxsQWN0aW9ucygpO1xuXG4gICAgICAgICAgICBjaGlsZHJlblswXS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDEpKTtcbiAgICAgICAgICAgIGNoaWxkcmVuWzFdLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMSwgMSkpO1xuICAgICAgICAgICAgY2hpbGRyZW5bMl0ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCAxKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dMaW5lV2lucygpIHtcbiAgICAgICAgdGhpcy5saW5lc1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB2YXIgbGluZXNXaW4gPSB0aGlzLmxhc3RTcGluUmVzLmxpbmVzV2luLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdmFyIGxpbmVzV2luQ2hpbGRyZW4gPSB0aGlzLmxpbmVzV2luLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzV2luQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmVzV2luQ2hpbGRyZW5baV0uYWN0aXZlID0gbGluZXNXaW4uaW5kZXhPZihcIlwiICsgKGkgKyAxKSkgPj0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5sYXN0U3BpblJlcy5wcml6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dpbkNhc2godGhpcy5sYXN0U3BpblJlcy5wcml6ZSk7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDEuNSkpO1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzV2luQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXNXaW5DaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjUpKTtcbiAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGluZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb29zdCB8fCB0aGlzLmlzQXV0bykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5idXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5saW5lc1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UuYXBwbHkobnVsbCwgYWN0aW9ucykpO1xuICAgIH1cbiAgICBhY3RHdWlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiU2xvdDN4M0dlbVwiKS5sb2FkKFwiUHJlZmFicy9Qb3B1cEd1aWRlXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJEaWFsb2dcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEd1aWRlLm5vZGUpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RIaXN0b3J5KCkge1xuICAgICAgICBpZiAodGhpcy5wb3B1cEhpc3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIlNsb3QzeDNHZW1cIikubG9hZChcIlByZWZhYnMvUG9wdXBIaXN0b3J5XCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChQb3B1cEhpc3RvcnkpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwSGlzdG9yeS5ub2RlKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RIb25vcigpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBIb25vciA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiU2xvdDN4M0dlbVwiKS5sb2FkKFwiUHJlZmFicy9Qb3B1cEhvbm9yc1wiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG5cbiAgICAgICAgICAgIH0sIChlcnIxLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFBvcHVwSG9ub3JzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwSG9ub3Iubm9kZSk7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFNlbGVjdExpbmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwU2VsZWN0TGluZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiU2xvdDN4M0dlbVwiKS5sb2FkKFwiUHJlZmFicy9Qb3B1cFNlbGVjdExpbmVcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZmluaXNoLCB0b3RhbCwgaXRlbSkge1xuXG4gICAgICAgICAgICB9LCAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFBvcHVwU2VsZWN0TGluZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBTZWxlY3RMaW5lLm5vZGUpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUub25TZWxlY3RlZENoYW5nZWQgPSAobGluZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0ID0gbGluZXM7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJsaW5lcz1cIiwgbGluZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVG90YWxMaW5lLnN0cmluZyA9IGxpbmVzLmxlbmd0aCArIFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==