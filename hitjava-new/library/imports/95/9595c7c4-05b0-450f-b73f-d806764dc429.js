"use strict";
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