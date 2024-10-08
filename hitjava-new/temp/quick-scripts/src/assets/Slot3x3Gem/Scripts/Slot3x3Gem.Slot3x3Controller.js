"use strict";
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