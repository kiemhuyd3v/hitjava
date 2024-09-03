"use strict";
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