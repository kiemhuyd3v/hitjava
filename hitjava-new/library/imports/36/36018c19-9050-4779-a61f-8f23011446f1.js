"use strict";
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