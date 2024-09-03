
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/CaoThap/CaoThapScript/CaoThap.CaoThapController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36018wZkFBHeaYfjyMBFEbx', 'CaoThap.CaoThapController');
// CaoThap/CaoThapScript/CaoThap.CaoThapController.ts

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
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Configs_1 = require("../../Loading/src/Configs");
var MiniGame_1 = require("../../Lobby/LobbyScript/MiniGame");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var CaoThap_Cmd_1 = require("./CaoThap.Cmd");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonBet = /** @class */ (function () {
    function ButtonBet() {
        this.button = null;
        // @property(cc.SpriteFrame)
        // sfNormal: cc.SpriteFrame = null;
        // @property(cc.SpriteFrame)
        // sfActive: cc.SpriteFrame = null;
        this._isActive = false;
    }
    ButtonBet.prototype.setActive = function (isActive) {
        this._isActive = isActive;
        // this.button.getComponent(cc.Sprite).spriteFrame = isActive ? this.sfActive : this.sfNormal;
        this.button.node.color = isActive ? cc.Color.WHITE : cc.Color.GRAY;
        this.button.interactable = !isActive;
    };
    __decorate([
        property(cc.Button)
    ], ButtonBet.prototype, "button", void 0);
    ButtonBet = __decorate([
        ccclass("CaoThap.ButtonBet")
    ], ButtonBet);
    return ButtonBet;
}());
exports.ButtonBet = ButtonBet;
var CaoThapController = /** @class */ (function (_super) {
    __extends(CaoThapController, _super);
    function CaoThapController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprAtlasCards = null;
        _this.sprCardBack = null;
        _this.buttonBets = [];
        _this.lblJackpot = null;
        _this.lblSession = null;
        _this.lblUp = null;
        _this.lblCurrent = null;
        _this.lblDown = null;
        _this.lblStatus = null;
        _this.lblTime = null;
        _this.lblPlay = null;
        _this.btnNewTurn = null;
        _this.btnClose = null;
        _this.btnPlay = null;
        _this.btnUp = null;
        _this.btnDown = null;
        _this.sprAt = null;
        _this.sprCard = null;
        _this.lblToast = null;
        _this.lblWinCoin = null;
        _this.popups = [];
        _this.sprBtn = [];
        _this.fontBtn = [];
        _this.listBet = [1000, 10000, 50000, 100000, 500000];
        _this.betIdx = 0;
        _this.oldBetIdx = 0;
        _this.isCanChangeBet = true;
        _this.currentTime = 0;
        _this.currentTimeInt = 0;
        _this.isPlaying = false;
        _this.numA = 0;
        _this.cardNameMap = new Object();
        _this.popupHonor = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        return _this;
    }
    CaoThapController.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < 13; i++) {
            for (var j = 0; j < 4; j++) {
                var cardPoint = (i + 2).toString();
                switch (cardPoint) {
                    case "11":
                        cardPoint = "J";
                        break;
                    case "12":
                        cardPoint = "Q";
                        break;
                    case "13":
                        cardPoint = "K";
                        break;
                    case "14":
                        cardPoint = "A";
                        break;
                }
                var cardSuit = "";
                switch (j) {
                    case 0:
                        cardSuit = "♠";
                        break;
                    case 1:
                        cardSuit = "♣";
                        break;
                    case 2:
                        cardSuit = "♦";
                        break;
                    case 3:
                        cardSuit = "♥";
                        break;
                }
                this.cardNameMap[i * 4 + j] = cardPoint + cardSuit;
            }
        }
        var _loop_1 = function (i) {
            btn = this_1.buttonBets[i];
            btn.setActive(i == this_1.betIdx);
            btn.button.node.on("click", function () {
                if (!_this.isCanChangeBet) {
                    _this.showToast(App_1.default.instance.getTextLang("txt_notify_fast_action"));
                    return;
                }
                App_1.default.instance.showBgMiniGame("CaoThap");
                _this.oldBetIdx = _this.betIdx;
                _this.betIdx = i;
                for (var i_1 = 0; i_1 < _this.buttonBets.length; i_1++) {
                    _this.buttonBets[i_1].setActive(i_1 == _this.betIdx);
                }
                _this.isCanChangeBet = false;
                _this.scheduleOnce(function () {
                    _this.isCanChangeBet = true;
                }, 1);
                MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendChangeRoom(_this.oldBetIdx, _this.betIdx));
            });
        };
        var this_1 = this, btn;
        for (var i = 0; i < this.buttonBets.length; i++) {
            _loop_1(i);
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
                case CaoThap_Cmd_1.default.Code.SCRIBE: {
                    var res = new CaoThap_Cmd_1.default.ReceiveScribe(data);
                    _this.betIdx = res.roomId;
                    for (var i = 0; i < _this.buttonBets.length; i++) {
                        _this.buttonBets[i].setActive(i == _this.betIdx);
                    }
                    _this.btnPlay.interactable = true;
                    for (var i = 0; i < _this.buttonBets.length; i++) {
                        _this.buttonBets[i].button.interactable = true;
                    }
                    break;
                }
                case CaoThap_Cmd_1.default.Code.UPDATE_INFO: {
                    var res = new CaoThap_Cmd_1.default.ReceiveUpdateInfo(data);
                    _this.numA = res.numA;
                    _this.lblUp.string = res.money1 == 0 ? "" : Utils_1.default.formatNumber(res.money1);
                    _this.lblCurrent.string = Utils_1.default.formatNumber(res.money2);
                    _this.lblDown.string = res.money3 == 0 ? "" : Utils_1.default.formatNumber(res.money3);
                    _this.lblSession.string = "#" + res.referenceId.toString();
                    _this.sprCard.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + res.card);
                    _this.sprAt.fillRange = _this.numA / 3;
                    _this.currentTime = res.time;
                    _this.btnNewTurn.interactable = res.step > 1;
                    _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = res.step > 1 ? _this.sprBtn[0] : _this.sprBtn[1];
                    _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = res.step > 1 ? _this.fontBtn[0] : _this.fontBtn[1];
                    _this.btnPlay.node.active = false;
                    _this.btnPlay.node.active = false;
                    _this.lblStatus.string = "";
                    _this.btnUp.interactable = res.money1 > 0;
                    _this.btnDown.interactable = res.money3 > 0;
                    for (var i = 0; i < _this.buttonBets.length; i++) {
                        _this.buttonBets[i].button.interactable = false;
                    }
                    var cards = res.cards.split(",");
                    for (var i = 0; i < cards.length - 1; i++) {
                        if (i > 0)
                            _this.lblStatus.string += ",";
                        _this.lblStatus.string += _this.cardNameMap[cards[i]];
                    }
                    _this.isPlaying = true;
                    break;
                }
                case CaoThap_Cmd_1.default.Code.UPDATE_TIME: {
                    var res = new CaoThap_Cmd_1.default.ReceiveUpdateTime(data);
                    _this.currentTime = res.time;
                    break;
                }
                case CaoThap_Cmd_1.default.Code.START: {
                    var res_1 = new CaoThap_Cmd_1.default.ReceiveStart(data);
                    if (res_1.error != 0) {
                        if (res_1.error == 3) {
                            _this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
                            _this.btnPlay.node.active = true;
                            _this.btnPlay.node.active = true;
                        }
                        return;
                    }
                    Configs_1.default.Login.Coin = res_1.currentMoney;
                    BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                    _this.lblStatus.string = "";
                    _this.lblUp.string = "";
                    _this.lblDown.string = "";
                    _this.lblCurrent.string = Utils_1.default.formatNumber(res_1.money2);
                    _this.lblSession.string = "#" + res_1.referenceId.toString();
                    _this.sprAt.fillRange = 0;
                    _this.btnNewTurn.interactable = false;
                    _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = _this.sprBtn[1];
                    _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = _this.fontBtn[1];
                    for (var i = 0; i < _this.buttonBets.length; i++) {
                        _this.buttonBets[i].button.interactable = false;
                    }
                    if (48 == res_1.card || 49 == res_1.card || 50 == res_1.card || 51 == res_1.card) {
                        _this.numA++;
                    }
                    _this.spinCard(res_1.card, function () {
                        _this.lblStatus.string += _this.cardNameMap[res_1.card];
                        _this.lblUp.string = res_1.money1 == 0 ? "" : Utils_1.default.formatNumber(res_1.money1);
                        _this.lblDown.string = res_1.money3 == 0 ? "" : Utils_1.default.formatNumber(res_1.money3);
                        _this.btnUp.interactable = true && _this.isPlaying && res_1.money1 > 0;
                        _this.btnDown.interactable = true && _this.isPlaying && res_1.money3 > 0;
                        _this.sprAt.fillRange = _this.numA / 3;
                    });
                    _this.currentTime = 120;
                    _this.isPlaying = true;
                    break;
                }
                case CaoThap_Cmd_1.default.Code.PLAY: {
                    var res_2 = new CaoThap_Cmd_1.default.ReceivePlay(data);
                    _this.currentTime = 120;
                    for (var i = 0; i < _this.buttonBets.length; i++) {
                        _this.buttonBets[i].button.interactable = false;
                    }
                    if (48 == res_2.card || 49 == res_2.card || 50 == res_2.card || 51 == res_2.card) {
                        _this.numA++;
                    }
                    _this.spinCard(res_2.card, function () {
                        if (_this.lblStatus.string != "")
                            _this.lblStatus.string += ",";
                        _this.lblStatus.string += _this.cardNameMap[res_2.card];
                        _this.lblUp.string = res_2.money1 == 0 ? "" : Utils_1.default.formatNumber(res_2.money1);
                        _this.lblCurrent.string = Utils_1.default.formatNumber(res_2.money2);
                        _this.lblDown.string = res_2.money3 == 0 ? "" : Utils_1.default.formatNumber(res_2.money3);
                        _this.btnUp.interactable = _this.isPlaying && res_2.money1 > 0;
                        _this.btnDown.interactable = _this.isPlaying && res_2.money3 > 0;
                        _this.btnNewTurn.interactable = _this.isPlaying;
                        _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = _this.isPlaying ? _this.sprBtn[0] : _this.sprBtn[1];
                        _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = _this.isPlaying ? _this.fontBtn[0] : _this.fontBtn[1];
                    });
                    break;
                }
                case CaoThap_Cmd_1.default.Code.STOP: {
                    var res_3 = new CaoThap_Cmd_1.default.ReceiveStop(data);
                    _this.isPlaying = false;
                    var timeDelay = 3;
                    switch (res_3.result) {
                        case 4:
                            timeDelay = 0.5;
                            break;
                    }
                    Configs_1.default.Login.Coin = res_3.currentMoney;
                    _this.scheduleOnce(function () {
                        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                        // this.lblStatus.string = "Nhấn nút \"Play\" để bắt đầu";
                        _this.lblStatus.string = App_1.default.instance.getTextLang('txt_caothap_play');
                        _this.sprCard.spriteFrame = _this.sprCardBack;
                        _this.btnNewTurn.interactable = false;
                        _this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = _this.sprBtn[1];
                        _this.btnNewTurn.node.getComponentInChildren(cc.Label).font = _this.fontBtn[1];
                        _this.btnPlay.node.active = true;
                        _this.lblPlay.node.active = true;
                        _this.sprAt.fillRange = 0;
                        _this.numA = 0;
                        for (var i = 0; i < _this.buttonBets.length; i++) {
                            _this.buttonBets[i].button.interactable = true;
                        }
                        _this.lblTime.string = "2:00";
                        _this.currentTime = 0;
                        _this.lblUp.string = "";
                        _this.lblDown.string = "";
                        _this.lblCurrent.string = Utils_1.default.formatNumber(_this.listBet[_this.betIdx]);
                        //show win coin
                        _this.lblWinCoin.node.stopAllActions();
                        _this.lblWinCoin.node.setPosition(-26, -16);
                        _this.lblWinCoin.node.opacity = 0;
                        _this.lblWinCoin.string = "+" + Utils_1.default.formatNumber(res_3.moneyExchange);
                        _this.lblWinCoin.node.active = true;
                        _this.lblWinCoin.node.runAction(cc.sequence(cc.spawn(cc.fadeIn(0.2), cc.moveBy(2, cc.v2(0, 100))), cc.fadeOut(0.15), cc.callFunc(function () {
                            _this.lblWinCoin.node.active = false;
                        })));
                    }, timeDelay);
                    break;
                }
                case CaoThap_Cmd_1.default.Code.CHANGE_ROOM: {
                    var res = new CaoThap_Cmd_1.default.ReceiveChangeRoom(data);
                    if (res.status != 0) {
                        _this.betIdx = _this.oldBetIdx;
                        for (var i = 0; i < _this.buttonBets.length; i++) {
                            _this.buttonBets[i].setActive(i == _this.betIdx);
                        }
                    }
                    break;
                }
                case CaoThap_Cmd_1.default.Code.UPDATE_JACKPOT: {
                    var res = new CaoThap_Cmd_1.default.ReceiveUpdateJackpot(data);
                    Tween_1.default.numberTo(_this.lblJackpot, res.value, 0.3);
                    break;
                }
            }
        }, this);
    };
    CaoThapController.prototype.update = function (dt) {
        if (this.currentTime > 0) {
            this.currentTime = Math.max(0, this.currentTime - dt);
            var _currentTimeInt = parseInt(this.currentTime.toString());
            if (this.currentTimeInt != _currentTimeInt) {
                this.currentTimeInt = _currentTimeInt;
                this.lblTime.string = this.longToTime(this.currentTimeInt);
            }
        }
    };
    CaoThapController.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    CaoThapController.prototype.spinCard = function (id, onFinished) {
        var _this = this;
        var c = 15;
        this.schedule(function () {
            c--;
            if (c == 0) {
                _this.sprCard.node.color = cc.Color.WHITE;
                _this.sprCard.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + id);
                onFinished();
            }
            else {
                _this.sprCard.node.color = cc.Color.BLACK.fromHEX("#CCCCCC");
                _this.sprCard.spriteFrame = _this.sprAtlasCards.getSpriteFrame("card" + Utils_1.default.randomRangeInt(0, 52));
            }
        }, 0.1, c - 1, 0);
    };
    CaoThapController.prototype.longToTime = function (time) {
        var m = parseInt((time / 60).toString());
        var s = time % 60;
        return m + ":" + (s < 10 ? "0" : "") + s;
    };
    CaoThapController.prototype.show = function () {
        if (this.node.active) {
            this.reOrder();
            return;
        }
        _super.prototype.show.call(this);
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.lblToast.node.parent.active = false;
        // this.lblStatus.string = "Nhấn nút \"Play\" để bắt đầu";
        this.lblStatus.string = App_1.default.instance.getTextLang('txt_caothap_play');
        this.lblSession.string = "";
        this.lblUp.string = "";
        this.lblDown.string = "";
        this.lblCurrent.string = Utils_1.default.formatNumber(this.listBet[this.betIdx]);
        this.sprAt.fillRange = 0;
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        this.btnUp.interactable = false;
        this.btnDown.interactable = false;
        this.btnPlay.interactable = false;
        this.lblWinCoin.node.active = false;
        this.isCanChangeBet = true;
        this.betIdx = 0;
        for (var i = 0; i < this.buttonBets.length; i++) {
            this.buttonBets[i].setActive(i == this.betIdx);
        }
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendScribe(this.betIdx));
    };
    CaoThapController.prototype.actStart = function () {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnPlay.node.active = false;
        this.lblPlay.node.active = false;
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendStart(this.listBet[this.betIdx]));
    };
    CaoThapController.prototype.actUp = function () {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnUp.interactable = false;
        this.btnDown.interactable = false;
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendPlay(this.listBet[this.betIdx], true));
    };
    CaoThapController.prototype.actDown = function () {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnUp.interactable = false;
        this.btnDown.interactable = false;
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendPlay(this.listBet[this.betIdx], false));
    };
    CaoThapController.prototype.actStop = function () {
        App_1.default.instance.showBgMiniGame("CaoThap");
        this.btnNewTurn.interactable = false;
        this.btnNewTurn.node.getComponent(cc.Sprite).spriteFrame = this.sprBtn[1];
        this.btnNewTurn.node.getComponentInChildren(cc.Label).font = this.fontBtn[1];
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendStop(this.listBet[this.betIdx]));
    };
    CaoThapController.prototype.dismiss = function () {
        _super.prototype.dismiss.call(this);
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        App_1.default.instance.hideGameMini("CaoThap");
        MiniGameNetworkClient_1.default.getInstance().send(new CaoThap_Cmd_1.default.SendUnScribe(this.betIdx));
    };
    CaoThapController.prototype.actPopupGuide = function () {
        var _this = this;
        if (this.popupGuide == null) {
            BundleControl_1.default.loadPrefabGame("CaoThap", "res/prefabs/PopupGuide", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
                _this.popupGuide.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupGuide.show();
                _this.popups.push(_this.popupGuide.node);
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    CaoThapController.prototype.actPopupHistory = function () {
        var _this = this;
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("CaoThap", "res/prefabs/PopupHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHistory = cc.instantiate(prefab).getComponent("CaoThap.PopupHistory");
                _this.popupHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupHistory.show();
                _this.popups.push(_this.popupHistory.node);
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    CaoThapController.prototype.actPopupHonor = function () {
        var _this = this;
        if (this.popupHonor == null) {
            BundleControl_1.default.loadPrefabGame("CaoThap", "res/prefabs/PopupHonors", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHonor = cc.instantiate(prefab).getComponent("CaoThap.PopupHonors");
                _this.popupHonor.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupHonor.show();
                _this.popups.push(_this.popupHonor.node);
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    CaoThapController.prototype.reOrder = function () {
        _super.prototype.reOrder.call(this);
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], CaoThapController.prototype, "sprAtlasCards", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], CaoThapController.prototype, "sprCardBack", void 0);
    __decorate([
        property([ButtonBet])
    ], CaoThapController.prototype, "buttonBets", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblUp", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblCurrent", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblDown", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblStatus", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblTime", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblPlay", void 0);
    __decorate([
        property(cc.Button)
    ], CaoThapController.prototype, "btnNewTurn", void 0);
    __decorate([
        property(cc.Button)
    ], CaoThapController.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Button)
    ], CaoThapController.prototype, "btnPlay", void 0);
    __decorate([
        property(cc.Button)
    ], CaoThapController.prototype, "btnUp", void 0);
    __decorate([
        property(cc.Button)
    ], CaoThapController.prototype, "btnDown", void 0);
    __decorate([
        property(cc.Sprite)
    ], CaoThapController.prototype, "sprAt", void 0);
    __decorate([
        property(cc.Sprite)
    ], CaoThapController.prototype, "sprCard", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Label)
    ], CaoThapController.prototype, "lblWinCoin", void 0);
    __decorate([
        property([cc.Node])
    ], CaoThapController.prototype, "popups", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], CaoThapController.prototype, "sprBtn", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], CaoThapController.prototype, "fontBtn", void 0);
    CaoThapController = __decorate([
        ccclass
    ], CaoThapController);
    return CaoThapController;
}(MiniGame_1.default));
exports.default = CaoThapController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcQ2FvVGhhcFxcQ2FvVGhhcFNjcmlwdFxcQ2FvVGhhcC5DYW9UaGFwQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHFEQUFnRDtBQUNoRCw2REFBd0Q7QUFDeEQsaUVBQTREO0FBQzVELDZGQUF3RjtBQUN4RixxRUFBZ0U7QUFDaEUscUVBQWdFO0FBQ2hFLHVHQUFrRztBQUNsRyw2RkFBZ0Y7QUFDaEYsNkNBQWdDO0FBSTFCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7UUFFSSxXQUFNLEdBQWMsSUFBSSxDQUFDO1FBQ3pCLDRCQUE0QjtRQUM1QixtQ0FBbUM7UUFDbkMsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUVuQyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBUXRCLENBQUM7SUFORyw2QkFBUyxHQUFULFVBQVUsUUFBaUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsOEZBQThGO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUN6QyxDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDSztJQUZoQixTQUFTO1FBRHJCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztPQUNoQixTQUFTLENBZ0JyQjtJQUFELGdCQUFDO0NBaEJELEFBZ0JDLElBQUE7QUFoQlksOEJBQVM7QUFtQnRCO0lBQStD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QUFHLEtBQUssQ0FBQztvQkFDckMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQzdDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7cUJBQ2xEO29CQUNELElBQUksRUFBRSxJQUFJLEtBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLEtBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQ3RFLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztxQkFDZjtvQkFDRCxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQ3BCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwRCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFLLENBQUMsWUFBWSxDQUFDLEtBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FB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QUFNLENBQUM7c0RBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1REFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lEQUNTO0lBRTVCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO3FEQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO3FEQUNHO0lBRTlCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3NEQUNJO0lBOUNiLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBc2VyQztJQUFELHdCQUFDO0NBdGVELEFBc2VDLENBdGU4QyxrQkFBUSxHQXNldEQ7a0JBdGVvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVuZGxlQ29udHJvbCBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQnVuZGxlQ29udHJvbFwiO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBNaW5pR2FtZSBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvTWluaUdhbWVcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwXCI7XG5pbXBvcnQgQnJvYWRjYXN0UmVjZWl2ZXIgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXJcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2VlblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzXCI7XG5pbXBvcnQgTWluaUdhbWVOZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTWluaUdhbWVOZXR3b3JrQ2xpZW50XCI7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0XCI7XG5pbXBvcnQgY21kIGZyb20gXCIuL0Nhb1RoYXAuQ21kXCI7XG5pbXBvcnQgUG9wdXBIaXN0b3J5IGZyb20gXCIuL0Nhb1RoYXAuUG9wdXBIaXN0b3J5XCI7XG5pbXBvcnQgUG9wdXBIb25vcnMgZnJvbSBcIi4vQ2FvVGhhcC5Qb3B1cEhvbm9yc1wiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcyhcIkNhb1RoYXAuQnV0dG9uQmV0XCIpXG5leHBvcnQgY2xhc3MgQnV0dG9uQmV0IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgLy8gc2ZOb3JtYWw6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgLy8gc2ZBY3RpdmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICAgIF9pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgc2V0QWN0aXZlKGlzQWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIC8vIHRoaXMuYnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gaXNBY3RpdmUgPyB0aGlzLnNmQWN0aXZlIDogdGhpcy5zZk5vcm1hbDtcbiAgICAgICAgdGhpcy5idXR0b24ubm9kZS5jb2xvciA9IGlzQWN0aXZlID8gY2MuQ29sb3IuV0hJVEUgOiBjYy5Db2xvci5HUkFZO1xuICAgICAgICB0aGlzLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSAhaXNBY3RpdmU7XG4gICAgfVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FvVGhhcENvbnRyb2xsZXIgZXh0ZW5kcyBNaW5pR2FtZSB7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUF0bGFzKVxuICAgIHNwckF0bGFzQ2FyZHM6IGNjLlNwcml0ZUF0bGFzID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgc3ByQ2FyZEJhY2s6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW0J1dHRvbkJldF0pXG4gICAgYnV0dG9uQmV0czogQnV0dG9uQmV0W10gPSBbXTtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsSmFja3BvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxTZXNzaW9uOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFVwOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEN1cnJlbnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRG93bjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxTdGF0dXM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVGltZTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxQbGF5OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5OZXdUdXJuOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuQ2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5QbGF5OiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuVXA6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5Eb3duOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gICAgc3ByQXQ6IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgICBzcHJDYXJkOiBjYy5TcHJpdGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb2FzdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxXaW5Db2luOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBwdWJsaWMgcG9wdXBzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJCdG46IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLkJpdG1hcEZvbnRdKVxuICAgIGZvbnRCdG46IGNjLkJpdG1hcEZvbnRbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBsaXN0QmV0ID0gWzEwMDAsIDEwMDAwLCA1MDAwMCwgMTAwMDAwLCA1MDAwMDBdO1xuICAgIHByaXZhdGUgYmV0SWR4ID0gMDtcbiAgICBwcml2YXRlIG9sZEJldElkeCA9IDA7XG4gICAgcHJpdmF0ZSBpc0NhbkNoYW5nZUJldCA9IHRydWU7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZSA9IDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZUludCA9IDA7XG4gICAgcHJpdmF0ZSBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIG51bUEgPSAwO1xuICAgIHByaXZhdGUgY2FyZE5hbWVNYXAgPSBuZXcgT2JqZWN0KCk7XG4gICAgcHJpdmF0ZSBwb3B1cEhvbm9yOiBQb3B1cEhvbm9ycyA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEhpc3Rvcnk6IFBvcHVwSGlzdG9yeSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEd1aWRlID0gbnVsbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEzOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhcmRQb2ludCA9IChpICsgMikudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNhcmRQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRQb2ludCA9IFwiSlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIxMlwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFBvaW50ID0gXCJRXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjEzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkUG9pbnQgPSBcIktcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiMTRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRQb2ludCA9IFwiQVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjYXJkU3VpdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChqKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRTdWl0ID0gXCLimaBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkU3VpdCA9IFwi4pmjXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFN1aXQgPSBcIuKZplwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRTdWl0ID0gXCLimaVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhcmROYW1lTWFwW2kgKiA0ICsgal0gPSBjYXJkUG9pbnQgKyBjYXJkU3VpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYnRuID0gdGhpcy5idXR0b25CZXRzW2ldO1xuICAgICAgICAgICAgYnRuLnNldEFjdGl2ZShpID09IHRoaXMuYmV0SWR4KTtcbiAgICAgICAgICAgIGJ0bi5idXR0b24ubm9kZS5vbihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNDYW5DaGFuZ2VCZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdGlmeV9mYXN0X2FjdGlvblwiKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiQ2FvVGhhcFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZEJldElkeCA9IHRoaXMuYmV0SWR4O1xuICAgICAgICAgICAgICAgIHRoaXMuYmV0SWR4ID0gaTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2FuQ2hhbmdlQmV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYW5nZVJvb20odGhpcy5vbGRCZXRJZHgsIHRoaXMuYmV0SWR4KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfTE9HT1VULCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuZGlzbWlzcygpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5ub2RlLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5kaXNtaXNzKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhOiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0NSSUJFOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVTY3JpYmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0SWR4ID0gcmVzLnJvb21JZDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5zZXRBY3RpdmUoaSA9PSB0aGlzLmJldElkeCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5LmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uYnV0dG9uLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX0lORk86IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZUluZm8oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQSA9IHJlcy5udW1BO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFVwLnN0cmluZyA9IHJlcy5tb25leTEgPT0gMCA/IFwiXCIgOiBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5MSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQ3VycmVudC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5Mik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRG93bi5zdHJpbmcgPSByZXMubW9uZXkzID09IDAgPyBcIlwiIDogVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5tb25leTMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyByZXMucmVmZXJlbmNlSWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJDYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJBdGxhc0NhcmRzLmdldFNwcml0ZUZyYW1lKFwiY2FyZFwiICsgcmVzLmNhcmQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwckF0LmZpbGxSYW5nZSA9IHRoaXMubnVtQSAvIDM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSByZXMudGltZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5OZXdUdXJuLmludGVyYWN0YWJsZSA9IHJlcy5zdGVwID4gMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSByZXMuc3RlcCA+IDEgPyB0aGlzLnNwckJ0blswXSA6IHRoaXMuc3ByQnRuWzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5mb250ID0gcmVzLnN0ZXAgPiAxID8gdGhpcy5mb250QnRuWzBdIDogdGhpcy5mb250QnRuWzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBsYXkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsU3RhdHVzLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuVXAuaW50ZXJhY3RhYmxlID0gcmVzLm1vbmV5MSA+IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuRG93bi5pbnRlcmFjdGFibGUgPSByZXMubW9uZXkzID4gMDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5idXR0b24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FyZHMgPSByZXMuY2FyZHMuc3BsaXQoXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB0aGlzLmxibFN0YXR1cy5zdHJpbmcgKz0gXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFN0YXR1cy5zdHJpbmcgKz0gdGhpcy5jYXJkTmFtZU1hcFtjYXJkc1tpXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfVElNRToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlVXBkYXRlVGltZShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gcmVzLnRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlNUQVJUOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVTdGFydChkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVycm9yICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IgPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5QbGF5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blBsYXkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gcmVzLmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTdGF0dXMuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxVcC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibERvd24uc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxDdXJyZW50LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXMubW9uZXkyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiI1wiICsgcmVzLnJlZmVyZW5jZUlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByQXQuZmlsbFJhbmdlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5OZXdUdXJuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQnRuWzFdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5mb250ID0gdGhpcy5mb250QnRuWzFdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25CZXRzW2ldLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoNDggPT0gcmVzLmNhcmQgfHwgNDkgPT0gcmVzLmNhcmQgfHwgNTAgPT0gcmVzLmNhcmQgfHwgNTEgPT0gcmVzLmNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbkNhcmQocmVzLmNhcmQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsU3RhdHVzLnN0cmluZyArPSB0aGlzLmNhcmROYW1lTWFwW3Jlcy5jYXJkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXAuc3RyaW5nID0gcmVzLm1vbmV5MSA9PSAwID8gXCJcIiA6IFV0aWxzLmZvcm1hdE51bWJlcihyZXMubW9uZXkxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRG93bi5zdHJpbmcgPSByZXMubW9uZXkzID09IDAgPyBcIlwiIDogVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5tb25leTMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blVwLmludGVyYWN0YWJsZSA9IHRydWUgJiYgdGhpcy5pc1BsYXlpbmcgJiYgcmVzLm1vbmV5MSA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkRvd24uaW50ZXJhY3RhYmxlID0gdHJ1ZSAmJiB0aGlzLmlzUGxheWluZyAmJiByZXMubW9uZXkzID4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByQXQuZmlsbFJhbmdlID0gdGhpcy5udW1BIC8gMztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAxMjA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuUExBWToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUGxheShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gMTIwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uQmV0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25CZXRzW2ldLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoNDggPT0gcmVzLmNhcmQgfHwgNDkgPT0gcmVzLmNhcmQgfHwgNTAgPT0gcmVzLmNhcmQgfHwgNTEgPT0gcmVzLmNhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubnVtQSsrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BpbkNhcmQocmVzLmNhcmQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxibFN0YXR1cy5zdHJpbmcgIT0gXCJcIikgdGhpcy5sYmxTdGF0dXMuc3RyaW5nICs9IFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTdGF0dXMuc3RyaW5nICs9IHRoaXMuY2FyZE5hbWVNYXBbcmVzLmNhcmRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFVwLnN0cmluZyA9IHJlcy5tb25leTEgPT0gMCA/IFwiXCIgOiBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5MSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEN1cnJlbnQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5tb25leTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxEb3duLnN0cmluZyA9IHJlcy5tb25leTMgPT0gMCA/IFwiXCIgOiBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5Myk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuVXAuaW50ZXJhY3RhYmxlID0gdGhpcy5pc1BsYXlpbmcgJiYgcmVzLm1vbmV5MSA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkRvd24uaW50ZXJhY3RhYmxlID0gdGhpcy5pc1BsYXlpbmcgJiYgcmVzLm1vbmV5MyA+IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4uaW50ZXJhY3RhYmxlID0gdGhpcy5pc1BsYXlpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaXNQbGF5aW5nID8gdGhpcy5zcHJCdG5bMF0gOiB0aGlzLnNwckJ0blsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTmV3VHVybi5ub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLmZvbnQgPSB0aGlzLmlzUGxheWluZyA/IHRoaXMuZm9udEJ0blswXSA6IHRoaXMuZm9udEJ0blsxXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlNUT1A6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVN0b3AoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVEZWxheSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVEZWxheSA9IDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYmxTdGF0dXMuc3RyaW5nID0gXCJOaOG6pW4gbsO6dCBcXFwiUGxheVxcXCIgxJHhu4MgYuG6r3QgxJHhuqd1XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFN0YXR1cy5zdHJpbmcgPSBBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9jYW90aGFwX3BsYXknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQ2FyZEJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQnRuWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuZm9udCA9IHRoaXMuZm9udEJ0blsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuUGxheS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFBsYXkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJBdC5maWxsUmFuZ2UgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1BID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25CZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idXR0b25CZXRzW2ldLmJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUaW1lLnN0cmluZyA9IFwiMjowMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRG93bi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxDdXJyZW50LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zaG93IHdpbiBjb2luXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFdpbkNvaW4ubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUuc2V0UG9zaXRpb24oLTI2LCAtMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFdpbkNvaW4uc3RyaW5nID0gXCIrXCIgKyBVdGlscy5mb3JtYXROdW1iZXIocmVzLm1vbmV5RXhjaGFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsV2luQ29pbi5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihjYy5mYWRlSW4oMC4yKSwgY2MubW92ZUJ5KDIsIGNjLnYyKDAsIDEwMCkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KDAuMTUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aW1lRGVsYXkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSEFOR0VfUk9PTToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlQ2hhbmdlUm9vbShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldElkeCA9IHRoaXMub2xkQmV0SWR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkJldHNbaV0uc2V0QWN0aXZlKGkgPT0gdGhpcy5iZXRJZHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVVcGRhdGVKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibEphY2twb3QsIHJlcy52YWx1ZSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBNYXRoLm1heCgwLCB0aGlzLmN1cnJlbnRUaW1lIC0gZHQpO1xuXG4gICAgICAgICAgICBsZXQgX2N1cnJlbnRUaW1lSW50ID0gcGFyc2VJbnQodGhpcy5jdXJyZW50VGltZS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lSW50ICE9IF9jdXJyZW50VGltZUludCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWVJbnQgPSBfY3VycmVudFRpbWVJbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYmxUaW1lLnN0cmluZyA9IHRoaXMubG9uZ1RvVGltZSh0aGlzLmN1cnJlbnRUaW1lSW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1RvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxibFRvYXN0LnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50O1xuICAgICAgICBwYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHBhcmVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMC4xKSwgY2MuZGVsYXlUaW1lKDIpLCBjYy5mYWRlT3V0KDAuMiksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIHBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwaW5DYXJkKGlkOiBudW1iZXIsIG9uRmluaXNoZWQ6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgbGV0IGMgPSAxNTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICAgICAgICBjLS07XG4gICAgICAgICAgICBpZiAoYyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcHJDYXJkLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckNhcmQuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckF0bGFzQ2FyZHMuZ2V0U3ByaXRlRnJhbWUoXCJjYXJkXCIgKyBpZCk7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwckNhcmQubm9kZS5jb2xvciA9IGNjLkNvbG9yLkJMQUNLLmZyb21IRVgoXCIjQ0NDQ0NDXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3ByQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQXRsYXNDYXJkcy5nZXRTcHJpdGVGcmFtZShcImNhcmRcIiArIFV0aWxzLnJhbmRvbVJhbmdlSW50KDAsIDUyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDAuMSwgYyAtIDEsIDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9uZ1RvVGltZSh0aW1lOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbSA9IHBhcnNlSW50KCh0aW1lIC8gNjApLnRvU3RyaW5nKCkpO1xuICAgICAgICBsZXQgcyA9IHRpbWUgJSA2MDtcbiAgICAgICAgcmV0dXJuIG0gKyBcIjpcIiArIChzIDwgMTAgPyBcIjBcIiA6IFwiXCIpICsgcztcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5yZU9yZGVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuc2hvdygpO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJDYW9UaGFwXCIpO1xuICAgICAgICB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmxibFN0YXR1cy5zdHJpbmcgPSBcIk5o4bqlbiBuw7p0IFxcXCJQbGF5XFxcIiDEkeG7gyBi4bqvdCDEkeG6p3VcIjtcbiAgICAgICAgdGhpcy5sYmxTdGF0dXMuc3RyaW5nID0gQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfY2FvdGhhcF9wbGF5Jyk7XG4gICAgICAgIHRoaXMubGJsU2Vzc2lvbi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmxibFVwLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMubGJsRG93bi5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB0aGlzLmxibEN1cnJlbnQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0pO1xuICAgICAgICB0aGlzLnNwckF0LmZpbGxSYW5nZSA9IDA7XG4gICAgICAgIHRoaXMuYnRuTmV3VHVybi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckJ0blsxXTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuZm9udCA9IHRoaXMuZm9udEJ0blsxXTtcblxuICAgICAgICB0aGlzLmJ0blVwLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkRvd24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuUGxheS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxXaW5Db2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pc0NhbkNoYW5nZUJldCA9IHRydWU7XG4gICAgICAgIHRoaXMuYmV0SWR4ID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbkJldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uQmV0c1tpXS5zZXRBY3RpdmUoaSA9PSB0aGlzLmJldElkeCk7XG4gICAgICAgIH1cblxuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNjcmliZSh0aGlzLmJldElkeCkpO1xuICAgIH1cblxuICAgIGFjdFN0YXJ0KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJDYW9UaGFwXCIpO1xuICAgICAgICB0aGlzLmJ0blBsYXkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxQbGF5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3RhcnQodGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSkpO1xuICAgIH1cblxuICAgIGFjdFVwKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJDYW9UaGFwXCIpO1xuICAgICAgICB0aGlzLmJ0blVwLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkRvd24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuTmV3VHVybi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckJ0blsxXTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuZm9udCA9IHRoaXMuZm9udEJ0blsxXTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRQbGF5KHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIHRydWUpKTtcbiAgICB9XG5cbiAgICBhY3REb3duKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJDYW9UaGFwXCIpO1xuICAgICAgICB0aGlzLmJ0blVwLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bkRvd24uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuTmV3VHVybi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckJ0blsxXTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLm5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuZm9udCA9IHRoaXMuZm9udEJ0blsxXTtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRQbGF5KHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIGZhbHNlKSk7XG4gICAgfVxuXG4gICAgYWN0U3RvcCgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiQ2FvVGhhcFwiKTtcbiAgICAgICAgdGhpcy5idG5OZXdUdXJuLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByQnRuWzFdO1xuICAgICAgICB0aGlzLmJ0bk5ld1R1cm4ubm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5mb250ID0gdGhpcy5mb250QnRuWzFdO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN0b3AodGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSkpO1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIHN1cGVyLmRpc21pc3MoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBvcHVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wb3B1cHNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgQXBwLmluc3RhbmNlLmhpZGVHYW1lTWluaShcIkNhb1RoYXBcIik7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TY3JpYmUodGhpcy5iZXRJZHgpKTtcbiAgICB9XG4gICAgYWN0UG9wdXBHdWlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiQ2FvVGhhcFwiLCBcInJlcy9wcmVmYWJzL1BvcHVwR3VpZGVcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiRGlhbG9nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBHdWlkZS5ub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RQb3B1cEhpc3RvcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiQ2FvVGhhcFwiLCBcInJlcy9wcmVmYWJzL1BvcHVwSGlzdG9yeVwiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIkNhb1RoYXAuUG9wdXBIaXN0b3J5XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwSGlzdG9yeS5ub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFBvcHVwSG9ub3IoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwSG9ub3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIkNhb1RoYXBcIiwgXCJyZXMvcHJlZmFicy9Qb3B1cEhvbm9yc1wiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJDYW9UaGFwLlBvcHVwSG9ub3JzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBIb25vci5ub2RlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVPcmRlcigpIHtcbiAgICAgICAgc3VwZXIucmVPcmRlcigpO1xuICAgIH1cbn1cbiJdfQ==