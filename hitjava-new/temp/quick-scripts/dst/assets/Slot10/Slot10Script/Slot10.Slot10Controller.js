
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Slot10/Slot10Script/Slot10.Slot10Controller.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e126eHphY9EqbzZPztrrrv5', 'Slot10.Slot10Controller');
// Slot10/Slot10Script/Slot10.Slot10Controller.ts

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
var Slot10_Cmd_1 = require("./Slot10.Cmd");
var Configs_1 = require("../../Loading/src/Configs");
var Slot10_PopupSelectLine_1 = require("./Slot10.PopupSelectLine");
var Slot10_PopupBonus_1 = require("./Slot10.PopupBonus");
var Slot10_TrialResults_1 = require("./Slot10.TrialResults");
var Slot10_Lobby_1 = require("./Slot10.Lobby");
var Slot10_Item_1 = require("./Slot10.Item");
var App_1 = require("../../Lobby/LobbyScript/Script/common/App");
var BroadcastReceiver_1 = require("../../Lobby/LobbyScript/Script/common/BroadcastReceiver");
var Tween_1 = require("../../Lobby/LobbyScript/Script/common/Tween");
var Utils_1 = require("../../Lobby/LobbyScript/Script/common/Utils");
var Network_InPacket_1 = require("../../Lobby/LobbyScript/Script/networks/Network.InPacket");
var SlotNetworkClient_1 = require("../../Lobby/LobbyScript/Script/networks/SlotNetworkClient");
var Slot10_Item_2 = require("./Slot10.Item");
var TYPE_WIN;
(function (TYPE_WIN) {
    TYPE_WIN[TYPE_WIN["MISS"] = 0] = "MISS";
    TYPE_WIN[TYPE_WIN["WIN"] = 1] = "WIN";
    TYPE_WIN[TYPE_WIN["BIGWIN"] = 2] = "BIGWIN";
    TYPE_WIN[TYPE_WIN["JACKPOT"] = 3] = "JACKPOT";
    TYPE_WIN[TYPE_WIN["SUPERWIN"] = 4] = "SUPERWIN";
    TYPE_WIN[TYPE_WIN["BONUS"] = 5] = "BONUS";
})(TYPE_WIN || (TYPE_WIN = {}));
var MAX_CYCCLE_SPIN = 20;
var FAST_CYCCLE_SPIN = 10;
var ERROR_CYCCLE_SPIN = 50;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Slot10Controller = /** @class */ (function (_super) {
    __extends(Slot10Controller, _super);
    function Slot10Controller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mSlotLobby = null;
        _this.nodeCoin = null;
        _this.mHeightItem = 180;
        _this.mWidthItem = 180;
        _this.reels = null; // reel
        // @property(cc.Node)
        // itemTemplate: cc.Node = null;
        _this.linesWin = null;
        _this.iconWildColumns = null; // mang cac item expand wild
        _this.lblJackpot = null;
        _this.lblBet = null;
        _this.lblLine = null;
        _this.lblTotalBet = null;
        _this.lblCoin = null;
        _this.lblWinNow = null;
        _this.lblFreeSpinCount = null;
        _this.toggleAuto = null;
        _this.toggleSound = null;
        _this.togglgeMusic = null;
        _this.toggleBoost = null;
        // @property(cc.Toggle)
        // toggleTrial: cc.Toggle = null;
        _this.btnSpin = null;
        _this.btnBack = null;
        _this.btnPlayTry = null;
        _this.btnPlayReal = null;
        // @property(cc.Button)
        // btnBetUp: cc.Button = null;
        // @property(cc.Button)
        // btnBetDown: cc.Button = null;
        _this.btnLine = null;
        _this.toast = null;
        _this.panelSetting = null;
        _this.effectWinCash = null;
        _this.effectBigWin = null;
        _this.effectJackpot = null;
        _this.effectBonus = null;
        _this.popupSelectLine = null;
        _this.popupBonus = null;
        _this.soundSpinMis = null;
        _this.soundSpinWin = null;
        _this.soundBigWin = null;
        _this.soundJackpot = null;
        _this.soundBonus = null;
        _this.soundClick = null;
        _this.soundSpin = null;
        _this.soundEndSpin = null;
        _this.soundBg = null;
        _this.soundBgBonus = null;
        _this.dailyFreeSpin = 0;
        _this.spinDuration = 1.2;
        _this.addSpinDuration = 0.3;
        //private itemHeight = 0;
        _this.betIdx = -1;
        _this.listBet = [100, 1000, 10000];
        _this.listBetLabel = ["100", "1.000", "10.000"];
        _this.arrLineSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        _this.isSpined = true;
        _this.wildItemId = 2;
        _this.mapLine = [
            [5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4],
            [10, 11, 12, 13, 14],
            [10, 6, 2, 8, 14],
            [0, 6, 12, 8, 4],
            [5, 1, 2, 3, 9],
            [5, 11, 12, 13, 9],
            [0, 1, 7, 13, 14],
            [10, 11, 7, 3, 4],
            [5, 11, 7, 3, 9],
            [5, 1, 7, 13, 9],
            [0, 6, 7, 8, 4],
            [10, 6, 7, 8, 14],
            [0, 6, 2, 8, 4],
            [10, 6, 12, 8, 14],
            [5, 6, 2, 8, 9],
            [5, 6, 12, 8, 9],
            [0, 1, 12, 3, 4],
            [10, 11, 2, 13, 14],
            [0, 11, 12, 13, 4],
            [10, 1, 2, 3, 14],
            [5, 1, 12, 3, 9],
            [5, 11, 2, 13, 9],
            [0, 11, 2, 13, 4],
            [10, 1, 12, 3, 14] //25
        ];
        _this.lastSpinRes = null;
        _this.columnsWild = [];
        _this.mIsTrial = false;
        //new 
        _this.isFastCurrent = false;
        _this.isFast = false;
        _this.arrReel = [];
        _this.distanceReel = 0;
        _this.iconSpriteFrameBlurArr = [];
        _this.iconSpriteFrameArr = [];
        _this.arrUIItemIcon = [];
        _this.arrRealItem = [];
        _this.arrSkeletonIcon = [];
        _this.numberSpinReel = null;
        _this.isHaveResultSpin = false;
        _this.dataResult = null;
        _this.musicSlotState = null;
        _this.soundSlotState = null;
        _this.remoteMusicBackground = null;
        _this.mutipleJpNode = null;
        return _this;
    }
    Slot10Controller.prototype.start = function () {
        var _this = this;
        this.dailyFreeSpin = 0;
        this.soundInit();
        this.randomIconList();
        //dang ky khi mat ket noi tu dong back
        SlotNetworkClient_1.default.getInstance().addOnClose(function () {
            //this.actBack();
            _this.mSlotLobby.onBtnBack();
        }, this);
        this.iconWildColumns.zIndex = 3;
        //listenner client - server
        SlotNetworkClient_1.default.getInstance().addListener(function (data) {
            var inpacket = new Network_InPacket_1.default(data);
            switch (inpacket.getCmdId()) {
                case Slot10_Cmd_1.default.Code.FREE_DAI_LY:
                    {
                        if (!_this.mIsTrial) {
                            var res_1 = new Slot10_Cmd_1.default.ReceiveFreeDaiLy(data);
                            _this.dailyFreeSpin = res_1.freeSpin;
                            if (_this.dailyFreeSpin > 0) {
                                _this.lblFreeSpinCount.node.parent.active = true;
                                _this.lblFreeSpinCount.string = _this.dailyFreeSpin + "";
                            }
                            else {
                                _this.lblFreeSpinCount.node.parent.active = false;
                            }
                        }
                        else {
                            _this.lblFreeSpinCount.node.parent.active = false;
                        }
                    }
                    break;
                case Slot10_Cmd_1.default.Code.UPDATE_POT:
                    var res = new Slot10_Cmd_1.default.ReceiveUpdatePot(data);
                    Tween_1.default.numberTo(_this.lblJackpot, res.jackpot, 0.3);
                    break;
                case Slot10_Cmd_1.default.Code.UPDATE_JACKPOT_SLOTS:
                    _this.mSlotLobby.onUpdateJackpot(data);
                    break;
                case Slot10_Cmd_1.default.Code.PLAY:
                    {
                        var res_2 = new Slot10_Cmd_1.default.ReceivePlay(data);
                        // //  cc.log(res);
                        _this.onSpinResult(res_2);
                    }
                    break;
                default:
                    break;
            }
        }, this);
        SlotNetworkClient_1.default.getInstance().sendCheck(new Slot10_Cmd_1.default.ReqSubcribeHallSlot());
        ////  cc.log("Slot3Controller started");
        //SlotNetworkClient.getInstance().send(new cmd.SendSubcribe(this.betIdx));
        this.stopShowLinesWin();
        this.toast.active = false;
        this.effectWinCash.active = false;
        this.effectJackpot.active = false;
        this.effectBigWin.active = false;
        this.panelSetting.active = false;
        this.popupSelectLine.onSelectedChanged = function (lines) {
            _this.arrLineSelect = lines;
            _this.lblLine.string = _this.arrLineSelect.length.toString();
            Tween_1.default.numberTo(_this.lblTotalBet, _this.arrLineSelect.length * _this.listBet[_this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        };
        this.lblTotalBet.string = (this.arrLineSelect.length * this.listBet[this.betIdx]).toString();
        BroadcastReceiver_1.default.register(BroadcastReceiver_1.default.USER_UPDATE_COIN, function () {
            Tween_1.default.numberTo(_this.lblCoin, Configs_1.default.Login.Coin, 0.3);
        }, this);
        BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        App_1.default.instance.showErrLoading("Đang kết nối tới server...");
        SlotNetworkClient_1.default.getInstance().checkConnect(function () {
            App_1.default.instance.showLoading(false);
        });
        ////  cc.log("Slot3Controller started");
        this.mSlotLobby.init(this);
        this.mSlotLobby.node.active = true;
        this.btnPlayReal.node.active = false;
        this.btnPlayTry.node.active = true;
        //this.initMutipleJPNode();
    };
    Slot10Controller.prototype.initMutipleJPNode = function () {
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
                    _this.mutipleJpNode.setInfo("THETHAO");
                }
            });
        }
    };
    Slot10Controller.prototype.onBtnSoundTouchBonus = function () {
    };
    Slot10Controller.prototype.onBtnSoundSumary = function () {
    };
    Slot10Controller.prototype.getSpriteFrameIconBlur = function (indexIcon) {
        var self = this;
        return self.iconSpriteFrameBlurArr[indexIcon];
    };
    Slot10Controller.prototype.getSpriteFrameIcon = function (indexIcon) {
        var self = this;
        return self.iconSpriteFrameArr[indexIcon];
    };
    Slot10Controller.prototype.getSpineIcon = function (indexIcon) {
        var self = this;
        return self.arrSkeletonIcon[indexIcon];
    };
    Slot10Controller.prototype.randomIconList = function () {
        var self = this;
        for (var i = 0; i < self.arrUIItemIcon.length; i++) {
            var index = i;
            var itemId = Math.floor(Math.random() * (self.iconSpriteFrameArr.length));
            self.arrUIItemIcon[i].init(itemId, index, self);
            this.arrUIItemIcon[index].changeSpineIcon(itemId);
        }
    };
    Slot10Controller.prototype.onJoinRoom = function () {
        this.lblBet.string = this.listBetLabel[this.betIdx];
        var totalbet = (this.arrLineSelect.length * this.listBet[this.betIdx]);
        Tween_1.default.numberTo(this.lblTotalBet, totalbet, 0.3);
    };
    Slot10Controller.prototype.showToast = function (msg) {
        var _this = this;
        this.toast.getComponentInChildren(cc.Label).string = msg;
        this.toast.stopAllActions();
        this.toast.active = true;
        this.toast.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
            _this.toast.active = false;
        })));
    };
    Slot10Controller.prototype.moneyToK = function (money) {
        // if (money < 10000) {
        //     return money.toString();
        // }
        // money = parseInt((money / 1000).toString());
        return money.toString();
    };
    Slot10Controller.prototype.setEnabledAllButtons = function (enabled) {
        this.btnSpin.interactable = enabled;
        this.btnSpin.node.children[0].active = enabled;
        this.btnBack.interactable = enabled;
        // this.btnBetUp.interactable = enabled;
        // this.btnBetDown.interactable = enabled;
        this.btnLine.interactable = enabled;
        this.btnPlayTry.interactable = enabled;
        this.btnPlayReal.interactable = enabled;
        //this.toggleTrial.interactable = enabled;
    };
    Slot10Controller.prototype.stopAllEffects = function () {
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = false;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = false;
    };
    Slot10Controller.prototype.stopShowLinesWin = function () {
        this.linesWin.stopAllActions();
        for (var i = 0; i < this.linesWin.childrenCount; i++) {
            this.linesWin.children[i].active = false;
        }
        for (var i = 0; i < this.iconWildColumns.childrenCount; i++) {
            this.iconWildColumns.children[i].active = false;
        }
        this.stopAllItemEffect();
    };
    Slot10Controller.prototype.stopAllItemEffect = function () {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            for (var i_1 = 0; i_1 < this.reels.childrenCount; i_1++) {
                var children = this.reels.children[i_1].children; // ???
                for (var j = 0; j < children.length; j++) {
                    cc.Tween.stopAllByTarget(children[j]);
                    children[j].scale = 1;
                }
            }
        }
    };
    Slot10Controller.prototype.spin = function () {
        //  cc.log("spin cai coi");
        if (!this.isSpined)
            return;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpin, false, 1);
        }
        this.changeAllItemToDark(false);
        var isTrail = this.mIsTrial;
        if (!isTrail) {
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
                if (Configs_1.default.Login.Coin < this.listBet[this.betIdx] * this.arrLineSelect.length) {
                    App_1.default.instance.alertDialog.showMsg(App_1.default.instance.getTextLang("txt_not_enough"));
                    return;
                }
            }
            this.isSpined = false;
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            var data = new Slot10_Cmd_1.default.SendPlay(this.arrLineSelect.toString());
            SlotNetworkClient_1.default.getInstance().send(data);
        }
        else {
            this.isSpined = false;
            this.stopAllEffects();
            this.stopShowLinesWin();
            this.setEnabledAllButtons(false);
            var rIdx = Utils_1.default.randomRangeInt(0, Slot10_TrialResults_1.default.results.length);
            this.onSpinResult(Slot10_TrialResults_1.default.results[rIdx]);
        }
    };
    Slot10Controller.prototype.stopSpin = function () {
    };
    Slot10Controller.prototype.showLineWins = function () {
        var _this = this;
        this.isSpined = true;
        Tween_1.default.numberTo(this.lblWinNow, this.lastSpinRes.prize, 0.3);
        var isTrail = this.mIsTrial;
        if (!isTrail)
            BroadcastReceiver_1.default.send(BroadcastReceiver_1.default.USER_UPDATE_COIN);
        if (!this.toggleAuto.isChecked && !this.toggleBoost.isChecked)
            this.setEnabledAllButtons(true);
        this.linesWin.stopAllActions();
        var linesWin = this.lastSpinRes.linesWin.split(",");
        linesWin = Utils_1.default.removeDups(linesWin);
        for (var i = 0; i < linesWin.length; i++) {
            if (linesWin[i] == "0") {
                linesWin.splice(i, 1);
                i--;
            }
        }
        var matrix = this.lastSpinRes.matrix.split(",");
        var linesWinChildren = this.linesWin.children;
        var rolls = this.reels.children;
        var actions = [];
        for (var i = 0; i < linesWinChildren.length; i++) {
            linesWinChildren[i].active = linesWin.indexOf("" + (i + 1)) >= 0;
            ;
        }
        if (this.lastSpinRes.prize > 0) {
            this.changeAllItemToDark(true);
            this.linesWin.zIndex = 2;
            this.reels.zIndex = 1;
            this.showWinCash(this.lastSpinRes.prize);
            actions.push(cc.delayTime(1.5));
            actions.push(cc.callFunc(function () {
                for (var i = 0; i < linesWinChildren.length; i++) {
                    linesWinChildren[i].active = false;
                }
            }));
            actions.push(cc.delayTime(0.3));
            if (!this.toggleBoost.isChecked) {
                var _loop_1 = function (i) {
                    var lineIdx = parseInt(linesWin[i]) - 1;
                    var line = linesWinChildren[lineIdx];
                    actions.push(cc.callFunc(function () {
                        // //  cc.log("================: " + lineIdx);
                        _this.linesWin.zIndex = 1;
                        _this.reels.zIndex = 2;
                        line.active = true;
                        var mLine = _this.mapLine[lineIdx];
                        var countItemWin = 0;
                        var fisrtItemId = matrix[mLine[0]];
                        for (var j = 0; j < mLine.length; j++) {
                            var itemId = matrix[mLine[j]];
                            if (fisrtItemId == itemId || parseInt(itemId) == _this.wildItemId || _this.columnsWild.indexOf(j) >= 0) {
                                // //  cc.log("==" + itemId + " j:" + j);
                                countItemWin++;
                            }
                            else {
                                break;
                            }
                        }
                        var arrItem = _this.getItemWinInLine(lineIdx);
                        var arrIdOfItem = [];
                        var idWin = -1;
                        arrItem.forEach(function (item) {
                            arrIdOfItem.push(item.itemId);
                        });
                        arrItem.forEach(function (item) {
                            idWin = _this.getItemIdWinInLine(arrIdOfItem);
                            if (item.itemId == idWin) {
                                cc.Tween.stopAllByTarget(item.node);
                                cc.tween(item.node).repeatForever(cc.tween().to(0.2, { scale: item.node.scale + 0.1 }).to(0.2, { scale: item.node.scale })).start();
                                item.checkShowSpriteOrSpine();
                            }
                        });
                    }));
                    actions.push(cc.delayTime(1));
                    actions.push(cc.callFunc(function () {
                        line.active = false;
                        _this.stopAllItemEffect();
                    }));
                    actions.push(cc.delayTime(0.1));
                };
                for (var i = 0; i < linesWin.length; i++) {
                    _loop_1(i);
                }
            }
        }
        if (actions.length == 0) {
            actions.push(cc.callFunc(function () {
                //fixed call cc.sequence.apply
            }));
        }
        actions.push(cc.callFunc(function () {
            _this.changeAllItemToDark(false);
            if (_this.toggleBoost.isChecked || _this.toggleAuto.isChecked) {
                _this.spin();
            }
        }));
        this.linesWin.runAction(cc.sequence.apply(null, actions));
    };
    Slot10Controller.prototype.showCoins = function (prize) {
        var number = prize / 20000;
        if (number <= 10)
            number = 10;
        else if (number >= 30)
            number = 30;
        App_1.default.instance.showCoins(number, this.lblWinNow.node, this.nodeCoin);
    };
    Slot10Controller.prototype.showWinCash = function (cash) {
        var _this = this;
        this.showCoins(cash);
        this.effectWinCash.stopAllActions();
        this.effectWinCash.active = true;
        var label = this.effectWinCash.getComponentInChildren(cc.Label);
        label.string = "0";
        this.effectWinCash.opacity = 0;
        this.effectWinCash.runAction(cc.sequence(cc.fadeIn(0.3), cc.callFunc(function () {
            Tween_1.default.numberTo(label, cash, 0.5);
        }), cc.delayTime(1.5), cc.fadeOut(0.3), cc.callFunc(function () {
            _this.effectWinCash.active = false;
        })));
    };
    Slot10Controller.prototype.showEffectBigWin = function (cash, cb) {
        var _this = this;
        this.effectBigWin.stopAllActions();
        this.effectBigWin.active = true;
        this.effectBigWin.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        var label = this.effectBigWin.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectBigWin.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(3), cc.callFunc(function () {
            _this.effectBigWin.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot10Controller.prototype.showEffectJackpot = function (cash, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        this.effectJackpot.stopAllActions();
        this.effectJackpot.active = true;
        this.effectJackpot.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        var label = this.effectJackpot.getComponentInChildren(cc.Label);
        label.node.active = false;
        this.effectJackpot.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
            label.string = "";
            label.node.active = true;
            Tween_1.default.numberTo(label, cash, 1);
        }), cc.delayTime(6), cc.callFunc(function () {
            _this.effectJackpot.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot10Controller.prototype.showEffectBonus = function (cb) {
        var _this = this;
        this.effectBonus.stopAllActions();
        this.effectBonus.active = true;
        this.effectBonus.getComponentInChildren(sp.Skeleton).setAnimation(0, "animation", false);
        this.effectBonus.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            _this.effectBonus.active = false;
            if (cb != null)
                cb();
        })));
    };
    Slot10Controller.prototype.actClick = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundEndSpin, false, 1);
        }
    };
    Slot10Controller.prototype.beginSpinReel = function (indexReel) {
        var self = this;
        self.isFastCurrent = self.toggleBoost.isChecked;
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
    Slot10Controller.prototype.loopSpinReel = function (indexReel) {
        var _this = this;
        cc.tween(this.arrReel[indexReel])
            .to(0.06, { position: cc.v3(this.arrReel[indexReel].position.x, -this.distanceReel, 0) }, { easing: "linear" })
            .call(function () {
            _this.processLoopSpinReel(indexReel);
        })
            .start();
    };
    Slot10Controller.prototype.processLoopSpinReel = function (indexReel) {
        this.numberSpinReel[indexReel] += 1;
        for (var i = 4; i >= 0; i--) {
            var index = indexReel + (i * 5);
            var indexRow = Math.floor(index / 5);
            var itemIdTmp = 0;
            if (indexRow == 0) {
                itemIdTmp = Math.floor(Math.random() * this.iconSpriteFrameBlurArr.length);
            }
            else {
                itemIdTmp = this.arrUIItemIcon[index - 5].itemId;
            }
            var item = this.arrUIItemIcon[index];
            item.changeSpriteBlurByItemId(itemIdTmp);
        }
        this.arrReel[indexReel].position = cc.v3(this.arrReel[indexReel].position.x, 0, 0);
        if (this.isHaveResultSpin) {
            if (this.isFastCurrent == false) {
                if (this.numberSpinReel[indexReel] >= MAX_CYCCLE_SPIN) {
                    this.endSpinReel(indexReel);
                }
                else {
                    this.loopSpinReel(indexReel);
                }
            }
            else {
                if (this.numberSpinReel[indexReel] >= FAST_CYCCLE_SPIN) {
                    this.endSpinReel(indexReel);
                }
                else {
                    this.loopSpinReel(indexReel);
                }
            }
        }
        else {
            if (this.numberSpinReel[indexReel] >= ERROR_CYCCLE_SPIN) {
                this.endSpinReel(indexReel);
            }
            else {
                this.loopSpinReel(indexReel);
            }
        }
    };
    Slot10Controller.prototype.showWildBig = function () {
        var self = this;
        if (self.iconWildColumns.children.length <= 0)
            return;
        if (self.dataResult == null)
            return;
        var slotDatas = self.dataResult.matrix.split(',');
        var isWild = false;
        for (var i = 0; i < slotDatas.length; i++) {
            if (slotDatas[i] == self.wildItemId) {
                if (isWild == false) {
                    isWild = true;
                }
                var indexRow = Math.floor(i % 5);
                self.iconWildColumns.children[indexRow].scale = 0;
                cc.Tween.stopAllByTarget(self.iconWildColumns.children[indexRow]);
                cc.tween(self.iconWildColumns.children[indexRow])
                    .to(0.5, { scale: 1 }, { easing: "backOut" })
                    .start();
                self.iconWildColumns.children[indexRow].active = true;
                self.iconWildColumns.children[indexRow].getComponent("sp.Skeleton").setAnimation(0, "animation", false);
            }
        }
    };
    Slot10Controller.prototype.endSpinReel = function (indexReel) {
        var _this = this;
        if (this.dataResult == null) {
            for (var i = 3; i >= 1; i--) {
                var index = indexReel + (i * 5);
                var itemId = Math.floor(Math.random() * (this.iconSpriteFrameArr.length));
                this.arrUIItemIcon[index].changeSpineIcon(itemId);
            }
            return;
        }
        var matrix = this.dataResult.matrix.split(',');
        var roll = this.reels.children[indexReel];
        this.arrReel[indexReel].position = cc.v3(this.arrReel[indexReel].position.x, this.distanceReel, 0);
        for (var i = 3; i >= 1; i--) {
            var index = indexReel + (i * 5);
            this.arrUIItemIcon[index].changeSpineIcon(matrix[index - 5]);
        }
        cc.tween(this.arrReel[indexReel])
            .to(0.3, { position: cc.v3(this.arrReel[indexReel].position.x, 0, 0) }, { easing: "backOut" })
            .call(function () {
            if (_this.soundSlotState == 1) {
                cc.audioEngine.play(_this.soundEndSpin, false, 1);
            }
            if (indexReel == 4) {
                // this.showWildBig();
                _this.spined();
            }
        })
            .start();
    };
    Slot10Controller.prototype.spined = function () {
        var _this = this;
        if (this.lastSpinRes.freeSpin) {
            this.lblFreeSpinCount.string = this.lastSpinRes.freeSpin.toString();
        }
        var successResult = [0, 1, 3, 5, 6];
        switch (this.lastSpinRes.result) {
            case TYPE_WIN.MISS: //k an
                if (this.soundSlotState == 1) {
                    cc.audioEngine.play(this.soundSpinMis, false, 1);
                }
                this.showLineWins();
                break;
            case TYPE_WIN.WIN: // thang thuong
                if (this.soundSlotState == 1) {
                    cc.audioEngine.play(this.soundSpinWin, false, 1);
                }
                this.showLineWins();
                break;
            case TYPE_WIN.BIGWIN: // thang lon
                if (this.soundSlotState == 1) {
                    cc.audioEngine.play(this.soundBigWin, false, 1);
                }
                this.showEffectBigWin(this.lastSpinRes.prize, function () {
                    _this.showLineWins();
                });
                break;
            case TYPE_WIN.JACKPOT:
            case TYPE_WIN.SUPERWIN: //jackpot
                if (this.soundSlotState == 1) {
                    cc.audioEngine.play(this.soundJackpot, false, 1);
                }
                this.showEffectJackpot(this.lastSpinRes.prize, function () {
                    _this.showLineWins();
                });
                break;
            case 6: //thang sieu lon
                if (this.soundSlotState == 1) {
                    cc.audioEngine.play(this.soundBigWin, false, 1);
                }
                this.showEffectBigWin(this.lastSpinRes.prize, function () {
                    _this.showLineWins();
                });
                break;
            case TYPE_WIN.BONUS: //bonus
                if (this.soundSlotState == 1) {
                    cc.audioEngine.play(this.soundBonus, false, 1);
                }
                this.showEffectBonus(function () {
                    if (_this.musicSlotState == 1) {
                        _this.remoteMusicBackground = cc.audioEngine.playMusic(_this.soundBgBonus, true);
                    }
                    _this.popupBonus.showBonus(_this.mIsTrial ? 100 : _this.listBet[_this.betIdx], _this.dataResult.haiSao, _this, function () {
                        _this.showLineWins();
                    });
                });
                break;
        }
    };
    Slot10Controller.prototype.onSpinResult = function (res) {
        var _this = this;
        this.stopSpin();
        //  cc.log("onSpinResult:" + JSON.stringify(res));
        // res = JSON.parse('{"_pos":78,"_data":{"0":1,"1":11,"2":185,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":6,"11":126,"12":1,"13":0,"14":29,"15":52,"16":44,"17":49,"18":44,"19":55,"20":44,"21":51,"22":44,"23":48,"24":44,"25":56,"26":44,"27":53,"28":44,"29":51,"30":44,"31":52,"32":44,"33":50,"34":44,"35":51,"36":44,"37":51,"38":44,"39":54,"40":44,"41":51,"42":44,"43":55,"44":0,"45":9,"46":51,"47":44,"48":57,"49":44,"50":49,"51":48,"52":44,"53":49,"54":57,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":15,"64":60,"65":0,"66":0,"67":0,"68":0,"69":2,"70":78,"71":76,"72":36},"_length":73,"_controllerId":1,"_cmdId":3001,"_error":0,"ref":1662,"result":1,"matrix":"4,1,7,3,0,8,5,3,4,2,3,3,6,3,7","linesWin":"3,9,10,19","haiSao":"","prize":3900,"currentMoney":38685732,"isFree":false,"itemsWild":""}');
        var successResult = [0, 1, 2, 3, 4, 5, 6];
        //res.result == 5 //bonus
        //res.result == 0 //khong an
        //res.result == 1 //thang thuong
        //res.result == 2 //thang lon
        //res.result == 3 //no hu
        //res.result == 6 //thang cuc lon
        if (successResult.indexOf(res.result) === -1) {
            this.isSpined = true;
            this.toggleAuto.isChecked = false;
            this.toggleAuto.interactable = true;
            this.toggleBoost.isChecked = false;
            this.toggleBoost.interactable = true;
            this.setEnabledAllButtons(true);
            switch (res.result) {
                case 102:
                    this.showToast(App_1.default.instance.getTextLang('txt_not_enough'));
                    break;
                default:
                    this.showToast(App_1.default.instance.getTextLang('txt_unknown_error1'));
                    break;
            }
            return;
        }
        this.lastSpinRes = res;
        this.columnsWild.length = 0;
        var isTrail = this.mIsTrial;
        if (!isTrail && !this.lastSpinRes.isFree) {
            var curMoney = Configs_1.default.Login.Coin - this.arrLineSelect.length * this.listBet[this.betIdx];
            Tween_1.default.numberTo(this.lblCoin, curMoney, 0.3);
            Configs_1.default.Login.Coin = res.currentMoney;
        }
        this.numberSpinReel = new Array(this.arrReel.length);
        this.dataResult = res;
        this.isHaveResultSpin = true;
        for (var i = 0; i < this.arrReel.length; i++) {
            this.beginSpinReel(i);
        }
        return;
        var matrix = res.matrix.split(",");
        var timeScale = this.toggleBoost.isChecked ? 0.5 : 1;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundSpin, false, 1);
        }
        var _loop_2 = function (i_2) {
            var roll = this_1.reels.children[i_2];
            var step1Pos = this_1.mHeightItem * 0.3;
            var step2Pos = -this_1.mHeightItem * roll.childrenCount + this_1.mHeightItem * 3 - this_1.mHeightItem * 0.3;
            var step3Pos = -this_1.mHeightItem * roll.childrenCount + this_1.mHeightItem * 3;
            roll.runAction(cc.sequence(cc.delayTime(0.2 * i_2 * timeScale), cc.moveTo(0.2 * timeScale, cc.v2(roll.position.x, step1Pos)).easing(cc.easeQuadraticActionOut()), cc.moveTo((this_1.spinDuration + this_1.addSpinDuration * i_2) * timeScale, cc.v2(roll.position.x, step2Pos)).easing(cc.easeQuadraticActionInOut()), cc.moveTo(0.2 * timeScale, cc.v2(roll.position.x, step3Pos)).easing(cc.easeQuadraticActionIn()), cc.callFunc(function () {
                roll.setPosition(cc.v2(roll.position.x, 0));
                if (_this.soundSlotState == 1) {
                    cc.audioEngine.play(_this.soundEndSpin, false, 1);
                }
                if (i_2 == 4) {
                    //find columns wild
                    for (var j = 0; j < matrix.length; j++) {
                        if (parseInt(matrix[j]) == _this.wildItemId) {
                            var c = j % 5;
                            if (_this.columnsWild.indexOf(c) == -1)
                                _this.columnsWild.push(c);
                        }
                    }
                    //replace wild items in columns
                    for (var j = 0; j < _this.columnsWild.length; j++) {
                        var c = _this.columnsWild[j];
                        var children = _this.reels.children[c].children;
                        children[2].getComponent(Slot10_Item_1.default).setId(_this.wildItemId);
                        children[1].getComponent(Slot10_Item_1.default).setId(_this.wildItemId);
                        children[0].getComponent(Slot10_Item_1.default).setId(_this.wildItemId);
                        // children[2].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.wildItemId];
                        // children[1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.wildItemId];
                        // children[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[this.wildItemId];
                        _this.iconWildColumns.children[c].active = true;
                        if (_this.soundSlotState == 1) {
                            cc.audioEngine.play(_this.soundSpinWin, false, 1);
                        }
                        _this.iconWildColumns.children[c].getComponent("sp.Skeleton").setAnimation(0, "animation", false);
                    }
                    if (_this.columnsWild.length > 0) {
                        roll.runAction(cc.sequence(cc.delayTime(2.6), cc.callFunc(function () {
                            for (var i_3 = 0; i_3 < _this.iconWildColumns.childrenCount; i_3++) {
                                _this.iconWildColumns.children[i_3].active = false;
                            }
                        }), cc.delayTime(0.1), cc.callFunc(function () {
                            _this.spined();
                        })));
                    }
                    else {
                        _this.spined();
                    }
                }
            })));
            //rool = reel
            roll.runAction(cc.sequence(cc.delayTime((0.47 + 0.2 * i_2) * timeScale), cc.callFunc(function () {
                var listItemNode = roll.children;
                // listItem[2].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[i])];
                // listItem[1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[5 + i])];
                // listItem[0].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[10 + i])];
                // listItem[listItem.length - 1].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[i])];
                // listItem[listItem.length - 2].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[5 + i])];
                // listItem[listItem.length - 3].children[0].getComponent(cc.Sprite).spriteFrame = this.sprFrameItems[parseInt(matrix[10 + i])];
                listItemNode[2].getComponent(Slot10_Item_1.default).setId(parseInt(matrix[i_2]));
                listItemNode[1].getComponent(Slot10_Item_1.default).setId(parseInt(matrix[5 + i_2]));
                listItemNode[0].getComponent(Slot10_Item_1.default).setId(parseInt(matrix[10 + i_2]));
                listItemNode[listItemNode.length - 1].getComponent(Slot10_Item_1.default).setId(parseInt(matrix[i_2]));
                listItemNode[listItemNode.length - 2].getComponent(Slot10_Item_1.default).setId(parseInt(matrix[5 + i_2]));
                listItemNode[listItemNode.length - 3].getComponent(Slot10_Item_1.default).setId(parseInt(matrix[10 + i_2]));
            })));
        };
        var this_1 = this;
        for (var i_2 = 0; i_2 < this.reels.childrenCount; i_2++) {
            _loop_2(i_2);
        }
    };
    Slot10Controller.prototype.actBack = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendUnSubcribe(this.betIdx));
        this.mSlotLobby.node.active = true;
    };
    Slot10Controller.prototype.actHidden = function () {
        this.showToast(App_1.default.instance.getTextLang('txt_function_in_development'));
    };
    Slot10Controller.prototype.actBetUp = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.betIdx < this.listBet.length - 1) {
            this.dailyFreeSpin = 0;
            this.lblFreeSpinCount.node.parent.active = false;
            SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendChangeRoom(this.betIdx, ++this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        }
    };
    Slot10Controller.prototype.actBetDown = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.betIdx > 0) {
            this.dailyFreeSpin = 0;
            this.lblFreeSpinCount.node.parent.active = false;
            SlotNetworkClient_1.default.getInstance().send(new Slot10_Cmd_1.default.SendChangeRoom(this.betIdx, --this.betIdx));
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        }
    };
    Slot10Controller.prototype.actLine = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        this.popupSelectLine.show();
    };
    Slot10Controller.prototype.actSetting = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.panelSetting.active = !this.panelSetting.active;
    };
    Slot10Controller.prototype.toggleTrialOnCheck = function () {
        var _this = this;
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        this.mIsTrial = !this.mIsTrial;
        var isTrail = this.mIsTrial;
        if (isTrail) {
            this.btnPlayReal.node.active = true;
            this.btnPlayTry.node.active = false;
            this.lblLine.string = "25";
            this.lblBet.string = "100";
            Tween_1.default.numberTo(this.lblTotalBet, 2500, 0.3, function (n) { return _this.moneyToK(n); });
        }
        else {
            this.btnPlayReal.node.active = false;
            this.btnPlayTry.node.active = true;
            this.lblLine.string = this.arrLineSelect.length.toString();
            this.lblBet.string = this.listBetLabel[this.betIdx];
            Tween_1.default.numberTo(this.lblTotalBet, this.arrLineSelect.length * this.listBet[this.betIdx], 0.3, function (n) { return _this.moneyToK(n); });
        }
    };
    Slot10Controller.prototype.toggleAutoOnCheck = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (this.toggleAuto.isChecked && isTrail) {
            this.toggleAuto.isChecked = false;
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.toggleAuto.isChecked) {
            this.spin();
            this.toggleBoost.interactable = false;
        }
        else {
            this.toggleBoost.interactable = true;
            if (this.isSpined) {
                this.setEnabledAllButtons(true);
            }
        }
    };
    Slot10Controller.prototype.toggleBoostOnCheck = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        var isTrail = this.mIsTrial;
        if (this.toggleBoost.isChecked && isTrail) {
            this.toggleBoost.isChecked = false;
            this.showToast(App_1.default.instance.getTextLang('txt_slot_error'));
            return;
        }
        if (this.toggleBoost.isChecked) {
            this.spin();
            this.toggleAuto.interactable = false;
        }
        else {
            this.toggleAuto.interactable = true;
            if (this.isSpined) {
                this.setEnabledAllButtons(true);
            }
        }
    };
    //music setting
    Slot10Controller.prototype.soundInit = function () {
        // musicSave :   0 == OFF , 1 == ON
        var musicSave = cc.sys.localStorage.getItem("music_Slot_7");
        if (musicSave != null) {
            this.musicSlotState = parseInt(musicSave);
        }
        else {
            this.musicSlotState = 1;
            cc.sys.localStorage.setItem("music_Slot_7", "1");
        }
        // soundSave :   0 == OFF , 1 == ON
        var soundSave = cc.sys.localStorage.getItem("sound_Slot_7");
        if (soundSave != null) {
            this.soundSlotState = parseInt(soundSave);
        }
        else {
            this.soundSlotState = 1;
            cc.sys.localStorage.setItem("sound_Slot_7", "1");
        }
        if (this.musicSlotState == 0) {
            //this.musicOff.active = true;
        }
        else {
            //this.musicOff.active = false;
        }
        if (this.soundSlotState == 0) {
            //this.soundOff.active = true;
        }
        else {
            //this.soundOff.active = false;
        }
        if (this.musicSlotState == 1) {
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
        }
    };
    Slot10Controller.prototype.settingMusic = function () {
        //this.musicOff.active = !this.musicOff.active;
        if (!this.togglgeMusic.isChecked) {
            cc.audioEngine.stop(this.remoteMusicBackground);
            this.musicSlotState = 0;
        }
        else {
            this.remoteMusicBackground = cc.audioEngine.playMusic(this.soundBg, true);
            this.musicSlotState = 1;
        }
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        cc.sys.localStorage.setItem("music_Slot_7", "" + this.musicSlotState);
    };
    Slot10Controller.prototype.settingSound = function () {
        if (this.soundSlotState == 1) {
            cc.audioEngine.play(this.soundClick, false, 1);
        }
        if (!this.toggleSound.isChecked) {
            this.soundSlotState = 0;
        }
        else {
            this.soundSlotState = 1;
        }
        cc.sys.localStorage.setItem("music_Slot_7", "" + this.soundSlotState);
    };
    Slot10Controller.prototype.changeAllItemToDark = function (state) {
        for (var i = 0; i < this.reels.childrenCount; i++) {
            var col = this.reels.children[i];
            for (var j = 0; j < col.childrenCount; j++) {
                var item = col.children[j];
                var sprite = item.getComponentInChildren(cc.Sprite);
                var spine = item.getComponentInChildren(sp.Skeleton);
                spine.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
                sprite.node.color = state ? cc.Color.GRAY : cc.Color.WHITE;
                spine.node.active = false;
                sprite.node.active = true;
            }
        }
    };
    Slot10Controller.prototype.getItemWinInLine = function (lineId) {
        var lineArr = this.mapLine[lineId];
        var arrItem = [];
        this.arrRealItem = [];
        for (var i = 0; i < 15; i++) {
            this.arrRealItem.push(this.arrUIItemIcon[i + 5]);
        }
        for (var i = 0; i < lineArr.length; i++) {
            arrItem.push(this.arrRealItem[lineArr[i]]);
        }
        return arrItem;
    };
    Slot10Controller.prototype.getItemIdWinInLine = function (arrId) {
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
        property(Slot10_Lobby_1.default)
    ], Slot10Controller.prototype, "mSlotLobby", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "nodeCoin", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot10Controller.prototype, "mHeightItem", void 0);
    __decorate([
        property(cc.Integer)
    ], Slot10Controller.prototype, "mWidthItem", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "reels", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "linesWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "iconWildColumns", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblJackpot", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblLine", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblTotalBet", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblCoin", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblWinNow", void 0);
    __decorate([
        property(cc.Label)
    ], Slot10Controller.prototype, "lblFreeSpinCount", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot10Controller.prototype, "toggleAuto", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot10Controller.prototype, "toggleSound", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot10Controller.prototype, "togglgeMusic", void 0);
    __decorate([
        property(cc.Toggle)
    ], Slot10Controller.prototype, "toggleBoost", void 0);
    __decorate([
        property(cc.Button)
    ], Slot10Controller.prototype, "btnSpin", void 0);
    __decorate([
        property(cc.Button)
    ], Slot10Controller.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Button)
    ], Slot10Controller.prototype, "btnPlayTry", void 0);
    __decorate([
        property(cc.Button)
    ], Slot10Controller.prototype, "btnPlayReal", void 0);
    __decorate([
        property(cc.Button)
    ], Slot10Controller.prototype, "btnLine", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "toast", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "panelSetting", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "effectWinCash", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "effectBigWin", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "effectJackpot", void 0);
    __decorate([
        property(cc.Node)
    ], Slot10Controller.prototype, "effectBonus", void 0);
    __decorate([
        property(Slot10_PopupSelectLine_1.default)
    ], Slot10Controller.prototype, "popupSelectLine", void 0);
    __decorate([
        property(Slot10_PopupBonus_1.default)
    ], Slot10Controller.prototype, "popupBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundSpinMis", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundSpinWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundBigWin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundJackpot", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundBonus", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundClick", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundEndSpin", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundBg", void 0);
    __decorate([
        property({ type: cc.AudioClip })
    ], Slot10Controller.prototype, "soundBgBonus", void 0);
    __decorate([
        property([cc.Node])
    ], Slot10Controller.prototype, "arrReel", void 0);
    __decorate([
        property
    ], Slot10Controller.prototype, "distanceReel", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot10Controller.prototype, "iconSpriteFrameBlurArr", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Slot10Controller.prototype, "iconSpriteFrameArr", void 0);
    __decorate([
        property([Slot10_Item_2.default])
    ], Slot10Controller.prototype, "arrUIItemIcon", void 0);
    __decorate([
        property([Slot10_Item_2.default])
    ], Slot10Controller.prototype, "arrRealItem", void 0);
    __decorate([
        property([sp.SkeletonData])
    ], Slot10Controller.prototype, "arrSkeletonIcon", void 0);
    Slot10Controller = __decorate([
        ccclass
    ], Slot10Controller);
    return Slot10Controller;
}(cc.Component));
exports.default = Slot10Controller;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2xvdDEwXFxTbG90MTBTY3JpcHRcXFNsb3QxMC5TbG90MTBDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUErQjtBQUUvQixxREFBZ0Q7QUFDaEQsbUVBQXVEO0FBQ3ZELHlEQUE2QztBQUM3Qyw2REFBaUQ7QUFDakQsK0NBQXlDO0FBQ3pDLDZDQUF1QztBQUN2QyxpRUFBNEQ7QUFDNUQsNkZBQXdGO0FBQ3hGLHFFQUFnRTtBQUNoRSxxRUFBZ0U7QUFDaEUsNkZBQWdGO0FBQ2hGLCtGQUEwRjtBQUUxRiw2Q0FBMkM7QUFFM0MsSUFBVyxRQU9WO0FBUEQsV0FBVyxRQUFRO0lBQ2YsdUNBQVEsQ0FBQTtJQUNSLHFDQUFPLENBQUE7SUFDUCwyQ0FBVSxDQUFBO0lBQ1YsNkNBQVcsQ0FBQTtJQUNYLCtDQUFZLENBQUE7SUFDWix5Q0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQVBVLFFBQVEsS0FBUixRQUFRLFFBT2xCO0FBQ0QsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBa3JDQztRQS9xQ0csZ0JBQVUsR0FBZ0IsSUFBSSxDQUFDO1FBSS9CLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFJekIsaUJBQVcsR0FBVyxHQUFHLENBQUM7UUFHMUIsZ0JBQVUsR0FBVyxHQUFHLENBQUM7UUFHekIsV0FBSyxHQUFZLElBQUksQ0FBQyxDQUFDLE9BQU87UUFFOUIscUJBQXFCO1FBQ3JCLGdDQUFnQztRQUVoQyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLHFCQUFlLEdB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LEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQSxJQUFJO1NBQ3pCLENBQUM7UUFDTSxpQkFBVyxHQUFvQixJQUFJLENBQUM7UUFDcEMsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFHbEIsY0FBUSxHQUFHLEtBQUssQ0FBQztRQUd4QixNQUFNO1FBRUUsbUJBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsWUFBTSxHQUFHLEtBQUssQ0FBQztRQUd2QixhQUFPLEdBQWMsRUFBRSxDQUFDO1FBR3hCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLDRCQUFzQixHQUFxQixFQUFFLENBQUM7UUFHOUMsd0JBQWtCLEdBQXFCLEVBQUUsQ0FBQztRQUkxQyxtQkFBYSxHQUFxQixFQUFFLENBQUM7UUFFckMsaUJBQVcsR0FBcUIsRUFBRSxDQUFDO1FBR25DLHFCQUFlLEdBQXNCLEVBQUUsQ0FBQztRQUdqQyxvQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0QixzQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDekIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsMkJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3BDLG1CQUFhLEdBQUUsSUFBSSxDQUFDOztJQXMvQnhCLENBQUM7SUFyL0JHLGdDQUFLLEdBQUw7UUFBQSxpQkFzRkM7UUFyRkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixzQ0FBc0M7UUFDdEMsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3ZDLGlCQUFpQjtZQUNqQixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQywyQkFBMkI7UUFDM0IsMkJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQUMsSUFBSTtZQUM3QyxJQUFJLFFBQVEsR0FBRyxJQUFJLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsUUFBUSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3pCLEtBQUssb0JBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFDckI7d0JBQ0ksSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7NEJBQ2hCLElBQUksS0FBRyxHQUFHLElBQUksb0JBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDekMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFHLENBQUMsUUFBUSxDQUFDOzRCQUNsQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO2dDQUN4QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dDQUNoRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDOzZCQUMxRDtpQ0FDSTtnQ0FDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzZCQUNwRDt5QkFDSjs2QkFDSTs0QkFDRCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3lCQUNwRDtxQkFDSjtvQkFDRCxNQUFNO2dCQUNWLEtBQUssb0JBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtvQkFDcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxvQkFBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QyxlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFFbEQsTUFBTTtnQkFDVixLQUFLLG9CQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFvQjtvQkFDOUIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RDLE1BQU07Z0JBQ1YsS0FBSyxvQkFBRyxDQUFDLElBQUksQ0FBQyxJQUFJO29CQUNkO3dCQUNJLElBQUksS0FBRyxHQUFHLElBQUksb0JBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BDLG1CQUFtQjt3QkFDbkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFHLENBQUMsQ0FBQztxQkFDMUI7b0JBQ0QsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxvQkFBRyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztRQUV6RSx3Q0FBd0M7UUFFeEMsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyxVQUFDLEtBQUs7WUFDM0MsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDM0QsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBTyxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNySSxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFHN0YsMkJBQWlCLENBQUMsUUFBUSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixFQUFFO1lBQzNELGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sRUFBRSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1QsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFM0QsYUFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDekMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCx3Q0FBd0M7UUFFeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkMsMkJBQTJCO0lBQy9CLENBQUM7SUFDQSw0Q0FBaUIsR0FBakI7UUFBQSxpQkFhQTtRQVpHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJO1lBQzVHLENBQUMsRUFBRSxVQUFDLElBQUksRUFBRSxNQUFpQjtnQkFDdkIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNkLDRDQUE0QztpQkFDL0M7cUJBQU07b0JBQ0gsS0FBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUMzRSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQ2hGLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN6QztZQUNMLENBQUMsQ0FBQyxDQUFBO1NBQ0w7SUFDTCxDQUFDO0lBQ0QsK0NBQW9CLEdBQXBCO0lBRUEsQ0FBQztJQUVELDJDQUFnQixHQUFoQjtJQUVBLENBQUM7SUFHRCxpREFBc0IsR0FBdEIsVUFBdUIsU0FBUztRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDZDQUFrQixHQUFsQixVQUFtQixTQUFTO1FBQ3hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLFNBQVM7UUFDbEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWhCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQseUNBQWMsR0FBZDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBRXBEO0lBQ0wsQ0FBQztJQUVNLHFDQUFVLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFcEQsQ0FBQztJQUVPLG9DQUFTLEdBQWpCLFVBQWtCLEdBQVc7UUFBN0IsaUJBT0M7UUFORyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3pELElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQzFELEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU8sbUNBQVEsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQix1QkFBdUI7UUFDdkIsK0JBQStCO1FBQy9CLElBQUk7UUFDSiwrQ0FBK0M7UUFDL0MsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLCtDQUFvQixHQUE1QixVQUE2QixPQUFnQjtRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLHdDQUF3QztRQUN4QywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDeEMsMENBQTBDO0lBQzlDLENBQUM7SUFFTyx5Q0FBYyxHQUF0QjtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JDLENBQUM7SUFFTywyQ0FBZ0IsR0FBeEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRU8sNENBQWlCLEdBQXpCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9DLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxHQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTTtnQkFDdEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN0QyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztpQkFDekI7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVPLCtCQUFJLEdBQVo7UUFDSSwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUMzQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVWLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztpQkFDMUQ7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztpQkFDcEQ7YUFDSjtpQkFDSTtnQkFDRCxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtvQkFDNUUsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztvQkFDN0UsT0FBTztpQkFDVjthQUNKO1lBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLG9CQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMzRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUM7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQUcsZUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsNkJBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyw2QkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQUVPLG1DQUFRLEdBQWhCO0lBRUEsQ0FBQztJQUVPLHVDQUFZLEdBQXBCO1FBQUEsaUJBNEZDO1FBM0ZHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPO1lBQUUsMkJBQWlCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9GLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELFFBQVEsR0FBRyxlQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsRUFBRSxDQUFDO2FBQ1A7U0FDSjtRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQzlDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUFBLENBQUM7U0FDckU7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUM5QyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUN0QztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7d0NBQ3BCLENBQUM7b0JBQ04sSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDckIsOENBQThDO3dCQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ25CLElBQUksS0FBSyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ2xDLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDbkMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixJQUFJLFdBQVcsSUFBSSxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dDQUNsRyx5Q0FBeUM7Z0NBQ3pDLFlBQVksRUFBRSxDQUFDOzZCQUNsQjtpQ0FBTTtnQ0FDSCxNQUFNOzZCQUNUO3lCQUNKO3dCQUNELElBQUksT0FBTyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO3dCQUNyQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDZixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTs0QkFDakIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2xDLENBQUMsQ0FBQyxDQUFDO3dCQUNILE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJOzRCQUNqQixLQUFLLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUM3QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFO2dDQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0NBQ3BDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0NBQ3BJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOzZCQUNqQzt3QkFDTCxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO3dCQUNwQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7Z0JBeENwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7NEJBQS9CLENBQUM7aUJBeUNUO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQiw4QkFBOEI7WUFDbEMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNOO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO2dCQUN6RCxLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sb0NBQVMsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUcsTUFBTSxJQUFJLEVBQUU7WUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ3hCLElBQUcsTUFBTSxJQUFJLEVBQUU7WUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLGFBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLHNDQUFXLEdBQW5CLFVBQW9CLElBQVk7UUFBaEMsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ3BDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQ2QsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLGVBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsRUFDRixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDJDQUFnQixHQUF4QixVQUF5QixJQUFZLEVBQUUsRUFBYztRQUFyRCxpQkFvQkM7UUFuQkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDMUYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN6QixlQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pDLElBQUksRUFBRSxJQUFJLElBQUk7Z0JBQUUsRUFBRSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLDRDQUFpQixHQUF6QixVQUEwQixJQUFZLEVBQUUsRUFBcUI7UUFBN0QsaUJBb0JDO1FBcEJ1QyxtQkFBQSxFQUFBLFNBQXFCO1FBQ3pELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzNGLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUNwQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNmLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsZUFBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxFQUNGLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLEVBQUUsSUFBSSxJQUFJO2dCQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTywwQ0FBZSxHQUF2QixVQUF3QixFQUFjO1FBQXRDLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFekYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDbEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDZixFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ1IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksRUFBRSxJQUFJLElBQUk7Z0JBQUUsRUFBRSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLG1DQUFRLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFFTSx3Q0FBYSxHQUFwQixVQUFxQixTQUFTO1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNsRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDNUIsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDdEIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQzthQUM3RixJQUFJLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCx1Q0FBWSxHQUFaLFVBQWEsU0FBUztRQUF0QixpQkFRQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QixFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO2FBQzlHLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsOENBQW1CLEdBQW5CLFVBQW9CLFNBQVM7UUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLEtBQUssR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtnQkFDZixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlFO2lCQUNJO2dCQUNELFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDcEQ7WUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxFQUFFO2dCQUM3QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksZUFBZSxFQUFFO29CQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUMvQjtxQkFDSTtvQkFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoQzthQUNKO2lCQUNJO2dCQUNELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxnQkFBZ0IsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDL0I7cUJBQ0k7b0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDaEM7YUFDSjtTQUNKO2FBQ0k7WUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0I7aUJBQ0k7Z0JBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNoQztTQUNKO0lBRUwsQ0FBQztJQUNELHNDQUFXLEdBQVg7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUFFLE9BQU87UUFDdEQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBQ3BDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDakMsSUFBSSxNQUFNLElBQUksS0FBSyxFQUFFO29CQUNqQixNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbEUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDNUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQztxQkFDNUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzNHO1NBQ0o7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLFNBQVM7UUFBckIsaUJBNEJDO1FBM0JHLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUNwRDtZQUNELE9BQU87U0FDVjtRQUNELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25HLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxLQUFLLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUMvRDtRQUNELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM1QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO2FBQzdGLElBQUksQ0FBQztZQUNGLElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO2dCQUNoQixzQkFBc0I7Z0JBQ3RCLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFJTyxpQ0FBTSxHQUFkO1FBQUEsaUJBNERDO1FBMURHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2RTtRQUVELElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDN0IsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFDLE1BQU07Z0JBQ3JCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7b0JBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUMsZUFBZTtnQkFDN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtvQkFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDcEIsTUFBTTtZQUNWLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBQyxZQUFZO2dCQUM3QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO29CQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUMxQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFBQyxLQUFLLFFBQVEsQ0FBQyxRQUFRLEVBQUMsU0FBUztnQkFDbkQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtvQkFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtvQkFDM0MsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN4QixDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1lBQ1YsS0FBSyxDQUFDLEVBQUMsZ0JBQWdCO2dCQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO29CQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDbkQ7Z0JBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUMxQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDVixLQUFLLFFBQVEsQ0FBQyxLQUFLLEVBQUMsT0FBTztnQkFDdkIsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtvQkFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xEO2dCQUVELElBQUksQ0FBQyxlQUFlLENBQUM7b0JBQ2pCLElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7d0JBRTFCLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUNsRjtvQkFDRCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUksRUFBRTt3QkFDckcsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUN4QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDSCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0lBR00sdUNBQVksR0FBbkIsVUFBb0IsR0FBMEI7UUFBOUMsaUJBMklDO1FBeklHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixrREFBa0Q7UUFDbEQsZ3pCQUFnekI7UUFDaHpCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QixpQ0FBaUM7UUFDakMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFHckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsS0FBSyxHQUFHO29CQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNWO29CQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUMvRCxNQUFNO2FBQ2I7WUFDRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDdEMsSUFBSSxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFGLGVBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUMsaUJBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7U0FDekM7UUFHRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELE9BQU87UUFDUCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqRDtnQ0FDUSxHQUFDO1lBQ04sSUFBSSxJQUFJLEdBQUcsT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksUUFBUSxHQUFHLE9BQUssV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN0QyxJQUFJLFFBQVEsR0FBRyxDQUFDLE9BQUssV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHLE9BQUssV0FBVyxHQUFHLEdBQUcsQ0FBQztZQUN0RyxJQUFJLFFBQVEsR0FBRyxDQUFDLE9BQUssV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBSyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUNqQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxFQUNoRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBSyxZQUFZLEdBQUcsT0FBSyxlQUFlLEdBQUcsR0FBQyxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLHdCQUF3QixFQUFFLENBQUMsRUFDN0ksRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUMsRUFDL0YsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDUixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxLQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtvQkFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUNELElBQUksR0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDUixtQkFBbUI7b0JBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNwQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsVUFBVSxFQUFFOzRCQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNkLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2dDQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNuRTtxQkFDSjtvQkFFRCwrQkFBK0I7b0JBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDOUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUMvQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM1RCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUM1RCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUU1RCxxR0FBcUc7d0JBQ3JHLHFHQUFxRzt3QkFDckcscUdBQXFHO3dCQUNyRyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUMvQyxJQUFJLEtBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFOzRCQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDcEQ7d0JBQ0QsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO3FCQUNwRztvQkFDRCxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUNSLEtBQUssSUFBSSxHQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxHQUFDLEVBQUUsRUFBRTtnQ0FDekQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs2QkFDbkQ7d0JBQ0wsQ0FBQyxDQUFDLEVBQ0YsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0QkFDUixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztxQkFDTjt5QkFBTTt3QkFDSCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7cUJBQ2pCO2lCQUNKO1lBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDO1lBRUgsYUFBYTtZQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDdEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEVBQzFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ1IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakMseUdBQXlHO2dCQUN6Ryw2R0FBNkc7Z0JBQzdHLDhHQUE4RztnQkFDOUcsMkhBQTJIO2dCQUMzSCwrSEFBK0g7Z0JBQy9ILGdJQUFnSTtnQkFFaEksWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxxQkFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RSxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHFCQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5RixZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMscUJBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkcsQ0FBQyxDQUFDLENBQ0wsQ0FBQyxDQUFDOzs7UUFoRlAsS0FBSyxJQUFJLEdBQUMsR0FBRyxDQUFDLEVBQUUsR0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLEdBQUMsRUFBRTtvQkFBeEMsR0FBQztTQWlGVDtJQUNMLENBQUM7SUFJRCxrQ0FBTyxHQUFQO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUNELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRzFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdkMsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCRyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqRCwyQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxVQUFDLENBQUMsSUFBTyxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwSTtJQUNMLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ2pELDJCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLG9CQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQUMsQ0FBQyxJQUFPLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BJO0lBQ0wsQ0FBQztJQUVELGtDQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxTQUFTLENBQUMsYUFBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzNELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDO0lBRUQsNkNBQWtCLEdBQWxCO1FBQUEsaUJBcUJDO1FBcEJHLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUUvQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDM0IsZUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7U0FDeEU7YUFBTTtZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxlQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1NBQ3pIO0lBQ0wsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMzRCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUN6QzthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7U0FDSjtJQUNMLENBQUM7SUFFRCw2Q0FBa0IsR0FBbEI7UUFDSSxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLE9BQU8sRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDeEM7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNwQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7SUFDTCxDQUFDO0lBRUQsZUFBZTtJQUVQLG9DQUFTLEdBQWpCO1FBQ0ksbUNBQW1DO1FBQ25DLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1RCxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEQ7UUFFRCxtQ0FBbUM7UUFDbkMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwRDtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsOEJBQThCO1NBQ2pDO2FBQU07WUFDSCwrQkFBK0I7U0FDbEM7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLDhCQUE4QjtTQUNqQzthQUFNO1lBQ0gsK0JBQStCO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUUxQixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3RTtJQUNMLENBQUM7SUFDRCx1Q0FBWSxHQUFaO1FBQ0ksK0NBQStDO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTtZQUM5QixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUMxQixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7UUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNELDhDQUFtQixHQUFuQixVQUFvQixLQUFLO1FBQ3JCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMvQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUMzRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUU3QjtTQUNKO0lBQ0wsQ0FBQztJQUNELDJDQUFnQixHQUFoQixVQUFpQixNQUFNO1FBQ25CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNELDZDQUFrQixHQUFsQixVQUFtQixLQUFvQjtRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQ2IsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUN2RCxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDYixLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUE5cUNEO1FBREMsUUFBUSxDQUFDLHNCQUFXLENBQUM7d0RBQ1M7SUFJL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3lEQUNLO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7d0RBQ0k7SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDSTtJQUt0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkRBQ2M7SUFHaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3REFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO29EQUNLO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ007SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5REFDVTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7dURBQ1E7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4REFDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzswREFDVztJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3lEQUNVO0lBSzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7cURBQ007SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3dEQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eURBQ1U7SUFNOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztxREFDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNJO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ1c7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDWTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBEQUNXO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDVTtJQUc1QjtRQURDLFFBQVEsQ0FBQyxnQ0FBZSxDQUFDOzZEQUNjO0lBRXhDO1FBREMsUUFBUSxDQUFDLDJCQUFVLENBQUM7d0RBQ1M7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzBEQUNDO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzswREFDQztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7eURBQ0E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzBEQUNDO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzt3REFDRDtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7d0RBQ0Q7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO3VEQUNGO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQzswREFDQztJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7cURBQ0o7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDOzBEQUNDO0lBb0RsQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxREFDSTtJQUd4QjtRQURDLFFBQVE7MERBQ2dCO0lBR3pCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29FQUNtQjtJQUc5QztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztnRUFDZTtJQUkxQztRQURDLFFBQVEsQ0FBQyxDQUFDLHFCQUFjLENBQUMsQ0FBQzsyREFDVTtJQUVyQztRQURDLFFBQVEsQ0FBQyxDQUFDLHFCQUFjLENBQUMsQ0FBQzt5REFDUTtJQUduQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs2REFDWTtJQW5MdkIsZ0JBQWdCO1FBRHBDLE9BQU87T0FDYSxnQkFBZ0IsQ0FrckNwQztJQUFELHVCQUFDO0NBbHJDRCxBQWtyQ0MsQ0FsckM2QyxFQUFFLENBQUMsU0FBUyxHQWtyQ3pEO2tCQWxyQ29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGNtZCBmcm9tIFwiLi9TbG90MTAuQ21kXCI7XG5cbmltcG9ydCBDb25maWdzIGZyb20gXCIuLi8uLi9Mb2FkaW5nL3NyYy9Db25maWdzXCI7XG5pbXBvcnQgUG9wdXBTZWxlY3RMaW5lIGZyb20gXCIuL1Nsb3QxMC5Qb3B1cFNlbGVjdExpbmVcIjtcbmltcG9ydCBQb3B1cEJvbnVzIGZyb20gXCIuL1Nsb3QxMC5Qb3B1cEJvbnVzXCI7XG5pbXBvcnQgVHJpYWxSZXN1bHRzIGZyb20gXCIuL1Nsb3QxMC5UcmlhbFJlc3VsdHNcIjtcbmltcG9ydCBTbG90MTBMb2JieSBmcm9tIFwiLi9TbG90MTAuTG9iYnlcIjtcbmltcG9ydCBTbG90MTBJdGVtIGZyb20gXCIuL1Nsb3QxMC5JdGVtXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0FwcFwiO1xuaW1wb3J0IEJyb2FkY2FzdFJlY2VpdmVyIGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvY29tbW9uL0Jyb2FkY2FzdFJlY2VpdmVyXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uLy4uL0xvYmJ5L0xvYmJ5U2NyaXB0L1NjcmlwdC9jb21tb24vVHdlZW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vLi4vTG9iYnkvTG9iYnlTY3JpcHQvU2NyaXB0L2NvbW1vbi9VdGlsc1wiO1xuaW1wb3J0IEluUGFja2V0IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvTmV0d29yay5JblBhY2tldFwiO1xuaW1wb3J0IFNsb3ROZXR3b3JrQ2xpZW50IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvbmV0d29ya3MvU2xvdE5ldHdvcmtDbGllbnRcIjtcbmltcG9ydCBVSUl0ZW1JY29uU2xvdDI1IGZyb20gXCIuLi8uLi9Mb2JieS9Mb2JieVNjcmlwdC9TY3JpcHQvQmFzZVNsb3QyNS9JdGVtSWNvblNsb3QyNVwiO1xuaW1wb3J0IFNsb3QxMEl0ZW1TbG90IGZyb20gXCIuL1Nsb3QxMC5JdGVtXCI7XG5cbmNvbnN0IGVudW0gVFlQRV9XSU4ge1xuICAgIE1JU1MgPSAwLFxuICAgIFdJTiA9IDEsXG4gICAgQklHV0lOID0gMixcbiAgICBKQUNLUE9UID0gMyxcbiAgICBTVVBFUldJTiA9IDQsXG4gICAgQk9OVVMgPSA1XG59XG52YXIgTUFYX0NZQ0NMRV9TUElOID0gMjA7XG52YXIgRkFTVF9DWUNDTEVfU1BJTiA9IDEwO1xudmFyIEVSUk9SX0NZQ0NMRV9TUElOID0gNTA7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdDEwQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoU2xvdDEwTG9iYnkpXG4gICAgbVNsb3RMb2JieTogU2xvdDEwTG9iYnkgPSBudWxsO1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBub2RlQ29pbjogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIG1IZWlnaHRJdGVtOiBudW1iZXIgPSAxODA7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBtV2lkdGhJdGVtOiBudW1iZXIgPSAxODA7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICByZWVsczogY2MuTm9kZSA9IG51bGw7IC8vIHJlZWxcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIC8vIGl0ZW1UZW1wbGF0ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbGluZXNXaW46IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGljb25XaWxkQ29sdW1uczogY2MuTm9kZSA9IG51bGw7IC8vIG1hbmcgY2FjIGl0ZW0gZXhwYW5kIHdpbGRcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxKYWNrcG90OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEJldDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYmxMaW5lOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibFRvdGFsQmV0OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibENvaW46IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJsV2luTm93OiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxibEZyZWVTcGluQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQXV0bzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlKVxuICAgIHRvZ2dsZ2VNdXNpYzogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGUpXG4gICAgdG9nZ2xlQm9vc3Q6IGNjLlRvZ2dsZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLlRvZ2dsZSlcbiAgICAvLyB0b2dnbGVUcmlhbDogY2MuVG9nZ2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuU3BpbjogY2MuQnV0dG9uID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bkJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5QbGF5VHJ5OiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuUGxheVJlYWw6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICAvLyBidG5CZXRVcDogY2MuQnV0dG9uID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIC8vIGJ0bkJldERvd246IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBidG5MaW5lOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgdG9hc3Q6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcGFuZWxTZXR0aW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdFdpbkNhc2g6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGVmZmVjdEJpZ1dpbjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZWZmZWN0SmFja3BvdDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZWZmZWN0Qm9udXM6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KFBvcHVwU2VsZWN0TGluZSlcbiAgICBwb3B1cFNlbGVjdExpbmU6IFBvcHVwU2VsZWN0TGluZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KFBvcHVwQm9udXMpXG4gICAgcG9wdXBCb251czogUG9wdXBCb251cyA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZFNwaW5NaXM6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kSmFja3BvdDogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuQXVkaW9DbGlwIH0pXG4gICAgc291bmRTcGluOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kRW5kU3BpbjogY2MuQXVkaW9DbGlwID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5BdWRpb0NsaXAgfSlcbiAgICBzb3VuZEJnOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkF1ZGlvQ2xpcCB9KVxuICAgIHNvdW5kQmdCb251czogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIHB1YmxpYyBkYWlseUZyZWVTcGluID0gMDtcbiAgICBwcml2YXRlIHNwaW5EdXJhdGlvbiA9IDEuMjtcbiAgICBwcml2YXRlIGFkZFNwaW5EdXJhdGlvbiA9IDAuMztcbiAgICAvL3ByaXZhdGUgaXRlbUhlaWdodCA9IDA7XG4gICAgcHVibGljIGJldElkeCA9IC0xO1xuICAgIHByaXZhdGUgbGlzdEJldCA9IFsxMDAsIDEwMDAsIDEwMDAwXTtcbiAgICBwcml2YXRlIGxpc3RCZXRMYWJlbCA9IFtcIjEwMFwiLCBcIjEuMDAwXCIsIFwiMTAuMDAwXCJdO1xuICAgIHByaXZhdGUgYXJyTGluZVNlbGVjdCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjMsIDI0LCAyNV07XG4gICAgcHJpdmF0ZSBpc1NwaW5lZCA9IHRydWU7XG4gICAgcHJpdmF0ZSByZWFkb25seSB3aWxkSXRlbUlkID0gMjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1hcExpbmUgPSBbXG4gICAgICAgIFs1LCA2LCA3LCA4LCA5XSwvLzFcbiAgICAgICAgWzAsIDEsIDIsIDMsIDRdLC8vMlxuICAgICAgICBbMTAsIDExLCAxMiwgMTMsIDE0XSwvLzNcbiAgICAgICAgWzEwLCA2LCAyLCA4LCAxNF0sLy80XG4gICAgICAgIFswLCA2LCAxMiwgOCwgNF0sLy81XG4gICAgICAgIFs1LCAxLCAyLCAzLCA5XSwvLzZcbiAgICAgICAgWzUsIDExLCAxMiwgMTMsIDldLC8vN1xuICAgICAgICBbMCwgMSwgNywgMTMsIDE0XSwvLzhcbiAgICAgICAgWzEwLCAxMSwgNywgMywgNF0sLy85XG4gICAgICAgIFs1LCAxMSwgNywgMywgOV0sLy8xMFxuICAgICAgICBbNSwgMSwgNywgMTMsIDldLC8vMTFcbiAgICAgICAgWzAsIDYsIDcsIDgsIDRdLC8vMTJcbiAgICAgICAgWzEwLCA2LCA3LCA4LCAxNF0sLy8xM1xuICAgICAgICBbMCwgNiwgMiwgOCwgNF0sLy8xNFxuICAgICAgICBbMTAsIDYsIDEyLCA4LCAxNF0sLy8xNVxuICAgICAgICBbNSwgNiwgMiwgOCwgOV0sLy8xNlxuICAgICAgICBbNSwgNiwgMTIsIDgsIDldLC8vMTdcbiAgICAgICAgWzAsIDEsIDEyLCAzLCA0XSwvLzE4XG4gICAgICAgIFsxMCwgMTEsIDIsIDEzLCAxNF0sLy8xOVxuICAgICAgICBbMCwgMTEsIDEyLCAxMywgNF0sLy8yMFxuICAgICAgICBbMTAsIDEsIDIsIDMsIDE0XSwvLzIxXG4gICAgICAgIFs1LCAxLCAxMiwgMywgOV0sLy8yMlxuICAgICAgICBbNSwgMTEsIDIsIDEzLCA5XSwvLzIzXG4gICAgICAgIFswLCAxMSwgMiwgMTMsIDRdLC8vMjRcbiAgICAgICAgWzEwLCAxLCAxMiwgMywgMTRdLy8yNVxuICAgIF07XG4gICAgcHJpdmF0ZSBsYXN0U3BpblJlczogY21kLlJlY2VpdmVQbGF5ID0gbnVsbDtcbiAgICBwcml2YXRlIGNvbHVtbnNXaWxkID0gW107XG5cblxuICAgIHB1YmxpYyBtSXNUcmlhbCA9IGZhbHNlO1xuXG5cbiAgICAvL25ldyBcblxuICAgIHByaXZhdGUgaXNGYXN0Q3VycmVudCA9IGZhbHNlO1xuICAgIHByaXZhdGUgaXNGYXN0ID0gZmFsc2U7XG5cbiAgICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICAgIGFyclJlZWw6IGNjLk5vZGVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5XG4gICAgZGlzdGFuY2VSZWVsOiBudW1iZXIgPSAwO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNwcml0ZUZyYW1lQmx1ckFycjogY2MuU3ByaXRlRnJhbWVbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgaWNvblNwcml0ZUZyYW1lQXJyOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cblxuICAgIEBwcm9wZXJ0eShbU2xvdDEwSXRlbVNsb3RdKVxuICAgIGFyclVJSXRlbUljb246IFNsb3QxMEl0ZW1TbG90W10gPSBbXTtcbiAgICBAcHJvcGVydHkoW1Nsb3QxMEl0ZW1TbG90XSlcbiAgICBhcnJSZWFsSXRlbTogU2xvdDEwSXRlbVNsb3RbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KFtzcC5Ta2VsZXRvbkRhdGFdKVxuICAgIGFyclNrZWxldG9uSWNvbjogc3AuU2tlbGV0b25EYXRhW10gPSBbXTtcblxuXG4gICAgcHVibGljIG51bWJlclNwaW5SZWVsID0gbnVsbDtcbiAgICBwdWJsaWMgaXNIYXZlUmVzdWx0U3BpbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBkYXRhUmVzdWx0ID0gbnVsbDtcbiAgICBwdWJsaWMgbXVzaWNTbG90U3RhdGUgPSBudWxsO1xuICAgIHB1YmxpYyBzb3VuZFNsb3RTdGF0ZSA9IG51bGw7XG4gICAgcHVibGljIHJlbW90ZU11c2ljQmFja2dyb3VuZCA9IG51bGw7XG4gICAgbXV0aXBsZUpwTm9kZSA9bnVsbDtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gMDtcbiAgICAgICAgdGhpcy5zb3VuZEluaXQoKTtcbiAgICAgICAgdGhpcy5yYW5kb21JY29uTGlzdCgpO1xuICAgICAgICAvL2Rhbmcga3kga2hpIG1hdCBrZXQgbm9pIHR1IGRvbmcgYmFja1xuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZE9uQ2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgLy90aGlzLmFjdEJhY2soKTtcbiAgICAgICAgICAgIHRoaXMubVNsb3RMb2JieS5vbkJ0bkJhY2soKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuaWNvbldpbGRDb2x1bW5zLnpJbmRleCA9IDM7XG4gICAgICAgIC8vbGlzdGVubmVyIGNsaWVudCAtIHNlcnZlclxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLmFkZExpc3RlbmVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgaW5wYWNrZXQgPSBuZXcgSW5QYWNrZXQoZGF0YSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucGFja2V0LmdldENtZElkKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLkZSRUVfREFJX0xZOlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubUlzVHJpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gbmV3IGNtZC5SZWNlaXZlRnJlZURhaUx5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGFpbHlGcmVlU3BpbiA9IHJlcy5mcmVlU3BpbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kYWlseUZyZWVTcGluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50LnN0cmluZyA9IHRoaXMuZGFpbHlGcmVlU3BpbiArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYmxGcmVlU3BpbkNvdW50Lm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY21kLkNvZGUuVVBEQVRFX1BPVDpcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IG5ldyBjbWQuUmVjZWl2ZVVwZGF0ZVBvdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxKYWNrcG90LCByZXMuamFja3BvdCwgMC4zKTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlVQREFURV9KQUNLUE9UX1NMT1RTOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1TbG90TG9iYnkub25VcGRhdGVKYWNrcG90KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNtZC5Db2RlLlBMQVk6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXMgPSBuZXcgY21kLlJlY2VpdmVQbGF5KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHQocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZENoZWNrKG5ldyBjbWQuUmVxU3ViY3JpYmVIYWxsU2xvdCgpKTtcblxuICAgICAgICAvLy8vICBjYy5sb2coXCJTbG90M0NvbnRyb2xsZXIgc3RhcnRlZFwiKTtcblxuICAgICAgICAvL1Nsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRTdWJjcmliZSh0aGlzLmJldElkeCkpO1xuICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgICAgdGhpcy50b2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhbmVsU2V0dGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wb3B1cFNlbGVjdExpbmUub25TZWxlY3RlZENoYW5nZWQgPSAobGluZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXJyTGluZVNlbGVjdCA9IGxpbmVzO1xuICAgICAgICAgICAgdGhpcy5sYmxMaW5lLnN0cmluZyA9IHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsVG90YWxCZXQsIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdLCAwLjMsIChuKSA9PiB7IHJldHVybiB0aGlzLm1vbmV5VG9LKG4pIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJsVG90YWxCZXQuc3RyaW5nID0gKHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKS50b1N0cmluZygpO1xuXG5cbiAgICAgICAgQnJvYWRjYXN0UmVjZWl2ZXIucmVnaXN0ZXIoQnJvYWRjYXN0UmVjZWl2ZXIuVVNFUl9VUERBVEVfQ09JTiwgKCkgPT4ge1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxDb2luLCBDb25maWdzLkxvZ2luLkNvaW4sIDAuMyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuXG4gICAgICAgIEFwcC5pbnN0YW5jZS5zaG93RXJyTG9hZGluZyhcIsSQYW5nIGvhur90IG7hu5FpIHThu5tpIHNlcnZlci4uLlwiKTtcbiAgICAgICAgU2xvdE5ldHdvcmtDbGllbnQuZ2V0SW5zdGFuY2UoKS5jaGVja0Nvbm5lY3QoKCkgPT4ge1xuICAgICAgICAgICAgQXBwLmluc3RhbmNlLnNob3dMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vLy8gIGNjLmxvZyhcIlNsb3QzQ29udHJvbGxlciBzdGFydGVkXCIpO1xuXG4gICAgICAgIHRoaXMubVNsb3RMb2JieS5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLm1TbG90TG9iYnkubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ0blBsYXlSZWFsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnRuUGxheVRyeS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vdGhpcy5pbml0TXV0aXBsZUpQTm9kZSgpO1xuICAgIH1cbiAgICAgaW5pdE11dGlwbGVKUE5vZGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tdXRpcGxlSnBOb2RlKSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKFwiTG9iYnlcIikubG9hZChcInByZWZhYnMvTXV0aXBsZUphY2twb3RQclwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uIChmaW5pc2gsIHRvdGFsLCBpdGVtKSB7XG4gICAgICAgICAgICB9LCAoZXJyMSwgcHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyMSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICBjYy5sb2coXCJlcnJyIGxvYWQgZ2FtZSBUSUVOTEVOOlwiLCBlcnIxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpLmdldENvbXBvbmVudChcIk11dGlwbGVKYWNrcG90XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11dGlwbGVKcE5vZGUubm9kZS5wYXJlbnQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXV0aXBsZUpwTm9kZS5zZXRJbmZvKFwiVEhFVEhBT1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uQnRuU291bmRUb3VjaEJvbnVzKCkge1xuXG4gICAgfVxuXG4gICAgb25CdG5Tb3VuZFN1bWFyeSgpIHtcblxuICAgIH1cblxuXG4gICAgZ2V0U3ByaXRlRnJhbWVJY29uQmx1cihpbmRleEljb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBzZWxmLmljb25TcHJpdGVGcmFtZUJsdXJBcnJbaW5kZXhJY29uXTtcbiAgICB9XG5cbiAgICBnZXRTcHJpdGVGcmFtZUljb24oaW5kZXhJY29uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICByZXR1cm4gc2VsZi5pY29uU3ByaXRlRnJhbWVBcnJbaW5kZXhJY29uXTtcbiAgICB9XG5cbiAgICBnZXRTcGluZUljb24oaW5kZXhJY29uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICByZXR1cm4gc2VsZi5hcnJTa2VsZXRvbkljb25baW5kZXhJY29uXTtcbiAgICB9XG5cbiAgICByYW5kb21JY29uTGlzdCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuYXJyVUlJdGVtSWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaTtcbiAgICAgICAgICAgIHZhciBpdGVtSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc2VsZi5pY29uU3ByaXRlRnJhbWVBcnIubGVuZ3RoKSk7XG4gICAgICAgICAgICBzZWxmLmFyclVJSXRlbUljb25baV0uaW5pdChpdGVtSWQsIGluZGV4LCBzZWxmKTtcbiAgICAgICAgICAgIHRoaXMuYXJyVUlJdGVtSWNvbltpbmRleF0uY2hhbmdlU3BpbmVJY29uKGl0ZW1JZClcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uSm9pblJvb20oKSB7XG4gICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IHRoaXMubGlzdEJldExhYmVsW3RoaXMuYmV0SWR4XTtcbiAgICAgICAgbGV0IHRvdGFsYmV0ID0gKHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGggKiB0aGlzLmxpc3RCZXRbdGhpcy5iZXRJZHhdKTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdG90YWxiZXQsIDAuMyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dUb2FzdChtc2c6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRvYXN0LmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IG1zZztcbiAgICAgICAgdGhpcy50b2FzdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLnRvYXN0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMudG9hc3QucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2FzdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vbmV5VG9LKG1vbmV5OiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvLyBpZiAobW9uZXkgPCAxMDAwMCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuIG1vbmV5LnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gbW9uZXkgPSBwYXJzZUludCgobW9uZXkgLyAxMDAwKS50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIG1vbmV5LnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRFbmFibGVkQWxsQnV0dG9ucyhlbmFibGVkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYnRuU3Bpbi5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0blNwaW4ubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0bkJhY2suaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgLy8gdGhpcy5idG5CZXRVcC5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICAvLyB0aGlzLmJ0bkJldERvd24uaW50ZXJhY3RhYmxlID0gZW5hYmxlZDtcbiAgICAgICAgdGhpcy5idG5MaW5lLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG4gICAgICAgIHRoaXMuYnRuUGxheVRyeS5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgICAgICB0aGlzLmJ0blBsYXlSZWFsLmludGVyYWN0YWJsZSA9IGVuYWJsZWQ7XG4gICAgICAgIC8vdGhpcy50b2dnbGVUcmlhbC5pbnRlcmFjdGFibGUgPSBlbmFibGVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcEFsbEVmZmVjdHMoKSB7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RvcFNob3dMaW5lc1dpbigpIHtcbiAgICAgICAgdGhpcy5saW5lc1dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGluZXNXaW4uY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmxpbmVzV2luLmNoaWxkcmVuW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0b3BBbGxJdGVtRWZmZWN0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wQWxsSXRlbUVmZmVjdCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV0uY2hpbGRyZW47IC8vID8/P1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KGNoaWxkcmVuW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bal0uc2NhbGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3BpbigpIHtcbiAgICAgICAgLy8gIGNjLmxvZyhcInNwaW4gY2FpIGNvaVwiKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3BpbmVkKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsoZmFsc2UpO1xuICAgICAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgICAgIGlmICghaXNUcmFpbCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kYWlseUZyZWVTcGluID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGFpbHlGcmVlU3Bpbi0tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhaWx5RnJlZVNwaW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQuc3RyaW5nID0gdGhpcy5kYWlseUZyZWVTcGluICsgXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29uZmlncy5Mb2dpbi5Db2luIDwgdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSAqIHRoaXMuYXJyTGluZVNlbGVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgQXBwLmluc3RhbmNlLmFsZXJ0RGlhbG9nLnNob3dNc2coQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKFwidHh0X25vdF9lbm91Z2hcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1NwaW5lZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0cygpO1xuICAgICAgICAgICAgdGhpcy5zdG9wU2hvd0xpbmVzV2luKCk7XG4gICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKGZhbHNlKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IGNtZC5TZW5kUGxheSh0aGlzLmFyckxpbmVTZWxlY3QudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzU3BpbmVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3RzKCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BTaG93TGluZXNXaW4oKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RW5hYmxlZEFsbEJ1dHRvbnMoZmFsc2UpO1xuICAgICAgICAgICAgdmFyIHJJZHggPSBVdGlscy5yYW5kb21SYW5nZUludCgwLCBUcmlhbFJlc3VsdHMucmVzdWx0cy5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5vblNwaW5SZXN1bHQoVHJpYWxSZXN1bHRzLnJlc3VsdHNbcklkeF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdG9wU3BpbigpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2hvd0xpbmVXaW5zKCkge1xuICAgICAgICB0aGlzLmlzU3BpbmVkID0gdHJ1ZTtcbiAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxXaW5Ob3csIHRoaXMubGFzdFNwaW5SZXMucHJpemUsIDAuMyk7XG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKCFpc1RyYWlsKSBCcm9hZGNhc3RSZWNlaXZlci5zZW5kKEJyb2FkY2FzdFJlY2VpdmVyLlVTRVJfVVBEQVRFX0NPSU4pO1xuICAgICAgICBpZiAoIXRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgJiYgIXRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkKSB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuXG4gICAgICAgIHRoaXMubGluZXNXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgbGV0IGxpbmVzV2luID0gdGhpcy5sYXN0U3BpblJlcy5saW5lc1dpbi5zcGxpdChcIixcIik7XG4gICAgICAgIGxpbmVzV2luID0gVXRpbHMucmVtb3ZlRHVwcyhsaW5lc1dpbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNXaW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChsaW5lc1dpbltpXSA9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgIGxpbmVzV2luLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1hdHJpeCA9IHRoaXMubGFzdFNwaW5SZXMubWF0cml4LnNwbGl0KFwiLFwiKTtcbiAgICAgICAgbGV0IGxpbmVzV2luQ2hpbGRyZW4gPSB0aGlzLmxpbmVzV2luLmNoaWxkcmVuO1xuICAgICAgICBsZXQgcm9sbHMgPSB0aGlzLnJlZWxzLmNoaWxkcmVuO1xuICAgICAgICBsZXQgYWN0aW9ucyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzV2luQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmVzV2luQ2hpbGRyZW5baV0uYWN0aXZlID0gbGluZXNXaW4uaW5kZXhPZihcIlwiICsgKGkgKyAxKSkgPj0gMDs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGFzdFNwaW5SZXMucHJpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLmxpbmVzV2luLnpJbmRleCA9IDI7XG4gICAgICAgICAgICB0aGlzLnJlZWxzLnpJbmRleCA9IDE7XG4gICAgICAgICAgICB0aGlzLnNob3dXaW5DYXNoKHRoaXMubGFzdFNwaW5SZXMucHJpemUpO1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgxLjUpKTtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc1dpbkNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmVzV2luQ2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjMpKTtcbiAgICAgICAgICAgIGlmICghdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzV2luLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaW5lSWR4ID0gcGFyc2VJbnQobGluZXNXaW5baV0pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1dpbkNoaWxkcmVuW2xpbmVJZHhdO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gIGNjLmxvZyhcIj09PT09PT09PT09PT09PT06IFwiICsgbGluZUlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbmVzV2luLnpJbmRleCA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZWxzLnpJbmRleCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbUxpbmUgPSB0aGlzLm1hcExpbmVbbGluZUlkeF07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnRJdGVtV2luID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXNydEl0ZW1JZCA9IG1hdHJpeFttTGluZVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG1MaW5lLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1JZCA9IG1hdHJpeFttTGluZVtqXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpc3J0SXRlbUlkID09IGl0ZW1JZCB8fCBwYXJzZUludChpdGVtSWQpID09IHRoaXMud2lsZEl0ZW1JZCB8fCB0aGlzLmNvbHVtbnNXaWxkLmluZGV4T2YoaikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyAgY2MubG9nKFwiPT1cIiArIGl0ZW1JZCArIFwiIGo6XCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRJdGVtV2luKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFyckl0ZW0gPSB0aGlzLmdldEl0ZW1XaW5JbkxpbmUobGluZUlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXJySWRPZkl0ZW0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZFdpbiA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJySXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJySWRPZkl0ZW0ucHVzaChpdGVtLml0ZW1JZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyckl0ZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkV2luID0gdGhpcy5nZXRJdGVtSWRXaW5JbkxpbmUoYXJySWRPZkl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLml0ZW1JZCA9PSBpZFdpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oaXRlbS5ub2RlKS5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkudG8oMC4yLCB7IHNjYWxlOiBpdGVtLm5vZGUuc2NhbGUgKyAwLjEgfSkudG8oMC4yLCB7IHNjYWxlOiBpdGVtLm5vZGUuc2NhbGUgfSkpLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tTaG93U3ByaXRlT3JTcGluZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5kZWxheVRpbWUoMSkpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcEFsbEl0ZW1FZmZlY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuZGVsYXlUaW1lKDAuMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9ucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2ZpeGVkIGNhbGwgY2Muc2VxdWVuY2UuYXBwbHlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9XG4gICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFsbEl0ZW1Ub0RhcmsoZmFsc2UpO1xuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkIHx8IHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxpbmVzV2luLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZS5hcHBseShudWxsLCBhY3Rpb25zKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93Q29pbnMocHJpemUpe1xuICAgICAgICB2YXIgbnVtYmVyID0gcHJpemUvMjAwMDA7XG4gICAgICAgIGlmKG51bWJlciA8PSAxMCkgbnVtYmVyID0gMTA7XG4gICAgICAgIGVsc2UgaWYobnVtYmVyID49IDMwKSBudW1iZXIgPSAzMDtcbiAgICAgICAgQXBwLmluc3RhbmNlLnNob3dDb2lucyhudW1iZXIsdGhpcy5sYmxXaW5Ob3cubm9kZSx0aGlzLm5vZGVDb2luKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dXaW5DYXNoKGNhc2g6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNob3dDb2lucyhjYXNoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdFdpbkNhc2guZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIGxhYmVsLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLmVmZmVjdFdpbkNhc2gub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuZWZmZWN0V2luQ2FzaC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICBjYy5mYWRlSW4oMC4zKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY2FzaCwgMC41KTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuNSksXG4gICAgICAgICAgICBjYy5mYWRlT3V0KDAuMyksXG4gICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZmZlY3RXaW5DYXNoLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RWZmZWN0QmlnV2luKGNhc2g6IG51bWJlciwgY2I6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5lZmZlY3RCaWdXaW4uZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIGxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lZmZlY3RCaWdXaW4ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKGxhYmVsLCBjYXNoLCAxKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0QmlnV2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChjYiAhPSBudWxsKSBjYigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzaG93RWZmZWN0SmFja3BvdChjYXNoOiBudW1iZXIsIGNiOiAoKSA9PiB2b2lkID0gbnVsbCkge1xuICAgICAgICB0aGlzLmVmZmVjdEphY2twb3Quc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuZWZmZWN0SmFja3BvdC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLmVmZmVjdEphY2twb3QuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCk7XG4gICAgICAgIGxhYmVsLm5vZGUuYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5lZmZlY3RKYWNrcG90LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxKSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyhsYWJlbCwgY2FzaCwgMSk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSg2KSxcbiAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVmZmVjdEphY2twb3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNob3dFZmZlY3RCb251cyhjYjogKCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmVmZmVjdEJvbnVzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuZWZmZWN0Qm9udXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lZmZlY3RCb251cy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJhbmltYXRpb25cIiwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuZWZmZWN0Qm9udXMucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMpLFxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZWZmZWN0Qm9udXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNiICE9IG51bGwpIGNiKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdENsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRFbmRTcGluLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgYmVnaW5TcGluUmVlbChpbmRleFJlZWwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmlzRmFzdEN1cnJlbnQgPSBzZWxmLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZDtcbiAgICAgICAgc2VsZi5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID0gMDtcblxuICAgICAgICBjYy5Ud2Vlbi5zdG9wQWxsQnlUYXJnZXQoc2VsZi5hcnJSZWVsW2luZGV4UmVlbF0pO1xuICAgICAgICBjYy50d2VlbihzZWxmLmFyclJlZWxbaW5kZXhSZWVsXSlcbiAgICAgICAgICAgIC5kZWxheShpbmRleFJlZWwgKiAwLjIpXG4gICAgICAgICAgICAudG8oMC4xLCB7IHBvc2l0aW9uOiBjYy52MyhzZWxmLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCA3MCwgMCkgfSwgeyBlYXNpbmc6IFwibGluZWFyXCIgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmxvb3BTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdGFydCgpO1xuICAgIH1cblxuICAgIGxvb3BTcGluUmVlbChpbmRleFJlZWwpIHtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLmFyclJlZWxbaW5kZXhSZWVsXSlcbiAgICAgICAgICAgIC50bygwLjA2LCB7IHBvc2l0aW9uOiBjYy52Myh0aGlzLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbi54LCAtdGhpcy5kaXN0YW5jZVJlZWwsIDApIH0sIHsgZWFzaW5nOiBcImxpbmVhclwiIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzTG9vcFNwaW5SZWVsKGluZGV4UmVlbCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0xvb3BTcGluUmVlbChpbmRleFJlZWwpIHtcbiAgICAgICAgdGhpcy5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdICs9IDE7XG4gICAgICAgIGZvciAodmFyIGkgPSA0OyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaW5kZXhSZWVsICsgKGkgKiA1KTtcblxuICAgICAgICAgICAgdmFyIGluZGV4Um93ID0gTWF0aC5mbG9vcihpbmRleCAvIDUpO1xuICAgICAgICAgICAgdmFyIGl0ZW1JZFRtcCA9IDA7XG4gICAgICAgICAgICBpZiAoaW5kZXhSb3cgPT0gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1JZFRtcCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuaWNvblNwcml0ZUZyYW1lQmx1ckFyci5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbUlkVG1wID0gdGhpcy5hcnJVSUl0ZW1JY29uW2luZGV4IC0gNV0uaXRlbUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmFyclVJSXRlbUljb25baW5kZXhdO1xuICAgICAgICAgICAgaXRlbS5jaGFuZ2VTcHJpdGVCbHVyQnlJdGVtSWQoaXRlbUlkVG1wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFyclJlZWxbaW5kZXhSZWVsXS5wb3NpdGlvbiA9IGNjLnYzKHRoaXMuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIDAsIDApO1xuICAgICAgICBpZiAodGhpcy5pc0hhdmVSZXN1bHRTcGluKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Zhc3RDdXJyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubnVtYmVyU3BpblJlZWxbaW5kZXhSZWVsXSA+PSBNQVhfQ1lDQ0xFX1NQSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID49IEZBU1RfQ1lDQ0xFX1NQSU4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5udW1iZXJTcGluUmVlbFtpbmRleFJlZWxdID49IEVSUk9SX0NZQ0NMRV9TUElOKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRTcGluUmVlbChpbmRleFJlZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb29wU3BpblJlZWwoaW5kZXhSZWVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHNob3dXaWxkQmlnKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbi5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgICAgICBpZiAoc2VsZi5kYXRhUmVzdWx0ID09IG51bGwpIHJldHVybjtcbiAgICAgICAgdmFyIHNsb3REYXRhcyA9IHNlbGYuZGF0YVJlc3VsdC5tYXRyaXguc3BsaXQoJywnKTtcbiAgICAgICAgdmFyIGlzV2lsZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsb3REYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNsb3REYXRhc1tpXSA9PSBzZWxmLndpbGRJdGVtSWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaWxkID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzV2lsZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpbmRleFJvdyA9IE1hdGguZmxvb3IoaSAlIDUpO1xuICAgICAgICAgICAgICAgIHNlbGYuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2luZGV4Um93XS5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgY2MuVHdlZW4uc3RvcEFsbEJ5VGFyZ2V0KHNlbGYuaWNvbldpbGRDb2x1bW5zLmNoaWxkcmVuW2luZGV4Um93XSk7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oc2VsZi5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5baW5kZXhSb3ddKVxuICAgICAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltpbmRleFJvd10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZWxmLmljb25XaWxkQ29sdW1ucy5jaGlsZHJlbltpbmRleFJvd10uZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuZFNwaW5SZWVsKGluZGV4UmVlbCkge1xuICAgICAgICBpZiAodGhpcy5kYXRhUmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAzOyBpID49IDE7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4UmVlbCArIChpICogNSk7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1JZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLmljb25TcHJpdGVGcmFtZUFyci5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFyclVJSXRlbUljb25baW5kZXhdLmNoYW5nZVNwaW5lSWNvbihpdGVtSWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMuZGF0YVJlc3VsdC5tYXRyaXguc3BsaXQoJywnKTtcbiAgICAgICAgdmFyIHJvbGwgPSB0aGlzLnJlZWxzLmNoaWxkcmVuW2luZGV4UmVlbF07XG4gICAgICAgIHRoaXMuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uID0gY2MudjModGhpcy5hcnJSZWVsW2luZGV4UmVlbF0ucG9zaXRpb24ueCwgdGhpcy5kaXN0YW5jZVJlZWwsIDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMzsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGluZGV4UmVlbCArIChpICogNSk7XG4gICAgICAgICAgICB0aGlzLmFyclVJSXRlbUljb25baW5kZXhdLmNoYW5nZVNwaW5lSWNvbihtYXRyaXhbaW5kZXggLSA1XSlcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLmFyclJlZWxbaW5kZXhSZWVsXSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgcG9zaXRpb246IGNjLnYzKHRoaXMuYXJyUmVlbFtpbmRleFJlZWxdLnBvc2l0aW9uLngsIDAsIDApIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kU3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhSZWVsID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93V2lsZEJpZygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwaW5lZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG5cblxuXG4gICAgcHJpdmF0ZSBzcGluZWQoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFNwaW5SZXMuZnJlZVNwaW4pIHtcbiAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5zdHJpbmcgPSB0aGlzLmxhc3RTcGluUmVzLmZyZWVTcGluLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VjY2Vzc1Jlc3VsdCA9IFswLCAxLCAzLCA1LCA2XTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmxhc3RTcGluUmVzLnJlc3VsdCkge1xuICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5NSVNTOi8vayBhblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3Bpbk1pcywgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5XSU46Ly8gdGhhbmcgdGh1b25nXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluV2luLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRZUEVfV0lOLkJJR1dJTjovLyB0aGFuZyBsb25cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJpZ1dpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RCaWdXaW4odGhpcy5sYXN0U3BpblJlcy5wcml6ZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dMaW5lV2lucygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBUWVBFX1dJTi5KQUNLUE9UOiBjYXNlIFRZUEVfV0lOLlNVUEVSV0lOOi8vamFja3BvdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSmFja3BvdCwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RKYWNrcG90KHRoaXMubGFzdFNwaW5SZXMucHJpemUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjovL3RoYW5nIHNpZXUgbG9uXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCaWdXaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RWZmZWN0QmlnV2luKHRoaXMubGFzdFNwaW5SZXMucHJpemUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbnMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVFlQRV9XSU4uQk9OVVM6Ly9ib251c1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFZmZlY3RCb251cygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm11c2ljU2xvdFN0YXRlID09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnQm9udXMsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdXBCb251cy5zaG93Qm9udXModGhpcy5tSXNUcmlhbCA/IDEwMCA6IHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIHRoaXMuZGF0YVJlc3VsdC5oYWlTYW8sIHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW5zKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgb25TcGluUmVzdWx0KHJlczogY21kLlJlY2VpdmVQbGF5IHwgYW55KSB7XG5cbiAgICAgICAgdGhpcy5zdG9wU3BpbigpO1xuICAgICAgICAvLyAgY2MubG9nKFwib25TcGluUmVzdWx0OlwiICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgIC8vIHJlcyA9IEpTT04ucGFyc2UoJ3tcIl9wb3NcIjo3OCxcIl9kYXRhXCI6e1wiMFwiOjEsXCIxXCI6MTEsXCIyXCI6MTg1LFwiM1wiOjAsXCI0XCI6MCxcIjVcIjowLFwiNlwiOjAsXCI3XCI6MCxcIjhcIjowLFwiOVwiOjAsXCIxMFwiOjYsXCIxMVwiOjEyNixcIjEyXCI6MSxcIjEzXCI6MCxcIjE0XCI6MjksXCIxNVwiOjUyLFwiMTZcIjo0NCxcIjE3XCI6NDksXCIxOFwiOjQ0LFwiMTlcIjo1NSxcIjIwXCI6NDQsXCIyMVwiOjUxLFwiMjJcIjo0NCxcIjIzXCI6NDgsXCIyNFwiOjQ0LFwiMjVcIjo1NixcIjI2XCI6NDQsXCIyN1wiOjUzLFwiMjhcIjo0NCxcIjI5XCI6NTEsXCIzMFwiOjQ0LFwiMzFcIjo1MixcIjMyXCI6NDQsXCIzM1wiOjUwLFwiMzRcIjo0NCxcIjM1XCI6NTEsXCIzNlwiOjQ0LFwiMzdcIjo1MSxcIjM4XCI6NDQsXCIzOVwiOjU0LFwiNDBcIjo0NCxcIjQxXCI6NTEsXCI0MlwiOjQ0LFwiNDNcIjo1NSxcIjQ0XCI6MCxcIjQ1XCI6OSxcIjQ2XCI6NTEsXCI0N1wiOjQ0LFwiNDhcIjo1NyxcIjQ5XCI6NDQsXCI1MFwiOjQ5LFwiNTFcIjo0OCxcIjUyXCI6NDQsXCI1M1wiOjQ5LFwiNTRcIjo1NyxcIjU1XCI6MCxcIjU2XCI6MCxcIjU3XCI6MCxcIjU4XCI6MCxcIjU5XCI6MCxcIjYwXCI6MCxcIjYxXCI6MCxcIjYyXCI6MCxcIjYzXCI6MTUsXCI2NFwiOjYwLFwiNjVcIjowLFwiNjZcIjowLFwiNjdcIjowLFwiNjhcIjowLFwiNjlcIjoyLFwiNzBcIjo3OCxcIjcxXCI6NzYsXCI3MlwiOjM2fSxcIl9sZW5ndGhcIjo3MyxcIl9jb250cm9sbGVySWRcIjoxLFwiX2NtZElkXCI6MzAwMSxcIl9lcnJvclwiOjAsXCJyZWZcIjoxNjYyLFwicmVzdWx0XCI6MSxcIm1hdHJpeFwiOlwiNCwxLDcsMywwLDgsNSwzLDQsMiwzLDMsNiwzLDdcIixcImxpbmVzV2luXCI6XCIzLDksMTAsMTlcIixcImhhaVNhb1wiOlwiXCIsXCJwcml6ZVwiOjM5MDAsXCJjdXJyZW50TW9uZXlcIjozODY4NTczMixcImlzRnJlZVwiOmZhbHNlLFwiaXRlbXNXaWxkXCI6XCJcIn0nKTtcbiAgICAgICAgdmFyIHN1Y2Nlc3NSZXN1bHQgPSBbMCwgMSwgMiwgMywgNCwgNSwgNl07XG4gICAgICAgIC8vcmVzLnJlc3VsdCA9PSA1IC8vYm9udXNcbiAgICAgICAgLy9yZXMucmVzdWx0ID09IDAgLy9raG9uZyBhblxuICAgICAgICAvL3Jlcy5yZXN1bHQgPT0gMSAvL3RoYW5nIHRodW9uZ1xuICAgICAgICAvL3Jlcy5yZXN1bHQgPT0gMiAvL3RoYW5nIGxvblxuICAgICAgICAvL3Jlcy5yZXN1bHQgPT0gMyAvL25vIGh1XG4gICAgICAgIC8vcmVzLnJlc3VsdCA9PSA2IC8vdGhhbmcgY3VjIGxvblxuICAgICAgICBpZiAoc3VjY2Vzc1Jlc3VsdC5pbmRleE9mKHJlcy5yZXN1bHQpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5pc1NwaW5lZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICB0aGlzLnNldEVuYWJsZWRBbGxCdXR0b25zKHRydWUpO1xuICAgICAgICAgICAgc3dpdGNoIChyZXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMDI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X25vdF9lbm91Z2gnKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Vua25vd25fZXJyb3IxJykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RTcGluUmVzID0gcmVzO1xuICAgICAgICB0aGlzLmNvbHVtbnNXaWxkLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgICAgICBpZiAoIWlzVHJhaWwgJiYgIXRoaXMubGFzdFNwaW5SZXMuaXNGcmVlKSB7XG4gICAgICAgICAgICBsZXQgY3VyTW9uZXkgPSBDb25maWdzLkxvZ2luLkNvaW4gLSB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XTtcbiAgICAgICAgICAgIFR3ZWVuLm51bWJlclRvKHRoaXMubGJsQ29pbiwgY3VyTW9uZXksIDAuMyk7XG4gICAgICAgICAgICBDb25maWdzLkxvZ2luLkNvaW4gPSByZXMuY3VycmVudE1vbmV5O1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLm51bWJlclNwaW5SZWVsID0gbmV3IEFycmF5KHRoaXMuYXJyUmVlbC5sZW5ndGgpO1xuICAgICAgICB0aGlzLmRhdGFSZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMuaXNIYXZlUmVzdWx0U3BpbiA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmFyclJlZWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5TcGluUmVlbChpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG1hdHJpeCA9IHJlcy5tYXRyaXguc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgdGltZVNjYWxlID0gdGhpcy50b2dnbGVCb29zdC5pc0NoZWNrZWQgPyAwLjUgOiAxO1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvbGwgPSB0aGlzLnJlZWxzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IHN0ZXAxUG9zID0gdGhpcy5tSGVpZ2h0SXRlbSAqIDAuMztcbiAgICAgICAgICAgIGxldCBzdGVwMlBvcyA9IC10aGlzLm1IZWlnaHRJdGVtICogcm9sbC5jaGlsZHJlbkNvdW50ICsgdGhpcy5tSGVpZ2h0SXRlbSAqIDMgLSB0aGlzLm1IZWlnaHRJdGVtICogMC4zO1xuICAgICAgICAgICAgbGV0IHN0ZXAzUG9zID0gLXRoaXMubUhlaWdodEl0ZW0gKiByb2xsLmNoaWxkcmVuQ291bnQgKyB0aGlzLm1IZWlnaHRJdGVtICogMztcbiAgICAgICAgICAgIHJvbGwucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjIgKiBpICogdGltZVNjYWxlKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4yICogdGltZVNjYWxlLCBjYy52Mihyb2xsLnBvc2l0aW9uLngsIHN0ZXAxUG9zKSkuZWFzaW5nKGNjLmVhc2VRdWFkcmF0aWNBY3Rpb25PdXQoKSksXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKCh0aGlzLnNwaW5EdXJhdGlvbiArIHRoaXMuYWRkU3BpbkR1cmF0aW9uICogaSkgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwucG9zaXRpb24ueCwgc3RlcDJQb3MpKS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluT3V0KCkpLFxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjIgKiB0aW1lU2NhbGUsIGNjLnYyKHJvbGwucG9zaXRpb24ueCwgc3RlcDNQb3MpKS5lYXNpbmcoY2MuZWFzZVF1YWRyYXRpY0FjdGlvbkluKCkpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm9sbC5zZXRQb3NpdGlvbihjYy52Mihyb2xsLnBvc2l0aW9uLngsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kRW5kU3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZmluZCBjb2x1bW5zIHdpbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbWF0cml4Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KG1hdHJpeFtqXSkgPT0gdGhpcy53aWxkSXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjID0gaiAlIDU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnNXaWxkLmluZGV4T2YoYykgPT0gLTEpIHRoaXMuY29sdW1uc1dpbGQucHVzaChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVwbGFjZSB3aWxkIGl0ZW1zIGluIGNvbHVtbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5jb2x1bW5zV2lsZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjID0gdGhpcy5jb2x1bW5zV2lsZFtqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLnJlZWxzLmNoaWxkcmVuW2NdLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzJdLmdldENvbXBvbmVudChTbG90MTBJdGVtKS5zZXRJZCh0aGlzLndpbGRJdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzFdLmdldENvbXBvbmVudChTbG90MTBJdGVtKS5zZXRJZCh0aGlzLndpbGRJdGVtSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBdLmdldENvbXBvbmVudChTbG90MTBJdGVtKS5zZXRJZCh0aGlzLndpbGRJdGVtSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hpbGRyZW5bMl0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNwckZyYW1lSXRlbXNbdGhpcy53aWxkSXRlbUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGlsZHJlblsxXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1t0aGlzLndpbGRJdGVtSWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3RoaXMud2lsZEl0ZW1JZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5bY10uZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIikuc2V0QW5pbWF0aW9uKDAsIFwiYW5pbWF0aW9uXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbHVtbnNXaWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xsLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuNiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pY29uV2lsZENvbHVtbnMuY2hpbGRyZW5baV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGluZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApKTtcblxuICAgICAgICAgICAgLy9yb29sID0gcmVlbFxuICAgICAgICAgICAgcm9sbC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKCgwLjQ3ICsgMC4yICogaSkgKiB0aW1lU2NhbGUpLFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtTm9kZSA9IHJvbGwuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RJdGVtWzJdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFtpXSldO1xuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0SXRlbVsxXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1twYXJzZUludChtYXRyaXhbNSArIGldKV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RJdGVtWzBdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFsxMCArIGldKV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RJdGVtW2xpc3RJdGVtLmxlbmd0aCAtIDFdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFtpXSldO1xuICAgICAgICAgICAgICAgICAgICAvLyBsaXN0SXRlbVtsaXN0SXRlbS5sZW5ndGggLSAyXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuc3ByRnJhbWVJdGVtc1twYXJzZUludChtYXRyaXhbNSArIGldKV07XG4gICAgICAgICAgICAgICAgICAgIC8vIGxpc3RJdGVtW2xpc3RJdGVtLmxlbmd0aCAtIDNdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5zcHJGcmFtZUl0ZW1zW3BhcnNlSW50KG1hdHJpeFsxMCArIGldKV07XG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlWzJdLmdldENvbXBvbmVudChTbG90MTBJdGVtKS5zZXRJZChwYXJzZUludChtYXRyaXhbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlWzFdLmdldENvbXBvbmVudChTbG90MTBJdGVtKS5zZXRJZChwYXJzZUludChtYXRyaXhbNSArIGldKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtTm9kZVswXS5nZXRDb21wb25lbnQoU2xvdDEwSXRlbSkuc2V0SWQocGFyc2VJbnQobWF0cml4WzEwICsgaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlW2xpc3RJdGVtTm9kZS5sZW5ndGggLSAxXS5nZXRDb21wb25lbnQoU2xvdDEwSXRlbSkuc2V0SWQocGFyc2VJbnQobWF0cml4W2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtTm9kZVtsaXN0SXRlbU5vZGUubGVuZ3RoIC0gMl0uZ2V0Q29tcG9uZW50KFNsb3QxMEl0ZW0pLnNldElkKHBhcnNlSW50KG1hdHJpeFs1ICsgaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlW2xpc3RJdGVtTm9kZS5sZW5ndGggLSAzXS5nZXRDb21wb25lbnQoU2xvdDEwSXRlbSkuc2V0SWQocGFyc2VJbnQobWF0cml4WzEwICsgaV0pKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgYWN0QmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kVW5TdWJjcmliZSh0aGlzLmJldElkeCkpO1xuXG5cbiAgICAgICAgdGhpcy5tU2xvdExvYmJ5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBhY3RIaWRkZW4oKSB7XG4gICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X2Z1bmN0aW9uX2luX2RldmVsb3BtZW50JykpO1xuICAgIH1cblxuICAgIGFjdEJldFVwKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgICAgICBpZiAoaXNUcmFpbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5iZXRJZHggPCB0aGlzLmxpc3RCZXQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5kYWlseUZyZWVTcGluID0gMDtcbiAgICAgICAgICAgIHRoaXMubGJsRnJlZVNwaW5Db3VudC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIFNsb3ROZXR3b3JrQ2xpZW50LmdldEluc3RhbmNlKCkuc2VuZChuZXcgY21kLlNlbmRDaGFuZ2VSb29tKHRoaXMuYmV0SWR4LCArK3RoaXMuYmV0SWR4KSk7XG4gICAgICAgICAgICB0aGlzLmxibEJldC5zdHJpbmcgPSB0aGlzLmxpc3RCZXRMYWJlbFt0aGlzLmJldElkeF07XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0LCB0aGlzLmFyckxpbmVTZWxlY3QubGVuZ3RoICogdGhpcy5saXN0QmV0W3RoaXMuYmV0SWR4XSwgMC4zLCAobikgPT4geyByZXR1cm4gdGhpcy5tb25leVRvSyhuKSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdEJldERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgICAgIGlmIChpc1RyYWlsKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJldElkeCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGFpbHlGcmVlU3BpbiA9IDA7XG4gICAgICAgICAgICB0aGlzLmxibEZyZWVTcGluQ291bnQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBTbG90TmV0d29ya0NsaWVudC5nZXRJbnN0YW5jZSgpLnNlbmQobmV3IGNtZC5TZW5kQ2hhbmdlUm9vbSh0aGlzLmJldElkeCwgLS10aGlzLmJldElkeCkpO1xuICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gdGhpcy5saXN0QmV0TGFiZWxbdGhpcy5iZXRJZHhdO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIDAuMywgKG4pID0+IHsgcmV0dXJuIHRoaXMubW9uZXlUb0sobikgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RMaW5lKCkge1xuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzVHJhaWwgPSB0aGlzLm1Jc1RyaWFsO1xuICAgICAgICBpZiAoaXNUcmFpbCkge1xuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoQXBwLmluc3RhbmNlLmdldFRleHRMYW5nKCd0eHRfc2xvdF9lcnJvcicpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcHVwU2VsZWN0TGluZS5zaG93KCk7XG4gICAgfVxuXG4gICAgYWN0U2V0dGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhbmVsU2V0dGluZy5hY3RpdmUgPSAhdGhpcy5wYW5lbFNldHRpbmcuYWN0aXZlO1xuICAgIH1cblxuICAgIHRvZ2dsZVRyaWFsT25DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubUlzVHJpYWwgPSAhdGhpcy5tSXNUcmlhbDtcblxuICAgICAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgICAgIGlmIChpc1RyYWlsKSB7XG4gICAgICAgICAgICB0aGlzLmJ0blBsYXlSZWFsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnRuUGxheVRyeS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYmxMaW5lLnN0cmluZyA9IFwiMjVcIjtcbiAgICAgICAgICAgIHRoaXMubGJsQmV0LnN0cmluZyA9IFwiMTAwXCI7XG4gICAgICAgICAgICBUd2Vlbi5udW1iZXJUbyh0aGlzLmxibFRvdGFsQmV0LCAyNTAwLCAwLjMsIChuKSA9PiB0aGlzLm1vbmV5VG9LKG4pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnRuUGxheVJlYWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYnRuUGxheVRyeS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxibExpbmUuc3RyaW5nID0gdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aC50b1N0cmluZygpO1xuICAgICAgICAgICAgdGhpcy5sYmxCZXQuc3RyaW5nID0gdGhpcy5saXN0QmV0TGFiZWxbdGhpcy5iZXRJZHhdO1xuICAgICAgICAgICAgVHdlZW4ubnVtYmVyVG8odGhpcy5sYmxUb3RhbEJldCwgdGhpcy5hcnJMaW5lU2VsZWN0Lmxlbmd0aCAqIHRoaXMubGlzdEJldFt0aGlzLmJldElkeF0sIDAuMywgKG4pID0+IHRoaXMubW9uZXlUb0sobikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQXV0b09uQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXNUcmFpbCA9IHRoaXMubUlzVHJpYWw7XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUF1dG8uaXNDaGVja2VkICYmIGlzVHJhaWwpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KEFwcC5pbnN0YW5jZS5nZXRUZXh0TGFuZygndHh0X3Nsb3RfZXJyb3InKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlQXV0by5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BpbigpO1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCb29zdC5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUJvb3N0T25DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpc1RyYWlsID0gdGhpcy5tSXNUcmlhbDtcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkICYmIGlzVHJhaWwpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQm9vc3QuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdChBcHAuaW5zdGFuY2UuZ2V0VGV4dExhbmcoJ3R4dF9zbG90X2Vycm9yJykpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUJvb3N0LmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5zcGluKCk7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG8uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3BpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRFbmFibGVkQWxsQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbXVzaWMgc2V0dGluZ1xuXG4gICAgcHJpdmF0ZSBzb3VuZEluaXQoKSB7XG4gICAgICAgIC8vIG11c2ljU2F2ZSA6ICAgMCA9PSBPRkYgLCAxID09IE9OXG4gICAgICAgIHZhciBtdXNpY1NhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtdXNpY19TbG90XzdcIik7XG4gICAgICAgIGlmIChtdXNpY1NhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY1Nsb3RTdGF0ZSA9IHBhcnNlSW50KG11c2ljU2F2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljU2xvdFN0YXRlID0gMTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljX1Nsb3RfN1wiLCBcIjFcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb3VuZFNhdmUgOiAgIDAgPT0gT0ZGICwgMSA9PSBPTlxuICAgICAgICB2YXIgc291bmRTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic291bmRfU2xvdF83XCIpO1xuICAgICAgICBpZiAoc291bmRTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzb3VuZF9TbG90XzdcIiwgXCIxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNTbG90U3RhdGUgPT0gMCkge1xuICAgICAgICAgICAgLy90aGlzLm11c2ljT2ZmLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3RoaXMubXVzaWNPZmYuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zb3VuZFNsb3RTdGF0ZSA9PSAwKSB7XG4gICAgICAgICAgICAvL3RoaXMuc291bmRPZmYuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vdGhpcy5zb3VuZE9mZi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm11c2ljU2xvdFN0YXRlID09IDEpIHtcblxuICAgICAgICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXR0aW5nTXVzaWMoKSB7XG4gICAgICAgIC8vdGhpcy5tdXNpY09mZi5hY3RpdmUgPSAhdGhpcy5tdXNpY09mZi5hY3RpdmU7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGdlTXVzaWMuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMucmVtb3RlTXVzaWNCYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdGVNdXNpY0JhY2tncm91bmQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5zb3VuZEJnLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMubXVzaWNTbG90U3RhdGUgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljX1Nsb3RfN1wiLCBcIlwiICsgdGhpcy5tdXNpY1Nsb3RTdGF0ZSk7XG4gICAgfVxuICAgIHNldHRpbmdTb3VuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc291bmRTbG90U3RhdGUgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnNvdW5kU2xvdFN0YXRlID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljX1Nsb3RfN1wiLCBcIlwiICsgdGhpcy5zb3VuZFNsb3RTdGF0ZSk7XG4gICAgfVxuICAgIGNoYW5nZUFsbEl0ZW1Ub0Rhcmsoc3RhdGUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlZWxzLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNvbCA9IHRoaXMucmVlbHMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbC5jaGlsZHJlbkNvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IGNvbC5jaGlsZHJlbltqXTtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IHNwaW5lID0gaXRlbS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKHNwLlNrZWxldG9uKTtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmNvbG9yID0gc3RhdGUgPyBjYy5Db2xvci5HUkFZIDogY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuY29sb3IgPSBzdGF0ZSA/IGNjLkNvbG9yLkdSQVkgOiBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgICAgICBzcGluZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRJdGVtV2luSW5MaW5lKGxpbmVJZCkge1xuICAgICAgICBsZXQgbGluZUFyciA9IHRoaXMubWFwTGluZVtsaW5lSWRdO1xuICAgICAgICBsZXQgYXJySXRlbSA9IFtdO1xuICAgICAgICB0aGlzLmFyclJlYWxJdGVtID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hcnJSZWFsSXRlbS5wdXNoKHRoaXMuYXJyVUlJdGVtSWNvbltpICsgNV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZUFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJySXRlbS5wdXNoKHRoaXMuYXJyUmVhbEl0ZW1bbGluZUFycltpXV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJJdGVtO1xuICAgIH1cbiAgICBnZXRJdGVtSWRXaW5JbkxpbmUoYXJySWQ6IEFycmF5PG51bWJlcj4pIHtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IGlkV2luID0gLTE7XG4gICAgICAgIGFycklkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGFycklkLmZpbHRlcih4ID0+IHggPT0gaWQgJiYgeCAhPSAxKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoc2l6ZSA+PSBjb3VudCkge1xuICAgICAgICAgICAgICAgIGNvdW50ID0gc2l6ZTtcbiAgICAgICAgICAgICAgICBpZFdpbiA9IGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaWRXaW47XG4gICAgfVxufVxuIl19