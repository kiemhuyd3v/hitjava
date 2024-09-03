
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot8/Slot8Script/Slot8Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '962a4ReV8ZKGKbM4uluxFae', 'Slot8Controller');
// Slot8/Slot8Script/Slot8Controller.ts

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
var Slot8Cmd_1 = require("./Slot8Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot8TrialResult_1 = require("./Slot8TrialResult");
var Slot8_Lobby_1 = require("./Slot8.Lobby");
var Slot8_PopupBonus_1 = require("./Slot8.PopupBonus");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var Slot8ChooseLine_1 = require("./Slot8ChooseLine");
var Slot8_ItemSlot_1 = require("./Slot8.ItemSlot");
var BundleControl_1 = require("../../Loading/src/BundleControl");
var MAX_CYCCLE_SPIN = 20;
var FAST_CYCCLE_SPIN = 10;
var ERROR_CYCCLE_SPIN = 50;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot8Controller = /** @class */ (function (_super) {
    __extends(Slot8Controller, _super);
    function Slot8Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        _this.nodeCoin = null;
        _this.initNodeCoin = null;
        _this.btnLine = null;
        _this.lblFreeSpinCount = null;
        _this.nodeBoxSetting = null;
        _this.popupContainer = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.popupBonus = null;
        _this.skeSpin = null;
        _this.nodeDemo = null;
        _this.nodeWinJackpot = null;
        _this.txtWinJackpot = null;
        _this.nodeGamePlay = null;
        _this.mSlotLobby = null;
        _this.jackpotLabel = null;
        _this.moneyLabel = null;
        _this.totalLineLabel = null;
        _this.btnSpin = null;
        _this.toggleFast = null;
        _this.toggleAuto = null;
        //win
        _this.winNormalBg = null;
        _this.bonusNode = null;
        _this.bigWinNode = null;
        _this.txtWinBigWin = null;
        _this.jackpotNode = null;
        _this.freespinNode = null;
        _this.winLabel = null;
        _this.lbCurrentRoom = null;
        _this.freespinCurrent = null;
        //line win
        _this.lineWinParent = null;
        _this.colParent = null;
        //show result
        _this.totalWinLabel = null;
        _this.totalBetLabel = null;
        //choose line
        _this.popupChooseLine = null;
        _this.musicLobby = null;
        _this.musicGame = null;
        _this.musicBonus = null;
        _this.soundClick = null;
        _this.soundStartSpin = null;
        _this.soundRepeatSpin = null;
        _this.soundEndSpin = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundFreeSpin = null;
        _this.soundtouchBonus = null;
        _this.soundSmumary = null;
        _this.listActiveItem = []; //list 15 item nhin thay tren man hinh
        _this.TIME_DELAY_SHOW_LINE = 1;
        _this.dailyFreeSpin = 0;
        _this.betId = 0;
        _this.listBet = [100, 1000, 10000];
        _this.listBetString = ["100", "1K", "10K"];
        _this.arrLineSelected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        _this.isTrial = false;
        _this.isSpining = false;
        _this.mapLine = [
            [5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4],
            [10, 11, 12, 13, 14],
            [5, 6, 2, 8, 9],
            [5, 6, 12, 8, 9],
            [0, 1, 7, 3, 4],
            [10, 11, 7, 13, 14],
            [0, 11, 2, 13, 4],
            [10, 1, 12, 3, 14],
            [5, 1, 12, 3, 9],
            [10, 6, 2, 8, 14],
            [0, 6, 12, 8, 4],
            [5, 11, 7, 3, 9],
            [5, 1, 7, 13, 9],
            [10, 6, 7, 8, 14],
            [0, 6, 7, 8, 4],
            [5, 11, 12, 13, 9],
            [5, 1, 2, 3, 9],
            [10, 11, 7, 3, 4],
            [0, 1, 7, 13, 14] //20
        ];
        //new 
        _this.isFastCurrent = false;
        _this.isFast = false;
        _this.arrReel = [];
        _this.distanceReel = 0;
        _this.iconSFBlurArr100 = [];
        _this.iconSFArr100 = [];
        _this.arrSkeletonIcon100 = [];
        _this.iconSFBlurArr1K = [];
        _this.iconSFArr1K = [];
        _this.arrSkeletonIcon1K = [];
        _this.iconSFBlurArr10K = [];
        _this.iconSFArr10K = [];
        _this.arrSkeletonIcon10K = [];
        _this.arrUIItemIcon = [];
        _this.arrRealItem = [];
        _this.popupGuide = null;
        _this.popupHistory = null;
        _this.popupHonor = null;
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.isFirst = false;
        _this.isSound = false;
        _this.isMusic = true;
        _this.mutipleJpNode = null;
        _this.audioIdRepeatSpin = 0;
        return _this;
    }
    Slot8Controller.prototype.start = function () {
        var _this = this;
        this.dailyFreeSpin = 0;
        this.isSound = true;
        this.isMusic = true;
        this.totalWinLabel.string = "";
        var musicId = 0;
        SlotNetworkClient_1.default.getInstance().addOnClose(function () {
            _this.mSlotLobby.onBtnBack();
        }, this);
        this.init();
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            // //  cc.log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Slot8Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    _this.mSlotLobby.onUpdateJackpot(data);
                    break;
                case Slot8Cmd_1.default.Code.UPDATE_POT:
                    {
                        var res = new Slot8Cmd_1.default.ReceiveUpdatePot(data);
                        // //  cc.log("update Jackpot:"+(this.betId == 0));
                        if (_this.betId == -1) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, 0.3);
                        }
                        else if (_this.betId == 0) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom1, 0.3);
                        }
                        else if (_this.betId == 1) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom2, 0.3);
                        }
                        else if (_this.betId == 2) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, 0.3);
                        }
                    }
                    break;
                case Slot8Cmd_1.default.Code.UPDATE_RESULT:
                    {
                        var res = new Slot8Cmd_1.default.ReceiveResult(data);
                        _this.spinResult(res);
                    }
                    break;
                case Slot8Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.isTrial) {
                            var res = new Slot8Cmd_1.default.ReceiveFreeDaiLy(data);
                            _this.dailyFreeSpin = res.freeSpin;
                            if (_this.dailyFreeSpin > 0) {
                                _this.lblFreeSpinCount.node.parent.active = true;
                                _this.lblFreeSpinCount.string = _this.dailyFreeSpin + "";
                            }
                            else {
                                _this.lblFreeSpinCount.node.parent.active = false;
                            }
                        }
                    }
                    break;
                case Slot8Cmd_1.default.Code.DATE_X2:
                    {
                        var res = new Slot8Cmd_1.default.ReceiveDateX2(data);
                        if (_this.isFirst == false) {
                            //vua vao lobby
                            _this.hideGamePlay();
                            _this.isFirst = true;
                        }
                        else {
                            _this.mSlotLobby.node.active = false;
                            _this.onJoinRoom(res);
                        }
                    }
                    break;
                case Slot8Cmd_1.default.Code.CHANGE_ROOM:
                    {
                        //  cc.log("changeRoom:" + JSON.stringify(data));
                    }
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot8Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendSubcribe(0));
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            Tween_1.default.numberTo(_this.moneyLabel, Configs_1.default.Login.Coin, 0.3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function () {
            App_1.default.instance.showLoading(false);
        });
        this.mSlotLobby.init(this);
        //this.initMutipleJPNode();
    };
    Slot8Controller.prototype.onEnable = function () {
        this.changeAllItemToDark(false);
    };
    Slot8Controller.prototype.initMutipleJPNode = function () {
        var _this = this;
        if (!this.mutipleJpNode) {
            cc.assetManager.getBundle("Lobby").load("prefabs/MutipleJackpotPr", cc.Prefab, function (finish, total, item) {
            }, function (err1, prefab) {
                if (err1 != null) {
                    //  cc.log("errr load game TIENLEN:", err1);
                }
                else {
                    _this.mutipleJpNode = cc.instantiate(prefab).getComponent("MutipleJackpot");
                    _this.mutipleJpNode.node.parent = cc.director.getScene().getChildByName("Canvas");
                    _this.mutipleJpNode.setInfo("ANGRY");
                }
            });
        }
    };
    Slot8Controller.prototype.showAnimations = function () {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
            var nodeItem = self.arrUIItemIcon[i].nodeBox;
            var indexCol = i % 5;
            nodeItem.opacity = 0;
            nodeItem.position = cc.v3(0, self.distanceReel, 0);
            cc.tween(nodeItem)
                .delay(indexCol * 0.1)
                .to(1, { position: cc.v3(0, 0, 0), opacity: 255 }, { easing: "backOut" })
                .start();
        }
    };
    Slot8Controller.prototype.showGamePlay = function () {
        // if (this.isMusic) cc.audioEngine.playMusic(this.musicGame, true);
        this.randomIconList();
        this.nodeGamePlay.active = true;
        this.showAnimations();
    };
    Slot8Controller.prototype.hideGamePlay = function () {
        // if (this.isMusic) cc.audioEngine.playMusic(this.musicLobby, true);
        this.nodeGamePlay.active = false;
    };
    Slot8Controller.prototype.init = function () {
        this.totalWinLabel.string = "";
    };
    Slot8Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 20)
            number = 20;
        App_1.default.instance.showCoins(number, this.initNodeCoin, this.nodeCoin);
    };
    Slot8Controller.prototype.onJoinRoom = function (res) {
        if (res === void 0) { res = null; }
        var betIdTmp = this.betId;
        if (betIdTmp == -1)
            betIdTmp = 2;
        var totalbet = (this.arrLineSelected.length * this.listBet[betIdTmp]);
        Tween_1.default.numberTo(this.totalBetLabel, totalbet, 0.3);
        this.mSlotLobby.hide();
        this.nodeDemo.active = this.isTrial ? true : false;
        this.showGamePlay();
        this.setButtonEnable(true);
        if (res == null) {
            this.freespinCurrent.active = false;
        }
        else {
            if (res.freeSpin + this.dailyFreeSpin > 0) {
                this.freespinCurrent.active = true;
                this.freespinCurrent.getComponentInChildren(cc.Label).string = res.freeSpin + this.dailyFreeSpin;
            }
            else {
                this.freespinCurrent.active = false;
            }
        }
    };
    Slot8Controller.prototype.randomIconList = function () {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
            var index = i;
            var itemId = Math.floor(Math.random() * 7);
            self.arrUIItemIcon[i].init(itemId, index, self);
            self.arrUIItemIcon[i].changeSpineIcon(itemId);
        }
    };
    /**
     * random between, min, max included
     */
    Slot8Controller.prototype.randomBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Slot8Controller.prototype.spinClick = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        //hide effect
        // this.setButtonAuto(false);
        // this.setButtonFlash(false);
        if (!this.isTrial) {
            if (this.dailyFreeSpin > 0) {
                this.dailyFreeSpin--;
                if (this.dailyFreeSpin > 0) {
                    this.lblFreeSpinCount.node.parent.active = true;
                    this.lblFreeSpinCount.string = this.dailyFreeSpin + "";
                }
                else {
                    this.lblFreeSpinCount.node.parent.active = false;
                }
            }
            else {
                if (Configs_1.default.Login.Coin < this.listBet[this.betId] * this.arrLineSelected.length) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
                    return;
                }
            }
            this.hideWinEffect();
            this.hideLineWin(true);
            this.setButtonEnable(false);
            this.totalWinLabel.string = "";
            SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendPlay(this.arrLineSelected.toString()));
        }
        else {
            this.hideWinEffect();
            this.hideLineWin(true);
            this.setButtonEnable(false);
            this.totalWinLabel.string = "";
            var rIdx = Utils_1.default.randomRangeInt(0, Slot8TrialResult_1.default.results.length);
            this.spinResult(Slot8TrialResult_1.default.results[rIdx]);
        }
    };
    Slot8Controller.prototype.onBtnSoundTouchBonus = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundtouchBonus, false, 1);
        }
    };
    Slot8Controller.prototype.onBtnSoundSumary = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundSmumary, false, 1);
        }
        if (this.isMusic)
            cc.audioEngine.playMusic(this.musicGame, true);
    };
    Slot8Controller.prototype.spinResult = function (res) {
        this.isSpining = true;
        //  cc.log("spinResult:" + JSON.stringify(res));
        var that = this;
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        var result = res.result;
        if (successResult.indexOf(result) === -1) {
            //fail
            if (result === 102) {
                //khong du tien
                //  cc.log("so du khong du");
                App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
            }
            else {
                //  cc.log("co loi xay ra");
            }
            return;
        }
        //set icon
        var matrix = res.matrix.split(",");
        this.numberSpinReel = new Array(this.arrReel.length);
        this.dataResult = res;
        this.isHaveResultSpin = true;
        if (this.isSound) {
            cc.audioEngine.play(this.soundStartSpin, false, 1);
        }
        if (this.isSound) {
            this.audioIdRepeatSpin = cc.audioEngine.play(this.soundRepeatSpin, false, 1);
        }
        for (var i = 0; i < this.arrReel.length; i++) {
            this.beginSpinReel(i);
        }
    };
    Slot8Controller.prototype.spinFinish = function (hasDelay) {
        var _this = this;
        this.isSpining = false;
        var that = this;
        this.changeAllItemToDark(false);
        this.node.runAction(cc.sequence(cc.delayTime(hasDelay ? 1 : 0), cc.callFunc(function () {
            if (that.toggleFast.isChecked || _this.toggleAuto.isChecked) {
                that.spinClick();
            }
            else {
                that.setButtonEnable(true);
                that.setButtonFlash(true);
            }
        })));
    };
    Slot8Controller.prototype.showWinEffect = function (prize, currentMoney, result) {
        var _this = this;
        var self = this;
        if (prize > 0) {
            this.lineWinParent.setSiblingIndex(1);
            this.colParent.setSiblingIndex(0);
            if (result == 5) {
                //bonus
                if (this.isSound) {
                    cc.audioEngine.play(this.soundBonus, false, 1);
                }
                this.bonusNode.active = true;
                var bonusSpine = this.bonusNode.getComponentInChildren(sp.Skeleton);
                bonusSpine.setAnimation(0, "bounus", true);
                this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                    _this.bonusNode.active = false;
                    if (_this.isMusic)
                        cc.audioEngine.playMusic(_this.musicBonus, true);
                    // this.popupBonus.showBonus(this.isTrial ? 100 : this.listBet[this.betId], this.dataResult.haiSao, this, () => {
                    // this.showLineWin(self.dataResult.linesWin.split(","));
                    // this.showCoins(prize);
                    // Tween.numberTo(this.winLabel, prize, 0.3);
                    // Tween.numberTo(this.totalWinLabel, prize, 0.3);
                    // Tween.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], 0.3);
                    // if (!this.isTrial) Tween.numberTo(this.moneyLabel, currentMoney, 0.3);
                    // if (this.toggleFast.isChecked) {
                    //     self.spinFinish(true);
                    // } else {
                    //     if (self.dataResult.linesWin !== "") self.showLineWin(self.dataResult.linesWin.split(","));
                    //     else self.spinFinish(false);
                    // }
                    // });
                    _this.actShowBonus(_this.isTrial ? 100 : _this.listBet[_this.betId], _this.dataResult.haiSao, function () {
                        _this.showLineWin(self.dataResult.linesWin.split(","));
                        _this.showCoins(prize);
                        Tween_1.default.numberTo(_this.winLabel, prize, 0.3);
                        Tween_1.default.numberTo(_this.totalWinLabel, prize, 0.3);
                        Tween_1.default.numberTo(_this.totalBetLabel, _this.arrLineSelected.length * _this.listBet[_this.betId], 0.3);
                        if (!_this.isTrial)
                            Tween_1.default.numberTo(_this.moneyLabel, currentMoney, 0.3);
                        if (_this.toggleFast.isChecked) {
                            self.spinFinish(true);
                        }
                        else {
                            if (self.dataResult.linesWin !== "")
                                self.showLineWin(self.dataResult.linesWin.split(","));
                            else
                                self.spinFinish(false);
                        }
                    });
                })));
            }
            else if (result == 2 || result == 6) {
                //thang lon                
                if (this.isSound) {
                    cc.audioEngine.play(this.soundBigWin, false, 1);
                }
                this.bigWinNode.active = true;
                var bigwinSpine = this.bigWinNode.getComponentInChildren(sp.Skeleton);
                bigwinSpine.setAnimation(0, "thanglon", true);
                Tween_1.default.numberTo(this.txtWinBigWin, prize, 1.5);
                this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                    _this.bigWinNode.active = false;
                    if (_this.toggleFast.isChecked) {
                        self.spinFinish(true);
                    }
                    else {
                        if (self.dataResult.linesWin !== "")
                            self.showLineWin(self.dataResult.linesWin.split(","));
                        else
                            self.spinFinish(false);
                    }
                })));
                this.showCoins(prize);
                Tween_1.default.numberTo(this.winLabel, prize, 0.3);
                Tween_1.default.numberTo(this.totalWinLabel, prize, 0.3);
                Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], 0.3);
                if (!this.isTrial)
                    Tween_1.default.numberTo(this.moneyLabel, currentMoney, 0.3);
            }
            else if (result == 3 || result == 4) {
                //no hu
                if (this.isSound) {
                    var audioIdJackpot = cc.audioEngine.play(this.soundJackpot, false, 1);
                }
                if (this.isSound) {
                    var audioIdJackpot = cc.audioEngine.play(this.soundSmumary, false, 1);
                }
                this.jackpotNode.active = true;
                var jackpotSpine = this.jackpotNode.getComponentInChildren(sp.Skeleton);
                jackpotSpine.setAnimation(0, "jackport", true);
                this.showCoins(prize);
                cc.Tween.stopAllByTarget(this.nodeWinJackpot);
                Tween_1.default.numberTo(this.txtWinJackpot, prize, 0.3);
                this.nodeWinJackpot.position = cc.v3(0, -360, 0);
                this.nodeWinJackpot.active = true;
                cc.tween(this.nodeWinJackpot)
                    .to(1, { position: cc.v3(0, 0, 0) })
                    .delay(3)
                    .to(1, { position: cc.v3(0, -360, 0) })
                    .start();
                this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                    _this.jackpotNode.active = false;
                    if (_this.toggleFast.isChecked) {
                        self.spinFinish(true);
                    }
                    else {
                        if (self.dataResult.linesWin !== "")
                            self.showLineWin(self.dataResult.linesWin.split(","));
                        else
                            self.spinFinish(false);
                    }
                    if (_this.isSound) {
                        cc.audioEngine.stop(audioIdJackpot);
                    }
                })));
                Tween_1.default.numberTo(this.winLabel, prize, 0.3);
                Tween_1.default.numberTo(this.totalWinLabel, prize, 0.3);
                Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], 0.3);
                if (!this.isTrial)
                    Tween_1.default.numberTo(this.moneyLabel, currentMoney, 0.3);
            }
            else {
                if (this.isSound) {
                    cc.audioEngine.play(this.soundSpinWin, false, 1);
                }
                this.winNormalBg.active = true;
                this.showCoins(prize);
                Tween_1.default.numberTo(this.winLabel, prize, 0.3);
                Tween_1.default.numberTo(this.totalWinLabel, prize, 0.3);
                Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], 0.3);
                if (!this.isTrial)
                    Tween_1.default.numberTo(this.moneyLabel, currentMoney, 0.3);
                if (this.toggleFast.isChecked) {
                    if (self.dataResult.linesWin !== "")
                        self.showLineWin(self.dataResult.linesWin.split(","));
                    else
                        self.spinFinish(false);
                }
                else {
                    if (self.dataResult.linesWin !== "")
                        self.showLineWin(self.dataResult.linesWin.split(","));
                    else
                        self.spinFinish(false);
                }
            }
        }
        else {
            Tween_1.default.numberTo(this.totalWinLabel, prize, 0.3);
            Tween_1.default.numberTo(this.totalBetLabel, this.arrLineSelected.length * this.listBet[this.betId], 0.3);
            if (!this.isTrial)
                Tween_1.default.numberTo(this.moneyLabel, currentMoney, 0.3);
            if (this.toggleFast.isChecked) {
                if (self.dataResult.linesWin !== "")
                    self.showLineWin(self.dataResult.linesWin.split(","));
                else
                    self.spinFinish(false);
            }
            else {
                if (self.dataResult.linesWin !== "")
                    self.showLineWin(self.dataResult.linesWin.split(","));
                else
                    self.spinFinish(false);
            }
        }
    };
    Slot8Controller.prototype.beginSpinReel = function (indexReel) {
        var self = this;
        self.isFastCurrent = self.toggleFast.isChecked;
        self.numberSpinReel[indexReel] = 0;
        cc.Tween.stopAllByTarget(self.arrReel[indexReel]);
        cc.tween(self.arrReel[indexReel])
            .delay(indexReel * 0.2)
            .to(0.1, { position: cc.v3(self.arrReel[indexReel].position.x, 70, 0) }, { easing: "linear" })
            .call(function () {
            self.loopSpinReel(indexReel);
        })
            .start();
    };
    Slot8Controller.prototype.loopSpinReel = function (indexReel) {
        var self = this;
        var speed = this.toggleFast.isChecked ? 0.04 : 0.07;
        cc.tween(self.arrReel[indexReel])
            .to(speed, { position: cc.v3(self.arrReel[indexReel].position.x, -self.distanceReel, 0) }, { easing: "linear" })
            .call(function () {
            self.processLoopSpinReel(indexReel);
        })
            .start();
    };
    Slot8Controller.prototype.processLoopSpinReel = function (indexReel) {
        var self = this;
        self.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
            var index = indexReel + (i * 5);
            var indexRow = Math.floor(index / 5);
            var itemIdTmp = 0;
            if (indexRow == 0) {
                itemIdTmp = Math.floor(Math.random() * 7);
            }
            else {
                itemIdTmp = self.arrUIItemIcon[index - 5].itemId;
            }
            self.arrUIItemIcon[index].changeSpriteBlurByItemId(itemIdTmp);
        }
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, 0, 0);
        if (self.isHaveResultSpin) {
            if (self.isFastCurrent == false) {
                if (self.numberSpinReel[indexReel] >= MAX_CYCCLE_SPIN) {
                    self.endSpinReel(indexReel);
                }
                else {
                    self.loopSpinReel(indexReel);
                }
            }
            else {
                if (self.numberSpinReel[indexReel] >= FAST_CYCCLE_SPIN) {
                    self.endSpinReel(indexReel);
                }
                else {
                    self.loopSpinReel(indexReel);
                }
            }
        }
        else {
            if (self.numberSpinReel[indexReel] >= ERROR_CYCCLE_SPIN) {
                self.endSpinReel(indexReel);
            }
            else {
                self.loopSpinReel(indexReel);
            }
        }
    };
    Slot8Controller.prototype.endSpinReel = function (indexReel) {
        var _this = this;
        var self = this;
        if (self.dataResult == null) {
            for (var i = 3; i >= 1; i--) {
                var index = indexReel + (i * 5);
                var itemId = Math.floor(Math.random() * 7);
                self.arrUIItemIcon[index].changeSpineIcon(itemId);
            }
            return;
        }
        var matrix = self.dataResult.matrix.split(',');
        var roll = this.arrReel[indexReel];
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, self.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
            var index = indexReel + (i * 5);
            self.arrUIItemIcon[index].changeSpineIcon(matrix[index - 5]);
        }
        var speed = this.toggleFast.isChecked ? 0.15 : 0.3;
        cc.tween(self.arrReel[indexReel])
            .to(speed, { position: cc.v3(self.arrReel[indexReel].position.x, 0, 0) }, { easing: "backOut" })
            .call(function () {
            if (self.isSound) {
                cc.audioEngine.play(self.soundEndSpin, false, 1);
            }
            if (indexReel == 4) {
                cc.audioEngine.stop(_this.audioIdRepeatSpin);
                Configs_1.default.Login.Coin = self.dataResult.currentMoney;
                if (self.dataResult.currentNumberFreeSpin > 0) {
                    self.freespinCurrent.active = true;
                    self.freespinCurrent.getComponentInChildren(cc.Label).string = self.dataResult.currentNumberFreeSpin;
                }
                else {
                    self.freespinCurrent.active = false;
                }
                if (self.dataResult.isFreeSpin == 1) {
                    _this.freespinNode.active = true;
                    var freeSpineSpine = _this.freespinNode.getComponentInChildren(sp.Skeleton);
                    freeSpineSpine.setAnimation(0, "animation", true);
                    _this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                        _this.freespinNode.active = false;
                        if (self.dataResult.linesWin !== "")
                            self.showLineWin(self.dataResult.linesWin.split(","));
                        else
                            self.spinFinish(false);
                    })));
                }
                else {
                    self.showWinEffect(self.dataResult.prize, self.dataResult.currentMoney, self.dataResult.result);
                }
            }
        })
            .start();
    };
    Slot8Controller.prototype.getSpriteFrameIconBlur = function (indexIcon) {
        var self = this;
        if (this.betId == -1)
            return self.iconSFBlurArr10K[indexIcon];
        else if (this.betId == 0)
            return self.iconSFBlurArr100[indexIcon];
        else if (this.betId == 1)
            return self.iconSFBlurArr1K[indexIcon];
        else if (this.betId == 2)
            return self.iconSFBlurArr10K[indexIcon];
    };
    Slot8Controller.prototype.getSpriteFrameIcon = function (indexIcon) {
        var self = this;
        if (this.betId == -1)
            return self.iconSFArr10K[indexIcon];
        else if (this.betId == 0)
            return self.iconSFArr100[indexIcon];
        else if (this.betId == 1)
            return self.iconSFArr1K[indexIcon];
        else if (this.betId == 2)
            return self.iconSFArr10K[indexIcon];
    };
    Slot8Controller.prototype.getSpineIcon = function (indexIcon) {
        var self = this;
        if (this.betId == -1)
            return self.arrSkeletonIcon10K[indexIcon];
        else if (this.betId == 0)
            return self.arrSkeletonIcon100[indexIcon];
        else if (this.betId == 1)
            return self.arrSkeletonIcon1K[indexIcon];
        else if (this.betId == 2)
            return self.arrSkeletonIcon10K[indexIcon];
    };
    Slot8Controller.prototype.hideWinEffect = function () {
        this.winNormalBg.active = false;
        this.winLabel.string = "0";
        this.bonusNode.active = false;
        this.bigWinNode.active = false;
        this.jackpotNode.active = false;
    };
    Slot8Controller.prototype.onBtnToggleMusic = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isMusic = !this.isMusic;
        cc.audioEngine.setMusicVolume(this.isMusic ? 0.5 : 0);
    };
    Slot8Controller.prototype.onBtnToggleSound = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isSound = !this.isSound;
    };
    Slot8Controller.prototype.onBtnHistory = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.onBtnHideSetting();
    };
    Slot8Controller.prototype.onBtnHistoryJackpot = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.onBtnHideSetting();
    };
    Slot8Controller.prototype.onBtnHideSetting = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        Tween_1.default.hidePopup(this.nodeBoxSetting, this.nodeBoxSetting.parent, false);
    };
    Slot8Controller.prototype.onBtnSoundClick = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
    };
    Slot8Controller.prototype.onBtnSetting = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.toggleMusic.isChecked = this.isMusic;
        this.toggleSound.isChecked = this.isSound;
        // Tween.showPopup(this.nodeBoxSetting, this.nodeBoxSetting.parent);
        this.nodeBoxSetting.active = !this.nodeBoxSetting.active;
    };
    Slot8Controller.prototype.showLineWin = function (lines) {
        var _this = this;
        //  cc.log("show line win");
        if (lines.length == 0)
            return;
        this.changeAllItemToDark(true);
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            //  cc.log("showLIneWin :" + i + " : " + line);
            var lineNode = this.lineWinParent.children[line - 1];
            lineNode.active = true;
        }
        var that = this;
        //hide all line
        this.lineWinParent.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            that.hideLineWin(false);
        })));
        if (this.toggleFast.isChecked) {
            this.lineWinParent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () {
                _this.spinFinish(false);
            })));
        }
        else {
            this.lineWinParent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () {
                _this.winNormalBg.active = false;
                _this.lineWinParent.setSiblingIndex(0);
                _this.colParent.setSiblingIndex(1);
                var _loop_1 = function (i) {
                    var line = lines[i];
                    var lineNode = _this.lineWinParent.children[line - 1];
                    _this.lineWinParent.runAction(cc.sequence(cc.delayTime(i * _this.TIME_DELAY_SHOW_LINE), cc.callFunc(function () {
                        lineNode.active = true;
                        var arrItem = _this.getItemWinInLine(line - 1);
                        var arrIdOfItem = [];
                        var idWin = -1;
                        arrItem.forEach(function (item) {
                            arrIdOfItem.push(item.itemId);
                        });
                        arrItem.forEach(function (item) {
                            idWin = _this.getItemIdWinInLine(arrIdOfItem);
                            if (item.itemId == idWin) {
                                item.checkShowSpriteOrSpine();
                            }
                        });
                    }), cc.delayTime(_this.TIME_DELAY_SHOW_LINE), cc.callFunc(function () {
                        lineNode.active = false;
                        if (i == lines.length - 1)
                            that.spinFinish(false);
                    })));
                };
                //active line one by one
                for (var i = 0; i < lines.length; i++) {
                    _loop_1(i);
                }
            })));
        }
    };
    Slot8Controller.prototype.hideLineWin = function (stopAction) {
        if (stopAction)
            this.lineWinParent.stopAllActions();
        this.lineWinParent.children.forEach(function (element) {
            element.active = false;
        });
    };
    Slot8Controller.prototype.setButtonEnable = function (active) {
        this.btnSpin.interactable = active;
        this.btnBack.interactable = active;
        this.btnLine.interactable = active;
        if (active == true) {
            this.skeSpin.node.color = cc.Color.WHITE;
            this.skeSpin.setAnimation(0, "quay", true);
        }
        else {
            this.skeSpin.setAnimation(0, "quay2", true);
            this.skeSpin.node.color = cc.Color.GRAY;
        }
    };
    Slot8Controller.prototype.setButtonFlash = function (active) {
        this.toggleFast.interactable = active;
        this.toggleFast.node.children[0].color = active ? cc.Color.WHITE : cc.Color.GRAY;
    };
    //#region CHANGE BET
    Slot8Controller.prototype.changeBet = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.mSlotLobby.node.active = !this.mSlotLobby.node.active;
    };
    Slot8Controller.prototype.chooseBet = function (event, bet) {
        var oldIdx = this.betId;
        this.betId = parseInt(bet);
        this.dailyFreeSpin = 0;
        this.lblFreeSpinCount.node.parent.active = false;
        this.isTrial = bet == -1 ? true : false;
        this.betId = bet == -1 ? 2 : bet;
        if (this.betId >= this.listBet.length) {
            this.betId = 0;
            SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        }
        else {
            SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        }
        this.lbCurrentRoom.string = bet == "0" ? "100" : Utils_1.default.formatNumber(1000);
        if (bet == 2)
            this.lbCurrentRoom.string = Utils_1.default.formatNumber(10000);
    };
    Slot8Controller.prototype.showGuide = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.popupGuide.show(this);
    };
    Slot8Controller.prototype.closeGuide = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.popupGuide.hide();
    };
    Slot8Controller.prototype.showChooseLine = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
    };
    Slot8Controller.prototype.changeSpeed = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isFastCurrent = this.toggleFast.isChecked;
        if (!this.toggleAuto.isChecked) {
            this.toggleAuto.check();
        }
        if (this.toggleFast.isChecked && !this.isSpining) {
            this.spinClick();
        }
    };
    Slot8Controller.prototype.setAutoSpin = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (!this.isSpining) {
            this.spinClick();
        }
    };
    Slot8Controller.prototype.actBack = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.lineWinParent.stopAllActions();
        SlotNetworkClient_1.default.getInstance().send(new Slot8Cmd_1.default.SendUnSubcribe(this.betId));
        this.mSlotLobby.show();
        this.hideGamePlay();
    };
    Slot8Controller.prototype.changeAllItemToDark = function (state) {
        this.arrUIItemIcon.forEach(function (item) {
            var sprite = item.getComponentInChildren(cc.Sprite);
            var spine = item.getComponentInChildren(sp.Skeleton);
            sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            sprite.node.active = true;
            spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            spine.node.active = false;
            spine.node.scale = 0.65;
            sprite.node.scale = 1.0;
        });
    };
    Slot8Controller.prototype.getItemWinInLine = function (lineId) {
        var lineArr = this.mapLine[lineId];
        var arrItem = [];
        for (var i = 0; i < lineArr.length; i++) {
            arrItem.push(this.arrRealItem[lineArr[i]]);
        }
        return arrItem;
    };
    Slot8Controller.prototype.getItemIdWinInLine = function (arrId) {
        var count = 0;
        var idWin = -1;
        arrId.forEach(function (id) {
            var size = arrId.filter(function (x) { return x == id; }).length;
            if (size >= count) {
                count = size;
                idWin = id;
            }
        });
        return idWin;
    };
    Slot8Controller.prototype.actGuide = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.popupGuide == null) {
            BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/PopupGuide", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupGuide = cc.instantiate(prefab).getComponent("Dialog");
                _this.popupGuide.node.parent = _this.popupContainer;
                _this.popupGuide.show();
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    Slot8Controller.prototype.actHistory = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/History", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHistory = cc.instantiate(prefab).getComponent("Slot8History");
                _this.popupHistory.node.parent = _this.popupContainer;
                _this.popupHistory.show();
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    Slot8Controller.prototype.actHistoryJackpot = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupHonor == null) {
            BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/Glory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupHonor = cc.instantiate(prefab).getComponent("Slot8Glory");
                _this.popupHonor.node.parent = _this.popupContainer;
                _this.popupHonor.show();
            });
        }
        else {
            this.popupHonor.show();
        }
    };
    Slot8Controller.prototype.actChooseLine = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupChooseLine == null) {
            BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/ChooseLine", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupChooseLine = cc.instantiate(prefab).getComponent("Slot8ChooseLine");
                _this.popupChooseLine.node.parent = _this.popupContainer;
                _this.popupChooseLine.showPopup(_this.arrLineSelected);
                _this.popupChooseLine.onSelectedChanged = function (lines) {
                    _this.arrLineSelected = lines;
                    _this.totalLineLabel.string = lines.length.toString();
                    Tween_1.default.numberTo(_this.totalBetLabel, lines.length * _this.listBet[_this.betId], 0.3);
                };
            });
        }
        else {
            this.popupChooseLine.showPopup(this.arrLineSelected);
        }
    };
    Slot8Controller.prototype.actShowBonus = function (isTrial, dataHaiSao, cb) {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundBonus, false, 1);
        }
        if (this.popupBonus == null) {
            BundleControl_1.default.loadPrefabGame("Slot8", "thanbai/prefabs/PopupBonus", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupBonus = cc.instantiate(prefab).getComponent("Slot8.PopupBonus");
                _this.popupBonus.node.parent = _this.popupContainer;
                _this.popupBonus.showBonus(isTrial, dataHaiSao, _this, cb);
            });
        }
        else {
            this.popupBonus.showBonus(isTrial, dataHaiSao, this, cb);
        }
    };
    __decorate([
        property(cc.Button)
    ], Slot8Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "initNodeCoin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot8Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "nodeBoxSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "popupContainer", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot8Controller.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot8Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(Slot8_PopupBonus_1.default)
    ], Slot8Controller.prototype, "popupBonus", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot8Controller.prototype, "skeSpin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "nodeDemo", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "nodeWinJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "txtWinJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "nodeGamePlay", void 0);
    __decorate([
        property(Slot8_Lobby_1.default)
    ], Slot8Controller.prototype, "mSlotLobby", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "jackpotLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "totalLineLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Slot8Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot8Controller.prototype, "toggleFast", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot8Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "winNormalBg", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "bonusNode", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "bigWinNode", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "txtWinBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "jackpotNode", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "freespinNode", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "winLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "lbCurrentRoom", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "freespinCurrent", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "lineWinParent", void 0);
    __decorate([
        property(cc.Node)
    ], Slot8Controller.prototype, "colParent", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "totalWinLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot8Controller.prototype, "totalBetLabel", void 0);
    __decorate([
        property(Slot8ChooseLine_1.default)
    ], Slot8Controller.prototype, "popupChooseLine", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "musicLobby", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "musicGame", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "musicBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundStartSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundRepeatSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundEndSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundFreeSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundtouchBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot8Controller.prototype, "soundSmumary", void 0);
    __decorate([
        property([cc.Node])
    ], Slot8Controller.prototype, "arrReel", void 0);
    __decorate([
        property
    ], Slot8Controller.prototype, "distanceReel", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Controller.prototype, "iconSFBlurArr100", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Controller.prototype, "iconSFArr100", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot8Controller.prototype, "arrSkeletonIcon100", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Controller.prototype, "iconSFBlurArr1K", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Controller.prototype, "iconSFArr1K", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot8Controller.prototype, "arrSkeletonIcon1K", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Controller.prototype, "iconSFBlurArr10K", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot8Controller.prototype, "iconSFArr10K", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot8Controller.prototype, "arrSkeletonIcon10K", void 0);
    __decorate([
        property([Slot8_ItemSlot_1.default])
    ], Slot8Controller.prototype, "arrUIItemIcon", void 0);
    __decorate([
        property([Slot8_ItemSlot_1.default])
    ], Slot8Controller.prototype, "arrRealItem", void 0);
    Slot8Controller = __decorate([
        ccclass
    ], Slot8Controller);
    return Slot8Controller;
}(cc.Component));
exports.default = Slot8Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDhcXFNsb3Q4U2NyaXB0XFxTbG90OENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZCO0FBRTdCLHFEQUFnRDtBQUNoRCx1REFBa0Q7QUFFbEQsNkNBQXVDO0FBQ3ZDLHVEQUFpRDtBQUVqRCxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsNkZBQWdGO0FBQ2hGLCtGQUEwRjtBQUUxRixxREFBZ0Q7QUFDaEQsbURBQTZDO0FBQzdDLGlFQUE0RDtBQUc1RCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUEwc0NDO1FBeHNDRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBRW5DLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Is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QUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pC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QUMsWUFBWSxDQUFDLENBQUM7K0RBQ2U7SUFHM0M7UUFEQyxRQUFRLENBQUMsQ0FBQyx3QkFBYSxDQUFDLENBQUM7MERBQ1U7SUFFcEM7UUFEQyxRQUFRLENBQUMsQ0FBQyx3QkFBYSxDQUFDLENBQUM7d0RBQ1E7SUF2TGpCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0Ewc0NuQztJQUFELHNCQUFDO0NBMXNDRCxBQTBzQ0MsQ0Exc0M0QyxFQUFFLENBQUMsU0FBUyxHQTBzQ3hEO2tCQTFzQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gJy4vU2xvdDhDbWQnO1xuXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IFNsb3Q0VHJpYWxSZXN1bHQgZnJvbSAnLi9TbG90OFRyaWFsUmVzdWx0JztcblxuaW1wb3J0IFNsb3Q4TG9iYnkgZnJvbSBcIi4vU2xvdDguTG9iYnlcIjtcbmltcG9ydCBTbG90OFBvcHVwQm9udXMgZnJvbSBcIi4vU2xvdDguUG9wdXBCb251c1wiO1xuaW1wb3J0IFNsb3Q4VHV0b3JpYWwgZnJvbSBcIi4vU2xvdDguVHV0b3JpYWxcIjtcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHAnO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXInO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW4nO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVXRpbHMnO1xuaW1wb3J0IEluUGFja2V0IGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9OZXR3b3JrLkluUGFja2V0JztcbmltcG9ydCBTbG90TmV0d29ya0NsaWVudCBmcm9tICcuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnQnO1xuaW1wb3J0IFVJSXRlbUljb25TbG90MjUgZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L0Jhc2VTbG90MjUvSXRlbUljb25TbG90MjUnO1xuaW1wb3J0IFNsb3Q4Q2hvb3NlTGluZSBmcm9tICcuL1Nsb3Q4Q2hvb3NlTGluZSc7XG5pbXBvcnQgU2xvdDhJdGVtU2xvdCBmcm9tICcuL1Nsb3Q4Lkl0ZW1TbG90JztcbmltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gJy4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2wnO1xuaW1wb3J0IFNsb3Q4SGlzdG9yeSBmcm9tICcuL1Nsb3Q4SGlzdG9yeSc7XG5pbXBvcnQgU2xvdDhHbG9yeSBmcm9tICcuL1Nsb3Q4R2xvcnknO1xudmFyIE1BWF9DWUNDTEVfU1BJTiA9IDIwO1xudmFyIEZBU1RfQ1lDQ0xFX1NQSU4gPSAxMDtcbnZhciBFUlJPUl9DWUNDTEVfU1BJTiA9IDUwO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDhDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUNvaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGluaXROb2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5MaW5lOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxGcmVlU3BpbkNvdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZUJveFNldHRpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBvcHVwQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZU11c2ljOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFNsb3Q4UG9wdXBCb251cylcbiAgICBwb3B1cEJvbnVzOiBTbG90OFBvcHVwQm9udXMgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShzcC5Ta2VsZXRvbilcbiAgICBza2VTcGluOiBzcC5Ta2VsZXRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZURlbW86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVXaW5KYWNrcG90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0V2luSmFja3BvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVHYW1lUGxheTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFNsb3Q4TG9iYnkpXG4gICAgbVNsb3RMb2JieTogU2xvdDhMb2JieSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGphY2twb3RMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIG1vbmV5TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRvdGFsTGluZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blNwaW46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVGYXN0OiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQXV0bzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIC8vd2luXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgd2luTm9ybWFsQmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJvbnVzTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYmlnV2luTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dFdpbkJpZ1dpbjogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGphY2twb3ROb2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmcmVlc3Bpbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB3aW5MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYkN1cnJlbnRSb29tOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnJlZXNwaW5DdXJyZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvL2xpbmUgd2luXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGluZVdpblBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBjb2xQYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vc2hvdyByZXN1bHRcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdG90YWxXaW5MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0b3RhbEJldExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvL2Nob29zZSBsaW5lXG4gICAgQHByb3BlcnR5KFNsb3Q4Q2hvb3NlTGluZSlcbiAgICBwb3B1cENob29zZUxpbmU6IFNsb3Q4Q2hvb3NlTGluZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBtdXNpY0xvYmJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG11c2ljR2FtZTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBtdXNpY0JvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFN0YXJ0U3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFJlcGVhdFNwaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRFbmRTcGluOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kSmFja3BvdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kRnJlZVNwaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmR0b3VjaEJvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU211bWFyeTogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBwcml2YXRlIGxpc3RBY3RpdmVJdGVtOiBjYy5Ob2RlW10gPSBbXTsgICAgICAgICAvL2xpc3QgMTUgaXRlbSBuaGluIHRoYXkgdHJlbiBtYW4gaGluaFxuXG4gICAgcHJpdmF0ZSBUSU1FX0RFTEFZX1NIT1dfTElORTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIGRhaWx5RnJlZVNwaW4gPSAwO1xuICAgIHB1YmxpYyBiZXRJZCA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0QmV0ID0gWzEwMCwgMTAwMCwgMTAwMDBdO1xuICAgIHByaXZhdGUgbGlzdEJldFN0cmluZyA9IFtcIjEwMFwiLCBcIjFLXCIsIFwiMTBLXCJdO1xuICAgIHByaXZhdGUgYXJyTGluZVNlbGVjdGVkID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF07XG4gICAgcHVibGljIGlzVHJpYWw6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzU3BpbmluZzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgbWFwTGluZSA9IFtcbiAgICAgICAgWzUsIDYsIDcsIDgsIDldLC8vMVxuICAgICAgICBbMCwgMSwgMiwgMywgNF0sLy8yXG4gICAgICAgIFsxMCwgMTEsIDEyLCAxMywgMTRdLC8vM1xuICAgICAgICBbNSwgNiwgMiwgOCwgOV0sLy80XG4gICAgICAgIFs1LCA2LCAxMiwgOCwgOV0sLy81XG4gICAgICAgIFswLCAxLCA3LCAzLCA0XSwvLzZcbiAgICAgICAgWzEwLCAxMSwgNywgMTMsIDE0XSwvLzdcbiAgICAgICAgWzAsIDExLCAyLCAxMywgNF0sLy84XG4gICAgICAgIFsxMCwgMSwgMTIsIDMsIDE0XSwvLzlcbiAgICAgICAgWzUsIDEsIDEyLCAzLCA5XSwvLzEwXG4gICAgICAgIFsxMCwgNiwgMiwgOCwgMTRdLC8vMTFcbiAgICAgICAgWzAsIDYsIDEyLCA4LCA0XSwvLzEyXG4gICAgICAgIFs1LCAxMSwgNywgMywgOV0sLy8xM1xuICAgICAgICBbNSwgMSwgNywgMTMsIDldLC8vMTRcbiAgICAgICAgWzEwLCA2LCA3LCA4LCAxNF0sLy8xNVxuICAgICAgICBbMCwgNiwgNywgOCwgNF0sLy8xNlxuICAgICAgICBbNSwgMTEsIDEyLCAxMywgOV0sLy8xN1xuICAgICAgICBbNSwgMSwgMiwgMywgOV0sLy8xOFxuICAgICAgICBbMTAsIDExLCA3LCAzLCA0XSwvLzE5XG4gICAgICAgIFswLCAxLCA3LCAxMywgMTRdLy8yMFxuICAgIF07XG5cbiAgICAvL25ldyBcblxuICAgIHByaXZhdGUgaXNGYXN0Q3VycmVudCA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNGYXN0ID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGFyclJlZWw6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZGlzdGFuY2VSZWVsOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNGQmx1ckFycjEwMDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRkFycjEwMDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25EYXRhXSlcbiAgICBhcnJTa2VsZXRvbkljb24xMDA6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZCbHVyQXJyMUs6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZBcnIxSzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25EYXRhXSlcbiAgICBhcnJTa2VsZXRvbkljb24xSzogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRkJsdXJBcnIxMEs6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZBcnIxMEs6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW3NwLlNrZWxldG9uRGF0YV0pXG4gICAgYXJyU2tlbGV0b25JY29uMTBLOiBzcC5Ta2VsZXRvbkRhdGFbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtTbG90OEl0ZW1TbG90XSlcbiAgICBhcnJVSUl0ZW1JY29uOiBTbG90OEl0ZW1TbG90W10gPSBbXTtcbiAgICBAcHJvcGVydHkoW1Nsb3Q4SXRlbVNsb3RdKVxuICAgIGFyclJlYWxJdGVtOiBTbG90OEl0ZW1TbG90W10gPSBbXTtcbiAgICBwb3B1cEd1aWRlID0gbnVsbDtcbiAgICBwb3B1cEhpc3Rvcnk6IFNsb3Q4SGlzdG9yeSA9IG51bGw7XG4gICAgcG9wdXBIb25vcjogU2xvdDhHbG9yeSA9IG51bGw7XG5cblxuXG5cbiAgICBwdWJsaWMgbnVtYmVyU3BpblJlZWwgPSBudWxsO1xuICAgIHB1YmxpYyBpc0hhdmVSZXN1bHRTcGluID0gZmFsc2U7XG4gICAgcHVibGljIGRhdGFSZXN1bHQgPSBudWxsO1xuICAgIHByaXZhdGUgaXNGaXJzdCA9IGZhbHNlO1xuXG4gICAgcHVibGljIGlzU291bmQgPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNNdXNpYyA9IHRydWU7XG4gICAgbXV0aXBsZUpwTm9kZSA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gMDtcbiAgICAgICAgdGhpcy5pc1NvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc011c2ljID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHZhciBtdXNpY0lkID0gMDtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubVNsb3RMb2JieS5vbkJ0bkJhY2soKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cblxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICAvLyAvLyAgY2MubG9nKGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfSkFDS1BPVF9TTE9UUzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm9uVXBkYXRlSmFja3BvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfUE9UOlxuICAgICAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVVcGRhdGVQb3QoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwidXBkYXRlIEphY2twb3Q6XCIrKHRoaXMuYmV0SWQgPT0gMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmV0SWQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmphY2twb3RMYWJlbCwgcmVzLnZhbHVlUm9vbTMsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmphY2twb3RMYWJlbCwgcmVzLnZhbHVlUm9vbTEsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmphY2twb3RMYWJlbCwgcmVzLnZhbHVlUm9vbTIsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmphY2twb3RMYWJlbCwgcmVzLnZhbHVlUm9vbTMsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9SRVNVTFQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVSZXN1bHQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkZSRUVfREFJX0xZOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVGcmVlRGFpTHkoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gcmVzLmZyZWVTcGluO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5kYWlseUZyZWVTcGluICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBVEVfWDI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVEYXRlWDIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZpcnN0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92dWEgdmFvIGxvYmJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlR2FtZVBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkpvaW5Sb29tKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSEFOR0VfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNoYW5nZVJvb206XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFN1YmNyaWJlKDApKTtcblxuXG4gICAgICAgIEJyb2FkY2FzdFJlY2VpdmVyLnJlZ2lzdGVyKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4sICgpID0+IHtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubW9uZXlMYWJlbCwgQ29uZmlncy5Mb2dpbi5Db2luLCAwLjMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIuc2VuZChCcm9hZGNhc3RSZWNlaXZlci5VU0VSX1VQREFURV9DT0lOKTtcblxuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoXCLEkGFuZyBr4bq/dCBu4buRaSB04bubaSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuY2hlY2tDb25uZWN0KCgpID0+IHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG5cblxuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5pbml0KHRoaXMpO1xuXG4gICAgICAgIC8vdGhpcy5pbml0TXV0aXBsZUpQTm9kZSgpO1xuICAgIH1cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKGZhbHNlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0TXV0aXBsZUpQTm9kZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11dGlwbGVKcE5vZGUpIHtcbiAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoXCJMb2JieVwiKS5sb2FkKFwicHJlZmFicy9NdXRpcGxlSmFja3BvdFByXCIsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGZpbmlzaCwgdG90YWwsIGl0ZW0pIHtcbiAgICAgICAgICAgIH0sIChlcnIxLCBwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIxICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImVycnIgbG9hZCBnYW1lIFRJRU5MRU46XCIsIGVycjEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiTXV0aXBsZUphY2twb3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZS5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLnNldEluZm8oXCJBTkdSWVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dBbmltYXRpb25zKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5hcnJVSUl0ZW1JY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9kZUl0ZW0gPSBzZWxmLmFyclVJSXRlbUljb25baV0ubm9kZUJveDtcbiAgICAgICAgICAgIHZhciBpbmRleENvbCA9IGkgJSA1O1xuICAgICAgICAgICAgbm9kZUl0ZW0ub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBub2RlSXRlbS5wb3NpdGlvbiA9IGNjLnYzKDAsIHNlbGYuZGlzdGFuY2VSZWVsLCAwKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGVJdGVtKVxuICAgICAgICAgICAgICAgIC5kZWxheShpbmRleENvbCAqIDAuMSlcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCksIG9wYWNpdHk6IDI1NSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dHYW1lUGxheSgpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNNdXNpYykgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMubXVzaWNHYW1lLCB0cnVlKTtcbiAgICAgICAgdGhpcy5yYW5kb21JY29uTGlzdCgpO1xuICAgICAgICB0aGlzLm5vZGVHYW1lUGxheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNob3dBbmltYXRpb25zKCk7XG4gICAgfVxuXG4gICAgaGlkZUdhbWVQbGF5KCkge1xuICAgICAgICAvLyBpZiAodGhpcy5pc011c2ljKSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5tdXNpY0xvYmJ5LCB0cnVlKTtcbiAgICAgICAgdGhpcy5ub2RlR2FtZVBsYXkuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0NvaW5zKHByaXplKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSBwcml6ZSAvIDIwMDAwO1xuICAgICAgICBpZiAobnVtYmVyIDw9IDEwKSBudW1iZXIgPSAxMDtcbiAgICAgICAgZWxzZSBpZiAobnVtYmVyID49IDIwKSBudW1iZXIgPSAyMDtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dDb2lucyhudW1iZXIsIHRoaXMuaW5pdE5vZGVDb2luLCB0aGlzLm5vZGVDb2luKTtcbiAgICB9XG4gICAgcHVibGljIG9uSm9pblJvb20ocmVzID0gbnVsbCkge1xuICAgICAgICB2YXIgYmV0SWRUbXAgPSB0aGlzLmJldElkO1xuICAgICAgICBpZiAoYmV0SWRUbXAgPT0gLTEpIGJldElkVG1wID0gMjtcbiAgICAgICAgbGV0IHRvdGFsYmV0ID0gKHRoaXMuYXJyTGluZVNlbGVjdGVkLmxlbmd0aCAqIHRoaXMubGlzdEJldFtiZXRJZFRtcF0pO1xuICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsQmV0TGFiZWwsIHRvdGFsYmV0LCAwLjMpO1xuICAgICAgICB0aGlzLm1TbG90TG9iYnkuaGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGVEZW1vLmFjdGl2ZSA9IHRoaXMuaXNUcmlhbCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93R2FtZVBsYXkoKTtcbiAgICAgICAgdGhpcy5zZXRCdXR0b25FbmFibGUodHJ1ZSk7XG5cbiAgICAgICAgaWYgKHJlcyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZyZWVzcGluQ3VycmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZXMuZnJlZVNwaW4gKyB0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlc3BpbkN1cnJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVzcGluQ3VycmVudC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSByZXMuZnJlZVNwaW4gKyB0aGlzLmRhaWx5RnJlZVNwaW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVzcGluQ3VycmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmFuZG9tSWNvbkxpc3QoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFyclVJSXRlbUljb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGk7XG4gICAgICAgICAgICB2YXIgaXRlbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uaW5pdChpdGVtSWQsIGluZGV4LCBzZWxmKTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5jaGFuZ2VTcGluZUljb24oaXRlbUlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHJhbmRvbSBiZXR3ZWVuLCBtaW4sIG1heCBpbmNsdWRlZFxuICAgICAqL1xuICAgIHJhbmRvbUJldHdlZW4obWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xuICAgIH1cblxuICAgIHNwaW5DbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvL2hpZGUgZWZmZWN0XG5cbiAgICAgICAgLy8gdGhpcy5zZXRCdXR0b25BdXRvKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCdXR0b25GbGFzaChmYWxzZSk7XG4gICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluLS07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGFpbHlGcmVlU3BpbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5zdHJpbmcgPSB0aGlzLmRhaWx5RnJlZVNwaW4gKyBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPCB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0gKiB0aGlzLmFyckxpbmVTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRlV2luRWZmZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVMaW5lV2luKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25FbmFibGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kUGxheSh0aGlzLmFyckxpbmVTZWxlY3RlZC50b1N0cmluZygpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVXaW5FZmZlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUxpbmVXaW4odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkVuYWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsV2luTGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBySWR4ID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgU2xvdDRUcmlhbFJlc3VsdC5yZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHQoU2xvdDRUcmlhbFJlc3VsdC5yZXN1bHRzW3JJZHhdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuU291bmRUb3VjaEJvbnVzKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmR0b3VjaEJvbnVzLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJ0blNvdW5kU3VtYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTbXVtYXJ5LCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNNdXNpYykgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMubXVzaWNHYW1lLCB0cnVlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGF1ZGlvSWRSZXBlYXRTcGluID0gMDtcbiAgICBzcGluUmVzdWx0KHJlczogY21kLlJlY2VpdmVSZXN1bHQgfCBhbnkpIHtcbiAgICAgICAgdGhpcy5pc1NwaW5pbmcgPSB0cnVlO1xuICAgICAgICAvLyAgY2MubG9nKFwic3BpblJlc3VsdDpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuXG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgc3VjY2Vzc1Jlc3VsdCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2XTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5yZXN1bHQ7XG4gICAgICAgIGlmIChzdWNjZXNzUmVzdWx0LmluZGV4T2YocmVzdWx0KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vZmFpbFxuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gMTAyKSB7XG4gICAgICAgICAgICAgICAgLy9raG9uZyBkdSB0aWVuXG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNvIGR1IGtob25nIGR1XCIpO1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RfZW5vdWdoXCIpKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiY28gbG9pIHhheSByYVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2V0IGljb25cbiAgICAgICAgbGV0IG1hdHJpeCA9IHJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgICAgICB0aGlzLm51bWJlclNwaW5SZWVsID0gbmV3IEFycmF5KHRoaXMuYXJyUmVlbC5sZW5ndGgpO1xuICAgICAgICB0aGlzLmRhdGFSZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMuaXNIYXZlUmVzdWx0U3BpbiA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3RhcnRTcGluLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgdGhpcy5hdWRpb0lkUmVwZWF0U3BpbiA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFJlcGVhdFNwaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJyUmVlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5iZWdpblNwaW5SZWVsKGkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzcGluRmluaXNoKGhhc0RlbGF5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNTcGluaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKGZhbHNlKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShoYXNEZWxheSA/IDEgOiAwKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnRvZ2dsZUZhc3QuaXNDaGVja2VkfHx0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNwaW5DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRCdXR0b25FbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldEJ1dHRvbkZsYXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgfVxuXG4gICAgc2hvd1dpbkVmZmVjdChwcml6ZTogbnVtYmVyLCBjdXJyZW50TW9uZXk6IG51bWJlciwgcmVzdWx0OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAocHJpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVXaW5QYXJlbnQuc2V0U2libGluZ0luZGV4KDEpO1xuICAgICAgICAgICAgdGhpcy5jb2xQYXJlbnQuc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PSA1KSB7XG4gICAgICAgICAgICAgICAgLy9ib251c1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ib251c05vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYm9udXNTcGluZSA9IHRoaXMuYm9udXNOb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGJvbnVzU3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwiYm91bnVzXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9udXNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTXVzaWMpIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm11c2ljQm9udXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucG9wdXBCb251cy5zaG93Qm9udXModGhpcy5pc1RyaWFsID8gMTAwIDogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCB0aGlzLmRhdGFSZXN1bHQuaGFpU2FvLCB0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHdlZW4ubnVtYmVyVG8odGhpcy53aW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxCZXRMYWJlbCwgdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLnNwaW5GaW5pc2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RTaG93Qm9udXModGhpcy5pc1RyaWFsID8gMTAwIDogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCB0aGlzLmRhdGFSZXN1bHQuaGFpU2FvLCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy53aW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxCZXRMYWJlbCwgdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNwaW5GaW5pc2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ID09IDIgfHwgcmVzdWx0ID09IDYpIHtcbiAgICAgICAgICAgICAgICAvL3RoYW5nIGxvbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJpZ1dpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpZ1dpbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYmlnd2luU3BpbmUgPSB0aGlzLmJpZ1dpbk5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgYmlnd2luU3BpbmUuc2V0QW5pbWF0aW9uKDAsIFwidGhhbmdsb25cIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50eHRXaW5CaWdXaW4sIHByaXplLCAxLjUpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlnV2luTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNwaW5GaW5pc2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29pbnMocHJpemUpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMud2luTGFiZWwsIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbEJldExhYmVsLCB0aGlzLmFyckxpbmVTZWxlY3RlZC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0sIDAuMyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVHJpYWwpIFR3ZWVuLm51bWJlclRvKHRoaXMubW9uZXlMYWJlbCwgY3VycmVudE1vbmV5LCAwLjMpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAzIHx8IHJlc3VsdCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgLy9ubyBodVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF1ZGlvSWRKYWNrcG90ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSmFja3BvdCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdWRpb0lkSmFja3BvdCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNtdW1hcnksIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5qYWNrcG90Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBqYWNrcG90U3BpbmUgPSB0aGlzLmphY2twb3ROb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGphY2twb3RTcGluZS5zZXRBbmltYXRpb24oMCwgXCJqYWNrcG9ydFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2lucyhwcml6ZSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZVdpbkphY2twb3QpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudHh0V2luSmFja3BvdCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlV2luSmFja3BvdC5wb3NpdGlvbiA9IGNjLnYzKDAsIC0zNjAsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVdpbkphY2twb3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGVXaW5KYWNrcG90KVxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjMoMCwgMCwgMCkgfSlcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDMpXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MygwLCAtMzYwLCAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmphY2twb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3BpbkZpbmlzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHNlbGYuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkSmFja3BvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLndpbkxhYmVsLCBwcml6ZSwgMC4zKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsV2luTGFiZWwsIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxCZXRMYWJlbCwgdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCAwLjMpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSBUd2Vlbi5udW1iZXJUbyh0aGlzLm1vbmV5TGFiZWwsIGN1cnJlbnRNb25leSwgMC4zKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aW5Ob3JtYWxCZy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLndpbkxhYmVsLCBwcml6ZSwgMC4zKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsV2luTGFiZWwsIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxCZXRMYWJlbCwgdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCAwLjMpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSBUd2Vlbi5udW1iZXJUbyh0aGlzLm1vbmV5TGFiZWwsIGN1cnJlbnRNb25leSwgMC4zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHNlbGYuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsQmV0TGFiZWwsIHRoaXMuYXJyTGluZVNlbGVjdGVkLmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkXSwgMC4zKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSBUd2Vlbi5udW1iZXJUbyh0aGlzLm1vbmV5TGFiZWwsIGN1cnJlbnRNb25leSwgMC4zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICBlbHNlIHNlbGYuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBiZWdpblNwaW5SZWVsKGluZGV4UmVlbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXNGYXN0Q3VycmVudCA9IHNlbGYudG9nZ2xlRmFzdC5pc0NoZWNrZWQ7XG4gICAgICAgIHNlbGYubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA9IDA7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChzZWxmLmFyclJlZWxbaW5kZXhSZWVsXSk7XG4gICAgICAgIGNjLnR3ZWVuKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdKVxuICAgICAgICAgICAgLmRlbGF5KGluZGV4UmVlbCAqIDAuMilcbiAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIDcwLCAwKSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbG9vcFNwaW5SZWVsKGluZGV4UmVlbCkge1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHNwZWVkID0gdGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCA/IDAuMDQgOiAwLjA3O1xuICAgICAgICBjYy50d2VlbihzZWxmLmFyclJlZWxbaW5kZXhSZWVsXSlcbiAgICAgICAgICAgIC50byhzcGVlZCwgeyBwb3NpdGlvbjogY2MudjMoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24ueCwgLXNlbGYuZGlzdGFuY2VSZWVsLCAwKSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0xvb3BTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHByb2Nlc3NMb29wU3BpblJlZWwoaW5kZXhSZWVsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdICs9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSA0OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaW5kZXhSZWVsICsgKGkgKiA1KTtcblxuICAgICAgICAgICAgdmFyIGluZGV4Um93ID0gTWF0aC5mbG9vcihpbmRleCAvIDUpO1xuICAgICAgICAgICAgdmFyIGl0ZW1JZFRtcCA9IDA7XG4gICAgICAgICAgICBpZiAoaW5kZXhSb3cgPT0gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1JZFRtcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbUlkVG1wID0gc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4IC0gNV0uaXRlbUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5jaGFuZ2VTcHJpdGVCbHVyQnlJdGVtSWQoaXRlbUlkVG1wKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbiA9IGNjLnYzKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIDAsIDApO1xuICAgICAgICBpZiAoc2VsZi5pc0hhdmVSZXN1bHRTcGluKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc0Zhc3RDdXJyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA+PSBNQVhfQ1lDQ0xFX1NQSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID49IEZBU1RfQ1lDQ0xFX1NQSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID49IEVSUk9SX0NZQ0NMRV9TUElOKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZW5kU3BpblJlZWwoaW5kZXhSZWVsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBpbmRleFJlZWwgKyAoaSAqIDUpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICAgICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLmNoYW5nZVNwaW5lSWNvbihpdGVtSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXRyaXggPSBzZWxmLmRhdGFSZXN1bHQubWF0cml4LnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciByb2xsID0gdGhpcy5hcnJSZWVsW2luZGV4UmVlbF07XG4gICAgICAgIHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uID0gY2MudjMoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24ueCwgc2VsZi5kaXN0YW5jZVJlZWwsIDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4UmVlbCArIChpICogNSk7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLmNoYW5nZVNwaW5lSWNvbihtYXRyaXhbaW5kZXggLSA1XSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwZWVkID0gdGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCA/IDAuMTUgOiAwLjM7XG4gICAgICAgIGNjLnR3ZWVuKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdKVxuICAgICAgICAgICAgLnRvKHNwZWVkLCB7IHBvc2l0aW9uOiBjYy52MyhzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCAwLCAwKSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoc2VsZi5zb3VuZEVuZFNwaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4UmVlbCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0lkUmVwZWF0U3Bpbik7XG5cbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gc2VsZi5kYXRhUmVzdWx0LmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5jdXJyZW50TnVtYmVyRnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmZyZWVzcGluQ3VycmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcmVlc3BpbkN1cnJlbnQuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gc2VsZi5kYXRhUmVzdWx0LmN1cnJlbnROdW1iZXJGcmVlU3BpbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnJlZXNwaW5DdXJyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQuaXNGcmVlU3BpbiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVzcGluTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyZWVTcGluZVNwaW5lID0gdGhpcy5mcmVlc3Bpbk5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmVlU3BpbmVTcGluZS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJlZXNwaW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dXaW5FZmZlY3Qoc2VsZi5kYXRhUmVzdWx0LnByaXplLCBzZWxmLmRhdGFSZXN1bHQuY3VycmVudE1vbmV5LCBzZWxmLmRhdGFSZXN1bHQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgZ2V0U3ByaXRlRnJhbWVJY29uQmx1cihpbmRleEljb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5iZXRJZCA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmljb25TRkJsdXJBcnIxMEtbaW5kZXhJY29uXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaWNvblNGQmx1ckFycjEwMFtpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDEpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pY29uU0ZCbHVyQXJyMUtbaW5kZXhJY29uXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAyKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaWNvblNGQmx1ckFycjEwS1tpbmRleEljb25dO1xuICAgIH1cblxuICAgIGdldFNwcml0ZUZyYW1lSWNvbihpbmRleEljb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5iZXRJZCA9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmljb25TRkFycjEwS1tpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDApXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pY29uU0ZBcnIxMDBbaW5kZXhJY29uXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAxKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaWNvblNGQXJyMUtbaW5kZXhJY29uXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAyKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaWNvblNGQXJyMTBLW2luZGV4SWNvbl07XG4gICAgfVxuXG4gICAgZ2V0U3BpbmVJY29uKGluZGV4SWNvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJldElkID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuYXJyU2tlbGV0b25JY29uMTBLW2luZGV4SWNvbl07XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmV0SWQgPT0gMClcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmFyclNrZWxldG9uSWNvbjEwMFtpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDEpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5hcnJTa2VsZXRvbkljb24xS1tpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDIpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5hcnJTa2VsZXRvbkljb24xMEtbaW5kZXhJY29uXTtcbiAgICB9XG5cbiAgICBoaWRlV2luRWZmZWN0KCkge1xuICAgICAgICB0aGlzLndpbk5vcm1hbEJnLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpbkxhYmVsLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLmJvbnVzTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5iaWdXaW5Ob2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmphY2twb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uQnRuVG9nZ2xlTXVzaWMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc011c2ljID0gIXRoaXMuaXNNdXNpYztcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUodGhpcy5pc011c2ljID8gMC41IDogMCk7XG4gICAgfVxuXG4gICAgb25CdG5Ub2dnbGVTb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU291bmQgPSAhdGhpcy5pc1NvdW5kO1xuICAgIH1cblxuICAgIG9uQnRuSGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQnRuSGlkZVNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBvbkJ0bkhpc3RvcnlKYWNrcG90KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25CdG5IaWRlU2V0dGluZygpO1xuICAgIH1cblxuICAgIG9uQnRuSGlkZVNldHRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgVHdlZW4uaGlkZVBvcHVwKHRoaXMubm9kZUJveFNldHRpbmcsIHRoaXMubm9kZUJveFNldHRpbmcucGFyZW50LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgb25CdG5Tb3VuZENsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5TZXR0aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gdGhpcy5pc011c2ljO1xuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCA9IHRoaXMuaXNTb3VuZDtcbiAgICAgICAgLy8gVHdlZW4uc2hvd1BvcHVwKHRoaXMubm9kZUJveFNldHRpbmcsIHRoaXMubm9kZUJveFNldHRpbmcucGFyZW50KTtcbiAgICAgICAgdGhpcy5ub2RlQm94U2V0dGluZy5hY3RpdmUgPSAhdGhpcy5ub2RlQm94U2V0dGluZy5hY3RpdmU7XG4gICAgfVxuICAgIHNob3dMaW5lV2luKGxpbmVzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIC8vICBjYy5sb2coXCJzaG93IGxpbmUgd2luXCIpO1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5jaGFuZ2VBbGxJdGVtVG9EYXJrKHRydWUpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInNob3dMSW5lV2luIDpcIiArIGkgKyBcIiA6IFwiICsgbGluZSk7XG4gICAgICAgICAgICBsZXQgbGluZU5vZGUgPSB0aGlzLmxpbmVXaW5QYXJlbnQuY2hpbGRyZW5bbGluZSAtIDFdO1xuICAgICAgICAgICAgbGluZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIC8vaGlkZSBhbGwgbGluZVxuICAgICAgICB0aGlzLmxpbmVXaW5QYXJlbnQucnVuQWN0aW9uKFxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5oaWRlTGluZVdpbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMubGluZVdpblBhcmVudC5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjUpLFxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuNSksXG4gICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2luTm9ybWFsQmcuYWN0aXZlPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnNldFNpYmxpbmdJbmRleCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sUGFyZW50LnNldFNpYmxpbmdJbmRleCgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYWN0aXZlIGxpbmUgb25lIGJ5IG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmVOb2RlID0gdGhpcy5saW5lV2luUGFyZW50LmNoaWxkcmVuW2xpbmUgLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaW5QYXJlbnQucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShpICogdGhpcy5USU1FX0RFTEFZX1NIT1dfTElORSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IHRoaXMuZ2V0SXRlbVdpbkluTGluZShsaW5lIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFycklkT2ZJdGVtID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkV2luID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJySXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycklkT2ZJdGVtLnB1c2goaXRlbS5pdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFdpbiA9IHRoaXMuZ2V0SXRlbUlkV2luSW5MaW5lKGFycklkT2ZJdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbUlkID09IGlkV2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrU2hvd1Nwcml0ZU9yU3BpbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUodGhpcy5USU1FX0RFTEFZX1NIT1dfTElORSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gbGluZXMubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBoaWRlTGluZVdpbihzdG9wQWN0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChzdG9wQWN0aW9uKSB0aGlzLmxpbmVXaW5QYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRCdXR0b25FbmFibGUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYnRuQmFjay5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYnRuTGluZS5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIGlmIChhY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5za2VTcGluLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIHRoaXMuc2tlU3Bpbi5zZXRBbmltYXRpb24oMCwgXCJxdWF5XCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5za2VTcGluLnNldEFuaW1hdGlvbigwLCBcInF1YXkyXCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5za2VTcGluLm5vZGUuY29sb3IgPSBjYy5Db2xvci5HUkFZO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHNldEJ1dHRvbkZsYXNoKGFjdGl2ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnRvZ2dsZUZhc3QuaW50ZXJhY3RhYmxlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLnRvZ2dsZUZhc3Qubm9kZS5jaGlsZHJlblswXS5jb2xvciA9IGFjdGl2ZSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICAvLyNyZWdpb24gQ0hBTkdFIEJFVFxuICAgIGNoYW5nZUJldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5ub2RlLmFjdGl2ZSA9ICF0aGlzLm1TbG90TG9iYnkubm9kZS5hY3RpdmU7XG4gICAgfVxuXG4gICAgY2hvb3NlQmV0KGV2ZW50LCBiZXQpIHtcblxuICAgICAgICBsZXQgb2xkSWR4ID0gdGhpcy5iZXRJZDtcbiAgICAgICAgdGhpcy5iZXRJZCA9IHBhcnNlSW50KGJldCk7XG4gICAgICAgIHRoaXMuZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyaWFsID0gYmV0ID09IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmJldElkID0gYmV0ID09IC0xID8gMiA6IGJldDtcbiAgICAgICAgaWYgKHRoaXMuYmV0SWQgPj0gdGhpcy5saXN0QmV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5iZXRJZCA9IDA7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhbmdlUm9vbShvbGRJZHgsIHRoaXMuYmV0SWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGFuZ2VSb29tKG9sZElkeCwgdGhpcy5iZXRJZCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJDdXJyZW50Um9vbS5zdHJpbmcgPSBiZXQgPT0gXCIwXCIgPyBcIjEwMFwiIDogVXRpbHMuZm9ybWF0TnVtYmVyKDEwMDApO1xuICAgICAgICBpZiAoYmV0ID09IDIpXG4gICAgICAgICAgICB0aGlzLmxiQ3VycmVudFJvb20uc3RyaW5nID0gVXRpbHMuZm9ybWF0TnVtYmVyKDEwMDAwKVxuICAgIH1cblxuXG4gICAgc2hvd0d1aWRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5zaG93KHRoaXMpO1xuICAgIH1cblxuICAgIGNsb3NlR3VpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1cEd1aWRlLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzaG93Q2hvb3NlTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZVNwZWVkKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNGYXN0Q3VycmVudCA9IHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQ7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGVBdXRvLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVBdXRvLmNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQgJiYgIXRoaXMuaXNTcGluaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5DbGljaygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRBdXRvU3BpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc1NwaW5pbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGFjdEJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMuYmV0SWQpKTtcblxuICAgICAgICB0aGlzLm1TbG90TG9iYnkuc2hvdygpO1xuICAgICAgICB0aGlzLmhpZGVHYW1lUGxheSgpO1xuICAgIH1cbiAgICBjaGFuZ2VBbGxJdGVtVG9EYXJrKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuYXJyVUlJdGVtSWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuXG4gICAgICAgICAgICBzcHJpdGUubm9kZS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNwaW5lLm5vZGUuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBzcGluZS5ub2RlLnNjYWxlID0gMC42NTtcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLnNjYWxlID0gMS4wO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXRJdGVtV2luSW5MaW5lKGxpbmVJZCkge1xuICAgICAgICBsZXQgbGluZUFyciA9IHRoaXMubWFwTGluZVtsaW5lSWRdO1xuICAgICAgICBsZXQgYXJySXRlbSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyckl0ZW0ucHVzaCh0aGlzLmFyclJlYWxJdGVtW2xpbmVBcnJbaV1dKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICB9XG4gICAgZ2V0SXRlbUlkV2luSW5MaW5lKGFycklkOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBpZFdpbiA9IC0xO1xuICAgICAgICBhcnJJZC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBhcnJJZC5maWx0ZXIoeCA9PiB4ID09IGlkKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoc2l6ZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBpZFdpbiA9IGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaWRXaW47XG4gICAgfVxuICAgIGFjdEd1aWRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwR3VpZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3Q4XCIsIFwidGhhbmJhaS9wcmVmYWJzL1BvcHVwR3VpZGVcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiRGlhbG9nXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5ub2RlLnBhcmVudCA9IHRoaXMucG9wdXBDb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RIaXN0b3J5KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVHJpYWwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3B1cEhpc3RvcnkgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3Q4XCIsIFwidGhhbmJhaS9wcmVmYWJzL0hpc3RvcnlcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5ID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJTbG90OEhpc3RvcnlcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhpc3Rvcnkuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdEhpc3RvcnlKYWNrcG90KCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVHJpYWwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3B1cEhvbm9yID09IG51bGwpIHtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoXCJTbG90OFwiLCBcInRoYW5iYWkvcHJlZmFicy9HbG9yeVwiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJTbG90OEdsb3J5XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBIb25vci5ub2RlLnBhcmVudCA9IHRoaXMucG9wdXBDb250YWluZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEhvbm9yLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RDaG9vc2VMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVHJpYWwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3B1cENob29zZUxpbmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3Q4XCIsIFwidGhhbmJhaS9wcmVmYWJzL0Nob29zZUxpbmVcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDaG9vc2VMaW5lID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJTbG90OENob29zZUxpbmVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENob29zZUxpbmUubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBDaG9vc2VMaW5lLnNob3dQb3B1cCh0aGlzLmFyckxpbmVTZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cENob29zZUxpbmUub25TZWxlY3RlZENoYW5nZWQgPSAobGluZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0ZWQgPSBsaW5lcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbExpbmVMYWJlbC5zdHJpbmcgPSBsaW5lcy5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbEJldExhYmVsLCBsaW5lcy5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0sIDAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQ2hvb3NlTGluZS5zaG93UG9wdXAodGhpcy5hcnJMaW5lU2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdFNob3dCb251cyhpc1RyaWFsLCBkYXRhSGFpU2FvLCBjYikge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCb251cywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvcHVwQm9udXMgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3Q4XCIsIFwidGhhbmJhaS9wcmVmYWJzL1BvcHVwQm9udXNcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb251cyA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiU2xvdDguUG9wdXBCb251c1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMubm9kZS5wYXJlbnQgPSB0aGlzLnBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb251cy5zaG93Qm9udXMoaXNUcmlhbCwgZGF0YUhhaVNhbywgdGhpcywgY2IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMuc2hvd0JvbnVzKGlzVHJpYWwsIGRhdGFIYWlTYW8sIHRoaXMsIGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==