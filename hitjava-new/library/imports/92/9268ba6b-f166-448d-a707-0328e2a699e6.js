"use strict";
cc._RF.push(module, '9268bpr8WZEjacHAyjippnm', 'Slot1.Slot1Controller');
// Slot1/Slot1Script/Slot1.Slot1Controller.ts

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
var BundleControl_1 = require("../../Loading/src/BundleControl");
var Configs_1 = require("../../Loading/src/Configs");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var Slot1_Cmd_1 = require("./Slot1.Cmd");
var Slot1_ItemSlot_1 = require("./Slot1.ItemSlot");
var Slot1_Lobby_1 = require("./Slot1.Lobby");
var Slot1_PopupBonus_1 = require("./Slot1.PopupBonus");
var Slot1_TrialResults_1 = require("./Slot1.TrialResults");
var MAX_CYCCLE_SPIN = 20;
var FAST_CYCCLE_SPIN = 10;
var ERROR_CYCCLE_SPIN = 50;
var ANIM_ICON = ["Jackpot", "wildmonkey", "bonus", "batgioi", "satang", "quadao", "vongkimco"];
var TW = cc.tween;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot1Controller = /** @class */ (function (_super) {
    __extends(Slot1Controller, _super);
    function Slot1Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeCoin = null;
        _this.btnBack = null;
        _this.btnPlayTry = null;
        _this.btnPlayReal = null;
        _this.btnLine = null;
        _this.popupBonus = null;
        _this.nodeBoxSetting = null;
        _this.toggleMusic = null;
        _this.toggleSound = null;
        _this.spriteSpin = null;
        _this.animSpin = null;
        _this.sfSpinStart = null;
        _this.sfSpinStop = null;
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
        _this.lblFreeSpinCount = null;
        //win
        _this.lblBet = null;
        _this.bigWinNode = null;
        _this.txtWinBigWin = null;
        _this.jackpotNode = null;
        _this.bonusNode = null;
        _this.iconWildColumns = null;
        //line win
        _this.lineWinParent = null;
        _this.collumParent = null;
        //show result
        _this.totalWinLabel = null;
        _this.totalBetLabel = null;
        _this.musicLobby = null;
        _this.musicBonus = null;
        _this.soundClick = null;
        _this.soundStartSpin = null;
        _this.soundRepeatSpin = null;
        _this.soundEndSpin = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundtouchBonus = null;
        _this.soundtouchBonusLose = null;
        _this.soundSmumary = null;
        _this.arrRealItem = [];
        _this.popupJackpotHistory = null;
        _this.popupHistory = null;
        _this.popupGuide = null;
        _this.popupSelectLine = null;
        _this.bonusGameView = null;
        _this.dailyFreeSpin = 0;
        _this.listActiveItem = []; //list 15 item nhin thay tren man hinh
        _this.columnsWild = [];
        _this.TIME_DELAY_SHOW_LINE = 1;
        _this.wildItemId = 1;
        _this.betId = 0;
        _this.listBet = [100, 1000, 10000];
        _this.listBetString = ["100", "1K", "10K"];
        _this.arrLineSelected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        _this.isTrial = false;
        _this.isSpining = false;
        _this.autoSpin = false;
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
        _this.mutipleJpNode = null;
        _this.isFast = false;
        _this.arrReel = [];
        _this.distanceReel = 0;
        _this.arrUIItemIcon = [];
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.isFirst = false;
        _this.isSound = false;
        _this.isMusic = true;
        _this.audioIdRepeatSpin = 0;
        return _this;
    }
    Slot1Controller.prototype.start = function () {
        var _this = this;
        // Configs.Login.Coin = 0;
        this.dailyFreeSpin = 0;
        this.isSound = true;
        this.isMusic = true;
        this.totalWinLabel.string = "";
        SlotNetworkClient_1.default.getInstance().addOnClose(function () {
            _this.mSlotLobby.onBtnBack();
        }, this);
        this.iconWildColumns.zIndex = 3;
        this.init();
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            // //  cc.log(inpacket.getCmdId());
            switch (inpacket.getCmdId()) {
                case Slot1_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    _this.mSlotLobby.onUpdateJackpot(data);
                    break;
                case Slot1_Cmd_1.default.Code.UPDATE_POT:
                    {
                        var res = new Slot1_Cmd_1.default.ReceiveUpdatePot(data);
                        // //  cc.log("update Jackpot:" + (this.betId == 0));
                        if (_this.betId == -1) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom3, 4.0);
                        }
                        else if (_this.betId == 0) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom1, 4.0);
                        }
                        else if (_this.betId == 1) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom2, 4.0);
                        }
                        else if (_this.betId == 2) {
                            Tween_1.default.numberTo(_this.jackpotLabel, res.valueRoom4, 4.0);
                        }
                    }
                    break;
                case Slot1_Cmd_1.default.Code.UPDATE_RESULT:
                    {
                        var res = new Slot1_Cmd_1.default.ReceiveResult(data);
                        //dataBonusFake res = JSON.parse('{"_pos":99,"_data":{"0":1,"1":7,"2":209,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":10,"11":173,"12":5,"13":0,"14":29,"15":50,"16":44,"17":50,"18":44,"19":54,"20":44,"21":53,"22":44,"23":53,"24":44,"25":54,"26":44,"27":52,"28":44,"29":50,"30":44,"31":53,"32":44,"33":51,"34":44,"35":53,"36":44,"37":51,"38":44,"39":53,"40":44,"41":49,"42":44,"43":53,"44":0,"45":14,"46":51,"47":44,"48":54,"49":44,"50":57,"51":44,"52":49,"53":52,"54":44,"55":49,"56":55,"57":44,"58":50,"59":48,"60":0,"61":21,"62":52,"63":44,"64":49,"65":44,"66":49,"67":44,"68":49,"69":44,"70":50,"71":44,"72":49,"73":44,"74":49,"75":44,"76":49,"77":44,"78":52,"79":44,"80":49,"81":44,"82":49,"83":0,"84":0,"85":0,"86":0,"87":0,"88":40,"89":150,"90":160,"91":0,"92":0,"93":0,"94":0,"95":1,"96":126,"97":50,"98":160},"_length":99,"_controllerId":1,"_cmdId":2001,"_error":0,"ref":2733,"result":5,"matrix":"2,2,6,5,5,6,4,2,5,3,5,3,5,1,5","linesWin":"3,6,9,14,17,20","haiSao":"4,1,0,1,2,1,0,1,4,1,1","prize":2660000,"currentMoney":25047712}');
                        _this.spinResult(res);
                    }
                    break;
                case Slot1_Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.isTrial) {
                            var res = new Slot1_Cmd_1.default.ReceiveFreeDaiLy(data);
                            //  cc.log("init Slot1 FreeSpin:" + JSON.stringify(res));
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
                case Slot1_Cmd_1.default.Code.DATE_X2:
                    {
                        var res = new Slot1_Cmd_1.default.ReceiveDateX2(data);
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
                case Slot1_Cmd_1.default.Code.CHANGE_ROOM:
                    {
                        //  cc.log("changeRoom:" + JSON.stringify(data));
                    }
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot1_Cmd_1.default.ReqSubcribeHallSlot());
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendSubcribe(0));
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            Tween_1.default.numberTo(_this.moneyLabel, Configs_1.default.Login.Coin, 1.0);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function () {
            App_1.default.instance.showLoading(false);
        });
        this.mSlotLobby.init(this);
        //this.initMutipleJPNode();
    };
    Slot1Controller.prototype.initMutipleJPNode = function () {
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
                    _this.mutipleJpNode.setInfo("DUAXE");
                }
            });
        }
    };
    Slot1Controller.prototype.showAnimations = function () {
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
    Slot1Controller.prototype.showGamePlay = function () {
        this.randomIconList();
        this.nodeGamePlay.active = true;
        this.showAnimations();
    };
    Slot1Controller.prototype.hideGamePlay = function () {
        this.nodeGamePlay.active = false;
    };
    Slot1Controller.prototype.init = function () {
        this.totalWinLabel.string = "";
    };
    Slot1Controller.prototype.onJoinRoom = function (res) {
        if (res === void 0) { res = null; }
        //  cc.log("onJoinRoom:" + this.betId);
        this.lblBet.string = this.listBetString[this.betId];
        var betIdTmp = this.betId;
        if (betIdTmp == -1)
            betIdTmp = 2;
        var totalbet = (this.arrLineSelected.length * this.listBet[betIdTmp]);
        this.totalBetLabel.string = Utils_1.default.formatNumberMin(totalbet);
        this.mSlotLobby.hide();
        this.nodeDemo.active = this.isTrial ? true : false;
        this.showGamePlay();
        this.setButtonEnable(true);
    };
    Slot1Controller.prototype.randomIconList = function () {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
            var index = i;
            var itemId = Math.floor(Math.random() * 7);
            self.arrUIItemIcon[i].init(itemId, index, self);
            self.arrUIItemIcon[i].changeSpineIcon(itemId);
            // self.arrUIItemIcon[i].spriteIcon.node.active = false;
            // self.arrUIItemIcon[i].spineIcon.node.active = true;
            // self.arrUIItemIcon[i].spineIcon.animation = ANIM_ICON[itemId];
            self.arrUIItemIcon[i].spineIcon.loop = true;
        }
    };
    /**
     * random between, min, max included
     */
    Slot1Controller.prototype.randomBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Slot1Controller.prototype.onClickChangeRoom = function () {
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        this.actBack();
    };
    Slot1Controller.prototype.spinClick = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) {
            this.iconWildColumns.children[i].active = false;
        }
        //hide effect
        // this.setButtonAuto(false);
        // this.setButtonFlash(false);
        //  cc.log("spinClick:" + this.isTrial);
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
            //  cc.log("total line==", this.arrLineSelected + "==list bet--" + this.listBet[this.betId]);
            SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendPlay(this.listBet[this.betId], this.arrLineSelected.toString()));
        }
        else {
            this.hideWinEffect();
            this.hideLineWin(true);
            this.setButtonEnable(false);
            this.totalWinLabel.string = "";
            var rIdx = Utils_1.default.randomRangeInt(0, Slot1_TrialResults_1.default.results.length);
            //  cc.log("random index=" + rIdx)
            this.spinResult(Slot1_TrialResults_1.default.results[rIdx]);
        }
    };
    Slot1Controller.prototype.spinResult = function (res) {
        this.isSpining = true;
        //  cc.log("spinResult:" + JSON.stringify(res));
        // res = JSON.parse('{"_pos":80,"_data":{"0":1,"1":7,"2":209,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":18,"11":117,"12":1,"13":0,"14":29,"15":52,"16":44,"17":52,"18":44,"19":54,"20":44,"21":54,"22":44,"23":52,"24":44,"25":51,"26":44,"27":54,"28":44,"29":53,"30":44,"31":52,"32":44,"33":53,"34":44,"35":51,"36":44,"37":51,"38":44,"39":52,"40":44,"41":51,"42":44,"43":54,"44":0,"45":16,"46":50,"47":44,"48":51,"49":44,"50":54,"51":44,"52":55,"53":44,"54":49,"55":50,"56":44,"57":49,"58":54,"59":44,"60":49,"61":55,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":3,"70":13,"71":64,"72":0,"73":0,"74":0,"75":0,"76":2,"77":43,"78":233,"79":204},"_length":80,"_controllerId":1,"_cmdId":2001,"_error":0,"ref":4725,"result":1,"matrix":"4,4,6,6,4,3,6,5,4,5,3,3,4,3,6","linesWin":"2,3,6,7,12,16,17","haiSao":"","prize":200000,"currentMoney":36432332}');
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        var result = res.result;
        if (successResult.indexOf(result) === -1) {
            //fail
            if (result === 102) {
                //khong du tien
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
        this.columnsWild.length = 0;
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
    Slot1Controller.prototype.spinFinish = function (hasDelay) {
        var _this = this;
        //  cc.log("spin finish");
        this.changeAllItemToDark(false);
        this.isSpining = false;
        var that = this;
        this.node.runAction(cc.sequence(cc.delayTime(hasDelay ? 1 : 0), cc.callFunc(function () {
            if (_this.autoSpin) {
                that.spinClick();
            }
            else {
                that.setButtonEnable(true);
                that.setButtonFlash(true);
            }
        })));
    };
    Slot1Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        App_1.default.instance.showCoins(number, this.totalWinLabel.node, this.nodeCoin);
    };
    Slot1Controller.prototype.showWinEffect = function (prize, currentMoney, result) {
        var _this = this;
        var self = this;
        this.btnBack.interactable = true;
        if (prize > 0) {
            this.lineWinParent.zIndex = 1;
            this.collumParent.zIndex = 0;
            this.changeAllItemToDark(true);
            if (result == 5) {
                //bonus
                if (this.isMusic) {
                    cc.audioEngine.playMusic(this.musicBonus, true);
                }
                this.bonusNode.active = true;
                var bonusSpine = this.bonusNode.getComponentInChildren(sp.Skeleton);
                bonusSpine.animation = "bounus fx";
                bonusSpine.loop = true;
                this.node.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
                    _this.bonusNode.active = false;
                    _this.actShowBonus(_this.isTrial ? 100 : _this.listBet[_this.betId], _this.dataResult.haiSao, function () {
                        _this.showLineWin(self.dataResult.linesWin.split(","));
                        _this.showCoins(prize);
                        Tween_1.default.numberTo(_this.totalWinLabel, prize, 1.0);
                        if (!_this.isTrial)
                            Tween_1.default.numberTo(_this.moneyLabel, currentMoney, 1.0);
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
                bigwinSpine.animation = "thanglon";
                bigwinSpine.loop = true;
                Tween_1.default.numberTo(this.txtWinBigWin, prize, 1.0);
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
                Tween_1.default.numberTo(this.totalWinLabel, prize, 1.0);
                if (!this.isTrial)
                    Tween_1.default.numberTo(this.moneyLabel, currentMoney, 1.0);
            }
            else if (result == 3 || result == 4) {
                //no hu
                if (this.isSound) {
                    var audioIdJackpot = cc.audioEngine.play(this.soundJackpot, false, 1);
                }
                this.jackpotNode.active = true;
                var jackpotSpine = this.jackpotNode.getComponentInChildren(sp.Skeleton);
                jackpotSpine.animation = "animation6";
                jackpotSpine.loop = true;
                cc.Tween.stopAllByTarget(this.nodeWinJackpot);
                this.txtWinJackpot.string = "0";
                Tween_1.default.numberTo(this.txtWinJackpot, prize, 3.0);
                // this.nodeWinJackpot.position = cc.v3(0, -360, 0);
                this.nodeWinJackpot.active = true;
                cc.tween(this.nodeWinJackpot)
                    .to(1, { position: cc.v3(0, 0, 0) })
                    .delay(3)
                    .to(1, { position: cc.v3(0, 0, 0) })
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
                this.showCoins(prize);
                Tween_1.default.numberTo(this.totalWinLabel, prize, 1.0);
                if (!this.isTrial)
                    Tween_1.default.numberTo(this.moneyLabel, currentMoney, 1.0);
            }
            else {
                if (this.isSound) {
                    cc.audioEngine.play(this.soundSpinWin, false, 1);
                }
                this.showCoins(prize);
                Tween_1.default.numberTo(this.totalWinLabel, prize, 1.0);
                if (!this.isTrial)
                    Tween_1.default.numberTo(this.moneyLabel, currentMoney, 1.0);
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
            // App.instance.showCoins(10,this.totalWinLabel.node,this.nodeCoin);
            Tween_1.default.numberTo(this.totalWinLabel, prize, 1.0);
            if (!this.isTrial)
                Tween_1.default.numberTo(this.moneyLabel, currentMoney, 1.0);
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
    Slot1Controller.prototype.beginSpinReel = function (indexReel) {
        var self = this;
        self.isFastCurrent = self.toggleFast.isChecked;
        self.numberSpinReel[indexReel] = 0;
        cc.Tween.stopAllByTarget(self.arrReel[indexReel]);
        var timeDelay = this.toggleFast.isChecked ? 0.1 : 0.2;
        cc.tween(self.arrReel[indexReel])
            .delay(indexReel * timeDelay)
            .to(0.1, { position: cc.v3(self.arrReel[indexReel].position.x, 70, 0) }, { easing: "linear" })
            .call(function () {
            self.loopSpinReel(indexReel);
        })
            .start();
    };
    Slot1Controller.prototype.loopSpinReel = function (indexReel) {
        var self = this;
        cc.tween(self.arrReel[indexReel])
            .to(0.06, { position: cc.v3(self.arrReel[indexReel].position.x, -self.distanceReel, 0) }, { easing: "linear" })
            .call(function () {
            self.processLoopSpinReel(indexReel);
        })
            .start();
    };
    Slot1Controller.prototype.processLoopSpinReel = function (indexReel) {
        var self = this;
        self.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
            var index = indexReel + (i * 5);
            var indexRow = Math.floor(index / 5);
            var itemIdTmp = 0;
            if (indexRow == 0) {
                itemIdTmp = Math.floor(Math.random() * 6);
            }
            else {
                itemIdTmp = self.arrUIItemIcon[index - 5].itemId;
            }
            self.arrUIItemIcon[index].changeSpriteBlurByItemId(itemIdTmp);
            // if (self.arrUIItemIcon[index].spriteIcon.node.active == false) {
            //     self.arrUIItemIcon[index].spriteIcon.node.active = true;
            //     self.arrUIItemIcon[index].spineIcon.node.active = false;
            // }
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
    Slot1Controller.prototype.endSpinReel = function (indexReel) {
        var _this = this;
        var self = this;
        if (self.dataResult == null) {
            for (var i = 3; i >= 1; i--) {
                var index = indexReel + (i * 5);
                var itemId = Math.floor(Math.random() * 7);
                self.arrUIItemIcon[index].changeSpineIcon(itemId);
                self.arrUIItemIcon[index].spineIcon.loop = true;
            }
            return;
        }
        var matrix = self.dataResult.matrix.split(',');
        var roll = this.arrReel[indexReel];
        self.arrReel[indexReel].position = cc.v3(self.arrReel[indexReel].position.x, self.distanceReel, 0);
        var arrReal = [];
        for (var i = 3; i >= 1; i--) {
            var index = indexReel + (i * 5);
            var id = matrix[index - 5];
            self.arrUIItemIcon[index].changeSpineIcon(id);
            self.arrUIItemIcon[index].spineIcon.loop = true;
            arrReal.unshift(self.arrUIItemIcon[index]);
        }
        var timeStop = this.toggleFast.isChecked ? 0.2 : 0.3;
        cc.tween(self.arrReel[indexReel])
            .to(timeStop, { position: cc.v3(self.arrReel[indexReel].position.x, 0, 0) }, { easing: cc.easing.backOut })
            .call(function () {
            if (self.isSound) {
                cc.audioEngine.play(self.soundEndSpin, false, 1);
            }
            if (indexReel == 4) {
                cc.audioEngine.stop(_this.audioIdRepeatSpin);
                for (var i = 0; i < 5; i++) {
                    var itemId = Math.floor(Math.random() * 7);
                    self.arrUIItemIcon[i].changeSpineIcon(itemId);
                    self.arrUIItemIcon[i].spineIcon.loop = true;
                }
                for (var i = 20; i < 25; i++) {
                    var itemId = Math.floor(Math.random() * 7);
                    self.arrUIItemIcon[i].changeSpineIcon(itemId);
                    self.arrUIItemIcon[i].spineIcon.loop = true;
                }
                Configs_1.default.Login.Coin = self.dataResult.currentMoney;
                self.showWinEffect(self.dataResult.prize, self.dataResult.currentMoney, self.dataResult.result);
            }
        })
            .start();
    };
    Slot1Controller.prototype.onBtnSoundTouchBonus = function (isWin) {
        if (this.isSound) {
            if (isWin) {
                cc.audioEngine.play(this.soundtouchBonus, false, 1);
            }
            else {
                cc.audioEngine.play(this.soundtouchBonusLose, false, 1);
            }
        }
    };
    Slot1Controller.prototype.onBtnSoundSumary = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundSmumary, false, 1);
        }
    };
    Slot1Controller.prototype.getSpriteFrameIcon = function (indexIcon) {
        var self = this;
        return null;
    };
    Slot1Controller.prototype.hideWinEffect = function () {
        this.bigWinNode.active = false;
        this.jackpotNode.active = false;
    };
    Slot1Controller.prototype.onBtnToggleMusic = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isMusic = !this.isMusic;
        cc.audioEngine.setMusicVolume(this.isMusic ? 0.5 : 0);
    };
    Slot1Controller.prototype.onBtnToggleSound = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isSound = !this.isSound;
    };
    Slot1Controller.prototype.onBtnHistory = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.onBtnHideSetting();
    };
    Slot1Controller.prototype.onBtnHistoryJackpot = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.onBtnHideSetting();
    };
    Slot1Controller.prototype.onBtnHideSetting = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        Tween_1.default.hidePopup(this.nodeBoxSetting, this.nodeBoxSetting.parent, false);
    };
    Slot1Controller.prototype.onBtnSoundClick = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
    };
    Slot1Controller.prototype.onBtnSetting = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.nodeBoxSetting.active == false) {
            //  cc.log("clmmm");
            this.nodeBoxSetting.active = true;
        }
        else {
            this.nodeBoxSetting.active = false;
        }
    };
    Slot1Controller.prototype.showLineWin = function (lines) {
        var _this = this;
        if (lines.length == 0)
            return;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var lineNode = this.lineWinParent.children[line - 1];
            lineNode.active = true;
        }
        var that = this;
        //hide all line
        var acHideAllLine = cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            _this.lineWinParent.zIndex = 0;
            _this.collumParent.zIndex = 1;
            that.hideLineWin(false);
        }));
        var acShowOneByOne = cc.callFunc(function () {
            var _loop_1 = function (i) {
                var line = lines[i];
                var lineNode = _this.lineWinParent.children[line - 1];
                TW(lineNode)
                    .delay(i * _this.TIME_DELAY_SHOW_LINE)
                    .call(function () {
                    lineNode.active = true;
                    var arrItem = _this.getItemWinInLine(line - 1);
                    var arrIdOfItem = [];
                    var idWin = -1;
                    arrItem.forEach(function (item) {
                        arrIdOfItem.push(item.itemId);
                    });
                    arrItem.forEach(function (item) {
                        idWin = _this.getItemIdWinInLine(arrIdOfItem);
                        if (item.itemId == idWin || (item.itemId == 1 && idWin != 0 && idWin != 2)) {
                            item.checkShowSpriteOrSpine();
                        }
                    });
                })
                    .delay(_this.TIME_DELAY_SHOW_LINE)
                    .call(function () {
                    // this.changeAllItemToDark(true);
                    lineNode.active = false;
                    if (i == lines.length - 1)
                        that.spinFinish(false);
                })
                    .start();
            };
            //active line one by one
            for (var i = 0; i < lines.length; i++) {
                _loop_1(i);
            }
        });
        if (this.toggleFast.isChecked) {
            var timeDelay = this.toggleFast.isChecked ? 0 : 1.0;
            this.lineWinParent.runAction(cc.sequence(acHideAllLine, cc.delayTime(timeDelay), cc.callFunc(function () {
                _this.spinFinish(false);
            })));
        }
        else {
            var duration = acHideAllLine.getDuration();
            this.lineWinParent.runAction(cc.sequence(acHideAllLine, cc.delayTime(duration), acShowOneByOne));
        }
    };
    Slot1Controller.prototype.hideLineWin = function (stopAction) {
        if (stopAction)
            this.lineWinParent.stopAllActions();
        this.lineWinParent.children.forEach(function (element) {
            element.active = false;
        });
    };
    Slot1Controller.prototype.setButtonEnable = function (active) {
        this.btnSpin.interactable = active;
        this.btnBack.interactable = active;
        this.btnLine.interactable = active;
        this.btnPlayTry.interactable = active;
        this.btnPlayReal.interactable = active;
        if (active == true) {
            // this.spriteSpin.spriteFrame = this.sfSpinStart;
            this.spriteSpin.node.active = false;
            this.animSpin.active = true;
        }
        else {
            this.spriteSpin.spriteFrame = this.sfSpinStop;
            this.spriteSpin.node.active = true;
            this.animSpin.active = false;
        }
    };
    Slot1Controller.prototype.setButtonFlash = function (active) {
        this.toggleFast.interactable = active;
        this.toggleFast.node.children[0].color = active ? cc.Color.WHITE : cc.Color.GRAY;
    };
    //#region CHANGE BET
    Slot1Controller.prototype.changeBet = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.mSlotLobby.node.active = !this.mSlotLobby.node.active;
    };
    Slot1Controller.prototype.chooseBet = function (event, bet) {
        var oldIdx = this.betId;
        this.betId = parseInt(bet);
        this.dailyFreeSpin = 0;
        this.lblFreeSpinCount.node.parent.active = false;
        this.isTrial = bet == -1 ? true : false;
        this.betId = bet == -1 ? 2 : bet;
        if (this.betId >= this.listBet.length) {
            this.betId = 0;
            SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
        }
        else {
            SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendChangeRoom(oldIdx, this.betId));
            this.onJoinRoom();
        }
    };
    Slot1Controller.prototype.changeSpeed = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.isFastCurrent = this.toggleFast.isChecked;
        if (this.toggleFast.isChecked && !this.isSpining) {
            this.spinClick();
        }
    };
    Slot1Controller.prototype.setAutoSpin = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.autoSpin = !this.autoSpin;
        if (!this.isSpining) {
            this.spinClick();
        }
    };
    Slot1Controller.prototype.actBack = function () {
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot1_Cmd_1.default.SendUnSubcribe(this.betId));
        this.mSlotLobby.show();
        this.hideGamePlay();
    };
    Slot1Controller.prototype.actHistoryJackpot = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupJackpotHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot1", "duaxe/prefabs/PopupJackpotHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupJackpotHistory = cc.instantiate(prefab).getComponent("Slot1.PopupJackpotHistory");
                _this.popupJackpotHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupJackpotHistory.show();
            });
        }
        else {
            this.popupJackpotHistory.show();
        }
    };
    Slot1Controller.prototype.actHistory = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupHistory == null) {
            BundleControl_1.default.loadPrefabGame("Slot1", "duaxe/prefabs/PopupHistory", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupJackpotHistory = cc.instantiate(prefab).getComponent("Slot1.PopupHistory");
                _this.popupJackpotHistory.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupJackpotHistory.show();
            });
        }
        else {
            this.popupHistory.show();
        }
    };
    Slot1Controller.prototype.actGuide = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.popupGuide == null) {
            BundleControl_1.default.loadPrefabGame("Slot1", "duaxe/prefabs/PopupGuide", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupGuide = cc.instantiate(prefab).getComponent("Slot1.PopupGuide");
                _this.popupGuide.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupGuide.show();
            });
        }
        else {
            this.popupGuide.show();
        }
    };
    Slot1Controller.prototype.actSelectLine = function () {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (this.isTrial) {
            App_1.default.instance.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.popupSelectLine == null) {
            BundleControl_1.default.loadPrefabGame("Slot1", "duaxe/prefabs/PopupSelectLine", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupSelectLine = cc.instantiate(prefab).getComponent("Slot1.PopupSelectLine");
                _this.popupSelectLine.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupSelectLine.onSelectedChanged = function (lines) {
                    _this.arrLineSelected = lines;
                    _this.totalLineLabel.string = lines.length.toString();
                    _this.totalBetLabel.string = Utils_1.default.formatNumberMin(lines.length * _this.listBet[_this.betId]);
                };
                _this.popupSelectLine.show();
            });
        }
        else {
            this.popupSelectLine.show();
        }
    };
    // this.actShowBonus(this.isTrial ? 100 : this.listBet[this.betId], this.dataResult.haiSao, this, () => {
    Slot1Controller.prototype.actShowBonus = function (isTrial, dataHaiSao, cb) {
        var _this = this;
        if (this.isSound) {
            cc.audioEngine.play(this.soundBonus, false, 1);
        }
        if (this.popupBonus == null) {
            BundleControl_1.default.loadPrefabGame("Slot1", "duaxe/prefabs/PopupBonus", function (finish, total) {
                // App.instance.showErrLoading(App.instance.getTextLang('txt_loading1') + parseInt((finish / total) * 100) + "%");
            }, function (prefab) {
                App_1.default.instance.showLoading(false);
                _this.popupBonus = cc.instantiate(prefab).getComponent("Slot1.PopupBonus");
                _this.popupBonus.node.parent = cc.director.getScene().getChildByName("Canvas");
                _this.popupBonus.showBonus(isTrial, dataHaiSao, _this, cb);
            });
        }
        else {
            this.popupBonus.showBonus(isTrial, dataHaiSao, this, cb);
        }
    };
    Slot1Controller.prototype.changeAllItemToDark = function (state) {
        this.arrUIItemIcon.forEach(function (item) {
            var sprite = item.getComponentInChildren(cc.Sprite);
            var spine = item.getComponentInChildren(sp.Skeleton);
            sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            sprite.node.active = true;
            spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
            spine.node.active = false;
            spine.node.scale = 0.65;
            sprite.node.scale = 0.8;
        });
    };
    Slot1Controller.prototype.getItemWinInLine = function (lineId) {
        var lineArr = this.mapLine[lineId];
        var arrItem = [];
        for (var i = 0; i < lineArr.length; i++) {
            arrItem.push(this.arrRealItem[lineArr[i]]);
        }
        return arrItem;
    };
    Slot1Controller.prototype.getItemIdWinInLine = function (arrId) {
        var count = 0;
        var idWin = -1;
        arrId.forEach(function (id) {
            var size = arrId.filter(function (x) { return x == id && x != 1; }).length;
            if (size >= count) {
                count = size;
                idWin = id;
            }
        });
        return idWin;
    };
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "btnPlayTry", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "btnPlayReal", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "btnLine", void 0);
    __decorate([
        property(Slot1_PopupBonus_1.default)
    ], Slot1Controller.prototype, "popupBonus", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "nodeBoxSetting", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "toggleMusic", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Sprite)
    ], Slot1Controller.prototype, "spriteSpin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "animSpin", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot1Controller.prototype, "sfSpinStart", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Slot1Controller.prototype, "sfSpinStop", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "nodeDemo", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "nodeWinJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "txtWinJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "nodeGamePlay", void 0);
    __decorate([
        property(Slot1_Lobby_1.default)
    ], Slot1Controller.prototype, "mSlotLobby", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "jackpotLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "moneyLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "totalLineLabel", void 0);
    __decorate([
        property(cc.Button)
    ], Slot1Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot1Controller.prototype, "toggleFast", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot1Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "bigWinNode", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "txtWinBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "jackpotNode", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "bonusNode", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "iconWildColumns", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "lineWinParent", void 0);
    __decorate([
        property(cc.Node)
    ], Slot1Controller.prototype, "collumParent", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "totalWinLabel", void 0);
    __decorate([
        property(cc.Label)
    ], Slot1Controller.prototype, "totalBetLabel", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "musicLobby", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "musicBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundStartSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundRepeatSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundEndSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundtouchBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundtouchBonusLose", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot1Controller.prototype, "soundSmumary", void 0);
    __decorate([
        property([Slot1_ItemSlot_1.default])
    ], Slot1Controller.prototype, "arrRealItem", void 0);
    __decorate([
        property([cc.Node])
    ], Slot1Controller.prototype, "arrReel", void 0);
    __decorate([
        property
    ], Slot1Controller.prototype, "distanceReel", void 0);
    __decorate([
        property([Slot1_ItemSlot_1.default])
    ], Slot1Controller.prototype, "arrUIItemIcon", void 0);
    Slot1Controller = __decorate([
        ccclass
    ], Slot1Controller);
    return Slot1Controller;
}(cc.Component));
exports.default = Slot1Controller;

cc._RF.pop();