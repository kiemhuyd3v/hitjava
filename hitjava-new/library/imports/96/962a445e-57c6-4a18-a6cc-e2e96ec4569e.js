"use strict";
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