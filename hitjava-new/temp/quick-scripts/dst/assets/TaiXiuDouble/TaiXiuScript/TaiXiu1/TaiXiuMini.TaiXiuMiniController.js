
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.TaiXiuMiniController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61a68KC+wNE6ptrR7XUb9CZ', 'TaiXiuMini.TaiXiuMiniController');
// TaiXiuDouble/TaiXiuScript/TaiXiu1/TaiXiuMini.TaiXiuMiniController.ts

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
var Configs_1 = require("../../../Loading/src/Configs");
var App_1 = require("../../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var SPUtils_1 = require("../../../Lobby/LobbyScript/Script/common/SPUtils");
var Tween_1 = require("../../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../../Lobby/LobbyScript/Script/common/Utils");
var MiniGameNetworkClient_1 = require("../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient");
var Network_InPacket_1 = require("../../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var TaiXiuDouble_Controller_1 = require("../src/TaiXiuDouble.Controller");
var TaiXiuMini_Cmd_1 = require("./TaiXiuMini.Cmd");
var TaiXiuMini_PanelChat_1 = require("./TaiXiuMini.PanelChat");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BetDoor;
(function (BetDoor) {
    BetDoor[BetDoor["None"] = 0] = "None";
    BetDoor[BetDoor["Tai"] = 1] = "Tai";
    BetDoor[BetDoor["Xiu"] = 2] = "Xiu";
})(BetDoor || (BetDoor = {}));
var audio_clip;
(function (audio_clip) {
    audio_clip[audio_clip["WIN"] = 0] = "WIN";
    audio_clip[audio_clip["DICE"] = 1] = "DICE";
    audio_clip[audio_clip["CLOCK"] = 2] = "CLOCK";
})(audio_clip || (audio_clip = {}));
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
        ccclass("TaiXiuMini.TaiXiuMiniController.SoundManager")
    ], SoundManager);
    return SoundManager;
}());
exports.SoundManager = SoundManager;
var TaiXiuMiniController = /** @class */ (function (_super) {
    __extends(TaiXiuMiniController, _super);
    function TaiXiuMiniController() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.scrollChat = null;
        _this_1.chatNhanh = null;
        _this_1.contentChatNhanh = null;
        _this_1.bgSpine = null;
        _this_1.bgSpinez = null;
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
        _this_1.lblbtnbettai = null;
        _this_1.lblbtnbetxiu = null;
        _this_1.lblBetedTai = null;
        _this_1.lblBetedXiu = null;
        _this_1.dice1 = null;
        _this_1.dice2 = null;
        _this_1.dice3 = null;
        _this_1.effect = null;
        _this_1.bowl = null;
        _this_1.tai = null;
        _this_1.xiu = null;
        _this_1.btnHistories = null;
        _this_1.nodePanelChat = null;
        _this_1.layoutBet = null;
        _this_1.layoutBet1 = null;
        _this_1.buttonsBet1 = new Array();
        _this_1.lblToast = null;
        _this_1.lblWinCash = null;
        _this_1.btnNan = null;
        _this_1.popupContainer = null;
        _this_1.animJP = null;
        _this_1.lbJackPot = null;
        _this_1.lbJackPotTai = null;
        _this_1.lbJackPotXiu = null;
        _this_1.fontTime = [];
        _this_1.soundManager = null;
        _this_1.popups = [];
        _this_1.popupsPr = [];
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
        _this_1.listBets = [1000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
        _this_1.bowlStartPos = cc.v2(-252.562, 34.878);
        _this_1.currentBtnBet = null;
        _this_1.arrTimeoutDice = [];
        _this_1.popupHonor = null;
        _this_1.popupHistory = null;
        _this_1.popupGuide = null;
        _this_1.popupThanhDu = null;
        _this_1.popupSoiCau = null;
        _this_1.popupDetailSession = null;
        _this_1.sessionId = 0;
        _this_1.jackpotData = null;
        _this_1.resultData = null;
        return _this_1;
    }
    TaiXiuMiniController_1 = TaiXiuMiniController;
    TaiXiuMiniController.prototype.onLoad = function () {
        TaiXiuMiniController_1.instance = this;
        this.layoutBet.y = 28;
        var self = this;
        var _loop_1 = function () {
            var node = this_1.contentChatNhanh.children[i];
            node.on('click', function () {
                self.sendChat(node.children[0].getComponent(cc.Label).string);
                self.scrollChat.active = true;
                self.chatNhanh.active = false;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) {
            _loop_1();
        }
    };
    TaiXiuMiniController.prototype.toggleChatNhanh = function () {
        if (this.chatNhanh.active == false) {
            this.chatNhanh.active = true;
            this.scrollChat.active = false;
        }
        else {
            this.chatNhanh.active = false;
            this.scrollChat.active = true;
        }
    };
    TaiXiuMiniController.prototype.onDisable = function () {
        for (var i = 0; i < this.arrTimeoutDice.length; i++) {
            clearTimeout(this.arrTimeoutDice[i]);
        }
        this.arrTimeoutDice = [];
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
    TaiXiuMiniController.prototype.setupTimeRunInBg = function () {
        var _this_1 = this;
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (_this_1.node.active) {
                if (_this_1.arrTimeoutDice == null)
                    _this_1.arrTimeoutDice = [];
                for (var i = 0; i < _this_1.arrTimeoutDice.length; i++) {
                    clearTimeout(_this_1.arrTimeoutDice[i]);
                }
                var parent = _this_1.lblToast.node.parent;
                parent.stopAllActions();
                parent.active = false;
                parent.opacity = 0;
                _this_1.arrTimeoutDice = [];
            }
        });
    };
    ;
    TaiXiuMiniController.prototype.start = function () {
        var _this_1 = this;
        this.setupTimeRunInBg();
        MiniGameNetworkClient_1.default.getInstance().addListener(function (data) {
            if (!_this_1.node.active)
                return;
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case TaiXiuMini_Cmd_1.default.Code.GAME_INFO: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveGameInfo(data);
                    _this_1.stopWin();
                    _this_1.bowl.active = false;
                    if (res.bettingState) {
                        _this_1.isBetting = true;
                        _this_1.dice1.node.active = false;
                        _this_1.dice2.node.active = false;
                        _this_1.dice3.node.active = false;
                        _this_1.lblRemainTime.node.active = true;
                        _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
                        _this_1.lblRemainTime.font = res.remainTime < 10 ? _this_1.fontTime[1] : _this_1.fontTime[0];
                        _this_1.lblRemainTime2.node.parent.active = false;
                        _this_1.lblRemainTime2.node.active = false;
                        _this_1.lblScore.node.parent.active = false;
                        _this_1.lblScore.node.active = false;
                    }
                    else {
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
                        if (res.remainTime == 14) {
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_refund'));
                        }
                        var chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
                        _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(chipEnd);
                        _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(chipEnd);
                    }
                    else {
                        Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, 0.3);
                        Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, 0.3);
                    }
                    Tween_1.default.numberTo(_this_1.lbJackPotTai, res.jpTai + res.jpXiu, 1.0);
                    Tween_1.default.numberTo(_this_1.lbJackPotXiu, res.jpXiu, 1.0);
                    _this_1.betedTai = res.betTai;
                    _this_1.lblBetedTai.string = Utils_1.default.formatNumber(_this_1.betedTai);
                    _this_1.betedXiu = res.betXiu;
                    _this_1.lblBetedXiu.string = Utils_1.default.formatNumber(_this_1.betedXiu);
                    _this_1.referenceId = res.referenceId;
                    _this_1.lblSession.string = "#" + res.referenceId;
                    _this_1.sessionId = res.referenceId;
                    _this_1.remainTime = res.remainTime;
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.UPDATE_TIME: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveUpdateTime(data);
                    if (res.bettingState) {
                        if (res.remainTime == 60) {
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_new_session'));
                        }
                        _this_1.isBetting = true;
                        _this_1.lblRemainTime.node.active = true;
                        _this_1.lblRemainTime.string = res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
                        _this_1.lblRemainTime.font = res.remainTime < 10 ? _this_1.fontTime[1] : _this_1.fontTime[0];
                        _this_1.lblRemainTime2.node.parent.active = false;
                        _this_1.lblRemainTime2.node.active = false;
                        _this_1.lblScore.node.parent.active = false;
                        _this_1.lblScore.node.active = false;
                        // if (res.remainTime < 6) {
                        //     this.soundManager.playAudioEffect(audio_clip.CLOCK);
                        // }
                    }
                    else {
                        if (res.remainTime > 15) {
                            res.remainTime -= 15;
                        }
                        else {
                            res.remainTime = 0;
                        }
                        _this_1.isBetting = false;
                        // this.lblRemainTime.node.active = false;
                        // this.lblRemainTime2.node.parent.active = true;
                        // this.lblRemainTime2.node.active=true;
                        _this_1.lblRemainTime2.string = "" + (res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime);
                        // this.layoutBet.active = false;
                        // this.layoutBet.y = 28;
                        _this_1.lblbtnbetxiu.active = true;
                        _this_1.lblbtnbettai.active = true;
                        _this_1.lblBetTai.string = "";
                        _this_1.lblBetXiu.string = "";
                        if (res.remainTime < 5 && _this_1.isNan && !_this_1.isOpenBowl) {
                            _this_1.bowl.active = false;
                            _this_1.showResult();
                            _this_1.showWinCash();
                            _this_1.isOpenBowl = true;
                        }
                    }
                    if (!res.bettingState) {
                        if (res.remainTime == 14) {
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_refund'));
                        }
                        var chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
                        _this_1.lblTotalBetTai.string = Utils_1.default.formatNumber(chipEnd);
                        _this_1.lblTotalBetXiu.string = Utils_1.default.formatNumber(chipEnd);
                    }
                    else {
                        Tween_1.default.numberTo(_this_1.lblTotalBetTai, res.potTai, 0.3);
                        Tween_1.default.numberTo(_this_1.lblTotalBetXiu, res.potXiu, 0.3);
                    }
                    _this_1.lblUserTai.string = +Utils_1.default.formatNumber(res.numBetTai) + "";
                    _this_1.lblUserXiu.string = +Utils_1.default.formatNumber(res.numBetXiu) + "";
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.DICES_RESULT: {
                    _this_1.lblRemainTime.node.active = true;
                    _this_1.lblRemainTime2.node.parent.active = false;
                    _this_1.arrTimeoutDice.push(setTimeout(function () {
                        var self = _this_1;
                        var res = new TaiXiuMini_Cmd_1.default.ReceiveDicesResult(data);
                        _this_1.lastScore = res.dice1 + res.dice2 + res.dice3;
                        _this_1.lblRemainTime.node.active = false;
                        _this_1.arrTimeoutDice.push(setTimeout(function () {
                            self.dice1.node.active = true;
                            self.dice1.setAnimation(0, self.getAnimationDiceStart(res.dice1), false);
                        }, Math.random() * 0));
                        _this_1.arrTimeoutDice.push(setTimeout(function () {
                            self.dice2.node.active = true;
                            self.dice2.setAnimation(0, self.getAnimationDiceStart(res.dice2), false);
                        }, Math.random() * 0));
                        _this_1.arrTimeoutDice.push(setTimeout(function () {
                            self.dice3.node.active = true;
                            self.dice3.setAnimation(0, self.getAnimationDiceStart(res.dice3), false);
                        }, Math.random() * 0));
                        _this_1.effect.node.active = true;
                        _this_1.effect.setAnimation(0, "effect", false);
                        _this_1.arrTimeoutDice.push(setTimeout(function () {
                            if (self.isNan) {
                                self.bowl.setPosition(self.bowlStartPos);
                                self.bowl.active = true;
                            }
                        }, 1400));
                        _this_1.dice3.setCompleteListener(function () {
                            if (!_this_1.isNan) {
                                _this_1.lblRemainTime2.node.parent.active = true;
                                _this_1.lblRemainTime2.node.active = true;
                                _this_1.showResult();
                                //  cc.log("dice 3 run xong");
                                // this.jackpotData = JSON.parse(' {"_pos":22,"_data":{"0":1,"1":8,"2":151,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":2,"10":63,"11":197,"12":0,"13":0,"14":0,"15":0,"16":55,"17":21,"18":181,"19":238},"_length":20,"_controllerId":1,"_cmdId":2199,"_error":0,"jackpot":924169710,"nickname":"","idSession":147397}');
                                if (_this_1.jackpotData != null) {
                                    _this_1.handleJackpotWin(_this_1.jackpotData);
                                }
                            }
                        });
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
                        _this_1.arrTimeoutDice.push(setTimeout(function () {
                            if (_this_1.node) {
                                _this_1.soundManager.playAudioEffect(audio_clip.DICE);
                            }
                        }, 500));
                    }, 2000));
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.REFUND: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveRefund(data);
                    var refund = res.moneyRefund;
                    _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_refund1'));
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.RESULT: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveResult(data);
                    //  cc.log("RESULT TX:", res);
                    _this_1.resultData = res;
                    if (_this_1.jackpotData == null) {
                        _this_1.handleResult();
                    }
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.NEW_GAME: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveNewGame(data);
                    Utils_1.default.Log("NEW GAME TX:", res);
                    _this_1.dice1.node.active = false;
                    _this_1.dice2.node.active = false;
                    _this_1.dice3.node.active = false;
                    for (var i = 0; i < _this_1.arrTimeoutDice.length; i++) {
                        clearTimeout(_this_1.arrTimeoutDice[i]);
                    }
                    _this_1.arrTimeoutDice = [];
                    _this_1.lblTotalBetTai.string = "0";
                    _this_1.lblTotalBetXiu.string = "0";
                    _this_1.lblBetedTai.string = "0";
                    _this_1.lblBetedXiu.string = "0";
                    _this_1.lblUserTai.string = "0";
                    _this_1.lblUserXiu.string = "0";
                    _this_1.referenceId = res.referenceId;
                    _this_1.lblSession.string = "#" + res.referenceId;
                    _this_1.sessionId = res.referenceId;
                    _this_1.betingValue = -1;
                    _this_1.betingDoor = BetDoor.None;
                    _this_1.betedTai = 0;
                    _this_1.betedXiu = 0;
                    _this_1.isOpenBowl = false;
                    _this_1.lastWinCash = 0;
                    _this_1.jackpotData = null;
                    _this_1.resultData = null;
                    Tween_1.default.numberTo(_this_1.lbJackPotTai, res['jpTai'], 1.0);
                    Tween_1.default.numberTo(_this_1.lbJackPotXiu, res['jpXiu'], 1.0);
                    _this_1.stopWin();
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.HISTORIES: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveHistories(data);
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
                case TaiXiuMini_Cmd_1.default.Code.LOG_CHAT: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveLogChat(data);
                    var msgs = JSON.parse(res.message);
                    for (var i = 0; i < msgs.length; i++) {
                        _this_1.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
                    }
                    _this_1.panelChat.scrollToBottom();
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.SCRIBE_CHAT: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveLogChat(data);
                    var msgs = JSON.parse(res.message);
                    for (var i = 0; i < msgs.length; i++) {
                        _this_1.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
                    }
                    _this_1.panelChat.scrollToBottom();
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.SEND_CHAT: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveSendChat(data);
                    switch (res.error) {
                        case 0:
                            _this_1.panelChat.addMessage(res.nickname, res.message);
                            break;
                        case 2:
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error'));
                            break;
                        case 3:
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error1'));
                            break;
                        case 4:
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error2'));
                            break;
                        default:
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error3'));
                            break;
                    }
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.BET: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveBet(data);
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
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_bet_success'));
                            break;
                        case 2:
                            _this_1.betingValue = -1;
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
                            break;
                        case 3:
                            _this_1.betingValue = -1;
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
                            break;
                        case 4:
                            _this_1.betingValue = -1;
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_bet_error7'));
                            break;
                        default:
                            _this_1.betingValue = -1;
                            _this_1.showToast(App_1.default.instance.getTextLang('txt_bet_error2'));
                            break;
                    }
                    break;
                }
                case TaiXiuMini_Cmd_1.default.Code.JACKPOT: {
                    var res = new TaiXiuMini_Cmd_1.default.ReceiveJackpotWin(data);
                    Utils_1.default.Log("JACKPOT WIN:", JSON.stringify(res));
                    _this_1.jackpotData = res;
                    break;
                }
                default:
                    break;
            }
        }, this);
        var _loop_2 = function (i) {
            var btn = this_2.buttonsBet1[i];
            if (i == 0) {
                this_2.currentBtnBet = btn.node;
            }
            var value = this_2.listBets[i];
            var strValue = value + "";
            if (value >= 1000000) {
                strValue = (value / 1000000) + "M";
            }
            else if (value >= 1000) {
                strValue = (value / 1000) + "K";
            }
            // btn.getComponentInChildren(cc.Label).string = strValue;
            btn.node.on("click", function () {
                App_1.default.instance.showBgMiniGame("TaiXiu");
                if (_this_1.betingDoor === BetDoor.None)
                    return;
                if (_this_1.currentBtnBet != null) {
                    _this_1.currentBtnBet.color = cc.Color.WHITE;
                }
                _this_1.currentBtnBet = btn.node;
                _this_1.currentBtnBet.color = new cc.Color().fromHEX("#FFBE34");
                var lblBet = _this_1.betingDoor === BetDoor.Tai ? _this_1.lblBetTai : _this_1.lblBetXiu;
                var number = Utils_1.default.stringToInt(lblBet.string) + value;
                if (number > _this_1.maxBetValue)
                    number = _this_1.maxBetValue;
                lblBet.string = Utils_1.default.formatNumber(number);
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.buttonsBet1.length; i++) {
            _loop_2(i);
        }
        this.bowl.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos = _this_1.bowl.position;
            pos.x += event.getDeltaX();
            pos.y += event.getDeltaY();
            _this_1.bowl.position = pos;
            var distance = Utils_1.default.v2Distance(new cc.Vec2(pos.x, pos.y), _this_1.bowlStartPos);
            if (Math.abs(distance) > 400) {
                _this_1.bowl.active = false;
                _this_1.isOpenBowl = true;
                _this_1.showResult();
                _this_1.showWinCash();
            }
        }, this);
    };
    TaiXiuMiniController.prototype.show = function () {
        App_1.default.instance.showGameMini("TaiXiu");
        App_1.default.instance.buttonMiniGame.showTimeTaiXiu(false);
        this.layoutBet.active = true;
        cc.tween(this.layoutBet).to(0.5, { y: -167.461 }, { easing: cc.easing.sineOut }).start();
        this.lblToast.node.parent.active = false;
        this.lblWinCash.node.active = false;
        this.bowl.active = false;
        this.dice1.node.active = false;
        this.dice2.node.active = false;
        this.dice3.node.active = false;
        MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendScribe());
        this.showChat();
    };
    TaiXiuMiniController.prototype.showChat = function () {
        this.panelChat = this.nodePanelChat.getComponent(TaiXiuMini_PanelChat_1.default);
        this.panelChat.show(true);
    };
    TaiXiuMiniController.prototype.dismiss = function () {
        for (var i = 0; i < this.popups.length; i++) {
            this.popups[i].active = false;
        }
        if (this.panelChat != null) {
            this.panelChat.show(false);
            MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendUnScribe());
        }
    };
    TaiXiuMiniController.prototype.actClose = function () {
        TaiXiuDouble_Controller_1.default.instance.dismiss();
        this.lblbtnbetxiu.active = true;
        this.lblbtnbettai.active = true;
    };
    TaiXiuMiniController.prototype.actChat = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.panelChat.show(!this.panelChat.node.active);
    };
    TaiXiuMiniController.prototype.actBetTai = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (!this.isBetting) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
            return;
        }
        if (this.betingValue >= 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        if (this.betedXiu > 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error4'));
            return;
        }
        this.lblbtnbetxiu.active = true;
        this.lblbtnbettai.active = false;
        this.betingDoor = BetDoor.Tai;
        this.lblBetTai.string = "0";
        this.lblBetXiu.string = "";
        this.layoutBet.active = true;
        cc.tween(this.layoutBet).to(0.5, { y: -167.461 }, { easing: cc.easing.sineOut }).start();
        this.layoutBet1.active = true;
    };
    TaiXiuMiniController.prototype.actBetXiu = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (!this.isBetting) {
            this.showToast(App_1.default.instance.getTextLang('txt_bet_error3'));
            return;
        }
        if (this.betingValue >= 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        if (this.betedTai > 0) {
            this.showToast(App_1.default.instance.getTextLang('txt_taixiu_chat_error4'));
            return;
        }
        this.lblbtnbetxiu.active = false;
        this.lblbtnbettai.active = true;
        this.betingDoor = BetDoor.Xiu;
        this.lblBetXiu.string = "0";
        this.lblBetTai.string = "";
        this.layoutBet.active = true;
        cc.tween(this.layoutBet).to(0.5, { y: -167.461 }, { easing: cc.easing.sineOut }).start();
        this.layoutBet1.active = true;
    };
    TaiXiuMiniController.prototype.actOtherNumber = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.layoutBet1.active = false;
    };
    TaiXiuMiniController.prototype.actAgree = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingValue >= 0 || !this.canBet) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        this.betingValue = Utils_1.default.stringToInt(lblBet.string);
        //this.lblbtnbetxiu.active = true;
        //this.lblbtnbettai.active = true;
        this.betingDoor = this.betingDoor;
        MiniGameNetworkClient_1.default.getInstance().send(new TaiXiuMini_Cmd_1.default.SendBet(this.referenceId, this.betingValue, this.betingDoor == BetDoor.Tai ? 1 : 0, this.remainTime));
        lblBet.string = "0";
        this.canBet = false;
        this.scheduleOnce(function () {
            this.canBet = true;
        }, 1);
    };
    TaiXiuMiniController.prototype.actCancel = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.lblBetXiu.string = "";
        this.lblBetTai.string = "";
        this.lblbtnbetxiu.active = true;
        this.lblbtnbettai.active = true;
        this.betingDoor = BetDoor.None;
        this.layoutBet.active = false;
        this.layoutBet.y = 28;
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
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = "" + Utils_1.default.stringToInt(lblBet.string);
        number = number.substring(0, number.length - 1);
        number = Utils_1.default.formatNumber(Utils_1.default.stringToInt(number));
        lblBet.string = number;
    };
    TaiXiuMiniController.prototype.actBtn000 = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None)
            return;
        var lblBet = this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        var number = Utils_1.default.stringToInt(lblBet.string + "000");
        if (number > this.maxBetValue)
            number = this.maxBetValue;
        lblBet.string = Utils_1.default.formatNumber(number);
    };
    TaiXiuMiniController.prototype.actNan = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        this.isNan = !this.isNan;
        this.btnNan.getComponent(cc.Sprite).spriteFrame = this.isNan ? this.sprFrameBtnNan2 : this.sprFrameBtnNan;
    };
    TaiXiuMiniController.prototype.actPopupHonor = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.popupHonor == null) {
            this.popupHonor = cc.instantiate(this.popupsPr[0]).getComponent("TaiXiuMini.PopupHonors");
            this.popupHonor.node.parent = this.popupContainer;
            this.popupHonor.show();
            this.popups.push(this.popupHonor.node);
            App_1.default.instance.showLoading(false);
        }
        else {
            this.popupHonor.show();
        }
    };
    TaiXiuMiniController.prototype.actPopupHistory = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.popupHistory == null) {
            this.popupHistory = cc.instantiate(this.popupsPr[1]).getComponent("TaiXiuMini.PopupHistory");
            this.popupHistory.node.parent = this.popupContainer;
            this.popupHistory.show();
            this.popups.push(this.popupHistory.node);
            App_1.default.instance.showLoading(false);
        }
        else {
            this.popupHistory.show();
        }
    };
    TaiXiuMiniController.prototype.actPopupGuide = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.popupGuide == null) {
            this.popupGuide = cc.instantiate(this.popupsPr[4]).getComponent("Dialog");
            this.popupGuide.node.parent = this.popupContainer;
            this.popupGuide.show();
            this.popups.push(this.popupGuide.node);
            App_1.default.instance.showLoading(false);
        }
        else {
            this.popupGuide.show();
        }
    };
    TaiXiuMiniController.prototype.actPopupSoiCau = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.popupSoiCau == null) {
            this.popupSoiCau = cc.instantiate(this.popupsPr[3]).getComponent("TaiXiuMini.PopupSoiCau");
            this.popupSoiCau.node.parent = this.popupContainer;
            this.popupSoiCau.show();
            this.popups.push(this.popupSoiCau.node);
            App_1.default.instance.showLoading(false);
        }
        else {
            this.popupSoiCau.show();
        }
    };
    TaiXiuMiniController.prototype.actPopupThanhDu = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.popupThanhDu == null) {
            this.popupThanhDu = cc.instantiate(this.popupsPr[5]).getComponent("TaiXiuMini.PopupThanhDu");
            this.popupThanhDu.node.parent = this.popupContainer;
            this.popupThanhDu.show();
            this.popups.push(this.popupThanhDu.node);
            App_1.default.instance.showLoading(false);
        }
        else {
            this.popupThanhDu.show();
        }
    };
    TaiXiuMiniController.prototype.actPopupHistorySession = function () {
        App_1.default.instance.showBgMiniGame("TaiXiu");
        if (this.popupDetailSession == null) {
            this.popupDetailSession = cc.instantiate(this.popupsPr[2]).getComponent("TaiXiuMini.PopupDetailHistory");
            this.popupDetailSession.node.parent = this.popupContainer;
            this.popupDetailSession.showDetail(this.sessionId - 1);
            this.popups.push(this.popupDetailSession.node);
            App_1.default.instance.showLoading(false);
        }
        else {
            this.popupDetailSession.showDetail(this.sessionId - 1);
        }
    };
    TaiXiuMiniController.prototype.showResult = function () {
        this.lblScore.node.parent.active = false;
        this.lblScore.node.active = false;
        this.lblScore.string = "" + this.lastScore;
        // this.bgSpine.node.active = true;
        if (this.lastScore >= 11) {
            this.bgSpine.node.active = true;
            // this.bgSpine.node.parent.getChildByName("text").active = false;
        }
        else {
            this.bgSpinez.node.active = true;
            // this.bgSpine.node.parent.getChildByName("text").active = false;
        }
        this.updateBtnHistories();
        for (var i = 0; i < this.arrTimeoutDice.length; i++) {
            clearTimeout(this.arrTimeoutDice[i]);
        }
        this.arrTimeoutDice = [];
    };
    TaiXiuMiniController.prototype.stopWin = function () {
        this.bgSpine.node.active = false;
        this.bgSpinez.node.active = false;
        this.bgSpine.node.parent.getChildByName("text").active = true;
        // this.tai.stopAllActions();
        // this.tai.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
        // this.xiu.stopAllActions();
        // this.xiu.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
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
        this.soundManager.playAudioEffect(audio_clip.WIN);
        this.lblWinCash.node.stopAllActions();
        this.lblWinCash.node.active = true;
        this.lblWinCash.node.scale = 0;
        // this.lblWinCash.node.setPosition(cc.Vec2.ZERO);
        Tween_1.default.numberTo(this.lblWinCash, this.lastWinCash, 0.5, function (n) { return "+" + Utils_1.default.formatNumber(n); });
        this.lblWinCash.node.runAction(cc.sequence(cc.scaleTo(0.5, 1), cc.delayTime(2), cc.moveBy(1, cc.v2(0, 60)), cc.callFunc(function () {
            _this_1.lblWinCash.node.active = false;
        })));
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
    };
    TaiXiuMiniController.prototype.updateBtnHistories = function () {
        var _this_1 = this;
        var histories = this.histories.slice();
        if (histories.length > this.btnHistories.childrenCount) {
            histories.splice(0, histories.length - this.btnHistories.childrenCount);
        }
        var idx = histories.length - 1;
        var _loop_3 = function () {
            if (idx >= 0) {
                var _idx_1 = idx;
                score = histories[idx]["dices"][0] + histories[idx]["dices"][1] + histories[idx]["dices"][2];
                this_3.btnHistories.children[i].getComponent(cc.Sprite).spriteFrame = score >= 11 ? this_3.sprFrameTai : this_3.sprFrameXiu;
                this_3.btnHistories.children[i].off("click");
                this_3.btnHistories.children[i].on("click", function (e, b) {
                    _this_1.popupDetailSession.showDetail(histories[_idx_1]["session"]);
                });
                this_3.btnHistories.children[i].active = true;
            }
            else {
                this_3.btnHistories.children[i].active = false;
            }
            idx--;
        };
        var this_3 = this, score;
        for (var i = this.btnHistories.childrenCount - 1; i >= 0; i--) {
            _loop_3();
        }
    };
    TaiXiuMiniController.prototype.sendChat = function (message) {
        var _this = this;
        if (!_this.isCanChat) {
            this.showToast(App_1.default.instance.getTextLang('txt_notify_fast_action'));
            return;
        }
        _this.isCanChat = false;
        this.scheduleOnce(function () {
            _this.isCanChat = true;
        }, 1);
        var req = new TaiXiuMini_Cmd_1.default.SendChat(unescape(encodeURIComponent(message)));
        MiniGameNetworkClient_1.default.getInstance().send(req);
    };
    TaiXiuMiniController.prototype.handleJackpotWin = function (res) {
        var _this_1 = this;
        this.animJP.node.active = true;
        this.lbJackPot.string = "0";
        //  cc.log("jackpot==" + res['jackpot']);
        Tween_1.default.numberTo(this.lbJackPot, res['jackpot'], 3.0);
        this.scheduleOnce(function () {
            _this_1.animJP.node.active = false;
            _this_1.bowl.active = false;
            if (_this_1.resultData != null) {
                _this_1.handleResult();
            }
        }, 4.0);
    };
    TaiXiuMiniController.prototype.handleResult = function () {
        Configs_1.default.Login.Coin = this.resultData.currentMoney;
        this.lastWinCash = this.resultData.totalMoney;
        if (!this.bowl.active) {
            if (this.resultData.totalMoney > 0)
                this.showWinCash();
        }
    };
    var TaiXiuMiniController_1;
    TaiXiuMiniController.instance = null;
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "scrollChat", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "chatNhanh", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "contentChatNhanh", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "bgSpine", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "bgSpinez", void 0);
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
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "lblbtnbettai", void 0);
    __decorate([
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "lblbtnbetxiu", void 0);
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
        property([cc.Button])
    ], TaiXiuMiniController.prototype, "buttonsBet1", void 0);
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
        property(cc.Node)
    ], TaiXiuMiniController.prototype, "popupContainer", void 0);
    __decorate([
        property(sp.Skeleton)
    ], TaiXiuMiniController.prototype, "animJP", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lbJackPot", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lbJackPotTai", void 0);
    __decorate([
        property(cc.Label)
    ], TaiXiuMiniController.prototype, "lbJackPotXiu", void 0);
    __decorate([
        property([cc.BitmapFont])
    ], TaiXiuMiniController.prototype, "fontTime", void 0);
    __decorate([
        property(SoundManager)
    ], TaiXiuMiniController.prototype, "soundManager", void 0);
    __decorate([
        property([cc.Node])
    ], TaiXiuMiniController.prototype, "popups", void 0);
    __decorate([
        property([cc.Prefab])
    ], TaiXiuMiniController.prototype, "popupsPr", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGFpWGl1RG91YmxlXFxUYWlYaXVTY3JpcHRcXFRhaVhpdTFcXFRhaVhpdU1pbmkuVGFpWGl1TWluaUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUFtRDtBQUNuRCxvRUFBK0Q7QUFDL0QsZ0dBQTJGO0FBRTNGLDRFQUF1RTtBQUN2RSx3RUFBbUU7QUFDbkUsd0VBQW1FO0FBQ25FLDBHQUFxRztBQUNyRyxnR0FBbUY7QUFFbkYsMEVBQW9FO0FBQ3BFLG1EQUFtQztBQUNuQywrREFBK0M7QUFNekMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxPQUVKO0FBRkQsV0FBSyxPQUFPO0lBQ1IscUNBQUksQ0FBQTtJQUFFLG1DQUFHLENBQUE7SUFBRSxtQ0FBRyxDQUFBO0FBQ2xCLENBQUMsRUFGSSxPQUFPLEtBQVAsT0FBTyxRQUVYO0FBQ0QsSUFBSyxVQUlKO0FBSkQsV0FBSyxVQUFVO0lBQ1gseUNBQU8sQ0FBQTtJQUNQLDJDQUFRLENBQUE7SUFDUiw2Q0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQUpJLFVBQVUsS0FBVixVQUFVLFFBSWQ7QUFFRDtJQUFBO1FBRUksYUFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGFBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGNBQVMsR0FBbUIsRUFBRSxDQUFDO0lBUW5DLENBQUM7SUFQRyxzQ0FBZSxHQUFmLFVBQWdCLFVBQVU7UUFDdEIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FB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QUMsUUFBUSxDQUFDO3dEQUNLO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDVztJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzhEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzBEQUNLO0lBRy9CO1FBREMsUUFBUSxDQUFDLFlBQVksQ0FBQzs4REFDVztJQUdsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3REFDVTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzswREFDWTtJQTFHakIsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0EwN0J4QztJQUFELDJCQUFDO0NBMTdCRCxBQTA3QkMsQ0ExN0JpRCxFQUFFLENBQUMsU0FBUyxHQTA3QjdEO2tCQTE3Qm9CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gXCIuLi8uLi8uLi9Mb2FkaW5nL3NyYy9CdW5kbGVDb250cm9sXCI7XG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHBcIjtcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ccm9hZGNhc3RSZWNlaXZlclwiO1xuaW1wb3J0IFNjcm9sbFZpZXdDb250cm9sIGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1Njcm9sbFZpZXdDb250cm9sXCI7XG5pbXBvcnQgU1BVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9TUFV0aWxzXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IE1pbmlHYW1lTmV0d29ya0NsaWVudCBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL01pbmlHYW1lTmV0d29ya0NsaWVudFwiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFJlcyBmcm9tIFwiLi4vLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvVGllbkxlblNjcmlwdC9UaWVuTGVuLlJlc1wiO1xuaW1wb3J0IFRhaVhpdURvdWJsZUNvbnRyb2xsZXIgZnJvbSBcIi4uL3NyYy9UYWlYaXVEb3VibGUuQ29udHJvbGxlclwiO1xuaW1wb3J0IGNtZCBmcm9tIFwiLi9UYWlYaXVNaW5pLkNtZFwiO1xuaW1wb3J0IFBhbmVsQ2hhdCBmcm9tIFwiLi9UYWlYaXVNaW5pLlBhbmVsQ2hhdFwiO1xuaW1wb3J0IFBvcHVwRGV0YWlsSGlzdG9yeSBmcm9tIFwiLi9UYWlYaXVNaW5pLlBvcHVwRGV0YWlsSGlzdG9yeVwiO1xuaW1wb3J0IFRhaVhpdU1pbmlQb3B1cEhpc3RvcnkgZnJvbSBcIi4vVGFpWGl1TWluaS5Qb3B1cEhpc3RvcnlcIjtcbmltcG9ydCBUYWlYaXVNaW5pUG9wdXBIb25vcnMgZnJvbSBcIi4vVGFpWGl1TWluaS5Qb3B1cEhvbm9yc1wiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gQmV0RG9vciB7XG4gICAgTm9uZSwgVGFpLCBYaXVcbn1cbmVudW0gYXVkaW9fY2xpcCB7XG4gICAgV0lOID0gMCxcbiAgICBESUNFID0gMSxcbiAgICBDTE9DSyA9IDIsXG59XG5AY2NjbGFzcyhcIlRhaVhpdU1pbmkuVGFpWGl1TWluaUNvbnRyb2xsZXIuU291bmRNYW5hZ2VyXCIpXG5leHBvcnQgY2xhc3MgU291bmRNYW5hZ2VyIHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlU2VsZjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdGFpeGl1VmlldzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQXVkaW9Tb3VyY2UpXG4gICAgZWZmU291bmQ6IGNjLkF1ZGlvU291cmNlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuQXVkaW9DbGlwXSlcbiAgICBsaXN0QXVkaW86IGNjLkF1ZGlvQ2xpcFtdID0gW107XG4gICAgcGxheUF1ZGlvRWZmZWN0KGluZGV4QXVkaW8pIHtcbiAgICAgICAgaWYgKHRoaXMudGFpeGl1Vmlldy5hY3RpdmUgJiYgU1BVdGlscy5nZXRTb3VuZFZvbHVtbigpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lZmZTb3VuZC5jbGlwID0gdGhpcy5saXN0QXVkaW9baW5kZXhBdWRpb107XG4gICAgICAgICAgICB0aGlzLmVmZlNvdW5kLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhaVhpdU1pbmlDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBpbnN0YW5jZTogVGFpWGl1TWluaUNvbnRyb2xsZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHNjcm9sbENoYXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNoYXROaGFuaDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgY29udGVudENoYXROaGFuaDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGJnU3BpbmU6IHNwLlNrZWxldG9uID0gbnVsbDtcblx0QHByb3BlcnR5KHNwLlNrZWxldG9uKVxuICAgIGJnU3BpbmV6OiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIHNwckRpY2VzOiBBcnJheTxjYy5TcHJpdGVGcmFtZT4gPSBuZXcgQXJyYXk8Y2MuU3ByaXRlRnJhbWU+KCk7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lVGFpOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lWGl1OiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lQnRuTmFuOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHNwckZyYW1lQnRuTmFuMjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxTZXNzaW9uOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFJlbWFpblRpbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsUmVtYWluVGltZTI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsU2NvcmU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsVXNlclRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxVc2VyWGl1OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0VGFpOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0WGl1OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldFRhaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxCZXRYaXU6IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJsYnRuYmV0dGFpOiBjYy5Ob2RlID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGJsYnRuYmV0eGl1OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0ZWRUYWk6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsQmV0ZWRYaXU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZGljZTE6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZGljZTI6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgZGljZTM6IHNwLlNrZWxldG9uID0gbnVsbDtcblx0QHByb3BlcnR5KHNwLlNrZWxldG9uKVxuXHRlZmZlY3Q6IHNwLlNrZWxldG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib3dsOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0YWk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHhpdTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYnRuSGlzdG9yaWVzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlUGFuZWxDaGF0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsYXlvdXRCZXQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxheW91dEJldDE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbY2MuQnV0dG9uXSlcbiAgICBidXR0b25zQmV0MTogQXJyYXk8Y2MuQnV0dG9uPiA9IG5ldyBBcnJheTxjYy5CdXR0b24+KCk7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvYXN0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFdpbkNhc2g6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBidG5OYW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgYW5pbUpQOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSmFja1BvdDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSmFja1BvdFRhaTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxiSmFja1BvdFhpdTogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFtjYy5CaXRtYXBGb250XSlcbiAgICBmb250VGltZTogY2MuQml0bWFwRm9udFtdID0gW107XG5cbiAgICBAcHJvcGVydHkoU291bmRNYW5hZ2VyKVxuICAgIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgcHVibGljIHBvcHVwczogY2MuTm9kZVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gICAgcHVibGljIHBvcHVwc1ByOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBpc0JldHRpbmcgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlbWFpblRpbWUgPSAwO1xuICAgIHByaXZhdGUgY2FuQmV0ID0gdHJ1ZTtcbiAgICBwcml2YXRlIGJldGVkVGFpID0gMDtcbiAgICBwcml2YXRlIGJldGVkWGl1ID0gMDtcbiAgICBwcml2YXRlIHJlZmVyZW5jZUlkID0gMDtcbiAgICBwcml2YXRlIGJldGluZ1ZhbHVlID0gLTE7XG4gICAgcHJpdmF0ZSBiZXRpbmdEb29yID0gQmV0RG9vci5Ob25lO1xuICAgIHByaXZhdGUgaXNPcGVuQm93bCA9IGZhbHNlO1xuICAgIHByaXZhdGUgbGFzdFdpbkNhc2ggPSAwO1xuICAgIHByaXZhdGUgbGFzdFNjb3JlID0gMDtcbiAgICBwcml2YXRlIGlzTmFuID0gZmFsc2U7XG4gICAgaGlzdG9yaWVzID0gW107XG4gICAgcHJpdmF0ZSBpc0NhbkNoYXQgPSB0cnVlO1xuICAgIHByaXZhdGUgcGFuZWxDaGF0OiBQYW5lbENoYXQgPSBudWxsO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbWF4QmV0VmFsdWUgPSA5OTk5OTk5OTk7XG4gICAgcHJpdmF0ZSBsaXN0QmV0cyA9IFsxMDAwLCAxMDAwMCwgNTAwMDAsIDEwMDAwMCwgNTAwMDAwLCAxMDAwMDAwLCA1MDAwMDAwLCAxMDAwMDAwMF07XG4gICAgcHJpdmF0ZSByZWFkb25seSBib3dsU3RhcnRQb3MgPSBjYy52MigtMjUyLjU2MiwgMzQuODc4KTtcbiAgICBwcml2YXRlIGN1cnJlbnRCdG5CZXQgPSBudWxsO1xuICAgIHByaXZhdGUgYXJyVGltZW91dERpY2UgPSBbXTtcbiAgICBwcml2YXRlIHBvcHVwSG9ub3I6IFRhaVhpdU1pbmlQb3B1cEhvbm9ycyA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3B1cEhpc3Rvcnk6IFRhaVhpdU1pbmlQb3B1cEhpc3RvcnkgPSBudWxsO1xuICAgIHByaXZhdGUgcG9wdXBHdWlkZSA9IG51bGw7XG5cdHByaXZhdGUgcG9wdXBUaGFuaER1ID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwU29pQ2F1ID0gbnVsbDtcbiAgICBwcml2YXRlIHBvcHVwRGV0YWlsU2Vzc2lvbiA9IG51bGw7XG4gICAgcHJpdmF0ZSBzZXNzaW9uSWQgPSAwO1xuICAgIHByaXZhdGUgamFja3BvdERhdGEgPSBudWxsO1xuICAgIHByaXZhdGUgcmVzdWx0RGF0YSA9IG51bGw7XG4gICAgb25Mb2FkKCkge1xuICAgICAgICBUYWlYaXVNaW5pQ29udHJvbGxlci5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LnkgPSAyODtcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Q2hhdE5oYW5oLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmNvbnRlbnRDaGF0TmhhbmguY2hpbGRyZW5baV07XG4gICAgICAgICAgICBub2RlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnNlbmRDaGF0KG5vZGUuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2Nyb2xsQ2hhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhdE5oYW5oLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUNoYXROaGFuaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhdE5oYW5oLmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5jaGF0TmhhbmguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQ2hhdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhdE5oYW5oLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxDaGF0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFyclRpbWVvdXREaWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hcnJUaW1lb3V0RGljZVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcnJUaW1lb3V0RGljZSA9IFtdO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbkRpY2VTdGFydChkaWNlKSB7XG4gICAgICAgIHZhciBhbmltID0gXCJcIjtcbiAgICAgICAgaWYgKGRpY2UgPT0gMSkgYW5pbSA9IFwieGkgbmdhdSBiYXkgMVwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDIpIGFuaW0gPSBcInhpIG5nYXUgYmF5IDJcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSAzKSBhbmltID0gXCJ4aSBuZ2F1IGJheSAzXCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gNCkgYW5pbSA9IFwieGkgbmdhdSBiYXkgNFwiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDUpIGFuaW0gPSBcInhpIG5nYXUgYmF5IDVcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSA2KSBhbmltID0gXCJ4aSBuZ2F1IGJheSA2XCI7XG4gICAgICAgIHJldHVybiBhbmltO1xuICAgIH1cblxuICAgIGdldEFuaW1hdGlvbkRpY2VFbmQoZGljZSkge1xuICAgICAgICB2YXIgYW5pbSA9IFwiXCI7XG4gICAgICAgIGlmIChkaWNlID09IDEpIGFuaW0gPSBcIjFcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSAyKSBhbmltID0gXCIyXCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gMykgYW5pbSA9IFwiM1wiO1xuICAgICAgICBlbHNlIGlmIChkaWNlID09IDQpIGFuaW0gPSBcIjRcIjtcbiAgICAgICAgZWxzZSBpZiAoZGljZSA9PSA1KSBhbmltID0gXCI1XCI7XG4gICAgICAgIGVsc2UgaWYgKGRpY2UgPT0gNikgYW5pbSA9IFwiNlwiO1xuICAgICAgICByZXR1cm4gYW5pbTtcbiAgICB9XG4gICAgb25Gb2N1c0luRWRpdG9yKCkge1xuICAgICAgICAvLyAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xuICAgIH1cblxuICAgIHNldHVwVGltZVJ1bkluQmcoKSB7XG5cblxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcnJUaW1lb3V0RGljZSA9PSBudWxsKSB0aGlzLmFyclRpbWVvdXREaWNlID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFyclRpbWVvdXREaWNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFyclRpbWVvdXREaWNlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMubGJsVG9hc3Qubm9kZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgcGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgcGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHBhcmVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFyclRpbWVvdXREaWNlID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2V0dXBUaW1lUnVuSW5CZygpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRMaXN0ZW5lcigoZGF0YTogVWludDhBcnJheSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuYWN0aXZlKSByZXR1cm47XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuR0FNRV9JTkZPOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVHYW1lSW5mbyhkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wV2luKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm93bC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5iZXR0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCZXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUuc3RyaW5nID0gcmVzLnJlbWFpblRpbWUgPCAxMCA/IFwiMFwiICsgcmVzLnJlbWFpblRpbWUgOiBcIlwiICsgcmVzLnJlbWFpblRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUuZm9udCA9IHJlcy5yZW1haW5UaW1lIDwgMTAgPyB0aGlzLmZvbnRUaW1lWzFdIDogdGhpcy5mb250VGltZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNjb3JlLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTY29yZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RTY29yZSA9IHJlcy5kaWNlMSArIHJlcy5kaWNlMiArIHJlcy5kaWNlMztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCZXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTEuc2V0QW5pbWF0aW9uKDAsIHRoaXMuZ2V0QW5pbWF0aW9uRGljZUVuZChyZXMuZGljZTEpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTIuc2V0QW5pbWF0aW9uKDAsIHRoaXMuZ2V0QW5pbWF0aW9uRGljZUVuZChyZXMuZGljZTIpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMuc2V0QW5pbWF0aW9uKDAsIHRoaXMuZ2V0QW5pbWF0aW9uRGljZUVuZChyZXMuZGljZTMpLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUyLnN0cmluZyA9IFwiXCIgKyAocmVzLnJlbWFpblRpbWUgPCAxMCA/IFwiMFwiICsgcmVzLnJlbWFpblRpbWUgOiBcIlwiICsgcmVzLnJlbWFpblRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXMuYmV0dGluZ1N0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlbWFpblRpbWUgPT0gMTQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90YWl4aXVfcmVmdW5kJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNoaXBFbmQgPSByZXMucG90VGFpID4gcmVzLnBvdFhpdSA/IHJlcy5wb3RYaXUgOiByZXMucG90VGFpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFRhaS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoY2hpcEVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFRvdGFsQmV0WGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihjaGlwRW5kKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXRUYWksIHJlcy5wb3RUYWksIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0WGl1LCByZXMucG90WGl1LCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJKYWNrUG90VGFpLCByZXMuanBUYWkgKyByZXMuanBYaXUsIDEuMCk7XG4gICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJKYWNrUG90WGl1LCByZXMuanBYaXUsIDEuMCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRUYWkgPSByZXMuYmV0VGFpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJldGVkVGFpLnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmJldGVkVGFpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRlZFhpdSA9IHJlcy5iZXRYaXU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRYaXUuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRYaXUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyByZXMucmVmZXJlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbklkID0gcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbWFpblRpbWUgPSByZXMucmVtYWluVGltZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX1RJTUU6IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlVXBkYXRlVGltZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5iZXR0aW5nU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVtYWluVGltZSA9PSA2MCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9uZXdfc2Vzc2lvbicpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNCZXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUuc3RyaW5nID0gcmVzLnJlbWFpblRpbWUgPCAxMCA/IFwiMFwiICsgcmVzLnJlbWFpblRpbWUgOiBcIlwiICsgcmVzLnJlbWFpblRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUuZm9udCA9IHJlcy5yZW1haW5UaW1lIDwgMTAgPyB0aGlzLmZvbnRUaW1lWzFdIDogdGhpcy5mb250VGltZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUyLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNjb3JlLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxTY29yZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAocmVzLnJlbWFpblRpbWUgPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5zb3VuZE1hbmFnZXIucGxheUF1ZGlvRWZmZWN0KGF1ZGlvX2NsaXAuQ0xPQ0spO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlbWFpblRpbWUgPiAxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5yZW1haW5UaW1lIC09IDE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMucmVtYWluVGltZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQmV0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxibFJlbWFpblRpbWUyLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxibFJlbWFpblRpbWUyLm5vZGUuYWN0aXZlPXRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUyLnN0cmluZyA9IFwiXCIgKyAocmVzLnJlbWFpblRpbWUgPCAxMCA/IFwiMFwiICsgcmVzLnJlbWFpblRpbWUgOiBcIlwiICsgcmVzLnJlbWFpblRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxheW91dEJldC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sYXlvdXRCZXQueSA9IDI4O1xuXHRcdFx0XHRcdFx0dGhpcy5sYmxidG5iZXR4aXUuYWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLmxibGJ0bmJldHRhaS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVtYWluVGltZSA8IDUgJiYgdGhpcy5pc05hbiAmJiAhdGhpcy5pc09wZW5Cb3dsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1dpbkNhc2goKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbkJvd2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzLmJldHRpbmdTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZW1haW5UaW1lID09IDE0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdGFpeGl1X3JlZnVuZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGlwRW5kID0gcmVzLnBvdFRhaSA+IHJlcy5wb3RYaXUgPyByZXMucG90WGl1IDogcmVzLnBvdFRhaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKGNoaXBFbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxUb3RhbEJldFhpdS5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIoY2hpcEVuZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0VGFpLCByZXMucG90VGFpLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldFhpdSwgcmVzLnBvdFhpdSwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFVzZXJUYWkuc3RyaW5nID0gKyBVdGlscy5mb3JtYXROdW1iZXIocmVzLm51bUJldFRhaSkgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFVzZXJYaXUuc3RyaW5nID0gKyBVdGlscy5mb3JtYXROdW1iZXIocmVzLm51bUJldFhpdSkgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5ESUNFU19SRVNVTFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUaW1lb3V0RGljZS5wdXNoKHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZURpY2VzUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0U2NvcmUgPSByZXMuZGljZTEgKyByZXMuZGljZTIgKyByZXMuZGljZTM7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFJlbWFpblRpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUaW1lb3V0RGljZS5wdXNoKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGljZTEubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGljZTEuc2V0QW5pbWF0aW9uKDAsIHNlbGYuZ2V0QW5pbWF0aW9uRGljZVN0YXJ0KHJlcy5kaWNlMSksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIE1hdGgucmFuZG9tKCkgKiAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclRpbWVvdXREaWNlLnB1c2goc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kaWNlMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kaWNlMi5zZXRBbmltYXRpb24oMCwgc2VsZi5nZXRBbmltYXRpb25EaWNlU3RhcnQocmVzLmRpY2UyKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgTWF0aC5yYW5kb20oKSAqIDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZW91dERpY2UucHVzaChzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRpY2UzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRpY2UzLnNldEFuaW1hdGlvbigwLCBzZWxmLmdldEFuaW1hdGlvbkRpY2VTdGFydChyZXMuZGljZTMpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBNYXRoLnJhbmRvbSgpICogMCkpO1xuXHRcdFx0XHRcdFx0dGhpcy5lZmZlY3Qubm9kZS5hY3RpdmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0dGhpcy5lZmZlY3Quc2V0QW5pbWF0aW9uKDAsIFwiZWZmZWN0XCIsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJUaW1lb3V0RGljZS5wdXNoKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmlzTmFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYm93bC5zZXRQb3NpdGlvbihzZWxmLmJvd2xTdGFydFBvcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYm93bC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDE0MDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTMuc2V0Q29tcGxldGVMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTmFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsUmVtYWluVGltZTIubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxSZW1haW5UaW1lMi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Jlc3VsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiZGljZSAzIHJ1biB4b25nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmphY2twb3REYXRhID0gSlNPTi5wYXJzZSgnIHtcIl9wb3NcIjoyMixcIl9kYXRhXCI6e1wiMFwiOjEsXCIxXCI6OCxcIjJcIjoxNTEsXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowLFwiOFwiOjAsXCI5XCI6MixcIjEwXCI6NjMsXCIxMVwiOjE5NyxcIjEyXCI6MCxcIjEzXCI6MCxcIjE0XCI6MCxcIjE1XCI6MCxcIjE2XCI6NTUsXCIxN1wiOjIxLFwiMThcIjoxODEsXCIxOVwiOjIzOH0sXCJfbGVuZ3RoXCI6MjAsXCJfY29udHJvbGxlcklkXCI6MSxcIl9jbWRJZFwiOjIxOTksXCJfZXJyb3JcIjowLFwiamFja3BvdFwiOjkyNDE2OTcxMCxcIm5pY2tuYW1lXCI6XCJcIixcImlkU2Vzc2lvblwiOjE0NzM5N30nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuamFja3BvdERhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVKYWNrcG90V2luKHRoaXMuamFja3BvdERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGlzdG9yaWVzLmxlbmd0aCA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcmllcy5zbGljZSgwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yaWVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2Vzc2lvblwiOiB0aGlzLnJlZmVyZW5jZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGljZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZGljZTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5kaWNlMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmRpY2UzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyVGltZW91dERpY2UucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLnBsYXlBdWRpb0VmZmVjdChhdWRpb19jbGlwLkRJQ0UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCkpO1xuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5SRUZVTkQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVJlZnVuZChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlZnVuZCA9IHJlcy5tb25leVJlZnVuZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfdGFpeGl1X3JlZnVuZDEnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlJFU1VMVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiUkVTVUxUIFRYOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdERhdGEgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmphY2twb3REYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuTkVXX0dBTUU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZU5ld0dhbWUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLkxvZyhcIk5FVyBHQU1FIFRYOlwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGljZTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWNlMy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJyVGltZW91dERpY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFyclRpbWVvdXREaWNlW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyclRpbWVvdXREaWNlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRUYWkuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVG90YWxCZXRYaXUuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRUYWkuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRYaXUuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsVXNlclRhaS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxVc2VyWGl1LnN0cmluZyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZmVyZW5jZUlkID0gcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibFNlc3Npb24uc3RyaW5nID0gXCIjXCIgKyByZXMucmVmZXJlbmNlSWQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vzc2lvbklkID0gcmVzLnJlZmVyZW5jZUlkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nRG9vciA9IEJldERvb3IuTm9uZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRlZFRhaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRYaXUgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT3BlbkJvd2wgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0V2luQ2FzaCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuamFja3BvdERhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdERhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiSmFja1BvdFRhaSwgcmVzWydqcFRhaSddLCAxLjApO1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxiSmFja1BvdFhpdSwgcmVzWydqcFhpdSddLCAxLjApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BXaW4oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuSElTVE9SSUVTOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVIaXN0b3JpZXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoaXMgPSByZXMuZGF0YS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3Rvcmllcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlc3Npb25cIjogdGhpcy5yZWZlcmVuY2VJZCAtIGhpcy5sZW5ndGggLyAzICsgcGFyc2VJbnQoXCJcIiArICgoaSArIDEpIC8gMykpICsgKHRoaXMuaXNCZXR0aW5nID8gMCA6IDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGljZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoaXNbaV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUludChoaXNbKytpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGhpc1srK2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuSGlzdG9yaWVzKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkxPR19DSEFUOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVMb2dDaGF0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbXNncyA9IEpTT04ucGFyc2UocmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxDaGF0LmFkZE1lc3NhZ2UobXNnc1tpXVtcInVcIl0sIG1zZ3NbaV1bXCJtXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsQ2hhdC5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5TQ1JJQkVfQ0hBVDoge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlTG9nQ2hhdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1zZ3MgPSBKU09OLnBhcnNlKHJlcy5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsQ2hhdC5hZGRNZXNzYWdlKG1zZ3NbaV1bXCJ1XCJdLCBtc2dzW2ldW1wibVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5lbENoYXQuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuU0VORF9DSEFUOiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVTZW5kQ2hhdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbmVsQ2hhdC5hZGRNZXNzYWdlKHJlcy5uaWNrbmFtZSwgcmVzLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9jaGF0X2Vycm9yJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9jaGF0X2Vycm9yMScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90YWl4aXVfY2hhdF9lcnJvcjInKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9jaGF0X2Vycm9yMycpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5CRVQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUJldChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmJldGluZ0Rvb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBCZXREb29yLlRhaTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0ZWRUYWkgKz0gdGhpcy5iZXRpbmdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsQmV0ZWRUYWkuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKHRoaXMuYmV0ZWRUYWkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgQmV0RG9vci5YaXU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGVkWGl1ICs9IHRoaXMuYmV0aW5nVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEJldGVkWGl1LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcih0aGlzLmJldGVkWGl1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJldGluZ1ZhbHVlID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X3N1Y2Nlc3MnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRpbmdWYWx1ZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjMnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRpbmdWYWx1ZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZXRpbmdWYWx1ZSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2JldF9lcnJvcjcnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmV0aW5nVmFsdWUgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3IyJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkpBQ0tQT1Q6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZUphY2twb3RXaW4oZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLkxvZyhcIkpBQ0tQT1QgV0lOOlwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qYWNrcG90RGF0YSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1dHRvbnNCZXQxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5idXR0b25zQmV0MVtpXTtcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRCdG5CZXQgPSBidG4ubm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMubGlzdEJldHNbaV07XG4gICAgICAgICAgICBsZXQgc3RyVmFsdWUgPSB2YWx1ZSArIFwiXCI7XG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gMTAwMDAwMCkge1xuICAgICAgICAgICAgICAgIHN0clZhbHVlID0gKHZhbHVlIC8gMTAwMDAwMCkgKyBcIk1cIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gMTAwMCkge1xuICAgICAgICAgICAgICAgIHN0clZhbHVlID0gKHZhbHVlIC8gMTAwMCkgKyBcIktcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJ0bi5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBzdHJWYWx1ZTtcbiAgICAgICAgICAgIGJ0bi5ub2RlLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLk5vbmUpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50QnRuQmV0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnRuQmV0LmNvbG9yID0gY2MuQ29sb3IuV0hJVEVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnRuQmV0ID0gYnRuLm5vZGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50QnRuQmV0LmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChcIiNGRkJFMzRcIilcbiAgICAgICAgICAgICAgICBsZXQgbGJsQmV0ID0gdGhpcy5iZXRpbmdEb29yID09PSBCZXREb29yLlRhaSA/IHRoaXMubGJsQmV0VGFpIDogdGhpcy5sYmxCZXRYaXU7XG4gICAgICAgICAgICAgICAgbGV0IG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcpICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA+IHRoaXMubWF4QmV0VmFsdWUpIG51bWJlciA9IHRoaXMubWF4QmV0VmFsdWU7XG4gICAgICAgICAgICAgICAgbGJsQmV0LnN0cmluZyA9IFV0aWxzLmZvcm1hdE51bWJlcihudW1iZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvd2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7XG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5ib3dsLnBvc2l0aW9uO1xuICAgICAgICAgICAgcG9zLnggKz0gZXZlbnQuZ2V0RGVsdGFYKCk7XG4gICAgICAgICAgICBwb3MueSArPSBldmVudC5nZXREZWx0YVkoKTtcbiAgICAgICAgICAgIHRoaXMuYm93bC5wb3NpdGlvbiA9IHBvcztcblxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gVXRpbHMudjJEaXN0YW5jZShuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLmJvd2xTdGFydFBvcyk7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2UpID4gNDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNPcGVuQm93bCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93V2luQ2FzaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0dhbWVNaW5pKFwiVGFpWGl1XCIpO1xuICAgICAgICBBcHAuaW5zdGFuY2UuYnV0dG9uTWluaUdhbWUuc2hvd1RpbWVUYWlYaXUoZmFsc2UpO1xuICAgICAgICB0aGlzLmxheW91dEJldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aGlzLmxheW91dEJldCkudG8oMC41LCB7IHk6IC0xNjcuNDYxIH0sIHsgZWFzaW5nOiBjYy5lYXNpbmcuc2luZU91dCB9KS5zdGFydCgpO1xuICAgICAgICB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpY2UxLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGljZTIubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaWNlMy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zaG93Q2hhdCgpO1xuICAgIH1cblxuICAgIHNob3dDaGF0KCkge1xuICAgICAgICB0aGlzLnBhbmVsQ2hhdCA9IHRoaXMubm9kZVBhbmVsQ2hhdC5nZXRDb21wb25lbnQoUGFuZWxDaGF0KTtcbiAgICAgICAgdGhpcy5wYW5lbENoYXQuc2hvdyh0cnVlKTtcbiAgICB9XG5cbiAgICBkaXNtaXNzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9wdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYW5lbENoYXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYW5lbENoYXQuc2hvdyhmYWxzZSk7XG4gICAgICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFVuU2NyaWJlKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0Q2xvc2UoKSB7XG4gICAgICAgIFRhaVhpdURvdWJsZUNvbnRyb2xsZXIuaW5zdGFuY2UuZGlzbWlzcygpO1xuXHRcdHRoaXMubGJsYnRuYmV0eGl1LmFjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5sYmxidG5iZXR0YWkuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhY3RDaGF0KCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVcIik7XG4gICAgICAgIHRoaXMucGFuZWxDaGF0LnNob3coIXRoaXMucGFuZWxDaGF0Lm5vZGUuYWN0aXZlKTtcbiAgICB9XG5cbiAgICBhY3RCZXRUYWkoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzQmV0dGluZykge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfYmV0X2Vycm9yMycpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRpbmdWYWx1ZSA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RpZnlfZmFzdF9hY3Rpb24nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0ZWRYaXUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF90YWl4aXVfY2hhdF9lcnJvcjQnKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblx0XHR0aGlzLmxibGJ0bmJldHhpdS5hY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMubGJsYnRuYmV0dGFpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJldGluZ0Rvb3IgPSBCZXREb29yLlRhaTtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMubGJsQmV0WGl1LnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubGF5b3V0QmV0KS50bygwLjUsIHsgeTogLTE2Ny40NjEgfSwgeyBlYXNpbmc6IGNjLmVhc2luZy5zaW5lT3V0IH0pLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0MS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGFjdEJldFhpdSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1XCIpO1xuICAgICAgICBpZiAoIXRoaXMuaXNCZXR0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9iZXRfZXJyb3IzJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJldGluZ1ZhbHVlID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGlmeV9mYXN0X2FjdGlvbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRlZFRhaSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3RhaXhpdV9jaGF0X2Vycm9yNCcpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXHRcdHRoaXMubGJsYnRuYmV0eGl1LmFjdGl2ZSA9IGZhbHNlO1xuXHRcdHRoaXMubGJsYnRuYmV0dGFpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmV0aW5nRG9vciA9IEJldERvb3IuWGl1O1xuICAgICAgICB0aGlzLmxibEJldFhpdS5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY2MudHdlZW4odGhpcy5sYXlvdXRCZXQpLnRvKDAuNSwgeyB5OiAtMTY3LjQ2MSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLnNpbmVPdXQgfSkuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQxLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgYWN0T3RoZXJOdW1iZXIoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFjdEFncmVlKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVcIik7XG4gICAgICAgIGlmICh0aGlzLmJldGluZ1ZhbHVlID49IDAgfHwgIXRoaXMuY2FuQmV0KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9ub3RpZnlfZmFzdF9hY3Rpb24nKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIHZhciBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgdGhpcy5iZXRpbmdWYWx1ZSA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcpO1xuXHRcdC8vdGhpcy5sYmxidG5iZXR4aXUuYWN0aXZlID0gdHJ1ZTtcblx0XHQvL3RoaXMubGJsYnRuYmV0dGFpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmV0aW5nRG9vciA9IHRoaXMuYmV0aW5nRG9vcjtcbiAgICAgICAgTWluaUdhbWVOZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRCZXQodGhpcy5yZWZlcmVuY2VJZCwgdGhpcy5iZXRpbmdWYWx1ZSwgdGhpcy5iZXRpbmdEb29yID09IEJldERvb3IuVGFpID8gMSA6IDAsIHRoaXMucmVtYWluVGltZSkpO1xuICAgICAgICBsYmxCZXQuc3RyaW5nID0gXCIwXCI7XG5cbiAgICAgICAgdGhpcy5jYW5CZXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jYW5CZXQgPSB0cnVlO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG5cbiAgICBhY3RDYW5jZWwoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgdGhpcy5sYmxCZXRYaXUuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgdGhpcy5sYmxCZXRUYWkuc3RyaW5nID0gXCJcIjtcblx0XHR0aGlzLmxibGJ0bmJldHhpdS5hY3RpdmUgPSB0cnVlO1xuXHRcdHRoaXMubGJsYnRuYmV0dGFpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYmV0aW5nRG9vciA9IEJldERvb3IuTm9uZTtcbiAgICAgICAgdGhpcy5sYXlvdXRCZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGF5b3V0QmV0LnkgPSAyODtcbiAgICB9XG5cbiAgICBhY3RCdG5HYXBEb2koKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIGxldCBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcblxuICAgICAgICBsZXQgbnVtYmVyID0gVXRpbHMuc3RyaW5nVG9JbnQobGJsQmV0LnN0cmluZykgKyBDb25maWdzLkxvZ2luLkNvaW47XG4gICAgICAgIGlmIChudW1iZXIgPiB0aGlzLm1heEJldFZhbHVlKSBudW1iZXIgPSB0aGlzLm1heEJldFZhbHVlO1xuICAgICAgICBsYmxCZXQuc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKG51bWJlcik7XG5cbiAgICB9XG5cbiAgICBhY3RCdG5EZWxldGUoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIHZhciBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgdmFyIG51bWJlciA9IFwiXCIgKyBVdGlscy5zdHJpbmdUb0ludChsYmxCZXQuc3RyaW5nKTtcbiAgICAgICAgbnVtYmVyID0gbnVtYmVyLnN1YnN0cmluZygwLCBudW1iZXIubGVuZ3RoIC0gMSk7XG4gICAgICAgIG51bWJlciA9IFV0aWxzLmZvcm1hdE51bWJlcihVdGlscy5zdHJpbmdUb0ludChudW1iZXIpKTtcbiAgICAgICAgbGJsQmV0LnN0cmluZyA9IG51bWJlcjtcbiAgICB9XG5cbiAgICBhY3RCdG4wMDAoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMuYmV0aW5nRG9vciA9PT0gQmV0RG9vci5Ob25lKSByZXR1cm47XG4gICAgICAgIHZhciBsYmxCZXQgPSB0aGlzLmJldGluZ0Rvb3IgPT09IEJldERvb3IuVGFpID8gdGhpcy5sYmxCZXRUYWkgOiB0aGlzLmxibEJldFhpdTtcbiAgICAgICAgdmFyIG51bWJlciA9IFV0aWxzLnN0cmluZ1RvSW50KGxibEJldC5zdHJpbmcgKyBcIjAwMFwiKTtcbiAgICAgICAgaWYgKG51bWJlciA+IHRoaXMubWF4QmV0VmFsdWUpIG51bWJlciA9IHRoaXMubWF4QmV0VmFsdWU7XG4gICAgICAgIGxibEJldC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXIobnVtYmVyKTtcbiAgICB9XG5cbiAgICBhY3ROYW4oKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgdGhpcy5pc05hbiA9ICF0aGlzLmlzTmFuO1xuICAgICAgICB0aGlzLmJ0bk5hbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuaXNOYW4gPyB0aGlzLnNwckZyYW1lQnRuTmFuMiA6IHRoaXMuc3ByRnJhbWVCdG5OYW47XG4gICAgfVxuICAgIGFjdFBvcHVwSG9ub3IoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBIb25vciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3IgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvcHVwc1ByWzBdKS5nZXRDb21wb25lbnQoXCJUYWlYaXVNaW5pLlBvcHVwSG9ub3JzXCIpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBIb25vci5ub2RlKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwSG9ub3Iuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFBvcHVwSGlzdG9yeSgpIHtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dCZ01pbmlHYW1lKFwiVGFpWGl1XCIpO1xuICAgICAgICBpZiAodGhpcy5wb3B1cEhpc3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvcHVwc1ByWzFdKS5nZXRDb21wb25lbnQoXCJUYWlYaXVNaW5pLlBvcHVwSGlzdG9yeVwiKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5Lm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEhpc3Rvcnkubm9kZSk7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFBvcHVwR3VpZGUoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBHdWlkZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvcHVwc1ByWzRdKS5nZXRDb21wb25lbnQoXCJEaWFsb2dcIik7XG4gICAgICAgICAgICB0aGlzLnBvcHVwR3VpZGUubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBzLnB1c2godGhpcy5wb3B1cEd1aWRlLm5vZGUpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWN0UG9wdXBTb2lDYXUoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBTb2lDYXUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNvaUNhdSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9wdXBzUHJbM10pLmdldENvbXBvbmVudChcIlRhaVhpdU1pbmkuUG9wdXBTb2lDYXVcIik7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU29pQ2F1Lm5vZGUucGFyZW50ID0gdGhpcy5wb3B1cENvbnRhaW5lcjtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTb2lDYXUuc2hvdygpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwU29pQ2F1Lm5vZGUpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTb2lDYXUuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXHRhY3RQb3B1cFRoYW5oRHUoKSB7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93QmdNaW5pR2FtZShcIlRhaVhpdVwiKTtcbiAgICAgICAgaWYgKHRoaXMucG9wdXBUaGFuaER1ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBUaGFuaER1ID0gY2MuaW5zdGFudGlhdGUodGhpcy5wb3B1cHNQcls1XSkuZ2V0Q29tcG9uZW50KFwiVGFpWGl1TWluaS5Qb3B1cFRoYW5oRHVcIik7XG4gICAgICAgICAgICB0aGlzLnBvcHVwVGhhbmhEdS5ub2RlLnBhcmVudCA9IHRoaXMucG9wdXBDb250YWluZXI7XG4gICAgICAgICAgICB0aGlzLnBvcHVwVGhhbmhEdS5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwcy5wdXNoKHRoaXMucG9wdXBUaGFuaER1Lm5vZGUpO1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBUaGFuaER1LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RQb3B1cEhpc3RvcnlTZXNzaW9uKCkge1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0JnTWluaUdhbWUoXCJUYWlYaXVcIik7XG4gICAgICAgIGlmICh0aGlzLnBvcHVwRGV0YWlsU2Vzc2lvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwRGV0YWlsU2Vzc2lvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucG9wdXBzUHJbMl0pLmdldENvbXBvbmVudChcIlRhaVhpdU1pbmkuUG9wdXBEZXRhaWxIaXN0b3J5XCIpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cERldGFpbFNlc3Npb24ubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgdGhpcy5wb3B1cERldGFpbFNlc3Npb24uc2hvd0RldGFpbCh0aGlzLnNlc3Npb25JZCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cHMucHVzaCh0aGlzLnBvcHVwRGV0YWlsU2Vzc2lvbi5ub2RlKTtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwRGV0YWlsU2Vzc2lvbi5zaG93RGV0YWlsKHRoaXMuc2Vzc2lvbklkIC0gMSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1Jlc3VsdCgpIHtcbiAgICAgICAgdGhpcy5sYmxTY29yZS5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYmxTY29yZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxibFNjb3JlLnN0cmluZyA9IFwiXCIgKyB0aGlzLmxhc3RTY29yZTtcbiAgICAgICAvLyB0aGlzLmJnU3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5sYXN0U2NvcmUgPj0gMTEpIHtcbiAgICAgICAgICAgIHRoaXMuYmdTcGluZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgIC8vIHRoaXMuYmdTcGluZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJnU3BpbmV6Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgLy8gdGhpcy5iZ1NwaW5lLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUJ0bkhpc3RvcmllcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJyVGltZW91dERpY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFyclRpbWVvdXREaWNlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyclRpbWVvdXREaWNlID0gW107XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wV2luKCkge1xuICAgICAgICB0aGlzLmJnU3BpbmUubm9kZS5hY3RpdmUgPSBmYWxzZTtcblx0XHR0aGlzLmJnU3BpbmV6Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmdTcGluZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInRleHRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy50YWkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgLy8gdGhpcy50YWkucnVuQWN0aW9uKGNjLnNwYXduKGNjLnNjYWxlVG8oMC4zLCAxKSwgY2MudGludFRvKDAuMywgMjU1LCAyNTUsIDI1NSkpKTtcblxuICAgICAgICAvLyB0aGlzLnhpdS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvLyB0aGlzLnhpdS5ydW5BY3Rpb24oY2Muc3Bhd24oY2Muc2NhbGVUbygwLjMsIDEpLCBjYy50aW50VG8oMC4zLCAyNTUsIDI1NSwgMjU1KSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd1RvYXN0KG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmxibFRvYXN0LnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmxibFRvYXN0Lm5vZGUucGFyZW50O1xuICAgICAgICBwYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgcGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHBhcmVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgcGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLmZhZGVJbigwLjEpLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIpLFxuICAgICAgICAgICAgY2MuZmFkZU91dCgwLjIpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93V2luQ2FzaCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGFzdFdpbkNhc2ggPD0gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNvdW5kTWFuYWdlci5wbGF5QXVkaW9FZmZlY3QoYXVkaW9fY2xpcC5XSU4pO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmxibFdpbkNhc2gubm9kZS5zY2FsZSA9IDA7XG4gICAgICAgIC8vIHRoaXMubGJsV2luQ2FzaC5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTyk7XG4gICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsV2luQ2FzaCwgdGhpcy5sYXN0V2luQ2FzaCwgMC41LCAobikgPT4geyByZXR1cm4gXCIrXCIgKyBVdGlscy5mb3JtYXROdW1iZXIobikgfSk7XG4gICAgICAgIHRoaXMubGJsV2luQ2FzaC5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLnNjYWxlVG8oMC41LCAxKSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyKSxcbiAgICAgICAgICAgIGNjLm1vdmVCeSgxLCBjYy52MigwLCA2MCkpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGJsV2luQ2FzaC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnNlbmQoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTik7XG4gICAgfVxuXG4gICAgdXBkYXRlQnRuSGlzdG9yaWVzKCkge1xuICAgICAgICBsZXQgaGlzdG9yaWVzID0gdGhpcy5oaXN0b3JpZXMuc2xpY2UoKTtcbiAgICAgICAgaWYgKGhpc3Rvcmllcy5sZW5ndGggPiB0aGlzLmJ0bkhpc3Rvcmllcy5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICBoaXN0b3JpZXMuc3BsaWNlKDAsIGhpc3Rvcmllcy5sZW5ndGggLSB0aGlzLmJ0bkhpc3Rvcmllcy5jaGlsZHJlbkNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWR4ID0gaGlzdG9yaWVzLmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmJ0bkhpc3Rvcmllcy5jaGlsZHJlbkNvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBfaWR4ID0gaWR4O1xuICAgICAgICAgICAgICAgIHZhciBzY29yZSA9IGhpc3Rvcmllc1tpZHhdW1wiZGljZXNcIl1bMF0gKyBoaXN0b3JpZXNbaWR4XVtcImRpY2VzXCJdWzFdICsgaGlzdG9yaWVzW2lkeF1bXCJkaWNlc1wiXVsyXTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkhpc3Rvcmllcy5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNjb3JlID49IDExID8gdGhpcy5zcHJGcmFtZVRhaSA6IHRoaXMuc3ByRnJhbWVYaXU7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5baV0ub2ZmKFwiY2xpY2tcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5IaXN0b3JpZXMuY2hpbGRyZW5baV0ub24oXCJjbGlja1wiLCAoZSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwRGV0YWlsU2Vzc2lvbi5zaG93RGV0YWlsKGhpc3Rvcmllc1tfaWR4XVtcInNlc3Npb25cIl0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuSGlzdG9yaWVzLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWR4LS07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kQ2hhdChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFfdGhpcy5pc0NhbkNoYXQpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdGlmeV9mYXN0X2FjdGlvbicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5pc0NhbkNoYXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaXNDYW5DaGF0ID0gdHJ1ZTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHZhciByZXEgPSBuZXcgY21kLlNlbmRDaGF0KHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChtZXNzYWdlKSkpO1xuICAgICAgICBNaW5pR2FtZU5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKHJlcSk7XG4gICAgfVxuICAgIGhhbmRsZUphY2twb3RXaW4ocmVzKSB7XG4gICAgICAgIHRoaXMuYW5pbUpQLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sYkphY2tQb3Quc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIC8vICBjYy5sb2coXCJqYWNrcG90PT1cIiArIHJlc1snamFja3BvdCddKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYkphY2tQb3QsIHJlc1snamFja3BvdCddLCAzLjApO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuaW1KUC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ib3dsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0RGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNC4wKTtcbiAgICB9XG4gICAgaGFuZGxlUmVzdWx0KCkge1xuICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSB0aGlzLnJlc3VsdERhdGEuY3VycmVudE1vbmV5O1xuICAgICAgICB0aGlzLmxhc3RXaW5DYXNoID0gdGhpcy5yZXN1bHREYXRhLnRvdGFsTW9uZXk7XG4gICAgICAgIGlmICghdGhpcy5ib3dsLmFjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucmVzdWx0RGF0YS50b3RhbE1vbmV5ID4gMCkgdGhpcy5zaG93V2luQ2FzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19