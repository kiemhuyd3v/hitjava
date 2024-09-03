
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot1/Slot1Script/Slot1.Slot1Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDFcXFNsb3QxU2NyaXB0XFxTbG90MS5TbG90MUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELHFEQUFnRDtBQUNoRCxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBRXhGLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsNkZBQWdGO0FBQ2hGLCtGQUEwRjtBQUMxRix5Q0FBOEI7QUFDOUIsbURBQTZDO0FBQzdDLDZDQUF1QztBQUN2Qyx1REFBaUQ7QUFJakQsMkRBQW9EO0FBSXBELElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztBQUN6QixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFJLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQy9GLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7QUFDWixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQW1tQ0M7UUFqbUNHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQW9CLElBQUksQ0FBQztRQUduQyxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUU5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5Qixn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RSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dFQUNRO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt5REFDQztJQUVsQztRQURDLFFBQVEsQ0FBQyxDQUFDLHdCQUFhLENBQUMsQ0FBQzt3REFDUTtJQWtEbEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7b0RBQ0k7SUFHeEI7UUFEQyxRQUFRO3lEQUNnQjtJQUd6QjtRQURDLFFBQVEsQ0FBQyxDQUFDLHdCQUFhLENBQUMsQ0FBQzswREFDVTtJQTFLbkIsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQW1tQ25DO0lBQUQsc0JBQUM7Q0FubUNELEFBbW1DQyxDQW5tQzRDLEVBQUUsQ0FBQyxTQUFTLEdBbW1DeEQ7a0JBbm1Db0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdW5kbGVDb250cm9sIGZyb20gJy4uLy4uL0xvYWRpbmcvc3JjL0J1bmRsZUNvbnRyb2wnO1xuaW1wb3J0IENvbmZpZ3MgZnJvbSBcIi4uLy4uL0xvYWRpbmcvc3JjL0NvbmZpZ3NcIjtcbmltcG9ydCBBcHAgZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9BcHAnO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vQnJvYWRjYXN0UmVjZWl2ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0RpYWxvZyc7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9Ud2Vlbic7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlscyc7XG5pbXBvcnQgSW5QYWNrZXQgZnJvbSAnLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L25ldHdvcmtzL05ldHdvcmsuSW5QYWNrZXQnO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gJy4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9uZXR3b3Jrcy9TbG90TmV0d29ya0NsaWVudCc7XG5pbXBvcnQgY21kIGZyb20gJy4vU2xvdDEuQ21kJztcbmltcG9ydCBTbG90MUl0ZW1TbG90IGZyb20gJy4vU2xvdDEuSXRlbVNsb3QnO1xuaW1wb3J0IFNsb3QxTG9iYnkgZnJvbSBcIi4vU2xvdDEuTG9iYnlcIjtcbmltcG9ydCBTbG90MVBvcHVwQm9udXMgZnJvbSAnLi9TbG90MS5Qb3B1cEJvbnVzJztcbmltcG9ydCBQb3B1cEhpc3RvcnkgZnJvbSAnLi9TbG90MS5Qb3B1cEhpc3RvcnknO1xuaW1wb3J0IFBvcHVwSmFja3BvdEhpc3RvcnkgZnJvbSAnLi9TbG90MS5Qb3B1cEphY2twb3RIaXN0b3J5JztcbmltcG9ydCBQb3B1cFNlbGVjdExpbmUgZnJvbSAnLi9TbG90MS5Qb3B1cFNlbGVjdExpbmUnO1xuaW1wb3J0IFNsb3QxVHJpYWxSZXN1bHQgZnJvbSAnLi9TbG90MS5UcmlhbFJlc3VsdHMnO1xuXG5cblxudmFyIE1BWF9DWUNDTEVfU1BJTiA9IDIwO1xudmFyIEZBU1RfQ1lDQ0xFX1NQSU4gPSAxMDtcbnZhciBFUlJPUl9DWUNDTEVfU1BJTiA9IDUwO1xudmFyIEFOSU1fSUNPTiA9IFtcIkphY2twb3RcIiwgXCJ3aWxkbW9ua2V5XCIsIFwiYm9udXNcIiwgXCJiYXRnaW9pXCIsIFwic2F0YW5nXCIsIFwicXVhZGFvXCIsIFwidm9uZ2tpbWNvXCJdO1xudmFyIFRXID0gY2MudHdlZW47XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDFDb250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5CYWNrOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuUGxheVRyeTogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blBsYXlSZWFsOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuTGluZTogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShTbG90MVBvcHVwQm9udXMpXG4gICAgcG9wdXBCb251czogU2xvdDFQb3B1cEJvbnVzID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVCb3hTZXR0aW5nOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHRvZ2dsZU11c2ljOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgdG9nZ2xlU291bmQ6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICAgIHNwcml0ZVNwaW46IGNjLlNwcml0ZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYW5pbVNwaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZlNwaW5TdGFydDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzZlNwaW5TdG9wOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbm9kZURlbW86IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVXaW5KYWNrcG90OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdHh0V2luSmFja3BvdDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIG5vZGVHYW1lUGxheTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFNsb3QxTG9iYnkpXG4gICAgbVNsb3RMb2JieTogU2xvdDFMb2JieSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGphY2twb3RMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIG1vbmV5TGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRvdGFsTGluZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0blNwaW46IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICB0b2dnbGVGYXN0OiBjYy5Ub2dnbGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQXV0bzogY2MuVG9nZ2xlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsRnJlZVNwaW5Db3VudDogY2MuTGFiZWwgPSBudWxsO1xuICAgIC8vd2luXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJpZ1dpbk5vZGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0eHRXaW5CaWdXaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBqYWNrcG90Tm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgYm9udXNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25XaWxkQ29sdW1uczogY2MuTm9kZSA9IG51bGw7XG4gICAgLy9saW5lIHdpblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGxpbmVXaW5QYXJlbnQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGNvbGx1bVBhcmVudDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvL3Nob3cgcmVzdWx0XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRvdGFsV2luTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgdG90YWxCZXRMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG5cblxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIG11c2ljTG9iYnk6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgbXVzaWNCb251czogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZENsaWNrOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kU3RhcnRTcGluOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kUmVwZWF0U3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEVuZFNwaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFNwaW5XaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRCaWdXaW46IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQm9udXM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmR0b3VjaEJvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kdG91Y2hCb251c0xvc2U6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRTbXVtYXJ5OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShbU2xvdDFJdGVtU2xvdF0pXG4gICAgYXJyUmVhbEl0ZW06IFNsb3QxSXRlbVNsb3RbXSA9IFtdO1xuXG4gICAgcG9wdXBKYWNrcG90SGlzdG9yeTogUG9wdXBKYWNrcG90SGlzdG9yeSA9IG51bGw7XG4gICAgcG9wdXBIaXN0b3J5OiBQb3B1cEhpc3RvcnkgPSBudWxsO1xuICAgIHBvcHVwR3VpZGU6IERpYWxvZyA9IG51bGw7XG4gICAgcG9wdXBTZWxlY3RMaW5lOiBQb3B1cFNlbGVjdExpbmUgPSBudWxsO1xuICAgIGJvbnVzR2FtZVZpZXc6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0QWN0aXZlSXRlbTogY2MuTm9kZVtdID0gW107ICAgICAgICAgLy9saXN0IDE1IGl0ZW0gbmhpbiB0aGF5IHRyZW4gbWFuIGhpbmhcbiAgICBwcml2YXRlIGNvbHVtbnNXaWxkID0gW107XG4gICAgcHJpdmF0ZSBUSU1FX0RFTEFZX1NIT1dfTElORTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpbGRJdGVtSWQgPSAxO1xuICAgIHB1YmxpYyBiZXRJZCA9IDA7XG4gICAgcHJpdmF0ZSBsaXN0QmV0ID0gWzEwMCwgMTAwMCwgMTAwMDBdO1xuICAgIHByaXZhdGUgbGlzdEJldFN0cmluZyA9IFtcIjEwMFwiLCBcIjFLXCIsIFwiMTBLXCJdO1xuICAgIHByaXZhdGUgYXJyTGluZVNlbGVjdGVkID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMF07XG4gICAgcHVibGljIGlzVHJpYWw6IEJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGlzU3BpbmluZzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYXV0b1NwaW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG1hcExpbmUgPSBbXG4gICAgICAgIFs1LCA2LCA3LCA4LCA5XSwvLzFcbiAgICAgICAgWzAsIDEsIDIsIDMsIDRdLC8vMlxuICAgICAgICBbMTAsIDExLCAxMiwgMTMsIDE0XSwvLzNcbiAgICAgICAgWzUsIDYsIDIsIDgsIDldLC8vNFxuICAgICAgICBbNSwgNiwgMTIsIDgsIDldLC8vNVxuICAgICAgICBbMCwgMSwgNywgMywgNF0sLy82XG4gICAgICAgIFsxMCwgMTEsIDcsIDEzLCAxNF0sLy83XG4gICAgICAgIFswLCAxMSwgMiwgMTMsIDRdLC8vOFxuICAgICAgICBbMTAsIDEsIDEyLCAzLCAxNF0sLy85XG4gICAgICAgIFs1LCAxLCAxMiwgMywgOV0sLy8xMFxuICAgICAgICBbMTAsIDYsIDIsIDgsIDE0XSwvLzExXG4gICAgICAgIFswLCA2LCAxMiwgOCwgNF0sLy8xMlxuICAgICAgICBbNSwgMTEsIDcsIDMsIDldLC8vMTNcbiAgICAgICAgWzUsIDEsIDcsIDEzLCA5XSwvLzE0XG4gICAgICAgIFsxMCwgNiwgNywgOCwgMTRdLC8vMTVcbiAgICAgICAgWzAsIDYsIDcsIDgsIDRdLC8vMTZcbiAgICAgICAgWzUsIDExLCAxMiwgMTMsIDldLC8vMTdcbiAgICAgICAgWzUsIDEsIDIsIDMsIDldLC8vMThcbiAgICAgICAgWzEwLCAxMSwgNywgMywgNF0sLy8xOVxuICAgICAgICBbMCwgMSwgNywgMTMsIDE0XS8vMjBcbiAgICBdO1xuXG5cbiAgICAvL25ldyBcblxuICAgIHByaXZhdGUgaXNGYXN0Q3VycmVudCA9IGZhbHNlO1xuICAgIG11dGlwbGVKcE5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgaXNGYXN0ID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGFyclJlZWw6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZGlzdGFuY2VSZWVsOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KFtTbG90MUl0ZW1TbG90XSlcbiAgICBhcnJVSUl0ZW1JY29uOiBTbG90MUl0ZW1TbG90W10gPSBbXTtcblxuXG5cblxuICAgIHB1YmxpYyBudW1iZXJTcGluUmVlbCA9IG51bGw7XG4gICAgcHVibGljIGlzSGF2ZVJlc3VsdFNwaW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgZGF0YVJlc3VsdCA9IG51bGw7XG4gICAgcHJpdmF0ZSBpc0ZpcnN0ID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgaXNTb3VuZCA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc011c2ljID0gdHJ1ZTtcblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIENvbmZpZ3MuTG9naW4uQ29pbiA9IDA7XG4gICAgICAgIHRoaXMuZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgICAgIHRoaXMuaXNTb3VuZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNNdXNpYyA9IHRydWU7XG4gICAgICAgIHRoaXMudG90YWxXaW5MYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm9uQnRuQmFjaygpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuekluZGV4ID0gMztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuYWRkTGlzdGVuZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBpbnBhY2tldCA9IG5ldyBJblBhY2tldChkYXRhKTtcbiAgICAgICAgICAgIC8vIC8vICBjYy5sb2coaW5wYWNrZXQuZ2V0Q21kSWQoKSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UX1NMT1RTOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1TbG90TG9iYnkub25VcGRhdGVKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9QT1Q6XG4gICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVBvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vICBjYy5sb2coXCJ1cGRhdGUgSmFja3BvdDpcIiArICh0aGlzLmJldElkID09IDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJldElkID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5qYWNrcG90TGFiZWwsIHJlcy52YWx1ZVJvb20zLCA0LjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5qYWNrcG90TGFiZWwsIHJlcy52YWx1ZVJvb20xLCA0LjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5qYWNrcG90TGFiZWwsIHJlcy52YWx1ZVJvb20yLCA0LjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5iZXRJZCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5qYWNrcG90TGFiZWwsIHJlcy52YWx1ZVJvb200LCA0LjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5VUERBVEVfUkVTVUxUOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlUmVzdWx0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXRhQm9udXNGYWtlIHJlcyA9IEpTT04ucGFyc2UoJ3tcIl9wb3NcIjo5OSxcIl9kYXRhXCI6e1wiMFwiOjEsXCIxXCI6NyxcIjJcIjoyMDksXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowLFwiOFwiOjAsXCI5XCI6MCxcIjEwXCI6MTAsXCIxMVwiOjE3MyxcIjEyXCI6NSxcIjEzXCI6MCxcIjE0XCI6MjksXCIxNVwiOjUwLFwiMTZcIjo0NCxcIjE3XCI6NTAsXCIxOFwiOjQ0LFwiMTlcIjo1NCxcIjIwXCI6NDQsXCIyMVwiOjUzLFwiMjJcIjo0NCxcIjIzXCI6NTMsXCIyNFwiOjQ0LFwiMjVcIjo1NCxcIjI2XCI6NDQsXCIyN1wiOjUyLFwiMjhcIjo0NCxcIjI5XCI6NTAsXCIzMFwiOjQ0LFwiMzFcIjo1MyxcIjMyXCI6NDQsXCIzM1wiOjUxLFwiMzRcIjo0NCxcIjM1XCI6NTMsXCIzNlwiOjQ0LFwiMzdcIjo1MSxcIjM4XCI6NDQsXCIzOVwiOjUzLFwiNDBcIjo0NCxcIjQxXCI6NDksXCI0MlwiOjQ0LFwiNDNcIjo1MyxcIjQ0XCI6MCxcIjQ1XCI6MTQsXCI0NlwiOjUxLFwiNDdcIjo0NCxcIjQ4XCI6NTQsXCI0OVwiOjQ0LFwiNTBcIjo1NyxcIjUxXCI6NDQsXCI1MlwiOjQ5LFwiNTNcIjo1MixcIjU0XCI6NDQsXCI1NVwiOjQ5LFwiNTZcIjo1NSxcIjU3XCI6NDQsXCI1OFwiOjUwLFwiNTlcIjo0OCxcIjYwXCI6MCxcIjYxXCI6MjEsXCI2MlwiOjUyLFwiNjNcIjo0NCxcIjY0XCI6NDksXCI2NVwiOjQ0LFwiNjZcIjo0OSxcIjY3XCI6NDQsXCI2OFwiOjQ5LFwiNjlcIjo0NCxcIjcwXCI6NTAsXCI3MVwiOjQ0LFwiNzJcIjo0OSxcIjczXCI6NDQsXCI3NFwiOjQ5LFwiNzVcIjo0NCxcIjc2XCI6NDksXCI3N1wiOjQ0LFwiNzhcIjo1MixcIjc5XCI6NDQsXCI4MFwiOjQ5LFwiODFcIjo0NCxcIjgyXCI6NDksXCI4M1wiOjAsXCI4NFwiOjAsXCI4NVwiOjAsXCI4NlwiOjAsXCI4N1wiOjAsXCI4OFwiOjQwLFwiODlcIjoxNTAsXCI5MFwiOjE2MCxcIjkxXCI6MCxcIjkyXCI6MCxcIjkzXCI6MCxcIjk0XCI6MCxcIjk1XCI6MSxcIjk2XCI6MTI2LFwiOTdcIjo1MCxcIjk4XCI6MTYwfSxcIl9sZW5ndGhcIjo5OSxcIl9jb250cm9sbGVySWRcIjoxLFwiX2NtZElkXCI6MjAwMSxcIl9lcnJvclwiOjAsXCJyZWZcIjoyNzMzLFwicmVzdWx0XCI6NSxcIm1hdHJpeFwiOlwiMiwyLDYsNSw1LDYsNCwyLDUsMyw1LDMsNSwxLDVcIixcImxpbmVzV2luXCI6XCIzLDYsOSwxNCwxNywyMFwiLFwiaGFpU2FvXCI6XCI0LDEsMCwxLDIsMSwwLDEsNCwxLDFcIixcInByaXplXCI6MjY2MDAwMCxcImN1cnJlbnRNb25leVwiOjI1MDQ3NzEyfScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluUmVzdWx0KHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5GUkVFX0RBSV9MWTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVHJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRnJlZURhaUx5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJpbml0IFNsb3QxIEZyZWVTcGluOlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gcmVzLmZyZWVTcGluO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5kYWlseUZyZWVTcGluICsgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkRBVEVfWDI6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVEYXRlWDIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZpcnN0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy92dWEgdmFvIGxvYmJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlR2FtZVBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkpvaW5Sb29tKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjbWQuQ29kZS5DSEFOR0VfUk9PTTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNoYW5nZVJvb206XCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmRDaGVjayhuZXcgY21kLlJlcVN1YmNyaWJlSGFsbFNsb3QoKSk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSgwKSk7XG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBDb25maWdzLkxvZ2luLkNvaW4sIDEuMCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tU2xvdExvYmJ5LmluaXQodGhpcyk7XG4gICAgICAgIC8vdGhpcy5pbml0TXV0aXBsZUpQTm9kZSgpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgaW5pdE11dGlwbGVKUE5vZGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tdXRpcGxlSnBOb2RlKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiTG9iYnlcIikubG9hZChcInByZWZhYnMvTXV0aXBsZUphY2twb3RQclwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG4gICAgICAgICAgICB9LCAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJlcnJyIGxvYWQgZ2FtZSBUSUVOTEVOOlwiLCBlcnIxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIk11dGlwbGVKYWNrcG90XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZS5zZXRJbmZvKFwiRFVBWEVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBzaG93QW5pbWF0aW9ucygpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYXJyVUlJdGVtSWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vZGVJdGVtID0gc2VsZi5hcnJVSUl0ZW1JY29uW2ldLm5vZGVCb3g7XG4gICAgICAgICAgICB2YXIgaW5kZXhDb2wgPSBpICUgNTtcbiAgICAgICAgICAgIG5vZGVJdGVtLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgbm9kZUl0ZW0ucG9zaXRpb24gPSBjYy52MygwLCBzZWxmLmRpc3RhbmNlUmVlbCwgMCk7XG4gICAgICAgICAgICBjYy50d2Vlbihub2RlSXRlbSlcbiAgICAgICAgICAgICAgICAuZGVsYXkoaW5kZXhDb2wgKiAwLjEpXG4gICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsIDApLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93R2FtZVBsYXkoKSB7XG4gICAgICAgIHRoaXMucmFuZG9tSWNvbkxpc3QoKTtcbiAgICAgICAgdGhpcy5ub2RlR2FtZVBsYXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93QW5pbWF0aW9ucygpO1xuICAgIH1cblxuICAgIGhpZGVHYW1lUGxheSgpIHtcbiAgICAgICAgdGhpcy5ub2RlR2FtZVBsYXkuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy50b3RhbFdpbkxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSm9pblJvb20ocmVzID0gbnVsbCkge1xuICAgICAgICAvLyAgY2MubG9nKFwib25Kb2luUm9vbTpcIiArIHRoaXMuYmV0SWQpO1xuICAgICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRTdHJpbmdbdGhpcy5iZXRJZF07XG4gICAgICAgIHZhciBiZXRJZFRtcCA9IHRoaXMuYmV0SWQ7XG4gICAgICAgIGlmIChiZXRJZFRtcCA9PSAtMSkgYmV0SWRUbXAgPSAyO1xuICAgICAgICBsZXQgdG90YWxiZXQgPSAodGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoICogdGhpcy5saXN0QmV0W2JldElkVG1wXSk7XG4gICAgICAgIHRoaXMudG90YWxCZXRMYWJlbC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJNaW4odG90YWxiZXQpO1xuICAgICAgICB0aGlzLm1TbG90TG9iYnkuaGlkZSgpO1xuICAgICAgICB0aGlzLm5vZGVEZW1vLmFjdGl2ZSA9IHRoaXMuaXNUcmlhbCA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93R2FtZVBsYXkoKTtcbiAgICAgICAgdGhpcy5zZXRCdXR0b25FbmFibGUodHJ1ZSk7XG5cblxuXG4gICAgfVxuXG4gICAgcmFuZG9tSWNvbkxpc3QoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmFyclVJSXRlbUljb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGk7XG4gICAgICAgICAgICB2YXIgaXRlbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uaW5pdChpdGVtSWQsIGluZGV4LCBzZWxmKTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5jaGFuZ2VTcGluZUljb24oaXRlbUlkKTtcbiAgICAgICAgICAgIC8vIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5zcHJpdGVJY29uLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBzZWxmLmFyclVJSXRlbUljb25baV0uc3BpbmVJY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5zcGluZUljb24uYW5pbWF0aW9uID0gQU5JTV9JQ09OW2l0ZW1JZF07XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uc3BpbmVJY29uLmxvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmFuZG9tIGJldHdlZW4sIG1pbiwgbWF4IGluY2x1ZGVkXG4gICAgICovXG4gICAgcmFuZG9tQmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG4gICAgfVxuICAgIG9uQ2xpY2tDaGFuZ2VSb29tKCkge1xuICAgICAgICBpZiAodGhpcy5pc1RyaWFsKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RCYWNrKCk7XG4gICAgfVxuXG4gICAgc3BpbkNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2hpZGUgZWZmZWN0XG5cbiAgICAgICAgLy8gdGhpcy5zZXRCdXR0b25BdXRvKGZhbHNlKTtcbiAgICAgICAgLy8gdGhpcy5zZXRCdXR0b25GbGFzaChmYWxzZSk7XG4gICAgICAgIC8vICBjYy5sb2coXCJzcGluQ2xpY2s6XCIgKyB0aGlzLmlzVHJpYWwpO1xuICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kYWlseUZyZWVTcGluID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGFpbHlGcmVlU3Bpbi0tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5kYWlseUZyZWVTcGluICsgXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luIDwgdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdICogdGhpcy5hcnJMaW5lU2VsZWN0ZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5hbGVydERpYWxvZy5zaG93TXNnKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZyhcInR4dF9ub3RfZW5vdWdoXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGlkZVdpbkVmZmVjdCgpO1xuICAgICAgICAgICAgdGhpcy5oaWRlTGluZVdpbih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uRW5hYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMudG90YWxXaW5MYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgLy8gIGNjLmxvZyhcInRvdGFsIGxpbmU9PVwiLCB0aGlzLmFyckxpbmVTZWxlY3RlZCArIFwiPT1saXN0IGJldC0tXCIgKyB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZF0pO1xuICAgICAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5zZW5kKG5ldyBjbWQuU2VuZFBsYXkodGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCB0aGlzLmFyckxpbmVTZWxlY3RlZC50b1N0cmluZygpKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVXaW5FZmZlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUxpbmVXaW4odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkVuYWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsV2luTGFiZWwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBySWR4ID0gVXRpbHMucmFuZG9tUmFuZ2VJbnQoMCwgU2xvdDFUcmlhbFJlc3VsdC5yZXN1bHRzLmxlbmd0aCk7XG4gICAgICAgICAgICAvLyAgY2MubG9nKFwicmFuZG9tIGluZGV4PVwiICsgcklkeClcbiAgICAgICAgICAgIHRoaXMuc3BpblJlc3VsdChTbG90MVRyaWFsUmVzdWx0LnJlc3VsdHNbcklkeF0pO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHByaXZhdGUgYXVkaW9JZFJlcGVhdFNwaW4gPSAwO1xuICAgIHNwaW5SZXN1bHQocmVzOiBjbWQuUmVjZWl2ZVJlc3VsdCB8IGFueSkge1xuICAgICAgICB0aGlzLmlzU3BpbmluZyA9IHRydWU7XG4gICAgICAgIC8vICBjYy5sb2coXCJzcGluUmVzdWx0OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgIC8vIHJlcyA9IEpTT04ucGFyc2UoJ3tcIl9wb3NcIjo4MCxcIl9kYXRhXCI6e1wiMFwiOjEsXCIxXCI6NyxcIjJcIjoyMDksXCIzXCI6MCxcIjRcIjowLFwiNVwiOjAsXCI2XCI6MCxcIjdcIjowLFwiOFwiOjAsXCI5XCI6MCxcIjEwXCI6MTgsXCIxMVwiOjExNyxcIjEyXCI6MSxcIjEzXCI6MCxcIjE0XCI6MjksXCIxNVwiOjUyLFwiMTZcIjo0NCxcIjE3XCI6NTIsXCIxOFwiOjQ0LFwiMTlcIjo1NCxcIjIwXCI6NDQsXCIyMVwiOjU0LFwiMjJcIjo0NCxcIjIzXCI6NTIsXCIyNFwiOjQ0LFwiMjVcIjo1MSxcIjI2XCI6NDQsXCIyN1wiOjU0LFwiMjhcIjo0NCxcIjI5XCI6NTMsXCIzMFwiOjQ0LFwiMzFcIjo1MixcIjMyXCI6NDQsXCIzM1wiOjUzLFwiMzRcIjo0NCxcIjM1XCI6NTEsXCIzNlwiOjQ0LFwiMzdcIjo1MSxcIjM4XCI6NDQsXCIzOVwiOjUyLFwiNDBcIjo0NCxcIjQxXCI6NTEsXCI0MlwiOjQ0LFwiNDNcIjo1NCxcIjQ0XCI6MCxcIjQ1XCI6MTYsXCI0NlwiOjUwLFwiNDdcIjo0NCxcIjQ4XCI6NTEsXCI0OVwiOjQ0LFwiNTBcIjo1NCxcIjUxXCI6NDQsXCI1MlwiOjU1LFwiNTNcIjo0NCxcIjU0XCI6NDksXCI1NVwiOjUwLFwiNTZcIjo0NCxcIjU3XCI6NDksXCI1OFwiOjU0LFwiNTlcIjo0NCxcIjYwXCI6NDksXCI2MVwiOjU1LFwiNjJcIjowLFwiNjNcIjowLFwiNjRcIjowLFwiNjVcIjowLFwiNjZcIjowLFwiNjdcIjowLFwiNjhcIjowLFwiNjlcIjozLFwiNzBcIjoxMyxcIjcxXCI6NjQsXCI3MlwiOjAsXCI3M1wiOjAsXCI3NFwiOjAsXCI3NVwiOjAsXCI3NlwiOjIsXCI3N1wiOjQzLFwiNzhcIjoyMzMsXCI3OVwiOjIwNH0sXCJfbGVuZ3RoXCI6ODAsXCJfY29udHJvbGxlcklkXCI6MSxcIl9jbWRJZFwiOjIwMDEsXCJfZXJyb3JcIjowLFwicmVmXCI6NDcyNSxcInJlc3VsdFwiOjEsXCJtYXRyaXhcIjpcIjQsNCw2LDYsNCwzLDYsNSw0LDUsMywzLDQsMyw2XCIsXCJsaW5lc1dpblwiOlwiMiwzLDYsNywxMiwxNiwxN1wiLFwiaGFpU2FvXCI6XCJcIixcInByaXplXCI6MjAwMDAwLFwiY3VycmVudE1vbmV5XCI6MzY0MzIzMzJ9Jyk7XG4gICAgICAgIGxldCBzdWNjZXNzUmVzdWx0ID0gWzAsIDEsIDIsIDMsIDQsIDUsIDZdO1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdDtcbiAgICAgICAgaWYgKHN1Y2Nlc3NSZXN1bHQuaW5kZXhPZihyZXN1bHQpID09PSAtMSkge1xuICAgICAgICAgICAgLy9mYWlsXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSAxMDIpIHtcbiAgICAgICAgICAgICAgICAvL2tob25nIGR1IHRpZW5cbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2UuYWxlcnREaWFsb2cuc2hvd01zZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoXCJ0eHRfbm90X2Vub3VnaFwiKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gIGNjLmxvZyhcImNvIGxvaSB4YXkgcmFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldCBpY29uXG4gICAgICAgIGxldCBtYXRyaXggPSByZXMubWF0cml4LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgdGhpcy5udW1iZXJTcGluUmVlbCA9IG5ldyBBcnJheSh0aGlzLmFyclJlZWwubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5kYXRhUmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmlzSGF2ZVJlc3VsdFNwaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbHVtbnNXaWxkLmxlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFN0YXJ0U3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIHRoaXMuYXVkaW9JZFJlcGVhdFNwaW4gPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRSZXBlYXRTcGluLCB0cnVlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXJyUmVlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5iZWdpblNwaW5SZWVsKGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3BpbkZpbmlzaChoYXNEZWxheTogYm9vbGVhbikge1xuICAgICAgICAvLyAgY2MubG9nKFwic3BpbiBmaW5pc2hcIik7XG4gICAgICAgIHRoaXMuY2hhbmdlQWxsSXRlbVRvRGFyayhmYWxzZSk7XG4gICAgICAgIHRoaXMuaXNTcGluaW5nID0gZmFsc2U7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZShoYXNEZWxheSA/IDEgOiAwKSxcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dG9TcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNwaW5DbGljaygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRCdXR0b25FbmFibGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnNldEJ1dHRvbkZsYXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93Q29pbnMocHJpemUpIHtcbiAgICAgICAgdmFyIG51bWJlciA9IHByaXplIC8gMjAwMDA7XG4gICAgICAgIGlmIChudW1iZXIgPD0gMTApIG51bWJlciA9IDEwO1xuICAgICAgICBlbHNlIGlmIChudW1iZXIgPj0gMzApIG51bWJlciA9IDMwO1xuICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0NvaW5zKG51bWJlciwgdGhpcy50b3RhbFdpbkxhYmVsLm5vZGUsIHRoaXMubm9kZUNvaW4pO1xuICAgIH1cblxuICAgIHNob3dXaW5FZmZlY3QocHJpemU6IG51bWJlciwgY3VycmVudE1vbmV5OiBudW1iZXIsIHJlc3VsdDogbnVtYmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5idG5CYWNrLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChwcml6ZSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMubGluZVdpblBhcmVudC56SW5kZXggPSAxO1xuICAgICAgICAgICAgdGhpcy5jb2xsdW1QYXJlbnQuekluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQWxsSXRlbVRvRGFyayh0cnVlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gNSkge1xuICAgICAgICAgICAgICAgIC8vYm9udXNcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc011c2ljKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLm11c2ljQm9udXMsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJvbnVzTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBib251c1NwaW5lID0gdGhpcy5ib251c05vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgYm9udXNTcGluZS5hbmltYXRpb24gPSBcImJvdW51cyBmeFwiO1xuICAgICAgICAgICAgICAgIGJvbnVzU3BpbmUubG9vcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMyksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib251c05vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RTaG93Qm9udXModGhpcy5pc1RyaWFsID8gMTAwIDogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCB0aGlzLmRhdGFSZXN1bHQuaGFpU2FvLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50b3RhbFdpbkxhYmVsLCBwcml6ZSwgMS4wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzVHJpYWwpIFR3ZWVuLm51bWJlclRvKHRoaXMubW9uZXlMYWJlbCwgY3VycmVudE1vbmV5LCAxLjApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zcGluRmluaXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0ID09IDIgfHwgcmVzdWx0ID09IDYpIHtcbiAgICAgICAgICAgICAgICAvL3RoYW5nIGxvbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJpZ1dpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJpZ1dpbk5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYmlnd2luU3BpbmUgPSB0aGlzLmJpZ1dpbk5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgYmlnd2luU3BpbmUuYW5pbWF0aW9uID0gXCJ0aGFuZ2xvblwiO1xuICAgICAgICAgICAgICAgIGJpZ3dpblNwaW5lLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudHh0V2luQmlnV2luLCBwcml6ZSwgMS4wKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpZ1dpbk5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zcGluRmluaXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsV2luTGFiZWwsIHByaXplLCAxLjApO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSBUd2Vlbi5udW1iZXJUbyh0aGlzLm1vbmV5TGFiZWwsIGN1cnJlbnRNb25leSwgMS4wKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT0gMyB8fCByZXN1bHQgPT0gNCkge1xuICAgICAgICAgICAgICAgIC8vbm8gaHVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhdWRpb0lkSmFja3BvdCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmphY2twb3ROb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGphY2twb3RTcGluZSA9IHRoaXMuamFja3BvdE5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgamFja3BvdFNwaW5lLmFuaW1hdGlvbiA9IFwiYW5pbWF0aW9uNlwiO1xuICAgICAgICAgICAgICAgIGphY2twb3RTcGluZS5sb29wID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNjLlR3ZWVuLnN0b3BBbGxCeVRhcmdldCh0aGlzLm5vZGVXaW5KYWNrcG90KTtcbiAgICAgICAgICAgICAgICB0aGlzLnR4dFdpbkphY2twb3Quc3RyaW5nID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy50eHRXaW5KYWNrcG90LCBwcml6ZSwgMy4wKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGVXaW5KYWNrcG90LnBvc2l0aW9uID0gY2MudjMoMCwgLTM2MCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlV2luSmFja3BvdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZVdpbkphY2twb3QpXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MygwLCAwLCAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMylcbiAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYzKDAsIDAsIDApIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuamFja3BvdE5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zcGluRmluaXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGF1ZGlvSWRKYWNrcG90KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvaW5zKHByaXplKTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLnRvdGFsV2luTGFiZWwsIHByaXplLCAxLjApO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1RyaWFsKSBUd2Vlbi5udW1iZXJUbyh0aGlzLm1vbmV5TGFiZWwsIGN1cnJlbnRNb25leSwgMS4wKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q29pbnMocHJpemUpO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDEuMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDEuMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbiAhPT0gXCJcIikgc2VsZi5zaG93TGluZVdpbihzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4uc3BsaXQoXCIsXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dDb2lucygxMCx0aGlzLnRvdGFsV2luTGFiZWwubm9kZSx0aGlzLm5vZGVDb2luKTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMudG90YWxXaW5MYWJlbCwgcHJpemUsIDEuMCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUcmlhbCkgVHdlZW4ubnVtYmVyVG8odGhpcy5tb25leUxhYmVsLCBjdXJyZW50TW9uZXksIDEuMCk7XG4gICAgICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRhdGFSZXN1bHQubGluZXNXaW4gIT09IFwiXCIpIHNlbGYuc2hvd0xpbmVXaW4oc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luLnNwbGl0KFwiLFwiKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzZWxmLnNwaW5GaW5pc2goZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0LmxpbmVzV2luICE9PSBcIlwiKSBzZWxmLnNob3dMaW5lV2luKHNlbGYuZGF0YVJlc3VsdC5saW5lc1dpbi5zcGxpdChcIixcIikpO1xuICAgICAgICAgICAgICAgIGVsc2Ugc2VsZi5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYmVnaW5TcGluUmVlbChpbmRleFJlZWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmlzRmFzdEN1cnJlbnQgPSBzZWxmLnRvZ2dsZUZhc3QuaXNDaGVja2VkO1xuICAgICAgICBzZWxmLm51bWJlclNwaW5SZWVsW2luZGV4UmVlbF0gPSAwO1xuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0pO1xuICAgICAgICBsZXQgdGltZURlbGF5ID0gdGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCA/IDAuMSA6IDAuMjtcbiAgICAgICAgY2MudHdlZW4oc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0pXG4gICAgICAgICAgICAuZGVsYXkoaW5kZXhSZWVsICogdGltZURlbGF5KVxuICAgICAgICAgICAgLnRvKDAuMSwgeyBwb3NpdGlvbjogY2MudjMoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24ueCwgNzAsIDApIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cbiAgICBsb29wU3BpblJlZWwoaW5kZXhSZWVsKSB7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy50d2VlbihzZWxmLmFyclJlZWxbaW5kZXhSZWVsXSlcbiAgICAgICAgICAgIC50bygwLjA2LCB7IHBvc2l0aW9uOiBjYy52MyhzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCAtc2VsZi5kaXN0YW5jZVJlZWwsIDApIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzTG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0xvb3BTcGluUmVlbChpbmRleFJlZWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm51bWJlclNwaW5SZWVsW2luZGV4UmVlbF0gKz0gMTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBpbmRleFJlZWwgKyAoaSAqIDUpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXhSb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gNSk7XG4gICAgICAgICAgICB2YXIgaXRlbUlkVG1wID0gMDtcbiAgICAgICAgICAgIGlmIChpbmRleFJvdyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbUlkVG1wID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtSWRUbXAgPSBzZWxmLmFyclVJSXRlbUljb25baW5kZXggLSA1XS5pdGVtSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLmNoYW5nZVNwcml0ZUJsdXJCeUl0ZW1JZChpdGVtSWRUbXApO1xuICAgICAgICAgICAgLy8gaWYgKHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uc3ByaXRlSWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2luZGV4XS5zcGluZUljb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICBzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbiA9IGNjLnYzKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIDAsIDApO1xuICAgICAgICBpZiAoc2VsZi5pc0hhdmVSZXN1bHRTcGluKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5pc0Zhc3RDdXJyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA+PSBNQVhfQ1lDQ0xFX1NQSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID49IEZBU1RfQ1lDQ0xFX1NQSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID49IEVSUk9SX0NZQ0NMRV9TUElOKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZi5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZW5kU3BpblJlZWwoaW5kZXhSZWVsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYuZGF0YVJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBpbmRleFJlZWwgKyAoaSAqIDUpO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICAgICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baW5kZXhdLmNoYW5nZVNwaW5lSWNvbihpdGVtSWQpO1xuICAgICAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uc3BpbmVJY29uLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtYXRyaXggPSBzZWxmLmRhdGFSZXN1bHQubWF0cml4LnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciByb2xsID0gdGhpcy5hcnJSZWVsW2luZGV4UmVlbF07XG4gICAgICAgIHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uID0gY2MudjMoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24ueCwgc2VsZi5kaXN0YW5jZVJlZWwsIDApO1xuICAgICAgICBsZXQgYXJyUmVhbCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4UmVlbCArIChpICogNSk7XG4gICAgICAgICAgICB2YXIgaWQgPSBtYXRyaXhbaW5kZXggLSA1XTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uY2hhbmdlU3BpbmVJY29uKGlkKTtcbiAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0uc3BpbmVJY29uLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgYXJyUmVhbC51bnNoaWZ0KHNlbGYuYXJyVUlJdGVtSWNvbltpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0aW1lU3RvcCA9IHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQgPyAwLjIgOiAwLjM7XG4gICAgICAgIGNjLnR3ZWVuKHNlbGYuYXJyUmVlbFtpbmRleFJlZWxdKVxuICAgICAgICAgICAgLnRvKHRpbWVTdG9wLCB7IHBvc2l0aW9uOiBjYy52MyhzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCAwLCAwKSB9LCB7IGVhc2luZzogY2MuZWFzaW5nLmJhY2tPdXQgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5pc1NvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoc2VsZi5zb3VuZEVuZFNwaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4UmVlbCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0lkUmVwZWF0U3Bpbik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbUlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uY2hhbmdlU3BpbmVJY29uKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uc3BpbmVJY29uLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAyMDsgaSA8IDI1OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXJyVUlJdGVtSWNvbltpXS5jaGFuZ2VTcGluZUljb24oaXRlbUlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hcnJVSUl0ZW1JY29uW2ldLnNwaW5lSWNvbi5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSBzZWxmLmRhdGFSZXN1bHQuY3VycmVudE1vbmV5O1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dXaW5FZmZlY3Qoc2VsZi5kYXRhUmVzdWx0LnByaXplLCBzZWxmLmRhdGFSZXN1bHQuY3VycmVudE1vbmV5LCBzZWxmLmRhdGFSZXN1bHQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgb25CdG5Tb3VuZFRvdWNoQm9udXMoaXNXaW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgaWYgKGlzV2luKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kdG91Y2hCb251cywgZmFsc2UsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kdG91Y2hCb251c0xvc2UsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuU291bmRTdW1hcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNtdW1hcnksIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRTcHJpdGVGcmFtZUljb24oaW5kZXhJY29uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICB9XG5cblxuICAgIGhpZGVXaW5FZmZlY3QoKSB7XG4gICAgICAgIHRoaXMuYmlnV2luTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5qYWNrcG90Tm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkJ0blRvZ2dsZU11c2ljKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNNdXNpYyA9ICF0aGlzLmlzTXVzaWM7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHRoaXMuaXNNdXNpYyA/IDAuNSA6IDApO1xuICAgIH1cblxuICAgIG9uQnRuVG9nZ2xlU291bmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NvdW5kID0gIXRoaXMuaXNTb3VuZDtcbiAgICB9XG5cbiAgICBvbkJ0bkhpc3RvcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbkJ0bkhpZGVTZXR0aW5nKCk7XG4gICAgfVxuXG4gICAgb25CdG5IaXN0b3J5SmFja3BvdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uQnRuSGlkZVNldHRpbmcoKTtcbiAgICB9XG5cbiAgICBvbkJ0bkhpZGVTZXR0aW5nKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIFR3ZWVuLmhpZGVQb3B1cCh0aGlzLm5vZGVCb3hTZXR0aW5nLCB0aGlzLm5vZGVCb3hTZXR0aW5nLnBhcmVudCwgZmFsc2UpO1xuICAgIH1cblxuICAgIG9uQnRuU291bmRDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQnRuU2V0dGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlQm94U2V0dGluZy5hY3RpdmUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vICBjYy5sb2coXCJjbG1tbVwiKTtcbiAgICAgICAgICAgIHRoaXMubm9kZUJveFNldHRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm9kZUJveFNldHRpbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgIH1cbiAgICBzaG93TGluZVdpbihsaW5lczogQXJyYXk8bnVtYmVyPikge1xuICAgICAgICBpZiAobGluZXMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IHRoaXMubGluZVdpblBhcmVudC5jaGlsZHJlbltsaW5lIC0gMV07XG4gICAgICAgICAgICBsaW5lTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAvL2hpZGUgYWxsIGxpbmVcbiAgICAgICAgbGV0IGFjSGlkZUFsbExpbmUgPSBjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmVXaW5QYXJlbnQuekluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGx1bVBhcmVudC56SW5kZXggPSAxO1xuICAgICAgICAgICAgICAgIHRoYXQuaGlkZUxpbmVXaW4oZmFsc2UpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGFjU2hvd09uZUJ5T25lID0gY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgLy9hY3RpdmUgbGluZSBvbmUgYnkgb25lXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgbGluZU5vZGUgPSB0aGlzLmxpbmVXaW5QYXJlbnQuY2hpbGRyZW5bbGluZSAtIDFdO1xuICAgICAgICAgICAgICAgIFRXKGxpbmVOb2RlKVxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoaSAqIHRoaXMuVElNRV9ERUxBWV9TSE9XX0xJTkUpXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJySXRlbSA9IHRoaXMuZ2V0SXRlbVdpbkluTGluZShsaW5lIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJySWRPZkl0ZW0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZFdpbiA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJySXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJySWRPZkl0ZW0ucHVzaChpdGVtLml0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkV2luID0gdGhpcy5nZXRJdGVtSWRXaW5JbkxpbmUoYXJySWRPZkl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLml0ZW1JZCA9PSBpZFdpbiB8fCAoaXRlbS5pdGVtSWQgPT0gMSAmJiBpZFdpbiAhPSAwICYmIGlkV2luICE9IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tTaG93U3ByaXRlT3JTcGluZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSh0aGlzLlRJTUVfREVMQVlfU0hPV19MSU5FKVxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGxpbmVzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zcGluRmluaXNoKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgbGV0IHRpbWVEZWxheSA9IHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQgPyAwIDogMS4wO1xuICAgICAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY0hpZGVBbGxMaW5lLCBjYy5kZWxheVRpbWUodGltZURlbGF5KSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BpbkZpbmlzaChmYWxzZSk7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gYWNIaWRlQWxsTGluZS5nZXREdXJhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY0hpZGVBbGxMaW5lLCBjYy5kZWxheVRpbWUoZHVyYXRpb24pLCBhY1Nob3dPbmVCeU9uZSkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBoaWRlTGluZVdpbihzdG9wQWN0aW9uOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChzdG9wQWN0aW9uKSB0aGlzLmxpbmVXaW5QYXJlbnQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5saW5lV2luUGFyZW50LmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuXG5cbiAgICB9XG5cbiAgICBzZXRCdXR0b25FbmFibGUoYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYnRuQmFjay5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYnRuTGluZS5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYnRuUGxheVRyeS5pbnRlcmFjdGFibGUgPSBhY3RpdmU7XG4gICAgICAgIHRoaXMuYnRuUGxheVJlYWwuaW50ZXJhY3RhYmxlID0gYWN0aXZlO1xuICAgICAgICBpZiAoYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc3ByaXRlU3Bpbi5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZTcGluU3RhcnQ7XG4gICAgICAgICAgICB0aGlzLnNwcml0ZVNwaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYW5pbVNwaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU3Bpbi5zcHJpdGVGcmFtZSA9IHRoaXMuc2ZTcGluU3RvcDtcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlU3Bpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFuaW1TcGluLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldEJ1dHRvbkZsYXNoKGFjdGl2ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnRvZ2dsZUZhc3QuaW50ZXJhY3RhYmxlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLnRvZ2dsZUZhc3Qubm9kZS5jaGlsZHJlblswXS5jb2xvciA9IGFjdGl2ZSA/IGNjLkNvbG9yLldISVRFIDogY2MuQ29sb3IuR1JBWTtcbiAgICB9XG5cbiAgICAvLyNyZWdpb24gQ0hBTkdFIEJFVFxuICAgIGNoYW5nZUJldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5ub2RlLmFjdGl2ZSA9ICF0aGlzLm1TbG90TG9iYnkubm9kZS5hY3RpdmU7XG4gICAgfVxuXG4gICAgY2hvb3NlQmV0KGV2ZW50LCBiZXQpIHtcblxuICAgICAgICBsZXQgb2xkSWR4ID0gdGhpcy5iZXRJZDtcbiAgICAgICAgdGhpcy5iZXRJZCA9IHBhcnNlSW50KGJldCk7XG4gICAgICAgIHRoaXMuZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyaWFsID0gYmV0ID09IC0xID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLmJldElkID0gYmV0ID09IC0xID8gMiA6IGJldDtcbiAgICAgICAgaWYgKHRoaXMuYmV0SWQgPj0gdGhpcy5saXN0QmV0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5iZXRJZCA9IDA7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhbmdlUm9vbShvbGRJZHgsIHRoaXMuYmV0SWQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGFuZ2VSb29tKG9sZElkeCwgdGhpcy5iZXRJZCkpO1xuICAgICAgICAgICAgdGhpcy5vbkpvaW5Sb29tKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlU3BlZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Zhc3RDdXJyZW50ID0gdGhpcy50b2dnbGVGYXN0LmlzQ2hlY2tlZDtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlRmFzdC5pc0NoZWNrZWQgJiYgIXRoaXMuaXNTcGluaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QXV0b1NwaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRvU3BpbiA9ICF0aGlzLmF1dG9TcGluO1xuICAgICAgICBpZiAoIXRoaXMuaXNTcGluaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNwaW5DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBhY3RCYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRVblN1YmNyaWJlKHRoaXMuYmV0SWQpKTtcblxuICAgICAgICB0aGlzLm1TbG90TG9iYnkuc2hvdygpO1xuICAgICAgICB0aGlzLmhpZGVHYW1lUGxheSgpO1xuICAgIH1cbiAgICBhY3RIaXN0b3J5SmFja3BvdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1RyaWFsKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeSA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiU2xvdDFcIiwgXCJkdWF4ZS9wcmVmYWJzL1BvcHVwSmFja3BvdEhpc3RvcnlcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiU2xvdDEuUG9wdXBKYWNrcG90SGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3Rvcnkubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWN0SGlzdG9yeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1RyaWFsKSB7XG4gICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXBIaXN0b3J5ID09IG51bGwpIHtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoXCJTbG90MVwiLCBcImR1YXhlL3ByZWZhYnMvUG9wdXBIaXN0b3J5XCIsIChmaW5pc2gsIHRvdGFsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQXBwLmluc3RhbmNlLnNob3dFcnJMb2FkaW5nKEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2xvYWRpbmcxJykgKyBwYXJzZUludCgoZmluaXNoIC8gdG90YWwpICogMTAwKSArIFwiJVwiKTtcbiAgICAgICAgICAgIH0sIHByZWZhYiA9PiB7XG4gICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3RvcnkgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIlNsb3QxLlBvcHVwSGlzdG9yeVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwSmFja3BvdEhpc3Rvcnkubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBKYWNrcG90SGlzdG9yeS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBIaXN0b3J5LnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RHdWlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTb3VuZCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3B1cEd1aWRlID09IG51bGwpIHtcbiAgICAgICAgICAgIEJ1bmRsZUNvbnRyb2wubG9hZFByZWZhYkdhbWUoXCJTbG90MVwiLCBcImR1YXhlL3ByZWZhYnMvUG9wdXBHdWlkZVwiLCAoZmluaXNoLCB0b3RhbCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9sb2FkaW5nMScpICsgcGFyc2VJbnQoKGZpbmlzaCAvIHRvdGFsKSAqIDEwMCkgKyBcIiVcIik7XG4gICAgICAgICAgICB9LCBwcmVmYWIgPT4ge1xuICAgICAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJTbG90MS5Qb3B1cEd1aWRlXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBHdWlkZS5ub2RlLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEd1aWRlLnNob3coKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3RTZWxlY3RMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NvdW5kKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzVHJpYWwpIHtcbiAgICAgICAgICAgIEFwcC5pbnN0YW5jZS5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb3B1cFNlbGVjdExpbmUgPT0gbnVsbCkge1xuICAgICAgICAgICAgQnVuZGxlQ29udHJvbC5sb2FkUHJlZmFiR2FtZShcIlNsb3QxXCIsIFwiZHVheGUvcHJlZmFicy9Qb3B1cFNlbGVjdExpbmVcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKS5nZXRDb21wb25lbnQoXCJTbG90MS5Qb3B1cFNlbGVjdExpbmVcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBTZWxlY3RMaW5lLm9uU2VsZWN0ZWRDaGFuZ2VkID0gKGxpbmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyTGluZVNlbGVjdGVkID0gbGluZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxMaW5lTGFiZWwuc3RyaW5nID0gbGluZXMubGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWxCZXRMYWJlbC5zdHJpbmcgPSBVdGlscy5mb3JtYXROdW1iZXJNaW4obGluZXMubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5hY3RTaG93Qm9udXModGhpcy5pc1RyaWFsID8gMTAwIDogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWRdLCB0aGlzLmRhdGFSZXN1bHQuaGFpU2FvLCB0aGlzLCAoKSA9PiB7XG4gICAgYWN0U2hvd0JvbnVzKGlzVHJpYWwsIGRhdGFIYWlTYW8sIGNiKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU291bmQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJvbnVzLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9wdXBCb251cyA9PSBudWxsKSB7XG4gICAgICAgICAgICBCdW5kbGVDb250cm9sLmxvYWRQcmVmYWJHYW1lKFwiU2xvdDFcIiwgXCJkdWF4ZS9wcmVmYWJzL1BvcHVwQm9udXNcIiwgKGZpbmlzaCwgdG90YWwpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBcHAuaW5zdGFuY2Uuc2hvd0VyckxvYWRpbmcoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfbG9hZGluZzEnKSArIHBhcnNlSW50KChmaW5pc2ggLyB0b3RhbCkgKiAxMDApICsgXCIlXCIpO1xuICAgICAgICAgICAgfSwgcHJlZmFiID0+IHtcbiAgICAgICAgICAgICAgICBBcHAuaW5zdGFuY2Uuc2hvd0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb251cyA9IGNjLmluc3RhbnRpYXRlKHByZWZhYikuZ2V0Q29tcG9uZW50KFwiU2xvdDEuUG9wdXBCb251c1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb251cy5zaG93Qm9udXMoaXNUcmlhbCwgZGF0YUhhaVNhbywgdGhpcywgY2IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQm9udXMuc2hvd0JvbnVzKGlzVHJpYWwsIGRhdGFIYWlTYW8sIHRoaXMsIGNiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VBbGxJdGVtVG9EYXJrKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuYXJyVUlJdGVtSWNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgc3ByaXRlID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBsZXQgc3BpbmUgPSBpdGVtLmdldENvbXBvbmVudEluQ2hpbGRyZW4oc3AuU2tlbGV0b24pO1xuXG4gICAgICAgICAgICBzcHJpdGUubm9kZS5jb2xvciA9IHN0YXRlID8gY2MuQ29sb3IuR1JBWSA6IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNwaW5lLm5vZGUuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIHNwaW5lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBzcGluZS5ub2RlLnNjYWxlID0gMC42NTtcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLnNjYWxlID0gMC44O1xuICAgICAgICB9KVxuICAgIH1cbiAgICBnZXRJdGVtV2luSW5MaW5lKGxpbmVJZCkge1xuICAgICAgICBsZXQgbGluZUFyciA9IHRoaXMubWFwTGluZVtsaW5lSWRdO1xuICAgICAgICBsZXQgYXJySXRlbSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyckl0ZW0ucHVzaCh0aGlzLmFyclJlYWxJdGVtW2xpbmVBcnJbaV1dKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJySXRlbTtcbiAgICB9XG4gICAgZ2V0SXRlbUlkV2luSW5MaW5lKGFycklkOiBBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBpZFdpbiA9IC0xO1xuICAgICAgICBhcnJJZC5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNpemUgPSBhcnJJZC5maWx0ZXIoeCA9PiB4ID09IGlkICYmIHggIT0gMSkubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHNpemUgPj0gY291bnQpIHtcbiAgICAgICAgICAgICAgICBjb3VudCA9IHNpemU7XG4gICAgICAgICAgICAgICAgaWRXaW4gPSBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGlkV2luO1xuICAgIH1cblxufVxuIl19