
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.TaiXiuMiniController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd959TzNYtDtKCLaUJNuYCG', 'TaiXiuMD5.TaiXiuMiniController');
// TaiXiuMD5/TaiXiuScript/TaiXiu1/TaiXiuMD5.TaiXiuMiniController.ts

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
exports.SoundManager = void 0;
var TaiXiuMD5_Cmd_1 = require("./TaiXiuMD5.Cmd");
var TaiXiuMD5_PanelChat_1 = require("./TaiXiuMD5.PanelChat");
//import MiniGame from "../../../../Lobby/src/MiniGame";
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var SPUtils_1 = require("../../../Lobby/LobbyScript/Script/common/SPUtils");
var Tween_1 = require("../../../Lobby/LobbyScript/Script/common/Tween");
var Configs_1 = require("../../../Loading/src/Configs");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var TaiXiuMD5_Controller_1 = require("../src/TaiXiuMD5.Controller");
var TaiXiuMD5_PopupDetailHistory_1 = require("./TaiXiuMD5.PopupDetailHistory");
var BundleControl_1 = require("../../../Loading/src/BundleControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BetDoor;
(function (BetDoor) {
    BetDoor[BetDoor["None"] = 0] = "None";
    BetDoor[BetDoor["Tai"] = 1] = "Tai";
    BetDoor[BetDoor["Xiu"] = 2] = "Xiu";
})(BetDoor || (BetDoor = {}));
var SoundManager = /** @class */ (function () {
    function SoundManager() {
        this.nodeSelf = null;
        this.taixiuView = null;
        this.effSound = null;
        this.listAudio = [];
    }
    SoundManager.prototype.playAudioEffect = function (indexAudio) {
        if (this.taixiuView.active && SPUtils_1.default.getSoundVolumn() > 0) {
            this.effSound.clip = this.listAudio[indexAudio];
            this.effSound.play();
        }
    };
    __decorate([
        property(cc.Node)
    ], SoundManager.prototype, "nodeSelf", void 0);
    __decorate([
        property(cc.Node)
    ], SoundManager.prototype, "taixiuView", void 0);
    __decorate([
        property(cc.AudioSource)
    ], SoundManager.prototype, "effSound", void 0);
    __decorate([
        property([cc.AudioClip])
    ], SoundManager.prototype, "listAudio", void 0);
    SoundManager = __decorate([
        ccclass("TaiXiuMD5.TaiXiuMiniController.SoundManager")
    ], SoundManager);
    return SoundManager;
}());
exports.SoundManager = SoundManager;
var TaiXiuMiniController = /** @class */ (function (_super) {
    __extends(TaiXiuMiniController, _super);
    function TaiXiuMiniController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.gamePlay = null;
        _this_1.sprDices = new Array();
        _this_1.sprFrameTai = null;
        _this_1.sprFrameXiu = null;
        _this_1.sprFrameBtnNan = null;
        _this_1.sprFrameBtnNan2 = null;
        _this_1.lblSession = null;
        _this_1.lblRemainTime = null;
        _this_1.lblRemainTime2 = null;
        _this_1.lblScore = null;
        _this_1.lblUserTai = null;
        _this_1.lblUserXiu = null;
        _this_1.lblTotalBetTai = null;
        _this_1.lblTotalBetXiu = null;
        _this_1.lblBetTai = null;
        _this_1.lblBetXiu = null;
        _this_1.lblBetedTai = null;
        _this_1.lblBetedXiu = null;
        _this_1.dice1 = null;
        _this_1.dice2 = null;
        _this_1.dice3 = null;
        _this_1.effect = null;
        _this_1.eftai = null;
        _this_1.efxiu = null;
        _this_1.bowl = null;
        _this_1.tai = null;
        _this_1.xiu = null;
        _this_1.xiu1 = null;
        _this_1.xiu2 = null;
        _this_1.btnHistories = null;
        _this_1.nodePanelChat = null;
        _this_1.layoutBet = null;
        _this_1.layoutBet1 = null;
        _this_1.layoutBet2 = null;
        _this_1.buttonsBet1 = new Array();
        _this_1.buttonsBet2 = new Array();
        _this_1.lblToast = null;
        _this_1.lblWinCash = null;
        _this_1.btnNan = null;
        _this_1.lblMD5Text = null;
        _this_1.soundManager = null;
        _this_1.popupDetailHistory = null;
        _this_1.fontTime = [];
        _this_1.popups = [];
        _this_1.arrTimeoutDice = [];
        _this_1.isBetting = false;
        _this_1.remainTime = 0;
        _this_1.canBet = true;
        _this_1.betedTai = 0;
        _this_1.betedXiu = 0;
        _this_1.referenceId = 0;
        _this_1.betingValue = -1;
        _this_1.betingDoor = BetDoor.None;
        _this_1.isOpenBowl = false;
        _this_1.lastWinCash = 0;
        _this_1.lastScore = 0;
        _this_1.isNan = false;
        _this_1.histories = [];
        _this_1.isCanChat = true;
        _this_1.panelChat = null;
        _this_1.maxBetValue = 999999999;
        _this_1.listBets = [1000, 10000, 50000, 100000, 500000, 1000000, 10000000, 50000000];
        _this_1.bowlStartPos = cc.v2(0, 0);
        _this_1.md5CodeResult = "";
        _this_1.playingNewGame = false;
        _this_1.blowType = "CLOSE";
        return _this_1;
    }
    TaiXiuMiniController_1 = TaiXiuMiniController;
    TaiXiuMiniController.prototype.onLoad = function () {
        var _this_1 = this;
        TaiXiuMiniController_1.instance = this;
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (cc.isValid(_this_1.node) && _this_1.node.active) {
                if (_this_1.arrTimeoutDice == null)
                    _this_1.arrTimeoutDice = [];
                for (var i = 0; i < _this_1.arrTimeoutDice.length; i++) {
                    clearTimeout(_this_1.arrTimeoutDice[i]);
                }
                _this_1.arrTimeoutDice = [];
            }
        });
    };
    TaiXiuMiniController.prototype.getAnimationDiceStart = function (dice) {
        var anim = "";
        if (dice == 1)
            anim = "xi ngau bay 1";
        else if (dice == 2)
            anim = "xi ngau bay 2";
        else if (dice == 3)
            anim = "xi ngau bay 3";
        else if (dice == 4)
            anim = "xi ngau bay 4";
        else if (dice == 5)
            anim = "xi ngau bay 5";
        else if (dice == 6)
            anim = "xi ngau bay 6";
        return anim;
    };
    TaiXiuMiniController.prototype.getAnimationDiceEnd = function (dice) {
        var anim = "";
        if (dice == 1)
            anim = "1";
        else if (dice == 2)
            anim = "2";
        else if (dice == 3)
            anim = "3";
        else if (dice == 4)
            anim = "4";
        else if (dice == 5)
            anim = "5";
        else if (dice == 6)
            anim = "6";
        return anim;
    };
    TaiXiuMiniController.prototype.onFocusInEditor = function () {
        //  cc.log("------------------");
    };
    TaiXiuMiniController.prototype.updateStatusBlow = function (type) {
        var _this_1 = this;
        if (type === void 0) { type = "CLOSE"; }
        this.blowType = type;
        switch (type) {
            case "HIDE": {
                this.bowl.active = false;
                this.bowl.getComponent(cc.Animation).stop();
                this.bowl.setPosition(this.bowlStartPos);
                this.bowl.opacity = 255;
                break;
            }
            case "SHOW": {
                this.bowl.active = true;
                this.bowl.getComponent(cc.Animation).stop();
                this.bowl.setPosition(this.bowlStartPos);
                this.bowl.opacity = 255;
                break;
            }
            case "ANIM_CLOSE": {
                this.bowl.active = true;
                this.bowl.getComponent(cc.Animation).stop();
                this.bowl.getComponent(cc.Animation).play("bowlClose");
                this.arrTimeoutDice.push(setTimeout(function () {
                    _this_1.bowl.active = false;
                    _this_1.updateStatusBlow("SHOW");
                }, 100));
                break;
            }
            case "ANIM_OPEN": {
                this.bowl.active = true;
                this.bowl.getComponent(cc.Animation).stop();
                this.bowl.getComponent(cc.Animation).play("bowlOpen");
                this.arrTimeoutDice.push(setTimeout(function () {
                    _this_1.bowl.active = true;
                    _this_1.updateStatusBlow("HIDE");
                }, 150));
                break;
            }
            case "NAN": {
                this.bowl.active = true;
                this.bowl.getComponent(cc.Animation).stop();
                this.bowl.opacity = 255;
                this.bowl.setPosition(this.bowlStartPos);
                break;
            }
        }
    };
    TaiXiuMiniController.prototype.start = function () {
        var _this_1 = this;
        console.log("add listener md5");
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this_1.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case TaiXiuMD5_Cmd_1.default.Code.GAME_INFO: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveGameInfo(data);
                    _this_1.stopWin();
                    _this_1.playingNewGame = false;
                    _this_1.dice3.setCompleteListener(function () { });
                    _this_1.dice1.clearTrack(0);
                    _this_1.dice2.clearTrack(0);
                    _this_1.dice3.clearTrack(0);
                    if (res.bettingState) {
                        _this_1.updateStatusBlow("SHOW");
                        _this_1.bowl.active = true;
                        _this_1.isBetting = true;
                        _this_1.dice1.node.active = false;
                        _this_1.dice2.node.active = false;
                        _this_1.dice3.node.active = false;
                        _this_1.lblRemainTime.node.active = true;
                        _this_1.lblRemainTime.string = !res.remainTime ? "0" : "" + res.remainTime;
                        ;
                        _this_1.lblRemainTime.font = res.remainTime < 10 ? _this_1.fontTime[1] : _this_1.fontTime[0];
                        _this_1.lblRemainTime2.node.parent.active = false;
                        _this_1.lblScore.node.parent.active = false;
                    }
                    else {
                        _this_1.updateStatusBlow("HIDE");
                        _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
                        _this_1.isBetting = false;
                        _this_1.dice1.node.active = true;
                        _this_1.dice1.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice1), false);
                        _this_1.dice2.node.active = true;
                        _this_1.dice2.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice2), false);
                        _this_1.dice3.node.active = true;
                        _this_1.dice3.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice3), false);
                        _this_1.lblRemainTime.node.active = false;
                        _this_1.lblRemainTime2.node.parent.active = true;
                        _this_1.lblRemainTime2.node.active = true;
                        _this_1.lblRemainTime2.string = "" + (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
                        _this_1.showResult();
                    }
                    if (!res.bettingState) {
                        // if (res.remainTime == 0) {
                        //this.showToast(App.instance.getTextLang('txt_taixiu_refund'));
                        // }
                        // let chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
                        _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(res.potTai);
                        _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(res.potXiu);
                    }
                    else {
                        Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, 0.3);
                        Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, 0.3);
                    }
                    //Tween.numberTo(this.lblTotalBetTai, res.potTai, 0.3);
                    //Tween.numberTo(this.lblTotalBetXiu, res.potXiu, 0.3);
                    _this_1.betedTai = res.betTai;
                    _this_1.betedXiu = res.betXiu;
                    _this_1.lblBetedTai.string = _this_1.betedTai > 0 ? Utils_1.default.formatNumber(_this_1.betedTai) : "";
                    _this_1.lblBetedXiu.string = _this_1.betedXiu > 0 ? Utils_1.default.formatNumber(_this_1.betedXiu) : "";
                    _this_1.referenceId = res.referenceId;
                    _this_1.lblSession.string = "#" + res.referenceId;
                    _this_1.remainTime = res.remainTime;
                    _this_1.lblMD5Text.string = res.md5Code;
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.UPDATE_TIME: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveUpdateTime(data);
                    if (res.bettingState) {
                        _this_1.isBetting = true;
                        _this_1.lblRemainTime2.node.parent.active = false;
                        _this_1.lblScore.node.parent.active = false;
                        _this_1.lblRemainTime.string = !res.remainTime ? "0" : "" + res.remainTime;
                        _this_1.lblRemainTime.font = res.remainTime < 10 ? _this_1.fontTime[1] : _this_1.fontTime[0];
                        if (_this_1.playingNewGame && res.remainTime >= 49) {
                            _this_1.playingNewGame = false;
                            _this_1.updateStatusBlow("HIDE");
                            _this_1.dice1.node.active = true;
                            _this_1.dice2.node.active = true;
                            _this_1.dice3.node.active = true;
                            _this_1.dice1.setAnimation(0, _this_1.getAnimationDiceStart(1), false);
                            _this_1.dice2.setAnimation(0, _this_1.getAnimationDiceStart(2), false);
                            _this_1.dice3.setAnimation(0, _this_1.getAnimationDiceStart(3), false);
                            _this_1.effect.node.active = true;
                            _this_1.effect.setAnimation(0, "effect", false);
                            _this_1.arrTimeoutDice.push(setTimeout(function () {
                                _this_1.updateStatusBlow("ANIM_CLOSE");
                            }, 2100));
                        }
                        if (res.remainTime < 47) {
                            _this_1.dice1.node.active = false;
                            _this_1.dice2.node.active = false;
                            _this_1.dice3.node.active = false;
                            _this_1.updateStatusBlow("SHOW");
                            _this_1.lblRemainTime.node.active = true;
                        }
                    }
                    else {
                        _this_1.isBetting = false;
                        _this_1.lblRemainTime.node.active = false;
                        _this_1.lblRemainTime2.node.parent.active = true;
                        _this_1.lblRemainTime2.string = (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
                        _this_1.layoutBet.active = false;
                        _this_1.lblBetTai.string = "";
                        _this_1.lblBetXiu.string = "";
                        if (res.remainTime < 5 && _this_1.isNan && _this_1.blowType != "HIDE" && _this_1.blowType != "ANIM_OPEN") {
                            _this_1.updateStatusBlow("ANIM_OPEN");
                            _this_1.showResult();
                            _this_1.showWinCash();
                        }
                    }
                    if (!res.bettingState) {
                        //if (res.remainTime == 0) {
                        //    this.showToast(App.instance.getTextLang('txt_taixiu_refund'));
                        // }
                        //  let chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
                        _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(res.potTai);
                        _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(res.potXiu);
                    }
                    else {
                        if (res.remainTime <= 6) {
                            if (Utils_1.default.formatNumber(res.potTai) != _this_1.lblTotalBetTai.string || Utils_1.default.formatNumber(res.potXiu) != _this_1.lblTotalBetXiu.string) {
                                _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(res.potTai);
                                _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(res.potXiu);
                            }
                            else {
                                _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(res.potTai);
                                _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(res.potXiu);
                            }
                        }
                        else {
                            Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, 0.3);
                            Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, 0.3);
                        }
                    }
                    //Tween.numberTo(this.lblTotalBetTai, res.potTai, 0.3);
                    //Tween.numberTo(this.lblTotalBetXiu, res.potXiu, 0.3);
                    _this_1.lblUserTai.string = Utils_1.default.formatNumber(res.numBetTai);
                    _this_1.lblUserXiu.string = Utils_1.default.formatNumber(res.numBetXiu);
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.DICES_RESULT: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveDicesResult(data);
                    _this_1.dice1.node.active = true;
                    _this_1.dice1.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice1), false);
                    _this_1.dice2.node.active = true;
                    _this_1.dice2.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice2), false);
                    _this_1.dice3.node.active = true;
                    _this_1.dice3.setAnimation(0, _this_1.getAnimationDiceEnd(res.dice3), false);
                    _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
                    _this_1.md5CodeResult = res.md5code;
                    if (_this_1.histories.length >= 100) {
                        _this_1.histories.slice(0, 1);
                    }
                    _this_1.histories.push({
                        "session": _this_1.referenceId,
                        "dices": [
                            res.dice1,
                            res.dice2,
                            res.dice3
                        ]
                    });
                    if (_this_1.isNan) {
                        _this_1.showToast("Xin mời nặn");
                        _this_1.updateStatusBlow("NAN");
                    }
                    else {
                        _this_1.updateStatusBlow("ANIM_OPEN");
                        _this_1.arrTimeoutDice.push(setTimeout(function () {
                            _this_1.lblRemainTime.node.active = false;
                            _this_1.lblRemainTime2.node.parent.active = false;
                            _this_1.lblRemainTime2.node.parent.active = true;
                            _this_1.lblRemainTime2.node.active = true;
                            _this_1.showResult();
                        }, 150));
                    }
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.RESULT: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveResult(data);
                    // console.log(res);
                    Configs_1.default.Login.Coin = res.currentMoney;
                    _this_1.lastWinCash = res.totalMoney;
                    if (!_this_1.bowl.active) {
                        if (res.totalMoney > 0)
                            _this_1.showWinCash();
                    }
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.NEW_GAME: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveNewGame(data);
                    console.log("new game md5 " + res.md5code);
                    _this_1.playingNewGame = true;
                    _this_1.lblTotalBetTai.node.scale = 0.7;
                    _this_1.lblTotalBetXiu.node.scale = 0.7;
                    _this_1.lblTotalBetTai.node.stopAllActions();
                    _this_1.lblTotalBetXiu.node.stopAllActions();
                    _this_1.lblTotalBetTai.string = "";
                    _this_1.lblTotalBetXiu.string = "";
                    _this_1.lblBetedTai.string = "";
                    _this_1.lblBetedXiu.string = "";
                    _this_1.lblUserTai.string = "";
                    _this_1.lblUserXiu.string = "";
                    _this_1.referenceId = res.referenceId;
                    _this_1.lblSession.string = "#" + res.referenceId;
                    _this_1.betingValue = -1;
                    _this_1.betingDoor = BetDoor.None;
                    _this_1.betedTai = 0;
                    _this_1.betedXiu = 0;
                    _this_1.isOpenBowl = false;
                    _this_1.lastWinCash = 0;
                    _this_1.lblMD5Text.string = res.md5code;
                    _this_1.stopWin();
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.HISTORIES: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveHistories(data);
                    var his = res.data.split(",");
                    for (var i = 0; i < his.length; i++) {
                        _this_1.histories.push({
                            "session": _this_1.referenceId - his.length / 3 + parseInt("" + ((i + 1) / 3)) + (_this_1.isBetting ? 0 : 1),
                            "dices": [
                                parseInt(his[i]),
                                parseInt(his[++i]),
                                parseInt(his[++i])
                            ]
                        });
                    }
                    _this_1.updateBtnHistories();
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.LOG_CHAT: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveLogChat(data);
                    // console.log(res);
                    // break;
                    var msgs = JSON.parse(res.message);
                    console.log('cmdMD5.Code.LOG_CHAT', msgs);
                    for (var i = 0; i < msgs.length; i++) {
                        _this_1.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
                    }
                    _this_1.panelChat.scrollToBottom();
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.SEND_CHAT: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveSendChat(data);
                    switch (res.error) {
                        case 0:
                            _this_1.panelChat.addMessage(res.nickname, res.message);
                            break;
                        case 2:
                            _this_1.showToast("Bạn không có quyền Chat!");
                            break;
                        case 3:
                            _this_1.showToast("Tạm thời bạn bị cấm Chat!");
                            break;
                        case 4:
                            _this_1.showToast("Nội dung chat quá dài.");
                            break;
                        default:
                            _this_1.showToast("Bạn không thể chat vào lúc này.");
                            break;
                    }
                    // console.log(res);
                    break;
                }
                case TaiXiuMD5_Cmd_1.default.Code.BET: {
                    var res = new TaiXiuMD5_Cmd_1.default.ReceiveBet(data);
                    switch (res.result) {
                        case 0:
                            switch (_this_1.betingDoor) {
                                case BetDoor.Tai:
                                    _this_1.betedTai += _this_1.betingValue;
                                    _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
                                    break;
                                case BetDoor.Xiu:
                                    _this_1.betedXiu += _this_1.betingValue;
                                    _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
                                    break;
                            }
                            Configs_1.default.Login.Coin = res.currentMoney;
                            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
                            _this_1.betingValue = -1;
                            _this_1.showToast("Đặt cược thành công.");
                            break;
                        case 2:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Hết thời gian cược.");
                            break;
                        case 3:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Số dư không đủ vui lòng nạp thêm.");
                            break;
                        case 4:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Số tiền cược không hợp lệ.");
                            break;
                        default:
                            _this_1.betingValue = -1;
                            _this_1.showToast("Đặt cược không thành công.");
                            break;
                    }
                    break;
                }
                default:
                    // console.log(inpacket.getCmdId());
                    break;
            }
        }, this);
        var _loop_1 = function (i) {
            var btn = this_1.buttonsBet1[i];
            var value = this_1.listBets[i];
            var strValue = value + "";
            if (value >= 1000000) {
                strValue = (value / 1000000) + "M";
            }
            else if (value >= 1000) {
                strValue = (value / 1000) + "K";
            }
            btn.getComponentInChildren(cc.Label).string = strValue;
            btn.node.on("click", function () {
                if (_this_1.betingDoor === BetDoor.None)
                    return;
                var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
                var number = Utils_1.default.stringToInt(lblBet.string) + value;
                if (number > _this_1.maxBetValue)
                    number = _this_1.maxBetValue;
                lblBet.string = Utils_1.default.formatNumber(number);
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.buttonsBet1.length; i++) {
            _loop_1(i);
        }
        var _loop_2 = function (i) {
            var btn = this_2.buttonsBet2[i];
            var value = btn.getComponentInChildren(cc.Label).string;
            btn.node.on("click", function () {
                if (_this_1.betingDoor === BetDoor.None)
                    return;
                var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
                var number = Utils_1.default.stringToInt(lblBet.string + value);
                if (number > _this_1.maxBetValue)
                    number = _this_1.maxBetValue;
                lblBet.string = Utils_1.default.formatNumber(number);
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.buttonsBet2.length; i++) {
            _loop_2(i);
        }
        this.bowl.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (_this_1.isNan && !_this_1.isBetting && _this_1.bowl.active) {
                var pos = _this_1.bowl.position;
                pos.x += event.getDeltaX();
                pos.y += event.getDeltaY();
                _this_1.bowl.position = pos;
                var distance = Utils_1.default.v2Distance(pos, _this_1.bowlStartPos);
                if (Math.abs(distance) > 220) {
                    _this_1.updateStatusBlow("HIDE");
                    _this_1.showResult();
                    _this_1.showWinCash();
                }
            }
        }, this);
    };
    TaiXiuMiniController.prototype.show = function () {
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(false);
        this.layoutBet.active = false;
        this.lblToast.node.parent.active = false;
        this.lblWinCash.node.active = false;
        this.layoutBet.active = false;
        this.bowl.active = false;
        this.dice1.node.active = false;
        this.dice2.node.active = false;
        this.dice3.node.active = false;
        var instance = MiniGameNetworkClient_1.default.getInstance();
        instance.send(new TaiXiuMD5_Cmd_1.default.SendScribe());
        this.showChat();
    };
    TaiXiuMiniController.prototype.showChat = function () {
        this.panelChat = this.nodePanelChat.getComponent(TaiXiuMD5_PanelChat_1.default);
        this.panelChat.show(true);
    };
    TaiXiuMiniController.prototype.copyMd5Text = function () {
        var temp = document.createElement('textarea');
        temp.value = this.lblMD5Text.string;
        document.body.appendChild(temp);
        temp.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        temp.style.display = 'none';
        this.showToast("Đã copy chuỗi MD5!");
    };
    TaiXiuMiniController.prototype.dismiss = function () {
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        this.panelChat.show(false);
        MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMD5_Cmd_1.default.SendUnScribe());
    };
    TaiXiuMiniController.prototype.actClose = function () {
        TaiXiuMD5_Controller_1.default.instance.dismiss();
    };
    TaiXiuMiniController.prototype.actTransaction = function () {
        var _this_1 = this;
        if (!Configs_1.default.Login.IsLogin) {
            App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang('txt_need_login'));
            return;
        }
        if (!this.popupTransaction) {
            var cb = function (prefab) {
                var popupDaily = cc.instantiate(prefab).getComponent("Lobby.PopupTransaction");
                App_1.default.instance.canvas.addChild(popupDaily.node);
                _this_1.popupTransaction = popupDaily;
                _this_1.popupTransaction.show();
            };
            BundleControl_1.default.loadPrefabPopup("PrefabPopup/PopupTransaction", cb);
        }
        else {
            this.popupTransaction.show();
        }
    };
    TaiXiuMiniController.prototype.actChat = function () {
        this.panelChat.show(!this.panelChat.node.active);
    };
    TaiXiuMiniController.prototype.actBetTai = function () {
        if (!this.isBetting) {
            this.showToast("Chưa đến thời gian đặt cược.");
            return;
        }
        if (this.betingValue >= 0) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        if (this.betedXiu > 0) {
            this.showToast("Bạn không thể đặt 2 cửa.");
            return;
        }
        this.betingDoor = BetDoor.Tai;
        this.lblBetTai.string = "0";
        this.lblBetXiu.string = "";
        this.xiu1.active = true;
        this.xiu2.active = false;
        this.layoutBet.active = true;
        this.layoutBet1.active = true;
        this.layoutBet2.active = false;
    };
    TaiXiuMiniController.prototype.actBetXiu = function () {
        if (!this.isBetting) {
            this.showToast("Chưa đến thời gian đặt cược.");
            return;
        }
        if (this.betingValue >= 0) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        if (this.betedTai > 0) {
            this.showToast("Bạn không thể đặt 2 cửa.");
            return;
        }
        this.betingDoor = BetDoor.Xiu;
        this.lblBetXiu.string = "0";
        this.lblBetTai.string = "";
        this.xiu1.active = false;
        this.xiu2.active = true;
        this.layoutBet.active = true;
        this.layoutBet1.active = true;
        this.layoutBet2.active = false;
    };
    TaiXiuMiniController.prototype.actOtherNumber = function () {
        this.layoutBet1.active = false;
        this.layoutBet2.active = true;
    };
    TaiXiuMiniController.prototype.actAgree = function () {
        if (this.betingValue >= 0 || !this.canBet) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        this.betingValue = Utils_1.default.stringToInt(lblBet.string);
        this.betingDoor = this.betingDoor;
        MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMD5_Cmd_1.default.SendBet(this.referenceId, this.betingValue, this.betingDoor == BetDoor.Tai ? 1 : 0, this.remainTime));
        lblBet.string = "";
        this.canBet = false;
        this.scheduleOnce(function () {
            this.canBet = true;
        }, 1);
    };
    TaiXiuMiniController.prototype.actCancel = function () {
        this.lblBetXiu.string = "";
        this.lblBetTai.string = "";
        this.xiu1.active = false;
        this.xiu2.active = false;
        this.betingDoor = BetDoor.None;
        this.layoutBet.active = false;
    };
    TaiXiuMiniController.prototype.actBtnGapDoi = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string) + Configs_1.default.Login.Coin;
        if (number > this.maxBetValue)
            number = this.maxBetValue;
        lblBet.string = Utils_1.default.formatNumber(number);
    };
    TaiXiuMiniController.prototype.actBtnDelete = function () {
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = "" + Utils_1.default.stringToInt(lblBet.string);
        number = number.substring(0, number.length - 1);
        number = Utils_1.default.formatNumber(Utils_1.default.stringToInt(number));
        lblBet.string = number;
    };
    TaiXiuMiniController.prototype.actBtn000 = function () {
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string + "000");
        if (number > this.maxBetValue)
            number = this.maxBetValue;
        lblBet.string = Utils_1.default.formatNumber(number);
    };
    TaiXiuMiniController.prototype.actNan = function () {
        this.isNan = !this.isNan;
        this.btnNan.getComponent(cc.Sprite).spriteFrame = this.isNan ? this.sprFrameBtnNan2 : this.sprFrameBtnNan;
    };
    TaiXiuMiniController.prototype.showResult = function () {
        // console.error("showResult");
        this.lblMD5Text.string = this.md5CodeResult;
        this.lblScore.node.parent.active = true;
        this.lblScore.string = "" + this.lastScore;
        if (this.lastScore >= 11) {
            this.eftai.node.active = true;
            this.efxiu.node.active = false;
            this.tai.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(0.3, 1.3), cc.scaleTo(0.3, 1)), cc.sequence(cc.tintTo(0.3, 255, 255, 0), cc.tintTo(0.3, 255, 255, 255)))));
            this.eftai.setAnimation(0, "tai", true);
            // this.eftai.node.parent.getChildByName("text").active = false;
            // this.efxiu.node.parent.getChildByName("text").active = true;
        }
        else {
            this.efxiu.node.active = true;
            this.eftai.node.active = false;
            this.xiu.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(0.3, 1.3), cc.scaleTo(0.3, 1)), cc.sequence(cc.tintTo(0.3, 255, 255, 0), cc.tintTo(0.3, 255, 255, 255)))));
            this.efxiu.setAnimation(0, "xiu", true);
            // this.efxiu.node.parent.getChildByName("text").active = false;
            // this.eftai.node.parent.getChildByName("text").active = true;
        }
        this.updateBtnHistories();
        for (var i = 1; i < this.arrTimeoutDice.length; i++) {
            clearTimeout(this.arrTimeoutDice[i]);
        }
        this.arrTimeoutDice = [];
    };
    TaiXiuMiniController.prototype.stopWin = function () {
        this.eftai.node.active = false;
        this.efxiu.node.active = false;
        // this.eftai.node.parent.getChildByName("text").active = true;
        // this.efxiu.node.parent.getChildByName("text").active = true;
        this.tai.stopAllActions();
        this.tai.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
        this.xiu.stopAllActions();
        this.xiu.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
    };
    TaiXiuMiniController.prototype.showToast = function (message) {
        this.lblToast.string = message;
        var parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = true;
        parent.opacity = 0;
        parent.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(2), cc.fadeOut(0.2), cc.callFunc(function () {
            parent.active = false;
        })));
    };
    TaiXiuMiniController.prototype.showWinCash = function () {
        var _this_1 = this;
        if (this.lastWinCash <= 0)
            return;
        this.lblWinCash.node.stopAllActions();
        this.lblWinCash.node.active = true;
        this.lblWinCash.node.scale = 0;
        this.lblWinCash.node.position = cc.Vec2.ZERO;
        Tween_1.default.numberTo(this.lblWinCash, this.lastWinCash, 0.5, function (n) { return "+" + Utils_1.default.formatNumber(n); });
        this.lblWinCash.node.runAction(cc.sequence(cc.scaleTo(0.5, 1), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 60)), cc.callFunc(function () {
            _this_1.lblWinCash.node.active = false;
        })));
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    TaiXiuMiniController.prototype.updateBtnHistories = function () {
        var histories = this.histories.slice();
        if (histories.length > this.btnHistories.childrenCount) {
            histories.splice(0, histories.length - this.btnHistories.childrenCount);
        }
        var idx = histories.length - 1;
        for (var i = this.btnHistories.childrenCount - 1; i >= 0; i--) {
            if (idx >= 0) {
                var _idx = idx;
                var score = histories[idx]["dices"][0] + histories[idx]["dices"][1] + histories[idx]["dices"][2];
                this.btnHistories.children[i].getComponent(cc.Sprite).spriteFrame = score >= 11 ? this.sprFrameTai : this.sprFrameXiu;
                this.btnHistories.children[i].off("click");
                this.btnHistories.children[i].active = true;
            }
            else {
                this.btnHistories.children[i].active = false;
            }
            idx--;
        }
    };
    TaiXiuMiniController.prototype.sendChat = function (message) {
        var _this = this;
        if (!_this.isCanChat) {
            this.showToast("Bạn thao tác quá nhanh.");
            return;
        }
        _this.isCanChat = false;
        this.scheduleOnce(function () {
            _this.isCanChat = true;
        }, 1);
        var req = new TaiXiuMD5_Cmd_1.default.SendChat(unescape(encodeURIComponent(message)));
        MiniGameNetworkClient_1.default.getInstance().send(req);
    };
    var TaiXiuMiniController_1;
    TaiXiuMiniController.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "gamePlay", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TaiXiuMiniController.prototype, "sprDices", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMiniController.prototype, "sprFrameTai", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMiniController.prototype, "sprFrameXiu", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMiniController.prototype, "sprFrameBtnNan", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], TaiXiuMiniController.prototype, "sprFrameBtnNan2", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblSession", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblRemainTime", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblRemainTime2", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblScore", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblUserTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblUserXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblTotalBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblTotalBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblBetTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblBetXiu", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblBetedTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblBetedXiu", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "dice1", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "dice2", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "dice3", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "effect", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "eftai", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "efxiu", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "bowl", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "tai", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "xiu", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "xiu1", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "xiu2", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "btnHistories", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "nodePanelChat", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "layoutBet", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "layoutBet1", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "layoutBet2", void 0);
    __decorate([
        property([cc.Button])
    ], TaiXiuMiniController.prototype, "buttonsBet1", void 0);
    __decorate([
        property([cc.Button])
    ], TaiXiuMiniController.prototype, "buttonsBet2", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblToast", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "btnNan", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lblMD5Text", void 0);
    __decorate([
        property(SoundManager)
    ], TaiXiuMiniController.prototype, "soundManager", void 0);
    __decorate([
        property(TaiXiuMD5_PopupDetailHistory_1.default)
    ], TaiXiuMiniController.prototype, "popupDetailHistory", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], TaiXiuMiniController.prototype, "fontTime", void 0);
    __decorate([
        property([cc.Node])
    ], TaiXiuMiniController.prototype, "popups", void 0);
    TaiXiuMiniController = TaiXiuMiniController_1 = __decorate([
        ccclass
    ], TaiXiuMiniController);
    return TaiXiuMiniController;
}(cc.Component));
exports.default = TaiXiuMiniController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1TUQ1XFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1ENS5UYWlYaXVNaW5pQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaURBQXFDO0FBQ3JDLDZEQUE4QztBQUM5Qyx3REFBd0Q7QUFDeEQsMEdBQXFHO0FBQ3JHLGdHQUFtRjtBQUNuRix3RUFBbUU7QUFDbkUsNEVBQXVFO0FBQ3ZFLHdFQUFtRTtBQUNuRSx3REFBbUQ7QUFDbkQsZ0dBQTJGO0FBQzNGLG9FQUErRDtBQUMvRCxvRUFBNkQ7QUFDN0QsK0VBQWdFO0FBQ2hFLG9FQUErRDtBQUV6RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxJQUFLLE9BRUo7QUFGRCxXQUFLLE9BQU87SUFDUixxQ0FBSSxDQUFBO0lBQUUsbUNBQUcsQ0FBQTtJQUFFLG1DQUFHLENBQUE7QUFDbEIsQ0FBQyxFQUZJLE9BQU8sS0FBUCxPQUFPLFFBRVg7QUFHRDtJQUFBO1FBRUksYUFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVMsR0FBbUIsRUFBRSxDQUFDO0lBUW5DLENBQUM7SUFQRyxzQ0FBZSxHQUFmLFVBQWdCLFVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDeEI7SUFFTCxDQUFDO0lBZkQ7UUFEQyxRQUFR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QUFFLENBQUMsSUFBSSxDQUFDLENBQUM7d0RBQ1U7SUE1RmIsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0FxMkJ4QztJQUFELDJCQUFDO0NBcjJCRCxBQXEyQkMsQ0FyMkJpRCxFQUFFLENBQUMsU0FBUyxHQXEyQjdEO2tCQXIyQm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGNtZE1ENSBmcm9tIFwiLi9UYWlYaXVNRDUuQ21kXCI7XG5pbXBvcnQgUGFuZWxDaGF0IGZyb20gXCIuL1RhaVhpdU1ENS5QYW5lbENoYXRcIjtcbi8vaW1wb3J0IE1pbmlHYW1lIGZyb20gXCIuLi8uLi8uLi8uLi9Mb2JieS9zcmMvTWluaUdhbWVcIjtcbmltcG9ydCBNaW5pR2FtZU5ldHdvcmtDbGllbnQgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9NaW5pR2FtZU5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBJblBhY2tldCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IFNQVXRpbHMgZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vU1BVdGlsc1wiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IFRhaVhpdU1ENUNPbnRyb2xlciBmcm9tIFwiLi4vc3JjL1RhaVhpdU1ENS5Db250cm9sbGVyXCI7XG5pbXBvcnQgUG9wdXBEZXRhaWxIaXN0b3J5IGZyb20gXCIuL1RhaVhpdU1ENS5Qb3B1cERldGFpbEhpc3RvcnlcIjtcbmltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9CdW5kbGVDb250cm9sXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gQmV0RG9vciB7XG4gICAgTm9uZSwgVGFpLCBYaXVcbn1cblxuQGNjY2xhc3MoXCJUYWlYaXVNRDUuVGFpWGl1TWluaUNvbnRyb2xsZXIuU291bmRNYW5hZ2VyXCIpXG5leHBvcnQgY2xhc3MgU291bmRNYW5hZ2VyIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU2VsZjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFpeGl1VmlldzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgZWZmU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBsaXN0QXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgcGxheUF1ZGlvRWZmZWN0KGluZGV4QXVkaW8pIHtcbiAgICAgICAgaWYgKHRoaXMudGFpeGl1Vmlldy5hY3RpdmUgJiYgU1BVdGlscy5nZXRTb3VuZFZvbHVtbigpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lZmZTb3VuZC5jbGlwID0gdGhpcy5saXN0QXVkaW9baW5kZXhBdWRpb107XG4gICAgICAgICAgICB0aGlzLmVmZlNvdW5kLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFpWGl1TWluaUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIGluc3RhbmNlOiBUYWlYaXVNaW5pQ29udHJvbGxlciA9IG51bGw7XG5cdFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdhbWVQbGF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBzcHJEaWNlczogQXJyYXk8Y2MuU3ByaXRlRnJhbWU+ID0gbmV3IEFycmF5PGNjLlNwcml0ZUZyYW1lPigpO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJGcmFtZVRhaTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJGcmFtZVhpdTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJGcmFtZUJ0bk5hbjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJGcmFtZUJ0bk5hbjI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsU2Vzc2lvbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxSZW1haW5UaW1lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFJlbWFpblRpbWUyOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFVzZXJUYWk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVXNlclhpdTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbEJldFRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb3RhbEJldFhpdTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCZXRUYWk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0WGl1OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldGVkVGFpOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldGVkWGl1OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRpY2UxOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRpY2UyOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGRpY2UzOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuXHRlZmZlY3Q6IHNwLlNrZWxldG9uID0gbnVsbDtcblx0QHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGVmdGFpOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGVmeGl1OiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm93bDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFpOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB4aXU6IGNjLk5vZGUgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB4aXUxOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB4aXUyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5IaXN0b3JpZXM6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVQYW5lbENoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheW91dEJldDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5b3V0QmV0MTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGF5b3V0QmV0MjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFtjYy5CdXR0b25dKVxuICAgIGJ1dHRvbnNCZXQxOiBBcnJheTxjYy5CdXR0b24+ID0gbmV3IEFycmF5PGNjLkJ1dHRvbj4oKTtcbiAgICBAcHJvcGVydHkoW2NjLkJ1dHRvbl0pXG4gICAgYnV0dG9uc0JldDI6IEFycmF5PGNjLkJ1dHRvbj4gPSBuZXcgQXJyYXk8Y2MuQnV0dG9uPigpO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxUb2FzdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxXaW5DYXNoOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuTmFuOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsTUQ1VGV4dDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTb3VuZE1hbmFnZXIpXG4gICAgc291bmRNYW5hZ2VyOiBTb3VuZE1hbmFnZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShQb3B1cERldGFpbEhpc3RvcnkpXG4gICAgcG9wdXBEZXRhaWxIaXN0b3J5OiBQb3B1cERldGFpbEhpc3RvcnkgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQml0bWFwRm9udF0pXG4gICAgZm9udFRpbWU6IGNjLkJpdG1hcEZvbnRbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5Ob2RlXSlcbiAgICBwdWJsaWMgcG9wdXBzOiBjYy5Ob2RlW10gPSBbXTtcbiAgICBwcml2YXRlIGFyclRpbWVvdXREaWNlID0gW107XG4gICAgcHJpdmF0ZSBpc0JldHRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlbWFpblRpbWUgPSAwO1xuICAgIHByaXZhdGUgY2FuQmV0ID0gdHJ1ZTtcbiAgICBwcml2YXRlIGJldGVkVGFpID0gMDtcbiAgICBwcml2YXRlIGJldGVkWGl1ID0gMDtcbiAgICBwcml2YXRlIHJlZmVyZW5jZUlkID0gMDtcbiAgICBwcml2YXRlIGJldGluZ1ZhbHVlID0gLTE7XG4gICAgcHJpdmF0ZSBiZXRpbmdEb29yID0gQmV0RG9vci5Ob25lO1xuICAgIHByaXZhdGUgaXNPcGVuQm93bCA9IGZhbHNlO1xuICAgIHByaXZhdGUgbGFzdFdpbkNhc2ggPSAwO1xuICAgIHByaXZhdGUgbGFzdFNjb3JlID0gMDtcbiAgICBwcml2YXRlIGlzTmFuID0gZmFsc2U7XG4gICAgaGlzdG9yaWVzID0gW107XG4gICAgXG4gICAgcHJpdmF0ZSBpc0NhbkNoYXQgPSB0cnVlO1xuICAgIHByaXZhdGUgcGFuZWxDaGF0OiBQYW5lbENoYXQgPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWF4QmV0VmFsdWUgPSA5OTk5OTk5OTk7XG4gICAgcHJpdmF0ZSBsaXN0QmV0cyA9IFsxMDAwLCAxMDAwMCwgNTAwMDAsIDEwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCAxMDAwMDAwMCw1MDAwMDAwMF07XG4gICAgcHJpdmF0ZSByZWFkb25seSBib3dsU3RhcnRQb3MgPSBjYy52MigwLCAwKTtcbiAgICBwcml2YXRlIG1kNUNvZGVSZXN1bHQgPSBcIlwiO1xuICAgIHByaXZhdGUgcGxheWluZ05ld0dhbWUgPSBmYWxzZTtcbiAgICBwcml2YXRlIGJsb3dUeXBlID0gXCJDTE9TRVwiO1xuICAgIFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgVGFpWGl1TWluaUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNjLmlzVmFsaWQodGhpcy5ub2RlKSAmJiB0aGlzLm5vZGUuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXJyVGltZW91dERpY2UgPT0gbnVsbCkgdGhpcy5hcnJUaW1lb3V0RGljZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hcnJUaW1lb3V0RGljZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hcnJUaW1lb3V0RGljZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZW91dERpY2UgPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXRBbmltYXRpb25EaWNlU3RhcnQoZGljZSkge1xuICAgICAgICB2YXIgYW5pbSA9IFwiXCI7XG4gICAgICAgIGlmIChkaWNlID09IDEpIGFuaW0gPSBcInhpIG5nYXUgYmF5IDFcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSAyKSBhbmltID0gXCJ4aSBuZ2F1IGJheSAyXCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gMykgYW5pbSA9IFwieGkgbmdhdSBiYXkgM1wiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDQpIGFuaW0gPSBcInhpIG5nYXUgYmF5IDRcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSA1KSBhbmltID0gXCJ4aSBuZ2F1IGJheSA1XCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gNikgYW5pbSA9IFwieGkgbmdhdSBiYXkgNlwiO1xuICAgICAgICByZXR1cm4gYW5pbTtcbiAgICB9XG5cbiAgICBnZXRBbmltYXRpb25EaWNlRW5kKGRpY2UpIHtcbiAgICAgICAgdmFyIGFuaW0gPSBcIlwiO1xuICAgICAgICBpZiAoZGljZSA9PSAxKSBhbmltID0gXCIxXCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gMikgYW5pbSA9IFwiMlwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDMpIGFuaW0gPSBcIjNcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSA0KSBhbmltID0gXCI0XCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gNSkgYW5pbSA9IFwiNVwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDYpIGFuaW0gPSBcIjZcIjtcbiAgICAgICAgcmV0dXJuIGFuaW07XG4gICAgfVxuICAgIG9uRm9jdXNJbkVkaXRvcigpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVN0YXR1c0Jsb3codHlwZSA9IFwiQ0xPU0VcIil7XG4gICAgICAgIHRoaXMuYmxvd1R5cGUgPSB0eXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJISURFXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvd2wuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvd2wuc2V0UG9zaXRpb24odGhpcy5ib3dsU3RhcnRQb3MpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBcIlNIT1dcIjoge1xuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLnNldFBvc2l0aW9uKHRoaXMuYm93bFN0YXJ0UG9zKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvd2wub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJBTklNX0NMT1NFXCI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvd2wuYWN0aXZlID0gdHJ1ZTsgIFxuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJib3dsQ2xvc2VcIik7IFxuICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZW91dERpY2UucHVzaChzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSBmYWxzZTsgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Jsb3coXCJTSE9XXCIpXG4gICAgICAgICAgICAgICAgfSwgMTAwKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJBTklNX09QRU5cIjoge1xuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSB0cnVlOyAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJib3dsT3BlblwiKTsgIFxuICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZW91dERpY2UucHVzaChzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSB0cnVlOyAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Jsb3coXCJISURFXCIpXG4gICAgICAgICAgICAgICAgfSwgMTUwKSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgXCJOQU5cIjoge1xuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSB0cnVlOyAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLnNldFBvc2l0aW9uKHRoaXMuYm93bFN0YXJ0UG9zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFkZCBsaXN0ZW5lciBtZDVcIik7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhOiBVaW50OEFycmF5KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHJldHVybjtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiBcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wYWNrZXQuZ2V0Q21kSWQoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY21kTUQ1LkNvZGUuR0FNRV9JTkZPOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kTUQ1LlJlY2VpdmVHYW1lSW5mbyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wV2luKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ05ld0dhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMy5zZXRDb21wbGV0ZUxpc3RlbmVyKCgpID0+IHt9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMS5jbGVhclRyYWNrKDApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLmNsZWFyVHJhY2soMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMuY2xlYXJUcmFjaygwKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuYmV0dGluZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Jsb3coXCJTSE9XXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmV0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLnN0cmluZyA9ICFyZXMucmVtYWluVGltZSA/IFwiMFwiIDogXCJcIiArIHJlcy5yZW1haW5UaW1lOztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5mb250ID0gcmVzLnJlbWFpblRpbWUgPCAxMCA/IHRoaXMuZm9udFRpbWVbMV0gOiB0aGlzLmZvbnRUaW1lWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsU2NvcmUubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Jsb3coXCJISURFXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2NvcmUgPSByZXMuZGljZTEgKyByZXMuZGljZTIgKyByZXMuZGljZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmV0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLnNldEFuaW1hdGlvbigwLCB0aGlzLmdldEFuaW1hdGlvbkRpY2VFbmQocmVzLmRpY2UxKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLnNldEFuaW1hdGlvbigwLCB0aGlzLmdldEFuaW1hdGlvbkRpY2VFbmQocmVzLmRpY2UyKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UzLnNldEFuaW1hdGlvbigwLCB0aGlzLmdldEFuaW1hdGlvbkRpY2VFbmQocmVzLmRpY2UzKSwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5zdHJpbmcgPSBcIlwiICsgKHJlcy5yZW1haW5UaW1lIDwgMTAgPyBcIjBcIiArIHJlcy5yZW1haW5UaW1lIDogXCJcIiArIHJlcy5yZW1haW5UaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzLmJldHRpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAocmVzLnJlbWFpblRpbWUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdGFpeGl1X3JlZnVuZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY2hpcEVuZCA9IHJlcy5wb3RUYWkgPiByZXMucG90WGl1ID8gcmVzLnBvdFhpdSA6IHJlcy5wb3RUYWk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0VGFpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXMucG90VGFpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRYaXUuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5wb3RYaXUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldFRhaSwgcmVzLnBvdFRhaSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXRYaXUsIHJlcy5wb3RYaXUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9Ud2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0VGFpLCByZXMucG90VGFpLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAvL1R3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXRYaXUsIHJlcy5wb3RYaXUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRUYWkgPSByZXMuYmV0VGFpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkWGl1ID0gcmVzLmJldFhpdTtcblx0XHRcdFx0XHR0aGlzLmxibEJldGVkVGFpLnN0cmluZyA9IHRoaXMuYmV0ZWRUYWkgPiAwID8gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRUYWkpIDogXCJcIjtcblx0XHRcdFx0XHR0aGlzLmxibEJldGVkWGl1LnN0cmluZyA9IHRoaXMuYmV0ZWRYaXUgPiAwID8gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRYaXUpIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlcmVuY2VJZCA9IHJlcy5yZWZlcmVuY2VJZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTZXNzaW9uLnN0cmluZyA9IFwiI1wiICsgcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSByZXMucmVtYWluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxNRDVUZXh0LnN0cmluZyA9IHJlcy5tZDVDb2RlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWRNRDUuQ29kZS5VUERBVEVfVElNRToge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZE1ENS5SZWNlaXZlVXBkYXRlVGltZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5iZXR0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCZXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNjb3JlLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLnN0cmluZyA9ICFyZXMucmVtYWluVGltZSA/IFwiMFwiIDogXCJcIiArIHJlcy5yZW1haW5UaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLmZvbnQgPSByZXMucmVtYWluVGltZSA8IDEwID8gdGhpcy5mb250VGltZVsxXSA6IHRoaXMuZm9udFRpbWVbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXlpbmdOZXdHYW1lICYmIHJlcy5yZW1haW5UaW1lID49NDkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWluZ05ld0dhbWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Jsb3coXCJISURFXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEuc2V0QW5pbWF0aW9uKDAsIHRoaXMuZ2V0QW5pbWF0aW9uRGljZVN0YXJ0KDEpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5zZXRBbmltYXRpb24oMCwgdGhpcy5nZXRBbmltYXRpb25EaWNlU3RhcnQoMiksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UzLnNldEFuaW1hdGlvbigwLCB0aGlzLmdldEFuaW1hdGlvbkRpY2VTdGFydCgzKSwgZmFsc2UpO1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0dGhpcy5lZmZlY3Qubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmVmZmVjdC5zZXRBbmltYXRpb24oMCwgXCJlZmZlY3RcIiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZW91dERpY2UucHVzaChzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXR1c0Jsb3coXCJBTklNX0NMT1NFXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIxMDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZW1haW5UaW1lIDwgNDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNCbG93KFwiU0hPV1wiKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCZXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIuc3RyaW5nID0gKHJlcy5yZW1haW5UaW1lIDwgMTAgPyBcIjBcIiArIHJlcy5yZW1haW5UaW1lIDogXCJcIiArIHJlcy5yZW1haW5UaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlbWFpblRpbWUgPCA1ICYmIHRoaXMuaXNOYW4gJiYgdGhpcy5ibG93VHlwZSAhPSBcIkhJREVcIiAmJiB0aGlzLmJsb3dUeXBlICE9IFwiQU5JTV9PUEVOXCIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNCbG93KFwiQU5JTV9PUEVOXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1dpbkNhc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcy5iZXR0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKHJlcy5yZW1haW5UaW1lID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9yZWZ1bmQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAvLyAgbGV0IGNoaXBFbmQgPSByZXMucG90VGFpID4gcmVzLnBvdFhpdSA/IHJlcy5wb3RYaXUgOiByZXMucG90VGFpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFRhaS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLnBvdFRhaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0WGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXMucG90WGl1KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVtYWluVGltZSA8PSA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5wb3RUYWkpICE9IHRoaXMubGJsVG90YWxCZXRUYWkuc3RyaW5nIHx8IFV0aWxzLmZvcm1hdE51bWJlcihyZXMucG90WGl1KSAhPSB0aGlzLmxibFRvdGFsQmV0WGl1LnN0cmluZyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHJlcy5wb3RUYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0WGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXMucG90WGl1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0VGFpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihyZXMucG90VGFpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLnBvdFhpdSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0VGFpLCByZXMucG90VGFpLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXRYaXUsIHJlcy5wb3RYaXUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9Ud2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0VGFpLCByZXMucG90VGFpLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAvL1R3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXRYaXUsIHJlcy5wb3RYaXUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXNlclRhaS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIocmVzLm51bUJldFRhaSkgO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFVzZXJYaXUuc3RyaW5nID0gIFV0aWxzLmZvcm1hdE51bWJlcihyZXMubnVtQmV0WGl1KSA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZE1ENS5Db2RlLkRJQ0VTX1JFU1VMVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZE1ENS5SZWNlaXZlRGljZXNSZXN1bHQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLnNldEFuaW1hdGlvbigwLCB0aGlzLmdldEFuaW1hdGlvbkRpY2VFbmQocmVzLmRpY2UxKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMi5zZXRBbmltYXRpb24oMCwgdGhpcy5nZXRBbmltYXRpb25EaWNlRW5kKHJlcy5kaWNlMiksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMuc2V0QW5pbWF0aW9uKDAsIHRoaXMuZ2V0QW5pbWF0aW9uRGljZUVuZChyZXMuZGljZTMpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFNjb3JlID0gcmVzLmRpY2UxICsgcmVzLmRpY2UyICsgcmVzLmRpY2UzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1kNUNvZGVSZXN1bHQgPSByZXMubWQ1Y29kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yaWVzLmxlbmd0aCA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzLnNsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXNzaW9uXCI6IHRoaXMucmVmZXJlbmNlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpY2VzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGljZTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRpY2UyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kaWNlM1xuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmlzTmFuKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiWGluIG3hu51pIG7hurduXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNCbG93KFwiTkFOXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNCbG93KFwiQU5JTV9PUEVOXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUaW1lb3V0RGljZS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZE1ENS5Db2RlLlJFU1VMVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZE1ENS5SZWNlaXZlUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RXaW5DYXNoID0gcmVzLnRvdGFsTW9uZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5ib3dsLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy50b3RhbE1vbmV5ID4gMCkgdGhpcy5zaG93V2luQ2FzaCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZE1ENS5Db2RlLk5FV19HQU1FOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kTUQ1LlJlY2VpdmVOZXdHYW1lKGRhdGEpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ldyBnYW1lIG1kNSBcIiArIHJlcy5tZDVjb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5aW5nTmV3R2FtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRUYWkubm9kZS5zY2FsZSA9IDAuNztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5ub2RlLnNjYWxlID0gMC43O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0VGFpLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRUYWkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJldGVkVGFpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRYaXUuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxVc2VyVGFpLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXNlclhpdS5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyByZXMucmVmZXJlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRpbmdEb29yID0gQmV0RG9vci5Ob25lO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkVGFpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRlZFhpdSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuQm93bCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RXaW5DYXNoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxNRDVUZXh0LnN0cmluZyA9IHJlcy5tZDVjb2RlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BXaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kTUQ1LkNvZGUuSElTVE9SSUVTOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kTUQ1LlJlY2VpdmVIaXN0b3JpZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoaXMgPSByZXMuZGF0YS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlc3Npb25cIjogdGhpcy5yZWZlcmVuY2VJZCAtIGhpcy5sZW5ndGggLyAzICsgcGFyc2VJbnQoXCJcIiArICgoaSArIDEpIC8gMykpICsgKHRoaXMuaXNCZXR0aW5nID8gMCA6IDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGljZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoaXNbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoaXNbKytpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGhpc1srK2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuSGlzdG9yaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZE1ENS5Db2RlLkxPR19DSEFUOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kTUQ1LlJlY2VpdmVMb2dDaGF0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ3MgPSBKU09OLnBhcnNlKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NtZE1ENS5Db2RlLkxPR19DSEFUJywgbXNncyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbXNncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbENoYXQuYWRkTWVzc2FnZShtc2dzW2ldW1widVwiXSwgbXNnc1tpXVtcIm1cIl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxDaGF0LnNjcm9sbFRvQm90dG9tKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZE1ENS5Db2RlLlNFTkRfQ0hBVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZE1ENS5SZWNlaXZlU2VuZENoYXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbENoYXQuYWRkTWVzc2FnZShyZXMubmlja25hbWUsIHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkLhuqFuIGtow7RuZyBjw7MgcXV54buBbiBDaGF0IVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlThuqFtIHRo4budaSBi4bqhbiBi4buLIGPhuqVtIENoYXQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiTuG7mWkgZHVuZyBjaGF0IHF1w6EgZMOgaS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQuG6oW4ga2jDtG5nIHRo4buDIGNoYXQgdsOgbyBsw7pjIG7DoHkuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZE1ENS5Db2RlLkJFVDoge1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWRNRDUuUmVjZWl2ZUJldChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmJldGluZ0Rvb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBCZXREb29yLlRhaTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRUYWkgKz0gdGhpcy5iZXRpbmdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRUYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQmV0RG9vci5YaXU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkWGl1ICs9IHRoaXMuYmV0aW5nVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJldGVkWGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmJldGVkWGl1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLEkOG6t3QgY8aw4bujYyB0aMOgbmggY8O0bmcuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkjhur90IHRo4budaSBnaWFuIGPGsOG7o2MuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlPhu5EgZMawIGtow7RuZyDEkeG7pyB2dWkgbMOybmcgbuG6oXAgdGjDqm0uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIlPhu5EgdGnhu4FuIGPGsOG7o2Mga2jDtG5nIGjhu6NwIGzhu4cuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLEkOG6t3QgY8aw4bujYyBraMO0bmcgdGjDoG5oIGPDtG5nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW5wYWNrZXQuZ2V0Q21kSWQoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnNCZXQxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idXR0b25zQmV0MVtpXTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubGlzdEJldHNbaV07XG4gICAgICAgICAgICBsZXQgc3RyVmFsdWUgPSB2YWx1ZSArIFwiXCI7XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gMTAwMDAwMCkge1xuICAgICAgICAgICAgICAgIHN0clZhbHVlID0gKHZhbHVlIC8gMTAwMDAwMCkgKyBcIk1cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgICAgICAgICAgIHN0clZhbHVlID0gKHZhbHVlIC8gMTAwMCkgKyBcIktcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBzdHJWYWx1ZTtcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuTm9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGxldCBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gVXRpbHMuc3RyaW5nVG9JbnQobGJsQmV0LnN0cmluZykgKyB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyID4gdGhpcy5tYXhCZXRWYWx1ZSkgbnVtYmVyID0gdGhpcy5tYXhCZXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBsYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnV0dG9uc0JldDIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLmJ1dHRvbnNCZXQyW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gYnRuLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZztcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuTm9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGxldCBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtYmVyID0gVXRpbHMuc3RyaW5nVG9JbnQobGJsQmV0LnN0cmluZyArIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyID4gdGhpcy5tYXhCZXRWYWx1ZSkgbnVtYmVyID0gdGhpcy5tYXhCZXRWYWx1ZTtcbiAgICAgICAgICAgICAgICBsYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYm93bC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHtcbiAgICAgICAgICAgIGlmKCB0aGlzLmlzTmFuICYmICF0aGlzLmlzQmV0dGluZyAmJiB0aGlzLmJvd2wuYWN0aXZlKXtcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5ib3dsLnBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHBvcy54ICs9IGV2ZW50LmdldERlbHRhWCgpO1xuICAgICAgICAgICAgICAgIHBvcy55ICs9IGV2ZW50LmdldERlbHRhWSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYm93bC5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBVdGlscy52MkRpc3RhbmNlKHBvcywgdGhpcy5ib3dsU3RhcnRQb3MpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPiAyMjApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0dXNCbG93KFwiSElERVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1dpbkNhc2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5idXR0b25NaW5pR2FtZS5zaG93VGltZVRhaVhpdShmYWxzZSk7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWNlMS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpY2UyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCk7XG4gICAgICAgIGluc3RhbmNlLnNlbmQobmV3IGNtZE1ENS5TZW5kU2NyaWJlKCkpO1xuICAgICAgICB0aGlzLnNob3dDaGF0KCk7XG4gICAgfVxuXG4gICAgc2hvd0NoYXQoKSB7XG4gICAgICAgIHRoaXMucGFuZWxDaGF0ID0gdGhpcy5ub2RlUGFuZWxDaGF0LmdldENvbXBvbmVudChQYW5lbENoYXQpO1xuICAgICAgICB0aGlzLnBhbmVsQ2hhdC5zaG93KHRydWUpO1xuICAgIH1cblxuICAgIGNvcHlNZDVUZXh0KCl7XG4gICAgICAgIFxuICAgICAgICB2YXIgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRlbXAudmFsdWUgPSB0aGlzLmxibE1ENVRleHQuc3RyaW5nO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXApO1xuICAgICAgICB0ZW1wLnNlbGVjdCgpOyAvLyDpgInmi6nlr7nosaFcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJDb3B5XCIpOyAvLyDmiafooYzmtY/op4jlmajlpI3liLblkb3ku6RcbiAgICAgICAgdGVtcC5zdHlsZS5kaXNwbGF5PSdub25lJztcbiAgICAgICAgdGhpcy5zaG93VG9hc3QoXCLEkMOjIGNvcHkgY2h14buXaSBNRDUhXCIpO1xuICAgIH1cblxuICAgIGRpc21pc3MoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wb3B1cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFuZWxDaGF0LnNob3coZmFsc2UpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWRNRDUuU2VuZFVuU2NyaWJlKCkpO1xuICAgIH1cblxuICAgIGFjdENsb3NlKCkge1xuICAgICAgIFxuICAgICAgICBUYWlYaXVNRDVDT250cm9sZXIuaW5zdGFuY2UuZGlzbWlzcygpO1xuICAgIH1cblx0XG5cdGFjdFRyYW5zYWN0aW9uKCkge1xuICAgICAgICBpZiAoIUNvbmZpZ3MuTG9naW4uSXNMb2dpbikge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbmVlZF9sb2dpbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucG9wdXBUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgbGV0IGNiID0gKHByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwb3B1cERhaWx5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJMb2JieS5Qb3B1cFRyYW5zYWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5jYW52YXMuYWRkQ2hpbGQocG9wdXBEYWlseS5ub2RlKVxuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBUcmFuc2FjdGlvbiA9IHBvcHVwRGFpbHk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFRyYW5zYWN0aW9uLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYlBvcHVwKFwiUHJlZmFiUG9wdXAvUG9wdXBUcmFuc2FjdGlvblwiLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwVHJhbnNhY3Rpb24uc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgYWN0Q2hhdCgpIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGFuZWxDaGF0LnNob3coIXRoaXMucGFuZWxDaGF0Lm5vZGUuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBhY3RCZXRUYWkoKSB7XG4gICAgICAgXG4gICAgICAgIGlmICghdGhpcy5pc0JldHRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQ2jGsGEgxJHhur9uIHRo4budaSBnaWFuIMSR4bq3dCBjxrDhu6NjLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRpbmdWYWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkLhuqFuIHRoYW8gdMOhYyBxdcOhIG5oYW5oLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRlZFhpdSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQuG6oW4ga2jDtG5nIHRo4buDIMSR4bq3dCAyIGPhu61hLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJldGluZ0Rvb3IgPSBCZXREb29yLlRhaTtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwiXCI7XG5cdFx0dGhpcy54aXUxLmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy54aXUyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxheW91dEJldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheW91dEJldDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFjdEJldFhpdSgpIHtcbiAgICAgICBcbiAgICAgICAgaWYgKCF0aGlzLmlzQmV0dGluZykge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJDaMawYSDEkeG6v24gdGjhu51pIGdpYW4gxJHhurd0IGPGsOG7o2MuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJldGluZ1ZhbHVlID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQuG6oW4gdGhhbyB0w6FjIHF1w6EgbmhhbmguXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJldGVkVGFpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoXCJC4bqhbiBraMO0bmcgdGjhu4MgxJHhurd0IDIgY+G7rWEuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmV0aW5nRG9vciA9IEJldERvb3IuWGl1O1xuICAgICAgICB0aGlzLmxibEJldFhpdS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCJcIjtcblx0XHR0aGlzLnhpdTEuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy54aXUyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0MS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxheW91dEJldDIuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYWN0T3RoZXJOdW1iZXIoKSB7XG4gICAgICAgXG4gICAgICAgIHRoaXMubGF5b3V0QmV0MS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQyLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0QWdyZWUoKSB7XG4gICAgICAgXG4gICAgICAgIGlmICh0aGlzLmJldGluZ1ZhbHVlID49IDAgfHwgIXRoaXMuY2FuQmV0KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChcIkLhuqFuIHRoYW8gdMOhYyBxdcOhIG5oYW5oLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLk5vbmUpIHJldHVybjtcbiAgICAgICAgdmFyIGxibEJldCA9IHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5UYWkgPyB0aGlzLmxibEJldFRhaSA6IHRoaXMubGJsQmV0WGl1O1xuICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gVXRpbHMuc3RyaW5nVG9JbnQobGJsQmV0LnN0cmluZyk7XG4gICAgICAgIHRoaXMuYmV0aW5nRG9vciA9IHRoaXMuYmV0aW5nRG9vcjtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kTUQ1LlNlbmRCZXQodGhpcy5yZWZlcmVuY2VJZCwgdGhpcy5iZXRpbmdWYWx1ZSwgdGhpcy5iZXRpbmdEb29yID09IEJldERvb3IuVGFpID8gMSA6IDAsIHRoaXMucmVtYWluVGltZSkpO1xuICAgICAgICBsYmxCZXQuc3RyaW5nID0gXCJcIjtcblxuICAgICAgICB0aGlzLmNhbkJldCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNhbkJldCA9IHRydWU7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIGFjdENhbmNlbCgpIHtcbiAgICAgICBcbiAgICAgICAgdGhpcy5sYmxCZXRYaXUuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCJcIjtcblx0XHR0aGlzLnhpdTEuYWN0aXZlID0gZmFsc2U7XG5cdFx0dGhpcy54aXUyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJldGluZ0Rvb3IgPSBCZXREb29yLk5vbmU7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFjdEJ0bkdhcERvaSgpIHtcbiAgICAgICAgXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIGxldCBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcblxuICAgICAgICBsZXQgbnVtYmVyID0gVXRpbHMuc3RyaW5nVG9JbnQobGJsQmV0LnN0cmluZykgKyBDb25maWdzLkxvZ2luLkNvaW47XG4gICAgICAgIGlmIChudW1iZXIgPiB0aGlzLm1heEJldFZhbHVlKSBudW1iZXIgPSB0aGlzLm1heEJldFZhbHVlO1xuICAgICAgICBsYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG5cbiAgICB9XG5cblxuICAgIGFjdEJ0bkRlbGV0ZSgpIHtcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuTm9uZSkgcmV0dXJuO1xuICAgICAgICB2YXIgbGJsQmV0ID0gdGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLlRhaSA/IHRoaXMubGJsQmV0VGFpIDogdGhpcy5sYmxCZXRYaXU7XG4gICAgICAgIHZhciBudW1iZXIgPSBcIlwiICsgVXRpbHMuc3RyaW5nVG9JbnQobGJsQmV0LnN0cmluZyk7XG4gICAgICAgIG51bWJlciA9IG51bWJlci5zdWJzdHJpbmcoMCwgbnVtYmVyLmxlbmd0aCAtIDEpO1xuICAgICAgICBudW1iZXIgPSBVdGlscy5mb3JtYXROdW1iZXIoVXRpbHMuc3RyaW5nVG9JbnQobnVtYmVyKSk7XG4gICAgICAgIGxibEJldC5zdHJpbmcgPSBudW1iZXI7XG4gICAgfVxuXG4gICAgYWN0QnRuMDAwKCkge1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIHZhciBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgdmFyIG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcgKyBcIjAwMFwiKTtcbiAgICAgICAgaWYgKG51bWJlciA+IHRoaXMubWF4QmV0VmFsdWUpIG51bWJlciA9IHRoaXMubWF4QmV0VmFsdWU7XG4gICAgICAgIGxibEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIobnVtYmVyKTtcbiAgICB9XG5cbiAgICBhY3ROYW4oKSB7XG4gICAgICAgXG4gICAgICAgIHRoaXMuaXNOYW4gPSAhdGhpcy5pc05hbjtcbiAgICAgICAgdGhpcy5idG5OYW4uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmlzTmFuID8gdGhpcy5zcHJGcmFtZUJ0bk5hbjIgOiB0aGlzLnNwckZyYW1lQnRuTmFuO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1Jlc3VsdCgpIHtcbiAgICAgICAvLyBjb25zb2xlLmVycm9yKFwic2hvd1Jlc3VsdFwiKTtcbiAgICAgICB0aGlzLmxibE1ENVRleHQuc3RyaW5nID0gIHRoaXMubWQ1Q29kZVJlc3VsdDtcbiAgICAgICBcbiAgICAgICAgdGhpcy5sYmxTY29yZS5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibFNjb3JlLnN0cmluZyA9IFwiXCIgKyB0aGlzLmxhc3RTY29yZTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFNjb3JlID49IDExKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmVmdGFpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZWZ4aXUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGFpLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNwYXduKFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMC4zLCAxLjMpLCBjYy5zY2FsZVRvKDAuMywgMSkpLFxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKGNjLnRpbnRUbygwLjMsIDI1NSwgMjU1LCAwKSwgY2MudGludFRvKDAuMywgMjU1LCAyNTUsIDI1NSkpXG4gICAgICAgICAgICApKSk7XG4gICAgICAgICAgICB0aGlzLmVmdGFpLnNldEFuaW1hdGlvbigwLCBcInRhaVwiLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWZ0YWkubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5lZnhpdS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWZ4aXUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmVmdGFpLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnhpdS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zcGF3bihcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuMywgMS4zKSwgY2Muc2NhbGVUbygwLjMsIDEpKSxcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy50aW50VG8oMC4zLCAyNTUsIDI1NSwgMCksIGNjLnRpbnRUbygwLjMsIDI1NSwgMjU1LCAyNTUpKVxuICAgICAgICAgICAgKSkpO1xuICAgICAgICAgICAgdGhpcy5lZnhpdS5zZXRBbmltYXRpb24oMCwgXCJ4aXVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAvLyB0aGlzLmVmeGl1Lm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMuZWZ0YWkubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVCdG5IaXN0b3JpZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLmFyclRpbWVvdXREaWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hcnJUaW1lb3V0RGljZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJUaW1lb3V0RGljZSA9IFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcFdpbigpIHtcbiAgICAgICAgdGhpcy5lZnRhaS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVmeGl1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuZWZ0YWkubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuZWZ4aXUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudGFpLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMudGFpLnJ1bkFjdGlvbihjYy5zcGF3bihjYy5zY2FsZVRvKDAuMywgMSksIGNjLnRpbnRUbygwLjMsIDI1NSwgMjU1LCAyNTUpKSk7XG5cbiAgICAgICAgdGhpcy54aXUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy54aXUucnVuQWN0aW9uKGNjLnNwYXduKGNjLnNjYWxlVG8oMC4zLCAxKSwgY2MudGludFRvKDAuMywgMjU1LCAyNTUsIDI1NSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5sYmxUb2FzdC5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5sYmxUb2FzdC5ub2RlLnBhcmVudDtcbiAgICAgICAgcGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBwYXJlbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHBhcmVudC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgwLjIpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBwYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93V2luQ2FzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFdpbkNhc2ggPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIHRoaXMubGJsV2luQ2FzaC5ub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFdpbkNhc2gsIHRoaXMubGFzdFdpbkNhc2gsIDAuNSwgKG4pID0+IHsgcmV0dXJuIFwiK1wiICsgVXRpbHMuZm9ybWF0TnVtYmVyKG4pIH0pO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5zY2FsZVRvKDAuNSwgMSksXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMiksXG4gICAgICAgICAgICBjYy5tb3ZlQnkoMSwgY2MudjIoMCwgNjApKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICkpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgIH1cblxuICAgIHVwZGF0ZUJ0bkhpc3RvcmllcygpIHtcbiAgICAgICAgbGV0IGhpc3RvcmllcyA9IHRoaXMuaGlzdG9yaWVzLnNsaWNlKCk7XG4gICAgICAgIGlmIChoaXN0b3JpZXMubGVuZ3RoID4gdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5Db3VudCkge1xuICAgICAgICAgICAgaGlzdG9yaWVzLnNwbGljZSgwLCBoaXN0b3JpZXMubGVuZ3RoIC0gdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5Db3VudCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlkeCA9IGhpc3Rvcmllcy5sZW5ndGggLSAxO1xuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgX2lkeCA9IGlkeDtcbiAgICAgICAgICAgICAgICB2YXIgc2NvcmUgPSBoaXN0b3JpZXNbaWR4XVtcImRpY2VzXCJdWzBdICsgaGlzdG9yaWVzW2lkeF1bXCJkaWNlc1wiXVsxXSArIGhpc3Rvcmllc1tpZHhdW1wiZGljZXNcIl1bMl07XG4gICAgICAgICAgICAgICAgdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5baV0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzY29yZSA+PSAxMSA/IHRoaXMuc3ByRnJhbWVUYWkgOiB0aGlzLnNwckZyYW1lWGl1O1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLm9mZihcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWR4LS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kQ2hhdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFfdGhpcy5pc0NhbkNoYXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KFwiQuG6oW4gdGhhbyB0w6FjIHF1w6EgbmhhbmguXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmlzQ2FuQ2hhdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5pc0NhbkNoYXQgPSB0cnVlO1xuICAgICAgICB9LCAxKTtcbiAgICAgICAgdmFyIHJlcSA9IG5ldyBjbWRNRDUuU2VuZENoYXQodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UpKSk7XG4gICAgICAgIE1pbmlHYW1lTmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQocmVxKTtcbiAgICB9XG59Il19