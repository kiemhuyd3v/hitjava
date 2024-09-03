"use strict";
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