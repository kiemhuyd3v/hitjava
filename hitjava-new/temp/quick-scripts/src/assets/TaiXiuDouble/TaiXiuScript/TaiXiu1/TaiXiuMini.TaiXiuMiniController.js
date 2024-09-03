"use strict";
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