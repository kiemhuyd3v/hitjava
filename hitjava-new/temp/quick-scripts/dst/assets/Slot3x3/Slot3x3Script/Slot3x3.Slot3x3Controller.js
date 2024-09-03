
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot3x3/Slot3x3Script/Slot3x3.Slot3x3Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80078ySa8dLVq8BknsW4brd', 'Slot3x3.Slot3x3Controller');
// Slot3x3/Slot3x3Script/Slot3x3.Slot3x3Controller.ts

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
var Slot3x3_Cmd_1 = require("./Slot3x3.Cmd");
var Slot3x3_PopupSelectLine_1 = require("./Slot3x3.PopupSelectLine");
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var Language_LanguageManager_1 = require("../../Lobby/LobbyScript/Script/common/Language.LanguageManager");
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
        ccclass("Slot3x3.ButtonBet")
    ], ButtonBet);
    return ButtonBet;
}());
exports.ButtonBet = ButtonBet;
var Slot3x3Controller = /** @class */ (function (_super) {
    __extends(Slot3x3Controller, _super);
    function Slot3x3Controller() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.sprFrameItems = [];
        _this_1.sprFrameItemsBlur = [];
        _this_1.itemTemplate = null;
        _this_1.buttonBets = [];
        _this_1.columns = null;
        _this_1.linesWin = null;
        _this_1.btnSpin = null;
        _this_1.btnLine = null;
        _this_1.btnClose = null;
        _this_1.btnAuto = null;
        _this_1.sfAuto0 = null;
        _this_1.sfAuto0en = null;
        _this_1.sfAuto1 = null;
        _this_1.sfAuto1en = null;
        _this_1.btnBoost = null;
        _this_1.sfBoost0 = null;
        _this_1.sfBoost0en = null;
        _this_1.sfBoost1 = null;
        _this_1.sfBoost1en = null;
        _this_1.lblJackpot = null;
        _this_1.lblWinCash = null;
        _this_1.lblToast = null;
        _this_1.effectJackpot = null;
        _this_1.effectBigWin = null;
        _this_1.popupSelectLine = null;
        _this_1.popups = [];
        _this_1.rollStartItemCount = 15;
        _this_1.rollAddItemCount = 10;
        _this_1.spinDuration = 1.2;
        _this_1.addSpinDuration = 0.3;
        _this_1.itemHeight = 0;
        _this_1.betIdx = 0;
        _this_1.listBet = [10, 100, 1000];
        _this_1.arrLineSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        _this_1.isSpined = true;
        _this_1.isBoost = false;
        _this_1.isAuto = false;
        _this_1.isCanChangeBet = true;
        _this_1.lastSpinRes = null;
        return _this_1;
    }
    Slot3x3Controller.prototype.start = function () {
        var _this_1 = this;
        this.itemHeight = this.itemTemplate.height;
        for (var i = 0; i < this.columns.childrenCount; i++) {
            var column = this.columns.children[i];
            var count = this.rollStartItemCount + i * this.rollAddItemCount;
            for (var j = 0; j < count; j++) {
                var item = cc.instantiate(this.itemTemplate);
                item.parent = column;
                if (j >= 3) {
                    item.children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItemsBlur[Utils_1.default.randomRangeInt(0, this.sprFrameItemsBlur.length)];
                }
                else {
                    item.children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[Utils_1.default.randomRangeInt(0, this.sprFrameItems.length)];
                }
            }
        }
        this.itemTemplate.removeFromParent();
        this.itemTemplate = null;
        var _loop_1 = function (i) {
            btn = this_1.buttonBets[i];
            btn.setActive(i == this_1.betIdx);
            btn.button.node.on("click", function () {
                App_1.default.instance.showBgMiniGame("Slot3x3");
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
                MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendChangeRoom(oldIdx, _this_1.betIdx));
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) {
            _loop_1(i);
        }
        this.btnAuto.node.on("click", function () {
            _this_1.isAuto = !_this_1.isAuto;
            App_1.default.instance.showBgMiniGame("Slot3x3");
            if (_this_1.isAuto) {
                if (_this_1.isSpined)
                    _this_1.actSpin();
                _this_1.btnBoost.interactable = false;
                _this_1.btnAuto.getComponent(cc.Sprite).spriteFrame = Language_LanguageManager_1.default.instance.languageCode == "vi" ? _this_1.sfAuto1 : _this_1.sfAuto1en;
            }
            else {
                _this_1.btnBoost.interactable = true;
                _this_1.btnAuto.getComponent(cc.Sprite).spriteFrame = Language_LanguageManager_1.default.instance.languageCode == "vi" ? _this_1.sfAuto0 : _this_1.sfAuto0en;
                if (_this_1.isSpined) {
                    _this_1.setEnabledAllButtons(true);
                }
            }
        });
        this.btnBoost.node.on("click", function () {
            _this_1.isBoost = !_this_1.isBoost;
            App_1.default.instance.showBgMiniGame("Slot3x3");
            if (_this_1.isBoost) {
                if (_this_1.isSpined)
                    _this_1.actSpin();
                _this_1.btnAuto.interactable = false;
                _this_1.btnBoost.getComponent(cc.Sprite).spriteFrame = Language_LanguageManager_1.default.instance.languageCode == "vi" ? _this_1.sfBoost1 : _this_1.sfBoost1en;
            }
            else {
                _this_1.btnAuto.interactable = true;
                _this_1.btnBoost.getComponent(cc.Sprite).spriteFrame = Language_LanguageManager_1.default.instance.languageCode == "vi" ? _this_1.sfBoost0 : _this_1.sfBoost0en;
                if (_this_1.isSpined) {
                    _this_1.setEnabledAllButtons(true);
                }
            }
        });
        this.popupSelectLine.onSelectedChanged = function (lines) {
            _this_1.arrLineSelect = lines;
        };
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
                case Slot3x3_Cmd_1.default.Code.UPDATE_JACKPOT: {
                    var res = new Slot3x3_Cmd_1.default.ReceiveUpdateJackpot(data);
                    Tween_1.default.numberTo(_this_1.lblJackpot, res.value, 0.3);
                    break;
                }
                case Slot3x3_Cmd_1.default.Code.SPIN: {
                    var res = new Slot3x3_Cmd_1.default.ReceiveSpin(data);
                    _this_1.onSpinResult(res);
                    break;
                }
            }
        }, this);
    };
    Slot3x3Controller.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        App_1.default.instance.showBgMiniGame("Slot3x3");
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
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendScribe(this.betIdx));
    };
    Slot3x3Controller.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        App_1.default.instance.hideGameMini("Slot3x3");
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendUnScribe(this.betIdx));
    };
    Slot3x3Controller.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
    };
    Slot3x3Controller.prototype.actSpin = function (even) {
        if (even === void 0) { even = null; }
        if (!this.isSpined) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        if (even != null)
            App_1.default.instance.showBgMiniGame("Slot3x3");
        this.isSpined = false;
        this.stopAllEffects();
        this.stopShowLinesWin();
        this.setEnabledAllButtons(false);
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].button.interactable = false;
        }
        MiniGameNetworkClient_1.default.getInstance().send(new Slot3x3_Cmd_1.default.SendSpin(this.listBet[this.betIdx], this.arrLineSelect.toString()));
    };
    Slot3x3Controller.prototype.setEnabledAllButtons = function (isEnabled) {
        this.btnSpin.interactable = isEnabled;
        this.btnClose.interactable = isEnabled;
        this.btnLine.interactable = isEnabled;
    };
    Slot3x3Controller.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    Slot3x3Controller.prototype.onSpinResult = function (res) {
        var _this_1 = this;
        cc.log("ketqua:" + JSON.stringify(res));
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
                children[2].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[i_2])];
                children[1].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[3 + i_2])];
                children[0].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[6 + i_2])];
                children[children.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[i_2])];
                children[children.length - 2].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[3 + i_2])];
                children[children.length - 3].children[0].getComponent(cc.Sprite).spriteFrame = _this_1.sprFrameItems[parseInt(matrix[6 + i_2])];
            })));
        };
        var this_2 = this;
        // this.node.scale=0.2;
        for (var i_2 = 0; i_2 < this.columns.childrenCount; i_2++) {
            _loop_2(i_2);
        }
    };
    Slot3x3Controller.prototype.spined = function () {
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
    Slot3x3Controller.prototype.showEffectBigWin = function (cash, cb) {
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
    Slot3x3Controller.prototype.showEffectJackpot = function (cash, cb) {
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
    Slot3x3Controller.prototype.showWinCash = function (coin) {
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
    Slot3x3Controller.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
    };
    Slot3x3Controller.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot3x3Controller.prototype.stopAllItemEffect = function () {
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
    Slot3x3Controller.prototype.showLineWins = function () {
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
    __decorate([
        property([cc.SpriteFrame])
    ], Slot3x3Controller.prototype, "sprFrameItems", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot3x3Controller.prototype, "sprFrameItemsBlur", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3Controller.prototype, "itemTemplate", void 0);
    __decorate([
        property([ButtonBet])
    ], Slot3x3Controller.prototype, "buttonBets", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3Controller.prototype, "columns", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3Controller.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3Controller.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3Controller.prototype, "btnAuto", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfAuto0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfAuto0en", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfAuto1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfAuto1en", void 0);
    __decorate([
        property(cc.Button)
    ], Slot3x3Controller.prototype, "btnBoost", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfBoost0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfBoost0en", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfBoost1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot3x3Controller.prototype, "sfBoost1en", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3x3Controller.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3Controller.prototype, "lblWinCash", void 0);
    __decorate([
        property(cc.Label)
    ], Slot3x3Controller.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3Controller.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot3x3Controller.prototype, "effectBigWin", void 0);
    __decorate([
        property(Slot3x3_PopupSelectLine_1.default)
    ], Slot3x3Controller.prototype, "popupSelectLine", void 0);
    __decorate([
        property([cc.Node])
    ], Slot3x3Controller.prototype, "popups", void 0);
    Slot3x3Controller = __decorate([
        ccclass
    ], Slot3x3Controller);
    return Slot3x3Controller;
}(MiniGame_1.default));
exports.default = Slot3x3Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDN4M1xcU2xvdDN4M1NjcmlwdFxcU2xvdDN4My5TbG90M3gzQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQWdDO0FBQ2hDLHFFQUF3RDtBQUV4RCxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUscUVBQWdFO0FBQ2hFLHVHQUFrRztBQUNsRyw2RkFBZ0Y7QUFDaEYsaUVBQTREO0FBQzVELDJHQUFxRztBQUUvRixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFBO1FBRUksV0FBTSxHQUFjLElBQUksQ0FBQztRQUV6QixhQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxhQUFRLEdBQW1CLElBQUksQ0FBQztRQUVoQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBT3RCLENBQUM7SUFMRyw2QkFBUyxHQUFULFVBQVUsUUFBaUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDM0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQVpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsrQ0FDTztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNPO0lBTnZCLFNB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LENBaGQ4QyxrQkFBUSxHQWdkdEQ7a0JBaGRvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gXCIuL1Nsb3QzeDMuQ21kXCI7XG5pbXBvcnQgUG9wdXBTZWxlY3RMaW5lIGZyb20gXCIuL1Nsb3QzeDMuUG9wdXBTZWxlY3RMaW5lXCI7XG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgTWluaUdhbWUgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L01pbmlHYW1lXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IExhbmd1YWdlTGFuZ3VhZ2VNYW5hZ2VyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0xhbmd1YWdlLkxhbmd1YWdlTWFuYWdlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIlNsb3QzeDMuQnV0dG9uQmV0XCIpXG5leHBvcnQgY2xhc3MgQnV0dG9uQmV0IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZOb3JtYWw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZBY3RpdmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gaXNBY3RpdmUgPyB0aGlzLnNmQWN0aXZlIDogdGhpcy5zZk5vcm1hbDtcbiAgICAgICAgdGhpcy5idXR0b24uaW50ZXJhY3RhYmxlID0gIWlzQWN0aXZlO1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QzeDNDb250cm9sbGVyIGV4dGVuZHMgTWluaUdhbWUge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgc3ByRnJhbWVJdGVtczogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNwckZyYW1lSXRlbXNCbHVyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgaXRlbVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW0J1dHRvbkJldF0pXG4gICAgYnV0dG9uQmV0czogQnV0dG9uQmV0W10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2x1bW5zOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5lc1dpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5TcGluOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuTGluZTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkNsb3NlOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQXV0bzogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZBdXRvMDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZkF1dG8wZW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc2ZBdXRvMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZkF1dG8xZW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkJvb3N0OiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZkJvb3N0MDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZkJvb3N0MGVuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQm9vc3QxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNmQm9vc3QxZW46IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSmFja3BvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxibFdpbkNhc2g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb2FzdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEphY2twb3Q6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEJpZ1dpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFBvcHVwU2VsZWN0TGluZSlcbiAgICBwb3B1cFNlbGVjdExpbmU6IFBvcHVwU2VsZWN0TGluZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBwdWJsaWMgcG9wdXBzOiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIHByaXZhdGUgcm9sbFN0YXJ0SXRlbUNvdW50ID0gMTU7XG4gICAgcHJpdmF0ZSByb2xsQWRkSXRlbUNvdW50ID0gMTA7XG4gICAgcHJpdmF0ZSBzcGluRHVyYXRpb24gPSAxLjI7XG4gICAgcHJpdmF0ZSBhZGRTcGluRHVyYXRpb24gPSAwLjM7XG4gICAgcHJpdmF0ZSBpdGVtSGVpZ2h0ID0gMDtcbiAgICBwcml2YXRlIGJldElkeCA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0QmV0ID0gWzEwLCAxMDAsIDEwMDBdO1xuICAgIHByaXZhdGUgYXJyTGluZVNlbGVjdCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjBdO1xuICAgIHByaXZhdGUgaXNTcGluZWQgPSB0cnVlO1xuICAgIHByaXZhdGUgaXNCb29zdCA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNBdXRvID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBpc0NhbkNoYW5nZUJldCA9IHRydWU7XG4gICAgcHJpdmF0ZSBsYXN0U3BpblJlczogY21kLlJlY2VpdmVTcGluID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLml0ZW1IZWlnaHQgPSB0aGlzLml0ZW1UZW1wbGF0ZS5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHRoaXMuY29sdW1ucy5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBjb3VudCA9IHRoaXMucm9sbFN0YXJ0SXRlbUNvdW50ICsgaSAqIHRoaXMucm9sbEFkZEl0ZW1Db3VudDtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtVGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIGl0ZW0ucGFyZW50ID0gY29sdW1uO1xuICAgICAgICAgICAgICAgIGlmIChqID49IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc0JsdXJbVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgdGhpcy5zcHJGcmFtZUl0ZW1zQmx1ci5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW1V0aWxzLnJhbmRvbVJhbmdlSW50KDAsIHRoaXMuc3ByRnJhbWVJdGVtcy5sZW5ndGgpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IG51bGw7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLmJ1dHRvbkJldHNbaV07XG4gICAgICAgICAgICBidG4uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICAgICAgYnRuLmJ1dHRvbi5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlNsb3QzeDNcIik7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2FuQ2hhbmdlQmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGlmeV9mYXN0X2FjdGlvbicpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2xkSWR4ID0gdGhpcy5iZXRJZHg7XG4gICAgICAgICAgICAgICAgdGhpcy5iZXRJZHggPSBpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5zZXRBY3RpdmUoaSA9PSB0aGlzLmJldElkeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5DaGFuZ2VCZXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDYW5DaGFuZ2VCZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhbmdlUm9vbShvbGRJZHgsIHRoaXMuYmV0SWR4KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnRuQXV0by5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0F1dG8gPSAhdGhpcy5pc0F1dG87XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJTbG90M3gzXCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5BdXRvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gTGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UubGFuZ3VhZ2VDb2RlPT1cInZpXCI/IHRoaXMuc2ZBdXRvMTp0aGlzLnNmQXV0bzFlbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5Cb29zdC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQXV0by5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9TGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UubGFuZ3VhZ2VDb2RlPT1cInZpXCI/IHRoaXMuc2ZBdXRvMDp0aGlzLnNmQXV0bzBlbjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NwaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idG5Cb29zdC5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0Jvb3N0ID0gIXRoaXMuaXNCb29zdDtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlNsb3QzeDNcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jvb3N0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuQXV0by5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gTGFuZ3VhZ2VMYW5ndWFnZU1hbmFnZXIuaW5zdGFuY2UubGFuZ3VhZ2VDb2RlPT1cInZpXCI/IHRoaXMuc2ZCb29zdDE6dGhpcy5zZkJvb3N0MWVuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkJvb3N0LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID1MYW5ndWFnZUxhbmd1YWdlTWFuYWdlci5pbnN0YW5jZS5sYW5ndWFnZUNvZGU9PVwidmlcIj8gdGhpcy5zZkJvb3N0MDp0aGlzLnNmQm9vc3QwZW47XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTcGluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLm9uU2VsZWN0ZWRDaGFuZ2VkID0gKGxpbmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFyckxpbmVTZWxlY3QgPSBsaW5lcztcbiAgICAgICAgfVxuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfTE9HT1VULCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhOiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0pBQ0tQT1Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZUphY2twb3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsSmFja3BvdCwgcmVzLnZhbHVlLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TUElOOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVTcGluKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3BpblJlc3VsdChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJlT3JkZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJTbG90M3gzXCIpO1xuICAgICAgICBzdXBlci5zaG93KCk7XG4gICAgICAgIHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJsV2luQ2FzaC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzV2luLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5saW5lc1dpbi5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTcGluZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5iZXRJZHggPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25CZXRzW2ldLnNldEFjdGl2ZShpID09IHRoaXMuYmV0SWR4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU2NyaWJlKHRoaXMuYmV0SWR4KSk7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBBcHAuaW5zdGFuY2UuaGlkZUdhbWVNaW5pKFwiU2xvdDN4M1wiKTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblNjcmliZSh0aGlzLmJldElkeCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZU9yZGVyKCkge1xuICAgICAgICBzdXBlci5yZU9yZGVyKCk7XG5cbiAgICB9XG5cbiAgICBhY3RTcGluKGV2ZW4gPSBudWxsKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1NwaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90aWZ5X2Zhc3RfYWN0aW9uJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVuICE9IG51bGwpXG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJTbG90M3gzXCIpO1xuICAgICAgICB0aGlzLmlzU3BpbmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RvcEFsbEVmZmVjdHMoKTtcbiAgICAgICAgdGhpcy5zdG9wU2hvd0xpbmVzV2luKCk7XG4gICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZmFsc2UpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25CZXRzW2ldLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNwaW4odGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSwgdGhpcy5hcnJMaW5lU2VsZWN0LnRvU3RyaW5nKCkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEVuYWJsZWRBbGxCdXR0b25zKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmJ0blNwaW4uaW50ZXJhY3RhYmxlID0gaXNFbmFibGVkO1xuICAgICAgICB0aGlzLmJ0bkNsb3NlLmludGVyYWN0YWJsZSA9IGlzRW5hYmxlZDtcbiAgICAgICAgdGhpcy5idG5MaW5lLmludGVyYWN0YWJsZSA9IGlzRW5hYmxlZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudDtcbiAgICAgICAgcGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgwLjIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNwaW5SZXN1bHQocmVzOiBjbWQuUmVjZWl2ZVNwaW4pIHtcbiAgICAgICAgY2MubG9nKFwia2V0cXVhOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHJlc3VsdFN1Y2Nlc3MgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG4gICAgICAgIGlmIChyZXN1bHRTdWNjZXNzLmluZGV4T2YocmVzLnJlc3VsdCkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NwaW5lZCA9IHRydWU7XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnModHJ1ZSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5idXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc0F1dG8gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQXV0by5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5idG5BdXRvLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zZkF1dG8wO1xuXG4gICAgICAgICAgICB0aGlzLmlzQm9vc3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuQm9vc3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNmQm9vc3QwO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHJlcy5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90X2Vub3VnaCcpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdW5rbm93bl9lcnJvcjEnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luIC09IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0gKiB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuXG4gICAgICAgIHRoaXMubGFzdFNwaW5SZXMgPSByZXM7XG4gICAgICAgIGxldCBtYXRyaXggPSByZXMubWF0cml4LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGV0IHRpbWVTY2FsZSA9IHRoaXMuaXNCb29zdCA/IDAuNSA6IDE7XG4gICAgICAgIC8vIHRoaXMubm9kZS5zY2FsZT0wLjI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGwgPSB0aGlzLmNvbHVtbnMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBsZXQgc3RlcDFQb3MgPSB0aGlzLml0ZW1IZWlnaHQgKiAwLjM7XG4gICAgICAgICAgICBsZXQgc3RlcDJQb3MgPSAtdGhpcy5pdGVtSGVpZ2h0ICogcm9sbC5jaGlsZHJlbkNvdW50ICsgdGhpcy5pdGVtSGVpZ2h0ICogMyAtIHRoaXMuaXRlbUhlaWdodCAqIDAuMztcbiAgICAgICAgICAgIGxldCBzdGVwM1BvcyA9IC10aGlzLml0ZW1IZWlnaHQgKiByb2xsLmNoaWxkcmVuQ291bnQgKyB0aGlzLml0ZW1IZWlnaHQgKiAzO1xuICAgICAgICAgICAgcm9sbC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDAuMiAqIGkgKiB0aW1lU2NhbGUpLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwuZ2V0UG9zaXRpb24oKS54LCBzdGVwMVBvcykpLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uT3V0KCkpLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygodGhpcy5zcGluRHVyYXRpb24gKyB0aGlzLmFkZFNwaW5EdXJhdGlvbiAqIGkpICogdGltZVNjYWxlLCBjYy52Mihyb2xsLmdldFBvc2l0aW9uKCkueCwgc3RlcDJQb3MpKS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluT3V0KCkpLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwuZ2V0UG9zaXRpb24oKS54LCBzdGVwM1BvcykpLmVhc2luZyhjYy5lYXNlUXVhZHJhdGljQWN0aW9uSW4oKSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb2xsLnNldFBvc2l0aW9uKGNjLnYyKHJvbGwuZ2V0UG9zaXRpb24oKS54LCAwKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLmNvbHVtbnMuY2hpbGRyZW5Db3VudCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNwaW5lZCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgcm9sbC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKCgwLjcgKyAwLjIgKiBpKSAqIHRpbWVTY2FsZSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSByb2xsLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblsyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1twYXJzZUludChtYXRyaXhbaV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4WzMgKyBpXSldO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblswXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1twYXJzZUludChtYXRyaXhbNiArIGldKV07XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gMV0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4W2ldKV07XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDJdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFszICsgaV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY2hpbGRyZW4ubGVuZ3RoIC0gM10uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbcGFyc2VJbnQobWF0cml4WzYgKyBpXSldO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3BpbmVkKCkge1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXV0byAmJiAhdGhpcy5pc0Jvb3N0KSB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMubGFzdFNwaW5SZXMucmVzdWx0KSB7XG4gICAgICAgICAgICBjYXNlIDA6Ly9rIGFuXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTovLyB0aGFuZyB0aHVvbmdcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOi8vIHRoYW5nIGxvblxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0VmZmVjdEJpZ1dpbih0aGlzLmxhc3RTcGluUmVzLnByaXplLCAoKSA9PiB0aGlzLnNob3dMaW5lV2lucygpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzovL2phY2twb3RcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RKYWNrcG90KHRoaXMubGFzdFNwaW5SZXMucHJpemUsICgpID0+IHRoaXMuc2hvd0xpbmVXaW5zKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA2Oi8vdGhhbmcgc2lldSBsb25cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RCaWdXaW4odGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgKCkgPT4gdGhpcy5zaG93TGluZVdpbnMoKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RCaWdXaW4oY2FzaDogbnVtYmVyLCBjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdEJpZ1dpbi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKTtcbiAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmVmZmVjdEJpZ1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RKYWNrcG90KGNhc2g6IG51bWJlciwgY2I6ICgpID0+IHZvaWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5lZmZlY3RKYWNrcG90LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpO1xuICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMSksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8obGFiZWwsIGNhc2gsIDEpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93V2luQ2FzaChjb2luOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubGJsV2luQ2FzaC5wYXJlbnQ7XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubGJsV2luQ2FzaC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBwYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxhYmVsLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5mYWRlSW4oMC4zKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY29pbiwgMC41KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuNSksXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDAuMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wQWxsRWZmZWN0cygpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wU2hvd0xpbmVzV2luKCkge1xuICAgICAgICB0aGlzLmxpbmVzV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5saW5lc1dpbi5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubGluZXNXaW4uY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wQWxsSXRlbUVmZmVjdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEFsbEl0ZW1FZmZlY3QoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jb2x1bW5zLmNoaWxkcmVuW2ldLmNoaWxkcmVuO1xuICAgICAgICAgICAgY2hpbGRyZW5bMF0uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIGNoaWxkcmVuWzFdLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjaGlsZHJlblsyXS5zdG9wQWxsQWN0aW9ucygpO1xuXG4gICAgICAgICAgICBjaGlsZHJlblswXS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDEpKTtcbiAgICAgICAgICAgIGNoaWxkcmVuWzFdLnJ1bkFjdGlvbihjYy5zY2FsZVRvKDAuMSwgMSkpO1xuICAgICAgICAgICAgY2hpbGRyZW5bMl0ucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCAxKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dMaW5lV2lucygpIHtcbiAgICAgICAgdGhpcy5saW5lc1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB2YXIgbGluZXNXaW4gPSB0aGlzLmxhc3RTcGluUmVzLmxpbmVzV2luLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdmFyIGxpbmVzV2luQ2hpbGRyZW4gPSB0aGlzLmxpbmVzV2luLmNoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzV2luQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmVzV2luQ2hpbGRyZW5baV0uYWN0aXZlID0gbGluZXNXaW4uaW5kZXhPZihcIlwiICsgKGkgKyAxKSkgPj0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5sYXN0U3BpblJlcy5wcml6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1dpbkNhc2godGhpcy5sYXN0U3BpblJlcy5wcml6ZSk7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDEuNSkpO1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzV2luQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZXNXaW5DaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjUpKTtcbiAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNTcGluZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNCb29zdCB8fCB0aGlzLmlzQXV0bykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0U3BpbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5idXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5saW5lc1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UuYXBwbHkobnVsbCwgYWN0aW9ucykpO1xuICAgIH1cbn1cbiJdfQ==