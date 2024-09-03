
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot4/Slot4Script/Slot4Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3db2agi1bNH1bL6pksn5Oje', 'Slot4Controller');
// Slot4/Slot4Script/Slot4Controller.ts

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
var Slot4Cmd_1 = require("./Slot4Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot4ChooseLine_1 = require("./Slot4ChooseLine");
var Slot4TrialResult_1 = require("./Slot4TrialResult");
var Slot4_Lobby_1 = require("./Slot4.Lobby");
var Slot4_PopupBonus_1 = require("./Slot4.PopupBonus");
var Slot4Tutorial_1 = require("./Slot4Tutorial");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var ItemIconSlot25_1 = require("../../Lobby/LobbyScript/Script/BaseSlot25/ItemIconSlot25");
var MAX_CYCCLE_SPIN = 20;
var FAST_CYCCLE_SPIN = 10;
var ERROR_CYCCLE_SPIN = 50;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot4Controller = /** @class */ (function (_super) {
    __extends(Slot4Controller, _super);
    function Slot4Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btnBack = null;
        _this.nodeCoin = null;
        _this.btnLine = null;
        _this.lblFreeSpinCount = null;
        _this.nodeBoxSetting = null;
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
        //win
        _this.winNormalBg = null;
        _this.bonusNode = null;
        _this.bigWinNode = null;
        _this.txtWinBigWin = null;
        _this.jackpotNode = null;
        _this.freespinNode = null;
        _this.winLabel = null;
        _this.freespinCurrent = null;
        //line win
        _this.lineWinParent = null;
        //show result
        _this.totalWinLabel = null;
        _this.totalBetLabel = null;
        //choose line
        _this.chooseLineScript = null;
        _this.popupGuide = null;
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
            [5, 1, 2, 3, 9],
            [5, 11, 12, 13, 9],
            [10, 11, 7, 3, 4],
            [0, 1, 7, 13, 14]
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
    Slot4Controller.prototype.start = function () {
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
            //  cc.log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Slot4Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    _this.mSlotLobby.onUpdateJackpot(data);
                    break;
                case Slot4Cmd_1.default.Code.UPDATE_POT:
                    {
                        var res = new Slot4Cmd_1.default.ReceiveUpdatePot(data);
                        //  cc.log("update Jackpot:"+(this.betId == 0));
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
                case Slot4Cmd_1.default.Code.UPDATE_RESULT:
                    {
                        var res = new Slot4Cmd_1.default.ReceiveResult(data);
                        _this.spinResult(res);
                    }
                    break;
                case Slot4Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.isTrial) {
                            var res = new Slot4Cmd_1.default.ReceiveFreeDaiLy(data);
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
                case Slot4Cmd_1.default.Code.DATE_X2:
                    {
                        var res = new Slot4Cmd_1.default.ReceiveDateX2(data);
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
                case Slot4Cmd_1.default.Code.CHANGE_ROOM:
                    {
                        //  cc.log("changeRoom:" + JSON.stringify(data));
                    }
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot4Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendSubcribe(0));
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            Tween_1.default.numberTo(_this.moneyLabel, Configs_1.default.Login.Coin, 0.3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function () {
            App_1.default.instance.showLoading(false);
        });
        this.chooseLineScript.onSelectedChanged = function (lines) {
            _this.arrLineSelected = lines;
            _this.totalLineLabel.string = lines.length.toString();
            Tween_1.default.numberTo(_this.totalBetLabel, lines.length * _this.listBet[_this.betId], 0.3);
        };
        this.mSlotLobby.init(this);
        //this.initMutipleJPNode();
    };
    Slot4Controller.prototype.initMutipleJPNode = function () {
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
    Slot4Controller.prototype.showAnimations = function () {
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
    Slot4Controller.prototype.showGamePlay = function () {
        if (this.isMusic)
            cc.audioEngine.playMusic(this.musicGame, true);
        this.randomIconList();
        this.nodeGamePlay.active = true;
        this.showAnimations();
    };
    Slot4Controller.prototype.hideGamePlay = function () {
        if (this.isMusic)
            cc.audioEngine.playMusic(this.musicLobby, true);
        this.nodeGamePlay.active = false;
    };
    Slot4Controller.prototype.init = function () {
        this.totalWinLabel.string = "";
    };
    Slot4Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        App_1.default.instance.showCoins(number, this.totalWinLabel.node, this.nodeCoin);
    };
    Slot4Controller.prototype.onJoinRoom = function (res) {
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
    Slot4Controller.prototype.randomIconList = function () {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
            var index = i;
            var itemId = Math.floor(Math.random() * (self.iconSFArr100.length));
            self.arrUIItemIcon[i].init(itemId, index, self);
            self.arrUIItemIcon[i].changeSpineIcon(itemId);
            self.arrUIItemIcon[i].spriteIcon.node.active = false;
            self.arrUIItemIcon[i].spineIcon.node.active = true;
            // self.arrUIItemIcon[i].spineIcon.setAnimation(0, "idle", true);
            self.arrUIItemIcon[i].spineIcon.animation = "animation";
            self.arrUIItemIcon[i].spineIcon.loop = true;
        }
    };
    /**
     * random between, min, max included
     */
    Slot4Controller.prototype.randomBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Slot4Controller.prototype.spinClick = function () {
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
            SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendPlay(this.arrLineSelected.toString()));
        }
        else {
            this.hideWinEffect();
            this.hideLineWin(true);
            this.setButtonEnable(false);
            this.totalWinLabel.string = "";
            var rIdx = Utils_1.default.randomRangeInt(0, Slot4TrialResult_1.default.results.length);
            this.spinResult(Slot4TrialResult_1.default.results[rIdx]);
        }
    };
    Slot4Controller.prototype.onBtnSoundTouchBonus = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundtouchBonus, false, 1);
        }
    };
    Slot4Controller.prototype.onBtnSoundSumary = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundSmumary, false, 1);
        }
    };
    Slot4Controller.prototype.spinResult = function (res) {
        this.isSpining = true;
        //  cc.log("spinResult:"+JSON.stringify(res));
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
            this.audioIdRepeatSpin = cc.audioEngine.play(this.soundRepeatSpin, true, 1);
        }
        for (var i = 0; i < this.arrReel.length; i++) {
            this.beginSpinReel(i);
        }
    };
    Slot4Controller.prototype.spinFinish = function (hasDelay) {
        this.isSpining = false;
        var that = this;
        this.node.runAction(cc.sequence(cc.delayTime(hasDelay ? 1 : 0), cc.callFunc(function () {
            if (that.toggleFast.isChecked) {
                that.spinClick();
            }
            else {
                that.setButtonEnable(true);
                that.setButtonFlash(true);
            }
        })));
    };
    Slot4Controller.prototype.showWinEffect = function (prize, currentMoney, result) {
        var _this = this;
        var self = this;
        if (prize > 0) {
            if (result == 5) {
                //bonus
                if (this.isSound) {
                    cc.audioEngine.play(this.soundBonus, false, 1);
                }
                this.bonusNode.active = true;
                var bonusSpine = this.bonusNode.getComponentInChildren(sp.Skeleton);
                bonusSpine.setAnimation(0, "angrybirds_bonus", false);
                this.node.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
                    _this.bonusNode.active = false;
                    if (_this.isMusic)
                        cc.audioEngine.playMusic(_this.musicBonus, true);
                    _this.popupBonus.showBonus(_this.isTrial ? 100 : _this.listBet[_this.betId], _this.dataResult.haiSao, _this, function () {
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
                bigwinSpine.setAnimation(0, "angrybirds_bigwin", false);
                Tween_1.default.numberTo(this.txtWinBigWin, prize, 0.3);
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
                jackpotSpine.setAnimation(0, "appear", false);
                jackpotSpine.addAnimation(0, "angrybirds_jackpot", true);
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
    Slot4Controller.prototype.beginSpinReel = function (indexReel) {
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
    Slot4Controller.prototype.loopSpinReel = function (indexReel) {
        var self = this;
        cc.tween(self.arrReel[indexReel])
            .to(0.06, { position: cc.v3(self.arrReel[indexReel].position.x, -self.distanceReel, 0) }, { easing: "linear" })
            .call(function () {
            self.processLoopSpinReel(indexReel);
        })
            .start();
    };
    Slot4Controller.prototype.processLoopSpinReel = function (indexReel) {
        var self = this;
        self.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
            var index = indexReel + (i * 5);
            var indexRow = Math.floor(index / 5);
            var itemIdTmp = 0;
            if (indexRow == 0) {
                itemIdTmp = Math.floor(Math.random() * self.iconSFBlurArr100.length);
            }
            else {
                itemIdTmp = self.arrUIItemIcon[index - 5].itemId;
            }
            self.arrUIItemIcon[index].changeSpriteBlurByItemId(itemIdTmp);
            if (self.arrUIItemIcon[index].spriteIcon.node.active == false) {
                self.arrUIItemIcon[index].spriteIcon.node.active = true;
                self.arrUIItemIcon[index].spineIcon.node.active = false;
            }
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
    Slot4Controller.prototype.endSpinReel = function (indexReel) {
        var _this = this;
        var self = this;
        if (self.dataResult == null) {
            for (var i = 3; i >= 1; i--) {
                var index = indexReel + (i * 5);
                var itemId = Math.floor(Math.random() * (self.iconSFArr100.length));
                self.arrUIItemIcon[index].changeSpineIcon(itemId);
                self.arrUIItemIcon[index].spriteIcon.node.active = false;
                self.arrUIItemIcon[index].spineIcon.node.active = true;
                self.arrUIItemIcon[index].spineIcon.setAnimation(0, "animation", true);
            }
            return;
        }
        var matrix = self.dataResult.matrix.split(',');
        var roll = this.arrReel[indexReel];
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, self.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
            var index = indexReel + (i * 5);
            self.arrUIItemIcon[index].changeSpineIcon(matrix[index - 5]);
            self.arrUIItemIcon[index].spriteIcon.node.active = false;
            self.arrUIItemIcon[index].spineIcon.node.active = true;
            self.arrUIItemIcon[index].spineIcon.setAnimation(0, "animation", true);
        }
        cc.tween(self.arrReel[indexReel])
            .to(0.3, { position: cc.v3(self.arrReel[indexReel].position.x, 0, 0) }, { easing: "backOut" })
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
                    freeSpineSpine.setAnimation(0, "angrybirds_freespin", false);
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
    Slot4Controller.prototype.getSpriteFrameIconBlur = function (indexIcon) {
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
    Slot4Controller.prototype.getSpriteFrameIcon = function (indexIcon) {
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
    Slot4Controller.prototype.getSpineIcon = function (indexIcon) {
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
    Slot4Controller.prototype.hideWinEffect = function () {
        this.winNormalBg.active = false;
        this.winLabel.string = "0";
        this.bonusNode.active = false;
        this.bigWinNode.active = false;
        this.jackpotNode.active = false;
    };
    Slot4Controller.prototype.onBtnToggleMusic = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isMusic = !this.isMusic;
        cc.audioEngine.setMusicVolume(this.isMusic ? 1 : 0);
    };
    Slot4Controller.prototype.onBtnToggleSound = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isSound = !this.isSound;
    };
    Slot4Controller.prototype.onBtnHistory = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.onBtnHideSetting();
    };
    Slot4Controller.prototype.onBtnHistoryJackpot = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.onBtnHideSetting();
    };
    Slot4Controller.prototype.onBtnHideSetting = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        Tween_1.default.hidePopup(this.nodeBoxSetting, this.nodeBoxSetting.parent, false);
    };
    Slot4Controller.prototype.onBtnSoundClick = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
    };
    Slot4Controller.prototype.onBtnSetting = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.toggleMusic.isChecked = this.isMusic;
        this.toggleSound.isChecked = this.isSound;
        Tween_1.default.showPopup(this.nodeBoxSetting, this.nodeBoxSetting.parent);
    };
    Slot4Controller.prototype.showLineWin = function (lines) {
        var _this = this;
        if (lines.length == 0 || lines.length == 1 && "" + lines[0] === '')
            return;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            //  cc.log("showLIneWin :"+i+" : "+line);
            var lineNode = this.lineWinParent.children[line - 1];
            lineNode.active = true;
        }
        var that = this;
        //hide all line
        this.lineWinParent.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            that.hideLineWin(false);
        })));
        this.lineWinParent.runAction(cc.sequence(cc.delayTime(1.5), cc.callFunc(function () {
            var _loop_1 = function (i) {
                var line = lines[i];
                var lineNode = _this.lineWinParent.children[line - 1];
                _this.lineWinParent.runAction(cc.sequence(cc.delayTime(i * _this.TIME_DELAY_SHOW_LINE), cc.callFunc(function () {
                    lineNode.active = true;
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
    };
    Slot4Controller.prototype.hideLineWin = function (stopAction) {
        if (stopAction)
            this.lineWinParent.stopAllActions();
        this.lineWinParent.children.forEach(function (element) {
            element.active = false;
        });
    };
    Slot4Controller.prototype.setButtonEnable = function (active) {
        this.btnSpin.interactable = active;
        this.btnBack.interactable = active;
        this.btnLine.interactable = active;
        if (active == true) {
            this.skeSpin.setAnimation(0, "spin", true);
        }
        else {
            this.skeSpin.setAnimation(0, "stop", true);
        }
    };
    Slot4Controller.prototype.setButtonFlash = function (active) {
        this.toggleFast.interactable = active;
        this.toggleFast.node.children[0].color = active ? cc.Color.WHITE : cc.Color.GRAY;
    };
    //#region CHANGE BET
    Slot4Controller.prototype.changeBet = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.mSlotLobby.node.active = !this.mSlotLobby.node.active;
    };
    Slot4Controller.prototype.chooseBet = function (event, bet) {
        var oldIdx = this.betId;
        this.betId = parseInt(bet);
        this.dailyFreeSpin = 0;
        this.lblFreeSpinCount.node.parent.active = false;
        //  cc.log("tat roi");
        this.isTrial = bet == -1 ? true : false;
        this.betId = bet == -1 ? 2 : bet;
        // //  cc.log("chooseBet oldIdx:"+oldIdx+" betId"+this.betId+" this.listBet.length"+this.listBet.length);
        if (this.betId >= this.listBet.length) {
            this.betId = 0;
            SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        }
        else {
            SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        }
    };
    Slot4Controller.prototype.showGuide = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.popupGuide.show(this);
    };
    Slot4Controller.prototype.closeGuide = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.popupGuide.hide();
    };
    Slot4Controller.prototype.showChooseLine = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.chooseLineScript.show(this.arrLineSelected);
    };
    Slot4Controller.prototype.changeSpeed = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isFastCurrent = this.toggleFast.isChecked;
        if (this.toggleFast.isChecked && !this.isSpining) {
            this.spinClick();
        }
    };
    Slot4Controller.prototype.setAutoSpin = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (!this.isSpining) {
            this.spinClick();
        }
    };
    Slot4Controller.prototype.actBack = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        cc.audioEngine.stopAll();
        SlotNetworkClient_1.default.getInstance().send(new Slot4Cmd_1.default.SendUnSubcribe(this.betId));
        this.mSlotLobby.show();
        this.hideGamePlay();
    };
    __decorate([
        property(cc.Button)
    ], Slot4Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot4Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "nodeBoxSetting", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot4Controller.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot4Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(Slot4_PopupBonus_1.default)
    ], Slot4Controller.prototype, "popupBonus", void 0);
    __decorate([
        property(sp.Skeleton)
    ], Slot4Controller.prototype, "skeSpin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "nodeDemo", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "nodeWinJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "txtWinJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "nodeGamePlay", void 0);
    __decorate([
        property(Slot4_Lobby_1.default)
    ], Slot4Controller.prototype, "mSlotLobby", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "jackpotLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "totalLineLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Slot4Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot4Controller.prototype, "toggleFast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "winNormalBg", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "bonusNode", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "bigWinNode", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "txtWinBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "jackpotNode", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "freespinNode", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "winLabel", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "freespinCurrent", void 0);
    __decorate([
        property(cc.Node)
    ], Slot4Controller.prototype, "lineWinParent", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "totalWinLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot4Controller.prototype, "totalBetLabel", void 0);
    __decorate([
        property(Slot4ChooseLine_1.default)
    ], Slot4Controller.prototype, "chooseLineScript", void 0);
    __decorate([
        property(Slot4Tutorial_1.default)
    ], Slot4Controller.prototype, "popupGuide", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "musicLobby", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "musicGame", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "musicBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundStartSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundRepeatSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundEndSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundFreeSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundtouchBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot4Controller.prototype, "soundSmumary", void 0);
    __decorate([
        property([cc.Node])
    ], Slot4Controller.prototype, "arrReel", void 0);
    __decorate([
        property
    ], Slot4Controller.prototype, "distanceReel", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Controller.prototype, "iconSFBlurArr100", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Controller.prototype, "iconSFArr100", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot4Controller.prototype, "arrSkeletonIcon100", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Controller.prototype, "iconSFBlurArr1K", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Controller.prototype, "iconSFArr1K", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot4Controller.prototype, "arrSkeletonIcon1K", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Controller.prototype, "iconSFBlurArr10K", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot4Controller.prototype, "iconSFArr10K", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot4Controller.prototype, "arrSkeletonIcon10K", void 0);
    __decorate([
        property([ItemIconSlot25_1.default])
    ], Slot4Controller.prototype, "arrUIItemIcon", void 0);
    Slot4Controller = __decorate([
        ccclass
    ], Slot4Controller);
    return Slot4Controller;
}(cc.Component));
exports.default = Slot4Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDRcXFNsb3Q0U2NyaXB0XFxTbG90NENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZCO0FBRTdCLHFEQUFnRDtBQUNoRCxxREFBZ0Q7QUFDaEQsdURBQWtEO0FBRWxELDZDQUF1QztBQUN2Qyx1REFBaUQ7QUFDakQsaURBQTRDO0FBQzVDLGlFQUE0RDtBQUM1RCw2RkFBd0Y7QUFDeEYscUVBQWdFO0FBQ2hFLHFFQUFnRTtBQUNoRSw2RkFBZ0Y7QUFDaEYsK0ZBQTBGO0FBQzFGLDJGQUF3RjtBQUN4RixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFFckIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUEwaENDO1FBeGhDRyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixzQkFBZ0IsR0FBYSxJQUFJLENBQUM7UUFFbEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBb0IsSUFBSSxDQUFDO1FBRW5DLGFBQU8sR0FBZ0IsSUFBSSxDQUFDO1FBRTVCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0IsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0IsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIs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QUFZLENBQUMsQ0FBQzsrREFDZTtJQUczQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs0REFDWTtJQUV2QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3REFDUTtJQUVuQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs4REFDYztJQUcxQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzs2REFDYTtJQUV4QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt5REFDUztJQUVwQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQzsrREFDZTtJQUczQztRQURDLFFBQVEsQ0FBQyxDQUFDLHdCQUFnQixDQUFDLENBQUM7MERBQ1U7SUEvS3RCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EwaENuQztJQUFELHNCQUFDO0NBMWhDRCxBQTBoQ0MsQ0ExaEM0QyxFQUFFLENBQUMsU0FBUyxHQTBoQ3hEO2tCQTFoQ29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY21kIGZyb20gJy4vU2xvdDRDbWQnO1xuXG5pbXBvcnQgQ29uZmlncyBmcm9tIFwiLi4vLi4vTG9hZGluZy9zcmMvQ29uZmlnc1wiO1xuaW1wb3J0IFNsb3Q0Q2hvb3NlTGluZSBmcm9tICcuL1Nsb3Q0Q2hvb3NlTGluZSc7XG5pbXBvcnQgU2xvdDRUcmlhbFJlc3VsdCBmcm9tICcuL1Nsb3Q0VHJpYWxSZXN1bHQnO1xuXG5pbXBvcnQgU2xvdDRMb2JieSBmcm9tIFwiLi9TbG90NC5Mb2JieVwiO1xuaW1wb3J0IFNsb3Q0UG9wdXBCb251cyBmcm9tIFwiLi9TbG90NC5Qb3B1cEJvbnVzXCI7XG5pbXBvcnQgU2xvdDRUdXRvcmlhbCBmcm9tIFwiLi9TbG90NFR1dG9yaWFsXCI7XG5pbXBvcnQgQXBwIGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQXBwJztcbmltcG9ydCBCcm9hZGNhc3RSZWNlaXZlciBmcm9tICcuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyJztcbmltcG9ydCBUd2VlbiBmcm9tICcuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1R3ZWVuJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL1V0aWxzJztcbmltcG9ydCBJblBhY2tldCBmcm9tICcuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldCc7XG5pbXBvcnQgU2xvdE5ldHdvcmtDbGllbnQgZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL1Nsb3ROZXR3b3JrQ2xpZW50JztcbmltcG9ydCBVSUl0ZW1JY29uU2xvdDI1IGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9CYXNlU2xvdDI1L0l0ZW1JY29uU2xvdDI1JztcbnZhciBNQVhfQ1lDQ0xFX1NQSU4gPSAyMDtcbnZhciBGQVNUX0NZQ0NMRV9TUElOID0gMTA7XG52YXIgRVJST1JfQ1lDQ0xFX1NQSU4gPSA1MDtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3Q0Q29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5CYWNrOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVDb2luOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkxpbmU6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEZyZWVTcGluQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQm94U2V0dGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZVNvdW5kOiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTbG90NFBvcHVwQm9udXMpXG4gICAgcG9wdXBCb251czogU2xvdDRQb3B1cEJvbnVzID0gbnVsbDtcbiAgICBAcHJvcGVydHkoc3AuU2tlbGV0b24pXG4gICAgc2tlU3Bpbjogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVEZW1vOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlV2luSmFja3BvdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHR4dFdpbkphY2twb3Q6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlR2FtZVBsYXk6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShTbG90NExvYmJ5KVxuICAgIG1TbG90TG9iYnk6IFNsb3Q0TG9iYnkgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBqYWNrcG90TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBtb25leUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdG90YWxMaW5lTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZUZhc3Q6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICAvL3dpblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdpbk5vcm1hbEJnOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBib251c05vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpZ1dpbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHRXaW5CaWdXaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBqYWNrcG90Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZnJlZXNwaW5Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgd2luTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBmcmVlc3BpbkN1cnJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vbGluZSB3aW5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBsaW5lV2luUGFyZW50OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8vc2hvdyByZXN1bHRcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdG90YWxXaW5MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0b3RhbEJldExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvL2Nob29zZSBsaW5lXG4gICAgQHByb3BlcnR5KFNsb3Q0Q2hvb3NlTGluZSlcbiAgICBjaG9vc2VMaW5lU2NyaXB0OiBTbG90NENob29zZUxpbmUgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoU2xvdDRUdXRvcmlhbClcbiAgICBwb3B1cEd1aWRlOiBTbG90NFR1dG9yaWFsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG11c2ljTG9iYnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgbXVzaWNHYW1lOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG11c2ljQm9udXM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU3RhcnRTcGluOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kUmVwZWF0U3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEVuZFNwaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFNwaW5XaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRCaWdXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQm9udXM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRGcmVlU3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZHRvdWNoQm9udXM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRTbXVtYXJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIHByaXZhdGUgbGlzdEFjdGl2ZUl0ZW06IGNjLk5vZGVbXSA9IFtdOyAgICAgICAgIC8vbGlzdCAxNSBpdGVtIG5oaW4gdGhheSB0cmVuIG1hbiBoaW5oXG5cbiAgICBwcml2YXRlIFRJTUVfREVMQVlfU0hPV19MSU5FOiBudW1iZXIgPSAxO1xuICAgIHByaXZhdGUgZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgcHVibGljIGJldElkID0gMDtcbiAgICBwcml2YXRlIGxpc3RCZXQgPSBbMTAwLCAxMDAwLCAxMDAwMF07XG4gICAgcHJpdmF0ZSBsaXN0QmV0U3RyaW5nID0gW1wiMTAwXCIsIFwiMUtcIiwgXCIxMEtcIl07XG4gICAgcHJpdmF0ZSBhcnJMaW5lU2VsZWN0ZWQgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXTtcbiAgICBwdWJsaWMgaXNUcmlhbDogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNTcGluaW5nOiBCb29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBtYXBMaW5lID0gW1xuICAgICAgICBbNSwgNiwgNywgOCwgOV0sXG4gICAgICAgIFswLCAxLCAyLCAzLCA0XSxcbiAgICAgICAgWzEwLCAxMSwgMTIsIDEzLCAxNF0sXG4gICAgICAgIFs1LCA2LCAyLCA4LCA5XSxcbiAgICAgICAgWzUsIDYsIDEyLCA4LCA5XSxcbiAgICAgICAgWzAsIDEsIDcsIDMsIDRdLFxuICAgICAgICBbMTAsIDExLCA3LCAxMywgMTRdLFxuICAgICAgICBbMCwgMTEsIDIsIDEzLCA0XSxcbiAgICAgICAgWzEwLCAxLCAxMiwgMywgMTRdLFxuICAgICAgICBbNSwgMSwgMTIsIDMsIDldLFxuICAgICAgICBbMTAsIDYsIDIsIDgsIDE0XSxcbiAgICAgICAgWzAsIDYsIDEyLCA4LCA0XSxcbiAgICAgICAgWzUsIDExLCA3LCAzLCA5XSxcbiAgICAgICAgWzUsIDEsIDcsIDEzLCA5XSxcbiAgICAgICAgWzEwLCA2LCA3LCA4LCAxNF0sXG4gICAgICAgIFswLCA2LCA3LCA4LCA0XSxcbiAgICAgICAgWzUsIDEsIDIsIDMsIDldLFxuICAgICAgICBbNSwgMTEsIDEyLCAxMywgOV0sXG4gICAgICAgIFsxMCwgMTEsIDcsIDMsIDRdLFxuICAgICAgICBbMCwgMSwgNywgMTMsIDE0XVxuICAgIF07XG5cbiAgICAvL25ldyBcblxuICAgIHByaXZhdGUgaXNGYXN0Q3VycmVudCA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNGYXN0ID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGFyclJlZWw6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZGlzdGFuY2VSZWVsOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNGQmx1ckFycjEwMDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRkFycjEwMDogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25EYXRhXSlcbiAgICBhcnJTa2VsZXRvbkljb24xMDA6IHNwLlNrZWxldG9uRGF0YVtdID0gW107XG5cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZCbHVyQXJyMUs6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZBcnIxSzogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuICAgIEBwcm9wZXJ0eShbc3AuU2tlbGV0b25EYXRhXSlcbiAgICBhcnJTa2VsZXRvbkljb24xSzogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShbY2MuU3ByaXRlRnJhbWVdKVxuICAgIGljb25TRkJsdXJBcnIxMEs6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBpY29uU0ZBcnIxMEs6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcbiAgICBAcHJvcGVydHkoW3NwLlNrZWxldG9uRGF0YV0pXG4gICAgYXJyU2tlbGV0b25JY29uMTBLOiBzcC5Ta2VsZXRvbkRhdGFbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtVSUl0ZW1JY29uU2xvdDI1XSlcbiAgICBhcnJVSUl0ZW1JY29uOiBVSUl0ZW1JY29uU2xvdDI1W10gPSBbXTtcblxuXG5cblxuICAgIHB1YmxpYyBudW1iZXJTcGluUmVlbCA9IG51bGw7XG4gICAgcHVibGljIGlzSGF2ZVJlc3VsdFNwaW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZGF0YVJlc3VsdCA9IG51bGw7XG4gICAgcHJpdmF0ZSBpc0ZpcnN0ID0gZmFsc2U7XG4gICBcbiAgICBwdWJsaWMgaXNTb3VuZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc011c2ljID0gdHJ1ZTtcbiAgICBtdXRpcGxlSnBOb2RlPW51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gMDtcbiAgICAgICAgdGhpcy5pc1NvdW5kID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc011c2ljID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgIHZhciBtdXNpY0lkID0gMDtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5hZGRPbkNsb3NlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubVNsb3RMb2JieS5vbkJ0bkJhY2soKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIFxuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICAvLyAgY2MubG9nKGlucGFja2V0LmdldENtZElkKCkpO1xuICAgICAgICAgICAgc3dpdGNoIChpbnBhY2tldC5nZXRDbWRJZCgpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfSkFDS1BPVF9TTE9UUzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm9uVXBkYXRlSmFja3BvdChkYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9QT1Q6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVBvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJ1cGRhdGUgSmFja3BvdDpcIisodGhpcy5iZXRJZCA9PSAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmJldElkID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmphY2twb3RMYWJlbCwgcmVzLnZhbHVlUm9vbTMsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuYmV0SWQgPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5qYWNrcG90TGFiZWwsIHJlcy52YWx1ZVJvb20xLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmJldElkID09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMuamFja3BvdExhYmVsLCByZXMudmFsdWVSb29tMiwgMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5iZXRJZCA9PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmphY2twb3RMYWJlbCwgcmVzLnZhbHVlUm9vbTMsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9SRVNVTFQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVSZXN1bHQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkZSRUVfREFJX0xZOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmlzVHJpYWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRnJlZURhaUx5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhaWx5RnJlZVNwaW4gPSByZXMuZnJlZVNwaW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZGFpbHlGcmVlU3BpbiA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5kYWlseUZyZWVTcGluK1wiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuREFURV9YMjpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZURhdGVYMihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNGaXJzdCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92dWEgdmFvIGxvYmJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlR2FtZVBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1TbG90TG9iYnkubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSm9pblJvb20ocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkNIQU5HRV9ST09NOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiY2hhbmdlUm9vbTpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kQ2hlY2sobmV3IGNtZC5SZXFTdWJjcmliZUhhbGxTbG90KCkpO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kU3ViY3JpYmUoMCkpO1xuXG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBDb25maWdzLkxvZ2luLkNvaW4sIDAuMyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2hvb3NlTGluZVNjcmlwdC5vblNlbGVjdGVkQ2hhbmdlZCA9IChsaW5lcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcnJMaW5lU2VsZWN0ZWQgPSBsaW5lcztcbiAgICAgICAgICAgIHRoaXMudG90YWxMaW5lTGFiZWwuc3RyaW5nID0gbGluZXMubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsQmV0TGFiZWwsIGxpbmVzLmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkXSwgMC4zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5pbml0KHRoaXMpO1xuXG4gICAgICAgIC8vdGhpcy5pbml0TXV0aXBsZUpQTm9kZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRNdXRpcGxlSlBOb2RlKCkge1xuICAgICAgICBpZiAoIXRoaXMubXV0aXBsZUpwTm9kZSkge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShcIkxvYmJ5XCIpLmxvYWQoXCJwcmVmYWJzL011dGlwbGVKYWNrcG90UHJcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbiAoZmluaXNoLCB0b3RhbCwgaXRlbSkge1xuICAgICAgICAgICAgfSwgKGVycjEsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycjEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyAgY2MubG9nKFwiZXJyciBsb2FkIGdhbWUgVElFTkxFTjpcIiwgZXJyMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJNdXRpcGxlSmFja3BvdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXRpcGxlSnBOb2RlLm5vZGUucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkNhbnZhc1wiKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUuc2V0SW5mbyhcIkFOR1JZXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2hvd0FuaW1hdGlvbnMoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFyclVJSXRlbUljb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub2RlSXRlbSA9IHNlbGYuYXJyVUlJdGVtSWNvbltpXS5ub2RlQm94O1xuICAgICAgICAgICAgdmFyIGluZGV4Q29sID0gaSAlIDU7XG4gICAgICAgICAgICBub2RlSXRlbS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIG5vZGVJdGVtLnBvc2l0aW9uID0gY2MudjMoMCwgc2VsZi5kaXN0YW5jZVJlZWwsIDApO1xuICAgICAgICAgICAgY2MudHdlZW4obm9kZUl0ZW0pXG4gICAgICAgICAgICAgICAgLmRlbGF5KGluZGV4Q29sICogMC4xKVxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKSwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0dhbWVQbGF5KCkge1xuICAgICAgICBpZih0aGlzLmlzTXVzaWMpIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm11c2ljR2FtZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucmFuZG9tSWNvbkxpc3QoKTtcbiAgICAgICAgdGhpcy5ub2RlR2FtZVBsYXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9ucygpO1xuICAgIH1cblxuICAgIGhpZGVHYW1lUGxheSgpIHtcbiAgICAgICAgaWYodGhpcy5pc011c2ljKSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5tdXNpY0xvYmJ5LCB0cnVlKTtcbiAgICAgICAgdGhpcy5ub2RlR2FtZVBsYXkuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0NvaW5zKHByaXplKXtcbiAgICAgICAgdmFyIG51bWJlciA9IHByaXplLzIwMDAwO1xuICAgICAgICBpZihudW1iZXIgPD0gMTApIG51bWJlciA9IDEwO1xuICAgICAgICBlbHNlIGlmKG51bWJlciA+PSAzMCkgbnVtYmVyID0gMzA7XG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93Q29pbnMobnVtYmVyLHRoaXMudG90YWxXaW5MYWJlbC5ub2RlLHRoaXMubm9kZUNvaW4pO1xuICAgIH1cbiAgICBwdWJsaWMgb25Kb2luUm9vbShyZXMgPSBudWxsKSB7XG4gICAgICAgIHZhciBiZXRJZFRtcCA9IHRoaXMuYmV0SWQ7XG4gICAgICAgIGlmKGJldElkVG1wID09IC0xKSBiZXRJZFRtcCA9IDI7XG4gICAgICAgIGxldCB0b3RhbGJldCA9ICh0aGlzLmFyckxpbmVTZWxlY3RlZC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbYmV0SWRUbXBdKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbEJldExhYmVsLCB0b3RhbGJldCwgMC4zKTtcbiAgICAgICAgdGhpcy5tU2xvdExvYmJ5LmhpZGUoKTtcbiAgICAgICAgdGhpcy5ub2RlRGVtby5hY3RpdmUgPSB0aGlzLmlzVHJpYWwgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoaXMuc2hvd0dhbWVQbGF5KCk7XG4gICAgICAgIHRoaXMuc2V0QnV0dG9uRW5hYmxlKHRydWUpO1xuICAgICAgICBcbiAgICAgICBpZihyZXMgPT0gbnVsbCl7XG4gICAgICAgICB0aGlzLmZyZWVzcGluQ3VycmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICB9XG4gICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmKHJlcy5mcmVlU3BpbiArIHRoaXMuZGFpbHlGcmVlU3BpbiA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlZXNwaW5DdXJyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlc3BpbkN1cnJlbnQuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gcmVzLmZyZWVTcGluICsgdGhpcy5kYWlseUZyZWVTcGluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVzcGluQ3VycmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICB9XG5cbiAgICB9XG5cbiAgICByYW5kb21JY29uTGlzdCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYXJyVUlJdGVtSWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaTtcbiAgICAgICAgICAgIHZhciBpdGVtSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc2VsZi5pY29uU0ZBcnIxMDAubGVuZ3RoKSk7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uaW5pdChpdGVtSWQsIGluZGV4LCBzZWxmKTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5jaGFuZ2VTcGluZUljb24oaXRlbUlkKTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5zcGluZUljb24uc2V0QW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5zcGluZUljb24uYW5pbWF0aW9uID0gXCJhbmltYXRpb25cIjtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5zcGluZUljb24ubG9vcCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByYW5kb20gYmV0d2VlbiwgbWluLCBtYXggaW5jbHVkZWRcbiAgICAgKi9cbiAgICByYW5kb21CZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbiAgICB9XG5cbiAgICBzcGluQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIC8vaGlkZSBlZmZlY3RcbiAgICAgICBcbiAgICAgICAgLy8gdGhpcy5zZXRCdXR0b25BdXRvKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCdXR0b25GbGFzaChmYWxzZSk7XG4gICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluLS07XG4gICAgICAgICAgICAgICAgaWYodGhpcy5kYWlseUZyZWVTcGluID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5kYWlseUZyZWVTcGluK1wiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGlmIChDb25maWdzLkxvZ2luLkNvaW4gPCB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0gKiB0aGlzLmFyckxpbmVTZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oaWRlV2luRWZmZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmhpZGVMaW5lV2luKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25FbmFibGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kUGxheSh0aGlzLmFyckxpbmVTZWxlY3RlZC50b1N0cmluZygpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVXaW5FZmZlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUxpbmVXaW4odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkVuYWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsV2luTGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBySWR4ID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgU2xvdDRUcmlhbFJlc3VsdC5yZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHQoU2xvdDRUcmlhbFJlc3VsdC5yZXN1bHRzW3JJZHhdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuU291bmRUb3VjaEJvbnVzKCl7XG4gICAgICAgIGlmKHRoaXMuaXNTb3VuZCl7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmR0b3VjaEJvbnVzLGZhbHNlLDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5Tb3VuZFN1bWFyeSgpe1xuICAgICAgICBpZih0aGlzLmlzU291bmQpe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU211bWFyeSxmYWxzZSwxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgYXVkaW9JZFJlcGVhdFNwaW4gPSAwO1xuICAgIHNwaW5SZXN1bHQocmVzOiBjbWQuUmVjZWl2ZVJlc3VsdCB8IGFueSkge1xuICAgICAgICB0aGlzLmlzU3BpbmluZyA9IHRydWU7XG4gICAgICAgIC8vICBjYy5sb2coXCJzcGluUmVzdWx0OlwiK0pTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICBcblxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBzdWNjZXNzUmVzdWx0ID0gWzAsIDEsIDIsIDMsNCwgNSwgNl07XG4gICAgICAgIGxldCByZXN1bHQgPSByZXMucmVzdWx0O1xuICAgICAgICBpZiAoc3VjY2Vzc1Jlc3VsdC5pbmRleE9mKHJlc3VsdCkgPT09IC0xKSB7XG4gICAgICAgICAgICAvL2ZhaWxcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IDEwMikge1xuICAgICAgICAgICAgICAgIC8va2hvbmcgZHUgdGllblxuICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJzbyBkdSBraG9uZyBkdVwiKTtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNvIGxvaSB4YXkgcmFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldCBpY29uXG4gICAgICAgIGxldCBtYXRyaXggPSByZXMubWF0cml4LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdGhpcy5udW1iZXJTcGluUmVlbCA9IG5ldyBBcnJheSh0aGlzLmFyclJlZWwubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5kYXRhUmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmlzSGF2ZVJlc3VsdFNwaW4gPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFN0YXJ0U3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9JZFJlcGVhdFNwaW4gPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSZXBlYXRTcGluLCB0cnVlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJyUmVlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5iZWdpblNwaW5SZWVsKGkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzcGluRmluaXNoKGhhc0RlbGF5OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaXNTcGluaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShoYXNEZWxheSA/IDEgOiAwKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0LnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNwaW5DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRCdXR0b25FbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldEJ1dHRvbkZsYXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgfVxuXG4gICAgc2hvd1dpbkVmZmVjdChwcml6ZTogbnVtYmVyLCBjdXJyZW50TW9uZXk6IG51bWJlciwgcmVzdWx0OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAocHJpemUgPiAwKSB7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09IDUpIHtcbiAgICAgICAgICAgICAgICAvL2JvbnVzXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCb251cywgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJvbnVzTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBib251c1NwaW5lID0gdGhpcy5ib251c05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgYm9udXNTcGluZS5zZXRBbmltYXRpb24oMCxcImFuZ3J5YmlyZHNfYm9udXNcIixmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoNSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib251c05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pc011c2ljKSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5tdXNpY0JvbnVzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMuc2hvd0JvbnVzKHRoaXMuaXNUcmlhbCA/IDEwMCA6IHRoaXMubGlzdEJldFt0aGlzLmJldElkXSwgdGhpcy5kYXRhUmVzdWx0LmhhaVNhbyx0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy53aW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxCZXRMYWJlbCwgdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCAwLjMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNwaW5GaW5pc2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAyIHx8IHJlc3VsdCA9PSA2KSB7XG4gICAgICAgICAgICAgICAgLy90aGFuZyBsb24gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCaWdXaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5iaWdXaW5Ob2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJpZ3dpblNwaW5lID0gdGhpcy5iaWdXaW5Ob2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGJpZ3dpblNwaW5lLnNldEFuaW1hdGlvbigwLFwiYW5ncnliaXJkc19iaWd3aW5cIixmYWxzZSk7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50eHRXaW5CaWdXaW4sIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmlnV2luTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNwaW5GaW5pc2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29pbnMocHJpemUpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMud2luTGFiZWwsIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbEJldExhYmVsLCB0aGlzLmFyckxpbmVTZWxlY3RlZC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0sIDAuMyk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVHJpYWwpIFR3ZWVuLm51bWJlclRvKHRoaXMubW9uZXlMYWJlbCwgY3VycmVudE1vbmV5LCAwLjMpO1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PSAzIHx8IHJlc3VsdCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgLy9ubyBodVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF1ZGlvSWRKYWNrcG90ID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSmFja3BvdCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdWRpb0lkSmFja3BvdCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNtdW1hcnksIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5qYWNrcG90Tm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBqYWNrcG90U3BpbmUgPSB0aGlzLmphY2twb3ROb2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgIGphY2twb3RTcGluZS5zZXRBbmltYXRpb24oMCxcImFwcGVhclwiLGZhbHNlKTtcbiAgICAgICAgICAgICAgICBqYWNrcG90U3BpbmUuYWRkQW5pbWF0aW9uKDAsXCJhbmdyeWJpcmRzX2phY2twb3RcIix0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2lucyhwcml6ZSk7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHRoaXMubm9kZVdpbkphY2twb3QpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudHh0V2luSmFja3BvdCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlV2luSmFja3BvdC5wb3NpdGlvbiA9IGNjLnYzKDAsLTM2MCwwKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVXaW5KYWNrcG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlV2luSmFja3BvdClcbiAgICAgICAgICAgICAgICAudG8oMSx7cG9zaXRpb246Y2MudjMoMCwwLDApfSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoMylcbiAgICAgICAgICAgICAgICAudG8oMSx7cG9zaXRpb246Y2MudjMoMCwtMzYwLDApfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmphY2twb3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUZhc3QuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc3BpbkZpbmlzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHNlbGYuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChhdWRpb0lkSmFja3BvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLndpbkxhYmVsLCBwcml6ZSwgMC4zKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsV2luTGFiZWwsIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxCZXRMYWJlbCwgdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCAwLjMpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSBUd2Vlbi5udW1iZXJUbyh0aGlzLm1vbmV5TGFiZWwsIGN1cnJlbnRNb25leSwgMC4zKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMud2luTm9ybWFsQmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2lucyhwcml6ZSk7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy53aW5MYWJlbCwgcHJpemUsIDAuMyk7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbFdpbkxhYmVsLCBwcml6ZSwgMC4zKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsQmV0TGFiZWwsIHRoaXMuYXJyTGluZVNlbGVjdGVkLmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkXSwgMC4zKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDAuMyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsV2luTGFiZWwsIHByaXplLCAwLjMpO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbEJldExhYmVsLCB0aGlzLmFyckxpbmVTZWxlY3RlZC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0sIDAuMyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDAuMyk7XG4gICAgICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuICAgIHB1YmxpYyBiZWdpblNwaW5SZWVsKGluZGV4UmVlbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYuaXNGYXN0Q3VycmVudCA9IHNlbGYudG9nZ2xlRmFzdC5pc0NoZWNrZWQ7XG4gICAgICAgIHNlbGYubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA9IDA7XG4gICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldChzZWxmLmFyclJlZWxbaW5kZXhSZWVsXSk7XG4gICAgICAgIGNjLnR3ZWVuKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdKVxuICAgICAgICAgICAgLmRlbGF5KGluZGV4UmVlbCAqIDAuMilcbiAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYzKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIDcwLCAwKSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYubG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgbG9vcFNwaW5SZWVsKGluZGV4UmVlbCkge1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgY2MudHdlZW4oc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0pXG4gICAgICAgICAgICAudG8oMC4wNiwgeyBwb3NpdGlvbjogY2MudjMoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24ueCwgLXNlbGYuZGlzdGFuY2VSZWVsLCAwKSB9LCB7IGVhc2luZzogXCJsaW5lYXJcIiB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0xvb3BTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIHByb2Nlc3NMb29wU3BpblJlZWwoaW5kZXhSZWVsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdICs9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSA0OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaW5kZXhSZWVsICsgKGkgKiA1KTtcblxuICAgICAgICAgICAgdmFyIGluZGV4Um93ID0gTWF0aC5mbG9vcihpbmRleCAvIDUpO1xuICAgICAgICAgICAgdmFyIGl0ZW1JZFRtcCA9IDA7XG4gICAgICAgICAgICBpZiAoaW5kZXhSb3cgPT0gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1JZFRtcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNlbGYuaWNvblNGQmx1ckFycjEwMC5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbUlkVG1wID0gc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4IC0gNV0uaXRlbUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5jaGFuZ2VTcHJpdGVCbHVyQnlJdGVtSWQoaXRlbUlkVG1wKTtcbiAgICAgICAgICAgIGlmIChzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLnNwcml0ZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24gPSBjYy52MyhzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCAwLCAwKTtcbiAgICAgICAgaWYgKHNlbGYuaXNIYXZlUmVzdWx0U3Bpbikge1xuICAgICAgICAgICAgaWYgKHNlbGYuaXNGYXN0Q3VycmVudCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLm51bWJlclNwaW5SZWVsW2luZGV4UmVlbF0gPj0gTUFYX0NZQ0NMRV9TUElOKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZW5kU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA+PSBGQVNUX0NZQ0NMRV9TUElOKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZW5kU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNlbGYubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA+PSBFUlJPUl9DWUNDTEVfU1BJTikge1xuICAgICAgICAgICAgICAgIHNlbGYuZW5kU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGYubG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGVuZFNwaW5SZWVsKGluZGV4UmVlbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPj0gMTsgaS0tKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gaW5kZXhSZWVsICsgKGkgKiA1KTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNlbGYuaWNvblNGQXJyMTAwLmxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uY2hhbmdlU3BpbmVJY29uKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5zcGluZUljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uc3BpbmVJY29uLnNldEFuaW1hdGlvbigwLCBcImFuaW1hdGlvblwiLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF0cml4ID0gc2VsZi5kYXRhUmVzdWx0Lm1hdHJpeC5zcGxpdCgnLCcpO1xuICAgICAgICB2YXIgcm9sbCA9IHRoaXMuYXJyUmVlbFtpbmRleFJlZWxdO1xuICAgICAgICBzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbiA9IGNjLnYzKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIHNlbGYuZGlzdGFuY2VSZWVsLCAwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDM7IGkgPj0gMTsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpbmRleFJlZWwgKyAoaSAqIDUpO1xuICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5jaGFuZ2VTcGluZUljb24obWF0cml4W2luZGV4IC0gNV0pO1xuICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLnNwaW5lSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLnNwaW5lSWNvbi5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2MudHdlZW4oc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0pXG4gICAgICAgICAgICAudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MyhzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCAwLCAwKSB9LCB7IGVhc2luZzogXCJiYWNrT3V0XCIgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZihzZWxmLmlzU291bmQpe1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHNlbGYuc291bmRFbmRTcGluLGZhbHNlLDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhSZWVsID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSWRSZXBlYXRTcGluKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlncy5Mb2dpbi5Db2luID0gc2VsZi5kYXRhUmVzdWx0LmN1cnJlbnRNb25leTtcbiAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5kYXRhUmVzdWx0LmN1cnJlbnROdW1iZXJGcmVlU3BpbiA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5mcmVlc3BpbkN1cnJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnJlZXNwaW5DdXJyZW50LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IHNlbGYuZGF0YVJlc3VsdC5jdXJyZW50TnVtYmVyRnJlZVNwaW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZnJlZXNwaW5DdXJyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuZGF0YVJlc3VsdC5pc0ZyZWVTcGluID09IDEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcmVlc3Bpbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmVlU3BpbmVTcGluZSA9IHRoaXMuZnJlZXNwaW5Ob2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJlZVNwaW5lU3BpbmUuc2V0QW5pbWF0aW9uKDAsXCJhbmdyeWJpcmRzX2ZyZWVzcGluXCIsZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVzcGluTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHNlbGYuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dXaW5FZmZlY3Qoc2VsZi5kYXRhUmVzdWx0LnByaXplLCBzZWxmLmRhdGFSZXN1bHQuY3VycmVudE1vbmV5LCBzZWxmLmRhdGFSZXN1bHQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBnZXRTcHJpdGVGcmFtZUljb25CbHVyKGluZGV4SWNvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJldElkID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaWNvblNGQmx1ckFycjEwS1tpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDApXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pY29uU0ZCbHVyQXJyMTAwW2luZGV4SWNvbl07XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmV0SWQgPT0gMSlcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmljb25TRkJsdXJBcnIxS1tpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDIpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pY29uU0ZCbHVyQXJyMTBLW2luZGV4SWNvbl07XG4gICAgfVxuXG4gICAgZ2V0U3ByaXRlRnJhbWVJY29uKGluZGV4SWNvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmJldElkID09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuaWNvblNGQXJyMTBLW2luZGV4SWNvbl07XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmV0SWQgPT0gMClcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmljb25TRkFycjEwMFtpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDEpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pY29uU0ZBcnIxS1tpbmRleEljb25dO1xuICAgICAgICBlbHNlIGlmICh0aGlzLmJldElkID09IDIpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5pY29uU0ZBcnIxMEtbaW5kZXhJY29uXTtcbiAgICB9XG5cbiAgICBnZXRTcGluZUljb24oaW5kZXhJY29uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYmV0SWQgPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5hcnJTa2VsZXRvbkljb24xMEtbaW5kZXhJY29uXTtcbiAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuYXJyU2tlbGV0b25JY29uMTAwW2luZGV4SWNvbl07XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmV0SWQgPT0gMSlcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmFyclNrZWxldG9uSWNvbjFLW2luZGV4SWNvbl07XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuYmV0SWQgPT0gMilcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmFyclNrZWxldG9uSWNvbjEwS1tpbmRleEljb25dO1xuICAgIH1cblxuICAgIGhpZGVXaW5FZmZlY3QoKSB7XG4gICAgICAgIHRoaXMud2luTm9ybWFsQmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2luTGFiZWwuc3RyaW5nID0gXCIwXCI7XG4gICAgICAgIHRoaXMuYm9udXNOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJpZ1dpbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuamFja3BvdE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25CdG5Ub2dnbGVNdXNpYygpe1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNdXNpYyA9ICF0aGlzLmlzTXVzaWM7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuaXNNdXNpYz8xOjApO1xuICAgIH1cblxuICAgIG9uQnRuVG9nZ2xlU291bmQoKXtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU291bmQgPSAhdGhpcy5pc1NvdW5kO1xuICAgIH1cblxuICAgIG9uQnRuSGlzdG9yeSgpe1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25CdG5IaWRlU2V0dGluZygpO1xuICAgIH1cblxuICAgIG9uQnRuSGlzdG9yeUphY2twb3QoKXtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQnRuSGlkZVNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBvbkJ0bkhpZGVTZXR0aW5nKCl7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgVHdlZW4uaGlkZVBvcHVwKHRoaXMubm9kZUJveFNldHRpbmcsdGhpcy5ub2RlQm94U2V0dGluZy5wYXJlbnQsZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQnRuU291bmRDbGljaygpe1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CdG5TZXR0aW5nKCl7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQgPSB0aGlzLmlzTXVzaWM7XG4gICAgICAgIHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkID0gdGhpcy5pc1NvdW5kO1xuICAgICAgICBUd2Vlbi5zaG93UG9wdXAodGhpcy5ub2RlQm94U2V0dGluZyx0aGlzLm5vZGVCb3hTZXR0aW5nLnBhcmVudCk7XG4gICAgfVxuICAgIHNob3dMaW5lV2luKGxpbmVzOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGlmIChsaW5lcy5sZW5ndGggPT0gMCB8fCBsaW5lcy5sZW5ndGggPT0gMSAmJiBcIlwiICsgbGluZXNbMF0gPT09ICcnKSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwic2hvd0xJbmVXaW4gOlwiK2krXCIgOiBcIitsaW5lKTtcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IHRoaXMubGluZVdpblBhcmVudC5jaGlsZHJlbltsaW5lIC0gMV07XG4gICAgICAgICAgICBsaW5lTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAvL2hpZGUgYWxsIGxpbmVcbiAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaGlkZUxpbmVXaW4oZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjUpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy9hY3RpdmUgbGluZSBvbmUgYnkgb25lXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZU5vZGUgPSB0aGlzLmxpbmVXaW5QYXJlbnQuY2hpbGRyZW5bbGluZSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKGkgKiB0aGlzLlRJTUVfREVMQVlfU0hPV19MSU5FKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZU5vZGUuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKHRoaXMuVElNRV9ERUxBWV9TSE9XX0xJTkUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBsaW5lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIGhpZGVMaW5lV2luKHN0b3BBY3Rpb246IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHN0b3BBY3Rpb24pIHRoaXMubGluZVdpblBhcmVudC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmxpbmVXaW5QYXJlbnQuY2hpbGRyZW4uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEJ1dHRvbkVuYWJsZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5idG5TcGluLmludGVyYWN0YWJsZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5idG5MaW5lLmludGVyYWN0YWJsZSA9IGFjdGl2ZTtcbiAgICAgICAgaWYgKGFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNrZVNwaW4uc2V0QW5pbWF0aW9uKDAsIFwic3BpblwiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2tlU3Bpbi5zZXRBbmltYXRpb24oMCwgXCJzdG9wXCIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICBcblxuICAgIHNldEJ1dHRvbkZsYXNoKGFjdGl2ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnRvZ2dsZUZhc3QuaW50ZXJhY3RhYmxlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLnRvZ2dsZUZhc3Qubm9kZS5jaGlsZHJlblswXS5jb2xvciA9IGFjdGl2ZSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICAvLyNyZWdpb24gQ0hBTkdFIEJFVFxuICAgIGNoYW5nZUJldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5ub2RlLmFjdGl2ZSA9ICF0aGlzLm1TbG90TG9iYnkubm9kZS5hY3RpdmU7XG4gICAgfVxuXG4gICAgY2hvb3NlQmV0KGV2ZW50LCBiZXQpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBvbGRJZHggPSB0aGlzLmJldElkO1xuICAgICAgICB0aGlzLmJldElkID0gcGFyc2VJbnQoYmV0KTtcbiAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gMDtcbiAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyAgY2MubG9nKFwidGF0IHJvaVwiKTtcbiAgICAgICAgdGhpcy5pc1RyaWFsID0gYmV0ID09IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmJldElkID0gYmV0ID09IC0xID8gMiA6IGJldDtcbiAgICAgICAgLy8gLy8gIGNjLmxvZyhcImNob29zZUJldCBvbGRJZHg6XCIrb2xkSWR4K1wiIGJldElkXCIrdGhpcy5iZXRJZCtcIiB0aGlzLmxpc3RCZXQubGVuZ3RoXCIrdGhpcy5saXN0QmV0Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLmJldElkID49IHRoaXMubGlzdEJldC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuYmV0SWQgPSAwO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZENoYW5nZVJvb20ob2xkSWR4LCB0aGlzLmJldElkKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGFuZ2VSb29tKG9sZElkeCwgdGhpcy5iZXRJZCkpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgc2hvd0d1aWRlKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wdXBHdWlkZS5zaG93KHRoaXMpO1xuICAgIH1cblxuICAgIGNsb3NlR3VpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3B1cEd1aWRlLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzaG93Q2hvb3NlTGluZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNob29zZUxpbmVTY3JpcHQuc2hvdyh0aGlzLmFyckxpbmVTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Zhc3RDdXJyZW50ID0gdGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZDtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQgJiYgIXRoaXMuaXNTcGluaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXV0b1NwaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgIFxuICAgICAgICBpZiAoIXRoaXMuaXNTcGluaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhY3RCYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFVuU3ViY3JpYmUodGhpcy5iZXRJZCkpO1xuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5zaG93KCk7XG4gICAgICAgIHRoaXMuaGlkZUdhbWVQbGF5KCk7XG4gICAgfVxufVxuIl19