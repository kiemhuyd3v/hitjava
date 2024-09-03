"use strict";
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