
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/BauCua/BauCuaScript/BauCua.BauCuaController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9595cfEBbBFD7c/2AZ2TcQp', 'BauCua.BauCuaController');
// BauCua/BauCuaScript/BauCua.BauCuaController.ts

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
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var ScrollViewControl_1 = require("../../Lobby/LobbyScript/Script/common/ScrollViewControl");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var BauCua_ButtonPayBet_1 = require("./BauCua.ButtonPayBet");
var BauCua_Cmd_1 = require("./BauCua.Cmd");
var TW = cc.tween;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonBet = /** @class */ (function () {
    function ButtonBet() {
        this.button = null;
        this.sfNormal = null;
        this.sfActive = null;
        this.border_chip = null;
        this._isActive = false;
    }
    ButtonBet.prototype.setActive = function (isActive) {
        this._isActive = isActive;
        // this.button.getComponent(cc.Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
        this.button.interactable = !isActive;
        // this.button.getComponentInChildren(cc.Sprite).node.active = isActive;
        if (isActive)
            this.border_chip.node.x = this.button.node.x;
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
    __decorate([
        property(sp.Skeleton)
    ], ButtonBet.prototype, "border_chip", void 0);
    ButtonBet = __decorate([
        ccclass("BauCua.ButtonBet")
    ], ButtonBet);
    return ButtonBet;
}());
exports.ButtonBet = ButtonBet;
var BauCuaController = /** @class */ (function (_super) {
    __extends(BauCuaController, _super);
    function BauCuaController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprSmallDices = [];
        _this.scrollChip = [];
        _this.sprResultDices = [];
        _this.lblSession = null;
        _this.lblTime = null;
        _this.lblToast = null;
        _this.lblWinCoin = null;
        _this.buttonBets = [];
        _this.btnPayBets = [];
        _this.nodeSoiCau = null;
        _this.nodeHistories = null;
        _this.itemHistoryTemplate = null;
        _this.btnConfirm = null;
        _this.btnCancel = null;
        _this.btnReBet = null;
        _this.lblsSoiCau = [];
        _this.popups = [];
        _this.popupContainer = null;
        _this.scrHistory = null;
        _this.bowl = null;
        _this.listBet = [1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
        _this.roomId = 0;
        _this.betIdx = 0;
        _this.isBetting = false;
        _this.historiesData = [];
        _this.beted = [0, 0, 0, 0, 0, 0];
        _this.betting = [0, 0, 0, 0, 0, 0];
        _this.inited = false;
        _this.sprResultDice = null;
        _this.percentScroll = 0;
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        _this.baucuaBundle = null;
        return _this;
    }
    BauCuaController_1 = BauCuaController;
    BauCuaController.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.sprResultDice = this.bowl.getChildByName("sprResult");
    };
    BauCuaController.prototype.start = function () {
        var _this = this;
        this.timeBet = Date.now();
        BauCuaController_1.instance = this;
        this.percentScroll = 0;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, 0.1);
        this.itemHistoryTemplate.active = false;
        var _loop_1 = function (i) {
            btn = this_1.buttonBets[i];
            // btn.setActive(i == this.betIdx);
            btn.button.node.on("click", function () {
                _this.betIdx = i;
                App_1.default.instance.showBgMiniGame("BauCua");
                for (var j = 0; j < _this.buttonBets.length; j++) {
                    //  cc.log("this:" + this.betIdx + ":" + j);
                    _this.buttonBets[j].setActive(j == _this.betIdx);
                }
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            this_2.btnPayBets[i].node.on("click", function () {
                App_1.default.instance.showBgMiniGame("BauCua");
                _this.actConfirm(i);
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.btnPayBets.length; i++) {
            _loop_2(i);
        }
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_LOGOUT, function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addOnClose(function () {
            if (!_this.node.active)
                return;
            _this.dismiss();
        }, this);
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case BauCua_Cmd_1.default.Code.INFO: {
                    _this.inited = true;
                    var res = new BauCua_Cmd_1.default.ReceiveInfo(data);
                    _this.isBetting = res.bettingState;
                    _this.lblSession.string = "#" + res.referenceId;
                    _this.lblTime.string = _this.longToTime(res.remainTime);
                    var totalBets = res.potData.split(",");
                    var beted = res.betData.split(",");
                    for (var i = 0; i < _this.btnPayBets.length; i++) {
                        var btnPayBet = _this.btnPayBets[i];
                        btnPayBet.lblTotal.string = _this.moneyToK(parseInt(totalBets[i]));
                        btnPayBet.lblBeted.string = _this.moneyToK(parseInt(beted[i]));
                        btnPayBet.overlay.active = true;
                        btnPayBet.button.interactable = _this.isBetting;
                        btnPayBet.lblFactor.node.active = false;
                        _this.beted[i] = parseInt(beted[i]);
                    }
                    if (!_this.isBetting) {
                        _this.btnPayBets[res.dice1].overlay.active = false;
                        _this.btnPayBets[res.dice2].overlay.active = false;
                        _this.btnPayBets[res.dice3].overlay.active = false;
                        if (res.xValue > 1) {
                            _this.btnPayBets[res.xPot].lblFactor.node.active = true;
                            _this.btnPayBets[res.xPot].lblFactor.string = "x" + res.xValue;
                        }
                    }
                    if (res.lichSuPhien != "") {
                        var histories = res.lichSuPhien.split(",");
                        for (var i = 0; i < histories.length; i++) {
                            _this.historiesData.push([parseInt(histories[i]), parseInt(histories[++i]), parseInt(histories[++i])]);
                            ++i;
                            ++i;
                        }
                        _this.loadHistory(_this.historiesData);
                        _this.caculatorSoiCau();
                    }
                    break;
                }
                case BauCua_Cmd_1.default.Code.START_NEW_GAME: {
                    var res = new BauCua_Cmd_1.default.ReceiveNewGame(data);
                    _this.actStartNewGame();
                    //  cc.log("BAU CUA START_NEW_GAME:");
                    _this.lblSession.string = "#" + res.referenceId;
                    for (var i = 0; i < _this.btnPayBets.length; i++) {
                        var btnPayBet = _this.btnPayBets[i];
                        btnPayBet.lblBeted.string = "0";
                        btnPayBet.lblBeted.node.color = cc.Color.WHITE;
                        btnPayBet.lblTotal.string = "0";
                        btnPayBet.overlay.active = false;
                        btnPayBet.button.interactable = true;
                        btnPayBet.lblFactor.node.active = false;
                    }
                    _this.beted = [0, 0, 0, 0, 0, 0];
                    _this.betting = [0, 0, 0, 0, 0, 0];
                    _this.btnConfirm.interactable = true;
                    _this.btnCancel.interactable = true;
                    _this.btnReBet.interactable = true;
                    break;
                }
                case BauCua_Cmd_1.default.Code.UPDATE: {
                    var res = new BauCua_Cmd_1.default.ReceiveUpdate(data);
                    _this.lblTime.string = _this.longToTime(res.remainTime);
                    _this.isBetting = res.bettingState == 1;
                    var totalBets = res.potData.split(",");
                    for (var i = 0; i < _this.btnPayBets.length; i++) {
                        var btnPayBet = _this.btnPayBets[i];
                        btnPayBet.lblTotal.string = _this.moneyToK(parseInt(totalBets[i]));
                        if (_this.isBetting) {
                            btnPayBet.overlay.active = false;
                            btnPayBet.lblFactor.node.active = false;
                        }
                        else {
                            btnPayBet.button.interactable = false;
                            btnPayBet.lblBeted.string = _this.moneyToK(_this.beted[i]);
                            btnPayBet.lblBeted.node.color = cc.Color.WHITE;
                        }
                    }
                    break;
                }
                case BauCua_Cmd_1.default.Code.RESULT: {
                    var res = new BauCua_Cmd_1.default.ReceiveResult(data);
                    //  cc.log("BAU CUA RESULT:", res);
                    _this.atcShowResult(res);
                    break;
                }
                case BauCua_Cmd_1.default.Code.PRIZE: {
                    var res = new BauCua_Cmd_1.default.ReceivePrize(data);
                    //  cc.log("BAU CUA PRIZE:");
                    //show win coin
                    Configs_1.default.Login.Coin = res.currentMoney;
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    _this.lblWinCoin.node.stopAllActions();
                    _this.lblWinCoin.node.setPosition(-26, -16);
                    _this.lblWinCoin.node.opacity = 0;
                    _this.lblWinCoin.string = "+" + Utils_1.default.formatNumber(res.prize);
                    _this.lblWinCoin.node.active = true;
                    _this.lblWinCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(0.2), cc.moveBy(2, cc.v2(0, 100))), cc.fadeOut(0.15), cc.callFunc(function () {
                        _this.lblWinCoin.node.active = false;
                    })));
                    break;
                }
                case BauCua_Cmd_1.default.Code.BET: {
                    var res = new BauCua_Cmd_1.default.ReceiveBet(data);
                    //  cc.log("============BAU CUA BET===============" + res.result);
                    switch (res.result) {
                        case 100:
                            _this.showToast(App_1.default.instance.getTextLang('txt_bet_error2'));
                            break;
                        case 101:
                            _this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
                            break;
                        case 102:
                            _this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
                            break;
                        case 103:
                            _this.showToast("Chỉ được cược tối đa 1000.000.");
                            _this.btnConfirm.interactable = true;
                            _this.btnCancel.interactable = true;
                            _this.btnReBet.interactable = true;
                            break;
                    }
                    if (res.result != 1) {
                        break;
                    }
                    Configs_1.default.Login.Coin = res.currentMoney;
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    for (var i = 0; i < _this.btnPayBets.length; i++) {
                        _this.beted[i] += _this.betting[i];
                        _this.betting[i] = 0;
                        var btnPayBet = _this.btnPayBets[i];
                        btnPayBet.lblBeted.string = _this.moneyToK(_this.beted[i]);
                        btnPayBet.lblBeted.node.color = cc.Color.WHITE;
                    }
                    BauCuaController_1.lastBeted = _this.beted;
                    _this.showToast(App_1.default.instance.getTextLang('txt_bet_success'));
                    _this.btnConfirm.interactable = true;
                    _this.btnCancel.interactable = true;
                    _this.btnReBet.interactable = true;
                    break;
                }
            }
        }, this);
    };
    BauCuaController.prototype.onBtnScrollLeft = function () {
        this.percentScroll -= 0.3;
        if (this.percentScroll <= 0)
            this.percentScroll = 0;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, 0.1);
    };
    BauCuaController.prototype.onBtnScrollRight = function () {
        this.percentScroll += 0.3;
        if (this.percentScroll >= 1)
            this.percentScroll = 1;
        this.scrollChip.scrollToPercentHorizontal(this.percentScroll, 0.1);
    };
    BauCuaController.prototype.spin = function (arrDice) {
        for (var i = 0; i < this.btnPayBets.length; i++) {
            var btnPayBet = this.btnPayBets[i];
            btnPayBet.overlay.active = false;
        }
        for (var i = 0; i < arrDice.length; i++) {
            var btnPayBet = this.btnPayBets[arrDice[i]];
            btnPayBet.overlay.active = true;
            TW(btnPayBet.overlay).then(cc.blink(2.0, 10)).start();
        }
    };
    BauCuaController.prototype.longToTime = function (time) {
        var m = parseInt((time / 60).toString());
        var s = time % 60;
        // return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
        return (s < 10 ? "0" : "") + s;
    };
    BauCuaController.prototype.moneyToK = function (money) {
        if (money < 100000) {
            return Utils_1.default.formatNumber(money);
        }
        // money = parseInt((money / 1000).toString());
        return Utils_1.default.formatMoney(money);
    };
    BauCuaController.prototype.addHistory = function (dices) {
        // if (this.itemHistoryTemplate.parent.childrenCount > 50) {
        //     this.itemHistoryTemplate.parent.children[1].removeFromParent();
        //     this.historiesData.splice(0, 1);
        // }
        this.historiesData.push(dices);
        // let item = cc.instantiate(this.itemHistoryTemplate);
        // item.parent = this.itemHistoryTemplate.parent;
        // item.active = true;
        // item.getChildByName("dice1").getComponent(cc.Sprite).spriteFrame = this.sprSmallDices[dices[0]];
        // item.getChildByName("dice2").getComponent(cc.Sprite).spriteFrame = this.sprSmallDices[dices[1]];
        // item.getChildByName("dice3").getComponent(cc.Sprite).spriteFrame = this.sprSmallDices[dices[2]];
    };
    BauCuaController.prototype.loadHistory = function (historyData) {
        var _this = this;
        var listData = historyData.slice();
        listData.reverse();
        var updateCb = function (item, dices) {
            item.active = true;
            item.getChildByName("dice1").getComponent(cc.Sprite).spriteFrame = _this.sprSmallDices[dices[0]];
            item.getChildByName("dice2").getComponent(cc.Sprite).spriteFrame = _this.sprSmallDices[dices[1]];
            item.getChildByName("dice3").getComponent(cc.Sprite).spriteFrame = _this.sprSmallDices[dices[2]];
        };
        this.scrHistory.setDataList(updateCb, listData);
    };
    BauCuaController.prototype.caculatorSoiCau = function () {
        var counts = [0, 0, 0, 0, 0, 0];
        for (var i = 0; i < this.historiesData.length; i++) {
            var dices = this.historiesData[i];
            for (var j = 0; j < 3; j++) {
                counts[dices[j]]++;
            }
        }
        for (var i = 0; i < this.lblsSoiCau.length; i++) {
            this.lblsSoiCau[i].string = counts[i].toString();
        }
    };
    BauCuaController.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    BauCuaController.prototype.actSoiCau = function () {
        this.nodeHistories.active = !this.nodeHistories.active;
        this.nodeSoiCau.active = !this.nodeHistories.active;
    };
    BauCuaController.prototype.actCancel = function () {
        if (!this.inited)
            return;
        for (var i = 0; i < this.btnPayBets.length; i++) {
            var btnPayBet = this.btnPayBets[i];
            btnPayBet.lblBeted.node.color = cc.Color.WHITE;
            btnPayBet.lblBeted.string = this.moneyToK(this.beted[i]);
            this.betting[i] = 0;
        }
    };
    BauCuaController.prototype.actConfirm = function (index) {
        if (!this.inited)
            return;
        if (!this.isBetting) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
            return;
        }
        if (Configs_1.default.Login.Coin < this.listBet[this.betIdx]) {
            this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
            return;
        }
        if (Date.now() - this.timeBet < 1000) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        this.betting[index] += this.listBet[this.betIdx];
        var total = 0;
        for (var i = 0; i < this.betting.length; i++) {
            total += this.betting[i];
        }
        if (total <= 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error4'));
            return;
        }
        this.btnPayBets[index].lblBeted.string = this.moneyToK(this.betting[index] + this.beted[index]);
        this.timeBet = Date.now();
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendBet(this.betting.toString()));
        this.btnConfirm.interactable = false;
        this.btnCancel.interactable = false;
        this.btnReBet.interactable = false;
    };
    BauCuaController.prototype.actReBet = function () {
        if (!this.inited)
            return;
        if (!this.isBetting) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
            return;
        }
        if (BauCuaController_1.lastBeted == null) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error5'));
            return;
        }
        var totalBeted = 0;
        for (var i = 0; i < this.beted.length; i++) {
            totalBeted += this.beted[i];
        }
        if (totalBeted > 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error6'));
            return;
        }
        this.betting = BauCuaController_1.lastBeted;
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendBet(BauCuaController_1.lastBeted.toString()));
        this.btnConfirm.interactable = false;
        this.btnCancel.interactable = false;
        this.btnReBet.interactable = false;
    };
    BauCuaController.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("BauCua");
        this.inited = false;
        this.lblToast.node.parent.active = false;
        this.lblWinCoin.node.active = false;
        this.betIdx = 0;
        this.betting = [0, 0, 0, 0, 0, 0];
        this.beted = [0, 0, 0, 0, 0, 0];
        this.historiesData = [];
        this.nodeHistories.active = true;
        this.nodeSoiCau.active = !this.nodeHistories.active;
        this.nodeHistories.getComponent(cc.ScrollView).scrollToTop(0);
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].setActive(i == this.betIdx);
        }
        for (var i = 0; i < this.btnPayBets.length; i++) {
            var btnPayBet = this.btnPayBets[i];
            btnPayBet.lblBeted.string = "0";
            btnPayBet.lblBeted.node.color = cc.Color.WHITE;
            btnPayBet.lblTotal.string = "0";
            btnPayBet.lblFactor.node.active = false;
            btnPayBet.overlay.active = true;
            btnPayBet.button.interactable = false;
        }
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendScribe(this.roomId));
    };
    BauCuaController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        App_1.default.instance.hideGameMini("BauCua");
        // for (let i = 1; i < this.itemHistoryTemplate.parent.childrenCount; i++) {
        //     this.itemHistoryTemplate.parent.children[i].destroy();
        // }
        MiniGameNetworkClient_1.default.getInstance().send(new BauCua_Cmd_1.default.SendUnScribe(this.roomId));
    };
    BauCuaController.prototype._onShowed = function () {
        _super.prototype._onShowed;
    };
    BauCuaController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
    };
    BauCuaController.prototype.atcShowResult = function (res) {
        var _this = this;
        this.sprResultDice.children[0].getComponent(cc.Sprite).spriteFrame = this.sprResultDices[res.dice1];
        this.sprResultDice.children[1].getComponent(cc.Sprite).spriteFrame = this.sprResultDices[res.dice2];
        this.sprResultDice.children[2].getComponent(cc.Sprite).spriteFrame = this.sprResultDices[res.dice3];
        var bowlOn = this.bowl.getChildByName("bowl");
        cc.Tween.stopAllByTarget(bowlOn);
        TW(bowlOn).to(0.7, { y: bowlOn.y + 50, opacity: 150, scale: 1.0 }, { easing: cc.easing.sineIn })
            .call(function () {
            _this.historiesData.push([res.dice1, res.dice2, res.dice3]);
            _this.loadHistory(_this.historiesData);
            _this.caculatorSoiCau();
            if (res.xValue > 1) {
                _this.btnPayBets[res.xPot].lblFactor.node.active = true;
                _this.btnPayBets[res.xPot].lblFactor.string = "x" + res.xValue;
            }
            _this.spin([res.dice1, res.dice2, res.dice3]);
            bowlOn.active = false;
        }).start();
    };
    BauCuaController.prototype.actStartNewGame = function () {
        var _this = this;
        var bowlOn = this.bowl.getChildByName("bowl");
        bowlOn.active = true;
        TW(bowlOn).set({ opacity: 255, y: 0, scale: 1 }).start();
        var initPos = this.bowl.getPosition();
        var acShake = TW().to(0.1, { x: initPos.x - 20, scale: 1.0 }).to(0.1, { x: initPos.x }).to(0.1, { x: initPos.x + 20 }).to(0.1, { x: initPos.x, scale: 0.8 });
        cc.Tween.stopAllByTarget(this.bowl);
        TW(this.bowl).repeat(5, acShake).call(function () {
            _this.showToast(App_1.default.instance.getTextLang('txt_bet_invite'));
        }).start();
    };
    BauCuaController.prototype.actPopupHonors = function () {
        var _this = this;
        App_1.default.instance.showBgMiniGame("BauCua");
        if (this.popupHonor == null) {
            this.baucuaBundle.load("res/Prefabs/PopupHonors", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupHonor = cc.instantiate(prefab).getComponent("BauCua.PopupHonors");
                _this.popupHonor.node.parent = _this.popupContainer;
                _this.popupHonor.node.active = true;
                _this.popupHonor.show();
                _this.popups.push(_this.popupHonor.node);
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    BauCuaController.prototype.actPopupHistory = function () {
        var _this = this;
        App_1.default.instance.showBgMiniGame("BauCua");
        if (this.popupHistory == null) {
            this.baucuaBundle.load("res/Prefabs/PopupHistory", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupHistory = cc.instantiate(prefab).getComponent("BauCua.PopupHistory");
                _this.popupHistory.node.parent = _this.popupContainer;
                _this.popupHistory.node.active = true;
                _this.popupHistory.show();
                _this.popups.push(_this.popupHistory.node);
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    BauCuaController.prototype.actPopupGuide = function () {
        var _this = this;
        App_1.default.instance.showBgMiniGame("BauCua");
        if (this.popupGuide == null) {
            this.baucuaBundle.load("res/Prefabs/PopupGuide", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
                _this.popupGuide.node.parent = _this.popupContainer;
                _this.popupGuide.node.active = true;
                _this.popupGuide.show();
                _this.popups.push(_this.popupGuide.node);
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    var BauCuaController_1;
    BauCuaController.instance = null;
    BauCuaController.lastBeted = null;
    __decorate([
        property([cc.SpriteFrame])
    ], BauCuaController.prototype, "sprSmallDices", void 0);
    __decorate([
        property([cc.ScrollView])
    ], BauCuaController.prototype, "scrollChip", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], BauCuaController.prototype, "sprResultDices", void 0);
    __decorate([
        property(cc.Label)
    ], BauCuaController.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], BauCuaController.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], BauCuaController.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Label)
    ], BauCuaController.prototype, "lblWinCoin", void 0);
    __decorate([
        property([ButtonBet])
    ], BauCuaController.prototype, "buttonBets", void 0);
    __decorate([
        property([BauCua_ButtonPayBet_1.default])
    ], BauCuaController.prototype, "btnPayBets", void 0);
    __decorate([
        property(cc.Node)
    ], BauCuaController.prototype, "nodeSoiCau", void 0);
    __decorate([
        property(cc.Node)
    ], BauCuaController.prototype, "nodeHistories", void 0);
    __decorate([
        property(cc.Node)
    ], BauCuaController.prototype, "itemHistoryTemplate", void 0);
    __decorate([
        property(cc.Button)
    ], BauCuaController.prototype, "btnConfirm", void 0);
    __decorate([
        property(cc.Button)
    ], BauCuaController.prototype, "btnCancel", void 0);
    __decorate([
        property(cc.Button)
    ], BauCuaController.prototype, "btnReBet", void 0);
    __decorate([
        property([cc.Label])
    ], BauCuaController.prototype, "lblsSoiCau", void 0);
    __decorate([
        property([cc.Node])
    ], BauCuaController.prototype, "popups", void 0);
    __decorate([
        property(cc.Node)
    ], BauCuaController.prototype, "popupContainer", void 0);
    __decorate([
        property(ScrollViewControl_1.default)
    ], BauCuaController.prototype, "scrHistory", void 0);
    __decorate([
        property(cc.Node)
    ], BauCuaController.prototype, "bowl", void 0);
    BauCuaController = BauCuaController_1 = __decorate([
        ccclass
    ], BauCuaController);
    return BauCuaController;
}(MiniGame_1.default));
exports.default = BauCuaController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQmF1Q3VhXFxCYXVDdWFTY3JpcHRcXEJhdUN1YS5CYXVDdWFDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELGlFQUE0RDtBQUM1RCw2RkFBd0Y7QUFDeEYsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSx1R0FBa0c7QUFDbEcsNkZBQWdGO0FBQ2hGLDZEQUFpRDtBQUNqRCwyQ0FBK0I7QUFJL0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztBQUNaLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxXQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBRWhDLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGdCQUFXLEdBQWdCLElBQUksQ0FBQztRQUNoQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBV3RCLENBQUM7SUFURyw2QkFBUyxHQUFULFVBQVUsUUFBaUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsOEZBQThGO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBRXJDLHdFQUF3RTtRQUN4RSxJQUFJLFFBQVE7WUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFsQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDOytDQUNPO0lBRWhDO1FBREMsUUFBUSxD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QzsyREFDbUI7SUFFckM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpRUFDeUI7SUFFM0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3REFDZ0I7SUFFcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDZTtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNjO0lBRWxDO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dEQUNjO0lBRW5DO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO29EQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NERBQ29CO0lBR3RDO1FBREMsUUFBUSxDQUFDLDJCQUFpQixDQUFDO3dEQUNnQjtJQUc1QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNVO0lBOUNYLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBbWpCcEM7SUFBRCx1QkFBQztDQW5qQkQsQUFtakJDLENBbmpCNkMsa0JBQVEsR0FtakJyRDtrQkFuakJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IE1pbmlHYW1lIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9NaW5pR2FtZVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFNjcm9sbFZpZXdDb250cm9sIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1Njcm9sbFZpZXdDb250cm9sXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHNcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBCdXR0b25QYXlCZXQgZnJvbSBcIi4vQmF1Q3VhLkJ1dHRvblBheUJldFwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9CYXVDdWEuQ21kXCI7XG5pbXBvcnQgUG9wdXBIaXN0b3J5IGZyb20gXCIuL0JhdUN1YS5Qb3B1cEhpc3RvcnlcIjtcbmltcG9ydCBQb3B1cEhvbm9ycyBmcm9tIFwiLi9CYXVDdWEuUG9wdXBIb25vcnNcIjtcblxudmFyIFRXID0gY2MudHdlZW47XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkJhdUN1YS5CdXR0b25CZXRcIilcbmV4cG9ydCBjbGFzcyBCdXR0b25CZXQge1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZk5vcm1hbDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZkFjdGl2ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGJvcmRlcl9jaGlwOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgX2lzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBzZXRBY3RpdmUoaXNBY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5faXNBY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgICAgLy8gdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBpc0FjdGl2ZSA/IHRoaXMuc2ZBY3RpdmUgOiB0aGlzLnNmTm9ybWFsO1xuICAgICAgICB0aGlzLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSAhaXNBY3RpdmU7XG5cbiAgICAgICAgLy8gdGhpcy5idXR0b24uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5TcHJpdGUpLm5vZGUuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIGlmIChpc0FjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMuYm9yZGVyX2NoaXAubm9kZS54ID0gdGhpcy5idXR0b24ubm9kZS54O1xuICAgIH1cbn1cblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhdUN1YUNvbnRyb2xsZXIgZXh0ZW5kcyBNaW5pR2FtZSB7XG5cbiAgICBzdGF0aWMgaW5zdGFuY2U6IEJhdUN1YUNvbnRyb2xsZXIgPSBudWxsO1xuICAgIHN0YXRpYyBsYXN0QmV0ZWQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgcHVibGljIHNwclNtYWxsRGljZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNjcm9sbFZpZXddKVxuICAgIHB1YmxpYyBzY3JvbGxDaGlwOiBjYy5TY3JvbGxWaWV3W10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwdWJsaWMgc3ByUmVzdWx0RGljZXM6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxibFNlc3Npb246IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxibFRpbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHVibGljIGxibFRvYXN0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHB1YmxpYyBsYmxXaW5Db2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtCdXR0b25CZXRdKVxuICAgIHB1YmxpYyBidXR0b25CZXRzOiBCdXR0b25CZXRbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbQnV0dG9uUGF5QmV0XSlcbiAgICBwdWJsaWMgYnRuUGF5QmV0czogQnV0dG9uUGF5QmV0W10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwdWJsaWMgbm9kZVNvaUNhdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIG5vZGVIaXN0b3JpZXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHB1YmxpYyBpdGVtSGlzdG9yeVRlbXBsYXRlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHB1YmxpYyBidG5Db25maXJtOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHVibGljIGJ0bkNhbmNlbDogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHB1YmxpYyBidG5SZUJldDogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkxhYmVsXSlcbiAgICBwdWJsaWMgbGJsc1NvaUNhdTogY2MuTGFiZWxbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgcHVibGljIHBvcHVwczogY2MuTm9kZVtdID0gW107XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIHBvcHVwQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTY3JvbGxWaWV3Q29udHJvbClcbiAgICBwdWJsaWMgc2NySGlzdG9yeTogU2Nyb2xsVmlld0NvbnRyb2wgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHVibGljIGJvd2w6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpc3RCZXQgPSBbMTAwMCwgNTAwMCwgMTAwMDAsIDUwMDAwLCAxMDAwMDAsIDUwMDAwMCwgMTAwMDAwMCwgNTAwMDAwMCwgMTAwMDAwMDBdO1xuICAgIHByaXZhdGUgcm9vbUlkID0gMDtcbiAgICBwcml2YXRlIGJldElkeCA9IDA7XG4gICAgcHJpdmF0ZSBpc0JldHRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIGhpc3Rvcmllc0RhdGEgPSBbXTtcbiAgICBwcml2YXRlIGJldGVkID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIHByaXZhdGUgYmV0dGluZyA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgc3ByUmVzdWx0RGljZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwZXJjZW50U2Nyb2xsID0gMDtcbiAgICBwcml2YXRlIHRpbWVCZXQ7XG4gICAgcHJpdmF0ZSBwb3B1cEhvbm9yOiBQb3B1cEhvbm9ycyA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEhpc3Rvcnk6IFBvcHVwSGlzdG9yeSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEd1aWRlID0gbnVsbDtcbiAgICBwdWJsaWMgYmF1Y3VhQnVuZGxlID0gbnVsbDtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICB0aGlzLnNwclJlc3VsdERpY2UgPSB0aGlzLmJvd2wuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJSZXN1bHRcIik7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnRpbWVCZXQgPSBEYXRlLm5vdygpO1xuICAgICAgICBCYXVDdWFDb250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcbiAgICAgICAgdGhpcy5wZXJjZW50U2Nyb2xsID0gMDtcbiAgICAgICAgdGhpcy5zY3JvbGxDaGlwLnNjcm9sbFRvUGVyY2VudEhvcml6b250YWwodGhpcy5wZXJjZW50U2Nyb2xsLCAwLjEpO1xuICAgICAgICB0aGlzLml0ZW1IaXN0b3J5VGVtcGxhdGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBidG4gPSB0aGlzLmJ1dHRvbkJldHNbaV07XG4gICAgICAgICAgICAvLyBidG4uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICAgICAgYnRuLmJ1dHRvbi5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmV0SWR4ID0gaTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJCYXVDdWFcIik7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInRoaXM6XCIgKyB0aGlzLmJldElkeCArIFwiOlwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tqXS5zZXRBY3RpdmUoaiA9PSB0aGlzLmJldElkeCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGF5QmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idG5QYXlCZXRzW2ldLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiQmF1Q3VhXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0Q29uZmlybShpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9MT0dPVVQsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmRpc21pc3MoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgbGV0IGlucGFja2V0ID0gbmV3IEluUGFja2V0KGRhdGEpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5JTkZPOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlSW5mbyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0JldHRpbmcgPSByZXMuYmV0dGluZ1N0YXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyByZXMucmVmZXJlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVGltZS5zdHJpbmcgPSB0aGlzLmxvbmdUb1RpbWUocmVzLnJlbWFpblRpbWUpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsQmV0cyA9IHJlcy5wb3REYXRhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJldGVkID0gcmVzLmJldERhdGEuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGF5QmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5sYmxUb3RhbC5zdHJpbmcgPSB0aGlzLm1vbmV5VG9LKHBhcnNlSW50KHRvdGFsQmV0c1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuUGF5QmV0LmxibEJldGVkLnN0cmluZyA9IHRoaXMubW9uZXlUb0socGFyc2VJbnQoYmV0ZWRbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5vdmVybGF5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQuYnV0dG9uLmludGVyYWN0YWJsZSA9IHRoaXMuaXNCZXR0aW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuUGF5QmV0LmxibEZhY3Rvci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRlZFtpXSA9IHBhcnNlSW50KGJldGVkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0JldHRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF5QmV0c1tyZXMuZGljZTFdLm92ZXJsYXkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBheUJldHNbcmVzLmRpY2UyXS5vdmVybGF5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QYXlCZXRzW3Jlcy5kaWNlM10ub3ZlcmxheS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy54VmFsdWUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QYXlCZXRzW3Jlcy54UG90XS5sYmxGYWN0b3Iubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGF5QmV0c1tyZXMueFBvdF0ubGJsRmFjdG9yLnN0cmluZyA9IFwieFwiICsgcmVzLnhWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMubGljaFN1UGhpZW4gIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpc3RvcmllcyA9IHJlcy5saWNoU3VQaGllbi5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhpc3Rvcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzRGF0YS5wdXNoKFtwYXJzZUludChoaXN0b3JpZXNbaV0pLCBwYXJzZUludChoaXN0b3JpZXNbKytpXSksIHBhcnNlSW50KGhpc3Rvcmllc1srK2ldKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEhpc3RvcnkodGhpcy5oaXN0b3JpZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FjdWxhdG9yU29pQ2F1KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU1RBUlRfTkVXX0dBTUU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZU5ld0dhbWUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0U3RhcnROZXdHYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCQVUgQ1VBIFNUQVJUX05FV19HQU1FOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiI1wiICsgcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGF5QmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5sYmxCZXRlZC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5sYmxCZXRlZC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQubGJsVG90YWwuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQub3ZlcmxheS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5idXR0b24uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5sYmxGYWN0b3Iubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldHRpbmcgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29uZmlybS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNhbmNlbC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blJlQmV0LmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlVXBkYXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRpbWUuc3RyaW5nID0gdGhpcy5sb25nVG9UaW1lKHJlcy5yZW1haW5UaW1lKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmV0dGluZyA9IHJlcy5iZXR0aW5nU3RhdGUgPT0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsQmV0cyA9IHJlcy5wb3REYXRhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0blBheUJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG5QYXlCZXQgPSB0aGlzLmJ0blBheUJldHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQubGJsVG90YWwuc3RyaW5nID0gdGhpcy5tb25leVRvSyhwYXJzZUludCh0b3RhbEJldHNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQmV0dGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5vdmVybGF5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5sYmxGYWN0b3Iubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuUGF5QmV0LmJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQubGJsQmV0ZWQuc3RyaW5nID0gdGhpcy5tb25leVRvSyh0aGlzLmJldGVkW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5QYXlCZXQubGJsQmV0ZWQubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiQkFVIENVQSBSRVNVTFQ6XCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXRjU2hvd1Jlc3VsdChyZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5QUklaRToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUHJpemUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJCQVUgQ1VBIFBSSVpFOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy9zaG93IHdpbiBjb2luXG4gICAgICAgICAgICAgICAgICAgIENvbmZpZ3MuTG9naW4uQ29pbiA9IHJlcy5jdXJyZW50TW9uZXk7XG4gICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsV2luQ29pbi5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsV2luQ29pbi5ub2RlLnNldFBvc2l0aW9uKC0yNiwgLTE2KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsV2luQ29pbi5zdHJpbmcgPSBcIitcIiArIFV0aWxzLmZvcm1hdE51bWJlcihyZXMucHJpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFdpbkNvaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFdpbkNvaW4ubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihjYy5mYWRlSW4oMC4yKSwgY2MubW92ZUJ5KDIsIGNjLnYyKDAsIDEwMCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoMC4xNSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuQkVUOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVCZXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCI9PT09PT09PT09PT1CQVUgQ1VBIEJFVD09PT09PT09PT09PT09PVwiICsgcmVzLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjMnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RfZW5vdWdoJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJDaOG7iSDEkcaw4bujYyBjxrDhu6NjIHThu5FpIMSRYSAxMDAwLjAwMC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5Db25maXJtLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5DYW5jZWwuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blJlQmV0LmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgIT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ0blBheUJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRbaV0gKz0gdGhpcy5iZXR0aW5nW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXR0aW5nW2ldID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0blBheUJldC5sYmxCZXRlZC5zdHJpbmcgPSB0aGlzLm1vbmV5VG9LKHRoaXMuYmV0ZWRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuUGF5QmV0LmxibEJldGVkLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBCYXVDdWFDb250cm9sbGVyLmxhc3RCZXRlZCA9IHRoaXMuYmV0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9zdWNjZXNzJykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbmZpcm0uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5DYW5jZWwuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5SZUJldC5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIG9uQnRuU2Nyb2xsTGVmdCgpIHtcbiAgICAgICAgdGhpcy5wZXJjZW50U2Nyb2xsIC09IDAuMztcbiAgICAgICAgaWYgKHRoaXMucGVyY2VudFNjcm9sbCA8PSAwKSB0aGlzLnBlcmNlbnRTY3JvbGwgPSAwO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsQ2hpcC5zY3JvbGxUb1BlcmNlbnRIb3Jpem9udGFsKHRoaXMucGVyY2VudFNjcm9sbCwgMC4xKTtcbiAgICB9XG5cbiAgICBvbkJ0blNjcm9sbFJpZ2h0KCkge1xuICAgICAgICB0aGlzLnBlcmNlbnRTY3JvbGwgKz0gMC4zO1xuICAgICAgICBpZiAodGhpcy5wZXJjZW50U2Nyb2xsID49IDEpIHRoaXMucGVyY2VudFNjcm9sbCA9IDE7XG4gICAgICAgIHRoaXMuc2Nyb2xsQ2hpcC5zY3JvbGxUb1BlcmNlbnRIb3Jpem9udGFsKHRoaXMucGVyY2VudFNjcm9sbCwgMC4xKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwaW4oYXJyRGljZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGF5QmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1tpXTtcbiAgICAgICAgICAgIGJ0blBheUJldC5vdmVybGF5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyRGljZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1thcnJEaWNlW2ldXTtcbiAgICAgICAgICAgIGJ0blBheUJldC5vdmVybGF5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBUVyhidG5QYXlCZXQub3ZlcmxheSkudGhlbihjYy5ibGluaygyLjAsIDEwKSkuc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb25nVG9UaW1lKHRpbWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBtID0gcGFyc2VJbnQoKHRpbWUgLyA2MCkudG9TdHJpbmcoKSk7XG4gICAgICAgIGxldCBzID0gdGltZSAlIDYwO1xuICAgICAgICAvLyByZXR1cm4gKG0gPCAxMCA/IFwiMFwiIDogXCJcIikgKyBtICsgXCI6XCIgKyAocyA8IDEwID8gXCIwXCIgOiBcIlwiKSArIHM7XG4gICAgICAgIHJldHVybiAocyA8IDEwID8gXCIwXCIgOiBcIlwiKSArIHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb25leVRvSyhtb25leTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG1vbmV5IDwgMTAwMDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gVXRpbHMuZm9ybWF0TnVtYmVyKG1vbmV5KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBtb25leSA9IHBhcnNlSW50KChtb25leSAvIDEwMDApLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gVXRpbHMuZm9ybWF0TW9uZXkobW9uZXkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSGlzdG9yeShkaWNlczogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICAvLyBpZiAodGhpcy5pdGVtSGlzdG9yeVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbkNvdW50ID4gNTApIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbUhpc3RvcnlUZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5bMV0ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAvLyAgICAgdGhpcy5oaXN0b3JpZXNEYXRhLnNwbGljZSgwLCAxKTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmhpc3Rvcmllc0RhdGEucHVzaChkaWNlcyk7XG4gICAgICAgIC8vIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtSGlzdG9yeVRlbXBsYXRlKTtcbiAgICAgICAgLy8gaXRlbS5wYXJlbnQgPSB0aGlzLml0ZW1IaXN0b3J5VGVtcGxhdGUucGFyZW50O1xuICAgICAgICAvLyBpdGVtLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJkaWNlMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByU21hbGxEaWNlc1tkaWNlc1swXV07XG4gICAgICAgIC8vIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJkaWNlMlwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByU21hbGxEaWNlc1tkaWNlc1sxXV07XG4gICAgICAgIC8vIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJkaWNlM1wiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByU21hbGxEaWNlc1tkaWNlc1syXV07XG4gICAgfVxuICAgIHByaXZhdGUgbG9hZEhpc3RvcnkoaGlzdG9yeURhdGEpIHtcbiAgICAgICAgbGV0IGxpc3REYXRhID0gaGlzdG9yeURhdGEuc2xpY2UoKTtcbiAgICAgICAgbGlzdERhdGEucmV2ZXJzZSgpO1xuICAgICAgICBsZXQgdXBkYXRlQ2IgPSAoaXRlbSwgZGljZXMpID0+IHtcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJkaWNlMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByU21hbGxEaWNlc1tkaWNlc1swXV07XG4gICAgICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwiZGljZTJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclNtYWxsRGljZXNbZGljZXNbMV1dO1xuICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImRpY2UzXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJTbWFsbERpY2VzW2RpY2VzWzJdXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjckhpc3Rvcnkuc2V0RGF0YUxpc3QodXBkYXRlQ2IsIGxpc3REYXRhKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYWN1bGF0b3JTb2lDYXUoKSB7XG4gICAgICAgIGxldCBjb3VudHMgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5oaXN0b3JpZXNEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGljZXMgPSB0aGlzLmhpc3Rvcmllc0RhdGFbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDM7IGorKykge1xuICAgICAgICAgICAgICAgIGNvdW50c1tkaWNlc1tqXV0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGJsc1NvaUNhdS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5sYmxzU29pQ2F1W2ldLnN0cmluZyA9IGNvdW50c1tpXS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93VG9hc3QobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubGJsVG9hc3Quc3RyaW5nID0gbWVzc2FnZTtcbiAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQ7XG4gICAgICAgIHBhcmVudC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBwYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgcGFyZW50Lm9wYWNpdHkgPSAwO1xuICAgICAgICBwYXJlbnQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVJbigwLjEpLCBjYy5kZWxheVRpbWUoMiksIGNjLmZhZGVPdXQoMC4yKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KSkpO1xuICAgIH1cblxuICAgIGFjdFNvaUNhdSgpIHtcbiAgICAgICAgdGhpcy5ub2RlSGlzdG9yaWVzLmFjdGl2ZSA9ICF0aGlzLm5vZGVIaXN0b3JpZXMuYWN0aXZlO1xuICAgICAgICB0aGlzLm5vZGVTb2lDYXUuYWN0aXZlID0gIXRoaXMubm9kZUhpc3Rvcmllcy5hY3RpdmU7XG4gICAgfVxuXG4gICAgYWN0Q2FuY2VsKCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idG5QYXlCZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuUGF5QmV0ID0gdGhpcy5idG5QYXlCZXRzW2ldO1xuICAgICAgICAgICAgYnRuUGF5QmV0LmxibEJldGVkLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIGJ0blBheUJldC5sYmxCZXRlZC5zdHJpbmcgPSB0aGlzLm1vbmV5VG9LKHRoaXMuYmV0ZWRbaV0pO1xuICAgICAgICAgICAgdGhpcy5iZXR0aW5nW2ldID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdENvbmZpcm0oaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoIXRoaXMuaXNCZXR0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3IzJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPCB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RfZW5vdWdoJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy50aW1lQmV0IDwgMTAwMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbm90aWZ5X2Zhc3RfYWN0aW9uJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iZXR0aW5nW2luZGV4XSArPSB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdO1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV0dGluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG90YWwgKz0gdGhpcy5iZXR0aW5nW2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b3RhbCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3I0JykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuUGF5QmV0c1tpbmRleF0ubGJsQmV0ZWQuc3RyaW5nID0gdGhpcy5tb25leVRvSyh0aGlzLmJldHRpbmdbaW5kZXhdICsgdGhpcy5iZXRlZFtpbmRleF0pO1xuXG4gICAgICAgIHRoaXMudGltZUJldCA9IERhdGUubm93KCk7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQmV0KHRoaXMuYmV0dGluZy50b1N0cmluZygpKSk7XG4gICAgICAgIHRoaXMuYnRuQ29uZmlybS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5DYW5jZWwuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuUmVCZXQuaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgfVxuXG5cblxuICAgIGFjdFJlQmV0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSByZXR1cm47XG4gICAgICAgIGlmICghdGhpcy5pc0JldHRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjMnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJhdUN1YUNvbnRyb2xsZXIubGFzdEJldGVkID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjUnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRvdGFsQmV0ZWQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRvdGFsQmV0ZWQgKz0gdGhpcy5iZXRlZFtpXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG90YWxCZXRlZCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjYnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iZXR0aW5nID0gQmF1Q3VhQ29udHJvbGxlci5sYXN0QmV0ZWQ7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQmV0KEJhdUN1YUNvbnRyb2xsZXIubGFzdEJldGVkLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgdGhpcy5idG5Db25maXJtLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkNhbmNlbC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5SZUJldC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5yZU9yZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJCYXVDdWFcIik7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGJsV2luQ29pbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJldElkeCA9IDA7XG4gICAgICAgIHRoaXMuYmV0dGluZyA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5iZXRlZCA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICAgICAgdGhpcy5oaXN0b3JpZXNEYXRhID0gW107XG5cbiAgICAgICAgdGhpcy5ub2RlSGlzdG9yaWVzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZVNvaUNhdS5hY3RpdmUgPSAhdGhpcy5ub2RlSGlzdG9yaWVzLmFjdGl2ZTtcbiAgICAgICAgdGhpcy5ub2RlSGlzdG9yaWVzLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5zY3JvbGxUb1RvcCgwKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5idXR0b25CZXRzW2ldLnNldEFjdGl2ZShpID09IHRoaXMuYmV0SWR4KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnRuUGF5QmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ0blBheUJldCA9IHRoaXMuYnRuUGF5QmV0c1tpXTtcbiAgICAgICAgICAgIGJ0blBheUJldC5sYmxCZXRlZC5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgIGJ0blBheUJldC5sYmxCZXRlZC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBidG5QYXlCZXQubGJsVG90YWwuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICBidG5QYXlCZXQubGJsRmFjdG9yLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBidG5QYXlCZXQub3ZlcmxheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYnRuUGF5QmV0LmJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU2NyaWJlKHRoaXMucm9vbUlkKSk7XG4gICAgfVxuXG4gICAgZGlzbWlzcygpIHtcbiAgICAgICAgc3VwZXIuZGlzbWlzcygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5oaWRlR2FtZU1pbmkoXCJCYXVDdWFcIik7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5pdGVtSGlzdG9yeVRlbXBsYXRlLnBhcmVudC5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgLy8gICAgIHRoaXMuaXRlbUhpc3RvcnlUZW1wbGF0ZS5wYXJlbnQuY2hpbGRyZW5baV0uZGVzdHJveSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmUodGhpcy5yb29tSWQpKTtcbiAgICB9XG4gICAgX29uU2hvd2VkKCkge1xuICAgICAgICBzdXBlci5fb25TaG93ZWQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVPcmRlcigpIHtcbiAgICAgICAgc3VwZXIucmVPcmRlcigpO1xuICAgIH1cblxuICAgIGF0Y1Nob3dSZXN1bHQocmVzKSB7XG4gICAgICAgIHRoaXMuc3ByUmVzdWx0RGljZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByUmVzdWx0RGljZXNbcmVzLmRpY2UxXTtcbiAgICAgICAgdGhpcy5zcHJSZXN1bHREaWNlLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJSZXN1bHREaWNlc1tyZXMuZGljZTJdO1xuICAgICAgICB0aGlzLnNwclJlc3VsdERpY2UuY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwclJlc3VsdERpY2VzW3Jlcy5kaWNlM107XG4gICAgICAgIGxldCBib3dsT24gPSB0aGlzLmJvd2wuZ2V0Q2hpbGRCeU5hbWUoXCJib3dsXCIpO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoYm93bE9uKTtcbiAgICAgICAgVFcoYm93bE9uKS50bygwLjcsIHsgeTogYm93bE9uLnkgKyA1MCwgb3BhY2l0eTogMTUwLCBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZUluIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaXN0b3JpZXNEYXRhLnB1c2goW3Jlcy5kaWNlMSwgcmVzLmRpY2UyLCByZXMuZGljZTNdKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRIaXN0b3J5KHRoaXMuaGlzdG9yaWVzRGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWN1bGF0b3JTb2lDYXUoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnhWYWx1ZSA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QYXlCZXRzW3Jlcy54UG90XS5sYmxGYWN0b3Iubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBheUJldHNbcmVzLnhQb3RdLmxibEZhY3Rvci5zdHJpbmcgPSBcInhcIiArIHJlcy54VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3BpbihbcmVzLmRpY2UxLCByZXMuZGljZTIsIHJlcy5kaWNlM10pO1xuICAgICAgICAgICAgICAgIGJvd2xPbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGFjdFN0YXJ0TmV3R2FtZSgpIHtcblxuICAgICAgICBsZXQgYm93bE9uID0gdGhpcy5ib3dsLmdldENoaWxkQnlOYW1lKFwiYm93bFwiKTtcbiAgICAgICAgYm93bE9uLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIFRXKGJvd2xPbikuc2V0KHsgb3BhY2l0eTogMjU1LCB5OiAwLCBzY2FsZTogMSB9KS5zdGFydCgpO1xuICAgICAgICBsZXQgaW5pdFBvcyA9IHRoaXMuYm93bC5nZXRQb3NpdGlvbigpO1xuICAgICAgICBsZXQgYWNTaGFrZSA9IFRXKCkudG8oMC4xLCB7IHg6IGluaXRQb3MueCAtIDIwLCBzY2FsZTogMS4wIH0pLnRvKDAuMSwgeyB4OiBpbml0UG9zLnggfSkudG8oMC4xLCB7IHg6IGluaXRQb3MueCArIDIwIH0pLnRvKDAuMSwgeyB4OiBpbml0UG9zLngsIHNjYWxlOiAwLjggfSk7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLmJvd2wpO1xuICAgICAgICBUVyh0aGlzLmJvd2wpLnJlcGVhdCg1LCBhY1NoYWtlKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9pbnZpdGUnKSk7XG4gICAgICAgIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIGFjdFBvcHVwSG9ub3JzKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJCYXVDdWFcIik7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSG9ub3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5iYXVjdWFCdW5kbGUubG9hZChcInJlcy9QcmVmYWJzL1BvcHVwSG9ub3JzXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiQmF1Q3VhLlBvcHVwSG9ub3JzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5ub2RlLnBhcmVudCA9IHRoaXMucG9wdXBDb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEhvbm9yLm5vZGUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWN0UG9wdXBIaXN0b3J5KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJCYXVDdWFcIik7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhdWN1YUJ1bmRsZS5sb2FkKFwicmVzL1ByZWZhYnMvUG9wdXBIaXN0b3J5XCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcblxuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJCYXVDdWEuUG9wdXBIaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEhpc3Rvcnkubm9kZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFBvcHVwR3VpZGUoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIkJhdUN1YVwiKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJhdWN1YUJ1bmRsZS5sb2FkKFwicmVzL1ByZWZhYnMvUG9wdXBHdWlkZVwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG5cbiAgICAgICAgICAgIH0sIChlcnIxLCBwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkRpYWxvZ1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBHdWlkZS5ub2RlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19